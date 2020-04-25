"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var icon_1 = require("@angular/material/icon");
var icon_component_1 = require("./icon.component");
var icons_service_1 = require("./icons.service");
var IconsModule = (function () {
    function IconsModule() {
    }
    IconsModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, icon_1.MatIconModule],
            exports: [icon_component_1.IconComponent],
            declarations: [icon_component_1.IconComponent],
            providers: [icons_service_1.IconsService],
        })
    ], IconsModule);
    return IconsModule;
}());
exports.IconsModule = IconsModule;
//# sourceMappingURL=icons.module.js.map