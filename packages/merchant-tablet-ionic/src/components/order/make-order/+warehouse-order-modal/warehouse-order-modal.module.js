"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var ng2_smart_table_1 = require("ng2-smart-table");
var warehouse_order_modal_component_1 = require("./warehouse-order-modal.component");
var warehouse_order_input_component_1 = require("./warehouse-order-input.component");
var core_2 = require("@ngx-translate/core");
var COMPONENTS = [warehouse_order_modal_component_1.WarehouseOrderModalComponent, warehouse_order_input_component_1.WarehouseOrderInputComponent];
var WarehouseOrderModalModule = (function () {
    function WarehouseOrderModalModule() {
    }
    WarehouseOrderModalModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, ng2_smart_table_1.Ng2SmartTableModule, core_2.TranslateModule.forChild()],
            declarations: [warehouse_order_modal_component_1.WarehouseOrderModalComponent, warehouse_order_input_component_1.WarehouseOrderInputComponent],
            entryComponents: COMPONENTS,
            exports: COMPONENTS,
        })
    ], WarehouseOrderModalModule);
    return WarehouseOrderModalModule;
}());
exports.WarehouseOrderModalModule = WarehouseOrderModalModule;
//# sourceMappingURL=warehouse-order-modal.module.js.map