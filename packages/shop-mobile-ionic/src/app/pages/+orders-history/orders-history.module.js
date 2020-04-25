"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var angular_1 = require("@ionic/angular");
var orders_history_page_1 = require("./orders-history.page");
var core_2 = require("@ngx-translate/core");
var order_module_1 = require("../../components/order/order.module");
var order_card_component_1 = require("./order-card/order-card.component");
var routes = [
    {
        path: '',
        component: orders_history_page_1.OrdersHistoryPage,
    },
    {
        path: ':id',
        loadChildren: function () {
            return Promise.resolve().then(function () { return tslib_1.__importStar(require('./+order-details/order-details.module')); }).then(function (m) { return m.OrderDetailsPageModule; });
        },
    },
];
var OrdersHistoryPageModule = (function () {
    function OrdersHistoryPageModule() {
    }
    OrdersHistoryPageModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                angular_1.IonicModule,
                order_module_1.OrderModule,
                router_1.RouterModule.forChild(routes),
                core_2.TranslateModule.forChild(),
            ],
            declarations: [orders_history_page_1.OrdersHistoryPage, order_card_component_1.OrderCardComponent],
        })
    ], OrdersHistoryPageModule);
    return OrdersHistoryPageModule;
}());
exports.OrdersHistoryPageModule = OrdersHistoryPageModule;
//# sourceMappingURL=orders-history.module.js.map