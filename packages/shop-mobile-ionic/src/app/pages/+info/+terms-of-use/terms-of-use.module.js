"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var angular_1 = require("@ionic/angular");
var terms_of_use_page_1 = require("./terms-of-use.page");
var core_2 = require("@ngx-translate/core");
var loaded_information_module_1 = require("../../../components/loaded-information/loaded-information.module");
var routes = [
    {
        path: '',
        component: terms_of_use_page_1.TermsOfUsePage,
    },
];
var TermsOfUsePageModule = (function () {
    function TermsOfUsePageModule() {
    }
    TermsOfUsePageModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                angular_1.IonicModule,
                router_1.RouterModule.forChild(routes),
                core_2.TranslateModule.forChild(),
                loaded_information_module_1.LoadedInformationModule,
            ],
            declarations: [terms_of_use_page_1.TermsOfUsePage],
        })
    ], TermsOfUsePageModule);
    return TermsOfUsePageModule;
}());
exports.TermsOfUsePageModule = TermsOfUsePageModule;
//# sourceMappingURL=terms-of-use.module.js.map