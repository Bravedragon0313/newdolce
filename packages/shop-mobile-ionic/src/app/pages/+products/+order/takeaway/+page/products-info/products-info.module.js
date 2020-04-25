"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var angular_1 = require("@ionic/angular");
var products_info_component_1 = require("./products-info.component");
var core_2 = require("@ngx-translate/core");
var order_info_common_module_1 = require("../../../common/order-info-common.module");
var takeaway_common_module_1 = require("../../common/takeaway-common.module");
var OrderProductsInfoModule = (function () {
    function OrderProductsInfoModule() {
    }
    OrderProductsInfoModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                angular_1.IonicModule,
                core_2.TranslateModule.forChild(),
                order_info_common_module_1.OrderInfoCommonModule,
                takeaway_common_module_1.TakeawayCommonModule,
            ],
            entryComponents: [],
            declarations: [products_info_component_1.OrderProductsInfo],
            providers: [],
            exports: [products_info_component_1.OrderProductsInfo],
        })
    ], OrderProductsInfoModule);
    return OrderProductsInfoModule;
}());
exports.OrderProductsInfoModule = OrderProductsInfoModule;
//# sourceMappingURL=products-info.module.js.map