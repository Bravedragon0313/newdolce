"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var angular_1 = require("@ionic/angular");
var core_2 = require("@ngx-translate/core");
var ng2_file_upload_1 = require("ng2-file-upload");
var file_uploader_component_1 = require("./file-uploader.component");
var forms_1 = require("@angular/forms");
var FileUploaderModule = (function () {
    function FileUploaderModule() {
    }
    FileUploaderModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                angular_1.IonicModule,
                forms_1.FormsModule,
                core_2.TranslateModule.forChild(),
                ng2_file_upload_1.FileUploadModule,
            ],
            exports: [file_uploader_component_1.FileUploaderComponent],
            declarations: [file_uploader_component_1.FileUploaderComponent],
        })
    ], FileUploaderModule);
    return FileUploaderModule;
}());
exports.FileUploaderModule = FileUploaderModule;
//# sourceMappingURL=file-uploader.module.js.map