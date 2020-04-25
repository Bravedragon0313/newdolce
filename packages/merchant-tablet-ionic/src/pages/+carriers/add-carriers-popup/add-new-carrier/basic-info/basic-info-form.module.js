"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var core_2 = require("@ngx-translate/core");
var basic_info_form_component_1 = require("./basic-info-form.component");
var angular_1 = require("@ionic/angular");
var file_uploader_module_1 = require("components/file-uploader/file-uploader.module");
var CarrierBasicFormsModule = (function () {
    function CarrierBasicFormsModule() {
    }
    CarrierBasicFormsModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.ReactiveFormsModule,
                angular_1.IonicModule,
                core_2.TranslateModule.forChild(),
                forms_1.FormsModule,
                file_uploader_module_1.FileUploaderModule,
            ],
            declarations: [basic_info_form_component_1.BasicInfoFormComponent],
            exports: [basic_info_form_component_1.BasicInfoFormComponent],
        })
    ], CarrierBasicFormsModule);
    return CarrierBasicFormsModule;
}());
exports.CarrierBasicFormsModule = CarrierBasicFormsModule;
//# sourceMappingURL=basic-info-form.module.js.map