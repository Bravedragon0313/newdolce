(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["errors-errors-module"],{

/***/ "./src/pages/+errors/errors.module.ts":
/*!********************************************!*\
  !*** ./src/pages/+errors/errors.module.ts ***!
  \********************************************/
/*! exports provided: ErrorsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorsModule", function() { return ErrorsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [
    {
        path: 'connection-lost',
        loadChildren: function () {
            return __webpack_require__.e(/*! import() | connection-lost-connection-lost-module */ "connection-lost-connection-lost-module").then(__webpack_require__.bind(null, /*! ./+connection-lost/connection-lost.module */ "./src/pages/+errors/+connection-lost/connection-lost.module.ts")).then(function (m) { return m.ConnectionLostPageModule; });
        },
    },
];
var ErrorsModule = (function () {
    function ErrorsModule() {
    }
    ErrorsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ErrorsModule);
    return ErrorsModule;
}());



/***/ })

}]);
//# sourceMappingURL=errors-errors-module.js.map