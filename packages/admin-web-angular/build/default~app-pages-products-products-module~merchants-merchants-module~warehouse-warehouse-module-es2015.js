(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~app-pages-products-products-module~merchants-merchants-module~warehouse-warehouse-module"],{

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/@shared/product/forms/basic-info/basic-info-form.component.html":
/*!*********************************************************************************************************************************************************************!*\
  !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/raw-loader/dist/cjs.js!./src/app/@shared/product/forms/basic-info/basic-info-form.component.html ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div\n\tclass=\"col-md-12 col-lg-12 col-sm-12 product-basic-info\"\n\t[formGroup]=\"form\"\n\t*ngIf=\"form\"\n>\n\t<fieldset>\n\t\t<div class=\"form-group row\">\n\t\t\t<label class=\"col-sm-2 control-label\">{{\n\t\t\t\t'Title' | translate\n\t\t\t}}</label>\n\t\t\t<div class=\"col-sm-9\">\n\t\t\t\t<input\n\t\t\t\t\ttype=\"text\"\n\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\tplaceholder=\"{{\n\t\t\t\t\t\t'WAREHOUSE_VIEW.PLACEHOLDER.EXAMPLE' | translate\n\t\t\t\t\t}}\"\n\t\t\t\t\tformControlName=\"title\"\n\t\t\t\t/>\n\n\t\t\t\t<span\n\t\t\t\t\t*ngIf=\"title?.invalid && (title.dirty || title.touched)\"\n\t\t\t\t\tclass=\"alert alert-danger\"\n\t\t\t\t>\n\t\t\t\t\t<span *ngIf=\"title.errors.required\">\n\t\t\t\t\t\t{{\n\t\t\t\t\t\t\t'PRODUCT_TYPE_VIEW.WIZARD_FORM.VALIDATION_MESSAGES.TITLE'\n\t\t\t\t\t\t\t\t| translate\n\t\t\t\t\t\t}}!\n\t\t\t\t\t</span>\n\n\t\t\t\t\t<span *ngIf=\"title.errors.maxlength\">\n\t\t\t\t\t\t{{\n\t\t\t\t\t\t\t'PRODUCT_TYPE_VIEW.WIZARD_FORM.VALIDATION_MESSAGES.THE_LENGHT_OF_THE_TITLE'\n\t\t\t\t\t\t\t\t| translate\n\t\t\t\t\t\t}}\n\t\t\t\t\t</span>\n\t\t\t\t</span>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"form-group row\">\n\t\t\t<label class=\"col-sm-2 control-label\">{{\n\t\t\t\t'Picture Url' | translate\n\t\t\t}}</label>\n\t\t\t<div class=\"col-sm-9\">\n\t\t\t\t<e-cu-file-uploader\n\t\t\t\t\t[placeholder]=\"uploaderPlaceholder\"\n\t\t\t\t\t[fileUrl]=\"imagesUrls\"\n\t\t\t\t\t[locale]=\"locale.value\"\n\t\t\t\t\t(uploadedImgObj)=\"addImageObj($event)\"\n\t\t\t\t></e-cu-file-uploader>\n\n\t\t\t\t<span\n\t\t\t\t\t*ngIf=\"(imagesArr || uploaderChanged) && image.invalid\"\n\t\t\t\t\tclass=\"alert alert-danger\"\n\t\t\t\t>\n\t\t\t\t\t{{\n\t\t\t\t\t\t'PRODUCT_TYPE_VIEW.WIZARD_FORM.VALIDATION_MESSAGES.IMAGE'\n\t\t\t\t\t\t\t| translate\n\t\t\t\t\t}}!\n\t\t\t\t</span>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div\n\t\t\tclass=\"form-group row images-container mt-0\"\n\t\t\t*ngIf=\"imagesArr && imagesArr.length > 0\"\n\t\t>\n\t\t\t<label class=\"col-sm-2 control-label\"></label>\n\t\t\t<div\n\t\t\t\tclass=\"mt-0 images-content mt-2\"\n\t\t\t\t*ngFor=\"let image of imagesArr\"\n\t\t\t>\n\t\t\t\t<div class=\"row preview-img\">\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<img\n\t\t\t\t\t\t\t#productImagePreview\n\t\t\t\t\t\t\tsrc=\"{{ image }}\"\n\t\t\t\t\t\t\talt=\"Invalid image\"\n\t\t\t\t\t\t\tclass=\"img-rounded\"\n\t\t\t\t\t\t\t(load)=\"imgOnLoad()\"\n\t\t\t\t\t\t\t(error)=\"imgOnError()\"\n\t\t\t\t\t\t/>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div\n\t\t\t\t\t\tclass=\"removeIcon pl-2 pr-2\"\n\t\t\t\t\t\t(click)=\"deleteImg(image)\"\n\t\t\t\t\t>\n\t\t\t\t\t\t<div\n\t\t\t\t\t\t\tclass=\"ion-md-remove-circle\"\n\t\t\t\t\t\t\tplaceholder=\"Remove image\"\n\t\t\t\t\t\t\ttitle=\"remove\"\n\t\t\t\t\t\t></div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"form-group row\">\n\t\t\t<label class=\"col-sm-2 control-label\">{{\n\t\t\t\t'Description' | translate\n\t\t\t}}</label>\n\t\t\t<div class=\"col-sm-9\">\n\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t<textarea\n\t\t\t\t\t\trows=\"5\"\n\t\t\t\t\t\tplaceholder=\"{{\n\t\t\t\t\t\t\t'WAREHOUSE_VIEW.PLACEHOLDER.HERE_GOES_A_SHORT_DESCRIPTION'\n\t\t\t\t\t\t\t\t| translate\n\t\t\t\t\t\t}}\"\n\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\tformControlName=\"description\"\n\t\t\t\t\t></textarea>\n\t\t\t\t</div>\n\n\t\t\t\t<span\n\t\t\t\t\t*ngIf=\"\n\t\t\t\t\t\tdescription?.invalid &&\n\t\t\t\t\t\t(description.dirty || description.touched)\n\t\t\t\t\t\"\n\t\t\t\t\tclass=\"alert alert-danger\"\n\t\t\t\t>\n\t\t\t\t\t<span *ngIf=\"description.errors.required\">\n\t\t\t\t\t\t{{\n\t\t\t\t\t\t\t'PRODUCT_TYPE_VIEW.WIZARD_FORM.VALIDATION_MESSAGES.DESCRIPTION'\n\t\t\t\t\t\t\t\t| translate\n\t\t\t\t\t\t}}!\n\t\t\t\t\t</span>\n\n\t\t\t\t\t<span *ngIf=\"description.errors.maxlength\">\n\t\t\t\t\t\t{{\n\t\t\t\t\t\t\t'PRODUCT_TYPE_VIEW.WIZARD_FORM.VALIDATION_MESSAGES.THE_LENGHT_OF_THE_DESCRIPTION'\n\t\t\t\t\t\t\t\t| translate\n\t\t\t\t\t\t}}\n\t\t\t\t\t</span>\n\t\t\t\t</span>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"form-group row\">\n\t\t\t<label class=\"col-sm-2 control-label\">{{\n\t\t\t\t'Details' | translate\n\t\t\t}}</label>\n\t\t\t<div class=\"col-sm-9\">\n\t\t\t\t<input\n\t\t\t\t\ttype=\"text\"\n\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\tplaceholder=\"{{\n\t\t\t\t\t\t'WAREHOUSE_VIEW.PLACEHOLDER.HERE_GOES_A_DETAILS_ABOUT_PRODUCT_(OPTION)'\n\t\t\t\t\t\t\t| translate\n\t\t\t\t\t}}\"\n\t\t\t\t\tformControlName=\"details\"\n\t\t\t\t/>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"form-group row\">\n\t\t\t<label class=\"col-sm-2 control-label\">{{\n\t\t\t\t'CATEGORY' | translate\n\t\t\t}}</label>\n\t\t\t<div class=\"col-sm-9\">\n\t\t\t\t<ss-multiselect-dropdown\n\t\t\t\t\t[texts]=\"{\n\t\t\t\t\t\tdefaultTitle: 'SELECT' | translate,\n\t\t\t\t\t\tsearchEmptyResult:\n\t\t\t\t\t\t\t'WAREHOUSE_VIEW.NEW_PRODUCT.NOTHING_FOUND'\n\t\t\t\t\t\t\t| translate\n\t\t\t\t\t}\"\n\t\t\t\t\t[options]=\"categoryOptions\"\n\t\t\t\t\t[settings]=\"{ displayAllSelectedText: true }\"\n\t\t\t\t\tformControlName=\"selectedProductCategories\"\n\t\t\t\t\tclass=\"categoryOptions-dropdown\"\n\t\t\t\t>\n\t\t\t\t</ss-multiselect-dropdown>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"form-group row\">\n\t\t\t<label class=\"col-sm-2 control-label\">{{\n\t\t\t\t'LANGUAGE' | translate\n\t\t\t}}</label>\n\t\t\t<div class=\"col-sm-9\">\n\t\t\t\t<select class=\"form-control\" formControlName=\"locale\">\n\t\t\t\t\t<option value=\"en-US\">{{ 'ENGLISH' | translate }}</option>\n\t\t\t\t\t<option value=\"he-IL\">{{ 'HEBREW' | translate }}</option>\n\t\t\t\t\t<option value=\"ru-RU\">{{ 'RUSSIAN' | translate }}</option>\n\t\t\t\t\t<option value=\"bg-BG\">{{ 'BULGARIAN' | translate }}</option>\n\t\t\t\t\t<option value=\"es-ES\">{{ 'SPANISH' | translate }}</option>\n\t\t\t\t\t<option value=\"bg-BG\">{{ 'ITALIAN' | translate }}</option>\n\t\t\t\t\t<option value=\"es-ES\">{{ 'FRENCH' | translate }}</option>\n\t\t\t\t</select>\n\t\t\t</div>\n\t\t</div>\n\t</fieldset>\n</div>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/@shared/product/forms/products-table/products-table.component.html":
/*!************************************************************************************************************************************************************************!*\
  !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/raw-loader/dist/cjs.js!./src/app/@shared/product/forms/products-table/products-table.component.html ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nb-card\n\t[ngClass]=\"boxShadow === 'none' ? 'no-box-shadow' : ''\"\n\t[nbSpinner]=\"loading\"\n>\n\t<ng2-smart-table\n\t\tclass=\"products-table\"\n\t\t[settings]=\"settingsSmartTable\"\n\t\t[source]=\"sourceSmartTable\"\n\t\t(userRowSelect)=\"selectProductTmp($event)\"\n\t\t(edit)=\"edit($event)\"\n\t\t(delete)=\"deleteProduct($event)\"\n\t>\n\t</ng2-smart-table>\n</nb-card>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/@shared/render-component/product-categories/product-categories.html":
/*!*************************************************************************************************************************************************************************!*\
  !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/raw-loader/dist/cjs.js!./src/app/@shared/render-component/product-categories/product-categories.html ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngFor=\"let category of categoriesArr\">\n\t<img src=\"{{ category.image }}\" alt=\"Category Image\" />\n\t{{ getTranslates(category.name) }}\n</div>\n");

/***/ }),

/***/ "./src/app/@core/services/notify/notify.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/@core/services/notify/notify.service.ts ***!
  \*********************************************************/
/*! exports provided: NotifyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotifyService", function() { return NotifyService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let NotifyService = class NotifyService {
    constructor(_toasterService) {
        this._toasterService = _toasterService;
    }
    success(title, body) {
        this._setupToast('success', title, body);
        this._notify();
    }
    warn(title, body) {
        this._setupToast('warning', title, body);
        this._notify();
    }
    error(title, body) {
        this._setupToast('error', title, body);
        this._notify();
    }
    _setupToast(type, title, body) {
        this._toast = { type, title, body };
    }
    _notify() {
        this._toasterService.pop(this._toast);
    }
};
NotifyService.ctorParameters = () => [
    { type: angular2_toaster__WEBPACK_IMPORTED_MODULE_1__["ToasterService"] }
];
NotifyService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [angular2_toaster__WEBPACK_IMPORTED_MODULE_1__["ToasterService"]])
], NotifyService);



/***/ }),

/***/ "./src/app/@shared/product/forms/basic-info/basic-info-form.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/@shared/product/forms/basic-info/basic-info-form.component.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".product-basic-info ::ng-deep .categoryOptions-dropdown .ng-star-inserted {\n  margin-top: 0 !important;\n}\n\n.product-basic-info ::ng-deep .categoryOptions-dropdown .dropdown,\n.product-basic-info ::ng-deep .categoryOptions-dropdown .dropdown-menu {\n  border: 2px solid #dadfe6;\n  border-radius: 0.375rem;\n  background-color: white !important;\n  width: 100%;\n  color: #111111 !important;\n}\n\n.product-basic-info ::ng-deep .categoryOptions-dropdown .dropdown-menu.ng-star-inserted {\n  border: 2px solid #dadfe6 !important;\n}\n\n.product-basic-info ::ng-deep .categoryOptions-dropdown button {\n  color: #111111 !important;\n  margin: 0 !important;\n}\n\n.product-basic-info ::ng-deep .categoryOptions-dropdown div a:hover {\n  background-color: #f0f0f0 !important;\n  color: #111111 !important;\n  font-weight: bold;\n  font-size: 1.05em !important;\n}\n\n.product-basic-info .preview-img {\n  padding-left: 14px;\n  padding-right: 16px;\n}\n\n.product-basic-info .ion-md-remove-circle {\n  font-size: 1rem;\n}\n\n.product-basic-info .img-rounded {\n  max-height: 70px;\n}\n\n.product-basic-info .removeIcon div {\n  cursor: pointer;\n}\n\n.product-basic-info .images-content {\n  margin-left: 16px !important;\n}\n\n.product-basic-info label.control-label {\n  font-size: 1rem;\n}\n\n.product-basic-info span {\n  font-size: 1rem;\n  display: block;\n  margin: 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvZC9Xb3JrL0FuZ3VsYXIvTmV3IGZvbGRlciAoMikvRG9sY2VHcm9jZXJ5L3BhY2thZ2VzL2FkbWluLXdlYi1hbmd1bGFyL3NyYy9hcHAvQHNoYXJlZC9wcm9kdWN0L2Zvcm1zL2Jhc2ljLWluZm8vYmFzaWMtaW5mby1mb3JtLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9Ac2hhcmVkL3Byb2R1Y3QvZm9ybXMvYmFzaWMtaW5mby9iYXNpYy1pbmZvLWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFHRyx3QkFBd0I7QUNEM0I7O0FERkE7O0VBUUcseUJBQXlCO0VBQ3pCLHVCQUF1QjtFQUN2QixrQ0FBa0M7RUFDbEMsV0FBVztFQUNYLHlCQUF5QjtBQ0Q1Qjs7QURYQTtFQWdCRyxvQ0FBb0M7QUNEdkM7O0FEZkE7RUFvQkcseUJBQXlCO0VBQ3pCLG9CQUFvQjtBQ0R2Qjs7QURwQkE7RUEyQkssb0NBQW9DO0VBQ3BDLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsNEJBQTRCO0FDSGpDOztBRDNCQTtFQXFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0FDTnJCOztBRGhDQTtFQTBDRSxlQUFlO0FDTmpCOztBRHBDQTtFQThDRSxnQkFBZ0I7QUNObEI7O0FEeENBO0VBa0RFLGVBQWU7QUNOakI7O0FENUNBO0VBc0RFLDRCQUE0QjtBQ045Qjs7QURoREE7RUF5REUsZUFBZTtBQ0xqQjs7QURwREE7RUE2REUsZUFBZTtFQUNmLGNBQWM7RUFDZCxTQUFTO0FDTFgiLCJmaWxlIjoic3JjL2FwcC9Ac2hhcmVkL3Byb2R1Y3QvZm9ybXMvYmFzaWMtaW5mby9iYXNpYy1pbmZvLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZHVjdC1iYXNpYy1pbmZvIHtcblx0OjpuZy1kZWVwIC5jYXRlZ29yeU9wdGlvbnMtZHJvcGRvd24ge1xuXHRcdC5uZy1zdGFyLWluc2VydGVkIHtcblx0XHRcdG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcblx0XHR9XG5cblx0XHQuZHJvcGRvd24sXG5cdFx0LmRyb3Bkb3duLW1lbnUge1xuXHRcdFx0Ym9yZGVyOiAycHggc29saWQgI2RhZGZlNjtcblx0XHRcdGJvcmRlci1yYWRpdXM6IDAuMzc1cmVtO1xuXHRcdFx0YmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcblx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0Y29sb3I6ICMxMTExMTEgIWltcG9ydGFudDtcblx0XHR9XG5cblx0XHQuZHJvcGRvd24tbWVudS5uZy1zdGFyLWluc2VydGVkIHtcblx0XHRcdGJvcmRlcjogMnB4IHNvbGlkICNkYWRmZTYgIWltcG9ydGFudDtcblx0XHR9XG5cblx0XHRidXR0b24ge1xuXHRcdFx0Y29sb3I6ICMxMTExMTEgIWltcG9ydGFudDtcblx0XHRcdG1hcmdpbjogMCAhaW1wb3J0YW50O1xuXHRcdFx0Ly8gYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcblx0XHR9XG5cdFx0ZGl2IHtcblx0XHRcdGEge1xuXHRcdFx0XHQmOmhvdmVyIHtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwICFpbXBvcnRhbnQ7XG5cdFx0XHRcdFx0Y29sb3I6ICMxMTExMTEgIWltcG9ydGFudDtcblx0XHRcdFx0XHRmb250LXdlaWdodDogYm9sZDtcblx0XHRcdFx0XHRmb250LXNpemU6IDEuMDVlbSAhaW1wb3J0YW50O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0LnByZXZpZXctaW1nIHtcblx0XHRwYWRkaW5nLWxlZnQ6IDE0cHg7XG5cdFx0cGFkZGluZy1yaWdodDogMTZweDtcblx0fVxuXG5cdC5pb24tbWQtcmVtb3ZlLWNpcmNsZSB7XG5cdFx0Zm9udC1zaXplOiAxcmVtO1xuXHR9XG5cblx0LmltZy1yb3VuZGVkIHtcblx0XHRtYXgtaGVpZ2h0OiA3MHB4O1xuXHR9XG5cblx0LnJlbW92ZUljb24gZGl2IHtcblx0XHRjdXJzb3I6IHBvaW50ZXI7XG5cdH1cblxuXHQuaW1hZ2VzLWNvbnRlbnQge1xuXHRcdG1hcmdpbi1sZWZ0OiAxNnB4ICFpbXBvcnRhbnQ7XG5cdH1cblx0bGFiZWwuY29udHJvbC1sYWJlbCB7XG5cdFx0Zm9udC1zaXplOiAxcmVtO1xuXHR9XG5cblx0c3BhbiB7XG5cdFx0Zm9udC1zaXplOiAxcmVtO1xuXHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdG1hcmdpbjogMDtcblx0fVxufVxuIiwiLnByb2R1Y3QtYmFzaWMtaW5mbyA6Om5nLWRlZXAgLmNhdGVnb3J5T3B0aW9ucy1kcm9wZG93biAubmctc3Rhci1pbnNlcnRlZCB7XG4gIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcbn1cblxuLnByb2R1Y3QtYmFzaWMtaW5mbyA6Om5nLWRlZXAgLmNhdGVnb3J5T3B0aW9ucy1kcm9wZG93biAuZHJvcGRvd24sXG4ucHJvZHVjdC1iYXNpYy1pbmZvIDo6bmctZGVlcCAuY2F0ZWdvcnlPcHRpb25zLWRyb3Bkb3duIC5kcm9wZG93bi1tZW51IHtcbiAgYm9yZGVyOiAycHggc29saWQgI2RhZGZlNjtcbiAgYm9yZGVyLXJhZGl1czogMC4zNzVyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxMDAlO1xuICBjb2xvcjogIzExMTExMSAhaW1wb3J0YW50O1xufVxuXG4ucHJvZHVjdC1iYXNpYy1pbmZvIDo6bmctZGVlcCAuY2F0ZWdvcnlPcHRpb25zLWRyb3Bkb3duIC5kcm9wZG93bi1tZW51Lm5nLXN0YXItaW5zZXJ0ZWQge1xuICBib3JkZXI6IDJweCBzb2xpZCAjZGFkZmU2ICFpbXBvcnRhbnQ7XG59XG5cbi5wcm9kdWN0LWJhc2ljLWluZm8gOjpuZy1kZWVwIC5jYXRlZ29yeU9wdGlvbnMtZHJvcGRvd24gYnV0dG9uIHtcbiAgY29sb3I6ICMxMTExMTEgIWltcG9ydGFudDtcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG59XG5cbi5wcm9kdWN0LWJhc2ljLWluZm8gOjpuZy1kZWVwIC5jYXRlZ29yeU9wdGlvbnMtZHJvcGRvd24gZGl2IGE6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjMTExMTExICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDEuMDVlbSAhaW1wb3J0YW50O1xufVxuXG4ucHJvZHVjdC1iYXNpYy1pbmZvIC5wcmV2aWV3LWltZyB7XG4gIHBhZGRpbmctbGVmdDogMTRweDtcbiAgcGFkZGluZy1yaWdodDogMTZweDtcbn1cblxuLnByb2R1Y3QtYmFzaWMtaW5mbyAuaW9uLW1kLXJlbW92ZS1jaXJjbGUge1xuICBmb250LXNpemU6IDFyZW07XG59XG5cbi5wcm9kdWN0LWJhc2ljLWluZm8gLmltZy1yb3VuZGVkIHtcbiAgbWF4LWhlaWdodDogNzBweDtcbn1cblxuLnByb2R1Y3QtYmFzaWMtaW5mbyAucmVtb3ZlSWNvbiBkaXYge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5wcm9kdWN0LWJhc2ljLWluZm8gLmltYWdlcy1jb250ZW50IHtcbiAgbWFyZ2luLWxlZnQ6IDE2cHggIWltcG9ydGFudDtcbn1cblxuLnByb2R1Y3QtYmFzaWMtaW5mbyBsYWJlbC5jb250cm9sLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuXG4ucHJvZHVjdC1iYXNpYy1pbmZvIHNwYW4ge1xuICBmb250LXNpemU6IDFyZW07XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDA7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/@shared/product/forms/basic-info/basic-info-form.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/@shared/product/forms/basic-info/basic-info-form.component.ts ***!
  \*******************************************************************************/
/*! exports provided: BasicInfoFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicInfoFormComponent", function() { return BasicInfoFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _modules_server_common_entities_Product__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @modules/server.common/entities/Product */ "../common/src/entities/Product.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _modules_client_common_angular2_locale_product_locales_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @modules/client.common.angular2/locale/product-locales.service */ "../common-angular/src/locale/product-locales.service.ts");
/* harmony import */ var _forms_helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../forms/helpers */ "./src/app/@shared/forms/helpers.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var is_url__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! is-url */ "../../node_modules/is-url/index.js");
/* harmony import */ var is_url__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(is_url__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
var BasicInfoFormComponent_1;











let BasicInfoFormComponent = BasicInfoFormComponent_1 = class BasicInfoFormComponent {
    constructor(_productLocalesService, _translateService) {
        this._productLocalesService = _productLocalesService;
        this._translateService = _translateService;
        this.actualCategories = [];
        this._ngDestroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.images = [];
        this.getUploaderPlaceholderText();
    }
    static hasValidImage(images) {
        if (images) {
            let imageUrls = images.toString().split(/\s+/);
            imageUrls = imageUrls.filter((a) => a.toString().trim() !== '');
            if (imageUrls.length > 0) {
                for (const imageUrl of imageUrls) {
                    if (is_url__WEBPACK_IMPORTED_MODULE_8___default()(imageUrl)) {
                        return true;
                    }
                }
            }
        }
        return false;
    }
    static buildForm(formBuilder) {
        return formBuilder.group({
            title: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(255)]],
            description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(255)]],
            details: [''],
            locale: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            selectedProductCategories: [[]],
            image: [
                '',
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    (control) => {
                        const value = control.value;
                        const hasImage = BasicInfoFormComponent_1.hasValidImage(value);
                        if (hasImage) {
                            return null;
                        }
                        else {
                            return { invalidImageUrl: true };
                        }
                    },
                ],
            ],
        });
    }
    get imageControl() {
        return this.form.get('image');
    }
    get imagesUrls() {
        return this.images ? this.images.map((i) => i.url).join(' ') : '';
    }
    get imagesArr() {
        if (this.imagesUrls) {
            const imagesStr = this.imagesUrls;
            let imageUrls = imagesStr.split(/\s+/);
            imageUrls = imageUrls.filter((a) => a.trim() !== '');
            return imageUrls;
        }
        return null;
    }
    ngOnInit() {
        if (this.productCategories) {
            this.categoryOptions = this.productCategories.map((category) => {
                return {
                    id: category.id,
                    name: category.name[0].value,
                };
            });
        }
        this._bindFormControls();
        this._setDefaultLocaleValue();
        this.onLocaleChanges = this.locale.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["takeUntil"])(this._ngDestroy$))
            .subscribe((v) => {
            if (v !== this._productLocalesService.currentLocale) {
                this._productLocalesService.currentLocale = v;
                this.setValue(this.product);
            }
        });
        this.laodData();
    }
    ngOnDestroy() {
        this.onLocaleChanges.unsubscribe();
        this.form.reset();
        this._ngDestroy$.next();
        this._ngDestroy$.complete();
    }
    deleteImg(image) {
        this.images = this.images.filter((i) => i.url !== image);
        this.image.setValue(this.imagesUrls);
    }
    addImageObj(imgData) {
        this.uploaderChanged = true;
        if (imgData) {
            const existData = this.images.find((i) => i.url === imgData.url);
            if (!existData) {
                this.images.push(imgData);
                this.image.setValue(imgData.url);
            }
        }
    }
    getValue() {
        return this.form.getRawValue();
    }
    setValue(product) {
        if (this.productCategories) {
            this.categoryOptions = this.productCategories.map((category) => {
                return {
                    id: category.id,
                    name: category.name[0].value,
                };
            });
        }
        _forms_helpers__WEBPACK_IMPORTED_MODULE_6__["FormHelpers"].deepMark(this.form, 'dirty');
        if (!this.product) {
            this.product = product;
        }
        if (this.product) {
            let image = '';
            const imgs = product.images.filter((i) => i.locale === this.locale.value);
            if (imgs) {
                image = imgs.map((i) => i.url).join(' ');
            }
            this.images = imgs;
            const product1 = {
                title: this._productLocalesService.getMemberValue(product.title),
                description: this._productLocalesService.getMemberValue(product.description),
                details: this._productLocalesService.getMemberValue(product.details),
                image,
                locale: this.locale.value,
                selectedProductCategories: [...this.product.categories],
            };
            this.form.setValue(lodash__WEBPACK_IMPORTED_MODULE_7___default.a.pick(product1, Object.keys(this.getValue())));
        }
    }
    setupProductCreateObject() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this._bindModelProperties();
            const productLocale = this._locale;
            const productImages = this.images.filter((i) => i.locale === productLocale && is_url__WEBPACK_IMPORTED_MODULE_8___default()(i.url));
            const productTitle = {
                locale: productLocale,
                value: this._title,
            };
            const productDescription = {
                locale: productLocale,
                value: this._description,
            };
            const productDetails = {
                locale: productLocale,
                value: this._details || '',
            };
            let productCreateObject = {
                title: [productTitle],
                description: [productDescription],
                details: [productDetails],
                categories: this.actualCategories.map((c) => {
                    return {
                        _id: c.id,
                        name: c.name,
                    };
                }),
                images: productImages,
            };
            if (this.product) {
                productCreateObject = {
                    title: [
                        ...this.product.title
                            .filter((t) => t.locale !== this._locale)
                            .map((t) => ({ locale: t.locale, value: t.value })),
                        productTitle,
                    ],
                    description: [
                        ...this.product.description
                            .filter((d) => d.locale !== this._locale)
                            .map((d) => ({ locale: d.locale, value: d.value })),
                        productDescription,
                    ],
                    details: [
                        ...this.product.details
                            .filter((d) => d.locale !== this._locale)
                            .map((d) => ({ locale: d.locale, value: d.value })),
                        productDetails,
                    ],
                    categories: this.actualCategories.map((c) => {
                        return {
                            _id: c.id,
                            name: c.name,
                        };
                    }),
                    images: [
                        ...this.product.images
                            .filter((i) => i.locale !== this._locale)
                            .map((i) => this.getProductImage(i)),
                        ...productImages.map((i) => this.getProductImage(i)),
                    ],
                };
            }
            return productCreateObject;
        });
    }
    imgOnLoad() {
        this.imageControl.setErrors(null);
    }
    imgOnError() {
        if (this.imageControl.value !== '') {
            const hasImage = BasicInfoFormComponent_1.hasValidImage(this.image.value);
            if (hasImage) {
                this.imageControl.setErrors(null);
            }
            else {
                this.imageControl.setErrors({ invalidUrl: true });
            }
        }
    }
    _setDefaultLocaleValue() {
        this.locale.setValue('en-US');
    }
    _bindFormControls() {
        this.title = this._getFormControlByName('title');
        this.description = this._getFormControlByName('description');
        this.details = this._getFormControlByName('details');
        this.image = this._getFormControlByName('image');
        this.category = this._getFormControlByName('category');
        this.locale = this._getFormControlByName('locale');
        this.selectedProductCategories = this._getFormControlByName('selectedProductCategories');
    }
    _getFormControlByName(controlName) {
        return this.form.get(controlName);
    }
    _bindModelProperties() {
        const getInputVal = (name) => this._getFormControlByName(name).value;
        this._selectedProductCategories = getInputVal('selectedProductCategories');
        this.actualCategories = [];
        if (this._selectedProductCategories) {
            for (const val of this._selectedProductCategories) {
                for (const val1 of this.productCategories) {
                    if (val === val1.id) {
                        const newObj = {};
                        newObj.name = [];
                        newObj.id = val1.id;
                        for (let i = 0; i < val1.name.length; i++) {
                            newObj.name[i] = {};
                            newObj.name[i].locale = val1.name[i].locale;
                            newObj.name[i].value = val1.name[i].value;
                        }
                        this.actualCategories.push(newObj);
                    }
                }
            }
        }
        this._title = getInputVal('title');
        this._description = getInputVal('description');
        this._details = getInputVal('details');
        this._image = getInputVal('image');
        this._locale = getInputVal('locale');
    }
    getUploaderPlaceholderText() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.uploaderPlaceholder = yield this._translateService
                .get('WAREHOUSE_VIEW.PLACEHOLDER.IMAGE_URL')
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["first"])())
                .toPromise();
        });
    }
    getProductImage(data) {
        return {
            locale: data.locale,
            url: data.url,
            orientation: data.orientation,
            width: data.width,
            height: data.height,
        };
    }
    laodData() {
        if (this.currentProduct) {
            this.setValue(this.currentProduct);
        }
    }
};
BasicInfoFormComponent.ctorParameters = () => [
    { type: _modules_client_common_angular2_locale_product_locales_service__WEBPACK_IMPORTED_MODULE_5__["ProductLocalesService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('fileInput'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], BasicInfoFormComponent.prototype, "fileInput", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('productImagePreview'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], BasicInfoFormComponent.prototype, "productImagePreview", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"])
], BasicInfoFormComponent.prototype, "form", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], BasicInfoFormComponent.prototype, "productCategories", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _modules_server_common_entities_Product__WEBPACK_IMPORTED_MODULE_3__["default"])
], BasicInfoFormComponent.prototype, "currentProduct", void 0);
BasicInfoFormComponent = BasicInfoFormComponent_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ea-product-basic-info-form',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./basic-info-form.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/@shared/product/forms/basic-info/basic-info-form.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./basic-info-form.component.scss */ "./src/app/@shared/product/forms/basic-info/basic-info-form.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_modules_client_common_angular2_locale_product_locales_service__WEBPACK_IMPORTED_MODULE_5__["ProductLocalesService"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateService"]])
], BasicInfoFormComponent);



/***/ }),

/***/ "./src/app/@shared/product/forms/basic-info/index.ts":
/*!***********************************************************!*\
  !*** ./src/app/@shared/product/forms/basic-info/index.ts ***!
  \***********************************************************/
/*! exports provided: BasicInfoFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _basic_info_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basic-info-form.component */ "./src/app/@shared/product/forms/basic-info/basic-info-form.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BasicInfoFormComponent", function() { return _basic_info_form_component__WEBPACK_IMPORTED_MODULE_1__["BasicInfoFormComponent"]; });





/***/ }),

/***/ "./src/app/@shared/product/forms/index.ts":
/*!************************************************!*\
  !*** ./src/app/@shared/product/forms/index.ts ***!
  \************************************************/
/*! exports provided: BasicInfoFormComponent, ProductFormsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _basic_info__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basic-info */ "./src/app/@shared/product/forms/basic-info/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BasicInfoFormComponent", function() { return _basic_info__WEBPACK_IMPORTED_MODULE_1__["BasicInfoFormComponent"]; });

/* harmony import */ var _product_forms_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-forms.module */ "./src/app/@shared/product/forms/product-forms.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProductFormsModule", function() { return _product_forms_module__WEBPACK_IMPORTED_MODULE_2__["ProductFormsModule"]; });






/***/ }),

/***/ "./src/app/@shared/product/forms/product-forms.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/@shared/product/forms/product-forms.module.ts ***!
  \***************************************************************/
/*! exports provided: ProductFormsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductFormsModule", function() { return ProductFormsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var angular2_wizard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-wizard */ "./node_modules/@ever-co/angular2-wizard/dist/index.js");
/* harmony import */ var angular2_wizard__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_wizard__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../@theme/theme.module */ "./src/app/@theme/theme.module.ts");
/* harmony import */ var _basic_info__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./basic-info */ "./src/app/@shared/product/forms/basic-info/index.ts");
/* harmony import */ var _products_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./products-table */ "./src/app/@shared/product/forms/products-table/index.ts");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-smart-table */ "./node_modules/ng2-smart-table/fesm2015/ng2-smart-table.js");
/* harmony import */ var angular_2_dropdown_multiselect__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-2-dropdown-multiselect */ "./node_modules/angular-2-dropdown-multiselect/fesm2015/angular-2-dropdown-multiselect.js");
/* harmony import */ var _render_component_product_categories_product_categories_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../render-component/product-categories/product-categories.module */ "./src/app/@shared/render-component/product-categories/product-categories.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/fesm2015/index.js");
/* harmony import */ var _confirmation_modal_confirmation_modal_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../confirmation-modal/confirmation-modal.module */ "./src/app/@shared/confirmation-modal/confirmation-modal.module.ts");
/* harmony import */ var _app_shared_render_component_render_components_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @app/@shared/render-component/render-components.module */ "./src/app/@shared/render-component/render-components.module.ts");
/* harmony import */ var _app_shared_file_uploader_file_uploader_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @app/@shared/file-uploader/file-uploader.module */ "./src/app/@shared/file-uploader/file-uploader.module.ts");















let ProductFormsModule = class ProductFormsModule {
};
ProductFormsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _theme_theme_module__WEBPACK_IMPORTED_MODULE_4__["ThemeModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"],
            angular2_wizard__WEBPACK_IMPORTED_MODULE_3__["FormWizardModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"].forChild(),
            angular_2_dropdown_multiselect__WEBPACK_IMPORTED_MODULE_8__["MultiselectDropdownModule"],
            ng2_smart_table__WEBPACK_IMPORTED_MODULE_7__["Ng2SmartTableModule"],
            _app_shared_file_uploader_file_uploader_module__WEBPACK_IMPORTED_MODULE_14__["FileUploaderModule"],
            _render_component_product_categories_product_categories_module__WEBPACK_IMPORTED_MODULE_9__["ProductCategoriesModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_11__["NbSpinnerModule"],
            _confirmation_modal_confirmation_modal_module__WEBPACK_IMPORTED_MODULE_12__["ConfirmationModalModule"],
            _app_shared_render_component_render_components_module__WEBPACK_IMPORTED_MODULE_13__["RenderComponentsModule"],
        ],
        exports: [_basic_info__WEBPACK_IMPORTED_MODULE_5__["BasicInfoFormComponent"], _products_table__WEBPACK_IMPORTED_MODULE_6__["ProductsTableComponent"]],
        declarations: [_basic_info__WEBPACK_IMPORTED_MODULE_5__["BasicInfoFormComponent"], _products_table__WEBPACK_IMPORTED_MODULE_6__["ProductsTableComponent"]],
    })
], ProductFormsModule);



/***/ }),

/***/ "./src/app/@shared/product/forms/products-table/index.ts":
/*!***************************************************************!*\
  !*** ./src/app/@shared/product/forms/products-table/index.ts ***!
  \***************************************************************/
/*! exports provided: ProductsTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _products_table_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./products-table.component */ "./src/app/@shared/product/forms/products-table/products-table.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProductsTableComponent", function() { return _products_table_component__WEBPACK_IMPORTED_MODULE_1__["ProductsTableComponent"]; });





/***/ }),

/***/ "./src/app/@shared/product/forms/products-table/products-table.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/@shared/product/forms/products-table/products-table.component.scss ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("nb-card {\n  margin-bottom: 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvZC9Xb3JrL0FuZ3VsYXIvTmV3IGZvbGRlciAoMikvRG9sY2VHcm9jZXJ5L3BhY2thZ2VzL2FkbWluLXdlYi1hbmd1bGFyL3NyYy9hcHAvQHNoYXJlZC9wcm9kdWN0L2Zvcm1zL3Byb2R1Y3RzLXRhYmxlL3Byb2R1Y3RzLXRhYmxlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9Ac2hhcmVkL3Byb2R1Y3QvZm9ybXMvcHJvZHVjdHMtdGFibGUvcHJvZHVjdHMtdGFibGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxnQkFBZ0I7QUNDakIiLCJmaWxlIjoic3JjL2FwcC9Ac2hhcmVkL3Byb2R1Y3QvZm9ybXMvcHJvZHVjdHMtdGFibGUvcHJvZHVjdHMtdGFibGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJuYi1jYXJkIHtcblx0bWFyZ2luLWJvdHRvbTogMDtcbn1cbiIsIm5iLWNhcmQge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/@shared/product/forms/products-table/products-table.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/@shared/product/forms/products-table/products-table.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ProductsTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsTableComponent", function() { return ProductsTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-smart-table */ "./node_modules/ng2-smart-table/fesm2015/ng2-smart-table.js");
/* harmony import */ var _core_data_products_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../@core/data/products.service */ "./src/app/@core/data/products.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _modules_client_common_angular2_locale_product_locales_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @modules/client.common.angular2/locale/product-locales.service */ "../common-angular/src/locale/product-locales.service.ts");
/* harmony import */ var _render_component_product_categories_product_categories__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../render-component/product-categories/product-categories */ "./src/app/@shared/render-component/product-categories/product-categories.ts");
/* harmony import */ var _core_data_productsCategory_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../@core/data/productsCategory.service */ "./src/app/@core/data/productsCategory.service.ts");
/* harmony import */ var _app_core_services_notify_notify_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @app/@core/services/notify/notify.service */ "./src/app/@core/services/notify/notify.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _confirmation_modal_confirmation_modal_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../confirmation-modal/confirmation-modal.component */ "./src/app/@shared/confirmation-modal/confirmation-modal.component.ts");
/* harmony import */ var _app_shared_render_component_product_checkbox_product_checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @app/@shared/render-component/product-checkbox/product-checkbox */ "./src/app/@shared/render-component/product-checkbox/product-checkbox.ts");
/* harmony import */ var _app_shared_render_component_product_title_product_title_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @app/@shared/render-component/product-title/product-title.component */ "./src/app/@shared/render-component/product-title/product-title.component.ts");
/* harmony import */ var _app_shared_render_component_product_image_product_image_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @app/@shared/render-component/product-image/product-image.component */ "./src/app/@shared/render-component/product-image/product-image.component.ts");
var ProductsTableComponent_1;


















let ProductsTableComponent = ProductsTableComponent_1 = class ProductsTableComponent {
    constructor(_sanitizer, _productsService, _router, _translateService, _productLocalesService, _productsCategoryService, _notifyService, modalService) {
        this._sanitizer = _sanitizer;
        this._productsService = _productsService;
        this._router = _router;
        this._translateService = _translateService;
        this._productLocalesService = _productLocalesService;
        this._productsCategoryService = _productsCategoryService;
        this._notifyService = _notifyService;
        this.modalService = modalService;
        this.sourceSmartTable = new ng2_smart_table__WEBPACK_IMPORTED_MODULE_3__["LocalDataSource"]();
        this.selectProducts$ = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.pagesChanges$ = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.perPage = 0;
        this._selectedProducts = [];
        this.ngDestroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
    }
    ngOnInit() {
        this.getCategories();
        this._loadSettingsSmartTable();
        this._applyTranslationOnSmartTable();
        this.smartTableChange();
    }
    edit(event) {
        this._router.navigate(['/products/list/' + event.data.id + '/edit']);
    }
    deleteProduct(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const activeModal = this.modalService.open(_confirmation_modal_confirmation_modal_component__WEBPACK_IMPORTED_MODULE_14__["ConfimationModalComponent"], {
                size: 'sm',
                container: 'nb-layout',
                backdrop: 'static',
            });
            const modalComponent = activeModal.componentInstance;
            this.confirmSub$ = yield modalComponent.confirmEvent
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(modalComponent.ngDestroy$))
                .subscribe((dataEvent) => {
                try {
                    this.loading = true;
                    const productTitle = event.data.title || ProductsTableComponent_1.noInfoSign;
                    this._productsService
                        .removeByIds([event.data.id])
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["first"])())
                        .toPromise();
                    this.loading = false;
                    const message = `Product ${productTitle} is deleted`;
                    this._notifyService.success(message);
                }
                catch (error) {
                    let message = `Something went wrong`;
                    if (error.message === 'Validation error') {
                        message = error.message;
                    }
                    this.loading = false;
                    this._notifyService.error(message);
                }
                modalComponent.cancel();
            });
        });
    }
    get hasSelectedProducts() {
        return this._selectedProducts.length > 0;
    }
    get selectedProducts() {
        return [...this._selectedProducts];
    }
    set selectedProducts(products) {
        this._selectedProducts = products;
    }
    getCategories() {
        this._productsCategoryService
            .getCategories()
            .subscribe((categories) => {
            this.categoriesInfo = categories;
            this.loadDataSmartTable(this.products || [], this.dataCount || 0);
        });
    }
    selectProductTmp(ev) {
        if (ev.data) {
            this.selectProducts$.emit({
                current: ev.data,
                allData: ev.source.data,
            });
        }
    }
    loadDataSmartTable(products, dataCount, page = 1) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.dataCount = dataCount;
            this.products = products;
            let productsVM = products.map((product) => {
                return {
                    checked: this.selectedProducts.find((d) => d.id === product['id']),
                    title: this.localeTranslate(product.title) ||
                        ProductsTableComponent_1.noInfoSign,
                    description: this.localeTranslate(product.description) ||
                        ProductsTableComponent_1.noInfoSign,
                    details: product.details[0]
                        ? this.localeTranslate(product.details) ||
                            ProductsTableComponent_1.noInfoSign
                        : ProductsTableComponent_1.noInfoSign,
                    categories: {
                        ids: product.categories,
                        search: this.categoriesInfo &&
                            this.categoriesInfo
                                .filter((c) => product.categories.includes(c.id))
                                .map((c) => this._productLocalesService.getTranslate(c.name))
                                .toString(),
                    },
                    image: this.localeTranslate(product.images) ||
                        ProductsTableComponent_1.noInfoSign,
                    id: product.id,
                    allCategories: this.categoriesInfo,
                };
            });
            productsVM = productsVM.filter((p) => p);
            if (this.$subSlectProducts) {
                this.$subSlectProducts.unsubscribe();
            }
            this.$subSlectProducts = this.selectProducts$
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.ngDestroy$))
                .subscribe(({ current, allData }) => {
                allData.find((d) => d && d.id === current['id'])['checked'] = !current.checked;
                if (current.checked) {
                    this._selectedProducts.push(current);
                }
                else {
                    this._selectedProducts = this._selectedProducts.filter((p) => p.id !== current.id);
                }
                this.sourceSmartTable.load(allData);
            });
            const productsData = new Array(dataCount);
            productsData.splice(this.perPage * (page - 1), this.perPage, ...productsVM);
            this.sourceSmartTable.load(productsData);
        });
    }
    localeTranslate(member) {
        return this._productLocalesService.getTranslate(member);
    }
    smartTableChange() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.sourceSmartTable
                .onChanged()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.ngDestroy$))
                .subscribe((event) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (event.action === 'page') {
                    const page = event.paging.page;
                    this.pagesChanges$.emit(page);
                }
            }));
        });
    }
    _loadSettingsSmartTable() {
        const columnTitlePrefix = 'WAREHOUSE_VIEW.SELECT_PRODUCTS.';
        const getTranslate = (name) => this._translateService.get(columnTitlePrefix + name);
        Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["forkJoin"])(this._translateService.get('Id'), getTranslate('TITLE'), getTranslate('DESCRIPTION'), getTranslate('DETAILS'), getTranslate('IMAGES'), getTranslate('CATEGORY'))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.ngDestroy$))
            .subscribe(([id, name, description, details, images, category]) => {
            this.settingsSmartTable = {
                actions: !this.hiddenTableActions && {
                    add: false,
                    position: 'left',
                },
                edit: {
                    editButtonContent: '<i class="ion-md-create"></i>',
                },
                delete: {
                    deleteButtonContent: '<i class="ion-md-trash"></i>',
                    confirmDelete: true,
                },
                mode: 'external',
                columns: {
                    checkbox: {
                        title: '',
                        filter: false,
                        type: 'custom',
                        renderComponent: _app_shared_render_component_product_checkbox_product_checkbox__WEBPACK_IMPORTED_MODULE_15__["ProductCheckboxComponent"],
                    },
                    title: {
                        title: name,
                        type: 'custom',
                        renderComponent: _app_shared_render_component_product_title_product_title_component__WEBPACK_IMPORTED_MODULE_16__["ProductTitleComponent"],
                    },
                    description: { title: description },
                    details: { title: details },
                    categories: {
                        title: category,
                        type: 'custom',
                        renderComponent: _render_component_product_categories_product_categories__WEBPACK_IMPORTED_MODULE_10__["ProductCategoriesComponent"],
                        filterFunction(cell, search) {
                            if (cell.search.includes(search)) {
                                return true;
                            }
                            else {
                                return false;
                            }
                        },
                    },
                    images: {
                        title: images,
                        type: 'custom',
                        renderComponent: _app_shared_render_component_product_image_product_image_component__WEBPACK_IMPORTED_MODULE_17__["ProductImageComponent"],
                    },
                },
                pager: {
                    display: true,
                    perPage: this.perPage,
                },
            };
        });
    }
    _applyTranslationOnSmartTable() {
        this._translateService.onLangChange
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.ngDestroy$))
            .subscribe((res) => {
            this._loadSettingsSmartTable();
            this.loadDataSmartTable(this.products || [], this.dataCount || 0);
        });
    }
    ngOnDestroy() {
        this.ngDestroy$.next();
        this.ngDestroy$.complete();
    }
};
ProductsTableComponent.noInfoSign = '';
ProductsTableComponent.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] },
    { type: _core_data_products_service__WEBPACK_IMPORTED_MODULE_4__["ProductsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"] },
    { type: _modules_client_common_angular2_locale_product_locales_service__WEBPACK_IMPORTED_MODULE_9__["ProductLocalesService"] },
    { type: _core_data_productsCategory_service__WEBPACK_IMPORTED_MODULE_11__["ProductsCategoryService"] },
    { type: _app_core_services_notify_notify_service__WEBPACK_IMPORTED_MODULE_12__["NotifyService"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__["NgbModal"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], ProductsTableComponent.prototype, "perPage", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
], ProductsTableComponent.prototype, "hiddenTableActions", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], ProductsTableComponent.prototype, "boxShadow", void 0);
ProductsTableComponent = ProductsTableComponent_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ea-products-table',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./products-table.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/@shared/product/forms/products-table/products-table.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./products-table.component.scss */ "./src/app/@shared/product/forms/products-table/products-table.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"],
        _core_data_products_service__WEBPACK_IMPORTED_MODULE_4__["ProductsService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"],
        _modules_client_common_angular2_locale_product_locales_service__WEBPACK_IMPORTED_MODULE_9__["ProductLocalesService"],
        _core_data_productsCategory_service__WEBPACK_IMPORTED_MODULE_11__["ProductsCategoryService"],
        _app_core_services_notify_notify_service__WEBPACK_IMPORTED_MODULE_12__["NotifyService"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__["NgbModal"]])
], ProductsTableComponent);



/***/ }),

/***/ "./src/app/@shared/render-component/product-categories/product-categories.module.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/@shared/render-component/product-categories/product-categories.module.ts ***!
  \******************************************************************************************/
/*! exports provided: ProductCategoriesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductCategoriesModule", function() { return ProductCategoriesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../@theme */ "./src/app/@theme/index.ts");
/* harmony import */ var _product_categories__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./product-categories */ "./src/app/@shared/render-component/product-categories/product-categories.ts");





const COMPONENTS = [_product_categories__WEBPACK_IMPORTED_MODULE_4__["ProductCategoriesComponent"]];
let ProductCategoriesModule = class ProductCategoriesModule {
};
ProductCategoriesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _theme__WEBPACK_IMPORTED_MODULE_3__["ThemeModule"]],
        declarations: COMPONENTS,
        entryComponents: COMPONENTS,
        exports: COMPONENTS,
    })
], ProductCategoriesModule);



/***/ }),

/***/ "./src/app/@shared/render-component/product-categories/product-categories.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/@shared/render-component/product-categories/product-categories.ts ***!
  \***********************************************************************************/
/*! exports provided: ProductCategoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductCategoriesComponent", function() { return ProductCategoriesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _modules_client_common_angular2_locale_product_locales_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @modules/client.common.angular2/locale/product-locales.service */ "../common-angular/src/locale/product-locales.service.ts");



let ProductCategoriesComponent = class ProductCategoriesComponent {
    constructor(_localeTranslate) {
        this._localeTranslate = _localeTranslate;
        this.categoriesArr = [];
    }
    ngOnInit() {
        this.getCategories();
    }
    getCategories() {
        if (this.rowData.allCategories) {
            this.categoriesArr = this.rowData.allCategories.filter((category) => this.rowData.categories.ids.includes(category.id));
        }
    }
    getTranslates(categoryName) {
        return this._localeTranslate.getTranslate(categoryName);
    }
};
ProductCategoriesComponent.ctorParameters = () => [
    { type: _modules_client_common_angular2_locale_product_locales_service__WEBPACK_IMPORTED_MODULE_2__["ProductLocalesService"] }
];
ProductCategoriesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./product-categories.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/@shared/render-component/product-categories/product-categories.html")).default,
        styles: ["\n\t\t\tdiv {\n\t\t\t\tpadding-bottom: 4px;\n\t\t\t}\n\n\t\t\tdiv img {\n\t\t\t\twidth: 40px;\n\t\t\t\theight: 40px;\n\t\t\t}\n\t\t"]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_modules_client_common_angular2_locale_product_locales_service__WEBPACK_IMPORTED_MODULE_2__["ProductLocalesService"]])
], ProductCategoriesComponent);



/***/ })

}]);
//# sourceMappingURL=default~app-pages-products-products-module~merchants-merchants-module~warehouse-warehouse-module-es2015.js.map