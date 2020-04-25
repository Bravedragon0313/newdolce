(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-pages-module"],{

/***/ "./src/pages/+info/info.module.guard.ts":
/*!**********************************************!*\
  !*** ./src/pages/+info/info.module.guard.ts ***!
  \**********************************************/
/*! exports provided: InfoModuleGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoModuleGuard", function() { return InfoModuleGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_store_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/store.service */ "./src/services/store.service.ts");




var InfoModuleGuard = (function () {
    function InfoModuleGuard(store, router) {
        this.store = store;
        this.router = router;
    }
    InfoModuleGuard.prototype.canLoad = function (route) {
        if (!this.store.warehouseId || !this.store.deviceId) {
            this.router.navigate(['login']);
            return false;
        }
        return true;
    };
    InfoModuleGuard.ctorParameters = function () { return [
        { type: _services_store_service__WEBPACK_IMPORTED_MODULE_3__["Store"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    InfoModuleGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_store_service__WEBPACK_IMPORTED_MODULE_3__["Store"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], InfoModuleGuard);
    return InfoModuleGuard;
}());



/***/ }),

/***/ "./src/pages/+login/login.module.guard.ts":
/*!************************************************!*\
  !*** ./src/pages/+login/login.module.guard.ts ***!
  \************************************************/
/*! exports provided: LoginModuleGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModuleGuard", function() { return LoginModuleGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_store_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/store.service */ "./src/services/store.service.ts");




var LoginModuleGuard = (function () {
    function LoginModuleGuard(store, router) {
        this.store = store;
        this.router = router;
    }
    LoginModuleGuard.prototype.canLoad = function (route) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                return [2, true];
            });
        });
    };
    LoginModuleGuard.ctorParameters = function () { return [
        { type: _services_store_service__WEBPACK_IMPORTED_MODULE_3__["Store"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    LoginModuleGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_store_service__WEBPACK_IMPORTED_MODULE_3__["Store"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginModuleGuard);
    return LoginModuleGuard;
}());



/***/ }),

/***/ "./src/pages/+warehouse/warehouse.module.guard.ts":
/*!********************************************************!*\
  !*** ./src/pages/+warehouse/warehouse.module.guard.ts ***!
  \********************************************************/
/*! exports provided: WarehouseModuleGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WarehouseModuleGuard", function() { return WarehouseModuleGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_store_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/store.service */ "./src/services/store.service.ts");




var WarehouseModuleGuard = (function () {
    function WarehouseModuleGuard(store, router) {
        this.store = store;
        this.router = router;
    }
    WarehouseModuleGuard.prototype.canLoad = function (route) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var isLogged;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.store.isLogged()];
                    case 1:
                        isLogged = _a.sent();
                        if (!isLogged) {
                            this.router.navigateByUrl('/login');
                            return [2, false];
                        }
                        return [2, true];
                }
            });
        });
    };
    WarehouseModuleGuard.ctorParameters = function () { return [
        { type: _services_store_service__WEBPACK_IMPORTED_MODULE_3__["Store"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    WarehouseModuleGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_store_service__WEBPACK_IMPORTED_MODULE_3__["Store"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], WarehouseModuleGuard);
    return WarehouseModuleGuard;
}());



/***/ }),

/***/ "./src/pages/pages.module.ts":
/*!***********************************!*\
  !*** ./src/pages/pages.module.ts ***!
  \***********************************/
/*! exports provided: PagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesModule", function() { return PagesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_module_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./+login/login.module.guard */ "./src/pages/+login/login.module.guard.ts");
/* harmony import */ var _warehouse_warehouse_module_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./+warehouse/warehouse.module.guard */ "./src/pages/+warehouse/warehouse.module.guard.ts");
/* harmony import */ var _info_info_module_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./+info/info.module.guard */ "./src/pages/+info/info.module.guard.ts");






var routes = [
    {
        path: 'login',
        loadChildren: function () {
            return __webpack_require__.e(/*! import() | login-login-module */ "login-login-module").then(__webpack_require__.bind(null, /*! ./+login/login.module */ "./src/pages/+login/login.module.ts")).then(function (m) { return m.LoginPageModule; });
        },
        canLoad: [_login_login_module_guard__WEBPACK_IMPORTED_MODULE_3__["LoginModuleGuard"]],
    },
    {
        path: 'warehouse',
        loadChildren: function () {
            return Promise.all(/*! import() | warehouse-warehouse-module */[__webpack_require__.e("default~about-about-module~carriers-carriers-module~customers-customers-module~settings-settings-mod~b1c652ee"), __webpack_require__.e("default~customers-customers-module~track-track-module~warehouse-warehouse-module"), __webpack_require__.e("warehouse-warehouse-module")]).then(__webpack_require__.bind(null, /*! ./+warehouse/warehouse.module */ "./src/pages/+warehouse/warehouse.module.ts")).then(function (m) { return m.WarehousePageModule; });
        },
        canLoad: [_warehouse_warehouse_module_guard__WEBPACK_IMPORTED_MODULE_4__["WarehouseModuleGuard"]],
    },
    {
        path: 'language',
        loadChildren: function () {
            return __webpack_require__.e(/*! import() | language-language-module */ "language-language-module").then(__webpack_require__.bind(null, /*! ./+language/language.module */ "./src/pages/+language/language.module.ts")).then(function (m) { return m.LanguagePageModule; });
        },
    },
    {
        path: 'customers',
        loadChildren: function () {
            return Promise.all(/*! import() | customers-customers-module */[__webpack_require__.e("default~about-about-module~carriers-carriers-module~customers-customers-module~settings-settings-mod~b1c652ee"), __webpack_require__.e("default~carriers-carriers-module~customers-customers-module~settings-settings-module"), __webpack_require__.e("default~customers-customers-module~track-track-module~warehouse-warehouse-module"), __webpack_require__.e("customers-customers-module")]).then(__webpack_require__.bind(null, /*! ./+customers/customers.module */ "./src/pages/+customers/customers.module.ts")).then(function (m) { return m.CustomersPageModule; });
        },
    },
    {
        path: 'carriers',
        loadChildren: function () {
            return Promise.all(/*! import() | carriers-carriers-module */[__webpack_require__.e("default~about-about-module~carriers-carriers-module~customers-customers-module~settings-settings-mod~b1c652ee"), __webpack_require__.e("default~carriers-carriers-module~customers-customers-module~settings-settings-module"), __webpack_require__.e("default~carriers-carriers-module~track-track-module"), __webpack_require__.e("carriers-carriers-module")]).then(__webpack_require__.bind(null, /*! ./+carriers/carriers.module */ "./src/pages/+carriers/carriers.module.ts")).then(function (m) { return m.CarrierssPageModule; });
        },
    },
    {
        path: 'track',
        loadChildren: function () {
            return Promise.all(/*! import() | track-track-module */[__webpack_require__.e("default~about-about-module~carriers-carriers-module~customers-customers-module~settings-settings-mod~b1c652ee"), __webpack_require__.e("default~customers-customers-module~track-track-module~warehouse-warehouse-module"), __webpack_require__.e("default~carriers-carriers-module~track-track-module"), __webpack_require__.e("track-track-module")]).then(__webpack_require__.bind(null, /*! ./+track/track.module */ "./src/pages/+track/track.module.ts")).then(function (m) { return m.TrackPageModule; });
        },
    },
    {
        path: 'track/:id',
        loadChildren: function () {
            return Promise.all(/*! import() | track-track-module */[__webpack_require__.e("default~about-about-module~carriers-carriers-module~customers-customers-module~settings-settings-mod~b1c652ee"), __webpack_require__.e("default~customers-customers-module~track-track-module~warehouse-warehouse-module"), __webpack_require__.e("default~carriers-carriers-module~track-track-module"), __webpack_require__.e("track-track-module")]).then(__webpack_require__.bind(null, /*! ./+track/track.module */ "./src/pages/+track/track.module.ts")).then(function (m) { return m.TrackPageModule; });
        },
    },
    {
        path: 'settings',
        loadChildren: function () {
            return Promise.all(/*! import() | settings-settings-module */[__webpack_require__.e("default~about-about-module~carriers-carriers-module~customers-customers-module~settings-settings-mod~b1c652ee"), __webpack_require__.e("default~carriers-carriers-module~customers-customers-module~settings-settings-module"), __webpack_require__.e("settings-settings-module")]).then(__webpack_require__.bind(null, /*! ./+settings/settings.module */ "./src/pages/+settings/settings.module.ts")).then(function (m) { return m.SettingsPageModule; });
        },
    },
    {
        path: 'info',
        loadChildren: function () {
            return __webpack_require__.e(/*! import() | info-info-module */ "info-info-module").then(__webpack_require__.bind(null, /*! ./+info/info.module */ "./src/pages/+info/info.module.ts")).then(function (m) { return m.InfoModule; });
        },
        canLoad: [_info_info_module_guard__WEBPACK_IMPORTED_MODULE_5__["InfoModuleGuard"]],
    },
    {
        path: 'errors',
        loadChildren: function () {
            return __webpack_require__.e(/*! import() | errors-errors-module */ "errors-errors-module").then(__webpack_require__.bind(null, /*! ./+errors/errors.module */ "./src/pages/+errors/errors.module.ts")).then(function (m) { return m.ErrorsModule; });
        },
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'login',
    },
];
var PagesModule = (function () {
    function PagesModule() {
    }
    PagesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            providers: [_login_login_module_guard__WEBPACK_IMPORTED_MODULE_3__["LoginModuleGuard"], _warehouse_warehouse_module_guard__WEBPACK_IMPORTED_MODULE_4__["WarehouseModuleGuard"], _info_info_module_guard__WEBPACK_IMPORTED_MODULE_5__["InfoModuleGuard"]],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], PagesModule);
    return PagesModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-pages-module.js.map