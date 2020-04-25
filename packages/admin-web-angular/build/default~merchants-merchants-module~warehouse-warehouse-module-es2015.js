(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~merchants-merchants-module~warehouse-warehouse-module"],{

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/@shared/warehouse-product/forms/add-warehouse-products-table/add-warehouse-products-table.component.html":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/raw-loader/dist/cjs.js!./src/app/@shared/warehouse-product/forms/add-warehouse-products-table/add-warehouse-products-table.component.html ***!
  \**************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nb-card [ngClass]=\"boxShadow === 'none' ? 'no-box-shadow' : ''\">\n\t<ng2-smart-table\n\t\t[settings]=\"settingsSmartTable\"\n\t\t[source]=\"sourceSmartTable\"\n\t>\n\t</ng2-smart-table>\n</nb-card>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/@shared/warehouse-product/forms/warehouse-add-choice/warehouse-add-choice.component.html":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/raw-loader/dist/cjs.js!./src/app/@shared/warehouse-product/forms/warehouse-add-choice/warehouse-add-choice.component.html ***!
  \**********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nb-card>\n\t<div class=\"container pt-2 row add-products-modal\">\n\t\t<div class=\"col-6\">\n\t\t\t<button\n\t\t\t\t[ngClass]=\"choiceType == 1 ? 'selected' : ''\"\n\t\t\t\tclass=\"option\"\n\t\t\t\t(click)=\"changeChoice('existing')\"\n\t\t\t\tclass=\"btn btn-outline-secondary p-5\"\n\t\t\t>\n\t\t\t\t{{\n\t\t\t\t\t'WAREHOUSE_VIEW.NEW_PRODUCT.SELECT_FROM_PRODUCTS_CATALOG'\n\t\t\t\t\t\t| translate\n\t\t\t\t}}\n\t\t\t</button>\n\t\t</div>\n\t\t<div class=\"col-6\">\n\t\t\t<button\n\t\t\t\t[ngClass]=\"choiceType == 2 ? 'selected' : ''\"\n\t\t\t\tclass=\"option\"\n\t\t\t\t(click)=\"changeChoice('new')\"\n\t\t\t\tclass=\"btn btn-outline-secondary p-5\"\n\t\t\t>\n\t\t\t\t{{\n\t\t\t\t\t'WAREHOUSE_VIEW.NEW_PRODUCT.CREATE_NEW_PRODUCT' | translate\n\t\t\t\t}}\n\t\t\t</button>\n\t\t</div>\n\t</div>\n</nb-card>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/@shared/warehouse-product/forms/warehouse-products-table/warehouse-products-table.component.html":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/raw-loader/dist/cjs.js!./src/app/@shared/warehouse-product/forms/warehouse-products-table/warehouse-products-table.component.html ***!
  \******************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng2-smart-table\n\t[settings]=\"settingsSmartTable\"\n\t[source]=\"sourceSmartTable\"\n\t(userRowSelect)=\"selectProductTmp($event)\"\n\t(edit)=\"onEdit.emit($event)\"\n\t(delete)=\"onDelete.emit($event)\"\n>\n</ng2-smart-table>\n");

/***/ }),

/***/ "./src/app/@shared/warehouse-product/forms/add-warehouse-products-table/add-warehouse-products-table.component.ts":
/*!************************************************************************************************************************!*\
  !*** ./src/app/@shared/warehouse-product/forms/add-warehouse-products-table/add-warehouse-products-table.component.ts ***!
  \************************************************************************************************************************/
/*! exports provided: AddWarehouseProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddWarehouseProductsComponent", function() { return AddWarehouseProductsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-smart-table */ "./node_modules/ng2-smart-table/fesm2015/ng2-smart-table.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _render_component_price_countInput_price_countInput_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../render-component/price-countInput/price-countInput.component */ "./src/app/@shared/render-component/price-countInput/price-countInput.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _modules_client_common_angular2_routers_warehouse_router_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @modules/client.common.angular2/routers/warehouse-router.service */ "../common-angular/src/routers/warehouse-router.service.ts");
/* harmony import */ var _app_shared_render_component_customer_orders_table_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/@shared/render-component/customer-orders-table/checkbox/checkbox.component */ "./src/app/@shared/render-component/customer-orders-table/checkbox/checkbox.component.ts");









let AddWarehouseProductsComponent = class AddWarehouseProductsComponent {
    constructor(_translateService, warehouseRouter) {
        this._translateService = _translateService;
        this.warehouseRouter = warehouseRouter;
        this.perPage = 5;
        this.sourceSmartTable = new ng2_smart_table__WEBPACK_IMPORTED_MODULE_2__["LocalDataSource"]();
        this.ngDestroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    }
    ngOnInit() {
        this._loadSettingsSmartTable();
    }
    get allWarehouseProducts() {
        return [...this.warehouseProducts];
    }
    productsIsValid() {
        if (this.warehouseProducts) {
            const notRedy = this.warehouseProducts.filter((p) => !p.count ||
                !p.price ||
                (!p['isTakeaway'] && !p['isDeliveryRequired']))[0];
            return notRedy ? false : true;
        }
    }
    loadDataSmartTable(products, warehouseId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.warehouseProducts = products.map((p) => {
                return { product: p.id };
            });
            if (warehouseId) {
                this.warehouse = yield this.warehouseRouter
                    .get(warehouseId)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])())
                    .toPromise();
                if (this.warehouseProducts) {
                    this.warehouseProducts.map((p) => {
                        p['isTakeaway'] = this.warehouse.productsTakeaway;
                        p['isDeliveryRequired'] = this.warehouse.productsDelivery;
                        if (!p['isTakeaway'] && !p['isDeliveryRequired']) {
                            p['isDeliveryRequired'] = true;
                        }
                    });
                }
            }
            const productsVM = products.map((product) => {
                const resObj = {
                    name: product.title,
                    id: product.id,
                    takeProductDelivery: this.warehouse.productsDelivery,
                    takeProductTakeaway: this.warehouse.productsTakeaway,
                };
                if (!resObj.takeProductDelivery && !resObj.takeProductTakeaway) {
                    resObj.takeProductDelivery = true;
                }
                return resObj;
            });
            this.sourceSmartTable.load(productsVM);
        });
    }
    _loadSettingsSmartTable() {
        const columnTitlePrefix = 'WAREHOUSE_VIEW.SAVE.';
        const getTranslate = (name) => this._translateService.get(columnTitlePrefix + name);
        Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["forkJoin"])(getTranslate('PRODUCT_NAME'), getTranslate('PRICE'), getTranslate('COUNT'), getTranslate('DELIVERY'), getTranslate('TAKEAWAY'))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.ngDestroy$))
            .subscribe(([name, price, count, delivery, takeaway]) => {
            this.settingsSmartTable = {
                actions: false,
                hideSubHeader: true,
                columns: {
                    name: {
                        title: name,
                        filter: false,
                    },
                    price: {
                        title: price,
                        type: 'custom',
                        filter: false,
                        renderComponent: _render_component_price_countInput_price_countInput_component__WEBPACK_IMPORTED_MODULE_5__["PriceCountInputComponent"],
                        onComponentInitFunction: (instance) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                            instance.placeholder = price;
                            const id = yield instance.id
                                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])())
                                .toPromise();
                            const warehouseProd = this.warehouseProducts.filter((p) => p.product === id)[0];
                            instance.newValue
                                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.ngDestroy$))
                                .subscribe((v) => {
                                warehouseProd['initialPrice'] = v;
                                warehouseProd['price'] = v;
                            });
                        }),
                    },
                    count: {
                        title: count,
                        type: 'custom',
                        filter: false,
                        renderComponent: _render_component_price_countInput_price_countInput_component__WEBPACK_IMPORTED_MODULE_5__["PriceCountInputComponent"],
                        onComponentInitFunction: (instance) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                            instance.placeholder = count;
                            const id = yield instance.id
                                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])())
                                .toPromise();
                            const warehouseProd = this.warehouseProducts.filter((p) => p.product === id)[0];
                            warehouseProd['count'] = 1;
                            instance.newValue
                                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.ngDestroy$))
                                .subscribe((v) => {
                                warehouseProd['count'] = v;
                            });
                        }),
                    },
                    delivery: {
                        title: delivery,
                        type: 'custom',
                        filter: false,
                        renderComponent: _app_shared_render_component_customer_orders_table_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_8__["CheckboxComponent"],
                        onComponentInitFunction: (instance) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                            instance.type = 'delivery';
                            const id = yield instance.id
                                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])())
                                .toPromise();
                            const warehouseProd = this.warehouseProducts.filter((p) => p.product === id)[0];
                            instance.newValue
                                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.ngDestroy$))
                                .subscribe((res) => {
                                if (res.type === 'delivery') {
                                    warehouseProd['isDeliveryRequired'] = res.checked;
                                }
                            });
                        }),
                    },
                    takeaway: {
                        title: takeaway,
                        type: 'custom',
                        filter: false,
                        renderComponent: _app_shared_render_component_customer_orders_table_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_8__["CheckboxComponent"],
                        onComponentInitFunction: (instance) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                            instance.type = 'takeaway';
                            const id = yield instance.id
                                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])())
                                .toPromise();
                            const warehouseProd = this.warehouseProducts.filter((p) => p.product === id)[0];
                            instance.newValue
                                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.ngDestroy$))
                                .subscribe((res) => {
                                if (res.type === 'takeaway') {
                                    warehouseProd['isTakeaway'] =
                                        res.checked;
                                }
                            });
                        }),
                    },
                },
                pager: {
                    display: true,
                    perPage: this.perPage,
                },
            };
        });
    }
    ngOnDestroy() {
        this.ngDestroy$.next();
        this.ngDestroy$.complete();
    }
};
AddWarehouseProductsComponent.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] },
    { type: _modules_client_common_angular2_routers_warehouse_router_service__WEBPACK_IMPORTED_MODULE_7__["WarehouseRouter"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], AddWarehouseProductsComponent.prototype, "boxShadow", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], AddWarehouseProductsComponent.prototype, "perPage", void 0);
AddWarehouseProductsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ea-add-warehouse-products-table',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./add-warehouse-products-table.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/@shared/warehouse-product/forms/add-warehouse-products-table/add-warehouse-products-table.component.html")).default,
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"],
        _modules_client_common_angular2_routers_warehouse_router_service__WEBPACK_IMPORTED_MODULE_7__["WarehouseRouter"]])
], AddWarehouseProductsComponent);



/***/ }),

/***/ "./src/app/@shared/warehouse-product/forms/add-warehouse-products-table/index.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/@shared/warehouse-product/forms/add-warehouse-products-table/index.ts ***!
  \***************************************************************************************/
/*! exports provided: AddWarehouseProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _add_warehouse_products_table_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-warehouse-products-table.component */ "./src/app/@shared/warehouse-product/forms/add-warehouse-products-table/add-warehouse-products-table.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AddWarehouseProductsComponent", function() { return _add_warehouse_products_table_component__WEBPACK_IMPORTED_MODULE_1__["AddWarehouseProductsComponent"]; });





/***/ }),

/***/ "./src/app/@shared/warehouse-product/forms/index.ts":
/*!**********************************************************!*\
  !*** ./src/app/@shared/warehouse-product/forms/index.ts ***!
  \**********************************************************/
/*! exports provided: WarehouseProductFormsModule, WarehouseAddChoiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _warehouse_product_forms_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./warehouse-product-forms.module */ "./src/app/@shared/warehouse-product/forms/warehouse-product-forms.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WarehouseProductFormsModule", function() { return _warehouse_product_forms_module__WEBPACK_IMPORTED_MODULE_1__["WarehouseProductFormsModule"]; });

/* harmony import */ var _warehouse_add_choice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./warehouse-add-choice */ "./src/app/@shared/warehouse-product/forms/warehouse-add-choice/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WarehouseAddChoiceComponent", function() { return _warehouse_add_choice__WEBPACK_IMPORTED_MODULE_2__["WarehouseAddChoiceComponent"]; });






/***/ }),

/***/ "./src/app/@shared/warehouse-product/forms/warehouse-add-choice/index.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/@shared/warehouse-product/forms/warehouse-add-choice/index.ts ***!
  \*******************************************************************************/
/*! exports provided: WarehouseAddChoiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _warehouse_add_choice_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./warehouse-add-choice.component */ "./src/app/@shared/warehouse-product/forms/warehouse-add-choice/warehouse-add-choice.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WarehouseAddChoiceComponent", function() { return _warehouse_add_choice_component__WEBPACK_IMPORTED_MODULE_1__["WarehouseAddChoiceComponent"]; });





/***/ }),

/***/ "./src/app/@shared/warehouse-product/forms/warehouse-add-choice/warehouse-add-choice.component.scss":
/*!**********************************************************************************************************!*\
  !*** ./src/app/@shared/warehouse-product/forms/warehouse-add-choice/warehouse-add-choice.component.scss ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".option {\n  width: 200px;\n  height: 150px;\n  border: 2px solid #dadfe6;\n  margin: 0 auto;\n  position: relative;\n  text-align: center;\n  color: #2a2a2a;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n  font-weight: 500;\n  font-family: Exo;\n  -webkit-transition: none;\n  transition: none;\n  cursor: default;\n  padding: 0.75rem 1.5rem;\n  font-size: 1rem;\n  line-height: 1.25;\n  border-radius: 0.375rem;\n  padding-top: 63px;\n}\n\n.option:hover {\n  background: #dadfe6;\n}\n\n.selected {\n  background: #dadfe6;\n}\n\n.add-products-modal {\n  font-size: 0.95rem;\n}\n\n.add-products-modal button {\n  text-transform: uppercase;\n  margin: 10%;\n  margin-top: 11%;\n  margin: auto !important !important;\n  width: 244px;\n  white-space: normal;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvZC9Xb3JrL0FuZ3VsYXIvTmV3IGZvbGRlciAoMikvRG9sY2VHcm9jZXJ5L3BhY2thZ2VzL2FkbWluLXdlYi1hbmd1bGFyL3NyYy9hcHAvQHNoYXJlZC93YXJlaG91c2UtcHJvZHVjdC9mb3Jtcy93YXJlaG91c2UtYWRkLWNob2ljZS93YXJlaG91c2UtYWRkLWNob2ljZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvQHNoYXJlZC93YXJlaG91c2UtcHJvZHVjdC9mb3Jtcy93YXJlaG91c2UtYWRkLWNob2ljZS93YXJlaG91c2UtYWRkLWNob2ljZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLFlBQVk7RUFDWixhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsd0JBQXdCO0VBQ3hCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtBQ0NsQjs7QURFQTtFQUNDLG1CQUFtQjtBQ0NwQjs7QURFQTtFQUNDLG1CQUFtQjtBQ0NwQjs7QURFQTtFQUNDLGtCQUFrQjtBQ0NuQjs7QURGQTtFQUlFLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsZUFBZTtFQUNmLGtDQUFrQztFQUNsQyxZQUFZO0VBQ1osbUJBQW1CO0FDRXJCIiwiZmlsZSI6InNyYy9hcHAvQHNoYXJlZC93YXJlaG91c2UtcHJvZHVjdC9mb3Jtcy93YXJlaG91c2UtYWRkLWNob2ljZS93YXJlaG91c2UtYWRkLWNob2ljZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5vcHRpb24ge1xuXHR3aWR0aDogMjAwcHg7XG5cdGhlaWdodDogMTUwcHg7XG5cdGJvcmRlcjogMnB4IHNvbGlkICNkYWRmZTY7XG5cdG1hcmdpbjogMCBhdXRvO1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0Y29sb3I6ICMyYTJhMmE7XG5cdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cdGxldHRlci1zcGFjaW5nOiAwLjRweDtcblx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0Zm9udC1mYW1pbHk6IEV4bztcblx0LXdlYmtpdC10cmFuc2l0aW9uOiBub25lO1xuXHR0cmFuc2l0aW9uOiBub25lO1xuXHRjdXJzb3I6IGRlZmF1bHQ7XG5cdHBhZGRpbmc6IDAuNzVyZW0gMS41cmVtO1xuXHRmb250LXNpemU6IDFyZW07XG5cdGxpbmUtaGVpZ2h0OiAxLjI1O1xuXHRib3JkZXItcmFkaXVzOiAwLjM3NXJlbTtcblx0cGFkZGluZy10b3A6IDYzcHg7XG59XG5cbi5vcHRpb246aG92ZXIge1xuXHRiYWNrZ3JvdW5kOiAjZGFkZmU2O1xufVxuXG4uc2VsZWN0ZWQge1xuXHRiYWNrZ3JvdW5kOiAjZGFkZmU2O1xufVxuXG4uYWRkLXByb2R1Y3RzLW1vZGFsIHtcblx0Zm9udC1zaXplOiAwLjk1cmVtO1xuXG5cdGJ1dHRvbiB7XG5cdFx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblx0XHRtYXJnaW46IDEwJTtcblx0XHRtYXJnaW4tdG9wOiAxMSU7XG5cdFx0bWFyZ2luOiBhdXRvICFpbXBvcnRhbnQgIWltcG9ydGFudDtcblx0XHR3aWR0aDogMjQ0cHg7XG5cdFx0d2hpdGUtc3BhY2U6IG5vcm1hbDtcblx0fVxufVxuIiwiLm9wdGlvbiB7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgYm9yZGVyOiAycHggc29saWQgI2RhZGZlNjtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzJhMmEyYTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LWZhbWlseTogRXhvO1xuICAtd2Via2l0LXRyYW5zaXRpb246IG5vbmU7XG4gIHRyYW5zaXRpb246IG5vbmU7XG4gIGN1cnNvcjogZGVmYXVsdDtcbiAgcGFkZGluZzogMC43NXJlbSAxLjVyZW07XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuMjU7XG4gIGJvcmRlci1yYWRpdXM6IDAuMzc1cmVtO1xuICBwYWRkaW5nLXRvcDogNjNweDtcbn1cblxuLm9wdGlvbjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNkYWRmZTY7XG59XG5cbi5zZWxlY3RlZCB7XG4gIGJhY2tncm91bmQ6ICNkYWRmZTY7XG59XG5cbi5hZGQtcHJvZHVjdHMtbW9kYWwge1xuICBmb250LXNpemU6IDAuOTVyZW07XG59XG5cbi5hZGQtcHJvZHVjdHMtbW9kYWwgYnV0dG9uIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbWFyZ2luOiAxMCU7XG4gIG1hcmdpbi10b3A6IDExJTtcbiAgbWFyZ2luOiBhdXRvICFpbXBvcnRhbnQgIWltcG9ydGFudDtcbiAgd2lkdGg6IDI0NHB4O1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/@shared/warehouse-product/forms/warehouse-add-choice/warehouse-add-choice.component.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/@shared/warehouse-product/forms/warehouse-add-choice/warehouse-add-choice.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: WarehouseAddChoiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WarehouseAddChoiceComponent", function() { return WarehouseAddChoiceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let WarehouseAddChoiceComponent = class WarehouseAddChoiceComponent {
    constructor() {
        this.choice = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    changeChoice(choiceType) {
        this.choiceType = choiceType === 'new' ? 2 : 1;
        this.choice.emit(choiceType);
    }
};
WarehouseAddChoiceComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ea-warehouse-add-choice',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./warehouse-add-choice.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/@shared/warehouse-product/forms/warehouse-add-choice/warehouse-add-choice.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./warehouse-add-choice.component.scss */ "./src/app/@shared/warehouse-product/forms/warehouse-add-choice/warehouse-add-choice.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], WarehouseAddChoiceComponent);



/***/ }),

/***/ "./src/app/@shared/warehouse-product/forms/warehouse-product-forms.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/@shared/warehouse-product/forms/warehouse-product-forms.module.ts ***!
  \***********************************************************************************/
/*! exports provided: WarehouseProductFormsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WarehouseProductFormsModule", function() { return WarehouseProductFormsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var angular2_wizard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-wizard */ "./node_modules/@ever-co/angular2-wizard/dist/index.js");
/* harmony import */ var angular2_wizard__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_wizard__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../@theme */ "./src/app/@theme/index.ts");
/* harmony import */ var _warehouse_add_choice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./warehouse-add-choice */ "./src/app/@shared/warehouse-product/forms/warehouse-add-choice/index.ts");
/* harmony import */ var _add_warehouse_products_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-warehouse-products-table */ "./src/app/@shared/warehouse-product/forms/add-warehouse-products-table/index.ts");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-smart-table */ "./node_modules/ng2-smart-table/fesm2015/ng2-smart-table.js");
/* harmony import */ var _render_component_render_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../render-component/render-components.module */ "./src/app/@shared/render-component/render-components.module.ts");
/* harmony import */ var _warehouse_products_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./warehouse-products-table */ "./src/app/@shared/warehouse-product/forms/warehouse-products-table/index.ts");
/* harmony import */ var _app_shared_render_component_store_products_table_store_products_table_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @app/@shared/render-component/store-products-table/store-products-table.module */ "./src/app/@shared/render-component/store-products-table/store-products-table.module.ts");
/* harmony import */ var _app_shared_render_component_product_categories_product_categories_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @app/@shared/render-component/product-categories/product-categories.module */ "./src/app/@shared/render-component/product-categories/product-categories.module.ts");












const COMPONENTS = [
    _warehouse_add_choice__WEBPACK_IMPORTED_MODULE_5__["WarehouseAddChoiceComponent"],
    _add_warehouse_products_table__WEBPACK_IMPORTED_MODULE_6__["AddWarehouseProductsComponent"],
    _warehouse_products_table__WEBPACK_IMPORTED_MODULE_9__["WarehouseProductsComponent"],
];
let WarehouseProductFormsModule = class WarehouseProductFormsModule {
};
WarehouseProductFormsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _theme__WEBPACK_IMPORTED_MODULE_4__["ThemeModule"],
            angular2_wizard__WEBPACK_IMPORTED_MODULE_3__["FormWizardModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"].forChild(),
            ng2_smart_table__WEBPACK_IMPORTED_MODULE_7__["Ng2SmartTableModule"],
            _render_component_render_components_module__WEBPACK_IMPORTED_MODULE_8__["RenderComponentsModule"],
            _app_shared_render_component_store_products_table_store_products_table_module__WEBPACK_IMPORTED_MODULE_10__["StoreProductsTableModule"],
            _app_shared_render_component_product_categories_product_categories_module__WEBPACK_IMPORTED_MODULE_11__["ProductCategoriesModule"],
        ],
        exports: COMPONENTS,
        declarations: COMPONENTS,
    })
], WarehouseProductFormsModule);



/***/ }),

/***/ "./src/app/@shared/warehouse-product/forms/warehouse-products-table/index.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/@shared/warehouse-product/forms/warehouse-products-table/index.ts ***!
  \***********************************************************************************/
/*! exports provided: WarehouseProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _warehouse_products_table_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./warehouse-products-table.component */ "./src/app/@shared/warehouse-product/forms/warehouse-products-table/warehouse-products-table.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WarehouseProductsComponent", function() { return _warehouse_products_table_component__WEBPACK_IMPORTED_MODULE_1__["WarehouseProductsComponent"]; });





/***/ }),

/***/ "./src/app/@shared/warehouse-product/forms/warehouse-products-table/warehouse-products-table.component.ts":
/*!****************************************************************************************************************!*\
  !*** ./src/app/@shared/warehouse-product/forms/warehouse-products-table/warehouse-products-table.component.ts ***!
  \****************************************************************************************************************/
/*! exports provided: WarehouseProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WarehouseProductsComponent", function() { return WarehouseProductsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-smart-table */ "./node_modules/ng2-smart-table/fesm2015/ng2-smart-table.js");
/* harmony import */ var _app_shared_render_component_store_products_table_store_product_price_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/@shared/render-component/store-products-table/store-product-price.component */ "./src/app/@shared/render-component/store-products-table/store-product-price.component.ts");
/* harmony import */ var _app_shared_render_component_store_products_table_store_product_amount_store_product_amount_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/@shared/render-component/store-products-table/store-product-amount/store-product-amount.component */ "./src/app/@shared/render-component/store-products-table/store-product-amount/store-product-amount.component.ts");
/* harmony import */ var _app_shared_render_component_product_categories_product_categories__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/@shared/render-component/product-categories/product-categories */ "./src/app/@shared/render-component/product-categories/product-categories.ts");
/* harmony import */ var _app_shared_render_component_product_title_redirect_product_title_redirect_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/@shared/render-component/product-title-redirect/product-title-redirect.component */ "./src/app/@shared/render-component/product-title-redirect/product-title-redirect.component.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _modules_client_common_angular2_locale_product_locales_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @modules/client.common.angular2/locale/product-locales.service */ "../common-angular/src/locale/product-locales.service.ts");
/* harmony import */ var _app_core_data_productsCategory_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @app/@core/data/productsCategory.service */ "./src/app/@core/data/productsCategory.service.ts");
/* harmony import */ var _app_shared_render_component_store_products_table_store_product_image_store_product_image_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @app/@shared/render-component/store-products-table/store-product-image/store-product-image.component */ "./src/app/@shared/render-component/store-products-table/store-product-image/store-product-image.component.ts");













let WarehouseProductsComponent = class WarehouseProductsComponent {
    constructor(_translateService, _productLocalesService, _productsCategoryService) {
        this._translateService = _translateService;
        this._productLocalesService = _productLocalesService;
        this._productsCategoryService = _productsCategoryService;
        this.onEdit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onDelete = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.perPage = 5;
        this.selectMode = 'multi';
        this.sourceSmartTable = new ng2_smart_table__WEBPACK_IMPORTED_MODULE_2__["LocalDataSource"]();
        this.selectedProducts = [];
        this.ngDestroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this.categoriesInfo = [];
    }
    get hasSelectedProducts() {
        return this.selectedProducts.length > 0;
    }
    ngOnInit() {
        this._getCategories();
        this._loadSettingsSmartTable();
        this._applyTranslationOnSmartTable();
    }
    ngOnDestroy() {
        this.ngDestroy$.next();
        this.ngDestroy$.complete();
    }
    loadDataSmartTable(products, storeId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const productsVM = products.map((product) => {
                return {
                    id: product.productId,
                    image: this._productLocalesService.getTranslate(product.product['images']),
                    title: this._productLocalesService.getTranslate(product.product['title']),
                    description: this._productLocalesService.getTranslate(product.product['description']),
                    details: this._productLocalesService.getTranslate(product.product['details']),
                    categories: {
                        ids: product.product['categories'],
                        search: this.categoriesInfo &&
                            this.categoriesInfo
                                .filter((c) => product.product['categories'].includes(c.id))
                                .map((c) => this._productLocalesService.getTranslate(c.name))
                                .toString(),
                    },
                    price: product.price,
                    qty: product.count,
                    storeId,
                    product: product.product,
                    allCategories: this.categoriesInfo,
                };
            });
            this.sourceSmartTable.load(productsVM);
        });
    }
    selectProductTmp(ev) {
        this.selectedProducts = ev.selected;
    }
    _getCategories() {
        this._productsCategoryService
            .getCategories()
            .subscribe((categories) => {
            this.categoriesInfo = categories;
        });
    }
    _loadSettingsSmartTable() {
        const columnTitlePrefix = 'WAREHOUSE_VIEW.PRODUCTS_TAB.';
        const getTranslate = (name) => this._translateService.get(columnTitlePrefix + name);
        Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["forkJoin"])(this._translateService.get('Id'), getTranslate('IMAGE'), getTranslate('TITLE'), getTranslate('DESCRIPTION'), getTranslate('DETAILS'), getTranslate('CATEGORY'), getTranslate('PRICE'), getTranslate('QUANTITY'))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["takeUntil"])(this.ngDestroy$))
            .subscribe(([id, image, titleTr, description, details, category, price, quantity,]) => {
            this.settingsSmartTable = {
                mode: 'external',
                actions: {
                    add: false,
                    position: 'left',
                },
                edit: {
                    editButtonContent: '<i class="ion-md-create"></i>',
                },
                delete: {
                    deleteButtonContent: '<i class="ion-md-trash"></i>',
                    confirmDelete: true,
                },
                selectMode: this.selectMode,
                columns: {
                    image: {
                        title: image,
                        type: 'custom',
                        class: 'text-center',
                        renderComponent: _app_shared_render_component_store_products_table_store_product_image_store_product_image_component__WEBPACK_IMPORTED_MODULE_12__["StoreProductImageComponent"],
                        filter: false,
                    },
                    title: {
                        title: titleTr,
                        type: 'custom',
                        renderComponent: _app_shared_render_component_product_title_redirect_product_title_redirect_component__WEBPACK_IMPORTED_MODULE_6__["ProductTitleRedirectComponent"],
                    },
                    description: { title: description },
                    details: { title: details },
                    categories: {
                        title: category,
                        type: 'custom',
                        renderComponent: _app_shared_render_component_product_categories_product_categories__WEBPACK_IMPORTED_MODULE_5__["ProductCategoriesComponent"],
                        filterFunction(cell, search) {
                            if (cell.search.includes(search)) {
                                return true;
                            }
                            else {
                                return false;
                            }
                        },
                    },
                    price: {
                        title: price,
                        type: 'custom',
                        renderComponent: _app_shared_render_component_store_products_table_store_product_price_component__WEBPACK_IMPORTED_MODULE_3__["StoreProductPriceComponent"],
                    },
                    qty: {
                        title: quantity,
                        class: 'text-center',
                        type: 'custom',
                        renderComponent: _app_shared_render_component_store_products_table_store_product_amount_store_product_amount_component__WEBPACK_IMPORTED_MODULE_4__["StoreProductAmountComponent"],
                    },
                },
                pager: {
                    display: true,
                    perPage: this.perPage,
                },
            };
        });
    }
    _applyTranslationOnSmartTable() {
        this._translateService.onLangChange.subscribe(() => {
            this._loadSettingsSmartTable();
        });
    }
};
WarehouseProductsComponent.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"] },
    { type: _modules_client_common_angular2_locale_product_locales_service__WEBPACK_IMPORTED_MODULE_10__["ProductLocalesService"] },
    { type: _app_core_data_productsCategory_service__WEBPACK_IMPORTED_MODULE_11__["ProductsCategoryService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], WarehouseProductsComponent.prototype, "onEdit", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], WarehouseProductsComponent.prototype, "onDelete", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], WarehouseProductsComponent.prototype, "perPage", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], WarehouseProductsComponent.prototype, "selectMode", void 0);
WarehouseProductsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ea-warehouse-products-table',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./warehouse-products-table.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/@shared/warehouse-product/forms/warehouse-products-table/warehouse-products-table.component.html")).default,
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"],
        _modules_client_common_angular2_locale_product_locales_service__WEBPACK_IMPORTED_MODULE_10__["ProductLocalesService"],
        _app_core_data_productsCategory_service__WEBPACK_IMPORTED_MODULE_11__["ProductsCategoryService"]])
], WarehouseProductsComponent);



/***/ })

}]);
//# sourceMappingURL=default~merchants-merchants-module~warehouse-warehouse-module-es2015.js.map