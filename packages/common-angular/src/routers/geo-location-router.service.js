"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("../lib/router");
var GeoLocationRouter = (function () {
    function GeoLocationRouter(routerFactory) {
        this.router = routerFactory.create('geo-location');
    }
    GeoLocationRouter.prototype.getAddressByCoordinatesUsingArcGIS = function (lat, lng) {
        return this.router.run('getAddressByCoordinatesUsingArcGIS', lat, lng);
    };
    GeoLocationRouter = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [router_1.RouterFactory])
    ], GeoLocationRouter);
    return GeoLocationRouter;
}());
exports.GeoLocationRouter = GeoLocationRouter;
//# sourceMappingURL=geo-location-router.service.js.map