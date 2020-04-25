"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var core_2 = require("@ngx-progressbar/core");
var angular_1 = require("@ionic/angular");
var product_details_page_1 = require("./product-details.page");
var warehouse_logo_module_1 = require("../../../components/warehouse-logo/warehouse-logo.module");
var core_3 = require("@ngx-translate/core");
var http_loader_1 = require("@ngx-translate/http-loader");
var http_1 = require("@angular/common/http");
var order_module_1 = require("../+order/order.module");
var cancel_module_1 = require("../+order/+cancel/cancel.module");
var products_module_1 = require("../../../components/products/products.module");
var popup_module_1 = require("../+order/takeaway/popup/popup.module");
function HttpLoaderFactory(http) {
    return new http_loader_1.TranslateHttpLoader(http, './assets/i18n/', '.json');
}
exports.HttpLoaderFactory = HttpLoaderFactory;
var routes = [
    {
        path: '',
        component: product_details_page_1.ProductDetailsPage,
    },
];
var ProductDetailsPageModule = (function () {
    function ProductDetailsPageModule() {
    }
    ProductDetailsPageModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                angular_1.IonicModule,
                warehouse_logo_module_1.WarehouseLogoModule,
                core_2.NgProgressModule.withConfig({}),
                core_3.TranslateModule.forChild({
                    loader: {
                        provide: core_3.TranslateLoader,
                        useFactory: HttpLoaderFactory,
                        deps: [http_1.HttpClient],
                    },
                }),
                router_1.RouterModule.forChild(routes),
                order_module_1.OrderPageModule,
                cancel_module_1.CancelPageModule,
                products_module_1.ProductsModule,
                popup_module_1.OrderTakeawayInfoPopupModule,
            ],
            providers: [],
            declarations: [product_details_page_1.ProductDetailsPage],
        })
    ], ProductDetailsPageModule);
    return ProductDetailsPageModule;
}());
exports.ProductDetailsPageModule = ProductDetailsPageModule;
//# sourceMappingURL=product-details.module.js.map