"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const geo_location_orders_resolver_1 = require("./geo-location-orders.resolver");
let GeoLocationOrdersModule = class GeoLocationOrdersModule {
};
GeoLocationOrdersModule = tslib_1.__decorate([
    common_1.Module({
        providers: [geo_location_orders_resolver_1.GeoLocationOrdersResolver],
    })
], GeoLocationOrdersModule);
exports.GeoLocationOrdersModule = GeoLocationOrdersModule;
//# sourceMappingURL=geo-location-orders.module.js.map