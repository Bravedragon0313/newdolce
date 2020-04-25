"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var login_module_guard_1 = require("./+login/login.module.guard");
var warehouse_module_guard_1 = require("./+warehouse/warehouse.module.guard");
var info_module_guard_1 = require("./+info/info.module.guard");
var routes = [
    {
        path: 'login',
        loadChildren: function () {
            return Promise.resolve().then(function () { return tslib_1.__importStar(require('./+login/login.module')); }).then(function (m) { return m.LoginPageModule; });
        },
        canLoad: [login_module_guard_1.LoginModuleGuard],
    },
    {
        path: 'warehouse',
        loadChildren: function () {
            return Promise.resolve().then(function () { return tslib_1.__importStar(require('./+warehouse/warehouse.module')); }).then(function (m) { return m.WarehousePageModule; });
        },
        canLoad: [warehouse_module_guard_1.WarehouseModuleGuard],
    },
    {
        path: 'language',
        loadChildren: function () {
            return Promise.resolve().then(function () { return tslib_1.__importStar(require('./+language/language.module')); }).then(function (m) { return m.LanguagePageModule; });
        },
    },
    {
        path: 'customers',
        loadChildren: function () {
            return Promise.resolve().then(function () { return tslib_1.__importStar(require('./+customers/customers.module')); }).then(function (m) { return m.CustomersPageModule; });
        },
    },
    {
        path: 'carriers',
        loadChildren: function () {
            return Promise.resolve().then(function () { return tslib_1.__importStar(require('./+carriers/carriers.module')); }).then(function (m) { return m.CarrierssPageModule; });
        },
    },
    {
        path: 'track',
        loadChildren: function () {
            return Promise.resolve().then(function () { return tslib_1.__importStar(require('./+track/track.module')); }).then(function (m) { return m.TrackPageModule; });
        },
    },
    {
        path: 'track/:id',
        loadChildren: function () {
            return Promise.resolve().then(function () { return tslib_1.__importStar(require('./+track/track.module')); }).then(function (m) { return m.TrackPageModule; });
        },
    },
    {
        path: 'settings',
        loadChildren: function () {
            return Promise.resolve().then(function () { return tslib_1.__importStar(require('./+settings/settings.module')); }).then(function (m) { return m.SettingsPageModule; });
        },
    },
    {
        path: 'info',
        loadChildren: function () {
            return Promise.resolve().then(function () { return tslib_1.__importStar(require('./+info/info.module')); }).then(function (m) { return m.InfoModule; });
        },
        canLoad: [info_module_guard_1.InfoModuleGuard],
    },
    {
        path: 'errors',
        loadChildren: function () {
            return Promise.resolve().then(function () { return tslib_1.__importStar(require('./+errors/errors.module')); }).then(function (m) { return m.ErrorsModule; });
        },
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'login',
    },
];
var PagesModule = (function () {
    function PagesModule() {
    }
    PagesModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            providers: [login_module_guard_1.LoginModuleGuard, warehouse_module_guard_1.WarehouseModuleGuard, info_module_guard_1.InfoModuleGuard],
            exports: [router_1.RouterModule],
        })
    ], PagesModule);
    return PagesModule;
}());
exports.PagesModule = PagesModule;
//# sourceMappingURL=pages.module.js.map