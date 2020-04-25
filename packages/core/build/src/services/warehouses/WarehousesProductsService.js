"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const inversify_1 = require("inversify");
const Log_1 = require("../../helpers/Log");
const WarehouseProduct_1 = tslib_1.__importDefault(require("@modules/server.common/entities/WarehouseProduct"));
const WarehousesService_1 = require("./WarehousesService");
const lodash_1 = tslib_1.__importDefault(require("lodash"));
const Warehouse_1 = tslib_1.__importDefault(require("@modules/server.common/entities/Warehouse"));
const db_server_1 = require("@pyro/db-server");
const rxjs_1 = require("rxjs");
const io_1 = require("@pyro/io");
const operators_1 = require("rxjs/operators");
const of_1 = require("rxjs/observable/of");
const throw_1 = require("rxjs/observable/throw");
const mongoose = require("mongoose");
const noGetProductTypeMessage = `There should be true at least one of the two - "isCarrierRequired" or "isTakeaway"!`;
let WarehousesProductsService = class WarehousesProductsService {
    constructor(warehousesService) {
        this.warehousesService = warehousesService;
        this.log = Log_1.createEverLogger({
            name: 'warehouseProductsService',
        });
    }
    get(warehouseId, fullProducts = true) {
        return this.warehousesService.get(warehouseId, fullProducts).pipe(operators_1.exhaustMap((warehouse) => {
            if (warehouse === null) {
                return throw_1._throw(new Error(`Warehouse with the id ${warehouseId} doesn't exist`));
            }
            else {
                return of_1.of(warehouse);
            }
        }), operators_1.map((warehouse) => warehouse.products));
    }
    getProductsWithPagination(id, pagingOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const allProducts = yield this.get(id).pipe(operators_1.first()).toPromise();
            const products = [...allProducts];
            if (pagingOptions.limit && pagingOptions.skip) {
                return products
                    .slice(pagingOptions.skip)
                    .slice(0, pagingOptions.limit)
                    .sort((a, b) => b.soldCount - a.soldCount);
            }
            else if (pagingOptions.limit) {
                return products
                    .slice(0, pagingOptions.limit)
                    .sort((a, b) => b.soldCount - a.soldCount);
            }
            else if (pagingOptions.skip) {
                return products
                    .slice(pagingOptions.skip)
                    .sort((a, b) => b.soldCount - a.soldCount);
            }
            return products.sort((a, b) => b.soldCount - a.soldCount);
        });
    }
    getProductsCount(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const allProducts = yield this.get(id).pipe(operators_1.first()).toPromise();
            return allProducts.length;
        });
    }
    getAvailable(warehouseId) {
        return this.get(warehouseId).pipe(operators_1.map((warehouseProducts) => lodash_1.default.filter(warehouseProducts, (warehouseProduct) => warehouseProduct.count > 0)));
    }
    remove(warehouseId, productsIds) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.log.info('Removing products ' + productsIds);
            const warehouse = yield this.warehousesService
                .get(warehouseId, true)
                .pipe(operators_1.first())
                .toPromise();
            if (warehouse == null) {
                throw new Error(`There is no warehouse with the id ${warehouse}!`);
            }
            warehouse.products = warehouse.products.filter((p) => {
                if (!p.product['_id']) {
                    return false;
                }
                const productId = p.product['id'];
                return !productsIds.includes(productId);
            });
            yield this.warehousesService.save(warehouse);
            return warehouse.products;
        });
    }
    add(warehouseId, products, triggerChange = true) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.log.info('Adding products ' + JSON.stringify(products));
            let warehouse = yield this.warehousesService
                .get(warehouseId, false)
                .pipe(operators_1.first())
                .toPromise();
            if (warehouse == null) {
                throw new Error(`There is no warehouse with the id ${warehouse}!`);
            }
            const notUpdatedWarehouse = lodash_1.default.clone(warehouse);
            let newProds;
            if (warehouse.products && warehouse.products.length > 0) {
                newProds = lodash_1.default.clone(warehouse.products);
                lodash_1.default.each(products, (product) => {
                    if (!product.isDeliveryRequired && !product.isTakeaway) {
                        product.isDeliveryRequired = true;
                    }
                    const existed = lodash_1.default.find(newProds, (newProd) => newProd.product ===
                        product.product);
                    if (typeof existed === 'undefined' ||
                        existed === undefined ||
                        existed == null) {
                        newProds.push(product);
                    }
                    else {
                        if (existed.count && product.count) {
                            existed.count += product.count;
                        }
                        else {
                            existed.count = product.count;
                        }
                    }
                });
            }
            else {
                newProds = products;
            }
            try {
                warehouse = new Warehouse_1.default((yield this.warehousesService.Model.findByIdAndUpdate(warehouseId, {
                    $set: { products: newProds },
                }, { new: true })
                    .populate('products.product')
                    .lean()
                    .exec()));
            }
            catch (error) {
                this.log.error(error);
                throw error;
            }
            if (triggerChange) {
                this.warehousesService.existence.next({
                    id: warehouse.id,
                    value: warehouse,
                    lastValue: notUpdatedWarehouse,
                    type: db_server_1.ExistenceEventType.Updated,
                });
            }
            const newProdsIds = lodash_1.default.map(newProds, (warehouseProduct) => {
                if (typeof warehouseProduct.product === 'string') {
                    return warehouseProduct.product;
                }
                else {
                    return warehouseProduct.product._id.toString();
                }
            });
            return lodash_1.default.filter(warehouse.products, (warehouseProduct) => {
                return lodash_1.default.includes(newProdsIds, warehouseProduct.productId);
            });
        });
    }
    increaseCount(warehouseId, productId, count) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const warehouse = yield this.warehousesService
                .get(warehouseId)
                .pipe(operators_1.first())
                .toPromise();
            if (warehouse) {
                const existedProduct = lodash_1.default.find(warehouse.products, (warehouseProduct) => warehouseProduct.productId === productId);
                if (existedProduct) {
                    existedProduct.count += count;
                    return this.saveUpdated(warehouseId, existedProduct);
                }
                else {
                    const errMsg = 'Cannot find product';
                    this.log.error(new Error(errMsg));
                    throw new Error(errMsg);
                }
            }
            else {
                const errMsg = 'Cannot find warehouse';
                this.log.error(new Error(errMsg));
                throw new Error(errMsg);
            }
        });
    }
    increaseSoldCount(warehouseId, productId, count) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const warehouse = yield this.warehousesService
                .get(warehouseId)
                .pipe(operators_1.first())
                .toPromise();
            if (warehouse) {
                const existedProduct = lodash_1.default.find(warehouse.products, (warehouseProduct) => warehouseProduct.productId === productId);
                if (existedProduct) {
                    existedProduct.soldCount += count;
                    return this.saveUpdated(warehouseId, existedProduct);
                }
                else {
                    const errMsg = 'Cannot find product';
                    this.log.error(new Error(errMsg));
                    throw new Error(errMsg);
                }
            }
            else {
                const errMsg = 'Cannot find warehouse';
                this.log.error(new Error(errMsg));
                throw new Error(errMsg);
            }
        });
    }
    saveUpdated(warehouseId, _updatedWarehouseProduct) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.warehousesService.throwIfNotExists(warehouseId);
            if (!_updatedWarehouseProduct.isDeliveryRequired &&
                !_updatedWarehouseProduct.isTakeaway) {
                throw new Error(noGetProductTypeMessage);
            }
            const updatedWarehouseProduct = lodash_1.default.clone(_updatedWarehouseProduct);
            updatedWarehouseProduct.product = updatedWarehouseProduct.productId;
            const updatedWarehouse = (yield this.warehousesService.updateMultiple({
                _id: new mongoose.Types.ObjectId(warehouseId),
                'products._id': updatedWarehouseProduct._id,
            }, {
                'products.$': updatedWarehouseProduct,
            }))[0];
            return lodash_1.default.find(updatedWarehouse.products, (warehouseProduct) => warehouseProduct.productId === updatedWarehouseProduct.productId);
        });
    }
    changePrice(warehouseId, productId, price) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const warehouse = yield this.warehousesService
                .get(warehouseId, false)
                .pipe(operators_1.first())
                .toPromise();
            if (warehouse == null) {
                throw new Error(`There is no such an warehouse with the id ${warehouseId}`);
            }
            this.log.info('Change product price requested in warehouse: ' +
                JSON.stringify(warehouse) +
                ' for product id: ' +
                productId);
            const product = lodash_1.default.find(warehouse.products, (p) => p.productId === productId);
            if (product != null) {
                this.log.info(`Product price before: ${product.price} and we want to change it to: ${price}`);
                product.price = price;
                return this.saveUpdated(warehouseId, product);
            }
            else {
                throw new Error(`There is no such an product with the id ${productId} in the warehouse with the id ${warehouseId}`);
            }
        });
    }
    decreaseCount(warehouseId, productId, count) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const warehouse = yield this.warehousesService
                .get(warehouseId)
                .pipe(operators_1.first())
                .toPromise();
            if (warehouse == null) {
                throw new Error(`Cannot find warehouse: ${warehouseId}`);
            }
            this.log.info(`Remove requested in warehouse: ${JSON.stringify(warehouse)} for product id: ${productId}`);
            const product = lodash_1.default.find(warehouse.products, (p) => p.productId === productId);
            if (product != null) {
                this.log.info(`Product count before remove: ${product.count} and we want to remove ${count} products`);
                if (product.count >= count) {
                    product.count -= count;
                    return this.saveUpdated(warehouseId, product);
                }
                else {
                    const errorMsg = 'Request to remove more products than available';
                    this.log.error({
                        err: new Error(errorMsg),
                        product,
                        count,
                    });
                    throw new Error(errorMsg);
                }
            }
            else {
                throw new Error(`There is no such an product with the id ${productId} in the warehouse with the id ${warehouseId}`);
            }
        });
    }
    decreaseSoldCount(warehouseId, productId, count) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const warehouse = yield this.warehousesService
                .get(warehouseId)
                .pipe(operators_1.first())
                .toPromise();
            if (warehouse == null) {
                throw new Error(`Cannot find warehouse: ${warehouseId}`);
            }
            this.log.info(`Remove requested in warehouse: ${JSON.stringify(warehouse)} for product id: ${productId}`);
            const product = lodash_1.default.find(warehouse.products, (p) => p.productId === productId);
            if (product != null) {
                this.log.info(`Product sold count before decrease: ${product.soldCount} and we want to decrease ${count} products`);
                if (product.soldCount >= count) {
                    product.soldCount -= count;
                    return this.saveUpdated(warehouseId, product);
                }
                else {
                    const errorMsg = 'Request to decrease count of more products than available';
                    this.log.error({
                        err: new Error(errorMsg),
                        product,
                        count,
                    });
                    throw new Error(errorMsg);
                }
            }
            else {
                throw new Error(`There is no such an product with the id ${productId} in the warehouse with the id ${warehouseId}`);
            }
        });
    }
    getTopProducts(warehouseId, quantity) {
        return this.get(warehouseId).pipe(operators_1.map((warehouseProducts) => {
            let topProducts = lodash_1.default.filter(warehouseProducts, (warehouseProduct) => warehouseProduct.soldCount > 0);
            topProducts = lodash_1.default.orderBy(topProducts, ['soldCount'], ['desc']);
            return lodash_1.default.take(topProducts, quantity);
        }));
    }
    getProduct(warehouseId, warehouseProductId) {
        return this.warehousesService.get(warehouseId, true).pipe(operators_1.exhaustMap((warehouse) => {
            if (warehouse === null) {
                return throw_1._throw(new Error(`Warehouse with the id ${warehouseId} doesn't exist`));
            }
            else {
                return of_1.of(warehouse);
            }
        }), operators_1.map((warehouse) => warehouse.products.find((p) => p.id === warehouseProductId)));
    }
};
tslib_1.__decorate([
    io_1.observableListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Boolean]),
    tslib_1.__metadata("design:returntype", rxjs_1.Observable)
], WarehousesProductsService.prototype, "get", null);
tslib_1.__decorate([
    io_1.asyncListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], WarehousesProductsService.prototype, "getProductsWithPagination", null);
tslib_1.__decorate([
    io_1.asyncListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], WarehousesProductsService.prototype, "getProductsCount", null);
tslib_1.__decorate([
    io_1.observableListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", rxjs_1.Observable)
], WarehousesProductsService.prototype, "getAvailable", null);
tslib_1.__decorate([
    io_1.asyncListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Array]),
    tslib_1.__metadata("design:returntype", Promise)
], WarehousesProductsService.prototype, "remove", null);
tslib_1.__decorate([
    io_1.asyncListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Array, Boolean]),
    tslib_1.__metadata("design:returntype", Promise)
], WarehousesProductsService.prototype, "add", null);
tslib_1.__decorate([
    io_1.asyncListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, String, Number]),
    tslib_1.__metadata("design:returntype", Promise)
], WarehousesProductsService.prototype, "increaseCount", null);
tslib_1.__decorate([
    io_1.asyncListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, String, Number]),
    tslib_1.__metadata("design:returntype", Promise)
], WarehousesProductsService.prototype, "increaseSoldCount", null);
tslib_1.__decorate([
    io_1.asyncListener(),
    tslib_1.__param(1, io_1.serialization((u) => new WarehouseProduct_1.default(u))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, WarehouseProduct_1.default]),
    tslib_1.__metadata("design:returntype", Promise)
], WarehousesProductsService.prototype, "saveUpdated", null);
tslib_1.__decorate([
    io_1.asyncListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, String, Number]),
    tslib_1.__metadata("design:returntype", Promise)
], WarehousesProductsService.prototype, "changePrice", null);
tslib_1.__decorate([
    io_1.asyncListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, String, Number]),
    tslib_1.__metadata("design:returntype", Promise)
], WarehousesProductsService.prototype, "decreaseCount", null);
tslib_1.__decorate([
    io_1.asyncListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, String, Number]),
    tslib_1.__metadata("design:returntype", Promise)
], WarehousesProductsService.prototype, "decreaseSoldCount", null);
tslib_1.__decorate([
    io_1.observableListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Number]),
    tslib_1.__metadata("design:returntype", rxjs_1.Observable)
], WarehousesProductsService.prototype, "getTopProducts", null);
tslib_1.__decorate([
    io_1.observableListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, String]),
    tslib_1.__metadata("design:returntype", rxjs_1.Observable)
], WarehousesProductsService.prototype, "getProduct", null);
WarehousesProductsService = tslib_1.__decorate([
    inversify_1.injectable(),
    io_1.routerName('warehouse-products'),
    tslib_1.__metadata("design:paramtypes", [WarehousesService_1.WarehousesService])
], WarehousesProductsService);
exports.WarehousesProductsService = WarehousesProductsService;
//# sourceMappingURL=WarehousesProductsService.js.map