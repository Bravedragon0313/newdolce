"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const geo_location_merchants_resolver_1 = require("./geo-location-merchants.resolver");
let GeoLocationMerchantsModule = class GeoLocationMerchantsModule {
};
GeoLocationMerchantsModule = tslib_1.__decorate([
    common_1.Module({
        providers: [geo_location_merchants_resolver_1.GeoLocationMerchantsResolver],
    })
], GeoLocationMerchantsModule);
exports.GeoLocationMerchantsModule = GeoLocationMerchantsModule;
//# sourceMappingURL=geo-location-merchants.module.js.map