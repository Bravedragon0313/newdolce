"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var operators_1 = require("rxjs/operators");
var router_1 = require("../lib/router");
var lodash_1 = tslib_1.__importDefault(require("lodash"));
var core_1 = require("@angular/core");
var Order_1 = tslib_1.__importDefault(require("@modules/server.common/entities/Order"));
var GeoLocationOrdersRouter = (function () {
    function GeoLocationOrdersRouter(routerFactory) {
        this.router = routerFactory.create('geo-location-orders');
    }
    GeoLocationOrdersRouter.prototype.get = function (geoLocation, options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        return this.router
            .runAndObserve('get', geoLocation, options)
            .pipe(operators_1.map(function (orders) {
            return lodash_1.default.map(orders, function (order) { return _this._orderFactory(order); });
        }));
    };
    GeoLocationOrdersRouter.prototype._orderFactory = function (order) {
        return order == null ? null : new Order_1.default(order);
    };
    GeoLocationOrdersRouter = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [router_1.RouterFactory])
    ], GeoLocationOrdersRouter);
    return GeoLocationOrdersRouter;
}());
exports.GeoLocationOrdersRouter = GeoLocationOrdersRouter;
//# sourceMappingURL=geo-location-orders-router.service.js.map