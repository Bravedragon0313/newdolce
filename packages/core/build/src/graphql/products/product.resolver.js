"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const operators_1 = require("rxjs/operators");
const products_1 = require("../../services/products");
const warehouses_1 = require("../../services/warehouses");
const Product_1 = tslib_1.__importDefault(require("@modules/server.common/entities/Product"));
let ProductResolver = class ProductResolver {
    constructor(_productsService, _warehousesService, _warehousesProductsService) {
        this._productsService = _productsService;
        this._warehousesService = _warehousesService;
        this._warehousesProductsService = _warehousesProductsService;
    }
    getProduct(_, { id }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this._productsService.get(id).pipe(operators_1.first()).toPromise();
        });
    }
    getProducts(_, { findInput, pagingOptions = {}, existedProductsIds = [] }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (!pagingOptions || (pagingOptions && !pagingOptions['sort'])) {
                pagingOptions['sort'] = { field: '_createdAt', sortBy: 'desc' };
            }
            const products = yield this._productsService.getProducts(findInput, pagingOptions, existedProductsIds);
            return products.map((p) => new Product_1.default(p));
        });
    }
    getCountOfProducts(_, { existedProductsIds = [] }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this._productsService.Model.find({
                isDeleted: { $eq: false },
                _id: { $nin: existedProductsIds },
            })
                .countDocuments()
                .exec();
        });
    }
    removeProductsByIds(_, { ids }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const warehouses = yield this._warehousesService.find({
                isDeleted: { $eq: false },
            });
            const products = yield this._productsService.find({
                _id: { $in: ids },
                isDeleted: { $eq: false },
            });
            const productsIds = products.map((d) => d.id);
            for (const warehouse of warehouses) {
                const productsForDel = warehouse.products
                    .filter((p) => productsIds.includes(p.productId))
                    .map((p) => p.productId);
                if (productsForDel.length > 0) {
                    yield this._warehousesProductsService.remove(warehouse.id, productsForDel);
                }
            }
            yield this._productsService.removeMultipleByIds(productsIds);
        });
    }
    saveProduct(_, { product }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const productId = product['_id'];
            yield this._productsService.throwIfNotExists(productId);
            product.id = productId;
            return this._productsService.save(product);
        });
    }
    createProduct(_, { product }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this._productsService.create(product);
        });
    }
};
tslib_1.__decorate([
    graphql_1.Query('product'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductResolver.prototype, "getProduct", null);
tslib_1.__decorate([
    graphql_1.Query('products'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductResolver.prototype, "getProducts", null);
tslib_1.__decorate([
    graphql_1.Query(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductResolver.prototype, "getCountOfProducts", null);
tslib_1.__decorate([
    graphql_1.Mutation(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductResolver.prototype, "removeProductsByIds", null);
tslib_1.__decorate([
    graphql_1.Mutation(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductResolver.prototype, "saveProduct", null);
tslib_1.__decorate([
    graphql_1.Mutation(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductResolver.prototype, "createProduct", null);
ProductResolver = tslib_1.__decorate([
    graphql_1.Resolver('Product'),
    tslib_1.__metadata("design:paramtypes", [products_1.ProductsService,
        warehouses_1.WarehousesService,
        warehouses_1.WarehousesProductsService])
], ProductResolver);
exports.ProductResolver = ProductResolver;
//# sourceMappingURL=product.resolver.js.map