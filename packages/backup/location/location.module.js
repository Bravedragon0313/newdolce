"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var core_1 = require("@angular/core");
var button_1 = require("@angular/material/button");
var checkbox_1 = require("@angular/material/checkbox");
var form_field_1 = require("@angular/material/form-field");
var icon_1 = require("@angular/material/icon");
var input_1 = require("@angular/material/input");
var select_1 = require("@angular/material/select");
var material_extensions_1 = require("@modules/material-extensions");
var location_component_1 = require("./location.component");
var core_2 = require("@ngx-translate/core");
var LocationFormModule = (function () {
    function LocationFormModule() {
    }
    LocationFormModule = tslib_1.__decorate([
        core_1.NgModule({
            declarations: [location_component_1.LocationFormComponent],
            exports: [location_component_1.LocationFormComponent],
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                form_field_1.MatFormFieldModule,
                button_1.MatButtonModule,
                input_1.MatInputModule,
                select_1.MatSelectModule,
                icon_1.MatIconModule,
                checkbox_1.MatCheckboxModule,
                material_extensions_1.MatSearchModule,
                material_extensions_1.MatBoldInputModule,
                core_2.TranslateModule.forChild(),
            ],
        })
    ], LocationFormModule);
    return LocationFormModule;
}());
exports.LocationFormModule = LocationFormModule;
//# sourceMappingURL=location.module.js.map