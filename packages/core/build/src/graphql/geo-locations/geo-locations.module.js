"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const geo_location_resolver_1 = require("./geo-location.resolver");
let GeoLocationsModule = class GeoLocationsModule {
};
GeoLocationsModule = tslib_1.__decorate([
    common_1.Module({
        providers: [geo_location_resolver_1.GeoLocationResolver],
    })
], GeoLocationsModule);
exports.GeoLocationsModule = GeoLocationsModule;
//# sourceMappingURL=geo-locations.module.js.map