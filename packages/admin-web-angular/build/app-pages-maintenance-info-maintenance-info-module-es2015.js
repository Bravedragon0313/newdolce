(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-pages-maintenance-info-maintenance-info-module"],{

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/pages/+maintenance-info/maintenance-info.component.html":
/*!*************************************************************************************************************************************************************!*\
  !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/raw-loader/dist/cjs.js!./src/app/pages/+maintenance-info/maintenance-info.component.html ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nb-layout>\n\t<nb-layout-column\n\t\t*ngIf=\"message\"\n\t\tclass=\"maintenance-message-container\"\n\t\t[innerHTML]=\"message | safe: 'html'\"\n\t>\n\t</nb-layout-column>\n</nb-layout>\n");

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

/***/ "./src/app/pages/+maintenance-info/maintenance-info.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/+maintenance-info/maintenance-info.component.ts ***!
  \***********************************************************************/
/*! exports provided: MaintenanceInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaintenanceInfoComponent", function() { return MaintenanceInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _modules_client_common_angular2_services_maintenance_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @modules/client.common.angular2/services/maintenance.service */ "../common-angular/src/services/maintenance.service.ts");
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_core_data_store_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/@core/data/store.service */ "./src/app/@core/data/store.service.ts");






let MaintenanceInfoComponent = class MaintenanceInfoComponent {
    constructor(maintenanceService, router, store) {
        this.maintenanceService = maintenanceService;
        this.router = router;
        this.store = store;
        this.maintenanceMode = this.store.maintenanceMode;
        this.getMessage();
        this.getStatus();
    }
    getMessage() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.message = yield this.maintenanceService.getMessage(this.maintenanceMode, environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"]['SETTINGS_MAINTENANCE_API_URL']);
        });
    }
    getStatus() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const interval = setInterval(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const status = yield this.maintenanceService.getStatus(environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"]['SETTINGS_APP_TYPE'], environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"]['SETTINGS_MAINTENANCE_API_URL']);
                console.warn(`Maintenance on '${this.maintenanceMode}': ${status}`);
                if (!status) {
                    clearInterval(interval);
                    this.store.clearMaintenanceMode();
                    this.router.navigate(['']);
                }
            }), 5000);
        });
    }
};
MaintenanceInfoComponent.ctorParameters = () => [
    { type: _modules_client_common_angular2_services_maintenance_service__WEBPACK_IMPORTED_MODULE_2__["MaintenanceService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _app_core_data_store_service__WEBPACK_IMPORTED_MODULE_5__["Store"] }
];
MaintenanceInfoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./maintenance-info.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/pages/+maintenance-info/maintenance-info.component.html")).default,
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_modules_client_common_angular2_services_maintenance_service__WEBPACK_IMPORTED_MODULE_2__["MaintenanceService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _app_core_data_store_service__WEBPACK_IMPORTED_MODULE_5__["Store"]])
], MaintenanceInfoComponent);



/***/ }),

/***/ "./src/app/pages/+maintenance-info/maintenance-info.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/+maintenance-info/maintenance-info.module.ts ***!
  \********************************************************************/
/*! exports provided: MaintenanceInfoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaintenanceInfoModule", function() { return MaintenanceInfoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _modules_client_common_angular2_services_maintenance_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @modules/client.common.angular2/services/maintenance.service */ "../common-angular/src/services/maintenance.service.ts");
/* harmony import */ var _maintenance_info_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./maintenance-info.component */ "./src/app/pages/+maintenance-info/maintenance-info.component.ts");
/* harmony import */ var _modules_client_common_angular2_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @modules/client.common.angular2/pipes/pipes.module */ "../common-angular/src/pipes/pipes.module.ts");
/* harmony import */ var _app_theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/@theme */ "./src/app/@theme/index.ts");








const routes = [
    {
        path: '',
        component: _maintenance_info_component__WEBPACK_IMPORTED_MODULE_5__["MaintenanceInfoComponent"],
    },
];
let MaintenanceInfoModule = class MaintenanceInfoModule {
};
MaintenanceInfoModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
            _modules_client_common_angular2_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__["PipesModule"],
            _app_theme__WEBPACK_IMPORTED_MODULE_7__["ThemeModule"],
        ],
        providers: [_modules_client_common_angular2_services_maintenance_service__WEBPACK_IMPORTED_MODULE_4__["MaintenanceService"]],
        declarations: [_maintenance_info_component__WEBPACK_IMPORTED_MODULE_5__["MaintenanceInfoComponent"]],
    })
], MaintenanceInfoModule);



/***/ })

}]);
//# sourceMappingURL=app-pages-maintenance-info-maintenance-info-module-es2015.js.map