"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var angular_1 = require("@ionic/angular");
var cancel_page_1 = require("./cancel.page");
var core_2 = require("@ngx-translate/core");
var routes = [
    {
        path: '/cancel-page',
        component: cancel_page_1.CancelPage,
    },
];
var CancelPageModule = (function () {
    function CancelPageModule() {
    }
    CancelPageModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                angular_1.IonicModule,
                router_1.RouterModule.forChild(routes),
                core_2.TranslateModule.forChild(),
            ],
            declarations: [cancel_page_1.CancelPage],
            entryComponents: [cancel_page_1.CancelPage],
        })
    ], CancelPageModule);
    return CancelPageModule;
}());
exports.CancelPageModule = CancelPageModule;
//# sourceMappingURL=cancel.module.js.map