"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var OrderCarrierStatus_1 = tslib_1.__importDefault(require("@modules/server.common/enums/OrderCarrierStatus"));
var order_router_service_1 = require("@modules/client.common.angular2/routers/order-router.service");
var OrderWarehouseStatus_1 = tslib_1.__importDefault(require("@modules/server.common/enums/OrderWarehouseStatus"));
var angular_1 = require("@ionic/angular");
var store_service_1 = require("app/services/store.service");
var issue_page_1 = require("../../issue/issue.page");
var router_1 = require("@angular/router");
var cancel_page_1 = require("../../+cancel/cancel.page");
var operators_1 = require("rxjs/operators");
var store_info_component_1 = require("./store-info/store-info.component");
var warehouse_router_service_1 = require("@modules/client.common.angular2/routers/warehouse-router.service");
var OrderTakeawayInfoPage = (function () {
    function OrderTakeawayInfoPage(orderRouter, store, modalController, router, warehouseRouter) {
        this.orderRouter = orderRouter;
        this.store = store;
        this.modalController = modalController;
        this.router = router;
        this.warehouseRouter = warehouseRouter;
        this.order = null;
        this.modalChange = new core_1.EventEmitter();
        this.paymentsEnabled = true;
        this._pageSubscriptions = [];
        this.ngDestroy$ = new rxjs_1.Subject();
        this._trackOrder();
        this.warehouseByOrder();
        this.getModalChange();
    }
    OrderTakeawayInfoPage.prototype.ngOnInit = function () {
        console.warn('OrderTakeawayInfoPage Initialize.');
        if (!this.store.startOrderDate) {
            this.store.startOrderDate = new Date().toString();
        }
    };
    Object.defineProperty(OrderTakeawayInfoPage.prototype, "areIssuesDuringDelivery", {
        get: function () {
            if (this.order == null) {
                return true;
            }
            return (this.order.carrierStatus >= OrderCarrierStatus_1.default.IssuesDuringDelivery);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OrderTakeawayInfoPage.prototype, "areIssuesDuringWarehouseProcessing", {
        get: function () {
            if (this.order == null) {
                return true;
            }
            return (this.order.warehouseStatus >= OrderWarehouseStatus_1.default.AllocationFailed);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OrderTakeawayInfoPage.prototype, "areIssues", {
        get: function () {
            return (this.areIssuesDuringDelivery ||
                this.areIssuesDuringWarehouseProcessing);
        },
        enumerable: true,
        configurable: true
    });
    OrderTakeawayInfoPage.prototype.goToProductPage = function () {
        this.router.navigateByUrl('/products');
    };
    OrderTakeawayInfoPage.prototype.undo = function () {
        this.showCancelOrderInfoModal();
    };
    OrderTakeawayInfoPage.prototype.completeOrder = function () {
        localStorage.removeItem('startDate');
        localStorage.removeItem('endTime');
        this.store.orderId = null;
        this.router.navigate(['/products']);
    };
    OrderTakeawayInfoPage.prototype.clearTimer = function () {
        if (this.storeInfo) {
            clearInterval(this.storeInfo.elapsedTime.timer);
        }
    };
    OrderTakeawayInfoPage.prototype.warehouseByOrder = function () {
        var _this = this;
        var sub = this.warehouseRouter
            .get(this.store.orderWarehouseId)
            .subscribe(function (warehouse) {
            return (_this.paymentsEnabled = warehouse.isPaymentEnabled);
        });
        this._pageSubscriptions.push(sub);
    };
    OrderTakeawayInfoPage.prototype._trackOrder = function () {
        var _this = this;
        var orderRouterOptions = {
            populateWarehouse: true,
            populateCarrier: true,
        };
        var sub = this.orderRouter
            .get(this.store.orderId, orderRouterOptions)
            .subscribe(function (order) {
            _this.order = order;
            if (_this.areIssues && !_this.modalOpen) {
                _this.showIssueOrderInfoModal();
            }
        });
        this._pageSubscriptions.push(sub);
    };
    OrderTakeawayInfoPage.prototype.showCancelOrderInfoModal = function () {
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
    OrderTakeawayInfoPage.prototype.showIssueOrderInfoModal = function () {
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
    OrderTakeawayInfoPage.prototype.getModalChange = function () {
        var _this = this;
        this.modalChange
            .pipe(operators_1.takeUntil(this.ngDestroy$))
            .subscribe(function (result) {
            _this.modalOpen = result;
        });
    };
    OrderTakeawayInfoPage.prototype._unsubscribeAll = function () {
        this._pageSubscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    OrderTakeawayInfoPage.prototype.ngOnDestroy = function () {
        console.warn('OrderTakeawayInfoPage did leave');
        localStorage.removeItem('startDate');
        localStorage.removeItem('endTime');
        this._unsubscribeAll();
        this.clearTimer();
        this.ngDestroy$.next();
        this.ngDestroy$.complete();
    };
    tslib_1.__decorate([
        core_1.ViewChild('storeInfo'),
        tslib_1.__metadata("design:type", store_info_component_1.OrderStoreInfo)
    ], OrderTakeawayInfoPage.prototype, "storeInfo", void 0);
    OrderTakeawayInfoPage = tslib_1.__decorate([
        core_1.Component({
            templateUrl: './takeaway-page.page.html',
            styleUrls: ['./takeaway-page.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [order_router_service_1.OrderRouter,
            store_service_1.Store,
            angular_1.ModalController,
            router_1.Router,
            warehouse_router_service_1.WarehouseRouter])
    ], OrderTakeawayInfoPage);
    return OrderTakeawayInfoPage;
}());
exports.OrderTakeawayInfoPage = OrderTakeawayInfoPage;
//# sourceMappingURL=takeaway-page.page.js.map