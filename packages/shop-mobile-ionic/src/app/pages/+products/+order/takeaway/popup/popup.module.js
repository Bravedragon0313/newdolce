"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var angular_1 = require("@ionic/angular");
var core_2 = require("@ngx-translate/core");
var cancel_module_1 = require("../../+cancel/cancel.module");
var issue_module_1 = require("../../issue/issue.module");
var order_info_common_module_1 = require("../../common/order-info-common.module");
var popup_component_1 = require("./popup.component");
var elapsed_time_module_1 = require("app/components/elapsed-time/elapsed-time.module");
var takeaway_common_module_1 = require("../common/takeaway-common.module");
var OrderTakeawayInfoPopupModule = (function () {
    function OrderTakeawayInfoPopupModule() {
    }
    OrderTakeawayInfoPopupModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                angular_1.IonicModule,
                core_2.TranslateModule.forChild(),
                cancel_module_1.CancelPageModule,
                issue_module_1.IssuePageModule,
                order_info_common_module_1.OrderInfoCommonModule,
                elapsed_time_module_1.ElapsedTimeModule,
                takeaway_common_module_1.TakeawayCommonModule,
            ],
            entryComponents: [popup_component_1.OrderTakeawayInfoPopup],
            declarations: [popup_component_1.OrderTakeawayInfoPopup],
            providers: [],
        })
    ], OrderTakeawayInfoPopupModule);
    return OrderTakeawayInfoPopupModule;
}());
exports.OrderTakeawayInfoPopupModule = OrderTakeawayInfoPopupModule;
//# sourceMappingURL=popup.module.js.map