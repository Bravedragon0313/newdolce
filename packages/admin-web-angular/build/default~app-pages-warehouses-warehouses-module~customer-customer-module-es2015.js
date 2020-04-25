(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~app-pages-warehouses-warehouses-module~customer-customer-module"],{

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/@shared/render-component/warehouse-table/status/status.component.html":
/*!***************************************************************************************************************************************************************************!*\
  !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/raw-loader/dist/cjs.js!./src/app/@shared/render-component/warehouse-table/status/status.component.html ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"paid || closed\" class=\"text-center actions-invites-requests\">\n\t<i *ngIf=\"paid\" class=\"ion-md-checkmark paid-icon\"></i>\n\t<i *ngIf=\"closed\" class=\"ion-md-close closed-icon\"></i> {{ text }}\n</div>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/@shared/render-component/warehouse-table/warehouse-actions/warehouse-actions.component.html":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/raw-loader/dist/cjs.js!./src/app/@shared/render-component/warehouse-table/warehouse-actions/warehouse-actions.component.html ***!
  \*************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"iconsCont\">\n\t<h4 class=\"text-center iconBtns\">\n\t\t<i (click)=\"openInfo()\" class=\"fa fa-info-circle infoBtn\"></i>\n\t</h4>\n</div>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/@shared/render-component/warehouse-table/warehouse-email/warehouse-email.component.html":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/raw-loader/dist/cjs.js!./src/app/@shared/render-component/warehouse-table/warehouse-email/warehouse-email.component.html ***!
  \*********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n\t<a href=\"mailto:{{ rowData.email }}\" *ngIf=\"rowData.email.length > 0\">\n\t\t<i class=\"fas fa-envelope\"></i> <span>{{ rowData.email }}</span>\n\t</a>\n</div>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/@shared/render-component/warehouse-table/warehouse-image/warehouse-image.component.html":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/raw-loader/dist/cjs.js!./src/app/@shared/render-component/warehouse-table/warehouse-image/warehouse-image.component.html ***!
  \*********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<img\n\t(click)=\"redirect()\"\n\tclass=\"redirect-image\"\n\t*ngIf=\"imageUrl\"\n\tsrc=\"{{ imageUrl }}\"\n/>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/@shared/render-component/warehouse-table/warehouse-orders-number/warehouse-orders-number.component.html":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/raw-loader/dist/cjs.js!./src/app/@shared/render-component/warehouse-table/warehouse-orders-number/warehouse-orders-number.component.html ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"text-center\">\n\t<div\n\t\t(click)=\"redirect()\"\n\t\tclass=\"badge badge-pill badge-secondary number-qty\"\n\t>\n\t\t{{ numberQTY }}\n\t</div>\n</div>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/@shared/render-component/warehouse-table/warehouse-phone/warehouse-phone.component.html":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/raw-loader/dist/cjs.js!./src/app/@shared/render-component/warehouse-table/warehouse-phone/warehouse-phone.component.html ***!
  \*********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n\t<a href=\"tel:{{ rowData.phone }}\" *ngIf=\"rowData.phone.length > 0\">\n\t\t<i class=\"fas fa-phone-square\"></i> <span>{{ rowData.phone }}</span>\n\t</a>\n</div>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/pages/+warehouses/+warehouse/warehouse-info/warehouse-info.component.html":
/*!*******************************************************************************************************************************************************************************!*\
  !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/raw-loader/dist/cjs.js!./src/app/pages/+warehouses/+warehouse/warehouse-info/warehouse-info.component.html ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\n\t<h4 class=\"title\">{{ 'WAREHOUSES_VIEW.INFO.STORE_INFO' | translate }}</h4>\n\t<button class=\"close\" aria-label=\"Close\" (click)=\"cancel()\">\n\t\t<span aria-hidden=\"true\">&times;</span>\n\t</button>\n</div>\n<div class=\"modal-body\">\n\t<h6>\n\t\t<strong>{{ 'WAREHOUSES_VIEW.INFO.STORE_ID' | translate }}: </strong>\n\t\t<span (click)=\"redirectToWarehousePage()\" class=\"warehouse-redirect\">{{\n\t\t\twarehouse.id\n\t\t}}</span>\n\t</h6>\n\t<div>\n\t\t<h6>\n\t\t\t<strong\n\t\t\t\t>{{ 'WAREHOUSES_VIEW.INFO.STORE_NAME' | translate }}:\n\t\t\t</strong>\n\t\t\t<span\n\t\t\t\t(click)=\"redirectToWarehousePage()\"\n\t\t\t\tclass=\"warehouse-redirect\"\n\t\t\t>\n\t\t\t\t{{ warehouse.name }}\n\t\t\t</span>\n\t\t</h6>\n\t</div>\n</div>\n<div>\n\t<div>\n\t\t<pre><code highlight [language]=\"['json']\" [code]=\"warehouse | json\" class=\"iconInfo\"></code></pre>\n\t</div>\n</div>\n");

/***/ }),

/***/ "./src/app/@shared/render-component/warehouse-table/elapsed/elapsed.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/@shared/render-component/warehouse-table/elapsed/elapsed.component.ts ***!
  \***************************************************************************************/
/*! exports provided: ElapsedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElapsedComponent", function() { return ElapsedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _core_utils_getDifferenceFromTimes___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../@core/utils/getDifferenceFromTimes  */ "./src/app/@core/utils/getDifferenceFromTimes .ts");
/* harmony import */ var _modules_server_common_enums_OrderStatus__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @modules/server.common/enums/OrderStatus */ "../common/src/enums/OrderStatus.ts");
/* harmony import */ var _modules_server_common_enums_OrderCarrierStatus__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @modules/server.common/enums/OrderCarrierStatus */ "../common/src/enums/OrderCarrierStatus.ts");
/* harmony import */ var _modules_server_common_enums_OrderWarehouseStatus__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @modules/server.common/enums/OrderWarehouseStatus */ "../common/src/enums/OrderWarehouseStatus.ts");








let ElapsedComponent = class ElapsedComponent {
    constructor() {
        this.ngDestroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    get notProcessing() {
        return (this.rowData &&
            this.rowData.order &&
            (this.rowData.order.status >= _modules_server_common_enums_OrderStatus__WEBPACK_IMPORTED_MODULE_5__["default"].Delivered ||
                this.rowData.carrierStatus >=
                    _modules_server_common_enums_OrderCarrierStatus__WEBPACK_IMPORTED_MODULE_6__["default"].DeliveryCompleted ||
                this.rowData.warehouseStatus ===
                    _modules_server_common_enums_OrderWarehouseStatus__WEBPACK_IMPORTED_MODULE_7__["default"].GivenToCustomer));
    }
    ngOnInit() {
        if (!this.notProcessing) {
            this.updateTimer();
        }
        else {
            if (this.rowData &&
                this.rowData.order &&
                (this.rowData.order.deliveryTime ||
                    this.rowData.order.finishedProcessingTime)) {
                const start = new Date(this.rowData.order.deliveryTime ||
                    this.rowData.order.finishedProcessingTime);
                const end = new Date(this.rowData.createdAt);
                this.showTime(start, end);
            }
        }
    }
    updateTimer() {
        Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(1, 1000)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.ngDestroy$))
            .subscribe(() => {
            const start = new Date();
            const end = new Date(this.rowData.createdAt);
            this.showTime(start, end);
        });
    }
    showTime(start, end) {
        const time = Object(_core_utils_getDifferenceFromTimes___WEBPACK_IMPORTED_MODULE_4__["getDifferenceFromTimes"])(start, end);
        this.elapsedTime.nativeElement.innerText = time;
    }
    ngOnDestroy() {
        this.ngDestroy$.next();
        this.ngDestroy$.complete();
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('elapsedTime', { static: true }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], ElapsedComponent.prototype, "elapsedTime", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], ElapsedComponent.prototype, "value", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], ElapsedComponent.prototype, "rowData", void 0);
ElapsedComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: ` <span #elapsedTime></span> `,
    })
], ElapsedComponent);



/***/ }),

/***/ "./src/app/@shared/render-component/warehouse-table/status/status.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/@shared/render-component/warehouse-table/status/status.component.ts ***!
  \*************************************************************************************/
/*! exports provided: StatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusComponent", function() { return StatusComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let StatusComponent = class StatusComponent {
    constructor() { }
    ngOnInit() {
        if (this.checkOrderField === 'isPaid') {
            this.paid = this.rowData.isPaid;
        }
        else {
            this.closed = this.rowData.isCancelled;
        }
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], StatusComponent.prototype, "rowData", void 0);
StatusComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./status.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/@shared/render-component/warehouse-table/status/status.component.html")).default,
        styles: ["\n\t\t\t.paid-icon {\n\t\t\t\tcolor: green;\n\t\t\t\tmargin-right: 3px;\n\t\t\t}\n\t\t\t.closed-icon {\n\t\t\t\tcolor: red;\n\t\t\t\tmargin-right: 3px;\n\t\t\t}\n\t\t\t.actions-invites-requests {\n\t\t\t\twidth: 6rem;\n\t\t\t}\n\t\t"]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], StatusComponent);



/***/ }),

/***/ "./src/app/@shared/render-component/warehouse-table/warehouse-actions/warehouse-actions.component.scss":
/*!*************************************************************************************************************!*\
  !*** ./src/app/@shared/render-component/warehouse-table/warehouse-actions/warehouse-actions.component.scss ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".iconsCont {\n  cursor: pointer;\n  margin-top: 11px;\n}\n\n.iconsCont i {\n  font-size: 1.4rem;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvZC9Xb3JrL0FuZ3VsYXIvTmV3IGZvbGRlciAoMikvRG9sY2VHcm9jZXJ5L3BhY2thZ2VzL2FkbWluLXdlYi1hbmd1bGFyL3NyYy9hcHAvQHNoYXJlZC9yZW5kZXItY29tcG9uZW50L3dhcmVob3VzZS10YWJsZS93YXJlaG91c2UtYWN0aW9ucy93YXJlaG91c2UtYWN0aW9ucy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvQHNoYXJlZC9yZW5kZXItY29tcG9uZW50L3dhcmVob3VzZS10YWJsZS93YXJlaG91c2UtYWN0aW9ucy93YXJlaG91c2UtYWN0aW9ucy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLGVBQWU7RUFDZixnQkFBZ0I7QUNDakI7O0FESEE7RUFJRSxpQkFBaUI7QUNHbkIiLCJmaWxlIjoic3JjL2FwcC9Ac2hhcmVkL3JlbmRlci1jb21wb25lbnQvd2FyZWhvdXNlLXRhYmxlL3dhcmVob3VzZS1hY3Rpb25zL3dhcmVob3VzZS1hY3Rpb25zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmljb25zQ29udCB7XG5cdGN1cnNvcjogcG9pbnRlcjtcblx0bWFyZ2luLXRvcDogMTFweDtcblx0aSB7XG5cdFx0Zm9udC1zaXplOiAxLjRyZW07XG5cdH1cbn1cbiIsIi5pY29uc0NvbnQge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbi10b3A6IDExcHg7XG59XG5cbi5pY29uc0NvbnQgaSB7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/@shared/render-component/warehouse-table/warehouse-actions/warehouse-actions.component.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/@shared/render-component/warehouse-table/warehouse-actions/warehouse-actions.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: WarehouseActionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WarehouseActionsComponent", function() { return WarehouseActionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _pages_warehouses_warehouse_warehouse_info_warehouse_info_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../pages/+warehouses/+warehouse/warehouse-info/warehouse-info.component */ "./src/app/pages/+warehouses/+warehouse/warehouse-info/warehouse-info.component.ts");




let WarehouseActionsComponent = class WarehouseActionsComponent {
    constructor(modalService) {
        this.modalService = modalService;
    }
    ngOnInit() { }
    openInfo() {
        const activeModal = this.modalService.open(_pages_warehouses_warehouse_warehouse_info_warehouse_info_component__WEBPACK_IMPORTED_MODULE_3__["WarehouseTableInfoComponent"], { size: 'lg', container: 'nb-layout' });
        const modalComponent = activeModal.componentInstance;
        modalComponent.warehouse = this.rowData.warehouseInfo;
    }
};
WarehouseActionsComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], WarehouseActionsComponent.prototype, "rowData", void 0);
WarehouseActionsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./warehouse-actions.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/@shared/render-component/warehouse-table/warehouse-actions/warehouse-actions.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./warehouse-actions.component.scss */ "./src/app/@shared/render-component/warehouse-table/warehouse-actions/warehouse-actions.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]])
], WarehouseActionsComponent);



/***/ }),

/***/ "./src/app/@shared/render-component/warehouse-table/warehouse-email/warehouse-email.component.scss":
/*!*********************************************************************************************************!*\
  !*** ./src/app/@shared/render-component/warehouse-table/warehouse-email/warehouse-email.component.scss ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("div a {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  text-decoration: none;\n}\n\ndiv a i {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  width: 18px;\n  height: 18px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvZC9Xb3JrL0FuZ3VsYXIvTmV3IGZvbGRlciAoMikvRG9sY2VHcm9jZXJ5L3BhY2thZ2VzL2FkbWluLXdlYi1hbmd1bGFyL3NyYy9hcHAvQHNoYXJlZC9yZW5kZXItY29tcG9uZW50L3dhcmVob3VzZS10YWJsZS93YXJlaG91c2UtZW1haWwvd2FyZWhvdXNlLWVtYWlsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9Ac2hhcmVkL3JlbmRlci1jb21wb25lbnQvd2FyZWhvdXNlLXRhYmxlL3dhcmVob3VzZS1lbWFpbC93YXJlaG91c2UtZW1haWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFRQyx5QkFBbUI7TUFBbkIsc0JBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQixvQkFBYTtFQUFiLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHFCQUFxQjtBQ050Qjs7QURKQTtFQUVFLG9CQUFhO0VBQWIsb0JBQWE7RUFBYixhQUFhO0VBQ2IseUJBQW1CO01BQW5CLHNCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsd0JBQXVCO01BQXZCLHFCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIsV0FBVztFQUNYLFlBQVk7QUNNZCIsImZpbGUiOiJzcmMvYXBwL0BzaGFyZWQvcmVuZGVyLWNvbXBvbmVudC93YXJlaG91c2UtdGFibGUvd2FyZWhvdXNlLWVtYWlsL3dhcmVob3VzZS1lbWFpbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdiBhIHtcblx0aSB7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdHdpZHRoOiAxOHB4O1xuXHRcdGhlaWdodDogMThweDtcblx0fVxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRkaXNwbGF5OiBmbGV4O1xuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4iLCJkaXYgYSB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuZGl2IGEgaSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogMThweDtcbiAgaGVpZ2h0OiAxOHB4O1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/@shared/render-component/warehouse-table/warehouse-email/warehouse-email.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/@shared/render-component/warehouse-table/warehouse-email/warehouse-email.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: WarehouseEmailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WarehouseEmailComponent", function() { return WarehouseEmailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let WarehouseEmailComponent = class WarehouseEmailComponent {
    constructor() { }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], WarehouseEmailComponent.prototype, "rowData", void 0);
WarehouseEmailComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./warehouse-email.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/@shared/render-component/warehouse-table/warehouse-email/warehouse-email.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./warehouse-email.component.scss */ "./src/app/@shared/render-component/warehouse-table/warehouse-email/warehouse-email.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], WarehouseEmailComponent);



/***/ }),

/***/ "./src/app/@shared/render-component/warehouse-table/warehouse-image/warehouse-image.component.scss":
/*!*********************************************************************************************************!*\
  !*** ./src/app/@shared/render-component/warehouse-table/warehouse-image/warehouse-image.component.scss ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("img {\n  width: 64px;\n  height: 64px;\n}\n\n.redirect-image {\n  cursor: pointer;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvZC9Xb3JrL0FuZ3VsYXIvTmV3IGZvbGRlciAoMikvRG9sY2VHcm9jZXJ5L3BhY2thZ2VzL2FkbWluLXdlYi1hbmd1bGFyL3NyYy9hcHAvQHNoYXJlZC9yZW5kZXItY29tcG9uZW50L3dhcmVob3VzZS10YWJsZS93YXJlaG91c2UtaW1hZ2Uvd2FyZWhvdXNlLWltYWdlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9Ac2hhcmVkL3JlbmRlci1jb21wb25lbnQvd2FyZWhvdXNlLXRhYmxlL3dhcmVob3VzZS1pbWFnZS93YXJlaG91c2UtaW1hZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxXQUFXO0VBQ1gsWUFBWTtBQ0NiOztBREVBO0VBQ0MsZUFBZTtBQ0NoQiIsImZpbGUiOiJzcmMvYXBwL0BzaGFyZWQvcmVuZGVyLWNvbXBvbmVudC93YXJlaG91c2UtdGFibGUvd2FyZWhvdXNlLWltYWdlL3dhcmVob3VzZS1pbWFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImltZyB7XG5cdHdpZHRoOiA2NHB4O1xuXHRoZWlnaHQ6IDY0cHg7XG59XG5cbi5yZWRpcmVjdC1pbWFnZSB7XG5cdGN1cnNvcjogcG9pbnRlcjtcbn1cbiIsImltZyB7XG4gIHdpZHRoOiA2NHB4O1xuICBoZWlnaHQ6IDY0cHg7XG59XG5cbi5yZWRpcmVjdC1pbWFnZSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/@shared/render-component/warehouse-table/warehouse-image/warehouse-image.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/@shared/render-component/warehouse-table/warehouse-image/warehouse-image.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: WarehouseImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WarehouseImageComponent", function() { return WarehouseImageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let WarehouseImageComponent = class WarehouseImageComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
        this.imageUrl = this.rowData.image;
    }
    redirect() {
        if (this.redirectPage) {
            this.router.navigate([`${this.redirectPage}/${this.rowData.id}`]);
        }
    }
};
WarehouseImageComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
WarehouseImageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./warehouse-image.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/@shared/render-component/warehouse-table/warehouse-image/warehouse-image.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./warehouse-image.component.scss */ "./src/app/@shared/render-component/warehouse-table/warehouse-image/warehouse-image.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], WarehouseImageComponent);



/***/ }),

/***/ "./src/app/@shared/render-component/warehouse-table/warehouse-orders-number/warehouse-orders-number.component.scss":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/@shared/render-component/warehouse-table/warehouse-orders-number/warehouse-orders-number.component.scss ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".number-qty {\n  cursor: pointer;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvZC9Xb3JrL0FuZ3VsYXIvTmV3IGZvbGRlciAoMikvRG9sY2VHcm9jZXJ5L3BhY2thZ2VzL2FkbWluLXdlYi1hbmd1bGFyL3NyYy9hcHAvQHNoYXJlZC9yZW5kZXItY29tcG9uZW50L3dhcmVob3VzZS10YWJsZS93YXJlaG91c2Utb3JkZXJzLW51bWJlci93YXJlaG91c2Utb3JkZXJzLW51bWJlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvQHNoYXJlZC9yZW5kZXItY29tcG9uZW50L3dhcmVob3VzZS10YWJsZS93YXJlaG91c2Utb3JkZXJzLW51bWJlci93YXJlaG91c2Utb3JkZXJzLW51bWJlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLGVBQWU7QUNDaEIiLCJmaWxlIjoic3JjL2FwcC9Ac2hhcmVkL3JlbmRlci1jb21wb25lbnQvd2FyZWhvdXNlLXRhYmxlL3dhcmVob3VzZS1vcmRlcnMtbnVtYmVyL3dhcmVob3VzZS1vcmRlcnMtbnVtYmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm51bWJlci1xdHkge1xuXHRjdXJzb3I6IHBvaW50ZXI7XG59XG4iLCIubnVtYmVyLXF0eSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/@shared/render-component/warehouse-table/warehouse-orders-number/warehouse-orders-number.component.ts":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/@shared/render-component/warehouse-table/warehouse-orders-number/warehouse-orders-number.component.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: WarehouseOrdersNumberComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WarehouseOrdersNumberComponent", function() { return WarehouseOrdersNumberComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let WarehouseOrdersNumberComponent = class WarehouseOrdersNumberComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
        this.numberQTY = this.rowData.ordersQty;
    }
    redirect() {
        if (this.redirectPage) {
            this.router.navigate([`${this.redirectPage}/${this.rowData.id}`]);
        }
    }
};
WarehouseOrdersNumberComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
WarehouseOrdersNumberComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./warehouse-orders-number.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/@shared/render-component/warehouse-table/warehouse-orders-number/warehouse-orders-number.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./warehouse-orders-number.component.scss */ "./src/app/@shared/render-component/warehouse-table/warehouse-orders-number/warehouse-orders-number.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], WarehouseOrdersNumberComponent);



/***/ }),

/***/ "./src/app/@shared/render-component/warehouse-table/warehouse-phone/warehouse-phone.component.scss":
/*!*********************************************************************************************************!*\
  !*** ./src/app/@shared/render-component/warehouse-table/warehouse-phone/warehouse-phone.component.scss ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("div a {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  text-decoration: none;\n}\n\ndiv a i {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  width: 18px;\n  height: 18px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvZC9Xb3JrL0FuZ3VsYXIvTmV3IGZvbGRlciAoMikvRG9sY2VHcm9jZXJ5L3BhY2thZ2VzL2FkbWluLXdlYi1hbmd1bGFyL3NyYy9hcHAvQHNoYXJlZC9yZW5kZXItY29tcG9uZW50L3dhcmVob3VzZS10YWJsZS93YXJlaG91c2UtcGhvbmUvd2FyZWhvdXNlLXBob25lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9Ac2hhcmVkL3JlbmRlci1jb21wb25lbnQvd2FyZWhvdXNlLXRhYmxlL3dhcmVob3VzZS1waG9uZS93YXJlaG91c2UtcGhvbmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFRQyx5QkFBbUI7TUFBbkIsc0JBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQixvQkFBYTtFQUFiLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHFCQUFxQjtBQ050Qjs7QURKQTtFQUVFLG9CQUFhO0VBQWIsb0JBQWE7RUFBYixhQUFhO0VBQ2IseUJBQW1CO01BQW5CLHNCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsd0JBQXVCO01BQXZCLHFCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIsV0FBVztFQUNYLFlBQVk7QUNNZCIsImZpbGUiOiJzcmMvYXBwL0BzaGFyZWQvcmVuZGVyLWNvbXBvbmVudC93YXJlaG91c2UtdGFibGUvd2FyZWhvdXNlLXBob25lL3dhcmVob3VzZS1waG9uZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdiBhIHtcblx0aSB7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdHdpZHRoOiAxOHB4O1xuXHRcdGhlaWdodDogMThweDtcblx0fVxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRkaXNwbGF5OiBmbGV4O1xuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4iLCJkaXYgYSB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuZGl2IGEgaSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogMThweDtcbiAgaGVpZ2h0OiAxOHB4O1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/@shared/render-component/warehouse-table/warehouse-phone/warehouse-phone.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/@shared/render-component/warehouse-table/warehouse-phone/warehouse-phone.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: WarehousePhoneComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WarehousePhoneComponent", function() { return WarehousePhoneComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let WarehousePhoneComponent = class WarehousePhoneComponent {
    constructor() { }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], WarehousePhoneComponent.prototype, "rowData", void 0);
WarehousePhoneComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./warehouse-phone.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/@shared/render-component/warehouse-table/warehouse-phone/warehouse-phone.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./warehouse-phone.component.scss */ "./src/app/@shared/render-component/warehouse-table/warehouse-phone/warehouse-phone.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], WarehousePhoneComponent);



/***/ }),

/***/ "./src/app/@shared/render-component/warehouse-table/warehouse-table.module.ts":
/*!************************************************************************************!*\
  !*** ./src/app/@shared/render-component/warehouse-table/warehouse-table.module.ts ***!
  \************************************************************************************/
/*! exports provided: WarehouseTableModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WarehouseTableModule", function() { return WarehouseTableModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../@theme */ "./src/app/@theme/index.ts");
/* harmony import */ var _elapsed_elapsed_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./elapsed/elapsed.component */ "./src/app/@shared/render-component/warehouse-table/elapsed/elapsed.component.ts");
/* harmony import */ var _warehouse_actions_warehouse_actions_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./warehouse-actions/warehouse-actions.component */ "./src/app/@shared/render-component/warehouse-table/warehouse-actions/warehouse-actions.component.ts");
/* harmony import */ var ngx_highlightjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-highlightjs */ "./node_modules/ngx-highlightjs/fesm2015/ngx-highlightjs.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _pages_warehouses_warehouse_warehouse_info_warehouse_info_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../pages/+warehouses/+warehouse/warehouse-info/warehouse-info.component */ "./src/app/pages/+warehouses/+warehouse/warehouse-info/warehouse-info.component.ts");
/* harmony import */ var _warehouse_image_warehouse_image_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./warehouse-image/warehouse-image.component */ "./src/app/@shared/render-component/warehouse-table/warehouse-image/warehouse-image.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _warehouse_orders_number_warehouse_orders_number_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./warehouse-orders-number/warehouse-orders-number.component */ "./src/app/@shared/render-component/warehouse-table/warehouse-orders-number/warehouse-orders-number.component.ts");
/* harmony import */ var _status_status_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./status/status.component */ "./src/app/@shared/render-component/warehouse-table/status/status.component.ts");
/* harmony import */ var _warehouse_email_warehouse_email_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./warehouse-email/warehouse-email.component */ "./src/app/@shared/render-component/warehouse-table/warehouse-email/warehouse-email.component.ts");
/* harmony import */ var _warehouse_phone_warehouse_phone_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./warehouse-phone/warehouse-phone.component */ "./src/app/@shared/render-component/warehouse-table/warehouse-phone/warehouse-phone.component.ts");















const COMPONENTS = [
    _elapsed_elapsed_component__WEBPACK_IMPORTED_MODULE_4__["ElapsedComponent"],
    _warehouse_actions_warehouse_actions_component__WEBPACK_IMPORTED_MODULE_5__["WarehouseActionsComponent"],
    _pages_warehouses_warehouse_warehouse_info_warehouse_info_component__WEBPACK_IMPORTED_MODULE_8__["WarehouseTableInfoComponent"],
    _warehouse_image_warehouse_image_component__WEBPACK_IMPORTED_MODULE_9__["WarehouseImageComponent"],
    _warehouse_orders_number_warehouse_orders_number_component__WEBPACK_IMPORTED_MODULE_11__["WarehouseOrdersNumberComponent"],
    _warehouse_email_warehouse_email_component__WEBPACK_IMPORTED_MODULE_13__["WarehouseEmailComponent"],
    _warehouse_phone_warehouse_phone_component__WEBPACK_IMPORTED_MODULE_14__["WarehousePhoneComponent"],
    _status_status_component__WEBPACK_IMPORTED_MODULE_12__["StatusComponent"],
];
let WarehouseTableModule = class WarehouseTableModule {
};
WarehouseTableModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _theme__WEBPACK_IMPORTED_MODULE_3__["ThemeModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"],
            ngx_highlightjs__WEBPACK_IMPORTED_MODULE_6__["HighlightModule"].forRoot({ theme: 'github' }),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forChild(),
        ],
        declarations: COMPONENTS,
        entryComponents: COMPONENTS,
        exports: COMPONENTS,
    })
], WarehouseTableModule);



/***/ }),

/***/ "./src/app/pages/+warehouses/+warehouse/warehouse-info/warehouse-info.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/+warehouses/+warehouse/warehouse-info/warehouse-info.component.scss ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".header {\n  padding: 0px;\n  margin: 0px;\n}\n\n.body {\n  padding: 0px;\n  margin: 0px;\n}\n\n.product-title {\n  color: #009100;\n}\n\n.title {\n  padding: 0px;\n  margin: 0px;\n  text-align: center;\n}\n\n.warehouse-redirect {\n  cursor: pointer;\n  color: #009100;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvZC9Xb3JrL0FuZ3VsYXIvTmV3IGZvbGRlciAoMikvRG9sY2VHcm9jZXJ5L3BhY2thZ2VzL2FkbWluLXdlYi1hbmd1bGFyL3NyYy9hcHAvcGFnZXMvK3dhcmVob3VzZXMvK3dhcmVob3VzZS93YXJlaG91c2UtaW5mby93YXJlaG91c2UtaW5mby5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvK3dhcmVob3VzZXMvK3dhcmVob3VzZS93YXJlaG91c2UtaW5mby93YXJlaG91c2UtaW5mby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNDLFlBQVk7RUFDWixXQUFXO0FDRFo7O0FER0E7RUFDQyxZQUFZO0VBQ1osV0FBVztBQ0FaOztBREVBO0VBQ0MsY0FBYztBQ0NmOztBRENBO0VBQ0MsWUFBWTtFQUNaLFdBQVc7RUFDWCxrQkFBa0I7QUNFbkI7O0FEQ0E7RUFDQyxlQUFlO0VBQ2YsY0FBYztBQ0VmIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvK3dhcmVob3VzZXMvK3dhcmVob3VzZS93YXJlaG91c2UtaW5mby93YXJlaG91c2UtaW5mby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pY29uSW5mbyB7XG59XG4uaGVhZGVyIHtcblx0cGFkZGluZzogMHB4O1xuXHRtYXJnaW46IDBweDtcbn1cbi5ib2R5IHtcblx0cGFkZGluZzogMHB4O1xuXHRtYXJnaW46IDBweDtcbn1cbi5wcm9kdWN0LXRpdGxlIHtcblx0Y29sb3I6ICMwMDkxMDA7XG59XG4udGl0bGUge1xuXHRwYWRkaW5nOiAwcHg7XG5cdG1hcmdpbjogMHB4O1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi53YXJlaG91c2UtcmVkaXJlY3Qge1xuXHRjdXJzb3I6IHBvaW50ZXI7XG5cdGNvbG9yOiAjMDA5MTAwO1xufVxuIiwiLmhlYWRlciB7XG4gIHBhZGRpbmc6IDBweDtcbiAgbWFyZ2luOiAwcHg7XG59XG5cbi5ib2R5IHtcbiAgcGFkZGluZzogMHB4O1xuICBtYXJnaW46IDBweDtcbn1cblxuLnByb2R1Y3QtdGl0bGUge1xuICBjb2xvcjogIzAwOTEwMDtcbn1cblxuLnRpdGxlIHtcbiAgcGFkZGluZzogMHB4O1xuICBtYXJnaW46IDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ud2FyZWhvdXNlLXJlZGlyZWN0IHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogIzAwOTEwMDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/pages/+warehouses/+warehouse/warehouse-info/warehouse-info.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/+warehouses/+warehouse/warehouse-info/warehouse-info.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: WarehouseTableInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WarehouseTableInfoComponent", function() { return WarehouseTableInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let WarehouseTableInfoComponent = class WarehouseTableInfoComponent {
    constructor(activeModal, router) {
        this.activeModal = activeModal;
        this.router = router;
    }
    cancel() {
        this.activeModal.dismiss('canceled');
    }
    ngOnInit() { }
    redirectToWarehousePage() {
        this.router.navigate([`/stores/${this.warehouse.id}`]);
        this.activeModal.dismiss('canceled');
    }
};
WarehouseTableInfoComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
WarehouseTableInfoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./warehouse-info.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/pages/+warehouses/+warehouse/warehouse-info/warehouse-info.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./warehouse-info.component.scss */ "./src/app/pages/+warehouses/+warehouse/warehouse-info/warehouse-info.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], WarehouseTableInfoComponent);



/***/ })

}]);
//# sourceMappingURL=default~app-pages-warehouses-warehouses-module~customer-customer-module-es2015.js.map