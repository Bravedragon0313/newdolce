"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var core_2 = require("@ngx-translate/core");
var order_map_popup_1 = require("./order-map-popup");
var angular_1 = require("@ionic/angular");
var common_1 = require("@angular/common");
var OrderMapPopupPageModule = (function () {
    function OrderMapPopupPageModule() {
    }
    OrderMapPopupPageModule = tslib_1.__decorate([
        core_1.NgModule({
            declarations: [order_map_popup_1.OrderMapPopupPage],
            imports: [core_2.TranslateModule.forChild(), angular_1.IonicModule, common_1.CommonModule],
            exports: [order_map_popup_1.OrderMapPopupPage],
            entryComponents: [order_map_popup_1.OrderMapPopupPage],
        })
    ], OrderMapPopupPageModule);
    return OrderMapPopupPageModule;
}());
exports.OrderMapPopupPageModule = OrderMapPopupPageModule;
//# sourceMappingURL=order-map-popup.module.js.map