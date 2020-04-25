"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var lodash_1 = tslib_1.__importDefault(require("lodash"));
var operators_1 = require("rxjs/operators");
var router_1 = require("../lib/router");
var core_1 = require("@angular/core");
var ProductInfo_1 = tslib_1.__importDefault(require("@modules/server.common/entities/ProductInfo"));
var GeoLocationProductsRouter = (function () {
    function GeoLocationProductsRouter(routerFactory) {
        this.router = routerFactory.create('geo-location-products');
    }
    GeoLocationProductsRouter.prototype.get = function (geoLocation, options) {
        var _this = this;
        return this.router
            .runAndObserve('get', geoLocation, options)
            .pipe(operators_1.map(function (products) {
            return lodash_1.default.map(products, function (productInfo) {
                return _this._productInfoFactory(productInfo);
            });
        }));
    };
    GeoLocationProductsRouter.prototype._productInfoFactory = function (productInfo) {
        return productInfo == null ? null : new ProductInfo_1.default(productInfo);
    };
    GeoLocationProductsRouter = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [router_1.RouterFactory])
    ], GeoLocationProductsRouter);
    return GeoLocationProductsRouter;
}());
exports.GeoLocationProductsRouter = GeoLocationProductsRouter;
//# sourceMappingURL=geo-location-products-router.service.js.map