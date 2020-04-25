"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var core_2 = require("@ngx-translate/core");
var button_1 = require("@angular/material/button");
var card_1 = require("@angular/material/card");
var dialog_1 = require("@angular/material/dialog");
var location_popup_component_1 = require("./location-popup.component");
var location_module_1 = require("app/+login/byLocation/location/location.module");
var google_map_module_1 = require("app/+login/byLocation/google-map/google-map.module");
var COMPONENTS = [location_popup_component_1.LocationPopupComponent];
var LocationPopupModalModule = (function () {
    function LocationPopupModalModule() {
    }
    LocationPopupModalModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                dialog_1.MatDialogModule,
                button_1.MatButtonModule,
                card_1.MatCardModule,
                core_2.TranslateModule.forChild(),
                location_module_1.LocationFormModule,
                google_map_module_1.GoogleMapModule,
            ],
            declarations: COMPONENTS,
            entryComponents: COMPONENTS,
            exports: COMPONENTS,
        })
    ], LocationPopupModalModule);
    return LocationPopupModalModule;
}());
exports.LocationPopupModalModule = LocationPopupModalModule;
//# sourceMappingURL=location-popup.module.js.map