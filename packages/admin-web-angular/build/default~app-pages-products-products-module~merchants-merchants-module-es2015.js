(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~app-pages-products-products-module~merchants-merchants-module"],{

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/@shared/confirmation-modal/confirmation-modal.component.html":
/*!******************************************************************************************************************************************************************!*\
  !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/raw-loader/dist/cjs.js!./src/app/@shared/confirmation-modal/confirmation-modal.component.html ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\n\t<span>{{ mainTextTr() }}</span\n\t><button aria-label=\"Close\" class=\"close\" (click)=\"cancel()\">\n\t\t<span aria-hidden=\"true\">×</span>\n\t</button>\n</div>\n\n<div class=\"modal-footer\">\n\t<button nbButton status=\"danger\" (click)=\"cancel()\">\n\t\t{{ cancelButtonTr() }}\n\t</button>\n\t<button nbButton status=\"success\" (click)=\"confirmEvent.emit()\">\n\t\t{{ confirmButtonTr() }}\n\t</button>\n</div>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/@shared/product/categories/categories-table/categories-table.component.html":
/*!*********************************************************************************************************************************************************************************!*\
  !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/raw-loader/dist/cjs.js!./src/app/@shared/product/categories/categories-table/categories-table.component.html ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng2-smart-table\n\tclass=\"category-table\"\n\t[settings]=\"settingsSmartTable\"\n\t[source]=\"sourceSmartTable\"\n\t(userRowSelect)=\"selectCategoryTmp($event)\"\n\t(edit)=\"edit($event)\"\n\t(delete)=\"deleteCategory($event)\"\n\t[nbSpinner]=\"loading\"\n>\n</ng2-smart-table>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/@shared/product/categories/category-edit/category-edit.component.html":
/*!***************************************************************************************************************************************************************************!*\
  !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/raw-loader/dist/cjs.js!./src/app/@shared/product/categories/category-edit/category-edit.component.html ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\n\t<span class=\"modal-title\">\n\t\t{{ 'CATEGORY_VIEW.EDIT.EDIT_CATEGORY' | translate }}\n\t\t{{ basicInfo?.name.value }}\n\t</span>\n\t<button class=\"close\" aria-label=\"Close\" (click)=\"cancel()\">\n\t\t<span aria-hidden=\"true\">&times;</span>\n\t</button>\n</div>\n\n<div class=\"modal-body\">\n\t<ea-product-category-basic-info-form\n\t\t[category]=\"currentCategory\"\n\t\t#basicInfo\n\t></ea-product-category-basic-info-form>\n</div>\n\n<div class=\"modal-footer\">\n\t<button\n\t\tnbButton\n\t\tstatus=\"success\"\n\t\tsize=\"large\"\n\t\ttype=\"button\"\n\t\t(click)=\"editCategory(basicInfo.getEditObject(currentCategory))\"\n\t\t[disabled]=\"basicInfo.form.invalid\"\n\t>\n\t\t{{ 'CATEGORY_VIEW.EDIT.DONE' | translate }}!\n\t</button>\n</div>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/@shared/product/categories/forms/basic-info/basic-info-form.component.html":
/*!********************************************************************************************************************************************************************************!*\
  !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/raw-loader/dist/cjs.js!./src/app/@shared/product/categories/forms/basic-info/basic-info-form.component.html ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form class=\"form-horizontal pt-4 pb-0\" [formGroup]=\"form\">\n\t<div class=\"form-group row\">\n\t\t<label class=\"col-sm-2 control-label\">{{\n\t\t\t'CATEGORY_VIEW.CREATE.CATEGORY_NAME' | translate\n\t\t}}</label>\n\t\t<div class=\"col-sm-9\">\n\t\t\t<input\n\t\t\t\ttype=\"text\"\n\t\t\t\tclass=\"form-control\"\n\t\t\t\tplaceholder=\"{{\n\t\t\t\t\t'CATEGORY_VIEW.CREATE.CATEGORY_NAME' | translate\n\t\t\t\t}}\"\n\t\t\t\tformControlName=\"name\"\n\t\t\t/>\n\n\t\t\t<div\n\t\t\t\t*ngIf=\"name.invalid && (name.dirty || name.touched)\"\n\t\t\t\tclass=\"alert alert-danger\"\n\t\t\t>\n\t\t\t\t{{\n\t\t\t\t\t'CATEGORY_VIEW.CREATE.ENTER_THE_CATEGORY_NAME' | translate\n\t\t\t\t}}!\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<div class=\"form-group row\">\n\t\t<label class=\"col-sm-2 control-label\">{{\n\t\t\t'CATEGORY_VIEW.CREATE.PHOTO' | translate\n\t\t}}</label>\n\n\t\t<div class=\"col-sm-9\">\n\t\t\t<e-cu-file-uploader\n\t\t\t\t[placeholder]=\"uploaderPlaceholder\"\n\t\t\t\t[name]=\"name?.value\"\n\t\t\t\t[fileUrl]=\"image?.value\"\n\t\t\t\t(uploadedImgUrl)=\"image.setValue($event)\"\n\t\t\t></e-cu-file-uploader>\n\n\t\t\t<div *ngIf=\"image.invalid\" class=\"alert alert-danger\">\n\t\t\t\t{{ 'CATEGORY_VIEW.CREATE.INVALID_URL' | translate }}!\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<div class=\"form-group row\" [hidden]=\"image.invalid\">\n\t\t<label class=\"col-sm-2 control-label\"></label>\n\t\t<div class=\"col-sm-9\">\n\t\t\t<div class=\"row preview-img\" [hidden]=\"!showImageMeta\">\n\t\t\t\t<div>\n\t\t\t\t\t<img\n\t\t\t\t\t\t#imagePreview\n\t\t\t\t\t\tsrc=\"{{ image.value }}\"\n\t\t\t\t\t\talt=\"Invalid image\"\n\t\t\t\t\t\tclass=\"img-rounded\"\n\t\t\t\t\t/>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"remove-icon text-danger\" (click)=\"deleteImg()\">\n\t\t\t\t\t<div\n\t\t\t\t\t\tclass=\"ion-md-remove-circle\"\n\t\t\t\t\t\tplaceholder=\"Remove image\"\n\t\t\t\t\t\ttitle=\"{{\n\t\t\t\t\t\t\t'CATEGORY_VIEW.CREATE.REMOVE_IMAGE' | translate\n\t\t\t\t\t\t}}\"\n\t\t\t\t\t></div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</form>\n");

/***/ }),

/***/ "../../node_modules/rxjs-compat/_esm2015/operators/map.js":
/*!**********************************************************************************************************!*\
  !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/rxjs-compat/_esm2015/operators/map.js ***!
  \**********************************************************************************************************/
/*! exports provided: map */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "map", function() { return rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"]; });


//# sourceMappingURL=map.js.map

/***/ }),

/***/ "./src/app/@shared/confirmation-modal/confirmation-modal.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/@shared/confirmation-modal/confirmation-modal.component.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0BzaGFyZWQvY29uZmlybWF0aW9uLW1vZGFsL2NvbmZpcm1hdGlvbi1tb2RhbC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/@shared/confirmation-modal/confirmation-modal.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/@shared/confirmation-modal/confirmation-modal.component.ts ***!
  \****************************************************************************/
/*! exports provided: ConfimationModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfimationModalComponent", function() { return ConfimationModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");





let ConfimationModalComponent = class ConfimationModalComponent {
    constructor(activeModal, translateService) {
        this.activeModal = activeModal;
        this.translateService = translateService;
        this.ngDestroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.prefix = 'CONFIRM_MODAL.';
        this.confirmButton = 'YES';
        this.cancelButton = 'NO';
        this.confirmEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        if (!this.mainText) {
            this.mainText = 'ARE_YOU_SURE';
        }
    }
    ngOnInit() { }
    mainTextTr() {
        const forTranslate = this.prefix + this.mainText;
        return this._translate(forTranslate);
    }
    confirmButtonTr() {
        const forTranslate = this.prefix + this.confirmButton;
        return this._translate(forTranslate);
    }
    cancelButtonTr() {
        const forTranslate = this.prefix + this.cancelButton;
        return this._translate(forTranslate);
    }
    cancel() {
        this.activeModal.dismiss('canceled');
    }
    _translate(key) {
        let translationResult = '';
        this.translateService.get(key).subscribe((res) => {
            translationResult = res;
        });
        return translationResult;
    }
    ngOnDestroy() {
        this.ngDestroy$.next();
        this.ngDestroy$.complete();
    }
};
ConfimationModalComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], ConfimationModalComponent.prototype, "confirmEvent", void 0);
ConfimationModalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./confirmation-modal.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/@shared/confirmation-modal/confirmation-modal.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./confirmation-modal.component.scss */ "./src/app/@shared/confirmation-modal/confirmation-modal.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]])
], ConfimationModalComponent);



/***/ }),

/***/ "./src/app/@shared/confirmation-modal/confirmation-modal.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/@shared/confirmation-modal/confirmation-modal.module.ts ***!
  \*************************************************************************/
/*! exports provided: ConfirmationModalModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmationModalModule", function() { return ConfirmationModalModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../@theme */ "./src/app/@theme/index.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _confirmation_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./confirmation-modal.component */ "./src/app/@shared/confirmation-modal/confirmation-modal.component.ts");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/fesm2015/index.js");








const COMPONENTS = [_confirmation_modal_component__WEBPACK_IMPORTED_MODULE_5__["ConfimationModalComponent"]];
let ConfirmationModalModule = class ConfirmationModalModule {
};
ConfirmationModalModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _theme__WEBPACK_IMPORTED_MODULE_3__["ThemeModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"].forChild(),
            angular2_toaster__WEBPACK_IMPORTED_MODULE_6__["ToasterModule"].forRoot(),
            _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbSpinnerModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbButtonModule"],
        ],
        declarations: COMPONENTS,
        entryComponents: COMPONENTS,
        exports: COMPONENTS,
    })
], ConfirmationModalModule);



/***/ }),

/***/ "./src/app/@shared/product/categories/categories-table/categories-table.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/@shared/product/categories/categories-table/categories-table.component.scss ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host ::ng-deep ng2-smart-table table th.image {\n  text-align: center;\n}\n\n:host ::ng-deep ng2-smart-table table th.ng2-smart-actions {\n  text-align: center;\n}\n\n:host ::ng-deep ng2-smart-table table tr > td:nth-child(3) {\n  text-align: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvZC9Xb3JrL0FuZ3VsYXIvTmV3IGZvbGRlciAoMikvRG9sY2VHcm9jZXJ5L3BhY2thZ2VzL2FkbWluLXdlYi1hbmd1bGFyL3NyYy9hcHAvQHNoYXJlZC9wcm9kdWN0L2NhdGVnb3JpZXMvY2F0ZWdvcmllcy10YWJsZS9jYXRlZ29yaWVzLXRhYmxlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9Ac2hhcmVkL3Byb2R1Y3QvY2F0ZWdvcmllcy9jYXRlZ29yaWVzLXRhYmxlL2NhdGVnb3JpZXMtdGFibGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFRSxrQkFBa0I7QUNBcEI7O0FERkE7RUFLRSxrQkFBa0I7QUNDcEI7O0FETkE7RUFRRSxrQkFBa0I7QUNFcEIiLCJmaWxlIjoic3JjL2FwcC9Ac2hhcmVkL3Byb2R1Y3QvY2F0ZWdvcmllcy9jYXRlZ29yaWVzLXRhYmxlL2NhdGVnb3JpZXMtdGFibGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCA6Om5nLWRlZXAgbmcyLXNtYXJ0LXRhYmxlIHRhYmxlIHtcblx0dGguaW1hZ2Uge1xuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0fVxuXHR0aC5uZzItc21hcnQtYWN0aW9ucyB7XG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHR9XG5cdHRyID4gdGQ6bnRoLWNoaWxkKDMpIHtcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdH1cbn1cbiIsIjpob3N0IDo6bmctZGVlcCBuZzItc21hcnQtdGFibGUgdGFibGUgdGguaW1hZ2Uge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbjpob3N0IDo6bmctZGVlcCBuZzItc21hcnQtdGFibGUgdGFibGUgdGgubmcyLXNtYXJ0LWFjdGlvbnMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbjpob3N0IDo6bmctZGVlcCBuZzItc21hcnQtdGFibGUgdGFibGUgdHIgPiB0ZDpudGgtY2hpbGQoMykge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/@shared/product/categories/categories-table/categories-table.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/@shared/product/categories/categories-table/categories-table.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: CategoriesTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesTableComponent", function() { return CategoriesTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-smart-table */ "./node_modules/ng2-smart-table/fesm2015/ng2-smart-table.js");
/* harmony import */ var _app_core_data_productsCategory_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/@core/data/productsCategory.service */ "./src/app/@core/data/productsCategory.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _category_edit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../category-edit */ "./src/app/@shared/product/categories/category-edit/index.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _modules_client_common_angular2_locale_product_locales_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @modules/client.common.angular2/locale/product-locales.service */ "../common-angular/src/locale/product-locales.service.ts");
/* harmony import */ var _app_core_services_notify_notify_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @app/@core/services/notify/notify.service */ "./src/app/@core/services/notify/notify.service.ts");
/* harmony import */ var _app_shared_confirmation_modal_confirmation_modal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @app/@shared/confirmation-modal/confirmation-modal.component */ "./src/app/@shared/confirmation-modal/confirmation-modal.component.ts");
/* harmony import */ var _category_image_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./category-image.component */ "./src/app/@shared/product/categories/categories-table/category-image.component.ts");
var CategoriesTableComponent_1;













let CategoriesTableComponent = CategoriesTableComponent_1 = class CategoriesTableComponent {
    constructor(_translateService, _productsCategoryService, _productLocalesService, _modalService, _notifyService, modalService) {
        this._translateService = _translateService;
        this._productsCategoryService = _productsCategoryService;
        this._productLocalesService = _productLocalesService;
        this._modalService = _modalService;
        this._notifyService = _notifyService;
        this.modalService = modalService;
        this.selectMode = 'multi';
        this.showPerPage = 7;
        this.editWithModal = true;
        this.editRow = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.deleteRow = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.productsCategories = [];
        this.sourceSmartTable = new ng2_smart_table__WEBPACK_IMPORTED_MODULE_2__["LocalDataSource"]();
        this._selectedCategories = [];
        this.ngDestroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this._translateService.setDefaultLang('en');
        this._translateService.use('en');
    }
    get hasSelectedCategories() {
        return this._selectedCategories.length > 0;
    }
    get selectedCategories() {
        return [...this._selectedCategories];
    }
    ngOnInit() {
        this._loadSettingsSmartTable();
        this._applyTranslationOnSmartTable();
    }
    edit(ev) {
        if (this.editWithModal) {
            const activeModal = this._modalService.open(_category_edit__WEBPACK_IMPORTED_MODULE_5__["CategoryEditComponent"], {
                size: 'lg',
                container: 'nb-layout',
                backdrop: 'static',
            });
            const modalComponent = activeModal.componentInstance;
            modalComponent.currentCategory = ev.data;
        }
        else {
            this.editRow.emit(ev.data);
        }
    }
    deleteCategory(e) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const activeModal = this.modalService.open(_app_shared_confirmation_modal_confirmation_modal_component__WEBPACK_IMPORTED_MODULE_11__["ConfimationModalComponent"], {
                size: 'sm',
                container: 'nb-layout',
                backdrop: 'static',
            });
            const modalComponent = activeModal.componentInstance;
            this.confirmSub$ = yield modalComponent.confirmEvent
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(modalComponent.ngDestroy$))
                .subscribe((dataEvent) => {
                const idsArray = [];
                idsArray.push(e.data.id);
                try {
                    this.loading = true;
                    this._productsCategoryService
                        .removeByIds(idsArray)
                        .pipe()
                        .toPromise();
                    this.loading = false;
                    const message = `Category '${e.data.title}' deleted`;
                    this._notifyService.success(message);
                    this.deleteRow.emit(e.data);
                }
                catch (error) {
                    this.loading = false;
                    const message = `Something went wrong!`;
                    this._notifyService.error(message);
                }
                modalComponent.cancel();
            });
        });
    }
    selectCategoryTmp(ev) {
        this._selectedCategories = ev.selected;
    }
    loadDataSmartTable(categories) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.productsCategories = categories;
            const categoriesVM = categories.map((category) => {
                return {
                    id: category.id,
                    title: this.localeTranslate(category.name) ||
                        CategoriesTableComponent_1.noInfoSign,
                    image: category.image,
                    _nameLocaleValues: category.name,
                };
            });
            this.sourceSmartTable.load(categoriesVM);
        });
    }
    localeTranslate(member) {
        return this._productLocalesService.getTranslate(member);
    }
    _applyTranslationOnSmartTable() {
        this._translateService.onLangChange.subscribe(() => {
            this._loadSettingsSmartTable();
            this.loadDataSmartTable(this.productsCategories);
        });
    }
    _loadSettingsSmartTable() {
        const columnTitlePrefix = 'CATEGORY_VIEW.';
        const getTranslate = (name) => this._translateService.get(columnTitlePrefix + name);
        Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["forkJoin"])(getTranslate('IMAGE'), getTranslate('TITLE'))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(this.ngDestroy$))
            .subscribe(([image, titleTr]) => {
            this.settingsSmartTable = {
                selectMode: this.selectMode,
                mode: 'external',
                actions: {
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
                columns: {
                    image: {
                        title: image,
                        type: 'custom',
                        filter: false,
                        renderComponent: _category_image_component__WEBPACK_IMPORTED_MODULE_12__["CategoryImageComponent"],
                        width: '5%',
                    },
                    title: { title: titleTr },
                },
                pager: {
                    display: true,
                    perPage: this.showPerPage,
                },
            };
        });
    }
    ngOnDestroy() {
        this.ngDestroy$.next();
        this.ngDestroy$.complete();
    }
};
CategoriesTableComponent.noInfoSign = '';
CategoriesTableComponent.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] },
    { type: _app_core_data_productsCategory_service__WEBPACK_IMPORTED_MODULE_3__["ProductsCategoryService"] },
    { type: _modules_client_common_angular2_locale_product_locales_service__WEBPACK_IMPORTED_MODULE_9__["ProductLocalesService"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"] },
    { type: _app_core_services_notify_notify_service__WEBPACK_IMPORTED_MODULE_10__["NotifyService"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], CategoriesTableComponent.prototype, "selectMode", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], CategoriesTableComponent.prototype, "showPerPage", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], CategoriesTableComponent.prototype, "editWithModal", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], CategoriesTableComponent.prototype, "editRow", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], CategoriesTableComponent.prototype, "deleteRow", void 0);
CategoriesTableComponent = CategoriesTableComponent_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ea-categories-table',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./categories-table.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/@shared/product/categories/categories-table/categories-table.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./categories-table.component.scss */ "./src/app/@shared/product/categories/categories-table/categories-table.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"],
        _app_core_data_productsCategory_service__WEBPACK_IMPORTED_MODULE_3__["ProductsCategoryService"],
        _modules_client_common_angular2_locale_product_locales_service__WEBPACK_IMPORTED_MODULE_9__["ProductLocalesService"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"],
        _app_core_services_notify_notify_service__WEBPACK_IMPORTED_MODULE_10__["NotifyService"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"]])
], CategoriesTableComponent);



/***/ }),

/***/ "./src/app/@shared/product/categories/categories-table/category-image.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/@shared/product/categories/categories-table/category-image.component.scss ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#category-image {\n  background: #000000;\n  border-radius: 4px;\n  width: 80px;\n  height: 80px;\n}\n\nimg {\n  opacity: 0.85;\n  width: 80px;\n  height: 80px;\n  border-radius: 4px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvZC9Xb3JrL0FuZ3VsYXIvTmV3IGZvbGRlciAoMikvRG9sY2VHcm9jZXJ5L3BhY2thZ2VzL2FkbWluLXdlYi1hbmd1bGFyL3NyYy9hcHAvQHNoYXJlZC9wcm9kdWN0L2NhdGVnb3JpZXMvY2F0ZWdvcmllcy10YWJsZS9jYXRlZ29yeS1pbWFnZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvQHNoYXJlZC9wcm9kdWN0L2NhdGVnb3JpZXMvY2F0ZWdvcmllcy10YWJsZS9jYXRlZ29yeS1pbWFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7QUNDYjs7QURFQTtFQUNDLGFBQWE7RUFDYixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtBQ0NuQiIsImZpbGUiOiJzcmMvYXBwL0BzaGFyZWQvcHJvZHVjdC9jYXRlZ29yaWVzL2NhdGVnb3JpZXMtdGFibGUvY2F0ZWdvcnktaW1hZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY2F0ZWdvcnktaW1hZ2Uge1xuXHRiYWNrZ3JvdW5kOiAjMDAwMDAwO1xuXHRib3JkZXItcmFkaXVzOiA0cHg7XG5cdHdpZHRoOiA4MHB4O1xuXHRoZWlnaHQ6IDgwcHg7XG59XG5cbmltZyB7XG5cdG9wYWNpdHk6IDAuODU7XG5cdHdpZHRoOiA4MHB4O1xuXHRoZWlnaHQ6IDgwcHg7XG5cdGJvcmRlci1yYWRpdXM6IDRweDtcbn1cbiIsIiNjYXRlZ29yeS1pbWFnZSB7XG4gIGJhY2tncm91bmQ6ICMwMDAwMDA7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgd2lkdGg6IDgwcHg7XG4gIGhlaWdodDogODBweDtcbn1cblxuaW1nIHtcbiAgb3BhY2l0eTogMC44NTtcbiAgd2lkdGg6IDgwcHg7XG4gIGhlaWdodDogODBweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/@shared/product/categories/categories-table/category-image.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/@shared/product/categories/categories-table/category-image.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: CategoryImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryImageComponent", function() { return CategoryImageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CategoryImageComponent = class CategoryImageComponent {
    ngOnInit() {
        this.image.nativeElement.src = this.value;
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('image', { static: true }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], CategoryImageComponent.prototype, "image", void 0);
CategoryImageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'category-image',
        template: `
		<div id="category-image"><img #image width="80px" height="80px" /></div>
	`,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./category-image.component.scss */ "./src/app/@shared/product/categories/categories-table/category-image.component.scss")).default]
    })
], CategoryImageComponent);



/***/ }),

/***/ "./src/app/@shared/product/categories/categories-table/index.ts":
/*!**********************************************************************!*\
  !*** ./src/app/@shared/product/categories/categories-table/index.ts ***!
  \**********************************************************************/
/*! exports provided: CategoriesTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _categories_table_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./categories-table.component */ "./src/app/@shared/product/categories/categories-table/categories-table.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CategoriesTableComponent", function() { return _categories_table_component__WEBPACK_IMPORTED_MODULE_1__["CategoriesTableComponent"]; });





/***/ }),

/***/ "./src/app/@shared/product/categories/category-edit/category-edit.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/@shared/product/categories/category-edit/category-edit.component.scss ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".preview-img {\n  padding-left: 14px;\n  padding-right: 16px;\n}\n\n.img-rounded {\n  max-height: 70px;\n}\n\n.remove-icon {\n  cursor: pointer;\n  padding-left: 7px;\n  padding-right: 7px;\n  padding-top: 2px;\n}\n\ndiv.modal-footer {\n  padding-top: 7px;\n  margin-right: 67px;\n  border: none;\n}\n\nlabel {\n  margin: auto 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvZC9Xb3JrL0FuZ3VsYXIvTmV3IGZvbGRlciAoMikvRG9sY2VHcm9jZXJ5L3BhY2thZ2VzL2FkbWluLXdlYi1hbmd1bGFyL3NyYy9hcHAvQHNoYXJlZC9wcm9kdWN0L2NhdGVnb3JpZXMvY2F0ZWdvcnktZWRpdC9jYXRlZ29yeS1lZGl0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9Ac2hhcmVkL3Byb2R1Y3QvY2F0ZWdvcmllcy9jYXRlZ29yeS1lZGl0L2NhdGVnb3J5LWVkaXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxrQkFBa0I7RUFDbEIsbUJBQW1CO0FDQ3BCOztBREVBO0VBQ0MsZ0JBQWdCO0FDQ2pCOztBREVBO0VBQ0MsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FDQ2pCOztBREVBO0VBQ0MsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixZQUFZO0FDQ2I7O0FERUE7RUFDQyxjQUFjO0FDQ2YiLCJmaWxlIjoic3JjL2FwcC9Ac2hhcmVkL3Byb2R1Y3QvY2F0ZWdvcmllcy9jYXRlZ29yeS1lZGl0L2NhdGVnb3J5LWVkaXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJldmlldy1pbWcge1xuXHRwYWRkaW5nLWxlZnQ6IDE0cHg7XG5cdHBhZGRpbmctcmlnaHQ6IDE2cHg7XG59XG5cbi5pbWctcm91bmRlZCB7XG5cdG1heC1oZWlnaHQ6IDcwcHg7XG59XG5cbi5yZW1vdmUtaWNvbiB7XG5cdGN1cnNvcjogcG9pbnRlcjtcblx0cGFkZGluZy1sZWZ0OiA3cHg7XG5cdHBhZGRpbmctcmlnaHQ6IDdweDtcblx0cGFkZGluZy10b3A6IDJweDtcbn1cblxuZGl2Lm1vZGFsLWZvb3RlciB7XG5cdHBhZGRpbmctdG9wOiA3cHg7XG5cdG1hcmdpbi1yaWdodDogNjdweDtcblx0Ym9yZGVyOiBub25lO1xufVxuXG5sYWJlbCB7XG5cdG1hcmdpbjogYXV0byAwO1xufVxuIiwiLnByZXZpZXctaW1nIHtcbiAgcGFkZGluZy1sZWZ0OiAxNHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xufVxuXG4uaW1nLXJvdW5kZWQge1xuICBtYXgtaGVpZ2h0OiA3MHB4O1xufVxuXG4ucmVtb3ZlLWljb24ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmctbGVmdDogN3B4O1xuICBwYWRkaW5nLXJpZ2h0OiA3cHg7XG4gIHBhZGRpbmctdG9wOiAycHg7XG59XG5cbmRpdi5tb2RhbC1mb290ZXIge1xuICBwYWRkaW5nLXRvcDogN3B4O1xuICBtYXJnaW4tcmlnaHQ6IDY3cHg7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxubGFiZWwge1xuICBtYXJnaW46IGF1dG8gMDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/@shared/product/categories/category-edit/category-edit.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/@shared/product/categories/category-edit/category-edit.component.ts ***!
  \*************************************************************************************/
/*! exports provided: CategoryEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryEditComponent", function() { return CategoryEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var rxjs_operators_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators/map */ "../../node_modules/rxjs-compat/_esm2015/operators/map.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _core_data_productsCategory_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../@core/data/productsCategory.service */ "./src/app/@core/data/productsCategory.service.ts");
/* harmony import */ var _modules_client_common_angular2_locale_product_locales_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @modules/client.common.angular2/locale/product-locales.service */ "../common-angular/src/locale/product-locales.service.ts");
/* harmony import */ var _app_core_services_notify_notify_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/@core/services/notify/notify.service */ "./src/app/@core/services/notify/notify.service.ts");









let CategoryEditComponent = class CategoryEditComponent {
    constructor(_activeModal, _productsCategoryService, _productLocalesService, _notifyService) {
        this._activeModal = _activeModal;
        this._productsCategoryService = _productsCategoryService;
        this._productLocalesService = _productLocalesService;
        this._notifyService = _notifyService;
        this._ngDestroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    }
    ngOnDestroy() {
        this._ngDestroy$.next();
        this._ngDestroy$.complete();
    }
    cancel() {
        this._activeModal.dismiss('canceled');
    }
    editCategory(categoryRaw) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                yield this._productsCategoryService
                    .update(this.currentCategory.id, categoryRaw)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])())
                    .toPromise();
                const message = `Category ${this.localeTranslate(categoryRaw.name)} is edited`;
                this._notifyService.success(message);
                this.cancel();
            }
            catch (err) {
                const message = `Something went wrong!`;
                this._notifyService.error(message);
            }
        });
    }
    localeTranslate(member) {
        return this._productLocalesService.getTranslate(member);
    }
};
CategoryEditComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"] },
    { type: _core_data_productsCategory_service__WEBPACK_IMPORTED_MODULE_6__["ProductsCategoryService"] },
    { type: _modules_client_common_angular2_locale_product_locales_service__WEBPACK_IMPORTED_MODULE_7__["ProductLocalesService"] },
    { type: _app_core_services_notify_notify_service__WEBPACK_IMPORTED_MODULE_8__["NotifyService"] }
];
CategoryEditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ea-category-edit',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./category-edit.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/@shared/product/categories/category-edit/category-edit.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./category-edit.component.scss */ "./src/app/@shared/product/categories/category-edit/category-edit.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"],
        _core_data_productsCategory_service__WEBPACK_IMPORTED_MODULE_6__["ProductsCategoryService"],
        _modules_client_common_angular2_locale_product_locales_service__WEBPACK_IMPORTED_MODULE_7__["ProductLocalesService"],
        _app_core_services_notify_notify_service__WEBPACK_IMPORTED_MODULE_8__["NotifyService"]])
], CategoryEditComponent);



/***/ }),

/***/ "./src/app/@shared/product/categories/category-edit/index.ts":
/*!*******************************************************************!*\
  !*** ./src/app/@shared/product/categories/category-edit/index.ts ***!
  \*******************************************************************/
/*! exports provided: CategoryEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _category_edit_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./category-edit.component */ "./src/app/@shared/product/categories/category-edit/category-edit.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CategoryEditComponent", function() { return _category_edit_component__WEBPACK_IMPORTED_MODULE_1__["CategoryEditComponent"]; });





/***/ }),

/***/ "./src/app/@shared/product/categories/forms/basic-info/basic-info-form.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/@shared/product/categories/forms/basic-info/basic-info-form.component.scss ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".preview-img {\n  padding-left: 14px;\n  padding-right: 16px;\n}\n\n.img-rounded {\n  max-height: 70px;\n}\n\n.remove-icon {\n  padding-left: 7px;\n  padding-right: 7px;\n  padding-top: 2px;\n}\n\n.remove-icon div {\n  cursor: pointer;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvZC9Xb3JrL0FuZ3VsYXIvTmV3IGZvbGRlciAoMikvRG9sY2VHcm9jZXJ5L3BhY2thZ2VzL2FkbWluLXdlYi1hbmd1bGFyL3NyYy9hcHAvQHNoYXJlZC9wcm9kdWN0L2NhdGVnb3JpZXMvZm9ybXMvYmFzaWMtaW5mby9iYXNpYy1pbmZvLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL0BzaGFyZWQvcHJvZHVjdC9jYXRlZ29yaWVzL2Zvcm1zL2Jhc2ljLWluZm8vYmFzaWMtaW5mby1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Msa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQ0NwQjs7QURFQTtFQUNDLGdCQUFnQjtBQ0NqQjs7QURFQTtFQUtDLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FDSGpCOztBREpBO0VBRUUsZUFBZTtBQ01qQiIsImZpbGUiOiJzcmMvYXBwL0BzaGFyZWQvcHJvZHVjdC9jYXRlZ29yaWVzL2Zvcm1zL2Jhc2ljLWluZm8vYmFzaWMtaW5mby1mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByZXZpZXctaW1nIHtcblx0cGFkZGluZy1sZWZ0OiAxNHB4O1xuXHRwYWRkaW5nLXJpZ2h0OiAxNnB4O1xufVxuXG4uaW1nLXJvdW5kZWQge1xuXHRtYXgtaGVpZ2h0OiA3MHB4O1xufVxuXG4ucmVtb3ZlLWljb24ge1xuXHRkaXYge1xuXHRcdGN1cnNvcjogcG9pbnRlcjtcblx0fVxuXG5cdHBhZGRpbmctbGVmdDogN3B4O1xuXHRwYWRkaW5nLXJpZ2h0OiA3cHg7XG5cdHBhZGRpbmctdG9wOiAycHg7XG59XG4iLCIucHJldmlldy1pbWcge1xuICBwYWRkaW5nLWxlZnQ6IDE0cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG59XG5cbi5pbWctcm91bmRlZCB7XG4gIG1heC1oZWlnaHQ6IDcwcHg7XG59XG5cbi5yZW1vdmUtaWNvbiB7XG4gIHBhZGRpbmctbGVmdDogN3B4O1xuICBwYWRkaW5nLXJpZ2h0OiA3cHg7XG4gIHBhZGRpbmctdG9wOiAycHg7XG59XG5cbi5yZW1vdmUtaWNvbiBkaXYge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/@shared/product/categories/forms/basic-info/basic-info-form.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/@shared/product/categories/forms/basic-info/basic-info-form.component.ts ***!
  \******************************************************************************************/
/*! exports provided: BasicInfoFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicInfoFormComponent", function() { return BasicInfoFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var is_url__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! is-url */ "../../node_modules/is-url/index.js");
/* harmony import */ var is_url__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(is_url__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");







let BasicInfoFormComponent = class BasicInfoFormComponent {
    constructor(fb, _langTranslateService) {
        this.fb = fb;
        this._langTranslateService = _langTranslateService;
        this.form = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            image: [
                '',
                [
                    (control) => {
                        const imageUrl = control.value;
                        if (!is_url__WEBPACK_IMPORTED_MODULE_3___default()(imageUrl) && !lodash__WEBPACK_IMPORTED_MODULE_4___default.a.isEmpty(imageUrl)) {
                            return { invalidUrl: true };
                        }
                        return null;
                    },
                ],
            ],
        });
    }
    get image() {
        return this.form.get('image');
    }
    get name() {
        return this.form.get('name');
    }
    get isFormModelValid() {
        return this.form.valid;
    }
    get showImageMeta() {
        return this.image && this.image.value !== '';
    }
    get usedLanguage() {
        const usedLanguage = this._langTranslateService.currentLang;
        switch (usedLanguage) {
            case 'en-US':
                return 'en-US';
            case 'bg-BG':
                return 'bg-BG';
            case 'he-IL':
                return 'he-IL';
            case 'ru-RU':
                return 'ru-RU';
            case 'es-ES':
                return 'es-ES';
            case 'it-IT':
                return 'it-IT';
            case 'fr-FR':
                return 'fr-FR';
            default:
                return 'en-US';
        }
    }
    get createObject() {
        const usedLanguage = this.usedLanguage;
        const categoryObject = {
            name: [{ locale: usedLanguage, value: this.name.value }],
        };
        if (this.showImageMeta) {
            categoryObject.image = this.image.value;
        }
        return categoryObject;
    }
    getEditObject(currentCategory) {
        const usedLanguage = this.usedLanguage;
        const newCategoryNames = currentCategory._nameLocaleValues.map(({ locale, value }) => {
            return locale === usedLanguage
                ? {
                    locale: usedLanguage,
                    value: this.name.value,
                }
                : { locale, value };
        });
        if (!newCategoryNames.some((c) => c.locale === usedLanguage)) {
            newCategoryNames.push({
                locale: usedLanguage,
                value: this.name.value,
            });
        }
        const categoryRaw = {
            name: newCategoryNames,
            image: this.image.value,
        };
        return categoryRaw;
    }
    ngOnInit() {
        if (this.category) {
            this.name.setValue(this.category.title);
            this.image.setValue(this.category.image);
        }
        this.getUploaderPlaceholderText();
    }
    deleteImg() {
        this.image.setValue('');
    }
    ngAfterViewInit() {
        this._setupLogoUrlValidation();
    }
    getUploaderPlaceholderText() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.uploaderPlaceholder = yield this._langTranslateService
                .get('CATEGORY_VIEW.CREATE.PHOTO_OPTIONAL')
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["first"])())
                .toPromise();
        });
    }
    _setupLogoUrlValidation() {
        this.imagePreviewElement.nativeElement.onload = () => {
            this.image.setErrors(null);
        };
        this.imagePreviewElement.nativeElement.onerror = () => {
            if (this.showImageMeta) {
                this.image.setErrors({ invalidUrl: true });
            }
        };
    }
};
BasicInfoFormComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('imagePreview', { static: true }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], BasicInfoFormComponent.prototype, "imagePreviewElement", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], BasicInfoFormComponent.prototype, "category", void 0);
BasicInfoFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ea-product-category-basic-info-form',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./basic-info-form.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/@shared/product/categories/forms/basic-info/basic-info-form.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./basic-info-form.component.scss */ "./src/app/@shared/product/categories/forms/basic-info/basic-info-form.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]])
], BasicInfoFormComponent);



/***/ }),

/***/ "./src/app/@shared/product/categories/forms/basic-info/index.ts":
/*!**********************************************************************!*\
  !*** ./src/app/@shared/product/categories/forms/basic-info/index.ts ***!
  \**********************************************************************/
/*! exports provided: BasicInfoFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _basic_info_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basic-info-form.component */ "./src/app/@shared/product/categories/forms/basic-info/basic-info-form.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BasicInfoFormComponent", function() { return _basic_info_form_component__WEBPACK_IMPORTED_MODULE_1__["BasicInfoFormComponent"]; });





/***/ }),

/***/ "./src/app/@shared/product/categories/forms/product-categories-forms.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/@shared/product/categories/forms/product-categories-forms.module.ts ***!
  \*************************************************************************************/
/*! exports provided: ProductCategoriesFormsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductCategoriesFormsModule", function() { return ProductCategoriesFormsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _basic_info__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./basic-info */ "./src/app/@shared/product/categories/forms/basic-info/index.ts");
/* harmony import */ var _app_shared_file_uploader_file_uploader_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/@shared/file-uploader/file-uploader.module */ "./src/app/@shared/file-uploader/file-uploader.module.ts");
/* harmony import */ var _app_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/@theme */ "./src/app/@theme/index.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _categories_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../categories-table */ "./src/app/@shared/product/categories/categories-table/index.ts");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng2-smart-table */ "./node_modules/ng2-smart-table/fesm2015/ng2-smart-table.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/fesm2015/index.js");
/* harmony import */ var _categories_table_category_image_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../categories-table/category-image.component */ "./src/app/@shared/product/categories/categories-table/category-image.component.ts");
/* harmony import */ var _app_shared_confirmation_modal_confirmation_modal_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @app/@shared/confirmation-modal/confirmation-modal.module */ "./src/app/@shared/confirmation-modal/confirmation-modal.module.ts");













let ProductCategoriesFormsModule = class ProductCategoriesFormsModule {
};
ProductCategoriesFormsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
            _app_theme__WEBPACK_IMPORTED_MODULE_5__["ThemeModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"].forChild(),
            _app_shared_file_uploader_file_uploader_module__WEBPACK_IMPORTED_MODULE_4__["FileUploaderModule"],
            ng2_smart_table__WEBPACK_IMPORTED_MODULE_9__["Ng2SmartTableModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbSpinnerModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _app_shared_confirmation_modal_confirmation_modal_module__WEBPACK_IMPORTED_MODULE_12__["ConfirmationModalModule"],
        ],
        declarations: [
            _basic_info__WEBPACK_IMPORTED_MODULE_3__["BasicInfoFormComponent"],
            _categories_table__WEBPACK_IMPORTED_MODULE_8__["CategoriesTableComponent"],
            _categories_table_category_image_component__WEBPACK_IMPORTED_MODULE_11__["CategoryImageComponent"],
        ],
        exports: [_basic_info__WEBPACK_IMPORTED_MODULE_3__["BasicInfoFormComponent"], _categories_table__WEBPACK_IMPORTED_MODULE_8__["CategoriesTableComponent"]],
        entryComponents: [_categories_table_category_image_component__WEBPACK_IMPORTED_MODULE_11__["CategoryImageComponent"]],
    })
], ProductCategoriesFormsModule);



/***/ })

}]);
//# sourceMappingURL=default~app-pages-products-products-module~merchants-merchants-module-es2015.js.map