(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~app-pages-orders-orders-module~merchants-merchants-module~warehouse-warehouse-module"],{

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/@shared/render-component/store-products-table/store-order-product-amount/store-order-product-amount.component.html":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/raw-loader/dist/cjs.js!./src/app/@shared/render-component/store-products-table/store-order-product-amount/store-order-product-amount.component.html ***!
  \************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"order-input-wrapper text-center\" [nbSpinner]=\"loading\">\n\t<button\n\t\t(click)=\"addProduct()\"\n\t\tclass=\"btn btn-sm btn-secondary p-2 text-center btn-increase\"\n\t>\n\t\t+\n\t</button>\n\t<div class=\"p-2\">\n\t\t<span class=\"badge-dark\">{{ productAmount }}</span>\n\t</div>\n\n\t<button\n\t\t(click)=\"removeProduct()\"\n\t\t[disabled]=\"productAmount <= 1\"\n\t\tclass=\"btn btn-sm btn-secondary p-2 text-center btn-decrease\"\n\t>\n\t\t-\n\t</button>\n</div>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/@shared/render-component/store-products-table/store-product-amount/store-product-amount.component.html":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/raw-loader/dist/cjs.js!./src/app/@shared/render-component/store-products-table/store-product-amount/store-product-amount.component.html ***!
  \************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"order-input-wrapper text-center\" [nbSpinner]=\"loading\">\n\t<button\n\t\t(click)=\"addProduct()\"\n\t\tclass=\"btn btn-sm btn-secondary p-2 text-center btn-increase\"\n\t>\n\t\t+\n\t</button>\n\t<div class=\"p-2\">\n\t\t<span class=\"badge-dark\">{{ productAmount }}</span>\n\t</div>\n\n\t<button\n\t\t(click)=\"removeProduct()\"\n\t\t[disabled]=\"productAmount <= 0\"\n\t\tclass=\"btn btn-sm btn-secondary p-2 text-center btn-decrease\"\n\t>\n\t\t-\n\t</button>\n</div>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/@shared/render-component/store-products-table/store-product-image/store-product-image.component.html":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/raw-loader/dist/cjs.js!./src/app/@shared/render-component/store-products-table/store-product-image/store-product-image.component.html ***!
  \**********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"text-center\">\n\t<img\n\t\t*ngIf=\"value\"\n\t\tsrc=\"{{ value }}\"\n\t\t[ngClass]=\"{ clickable: !rowData.disableImg }\"\n\t\t(click)=\"addProduct()\"\n\t\twidth=\"60\"\n\t/>\n</div>\n");

/***/ }),

/***/ "./src/app/@shared/render-component/store-products-table/store-order-product-amount/store-order-product-amount.component.scss":
/*!************************************************************************************************************************************!*\
  !*** ./src/app/@shared/render-component/store-products-table/store-order-product-amount/store-order-product-amount.component.scss ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".btn-increase {\n  line-height: 0.5 !important;\n}\n\n.btn-decrease {\n  line-height: 0.5 !important;\n  background-color: orange;\n}\n\n.badge-dark {\n  font-size: 11px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvZC9Xb3JrL0FuZ3VsYXIvTmV3IGZvbGRlciAoMikvRG9sY2VHcm9jZXJ5L3BhY2thZ2VzL2FkbWluLXdlYi1hbmd1bGFyL3NyYy9hcHAvQHNoYXJlZC9yZW5kZXItY29tcG9uZW50L3N0b3JlLXByb2R1Y3RzLXRhYmxlL3N0b3JlLW9yZGVyLXByb2R1Y3QtYW1vdW50L3N0b3JlLW9yZGVyLXByb2R1Y3QtYW1vdW50LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9Ac2hhcmVkL3JlbmRlci1jb21wb25lbnQvc3RvcmUtcHJvZHVjdHMtdGFibGUvc3RvcmUtb3JkZXItcHJvZHVjdC1hbW91bnQvc3RvcmUtb3JkZXItcHJvZHVjdC1hbW91bnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQywyQkFBMkI7QUNDNUI7O0FERUE7RUFDQywyQkFBMkI7RUFDM0Isd0JBQXdCO0FDQ3pCOztBREVBO0VBQ0MsZUFBZTtBQ0NoQiIsImZpbGUiOiJzcmMvYXBwL0BzaGFyZWQvcmVuZGVyLWNvbXBvbmVudC9zdG9yZS1wcm9kdWN0cy10YWJsZS9zdG9yZS1vcmRlci1wcm9kdWN0LWFtb3VudC9zdG9yZS1vcmRlci1wcm9kdWN0LWFtb3VudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG4taW5jcmVhc2Uge1xuXHRsaW5lLWhlaWdodDogMC41ICFpbXBvcnRhbnQ7XG59XG5cbi5idG4tZGVjcmVhc2Uge1xuXHRsaW5lLWhlaWdodDogMC41ICFpbXBvcnRhbnQ7XG5cdGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcbn1cblxuLmJhZGdlLWRhcmsge1xuXHRmb250LXNpemU6IDExcHg7XG59XG4iLCIuYnRuLWluY3JlYXNlIHtcbiAgbGluZS1oZWlnaHQ6IDAuNSAhaW1wb3J0YW50O1xufVxuXG4uYnRuLWRlY3JlYXNlIHtcbiAgbGluZS1oZWlnaHQ6IDAuNSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XG59XG5cbi5iYWRnZS1kYXJrIHtcbiAgZm9udC1zaXplOiAxMXB4O1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/@shared/render-component/store-products-table/store-order-product-amount/store-order-product-amount.component.ts":
/*!**********************************************************************************************************************************!*\
  !*** ./src/app/@shared/render-component/store-products-table/store-order-product-amount/store-order-product-amount.component.ts ***!
  \**********************************************************************************************************************************/
/*! exports provided: StoreOrderProductAmountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreOrderProductAmountComponent", function() { return StoreOrderProductAmountComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _modules_client_common_angular2_routers_warehouse_products_router_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @modules/client.common.angular2/routers/warehouse-products-router.service */ "../common-angular/src/routers/warehouse-products-router.service.ts");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var _modules_client_common_angular2_locale_product_locales_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @modules/client.common.angular2/locale/product-locales.service */ "../common-angular/src/locale/product-locales.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _app_shared_confirmation_modal_confirmation_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/@shared/confirmation-modal/confirmation-modal.component */ "./src/app/@shared/confirmation-modal/confirmation-modal.component.ts");
/* harmony import */ var _modules_client_common_angular2_routers_order_router_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @modules/client.common.angular2/routers/order-router.service */ "../common-angular/src/routers/order-router.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");










let StoreOrderProductAmountComponent = class StoreOrderProductAmountComponent {
    constructor(productLocalesService, toasterService, warehouseProductsRouter, modalService, orderRouter) {
        this.productLocalesService = productLocalesService;
        this.toasterService = toasterService;
        this.warehouseProductsRouter = warehouseProductsRouter;
        this.modalService = modalService;
        this.orderRouter = orderRouter;
        this.ngDestroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
    }
    ngOnInit() {
        this.productID = this.rowData.product.id;
        this.storeID = this.rowData.storeId;
        this.storeID = this.rowData.storeId;
        this.productAmount = this.value;
        this.productTitle = this.localeTranslate(this.rowData.product.title);
        this.orderId = this.rowData.orderId;
        this.orderWarehouseId = this.rowData.orderWarehouseId;
        this.availableProducts = this.rowData.warehouseProducts
            .filter((d) => d.product === this.productID)
            .map((d) => d.count)[0];
        this.productObj = [
            {
                productId: this.productID,
                count: 1,
            },
        ];
    }
    localeTranslate(member) {
        return this.productLocalesService.getTranslate(member);
    }
    addProduct() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.availableProducts > 0) {
                const activeModal = this.modalService.open(_app_shared_confirmation_modal_confirmation_modal_component__WEBPACK_IMPORTED_MODULE_6__["ConfimationModalComponent"], {
                    size: 'sm',
                    container: 'nb-layout',
                    backdrop: 'static',
                });
                const modalComponent = activeModal.componentInstance;
                modalComponent.mainText = 'ARE_YOU_SURE_YOU_WANT_TO_INCREASE';
                this.loading = true;
                yield modalComponent.confirmEvent
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(modalComponent.ngDestroy$))
                    .subscribe((dataEvent) => {
                    this.orderRouter
                        .addProducts(this.orderId, this.productObj, this.orderWarehouseId)
                        .then((r) => {
                        this.toasterService.pop(`info`, `Increased amount of the order's product!`);
                    })
                        .catch((err) => {
                        this.toasterService.pop(`error`, `Error!`);
                    });
                    modalComponent.cancel();
                });
            }
            else {
                this.toasterService.pop(`error`, `There are no more available products!`);
            }
            this.loading = false;
        });
    }
    removeProduct() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.productAmount >= 1) {
                const activeModal = this.modalService.open(_app_shared_confirmation_modal_confirmation_modal_component__WEBPACK_IMPORTED_MODULE_6__["ConfimationModalComponent"], {
                    size: 'sm',
                    container: 'nb-layout',
                    backdrop: 'static',
                });
                const modalComponent = activeModal.componentInstance;
                modalComponent.mainText = 'ARE_YOU_SURE_YOU_WANT_TO_DECREASE';
                this.loading = true;
                yield modalComponent.confirmEvent
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(modalComponent.ngDestroy$))
                    .subscribe((dataEvent) => {
                    this.orderRouter
                        .decreaseOrderProducts(this.orderId, this.productObj, this.orderWarehouseId)
                        .then((r) => {
                        this.toasterService.pop(`info`, `Decreased amount of the order's product!`);
                    })
                        .catch((err) => {
                        this.toasterService.pop(`error`, `You can not decrease the qty
							of the product to 0, but you can remove selected product!`);
                    });
                    modalComponent.cancel();
                });
            }
            else {
                this.toasterService.pop(`error`, `There are no products for remove!`);
            }
            this.loading = false;
        });
    }
    ngOnDestroy() {
        this.ngDestroy$.next();
        this.ngDestroy$.complete();
    }
};
StoreOrderProductAmountComponent.ctorParameters = () => [
    { type: _modules_client_common_angular2_locale_product_locales_service__WEBPACK_IMPORTED_MODULE_4__["ProductLocalesService"] },
    { type: angular2_toaster__WEBPACK_IMPORTED_MODULE_3__["ToasterService"] },
    { type: _modules_client_common_angular2_routers_warehouse_products_router_service__WEBPACK_IMPORTED_MODULE_2__["WarehouseProductsRouter"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"] },
    { type: _modules_client_common_angular2_routers_order_router_service__WEBPACK_IMPORTED_MODULE_7__["OrderRouter"] }
];
StoreOrderProductAmountComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./store-order-product-amount.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/@shared/render-component/store-products-table/store-order-product-amount/store-order-product-amount.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./store-order-product-amount.component.scss */ "./src/app/@shared/render-component/store-products-table/store-order-product-amount/store-order-product-amount.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_modules_client_common_angular2_locale_product_locales_service__WEBPACK_IMPORTED_MODULE_4__["ProductLocalesService"],
        angular2_toaster__WEBPACK_IMPORTED_MODULE_3__["ToasterService"],
        _modules_client_common_angular2_routers_warehouse_products_router_service__WEBPACK_IMPORTED_MODULE_2__["WarehouseProductsRouter"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"],
        _modules_client_common_angular2_routers_order_router_service__WEBPACK_IMPORTED_MODULE_7__["OrderRouter"]])
], StoreOrderProductAmountComponent);



/***/ }),

/***/ "./src/app/@shared/render-component/store-products-table/store-product-amount/store-product-amount.component.scss":
/*!************************************************************************************************************************!*\
  !*** ./src/app/@shared/render-component/store-products-table/store-product-amount/store-product-amount.component.scss ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".btn-increase {\n  line-height: 0.5 !important;\n}\n\n.btn-decrease {\n  line-height: 0.5 !important;\n  background-color: orange;\n}\n\n.badge-dark {\n  font-size: 11px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvZC9Xb3JrL0FuZ3VsYXIvTmV3IGZvbGRlciAoMikvRG9sY2VHcm9jZXJ5L3BhY2thZ2VzL2FkbWluLXdlYi1hbmd1bGFyL3NyYy9hcHAvQHNoYXJlZC9yZW5kZXItY29tcG9uZW50L3N0b3JlLXByb2R1Y3RzLXRhYmxlL3N0b3JlLXByb2R1Y3QtYW1vdW50L3N0b3JlLXByb2R1Y3QtYW1vdW50LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9Ac2hhcmVkL3JlbmRlci1jb21wb25lbnQvc3RvcmUtcHJvZHVjdHMtdGFibGUvc3RvcmUtcHJvZHVjdC1hbW91bnQvc3RvcmUtcHJvZHVjdC1hbW91bnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQywyQkFBMkI7QUNDNUI7O0FERUE7RUFDQywyQkFBMkI7RUFDM0Isd0JBQXdCO0FDQ3pCOztBREVBO0VBQ0MsZUFBZTtBQ0NoQiIsImZpbGUiOiJzcmMvYXBwL0BzaGFyZWQvcmVuZGVyLWNvbXBvbmVudC9zdG9yZS1wcm9kdWN0cy10YWJsZS9zdG9yZS1wcm9kdWN0LWFtb3VudC9zdG9yZS1wcm9kdWN0LWFtb3VudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG4taW5jcmVhc2Uge1xuXHRsaW5lLWhlaWdodDogMC41ICFpbXBvcnRhbnQ7XG59XG5cbi5idG4tZGVjcmVhc2Uge1xuXHRsaW5lLWhlaWdodDogMC41ICFpbXBvcnRhbnQ7XG5cdGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcbn1cblxuLmJhZGdlLWRhcmsge1xuXHRmb250LXNpemU6IDExcHg7XG59XG4iLCIuYnRuLWluY3JlYXNlIHtcbiAgbGluZS1oZWlnaHQ6IDAuNSAhaW1wb3J0YW50O1xufVxuXG4uYnRuLWRlY3JlYXNlIHtcbiAgbGluZS1oZWlnaHQ6IDAuNSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XG59XG5cbi5iYWRnZS1kYXJrIHtcbiAgZm9udC1zaXplOiAxMXB4O1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/@shared/render-component/store-products-table/store-product-amount/store-product-amount.component.ts":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/@shared/render-component/store-products-table/store-product-amount/store-product-amount.component.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: StoreProductAmountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreProductAmountComponent", function() { return StoreProductAmountComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _modules_client_common_angular2_routers_warehouse_products_router_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @modules/client.common.angular2/routers/warehouse-products-router.service */ "../common-angular/src/routers/warehouse-products-router.service.ts");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var _modules_client_common_angular2_locale_product_locales_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @modules/client.common.angular2/locale/product-locales.service */ "../common-angular/src/locale/product-locales.service.ts");





let StoreProductAmountComponent = class StoreProductAmountComponent {
    constructor(productLocalesService, toasterService, warehouseProductsRouter) {
        this.productLocalesService = productLocalesService;
        this.toasterService = toasterService;
        this.warehouseProductsRouter = warehouseProductsRouter;
    }
    ngOnInit() {
        this.productID = this.rowData.product.id;
        this.storeID = this.rowData.storeId;
        this.storeID = this.rowData.storeId;
        this.productAmount = this.value;
        this.productTitle = this.localeTranslate(this.rowData.product.title);
    }
    localeTranslate(member) {
        return this.productLocalesService.getTranslate(member);
    }
    addProduct() {
        this.loading = true;
        this.warehouseProductsRouter.increaseCount(this.storeID, this.productID, 1);
        this.toasterService.pop('info', `${this.productTitle} product amound increased!`);
    }
    removeProduct() {
        this.loading = true;
        this.warehouseProductsRouter.decreaseCount(this.storeID, this.productID, 1);
        this.toasterService.pop('info', `${this.productTitle} product amound decreased!`);
    }
};
StoreProductAmountComponent.ctorParameters = () => [
    { type: _modules_client_common_angular2_locale_product_locales_service__WEBPACK_IMPORTED_MODULE_4__["ProductLocalesService"] },
    { type: angular2_toaster__WEBPACK_IMPORTED_MODULE_3__["ToasterService"] },
    { type: _modules_client_common_angular2_routers_warehouse_products_router_service__WEBPACK_IMPORTED_MODULE_2__["WarehouseProductsRouter"] }
];
StoreProductAmountComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./store-product-amount.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/@shared/render-component/store-products-table/store-product-amount/store-product-amount.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./store-product-amount.component.scss */ "./src/app/@shared/render-component/store-products-table/store-product-amount/store-product-amount.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_modules_client_common_angular2_locale_product_locales_service__WEBPACK_IMPORTED_MODULE_4__["ProductLocalesService"],
        angular2_toaster__WEBPACK_IMPORTED_MODULE_3__["ToasterService"],
        _modules_client_common_angular2_routers_warehouse_products_router_service__WEBPACK_IMPORTED_MODULE_2__["WarehouseProductsRouter"]])
], StoreProductAmountComponent);



/***/ }),

/***/ "./src/app/@shared/render-component/store-products-table/store-product-image/store-product-image.component.ts":
/*!********************************************************************************************************************!*\
  !*** ./src/app/@shared/render-component/store-products-table/store-product-image/store-product-image.component.ts ***!
  \********************************************************************************************************************/
/*! exports provided: StoreProductImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreProductImageComponent", function() { return StoreProductImageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _modules_client_common_angular2_routers_warehouse_products_router_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @modules/client.common.angular2/routers/warehouse-products-router.service */ "../common-angular/src/routers/warehouse-products-router.service.ts");



let StoreProductImageComponent = class StoreProductImageComponent {
    constructor(warehouseProductsRouter) {
        this.warehouseProductsRouter = warehouseProductsRouter;
    }
    addProduct() {
        const storeId = this.rowData.storeId;
        const productId = this.rowData.id;
        const disableImg = this.rowData.disableImg;
        if (storeId && productId && !disableImg) {
            this.warehouseProductsRouter.increaseCount(storeId, productId, 1);
        }
        else {
            console.warn("Can't add product.");
        }
    }
};
StoreProductImageComponent.ctorParameters = () => [
    { type: _modules_client_common_angular2_routers_warehouse_products_router_service__WEBPACK_IMPORTED_MODULE_2__["WarehouseProductsRouter"] }
];
StoreProductImageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./store-product-image.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/@shared/render-component/store-products-table/store-product-image/store-product-image.component.html")).default,
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_modules_client_common_angular2_routers_warehouse_products_router_service__WEBPACK_IMPORTED_MODULE_2__["WarehouseProductsRouter"]])
], StoreProductImageComponent);



/***/ }),

/***/ "./src/app/@shared/render-component/store-products-table/store-product-price.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/@shared/render-component/store-products-table/store-product-price.component.ts ***!
  \************************************************************************************************/
/*! exports provided: StoreProductPriceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreProductPriceComponent", function() { return StoreProductPriceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! environments/environment */ "./src/environments/environment.ts");



let StoreProductPriceComponent = class StoreProductPriceComponent {
    constructor() {
        this.currencySymbol = environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].CURRENCY_SYMBOL;
    }
};
StoreProductPriceComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: ` <span>{{ currencySymbol }}{{ value }}</span> `,
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], StoreProductPriceComponent);



/***/ }),

/***/ "./src/app/@shared/render-component/store-products-table/store-product-qty.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/@shared/render-component/store-products-table/store-product-qty.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: StoreProductQtyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreProductQtyComponent", function() { return StoreProductQtyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let StoreProductQtyComponent = class StoreProductQtyComponent {
    constructor() { }
};
StoreProductQtyComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: `
		<div class="text-center">
			<span class="badge-dark">{{ value }}</span>
		</div>
	`,
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], StoreProductQtyComponent);



/***/ }),

/***/ "./src/app/@shared/render-component/store-products-table/store-products-table.module.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/@shared/render-component/store-products-table/store-products-table.module.ts ***!
  \**********************************************************************************************/
/*! exports provided: StoreProductsTableModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreProductsTableModule", function() { return StoreProductsTableModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../@theme */ "./src/app/@theme/index.ts");
/* harmony import */ var _store_product_image_store_product_image_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./store-product-image/store-product-image.component */ "./src/app/@shared/render-component/store-products-table/store-product-image/store-product-image.component.ts");
/* harmony import */ var _store_product_price_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./store-product-price.component */ "./src/app/@shared/render-component/store-products-table/store-product-price.component.ts");
/* harmony import */ var _store_product_qty_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./store-product-qty.component */ "./src/app/@shared/render-component/store-products-table/store-product-qty.component.ts");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/fesm2015/index.js");
/* harmony import */ var _store_product_amount_store_product_amount_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./store-product-amount/store-product-amount.component */ "./src/app/@shared/render-component/store-products-table/store-product-amount/store-product-amount.component.ts");
/* harmony import */ var _store_order_product_amount_store_order_product_amount_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./store-order-product-amount/store-order-product-amount.component */ "./src/app/@shared/render-component/store-products-table/store-order-product-amount/store-order-product-amount.component.ts");
/* harmony import */ var _app_shared_confirmation_modal_confirmation_modal_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @app/@shared/confirmation-modal/confirmation-modal.module */ "./src/app/@shared/confirmation-modal/confirmation-modal.module.ts");











const COMPONENTS = [
    _store_product_image_store_product_image_component__WEBPACK_IMPORTED_MODULE_4__["StoreProductImageComponent"],
    _store_product_price_component__WEBPACK_IMPORTED_MODULE_5__["StoreProductPriceComponent"],
    _store_product_qty_component__WEBPACK_IMPORTED_MODULE_6__["StoreProductQtyComponent"],
    _store_product_amount_store_product_amount_component__WEBPACK_IMPORTED_MODULE_8__["StoreProductAmountComponent"],
    _store_order_product_amount_store_order_product_amount_component__WEBPACK_IMPORTED_MODULE_9__["StoreOrderProductAmountComponent"],
];
let StoreProductsTableModule = class StoreProductsTableModule {
};
StoreProductsTableModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _theme__WEBPACK_IMPORTED_MODULE_3__["ThemeModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbSpinnerModule"],
            _app_shared_confirmation_modal_confirmation_modal_module__WEBPACK_IMPORTED_MODULE_10__["ConfirmationModalModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbButtonModule"],
        ],
        declarations: COMPONENTS,
        entryComponents: COMPONENTS,
        exports: COMPONENTS,
    })
], StoreProductsTableModule);



/***/ })

}]);
//# sourceMappingURL=default~app-pages-orders-orders-module~merchants-merchants-module~warehouse-warehouse-module-es2015.js.map