(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["info-info-module"],{

/***/ "./src/pages/+info/info.module.ts":
/*!****************************************!*\
  !*** ./src/pages/+info/info.module.ts ***!
  \****************************************/
/*! exports provided: InfoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoModule", function() { return InfoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [
    {
        path: 'about',
        loadChildren: function () {
            return Promise.all(/*! import() | about-about-module */[__webpack_require__.e("default~about-about-module~carriers-carriers-module~customers-customers-module~settings-settings-mod~b1c652ee"), __webpack_require__.e("about-about-module")]).then(__webpack_require__.bind(null, /*! ./+about/about.module */ "./src/pages/+info/+about/about.module.ts")).then(function (m) { return m.AboutPageModule; });
        },
    },
    {
        path: 'terms-of-use',
        loadChildren: function () {
            return Promise.all(/*! import() | terms-of-use-terms-of-use-module */[__webpack_require__.e("default~about-about-module~carriers-carriers-module~customers-customers-module~settings-settings-mod~b1c652ee"), __webpack_require__.e("terms-of-use-terms-of-use-module")]).then(__webpack_require__.bind(null, /*! ./+terms-of-use/terms-of-use.module */ "./src/pages/+info/+terms-of-use/terms-of-use.module.ts")).then(function (m) { return m.TermsOfUsePageModule; });
        },
    },
];
var InfoModule = (function () {
    function InfoModule() {
    }
    InfoModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], InfoModule);
    return InfoModule;
}());



/***/ })

}]);
//# sourceMappingURL=info-info-module.js.map