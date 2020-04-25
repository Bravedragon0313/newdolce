"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var angular_1 = require("@ionic/angular");
var order_page_1 = require("./order.page");
var core_2 = require("@ngx-translate/core");
var order_popup_component_1 = require("./order-popup.component");
var elapsed_time_module_1 = require("../../../components/elapsed-time/elapsed-time.module");
var stripeLoader_1 = require("app/services/stripeLoader");
var order_info_common_module_1 = require("./common/order-info-common.module");
var routes = [
    {
        path: '/test',
        component: order_popup_component_1.OrderPopupComponent,
    },
];
var OrderPageModule = (function () {
    function OrderPageModule() {
    }
    OrderPageModule_1 = OrderPageModule;
    var OrderPageModule_1;
    OrderPageModule = OrderPageModule_1 = tslib_1.__decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                angular_1.IonicModule,
                router_1.RouterModule.forChild(routes),
                core_2.TranslateModule.forChild(),
                elapsed_time_module_1.ElapsedTimeModule,
                order_info_common_module_1.OrderInfoCommonModule,
            ],
            entryComponents: [order_page_1.OrderPage],
            declarations: [order_page_1.OrderPage, order_popup_component_1.OrderPopupComponent],
            providers: [
                stripeLoader_1.StripeLoader,
                {
                    provide: OrderPageModule_1,
                    useFactory: stripeLoaderFactory,
                    deps: [stripeLoader_1.StripeLoader],
                },
            ],
        })
    ], OrderPageModule);
    return OrderPageModule;
}());
exports.OrderPageModule = OrderPageModule;
function stripeLoaderFactory(provider) {
    return function () { return provider; };
}
exports.stripeLoaderFactory = stripeLoaderFactory;
//# sourceMappingURL=order.module.js.map