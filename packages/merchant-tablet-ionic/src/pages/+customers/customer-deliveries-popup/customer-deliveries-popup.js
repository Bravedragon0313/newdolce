"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var User_1 = tslib_1.__importDefault(require("@modules/server.common/entities/User"));
var user_orders_router_service_1 = require("@modules/client.common.angular2/routers/user-orders-router.service");
var ng2_smart_table_1 = require("ng2-smart-table");
var rxjs_1 = require("rxjs");
var core_2 = require("@ngx-translate/core");
var operators_1 = require("rxjs/operators");
var orderId_1 = require("../../../components/customer-deliveries-table/orderId");
var delivery_1 = require("../../../components/customer-deliveries-table/delivery");
var address_1 = require("../../../components/customer-deliveries-table/address");
var status_1 = require("../../../components/customer-deliveries-table/status");
var utils_1 = require("@modules/server.common/utils");
var angular_1 = require("@ionic/angular");
var CustomerDeliveriesPopupPage = (function () {
    function CustomerDeliveriesPopupPage(modalController, userOrdersRouter, translateService) {
        this.modalController = modalController;
        this.userOrdersRouter = userOrdersRouter;
        this.translateService = translateService;
        this.totalOrdersSum = 0;
        this.sourceSmartTable = new ng2_smart_table_1.LocalDataSource();
        this._ngDestroy$ = new rxjs_1.Subject();
        this._loadSettingsSmartTable();
    }
    Object.defineProperty(CustomerDeliveriesPopupPage.prototype, "warehouseId", {
        get: function () {
            return localStorage.getItem('_warehouseId');
        },
        enumerable: true,
        configurable: true
    });
    CustomerDeliveriesPopupPage.prototype.compareByCreateDate = function (a, b) {
        if (new Date(a.createdAt).getTime() > new Date(b.createdAt).getTime()) {
            return -1;
        }
        if (new Date(a.createdAt).getTime() < new Date(b.createdAt).getTime()) {
            return 1;
        }
        return 0;
    };
    CustomerDeliveriesPopupPage.prototype.ngOnInit = function () {
        var _this = this;
        this.userId = this.user.id;
        this.$orders = this.userOrdersRouter
            .get(this.user.id)
            .subscribe(function (orders) {
            _this.orders = orders;
            if (_this.orders.length === 0) {
                _this.showNoDeliveryIcon = true;
            }
            _this.getOrders();
        });
    };
    CustomerDeliveriesPopupPage.prototype.getCustomerFullAddress = function (order) {
        if (order.isCompleted) {
            var addressUser = order.user;
            var geoLocation = addressUser.geoLocation;
            var fullAddress = geoLocation.city + ", " + geoLocation.streetAddress + " " + geoLocation.house;
            return fullAddress;
        }
    };
    CustomerDeliveriesPopupPage.prototype.getTotalDeliveryTime = function (order) {
        var start = order.createdAt;
        var end = new Date(order.deliveryTime);
        var delta = Math.abs(start.getTime() - end.getTime()) / 1000;
        var days = Math.floor(delta / 86400);
        delta -= days * 86400;
        var hours = Math.floor(delta / 3600) % 24;
        delta -= hours * 3600;
        var minutes = Math.floor(delta / 60) % 60;
        delta -= minutes * 60;
        var seconds = delta % 60;
        var secondsStr = seconds.toString();
        secondsStr = secondsStr.substring(0, secondsStr.indexOf('.'));
        var h = '0' + hours;
        h = h.substr(-2);
        var min = '0' + minutes;
        min = min.substr(-2);
        var sec = '0' + secondsStr;
        sec = sec.substr(-2);
        return (days !== 0 ? days + 'days ' : '') + "\n            " + hours + " : " + min + " : " + sec;
    };
    CustomerDeliveriesPopupPage.prototype.getOrders = function () {
        var _this = this;
        var loadData = function (orders) {
            var usersVM = orders.map(function (o) {
                var status = o.isCompleted ? 'Completed' : '';
                status += o.isPaid ? 'Paid' : '';
                return {
                    orderId: utils_1.getIdFromTheDate(o),
                    status: status,
                    address: _this.getCustomerFullAddress(o),
                    delivery: _this.getTotalDeliveryTime(o),
                    order: o,
                };
            });
            _this.sourceSmartTable.load(usersVM);
        };
        this.ordersCurrentWarehouse = this.orders.filter(function (o) { return o.warehouse === _this.warehouseId; });
        this.ordersCurrentWarehouse.forEach(function (o) {
            _this.totalOrdersSum += o.totalPrice;
        });
        this.ordersCurrentWarehouse.sort(this.compareByCreateDate);
        loadData(this.ordersCurrentWarehouse);
        return this.ordersCurrentWarehouse;
    };
    CustomerDeliveriesPopupPage.prototype.cancelModal = function () {
        this.modalController.dismiss();
    };
    CustomerDeliveriesPopupPage.prototype._loadSettingsSmartTable = function () {
        var _this = this;
        var columnTitlePrefix = 'CUSTOMER_ORDERS_POP_UP.';
        var getTranslate = function (name) {
            return _this.translateService.get(columnTitlePrefix + name);
        };
        rxjs_1.forkJoin(getTranslate('ORDER_ID'), getTranslate('DELIVERY'), getTranslate('ADDRESS'), getTranslate('STATUS'))
            .pipe(operators_1.takeUntil(this._ngDestroy$))
            .subscribe(function (_a) {
            var orderId = _a[0], delivery = _a[1], address = _a[2], status = _a[3];
            _this.settingsSmartTable = {
                actions: true,
                columns: {
                    orderId: {
                        title: orderId,
                        class: 'text-align-left',
                        type: 'custom',
                        renderComponent: orderId_1.OrderIdComponent,
                    },
                    delivery: {
                        title: delivery,
                        type: 'custom',
                        renderComponent: delivery_1.DeliveryComponent,
                    },
                    address: {
                        title: address,
                        type: 'custom',
                        renderComponent: address_1.AddressComponent,
                    },
                    status: {
                        title: status,
                        type: 'custom',
                        renderComponent: status_1.StatusComponent,
                    },
                },
                pager: {
                    display: true,
                    perPage: 4,
                },
            };
        });
    };
    CustomerDeliveriesPopupPage.prototype.ngOnDestroy = function () {
        if (this.$orders) {
            this.$orders.unsubscribe();
        }
        this._ngDestroy$.next();
        this._ngDestroy$.complete();
    };
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", User_1.default)
    ], CustomerDeliveriesPopupPage.prototype, "user", void 0);
    CustomerDeliveriesPopupPage = tslib_1.__decorate([
        core_1.Component({
            selector: 'customer-deliveries-popup',
            templateUrl: 'customer-deliveries-popup.html',
            styleUrls: ['./customer-deliveries-popup.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [angular_1.ModalController,
            user_orders_router_service_1.UserOrdersRouter,
            core_2.TranslateService])
    ], CustomerDeliveriesPopupPage);
    return CustomerDeliveriesPopupPage;
}());
exports.CustomerDeliveriesPopupPage = CustomerDeliveriesPopupPage;
//# sourceMappingURL=customer-deliveries-popup.js.map