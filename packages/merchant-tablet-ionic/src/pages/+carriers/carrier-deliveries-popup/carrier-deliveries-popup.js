"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var Carrier_1 = tslib_1.__importDefault(require("@modules/server.common/entities/Carrier"));
var carrier_orders_router_service_1 = require("@modules/client.common.angular2/routers/carrier-orders-router.service");
var ng2_smart_table_1 = require("ng2-smart-table");
var rxjs_1 = require("rxjs");
var core_2 = require("@ngx-translate/core");
var operators_1 = require("rxjs/operators");
var customer_1 = require("../../../components/carrier-deliveries-table/customer");
var delivery_1 = require("../../../components/carrier-deliveries-table/delivery");
var status_1 = require("../../../components/carrier-deliveries-table/status");
var warehouse_1 = require("../../../components/carrier-deliveries-table/warehouse");
var angular_1 = require("@ionic/angular");
var CarrierDeliveriesPopupPage = (function () {
    function CarrierDeliveriesPopupPage(modalCtrl, carrierOrdersRouter, translateService) {
        this.modalCtrl = modalCtrl;
        this.carrierOrdersRouter = carrierOrdersRouter;
        this.translateService = translateService;
        this.sourceSmartTable = new ng2_smart_table_1.LocalDataSource();
        this._ngDestroy$ = new rxjs_1.Subject();
        this._loadSettingsSmartTable();
    }
    CarrierDeliveriesPopupPage.prototype.getUserName = function (order) {
        var user = order.user;
        if (user.firstName) {
            if (user.lastName) {
                return user.firstName + ' ' + user.lastName;
            }
            return user.firstName;
        }
    };
    CarrierDeliveriesPopupPage.prototype.getStoreFullAddress = function (order) {
        var store = order.warehouse;
        var geoLocation = store.geoLocation;
        var fullAddress = geoLocation.city + ", " + geoLocation.streetAddress + " " + geoLocation.house;
        return fullAddress;
    };
    CarrierDeliveriesPopupPage.prototype.getTotalDeliveryTime = function (order) {
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
    CarrierDeliveriesPopupPage.prototype.cancelModal = function () {
        this.modalCtrl.dismiss();
    };
    CarrierDeliveriesPopupPage.prototype.ngOnInit = function () {
        var _this = this;
        var loadData = function (orders) {
            var dataVM = orders.map(function (o) {
                var status = o.isCompleted ? 'Completed' : '';
                status += o.isPaid ? 'Paid' : '';
                return {
                    customer: _this.getUserName(o),
                    status: status,
                    warehouse: o.warehouse['name'],
                    delivery: _this.getTotalDeliveryTime(o),
                    order: o,
                };
            });
            _this.sourceSmartTable.load(dataVM);
        };
        this.$orders = this.carrierOrdersRouter
            .get(this.carrier.id, {
            populateWarehouse: true,
            completion: 'completed',
        })
            .subscribe(function (orders) {
            _this.orders = orders;
            loadData(orders);
            if (_this.orders.length === 0) {
                _this.showNoDeliveryIcon = true;
            }
        });
    };
    CarrierDeliveriesPopupPage.prototype.ngOnDestroy = function () {
        if (this.$orders) {
            this.$orders.unsubscribe();
        }
    };
    CarrierDeliveriesPopupPage.prototype._loadSettingsSmartTable = function () {
        var _this = this;
        var columnTitlePrefix = 'CARRIERS_VIEW.DELIVERIES_POP_UP.';
        var getTranslate = function (name) {
            return _this.translateService.get(columnTitlePrefix + name);
        };
        rxjs_1.forkJoin(getTranslate('CUSTOMER'), getTranslate('WAREHOUSE'), getTranslate('STATUS'), getTranslate('DELIVERY'))
            .pipe(operators_1.takeUntil(this._ngDestroy$))
            .subscribe(function (_a) {
            var customer = _a[0], warehouse = _a[1], status = _a[2], delivery = _a[3];
            _this.settingsSmartTable = {
                actions: true,
                columns: {
                    customer: {
                        title: customer,
                        type: 'custom',
                        renderComponent: customer_1.CustomerComponent,
                    },
                    warehouse: {
                        title: warehouse,
                        type: 'custom',
                        renderComponent: warehouse_1.WarehouseComponent,
                    },
                    status: {
                        title: status,
                        type: 'custom',
                        renderComponent: status_1.StatusComponent,
                    },
                    delivery: {
                        title: delivery,
                        type: 'custom',
                        renderComponent: delivery_1.DeliveryComponent,
                    },
                },
                pager: {
                    display: true,
                    perPage: 5,
                },
            };
        });
    };
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Carrier_1.default)
    ], CarrierDeliveriesPopupPage.prototype, "carrier", void 0);
    CarrierDeliveriesPopupPage = tslib_1.__decorate([
        core_1.Component({
            selector: 'carrier-deliveries-popup',
            templateUrl: 'carrier-deliveries-popup.html',
            styleUrls: ['./carrier-deliveries-popup.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [angular_1.ModalController,
            carrier_orders_router_service_1.CarrierOrdersRouter,
            core_2.TranslateService])
    ], CarrierDeliveriesPopupPage);
    return CarrierDeliveriesPopupPage;
}());
exports.CarrierDeliveriesPopupPage = CarrierDeliveriesPopupPage;
//# sourceMappingURL=carrier-deliveries-popup.js.map