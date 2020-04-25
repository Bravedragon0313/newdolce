"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var angular_1 = require("@ionic/angular");
var help_page_1 = require("./help.page");
var core_2 = require("@ngx-translate/core");
var routes = [
    {
        path: '',
        component: help_page_1.HelpPage,
    },
];
var HelpPageModule = (function () {
    function HelpPageModule() {
    }
    HelpPageModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                angular_1.IonicModule,
                router_1.RouterModule.forChild(routes),
                core_2.TranslateModule.forChild(),
            ],
            declarations: [help_page_1.HelpPage],
        })
    ], HelpPageModule);
    return HelpPageModule;
}());
exports.HelpPageModule = HelpPageModule;
//# sourceMappingURL=help.module.js.map