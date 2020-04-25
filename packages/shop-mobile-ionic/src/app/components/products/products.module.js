"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var angular_1 = require("@ionic/angular");
var common_1 = require("@angular/common");
var core_2 = require("@ngx-translate/core");
var discount_1 = require("./discount/discount");
var delivery_info_1 = require("./delivery-info/delivery-info");
var ProductsModule = (function () {
    function ProductsModule() {
    }
    ProductsModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [angular_1.IonicModule, common_1.CommonModule, core_2.TranslateModule.forChild()],
            exports: [discount_1.DiscountComponent, delivery_info_1.DeliveryInfoComponent],
            declarations: [discount_1.DiscountComponent, delivery_info_1.DeliveryInfoComponent],
        })
    ], ProductsModule);
    return ProductsModule;
}());
exports.ProductsModule = ProductsModule;
//# sourceMappingURL=products.module.js.map