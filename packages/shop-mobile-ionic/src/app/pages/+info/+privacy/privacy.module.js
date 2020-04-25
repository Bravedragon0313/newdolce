"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var angular_1 = require("@ionic/angular");
var privacy_page_1 = require("./privacy.page");
var core_2 = require("@ngx-translate/core");
var loaded_information_module_1 = require("../../../components/loaded-information/loaded-information.module");
var routes = [
    {
        path: '',
        component: privacy_page_1.PrivacyPage,
    },
];
var PrivacyPageModule = (function () {
    function PrivacyPageModule() {
    }
    PrivacyPageModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                angular_1.IonicModule,
                router_1.RouterModule.forChild(routes),
                core_2.TranslateModule.forChild(),
                loaded_information_module_1.LoadedInformationModule,
            ],
            declarations: [privacy_page_1.PrivacyPage],
        })
    ], PrivacyPageModule);
    return PrivacyPageModule;
}());
exports.PrivacyPageModule = PrivacyPageModule;
//# sourceMappingURL=privacy.module.js.map