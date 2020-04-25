function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-pages-maintenance-info-maintenance-info-module"], {
  /***/
  "../../node_modules/raw-loader/dist/cjs.js!./src/app/pages/+maintenance-info/maintenance-info.component.html":
  /*!*************************************************************************************************************************************************************!*\
    !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/raw-loader/dist/cjs.js!./src/app/pages/+maintenance-info/maintenance-info.component.html ***!
    \*************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesMaintenanceInfoMaintenanceInfoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nb-layout>\n\t<nb-layout-column\n\t\t*ngIf=\"message\"\n\t\tclass=\"maintenance-message-container\"\n\t\t[innerHTML]=\"message | safe: 'html'\"\n\t>\n\t</nb-layout-column>\n</nb-layout>\n";
    /***/
  },

  /***/
  "./src/app/@theme/index.ts":
  /*!*********************************!*\
    !*** ./src/app/@theme/index.ts ***!
    \*********************************/

  /*! exports provided: HttpLoaderFactory, ThemeModule */

  /***/
  function srcAppThemeIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _theme_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./theme.module */
    "./src/app/@theme/theme.module.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function () {
      return _theme_module__WEBPACK_IMPORTED_MODULE_1__["HttpLoaderFactory"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ThemeModule", function () {
      return _theme_module__WEBPACK_IMPORTED_MODULE_1__["ThemeModule"];
    });
    /***/

  },

  /***/
  "./src/app/pages/+maintenance-info/maintenance-info.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/pages/+maintenance-info/maintenance-info.component.ts ***!
    \***********************************************************************/

  /*! exports provided: MaintenanceInfoComponent */

  /***/
  function srcAppPagesMaintenanceInfoMaintenanceInfoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MaintenanceInfoComponent", function () {
      return MaintenanceInfoComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _modules_client_common_angular2_services_maintenance_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @modules/client.common.angular2/services/maintenance.service */
    "../common-angular/src/services/maintenance.service.ts");
    /* harmony import */


    var environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _app_core_data_store_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @app/@core/data/store.service */
    "./src/app/@core/data/store.service.ts");

    var MaintenanceInfoComponent = /*#__PURE__*/function () {
      function MaintenanceInfoComponent(maintenanceService, router, store) {
        _classCallCheck(this, MaintenanceInfoComponent);

        this.maintenanceService = maintenanceService;
        this.router = router;
        this.store = store;
        this.maintenanceMode = this.store.maintenanceMode;
        this.getMessage();
        this.getStatus();
      }

      _createClass(MaintenanceInfoComponent, [{
        key: "getMessage",
        value: function getMessage() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.maintenanceService.getMessage(this.maintenanceMode, environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"]['SETTINGS_MAINTENANCE_API_URL']);

                  case 2:
                    this.message = _context.sent;

                  case 3:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "getStatus",
        value: function getStatus() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var _this = this;

            var interval;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    interval = setInterval(function () {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                        var status;
                        return regeneratorRuntime.wrap(function _callee2$(_context2) {
                          while (1) {
                            switch (_context2.prev = _context2.next) {
                              case 0:
                                _context2.next = 2;
                                return this.maintenanceService.getStatus(environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"]['SETTINGS_APP_TYPE'], environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"]['SETTINGS_MAINTENANCE_API_URL']);

                              case 2:
                                status = _context2.sent;
                                console.warn("Maintenance on '".concat(this.maintenanceMode, "': ").concat(status));

                                if (!status) {
                                  clearInterval(interval);
                                  this.store.clearMaintenanceMode();
                                  this.router.navigate(['']);
                                }

                              case 5:
                              case "end":
                                return _context2.stop();
                            }
                          }
                        }, _callee2, this);
                      }));
                    }, 5000);

                  case 1:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3);
          }));
        }
      }]);

      return MaintenanceInfoComponent;
    }();

    MaintenanceInfoComponent.ctorParameters = function () {
      return [{
        type: _modules_client_common_angular2_services_maintenance_service__WEBPACK_IMPORTED_MODULE_2__["MaintenanceService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _app_core_data_store_service__WEBPACK_IMPORTED_MODULE_5__["Store"]
      }];
    };

    MaintenanceInfoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./maintenance-info.component.html */
      "../../node_modules/raw-loader/dist/cjs.js!./src/app/pages/+maintenance-info/maintenance-info.component.html"))["default"]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_modules_client_common_angular2_services_maintenance_service__WEBPACK_IMPORTED_MODULE_2__["MaintenanceService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _app_core_data_store_service__WEBPACK_IMPORTED_MODULE_5__["Store"]])], MaintenanceInfoComponent);
    /***/
  },

  /***/
  "./src/app/pages/+maintenance-info/maintenance-info.module.ts":
  /*!********************************************************************!*\
    !*** ./src/app/pages/+maintenance-info/maintenance-info.module.ts ***!
    \********************************************************************/

  /*! exports provided: MaintenanceInfoModule */

  /***/
  function srcAppPagesMaintenanceInfoMaintenanceInfoModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MaintenanceInfoModule", function () {
      return MaintenanceInfoModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _modules_client_common_angular2_services_maintenance_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @modules/client.common.angular2/services/maintenance.service */
    "../common-angular/src/services/maintenance.service.ts");
    /* harmony import */


    var _maintenance_info_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./maintenance-info.component */
    "./src/app/pages/+maintenance-info/maintenance-info.component.ts");
    /* harmony import */


    var _modules_client_common_angular2_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @modules/client.common.angular2/pipes/pipes.module */
    "../common-angular/src/pipes/pipes.module.ts");
    /* harmony import */


    var _app_theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @app/@theme */
    "./src/app/@theme/index.ts");

    var routes = [{
      path: '',
      component: _maintenance_info_component__WEBPACK_IMPORTED_MODULE_5__["MaintenanceInfoComponent"]
    }];

    var MaintenanceInfoModule = function MaintenanceInfoModule() {
      _classCallCheck(this, MaintenanceInfoModule);
    };

    MaintenanceInfoModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes), _modules_client_common_angular2_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__["PipesModule"], _app_theme__WEBPACK_IMPORTED_MODULE_7__["ThemeModule"]],
      providers: [_modules_client_common_angular2_services_maintenance_service__WEBPACK_IMPORTED_MODULE_4__["MaintenanceService"]],
      declarations: [_maintenance_info_component__WEBPACK_IMPORTED_MODULE_5__["MaintenanceInfoComponent"]]
    })], MaintenanceInfoModule);
    /***/
  }
}]);
//# sourceMappingURL=app-pages-maintenance-info-maintenance-info-module-es5.js.map