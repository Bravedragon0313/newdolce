"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var angular2_wizard_1 = require("angular2-wizard");
var ng2_smart_table_1 = require("ng2-smart-table");
var core_2 = require("@ngx-translate/core");
var add_new_carrier_1 = require("./add-new-carrier");
var forms_1 = require("@angular/forms");
var ng2_file_upload_1 = require("ng2-file-upload");
var basic_info_form_module_1 = require("./basic-info/basic-info-form.module");
var account_form_module_1 = require("./account/account-form.module");
var location_form_module_1 = require("./location/location-form.module");
var google_map_module_1 = require("../../../../@shared/google-map/google-map.module");
var angular_1 = require("@ionic/angular");
var common_1 = require("@angular/common");
var AddNewCarriersPopupPageModule = (function () {
    function AddNewCarriersPopupPageModule() {
    }
    AddNewCarriersPopupPageModule = tslib_1.__decorate([
        core_1.NgModule({
            declarations: [add_new_carrier_1.AddNewCarrierComponent],
            entryComponents: [add_new_carrier_1.AddNewCarrierComponent],
            exports: [add_new_carrier_1.AddNewCarrierComponent],
            imports: [
                angular2_wizard_1.FormWizardModule,
                ng2_smart_table_1.Ng2SmartTableModule,
                ng2_file_upload_1.FileUploadModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                basic_info_form_module_1.CarrierBasicFormsModule,
                account_form_module_1.CarrierAccountFormsModule,
                location_form_module_1.CarrierLocationFormsModule,
                google_map_module_1.GoogleMapModule,
                core_2.TranslateModule.forChild(),
                angular_1.IonicModule,
                common_1.CommonModule,
                forms_1.FormsModule,
            ],
        })
    ], AddNewCarriersPopupPageModule);
    return AddNewCarriersPopupPageModule;
}());
exports.AddNewCarriersPopupPageModule = AddNewCarriersPopupPageModule;
//# sourceMappingURL=add-new-carrier.module.js.map