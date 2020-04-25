"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var products_component_1 = require("./products.component");
var ng_lazyload_image_1 = require("ng-lazyload-image");
var products_routes_1 = require("./products.routes");
var card_1 = require("@angular/material/card");
var form_field_1 = require("@angular/material/form-field");
var icon_1 = require("@angular/material/icon");
var input_1 = require("@angular/material/input");
var router_1 = require("@angular/router");
var product_details_1 = require("./product-details");
var warehouse_logo_1 = require("../warehouse-logo");
var core_2 = require("@ngx-translate/core");
var http_1 = require("@angular/common/http");
var http_loader_1 = require("@ngx-translate/http-loader");
var geo_location_1 = require("app/services/geo-location");
var geo_location_products_1 = require("app/services/geo-location-products");
var warehouse_products_1 = require("app/services/warehouse-products");
var common_module_1 = require("./common/common.module");
var ngx_drag_scroll_1 = require("ngx-drag-scroll");
var carousel_view_module_1 = require("./views/carousel/carousel-view.module");
var list_view_module_1 = require("./views/list/list-view.module");
var forms_1 = require("@angular/forms");
function HttpLoaderFactory(http) {
    return new http_loader_1.TranslateHttpLoader(http, './assets/i18n/', '.json');
}
exports.HttpLoaderFactory = HttpLoaderFactory;
var ProductsModule = (function () {
    function ProductsModule() {
    }
    ProductsModule.routes = products_routes_1.routes;
    ProductsModule = tslib_1.__decorate([
        core_1.NgModule({
            declarations: [products_component_1.ProductsComponent, product_details_1.ProductDetailsComponent],
            imports: [
                common_1.CommonModule,
                core_2.TranslateModule.forChild({
                    loader: {
                        provide: core_2.TranslateLoader,
                        useFactory: HttpLoaderFactory,
                        deps: [http_1.HttpClient],
                    },
                }),
                router_1.RouterModule.forChild(products_routes_1.routes),
                ng_lazyload_image_1.LazyLoadImageModule,
                warehouse_logo_1.WarehouseLogoModule,
                card_1.MatCardModule,
                common_module_1.ProductsCommonModule,
                icon_1.MatIconModule,
                ngx_drag_scroll_1.DragScrollModule,
                carousel_view_module_1.CarouselViewModule,
                list_view_module_1.ListViewModule,
                forms_1.FormsModule,
                form_field_1.MatFormFieldModule,
                input_1.MatInputModule,
            ],
            providers: [
                geo_location_1.GeoLocationService,
                geo_location_products_1.GeoLocationProductsService,
                warehouse_products_1.WarehouseProductsService,
            ],
        })
    ], ProductsModule);
    return ProductsModule;
}());
exports.ProductsModule = ProductsModule;
//# sourceMappingURL=products.module.js.map