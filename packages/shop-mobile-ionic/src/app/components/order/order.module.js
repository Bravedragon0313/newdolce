"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var angular_1 = require("@ionic/angular");
var common_1 = require("@angular/common");
var core_2 = require("@ngx-translate/core");
var warehouse_logo_module_1 = require("../warehouse-logo/warehouse-logo.module");
var product_component_1 = require("./product/product.component");
var order_component_1 = require("./order.component");
var OrderModule = (function () {
    function OrderModule() {
    }
    OrderModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [
                angular_1.IonicModule,
                common_1.CommonModule,
                warehouse_logo_module_1.WarehouseLogoModule,
                core_2.TranslateModule.forChild(),
            ],
            exports: [order_component_1.OrderComponent],
            declarations: [product_component_1.ProductComponent, order_component_1.OrderComponent],
        })
    ], OrderModule);
    return OrderModule;
}());
exports.OrderModule = OrderModule;
//# sourceMappingURL=order.module.js.map