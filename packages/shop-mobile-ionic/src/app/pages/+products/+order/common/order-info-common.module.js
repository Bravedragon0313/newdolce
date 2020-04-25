"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var angular_1 = require("@ionic/angular");
var core_2 = require("@ngx-translate/core");
var cancel_module_1 = require("../+cancel/cancel.module");
var issue_module_1 = require("../issue/issue.module");
var elapsed_time_module_1 = require("app/components/elapsed-time/elapsed-time.module");
var carreir_location_1 = require("./carreir-location/carreir-location");
var order_info_header_component_1 = require("./header/order-info-header.component");
var payment_component_1 = require("./payment/payment.component");
var map_modal_component_1 = require("./map-modal/map-modal.component");
var COMPONENTS = [
    carreir_location_1.DirectionsLocationComponent,
    order_info_header_component_1.OrderInfoHeaderComponent,
    payment_component_1.PaymentComponent,
    map_modal_component_1.MapModalComponent,
];
var OrderInfoCommonModule = (function () {
    function OrderInfoCommonModule() {
    }
    OrderInfoCommonModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                angular_1.IonicModule,
                core_2.TranslateModule.forChild(),
                cancel_module_1.CancelPageModule,
                issue_module_1.IssuePageModule,
                elapsed_time_module_1.ElapsedTimeModule,
            ],
            entryComponents: tslib_1.__spreadArrays(COMPONENTS),
            declarations: tslib_1.__spreadArrays(COMPONENTS),
            exports: tslib_1.__spreadArrays(COMPONENTS),
            providers: [],
        })
    ], OrderInfoCommonModule);
    return OrderInfoCommonModule;
}());
exports.OrderInfoCommonModule = OrderInfoCommonModule;
//# sourceMappingURL=order-info-common.module.js.map