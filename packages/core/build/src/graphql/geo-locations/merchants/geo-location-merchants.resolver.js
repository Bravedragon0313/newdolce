"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const geo_locations_1 = require("../../../services/geo-locations");
const Warehouse_1 = tslib_1.__importDefault(require("@modules/server.common/entities/Warehouse"));
const utils_1 = tslib_1.__importDefault(require("@modules/server.common/utils"));
const GeoLocation_1 = tslib_1.__importDefault(require("@modules/server.common/entities/GeoLocation"));
const IN_STORE_DISTANCE = 50;
let GeoLocationMerchantsResolver = class GeoLocationMerchantsResolver {
    constructor(geoLocationsWarehousesService) {
        this.geoLocationsWarehousesService = geoLocationsWarehousesService;
    }
    getCoseMerchants(_, { geoLocation }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            let merchants = yield this.geoLocationsWarehousesService.getMerchants(geoLocation, IN_STORE_DISTANCE, { fullProducts: false, activeOnly: true });
            merchants = merchants.sort((m1, m2) => utils_1.default.getDistance(new GeoLocation_1.default(m1.geoLocation), new GeoLocation_1.default(geoLocation)) -
                utils_1.default.getDistance(new GeoLocation_1.default(m2.geoLocation), new GeoLocation_1.default(geoLocation)));
            return merchants.map((m) => new Warehouse_1.default(m));
        });
    }
};
tslib_1.__decorate([
    graphql_1.Query('getCoseMerchants'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], GeoLocationMerchantsResolver.prototype, "getCoseMerchants", null);
GeoLocationMerchantsResolver = tslib_1.__decorate([
    graphql_1.Resolver('GeoLocationMerchants'),
    tslib_1.__metadata("design:paramtypes", [geo_locations_1.GeoLocationsWarehousesService])
], GeoLocationMerchantsResolver);
exports.GeoLocationMerchantsResolver = GeoLocationMerchantsResolver;
//# sourceMappingURL=geo-location-merchants.resolver.js.map