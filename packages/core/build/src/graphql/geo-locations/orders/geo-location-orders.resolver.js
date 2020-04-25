"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const GeoLocationsOrdersService_1 = require("../../../services/geo-locations/GeoLocationsOrdersService");
const Order_1 = tslib_1.__importDefault(require("@modules/server.common/entities/Order"));
let GeoLocationOrdersResolver = class GeoLocationOrdersResolver {
    constructor(geoLocationsOrdersService) {
        this.geoLocationsOrdersService = geoLocationsOrdersService;
    }
    getOrderForWork(_, { geoLocation, skippedOrderIds, options, searchObj, }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const orders = yield this.geoLocationsOrdersService.getOrdersForWork(geoLocation, skippedOrderIds, options, searchObj);
            return orders[0];
        });
    }
    getOrdersForWork(_, { geoLocation, skippedOrderIds, options, searchObj, }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const orders = yield this.geoLocationsOrdersService.getOrdersForWork(geoLocation, skippedOrderIds, options, searchObj);
            return orders.map((o) => new Order_1.default(o));
        });
    }
    getCountOfOrdersForWork(_, { geoLocation, skippedOrderIds, searchObj, }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.geoLocationsOrdersService.getCountOfOrdersForWork(geoLocation, skippedOrderIds, searchObj);
        });
    }
};
tslib_1.__decorate([
    graphql_1.Query('getOrderForWork'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], GeoLocationOrdersResolver.prototype, "getOrderForWork", null);
tslib_1.__decorate([
    graphql_1.Query('getOrdersForWork'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], GeoLocationOrdersResolver.prototype, "getOrdersForWork", null);
tslib_1.__decorate([
    graphql_1.Query(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], GeoLocationOrdersResolver.prototype, "getCountOfOrdersForWork", null);
GeoLocationOrdersResolver = tslib_1.__decorate([
    graphql_1.Resolver('GeoLocationOrders'),
    tslib_1.__metadata("design:paramtypes", [GeoLocationsOrdersService_1.GeoLocationsOrdersService])
], GeoLocationOrdersResolver);
exports.GeoLocationOrdersResolver = GeoLocationOrdersResolver;
//# sourceMappingURL=geo-location-orders.resolver.js.map