"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var order_router_service_1 = require("@modules/client.common.angular2/routers/order-router.service");
var DeliveryType_1 = tslib_1.__importDefault(require("@modules/server.common/enums/DeliveryType"));
var OrderControlButtonsComponent = (function () {
    function OrderControlButtonsComponent(orderRouter) {
        this.orderRouter = orderRouter;
        this.orderTypeDelivery = DeliveryType_1.default.Delivery;
        this.orderTypeTakeaway = DeliveryType_1.default.Takeaway;
    }
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", String)
    ], OrderControlButtonsComponent.prototype, "orderId", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Number)
    ], OrderControlButtonsComponent.prototype, "warehouseStatus", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Number)
    ], OrderControlButtonsComponent.prototype, "carrierStatus", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Object)
    ], OrderControlButtonsComponent.prototype, "onUpdateWarehouseStatus", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Number)
    ], OrderControlButtonsComponent.prototype, "orderType", void 0);
    OrderControlButtonsComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'order-control-buttons',
            templateUrl: 'order-control-buttons.html',
            styleUrls: ['./order-control-buttons.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [order_router_service_1.OrderRouter])
    ], OrderControlButtonsComponent);
    return OrderControlButtonsComponent;
}());
exports.OrderControlButtonsComponent = OrderControlButtonsComponent;
//# sourceMappingURL=order-control-buttons.js.map