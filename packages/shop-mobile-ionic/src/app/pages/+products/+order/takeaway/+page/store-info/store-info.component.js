"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var elapsed_time_component_1 = require("app/components/elapsed-time/elapsed-time.component");
var Order_1 = tslib_1.__importDefault(require("@modules/server.common/entities/Order"));
var angular_1 = require("@ionic/angular");
var order_page_1 = require("../../../order.page");
var OrderCarrierStatus_1 = tslib_1.__importDefault(require("@modules/server.common/enums/OrderCarrierStatus"));
var rxjs_1 = require("rxjs");
var store_service_1 = require("app/services/store.service");
var OrderStoreInfo = (function () {
    function OrderStoreInfo(modalController, store) {
        this.modalController = modalController;
        this.store = store;
        this.order = null;
        this.undo = new core_1.EventEmitter();
        this.imHere = new core_1.EventEmitter();
        this.complete = new core_1.EventEmitter();
        this.modalChange = new core_1.EventEmitter();
        this.ngDestroy$ = new rxjs_1.Subject();
    }
    Object.defineProperty(OrderStoreInfo.prototype, "areIssues", {
        get: function () {
            return false;
        },
        enumerable: true,
        configurable: true
    });
    OrderStoreInfo.prototype.ngOnInit = function () {
        console.warn('OrderStoreInfo Initialize.');
    };
    Object.defineProperty(OrderStoreInfo.prototype, "currentStatus", {
        get: function () {
            if (this.order == null) {
                return order_page_1.DeliveryStatus.Warehouse;
            }
            if (this.order['isCompleted']) {
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
    Object.defineProperty(OrderStoreInfo.prototype, "warehouseLogo", {
        get: function () {
            return this.order.warehouse.logo;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OrderStoreInfo.prototype, "inStoreMode", {
        get: function () {
            return this.store.inStore;
        },
        enumerable: true,
        configurable: true
    });
    OrderStoreInfo.prototype.ngOnDestroy = function () {
        console.warn('OrderStoreInfo did leave');
        this.ngDestroy$.next();
        this.ngDestroy$.complete();
    };
    tslib_1.__decorate([
        core_1.ViewChild('elapsedTime'),
        tslib_1.__metadata("design:type", elapsed_time_component_1.ElapsedTimeComponent)
    ], OrderStoreInfo.prototype, "elapsedTime", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Order_1.default)
    ], OrderStoreInfo.prototype, "order", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], OrderStoreInfo.prototype, "paymentsEnabled", void 0);
    tslib_1.__decorate([
        core_1.Output(),
        tslib_1.__metadata("design:type", Object)
    ], OrderStoreInfo.prototype, "undo", void 0);
    tslib_1.__decorate([
        core_1.Output(),
        tslib_1.__metadata("design:type", Object)
    ], OrderStoreInfo.prototype, "imHere", void 0);
    tslib_1.__decorate([
        core_1.Output(),
        tslib_1.__metadata("design:type", Object)
    ], OrderStoreInfo.prototype, "complete", void 0);
    OrderStoreInfo = tslib_1.__decorate([
        core_1.Component({
            selector: 'e-cu-order-store-info',
            templateUrl: './store-info.component.html',
            styleUrls: ['./store-info.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [angular_1.ModalController,
            store_service_1.Store])
    ], OrderStoreInfo);
    return OrderStoreInfo;
}());
exports.OrderStoreInfo = OrderStoreInfo;
//# sourceMappingURL=store-info.component.js.map