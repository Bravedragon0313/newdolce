"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var Order_1 = tslib_1.__importDefault(require("@modules/server.common/entities/Order"));
var OrderCardComponent = (function () {
    function OrderCardComponent() {
    }
    OrderCardComponent_1 = OrderCardComponent;
    Object.defineProperty(OrderCardComponent.prototype, "order", {
        get: function () {
            return this._order;
        },
        set: function (order) {
            this._order = tslib_1.__assign({}, order);
            this._order.products = order.products.slice(0, OrderCardComponent_1.NOT_EXPANDED_MAX_PRODUCTS_AMOUNT);
            this.notDisplayedProductsAmount =
                order.products.length - this._order.products.length;
        },
        enumerable: true,
        configurable: true
    });
    var OrderCardComponent_1;
    OrderCardComponent.NOT_EXPANDED_MAX_PRODUCTS_AMOUNT = 3;
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Object)
    ], OrderCardComponent.prototype, "user", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Order_1.default),
        tslib_1.__metadata("design:paramtypes", [Order_1.default])
    ], OrderCardComponent.prototype, "order", null);
    OrderCardComponent = OrderCardComponent_1 = tslib_1.__decorate([
        core_1.Component({
            selector: 'e-cu-order-card',
            styleUrls: ['./order-card.component.scss'],
            templateUrl: './order-card.component.html',
        })
    ], OrderCardComponent);
    return OrderCardComponent;
}());
exports.OrderCardComponent = OrderCardComponent;
//# sourceMappingURL=order-card.component.js.map