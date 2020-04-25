function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~app-pages-simulation-simulation-module~customer-customer-module~warehouse-warehouse-module"], {
  /***/
  "../../node_modules/raw-loader/dist/cjs.js!./src/app/@shared/render-component/customer-orders-table/customer-order-actions/customer-order-actions.component.html":
  /*!*****************************************************************************************************************************************************************************************************************!*\
    !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/raw-loader/dist/cjs.js!./src/app/@shared/render-component/customer-orders-table/customer-order-actions/customer-order-actions.component.html ***!
    \*****************************************************************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedRenderComponentCustomerOrdersTableCustomerOrderActionsCustomerOrderActionsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"iconsCont\">\n\t<h6 class=\"text-center iconBtns\">\n\t\t<i (click)=\"openInfo()\" class=\"fa fa-info-circle infoBtn\"></i>\n\t</h6>\n\t<h6 class=\"text-center iconBtns\">\n\t\t<i (click)=\"openCancel()\" class=\"fa fa-close cancelBtn\"></i>\n\t</h6>\n</div>\n";
    /***/
  },

  /***/
  "../../node_modules/raw-loader/dist/cjs.js!./src/app/@shared/render-component/customer-orders-table/redirect-carrier/redirect-carrier.component.html":
  /*!*****************************************************************************************************************************************************************************************************!*\
    !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/raw-loader/dist/cjs.js!./src/app/@shared/render-component/customer-orders-table/redirect-carrier/redirect-carrier.component.html ***!
    \*****************************************************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedRenderComponentCustomerOrdersTableRedirectCarrierRedirectCarrierComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div (click)=\"redirect()\" class=\"redirectBtn\">\n\t<span *ngIf=\"carrier$ | async as carrier\">\n\t\t<img class=\"carrier-image\" alt=\"\" src=\"{{ carrier.logo }}\" />\n\t\t<div class=\"carrier-name\">{{ carrier.firstName }}</div>\n\t</span>\n\t<p>{{ carrierStatusText | translate }}</p>\n</div>\n";
    /***/
  },

  /***/
  "../../node_modules/raw-loader/dist/cjs.js!./src/app/@shared/render-component/customer-orders-table/redirect-product/redirect-product.component.html":
  /*!*****************************************************************************************************************************************************************************************************!*\
    !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/raw-loader/dist/cjs.js!./src/app/@shared/render-component/customer-orders-table/redirect-product/redirect-product.component.html ***!
    \*****************************************************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedRenderComponentCustomerOrdersTableRedirectProductRedirectProductComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngIf=\"product\" (click)=\"redirect()\" class=\"redirectBtn productBtn\">\n\t<p>\n\t\t{{ productTitle }}\n\t\t<span class=\"badge badge-secondary\">{{ product.count }}</span>\n\t</p>\n</div>\n";
    /***/
  },

  /***/
  "../../node_modules/raw-loader/dist/cjs.js!./src/app/@shared/render-component/customer-orders-table/redirect-store/redirect-store.component.html":
  /*!*************************************************************************************************************************************************************************************************!*\
    !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/raw-loader/dist/cjs.js!./src/app/@shared/render-component/customer-orders-table/redirect-store/redirect-store.component.html ***!
    \*************************************************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedRenderComponentCustomerOrdersTableRedirectStoreRedirectStoreComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngIf=\"store$ | async as store\" (click)=\"redirect()\" class=\"redirectBtn\">\n\t<span>\n\t\t<img class=\"warehouse-image\" alt=\"\" src=\"{{ store.logo }}\" />\n\t\t<div class=\"warehouse-name\">{{ store.name }}</div>\n\t</span>\n\t<p>{{ warehouseStatusText | translate }}</p>\n</div>\n";
    /***/
  },

  /***/
  "../../node_modules/raw-loader/dist/cjs.js!./src/app/pages/+customers/+customer/ea-customer-orders/order-cancel/order-cancel.component.html":
  /*!********************************************************************************************************************************************************************************************!*\
    !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/raw-loader/dist/cjs.js!./src/app/pages/+customers/+customer/ea-customer-orders/order-cancel/order-cancel.component.html ***!
    \********************************************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesCustomersCustomerEaCustomerOrdersOrderCancelOrderCancelComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"modal-header\">\n\t<h3>{{ 'CUSTOMERS_VIEW.CANCEL_ORDER' | translate }}</h3>\n\t<button class=\"close\" aria-label=\"Close\" (click)=\"cancel()\">\n\t\t<span aria-hidden=\"true\">&times;</span>\n\t</button>\n</div>\n<div class=\"modal-body\">\n\t<span class=\"cancelBtn\" (click)=\"cancelOrder()\">{{\n\t\t'CUSTOMERS_VIEW.CANCEL_ORDER' | translate\n\t}}</span>\n</div>\n";
    /***/
  },

  /***/
  "../../node_modules/raw-loader/dist/cjs.js!./src/app/pages/+customers/+customer/ea-customer-orders/order-info/order-info.component.html":
  /*!****************************************************************************************************************************************************************************************!*\
    !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/raw-loader/dist/cjs.js!./src/app/pages/+customers/+customer/ea-customer-orders/order-info/order-info.component.html ***!
    \****************************************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesCustomersCustomerEaCustomerOrdersOrderInfoOrderInfoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"modal-header\">\n\t<h3>{{ 'CUSTOMERS_VIEW.ORDER_INFO' | translate }}</h3>\n\t<button class=\"close\" aria-label=\"Close\" (click)=\"cancel()\">\n\t\t<span aria-hidden=\"true\">&times;</span>\n\t</button>\n</div>\n<div *ngIf=\"order$ | async as order\" class=\"modal-body info-content\">\n\t<h6>\n\t\t<strong>{{ 'CUSTOMERS_VIEW.ORDER_ID' | translate }}:</strong> <br />\n\t\t<span (click)=\"redirectToOrderPage()\" class=\"order-redirect\">{{\n\t\t\torder.id\n\t\t}}</span>\n\t</h6>\n\t<h6>\n\t\t<strong>{{ 'CUSTOMERS_VIEW.STORE_ID' | translate }}:</strong> <br />\n\t\t<span (click)=\"redirectToStorePage()\" class=\"order-redirect\">{{\n\t\t\torder.warehouseId\n\t\t}}</span>\n\t</h6>\n\t<h6 *ngIf=\"order.carrierId\">\n\t\t<strong>{{ 'CUSTOMERS_VIEW.CARRIER_ID' | translate }}:</strong> <br />\n\t\t<span (click)=\"redirectToCarrierPage()\" class=\"order-redirect\">{{\n\t\t\torder.carrierId\n\t\t}}</span>\n\t</h6>\n\t<h6 *ngIf=\"!order.carrierId\">\n\t\t<strong>{{ 'CUSTOMERS_VIEW.NO_CARRIER' | translate }}</strong>\n\t</h6>\n\t<div class=\"json-viewer\">\n\t\t<button\n\t\t\t(click)=\"showCode = !showCode\"\n\t\t\tclass=\"btn btn-dark btn-icon pull-left\"\n\t\t\ttype=\"button\"\n\t\t>\n\t\t\t<svg viewBox=\"0 0 24 24\" width=\"24px\">\n\t\t\t\t<path\n\t\t\t\t\t_ngcontent-c20=\"\"\n\t\t\t\t\td=\"M14.6,16.6L19.2,12L14.6,7.4L16,6L22,12L16,18L14.6,16.6M9.4,16.6L4.8,12L9.4,7.4L8,6L2,12L8,18L9.4,16.6Z\"\n\t\t\t\t\tfill=\"#fff\"\n\t\t\t\t></path>\n\t\t\t</svg>\n\t\t</button>\n\n\t\t<div class=\"json-info\" *ngIf=\"showCode\">\n\t\t\t<div>\n\t\t\t\t<pre><code style=\"height:300px\" highlight [language]=\"['json']\" [code]=\"selectedOrder | json\" class=\"iconInfo\"></code></pre>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n";
    /***/
  },

  /***/
  "./src/app/@shared/render-component/customer-orders-table/customer-order-actions/customer-order-actions.component.ts":
  /*!***************************************************************************************************************************!*\
    !*** ./src/app/@shared/render-component/customer-orders-table/customer-order-actions/customer-order-actions.component.ts ***!
    \***************************************************************************************************************************/

  /*! exports provided: CustomerOrderActionsComponent */

  /***/
  function srcAppSharedRenderComponentCustomerOrdersTableCustomerOrderActionsCustomerOrderActionsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomerOrderActionsComponent", function () {
      return CustomerOrderActionsComponent;
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


    var _pages_customers_customer_ea_customer_orders_order_info_order_info_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../pages/+customers/+customer/ea-customer-orders/order-info/order-info.component */
    "./src/app/pages/+customers/+customer/ea-customer-orders/order-info/order-info.component.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _pages_customers_customer_ea_customer_orders_order_cancel_order_cancel_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../pages/+customers/+customer/ea-customer-orders/order-cancel/order-cancel.component */
    "./src/app/pages/+customers/+customer/ea-customer-orders/order-cancel/order-cancel.component.ts");

    var CustomerOrderActionsComponent = /*#__PURE__*/function () {
      function CustomerOrderActionsComponent(modalService) {
        _classCallCheck(this, CustomerOrderActionsComponent);

        this.modalService = modalService;
      }

      _createClass(CustomerOrderActionsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "openInfo",
        value: function openInfo() {
          var activeModal = this.modalService.open(_pages_customers_customer_ea_customer_orders_order_info_order_info_component__WEBPACK_IMPORTED_MODULE_2__["OrderInfoComponent"], {
            size: 'lg',
            container: 'nb-layout'
          });
          var modalComponent = activeModal.componentInstance;
          modalComponent.selectedOrder = this.rowData;
          modalComponent.orderId = this.rowData.id;
          modalComponent.storeId = this.rowData.warehouseId;
          modalComponent.carrierId = this.rowData.carrierId;
        }
      }, {
        key: "openCancel",
        value: function openCancel() {
          var activeModal = this.modalService.open(_pages_customers_customer_ea_customer_orders_order_cancel_order_cancel_component__WEBPACK_IMPORTED_MODULE_4__["OrderCancelComponent"], {
            size: 'sm',
            container: 'nb-layout'
          });
          var modalComponent = activeModal.componentInstance;
          modalComponent.orderId = this.rowData.id;
        }
      }]);

      return CustomerOrderActionsComponent;
    }();

    CustomerOrderActionsComponent.ctorParameters = function () {
      return [{
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CustomerOrderActionsComponent.prototype, "rowData", void 0);
    CustomerOrderActionsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./customer-order-actions.component.html */
      "../../node_modules/raw-loader/dist/cjs.js!./src/app/@shared/render-component/customer-orders-table/customer-order-actions/customer-order-actions.component.html"))["default"]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]])], CustomerOrderActionsComponent);
    /***/
  },

  /***/
  "./src/app/@shared/render-component/customer-orders-table/customer-orders-table.module.ts":
  /*!************************************************************************************************!*\
    !*** ./src/app/@shared/render-component/customer-orders-table/customer-orders-table.module.ts ***!
    \************************************************************************************************/

  /*! exports provided: CustomerOrdersTableModule */

  /***/
  function srcAppSharedRenderComponentCustomerOrdersTableCustomerOrdersTableModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomerOrdersTableModule", function () {
      return CustomerOrdersTableModule;
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


    var _redirect_store_redirect_store_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./redirect-store/redirect-store.component */
    "./src/app/@shared/render-component/customer-orders-table/redirect-store/redirect-store.component.ts");
    /* harmony import */


    var _redirect_carrier_redirect_carrier_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./redirect-carrier/redirect-carrier.component */
    "./src/app/@shared/render-component/customer-orders-table/redirect-carrier/redirect-carrier.component.ts");
    /* harmony import */


    var _redirect_order_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./redirect-order.component */
    "./src/app/@shared/render-component/customer-orders-table/redirect-order.component.ts");
    /* harmony import */


    var _redirect_product_redirect_product_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./redirect-product/redirect-product.component */
    "./src/app/@shared/render-component/customer-orders-table/redirect-product/redirect-product.component.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ngx-translate/core */
    "../../node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _customer_order_actions_customer_order_actions_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./customer-order-actions/customer-order-actions.component */
    "./src/app/@shared/render-component/customer-orders-table/customer-order-actions/customer-order-actions.component.ts");
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/fesm2015/index.js");

    var COMPONENTS = [_redirect_store_redirect_store_component__WEBPACK_IMPORTED_MODULE_4__["RedirectStoreComponent"], _redirect_carrier_redirect_carrier_component__WEBPACK_IMPORTED_MODULE_5__["RedirectCarrierComponent"], _redirect_order_component__WEBPACK_IMPORTED_MODULE_6__["RedirectOrderComponent"], _redirect_product_redirect_product_component__WEBPACK_IMPORTED_MODULE_7__["RedirectProductComponent"], _customer_order_actions_customer_order_actions_component__WEBPACK_IMPORTED_MODULE_9__["CustomerOrderActionsComponent"]];

    var CustomerOrdersTableModule = function CustomerOrdersTableModule() {
      _classCallCheck(this, CustomerOrdersTableModule);
    };

    CustomerOrdersTableModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _theme__WEBPACK_IMPORTED_MODULE_3__["ThemeModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"].forChild(), _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbButtonModule"]],
      declarations: COMPONENTS,
      entryComponents: COMPONENTS,
      exports: COMPONENTS
    })], CustomerOrdersTableModule);
    /***/
  },

  /***/
  "./src/app/@shared/render-component/customer-orders-table/redirect-carrier/redirect-carrier.component.scss":
  /*!*****************************************************************************************************************!*\
    !*** ./src/app/@shared/render-component/customer-orders-table/redirect-carrier/redirect-carrier.component.scss ***!
    \*****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedRenderComponentCustomerOrdersTableRedirectCarrierRedirectCarrierComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".carrier-name {\n  padding-top: 5px;\n  font-weight: bold;\n}\n\n.carrier-image {\n  width: 30px;\n  height: 30px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvZC9Xb3JrL0FuZ3VsYXIvTmV3IGZvbGRlciAoMikvRG9sY2VHcm9jZXJ5L3BhY2thZ2VzL2FkbWluLXdlYi1hbmd1bGFyL3NyYy9hcHAvQHNoYXJlZC9yZW5kZXItY29tcG9uZW50L2N1c3RvbWVyLW9yZGVycy10YWJsZS9yZWRpcmVjdC1jYXJyaWVyL3JlZGlyZWN0LWNhcnJpZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL0BzaGFyZWQvcmVuZGVyLWNvbXBvbmVudC9jdXN0b21lci1vcmRlcnMtdGFibGUvcmVkaXJlY3QtY2Fycmllci9yZWRpcmVjdC1jYXJyaWVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQ0NsQjs7QURFQTtFQUNDLFdBQVc7RUFDWCxZQUFZO0FDQ2IiLCJmaWxlIjoic3JjL2FwcC9Ac2hhcmVkL3JlbmRlci1jb21wb25lbnQvY3VzdG9tZXItb3JkZXJzLXRhYmxlL3JlZGlyZWN0LWNhcnJpZXIvcmVkaXJlY3QtY2Fycmllci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJyaWVyLW5hbWUge1xuXHRwYWRkaW5nLXRvcDogNXB4O1xuXHRmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmNhcnJpZXItaW1hZ2Uge1xuXHR3aWR0aDogMzBweDtcblx0aGVpZ2h0OiAzMHB4O1xufVxuIiwiLmNhcnJpZXItbmFtZSB7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uY2Fycmllci1pbWFnZSB7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG59XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/@shared/render-component/customer-orders-table/redirect-carrier/redirect-carrier.component.ts":
  /*!***************************************************************************************************************!*\
    !*** ./src/app/@shared/render-component/customer-orders-table/redirect-carrier/redirect-carrier.component.ts ***!
    \***************************************************************************************************************/

  /*! exports provided: RedirectCarrierComponent */

  /***/
  function srcAppSharedRenderComponentCustomerOrdersTableRedirectCarrierRedirectCarrierComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RedirectCarrierComponent", function () {
      return RedirectCarrierComponent;
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


    var _core_data_carriers_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../@core/data/carriers.service */
    "./src/app/@core/data/carriers.service.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngx-translate/core */
    "../../node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");

    var RedirectCarrierComponent = /*#__PURE__*/function () {
      function RedirectCarrierComponent(router, carriersService, translate) {
        _classCallCheck(this, RedirectCarrierComponent);

        this.router = router;
        this.carriersService = carriersService;
        this.translate = translate;
      }

      _createClass(RedirectCarrierComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.rowData.carrierId) {
            this.carrier$ = this.carriersService.getCarrierById(this.rowData.carrierId);
          }

          this.carrierStatusText = 'STATUS_TEXT.' + this.rowData.carrierStatusText;
        }
      }, {
        key: "redirect",
        value: function redirect() {
          if (this.rowData.carrierId) {
            this.router.navigate(["carriers/".concat(this.rowData.carrierId)]);
          }
        }
      }]);

      return RedirectCarrierComponent;
    }();

    RedirectCarrierComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _core_data_carriers_service__WEBPACK_IMPORTED_MODULE_3__["CarriersService"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], RedirectCarrierComponent.prototype, "rowData", void 0);
    RedirectCarrierComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./redirect-carrier.component.html */
      "../../node_modules/raw-loader/dist/cjs.js!./src/app/@shared/render-component/customer-orders-table/redirect-carrier/redirect-carrier.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./redirect-carrier.component.scss */
      "./src/app/@shared/render-component/customer-orders-table/redirect-carrier/redirect-carrier.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _core_data_carriers_service__WEBPACK_IMPORTED_MODULE_3__["CarriersService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]])], RedirectCarrierComponent);
    /***/
  },

  /***/
  "./src/app/@shared/render-component/customer-orders-table/redirect-order.component.ts":
  /*!********************************************************************************************!*\
    !*** ./src/app/@shared/render-component/customer-orders-table/redirect-order.component.ts ***!
    \********************************************************************************************/

  /*! exports provided: RedirectOrderComponent */

  /***/
  function srcAppSharedRenderComponentCustomerOrdersTableRedirectOrderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RedirectOrderComponent", function () {
      return RedirectOrderComponent;
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


    var _modules_server_common_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @modules/server.common/utils */
    "../common/src/utils.ts");

    var RedirectOrderComponent = /*#__PURE__*/function () {
      function RedirectOrderComponent(router) {
        _classCallCheck(this, RedirectOrderComponent);

        this.router = router;
      }

      _createClass(RedirectOrderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.orderId = Object(_modules_server_common_utils__WEBPACK_IMPORTED_MODULE_3__["getIdFromTheDate"])(this.rowData);
        }
      }, {
        key: "redirect",
        value: function redirect() {
          if (this.rowData.id) {
            this.router.navigate(["orders/".concat(this.rowData.id)]);
          }
        }
      }]);

      return RedirectOrderComponent;
    }();

    RedirectOrderComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], RedirectOrderComponent.prototype, "rowData", void 0);
    RedirectOrderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: "\n\t\t<button class=\"btn btn-sm btn-outline-secondary\" (click)=\"redirect()\">\n\t\t\t{{ orderId }}\n\t\t</button>\n\t"
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], RedirectOrderComponent);
    /***/
  },

  /***/
  "./src/app/@shared/render-component/customer-orders-table/redirect-product/redirect-product.component.ts":
  /*!***************************************************************************************************************!*\
    !*** ./src/app/@shared/render-component/customer-orders-table/redirect-product/redirect-product.component.ts ***!
    \***************************************************************************************************************/

  /*! exports provided: RedirectProductComponent */

  /***/
  function srcAppSharedRenderComponentCustomerOrdersTableRedirectProductRedirectProductComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RedirectProductComponent", function () {
      return RedirectProductComponent;
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


    var _modules_client_common_angular2_locale_product_locales_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @modules/client.common.angular2/locale/product-locales.service */
    "../common-angular/src/locale/product-locales.service.ts");

    var RedirectProductComponent = /*#__PURE__*/function () {
      function RedirectProductComponent(router, _productLocalesService) {
        _classCallCheck(this, RedirectProductComponent);

        this.router = router;
        this._productLocalesService = _productLocalesService;
      }

      _createClass(RedirectProductComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.rowData.products.length) {
            this.product = this.rowData.products[0];
            this.productTitle = this.localeTranslate(this.rowData.products[0].product.title);
          }
        }
      }, {
        key: "localeTranslate",
        value: function localeTranslate(member) {
          return this._productLocalesService.getTranslate(member);
        }
      }, {
        key: "redirect",
        value: function redirect() {
          if (this.product) {
            this.router.navigate(["products/list/".concat(this.product['product'].id)]);
          }
        }
      }]);

      return RedirectProductComponent;
    }();

    RedirectProductComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _modules_client_common_angular2_locale_product_locales_service__WEBPACK_IMPORTED_MODULE_3__["ProductLocalesService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], RedirectProductComponent.prototype, "rowData", void 0);
    RedirectProductComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./redirect-product.component.html */
      "../../node_modules/raw-loader/dist/cjs.js!./src/app/@shared/render-component/customer-orders-table/redirect-product/redirect-product.component.html"))["default"]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _modules_client_common_angular2_locale_product_locales_service__WEBPACK_IMPORTED_MODULE_3__["ProductLocalesService"]])], RedirectProductComponent);
    /***/
  },

  /***/
  "./src/app/@shared/render-component/customer-orders-table/redirect-store/redirect-store.component.scss":
  /*!*************************************************************************************************************!*\
    !*** ./src/app/@shared/render-component/customer-orders-table/redirect-store/redirect-store.component.scss ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedRenderComponentCustomerOrdersTableRedirectStoreRedirectStoreComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".warehouse-name {\n  padding-top: 5px;\n  font-weight: bold;\n}\n\n.warehouse-image {\n  width: 30px;\n  height: 30px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvZC9Xb3JrL0FuZ3VsYXIvTmV3IGZvbGRlciAoMikvRG9sY2VHcm9jZXJ5L3BhY2thZ2VzL2FkbWluLXdlYi1hbmd1bGFyL3NyYy9hcHAvQHNoYXJlZC9yZW5kZXItY29tcG9uZW50L2N1c3RvbWVyLW9yZGVycy10YWJsZS9yZWRpcmVjdC1zdG9yZS9yZWRpcmVjdC1zdG9yZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvQHNoYXJlZC9yZW5kZXItY29tcG9uZW50L2N1c3RvbWVyLW9yZGVycy10YWJsZS9yZWRpcmVjdC1zdG9yZS9yZWRpcmVjdC1zdG9yZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLGdCQUFnQjtFQUNoQixpQkFBaUI7QUNDbEI7O0FERUE7RUFDQyxXQUFXO0VBQ1gsWUFBWTtBQ0NiIiwiZmlsZSI6InNyYy9hcHAvQHNoYXJlZC9yZW5kZXItY29tcG9uZW50L2N1c3RvbWVyLW9yZGVycy10YWJsZS9yZWRpcmVjdC1zdG9yZS9yZWRpcmVjdC1zdG9yZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53YXJlaG91c2UtbmFtZSB7XG5cdHBhZGRpbmctdG9wOiA1cHg7XG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ud2FyZWhvdXNlLWltYWdlIHtcblx0d2lkdGg6IDMwcHg7XG5cdGhlaWdodDogMzBweDtcbn1cbiIsIi53YXJlaG91c2UtbmFtZSB7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ud2FyZWhvdXNlLWltYWdlIHtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/@shared/render-component/customer-orders-table/redirect-store/redirect-store.component.ts":
  /*!***********************************************************************************************************!*\
    !*** ./src/app/@shared/render-component/customer-orders-table/redirect-store/redirect-store.component.ts ***!
    \***********************************************************************************************************/

  /*! exports provided: RedirectStoreComponent */

  /***/
  function srcAppSharedRenderComponentCustomerOrdersTableRedirectStoreRedirectStoreComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RedirectStoreComponent", function () {
      return RedirectStoreComponent;
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


    var _core_data_warehouses_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../@core/data/warehouses.service */
    "./src/app/@core/data/warehouses.service.ts");

    var RedirectStoreComponent = /*#__PURE__*/function () {
      function RedirectStoreComponent(router, warehousesService) {
        _classCallCheck(this, RedirectStoreComponent);

        this.router = router;
        this.warehousesService = warehousesService;
      }

      _createClass(RedirectStoreComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.store$ = this.warehousesService.getStoreById(this.rowData.warehouseId);
          this.warehouseStatusText = 'STATUS_TEXT.' + this.rowData.warehouseStatusText;
        }
      }, {
        key: "redirect",
        value: function redirect() {
          if (this.rowData.warehouseId) {
            this.router.navigate(["stores/".concat(this.rowData.warehouseId)]);
          }
        }
      }]);

      return RedirectStoreComponent;
    }();

    RedirectStoreComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _core_data_warehouses_service__WEBPACK_IMPORTED_MODULE_3__["WarehousesService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], RedirectStoreComponent.prototype, "rowData", void 0);
    RedirectStoreComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./redirect-store.component.html */
      "../../node_modules/raw-loader/dist/cjs.js!./src/app/@shared/render-component/customer-orders-table/redirect-store/redirect-store.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./redirect-store.component.scss */
      "./src/app/@shared/render-component/customer-orders-table/redirect-store/redirect-store.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _core_data_warehouses_service__WEBPACK_IMPORTED_MODULE_3__["WarehousesService"]])], RedirectStoreComponent);
    /***/
  },

  /***/
  "./src/app/pages/+customers/+customer/ea-customer-orders/order-cancel/order-cancel.component.scss":
  /*!********************************************************************************************************!*\
    !*** ./src/app/pages/+customers/+customer/ea-customer-orders/order-cancel/order-cancel.component.scss ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesCustomersCustomerEaCustomerOrdersOrderCancelOrderCancelComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".cancelBtn {\n  color: #111111;\n  display: inline-block;\n  text-transform: uppercase;\n  width: 100%;\n  cursor: pointer;\n  font-weight: bold;\n  text-align: center;\n  margin: 0 auto;\n  -webkit-box-shadow: inset 0px 1px 0px 0px #ffffff;\n  box-shadow: inset 0px 1px 0px 0px #ffffff;\n  background: -webkit-gradient(linear, left top, left bottom, color-stop(5%, #ffffff), to(#f6f6f6));\n  background: linear-gradient(to bottom, #ffffff 5%, #f6f6f6 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffff', endColorstr='#f6f6f6', GradientType=0);\n  background-color: #ffffff;\n  border-radius: 6px;\n  border: 1px solid #dcdcdc;\n  display: inline-block;\n  cursor: pointer;\n  font-family: Arial;\n  font-size: 15px;\n  font-weight: bold;\n  padding: 6px 24px;\n  text-decoration: none;\n  text-shadow: 0px 1px 0px #ffffff;\n}\n\n.cancelBtn:hover {\n  background: -webkit-gradient(linear, left top, left bottom, color-stop(5%, #f6f6f6), to(#ffffff));\n  background: linear-gradient(to bottom, #f6f6f6 5%, #ffffff 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#f6f6f6', endColorstr='#ffffff', GradientType=0);\n  background-color: #f6f6f6;\n}\n\n.cancelBtn:active {\n  position: relative;\n  top: 1px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvZC9Xb3JrL0FuZ3VsYXIvTmV3IGZvbGRlciAoMikvRG9sY2VHcm9jZXJ5L3BhY2thZ2VzL2FkbWluLXdlYi1hbmd1bGFyL3NyYy9hcHAvcGFnZXMvK2N1c3RvbWVycy8rY3VzdG9tZXIvZWEtY3VzdG9tZXItb3JkZXJzL29yZGVyLWNhbmNlbC9vcmRlci1jYW5jZWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzLytjdXN0b21lcnMvK2N1c3RvbWVyL2VhLWN1c3RvbWVyLW9yZGVycy9vcmRlci1jYW5jZWwvb3JkZXItY2FuY2VsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsY0FBYztFQUNkLHFCQUFxQjtFQUNyQix5QkFBeUI7RUFDekIsV0FBVztFQUNYLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGNBQWM7RUFFZCxpREFBaUQ7RUFDakQseUNBQXlDO0VBWXpDLGlHQUFnRTtFQUFoRSxnRUFBZ0U7RUFDaEUsa0hBQWtIO0VBQ2xILHlCQUF5QjtFQUd6QixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQixnQ0FBZ0M7QUNMakM7O0FEaENBO0VBbURFLGlHQUFnRTtFQUFoRSxnRUFBZ0U7RUFDaEUsa0hBQWtIO0VBQ2xILHlCQUF5QjtBQ1YzQjs7QUQzQ0E7RUF5REUsa0JBQWtCO0VBQ2xCLFFBQVE7QUNWViIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzLytjdXN0b21lcnMvK2N1c3RvbWVyL2VhLWN1c3RvbWVyLW9yZGVycy9vcmRlci1jYW5jZWwvb3JkZXItY2FuY2VsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhbmNlbEJ0biB7XG5cdGNvbG9yOiAjMTExMTExO1xuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cdHdpZHRoOiAxMDAlO1xuXHRjdXJzb3I6IHBvaW50ZXI7XG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdG1hcmdpbjogMCBhdXRvO1xuXHQtbW96LWJveC1zaGFkb3c6IGluc2V0IDBweCAxcHggMHB4IDBweCAjZmZmZmZmO1xuXHQtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDBweCAxcHggMHB4IDBweCAjZmZmZmZmO1xuXHRib3gtc2hhZG93OiBpbnNldCAwcHggMXB4IDBweCAwcHggI2ZmZmZmZjtcblx0YmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChcblx0XHRsaW5lYXIsXG5cdFx0bGVmdCB0b3AsXG5cdFx0bGVmdCBib3R0b20sXG5cdFx0Y29sb3Itc3RvcCgwLjA1LCAjZmZmZmZmKSxcblx0XHRjb2xvci1zdG9wKDEsICNmNmY2ZjYpXG5cdCk7XG5cdGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvcCwgI2ZmZmZmZiA1JSwgI2Y2ZjZmNiAxMDAlKTtcblx0YmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCAjZmZmZmZmIDUlLCAjZjZmNmY2IDEwMCUpO1xuXHRiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQodG9wLCAjZmZmZmZmIDUlLCAjZjZmNmY2IDEwMCUpO1xuXHRiYWNrZ3JvdW5kOiAtbXMtbGluZWFyLWdyYWRpZW50KHRvcCwgI2ZmZmZmZiA1JSwgI2Y2ZjZmNiAxMDAlKTtcblx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2ZmZmZmZiA1JSwgI2Y2ZjZmNiAxMDAlKTtcblx0ZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoc3RhcnRDb2xvcnN0cj0nI2ZmZmZmZicsIGVuZENvbG9yc3RyPScjZjZmNmY2JywgR3JhZGllbnRUeXBlPTApO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuXHQtbW96LWJvcmRlci1yYWRpdXM6IDZweDtcblx0LXdlYmtpdC1ib3JkZXItcmFkaXVzOiA2cHg7XG5cdGJvcmRlci1yYWRpdXM6IDZweDtcblx0Ym9yZGVyOiAxcHggc29saWQgI2RjZGNkYztcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRjdXJzb3I6IHBvaW50ZXI7XG5cdGZvbnQtZmFtaWx5OiBBcmlhbDtcblx0Zm9udC1zaXplOiAxNXB4O1xuXHRmb250LXdlaWdodDogYm9sZDtcblx0cGFkZGluZzogNnB4IDI0cHg7XG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblx0dGV4dC1zaGFkb3c6IDBweCAxcHggMHB4ICNmZmZmZmY7XG5cblx0Jjpob3ZlciB7XG5cdFx0YmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChcblx0XHRcdGxpbmVhcixcblx0XHRcdGxlZnQgdG9wLFxuXHRcdFx0bGVmdCBib3R0b20sXG5cdFx0XHRjb2xvci1zdG9wKDAuMDUsICNmNmY2ZjYpLFxuXHRcdFx0Y29sb3Itc3RvcCgxLCAjZmZmZmZmKVxuXHRcdCk7XG5cdFx0YmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQodG9wLCAjZjZmNmY2IDUlLCAjZmZmZmZmIDEwMCUpO1xuXHRcdGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgI2Y2ZjZmNiA1JSwgI2ZmZmZmZiAxMDAlKTtcblx0XHRiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQodG9wLCAjZjZmNmY2IDUlLCAjZmZmZmZmIDEwMCUpO1xuXHRcdGJhY2tncm91bmQ6IC1tcy1saW5lYXItZ3JhZGllbnQodG9wLCAjZjZmNmY2IDUlLCAjZmZmZmZmIDEwMCUpO1xuXHRcdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNmNmY2ZjYgNSUsICNmZmZmZmYgMTAwJSk7XG5cdFx0ZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoc3RhcnRDb2xvcnN0cj0nI2Y2ZjZmNicsIGVuZENvbG9yc3RyPScjZmZmZmZmJywgR3JhZGllbnRUeXBlPTApO1xuXHRcdGJhY2tncm91bmQtY29sb3I6ICNmNmY2ZjY7XG5cdH1cblxuXHQmOmFjdGl2ZSB7XG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdHRvcDogMXB4O1xuXHR9XG59XG4iLCIuY2FuY2VsQnRuIHtcbiAgY29sb3I6ICMxMTExMTE7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIC1tb3otYm94LXNoYWRvdzogaW5zZXQgMHB4IDFweCAwcHggMHB4ICNmZmZmZmY7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMHB4IDFweCAwcHggMHB4ICNmZmZmZmY7XG4gIGJveC1zaGFkb3c6IGluc2V0IDBweCAxcHggMHB4IDBweCAjZmZmZmZmO1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBjb2xvci1zdG9wKDAuMDUsICNmZmZmZmYpLCBjb2xvci1zdG9wKDEsICNmNmY2ZjYpKTtcbiAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQodG9wLCAjZmZmZmZmIDUlLCAjZjZmNmY2IDEwMCUpO1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsICNmZmZmZmYgNSUsICNmNmY2ZjYgMTAwJSk7XG4gIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCh0b3AsICNmZmZmZmYgNSUsICNmNmY2ZjYgMTAwJSk7XG4gIGJhY2tncm91bmQ6IC1tcy1saW5lYXItZ3JhZGllbnQodG9wLCAjZmZmZmZmIDUlLCAjZjZmNmY2IDEwMCUpO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjZmZmZmZmIDUlLCAjZjZmNmY2IDEwMCUpO1xuICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudChzdGFydENvbG9yc3RyPScjZmZmZmZmJywgZW5kQ29sb3JzdHI9JyNmNmY2ZjYnLCBHcmFkaWVudFR5cGU9MCk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIC1tb3otYm9yZGVyLXJhZGl1czogNnB4O1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDZweDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGNkY2RjO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1mYW1pbHk6IEFyaWFsO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nOiA2cHggMjRweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB0ZXh0LXNoYWRvdzogMHB4IDFweCAwcHggI2ZmZmZmZjtcbn1cblxuLmNhbmNlbEJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgbGVmdCBib3R0b20sIGNvbG9yLXN0b3AoMC4wNSwgI2Y2ZjZmNiksIGNvbG9yLXN0b3AoMSwgI2ZmZmZmZikpO1xuICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCh0b3AsICNmNmY2ZjYgNSUsICNmZmZmZmYgMTAwJSk7XG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgI2Y2ZjZmNiA1JSwgI2ZmZmZmZiAxMDAlKTtcbiAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KHRvcCwgI2Y2ZjZmNiA1JSwgI2ZmZmZmZiAxMDAlKTtcbiAgYmFja2dyb3VuZDogLW1zLWxpbmVhci1ncmFkaWVudCh0b3AsICNmNmY2ZjYgNSUsICNmZmZmZmYgMTAwJSk7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNmNmY2ZjYgNSUsICNmZmZmZmYgMTAwJSk7XG4gIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KHN0YXJ0Q29sb3JzdHI9JyNmNmY2ZjYnLCBlbmRDb2xvcnN0cj0nI2ZmZmZmZicsIEdyYWRpZW50VHlwZT0wKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjZmNjtcbn1cblxuLmNhbmNlbEJ0bjphY3RpdmUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMXB4O1xufVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/pages/+customers/+customer/ea-customer-orders/order-cancel/order-cancel.component.ts":
  /*!******************************************************************************************************!*\
    !*** ./src/app/pages/+customers/+customer/ea-customer-orders/order-cancel/order-cancel.component.ts ***!
    \******************************************************************************************************/

  /*! exports provided: OrderCancelComponent */

  /***/
  function srcAppPagesCustomersCustomerEaCustomerOrdersOrderCancelOrderCancelComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderCancelComponent", function () {
      return OrderCancelComponent;
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


    var _core_data_orders_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../../@core/data/orders.service */
    "./src/app/@core/data/orders.service.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _modules_client_common_angular2_routers_warehouse_orders_router_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @modules/client.common.angular2/routers/warehouse-orders-router.service */
    "../common-angular/src/routers/warehouse-orders-router.service.ts");

    var OrderCancelComponent = /*#__PURE__*/function () {
      function OrderCancelComponent(_orderService, activeModal, warehouseOrderdersRouter) {
        _classCallCheck(this, OrderCancelComponent);

        this._orderService = _orderService;
        this.activeModal = activeModal;
        this.warehouseOrderdersRouter = warehouseOrderdersRouter;
      }

      _createClass(OrderCancelComponent, [{
        key: "cancel",
        value: function cancel() {
          this.activeModal.dismiss('canceled');
        }
      }, {
        key: "cancelOrder",
        value: function cancelOrder() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var cncld;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.warehouseOrderdersRouter.cancel(this.orderId);

                  case 2:
                    cncld = _context.sent;
                    this.cancel();

                  case 4:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return OrderCancelComponent;
    }();

    OrderCancelComponent.ctorParameters = function () {
      return [{
        type: _core_data_orders_service__WEBPACK_IMPORTED_MODULE_2__["OrdersService"]
      }, {
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbActiveModal"]
      }, {
        type: _modules_client_common_angular2_routers_warehouse_orders_router_service__WEBPACK_IMPORTED_MODULE_4__["WarehouseOrdersRouter"]
      }];
    };

    OrderCancelComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./order-cancel.component.html */
      "../../node_modules/raw-loader/dist/cjs.js!./src/app/pages/+customers/+customer/ea-customer-orders/order-cancel/order-cancel.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./order-cancel.component.scss */
      "./src/app/pages/+customers/+customer/ea-customer-orders/order-cancel/order-cancel.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_core_data_orders_service__WEBPACK_IMPORTED_MODULE_2__["OrdersService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbActiveModal"], _modules_client_common_angular2_routers_warehouse_orders_router_service__WEBPACK_IMPORTED_MODULE_4__["WarehouseOrdersRouter"]])], OrderCancelComponent);
    /***/
  },

  /***/
  "./src/app/pages/+customers/+customer/ea-customer-orders/order-info/order-info.component.scss":
  /*!****************************************************************************************************!*\
    !*** ./src/app/pages/+customers/+customer/ea-customer-orders/order-info/order-info.component.scss ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesCustomersCustomerEaCustomerOrdersOrderInfoOrderInfoComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".info-content {\n  overflow: hidden;\n}\n\n.info-content h6 span {\n  color: #009100;\n  cursor: pointer;\n  -webkit-transition: opacity 0.1s ease-in;\n  transition: opacity 0.1s ease-in;\n}\n\n.info-content h6 span:hover {\n  opacity: 0.7;\n}\n\n.info-content .json-viewer button {\n  margin-bottom: 15px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvZC9Xb3JrL0FuZ3VsYXIvTmV3IGZvbGRlciAoMikvRG9sY2VHcm9jZXJ5L3BhY2thZ2VzL2FkbWluLXdlYi1hbmd1bGFyL3NyYy9hcHAvcGFnZXMvK2N1c3RvbWVycy8rY3VzdG9tZXIvZWEtY3VzdG9tZXItb3JkZXJzL29yZGVyLWluZm8vb3JkZXItaW5mby5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvK2N1c3RvbWVycy8rY3VzdG9tZXIvZWEtY3VzdG9tZXItb3JkZXJzL29yZGVyLWluZm8vb3JkZXItaW5mby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLGdCQUFnQjtBQ0NqQjs7QURGQTtFQUlHLGNBQWM7RUFDZCxlQUFlO0VBQ2Ysd0NBQWdDO0VBQWhDLGdDQUFnQztBQ0VuQzs7QURSQTtFQVFJLFlBQVk7QUNJaEI7O0FEWkE7RUFjRyxtQkFBbUI7QUNFdEIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy8rY3VzdG9tZXJzLytjdXN0b21lci9lYS1jdXN0b21lci1vcmRlcnMvb3JkZXItaW5mby9vcmRlci1pbmZvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmluZm8tY29udGVudCB7XG5cdG92ZXJmbG93OiBoaWRkZW47XG5cdGg2IHtcblx0XHRzcGFuIHtcblx0XHRcdGNvbG9yOiAjMDA5MTAwO1xuXHRcdFx0Y3Vyc29yOiBwb2ludGVyO1xuXHRcdFx0dHJhbnNpdGlvbjogb3BhY2l0eSAwLjFzIGVhc2UtaW47XG5cdFx0XHQmOmhvdmVyIHtcblx0XHRcdFx0b3BhY2l0eTogMC43O1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHQuanNvbi12aWV3ZXIge1xuXHRcdGJ1dHRvbiB7XG5cdFx0XHRtYXJnaW4tYm90dG9tOiAxNXB4O1xuXHRcdH1cblx0fVxufVxuIiwiLmluZm8tY29udGVudCB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5pbmZvLWNvbnRlbnQgaDYgc3BhbiB7XG4gIGNvbG9yOiAjMDA5MTAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4xcyBlYXNlLWluO1xufVxuXG4uaW5mby1jb250ZW50IGg2IHNwYW46aG92ZXIge1xuICBvcGFjaXR5OiAwLjc7XG59XG5cbi5pbmZvLWNvbnRlbnQgLmpzb24tdmlld2VyIGJ1dHRvbiB7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/+customers/+customer/ea-customer-orders/order-info/order-info.component.ts":
  /*!**************************************************************************************************!*\
    !*** ./src/app/pages/+customers/+customer/ea-customer-orders/order-info/order-info.component.ts ***!
    \**************************************************************************************************/

  /*! exports provided: OrderInfoComponent */

  /***/
  function srcAppPagesCustomersCustomerEaCustomerOrdersOrderInfoOrderInfoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderInfoComponent", function () {
      return OrderInfoComponent;
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


    var _core_data_orders_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../../@core/data/orders.service */
    "./src/app/@core/data/orders.service.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var OrderInfoComponent = /*#__PURE__*/function () {
      function OrderInfoComponent(_orderService, activeModal, router) {
        _classCallCheck(this, OrderInfoComponent);

        this._orderService = _orderService;
        this.activeModal = activeModal;
        this.router = router;
      }

      _createClass(OrderInfoComponent, [{
        key: "cancel",
        value: function cancel() {
          this.activeModal.dismiss('canceled');
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.order$ = this._orderService.getOrderById(this.orderId);
        }
      }, {
        key: "redirectToOrderPage",
        value: function redirectToOrderPage() {
          this.router.navigate(["/orders/".concat(this.orderId)]);
          this.activeModal.dismiss('canceled');
        }
      }, {
        key: "redirectToStorePage",
        value: function redirectToStorePage() {
          this.router.navigate(["/stores/".concat(this.storeId)]);
          this.activeModal.dismiss('canceled');
        }
      }, {
        key: "redirectToCarrierPage",
        value: function redirectToCarrierPage() {
          this.router.navigate(["/carriers/".concat(this.carrierId)]);
          this.activeModal.dismiss('canceled');
        }
      }]);

      return OrderInfoComponent;
    }();

    OrderInfoComponent.ctorParameters = function () {
      return [{
        type: _core_data_orders_service__WEBPACK_IMPORTED_MODULE_2__["OrdersService"]
      }, {
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbActiveModal"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    OrderInfoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./order-info.component.html */
      "../../node_modules/raw-loader/dist/cjs.js!./src/app/pages/+customers/+customer/ea-customer-orders/order-info/order-info.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./order-info.component.scss */
      "./src/app/pages/+customers/+customer/ea-customer-orders/order-info/order-info.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_core_data_orders_service__WEBPACK_IMPORTED_MODULE_2__["OrdersService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbActiveModal"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])], OrderInfoComponent);
    /***/
  }
}]);
//# sourceMappingURL=default~app-pages-simulation-simulation-module~customer-customer-module~warehouse-warehouse-module-es5.js.map