(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-pages-module"],{

/***/ "./src/app/pages/+info/info.module.guard.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/+info/info.module.guard.ts ***!
  \**************************************************/
/*! exports provided: InfoModuleGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoModuleGuard", function() { return InfoModuleGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_store_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/store.service */ "./src/app/services/store.service.ts");
/* harmony import */ var _modules_server_common_enums_RegistrationSystem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @modules/server.common/enums/RegistrationSystem */ "../common/src/enums/RegistrationSystem.ts");





var InfoModuleGuard = (function () {
    function InfoModuleGuard(store, router) {
        this.store = store;
        this.router = router;
    }
    InfoModuleGuard.prototype.canLoad = function (route) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var isLogged;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.store.isLogged()];
                    case 1:
                        isLogged = _a.sent();
                        if (!isLogged &&
                            this.store.registrationSystem === _modules_server_common_enums_RegistrationSystem__WEBPACK_IMPORTED_MODULE_4__["default"].Enabled) {
                            this.router.navigate(['invite']);
                            return [2, false];
                        }
                        return [2, true];
                }
            });
        });
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

/***/ "./src/app/pages/+invite/invite.module.guard.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/+invite/invite.module.guard.ts ***!
  \******************************************************/
/*! exports provided: InviteModuleGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InviteModuleGuard", function() { return InviteModuleGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_store_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/store.service */ "./src/app/services/store.service.ts");
/* harmony import */ var _modules_server_common_enums_RegistrationSystem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @modules/server.common/enums/RegistrationSystem */ "../common/src/enums/RegistrationSystem.ts");





var InviteModuleGuard = (function () {
    function InviteModuleGuard(store, router) {
        this.store = store;
        this.router = router;
    }
    InviteModuleGuard.prototype.canLoad = function (route) {
        if (this.store.userId != null ||
            this.store.registrationSystem === _modules_server_common_enums_RegistrationSystem__WEBPACK_IMPORTED_MODULE_4__["default"].Disabled) {
            this.router.navigate(['products']);
            return false;
        }
        return true;
    };
    InviteModuleGuard.ctorParameters = function () { return [
        { type: _services_store_service__WEBPACK_IMPORTED_MODULE_3__["Store"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    InviteModuleGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_store_service__WEBPACK_IMPORTED_MODULE_3__["Store"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], InviteModuleGuard);
    return InviteModuleGuard;
}());



/***/ }),

/***/ "./src/app/pages/+merchants/merchants.module.guard.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/+merchants/merchants.module.guard.ts ***!
  \************************************************************/
/*! exports provided: MerchantsPageModuleGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MerchantsPageModuleGuard", function() { return MerchantsPageModuleGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_store_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/store.service */ "./src/app/services/store.service.ts");
/* harmony import */ var _modules_server_common_enums_RegistrationSystem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @modules/server.common/enums/RegistrationSystem */ "../common/src/enums/RegistrationSystem.ts");





var MerchantsPageModuleGuard = (function () {
    function MerchantsPageModuleGuard(store, router) {
        this.store = store;
        this.router = router;
    }
    MerchantsPageModuleGuard.prototype.canLoad = function (route) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var isLogged;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.store.isLogged()];
                    case 1:
                        isLogged = _a.sent();
                        if (!isLogged &&
                            this.store.registrationSystem === _modules_server_common_enums_RegistrationSystem__WEBPACK_IMPORTED_MODULE_4__["default"].Enabled) {
                            this.router.navigate(['invite']);
                            return [2, false];
                        }
                        return [2, true];
                }
            });
        });
    };
    MerchantsPageModuleGuard.ctorParameters = function () { return [
        { type: _services_store_service__WEBPACK_IMPORTED_MODULE_3__["Store"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    MerchantsPageModuleGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_store_service__WEBPACK_IMPORTED_MODULE_3__["Store"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], MerchantsPageModuleGuard);
    return MerchantsPageModuleGuard;
}());



/***/ }),

/***/ "./src/app/pages/+orders-history/orders-history.module.guard.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/+orders-history/orders-history.module.guard.ts ***!
  \**********************************************************************/
/*! exports provided: OrdersHistoryModuleGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersHistoryModuleGuard", function() { return OrdersHistoryModuleGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_store_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/store.service */ "./src/app/services/store.service.ts");




var OrdersHistoryModuleGuard = (function () {
    function OrdersHistoryModuleGuard(store, router) {
        this.store = store;
        this.router = router;
    }
    OrdersHistoryModuleGuard.prototype.canLoad = function (route) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var isLogged;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.store.isLogged()];
                    case 1:
                        isLogged = _a.sent();
                        if (!isLogged) {
                            this.router.navigate(['invite']);
                            return [2, false];
                        }
                        return [2, true];
                }
            });
        });
    };
    OrdersHistoryModuleGuard.ctorParameters = function () { return [
        { type: _services_store_service__WEBPACK_IMPORTED_MODULE_3__["Store"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    OrdersHistoryModuleGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_store_service__WEBPACK_IMPORTED_MODULE_3__["Store"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], OrdersHistoryModuleGuard);
    return OrdersHistoryModuleGuard;
}());



/***/ }),

/***/ "./src/app/pages/+products/+order/+order-info/order-info.module.guard.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/+products/+order/+order-info/order-info.module.guard.ts ***!
  \*******************************************************************************/
/*! exports provided: OrderInfoPageModuleGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderInfoPageModuleGuard", function() { return OrderInfoPageModuleGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_services_store_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/services/store.service */ "./src/app/services/store.service.ts");
/* harmony import */ var _modules_server_common_enums_DeliveryType__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @modules/server.common/enums/DeliveryType */ "../common/src/enums/DeliveryType.ts");





var OrderInfoPageModuleGuard = (function () {
    function OrderInfoPageModuleGuard(store, router) {
        this.store = store;
        this.router = router;
    }
    OrderInfoPageModuleGuard.prototype.canLoad = function (route) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var isLogged;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.store.isLogged()];
                    case 1:
                        isLogged = _a.sent();
                        if (!isLogged) {
                            this.router.navigate(['invite']);
                            return [2, false];
                        }
                        if (this.store.deliveryType === _modules_server_common_enums_DeliveryType__WEBPACK_IMPORTED_MODULE_4__["default"].Takeaway) {
                            this.router.navigate(['order-info-takeaway']);
                            return [2, false];
                        }
                        return [2, true];
                }
            });
        });
    };
    OrderInfoPageModuleGuard.ctorParameters = function () { return [
        { type: app_services_store_service__WEBPACK_IMPORTED_MODULE_3__["Store"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    OrderInfoPageModuleGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [app_services_store_service__WEBPACK_IMPORTED_MODULE_3__["Store"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], OrderInfoPageModuleGuard);
    return OrderInfoPageModuleGuard;
}());



/***/ }),

/***/ "./src/app/pages/+products/+order/takeaway/+page/takeaway-page.module.guard.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/+products/+order/takeaway/+page/takeaway-page.module.guard.ts ***!
  \*************************************************************************************/
/*! exports provided: OrderTakeawayInfoModuleGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderTakeawayInfoModuleGuard", function() { return OrderTakeawayInfoModuleGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_services_store_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/services/store.service */ "./src/app/services/store.service.ts");
/* harmony import */ var _modules_server_common_enums_DeliveryType__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @modules/server.common/enums/DeliveryType */ "../common/src/enums/DeliveryType.ts");





var OrderTakeawayInfoModuleGuard = (function () {
    function OrderTakeawayInfoModuleGuard(store, router) {
        this.store = store;
        this.router = router;
    }
    OrderTakeawayInfoModuleGuard.prototype.canLoad = function (route) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var isLogged;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.store.isLogged()];
                    case 1:
                        isLogged = _a.sent();
                        if (!isLogged) {
                            this.router.navigate(['invite']);
                            return [2, false];
                        }
                        if (this.store.deliveryType === _modules_server_common_enums_DeliveryType__WEBPACK_IMPORTED_MODULE_4__["default"].Delivery) {
                            this.router.navigate(['order-info']);
                            return [2, false];
                        }
                        return [2, true];
                }
            });
        });
    };
    OrderTakeawayInfoModuleGuard.ctorParameters = function () { return [
        { type: app_services_store_service__WEBPACK_IMPORTED_MODULE_3__["Store"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    OrderTakeawayInfoModuleGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [app_services_store_service__WEBPACK_IMPORTED_MODULE_3__["Store"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], OrderTakeawayInfoModuleGuard);
    return OrderTakeawayInfoModuleGuard;
}());



/***/ }),

/***/ "./src/app/pages/+products/products.module.guard.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/+products/products.module.guard.ts ***!
  \**********************************************************/
/*! exports provided: ProductsModuleGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsModuleGuard", function() { return ProductsModuleGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_store_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/store.service */ "./src/app/services/store.service.ts");
/* harmony import */ var _modules_server_common_enums_RegistrationSystem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @modules/server.common/enums/RegistrationSystem */ "../common/src/enums/RegistrationSystem.ts");





var ProductsModuleGuard = (function () {
    function ProductsModuleGuard(store, router) {
        this.store = store;
        this.router = router;
    }
    ProductsModuleGuard.prototype.canLoad = function (route) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var isLogged;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.store.isLogged()];
                    case 1:
                        isLogged = _a.sent();
                        if (!isLogged &&
                            this.store.registrationSystem === _modules_server_common_enums_RegistrationSystem__WEBPACK_IMPORTED_MODULE_4__["default"].Enabled) {
                            this.router.navigate(['invite']);
                            return [2, false];
                        }
                        return [2, true];
                }
            });
        });
    };
    ProductsModuleGuard.ctorParameters = function () { return [
        { type: _services_store_service__WEBPACK_IMPORTED_MODULE_3__["Store"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    ProductsModuleGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_store_service__WEBPACK_IMPORTED_MODULE_3__["Store"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ProductsModuleGuard);
    return ProductsModuleGuard;
}());



/***/ }),

/***/ "./src/app/pages/pages.module.ts":
/*!***************************************!*\
  !*** ./src/app/pages/pages.module.ts ***!
  \***************************************/
/*! exports provided: PagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesModule", function() { return PagesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _products_products_module_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./+products/products.module.guard */ "./src/app/pages/+products/products.module.guard.ts");
/* harmony import */ var _invite_invite_module_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./+invite/invite.module.guard */ "./src/app/pages/+invite/invite.module.guard.ts");
/* harmony import */ var _info_info_module_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./+info/info.module.guard */ "./src/app/pages/+info/info.module.guard.ts");
/* harmony import */ var _modules_client_common_angular2_services_maintenance_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @modules/client.common.angular2/services/maintenance.service */ "../common-angular/src/services/maintenance.service.ts");
/* harmony import */ var _products_order_takeaway_page_takeaway_page_module_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./+products/+order/takeaway/+page/takeaway-page.module.guard */ "./src/app/pages/+products/+order/takeaway/+page/takeaway-page.module.guard.ts");
/* harmony import */ var _products_order_order_info_order_info_module_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./+products/+order/+order-info/order-info.module.guard */ "./src/app/pages/+products/+order/+order-info/order-info.module.guard.ts");
/* harmony import */ var _orders_history_orders_history_module_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./+orders-history/orders-history.module.guard */ "./src/app/pages/+orders-history/orders-history.module.guard.ts");
/* harmony import */ var _merchants_merchants_module_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./+merchants/merchants.module.guard */ "./src/app/pages/+merchants/merchants.module.guard.ts");











var routes = [
    {
        path: 'products',
        loadChildren: function () {
            return Promise.all(/*! import() | products-products-module */[__webpack_require__.e("default~products-order-order-info-order-info-module~products-order-takeaway-page-takeaway-page-modul~e9a8ec62"), __webpack_require__.e("default~by-code-by-code-module~by-location-by-location-module~merchants-merchants-module~products-pr~d4162537"), __webpack_require__.e("default~products-order-takeaway-page-takeaway-page-module~products-product-details-product-details-m~14a53ef9"), __webpack_require__.e("default~by-code-by-code-module~merchants-merchants-module~products-products-module"), __webpack_require__.e("default~products-product-details-product-details-module~products-products-module"), __webpack_require__.e("common"), __webpack_require__.e("products-products-module")]).then(__webpack_require__.bind(null, /*! ./+products/products.module */ "./src/app/pages/+products/products.module.ts")).then(function (m) { return m.ProductsPageModule; });
        },
        canLoad: [_products_products_module_guard__WEBPACK_IMPORTED_MODULE_3__["ProductsModuleGuard"]],
    },
    {
        path: 'products/product-details/:id',
        loadChildren: function () {
            return Promise.all(/*! import() | products-product-details-product-details-module */[__webpack_require__.e("default~products-order-order-info-order-info-module~products-order-takeaway-page-takeaway-page-modul~e9a8ec62"), __webpack_require__.e("default~products-order-takeaway-page-takeaway-page-module~products-product-details-product-details-m~14a53ef9"), __webpack_require__.e("default~products-product-details-product-details-module~products-products-module"), __webpack_require__.e("products-product-details-product-details-module")]).then(__webpack_require__.bind(null, /*! ./+products/product-details/product-details.module */ "./src/app/pages/+products/product-details/product-details.module.ts")).then(function (m) { return m.ProductDetailsPageModule; });
        },
    },
    {
        path: 'orders-history',
        loadChildren: function () {
            return Promise.all(/*! import() | orders-history-orders-history-module */[__webpack_require__.e("default~by-location-by-location-module~orders-history-orders-history-module"), __webpack_require__.e("orders-history-orders-history-module")]).then(__webpack_require__.bind(null, /*! ./+orders-history/orders-history.module */ "./src/app/pages/+orders-history/orders-history.module.ts")).then(function (m) { return m.OrdersHistoryPageModule; });
        },
        canLoad: [_orders_history_orders_history_module_guard__WEBPACK_IMPORTED_MODULE_9__["OrdersHistoryModuleGuard"]],
    },
    {
        path: 'invite',
        loadChildren: function () {
            return __webpack_require__.e(/*! import() | invite-invite-module */ "invite-invite-module").then(__webpack_require__.bind(null, /*! ./+invite/invite.module */ "./src/app/pages/+invite/invite.module.ts")).then(function (m) { return m.InvitePageModule; });
        },
        canLoad: [_invite_invite_module_guard__WEBPACK_IMPORTED_MODULE_4__["InviteModuleGuard"]],
    },
    {
        path: 'info',
        loadChildren: function () {
            return __webpack_require__.e(/*! import() | info-info-module */ "info-info-module").then(__webpack_require__.bind(null, /*! ./+info/info.module */ "./src/app/pages/+info/info.module.ts")).then(function (m) { return m.InfoModule; });
        },
        canLoad: [_info_info_module_guard__WEBPACK_IMPORTED_MODULE_5__["InfoModuleGuard"]],
    },
    {
        path: 'language',
        loadChildren: function () {
            return __webpack_require__.e(/*! import() | language-language-module */ "language-language-module").then(__webpack_require__.bind(null, /*! ./+language/language.module */ "./src/app/pages/+language/language.module.ts")).then(function (m) { return m.LanguagePageModule; });
        },
    },
    {
        path: 'errors',
        loadChildren: function () {
            return __webpack_require__.e(/*! import() | errors-errors-module */ "errors-errors-module").then(__webpack_require__.bind(null, /*! ./+errors/errors.module */ "./src/app/pages/+errors/errors.module.ts")).then(function (m) { return m.ErrorsModule; });
        },
    },
    {
        path: 'order-info',
        loadChildren: function () {
            return Promise.all(/*! import() | products-order-order-info-order-info-module */[__webpack_require__.e("default~products-order-order-info-order-info-module~products-order-takeaway-page-takeaway-page-modul~e9a8ec62"), __webpack_require__.e("products-order-order-info-order-info-module")]).then(__webpack_require__.bind(null, /*! ./+products/+order/+order-info/order-info.module */ "./src/app/pages/+products/+order/+order-info/order-info.module.ts")).then(function (m) { return m.OrderInfoPageModule; });
        },
        canLoad: [_products_order_order_info_order_info_module_guard__WEBPACK_IMPORTED_MODULE_8__["OrderInfoPageModuleGuard"]],
    },
    {
        path: 'order-info-takeaway',
        loadChildren: function () {
            return Promise.all(/*! import() | products-order-takeaway-page-takeaway-page-module */[__webpack_require__.e("default~products-order-order-info-order-info-module~products-order-takeaway-page-takeaway-page-modul~e9a8ec62"), __webpack_require__.e("default~products-order-takeaway-page-takeaway-page-module~products-product-details-product-details-m~14a53ef9"), __webpack_require__.e("products-order-takeaway-page-takeaway-page-module")]).then(__webpack_require__.bind(null, /*! ./+products/+order/takeaway/+page/takeaway-page.module */ "./src/app/pages/+products/+order/takeaway/+page/takeaway-page.module.ts")).then(function (m) { return m.OrderTakeawayInfoPageModule; });
        },
        canLoad: [_products_order_takeaway_page_takeaway_page_module_guard__WEBPACK_IMPORTED_MODULE_7__["OrderTakeawayInfoModuleGuard"]],
    },
    {
        path: 'merchants',
        loadChildren: function () {
            return Promise.all(/*! import() | merchants-merchants-module */[__webpack_require__.e("default~by-code-by-code-module~by-location-by-location-module~merchants-merchants-module~products-pr~d4162537"), __webpack_require__.e("default~by-code-by-code-module~merchants-merchants-module~products-products-module"), __webpack_require__.e("merchants-merchants-module")]).then(__webpack_require__.bind(null, /*! ./+merchants/merchants.module */ "./src/app/pages/+merchants/merchants.module.ts")).then(function (m) { return m.MerchantsPageModule; });
        },
        canLoad: [_merchants_merchants_module_guard__WEBPACK_IMPORTED_MODULE_10__["MerchantsPageModuleGuard"]],
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'invite',
    },
];
var PagesModule = (function () {
    function PagesModule() {
    }
    PagesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            providers: [
                _products_products_module_guard__WEBPACK_IMPORTED_MODULE_3__["ProductsModuleGuard"],
                _invite_invite_module_guard__WEBPACK_IMPORTED_MODULE_4__["InviteModuleGuard"],
                _info_info_module_guard__WEBPACK_IMPORTED_MODULE_5__["InfoModuleGuard"],
                _modules_client_common_angular2_services_maintenance_service__WEBPACK_IMPORTED_MODULE_6__["MaintenanceService"],
                _products_order_takeaway_page_takeaway_page_module_guard__WEBPACK_IMPORTED_MODULE_7__["OrderTakeawayInfoModuleGuard"],
                _products_order_order_info_order_info_module_guard__WEBPACK_IMPORTED_MODULE_8__["OrderInfoPageModuleGuard"],
                _orders_history_orders_history_module_guard__WEBPACK_IMPORTED_MODULE_9__["OrdersHistoryModuleGuard"],
                _merchants_merchants_module_guard__WEBPACK_IMPORTED_MODULE_10__["MerchantsPageModuleGuard"],
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], PagesModule);
    return PagesModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-pages-module.js.map