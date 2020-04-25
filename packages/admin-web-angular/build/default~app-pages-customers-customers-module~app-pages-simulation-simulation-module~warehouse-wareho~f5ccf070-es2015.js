(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~app-pages-customers-customers-module~app-pages-simulation-simulation-module~warehouse-wareho~f5ccf070"],{

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/@shared/user/forms/basic-info/basic-info-form.component.html":
/*!******************************************************************************************************************************************************************!*\
  !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/raw-loader/dist/cjs.js!./src/app/@shared/user/forms/basic-info/basic-info-form.component.html ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-sm-12\" [formGroup]=\"form\" *ngIf=\"form\">\n\t<br />\n\n\t<fieldset>\n\t\t<div class=\"form-group row\">\n\t\t\t<label class=\"col-sm-2 control-label\">\n\t\t\t\t<span *ngIf=\"showBasicInfoLabel\">{{\n\t\t\t\t\t'SHARED.USER.FORMS.BASIC_INFO.TITLE' | translate\n\t\t\t\t}}</span>\n\t\t\t</label>\n\n\t\t\t<div class=\"col-sm-5\">\n\t\t\t\t<input\n\t\t\t\t\ttype=\"text\"\n\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\tplaceholder=\"{{\n\t\t\t\t\t\t'SHARED.USER.FORMS.BASIC_INFO.FIRST_NAME_OPTIONAL'\n\t\t\t\t\t\t\t| translate\n\t\t\t\t\t}}\"\n\t\t\t\t\tformControlName=\"firstName\"\n\t\t\t\t/>\n\t\t\t</div>\n\n\t\t\t<div class=\"col-sm-5\">\n\t\t\t\t<input\n\t\t\t\t\ttype=\"text\"\n\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\tplaceholder=\"{{\n\t\t\t\t\t\t'SHARED.USER.FORMS.BASIC_INFO.LAST_NAME_OPTIONAL'\n\t\t\t\t\t\t\t| translate\n\t\t\t\t\t}}\"\n\t\t\t\t\tformControlName=\"lastName\"\n\t\t\t\t/>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"form-group row\">\n\t\t\t<label class=\"col-sm-2 control-label\">{{\n\t\t\t\t'SHARED.USER.FORMS.BASIC_INFO.EMAIL' | translate\n\t\t\t}}</label>\n\n\t\t\t<div class=\"col-sm-10\">\n\t\t\t\t<input\n\t\t\t\t\ttype=\"text\"\n\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\tplaceholder=\"{{\n\t\t\t\t\t\t'SHARED.USER.FORMS.BASIC_INFO.EMAIL_OPTIONAL'\n\t\t\t\t\t\t\t| translate\n\t\t\t\t\t}}\"\n\t\t\t\t\tformControlName=\"email\"\n\t\t\t\t/>\n\n\t\t\t\t<div\n\t\t\t\t\t*ngIf=\"email.errors && (email.dirty || email.touched)\"\n\t\t\t\t\tclass=\"alert alert-danger\"\n\t\t\t\t>\n\t\t\t\t\t<div [hidden]=\"!email.hasError('email')\">\n\t\t\t\t\t\t{{\n\t\t\t\t\t\t\t'SHARED.USER.FORMS.BASIC_INFO.ERRORS.INVALID_EMAIL'\n\t\t\t\t\t\t\t\t| translate\n\t\t\t\t\t\t}}!\n\t\t\t\t\t</div>\n\t\t\t\t\t<div [hidden]=\"!email.hasError('emailTaken')\">\n\t\t\t\t\t\t{{\n\t\t\t\t\t\t\t'SHARED.USER.FORMS.BASIC_INFO.ERRORS.EMAIL_IS_ALREADY_IN_USE'\n\t\t\t\t\t\t\t\t| translate\n\t\t\t\t\t\t}}!\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"form-group row\">\n\t\t\t<label class=\"col-sm-2 control-label\">\n\t\t\t\t{{ 'SHARED.USER.FORMS.BASIC_INFO.PHOTO_URL' | translate }}\n\t\t\t</label>\n\n\t\t\t<div class=\"col-sm-10\">\n\t\t\t\t<e-cu-file-uploader\n\t\t\t\t\t[placeholder]=\"uploaderPlaceholder\"\n\t\t\t\t\t[name]=\"firstName?.value\"\n\t\t\t\t\t[fileUrl]=\"image?.value\"\n\t\t\t\t\t(uploadedImgUrl)=\"image.setValue($event)\"\n\t\t\t\t></e-cu-file-uploader>\n\t\t\t\t<div *ngIf=\"image.invalid\" class=\"alert alert-danger\">\n\t\t\t\t\t{{ 'SHARED.FORMS.ERRORS.LOGO_URL_REQUIRED' | translate }}!\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"form-group row\" [hidden]=\"image.invalid\">\n\t\t\t<label class=\"col-sm-2 control-label\"></label>\n\t\t\t<div class=\"col-sm-10\">\n\t\t\t\t<div class=\"row preview-img\">\n\t\t\t\t\t<div\n\t\t\t\t\t\t[hidden]=\"!showLogoMeta\"\n\t\t\t\t\t\tclass=\"remove-icon\"\n\t\t\t\t\t\t(click)=\"deleteImg()\"\n\t\t\t\t\t>\n\t\t\t\t\t\t<img\n\t\t\t\t\t\t\t#logoImagePreview\n\t\t\t\t\t\t\tsrc=\"{{ image.value }}\"\n\t\t\t\t\t\t\talt=\"Invalid image\"\n\t\t\t\t\t\t\tclass=\"img-rounded\"\n\t\t\t\t\t\t/>\n\n\t\t\t\t\t\t<span\n\t\t\t\t\t\t\tclass=\"ion-md-remove-circle text-danger pl-2\"\n\t\t\t\t\t\t\ttitle=\"Remove\"\n\t\t\t\t\t\t></span>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</fieldset>\n</div>\n");

/***/ }),

/***/ "../../node_modules/rxjs-compat/_esm2015/add/operator/debounceTime.js":
/*!**********************************************************************************************************************!*\
  !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/rxjs-compat/_esm2015/add/operator/debounceTime.js ***!
  \**********************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _operator_debounceTime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../operator/debounceTime */ "../../node_modules/rxjs-compat/_esm2015/operator/debounceTime.js");


rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].prototype.debounceTime = _operator_debounceTime__WEBPACK_IMPORTED_MODULE_1__["debounceTime"];
//# sourceMappingURL=debounceTime.js.map

/***/ }),

/***/ "../../node_modules/rxjs-compat/_esm2015/operator/debounceTime.js":
/*!******************************************************************************************************************!*\
  !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/rxjs-compat/_esm2015/operator/debounceTime.js ***!
  \******************************************************************************************************************/
/*! exports provided: debounceTime */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debounceTime", function() { return debounceTime; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");


function debounceTime(dueTime, scheduler = rxjs__WEBPACK_IMPORTED_MODULE_0__["asyncScheduler"]) {
    return Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["debounceTime"])(dueTime, scheduler)(this);
}
//# sourceMappingURL=debounceTime.js.map

/***/ }),

/***/ "./src/app/@shared/user/forms/basic-info/basic-info-form.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/@shared/user/forms/basic-info/basic-info-form.component.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".preview-img {\n  padding-left: 14px;\n  padding-right: 16px;\n}\n\n.img-rounded {\n  max-height: 70px;\n}\n\n.remove-icon {\n  cursor: pointer;\n}\n\n.remove-icon span {\n  position: absolute;\n  font-size: 1.1em;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvZC9Xb3JrL0FuZ3VsYXIvTmV3IGZvbGRlciAoMikvRG9sY2VHcm9jZXJ5L3BhY2thZ2VzL2FkbWluLXdlYi1hbmd1bGFyL3NyYy9hcHAvQHNoYXJlZC91c2VyL2Zvcm1zL2Jhc2ljLWluZm8vYmFzaWMtaW5mby1mb3JtLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9Ac2hhcmVkL3VzZXIvZm9ybXMvYmFzaWMtaW5mby9iYXNpYy1pbmZvLWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxrQkFBa0I7RUFDbEIsbUJBQW1CO0FDQ3BCOztBREVBO0VBQ0MsZ0JBQWdCO0FDQ2pCOztBREVBO0VBQ0MsZUFBZTtBQ0NoQjs7QURGQTtFQUlFLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUNFbEIiLCJmaWxlIjoic3JjL2FwcC9Ac2hhcmVkL3VzZXIvZm9ybXMvYmFzaWMtaW5mby9iYXNpYy1pbmZvLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJldmlldy1pbWcge1xuXHRwYWRkaW5nLWxlZnQ6IDE0cHg7XG5cdHBhZGRpbmctcmlnaHQ6IDE2cHg7XG59XG5cbi5pbWctcm91bmRlZCB7XG5cdG1heC1oZWlnaHQ6IDcwcHg7XG59XG5cbi5yZW1vdmUtaWNvbiB7XG5cdGN1cnNvcjogcG9pbnRlcjtcblxuXHRzcGFuIHtcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0Zm9udC1zaXplOiAxLjFlbTtcblx0fVxufVxuIiwiLnByZXZpZXctaW1nIHtcbiAgcGFkZGluZy1sZWZ0OiAxNHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xufVxuXG4uaW1nLXJvdW5kZWQge1xuICBtYXgtaGVpZ2h0OiA3MHB4O1xufVxuXG4ucmVtb3ZlLWljb24ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5yZW1vdmUtaWNvbiBzcGFuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBmb250LXNpemU6IDEuMWVtO1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/@shared/user/forms/basic-info/basic-info-form.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/@shared/user/forms/basic-info/basic-info-form.component.ts ***!
  \****************************************************************************/
/*! exports provided: BasicInfoFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicInfoFormComponent", function() { return BasicInfoFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _core_data_users_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../@core/data/users.service */ "./src/app/@core/data/users.service.ts");
/* harmony import */ var _forms_helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../forms/helpers */ "./src/app/@shared/forms/helpers.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_add_operator_debounceTime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/add/operator/debounceTime */ "../../node_modules/rxjs-compat/_esm2015/add/operator/debounceTime.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
var BasicInfoFormComponent_1;










let BasicInfoFormComponent = BasicInfoFormComponent_1 = class BasicInfoFormComponent {
    constructor(translateService, _usersService, _route) {
        this.translateService = translateService;
        this._usersService = _usersService;
        this._route = _route;
        this.showBasicInfoLabel = false;
        this._ngDestroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        const customerId = this._route.snapshot.paramMap.get('id');
        BasicInfoFormComponent_1.initialize(this._usersService, customerId);
    }
    ngOnInit() {
        this.getUploaderPlaceholderText();
    }
    ngAfterViewInit() {
        this._setupUserLogoUrlValidation();
    }
    get firstName() {
        return this.form.get('firstName');
    }
    get lastName() {
        return this.form.get('lastName');
    }
    get image() {
        return this.form.get('image');
    }
    get showLogoMeta() {
        return this.image && this.image.value !== '';
    }
    get email() {
        return this.form.get('email');
    }
    static initialize(usersService, customerId) {
        this._usersService = usersService;
        this._customerId = customerId;
    }
    static destroy() {
        BasicInfoFormComponent_1._usersService = null;
        BasicInfoFormComponent_1._customerId = null;
    }
    static buildForm(formBuilder) {
        const emailSearch$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        let isSearchRdy = false;
        return formBuilder.group({
            firstName: [''],
            lastName: [''],
            image: [''],
            email: [
                '',
                [
                    (control) => control.value ? _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email(control) : null,
                ],
                (ctrlEmail) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    if (!isSearchRdy) {
                        emailSearch$.debounceTime(500).subscribe(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                            const hasExistedEmail = yield this._usersService
                                .isUserExists({
                                exceptCustomerId: this._customerId,
                                memberKey: 'email',
                                memberValue: ctrlEmail.value,
                            })
                                .toPromise();
                            if (hasExistedEmail) {
                                ctrlEmail.setErrors({ emailTaken: true });
                            }
                        }));
                        isSearchRdy = true;
                    }
                    if (isSearchRdy &&
                        ctrlEmail.value &&
                        ctrlEmail.value.length > 0) {
                        emailSearch$.next();
                    }
                }),
            ],
        });
    }
    getValue() {
        const basicInfo = this.form.getRawValue();
        return Object.assign(Object.assign(Object.assign(Object.assign({}, (basicInfo.firstName ? { firstName: basicInfo.firstName } : {})), (basicInfo.lastName ? { lastName: basicInfo.lastName } : {})), (basicInfo.image ? { image: basicInfo.image } : {})), (basicInfo.email ? { email: basicInfo.email } : {}));
    }
    setValue(basicInfo) {
        _forms_helpers__WEBPACK_IMPORTED_MODULE_5__["FormHelpers"].deepMark(this.form, 'dirty');
        this.form.setValue({
            firstName: basicInfo.firstName ? basicInfo.firstName : '',
            lastName: basicInfo.lastName ? basicInfo.lastName : '',
            image: basicInfo.image ? basicInfo.image : '',
            email: basicInfo.email ? basicInfo.email : '',
        });
    }
    deleteImg() {
        this.image.setValue('');
    }
    ngOnDestroy() {
        this._ngDestroy$.next();
        this._ngDestroy$.complete();
        BasicInfoFormComponent_1.destroy();
    }
    _setupUserLogoUrlValidation() {
        this.logoImagePreview.nativeElement.onload = () => {
            if (this.showLogoMeta) {
                this.image.setErrors(null);
            }
        };
        this.logoImagePreview.nativeElement.onerror = () => {
            if (this.showLogoMeta) {
                this.image.setErrors({ invalidUrl: true });
            }
        };
    }
    getUploaderPlaceholderText() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.uploaderPlaceholder = yield this.translateService
                .get('SHARED.USER.FORMS.BASIC_INFO.PICTURE_URL')
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["first"])())
                .toPromise();
        });
    }
};
BasicInfoFormComponent.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"] },
    { type: _core_data_users_service__WEBPACK_IMPORTED_MODULE_4__["UsersService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('logoImagePreview'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], BasicInfoFormComponent.prototype, "logoImagePreview", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"])
], BasicInfoFormComponent.prototype, "form", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
], BasicInfoFormComponent.prototype, "showBasicInfoLabel", void 0);
BasicInfoFormComponent = BasicInfoFormComponent_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ea-user-basic-info-form',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./basic-info-form.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/@shared/user/forms/basic-info/basic-info-form.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./basic-info-form.component.scss */ "./src/app/@shared/user/forms/basic-info/basic-info-form.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"],
        _core_data_users_service__WEBPACK_IMPORTED_MODULE_4__["UsersService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]])
], BasicInfoFormComponent);



/***/ }),

/***/ "./src/app/@shared/user/forms/basic-info/index.ts":
/*!********************************************************!*\
  !*** ./src/app/@shared/user/forms/basic-info/index.ts ***!
  \********************************************************/
/*! exports provided: BasicInfoFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _basic_info_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basic-info-form.component */ "./src/app/@shared/user/forms/basic-info/basic-info-form.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BasicInfoFormComponent", function() { return _basic_info_form_component__WEBPACK_IMPORTED_MODULE_1__["BasicInfoFormComponent"]; });





/***/ }),

/***/ "./src/app/@shared/user/forms/index.ts":
/*!*********************************************!*\
  !*** ./src/app/@shared/user/forms/index.ts ***!
  \*********************************************/
/*! exports provided: UserFormsModule, BasicInfoFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _basic_info__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basic-info */ "./src/app/@shared/user/forms/basic-info/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BasicInfoFormComponent", function() { return _basic_info__WEBPACK_IMPORTED_MODULE_1__["BasicInfoFormComponent"]; });

/* harmony import */ var _user_forms_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-forms.module */ "./src/app/@shared/user/forms/user-forms.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserFormsModule", function() { return _user_forms_module__WEBPACK_IMPORTED_MODULE_2__["UserFormsModule"]; });






/***/ }),

/***/ "./src/app/@shared/user/forms/user-forms.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/@shared/user/forms/user-forms.module.ts ***!
  \*********************************************************/
/*! exports provided: UserFormsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserFormsModule", function() { return UserFormsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var angular2_wizard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-wizard */ "./node_modules/@ever-co/angular2-wizard/dist/index.js");
/* harmony import */ var angular2_wizard__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_wizard__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../@theme/theme.module */ "./src/app/@theme/theme.module.ts");
/* harmony import */ var _basic_info__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./basic-info */ "./src/app/@shared/user/forms/basic-info/index.ts");
/* harmony import */ var _app_shared_file_uploader_file_uploader_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/@shared/file-uploader/file-uploader.module */ "./src/app/@shared/file-uploader/file-uploader.module.ts");







let UserFormsModule = class UserFormsModule {
};
UserFormsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _theme_theme_module__WEBPACK_IMPORTED_MODULE_4__["ThemeModule"],
            angular2_wizard__WEBPACK_IMPORTED_MODULE_3__["FormWizardModule"],
            _app_shared_file_uploader_file_uploader_module__WEBPACK_IMPORTED_MODULE_6__["FileUploaderModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"].forChild(),
        ],
        exports: [_basic_info__WEBPACK_IMPORTED_MODULE_5__["BasicInfoFormComponent"]],
        declarations: [_basic_info__WEBPACK_IMPORTED_MODULE_5__["BasicInfoFormComponent"]],
        providers: [],
    })
], UserFormsModule);



/***/ })

}]);
//# sourceMappingURL=default~app-pages-customers-customers-module~app-pages-simulation-simulation-module~warehouse-wareho~f5ccf070-es2015.js.map