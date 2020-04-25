"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var core_1 = require("@angular/core");
var button_1 = require("@angular/material/button");
var form_field_1 = require("@angular/material/form-field");
var input_1 = require("@angular/material/input");
var material_extensions_1 = require("../../../modules/material-extensions");
var search_1 = require("../../../modules/material-extensions/search");
var byLocation_component_1 = require("./byLocation.component");
var google_map_module_1 = require("./google-map/google-map.module");
var location_module_1 = require("./location/location.module");
var geo_location_1 = require("app/services/geo-location");
var core_2 = require("@ngx-translate/core");
var LoginByLocationModule = (function () {
    function LoginByLocationModule() {
    }
    LoginByLocationModule = tslib_1.__decorate([
        core_1.NgModule({
            declarations: [byLocation_component_1.LoginByLocationComponent],
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                form_field_1.MatFormFieldModule,
                button_1.MatButtonModule,
                input_1.MatInputModule,
                search_1.MatSearchModule,
                material_extensions_1.MatBoldInputModule,
                google_map_module_1.GoogleMapModule,
                location_module_1.LocationFormModule,
                core_2.TranslateModule.forChild(),
            ],
            providers: [geo_location_1.GeoLocationService],
        })
    ], LoginByLocationModule);
    return LoginByLocationModule;
}());
exports.LoginByLocationModule = LoginByLocationModule;
//# sourceMappingURL=byLocation.module.js.map