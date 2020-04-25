"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var core_2 = require("@ngx-translate/core");
var ng2_file_upload_1 = require("ng2-file-upload");
var account_form_component_1 = require("./account-form.component");
var angular_1 = require("@ionic/angular");
var CarrierAccountFormsModule = (function () {
    function CarrierAccountFormsModule() {
    }
    CarrierAccountFormsModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.ReactiveFormsModule,
                angular_1.IonicModule,
                ng2_file_upload_1.FileUploadModule,
                core_2.TranslateModule.forChild(),
                forms_1.FormsModule,
            ],
            declarations: [account_form_component_1.AccountFormComponent],
            exports: [account_form_component_1.AccountFormComponent],
        })
    ], CarrierAccountFormsModule);
    return CarrierAccountFormsModule;
}());
exports.CarrierAccountFormsModule = CarrierAccountFormsModule;
//# sourceMappingURL=account-form.module.js.map