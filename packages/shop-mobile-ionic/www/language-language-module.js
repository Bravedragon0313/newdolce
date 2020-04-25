(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["language-language-module"],{

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/pages/+language/language.page.html":
/*!****************************************************************************************************************************************!*\
  !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/raw-loader/dist/cjs.js!./src/app/pages/+language/language.page.html ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- this files uses translations from ./language.i18n.json -->\n\n<ion-header>\n\t<ion-toolbar color=\"primary\">\n\t\t<ion-buttons slot=\"start\">\n\t\t\t<ion-menu-button autoHide=\"false\"></ion-menu-button>\n\t\t</ion-buttons>\n\n\t\t<ion-title>{{ 'LANGUAGE_VIEW.TITLE' | translate }}</ion-title>\n\t\t<ion-buttons slot=\"end\">\n\t\t\t<ion-button (click)=\"goBack()\">\n\t\t\t\t<i class=\"fa fa-angle-left back-btn\"></i>\n\t\t\t\t<span>{{ 'BACK' | translate }}</span>\n\t\t\t</ion-button>\n\t\t</ion-buttons>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content scroll=\"false\">\n\t<ion-list>\n\t\t<ion-radio-group [(ngModel)]=\"language\">\n\t\t\t<ion-item>\n\t\t\t\t<ion-label>{{ 'ENGLISH' | translate }}</ion-label>\n\t\t\t\t<ion-radio value=\"en-US\"></ion-radio>\n\t\t\t</ion-item>\n\t\t\t<ion-item>\n\t\t\t\t<ion-label>{{ 'BULGARIAN' | translate }}</ion-label>\n\t\t\t\t<ion-radio value=\"bg-BG\"></ion-radio>\n\t\t\t</ion-item>\n\t\t\t<ion-item>\n\t\t\t\t<ion-label>{{ 'HEBREW' | translate }}</ion-label>\n\t\t\t\t<ion-radio value=\"he-IL\"></ion-radio>\n\t\t\t</ion-item>\n\t\t\t<ion-item>\n\t\t\t\t<ion-label>{{ 'RUSSIAN' | translate }}</ion-label>\n\t\t\t\t<ion-radio value=\"ru-RU\"></ion-radio>\n\t\t\t</ion-item>\n\t\t\t<ion-item>\n\t\t\t\t<ion-label>{{ 'SPANISH' | translate }}</ion-label>\n\t\t\t\t<ion-radio value=\"es-ES\"></ion-radio>\n\t\t\t</ion-item>\n\t\t\t<ion-item>\n\t\t\t\t<ion-label>{{ 'ITALIAN' | translate }}</ion-label>\n\t\t\t\t<ion-radio value=\"it-IT\"></ion-radio>\n\t\t\t</ion-item>\n\t\t\t<ion-item>\n\t\t\t\t<ion-label>{{ 'FRENCH' | translate }}</ion-label>\n\t\t\t\t<ion-radio value=\"fr-FR\"></ion-radio>\n\t\t\t</ion-item>\n\t\t</ion-radio-group>\n\t</ion-list>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/+language/language.module.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/+language/language.module.ts ***!
  \****************************************************/
/*! exports provided: HttpLoaderFactory, LanguagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguagePageModule", function() { return LanguagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _language_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./language.page */ "./src/app/pages/+language/language.page.ts");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm5/ngx-translate-http-loader.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");










function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_7__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
}
var routes = [
    {
        path: '',
        component: _language_page__WEBPACK_IMPORTED_MODULE_6__["LanguagePage"],
    },
];
var LanguagePageModule = (function () {
    function LanguagePageModule() {
    }
    LanguagePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"].forChild({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateLoader"],
                        useFactory: HttpLoaderFactory,
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"]],
                    },
                }),
            ],
            declarations: [_language_page__WEBPACK_IMPORTED_MODULE_6__["LanguagePage"]],
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], LanguagePageModule);
    return LanguagePageModule;
}());



/***/ }),

/***/ "./src/app/pages/+language/language.page.scss":
/*!****************************************************!*\
  !*** ./src/app/pages/+language/language.page.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".back-btn {\n  font-size: 30px;\n  margin-right: 10px;\n  margin-bottom: 4px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvZC9Xb3JrL0FuZ3VsYXIvTmV3IGZvbGRlciAoMikvRG9sY2VHcm9jZXJ5L3BhY2thZ2VzL3Nob3AtbW9iaWxlLWlvbmljL3NyYy9hcHAvcGFnZXMvK2xhbmd1YWdlL2xhbmd1YWdlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvK2xhbmd1YWdlL2xhbmd1YWdlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsa0JBQWtCO0FDQ25CIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvK2xhbmd1YWdlL2xhbmd1YWdlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNrLWJ0biB7XG5cdGZvbnQtc2l6ZTogMzBweDtcblx0bWFyZ2luLXJpZ2h0OiAxMHB4O1xuXHRtYXJnaW4tYm90dG9tOiA0cHg7XG59XG4iLCIuYmFjay1idG4ge1xuICBmb250LXNpemU6IDMwcHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/pages/+language/language.page.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/+language/language.page.ts ***!
  \**************************************************/
/*! exports provided: LanguagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguagePage", function() { return LanguagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_store_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/store.service */ "./src/app/services/store.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");





var LanguagePage = (function () {
    function LanguagePage(store, location, translate) {
        this.store = store;
        this.location = location;
        this.translate = translate;
    }
    Object.defineProperty(LanguagePage.prototype, "language", {
        get: function () {
            return this.store.language;
        },
        set: function (lang) {
            this.store.language = lang;
            this.goBack();
        },
        enumerable: true,
        configurable: true
    });
    LanguagePage.prototype.goBack = function () {
        this.location.back();
    };
    LanguagePage.ctorParameters = function () { return [
        { type: _services_store_service__WEBPACK_IMPORTED_MODULE_3__["Store"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] }
    ]; };
    LanguagePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'e-cu-language',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./language.page.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/pages/+language/language.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./language.page.scss */ "./src/app/pages/+language/language.page.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_store_service__WEBPACK_IMPORTED_MODULE_3__["Store"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]])
    ], LanguagePage);
    return LanguagePage;
}());



/***/ })

}]);
//# sourceMappingURL=language-language-module.js.map