"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var pages_module_guard_1 = require("../pages/pages.module.guard");
var maintenance_info_module_guard_1 = require("./+maintenance-info/maintenance-info.module.guard");
var routes = [
    {
        path: '',
        loadChildren: function () {
            return Promise.resolve().then(function () { return tslib_1.__importStar(require('../pages/pages.module')); }).then(function (m) { return m.PagesModule; });
        },
        canActivate: [pages_module_guard_1.PagesModuleGuard],
    },
    {
        path: 'maintenance-info',
        loadChildren: function () {
            return Promise.resolve().then(function () { return tslib_1.__importStar(require('./+maintenance-info/maintenance-info.module')); }).then(function (m) { return m.MaintenanceInfoPageModule; });
        },
        canActivate: [maintenance_info_module_guard_1.MaintenanceModuleGuard],
    },
    {
        path: 'server-down',
        loadChildren: function () {
            return Promise.resolve().then(function () { return tslib_1.__importStar(require('./+server-down/server-down.module')); }).then(function (m) { return m.ServerDownPageModule; });
        },
    },
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: '',
    },
];
var config = {
    useHash: true,
    enableTracing: true,
};
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map