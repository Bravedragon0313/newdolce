"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var OrdersComponent = (function () {
    function OrdersComponent() {
    }
    OrdersComponent.prototype.ngOnInit = function () {
        this.getTotalOrdersSum();
    };
    OrdersComponent.prototype.getTotalOrdersSum = function () {
        this.ordersSum = this.orders
            .map(function (order) { return order.totalPrice; })
            .reduce(function (prevPrice, nextPrice) { return prevPrice + nextPrice; }, 0);
    };
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Array)
    ], OrdersComponent.prototype, "orders", void 0);
    OrdersComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'orders',
            styleUrls: ['./orders.component.scss'],
            templateUrl: './orders.component.html',
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], OrdersComponent);
    return OrdersComponent;
}());
exports.OrdersComponent = OrdersComponent;
//# sourceMappingURL=orders.component.js.map