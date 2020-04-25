"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var warehouse_logo_component_1 = require("./warehouse-logo.component");
var common_1 = require("@angular/common");
var WarehouseLogoModule = (function () {
    function WarehouseLogoModule() {
    }
    WarehouseLogoModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule],
            exports: [warehouse_logo_component_1.WarehouseLogoComponent],
            declarations: [warehouse_logo_component_1.WarehouseLogoComponent],
            providers: [],
        })
    ], WarehouseLogoModule);
    return WarehouseLogoModule;
}());
exports.WarehouseLogoModule = WarehouseLogoModule;
//# sourceMappingURL=warehouse-logo.module.js.map