"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var google_map_component_1 = require("./google-map.component");
var GoogleMapModule = (function () {
    function GoogleMapModule() {
    }
    GoogleMapModule = tslib_1.__decorate([
        core_1.NgModule({
            declarations: [google_map_component_1.GoogleMapComponent],
            exports: [google_map_component_1.GoogleMapComponent],
        })
    ], GoogleMapModule);
    return GoogleMapModule;
}());
exports.GoogleMapModule = GoogleMapModule;
//# sourceMappingURL=google-map.module.js.map