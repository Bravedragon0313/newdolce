"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var angular_1 = require("@ionic/angular");
var customer_deliveries_popup_1 = require("pages/+customers/customer-deliveries-popup/customer-deliveries-popup");
var OrdersComponent = (function () {
    function OrdersComponent(modalCtrl) {
        this.modalCtrl = modalCtrl;
    }
    OrdersComponent.prototype.ngOnInit = function () {
        this.user = this.rowData.user;
        this.orders = this.rowData.allOrders;
    };
    OrdersComponent.prototype.getOrdersCount = function (userId) {
        return this.orders.filter(function (o) { return o.user.id === userId; }).length;
    };
    OrdersComponent.prototype.showDeliveriesInfo = function (user) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var modal;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.modalCtrl.create({
                            component: customer_deliveries_popup_1.CustomerDeliveriesPopupPage,
                            componentProps: { user: user },
                            cssClass: 'customer-deliveries',
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4, modal.present()];
                    case 2:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    OrdersComponent = tslib_1.__decorate([
        core_1.Component({
            template: "\n\t\t<div class=\"text-center\">\n\t\t\t<span class=\"ordersCount\" (click)=\"showDeliveriesInfo(user)\">{{\n\t\t\t\trowData?.orders\n\t\t\t}}</span>\n\t\t\t<div></div>\n\t\t</div>\n\t",
        }),
        tslib_1.__metadata("design:paramtypes", [angular_1.ModalController])
    ], OrdersComponent);
    return OrdersComponent;
}());
exports.OrdersComponent = OrdersComponent;
//# sourceMappingURL=orders.js.map