"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var angular_1 = require("@ionic/angular");
var menu_component_1 = require("./menu.component");
var router_1 = require("@angular/router");
var core_2 = require("@ngx-translate/core");
var MenuModule = (function () {
    function MenuModule() {
    }
    MenuModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                router_1.RouterModule,
                angular_1.IonicModule,
                core_2.TranslateModule.forChild(),
            ],
            exports: [menu_component_1.MenuComponent],
            declarations: [menu_component_1.MenuComponent],
        })
    ], MenuModule);
    return MenuModule;
}());
exports.MenuModule = MenuModule;
//# sourceMappingURL=menu.module.js.map