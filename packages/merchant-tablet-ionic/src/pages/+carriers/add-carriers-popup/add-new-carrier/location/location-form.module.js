"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var core_2 = require("@ngx-translate/core");
var ng2_file_upload_1 = require("ng2-file-upload");
var location_form_component_1 = require("./location-form.component");
var google_map_module_1 = require("../../../../../@shared/google-map/google-map.module");
var angular_1 = require("@ionic/angular");
var CarrierLocationFormsModule = (function () {
    function CarrierLocationFormsModule() {
    }
    CarrierLocationFormsModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.ReactiveFormsModule,
                angular_1.IonicModule,
                ng2_file_upload_1.FileUploadModule,
                google_map_module_1.GoogleMapModule,
                core_2.TranslateModule.forChild(),
                forms_1.FormsModule,
            ],
            declarations: [location_form_component_1.LocationFormComponent],
            exports: [location_form_component_1.LocationFormComponent],
        })
    ], CarrierLocationFormsModule);
    return CarrierLocationFormsModule;
}());
exports.CarrierLocationFormsModule = CarrierLocationFormsModule;
//# sourceMappingURL=location-form.module.js.map