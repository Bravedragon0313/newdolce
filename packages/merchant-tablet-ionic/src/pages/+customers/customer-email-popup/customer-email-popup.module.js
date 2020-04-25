"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var customer_email_popup_1 = require("./customer-email-popup");
var core_2 = require("@ngx-translate/core");
var angular_1 = require("@ionic/angular");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var CustomerEmailPopupPageModule = (function () {
    function CustomerEmailPopupPageModule() {
    }
    CustomerEmailPopupPageModule = tslib_1.__decorate([
        core_1.NgModule({
            declarations: [customer_email_popup_1.CustomerEmailPopupPage],
            entryComponents: [customer_email_popup_1.CustomerEmailPopupPage],
            imports: [
                core_2.TranslateModule.forChild(),
                angular_1.IonicModule,
                common_1.CommonModule,
                forms_1.FormsModule,
            ],
        })
    ], CustomerEmailPopupPageModule);
    return CustomerEmailPopupPageModule;
}());
exports.CustomerEmailPopupPageModule = CustomerEmailPopupPageModule;
//# sourceMappingURL=customer-email-popup.module.js.map