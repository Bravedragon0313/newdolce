"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var icon_1 = require("@angular/material/icon");
var platform_browser_1 = require("@angular/platform-browser");
var icon_already_registered_error_1 = require("./icon-already-registered.error");
var IconsService = (function () {
    function IconsService(iconRegistry, sanitizer) {
        this.iconRegistry = iconRegistry;
        this.sanitizer = sanitizer;
        this.registeredIcons = new Set();
    }
    IconsService.prototype.ensureRegistered = function (icon) {
        if (this.isRegistered(icon)) {
            return;
        }
        this.register(icon);
    };
    IconsService.prototype.register = function (icon) {
        if (this.isRegistered(icon)) {
            throw new icon_already_registered_error_1.IconAlreadyRegisteredError();
        }
        this.iconRegistry.addSvgIconInNamespace('ever', icon, this.sanitizer.bypassSecurityTrustResourceUrl("icons/" + icon + ".svg"));
        this.registeredIcons.add(icon);
    };
    IconsService.prototype.isRegistered = function (icon) {
        return this.registeredIcons.has(icon);
    };
    IconsService.namespace = 'ever';
    IconsService = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [icon_1.MatIconRegistry,
            platform_browser_1.DomSanitizer])
    ], IconsService);
    return IconsService;
}());
exports.IconsService = IconsService;
//# sourceMappingURL=icons.service.js.map