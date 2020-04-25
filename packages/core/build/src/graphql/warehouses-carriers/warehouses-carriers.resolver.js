"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const warehouses_1 = require("../../services/warehouses");
const operators_1 = require("rxjs/operators");
let WarehouseCarriersResolver = class WarehouseCarriersResolver {
    constructor(_warehousesCarriersService) {
        this._warehousesCarriersService = _warehousesCarriersService;
    }
    getStoreCarriers(_, { storeId }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const result = yield this._warehousesCarriersService
                .get(storeId)
                .pipe(operators_1.first())
                .toPromise();
            return result;
        });
    }
};
tslib_1.__decorate([
    graphql_1.Query(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], WarehouseCarriersResolver.prototype, "getStoreCarriers", null);
WarehouseCarriersResolver = tslib_1.__decorate([
    graphql_1.Resolver('WarehouseCarriers'),
    tslib_1.__metadata("design:paramtypes", [warehouses_1.WarehousesCarriersService])
], WarehouseCarriersResolver);
exports.WarehouseCarriersResolver = WarehouseCarriersResolver;
//# sourceMappingURL=warehouses-carriers.resolver.js.map