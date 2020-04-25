(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["language-language-module"],{

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/pages/+language/language.html":
/*!*******************************************************************************************************************************!*\
  !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/raw-loader/dist/cjs.js!./src/pages/+language/language.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"bar bar-header bar-brand language-header\">\n\t<h1 class=\"title\">{{ 'LANGUAGE_VIEW.TITLE' | translate }}</h1>\n\t<div class=\"buttons buttons-left header-item\">\n\t\t<span class=\"left-buttons\">\n\t\t\t<div class=\"waves-effect waves-classic\">\n\t\t\t\t<ion-menu-toggle class=\"button-icon\" menuToggle>\n\t\t\t\t\t<ion-icon ios=\"ios-menu\" md=\"md-menu\"></ion-icon>\n\t\t\t\t</ion-menu-toggle>\n\t\t\t</div>\n\t\t</span>\n\t</div>\n</div>\n\n<ion-content class=\"language-content\" scroll=\"false\" padding>\n\t<ion-list>\n\t\t<ion-item>\n\t\t\t<ion-label\n\t\t\t\t>{{ 'SIDE_MENU.GROUPS.SETTINGS.ITEMS.LANGUAGE' | translate\n\t\t\t\t}}</ion-label\n\t\t\t>\n\t\t\t<ion-select\n\t\t\t\t[(ngModel)]=\"selected\"\n\t\t\t\t(ionChange)=\"switchLanguage(selected)\"\n\t\t\t\t[cancelText]=\"buttonCancel\"\n\t\t\t\t[okText]=\"buttonOK\"\n\t\t\t>\n\t\t\t\t<ion-select-option\n\t\t\t\t\t*ngFor=\"let lang of translate?.getLangs()\"\n\t\t\t\t\t[value]=\"lang\"\n\t\t\t\t\t[selected]=\"lang === translate.currentLang\"\n\t\t\t\t>\n\t\t\t\t\t{{ lang }}\n\t\t\t\t</ion-select-option>\n\t\t\t</ion-select>\n\t\t</ion-item>\n\t</ion-list>\n</ion-content>\n");

/***/ }),

/***/ "./src/pages/+language/language.module.ts":
/*!************************************************!*\
  !*** ./src/pages/+language/language.module.ts ***!
  \************************************************/
/*! exports provided: HttpLoaderFactory, LanguagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguagePageModule", function() { return LanguagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _language__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./language */ "./src/pages/+language/language.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm5/ngx-translate-http-loader.js");
/* harmony import */ var _services_store_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/store.service */ "./src/services/store.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");











function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_5__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
}
var routes = [
    {
        path: '',
        component: _language__WEBPACK_IMPORTED_MODULE_2__["LanguagePage"],
    },
];
var LanguagePageModule = (function () {
    function LanguagePageModule() {
    }
    LanguagePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_language__WEBPACK_IMPORTED_MODULE_2__["LanguagePage"]],
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forChild(routes),
                _angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"].forChild({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateLoader"],
                        useFactory: HttpLoaderFactory,
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]],
                    },
                }),
            ],
            providers: [_services_store_service__WEBPACK_IMPORTED_MODULE_6__["Store"]],
        })
    ], LanguagePageModule);
    return LanguagePageModule;
}());



/***/ }),

/***/ "./src/pages/+language/language.scss":
/*!*******************************************!*\
  !*** ./src/pages/+language/language.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".language-header {\n  position: relative;\n}\n\n.language-header .button-icon ion-icon {\n  font-size: 2rem;\n}\n\n.language-content .toolbar-title.toolbar-title-md {\n  text-align: center;\n  color: white;\n  font-size: 100%;\n}\n\n.language-content .toolbar-background {\n  background-color: #1ea44f;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvZC9Xb3JrL0FuZ3VsYXIvTmV3IGZvbGRlciAoMikvRG9sY2VHcm9jZXJ5L3BhY2thZ2VzL21lcmNoYW50LXRhYmxldC1pb25pYy9zcmMvcGFnZXMvK2xhbmd1YWdlL2xhbmd1YWdlLnNjc3MiLCJzcmMvcGFnZXMvK2xhbmd1YWdlL2xhbmd1YWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxrQkFBa0I7QUNDbkI7O0FERkE7RUFJRyxlQUFlO0FDRWxCOztBREdBO0VBRUUsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixlQUFlO0FDRGpCOztBREhBO0VBUUUseUJBQXlCO0FDRDNCIiwiZmlsZSI6InNyYy9wYWdlcy8rbGFuZ3VhZ2UvbGFuZ3VhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sYW5ndWFnZS1oZWFkZXIge1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdC5idXR0b24taWNvbiB7XG5cdFx0aW9uLWljb24ge1xuXHRcdFx0Zm9udC1zaXplOiAycmVtO1xuXHRcdH1cblx0fVxufVxuXG4ubGFuZ3VhZ2UtY29udGVudCB7XG5cdC50b29sYmFyLXRpdGxlLnRvb2xiYXItdGl0bGUtbWQge1xuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRjb2xvcjogd2hpdGU7XG5cdFx0Zm9udC1zaXplOiAxMDAlO1xuXHR9XG5cblx0LnRvb2xiYXItYmFja2dyb3VuZCB7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogIzFlYTQ0Zjtcblx0fVxufVxuIiwiLmxhbmd1YWdlLWhlYWRlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmxhbmd1YWdlLWhlYWRlciAuYnV0dG9uLWljb24gaW9uLWljb24ge1xuICBmb250LXNpemU6IDJyZW07XG59XG5cbi5sYW5ndWFnZS1jb250ZW50IC50b29sYmFyLXRpdGxlLnRvb2xiYXItdGl0bGUtbWQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxMDAlO1xufVxuXG4ubGFuZ3VhZ2UtY29udGVudCAudG9vbGJhci1iYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFlYTQ0Zjtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/pages/+language/language.ts":
/*!*****************************************!*\
  !*** ./src/pages/+language/language.ts ***!
  \*****************************************/
/*! exports provided: LanguagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguagePage", function() { return LanguagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _modules_client_common_angular2_routers_device_router_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @modules/client.common.angular2/routers/device-router.service */ "../common-angular/src/routers/device-router.service.ts");
/* harmony import */ var _services_store_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/store.service */ "./src/services/store.service.ts");





var LanguagePage = (function () {
    function LanguagePage(translate, _deviceRouter, store) {
        this.translate = translate;
        this._deviceRouter = _deviceRouter;
        this.store = store;
        this.OK = 'OK';
        this.CANCEL = 'CANCEL';
        this.PREFIX = 'LANGUAGE_VIEW.';
    }
    LanguagePage.prototype.ngOnInit = function () {
        this.selected = localStorage.getItem('_language');
        this.language = localStorage.getItem('_language');
        this.translate.addLangs(['en-US', 'bg-BG', 'he-IL', 'ru-RU', 'es-ES', 'it-IT', 'fr-FR']);
    };
    Object.defineProperty(LanguagePage.prototype, "buttonOK", {
        get: function () {
            return this._translate(this.PREFIX + this.OK);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LanguagePage.prototype, "buttonCancel", {
        get: function () {
            return this._translate(this.PREFIX + this.CANCEL);
        },
        enumerable: true,
        configurable: true
    });
    LanguagePage.prototype.switchLanguage = function (language) {
        this._deviceRouter.updateLanguage(localStorage.getItem('_deviceId'), this.language);
        this.store.language = language;
        this.translate.use(language);
    };
    LanguagePage.prototype._translate = function (key) {
        var translationResult = '';
        this.translate.get(key).subscribe(function (res) {
            translationResult = res;
        });
        return translationResult;
    };
    LanguagePage.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] },
        { type: _modules_client_common_angular2_routers_device_router_service__WEBPACK_IMPORTED_MODULE_3__["DeviceRouter"] },
        { type: _services_store_service__WEBPACK_IMPORTED_MODULE_4__["Store"] }
    ]; };
    LanguagePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'page-language',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./language.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/pages/+language/language.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./language.scss */ "./src/pages/+language/language.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"],
            _modules_client_common_angular2_routers_device_router_service__WEBPACK_IMPORTED_MODULE_3__["DeviceRouter"],
            _services_store_service__WEBPACK_IMPORTED_MODULE_4__["Store"]])
    ], LanguagePage);
    return LanguagePage;
}());



/***/ })

}]);
//# sourceMappingURL=language-language-module.js.map