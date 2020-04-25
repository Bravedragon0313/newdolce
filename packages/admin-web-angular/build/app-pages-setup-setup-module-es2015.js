(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-pages-setup-setup-module"],{

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/pages/+setup/setup.component.html":
/*!***************************************************************************************************************************************!*\
  !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/raw-loader/dist/cjs.js!./src/app/pages/+setup/setup.component.html ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nb-card class=\"col-12\" [nbSpinner]=\"loading\">\n\t<nb-card-header>\n\t\t<h1>{{ 'FAKE_DATA.SETUP' | translate }}</h1>\n\t</nb-card-header>\n\n\t<nb-card-body>\n\t\t<button\n\t\t\tnbButton\n\t\t\tstatus=\"primary\"\n\t\t\tclass=\"mr-3\"\n\t\t\t(click)=\"navigateToFakeDataPage()\"\n\t\t>\n\t\t\t{{ 'FAKE_DATA.GENERATE_INITIAL_DATA' | translate }}\n\t\t</button>\n\t\t<button\n\t\t\tnbButton\n\t\t\tstatus=\"primary\"\n\t\t\t(click)=\"navigateToSetupMerchantsPage()\"\n\t\t>\n\t\t\t{{ 'FAKE_DATA.SETUP_MERCHANTS.SETUP_MERCHANTS' | translate }}\n\t\t</button>\n\t</nb-card-body>\n</nb-card>\n");

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

/***/ "./src/app/pages/+setup/setup.component.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/+setup/setup.component.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzLytzZXR1cC9zZXR1cC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/+setup/setup.component.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/+setup/setup.component.ts ***!
  \*************************************************/
/*! exports provided: SetupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetupComponent", function() { return SetupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let SetupComponent = class SetupComponent {
    constructor(_router) {
        this._router = _router;
    }
    navigateToFakeDataPage() {
        this.loading = true;
        this._router.navigate(['/generate-initial-data']);
        this.loading = false;
    }
    navigateToSetupMerchantsPage() {
        this.loading = true;
        this._router.navigate(['/setup/merchants']);
        this.loading = false;
    }
};
SetupComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
SetupComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./setup.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/pages/+setup/setup.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./setup.component.scss */ "./src/app/pages/+setup/setup.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], SetupComponent);



/***/ }),

/***/ "./src/app/pages/+setup/setup.module.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/+setup/setup.module.ts ***!
  \**********************************************/
/*! exports provided: SetupModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetupModule", function() { return SetupModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _setup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./setup.component */ "./src/app/pages/+setup/setup.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../@theme */ "./src/app/@theme/index.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/fesm2015/index.js");








const routes = [
    {
        path: '',
        component: _setup_component__WEBPACK_IMPORTED_MODULE_3__["SetupComponent"],
    },
    {
        path: 'merchants',
        loadChildren: () => Promise.all(/*! import() | merchants-merchants-module */[__webpack_require__.e("default~app-pages-carriers-carriers-module~app-pages-customers-customers-module~app-pages-device-dev~7bb217a0"), __webpack_require__.e("default~app-pages-carriers-carriers-module~app-pages-customers-customers-module~app-pages-device-dev~6dc624b6"), __webpack_require__.e("default~app-pages-carriers-carriers-module~app-pages-customers-customers-module~app-pages-orders-ord~426d314b"), __webpack_require__.e("default~app-pages-carriers-carriers-module~app-pages-customers-customers-module~app-pages-products-p~e51d1e44"), __webpack_require__.e("default~app-pages-carriers-carriers-module~app-pages-customers-customers-module~app-pages-simulation~d7dc8447"), __webpack_require__.e("default~app-pages-carriers-carriers-module~app-pages-dashboard-dashboard-module~app-pages-warehouses~4afcb34f"), __webpack_require__.e("default~app-pages-products-products-module~app-pages-simulation-simulation-module~app-pages-warehous~00f3e9fb"), __webpack_require__.e("default~app-pages-simulation-simulation-module~app-pages-warehouses-warehouses-module~customer-custo~5b7a2dbc"), __webpack_require__.e("default~app-pages-products-products-module~merchants-merchants-module~warehouse-warehouse-module"), __webpack_require__.e("default~app-pages-orders-orders-module~merchants-merchants-module~warehouse-warehouse-module"), __webpack_require__.e("default~app-pages-carriers-carriers-module~merchants-merchants-module"), __webpack_require__.e("default~app-pages-products-products-module~merchants-merchants-module"), __webpack_require__.e("default~merchants-merchants-module~warehouse-warehouse-module"), __webpack_require__.e("merchants-merchants-module")]).then(__webpack_require__.bind(null, /*! ./+merchants/merchants.module */ "./src/app/pages/+setup/+merchants/merchants.module.ts")).then((m) => m.SetupMerchantsModule),
    },
];
let SetupModule = class SetupModule {
};
SetupModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _theme__WEBPACK_IMPORTED_MODULE_5__["ThemeModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"].forChild(),
            _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbSpinnerModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbButtonModule"],
        ],
        declarations: [_setup_component__WEBPACK_IMPORTED_MODULE_3__["SetupComponent"]],
    })
], SetupModule);



/***/ })

}]);
//# sourceMappingURL=app-pages-setup-setup-module-es2015.js.map