"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var store_sign_component_1 = require("./store-sign/store-sign.component");
var common_1 = require("@angular/common");
var core_2 = require("@ngx-translate/core");
var COMPONENTS = [store_sign_component_1.StoreSignComponent];
var CommonProducts = (function () {
    function CommonProducts() {
    }
    CommonProducts = tslib_1.__decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, core_2.TranslateModule.forChild()],
            declarations: COMPONENTS,
            exports: COMPONENTS,
        })
    ], CommonProducts);
    return CommonProducts;
}());
exports.CommonProducts = CommonProducts;
//# sourceMappingURL=common-products.module.js.map