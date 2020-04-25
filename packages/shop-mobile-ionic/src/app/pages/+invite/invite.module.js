"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var angular_1 = require("@ionic/angular");
var invite_page_1 = require("./invite.page");
var by_location_module_guard_1 = require("./+by-location/by-location.module.guard");
var by_code_module_guard_1 = require("./+by-code/by-code.module.guard");
var routes = [
    {
        path: '',
        component: invite_page_1.InvitePage,
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'by-code',
            },
            {
                path: 'by-code',
                loadChildren: function () {
                    return Promise.resolve().then(function () { return tslib_1.__importStar(require('./+by-code/by-code.module')); }).then(function (m) { return m.ByCodePageModule; });
                },
                canLoad: [by_code_module_guard_1.ByCodeModuleGuard],
            },
            {
                path: 'by-location',
                loadChildren: function () {
                    return Promise.resolve().then(function () { return tslib_1.__importStar(require('./+by-location/by-location.module')); }).then(function (m) { return m.ByLocationPageModule; });
                },
                canLoad: [by_location_module_guard_1.ByLocationModuleGuard],
            },
        ],
    },
];
var InvitePageModule = (function () {
    function InvitePageModule() {
    }
    InvitePageModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                angular_1.IonicModule,
                router_1.RouterModule.forChild(routes),
            ],
            providers: [by_location_module_guard_1.ByLocationModuleGuard, by_code_module_guard_1.ByCodeModuleGuard],
            declarations: [invite_page_1.InvitePage],
        })
    ], InvitePageModule);
    return InvitePageModule;
}());
exports.InvitePageModule = InvitePageModule;
//# sourceMappingURL=invite.module.js.map