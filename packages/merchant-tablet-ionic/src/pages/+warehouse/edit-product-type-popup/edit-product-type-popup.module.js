"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var ngx_1 = require("@ionic-native/file-transfer/ngx");
var ng2_file_upload_1 = require("ng2-file-upload");
var edit_product_type_popup_1 = require("./edit-product-type-popup");
var core_2 = require("@ngx-translate/core");
var http_1 = require("@angular/common/http");
var http_loader_1 = require("@ngx-translate/http-loader");
var products_category_service_1 = require("../../../services/products-category.service");
var angular_1 = require("@ionic/angular");
var forms_1 = require("@angular/forms");
var common_1 = require("@angular/common");
var product_images_popup_module_1 = require("../product-pictures-popup/product-images-popup.module");
function HttpLoaderFactory(http) {
    return new http_loader_1.TranslateHttpLoader(http, './assets/i18n/', '.json');
}
exports.HttpLoaderFactory = HttpLoaderFactory;
var EditProductTypePopupPageModule = (function () {
    function EditProductTypePopupPageModule() {
    }
    EditProductTypePopupPageModule = tslib_1.__decorate([
        core_1.NgModule({
            declarations: [edit_product_type_popup_1.EditProductTypePopupPage],
            entryComponents: [edit_product_type_popup_1.EditProductTypePopupPage],
            providers: [ngx_1.FileTransfer, products_category_service_1.ProductsCategoryService],
            imports: [
                ng2_file_upload_1.FileUploadModule,
                core_2.TranslateModule.forChild({
                    loader: {
                        provide: core_2.TranslateLoader,
                        useFactory: HttpLoaderFactory,
                        deps: [http_1.HttpClient],
                    },
                }),
                common_1.CommonModule,
                forms_1.FormsModule,
                angular_1.IonicModule,
                product_images_popup_module_1.ProductImagesPopupModule,
            ],
        })
    ], EditProductTypePopupPageModule);
    return EditProductTypePopupPageModule;
}());
exports.EditProductTypePopupPageModule = EditProductTypePopupPageModule;
//# sourceMappingURL=edit-product-type-popup.module.js.map