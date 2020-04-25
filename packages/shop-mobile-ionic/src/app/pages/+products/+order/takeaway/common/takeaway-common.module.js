"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var store_info_component_1 = require("./store-info/store-info.component");
var title_component_1 = require("./title/title.component");
var order_info_component_1 = require("./order-info/order-info.component");
var core_2 = require("@ngx-translate/core");
var ngx_barcode_module_1 = require("@modules/client.common.angular2/components/ngx-barcode/ngx-barcode.module");
var COMPONENTS = [
    store_info_component_1.TakeawayStoreInfoComponent,
    title_component_1.TakeawayTitleComponent,
    order_info_component_1.TakeawayOrderInfoComponent,
];
var TakeawayCommonModule = (function () {
    function TakeawayCommonModule() {
    }
    TakeawayCommonModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, core_2.TranslateModule.forChild(), ngx_barcode_module_1.NgxBarcodeModule],
            entryComponents: [],
            declarations: COMPONENTS,
            providers: [],
            exports: COMPONENTS,
        })
    ], TakeawayCommonModule);
    return TakeawayCommonModule;
}());
exports.TakeawayCommonModule = TakeawayCommonModule;
//# sourceMappingURL=takeaway-common.module.js.map