"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var about_1 = require("./about");
var pipes_module_1 = require("@modules/client.common.angular2/pipes/pipes.module");
var core_2 = require("@ngx-translate/core");
var components_module_1 = require("components/components.module");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var angular_1 = require("@ionic/angular");
var routes = [
    {
        path: '',
        component: about_1.AboutPage,
    },
];
var AboutPageModule = (function () {
    function AboutPageModule() {
    }
    AboutPageModule = tslib_1.__decorate([
        core_1.NgModule({
            declarations: [about_1.AboutPage],
            imports: [
                pipes_module_1.PipesModule,
                components_module_1.ComponentsModule,
                router_1.RouterModule.forChild(routes),
                core_2.TranslateModule.forChild(),
                common_1.CommonModule,
                forms_1.FormsModule,
                angular_1.IonicModule,
            ],
        })
    ], AboutPageModule);
    return AboutPageModule;
}());
exports.AboutPageModule = AboutPageModule;
//# sourceMappingURL=about.module.js.map