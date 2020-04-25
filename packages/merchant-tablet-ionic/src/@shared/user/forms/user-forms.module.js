"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var basic_info_form_component_1 = require("./basic-info/basic-info-form.component");
var location_form_component_1 = require("./location/location-form.component");
var core_2 = require("@ngx-translate/core");
var angular_1 = require("@ionic/angular");
var file_uploader_module_1 = require("components/file-uploader/file-uploader.module");
var UserFormsModule = (function () {
    function UserFormsModule() {
    }
    UserFormsModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.ReactiveFormsModule,
                angular_1.IonicModule,
                forms_1.FormsModule,
                core_2.TranslateModule.forChild(),
                file_uploader_module_1.FileUploaderModule,
            ],
            declarations: [basic_info_form_component_1.BasicInfoFormComponent, location_form_component_1.LocationFormComponent],
            exports: [basic_info_form_component_1.BasicInfoFormComponent, location_form_component_1.LocationFormComponent],
        })
    ], UserFormsModule);
    return UserFormsModule;
}());
exports.UserFormsModule = UserFormsModule;
//# sourceMappingURL=user-forms.module.js.map