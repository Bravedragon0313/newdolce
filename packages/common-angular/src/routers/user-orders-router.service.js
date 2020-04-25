"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var operators_1 = require("rxjs/operators");
var router_1 = require("../lib/router");
var core_1 = require("@angular/core");
var Order_1 = tslib_1.__importDefault(require("@modules/server.common/entities/Order"));
var lodash_1 = tslib_1.__importDefault(require("lodash"));
var UserOrdersRouter = (function () {
    function UserOrdersRouter(routerFactory) {
        this.router = routerFactory.create('user-orders');
    }
    UserOrdersRouter.prototype.get = function (userId) {
        var _this = this;
        return this.router
            .runAndObserve('get', userId)
            .pipe(operators_1.map(function (orders) {
            return lodash_1.default.map(orders, function (order) { return _this._orderFactory(order); });
        }));
    };
    UserOrdersRouter.prototype.getOrderedProducts = function (userId) {
        return this.router.runAndObserve('getOrderedProducts', userId);
    };
    UserOrdersRouter.prototype._orderFactory = function (order) {
        return order == null ? null : new Order_1.default(order);
    };
    UserOrdersRouter = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [router_1.RouterFactory])
    ], UserOrdersRouter);
    return UserOrdersRouter;
}());
exports.UserOrdersRouter = UserOrdersRouter;
//# sourceMappingURL=user-orders-router.service.js.map