"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var router_1 = require("../lib/router");
var core_1 = require("@angular/core");
var UserProductsRouter = (function () {
    function UserProductsRouter(routerFactory) {
        this.router = routerFactory.create('user-products');
    }
    UserProductsRouter.prototype.getPlaceholder = function (userId, deviceId) {
        return this.router.runAndObserve('getPlaceholder', userId, deviceId);
    };
    UserProductsRouter = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [router_1.RouterFactory])
    ], UserProductsRouter);
    return UserProductsRouter;
}());
exports.UserProductsRouter = UserProductsRouter;
//# sourceMappingURL=user-products-router.service.js.map