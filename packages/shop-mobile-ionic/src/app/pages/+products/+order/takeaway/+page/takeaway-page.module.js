"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var router_1 = require("@angular/router");
var takeaway_page_page_1 = require("./takeaway-page.page");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var angular_1 = require("@ionic/angular");
var core_2 = require("@ngx-translate/core");
var cancel_module_1 = require("../../+cancel/cancel.module");
var issue_module_1 = require("../../issue/issue.module");
var forms_1 = require("@angular/forms");
var order_info_common_module_1 = require("../../common/order-info-common.module");
var store_info_module_1 = require("./store-info/store-info.module");
var products_info_module_1 = require("./products-info/products-info.module");
var routes = [
    {
        path: '',
        component: takeaway_page_page_1.OrderTakeawayInfoPage,
    },
];
var OrderTakeawayInfoPageModule = (function () {
    function OrderTakeawayInfoPageModule() {
    }
    OrderTakeawayInfoPageModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                angular_1.IonicModule,
                router_1.RouterModule.forChild(routes),
                core_2.TranslateModule.forChild(),
                cancel_module_1.CancelPageModule,
                issue_module_1.IssuePageModule,
                order_info_common_module_1.OrderInfoCommonModule,
                store_info_module_1.OrderStoreInfoModule,
                products_info_module_1.OrderProductsInfoModule,
            ],
            entryComponents: [],
            declarations: [takeaway_page_page_1.OrderTakeawayInfoPage],
            providers: [],
        })
    ], OrderTakeawayInfoPageModule);
    return OrderTakeawayInfoPageModule;
}());
exports.OrderTakeawayInfoPageModule = OrderTakeawayInfoPageModule;
//# sourceMappingURL=takeaway-page.module.js.map