"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var WarehouseLogoComponent = (function () {
    function WarehouseLogoComponent() {
        this.border = false;
        this.light = false;
        return;
    }
    WarehouseLogoComponent.prototype.ngOnInit = function () {
        return;
    };
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", String)
    ], WarehouseLogoComponent.prototype, "logo", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        core_1.HostBinding('class.bordered'),
        tslib_1.__metadata("design:type", Boolean)
    ], WarehouseLogoComponent.prototype, "border", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], WarehouseLogoComponent.prototype, "light", void 0);
    WarehouseLogoComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'warehouse-logo',
            styles: [
                "\n\t\t\t:host {\n\t\t\t\twidth: 56px;\n\t\t\t\theight: 56px;\n\t\t\t\tborder-radius: 50%;\n\t\t\t\tbackground-color: #fff;\n\t\t\t\tdisplay: flex;\n\t\t\t\tjustify-content: center;\n\t\t\t\talign-items: center;\n\t\t\t}\n\n\t\t\t:host.bordered {\n\t\t\t\tborder: solid #95989a 1px;\n\t\t\t}\n\n\t\t\timg {\n\t\t\t\tmax-width: 69%;\n\t\t\t\tmax-height: 69%;\n\t\t\t\tuser-drag: none;\n\t\t\t\tuser-select: none;\n\t\t\t\t-moz-user-select: none;\n\t\t\t\t-webkit-user-drag: none;\n\t\t\t\t-webkit-user-select: none;\n\t\t\t\t-ms-user-select: none;\n\t\t\t\twidth: auto;\n\t\t\t\theight: auto;\n\t\t\t}\n\n\t\t\timg.light {\n\t\t\t\topacity: 0.8;\n\t\t\t}\n\t\t",
            ],
            template: "\n\t\t<img [src]=\"logo\" [ngClass]=\"{ bordered: border, lighted: light }\" />\n\t",
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], WarehouseLogoComponent);
    return WarehouseLogoComponent;
}());
exports.WarehouseLogoComponent = WarehouseLogoComponent;
//# sourceMappingURL=warehouse-logo.component.js.map