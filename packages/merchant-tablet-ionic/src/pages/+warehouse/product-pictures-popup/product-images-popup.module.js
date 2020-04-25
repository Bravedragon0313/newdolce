"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var product_images_popup_component_1 = require("./product-images-popup.component");
var core_2 = require("@ngx-translate/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var angular_1 = require("@ionic/angular");
var file_uploader_module_1 = require("components/file-uploader/file-uploader.module");
var ProductImagesPopupModule = (function () {
    function ProductImagesPopupModule() {
    }
    ProductImagesPopupModule = tslib_1.__decorate([
        core_1.NgModule({
            declarations: [product_images_popup_component_1.ProductImagesPopup],
            entryComponents: [product_images_popup_component_1.ProductImagesPopup],
            providers: [],
            imports: [
                file_uploader_module_1.FileUploaderModule,
                core_2.TranslateModule.forChild(),
                common_1.CommonModule,
                forms_1.FormsModule,
                angular_1.IonicModule,
            ],
        })
    ], ProductImagesPopupModule);
    return ProductImagesPopupModule;
}());
exports.ProductImagesPopupModule = ProductImagesPopupModule;
//# sourceMappingURL=product-images-popup.module.js.map