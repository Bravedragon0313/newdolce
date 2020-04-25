"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var view_type_component_1 = require("./view-type.component");
var button_toggle_1 = require("@angular/material/button-toggle");
var icon_1 = require("@angular/material/icon");
var tooltip_1 = require("@angular/material/tooltip");
var forms_1 = require("@angular/forms");
var fontawesome_svg_core_1 = require("@fortawesome/fontawesome-svg-core");
var free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
var free_regular_svg_icons_1 = require("@fortawesome/free-regular-svg-icons");
var angular_fontawesome_1 = require("@fortawesome/angular-fontawesome");
var ViewTypeModule = (function () {
    function ViewTypeModule() {
        fontawesome_svg_core_1.library.add(free_solid_svg_icons_1.fas, free_regular_svg_icons_1.far);
    }
    ViewTypeModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                button_toggle_1.MatButtonToggleModule,
                icon_1.MatIconModule,
                angular_fontawesome_1.FontAwesomeModule,
                tooltip_1.MatTooltipModule,
            ],
            exports: [view_type_component_1.ViewTypeComponent],
            declarations: [view_type_component_1.ViewTypeComponent],
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], ViewTypeModule);
    return ViewTypeModule;
}());
exports.ViewTypeModule = ViewTypeModule;
//# sourceMappingURL=view-type.modeule.js.map