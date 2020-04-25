"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var lodash_1 = tslib_1.__importDefault(require("lodash"));
var operators_1 = require("rxjs/operators");
var router_1 = require("../lib/router");
var core_1 = require("@angular/core");
var Warehouse_1 = tslib_1.__importDefault(require("@modules/server.common/entities/Warehouse"));
var GeoLocationWarehousesRouter = (function () {
    function GeoLocationWarehousesRouter(routerFactory) {
        this.router = routerFactory.create('geo-location-warehouses');
    }
    GeoLocationWarehousesRouter.prototype.get = function (geoLocation, options) {
        var _this = this;
        return this.router
            .runAndObserve('get', geoLocation, options)
            .pipe(operators_1.map(function (warehouses) {
            return lodash_1.default.map(warehouses, function (warehouse) {
                return _this._warehouseFactory(warehouse);
            });
        }));
    };
    GeoLocationWarehousesRouter.prototype._warehouseFactory = function (warehouse) {
        return warehouse == null ? null : new Warehouse_1.default(warehouse);
    };
    GeoLocationWarehousesRouter = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [router_1.RouterFactory])
    ], GeoLocationWarehousesRouter);
    return GeoLocationWarehousesRouter;
}());
exports.GeoLocationWarehousesRouter = GeoLocationWarehousesRouter;
//# sourceMappingURL=geo-location-warehouses-router.service.js.map