"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var warehouse_orders_router_service_1 = require("@modules/client.common.angular2/routers/warehouse-orders-router.service");
var order_router_service_1 = require("@modules/client.common.angular2/routers/order-router.service");
var angular_1 = require("@ionic/angular");
var store_service_1 = require("../../../../services/store.service");
var order_page_1 = require("../order.page");
var router_1 = require("@angular/router");
var environment_1 = require("environments/environment");
var DeliveryType_1 = tslib_1.__importDefault(require("@modules/server.common/enums/DeliveryType"));
var popup_component_1 = require("../takeaway/popup/popup.component");
var CancelPage = (function () {
    function CancelPage(popoverCtrl, warehouseOrdersRouter, orderRouter, store, modalController, router, navParams) {
        this.popoverCtrl = popoverCtrl;
        this.warehouseOrdersRouter = warehouseOrdersRouter;
        this.orderRouter = orderRouter;
        this.store = store;
        this.modalController = modalController;
        this.router = router;
        this.navParams = navParams;
        this.modalChange = navParams.get('modalChange');
    }
    CancelPage.prototype._orderCancel = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var orderId, order;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        orderId = this.store.orderId;
                        return [4, this.warehouseOrdersRouter.cancel(orderId)];
                    case 1:
                        order = _a.sent();
                        localStorage.removeItem('startDate');
                        localStorage.removeItem('endTime');
                        console.log("order Cancelled: " + order.id);
                        if (!order.isPaid) return [3, 3];
                        return [4, this.orderRouter.refundWithStripe(order.id)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2];
                }
            });
        });
    };
    CancelPage.prototype.closePopup = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.modalChange) {
                            this.modalChange.emit(false);
                        }
                        return [4, this._orderCancel()];
                    case 1:
                        _a.sent();
                        this.store.orderId = null;
                        if (environment_1.environment.ORDER_INFO_TYPE === 'page') {
                            this.router.navigate(['/products']);
                        }
                        return [4, this.modalController.dismiss()];
                    case 2:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    CancelPage.prototype.showOrderInfo = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                this.modalController.dismiss();
                if (environment_1.environment.ORDER_INFO_TYPE === 'popup') {
                    this.showOrderInfoModal();
                }
                if (environment_1.environment.ORDER_INFO_TYPE === 'page' && this.modalChange) {
                    this.modalChange.emit(false);
                }
                return [2];
            });
        });
    };
    CancelPage.prototype.showOrderInfoModal = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var modal;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.modalController.create({
                            component: this.store.deliveryType === DeliveryType_1.default.Delivery
                                ? order_page_1.OrderPage
                                : popup_component_1.OrderTakeawayInfoPopup,
                            cssClass: 'order-info-modal',
                            componentProps: { modalChange: this.modalChange },
                        })];
                    case 1:
                        modal = _a.sent();
                        return [2, modal.present()];
                }
            });
        });
    };
    CancelPage = tslib_1.__decorate([
        core_1.Component({
            selector: 'e-cu-cancel',
            templateUrl: './cancel.page.html',
            styleUrls: ['./cancel.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [angular_1.PopoverController,
            warehouse_orders_router_service_1.WarehouseOrdersRouter,
            order_router_service_1.OrderRouter,
            store_service_1.Store,
            angular_1.ModalController,
            router_1.Router,
            angular_1.NavParams])
    ], CancelPage);
    return CancelPage;
}());
exports.CancelPage = CancelPage;
//# sourceMappingURL=cancel.page.js.map