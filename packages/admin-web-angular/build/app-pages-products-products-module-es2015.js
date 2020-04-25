(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-pages-products-products-module"],{

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/@shared/product/categories/category-create/category-create.component.html":
/*!*******************************************************************************************************************************************************************************!*\
  !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/raw-loader/dist/cjs.js!./src/app/@shared/product/categories/category-create/category-create.component.html ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\n\t<span>{{ 'CATEGORY_VIEW.CREATE.CREATE_CATEGORY' | translate }}</span>\n\t<button class=\"close\" aria-label=\"Close\" (click)=\"cancel()\">\n\t\t<span aria-hidden=\"true\">&times;</span>\n\t</button>\n</div>\n\n<div class=\"modal-body\" [nbSpinner]=\"loading\">\n\t<ea-product-category-basic-info-form\n\t\t#basicInfo\n\t></ea-product-category-basic-info-form>\n</div>\n\n<div class=\"modal-footer row\">\n\t<div class=\"col-sm-9\"></div>\n\t<div class=\"col\">\n\t\t<button\n\t\t\tnbButton\n\t\t\tstatus=\"success\"\n\t\t\tsize=\"large\"\n\t\t\ttype=\"button\"\n\t\t\t(click)=\"createCategory(basicInfo.createObject)\"\n\t\t\t[disabled]=\"basicInfo.form.invalid\"\n\t\t>\n\t\t\t{{ 'CATEGORY_VIEW.CREATE.DONE' | translate }}\n\t\t</button>\n\t</div>\n</div>\n\n<toaster-container *ngIf=\"storybookVersion\"></toaster-container>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/@shared/product/product-create/product-create.component.html":
/*!******************************************************************************************************************************************************************!*\
  !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/raw-loader/dist/cjs.js!./src/app/@shared/product/product-create/product-create.component.html ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\n\t<span class=\"modal-title\">{{ 'PRODUCT_TYPE_VIEW.TITLE' | translate }}</span>\n\t<button class=\"close\" aria-label=\"Close\" (click)=\"_cancelModal()\">\n\t\t<span aria-hidden=\"true\">&times;</span>\n\t</button>\n</div>\n<div>\n\t<form-wizard\n\t\t[formGroup]=\"form\"\n\t\t[buttonDone]=\"buttonDone\"\n\t\t[buttonNext]=\"buttonNext\"\n\t\t[buttonPrevious]=\"buttonPrevious\"\n\t\t[nbSpinner]=\"loading\"\n\t\t#formWizard\n\t\tclass=\"form-horizontal\"\n\t>\n\t\t<wizard-step\n\t\t\t[title]=\"''\"\n\t\t\t[isValid]=\"basicInfo.valid\"\n\t\t\t(onComplete)=\"createProduct()\"\n\t\t>\n\t\t\t<ea-product-basic-info-form\n\t\t\t\t#basicInfoForm\n\t\t\t\t[form]=\"basicInfo\"\n\t\t\t></ea-product-basic-info-form>\n\t\t</wizard-step>\n\t</form-wizard>\n</div>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/pages/+products/+categories/categories.component.html":
/*!***********************************************************************************************************************************************************!*\
  !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/raw-loader/dist/cjs.js!./src/app/pages/+products/+categories/categories.component.html ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nb-card>\n\t<toaster-container></toaster-container>\n\n\t<nb-card-header>\n\t\t<button\n\t\t\tnbButton\n\t\t\tstatus=\"success\"\n\t\t\tclass=\"mr-2 d-inline-block\"\n\t\t\ttype=\"button\"\n\t\t\ttabindex=\"0\"\n\t\t\t(click)=\"openWizardNewCategory()\"\n\t\t>\n\t\t\t<i class=\"ion-md-add button-icon mr-1\"></i>\n\t\t\t<small>{{ 'CATEGORY_VIEW.CREATE_BUTTON' | translate }}</small>\n\t\t</button>\n\t\t<button\n\t\t\tnbButton\n\t\t\tstatus=\"danger\"\n\t\t\tclass=\"mr-2 d-inline-block\"\n\t\t\ttype=\"button\"\n\t\t\ttabindex=\"0\"\n\t\t\t[disabled]=\"!hasSelectedCategories\"\n\t\t\t(click)=\"deleteSelectedRows()\"\n\t\t>\n\t\t\t<i class=\"ion-md-trash button-icon mr-1\"></i>\n\t\t\t<span _ngcontent-c24=\"\">{{\n\t\t\t\t'CATEGORY_VIEW.DELETE' | translate\n\t\t\t}}</span>\n\t\t</button>\n\t</nb-card-header>\n\n\t<nb-card-body [nbSpinner]=\"loading || categoriesTable.loading\">\n\t\t<ea-categories-table #categoriesTable></ea-categories-table>\n\t</nb-card-body>\n</nb-card>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/pages/+products/products.component.html":
/*!*********************************************************************************************************************************************!*\
  !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/raw-loader/dist/cjs.js!./src/app/pages/+products/products.component.html ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nb-card>\n\t<toaster-container></toaster-container>\n\n\t<nb-card-header>\n\t\t<button\n\t\t\tnbButton\n\t\t\tstatus=\"success\"\n\t\t\tclass=\"mr-2 d-inline-block\"\n\t\t\t(click)=\"openWizardNewProduct()\"\n\t\t>\n\t\t\t<i class=\"ion-md-add button-icon mr-1\"></i>\n\t\t\t<small _ngcontent-c55=\"\">{{\n\t\t\t\t'PRODUCTS_VIEW.CREATE' | translate\n\t\t\t}}</small>\n\t\t</button>\n\t\t<button\n\t\t\tnbButton\n\t\t\tstatus=\"danger\"\n\t\t\tclass=\"mr-2 d-inline-block\"\n\t\t\t[disabled]=\"!hasSelectedProducts\"\n\t\t\t(click)=\"deleteSelectedRows()\"\n\t\t>\n\t\t\t<i class=\"ion-md-trash button-icon mr-1\"></i>\n\t\t\t<small _ngcontent-c55=\"\">{{\n\t\t\t\t'PRODUCTS_VIEW.DELETE' | translate\n\t\t\t}}</small>\n\t\t</button>\n\t</nb-card-header>\n\n\t<nb-card-body [nbSpinner]=\"loading\">\n\t\t<ea-products-table\n\t\t\t[perPage]=\"perPage\"\n\t\t\t#productsTable\n\t\t></ea-products-table>\n\t</nb-card-body>\n</nb-card>\n");

/***/ }),

/***/ "./src/app/@shared/forms/helpers.ts":
/*!******************************************!*\
  !*** ./src/app/@shared/forms/helpers.ts ***!
  \******************************************/
/*! exports provided: FormHelpers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormHelpers", function() { return FormHelpers; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);



class FormHelpers {
    static deepMark(formGroup, markAs, opts = { onlySelf: false }) {
        Object.values(formGroup.controls).map((c) => {
            if (c instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"] || c instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArray"]) {
                FormHelpers.deepMark(c, markAs, opts);
            }
            else {
                c[`markAs${Object(lodash__WEBPACK_IMPORTED_MODULE_2__["capitalize"])(markAs)}`](opts);
            }
        });
    }
}


/***/ }),

/***/ "./src/app/@shared/product/categories/category-create/category-create.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/@shared/product/categories/category-create/category-create.component.scss ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("div.modal-footer {\n  padding-top: 7px;\n  margin-left: 23px;\n  border: none;\n}\n\nlabel {\n  margin: auto 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvZC9Xb3JrL0FuZ3VsYXIvTmV3IGZvbGRlciAoMikvRG9sY2VHcm9jZXJ5L3BhY2thZ2VzL2FkbWluLXdlYi1hbmd1bGFyL3NyYy9hcHAvQHNoYXJlZC9wcm9kdWN0L2NhdGVnb3JpZXMvY2F0ZWdvcnktY3JlYXRlL2NhdGVnb3J5LWNyZWF0ZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvQHNoYXJlZC9wcm9kdWN0L2NhdGVnb3JpZXMvY2F0ZWdvcnktY3JlYXRlL2NhdGVnb3J5LWNyZWF0ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsWUFBWTtBQ0NiOztBREVBO0VBQ0MsY0FBYztBQ0NmIiwiZmlsZSI6InNyYy9hcHAvQHNoYXJlZC9wcm9kdWN0L2NhdGVnb3JpZXMvY2F0ZWdvcnktY3JlYXRlL2NhdGVnb3J5LWNyZWF0ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdi5tb2RhbC1mb290ZXIge1xuXHRwYWRkaW5nLXRvcDogN3B4O1xuXHRtYXJnaW4tbGVmdDogMjNweDtcblx0Ym9yZGVyOiBub25lO1xufVxuXG5sYWJlbCB7XG5cdG1hcmdpbjogYXV0byAwO1xufVxuIiwiZGl2Lm1vZGFsLWZvb3RlciB7XG4gIHBhZGRpbmctdG9wOiA3cHg7XG4gIG1hcmdpbi1sZWZ0OiAyM3B4O1xuICBib3JkZXI6IG5vbmU7XG59XG5cbmxhYmVsIHtcbiAgbWFyZ2luOiBhdXRvIDA7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/@shared/product/categories/category-create/category-create.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/@shared/product/categories/category-create/category-create.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: CategoryCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryCreateComponent", function() { return CategoryCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _modules_client_common_angular2_locale_product_locales_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @modules/client.common.angular2/locale/product-locales.service */ "../common-angular/src/locale/product-locales.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _app_core_services_notify_notify_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/@core/services/notify/notify.service */ "./src/app/@core/services/notify/notify.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _app_core_data_productsCategory_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/@core/data/productsCategory.service */ "./src/app/@core/data/productsCategory.service.ts");









let CategoryCreateComponent = class CategoryCreateComponent {
    constructor(activeModal, _productLocalesService, _translateService, _notifyService, _productsCategoryService) {
        this.activeModal = activeModal;
        this._productLocalesService = _productLocalesService;
        this._translateService = _translateService;
        this._notifyService = _notifyService;
        this._productsCategoryService = _productsCategoryService;
        this._ngDestroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this._translateService.setDefaultLang('en');
        this._translateService.use('en');
    }
    ngOnDestroy() {
        this._ngDestroy$.next();
        this._ngDestroy$.complete();
    }
    cancel() {
        this.activeModal.dismiss('canceled');
    }
    createCategory(createObject) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.storybookVersion) {
                this._notifyService.success('Category ' +
                    this.localeTranslate(createObject.name) +
                    ' is added');
                return true;
            }
            try {
                this.loading = true;
                yield this._productsCategoryService
                    .create(createObject)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["first"])())
                    .toPromise();
                this.loading = false;
                const message = `Category ${this.localeTranslate(createObject.name)} is added!`;
                this._notifyService.success(message);
                this.cancel();
            }
            catch (err) {
                this.loading = false;
                const message = `Something went wrong!`;
                this._notifyService.error(message);
            }
        });
    }
    localeTranslate(member) {
        return this._productLocalesService.getTranslate(member);
    }
};
CategoryCreateComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"] },
    { type: _modules_client_common_angular2_locale_product_locales_service__WEBPACK_IMPORTED_MODULE_4__["ProductLocalesService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
    { type: _app_core_services_notify_notify_service__WEBPACK_IMPORTED_MODULE_6__["NotifyService"] },
    { type: _app_core_data_productsCategory_service__WEBPACK_IMPORTED_MODULE_8__["ProductsCategoryService"] }
];
CategoryCreateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ea-category-create',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./category-create.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/@shared/product/categories/category-create/category-create.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./category-create.component.scss */ "./src/app/@shared/product/categories/category-create/category-create.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"],
        _modules_client_common_angular2_locale_product_locales_service__WEBPACK_IMPORTED_MODULE_4__["ProductLocalesService"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
        _app_core_services_notify_notify_service__WEBPACK_IMPORTED_MODULE_6__["NotifyService"],
        _app_core_data_productsCategory_service__WEBPACK_IMPORTED_MODULE_8__["ProductsCategoryService"]])
], CategoryCreateComponent);



/***/ }),

/***/ "./src/app/@shared/product/categories/category-create/index.ts":
/*!*********************************************************************!*\
  !*** ./src/app/@shared/product/categories/category-create/index.ts ***!
  \*********************************************************************/
/*! exports provided: CategoryCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _category_create_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./category-create.component */ "./src/app/@shared/product/categories/category-create/category-create.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CategoryCreateComponent", function() { return _category_create_component__WEBPACK_IMPORTED_MODULE_1__["CategoryCreateComponent"]; });





/***/ }),

/***/ "./src/app/@shared/product/product-create/index.ts":
/*!*********************************************************!*\
  !*** ./src/app/@shared/product/product-create/index.ts ***!
  \*********************************************************/
/*! exports provided: ProductCreateComponent, ProductCreateModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _product_create_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product-create.component */ "./src/app/@shared/product/product-create/product-create.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProductCreateComponent", function() { return _product_create_component__WEBPACK_IMPORTED_MODULE_1__["ProductCreateComponent"]; });

/* harmony import */ var _product_create_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-create.module */ "./src/app/@shared/product/product-create/product-create.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProductCreateModule", function() { return _product_create_module__WEBPACK_IMPORTED_MODULE_2__["ProductCreateModule"]; });






/***/ }),

/***/ "./src/app/@shared/product/product-create/product-create.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/@shared/product/product-create/product-create.component.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host ::ng-deep .card-footer button {\n  background-color: #111111 !important;\n  border: none !important;\n  color: white !important;\n  cursor: pointer !important;\n}\n\n:host ::ng-deep .card-footer button:hover {\n  background-color: #bebebe !important;\n  color: #111111 !important;\n}\n\n:host ::ng-deep nb-card {\n  background-color: white !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvZC9Xb3JrL0FuZ3VsYXIvTmV3IGZvbGRlciAoMikvRG9sY2VHcm9jZXJ5L3BhY2thZ2VzL2FkbWluLXdlYi1hbmd1bGFyL3NyYy9hcHAvQHNoYXJlZC9wcm9kdWN0L3Byb2R1Y3QtY3JlYXRlL3Byb2R1Y3QtY3JlYXRlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9Ac2hhcmVkL3Byb2R1Y3QvcHJvZHVjdC1jcmVhdGUvcHJvZHVjdC1jcmVhdGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxvQ0FBb0M7RUFDcEMsdUJBQXVCO0VBQ3ZCLHVCQUF1QjtFQUN2QiwwQkFBMEI7QUNDM0I7O0FERUE7RUFDQyxvQ0FBb0M7RUFDcEMseUJBQXlCO0FDQzFCOztBREVBO0VBQ0Msa0NBQWtDO0FDQ25DIiwiZmlsZSI6InNyYy9hcHAvQHNoYXJlZC9wcm9kdWN0L3Byb2R1Y3QtY3JlYXRlL3Byb2R1Y3QtY3JlYXRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QgOjpuZy1kZWVwIC5jYXJkLWZvb3RlciBidXR0b24ge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMTExMTExICFpbXBvcnRhbnQ7XG5cdGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xuXHRjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcblx0Y3Vyc29yOiBwb2ludGVyICFpbXBvcnRhbnQ7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuY2FyZC1mb290ZXIgYnV0dG9uOmhvdmVyIHtcblx0YmFja2dyb3VuZC1jb2xvcjogI2JlYmViZSAhaW1wb3J0YW50O1xuXHRjb2xvcjogIzExMTExMSAhaW1wb3J0YW50O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgbmItY2FyZCB7XG5cdGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG4iLCI6aG9zdCA6Om5nLWRlZXAgLmNhcmQtZm9vdGVyIGJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxMTExMTEgIWltcG9ydGFudDtcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICBjdXJzb3I6IHBvaW50ZXIgIWltcG9ydGFudDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5jYXJkLWZvb3RlciBidXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmViZWJlICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjMTExMTExICFpbXBvcnRhbnQ7XG59XG5cbjpob3N0IDo6bmctZGVlcCBuYi1jYXJkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/@shared/product/product-create/product-create.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/@shared/product/product-create/product-create.component.ts ***!
  \****************************************************************************/
/*! exports provided: ProductCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductCreateComponent", function() { return ProductCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../forms */ "./src/app/@shared/product/forms/index.ts");
/* harmony import */ var _core_data_products_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../@core/data/products.service */ "./src/app/@core/data/products.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _app_core_services_notify_notify_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/@core/services/notify/notify.service */ "./src/app/@core/services/notify/notify.service.ts");









let ProductCreateComponent = class ProductCreateComponent {
    constructor(_activeModal, _formBuilder, _productsService, _translateService, _notifyService) {
        this._activeModal = _activeModal;
        this._formBuilder = _formBuilder;
        this._productsService = _productsService;
        this._translateService = _translateService;
        this._notifyService = _notifyService;
        this.BUTTON_DONE = 'BUTTON_DONE';
        this.form = this._formBuilder.group({
            basicInfo: _forms__WEBPACK_IMPORTED_MODULE_4__["BasicInfoFormComponent"].buildForm(this._formBuilder),
        });
        this.basicInfo = this.form.get('basicInfo');
    }
    ngOnInit() {
        this.basicInfoForm.productCategories = this.productsCategories;
    }
    get buttonDone() {
        return this._translate(this.BUTTON_DONE);
    }
    createProduct() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.basicInfo.valid) {
                const productCreateObject = yield this.basicInfoForm.setupProductCreateObject();
                try {
                    this.loading = true;
                    yield this._productsService
                        .create(productCreateObject)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["first"])())
                        .toPromise();
                    this.loading = false;
                    const message = `Product ${productCreateObject.title[0].value} is created`;
                    this._notifyService.success(message);
                    this._cancelModal();
                }
                catch (error) {
                    const message = `Something went wrong!`;
                    this.loading = false;
                    this._notifyService.error(message);
                    this._cancelModal();
                }
            }
        });
    }
    _translate(key) {
        let translationResult = '';
        this._translateService.get(key).subscribe((res) => {
            translationResult = res;
        });
        return translationResult;
    }
    _cancelModal() {
        this._activeModal.dismiss('canceled');
    }
};
ProductCreateComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _core_data_products_service__WEBPACK_IMPORTED_MODULE_5__["ProductsService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"] },
    { type: _app_core_services_notify_notify_service__WEBPACK_IMPORTED_MODULE_8__["NotifyService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('basicInfoForm', { static: true }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _forms__WEBPACK_IMPORTED_MODULE_4__["BasicInfoFormComponent"])
], ProductCreateComponent.prototype, "basicInfoForm", void 0);
ProductCreateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ea-product-create',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./product-create.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/@shared/product/product-create/product-create.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./product-create.component.scss */ "./src/app/@shared/product/product-create/product-create.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
        _core_data_products_service__WEBPACK_IMPORTED_MODULE_5__["ProductsService"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"],
        _app_core_services_notify_notify_service__WEBPACK_IMPORTED_MODULE_8__["NotifyService"]])
], ProductCreateComponent);



/***/ }),

/***/ "./src/app/@shared/product/product-create/product-create.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/@shared/product/product-create/product-create.module.ts ***!
  \*************************************************************************/
/*! exports provided: ProductCreateModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductCreateModule", function() { return ProductCreateModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../@theme/theme.module */ "./src/app/@theme/theme.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var angular2_wizard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-wizard */ "./node_modules/@ever-co/angular2-wizard/dist/index.js");
/* harmony import */ var angular2_wizard__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_wizard__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _product_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product-create.component */ "./src/app/@shared/product/product-create/product-create.component.ts");
/* harmony import */ var _forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../forms */ "./src/app/@shared/product/forms/index.ts");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/fesm2015/index.js");








let ProductCreateModule = class ProductCreateModule {
};
ProductCreateModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _theme_theme_module__WEBPACK_IMPORTED_MODULE_2__["ThemeModule"],
            angular2_wizard__WEBPACK_IMPORTED_MODULE_4__["FormWizardModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"].forChild(),
            _forms__WEBPACK_IMPORTED_MODULE_6__["ProductFormsModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbSpinnerModule"],
        ],
        exports: [_product_create_component__WEBPACK_IMPORTED_MODULE_5__["ProductCreateComponent"]],
        declarations: [_product_create_component__WEBPACK_IMPORTED_MODULE_5__["ProductCreateComponent"]],
        entryComponents: [_product_create_component__WEBPACK_IMPORTED_MODULE_5__["ProductCreateComponent"]],
    })
], ProductCreateModule);



/***/ }),

/***/ "./src/app/@theme/index.ts":
/*!*********************************!*\
  !*** ./src/app/@theme/index.ts ***!
  \*********************************/
/*! exports provided: HttpLoaderFactory, ThemeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _theme_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./theme.module */ "./src/app/@theme/theme.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return _theme_module__WEBPACK_IMPORTED_MODULE_1__["HttpLoaderFactory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ThemeModule", function() { return _theme_module__WEBPACK_IMPORTED_MODULE_1__["ThemeModule"]; });





/***/ }),

/***/ "./src/app/pages/+products/+categories/categories.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/pages/+products/+categories/categories.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("nb-card-header {\n  border-bottom: 0;\n}\n\nnb-card-body {\n  padding: 0;\n  border-bottom-left-radius: 0.5rem;\n  border-bottom-right-radius: 0.5rem;\n}\n\n:host ::ng-deep ng2-smart-table tr td:nth-child(1),\n:host ::ng-deep ng2-smart-table tr th:nth-child(1) {\n  width: 30px;\n}\n\n:host ::ng-deep ng2-smart-table tr td:nth-child(2),\n:host ::ng-deep ng2-smart-table tr th:nth-child(2) {\n  width: 30px;\n}\n\n:host ::ng-deep ng2-smart-table tr th {\n  padding: 18px !important;\n}\n\n:host ::ng-deep ng2-smart-table tr td {\n  padding: 17px !important;\n}\n\n:host ::ng-deep ng2-smart-table tr.ng2-smart-titles > th:nth-child(1) {\n  text-align: center;\n  cursor: pointer;\n}\n\n:host ::ng-deep ng2-smart-table tr.ng2-smart-titles > th:nth-child(1) input {\n  margin-left: 1px !important;\n  cursor: pointer;\n}\n\n:host ::ng-deep ng2-smart-table td.ng2-smart-actions.ng2-smart-action-multiple-select {\n  text-align: center;\n  cursor: pointer;\n}\n\n:host ::ng-deep ng2-smart-table tr.ng2-smart-filters th {\n  text-align: center;\n}\n\n:host ::ng-deep ng2-smart-table tr td:first-of-type,\n:host ::ng-deep ng2-smart-table th:first-of-type {\n  border-left: none;\n}\n\n:host ::ng-deep ng2-smart-table tr td:last-of-type,\n:host ::ng-deep ng2-smart-table th:last-of-type {\n  border-right: none;\n}\n\n:host ::ng-deep ng2-smart-table input[type='checkbox'] {\n  cursor: pointer;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvZC9Xb3JrL0FuZ3VsYXIvTmV3IGZvbGRlciAoMikvRG9sY2VHcm9jZXJ5L3BhY2thZ2VzL2FkbWluLXdlYi1hbmd1bGFyL3NyYy9hcHAvcGFnZXMvK3Byb2R1Y3RzLytjYXRlZ29yaWVzL2NhdGVnb3JpZXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzLytwcm9kdWN0cy8rY2F0ZWdvcmllcy9jYXRlZ29yaWVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsZ0JBQWdCO0FDQ2pCOztBREVBO0VBQ0MsVUFBVTtFQUNWLGlDQUFpQztFQUNqQyxrQ0FBa0M7QUNDbkM7O0FERUE7O0VBSUcsV0FBVztBQ0RkOztBREhBOztFQVFHLFdBQVc7QUNBZDs7QURSQTtFQVdHLHdCQUF3QjtBQ0MzQjs7QURaQTtFQWNHLHdCQUF3QjtBQ0UzQjs7QURoQkE7RUFtQkUsa0JBQWtCO0VBQ2xCLGVBQWU7QUNDakI7O0FEckJBO0VBdUJHLDJCQUEyQjtFQUMzQixlQUFlO0FDRWxCOztBRDFCQTtFQTZCRSxrQkFBa0I7RUFDbEIsZUFBZTtBQ0NqQjs7QUQvQkE7RUFrQ0Usa0JBQWtCO0FDQ3BCOztBRG5DQTs7RUF3Q0csaUJBQWlCO0FDQXBCOztBRHhDQTs7RUEyQ0csa0JBQWtCO0FDRXJCOztBRDdDQTtFQWdERSxlQUFlO0FDQ2pCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvK3Byb2R1Y3RzLytjYXRlZ29yaWVzL2NhdGVnb3JpZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJuYi1jYXJkLWhlYWRlciB7XG5cdGJvcmRlci1ib3R0b206IDA7XG59XG5cbm5iLWNhcmQtYm9keSB7XG5cdHBhZGRpbmc6IDA7XG5cdGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDAuNXJlbTtcblx0Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDAuNXJlbTtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIG5nMi1zbWFydC10YWJsZSB7XG5cdHRyIHtcblx0XHR0ZDpudGgtY2hpbGQoMSksXG5cdFx0dGg6bnRoLWNoaWxkKDEpIHtcblx0XHRcdHdpZHRoOiAzMHB4O1xuXHRcdH1cblx0XHR0ZDpudGgtY2hpbGQoMiksXG5cdFx0dGg6bnRoLWNoaWxkKDIpIHtcblx0XHRcdHdpZHRoOiAzMHB4O1xuXHRcdH1cblx0XHR0aCB7XG5cdFx0XHRwYWRkaW5nOiAxOHB4ICFpbXBvcnRhbnQ7XG5cdFx0fVxuXHRcdHRkIHtcblx0XHRcdHBhZGRpbmc6IDE3cHggIWltcG9ydGFudDtcblx0XHR9XG5cdH1cblxuXHR0ci5uZzItc21hcnQtdGl0bGVzID4gdGg6bnRoLWNoaWxkKDEpIHtcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0Y3Vyc29yOiBwb2ludGVyO1xuXG5cdFx0aW5wdXQge1xuXHRcdFx0bWFyZ2luLWxlZnQ6IDFweCAhaW1wb3J0YW50O1xuXHRcdFx0Y3Vyc29yOiBwb2ludGVyO1xuXHRcdH1cblx0fVxuXG5cdHRkLm5nMi1zbWFydC1hY3Rpb25zLm5nMi1zbWFydC1hY3Rpb24tbXVsdGlwbGUtc2VsZWN0IHtcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0Y3Vyc29yOiBwb2ludGVyO1xuXHR9XG5cblx0dHIubmcyLXNtYXJ0LWZpbHRlcnMgdGgge1xuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0fVxuXG5cdHRyIHRkLFxuXHR0aCB7XG5cdFx0JjpmaXJzdC1vZi10eXBlIHtcblx0XHRcdGJvcmRlci1sZWZ0OiBub25lO1xuXHRcdH1cblx0XHQmOmxhc3Qtb2YtdHlwZSB7XG5cdFx0XHRib3JkZXItcmlnaHQ6IG5vbmU7XG5cdFx0fVxuXHR9XG5cblx0aW5wdXRbdHlwZT0nY2hlY2tib3gnXSB7XG5cdFx0Y3Vyc29yOiBwb2ludGVyO1xuXHR9XG59XG4iLCJuYi1jYXJkLWhlYWRlciB7XG4gIGJvcmRlci1ib3R0b206IDA7XG59XG5cbm5iLWNhcmQtYm9keSB7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDAuNXJlbTtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDAuNXJlbTtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIG5nMi1zbWFydC10YWJsZSB0ciB0ZDpudGgtY2hpbGQoMSksXG46aG9zdCA6Om5nLWRlZXAgbmcyLXNtYXJ0LXRhYmxlIHRyIHRoOm50aC1jaGlsZCgxKSB7XG4gIHdpZHRoOiAzMHB4O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgbmcyLXNtYXJ0LXRhYmxlIHRyIHRkOm50aC1jaGlsZCgyKSxcbjpob3N0IDo6bmctZGVlcCBuZzItc21hcnQtdGFibGUgdHIgdGg6bnRoLWNoaWxkKDIpIHtcbiAgd2lkdGg6IDMwcHg7XG59XG5cbjpob3N0IDo6bmctZGVlcCBuZzItc21hcnQtdGFibGUgdHIgdGgge1xuICBwYWRkaW5nOiAxOHB4ICFpbXBvcnRhbnQ7XG59XG5cbjpob3N0IDo6bmctZGVlcCBuZzItc21hcnQtdGFibGUgdHIgdGQge1xuICBwYWRkaW5nOiAxN3B4ICFpbXBvcnRhbnQ7XG59XG5cbjpob3N0IDo6bmctZGVlcCBuZzItc21hcnQtdGFibGUgdHIubmcyLXNtYXJ0LXRpdGxlcyA+IHRoOm50aC1jaGlsZCgxKSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgbmcyLXNtYXJ0LXRhYmxlIHRyLm5nMi1zbWFydC10aXRsZXMgPiB0aDpudGgtY2hpbGQoMSkgaW5wdXQge1xuICBtYXJnaW4tbGVmdDogMXB4ICFpbXBvcnRhbnQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIG5nMi1zbWFydC10YWJsZSB0ZC5uZzItc21hcnQtYWN0aW9ucy5uZzItc21hcnQtYWN0aW9uLW11bHRpcGxlLXNlbGVjdCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgbmcyLXNtYXJ0LXRhYmxlIHRyLm5nMi1zbWFydC1maWx0ZXJzIHRoIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgbmcyLXNtYXJ0LXRhYmxlIHRyIHRkOmZpcnN0LW9mLXR5cGUsXG46aG9zdCA6Om5nLWRlZXAgbmcyLXNtYXJ0LXRhYmxlIHRoOmZpcnN0LW9mLXR5cGUge1xuICBib3JkZXItbGVmdDogbm9uZTtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIG5nMi1zbWFydC10YWJsZSB0ciB0ZDpsYXN0LW9mLXR5cGUsXG46aG9zdCA6Om5nLWRlZXAgbmcyLXNtYXJ0LXRhYmxlIHRoOmxhc3Qtb2YtdHlwZSB7XG4gIGJvcmRlci1yaWdodDogbm9uZTtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIG5nMi1zbWFydC10YWJsZSBpbnB1dFt0eXBlPSdjaGVja2JveCddIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/pages/+products/+categories/categories.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/+products/+categories/categories.component.ts ***!
  \*********************************************************************/
/*! exports provided: CategoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesComponent", function() { return CategoriesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-smart-table */ "./node_modules/ng2-smart-table/fesm2015/ng2-smart-table.js");
/* harmony import */ var _core_data_productsCategory_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../@core/data/productsCategory.service */ "./src/app/@core/data/productsCategory.service.ts");
/* harmony import */ var _shared_product_categories_category_create_category_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../@shared/product/categories/category-create/category-create.component */ "./src/app/@shared/product/categories/category-create/category-create.component.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _shared_product_categories_categories_table_categories_table_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../@shared/product/categories/categories-table/categories-table.component */ "./src/app/@shared/product/categories/categories-table/categories-table.component.ts");
/* harmony import */ var _app_core_services_notify_notify_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @app/@core/services/notify/notify.service */ "./src/app/@core/services/notify/notify.service.ts");










let CategoriesComponent = class CategoriesComponent {
    constructor(_productsCategoryService, _modalService, _notifyService) {
        this._productsCategoryService = _productsCategoryService;
        this._modalService = _modalService;
        this._notifyService = _notifyService;
        this.sourceSmartTable = new ng2_smart_table__WEBPACK_IMPORTED_MODULE_3__["LocalDataSource"]();
        this.ngDestroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this._loadDataSmartTable();
    }
    get hasSelectedCategories() {
        return this.categoriesTable.hasSelectedCategories;
    }
    openWizardNewCategory() {
        this._modalService.open(_shared_product_categories_category_create_category_create_component__WEBPACK_IMPORTED_MODULE_5__["CategoryCreateComponent"], {
            size: 'lg',
            container: 'nb-layout',
            backdrop: 'static',
        });
    }
    deleteSelectedRows() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const categories = this.categoriesTable.selectedCategories;
            const idsArray = [];
            for (const val of categories) {
                idsArray.push(val.id);
            }
            try {
                this.loading = true;
                yield this._productsCategoryService
                    .removeByIds(idsArray)
                    .pipe()
                    .toPromise();
                this.loading = false;
                const message = `Selected are removed!`;
                this._notifyService.success(message);
            }
            catch (error) {
                this.loading = false;
                const message = `Something went wrong!`;
                this._notifyService.error(message);
            }
        });
    }
    _loadDataSmartTable() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let categories = [];
            this._productsCategoryService
                .getCategories()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.ngDestroy$))
                .subscribe((c) => {
                categories = c;
                this.categoriesTable.loadDataSmartTable(categories);
            });
        });
    }
    ngOnDestroy() {
        this.ngDestroy$.next();
        this.ngDestroy$.complete();
    }
};
CategoriesComponent.ctorParameters = () => [
    { type: _core_data_productsCategory_service__WEBPACK_IMPORTED_MODULE_4__["ProductsCategoryService"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModal"] },
    { type: _app_core_services_notify_notify_service__WEBPACK_IMPORTED_MODULE_9__["NotifyService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('categoriesTable', { static: true }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _shared_product_categories_categories_table_categories_table_component__WEBPACK_IMPORTED_MODULE_8__["CategoriesTableComponent"])
], CategoriesComponent.prototype, "categoriesTable", void 0);
CategoriesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ea-categories',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./categories.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/pages/+products/+categories/categories.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! .//categories.component.scss */ "./src/app/pages/+products/+categories/categories.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_core_data_productsCategory_service__WEBPACK_IMPORTED_MODULE_4__["ProductsCategoryService"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModal"],
        _app_core_services_notify_notify_service__WEBPACK_IMPORTED_MODULE_9__["NotifyService"]])
], CategoriesComponent);



/***/ }),

/***/ "./src/app/pages/+products/products.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/+products/products.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("nb-card-header {\n  border-bottom: 0;\n}\n\nnb-card-body {\n  padding: 0;\n  border-bottom-left-radius: 0.5rem;\n  border-bottom-right-radius: 0.5rem;\n}\n\n:host ::ng-deep ng2-smart-table tr th {\n  padding: 18px !important;\n}\n\n:host ::ng-deep ng2-smart-table tr td {\n  padding: 17px !important;\n}\n\n:host ::ng-deep ng2-smart-table tr.ng2-smart-titles > th:nth-child(1) {\n  text-align: center;\n  cursor: pointer;\n}\n\n:host ::ng-deep ng2-smart-table tr.ng2-smart-titles > th:nth-child(1) input {\n  margin-left: 1px !important;\n  cursor: pointer;\n}\n\n:host ::ng-deep ng2-smart-table td.ng2-smart-actions.ng2-smart-action-multiple-select {\n  text-align: center;\n  cursor: pointer;\n}\n\n:host ::ng-deep ng2-smart-table tr.ng2-smart-filters th {\n  text-align: center;\n}\n\n:host ::ng-deep ng2-smart-table tr td:first-of-type,\n:host ::ng-deep ng2-smart-table th:first-of-type {\n  border-left: none;\n}\n\n:host ::ng-deep ng2-smart-table tr td:last-of-type,\n:host ::ng-deep ng2-smart-table th:last-of-type {\n  border-right: none;\n}\n\n:host ::ng-deep ng2-smart-table input[type='checkbox'] {\n  cursor: pointer;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvZC9Xb3JrL0FuZ3VsYXIvTmV3IGZvbGRlciAoMikvRG9sY2VHcm9jZXJ5L3BhY2thZ2VzL2FkbWluLXdlYi1hbmd1bGFyL3NyYy9hcHAvcGFnZXMvK3Byb2R1Y3RzL3Byb2R1Y3RzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy8rcHJvZHVjdHMvcHJvZHVjdHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxnQkFBZ0I7QUNDakI7O0FERUE7RUFDQyxVQUFVO0VBQ1YsaUNBQWlDO0VBQ2pDLGtDQUFrQztBQ0NuQzs7QURFQTtFQUdHLHdCQUF3QjtBQ0QzQjs7QURGQTtFQU1HLHdCQUF3QjtBQ0EzQjs7QUROQTtFQVdFLGtCQUFrQjtFQUNsQixlQUFlO0FDRGpCOztBRFhBO0VBZUcsMkJBQTJCO0VBQzNCLGVBQWU7QUNBbEI7O0FEaEJBO0VBcUJFLGtCQUFrQjtFQUNsQixlQUFlO0FDRGpCOztBRHJCQTtFQTBCRSxrQkFBa0I7QUNEcEI7O0FEekJBOztFQWdDRyxpQkFBaUI7QUNGcEI7O0FEOUJBOztFQW1DRyxrQkFBa0I7QUNBckI7O0FEbkNBO0VBd0NFLGVBQWU7QUNEakIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy8rcHJvZHVjdHMvcHJvZHVjdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJuYi1jYXJkLWhlYWRlciB7XG5cdGJvcmRlci1ib3R0b206IDA7XG59XG5cbm5iLWNhcmQtYm9keSB7XG5cdHBhZGRpbmc6IDA7XG5cdGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDAuNXJlbTtcblx0Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDAuNXJlbTtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIG5nMi1zbWFydC10YWJsZSB7XG5cdHRyIHtcblx0XHR0aCB7XG5cdFx0XHRwYWRkaW5nOiAxOHB4ICFpbXBvcnRhbnQ7XG5cdFx0fVxuXHRcdHRkIHtcblx0XHRcdHBhZGRpbmc6IDE3cHggIWltcG9ydGFudDtcblx0XHR9XG5cdH1cblxuXHR0ci5uZzItc21hcnQtdGl0bGVzID4gdGg6bnRoLWNoaWxkKDEpIHtcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0Y3Vyc29yOiBwb2ludGVyO1xuXG5cdFx0aW5wdXQge1xuXHRcdFx0bWFyZ2luLWxlZnQ6IDFweCAhaW1wb3J0YW50O1xuXHRcdFx0Y3Vyc29yOiBwb2ludGVyO1xuXHRcdH1cblx0fVxuXG5cdHRkLm5nMi1zbWFydC1hY3Rpb25zLm5nMi1zbWFydC1hY3Rpb24tbXVsdGlwbGUtc2VsZWN0IHtcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0Y3Vyc29yOiBwb2ludGVyO1xuXHR9XG5cblx0dHIubmcyLXNtYXJ0LWZpbHRlcnMgdGgge1xuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0fVxuXG5cdHRyIHRkLFxuXHR0aCB7XG5cdFx0JjpmaXJzdC1vZi10eXBlIHtcblx0XHRcdGJvcmRlci1sZWZ0OiBub25lO1xuXHRcdH1cblx0XHQmOmxhc3Qtb2YtdHlwZSB7XG5cdFx0XHRib3JkZXItcmlnaHQ6IG5vbmU7XG5cdFx0fVxuXHR9XG5cblx0aW5wdXRbdHlwZT0nY2hlY2tib3gnXSB7XG5cdFx0Y3Vyc29yOiBwb2ludGVyO1xuXHR9XG59XG4iLCJuYi1jYXJkLWhlYWRlciB7XG4gIGJvcmRlci1ib3R0b206IDA7XG59XG5cbm5iLWNhcmQtYm9keSB7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDAuNXJlbTtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDAuNXJlbTtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIG5nMi1zbWFydC10YWJsZSB0ciB0aCB7XG4gIHBhZGRpbmc6IDE4cHggIWltcG9ydGFudDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIG5nMi1zbWFydC10YWJsZSB0ciB0ZCB7XG4gIHBhZGRpbmc6IDE3cHggIWltcG9ydGFudDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIG5nMi1zbWFydC10YWJsZSB0ci5uZzItc21hcnQtdGl0bGVzID4gdGg6bnRoLWNoaWxkKDEpIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbjpob3N0IDo6bmctZGVlcCBuZzItc21hcnQtdGFibGUgdHIubmcyLXNtYXJ0LXRpdGxlcyA+IHRoOm50aC1jaGlsZCgxKSBpbnB1dCB7XG4gIG1hcmdpbi1sZWZ0OiAxcHggIWltcG9ydGFudDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgbmcyLXNtYXJ0LXRhYmxlIHRkLm5nMi1zbWFydC1hY3Rpb25zLm5nMi1zbWFydC1hY3Rpb24tbXVsdGlwbGUtc2VsZWN0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbjpob3N0IDo6bmctZGVlcCBuZzItc21hcnQtdGFibGUgdHIubmcyLXNtYXJ0LWZpbHRlcnMgdGgge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbjpob3N0IDo6bmctZGVlcCBuZzItc21hcnQtdGFibGUgdHIgdGQ6Zmlyc3Qtb2YtdHlwZSxcbjpob3N0IDo6bmctZGVlcCBuZzItc21hcnQtdGFibGUgdGg6Zmlyc3Qtb2YtdHlwZSB7XG4gIGJvcmRlci1sZWZ0OiBub25lO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgbmcyLXNtYXJ0LXRhYmxlIHRyIHRkOmxhc3Qtb2YtdHlwZSxcbjpob3N0IDo6bmctZGVlcCBuZzItc21hcnQtdGFibGUgdGg6bGFzdC1vZi10eXBlIHtcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgbmcyLXNtYXJ0LXRhYmxlIGlucHV0W3R5cGU9J2NoZWNrYm94J10ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/pages/+products/products.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/+products/products.component.ts ***!
  \*******************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-smart-table */ "./node_modules/ng2-smart-table/fesm2015/ng2-smart-table.js");
/* harmony import */ var _core_data_products_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../@core/data/products.service */ "./src/app/@core/data/products.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _shared_product_product_create__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../@shared/product/product-create */ "./src/app/@shared/product/product-create/index.ts");
/* harmony import */ var _shared_product_forms_products_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../@shared/product/forms/products-table */ "./src/app/@shared/product/forms/products-table/index.ts");
/* harmony import */ var _core_data_productsCategory_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../@core/data/productsCategory.service */ "./src/app/@core/data/productsCategory.service.ts");
/* harmony import */ var _app_core_services_notify_notify_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @app/@core/services/notify/notify.service */ "./src/app/@core/services/notify/notify.service.ts");











const perPage = 5;
let ProductsComponent = class ProductsComponent {
    constructor(_productsService, modalService, productsCategoryService, _notifyService) {
        this._productsService = _productsService;
        this.modalService = modalService;
        this.productsCategoryService = productsCategoryService;
        this._notifyService = _notifyService;
        this.sourceSmartTable = new ng2_smart_table__WEBPACK_IMPORTED_MODULE_3__["LocalDataSource"]();
        this.ngDestroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.perPage = perPage;
        this.getCategories();
    }
    ngAfterViewInit() {
        this._loadDataSmartTable();
        if (this.productsTable) {
            this.productsTable.pagesChanges$
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.ngDestroy$))
                .subscribe((page) => {
                this._loadDataSmartTable(page);
            });
        }
    }
    openWizardNewProduct() {
        const activeModal = this.modalService.open(_shared_product_product_create__WEBPACK_IMPORTED_MODULE_7__["ProductCreateComponent"], {
            size: 'lg',
            container: 'nb-layout',
            backdrop: 'static',
        });
        const modalComponent = activeModal.componentInstance;
        modalComponent.productsCategories = this.productsCategories;
    }
    deleteSelectedRows() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const idsForDelete = this.productsTable.selectedProducts.map((c) => c.id);
            try {
                this.loading = true;
                yield this._productsService
                    .removeByIds(idsForDelete)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])())
                    .toPromise();
                this.loading = false;
                const message = `${idsForDelete.length} products was deleted!`;
                this._notifyService.success(message);
                this.productsTable.selectedProducts = [];
            }
            catch (error) {
                this.loading = false;
                const message = `Something went wrong!`;
                this._notifyService.error(message);
                this.productsTable.selectedProducts = [];
            }
        });
    }
    get hasSelectedProducts() {
        return this.productsTable.hasSelectedProducts;
    }
    getCategories() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.productsCategories = yield this.productsCategoryService
                .getCategories()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])())
                .toPromise();
        });
    }
    _loadDataSmartTable(page = 1) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let products = [];
            if (this.$products) {
                yield this.$products.unsubscribe();
            }
            this.$products = this._productsService
                .getProducts({
                skip: perPage * (page - 1),
                limit: perPage,
            })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.ngDestroy$))
                .subscribe((p) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this.productsTable.perPage = perPage;
                const dataCount = yield this.getDataCount();
                products = p;
                this.productsTable.loadDataSmartTable(products, dataCount, page);
            }));
        });
    }
    getDataCount() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this._productsService.getCountOfProducts();
        });
    }
    ngOnDestroy() {
        this.ngDestroy$.next();
        this.ngDestroy$.complete();
    }
};
ProductsComponent.ctorParameters = () => [
    { type: _core_data_products_service__WEBPACK_IMPORTED_MODULE_4__["ProductsService"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"] },
    { type: _core_data_productsCategory_service__WEBPACK_IMPORTED_MODULE_9__["ProductsCategoryService"] },
    { type: _app_core_services_notify_notify_service__WEBPACK_IMPORTED_MODULE_10__["NotifyService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('productsTable', { static: true }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _shared_product_forms_products_table__WEBPACK_IMPORTED_MODULE_8__["ProductsTableComponent"])
], ProductsComponent.prototype, "productsTable", void 0);
ProductsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ea-products',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./products.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/pages/+products/products.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! .//products.component.scss */ "./src/app/pages/+products/products.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_core_data_products_service__WEBPACK_IMPORTED_MODULE_4__["ProductsService"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"],
        _core_data_productsCategory_service__WEBPACK_IMPORTED_MODULE_9__["ProductsCategoryService"],
        _app_core_services_notify_notify_service__WEBPACK_IMPORTED_MODULE_10__["NotifyService"]])
], ProductsComponent);



/***/ }),

/***/ "./src/app/pages/+products/products.module.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/+products/products.module.ts ***!
  \****************************************************/
/*! exports provided: ProductsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsModule", function() { return ProductsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../@theme */ "./src/app/@theme/index.ts");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var ngx_highlightjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-highlightjs */ "./node_modules/ngx-highlightjs/fesm2015/ngx-highlightjs.js");
/* harmony import */ var _products_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./products.component */ "./src/app/pages/+products/products.component.ts");
/* harmony import */ var _categories_categories_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./+categories/categories.component */ "./src/app/pages/+products/+categories/categories.component.ts");
/* harmony import */ var _shared_product_product_create__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../@shared/product/product-create */ "./src/app/@shared/product/product-create/index.ts");
/* harmony import */ var _shared_product_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../@shared/product/forms */ "./src/app/@shared/product/forms/index.ts");
/* harmony import */ var _shared_product_categories_category_create__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../@shared/product/categories/category-create */ "./src/app/@shared/product/categories/category-create/index.ts");
/* harmony import */ var _shared_product_categories_category_edit_category_edit_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../@shared/product/categories/category-edit/category-edit.component */ "./src/app/@shared/product/categories/category-edit/category-edit.component.ts");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/fesm2015/index.js");
/* harmony import */ var _app_core_services_notify_notify_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @app/@core/services/notify/notify.service */ "./src/app/@core/services/notify/notify.service.ts");
/* harmony import */ var _shared_confirmation_modal_confirmation_modal_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../@shared/confirmation-modal/confirmation-modal.module */ "./src/app/@shared/confirmation-modal/confirmation-modal.module.ts");
/* harmony import */ var _app_shared_file_uploader_file_uploader_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @app/@shared/file-uploader/file-uploader.module */ "./src/app/@shared/file-uploader/file-uploader.module.ts");
/* harmony import */ var _app_shared_product_categories_forms_product_categories_forms_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @app/@shared/product/categories/forms/product-categories-forms.module */ "./src/app/@shared/product/categories/forms/product-categories-forms.module.ts");



















const routes = [
    {
        path: 'list',
        component: _products_component__WEBPACK_IMPORTED_MODULE_8__["ProductsComponent"],
    },
    {
        path: 'categories',
        component: _categories_categories_component__WEBPACK_IMPORTED_MODULE_9__["CategoriesComponent"],
    },
    {
        path: 'list/:id',
        loadChildren: () => __webpack_require__.e(/*! import() | product-product-module */ "product-product-module").then(__webpack_require__.bind(null, /*! ./+product/product.module */ "./src/app/pages/+products/+product/product.module.ts")).then((m) => m.ProductModule),
    },
];
let ProductsModule = class ProductsModule {
};
ProductsModule.routes = routes;
ProductsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _theme__WEBPACK_IMPORTED_MODULE_4__["ThemeModule"],
            angular2_toaster__WEBPACK_IMPORTED_MODULE_5__["ToasterModule"].forRoot(),
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"].forChild(),
            ngx_highlightjs__WEBPACK_IMPORTED_MODULE_7__["HighlightModule"].forRoot({ theme: 'github' }),
            _shared_product_product_create__WEBPACK_IMPORTED_MODULE_10__["ProductCreateModule"],
            _shared_product_forms__WEBPACK_IMPORTED_MODULE_11__["ProductFormsModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NbSpinnerModule"],
            _shared_confirmation_modal_confirmation_modal_module__WEBPACK_IMPORTED_MODULE_16__["ConfirmationModalModule"],
            _app_shared_file_uploader_file_uploader_module__WEBPACK_IMPORTED_MODULE_17__["FileUploaderModule"],
            _app_shared_product_categories_forms_product_categories_forms_module__WEBPACK_IMPORTED_MODULE_18__["ProductCategoriesFormsModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_14__["NbButtonModule"],
        ],
        declarations: [
            _products_component__WEBPACK_IMPORTED_MODULE_8__["ProductsComponent"],
            _shared_product_categories_category_create__WEBPACK_IMPORTED_MODULE_12__["CategoryCreateComponent"],
            _shared_product_categories_category_edit_category_edit_component__WEBPACK_IMPORTED_MODULE_13__["CategoryEditComponent"],
            _categories_categories_component__WEBPACK_IMPORTED_MODULE_9__["CategoriesComponent"],
        ],
        entryComponents: [_shared_product_categories_category_create__WEBPACK_IMPORTED_MODULE_12__["CategoryCreateComponent"], _shared_product_categories_category_edit_category_edit_component__WEBPACK_IMPORTED_MODULE_13__["CategoryEditComponent"]],
        providers: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["JsonPipe"], _app_core_services_notify_notify_service__WEBPACK_IMPORTED_MODULE_15__["NotifyService"]],
    })
], ProductsModule);



/***/ })

}]);
//# sourceMappingURL=app-pages-products-products-module-es2015.js.map