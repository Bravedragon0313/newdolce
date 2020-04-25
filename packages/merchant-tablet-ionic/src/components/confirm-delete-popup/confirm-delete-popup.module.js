"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var angular2_wizard_1 = require("angular2-wizard");
var ng2_smart_table_1 = require("ng2-smart-table");
var core_2 = require("@ngx-translate/core");
var forms_1 = require("@angular/forms");
var ng2_file_upload_1 = require("ng2-file-upload");
var angular_1 = require("@ionic/angular");
var common_1 = require("@angular/common");
var confirm_delete_popup_1 = require("./confirm-delete-popup");
var ConfirmDeletePopupModule = (function () {
    function ConfirmDeletePopupModule() {
    }
    ConfirmDeletePopupModule = tslib_1.__decorate([
        core_1.NgModule({
            declarations: [confirm_delete_popup_1.ConfirmDeletePopupPage],
            entryComponents: [confirm_delete_popup_1.ConfirmDeletePopupPage],
            imports: [
                angular2_wizard_1.FormWizardModule,
                ng2_smart_table_1.Ng2SmartTableModule,
                ng2_file_upload_1.FileUploadModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                core_2.TranslateModule.forChild(),
                angular_1.IonicModule,
                common_1.CommonModule,
                forms_1.FormsModule,
            ],
        })
    ], ConfirmDeletePopupModule);
    return ConfirmDeletePopupModule;
}());
exports.ConfirmDeletePopupModule = ConfirmDeletePopupModule;
//# sourceMappingURL=confirm-delete-popup.module.js.map