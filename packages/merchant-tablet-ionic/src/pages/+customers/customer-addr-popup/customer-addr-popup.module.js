"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var customer_addr_popup_1 = require("./customer-addr-popup");
var core_2 = require("@ngx-translate/core");
var common_1 = require("@angular/common");
var CustomerAddrPopupPageModule = (function () {
    function CustomerAddrPopupPageModule() {
    }
    CustomerAddrPopupPageModule = tslib_1.__decorate([
        core_1.NgModule({
            declarations: [customer_addr_popup_1.CustomerAddrPopupPage],
            entryComponents: [customer_addr_popup_1.CustomerAddrPopupPage],
            imports: [core_2.TranslateModule.forChild(), common_1.CommonModule],
        })
    ], CustomerAddrPopupPageModule);
    return CustomerAddrPopupPageModule;
}());
exports.CustomerAddrPopupPageModule = CustomerAddrPopupPageModule;
//# sourceMappingURL=customer-addr-popup.module.js.map