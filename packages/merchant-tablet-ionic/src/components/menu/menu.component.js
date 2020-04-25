"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var store_service_1 = require("services/store.service");
var MenuComponent = (function () {
    function MenuComponent(store) {
        this.store = store;
    }
    Object.defineProperty(MenuComponent.prototype, "maintenanceMode", {
        get: function () {
            return this.store.maintenanceMode;
        },
        enumerable: true,
        configurable: true
    });
    MenuComponent.prototype.menuOpened = function () { };
    MenuComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'e-cu-menu',
            templateUrl: './menu.component.html',
            styleUrls: ['./menu.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [store_service_1.Store])
    ], MenuComponent);
    return MenuComponent;
}());
exports.MenuComponent = MenuComponent;
//# sourceMappingURL=menu.component.js.map