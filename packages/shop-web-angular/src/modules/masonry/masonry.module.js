"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var masonry_component_1 = require("./masonry.component");
var masonry_brick_directive_1 = require("./masonry-brick.directive");
exports.MASONRY_DIRECTIVES = [masonry_component_1.MasonryComponent, masonry_brick_directive_1.MasonryBrickDirective];
var MasonryModule = (function () {
    function MasonryModule() {
    }
    MasonryModule = tslib_1.__decorate([
        core_1.NgModule({
            declarations: exports.MASONRY_DIRECTIVES,
            exports: exports.MASONRY_DIRECTIVES,
        })
    ], MasonryModule);
    return MasonryModule;
}());
exports.MasonryModule = MasonryModule;
//# sourceMappingURL=masonry.module.js.map