"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var angular_1 = require("@ionic/angular");
var core_2 = require("@ngx-translate/core");
var elapsed_time_module_1 = require("app/components/elapsed-time/elapsed-time.module");
var order_info_common_module_1 = require("../../../common/order-info-common.module");
var store_info_component_1 = require("./store-info.component");
var takeaway_common_module_1 = require("../../common/takeaway-common.module");
var OrderStoreInfoModule = (function () {
    function OrderStoreInfoModule() {
    }
    OrderStoreInfoModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                angular_1.IonicModule,
                core_2.TranslateModule.forChild(),
                elapsed_time_module_1.ElapsedTimeModule,
                order_info_common_module_1.OrderInfoCommonModule,
                takeaway_common_module_1.TakeawayCommonModule,
            ],
            entryComponents: [],
            declarations: [store_info_component_1.OrderStoreInfo],
            providers: [],
            exports: [store_info_component_1.OrderStoreInfo],
        })
    ], OrderStoreInfoModule);
    return OrderStoreInfoModule;
}());
exports.OrderStoreInfoModule = OrderStoreInfoModule;
//# sourceMappingURL=store-info.module.js.map