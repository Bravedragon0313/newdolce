"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var angular_1 = require("@ionic/angular");
var loading_component_1 = require("./loading.component");
var LoadingModule = (function () {
    function LoadingModule() {
    }
    LoadingModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, angular_1.IonicModule],
            exports: [loading_component_1.LoadingComponent],
            declarations: [loading_component_1.LoadingComponent],
        })
    ], LoadingModule);
    return LoadingModule;
}());
exports.LoadingModule = LoadingModule;
//# sourceMappingURL=loading.module.js.map