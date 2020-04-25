"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var no_content_1 = require("./no-content");
var login_module_guard_1 = require("./+login/login.module.guard");
var products_module_guard_1 = require("./+products/products.module.guard");
var app_module_guard_1 = require("./app.module.guard");
var maintenance_info_module_guard_1 = require("./+maintenance-info/maintenance-info.module.guard");
var auth_guard_1 = require("./authentication/auth.guard");
exports.ROUTES = [
    {
        path: '',
        children: [
            {
                path: '',
                redirectTo: '/login',
                pathMatch: 'full',
            },
            {
                path: 'login',
                loadChildren: function () {
                    return Promise.resolve().then(function () { return __importStar(require('./+login')); }).then(function (m) { return m.LoginModule; });
                },
                canActivate: [login_module_guard_1.LoginModuleGuard],
            },
            {
                path: 'products',
                loadChildren: function () {
                    return Promise.resolve().then(function () { return __importStar(require('./+products')); }).then(function (m) { return m.ProductsModule; });
                },
                canActivate: [products_module_guard_1.ProductsModuleGuard, auth_guard_1.AuthGuard],
            },
            {
                path: 'orders',
                loadChildren: function () {
                    return Promise.resolve().then(function () { return __importStar(require('./+orders')); }).then(function (m) { return m.OrdersModule; });
                },
                canActivate: [auth_guard_1.AuthGuard],
            },
            {
                path: 'settings',
                loadChildren: function () {
                    return Promise.resolve().then(function () { return __importStar(require('./+settings')); }).then(function (m) { return m.SettingsModule; });
                },
                canActivate: [auth_guard_1.AuthGuard],
            },
        ],
        canActivate: [app_module_guard_1.AppModuleGuard],
    },
    {
        path: 'maintenance-info',
        loadChildren: function () {
            return Promise.resolve().then(function () { return __importStar(require('./+maintenance-info/maintenance-info.module')); }).then(function (m) { return m.MaintenanceInfoModule; });
        },
        canActivate: [maintenance_info_module_guard_1.MaintenanceModuleGuard],
    },
    {
        path: 'server-down',
        loadChildren: function () {
            return Promise.resolve().then(function () { return __importStar(require('./+server-down/server-down.module')); }).then(function (m) { return m.ServerDownModule; });
        },
    },
    {
        path: '**',
        component: no_content_1.NoContentComponent,
    },
];
//# sourceMappingURL=app.routes.js.map