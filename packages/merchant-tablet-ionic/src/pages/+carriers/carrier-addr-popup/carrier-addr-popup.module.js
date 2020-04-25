"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var carrier_addr_popup_1 = require("./carrier-addr-popup");
var core_2 = require("@ngx-translate/core");
var angular_1 = require("@ionic/angular");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var CarrierAddrPopupPageModule = (function () {
    function CarrierAddrPopupPageModule() {
    }
    CarrierAddrPopupPageModule = tslib_1.__decorate([
        core_1.NgModule({
            declarations: [carrier_addr_popup_1.CarrierAddrPopupPage],
            entryComponents: [carrier_addr_popup_1.CarrierAddrPopupPage],
            imports: [
                core_2.TranslateModule.forChild(),
                angular_1.IonicModule,
                common_1.CommonModule,
                forms_1.FormsModule,
            ],
        })
    ], CarrierAddrPopupPageModule);
    return CarrierAddrPopupPageModule;
}());
exports.CarrierAddrPopupPageModule = CarrierAddrPopupPageModule;
//# sourceMappingURL=carrier-addr-popup.module.js.map