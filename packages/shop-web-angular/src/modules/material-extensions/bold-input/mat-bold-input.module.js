"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var core_2 = require("@angular/material/core");
var mat_bold_input_component_1 = require("./mat-bold-input.component");
var MatBoldInputModule = (function () {
    function MatBoldInputModule() {
    }
    MatBoldInputModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, forms_1.FormsModule, core_2.MatRippleModule],
            declarations: [mat_bold_input_component_1.MatBoldInputComponent],
            exports: [mat_bold_input_component_1.MatBoldInputComponent],
        })
    ], MatBoldInputModule);
    return MatBoldInputModule;
}());
exports.MatBoldInputModule = MatBoldInputModule;
//# sourceMappingURL=mat-bold-input.module.js.map