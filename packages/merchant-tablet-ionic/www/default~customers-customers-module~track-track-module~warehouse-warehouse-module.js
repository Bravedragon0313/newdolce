(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~customers-customers-module~track-track-module~warehouse-warehouse-module"],{

/***/ "./src/services/warehouse-orders.service.ts":
/*!**************************************************!*\
  !*** ./src/services/warehouse-orders.service.ts ***!
  \**************************************************/
/*! exports provided: WarehouseOrdersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WarehouseOrdersService", function() { return WarehouseOrdersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apollo-angular */ "./node_modules/apollo-angular/fesm5/ngApollo.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ "../../node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var WarehouseOrdersService = (function () {
    function WarehouseOrdersService(_apollo) {
        this._apollo = _apollo;
        this._orderProductsMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n\t\tmutation MakeOrder($createInput: OrderCreateInput!) {\n\t\t\tcreateOrder(createInput: $createInput) {\n\t\t\t\t_id\n\t\t\t\t_createdAt\n\t\t\t\t_updatedAt\n\t\t\t\tcarrierStatus\n\t\t\t\tisConfirmed\n\t\t\t\twarehouseId\n\t\t\t\twarehouseStatus\n\t\t\t\tuser {\n\t\t\t\t\t_id\n\t\t\t\t}\n\t\t\t\tcarrier {\n\t\t\t\t\t_id\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t"], ["\n\t\tmutation MakeOrder($createInput: OrderCreateInput!) {\n\t\t\tcreateOrder(createInput: $createInput) {\n\t\t\t\t_id\n\t\t\t\t_createdAt\n\t\t\t\t_updatedAt\n\t\t\t\tcarrierStatus\n\t\t\t\tisConfirmed\n\t\t\t\twarehouseId\n\t\t\t\twarehouseStatus\n\t\t\t\tuser {\n\t\t\t\t\t_id\n\t\t\t\t}\n\t\t\t\tcarrier {\n\t\t\t\t\t_id\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t"])));
    }
    WarehouseOrdersService.prototype.createOrder = function (createInput) {
        return this._apollo
            .mutate({
            mutation: this._orderProductsMutation,
            variables: { createInput: createInput },
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (result) { return result.data.createOrder; }));
    };
    WarehouseOrdersService.prototype.getStoreOrdersTableData = function (storeId, pagingOptions, status) {
        return this._apollo
            .watchQuery({
            query: graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n\t\t\t\t\tquery GetStoreOrdersTableData(\n\t\t\t\t\t\t$storeId: String!\n\t\t\t\t\t\t$pagingOptions: PagingOptionsInput\n\t\t\t\t\t\t$status: String\n\t\t\t\t\t) {\n\t\t\t\t\t\tgetStoreOrdersTableData(\n\t\t\t\t\t\t\tstoreId: $storeId\n\t\t\t\t\t\t\tpagingOptions: $pagingOptions\n\t\t\t\t\t\t\tstatus: $status\n\t\t\t\t\t\t) {\n\t\t\t\t\t\t\tpage\n\t\t\t\t\t\t\torders {\n\t\t\t\t\t\t\t\t_id\n\t\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\t\tcarrierStatus\n\t\t\t\t\t\t\t\tcarrierStatusText\n\t\t\t\t\t\t\t\twarehouseStatusText\n\t\t\t\t\t\t\t\tcreatedAt\n\t\t\t\t\t\t\t\twarehouseStatus\n\t\t\t\t\t\t\t\tdeliveryTime\n\t\t\t\t\t\t\t\tstatus\n\t\t\t\t\t\t\t\tisConfirmed\n\t\t\t\t\t\t\t\tfinishedProcessingTime\n\t\t\t\t\t\t\t\tisCancelled\n\t\t\t\t\t\t\t\tisPaid\n\t\t\t\t\t\t\t\torderType\n\t\t\t\t\t\t\t\torderNumber\n\t\t\t\t\t\t\t\t_createdAt\n\t\t\t\t\t\t\t\twarehouseId\n\t\t\t\t\t\t\t\tuser {\n\t\t\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\t\t\t_id\n\t\t\t\t\t\t\t\t\tfirstName\n\t\t\t\t\t\t\t\t\tlastName\n\t\t\t\t\t\t\t\t\tphone\n\t\t\t\t\t\t\t\t\tgeoLocation {\n\t\t\t\t\t\t\t\t\t\tstreetAddress\n\t\t\t\t\t\t\t\t\t\thouse\n\t\t\t\t\t\t\t\t\t\tpostcode\n\t\t\t\t\t\t\t\t\t\tcountryName\n\t\t\t\t\t\t\t\t\t\tcity\n\t\t\t\t\t\t\t\t\t\tloc {\n\t\t\t\t\t\t\t\t\t\t\tcoordinates\n\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\twarehouse {\n\t\t\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\t\t\t_id\n\t\t\t\t\t\t\t\t\tname\n\t\t\t\t\t\t\t\t\tgeoLocation {\n\t\t\t\t\t\t\t\t\t\thouse\n\t\t\t\t\t\t\t\t\t\tpostcode\n\t\t\t\t\t\t\t\t\t\tcountryName\n\t\t\t\t\t\t\t\t\t\tcity\n\t\t\t\t\t\t\t\t\t\tloc {\n\t\t\t\t\t\t\t\t\t\t\tcoordinates\n\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\tcarrier {\n\t\t\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\t\t\tlogo\n\t\t\t\t\t\t\t\t\temail\n\t\t\t\t\t\t\t\t\tfirstName\n\t\t\t\t\t\t\t\t\tlastName\n\t\t\t\t\t\t\t\t\tapartment\n\t\t\t\t\t\t\t\t\tphone\n\t\t\t\t\t\t\t\t\tgeoLocation {\n\t\t\t\t\t\t\t\t\t\tcity\n\t\t\t\t\t\t\t\t\t\tstreetAddress\n\t\t\t\t\t\t\t\t\t\thouse\n\t\t\t\t\t\t\t\t\t\tloc {\n\t\t\t\t\t\t\t\t\t\t\tcoordinates\n\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\tproducts {\n\t\t\t\t\t\t\t\t\tcount\n\t\t\t\t\t\t\t\t\tprice\n\t\t\t\t\t\t\t\t\tproduct {\n\t\t\t\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\t\t\t\t_id\n\t\t\t\t\t\t\t\t\t\ttitle {\n\t\t\t\t\t\t\t\t\t\t\tlocale\n\t\t\t\t\t\t\t\t\t\t\tvalue\n\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t\tdescription {\n\t\t\t\t\t\t\t\t\t\t\tlocale\n\t\t\t\t\t\t\t\t\t\t\tvalue\n\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t\tdetails {\n\t\t\t\t\t\t\t\t\t\t\tlocale\n\t\t\t\t\t\t\t\t\t\t\tvalue\n\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t\timages {\n\t\t\t\t\t\t\t\t\t\t\tlocale\n\t\t\t\t\t\t\t\t\t\t\turl\n\t\t\t\t\t\t\t\t\t\t\twidth\n\t\t\t\t\t\t\t\t\t\t\theight\n\t\t\t\t\t\t\t\t\t\t\torientation\n\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t"], ["\n\t\t\t\t\tquery GetStoreOrdersTableData(\n\t\t\t\t\t\t$storeId: String!\n\t\t\t\t\t\t$pagingOptions: PagingOptionsInput\n\t\t\t\t\t\t$status: String\n\t\t\t\t\t) {\n\t\t\t\t\t\tgetStoreOrdersTableData(\n\t\t\t\t\t\t\tstoreId: $storeId\n\t\t\t\t\t\t\tpagingOptions: $pagingOptions\n\t\t\t\t\t\t\tstatus: $status\n\t\t\t\t\t\t) {\n\t\t\t\t\t\t\tpage\n\t\t\t\t\t\t\torders {\n\t\t\t\t\t\t\t\t_id\n\t\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\t\tcarrierStatus\n\t\t\t\t\t\t\t\tcarrierStatusText\n\t\t\t\t\t\t\t\twarehouseStatusText\n\t\t\t\t\t\t\t\tcreatedAt\n\t\t\t\t\t\t\t\twarehouseStatus\n\t\t\t\t\t\t\t\tdeliveryTime\n\t\t\t\t\t\t\t\tstatus\n\t\t\t\t\t\t\t\tisConfirmed\n\t\t\t\t\t\t\t\tfinishedProcessingTime\n\t\t\t\t\t\t\t\tisCancelled\n\t\t\t\t\t\t\t\tisPaid\n\t\t\t\t\t\t\t\torderType\n\t\t\t\t\t\t\t\torderNumber\n\t\t\t\t\t\t\t\t_createdAt\n\t\t\t\t\t\t\t\twarehouseId\n\t\t\t\t\t\t\t\tuser {\n\t\t\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\t\t\t_id\n\t\t\t\t\t\t\t\t\tfirstName\n\t\t\t\t\t\t\t\t\tlastName\n\t\t\t\t\t\t\t\t\tphone\n\t\t\t\t\t\t\t\t\tgeoLocation {\n\t\t\t\t\t\t\t\t\t\tstreetAddress\n\t\t\t\t\t\t\t\t\t\thouse\n\t\t\t\t\t\t\t\t\t\tpostcode\n\t\t\t\t\t\t\t\t\t\tcountryName\n\t\t\t\t\t\t\t\t\t\tcity\n\t\t\t\t\t\t\t\t\t\tloc {\n\t\t\t\t\t\t\t\t\t\t\tcoordinates\n\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\twarehouse {\n\t\t\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\t\t\t_id\n\t\t\t\t\t\t\t\t\tname\n\t\t\t\t\t\t\t\t\tgeoLocation {\n\t\t\t\t\t\t\t\t\t\thouse\n\t\t\t\t\t\t\t\t\t\tpostcode\n\t\t\t\t\t\t\t\t\t\tcountryName\n\t\t\t\t\t\t\t\t\t\tcity\n\t\t\t\t\t\t\t\t\t\tloc {\n\t\t\t\t\t\t\t\t\t\t\tcoordinates\n\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\tcarrier {\n\t\t\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\t\t\tlogo\n\t\t\t\t\t\t\t\t\temail\n\t\t\t\t\t\t\t\t\tfirstName\n\t\t\t\t\t\t\t\t\tlastName\n\t\t\t\t\t\t\t\t\tapartment\n\t\t\t\t\t\t\t\t\tphone\n\t\t\t\t\t\t\t\t\tgeoLocation {\n\t\t\t\t\t\t\t\t\t\tcity\n\t\t\t\t\t\t\t\t\t\tstreetAddress\n\t\t\t\t\t\t\t\t\t\thouse\n\t\t\t\t\t\t\t\t\t\tloc {\n\t\t\t\t\t\t\t\t\t\t\tcoordinates\n\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\tproducts {\n\t\t\t\t\t\t\t\t\tcount\n\t\t\t\t\t\t\t\t\tprice\n\t\t\t\t\t\t\t\t\tproduct {\n\t\t\t\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\t\t\t\t_id\n\t\t\t\t\t\t\t\t\t\ttitle {\n\t\t\t\t\t\t\t\t\t\t\tlocale\n\t\t\t\t\t\t\t\t\t\t\tvalue\n\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t\tdescription {\n\t\t\t\t\t\t\t\t\t\t\tlocale\n\t\t\t\t\t\t\t\t\t\t\tvalue\n\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t\tdetails {\n\t\t\t\t\t\t\t\t\t\t\tlocale\n\t\t\t\t\t\t\t\t\t\t\tvalue\n\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t\timages {\n\t\t\t\t\t\t\t\t\t\t\tlocale\n\t\t\t\t\t\t\t\t\t\t\turl\n\t\t\t\t\t\t\t\t\t\t\twidth\n\t\t\t\t\t\t\t\t\t\t\theight\n\t\t\t\t\t\t\t\t\t\t\torientation\n\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t"]))),
            pollInterval: 2000,
            variables: { storeId: storeId, pagingOptions: pagingOptions, status: status },
        })
            .valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res.data['getStoreOrdersTableData']; }));
    };
    WarehouseOrdersService.prototype.getCountOfStoreOrders = function (storeId, status) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var res;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this._apollo
                            .query({
                            query: graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n\t\t\t\t\tquery getCountOfStoreOrders(\n\t\t\t\t\t\t$storeId: String!\n\t\t\t\t\t\t$status: String!\n\t\t\t\t\t) {\n\t\t\t\t\t\tgetCountOfStoreOrders(\n\t\t\t\t\t\t\tstoreId: $storeId\n\t\t\t\t\t\t\tstatus: $status\n\t\t\t\t\t\t)\n\t\t\t\t\t}\n\t\t\t\t"], ["\n\t\t\t\t\tquery getCountOfStoreOrders(\n\t\t\t\t\t\t$storeId: String!\n\t\t\t\t\t\t$status: String!\n\t\t\t\t\t) {\n\t\t\t\t\t\tgetCountOfStoreOrders(\n\t\t\t\t\t\t\tstoreId: $storeId\n\t\t\t\t\t\t\tstatus: $status\n\t\t\t\t\t\t)\n\t\t\t\t\t}\n\t\t\t\t"]))),
                            variables: { storeId: storeId, status: status },
                        })
                            .toPromise()];
                    case 1:
                        res = _a.sent();
                        return [2, res.data['getCountOfStoreOrders']];
                }
            });
        });
    };
    WarehouseOrdersService.prototype.removeUserOrders = function (storeId, userId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var res;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this._apollo
                            .query({
                            query: graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(templateObject_4 || (templateObject_4 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n\t\t\t\t\tquery RemoveUserOrders(\n\t\t\t\t\t\t$storeId: String!\n\t\t\t\t\t\t$userId: String!\n\t\t\t\t\t) {\n\t\t\t\t\t\tremoveUserOrders(storeId: $storeId, userId: $userId) {\n\t\t\t\t\t\t\tnumber\n\t\t\t\t\t\t\tmodified\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t"], ["\n\t\t\t\t\tquery RemoveUserOrders(\n\t\t\t\t\t\t$storeId: String!\n\t\t\t\t\t\t$userId: String!\n\t\t\t\t\t) {\n\t\t\t\t\t\tremoveUserOrders(storeId: $storeId, userId: $userId) {\n\t\t\t\t\t\t\tnumber\n\t\t\t\t\t\t\tmodified\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t"]))),
                            variables: { storeId: storeId, userId: userId },
                        })
                            .toPromise()];
                    case 1:
                        res = _a.sent();
                        return [2, res.data['removeUserOrders']];
                }
            });
        });
    };
    WarehouseOrdersService.prototype.getOrdersInDelivery = function (storeId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var res;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this._apollo
                            .query({
                            query: graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(templateObject_5 || (templateObject_5 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n\t\t\t\t\tquery GetOrdersInDelivery($storeId: String!) {\n\t\t\t\t\t\tgetOrdersInDelivery(storeId: $storeId) {\n\t\t\t\t\t\t\tcarrier {\n\t\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\t\tgeoLocation {\n\t\t\t\t\t\t\t\t\tloc {\n\t\t\t\t\t\t\t\t\t\tcoordinates\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\tuser {\n\t\t\t\t\t\t\t\tgeoLocation {\n\t\t\t\t\t\t\t\t\tloc {\n\t\t\t\t\t\t\t\t\t\tcoordinates\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t"], ["\n\t\t\t\t\tquery GetOrdersInDelivery($storeId: String!) {\n\t\t\t\t\t\tgetOrdersInDelivery(storeId: $storeId) {\n\t\t\t\t\t\t\tcarrier {\n\t\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\t\tgeoLocation {\n\t\t\t\t\t\t\t\t\tloc {\n\t\t\t\t\t\t\t\t\t\tcoordinates\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\tuser {\n\t\t\t\t\t\t\t\tgeoLocation {\n\t\t\t\t\t\t\t\t\tloc {\n\t\t\t\t\t\t\t\t\t\tcoordinates\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t"]))),
                            variables: { storeId: storeId },
                        })
                            .toPromise()];
                    case 1:
                        res = _a.sent();
                        return [2, res.data['getOrdersInDelivery']];
                }
            });
        });
    };
    WarehouseOrdersService.ctorParameters = function () { return [
        { type: apollo_angular__WEBPACK_IMPORTED_MODULE_2__["Apollo"] }
    ]; };
    WarehouseOrdersService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [apollo_angular__WEBPACK_IMPORTED_MODULE_2__["Apollo"]])
    ], WarehouseOrdersService);
    return WarehouseOrdersService;
}());

var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;


/***/ })

}]);
//# sourceMappingURL=default~customers-customers-module~track-track-module~warehouse-warehouse-module.js.map