"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var core_2 = require("@ngx-translate/core");
var discount_1 = require("./discount/discount");
var delivery_info_1 = require("./delivery-info/delivery-info");
var ProductsCommonModule = (function () {
    function ProductsCommonModule() {
    }
    ProductsCommonModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, core_2.TranslateModule.forChild()],
            exports: [discount_1.DiscountComponent, delivery_info_1.DeliveryInfoComponent],
            declarations: [discount_1.DiscountComponent, delivery_info_1.DeliveryInfoComponent],
        })
    ], ProductsCommonModule);
    return ProductsCommonModule;
}());
exports.ProductsCommonModule = ProductsCommonModule;
//# sourceMappingURL=common.module.js.map