function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["product-product-module"], {
  /***/
  "../../node_modules/raw-loader/dist/cjs.js!./src/app/pages/+products/+product/product.component.html":
  /*!*****************************************************************************************************************************************************!*\
    !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/raw-loader/dist/cjs.js!./src/app/pages/+products/+product/product.component.html ***!
    \*****************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesProductsProductProductComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nb-card>\n\t<nb-card-header>\n\t\t<!-- back -->\n\t\t<svg\n\t\t\tviewBox=\"0 0 24 24\"\n\t\t\tclass=\"control-icon control-icon-left\"\n\t\t\t(click)=\"back()\"\n\t\t>\n\t\t\t<path\n\t\t\t\td=\"M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z\"\n\t\t\t/>\n\t\t</svg>\n\n\t\t<h1>{{ getTranslatedValue(product?.title) }}</h1>\n\t</nb-card-header>\n</nb-card>\n\n<div class=\"media w-75\">\n\t<img\n\t\tclass=\"align-self-center img-thumbnail mr-3 w-25\"\n\t\tsrc=\"{{ getTranslatedValue(product?.images) }}\"\n\t\talt=\"{{ getTranslatedValue(product?.title) }}\"\n\t/>\n\n\t<div class=\"media-body\">\n\t\t<p class=\"mt-2\">\n\t\t\t<strong>{{ 'CUSTOMERS_VIEW.DESCRIPTION' | translate }}:</strong>\n\t\t\t{{ getTranslatedValue(product?.description) }}\n\t\t</p>\n\n\t\t<p>\n\t\t\t<strong>{{ 'CUSTOMERS_VIEW.DETAILS' | translate }}:</strong>\n\t\t\t{{ getTranslatedValue(product?.details) }}\n\t\t</p>\n\n\t\t<div>\n\t\t\t<div>\n\t\t\t\t<strong>{{ 'CUSTOMERS_VIEW.CATEGORY' | translate }}: </strong>\n\t\t\t\t<span\n\t\t\t\t\t*ngFor=\"\n\t\t\t\t\t\tlet category of productCategoriesArr;\n\t\t\t\t\t\tlet isLast = last\n\t\t\t\t\t\"\n\t\t\t\t>\n\t\t\t\t\t{{ getTranslatedValue(category.name)\n\t\t\t\t\t}}{{ isLast ? '' : ', ' }}\n\t\t\t\t</span>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<br />\n\n\t\t<div class=\"input-group w-25\">\n\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t<label class=\"input-group-text\" for=\"inputGroupSelect01\">\n\t\t\t\t\t<strong>Lang</strong>\n\t\t\t\t</label>\n\t\t\t</div>\n\t\t\t<select\n\t\t\t\tclass=\"custom-select form-control\"\n\t\t\t\tid=\"inputGroupSelect01\"\n\t\t\t\t#langSelect\n\t\t\t\t(change)=\"onProductLangChange(langSelect.value)\"\n\t\t\t>\n\t\t\t\t<option\n\t\t\t\t\t*ngFor=\"let lang of translateService.getLangs()\"\n\t\t\t\t\t[value]=\"lang\"\n\t\t\t\t\t[selected]=\"lang === productLangToShow\"\n\t\t\t\t>\n\t\t\t\t\t{{ getLanguageFullName(lang) }}\n\t\t\t\t</option>\n\t\t\t</select>\n\t\t</div>\n\t</div>\n</div>\n";
    /***/
  },

  /***/
  "./src/app/pages/+products/+product/product.component.scss":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/+products/+product/product.component.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesProductsProductProductComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "div {\n  font-size: 16px;\n}\n\np {\n  margin-bottom: 20px;\n}\n\nstrong {\n  color: black;\n  opacity: 0.66;\n}\n\ndiv.input-group div label {\n  cursor: pointer;\n}\n\ndiv.input-group select {\n  cursor: pointer;\n}\n\nimg {\n  min-height: 200px;\n}\n\nnb-card-header {\n  min-height: 71px;\n  position: relative;\n}\n\nnb-card-header .control-icon-left {\n  cursor: pointer;\n  overflow: hidden;\n  vertical-align: middle;\n  width: 1.4em;\n  height: 1.4em;\n  float: left !important;\n  margin-right: 1.25rem;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvZC9Xb3JrL0FuZ3VsYXIvTmV3IGZvbGRlciAoMikvRG9sY2VHcm9jZXJ5L3BhY2thZ2VzL2FkbWluLXdlYi1hbmd1bGFyL3NyYy9hcHAvcGFnZXMvK3Byb2R1Y3RzLytwcm9kdWN0L3Byb2R1Y3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzLytwcm9kdWN0cy8rcHJvZHVjdC9wcm9kdWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsZUFBZTtBQ0NoQjs7QURFQTtFQUNDLG1CQUFtQjtBQ0NwQjs7QURFQTtFQUNDLFlBQVk7RUFDWixhQUFhO0FDQ2Q7O0FERUE7RUFFRSxlQUFlO0FDQWpCOztBREZBO0VBTUUsZUFBZTtBQ0FqQjs7QURJQTtFQUNDLGlCQUFpQjtBQ0RsQjs7QURJQTtFQUNDLGdCQUFnQjtFQUNoQixrQkFBa0I7QUNEbkI7O0FEREE7RUFLRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixxQkFBcUI7QUNBdkIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy8rcHJvZHVjdHMvK3Byb2R1Y3QvcHJvZHVjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdiB7XG5cdGZvbnQtc2l6ZTogMTZweDtcbn1cblxucCB7XG5cdG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbnN0cm9uZyB7XG5cdGNvbG9yOiBibGFjaztcblx0b3BhY2l0eTogMC42Njtcbn1cblxuZGl2LmlucHV0LWdyb3VwIHtcblx0ZGl2IGxhYmVsIHtcblx0XHRjdXJzb3I6IHBvaW50ZXI7XG5cdH1cblxuXHRzZWxlY3Qge1xuXHRcdGN1cnNvcjogcG9pbnRlcjtcblx0fVxufVxuXG5pbWcge1xuXHRtaW4taGVpZ2h0OiAyMDBweDtcbn1cblxubmItY2FyZC1oZWFkZXIge1xuXHRtaW4taGVpZ2h0OiA3MXB4O1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cblx0LmNvbnRyb2wtaWNvbi1sZWZ0IHtcblx0XHRjdXJzb3I6IHBvaW50ZXI7XG5cdFx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0XHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuXHRcdHdpZHRoOiAxLjRlbTtcblx0XHRoZWlnaHQ6IDEuNGVtO1xuXHRcdGZsb2F0OiBsZWZ0ICFpbXBvcnRhbnQ7XG5cdFx0bWFyZ2luLXJpZ2h0OiAxLjI1cmVtO1xuXHR9XG59XG4iLCJkaXYge1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbnAge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG5zdHJvbmcge1xuICBjb2xvcjogYmxhY2s7XG4gIG9wYWNpdHk6IDAuNjY7XG59XG5cbmRpdi5pbnB1dC1ncm91cCBkaXYgbGFiZWwge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmRpdi5pbnB1dC1ncm91cCBzZWxlY3Qge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmltZyB7XG4gIG1pbi1oZWlnaHQ6IDIwMHB4O1xufVxuXG5uYi1jYXJkLWhlYWRlciB7XG4gIG1pbi1oZWlnaHQ6IDcxcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxubmItY2FyZC1oZWFkZXIgLmNvbnRyb2wtaWNvbi1sZWZ0IHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB3aWR0aDogMS40ZW07XG4gIGhlaWdodDogMS40ZW07XG4gIGZsb2F0OiBsZWZ0ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1yaWdodDogMS4yNXJlbTtcbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/+products/+product/product.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/pages/+products/+product/product.component.ts ***!
    \***************************************************************/

  /*! exports provided: ProductComponent */

  /***/
  function srcAppPagesProductsProductProductComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductComponent", function () {
      return ProductComponent;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _core_data_products_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../@core/data/products.service */
    "./src/app/@core/data/products.service.ts");
    /* harmony import */


    var _modules_client_common_angular2_locale_product_locales_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @modules/client.common.angular2/locale/product-locales.service */
    "../common-angular/src/locale/product-locales.service.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngx-translate/core */
    "../../node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _core_data_productsCategory_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../@core/data/productsCategory.service */
    "./src/app/@core/data/productsCategory.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");

    var ProductComponent = /*#__PURE__*/function () {
      function ProductComponent(translateService, _location, _router, _productsService, _productLocalesService, productsCategoryService) {
        var _this = this;

        _classCallCheck(this, ProductComponent);

        this.translateService = translateService;
        this._location = _location;
        this._router = _router;
        this._productsService = _productsService;
        this._productLocalesService = _productLocalesService;
        this.productsCategoryService = productsCategoryService;
        this._ngDestroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.productCategoriesArr = [];

        this._router.params.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["first"])()).toPromise().then(function (res) {
          _this._productId = res.id;
        });

        this.getAllCategories();
      }

      _createClass(ProductComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this._loadProduct();

          this._setProductLanguage();

          this.productCategoriesArr = this.allCategories;
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._ngDestroy$.next();

          this._ngDestroy$.complete();
        }
      }, {
        key: "getLanguageFullName",
        value: function getLanguageFullName(langAbbreviation) {
          switch (langAbbreviation) {
            case 'en-US':
              return 'English';

            case 'bg-BG':
              return 'Български';

            case 'he-IL':
              return 'עברית';

            case 'ru-RU':
              return 'Русский';

            case 'es-ES':
              return 'Spanish';

            case 'it-IT':
              return 'Italian';

            case 'fr-FR':
              return 'French';
          }
        }
      }, {
        key: "getTranslatedValue",
        value: function getTranslatedValue(member) {
          return this._productLocalesService.getTranslate(member, this.productLangToShow);
        }
      }, {
        key: "getCategories",
        value: function getCategories(categories) {
          var _this2 = this;

          return categories.map(function (c) {
            return _this2.getTranslatedValue(c.name);
          }).join(', ');
        }
      }, {
        key: "getAllCategories",
        value: function getAllCategories() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.productsCategoryService.getCategories().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["first"])()).toPromise();

                  case 2:
                    this.allCategories = _context.sent;

                  case 3:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "getTranslates",
        value: function getTranslates(categoryName) {
          return this._productLocalesService.getTranslate(categoryName);
        }
      }, {
        key: "onProductLangChange",
        value: function onProductLangChange(selectedLanguage) {
          this.productLangToShow = selectedLanguage;
        }
      }, {
        key: "getProductCategories",
        value: function getProductCategories(categoriesID) {
          this.productCategoriesArr = this.allCategories.filter(function (c) {
            return categoriesID.includes(c.id);
          });
        }
      }, {
        key: "back",
        value: function back() {
          this._location.back();
        }
      }, {
        key: "_loadProduct",
        value: function _loadProduct() {
          var _this3 = this;

          this._productsService.getProductById(this._productId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this._ngDestroy$)).subscribe(function (p) {
            _this3.product = p;

            _this3.getProductCategories(p.categories);
          });
        }
      }, {
        key: "_setProductLanguage",
        value: function _setProductLanguage() {
          this.productLangToShow = this.translateService.currentLang;
        }
      }, {
        key: "showCategories",
        get: function get() {
          return this.product && this.product.categories.length > 0;
        }
      }]);

      return ProductComponent;
    }();

    ProductComponent.ctorParameters = function () {
      return [{
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_9__["Location"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _core_data_products_service__WEBPACK_IMPORTED_MODULE_3__["ProductsService"]
      }, {
        type: _modules_client_common_angular2_locale_product_locales_service__WEBPACK_IMPORTED_MODULE_4__["ProductLocalesService"]
      }, {
        type: _core_data_productsCategory_service__WEBPACK_IMPORTED_MODULE_8__["ProductsCategoryService"]
      }];
    };

    ProductComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'ea-product',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./product.component.html */
      "../../node_modules/raw-loader/dist/cjs.js!./src/app/pages/+products/+product/product.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./product.component.scss */
      "./src/app/pages/+products/+product/product.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["Location"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _core_data_products_service__WEBPACK_IMPORTED_MODULE_3__["ProductsService"], _modules_client_common_angular2_locale_product_locales_service__WEBPACK_IMPORTED_MODULE_4__["ProductLocalesService"], _core_data_productsCategory_service__WEBPACK_IMPORTED_MODULE_8__["ProductsCategoryService"]])], ProductComponent);
    /***/
  },

  /***/
  "./src/app/pages/+products/+product/product.module.ts":
  /*!************************************************************!*\
    !*** ./src/app/pages/+products/+product/product.module.ts ***!
    \************************************************************/

  /*! exports provided: ProductModule */

  /***/
  function srcAppPagesProductsProductProductModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductModule", function () {
      return ProductModule;
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


    var _theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../@theme */
    "./src/app/@theme/index.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _product_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./product.routes */
    "./src/app/pages/+products/+product/product.routes.ts");
    /* harmony import */


    var angular2_wizard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! angular2-wizard */
    "./node_modules/@ever-co/angular2-wizard/dist/index.js");
    /* harmony import */


    var angular2_wizard__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(angular2_wizard__WEBPACK_IMPORTED_MODULE_6__);
    /* harmony import */


    var angular2_toaster__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! angular2-toaster */
    "./node_modules/angular2-toaster/angular2-toaster.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ngx-translate/core */
    "../../node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var ngx_highlightjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ngx-highlightjs */
    "./node_modules/ngx-highlightjs/fesm2015/ngx-highlightjs.js");
    /* harmony import */


    var _product_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./product.component */
    "./src/app/pages/+products/+product/product.component.ts");
    /* harmony import */


    var ng2_smart_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ng2-smart-table */
    "./node_modules/ng2-smart-table/fesm2015/ng2-smart-table.js");

    var ProductModule = function ProductModule() {
      _classCallCheck(this, ProductModule);
    };

    ProductModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _theme__WEBPACK_IMPORTED_MODULE_3__["ThemeModule"], angular2_wizard__WEBPACK_IMPORTED_MODULE_6__["FormWizardModule"], ng2_smart_table__WEBPACK_IMPORTED_MODULE_11__["Ng2SmartTableModule"], angular2_toaster__WEBPACK_IMPORTED_MODULE_7__["ToasterModule"].forRoot(), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"].forChild(), _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(_product_routes__WEBPACK_IMPORTED_MODULE_5__["routes"]), ngx_highlightjs__WEBPACK_IMPORTED_MODULE_9__["HighlightModule"].forRoot({
        theme: 'github'
      })],
      declarations: [_product_component__WEBPACK_IMPORTED_MODULE_10__["ProductComponent"]]
    })], ProductModule);
    /***/
  },

  /***/
  "./src/app/pages/+products/+product/product.routes.ts":
  /*!************************************************************!*\
    !*** ./src/app/pages/+products/+product/product.routes.ts ***!
    \************************************************************/

  /*! exports provided: routes */

  /***/
  function srcAppPagesProductsProductProductRoutesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "routes", function () {
      return routes;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _product_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./product.component */
    "./src/app/pages/+products/+product/product.component.ts");

    var routes = [{
      path: '',
      component: _product_component__WEBPACK_IMPORTED_MODULE_1__["ProductComponent"]
    }, {
      path: 'edit',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | product-edit-product-edit-module */
        "product-edit-product-edit-module").then(__webpack_require__.bind(null,
        /*! ./product-edit/product-edit.module */
        "./src/app/pages/+products/+product/product-edit/product-edit.module.ts")).then(function (m) {
          return m.ProductEditModule;
        });
      }
    }];
    /***/
  }
}]);
//# sourceMappingURL=product-product-module-es5.js.map