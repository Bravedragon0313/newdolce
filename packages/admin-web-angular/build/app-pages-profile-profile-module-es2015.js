(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-pages-profile-profile-module"],{

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/pages/+profile/edit/account/account.component.html":
/*!********************************************************************************************************************************************************!*\
  !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/raw-loader/dist/cjs.js!./src/app/pages/+profile/edit/account/account.component.html ***!
  \********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nb-card [nbSpinner]=\"loading\">\n\t<div class=\"container\">\n\t\t<form [formGroup]=\"accountForm\">\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"old-password\">\n\t\t\t\t\t{{ 'PROFILE_VIEW.OLD_PASSWORD' | translate }}</label\n\t\t\t\t>\n\t\t\t\t<input\n\t\t\t\t\tid=\"old-password\"\n\t\t\t\t\ttype=\"password\"\n\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t[ngClass]=\"\n\t\t\t\t\t\toldPassword.dirty || oldPassword.touched\n\t\t\t\t\t\t\t? oldPassword.errors\n\t\t\t\t\t\t\t\t? 'form-control-danger'\n\t\t\t\t\t\t\t\t: 'form-control-success'\n\t\t\t\t\t\t\t: ''\n\t\t\t\t\t\"\n\t\t\t\t\tformControlName=\"oldPassword\"\n\t\t\t\t\tplaceholder=\"{{ 'PROFILE_VIEW.OLD_PASSWORD' | translate }}\"\n\t\t\t\t/>\n\t\t\t\t<span *ngIf=\"oldPasswordErrorMsg\">\n\t\t\t\t\t<strong class=\"text-danger\">\n\t\t\t\t\t\t{{ 'PROFILE_VIEW.ERROR' | translate }}:\n\t\t\t\t\t\t{{ oldPasswordErrorMsg }}</strong\n\t\t\t\t\t></span\n\t\t\t\t>\n\t\t\t</div>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"id-password\">{{\n\t\t\t\t\t'PROFILE_VIEW.NEW_PASSWORD' | translate\n\t\t\t\t}}</label>\n\t\t\t\t<input\n\t\t\t\t\tid=\"id-password\"\n\t\t\t\t\ttype=\"password\"\n\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t[ngClass]=\"\n\t\t\t\t\t\tpassword.dirty || password.touched\n\t\t\t\t\t\t\t? password.errors\n\t\t\t\t\t\t\t\t? 'form-control-danger'\n\t\t\t\t\t\t\t\t: 'form-control-success'\n\t\t\t\t\t\t\t: ''\n\t\t\t\t\t\"\n\t\t\t\t\tformControlName=\"password\"\n\t\t\t\t\tplaceholder=\"{{ 'PROFILE_VIEW.NEW_PASSWORD' | translate }}\"\n\t\t\t\t/>\n\t\t\t\t<span *ngIf=\"passwordErrorMsg\">\n\t\t\t\t\t<strong class=\"text-danger\">\n\t\t\t\t\t\t{{ 'PROFILE_VIEW.ERROR' | translate }}:\n\t\t\t\t\t\t{{ passwordErrorMsg }}</strong\n\t\t\t\t\t></span\n\t\t\t\t>\n\t\t\t</div>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"repeat-password\">\n\t\t\t\t\t{{ 'PROFILE_VIEW.REPEAT_NEW_PASSWORD' | translate }}</label\n\t\t\t\t>\n\t\t\t\t<input\n\t\t\t\t\tid=\"repeat-password\"\n\t\t\t\t\ttype=\"password\"\n\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t[ngClass]=\"\n\t\t\t\t\t\trepeatPassword.dirty || repeatPassword.touched\n\t\t\t\t\t\t\t? password.value === repeatPassword.value\n\t\t\t\t\t\t\t\t? 'form-control-success'\n\t\t\t\t\t\t\t\t: 'form-control-danger'\n\t\t\t\t\t\t\t: ''\n\t\t\t\t\t\"\n\t\t\t\t\tformControlName=\"repeatPassword\"\n\t\t\t\t\tplaceholder=\"{{\n\t\t\t\t\t\t'PROFILE_VIEW.REPEAT_NEW_PASSWORD' | translate\n\t\t\t\t\t}}\"\n\t\t\t\t/>\n\t\t\t\t<span *ngIf=\"repeatPasswordErrorMsg\">\n\t\t\t\t\t<strong class=\"text-danger\">\n\t\t\t\t\t\t{{ 'PROFILE_VIEW.ERROR' | translate }}:\n\t\t\t\t\t\t{{ repeatPasswordErrorMsg }}</strong\n\t\t\t\t\t></span\n\t\t\t\t>\n\t\t\t</div>\n\t\t\t<button\n\t\t\t\tnbButton\n\t\t\t\tstatus=\"success\"\n\t\t\t\toutline\n\t\t\t\tsize=\"large\"\n\t\t\t\tclass=\"float-right save-button-profile\"\n\t\t\t\t[disabled]=\"\n\t\t\t\t\t!accountForm.valid ||\n\t\t\t\t\t((password.dirty || password.touched) &&\n\t\t\t\t\t\tpassword.value !== repeatPassword.value)\n\t\t\t\t\"\n\t\t\t\ttype=\"button\"\n\t\t\t\t(click)=\"saveChanges()\"\n\t\t\t>\n\t\t\t\t<i class=\"ion-md-checkmark mr-1\"></i>\n\t\t\t\t<span> {{ 'PROFILE_VIEW.SAVE' | translate }} </span>\n\t\t\t</button>\n\t\t</form>\n\t</div>\n</nb-card>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/pages/+profile/edit/basic-info/basic-info.component.html":
/*!**************************************************************************************************************************************************************!*\
  !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/raw-loader/dist/cjs.js!./src/app/pages/+profile/edit/basic-info/basic-info.component.html ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nb-card [nbSpinner]=\"loading\">\n\t<div class=\"container\">\n\t\t<form [formGroup]=\"basicInfoForm\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"form-group col-md-6\">\n\t\t\t\t\t<label for=\"id-username\">\n\t\t\t\t\t\t{{ 'PROFILE_VIEW.USERNAME' | translate }}</label\n\t\t\t\t\t>\n\t\t\t\t\t<input\n\t\t\t\t\t\tid=\"id-username\"\n\t\t\t\t\t\ttype=\"text\"\n\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t[ngClass]=\"\n\t\t\t\t\t\t\tusername.dirty || username.touched\n\t\t\t\t\t\t\t\t? username.errors\n\t\t\t\t\t\t\t\t\t? 'form-control-danger'\n\t\t\t\t\t\t\t\t\t: 'form-control-success'\n\t\t\t\t\t\t\t\t: ''\n\t\t\t\t\t\t\"\n\t\t\t\t\t\tformControlName=\"username\"\n\t\t\t\t\t\tplaceholder=\"{{ 'PROFILE_VIEW.USERNAME' | translate }}\"\n\t\t\t\t\t/>\n\t\t\t\t\t<span *ngIf=\"usernameErrorMsg\">\n\t\t\t\t\t\t<strong class=\"text-danger\"\n\t\t\t\t\t\t\t>{{ 'PROFILE_VIEW.USERNAME' | translate }}:\n\t\t\t\t\t\t\t{{ usernameErrorMsg }}</strong\n\t\t\t\t\t\t></span\n\t\t\t\t\t>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"form-group col-md-6\">\n\t\t\t\t\t<label for=\"id-email\">\n\t\t\t\t\t\t{{ 'PROFILE_VIEW.EMAIL' | translate }}</label\n\t\t\t\t\t>\n\t\t\t\t\t<input\n\t\t\t\t\t\tid=\"id-email\"\n\t\t\t\t\t\ttype=\"email\"\n\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t[ngClass]=\"\n\t\t\t\t\t\t\temail.dirty || email.touched\n\t\t\t\t\t\t\t\t? email.errors\n\t\t\t\t\t\t\t\t\t? 'form-control-danger'\n\t\t\t\t\t\t\t\t\t: 'form-control-success'\n\t\t\t\t\t\t\t\t: ''\n\t\t\t\t\t\t\"\n\t\t\t\t\t\tformControlName=\"email\"\n\t\t\t\t\t\tplaceholder=\"{{ 'PROFILE_VIEW.EMAIL' | translate }}\"\n\t\t\t\t\t/>\n\t\t\t\t\t<span *ngIf=\"emailErrorMsg\">\n\t\t\t\t\t\t<strong class=\"text-danger\">\n\t\t\t\t\t\t\t{{ 'PROFILE_VIEW.ERROR' | translate }}:\n\t\t\t\t\t\t\t{{ emailErrorMsg }}</strong\n\t\t\t\t\t\t></span\n\t\t\t\t\t>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"form-group col-md-6\">\n\t\t\t\t\t<label for=\"id-first-name\">\n\t\t\t\t\t\t{{ 'PROFILE_VIEW.FIRST_NAME_OPTIONAL' | translate }}\n\t\t\t\t\t</label>\n\t\t\t\t\t<input\n\t\t\t\t\t\tid=\"id-first-name\"\n\t\t\t\t\t\ttype=\"text\"\n\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t[ngClass]=\"\n\t\t\t\t\t\t\tfirstName.dirty || firstName.touched\n\t\t\t\t\t\t\t\t? firstName.errors\n\t\t\t\t\t\t\t\t\t? 'form-control-danger'\n\t\t\t\t\t\t\t\t\t: 'form-control-success'\n\t\t\t\t\t\t\t\t: ''\n\t\t\t\t\t\t\"\n\t\t\t\t\t\tformControlName=\"firstName\"\n\t\t\t\t\t\tplaceholder=\"{{\n\t\t\t\t\t\t\t'PROFILE_VIEW.FIRST_NAME_OPTIONAL' | translate\n\t\t\t\t\t\t}}\"\n\t\t\t\t\t/>\n\t\t\t\t\t<span *ngIf=\"firstNameErrorMsg\">\n\t\t\t\t\t\t<strong class=\"text-danger\">\n\t\t\t\t\t\t\t{{ 'PROFILE_VIEW.ERROR' | translate }}:\n\t\t\t\t\t\t\t{{ firstNameErrorMsg }}</strong\n\t\t\t\t\t\t></span\n\t\t\t\t\t>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"form-group col-md-6\">\n\t\t\t\t\t<label for=\"id-last-name\">\n\t\t\t\t\t\t{{ 'PROFILE_VIEW.LAST_NAME' | translate }}</label\n\t\t\t\t\t>\n\t\t\t\t\t<input\n\t\t\t\t\t\tid=\"id-last-name\"\n\t\t\t\t\t\ttype=\"text\"\n\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t[ngClass]=\"\n\t\t\t\t\t\t\tlastName.dirty || lastName.touched\n\t\t\t\t\t\t\t\t? lastName.errors\n\t\t\t\t\t\t\t\t\t? 'form-control-danger'\n\t\t\t\t\t\t\t\t\t: 'form-control-success'\n\t\t\t\t\t\t\t\t: ''\n\t\t\t\t\t\t\"\n\t\t\t\t\t\tformControlName=\"lastName\"\n\t\t\t\t\t\tplaceholder=\"{{ 'PROFILE_VIEW.LAST_NAME' | translate }}\"\n\t\t\t\t\t/>\n\t\t\t\t\t<span *ngIf=\"lastNameErrorMsg\">\n\t\t\t\t\t\t<strong class=\"text-danger\">\n\t\t\t\t\t\t\t{{ 'PROFILE_VIEW.ERROR' | translate }}:\n\t\t\t\t\t\t\t{{ lastNameErrorMsg }}</strong\n\t\t\t\t\t\t></span\n\t\t\t\t\t>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<label for=\"id-picture\">\n\t\t\t\t{{ 'PROFILE_VIEW.PICTURE_URL' | translate }}</label\n\t\t\t>\n\t\t\t<div class=\"row form-group upload-img\">\n\t\t\t\t<div class=\"col-12\">\n\t\t\t\t\t<e-cu-file-uploader\n\t\t\t\t\t\t[placeholder]=\"uploaderPlaceholder\"\n\t\t\t\t\t\t[name]=\"username?.value\"\n\t\t\t\t\t\t[fileUrl]=\"picture?.value\"\n\t\t\t\t\t\t[customClass]=\"\n\t\t\t\t\t\t\tpicture.invalid\n\t\t\t\t\t\t\t\t? picture.errors\n\t\t\t\t\t\t\t\t\t? 'form-control-danger'\n\t\t\t\t\t\t\t\t\t: 'form-control-success'\n\t\t\t\t\t\t\t\t: ''\n\t\t\t\t\t\t\"\n\t\t\t\t\t\t(uploadedImgUrl)=\"picture.setValue($event)\"\n\t\t\t\t\t></e-cu-file-uploader>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-12\">\n\t\t\t\t\t<span *ngIf=\"picture.invalid\">\n\t\t\t\t\t\t<strong class=\"text-danger\">\n\t\t\t\t\t\t\t{{ 'PROFILE_VIEW.ERROR' | translate }} :\n\t\t\t\t\t\t\t{{ pictureUrlErrorMsg }}</strong\n\t\t\t\t\t\t></span\n\t\t\t\t\t>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div\n\t\t\t\tclass=\"form-group\"\n\t\t\t\t[hidden]=\"picture.invalid || picture.value === ''\"\n\t\t\t>\n\t\t\t\t<div class=\"row preview-img\">\n\t\t\t\t\t<img\n\t\t\t\t\t\tsrc=\"{{ picture.value }}\"\n\t\t\t\t\t\talt=\"Invalid image\"\n\t\t\t\t\t\tclass=\"img-rounded\"\n\t\t\t\t\t/>\n\t\t\t\t\t<div class=\"remove-icon\" (click)=\"deleteImg()\">\n\t\t\t\t\t\t<span\n\t\t\t\t\t\t\tclass=\"ion-md-remove-circle text-danger pl-2 pr-2\"\n\t\t\t\t\t\t\ttitle=\"{{ 'PROFILE_VIEW.REMOVE' | translate }}\"\n\t\t\t\t\t\t></span>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<button\n\t\t\t\tnbButton\n\t\t\t\tstatus=\"success\"\n\t\t\t\toutline\n\t\t\t\tsize=\"large\"\n\t\t\t\tclass=\"float-right save-button-profile\"\n\t\t\t\t[disabled]=\"!basicInfoForm.valid || !basicInfoForm.dirty\"\n\t\t\t\t(click)=\"saveChanges()\"\n\t\t\t>\n\t\t\t\t<i class=\"ion-md-checkmark mr-1\"></i>\n\t\t\t\t<span> {{ 'PROFILE_VIEW.SAVE' | translate }} </span>\n\t\t\t</button>\n\t\t</form>\n\t</div>\n</nb-card>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/pages/+profile/profile.component.html":
/*!*******************************************************************************************************************************************!*\
  !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/raw-loader/dist/cjs.js!./src/app/pages/+profile/profile.component.html ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<toaster-container></toaster-container>\n\n<nb-card *ngIf=\"admin$ | async; let admin\">\n\t<nb-card-header>\n\t\t<header class=\"text-center border-bottom\">\n\t\t\t<h1>\n\t\t\t\t{{ 'PROFILE_VIEW.PROFILE_PAGE' | translate }}\n\t\t\t</h1>\n\t\t</header>\n\n\t\t<body class=\"row\">\n\t\t\t<div class=\"col-md-2 profile-image text-center\">\n\t\t\t\t<div class=\"row text-center\">\n\t\t\t\t\t<div class=\"col-md-8 offset-md-1\">\n\t\t\t\t\t\t<img src=\"{{ admin.pictureUrl }}\" alt=\"Admin image\" />\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-md-10\">\n\t\t\t\t<h2>{{ admin.name }}</h2>\n\t\t\t\t<h4>{{ admin.email }}</h4>\n\t\t\t</div>\n\t\t</body>\n\t</nb-card-header>\n\n\t<nb-card-body>\n\t\t<nb-tabset fullWidth>\n\t\t\t<nb-tab tabTitle=\"{{ 'PROFILE_VIEW.BASIC_INFO' | translate }}\">\n\t\t\t\t<ea-basic-info [admin]=\"admin\"></ea-basic-info>\n\t\t\t</nb-tab>\n\t\t\t<nb-tab tabTitle=\"{{ 'PROFILE_VIEW.ACCOUNT' | translate }}\">\n\t\t\t\t<ea-account [admin]=\"admin\"></ea-account>\n\t\t\t</nb-tab>\n\t\t</nb-tabset>\n\t</nb-card-body>\n</nb-card>\n");

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

/***/ "../common/src/entities/Admin.ts":
/*!***************************************!*\
  !*** ../common/src/entities/Admin.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _pyro_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../@pyro/db */ "../common/src/@pyro/db/index.ts");
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! typeorm */ "../common-angular/src/typeorm-placeholder.ts");




let Admin = class Admin extends _pyro_db__WEBPACK_IMPORTED_MODULE_1__["DBObject"] {
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_pyro_db__WEBPACK_IMPORTED_MODULE_1__["Schema"])({ type: String, unique: true }),
    _pyro_db__WEBPACK_IMPORTED_MODULE_1__["Types"].String(),
    Object(typeorm__WEBPACK_IMPORTED_MODULE_2__["Column"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], Admin.prototype, "email", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    _pyro_db__WEBPACK_IMPORTED_MODULE_1__["Types"].String(),
    Object(typeorm__WEBPACK_IMPORTED_MODULE_2__["Column"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], Admin.prototype, "name", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_pyro_db__WEBPACK_IMPORTED_MODULE_1__["Schema"])({ type: String, select: false }),
    _pyro_db__WEBPACK_IMPORTED_MODULE_1__["Types"].String(),
    Object(typeorm__WEBPACK_IMPORTED_MODULE_2__["Column"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], Admin.prototype, "hash", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    _pyro_db__WEBPACK_IMPORTED_MODULE_1__["Types"].String(),
    Object(typeorm__WEBPACK_IMPORTED_MODULE_2__["Column"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], Admin.prototype, "pictureUrl", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    _pyro_db__WEBPACK_IMPORTED_MODULE_1__["Types"].Boolean(false),
    Object(typeorm__WEBPACK_IMPORTED_MODULE_2__["Column"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
], Admin.prototype, "isDeleted", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_pyro_db__WEBPACK_IMPORTED_MODULE_1__["Schema"])({
        type: String,
        required: false,
        validate: new RegExp(`^[a-z ,.'-]+$`, 'i'),
    }),
    Object(typeorm__WEBPACK_IMPORTED_MODULE_2__["Column"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], Admin.prototype, "firstName", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_pyro_db__WEBPACK_IMPORTED_MODULE_1__["Schema"])({
        type: String,
        required: false,
        validate: new RegExp(`^[a-z ,.'-]+$`, 'i'),
    }),
    Object(typeorm__WEBPACK_IMPORTED_MODULE_2__["Column"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], Admin.prototype, "lastName", void 0);
Admin = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_pyro_db__WEBPACK_IMPORTED_MODULE_1__["ModelName"])('Admin'),
    Object(typeorm__WEBPACK_IMPORTED_MODULE_2__["Entity"])({ name: 'admins' })
], Admin);
/* harmony default export */ __webpack_exports__["default"] = (Admin);


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

/***/ "./src/app/pages/+profile/edit/account/account.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/pages/+profile/edit/account/account.component.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\n  padding: 1.25rem;\n  padding-bottom: 0;\n}\n\n.save-button-profile {\n  margin-bottom: 30px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvZC9Xb3JrL0FuZ3VsYXIvTmV3IGZvbGRlciAoMikvRG9sY2VHcm9jZXJ5L3BhY2thZ2VzL2FkbWluLXdlYi1hbmd1bGFyL3NyYy9hcHAvcGFnZXMvK3Byb2ZpbGUvZWRpdC9hY2NvdW50L2FjY291bnQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzLytwcm9maWxlL2VkaXQvYWNjb3VudC9hY2NvdW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQ0NsQjs7QURFQTtFQUNDLG1CQUFtQjtBQ0NwQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzLytwcm9maWxlL2VkaXQvYWNjb3VudC9hY2NvdW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG5cdHBhZGRpbmc6IDEuMjVyZW07XG5cdHBhZGRpbmctYm90dG9tOiAwO1xufVxuXG4uc2F2ZS1idXR0b24tcHJvZmlsZSB7XG5cdG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG4iLCIuY29udGFpbmVyIHtcbiAgcGFkZGluZzogMS4yNXJlbTtcbiAgcGFkZGluZy1ib3R0b206IDA7XG59XG5cbi5zYXZlLWJ1dHRvbi1wcm9maWxlIHtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/pages/+profile/edit/account/account.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/+profile/edit/account/account.component.ts ***!
  \******************************************************************/
/*! exports provided: AccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountComponent", function() { return AccountComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _modules_server_common_entities_Admin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @modules/server.common/entities/Admin */ "../common/src/entities/Admin.ts");
/* harmony import */ var _core_data_admins_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../@core/data/admins.service */ "./src/app/@core/data/admins.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");










let AccountComponent = class AccountComponent {
    constructor(formBuilder, adminsService, toasterService, router, _translateService) {
        this.formBuilder = formBuilder;
        this.adminsService = adminsService;
        this.toasterService = toasterService;
        this.router = router;
        this._translateService = _translateService;
        this.ngDestroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
        this.PASSWORDS_DO_NOT_MATCH = 'PASSWORDS_DO_NOT_MATCH';
        this.SUCCESSFULLY_CHANGE_PASSWORD = 'SUCCESSFULLY_CHANGE_PASSWORD';
        this.PREFIX = 'PROFILE_VIEW.';
        this.validations = {
            oldPasswordControl: () => {
                this.oldPassword.valueChanges
                    .debounceTime(500)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.ngDestroy$))
                    .subscribe((value) => {
                    this.oldPasswordErrorMsg =
                        (this.oldPassword.touched || this.oldPassword.dirty) &&
                            this.oldPassword.errors
                            ? Object.keys(this.oldPassword.errors)[0]
                            : '';
                });
            },
            passwordControl: () => {
                this.password.valueChanges
                    .debounceTime(500)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.ngDestroy$))
                    .subscribe((value) => {
                    this.passwordErrorMsg =
                        (this.password.touched || this.password.dirty) &&
                            this.password.errors
                            ? Object.keys(this.password.errors)[0]
                            : '';
                });
            },
            repeatPasswordControl: () => {
                this.repeatPassword.valueChanges
                    .debounceTime(500)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.ngDestroy$))
                    .subscribe((value) => {
                    this.repeatPasswordErrorMsg =
                        (this.repeatPassword.touched ||
                            this.repeatPassword.dirty) &&
                            this.repeatPassword.errors
                            ? this.repeatPassword.errors.validUrl
                                ? this.passwordDoNotMuch()
                                : Object.keys(this.repeatPassword.errors)[0]
                            : '';
                });
            },
        };
        this.buildForm();
        this.bindFormControls();
        this.loadControls();
    }
    ngOnInit() {
        this.$password = this.password.valueChanges.subscribe((res) => {
            this.repeatPassword.setValue('');
        });
    }
    passwordDoNotMuch() {
        return this._translate(this.PREFIX + this.PASSWORDS_DO_NOT_MATCH);
    }
    successfullyChangePassword() {
        return this._translate(this.PREFIX + this.SUCCESSFULLY_CHANGE_PASSWORD);
    }
    saveChanges() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                this.loading = true;
                const res = yield this.adminsService
                    .updatePassword(this.admin.id, {
                    new: this.password.value,
                    current: this.oldPassword.value,
                })
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])())
                    .toPromise();
                if (res.errors) {
                    this.toasterService.pop('error', res.errors[0].message);
                }
                else {
                    this.toasterService.pop('success', this.successfullyChangePassword());
                    this.router.navigate(['/auth/logout']);
                }
                this.loading = false;
            }
            catch (error) {
                this.loading = true;
                this.toasterService.pop('error', error);
                this.loading = false;
            }
        });
    }
    buildForm() {
        this.accountForm = this.formBuilder.group({
            oldPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4)]],
            repeatPassword: [
                '',
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    (control) => {
                        if (this.password) {
                            return control.value === this.password.value
                                ? null
                                : { validUrl: true };
                        }
                        else {
                            return null;
                        }
                    },
                ],
            ],
        });
    }
    bindFormControls() {
        this.oldPassword = this.accountForm.get('oldPassword');
        this.password = this.accountForm.get('password');
        this.repeatPassword = this.accountForm.get('repeatPassword');
    }
    loadControls() {
        this.validations.oldPasswordControl();
        this.validations.passwordControl();
        this.validations.repeatPasswordControl();
    }
    _translate(key) {
        let translationResult = '';
        this._translateService.get(key).subscribe((res) => {
            translationResult = res;
        });
        return translationResult;
    }
    ngOnDestroy() {
        if (this.$password) {
            this.$password.unsubscribe();
        }
        this.ngDestroy$.next();
        this.ngDestroy$.complete();
    }
};
AccountComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _core_data_admins_service__WEBPACK_IMPORTED_MODULE_4__["AdminsService"] },
    { type: angular2_toaster__WEBPACK_IMPORTED_MODULE_6__["ToasterService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _modules_server_common_entities_Admin__WEBPACK_IMPORTED_MODULE_3__["default"])
], AccountComponent.prototype, "admin", void 0);
AccountComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ea-account',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./account.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/pages/+profile/edit/account/account.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! .//account.component.scss */ "./src/app/pages/+profile/edit/account/account.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _core_data_admins_service__WEBPACK_IMPORTED_MODULE_4__["AdminsService"],
        angular2_toaster__WEBPACK_IMPORTED_MODULE_6__["ToasterService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"]])
], AccountComponent);



/***/ }),

/***/ "./src/app/pages/+profile/edit/basic-info/basic-info.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/pages/+profile/edit/basic-info/basic-info.component.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\n  padding: 1.25rem;\n  padding-bottom: 0;\n}\n\n.preview-img {\n  padding-left: 14px;\n  padding-right: 16px;\n}\n\n.img-rounded {\n  max-height: 70px;\n}\n\n.remove-icon {\n  cursor: pointer;\n}\n\n.remove-icon span {\n  position: absolute;\n  font-size: 1.1em;\n}\n\n.save-button-profile {\n  margin-bottom: 30px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvZC9Xb3JrL0FuZ3VsYXIvTmV3IGZvbGRlciAoMikvRG9sY2VHcm9jZXJ5L3BhY2thZ2VzL2FkbWluLXdlYi1hbmd1bGFyL3NyYy9hcHAvcGFnZXMvK3Byb2ZpbGUvZWRpdC9iYXNpYy1pbmZvL2Jhc2ljLWluZm8uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzLytwcm9maWxlL2VkaXQvYmFzaWMtaW5mby9iYXNpYy1pbmZvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQ0NsQjs7QURFQTtFQUNDLGtCQUFrQjtFQUNsQixtQkFBbUI7QUNDcEI7O0FERUE7RUFDQyxnQkFBZ0I7QUNDakI7O0FERUE7RUFDQyxlQUFlO0FDQ2hCOztBREZBO0VBSUUsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQ0VsQjs7QURFQTtFQUNDLG1CQUFtQjtBQ0NwQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzLytwcm9maWxlL2VkaXQvYmFzaWMtaW5mby9iYXNpYy1pbmZvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG5cdHBhZGRpbmc6IDEuMjVyZW07XG5cdHBhZGRpbmctYm90dG9tOiAwO1xufVxuXG4ucHJldmlldy1pbWcge1xuXHRwYWRkaW5nLWxlZnQ6IDE0cHg7XG5cdHBhZGRpbmctcmlnaHQ6IDE2cHg7XG59XG5cbi5pbWctcm91bmRlZCB7XG5cdG1heC1oZWlnaHQ6IDcwcHg7XG59XG5cbi5yZW1vdmUtaWNvbiB7XG5cdGN1cnNvcjogcG9pbnRlcjtcblxuXHRzcGFuIHtcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0Zm9udC1zaXplOiAxLjFlbTtcblx0fVxufVxuXG4uc2F2ZS1idXR0b24tcHJvZmlsZSB7XG5cdG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG4iLCIuY29udGFpbmVyIHtcbiAgcGFkZGluZzogMS4yNXJlbTtcbiAgcGFkZGluZy1ib3R0b206IDA7XG59XG5cbi5wcmV2aWV3LWltZyB7XG4gIHBhZGRpbmctbGVmdDogMTRweDtcbiAgcGFkZGluZy1yaWdodDogMTZweDtcbn1cblxuLmltZy1yb3VuZGVkIHtcbiAgbWF4LWhlaWdodDogNzBweDtcbn1cblxuLnJlbW92ZS1pY29uIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ucmVtb3ZlLWljb24gc3BhbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZm9udC1zaXplOiAxLjFlbTtcbn1cblxuLnNhdmUtYnV0dG9uLXByb2ZpbGUge1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/pages/+profile/edit/basic-info/basic-info.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/+profile/edit/basic-info/basic-info.component.ts ***!
  \************************************************************************/
/*! exports provided: BasicInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicInfoComponent", function() { return BasicInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _modules_server_common_entities_Admin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @modules/server.common/entities/Admin */ "../common/src/entities/Admin.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _core_data_admins_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../@core/data/admins.service */ "./src/app/@core/data/admins.service.ts");
/* harmony import */ var _modules_server_common_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @modules/server.common/utils */ "../common/src/utils.ts");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var rxjs_add_operator_debounceTime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/add/operator/debounceTime */ "../../node_modules/rxjs-compat/_esm2015/add/operator/debounceTime.js");











let BasicInfoComponent = class BasicInfoComponent {
    constructor(formBuilder, adminsService, toasterService, _translateService) {
        this.formBuilder = formBuilder;
        this.adminsService = adminsService;
        this.toasterService = toasterService;
        this._translateService = _translateService;
        this.INVALID_EMAIL_ADDRESS = 'INVALID_EMAIL_ADDRESS';
        this.INVALID_URL = 'INVALID_URL';
        this.NAME_MUST_CONTAIN_ONLY_LETTERS = 'NAME_MUST_CONTAIN_ONLY_LETTERS';
        this.PREFIX = 'PROFILE_VIEW.';
        this.ngDestroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.validations = {
            usernameControl: () => {
                this.username.valueChanges
                    .debounceTime(500)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.ngDestroy$))
                    .subscribe((value) => {
                    this.usernameErrorMsg = this.hasError(this.username)
                        ? Object.keys(this.username.errors)[0]
                        : '';
                });
            },
            emailControl: () => {
                this.email.valueChanges
                    .debounceTime(500)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.ngDestroy$))
                    .subscribe((value) => {
                    this.emailErrorMsg = this.hasError(this.email)
                        ? this.email.errors.email
                            ? this.invalidEmailAddress()
                            : Object.keys(this.email.errors)[0]
                        : '';
                });
            },
            firstNameControl: () => {
                this.firstName.valueChanges
                    .debounceTime(500)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.ngDestroy$))
                    .subscribe((value) => {
                    this.firstNameErrorMsg = this.hasError(this.firstName)
                        ? this.firstName.errors.pattern
                            ? this.nameMustContainOnlyLetters()
                            : Object.keys(this.firstName.errors)[0]
                        : '';
                });
            },
            lastNameControl: () => {
                this.lastName.valueChanges
                    .debounceTime(500)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.ngDestroy$))
                    .subscribe((value) => {
                    this.lastNameErrorMsg = this.hasError(this.lastName)
                        ? this.lastName.errors.pattern
                            ? this.nameMustContainOnlyLetters()
                            : Object.keys(this.lastName.errors)[0]
                        : '';
                });
            },
        };
        this.getUploaderPlaceholderText();
        this.buildForm();
        this.bindFormControls();
        this._applyTranslationOnSmartTable();
        this.loadControls();
    }
    get pictureUrlErrorMsg() {
        return this.picture.errors.pattern
            ? this.invalidURL()
            : Object.keys(this.picture.errors)[0];
    }
    ngOnChanges() {
        this._applyTranslationOnSmartTable();
        if (this.admin) {
            this.username.setValue(this.admin.name);
            this.email.setValue(this.admin.email);
            this.picture.setValue(this.admin.pictureUrl);
            this.firstName.setValue(this.admin.firstName);
            this.lastName.setValue(this.admin.lastName);
        }
    }
    ngOnDestroy() {
        this.ngDestroy$.next();
        this.ngDestroy$.complete();
    }
    invalidEmailAddress() {
        return this._translate(this.PREFIX + this.INVALID_EMAIL_ADDRESS);
    }
    invalidURL() {
        return this._translate(this.PREFIX + this.INVALID_URL);
    }
    nameMustContainOnlyLetters() {
        return this._translate(this.PREFIX + this.NAME_MUST_CONTAIN_ONLY_LETTERS);
    }
    saveChanges() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                this.loading = true;
                const res = yield this.adminsService
                    .updateById(this.admin.id, this.getAdminCreateObj())
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
                    .toPromise();
                this.loading = false;
                this.toasterService.pop('success', 'Successfully updated data');
            }
            catch (error) {
                this.loading = false;
                this.toasterService.pop('error', error);
            }
        });
    }
    buildForm() {
        const imgUrlRegex = new RegExp(`(http(s?):)s?:?(\/\/[^"']*\.(?:png|jpg|jpeg|gif|png|svg))`);
        const nameRegex = new RegExp(`^[a-z ,.'-]+$`, 'i');
        this.basicInfoForm = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            picture: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(imgUrlRegex)]],
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(nameRegex)],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(nameRegex)],
        });
    }
    bindFormControls() {
        this.username = this.basicInfoForm.get('username');
        this.email = this.basicInfoForm.get('email');
        this.picture = this.basicInfoForm.get('picture');
        this.firstName = this.basicInfoForm.get('firstName');
        this.lastName = this.basicInfoForm.get('lastName');
    }
    loadControls() {
        this.validations.usernameControl();
        this.validations.emailControl();
        this.validations.firstNameControl();
        this.validations.lastNameControl();
    }
    deleteImg() {
        this.picture.setValue('');
        this.basicInfoForm.markAsDirty();
    }
    _applyTranslationOnSmartTable() {
        this._translateService.onLangChange.subscribe(() => {
            this.loadControls();
        });
    }
    hasError(control) {
        return (control.touched || control.dirty) && control.errors;
    }
    getAdminCreateObj() {
        if (!this.picture.value) {
            const letter = this.username.value.charAt(0).toUpperCase();
            this.picture.setValue(Object(_modules_server_common_utils__WEBPACK_IMPORTED_MODULE_7__["getDummyImage"])(300, 300, letter));
        }
        return {
            name: this.username.value,
            email: this.email.value,
            firstName: this.firstName.value,
            lastName: this.lastName.value,
            pictureUrl: this.picture.value,
        };
    }
    _translate(key) {
        let translationResult = '';
        this._translateService.get(key).subscribe((res) => {
            translationResult = res;
        });
        return translationResult;
    }
    getUploaderPlaceholderText() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.uploaderPlaceholder = yield this._translateService
                .get('PROFILE_VIEW.PICTURE_URL')
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
                .toPromise();
        });
    }
};
BasicInfoComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _core_data_admins_service__WEBPACK_IMPORTED_MODULE_6__["AdminsService"] },
    { type: angular2_toaster__WEBPACK_IMPORTED_MODULE_8__["ToasterService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _modules_server_common_entities_Admin__WEBPACK_IMPORTED_MODULE_3__["default"])
], BasicInfoComponent.prototype, "admin", void 0);
BasicInfoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ea-basic-info',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./basic-info.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/pages/+profile/edit/basic-info/basic-info.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! .//basic-info.component.scss */ "./src/app/pages/+profile/edit/basic-info/basic-info.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _core_data_admins_service__WEBPACK_IMPORTED_MODULE_6__["AdminsService"],
        angular2_toaster__WEBPACK_IMPORTED_MODULE_8__["ToasterService"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"]])
], BasicInfoComponent);



/***/ }),

/***/ "./src/app/pages/+profile/edit/edit.module.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/+profile/edit/edit.module.ts ***!
  \****************************************************/
/*! exports provided: EditProfileModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfileModule", function() { return EditProfileModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../@theme */ "./src/app/@theme/index.ts");
/* harmony import */ var _account_account_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./account/account.component */ "./src/app/pages/+profile/edit/account/account.component.ts");
/* harmony import */ var _basic_info_basic_info_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./basic-info/basic-info.component */ "./src/app/pages/+profile/edit/basic-info/basic-info.component.ts");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/fesm2015/index.js");
/* harmony import */ var _app_shared_file_uploader_file_uploader_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @app/@shared/file-uploader/file-uploader.module */ "./src/app/@shared/file-uploader/file-uploader.module.ts");










const EDIT_PROFILE_COMPONENTS = [_account_account_component__WEBPACK_IMPORTED_MODULE_6__["AccountComponent"], _basic_info_basic_info_component__WEBPACK_IMPORTED_MODULE_7__["BasicInfoComponent"]];
let EditProfileModule = class EditProfileModule {
};
EditProfileModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _theme__WEBPACK_IMPORTED_MODULE_5__["ThemeModule"],
            angular2_toaster__WEBPACK_IMPORTED_MODULE_3__["ToasterModule"].forRoot(),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"].forChild(),
            _app_shared_file_uploader_file_uploader_module__WEBPACK_IMPORTED_MODULE_9__["FileUploaderModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbSpinnerModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbButtonModule"],
        ],
        declarations: [...EDIT_PROFILE_COMPONENTS],
        exports: [...EDIT_PROFILE_COMPONENTS],
        entryComponents: [],
        providers: [],
    })
], EditProfileModule);



/***/ }),

/***/ "./src/app/pages/+profile/profile.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/+profile/profile.component.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("nb-card-header header h1 {\n  padding-bottom: 1.25rem;\n}\n\nnb-card-header body {\n  background-color: transparent;\n}\n\nnb-card-header body.row {\n  padding: 1.25rem;\n  padding-bottom: 0;\n}\n\nnb-card-header .profile-image img {\n  max-width: 100%;\n  max-height: 100%;\n  border-radius: 5px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvZC9Xb3JrL0FuZ3VsYXIvTmV3IGZvbGRlciAoMikvRG9sY2VHcm9jZXJ5L3BhY2thZ2VzL2FkbWluLXdlYi1hbmd1bGFyL3NyYy9hcHAvcGFnZXMvK3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvK3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUdHLHVCQUF1QjtBQ0QxQjs7QURGQTtFQU9FLDZCQUE2QjtBQ0QvQjs7QUROQTtFQVVFLGdCQUFnQjtFQUNoQixpQkFBaUI7QUNBbkI7O0FEWEE7RUFnQkcsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixrQkFBa0I7QUNEckIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy8rcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibmItY2FyZC1oZWFkZXIge1xuXHRoZWFkZXIge1xuXHRcdGgxIHtcblx0XHRcdHBhZGRpbmctYm90dG9tOiAxLjI1cmVtO1xuXHRcdH1cblx0fVxuXHRib2R5IHtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcblx0fVxuXHRib2R5LnJvdyB7XG5cdFx0cGFkZGluZzogMS4yNXJlbTtcblx0XHRwYWRkaW5nLWJvdHRvbTogMDtcblx0fVxuXG5cdC5wcm9maWxlLWltYWdlIHtcblx0XHRpbWcge1xuXHRcdFx0bWF4LXdpZHRoOiAxMDAlO1xuXHRcdFx0bWF4LWhlaWdodDogMTAwJTtcblx0XHRcdGJvcmRlci1yYWRpdXM6IDVweDtcblx0XHR9XG5cdH1cbn1cbiIsIm5iLWNhcmQtaGVhZGVyIGhlYWRlciBoMSB7XG4gIHBhZGRpbmctYm90dG9tOiAxLjI1cmVtO1xufVxuXG5uYi1jYXJkLWhlYWRlciBib2R5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbm5iLWNhcmQtaGVhZGVyIGJvZHkucm93IHtcbiAgcGFkZGluZzogMS4yNXJlbTtcbiAgcGFkZGluZy1ib3R0b206IDA7XG59XG5cbm5iLWNhcmQtaGVhZGVyIC5wcm9maWxlLWltYWdlIGltZyB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWF4LWhlaWdodDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/pages/+profile/profile.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/+profile/profile.component.ts ***!
  \*****************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_core_data_admins_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/@core/data/admins.service */ "./src/app/@core/data/admins.service.ts");
/* harmony import */ var _app_core_data_store_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/@core/data/store.service */ "./src/app/@core/data/store.service.ts");




let ProfileComponent = class ProfileComponent {
    constructor(adminsService, store) {
        this.adminsService = adminsService;
        this.store = store;
        this.admin$ = this.adminsService.getAdmin(this.store.adminId);
    }
};
ProfileComponent.ctorParameters = () => [
    { type: _app_core_data_admins_service__WEBPACK_IMPORTED_MODULE_2__["AdminsService"] },
    { type: _app_core_data_store_service__WEBPACK_IMPORTED_MODULE_3__["Store"] }
];
ProfileComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ea-profile',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./profile.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/pages/+profile/profile.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! .//profile.component.scss */ "./src/app/pages/+profile/profile.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_app_core_data_admins_service__WEBPACK_IMPORTED_MODULE_2__["AdminsService"], _app_core_data_store_service__WEBPACK_IMPORTED_MODULE_3__["Store"]])
], ProfileComponent);



/***/ }),

/***/ "./src/app/pages/+profile/profile.module.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/+profile/profile.module.ts ***!
  \**************************************************/
/*! exports provided: routes, ProfileModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileModule", function() { return ProfileModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../@theme */ "./src/app/@theme/index.ts");
/* harmony import */ var _profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./profile.component */ "./src/app/pages/+profile/profile.component.ts");
/* harmony import */ var _core_data_admins_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../@core/data/admins.service */ "./src/app/@core/data/admins.service.ts");
/* harmony import */ var _edit_edit_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./edit/edit.module */ "./src/app/pages/+profile/edit/edit.module.ts");










const routes = [
    {
        path: '',
        component: _profile_component__WEBPACK_IMPORTED_MODULE_7__["ProfileComponent"],
    },
];
const PROFILE_COMPONENTS = [_profile_component__WEBPACK_IMPORTED_MODULE_7__["ProfileComponent"]];
let ProfileModule = class ProfileModule {
};
ProfileModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _theme__WEBPACK_IMPORTED_MODULE_6__["ThemeModule"],
            angular2_toaster__WEBPACK_IMPORTED_MODULE_4__["ToasterModule"].forRoot(),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"].forChild(),
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
            _edit_edit_module__WEBPACK_IMPORTED_MODULE_9__["EditProfileModule"],
        ],
        declarations: [...PROFILE_COMPONENTS],
        entryComponents: [],
        providers: [_core_data_admins_service__WEBPACK_IMPORTED_MODULE_8__["AdminsService"]],
    })
], ProfileModule);



/***/ })

}]);
//# sourceMappingURL=app-pages-profile-profile-module-es2015.js.map