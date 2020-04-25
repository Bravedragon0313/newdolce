"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var rxjs_1 = require("rxjs");
var order_page_1 = require("../order.page");
var OrderCarrierStatus_1 = tslib_1.__importDefault(require("@modules/server.common/enums/OrderCarrierStatus"));
var order_router_service_1 = require("@modules/client.common.angular2/routers/order-router.service");
var warehouse_router_service_1 = require("@modules/client.common.angular2/routers/warehouse-router.service");
var core_2 = require("@ngx-translate/core");
var store_service_1 = require("../../../../services/store.service");
var angular_1 = require("@ionic/angular");
var cancel_page_1 = require("../+cancel/cancel.page");
var issue_page_1 = require("../issue/issue.page");
var operators_1 = require("rxjs/operators");
var elapsed_time_component_1 = require("app/components/elapsed-time/elapsed-time.component");
var OrderWarehouseStatus_1 = tslib_1.__importDefault(require("@modules/server.common/enums/OrderWarehouseStatus"));
var OrderInfoPage = (function () {
    function OrderInfoPage(orderRouter, warehouseRouter, _translateService, store, modalController, router) {
        this.orderRouter = orderRouter;
        this.warehouseRouter = warehouseRouter;
        this._translateService = _translateService;
        this.store = store;
        this.modalController = modalController;
        this.router = router;
        this.order = null;
        this.warehouse = null;
        this.paymentsEnabled = true;
        this.modalChange = new core_1.EventEmitter();
        this.ngDestroy$ = new rxjs_1.Subject();
        this._pageSubscriptions = [];
        this._trackOrder();
        this.warehouseByOrder();
        this.getModalChange();
    }
    OrderInfoPage.prototype.ngOnInit = function () {
        if (!this.store.startOrderDate) {
            this.store.startOrderDate = new Date().toString();
        }
    };
    OrderInfoPage.prototype.ngOnDestroy = function () {
        console.warn('OrderInfoPage did leave');
        this.closePopup();
        this._unsubscribeAll();
        this.clearTimer();
        this.ngDestroy$.next();
        this.ngDestroy$.complete();
    };
    OrderInfoPage.prototype.goToProductPage = function () {
        this.router.navigateByUrl('/products');
    };
    Object.defineProperty(OrderInfoPage.prototype, "isCustomerActive", {
        get: function () {
            return this.currentStatus >= order_page_1.DeliveryStatus.Customer;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OrderInfoPage.prototype, "isCustomerCurrent", {
        get: function () {
            var isCurrent = this.currentStatus === order_page_1.DeliveryStatus.Customer;
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
    Object.defineProperty(OrderInfoPage.prototype, "isWarehouseActive", {
        get: function () {
            return this.currentStatus >= order_page_1.DeliveryStatus.Warehouse;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OrderInfoPage.prototype, "isWarehouseCurrent", {
        get: function () {
            return (this.currentStatus === order_page_1.DeliveryStatus.Warehouse &&
                this.order &&
                !this.order.isCancelled);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OrderInfoPage.prototype, "isCarrierActive", {
        get: function () {
            return this.currentStatus >= order_page_1.DeliveryStatus.Carrier;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OrderInfoPage.prototype, "isCarrierCurrent", {
        get: function () {
            return this.currentStatus === order_page_1.DeliveryStatus.Carrier;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OrderInfoPage.prototype, "areIssues", {
        get: function () {
            return (this.areIssuesDuringDelivery ||
                this.areIssuesDuringWarehouseProcessing);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OrderInfoPage.prototype, "orderId", {
        get: function () {
            return localStorage.getItem('_orderId');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OrderInfoPage.prototype, "userId", {
        get: function () {
            return this.store.userId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OrderInfoPage.prototype, "_currentOrderWarehouseId", {
        get: function () {
            return this.store.orderWarehouseId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OrderInfoPage.prototype, "areIssuesDuringDelivery", {
        get: function () {
            if (this.order == null) {
                return true;
            }
            return (this.order.carrierStatus >= OrderCarrierStatus_1.default.IssuesDuringDelivery);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OrderInfoPage.prototype, "areIssuesDuringWarehouseProcessing", {
        get: function () {
            if (this.order == null) {
                return true;
            }
            return (this.order.warehouseStatus >= OrderWarehouseStatus_1.default.AllocationFailed);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OrderInfoPage.prototype, "currentStatus", {
        get: function () {
            if (this.order == null) {
                return order_page_1.DeliveryStatus.Warehouse;
            }
            if (this.order['isCompleted'] && !this.order['isCancelled']) {
                return order_page_1.DeliveryStatus.Completed;
            }
            else if (this.order.carrierStatus >=
                OrderCarrierStatus_1.default.CarrierArrivedToCustomer) {
                return order_page_1.DeliveryStatus.Customer;
            }
            else if (this.order.carrierStatus >= OrderCarrierStatus_1.default.CarrierPickedUpOrder) {
                return order_page_1.DeliveryStatus.Carrier;
            }
            else {
                return order_page_1.DeliveryStatus.Warehouse;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OrderInfoPage.prototype, "deliveryTimeRange", {
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
    Object.defineProperty(OrderInfoPage.prototype, "byPopupStatuses", {
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
    OrderInfoPage.prototype.warehouseByOrder = function () {
        var _this = this;
        var sub = this.warehouseRouter
            .get(this._currentOrderWarehouseId)
            .subscribe(function (warehouse) {
            return (_this.paymentsEnabled = warehouse.isPaymentEnabled);
        });
        this._pageSubscriptions.push(sub);
    };
    OrderInfoPage.prototype.clearTimer = function () {
        clearInterval(this.elapsedTime.timer);
    };
    OrderInfoPage.prototype.undo = function () {
        this.showCancelOrderInfoModal();
    };
    OrderInfoPage.prototype.showCancelOrderInfoModal = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var modal;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.modalController.create({
                            component: cancel_page_1.CancelPage,
                            cssClass: 'order-info-modal',
                            componentProps: {
                                modalChange: this.modalChange,
                            },
                        })];
                    case 1:
                        modal = _a.sent();
                        this.modalChange.emit(true);
                        return [2, modal.present()];
                }
            });
        });
    };
    OrderInfoPage.prototype.closePopup = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                localStorage.removeItem('startDate');
                localStorage.removeItem('endTime');
                this.store.orderId = null;
                this.router.navigate(['/products']);
                return [2];
            });
        });
    };
    OrderInfoPage.prototype._trackOrder = function () {
        var _this = this;
        var orderRouterOptions = {
            populateWarehouse: true,
            populateCarrier: true,
        };
        var sub = this.orderRouter
            .get(this.orderId, orderRouterOptions)
            .subscribe(function (order) {
            _this.order = order;
            if (_this.areIssues && !_this.modalOpen) {
                _this.showIssueOrderInfoModal();
            }
        });
        this._pageSubscriptions.push(sub);
    };
    OrderInfoPage.prototype.showIssueOrderInfoModal = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var modal;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.modalController.create({
                            component: issue_page_1.IssuePage,
                            cssClass: 'order-info-modal',
                            componentProps: {
                                modalChange: this.modalChange,
                                areIssuesDuringDelivery: this.areIssuesDuringDelivery,
                                areIssuesDuringWarehouseProcessing: this
                                    .areIssuesDuringWarehouseProcessing,
                                order: this.order,
                            },
                        })];
                    case 1:
                        modal = _a.sent();
                        this.clearTimer();
                        this.modalChange.emit(true);
                        return [2, modal.present()];
                }
            });
        });
    };
    OrderInfoPage.prototype._unsubscribeAll = function () {
        this._pageSubscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    OrderInfoPage.prototype.getModalChange = function () {
        var _this = this;
        this.modalChange
            .pipe(operators_1.takeUntil(this.ngDestroy$))
            .subscribe(function (result) {
            _this.modalOpen = result;
        });
    };
    tslib_1.__decorate([
        core_1.ViewChild('elapsedTime'),
        tslib_1.__metadata("design:type", elapsed_time_component_1.ElapsedTimeComponent)
    ], OrderInfoPage.prototype, "elapsedTime", void 0);
    OrderInfoPage = tslib_1.__decorate([
        core_1.Component({
            selector: 'e-cu-order-info',
            templateUrl: './order-info.page.html',
            styleUrls: ['./order-info.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [order_router_service_1.OrderRouter,
            warehouse_router_service_1.WarehouseRouter,
            core_2.TranslateService,
            store_service_1.Store,
            angular_1.ModalController,
            router_1.Router])
    ], OrderInfoPage);
    return OrderInfoPage;
}());
exports.OrderInfoPage = OrderInfoPage;
//# sourceMappingURL=order-info.page.js.map