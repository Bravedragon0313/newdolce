function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-pages-server-down-server-down-module"], {
  /***/
  "../../node_modules/raw-loader/dist/cjs.js!./src/app/pages/+server-down/server-down.page.html":
  /*!**********************************************************************************************************************************************!*\
    !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/raw-loader/dist/cjs.js!./src/app/pages/+server-down/server-down.page.html ***!
    \**********************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesServerDownServerDownPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nb-layout>\n\t<nb-layout-column class=\"login-view info-page\" scroll=\"false\">\n\t\t<div class=\"server-down-content\">\n\t\t\t<div class=\"logo app-hide-on-keyboard-open\">\n\t\t\t\t<img src=\"{{ noInternetLogo }}\" />\n\t\t\t</div>\n\n\t\t\t<div class=\"info-massage\">\n\t\t\t\t<h3 class=\"mt-4\">\n\t\t\t\t\t{{ 'NO_SERVER_VIEW.NO_SERVER' | translate }}\n\t\t\t\t</h3>\n\t\t\t</div>\n\t\t</div>\n\t</nb-layout-column>\n</nb-layout>\n";
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
  "./src/app/pages/+server-down/server-down.module.ts":
  /*!**********************************************************!*\
    !*** ./src/app/pages/+server-down/server-down.module.ts ***!
    \**********************************************************/

  /*! exports provided: HttpLoaderFactory, ServerDownModule */

  /***/
  function srcAppPagesServerDownServerDownModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function () {
      return HttpLoaderFactory;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ServerDownModule", function () {
      return ServerDownModule;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _server_down_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./server-down.page */
    "./src/app/pages/+server-down/server-down.page.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ngx-translate/core */
    "../../node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ngx-translate/http-loader */
    "./node_modules/@ngx-translate/http-loader/fesm2015/ngx-translate-http-loader.js");
    /* harmony import */


    var _app_theme__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @app/@theme */
    "./src/app/@theme/index.ts");

    function HttpLoaderFactory(http) {
      return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_8__["TranslateHttpLoader"](http, '../../../assets/i18n/', '.json');
    }

    var routes = [{
      path: '',
      component: _server_down_page__WEBPACK_IMPORTED_MODULE_5__["ServerDownPage"]
    }];

    var ServerDownModule = function ServerDownModule() {
      _classCallCheck(this, ServerDownModule);
    };

    ServerDownModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _app_theme__WEBPACK_IMPORTED_MODULE_9__["ThemeModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"].forChild({
        loader: {
          provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateLoader"],
          useFactory: HttpLoaderFactory,
          deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]]
        }
      })],
      declarations: [_server_down_page__WEBPACK_IMPORTED_MODULE_5__["ServerDownPage"]]
    })], ServerDownModule);
    /***/
  },

  /***/
  "./src/app/pages/+server-down/server-down.page.scss":
  /*!**********************************************************!*\
    !*** ./src/app/pages/+server-down/server-down.page.scss ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesServerDownServerDownPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".info-page {\n  padding: 0 !important;\n}\n\n.info-page .server-down-content {\n  color: white;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  text-align: center;\n  height: 100%;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n\n.info-page .info-massage h3 {\n  color: red;\n  width: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvZC9Xb3JrL0FuZ3VsYXIvTmV3IGZvbGRlciAoMikvRG9sY2VHcm9jZXJ5L3BhY2thZ2VzL2FkbWluLXdlYi1hbmd1bGFyL3NyYy9hcHAvcGFnZXMvK3NlcnZlci1kb3duL3NlcnZlci1kb3duLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvK3NlcnZlci1kb3duL3NlcnZlci1kb3duLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNDLHFCQUFxQjtBQ0h0Qjs7QURFQTtFQUlFLFlBQVk7RUFJWixvQkFBYTtFQUFiLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHlCQUFtQjtNQUFuQixzQkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLHdCQUF1QjtNQUF2QixxQkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osNEJBQXNCO0VBQXRCLDZCQUFzQjtNQUF0QiwwQkFBc0I7VUFBdEIsc0JBQXNCO0FDTHhCOztBRFJBO0VBaUJFLFVBQVU7RUFDVixXQUFXO0FDTGIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy8rc2VydmVyLWRvd24vc2VydmVyLWRvd24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQGltcG9ydCAnQG1vZHVsZXMvY2xpZW50LmNvbW1vbi5hbmd1bGFyMi9zY3NzL2V2ZXJiaWUuY29tbW9uJztcbi8vIEBpbXBvcnQgXCJ+QG1vZHVsZXMvY2xpZW50LmNvbW1vbi5hbmd1bGFyMi9zY3NzL2V2ZXJiaWUuY29tbW9uLnNjc3MnO1xuLy8gQGltcG9ydCBcIn5AZXZlci1wbGF0Zm9ybS9jb21tb24tYW5ndWxhci9zY3NzL2V2ZXJiaWUuY29tbW9uLnNjc3MnO1xuXG4uaW5mby1wYWdlIHtcblx0cGFkZGluZzogMCAhaW1wb3J0YW50O1xuXG5cdC5zZXJ2ZXItZG93bi1jb250ZW50IHtcblx0XHRjb2xvcjogd2hpdGU7XG5cblx0XHQvLyBiYWNrZ3JvdW5kOiAkYnJhbmQ7XG5cblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdGhlaWdodDogMTAwJTtcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHR9XG5cblx0LmluZm8tbWFzc2FnZSBoMyB7XG5cdFx0Y29sb3I6IHJlZDtcblx0XHR3aWR0aDogMTAwJTtcblx0fVxufVxuIiwiLmluZm8tcGFnZSB7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbn1cblxuLmluZm8tcGFnZSAuc2VydmVyLWRvd24tY29udGVudCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDAlO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uaW5mby1wYWdlIC5pbmZvLW1hc3NhZ2UgaDMge1xuICBjb2xvcjogcmVkO1xuICB3aWR0aDogMTAwJTtcbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/+server-down/server-down.page.ts":
  /*!********************************************************!*\
    !*** ./src/app/pages/+server-down/server-down.page.ts ***!
    \********************************************************/

  /*! exports provided: ServerDownPage */

  /***/
  function srcAppPagesServerDownServerDownPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ServerDownPage", function () {
      return ServerDownPage;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _app_core_data_store_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @app/@core/data/store.service */
    "./src/app/@core/data/store.service.ts");
    /* harmony import */


    var environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ngx-translate/core */
    "../../node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _modules_client_common_angular2_services_server_connection_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @modules/client.common.angular2/services/server-connection.service */
    "../common-angular/src/services/server-connection.service.ts");

    var ServerDownPage = /*#__PURE__*/function () {
      function ServerDownPage(store, http, location, translate, serverConnectionService) {
        _classCallCheck(this, ServerDownPage);

        this.store = store;
        this.http = http;
        this.location = location;
        this.translate = translate;
        this.serverConnectionService = serverConnectionService;
        var browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|bg|he|ru/) ? browserLang : 'en-US');
        this.noInternetLogo = environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"]['NO_INTERNET_LOGO'];
        this.testConnection();
      }

      _createClass(ServerDownPage, [{
        key: "testConnection",
        value: function testConnection() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this = this;

            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    this.interval = setInterval(function () {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                        return regeneratorRuntime.wrap(function _callee$(_context) {
                          while (1) {
                            switch (_context.prev = _context.next) {
                              case 0:
                                _context.next = 2;
                                return this.serverConnectionService.checkServerConnection(environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].SERVICES_ENDPOINT, this.store);

                              case 2:
                                if (Number(this.store.serverConnection) !== 0) {
                                  clearInterval(this.interval);
                                  this.location.back();
                                }

                              case 3:
                              case "end":
                                return _context.stop();
                            }
                          }
                        }, _callee, this);
                      }));
                    }, 5000);

                  case 1:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          clearInterval(this.interval);
        }
      }]);

      return ServerDownPage;
    }();

    ServerDownPage.ctorParameters = function () {
      return [{
        type: _app_core_data_store_service__WEBPACK_IMPORTED_MODULE_4__["Store"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]
      }, {
        type: _modules_client_common_angular2_services_server_connection_service__WEBPACK_IMPORTED_MODULE_7__["ServerConnectionService"]
      }];
    };

    ServerDownPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./server-down.page.html */
      "../../node_modules/raw-loader/dist/cjs.js!./src/app/pages/+server-down/server-down.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./server-down.page.scss */
      "./src/app/pages/+server-down/server-down.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_app_core_data_store_service__WEBPACK_IMPORTED_MODULE_4__["Store"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"], _modules_client_common_angular2_services_server_connection_service__WEBPACK_IMPORTED_MODULE_7__["ServerConnectionService"]])], ServerDownPage);
    /***/
  }
}]);
//# sourceMappingURL=app-pages-server-down-server-down-module-es5.js.map