"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var angular_1 = require("@ionic/angular");
var loaded_information_component_1 = require("./loaded-information.component");
var pipes_module_1 = require("@modules/client.common.angular2/pipes/pipes.module");
var LoadedInformationModule = (function () {
    function LoadedInformationModule() {
    }
    LoadedInformationModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, angular_1.IonicModule, pipes_module_1.PipesModule],
            exports: [loaded_information_component_1.LoadedInformationComponent],
            declarations: [loaded_information_component_1.LoadedInformationComponent],
        })
    ], LoadedInformationModule);
    return LoadedInformationModule;
}());
exports.LoadedInformationModule = LoadedInformationModule;
//# sourceMappingURL=loaded-information.module.js.map