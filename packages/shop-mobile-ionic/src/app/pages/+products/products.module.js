"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var angular_1 = require("@ionic/angular");
var products_page_1 = require("./products.page");
var core_2 = require("@ngx-translate/core");
var slides_view_component_1 = require("./products-view/slides-view/slides-view.component");
var list_view_component_1 = require("./products-view/list-view/list-view.component");
var products_page_guard_1 = require("./products.page.guard");
var order_module_guard_1 = require("./+order/order.module.guard");
var warehouse_logo_module_1 = require("../../components/warehouse-logo/warehouse-logo.module");
var products_view_component_1 = require("./products-view/products-view.component");
var core_3 = require("@ngx-progressbar/core");
var order_module_1 = require("./+order/order.module");
var cancel_module_1 = require("./+order/+cancel/cancel.module");
var geo_location_1 = require("../../services/geo-location");
var products_module_1 = require("../../components/products/products.module");
var pipes_module_1 = require("@modules/client.common.angular2/pipes/pipes.module");
var popup_module_1 = require("./+order/takeaway/popup/popup.module");
var common_products_module_1 = require("./common/common-products.module");
var geo_location_products_1 = require("app/services/geo-location/geo-location-products");
var warehouse_products_1 = require("app/services/merchants/warehouse-products");
var routes = [
    {
        path: '',
        component: products_page_1.ProductsPage,
        canActivate: [products_page_guard_1.ProductsPageGuard],
        children: [
            {
                path: 'order',
                loadChildren: function () {
                    return Promise.resolve().then(function () { return tslib_1.__importStar(require('./+order/order.module')); }).then(function (m) { return m.OrderPageModule; });
                },
                canLoad: [order_module_guard_1.OrderModuleGuard],
            },
        ],
    },
];
var ProductsPageModule = (function () {
    function ProductsPageModule() {
    }
    ProductsPageModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                angular_1.IonicModule,
                router_1.RouterModule.forChild(routes),
                core_2.TranslateModule.forChild(),
                products_module_1.ProductsModule,
                core_3.NgProgressModule.withConfig({}),
                pipes_module_1.PipesModule,
                warehouse_logo_module_1.WarehouseLogoModule,
                order_module_1.OrderPageModule,
                cancel_module_1.CancelPageModule,
                popup_module_1.OrderTakeawayInfoPopupModule,
                common_products_module_1.CommonProducts,
            ],
            providers: [
                products_page_guard_1.ProductsPageGuard,
                order_module_guard_1.OrderModuleGuard,
                geo_location_1.GeoLocationService,
                geo_location_products_1.GeoLocationProductsService,
                warehouse_products_1.WarehouseProductsService,
            ],
            declarations: [
                products_page_1.ProductsPage,
                slides_view_component_1.ProductsSlidesViewComponent,
                list_view_component_1.ProductsListViewComponent,
                products_view_component_1.ProductsViewComponent,
            ],
        })
    ], ProductsPageModule);
    return ProductsPageModule;
}());
exports.ProductsPageModule = ProductsPageModule;
//# sourceMappingURL=products.module.js.map