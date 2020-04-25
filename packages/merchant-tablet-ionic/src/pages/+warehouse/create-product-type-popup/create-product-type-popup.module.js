"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var ngx_1 = require("@ionic-native/file-transfer/ngx");
var core_2 = require("@ngx-translate/core");
var ng2_file_upload_1 = require("ng2-file-upload");
var create_product_type_popup_1 = require("./create-product-type-popup");
var products_category_service_1 = require("../../../services/products-category.service");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var angular_1 = require("@ionic/angular");
var product_images_popup_module_1 = require("../product-pictures-popup/product-images-popup.module");
var CreateProductTypePopupPageModule = (function () {
    function CreateProductTypePopupPageModule() {
    }
    CreateProductTypePopupPageModule = tslib_1.__decorate([
        core_1.NgModule({
            declarations: [create_product_type_popup_1.CreateProductTypePopupPage],
            entryComponents: [create_product_type_popup_1.CreateProductTypePopupPage],
            providers: [ngx_1.FileTransfer, products_category_service_1.ProductsCategoryService],
            imports: [
                ng2_file_upload_1.FileUploadModule,
                core_2.TranslateModule.forChild(),
                common_1.CommonModule,
                forms_1.FormsModule,
                angular_1.IonicModule,
                product_images_popup_module_1.ProductImagesPopupModule,
            ],
        })
    ], CreateProductTypePopupPageModule);
    return CreateProductTypePopupPageModule;
}());
exports.CreateProductTypePopupPageModule = CreateProductTypePopupPageModule;
//# sourceMappingURL=create-product-type-popup.module.js.map