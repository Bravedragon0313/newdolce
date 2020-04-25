"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var warehouse_router_service_1 = require("@modules/client.common.angular2/routers/warehouse-router.service");
var order_router_service_1 = require("@modules/client.common.angular2/routers/order-router.service");
var core_2 = require("@ngx-translate/core");
var warehouse_orders_router_service_1 = require("@modules/client.common.angular2/routers/warehouse-orders-router.service");
var angular_1 = require("@ionic/angular");
var OrderCarrierStatus_1 = tslib_1.__importDefault(require("@modules/server.common/enums/OrderCarrierStatus"));
var store_service_1 = require("../../../services/store.service");
var cancel_page_1 = require("./+cancel/cancel.page");
var elapsed_time_component_1 = require("../../../components/elapsed-time/elapsed-time.component");
var OrderWarehouseStatus_1 = tslib_1.__importDefault(require("@modules/server.common/enums/OrderWarehouseStatus"));
var DeliveryStatus;
(function (DeliveryStatus) {
    DeliveryStatus[DeliveryStatus["Warehouse"] = 0] = "Warehouse";
    DeliveryStatus[DeliveryStatus["Carrier"] = 1] = "Carrier";
    DeliveryStatus[DeliveryStatus["Customer"] = 2] = "Customer";
    DeliveryStatus[DeliveryStatus["Completed"] = 3] = "Completed";
})(DeliveryStatus = exports.DeliveryStatus || (exports.DeliveryStatus = {}));
var OrderPage = (function () {
    function OrderPage(popoverCtrl, orderRouter, warehouseOrdersRouter, warehouseRouter, _translateService, store, navParams, modalController) {
        this.popoverCtrl = popoverCtrl;
        this.orderRouter = orderRouter;
        this.warehouseOrdersRouter = warehouseOrdersRouter;
        this.warehouseRouter = warehouseRouter;
        this._translateService = _translateService;
        this.store = store;
        this.navParams = navParams;
        this.modalController = modalController;
        this.order = null;
        this.warehouse = null;
        this.paymentsEnabled = true;
        this._pageSubscriptions = [];
        this._trackOrder();
        this.warehouseByOrder();
        this.pop = navParams.get('popoverController');
        this.modalChange = navParams.get('modalChange');
    }
    OrderPage.prototype.ngOnInit = function () {
        if (!this.store.startOrderDate) {
            this.store.startOrderDate = new Date().toString();
        }
    };
    OrderPage.prototype.ngOnDestroy = function () {
        this._unsubscribeAll();
        this.clearTimer();
    };
    Object.defineProperty(OrderPage.prototype, "isCustomerActive", {
        get: function () {
            return this.currentStatus >= DeliveryStatus.Customer;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OrderPage.prototype, "isCustomerCurrent", {
        get: function () {
            var isCurrent = this.currentStatus === DeliveryStatus.Customer;
            if (isCurrent !== this.delivered &&
                !isCurrent &&
                this.isCustomerActive) {
                this.store.endOrderTime = this.elapsedTime.timePasssed;
                this.clearTimer();
            }
            this.delivered = isCurrent;
            return isCurrent;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OrderPage.prototype, "isWarehouseActive", {
        get: function () {
            return this.currentStatus >= DeliveryStatus.Warehouse;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OrderPage.prototype, "isWarehouseCurrent", {
        get: function () {
            return (this.currentStatus === DeliveryStatus.Warehouse &&
                this.order &&
                !this.order.isCancelled);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OrderPage.prototype, "isCarrierActive", {
        get: function () {
            return this.currentStatus >= DeliveryStatus.Carrier;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OrderPage.prototype, "isCarrierCurrent", {
        get: function () {
            return this.currentStatus === DeliveryStatus.Carrier;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OrderPage.prototype, "areIssues", {
        get: function () {
            return (this.areIssuesDuringDelivery ||
                this.areIssuesDuringWarehouseProcessing);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OrderPage.prototype, "orderId", {
        get: function () {
            return this.store.orderId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OrderPage.prototype, "userId", {
        get: function () {
            return this.store.userId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OrderPage.prototype, "_currentOrderWarehouseId", {
        get: function () {
            return this.store.orderWarehouseId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OrderPage.prototype, "areIssuesDuringDelivery", {
        get: function () {
            if (this.order == null) {
                return false;
            }
            return (this.order.carrierStatus >= OrderCarrierStatus_1.default.IssuesDuringDelivery);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OrderPage.prototype, "areIssuesDuringWarehouseProcessing", {
        get: function () {
            if (this.order == null) {
                return false;
            }
            return (this.order.warehouseStatus >= OrderWarehouseStatus_1.default.AllocationFailed);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OrderPage.prototype, "currentStatus", {
        get: function () {
            if (this.order == null) {
                return DeliveryStatus.Warehouse;
            }
            if (this.order['isCompleted'] && !this.order['isCancelled']) {
                return DeliveryStatus.Completed;
            }
            else if (this.order.carrierStatus >=
                OrderCarrierStatus_1.default.CarrierArrivedToCustomer) {
                return DeliveryStatus.Customer;
            }
            else if (this.order.carrierStatus >= OrderCarrierStatus_1.default.CarrierPickedUpOrder) {
                return DeliveryStatus.Carrier;
            }
            else {
                return DeliveryStatus.Warehouse;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OrderPage.prototype, "deliveryTimeRange", {
        get: function () {
            if (this.order == null) {
                return '';
            }
            var deliveryTimeMin = 0;
            var deliveryTimeMax = 0;
            this.order.products.forEach(function (product) {
                if (product.deliveryTimeMin &&
                    product.deliveryTimeMin > deliveryTimeMin) {
                    deliveryTimeMin = product.deliveryTimeMin;
                }
                if (product.deliveryTimeMax &&
                    product.deliveryTimeMax > deliveryTimeMax) {
                    deliveryTimeMax = product.deliveryTimeMax;
                }
            });
            if (deliveryTimeMin !== 0 && deliveryTimeMax !== 0) {
                return deliveryTimeMin + '-' + deliveryTimeMax;
            }
            if (deliveryTimeMin !== 0) {
                return deliveryTimeMin.toString();
            }
            if (deliveryTimeMax !== 0) {
                return deliveryTimeMax.toString();
            }
            return 30 + '-' + 60;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OrderPage.prototype, "byPopupStatuses", {
        get: function () {
            var _this = this;
            var popupStatuses = "BUY_POPUP." + (this.order && this.order.isCancelled ? 'CANCEL.' : '') + "STATUSES." + this.currentStatus;
            var result = '';
            var getTitle = function () {
                var sub = _this._translateService
                    .get(popupStatuses + '.TITLE')
                    .subscribe(function (t) { return (result = t); });
                _this._pageSubscriptions.push(sub);
                return result;
            };
            var getDetails = function () {
                var sub = _this._translateService
                    .get(popupStatuses + '.DETAILS')
                    .subscribe(function (d) { return (result = d); });
                _this._pageSubscriptions.push(sub);
                return result.replace('%t', _this.deliveryTimeRange);
            };
            var getPaidNote = function () {
                var sub = _this._translateService
                    .get(popupStatuses + '.NOT_PAID_NOTE')
                    .subscribe(function (n) { return (result = n); });
                _this._pageSubscriptions.push(sub);
                return result.replace('%s', (_this.order
                    ? _this.order.totalPrice.toFixed(2)
                    : '00.00') + "$");
            };
            return {
                TITLE: getTitle(),
                DETAILS: getDetails(),
                NOT_PAID_NOTE: getPaidNote(),
            };
        },
        enumerable: true,
        configurable: true
    });
    OrderPage.prototype.warehouseByOrder = function () {
        var _this = this;
        var sub = this.warehouseRouter
            .get(this._currentOrderWarehouseId)
            .subscribe(function (warehouse) {
            return (_this.paymentsEnabled = warehouse.isPaymentEnabled);
        });
        this._pageSubscriptions.push(sub);
    };
    OrderPage.prototype.clearTimer = function () {
        clearInterval(this.elapsedTime.timer);
    };
    OrderPage.prototype.undo = function () {
        this.modalController.dismiss();
        this.showCancelOrderInfoModal();
    };
    OrderPage.prototype.closePopup = function () {
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
    OrderPage.prototype._trackOrder = function () {
        var _this = this;
        var orderRouterOptions = {
            populateWarehouse: true,
            populateCarrier: true,
        };
        var sub = this.orderRouter
            .get(this.orderId, orderRouterOptions)
            .subscribe(function (order) { return (_this.order = order); });
        this._pageSubscriptions.push(sub);
    };
    OrderPage.prototype.showCancelOrderInfoModal = function () {
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
    OrderPage.prototype._orderCancel = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var order;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.warehouseOrdersRouter.cancel(this.orderId)];
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
    OrderPage.prototype._unsubscribeAll = function () {
        this._pageSubscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    tslib_1.__decorate([
        core_1.ViewChild('elapsedTime'),
        tslib_1.__metadata("design:type", elapsed_time_component_1.ElapsedTimeComponent)
    ], OrderPage.prototype, "elapsedTime", void 0);
    OrderPage = tslib_1.__decorate([
        core_1.Component({
            templateUrl: './order.page.html',
            styleUrls: ['./order.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [angular_1.PopoverController,
            order_router_service_1.OrderRouter,
            warehouse_orders_router_service_1.WarehouseOrdersRouter,
            warehouse_router_service_1.WarehouseRouter,
            core_2.TranslateService,
            store_service_1.Store,
            angular_1.NavParams,
            angular_1.ModalController])
    ], OrderPage);
    return OrderPage;
}());
exports.OrderPage = OrderPage;
//# sourceMappingURL=order.page.js.map