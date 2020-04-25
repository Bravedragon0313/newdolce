"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var angular_1 = require("@ionic/angular");
var order_router_service_1 = require("@modules/client.common.angular2/routers/order-router.service");
var warehouse_orders_router_service_1 = require("@modules/client.common.angular2/routers/warehouse-orders-router.service");
var store_service_1 = require("app/services/store.service");
var router_1 = require("@angular/router");
var IssuePage = (function () {
    function IssuePage(navParams, orderRouter, warehouseOrdersRouter, store, router, modalController) {
        this.navParams = navParams;
        this.orderRouter = orderRouter;
        this.warehouseOrdersRouter = warehouseOrdersRouter;
        this.store = store;
        this.router = router;
        this.modalController = modalController;
        this.modalChange = this.navParams.get('modalChange');
        this.areIssuesDuringDelivery = this.navParams.get('areIssuesDuringDelivery');
        this.areIssuesDuringWarehouseProcessing = this.navParams.get('areIssuesDuringWarehouseProcessing');
        this.order = this.navParams.get('order');
    }
    IssuePage.prototype.ngOnInit = function () { };
    IssuePage.prototype.closePopup = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.warehouseOrdersRouter.cancel(this.order.id)];
                    case 1:
                        _a.sent();
                        if (!this.order.isPaid) return [3, 3];
                        return [4, this.orderRouter.refundWithStripe(this.order.id)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        localStorage.removeItem('startDate');
                        localStorage.removeItem('endTime');
                        this.store.orderId = null;
                        this.router.navigate(['/products']);
                        return [4, this.modalController.dismiss()];
                    case 4:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    IssuePage = tslib_1.__decorate([
        core_1.Component({
            selector: 'e-cu-issue',
            templateUrl: './issue.page.html',
            styleUrls: ['./issue.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [angular_1.NavParams,
            order_router_service_1.OrderRouter,
            warehouse_orders_router_service_1.WarehouseOrdersRouter,
            store_service_1.Store,
            router_1.Router,
            angular_1.ModalController])
    ], IssuePage);
    return IssuePage;
}());
exports.IssuePage = IssuePage;
//# sourceMappingURL=issue.page.js.map