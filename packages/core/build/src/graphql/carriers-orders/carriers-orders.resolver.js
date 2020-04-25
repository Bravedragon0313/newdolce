"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const carriers_1 = require("../../services/carriers");
const Order_1 = tslib_1.__importDefault(require("@modules/server.common/entities/Order"));
let CarriersOrdersResolver = class CarriersOrdersResolver {
    constructor(_carriersOrdersService) {
        this._carriersOrdersService = _carriersOrdersService;
    }
    getCarrierOrders(_, { carrierId, options, }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this._carriersOrdersService.getCarrierOrders(carrierId, options);
        });
    }
    getCarrierCurrentOrder(_, { carrierId }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const dbOrder = yield this._carriersOrdersService.getCarrierCurrentOrder(carrierId);
            return dbOrder !== null ? new Order_1.default(dbOrder) : null;
        });
    }
    getCarrierOrdersHistory(_, { carrierId, options, }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this._carriersOrdersService.getCarrierOrdersHistory(carrierId, options);
        });
    }
    getCountOfCarrierOrdersHistory(_, { carrierId }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this._carriersOrdersService.getCountOfCarrierOrdersHistory(carrierId);
        });
    }
};
tslib_1.__decorate([
    graphql_1.Query('getCarrierOrders'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CarriersOrdersResolver.prototype, "getCarrierOrders", null);
tslib_1.__decorate([
    graphql_1.Query('getCarrierCurrentOrder'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CarriersOrdersResolver.prototype, "getCarrierCurrentOrder", null);
tslib_1.__decorate([
    graphql_1.Query('getCarrierOrdersHistory'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CarriersOrdersResolver.prototype, "getCarrierOrdersHistory", null);
tslib_1.__decorate([
    graphql_1.Query('getCountOfCarrierOrdersHistory'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CarriersOrdersResolver.prototype, "getCountOfCarrierOrdersHistory", null);
CarriersOrdersResolver = tslib_1.__decorate([
    graphql_1.Resolver('CarriersOrders'),
    tslib_1.__metadata("design:paramtypes", [carriers_1.CarriersOrdersService])
], CarriersOrdersResolver);
exports.CarriersOrdersResolver = CarriersOrdersResolver;
//# sourceMappingURL=carriers-orders.resolver.js.map