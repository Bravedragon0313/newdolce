"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var products_module_guard_1 = require("./+products/products.module.guard");
var invite_module_guard_1 = require("./+invite/invite.module.guard");
var info_module_guard_1 = require("./+info/info.module.guard");
var maintenance_service_1 = require("@modules/client.common.angular2/services/maintenance.service");
var takeaway_page_module_guard_1 = require("./+products/+order/takeaway/+page/takeaway-page.module.guard");
var order_info_module_guard_1 = require("./+products/+order/+order-info/order-info.module.guard");
var orders_history_module_guard_1 = require("./+orders-history/orders-history.module.guard");
var merchants_module_guard_1 = require("./+merchants/merchants.module.guard");
var routes = [
    {
        path: 'products',
        loadChildren: function () {
            return Promise.resolve().then(function () { return tslib_1.__importStar(require('./+products/products.module')); }).then(function (m) { return m.ProductsPageModule; });
        },
        canLoad: [products_module_guard_1.ProductsModuleGuard],
    },
    {
        path: 'products/product-details/:id',
        loadChildren: function () {
            return Promise.resolve().then(function () { return tslib_1.__importStar(require('./+products/product-details/product-details.module')); }).then(function (m) { return m.ProductDetailsPageModule; });
        },
    },
    {
        path: 'orders-history',
        loadChildren: function () {
            return Promise.resolve().then(function () { return tslib_1.__importStar(require('./+orders-history/orders-history.module')); }).then(function (m) { return m.OrdersHistoryPageModule; });
        },
        canLoad: [orders_history_module_guard_1.OrdersHistoryModuleGuard],
    },
    {
        path: 'invite',
        loadChildren: function () {
            return Promise.resolve().then(function () { return tslib_1.__importStar(require('./+invite/invite.module')); }).then(function (m) { return m.InvitePageModule; });
        },
        canLoad: [invite_module_guard_1.InviteModuleGuard],
    },
    {
        path: 'info',
        loadChildren: function () {
            return Promise.resolve().then(function () { return tslib_1.__importStar(require('./+info/info.module')); }).then(function (m) { return m.InfoModule; });
        },
        canLoad: [info_module_guard_1.InfoModuleGuard],
    },
    {
        path: 'language',
        loadChildren: function () {
            return Promise.resolve().then(function () { return tslib_1.__importStar(require('./+language/language.module')); }).then(function (m) { return m.LanguagePageModule; });
        },
    },
    {
        path: 'errors',
        loadChildren: function () {
            return Promise.resolve().then(function () { return tslib_1.__importStar(require('./+errors/errors.module')); }).then(function (m) { return m.ErrorsModule; });
        },
    },
    {
        path: 'order-info',
        loadChildren: function () {
            return Promise.resolve().then(function () { return tslib_1.__importStar(require('./+products/+order/+order-info/order-info.module')); }).then(function (m) { return m.OrderInfoPageModule; });
        },
        canLoad: [order_info_module_guard_1.OrderInfoPageModuleGuard],
    },
    {
        path: 'order-info-takeaway',
        loadChildren: function () {
            return Promise.resolve().then(function () { return tslib_1.__importStar(require('./+products/+order/takeaway/+page/takeaway-page.module')); }).then(function (m) { return m.OrderTakeawayInfoPageModule; });
        },
        canLoad: [takeaway_page_module_guard_1.OrderTakeawayInfoModuleGuard],
    },
    {
        path: 'merchants',
        loadChildren: function () {
            return Promise.resolve().then(function () { return tslib_1.__importStar(require('./+merchants/merchants.module')); }).then(function (m) { return m.MerchantsPageModule; });
        },
        canLoad: [merchants_module_guard_1.MerchantsPageModuleGuard],
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'invite',
    },
];
var PagesModule = (function () {
    function PagesModule() {
    }
    PagesModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            providers: [
                products_module_guard_1.ProductsModuleGuard,
                invite_module_guard_1.InviteModuleGuard,
                info_module_guard_1.InfoModuleGuard,
                maintenance_service_1.MaintenanceService,
                takeaway_page_module_guard_1.OrderTakeawayInfoModuleGuard,
                order_info_module_guard_1.OrderInfoPageModuleGuard,
                orders_history_module_guard_1.OrdersHistoryModuleGuard,
                merchants_module_guard_1.MerchantsPageModuleGuard,
            ],
            exports: [router_1.RouterModule],
        })
    ], PagesModule);
    return PagesModule;
}());
exports.PagesModule = PagesModule;
//# sourceMappingURL=pages.module.js.map