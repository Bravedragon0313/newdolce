"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var core_2 = require("@ngx-translate/core");
var carousel_view_component_1 = require("./carousel-view.component");
var card_1 = require("@angular/material/card");
var ngx_hm_carousel_1 = require("ngx-hm-carousel");
var forms_1 = require("@angular/forms");
var geo_location_products_1 = require("app/services/geo-location-products");
var geo_location_1 = require("app/services/geo-location");
var product_module_1 = require("app/+products/product/product.module");
var view_type_modeule_1 = require("app/view-type/view-type.modeule");
var CarouselViewModule = (function () {
    function CarouselViewModule() {
    }
    CarouselViewModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                core_2.TranslateModule.forChild(),
                forms_1.FormsModule,
                card_1.MatCardModule,
                ngx_hm_carousel_1.NgxHmCarouselModule,
                product_module_1.ProductModule,
                view_type_modeule_1.ViewTypeModule,
            ],
            declarations: [carousel_view_component_1.CarouselViewComponent],
            exports: [carousel_view_component_1.CarouselViewComponent],
            providers: [geo_location_products_1.GeoLocationProductsService, geo_location_1.GeoLocationService],
        })
    ], CarouselViewModule);
    return CarouselViewModule;
}());
exports.CarouselViewModule = CarouselViewModule;
//# sourceMappingURL=carousel-view.module.js.map