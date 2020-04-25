"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var angular_1 = require("@ionic/angular");
var core_2 = require("@ngx-translate/core");
var order_info_page_1 = require("./order-info.page");
var cancel_module_1 = require("../+cancel/cancel.module");
var user_warehouse_map_1 = require("./user-warehouse-map/user-warehouse-map");
var issue_module_1 = require("../issue/issue.module");
var elapsed_time_module_1 = require("../../../../components/elapsed-time/elapsed-time.module");
var stripeLoader_1 = require("app/services/stripeLoader");
var order_info_common_module_1 = require("../common/order-info-common.module");
var routes = [
    {
        path: '',
        component: order_info_page_1.OrderInfoPage,
    },
];
var OrderInfoPageModule = (function () {
    function OrderInfoPageModule() {
    }
    OrderInfoPageModule_1 = OrderInfoPageModule;
    var OrderInfoPageModule_1;
    OrderInfoPageModule = OrderInfoPageModule_1 = tslib_1.__decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                angular_1.IonicModule,
                router_1.RouterModule.forChild(routes),
                core_2.TranslateModule.forChild(),
                cancel_module_1.CancelPageModule,
                issue_module_1.IssuePageModule,
                elapsed_time_module_1.ElapsedTimeModule,
                order_info_common_module_1.OrderInfoCommonModule,
            ],
            entryComponents: [],
            declarations: [order_info_page_1.OrderInfoPage, user_warehouse_map_1.UserWarehouseLocationComponent],
            providers: [
                stripeLoader_1.StripeLoader,
                {
                    provide: OrderInfoPageModule_1,
                    useFactory: stripeLoaderFactory,
                    deps: [stripeLoader_1.StripeLoader],
                },
            ],
        })
    ], OrderInfoPageModule);
    return OrderInfoPageModule;
}());
exports.OrderInfoPageModule = OrderInfoPageModule;
function stripeLoaderFactory(provider) {
    return function () { return provider; };
}
exports.stripeLoaderFactory = stripeLoaderFactory;
//# sourceMappingURL=order-info.module.js.map