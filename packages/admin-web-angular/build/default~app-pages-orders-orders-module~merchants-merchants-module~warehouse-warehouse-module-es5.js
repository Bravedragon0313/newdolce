function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~app-pages-orders-orders-module~merchants-merchants-module~warehouse-warehouse-module"], {
  /***/
  "../../node_modules/raw-loader/dist/cjs.js!./src/app/@shared/render-component/store-products-table/store-order-product-amount/store-order-product-amount.component.html":
  /*!************************************************************************************************************************************************************************************************************************!*\
    !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/raw-loader/dist/cjs.js!./src/app/@shared/render-component/store-products-table/store-order-product-amount/store-order-product-amount.component.html ***!
    \************************************************************************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedRenderComponentStoreProductsTableStoreOrderProductAmountStoreOrderProductAmountComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"order-input-wrapper text-center\" [nbSpinner]=\"loading\">\n\t<button\n\t\t(click)=\"addProduct()\"\n\t\tclass=\"btn btn-sm btn-secondary p-2 text-center btn-increase\"\n\t>\n\t\t+\n\t</button>\n\t<div class=\"p-2\">\n\t\t<span class=\"badge-dark\">{{ productAmount }}</span>\n\t</div>\n\n\t<button\n\t\t(click)=\"removeProduct()\"\n\t\t[disabled]=\"productAmount <= 1\"\n\t\tclass=\"btn btn-sm btn-secondary p-2 text-center btn-decrease\"\n\t>\n\t\t-\n\t</button>\n</div>\n";
    /***/
  },

  /***/
  "../../node_modules/raw-loader/dist/cjs.js!./src/app/@shared/render-component/store-products-table/store-product-amount/store-product-amount.component.html":
  /*!************************************************************************************************************************************************************************************************************!*\
    !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/raw-loader/dist/cjs.js!./src/app/@shared/render-component/store-products-table/store-product-amount/store-product-amount.component.html ***!
    \************************************************************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedRenderComponentStoreProductsTableStoreProductAmountStoreProductAmountComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"order-input-wrapper text-center\" [nbSpinner]=\"loading\">\n\t<button\n\t\t(click)=\"addProduct()\"\n\t\tclass=\"btn btn-sm btn-secondary p-2 text-center btn-increase\"\n\t>\n\t\t+\n\t</button>\n\t<div class=\"p-2\">\n\t\t<span class=\"badge-dark\">{{ productAmount }}</span>\n\t</div>\n\n\t<button\n\t\t(click)=\"removeProduct()\"\n\t\t[disabled]=\"productAmount <= 0\"\n\t\tclass=\"btn btn-sm btn-secondary p-2 text-center btn-decrease\"\n\t>\n\t\t-\n\t</button>\n</div>\n";
    /***/
  },

  /***/
  "../../node_modules/raw-loader/dist/cjs.js!./src/app/@shared/render-component/store-products-table/store-product-image/store-product-image.component.html":
  /*!**********************************************************************************************************************************************************************************************************!*\
    !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/raw-loader/dist/cjs.js!./src/app/@shared/render-component/store-products-table/store-product-image/store-product-image.component.html ***!
    \**********************************************************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedRenderComponentStoreProductsTableStoreProductImageStoreProductImageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"text-center\">\n\t<img\n\t\t*ngIf=\"value\"\n\t\tsrc=\"{{ value }}\"\n\t\t[ngClass]=\"{ clickable: !rowData.disableImg }\"\n\t\t(click)=\"addProduct()\"\n\t\twidth=\"60\"\n\t/>\n</div>\n";
    /***/
  },

  /***/
  "./src/app/@shared/render-component/store-products-table/store-order-product-amount/store-order-product-amount.component.scss":
  /*!************************************************************************************************************************************!*\
    !*** ./src/app/@shared/render-component/store-products-table/store-order-product-amount/store-order-product-amount.component.scss ***!
    \************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedRenderComponentStoreProductsTableStoreOrderProductAmountStoreOrderProductAmountComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".btn-increase {\n  line-height: 0.5 !important;\n}\n\n.btn-decrease {\n  line-height: 0.5 !important;\n  background-color: orange;\n}\n\n.badge-dark {\n  font-size: 11px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvZC9Xb3JrL0FuZ3VsYXIvTmV3IGZvbGRlciAoMikvRG9sY2VHcm9jZXJ5L3BhY2thZ2VzL2FkbWluLXdlYi1hbmd1bGFyL3NyYy9hcHAvQHNoYXJlZC9yZW5kZXItY29tcG9uZW50L3N0b3JlLXByb2R1Y3RzLXRhYmxlL3N0b3JlLW9yZGVyLXByb2R1Y3QtYW1vdW50L3N0b3JlLW9yZGVyLXByb2R1Y3QtYW1vdW50LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9Ac2hhcmVkL3JlbmRlci1jb21wb25lbnQvc3RvcmUtcHJvZHVjdHMtdGFibGUvc3RvcmUtb3JkZXItcHJvZHVjdC1hbW91bnQvc3RvcmUtb3JkZXItcHJvZHVjdC1hbW91bnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQywyQkFBMkI7QUNDNUI7O0FERUE7RUFDQywyQkFBMkI7RUFDM0Isd0JBQXdCO0FDQ3pCOztBREVBO0VBQ0MsZUFBZTtBQ0NoQiIsImZpbGUiOiJzcmMvYXBwL0BzaGFyZWQvcmVuZGVyLWNvbXBvbmVudC9zdG9yZS1wcm9kdWN0cy10YWJsZS9zdG9yZS1vcmRlci1wcm9kdWN0LWFtb3VudC9zdG9yZS1vcmRlci1wcm9kdWN0LWFtb3VudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG4taW5jcmVhc2Uge1xuXHRsaW5lLWhlaWdodDogMC41ICFpbXBvcnRhbnQ7XG59XG5cbi5idG4tZGVjcmVhc2Uge1xuXHRsaW5lLWhlaWdodDogMC41ICFpbXBvcnRhbnQ7XG5cdGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcbn1cblxuLmJhZGdlLWRhcmsge1xuXHRmb250LXNpemU6IDExcHg7XG59XG4iLCIuYnRuLWluY3JlYXNlIHtcbiAgbGluZS1oZWlnaHQ6IDAuNSAhaW1wb3J0YW50O1xufVxuXG4uYnRuLWRlY3JlYXNlIHtcbiAgbGluZS1oZWlnaHQ6IDAuNSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XG59XG5cbi5iYWRnZS1kYXJrIHtcbiAgZm9udC1zaXplOiAxMXB4O1xufVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/@shared/render-component/store-products-table/store-order-product-amount/store-order-product-amount.component.ts":
  /*!**********************************************************************************************************************************!*\
    !*** ./src/app/@shared/render-component/store-products-table/store-order-product-amount/store-order-product-amount.component.ts ***!
    \**********************************************************************************************************************************/

  /*! exports provided: StoreOrderProductAmountComponent */

  /***/
  function srcAppSharedRenderComponentStoreProductsTableStoreOrderProductAmountStoreOrderProductAmountComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StoreOrderProductAmountComponent", function () {
      return StoreOrderProductAmountComponent;
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


    var _modules_client_common_angular2_routers_warehouse_products_router_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @modules/client.common.angular2/routers/warehouse-products-router.service */
    "../common-angular/src/routers/warehouse-products-router.service.ts");
    /* harmony import */


    var angular2_toaster__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! angular2-toaster */
    "./node_modules/angular2-toaster/angular2-toaster.js");
    /* harmony import */


    var _modules_client_common_angular2_locale_product_locales_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @modules/client.common.angular2/locale/product-locales.service */
    "../common-angular/src/locale/product-locales.service.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _app_shared_confirmation_modal_confirmation_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @app/@shared/confirmation-modal/confirmation-modal.component */
    "./src/app/@shared/confirmation-modal/confirmation-modal.component.ts");
    /* harmony import */


    var _modules_client_common_angular2_routers_order_router_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @modules/client.common.angular2/routers/order-router.service */
    "../common-angular/src/routers/order-router.service.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var StoreOrderProductAmountComponent = /*#__PURE__*/function () {
      function StoreOrderProductAmountComponent(productLocalesService, toasterService, warehouseProductsRouter, modalService, orderRouter) {
        _classCallCheck(this, StoreOrderProductAmountComponent);

        this.productLocalesService = productLocalesService;
        this.toasterService = toasterService;
        this.warehouseProductsRouter = warehouseProductsRouter;
        this.modalService = modalService;
        this.orderRouter = orderRouter;
        this.ngDestroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
      }

      _createClass(StoreOrderProductAmountComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.productID = this.rowData.product.id;
          this.storeID = this.rowData.storeId;
          this.storeID = this.rowData.storeId;
          this.productAmount = this.value;
          this.productTitle = this.localeTranslate(this.rowData.product.title);
          this.orderId = this.rowData.orderId;
          this.orderWarehouseId = this.rowData.orderWarehouseId;
          this.availableProducts = this.rowData.warehouseProducts.filter(function (d) {
            return d.product === _this.productID;
          }).map(function (d) {
            return d.count;
          })[0];
          this.productObj = [{
            productId: this.productID,
            count: 1
          }];
        }
      }, {
        key: "localeTranslate",
        value: function localeTranslate(member) {
          return this.productLocalesService.getTranslate(member);
        }
      }, {
        key: "addProduct",
        value: function addProduct() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this2 = this;

            var activeModal, modalComponent;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    if (!(this.availableProducts > 0)) {
                      _context.next = 9;
                      break;
                    }

                    activeModal = this.modalService.open(_app_shared_confirmation_modal_confirmation_modal_component__WEBPACK_IMPORTED_MODULE_6__["ConfimationModalComponent"], {
                      size: 'sm',
                      container: 'nb-layout',
                      backdrop: 'static'
                    });
                    modalComponent = activeModal.componentInstance;
                    modalComponent.mainText = 'ARE_YOU_SURE_YOU_WANT_TO_INCREASE';
                    this.loading = true;
                    _context.next = 7;
                    return modalComponent.confirmEvent.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(modalComponent.ngDestroy$)).subscribe(function (dataEvent) {
                      _this2.orderRouter.addProducts(_this2.orderId, _this2.productObj, _this2.orderWarehouseId).then(function (r) {
                        _this2.toasterService.pop("info", "Increased amount of the order's product!");
                      })["catch"](function (err) {
                        _this2.toasterService.pop("error", "Error!");
                      });

                      modalComponent.cancel();
                    });

                  case 7:
                    _context.next = 10;
                    break;

                  case 9:
                    this.toasterService.pop("error", "There are no more available products!");

                  case 10:
                    this.loading = false;

                  case 11:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "removeProduct",
        value: function removeProduct() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this3 = this;

            var activeModal, modalComponent;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    if (!(this.productAmount >= 1)) {
                      _context2.next = 9;
                      break;
                    }

                    activeModal = this.modalService.open(_app_shared_confirmation_modal_confirmation_modal_component__WEBPACK_IMPORTED_MODULE_6__["ConfimationModalComponent"], {
                      size: 'sm',
                      container: 'nb-layout',
                      backdrop: 'static'
                    });
                    modalComponent = activeModal.componentInstance;
                    modalComponent.mainText = 'ARE_YOU_SURE_YOU_WANT_TO_DECREASE';
                    this.loading = true;
                    _context2.next = 7;
                    return modalComponent.confirmEvent.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(modalComponent.ngDestroy$)).subscribe(function (dataEvent) {
                      _this3.orderRouter.decreaseOrderProducts(_this3.orderId, _this3.productObj, _this3.orderWarehouseId).then(function (r) {
                        _this3.toasterService.pop("info", "Decreased amount of the order's product!");
                      })["catch"](function (err) {
                        _this3.toasterService.pop("error", "You can not decrease the qty\n\t\t\t\t\t\t\tof the product to 0, but you can remove selected product!");
                      });

                      modalComponent.cancel();
                    });

                  case 7:
                    _context2.next = 10;
                    break;

                  case 9:
                    this.toasterService.pop("error", "There are no products for remove!");

                  case 10:
                    this.loading = false;

                  case 11:
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
          this.ngDestroy$.next();
          this.ngDestroy$.complete();
        }
      }]);

      return StoreOrderProductAmountComponent;
    }();

    StoreOrderProductAmountComponent.ctorParameters = function () {
      return [{
        type: _modules_client_common_angular2_locale_product_locales_service__WEBPACK_IMPORTED_MODULE_4__["ProductLocalesService"]
      }, {
        type: angular2_toaster__WEBPACK_IMPORTED_MODULE_3__["ToasterService"]
      }, {
        type: _modules_client_common_angular2_routers_warehouse_products_router_service__WEBPACK_IMPORTED_MODULE_2__["WarehouseProductsRouter"]
      }, {
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"]
      }, {
        type: _modules_client_common_angular2_routers_order_router_service__WEBPACK_IMPORTED_MODULE_7__["OrderRouter"]
      }];
    };

    StoreOrderProductAmountComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./store-order-product-amount.component.html */
      "../../node_modules/raw-loader/dist/cjs.js!./src/app/@shared/render-component/store-products-table/store-order-product-amount/store-order-product-amount.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./store-order-product-amount.component.scss */
      "./src/app/@shared/render-component/store-products-table/store-order-product-amount/store-order-product-amount.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_modules_client_common_angular2_locale_product_locales_service__WEBPACK_IMPORTED_MODULE_4__["ProductLocalesService"], angular2_toaster__WEBPACK_IMPORTED_MODULE_3__["ToasterService"], _modules_client_common_angular2_routers_warehouse_products_router_service__WEBPACK_IMPORTED_MODULE_2__["WarehouseProductsRouter"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"], _modules_client_common_angular2_routers_order_router_service__WEBPACK_IMPORTED_MODULE_7__["OrderRouter"]])], StoreOrderProductAmountComponent);
    /***/
  },

  /***/
  "./src/app/@shared/render-component/store-products-table/store-product-amount/store-product-amount.component.scss":
  /*!************************************************************************************************************************!*\
    !*** ./src/app/@shared/render-component/store-products-table/store-product-amount/store-product-amount.component.scss ***!
    \************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedRenderComponentStoreProductsTableStoreProductAmountStoreProductAmountComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".btn-increase {\n  line-height: 0.5 !important;\n}\n\n.btn-decrease {\n  line-height: 0.5 !important;\n  background-color: orange;\n}\n\n.badge-dark {\n  font-size: 11px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvZC9Xb3JrL0FuZ3VsYXIvTmV3IGZvbGRlciAoMikvRG9sY2VHcm9jZXJ5L3BhY2thZ2VzL2FkbWluLXdlYi1hbmd1bGFyL3NyYy9hcHAvQHNoYXJlZC9yZW5kZXItY29tcG9uZW50L3N0b3JlLXByb2R1Y3RzLXRhYmxlL3N0b3JlLXByb2R1Y3QtYW1vdW50L3N0b3JlLXByb2R1Y3QtYW1vdW50LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9Ac2hhcmVkL3JlbmRlci1jb21wb25lbnQvc3RvcmUtcHJvZHVjdHMtdGFibGUvc3RvcmUtcHJvZHVjdC1hbW91bnQvc3RvcmUtcHJvZHVjdC1hbW91bnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQywyQkFBMkI7QUNDNUI7O0FERUE7RUFDQywyQkFBMkI7RUFDM0Isd0JBQXdCO0FDQ3pCOztBREVBO0VBQ0MsZUFBZTtBQ0NoQiIsImZpbGUiOiJzcmMvYXBwL0BzaGFyZWQvcmVuZGVyLWNvbXBvbmVudC9zdG9yZS1wcm9kdWN0cy10YWJsZS9zdG9yZS1wcm9kdWN0LWFtb3VudC9zdG9yZS1wcm9kdWN0LWFtb3VudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG4taW5jcmVhc2Uge1xuXHRsaW5lLWhlaWdodDogMC41ICFpbXBvcnRhbnQ7XG59XG5cbi5idG4tZGVjcmVhc2Uge1xuXHRsaW5lLWhlaWdodDogMC41ICFpbXBvcnRhbnQ7XG5cdGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcbn1cblxuLmJhZGdlLWRhcmsge1xuXHRmb250LXNpemU6IDExcHg7XG59XG4iLCIuYnRuLWluY3JlYXNlIHtcbiAgbGluZS1oZWlnaHQ6IDAuNSAhaW1wb3J0YW50O1xufVxuXG4uYnRuLWRlY3JlYXNlIHtcbiAgbGluZS1oZWlnaHQ6IDAuNSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XG59XG5cbi5iYWRnZS1kYXJrIHtcbiAgZm9udC1zaXplOiAxMXB4O1xufVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/@shared/render-component/store-products-table/store-product-amount/store-product-amount.component.ts":
  /*!**********************************************************************************************************************!*\
    !*** ./src/app/@shared/render-component/store-products-table/store-product-amount/store-product-amount.component.ts ***!
    \**********************************************************************************************************************/

  /*! exports provided: StoreProductAmountComponent */

  /***/
  function srcAppSharedRenderComponentStoreProductsTableStoreProductAmountStoreProductAmountComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StoreProductAmountComponent", function () {
      return StoreProductAmountComponent;
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


    var _modules_client_common_angular2_routers_warehouse_products_router_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @modules/client.common.angular2/routers/warehouse-products-router.service */
    "../common-angular/src/routers/warehouse-products-router.service.ts");
    /* harmony import */


    var angular2_toaster__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! angular2-toaster */
    "./node_modules/angular2-toaster/angular2-toaster.js");
    /* harmony import */


    var _modules_client_common_angular2_locale_product_locales_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @modules/client.common.angular2/locale/product-locales.service */
    "../common-angular/src/locale/product-locales.service.ts");

    var StoreProductAmountComponent = /*#__PURE__*/function () {
      function StoreProductAmountComponent(productLocalesService, toasterService, warehouseProductsRouter) {
        _classCallCheck(this, StoreProductAmountComponent);

        this.productLocalesService = productLocalesService;
        this.toasterService = toasterService;
        this.warehouseProductsRouter = warehouseProductsRouter;
      }

      _createClass(StoreProductAmountComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.productID = this.rowData.product.id;
          this.storeID = this.rowData.storeId;
          this.storeID = this.rowData.storeId;
          this.productAmount = this.value;
          this.productTitle = this.localeTranslate(this.rowData.product.title);
        }
      }, {
        key: "localeTranslate",
        value: function localeTranslate(member) {
          return this.productLocalesService.getTranslate(member);
        }
      }, {
        key: "addProduct",
        value: function addProduct() {
          this.loading = true;
          this.warehouseProductsRouter.increaseCount(this.storeID, this.productID, 1);
          this.toasterService.pop('info', "".concat(this.productTitle, " product amound increased!"));
        }
      }, {
        key: "removeProduct",
        value: function removeProduct() {
          this.loading = true;
          this.warehouseProductsRouter.decreaseCount(this.storeID, this.productID, 1);
          this.toasterService.pop('info', "".concat(this.productTitle, " product amound decreased!"));
        }
      }]);

      return StoreProductAmountComponent;
    }();

    StoreProductAmountComponent.ctorParameters = function () {
      return [{
        type: _modules_client_common_angular2_locale_product_locales_service__WEBPACK_IMPORTED_MODULE_4__["ProductLocalesService"]
      }, {
        type: angular2_toaster__WEBPACK_IMPORTED_MODULE_3__["ToasterService"]
      }, {
        type: _modules_client_common_angular2_routers_warehouse_products_router_service__WEBPACK_IMPORTED_MODULE_2__["WarehouseProductsRouter"]
      }];
    };

    StoreProductAmountComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./store-product-amount.component.html */
      "../../node_modules/raw-loader/dist/cjs.js!./src/app/@shared/render-component/store-products-table/store-product-amount/store-product-amount.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./store-product-amount.component.scss */
      "./src/app/@shared/render-component/store-products-table/store-product-amount/store-product-amount.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_modules_client_common_angular2_locale_product_locales_service__WEBPACK_IMPORTED_MODULE_4__["ProductLocalesService"], angular2_toaster__WEBPACK_IMPORTED_MODULE_3__["ToasterService"], _modules_client_common_angular2_routers_warehouse_products_router_service__WEBPACK_IMPORTED_MODULE_2__["WarehouseProductsRouter"]])], StoreProductAmountComponent);
    /***/
  },

  /***/
  "./src/app/@shared/render-component/store-products-table/store-product-image/store-product-image.component.ts":
  /*!********************************************************************************************************************!*\
    !*** ./src/app/@shared/render-component/store-products-table/store-product-image/store-product-image.component.ts ***!
    \********************************************************************************************************************/

  /*! exports provided: StoreProductImageComponent */

  /***/
  function srcAppSharedRenderComponentStoreProductsTableStoreProductImageStoreProductImageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StoreProductImageComponent", function () {
      return StoreProductImageComponent;
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


    var _modules_client_common_angular2_routers_warehouse_products_router_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @modules/client.common.angular2/routers/warehouse-products-router.service */
    "../common-angular/src/routers/warehouse-products-router.service.ts");

    var StoreProductImageComponent = /*#__PURE__*/function () {
      function StoreProductImageComponent(warehouseProductsRouter) {
        _classCallCheck(this, StoreProductImageComponent);

        this.warehouseProductsRouter = warehouseProductsRouter;
      }

      _createClass(StoreProductImageComponent, [{
        key: "addProduct",
        value: function addProduct() {
          var storeId = this.rowData.storeId;
          var productId = this.rowData.id;
          var disableImg = this.rowData.disableImg;

          if (storeId && productId && !disableImg) {
            this.warehouseProductsRouter.increaseCount(storeId, productId, 1);
          } else {
            console.warn("Can't add product.");
          }
        }
      }]);

      return StoreProductImageComponent;
    }();

    StoreProductImageComponent.ctorParameters = function () {
      return [{
        type: _modules_client_common_angular2_routers_warehouse_products_router_service__WEBPACK_IMPORTED_MODULE_2__["WarehouseProductsRouter"]
      }];
    };

    StoreProductImageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./store-product-image.component.html */
      "../../node_modules/raw-loader/dist/cjs.js!./src/app/@shared/render-component/store-products-table/store-product-image/store-product-image.component.html"))["default"]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_modules_client_common_angular2_routers_warehouse_products_router_service__WEBPACK_IMPORTED_MODULE_2__["WarehouseProductsRouter"]])], StoreProductImageComponent);
    /***/
  },

  /***/
  "./src/app/@shared/render-component/store-products-table/store-product-price.component.ts":
  /*!************************************************************************************************!*\
    !*** ./src/app/@shared/render-component/store-products-table/store-product-price.component.ts ***!
    \************************************************************************************************/

  /*! exports provided: StoreProductPriceComponent */

  /***/
  function srcAppSharedRenderComponentStoreProductsTableStoreProductPriceComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StoreProductPriceComponent", function () {
      return StoreProductPriceComponent;
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


    var environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! environments/environment */
    "./src/environments/environment.ts");

    var StoreProductPriceComponent = function StoreProductPriceComponent() {
      _classCallCheck(this, StoreProductPriceComponent);

      this.currencySymbol = environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].CURRENCY_SYMBOL;
    };

    StoreProductPriceComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: " <span>{{ currencySymbol }}{{ value }}</span> "
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], StoreProductPriceComponent);
    /***/
  },

  /***/
  "./src/app/@shared/render-component/store-products-table/store-product-qty.component.ts":
  /*!**********************************************************************************************!*\
    !*** ./src/app/@shared/render-component/store-products-table/store-product-qty.component.ts ***!
    \**********************************************************************************************/

  /*! exports provided: StoreProductQtyComponent */

  /***/
  function srcAppSharedRenderComponentStoreProductsTableStoreProductQtyComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StoreProductQtyComponent", function () {
      return StoreProductQtyComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var StoreProductQtyComponent = function StoreProductQtyComponent() {
      _classCallCheck(this, StoreProductQtyComponent);
    };

    StoreProductQtyComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: "\n\t\t<div class=\"text-center\">\n\t\t\t<span class=\"badge-dark\">{{ value }}</span>\n\t\t</div>\n\t"
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], StoreProductQtyComponent);
    /***/
  },

  /***/
  "./src/app/@shared/render-component/store-products-table/store-products-table.module.ts":
  /*!**********************************************************************************************!*\
    !*** ./src/app/@shared/render-component/store-products-table/store-products-table.module.ts ***!
    \**********************************************************************************************/

  /*! exports provided: StoreProductsTableModule */

  /***/
  function srcAppSharedRenderComponentStoreProductsTableStoreProductsTableModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StoreProductsTableModule", function () {
      return StoreProductsTableModule;
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


    var _store_product_image_store_product_image_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./store-product-image/store-product-image.component */
    "./src/app/@shared/render-component/store-products-table/store-product-image/store-product-image.component.ts");
    /* harmony import */


    var _store_product_price_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./store-product-price.component */
    "./src/app/@shared/render-component/store-products-table/store-product-price.component.ts");
    /* harmony import */


    var _store_product_qty_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./store-product-qty.component */
    "./src/app/@shared/render-component/store-products-table/store-product-qty.component.ts");
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/fesm2015/index.js");
    /* harmony import */


    var _store_product_amount_store_product_amount_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./store-product-amount/store-product-amount.component */
    "./src/app/@shared/render-component/store-products-table/store-product-amount/store-product-amount.component.ts");
    /* harmony import */


    var _store_order_product_amount_store_order_product_amount_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./store-order-product-amount/store-order-product-amount.component */
    "./src/app/@shared/render-component/store-products-table/store-order-product-amount/store-order-product-amount.component.ts");
    /* harmony import */


    var _app_shared_confirmation_modal_confirmation_modal_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @app/@shared/confirmation-modal/confirmation-modal.module */
    "./src/app/@shared/confirmation-modal/confirmation-modal.module.ts");

    var COMPONENTS = [_store_product_image_store_product_image_component__WEBPACK_IMPORTED_MODULE_4__["StoreProductImageComponent"], _store_product_price_component__WEBPACK_IMPORTED_MODULE_5__["StoreProductPriceComponent"], _store_product_qty_component__WEBPACK_IMPORTED_MODULE_6__["StoreProductQtyComponent"], _store_product_amount_store_product_amount_component__WEBPACK_IMPORTED_MODULE_8__["StoreProductAmountComponent"], _store_order_product_amount_store_order_product_amount_component__WEBPACK_IMPORTED_MODULE_9__["StoreOrderProductAmountComponent"]];

    var StoreProductsTableModule = function StoreProductsTableModule() {
      _classCallCheck(this, StoreProductsTableModule);
    };

    StoreProductsTableModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _theme__WEBPACK_IMPORTED_MODULE_3__["ThemeModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbSpinnerModule"], _app_shared_confirmation_modal_confirmation_modal_module__WEBPACK_IMPORTED_MODULE_10__["ConfirmationModalModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbButtonModule"]],
      declarations: COMPONENTS,
      entryComponents: COMPONENTS,
      exports: COMPONENTS
    })], StoreProductsTableModule);
    /***/
  }
}]);
//# sourceMappingURL=default~app-pages-orders-orders-module~merchants-merchants-module~warehouse-warehouse-module-es5.js.map