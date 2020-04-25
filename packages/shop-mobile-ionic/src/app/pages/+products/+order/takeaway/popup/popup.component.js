"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var angular_1 = require("@ionic/angular");
var store_service_1 = require("app/services/store.service");
var cancel_page_1 = require("../../+cancel/cancel.page");
var order_router_service_1 = require("@modules/client.common.angular2/routers/order-router.service");
var elapsed_time_component_1 = require("app/components/elapsed-time/elapsed-time.component");
var warehouse_router_service_1 = require("@modules/client.common.angular2/routers/warehouse-router.service");
var entities_1 = require("@modules/server.common/entities");
var map_modal_component_1 = require("../../common/map-modal/map-modal.component");
var OrderWarehouseStatus_1 = tslib_1.__importDefault(require("@modules/server.common/enums/OrderWarehouseStatus"));
var warehouse_orders_router_service_1 = require("@modules/client.common.angular2/routers/warehouse-orders-router.service");
var product_locales_service_1 = require("@modules/client.common.angular2/locale/product-locales.service");
var OrderTakeawayInfoPopup = (function () {
    function OrderTakeawayInfoPopup(modalController, store, navParams, orderRouter, warehouseRouter, warehouseOrdersRouter, _translateProductLocales) {
        this.modalController = modalController;
        this.store = store;
        this.navParams = navParams;
        this.orderRouter = orderRouter;
        this.warehouseRouter = warehouseRouter;
        this.warehouseOrdersRouter = warehouseOrdersRouter;
        this._translateProductLocales = _translateProductLocales;
        this.order = null;
        this.paymentsEnabled = true;
        this.showProducts = true;
        this._pageSubscriptions = [];
        this._trackOrder();
        this.warehouseByOrder();
        this.modalChange = navParams.get('modalChange');
    }
    OrderTakeawayInfoPopup.prototype.ngOnInit = function () {
        if (!this.store.startOrderDate) {
            this.store.startOrderDate = new Date().toString();
        }
    };
    OrderTakeawayInfoPopup.prototype.ngOnDestroy = function () {
        this._unsubscribeAll();
        this.clearTimer();
    };
    Object.defineProperty(OrderTakeawayInfoPopup.prototype, "areIssues", {
        get: function () {
            return this.areIssuesDuringWarehouseProcessing;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OrderTakeawayInfoPopup.prototype, "areIssuesDuringWarehouseProcessing", {
        get: function () {
            if (this.order == null) {
                return false;
            }
            return (this.order.warehouseStatus >= OrderWarehouseStatus_1.default.AllocationFailed);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OrderTakeawayInfoPopup.prototype, "storeFullAddress", {
        get: function () {
            if (this.order && this.order.warehouse) {
                var store = this.order.warehouse;
                return (store['geoLocation'].city + ", " + store['geoLocation'].streetAddress + " " +
                    (store['geoLocation'].house + ", " + (store['geoLocation'].postcode
                        ? store['geoLocation'].postcode + ', '
                        : '') + " " + entities_1.getCountryName(store['geoLocation'].countryId)));
            }
            return;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OrderTakeawayInfoPopup.prototype, "inStoreMode", {
        get: function () {
            return this.store.inStore;
        },
        enumerable: true,
        configurable: true
    });
    OrderTakeawayInfoPopup.prototype.clearTimer = function () {
        if (this.elapsedTime) {
            clearInterval(this.elapsedTime.timer);
        }
    };
    OrderTakeawayInfoPopup.prototype.changeInStore = function () {
        this.inStore = true;
        this.clearTimer();
    };
    OrderTakeawayInfoPopup.prototype.undo = function () {
        this.modalController.dismiss();
        this.showCancelOrderInfoModal();
    };
    OrderTakeawayInfoPopup.prototype.complete = function () {
        this.closePopup();
    };
    OrderTakeawayInfoPopup.prototype.localeTranslate = function (member) {
        return this._translateProductLocales.getTranslate(member);
    };
    OrderTakeawayInfoPopup.prototype.showMapModal = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var modal;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.modalController.create({
                            component: map_modal_component_1.MapModalComponent,
                            cssClass: 'map-info-modal',
                            componentProps: {
                                origin: this.order.user.geoLocation,
                                destination: this.order.warehouse['geoLocation'],
                            },
                        })];
                    case 1:
                        modal = _a.sent();
                        return [2, modal.present()];
                }
            });
        });
    };
    OrderTakeawayInfoPopup.prototype.closePopup = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.modalChange.emit(false);
                        if (!this.areIssues) return [3, 2];
                        return [4, this._orderCancel()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        localStorage.removeItem('startDate');
                        localStorage.removeItem('endTime');
                        this.store.orderId = null;
                        this.modalController.dismiss();
                        return [2];
                }
            });
        });
    };
    OrderTakeawayInfoPopup.prototype._orderCancel = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var order;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.warehouseOrdersRouter.cancel(this.store.orderId)];
                    case 1:
                        order = _a.sent();
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
    OrderTakeawayInfoPopup.prototype.showCancelOrderInfoModal = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var modal;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.modalController.create({
                            component: cancel_page_1.CancelPage,
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
    OrderTakeawayInfoPopup.prototype._trackOrder = function () {
        var _this = this;
        var orderRouterOptions = {
            populateWarehouse: true,
            populateCarrier: true,
        };
        var sub = this.orderRouter
            .get(this.store.orderId, orderRouterOptions)
            .subscribe(function (order) { return (_this.order = order); });
        this._pageSubscriptions.push(sub);
    };
    OrderTakeawayInfoPopup.prototype.warehouseByOrder = function () {
        var _this = this;
        var sub = this.warehouseRouter
            .get(this.store.orderWarehouseId)
            .subscribe(function (warehouse) {
            return (_this.paymentsEnabled = warehouse.isPaymentEnabled);
        });
        this._pageSubscriptions.push(sub);
    };
    OrderTakeawayInfoPopup.prototype._unsubscribeAll = function () {
        this._pageSubscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    tslib_1.__decorate([
        core_1.ViewChild('elapsedTime'),
        tslib_1.__metadata("design:type", elapsed_time_component_1.ElapsedTimeComponent)
    ], OrderTakeawayInfoPopup.prototype, "elapsedTime", void 0);
    OrderTakeawayInfoPopup = tslib_1.__decorate([
        core_1.Component({
            templateUrl: './popup.component.html',
            styleUrls: ['./popup.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [angular_1.ModalController,
            store_service_1.Store,
            angular_1.NavParams,
            order_router_service_1.OrderRouter,
            warehouse_router_service_1.WarehouseRouter,
            warehouse_orders_router_service_1.WarehouseOrdersRouter,
            product_locales_service_1.ProductLocalesService])
    ], OrderTakeawayInfoPopup);
    return OrderTakeawayInfoPopup;
}());
exports.OrderTakeawayInfoPopup = OrderTakeawayInfoPopup;
//# sourceMappingURL=popup.component.js.map