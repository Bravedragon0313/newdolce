"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var angular_1 = require("@ionic/angular");
var core_2 = require("@ngx-translate/core");
var order_details_page_1 = require("./order-details.page");
var order_module_1 = require("../../../components/order/order.module");
var routes = [
    {
        path: ':id',
        component: order_details_page_1.OrderDetailsPage,
    },
];
var OrderDetailsPageModule = (function () {
    function OrderDetailsPageModule() {
    }
    OrderDetailsPageModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                angular_1.IonicModule,
                order_module_1.OrderModule,
                router_1.RouterModule.forChild(routes),
                core_2.TranslateModule.forChild(),
            ],
            declarations: [order_details_page_1.OrderDetailsPage],
        })
    ], OrderDetailsPageModule);
    return OrderDetailsPageModule;
}());
exports.OrderDetailsPageModule = OrderDetailsPageModule;
//# sourceMappingURL=order-details.module.js.map