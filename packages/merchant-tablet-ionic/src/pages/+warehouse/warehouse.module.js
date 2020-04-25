"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var warehouse_1 = require("./warehouse");
var components_module_1 = require("../../components/components.module");
var core_2 = require("@ngx-translate/core");
var http_1 = require("@angular/common/http");
var http_loader_1 = require("@ngx-translate/http-loader");
var order_module_1 = require("../../components/order/order.module");
var ngx_pagination_1 = require("ngx-pagination");
var all_orders_component_1 = require("./all-oders/all-orders.component");
var warehouse_orders_service_1 = require("../../services/warehouse-orders.service");
var store_service_1 = require("../../services/store.service");
var relevant_orders_component_1 = require("./relevant-oders/relevant-orders.component");
var warehouse_common_module_1 = require("./common/warehouse.common.module");
var common_1 = require("@angular/common");
var all_products_component_1 = require("./all-products/all-products.component");
var top_products_component_1 = require("./top-products/top-products.component");
var warehouse_products_service_1 = require("../../services/warehouse-products.service");
var ngx_masonry_1 = require("ngx-masonry");
var router_1 = require("@angular/router");
var angular_1 = require("@ionic/angular");
var create_product_type_popup_module_1 = require("./create-product-type-popup/create-product-type-popup.module");
var edit_product_type_popup_module_1 = require("./edit-product-type-popup/edit-product-type-popup.module");
function HttpLoaderFactory(http) {
    return new http_loader_1.TranslateHttpLoader(http, './assets/i18n/', '.json');
}
exports.HttpLoaderFactory = HttpLoaderFactory;
var routes = [
    {
        path: '',
        component: warehouse_1.WarehousePage,
    },
];
var WarehousePageModule = (function () {
    function WarehousePageModule() {
    }
    WarehousePageModule = tslib_1.__decorate([
        core_1.NgModule({
            declarations: [
                warehouse_1.WarehousePage,
                all_orders_component_1.AllOrdersComponent,
                relevant_orders_component_1.RelevantOrdersComponent,
                all_products_component_1.AllProductsComponent,
                top_products_component_1.TopProductsComponent,
            ],
            imports: [
                components_module_1.ComponentsModule,
                order_module_1.OrderModule,
                common_1.CommonModule,
                angular_1.IonicModule,
                router_1.RouterModule.forChild(routes),
                core_2.TranslateModule.forChild({
                    loader: {
                        provide: core_2.TranslateLoader,
                        useFactory: HttpLoaderFactory,
                        deps: [http_1.HttpClient],
                    },
                }),
                ngx_pagination_1.NgxPaginationModule,
                warehouse_common_module_1.WarehouseCommonModule,
                ngx_masonry_1.NgxMasonryModule,
                create_product_type_popup_module_1.CreateProductTypePopupPageModule,
                edit_product_type_popup_module_1.EditProductTypePopupPageModule,
            ],
            providers: [warehouse_orders_service_1.WarehouseOrdersService, store_service_1.Store, warehouse_products_service_1.WarehouseProductsService],
        })
    ], WarehousePageModule);
    return WarehousePageModule;
}());
exports.WarehousePageModule = WarehousePageModule;
//# sourceMappingURL=warehouse.module.js.map