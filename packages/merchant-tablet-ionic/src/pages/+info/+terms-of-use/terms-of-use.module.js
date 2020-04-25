"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var pipes_module_1 = require("@modules/client.common.angular2/pipes/pipes.module");
var core_2 = require("@ngx-translate/core");
var components_module_1 = require("components/components.module");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var angular_1 = require("@ionic/angular");
var terms_of_use_1 = require("./terms-of-use");
var routes = [
    {
        path: '',
        component: terms_of_use_1.TermsOfUsePage,
    },
];
var TermsOfUsePageModule = (function () {
    function TermsOfUsePageModule() {
    }
    TermsOfUsePageModule = tslib_1.__decorate([
        core_1.NgModule({
            declarations: [terms_of_use_1.TermsOfUsePage],
            imports: [
                core_2.TranslateModule.forChild(),
                pipes_module_1.PipesModule,
                components_module_1.ComponentsModule,
                common_1.CommonModule,
                forms_1.FormsModule,
                angular_1.IonicModule,
                router_1.RouterModule.forChild(routes),
            ],
        })
    ], TermsOfUsePageModule);
    return TermsOfUsePageModule;
}());
exports.TermsOfUsePageModule = TermsOfUsePageModule;
//# sourceMappingURL=terms-of-use.module.js.map