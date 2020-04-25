"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var core_2 = require("@ngx-translate/core");
var forms_1 = require("@angular/forms");
var button_1 = require("@angular/material/button");
var card_1 = require("@angular/material/card");
var router_1 = require("@angular/router");
var common_module_1 = require("../common/common.module");
var warehouse_logo_1 = require("app/warehouse-logo");
var _1 = require(".");
var ProductModule = (function () {
    function ProductModule() {
    }
    ProductModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                core_2.TranslateModule.forChild(),
                forms_1.FormsModule,
                card_1.MatCardModule,
                button_1.MatButtonModule,
                router_1.RouterModule,
                common_module_1.ProductsCommonModule,
                warehouse_logo_1.WarehouseLogoModule,
            ],
            exports: [_1.ProductComponent],
            declarations: [_1.ProductComponent],
        })
    ], ProductModule);
    return ProductModule;
}());
exports.ProductModule = ProductModule;
//# sourceMappingURL=product.module.js.map