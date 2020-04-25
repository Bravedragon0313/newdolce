"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var icons_service_1 = require("./icons.service");
var IconComponent = (function () {
    function IconComponent(iconsService) {
        this.iconsService = iconsService;
        this.IconsService = icons_service_1.IconsService;
    }
    IconComponent.prototype.ngOnInit = function () {
        this.iconsService.ensureRegistered(this.type);
    };
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", String)
    ], IconComponent.prototype, "type", void 0);
    IconComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'ever-icon',
            styles: [
                "\n\t\t\tmat-icon {\n\t\t\t\tdisplay: flex;\n\t\t\t\twidth: 100%;\n\t\t\t\theight: 100%;\n\t\t\t}\n\t\t",
            ],
            template: "\n\t\t<mat-icon\n\t\t\tclass=\"ever-icon\"\n\t\t\t[ngClass]=\"'ever-icon-' + type\"\n\t\t\t[svgIcon]=\"IconsService.namespace + ':' + type\"\n\t\t>\n\t\t</mat-icon>\n\t",
        }),
        tslib_1.__metadata("design:paramtypes", [icons_service_1.IconsService])
    ], IconComponent);
    return IconComponent;
}());
exports.IconComponent = IconComponent;
//# sourceMappingURL=icon.component.js.map