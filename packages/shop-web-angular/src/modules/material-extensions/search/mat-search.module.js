"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var button_1 = require("@angular/material/button");
var core_2 = require("@angular/material/core");
var mat_search_component_1 = require("./mat-search.component");
var MatSearchModule = (function () {
    function MatSearchModule() {
    }
    MatSearchModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, button_1.MatButtonModule, core_2.MatRippleModule],
            declarations: [mat_search_component_1.MatSearchComponent],
            exports: [mat_search_component_1.MatSearchComponent],
        })
    ], MatSearchModule);
    return MatSearchModule;
}());
exports.MatSearchModule = MatSearchModule;
//# sourceMappingURL=mat-search.module.js.map