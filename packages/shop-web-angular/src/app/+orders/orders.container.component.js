"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var user_orders_router_service_1 = require("@modules/client.common.angular2/routers/user-orders-router.service");
var store_1 = require("app/services/store");
var OrdersContainerComponent = (function () {
    function OrdersContainerComponent(userOrdersRouter, store) {
        var _this = this;
        this.userOrdersRouter = userOrdersRouter;
        this.store = store;
        var userId = store.userId;
        this.userOrdersRouter.get(userId).subscribe(function (res) {
            _this.orders = res.filter(function (r) { return !r.isCancelled; });
            res = res.filter(function (r) { return !r.isCancelled; });
        });
    }
    OrdersContainerComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'orders-container',
            template: '<orders *ngIf="orders " [orders]="orders"></orders>',
        }),
        tslib_1.__metadata("design:paramtypes", [user_orders_router_service_1.UserOrdersRouter,
            store_1.Store])
    ], OrdersContainerComponent);
    return OrdersContainerComponent;
}());
exports.OrdersContainerComponent = OrdersContainerComponent;
//# sourceMappingURL=orders.container.component.js.map