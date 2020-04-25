"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const warehouses_1 = require("../../services/warehouses");
const handlebars_1 = require("handlebars");
const WarehouseProduct_1 = tslib_1.__importDefault(require("@modules/server.common/entities/WarehouseProduct"));
const operators_1 = require("rxjs/operators");
let WarehouseProductsResolver = class WarehouseProductsResolver {
    constructor(_warehousesProductsService) {
        this._warehousesProductsService = _warehousesProductsService;
    }
    getProductsWithPagination(_, { id, pagingOptions = {} }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const warehouseProducts = yield this._warehousesProductsService.getProductsWithPagination(id, pagingOptions);
            return warehouseProducts.map((p) => new WarehouseProduct_1.default(p));
        });
    }
    getProductsCount(_, { id }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this._warehousesProductsService.getProductsCount(id);
        });
    }
    getWarehouseProduct(_, { warehouseId, warehouseProductId, }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this._warehousesProductsService
                .getProduct(warehouseId, warehouseProductId)
                .pipe(operators_1.first())
                .toPromise();
        });
    }
    addWarehouseProducts(_, { warehouseId, products, }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this._warehousesProductsService.add(warehouseId, products);
        });
    }
    removeWarehouseProducts(_, { warehouseId, productsIds, }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this._warehousesProductsService.remove(warehouseId, productsIds);
        });
    }
    updateWarehouseProduct(_, { warehouseId, productId, updateInput, }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            throw new handlebars_1.Exception('not implemented');
        });
    }
};
tslib_1.__decorate([
    graphql_1.Query(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], WarehouseProductsResolver.prototype, "getProductsWithPagination", null);
tslib_1.__decorate([
    graphql_1.Query(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], WarehouseProductsResolver.prototype, "getProductsCount", null);
tslib_1.__decorate([
    graphql_1.Query(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], WarehouseProductsResolver.prototype, "getWarehouseProduct", null);
tslib_1.__decorate([
    graphql_1.Mutation(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], WarehouseProductsResolver.prototype, "addWarehouseProducts", null);
tslib_1.__decorate([
    graphql_1.Mutation(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], WarehouseProductsResolver.prototype, "removeWarehouseProducts", null);
tslib_1.__decorate([
    graphql_1.Mutation(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], WarehouseProductsResolver.prototype, "updateWarehouseProduct", null);
WarehouseProductsResolver = tslib_1.__decorate([
    graphql_1.Resolver('Warehouse-products'),
    tslib_1.__metadata("design:paramtypes", [warehouses_1.WarehousesProductsService])
], WarehouseProductsResolver);
exports.WarehouseProductsResolver = WarehouseProductsResolver;
//# sourceMappingURL=warehouse-products.resolver.js.map