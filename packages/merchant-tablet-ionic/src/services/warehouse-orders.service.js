"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var apollo_angular_1 = require("apollo-angular");
var graphql_tag_1 = tslib_1.__importDefault(require("graphql-tag"));
var operators_1 = require("rxjs/operators");
var WarehouseOrdersService = (function () {
    function WarehouseOrdersService(_apollo) {
        this._apollo = _apollo;
        this._orderProductsMutation = graphql_tag_1.default(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n\t\tmutation MakeOrder($createInput: OrderCreateInput!) {\n\t\t\tcreateOrder(createInput: $createInput) {\n\t\t\t\t_id\n\t\t\t\t_createdAt\n\t\t\t\t_updatedAt\n\t\t\t\tcarrierStatus\n\t\t\t\tisConfirmed\n\t\t\t\twarehouseId\n\t\t\t\twarehouseStatus\n\t\t\t\tuser {\n\t\t\t\t\t_id\n\t\t\t\t}\n\t\t\t\tcarrier {\n\t\t\t\t\t_id\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t"], ["\n\t\tmutation MakeOrder($createInput: OrderCreateInput!) {\n\t\t\tcreateOrder(createInput: $createInput) {\n\t\t\t\t_id\n\t\t\t\t_createdAt\n\t\t\t\t_updatedAt\n\t\t\t\tcarrierStatus\n\t\t\t\tisConfirmed\n\t\t\t\twarehouseId\n\t\t\t\twarehouseStatus\n\t\t\t\tuser {\n\t\t\t\t\t_id\n\t\t\t\t}\n\t\t\t\tcarrier {\n\t\t\t\t\t_id\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t"])));
    }
    WarehouseOrdersService.prototype.createOrder = function (createInput) {
        return this._apollo
            .mutate({
            mutation: this._orderProductsMutation,
            variables: { createInput: createInput },
        })
            .pipe(operators_1.map(function (result) { return result.data.createOrder; }));
    };
    WarehouseOrdersService.prototype.getStoreOrdersTableData = function (storeId, pagingOptions, status) {
        return this._apollo
            .watchQuery({
            query: graphql_tag_1.default(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n\t\t\t\t\tquery GetStoreOrdersTableData(\n\t\t\t\t\t\t$storeId: String!\n\t\t\t\t\t\t$pagingOptions: PagingOptionsInput\n\t\t\t\t\t\t$status: String\n\t\t\t\t\t) {\n\t\t\t\t\t\tgetStoreOrdersTableData(\n\t\t\t\t\t\t\tstoreId: $storeId\n\t\t\t\t\t\t\tpagingOptions: $pagingOptions\n\t\t\t\t\t\t\tstatus: $status\n\t\t\t\t\t\t) {\n\t\t\t\t\t\t\tpage\n\t\t\t\t\t\t\torders {\n\t\t\t\t\t\t\t\t_id\n\t\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\t\tcarrierStatus\n\t\t\t\t\t\t\t\tcarrierStatusText\n\t\t\t\t\t\t\t\twarehouseStatusText\n\t\t\t\t\t\t\t\tcreatedAt\n\t\t\t\t\t\t\t\twarehouseStatus\n\t\t\t\t\t\t\t\tdeliveryTime\n\t\t\t\t\t\t\t\tstatus\n\t\t\t\t\t\t\t\tisConfirmed\n\t\t\t\t\t\t\t\tfinishedProcessingTime\n\t\t\t\t\t\t\t\tisCancelled\n\t\t\t\t\t\t\t\tisPaid\n\t\t\t\t\t\t\t\torderType\n\t\t\t\t\t\t\t\torderNumber\n\t\t\t\t\t\t\t\t_createdAt\n\t\t\t\t\t\t\t\twarehouseId\n\t\t\t\t\t\t\t\tuser {\n\t\t\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\t\t\t_id\n\t\t\t\t\t\t\t\t\tfirstName\n\t\t\t\t\t\t\t\t\tlastName\n\t\t\t\t\t\t\t\t\tphone\n\t\t\t\t\t\t\t\t\tgeoLocation {\n\t\t\t\t\t\t\t\t\t\tstreetAddress\n\t\t\t\t\t\t\t\t\t\thouse\n\t\t\t\t\t\t\t\t\t\tpostcode\n\t\t\t\t\t\t\t\t\t\tcountryName\n\t\t\t\t\t\t\t\t\t\tcity\n\t\t\t\t\t\t\t\t\t\tloc {\n\t\t\t\t\t\t\t\t\t\t\tcoordinates\n\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\twarehouse {\n\t\t\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\t\t\t_id\n\t\t\t\t\t\t\t\t\tname\n\t\t\t\t\t\t\t\t\tgeoLocation {\n\t\t\t\t\t\t\t\t\t\thouse\n\t\t\t\t\t\t\t\t\t\tpostcode\n\t\t\t\t\t\t\t\t\t\tcountryName\n\t\t\t\t\t\t\t\t\t\tcity\n\t\t\t\t\t\t\t\t\t\tloc {\n\t\t\t\t\t\t\t\t\t\t\tcoordinates\n\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\tcarrier {\n\t\t\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\t\t\tlogo\n\t\t\t\t\t\t\t\t\temail\n\t\t\t\t\t\t\t\t\tfirstName\n\t\t\t\t\t\t\t\t\tlastName\n\t\t\t\t\t\t\t\t\tapartment\n\t\t\t\t\t\t\t\t\tphone\n\t\t\t\t\t\t\t\t\tgeoLocation {\n\t\t\t\t\t\t\t\t\t\tcity\n\t\t\t\t\t\t\t\t\t\tstreetAddress\n\t\t\t\t\t\t\t\t\t\thouse\n\t\t\t\t\t\t\t\t\t\tloc {\n\t\t\t\t\t\t\t\t\t\t\tcoordinates\n\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\tproducts {\n\t\t\t\t\t\t\t\t\tcount\n\t\t\t\t\t\t\t\t\tprice\n\t\t\t\t\t\t\t\t\tproduct {\n\t\t\t\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\t\t\t\t_id\n\t\t\t\t\t\t\t\t\t\ttitle {\n\t\t\t\t\t\t\t\t\t\t\tlocale\n\t\t\t\t\t\t\t\t\t\t\tvalue\n\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t\tdescription {\n\t\t\t\t\t\t\t\t\t\t\tlocale\n\t\t\t\t\t\t\t\t\t\t\tvalue\n\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t\tdetails {\n\t\t\t\t\t\t\t\t\t\t\tlocale\n\t\t\t\t\t\t\t\t\t\t\tvalue\n\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t\timages {\n\t\t\t\t\t\t\t\t\t\t\tlocale\n\t\t\t\t\t\t\t\t\t\t\turl\n\t\t\t\t\t\t\t\t\t\t\twidth\n\t\t\t\t\t\t\t\t\t\t\theight\n\t\t\t\t\t\t\t\t\t\t\torientation\n\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t"], ["\n\t\t\t\t\tquery GetStoreOrdersTableData(\n\t\t\t\t\t\t$storeId: String!\n\t\t\t\t\t\t$pagingOptions: PagingOptionsInput\n\t\t\t\t\t\t$status: String\n\t\t\t\t\t) {\n\t\t\t\t\t\tgetStoreOrdersTableData(\n\t\t\t\t\t\t\tstoreId: $storeId\n\t\t\t\t\t\t\tpagingOptions: $pagingOptions\n\t\t\t\t\t\t\tstatus: $status\n\t\t\t\t\t\t) {\n\t\t\t\t\t\t\tpage\n\t\t\t\t\t\t\torders {\n\t\t\t\t\t\t\t\t_id\n\t\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\t\tcarrierStatus\n\t\t\t\t\t\t\t\tcarrierStatusText\n\t\t\t\t\t\t\t\twarehouseStatusText\n\t\t\t\t\t\t\t\tcreatedAt\n\t\t\t\t\t\t\t\twarehouseStatus\n\t\t\t\t\t\t\t\tdeliveryTime\n\t\t\t\t\t\t\t\tstatus\n\t\t\t\t\t\t\t\tisConfirmed\n\t\t\t\t\t\t\t\tfinishedProcessingTime\n\t\t\t\t\t\t\t\tisCancelled\n\t\t\t\t\t\t\t\tisPaid\n\t\t\t\t\t\t\t\torderType\n\t\t\t\t\t\t\t\torderNumber\n\t\t\t\t\t\t\t\t_createdAt\n\t\t\t\t\t\t\t\twarehouseId\n\t\t\t\t\t\t\t\tuser {\n\t\t\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\t\t\t_id\n\t\t\t\t\t\t\t\t\tfirstName\n\t\t\t\t\t\t\t\t\tlastName\n\t\t\t\t\t\t\t\t\tphone\n\t\t\t\t\t\t\t\t\tgeoLocation {\n\t\t\t\t\t\t\t\t\t\tstreetAddress\n\t\t\t\t\t\t\t\t\t\thouse\n\t\t\t\t\t\t\t\t\t\tpostcode\n\t\t\t\t\t\t\t\t\t\tcountryName\n\t\t\t\t\t\t\t\t\t\tcity\n\t\t\t\t\t\t\t\t\t\tloc {\n\t\t\t\t\t\t\t\t\t\t\tcoordinates\n\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\twarehouse {\n\t\t\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\t\t\t_id\n\t\t\t\t\t\t\t\t\tname\n\t\t\t\t\t\t\t\t\tgeoLocation {\n\t\t\t\t\t\t\t\t\t\thouse\n\t\t\t\t\t\t\t\t\t\tpostcode\n\t\t\t\t\t\t\t\t\t\tcountryName\n\t\t\t\t\t\t\t\t\t\tcity\n\t\t\t\t\t\t\t\t\t\tloc {\n\t\t\t\t\t\t\t\t\t\t\tcoordinates\n\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\tcarrier {\n\t\t\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\t\t\tlogo\n\t\t\t\t\t\t\t\t\temail\n\t\t\t\t\t\t\t\t\tfirstName\n\t\t\t\t\t\t\t\t\tlastName\n\t\t\t\t\t\t\t\t\tapartment\n\t\t\t\t\t\t\t\t\tphone\n\t\t\t\t\t\t\t\t\tgeoLocation {\n\t\t\t\t\t\t\t\t\t\tcity\n\t\t\t\t\t\t\t\t\t\tstreetAddress\n\t\t\t\t\t\t\t\t\t\thouse\n\t\t\t\t\t\t\t\t\t\tloc {\n\t\t\t\t\t\t\t\t\t\t\tcoordinates\n\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\tproducts {\n\t\t\t\t\t\t\t\t\tcount\n\t\t\t\t\t\t\t\t\tprice\n\t\t\t\t\t\t\t\t\tproduct {\n\t\t\t\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\t\t\t\t_id\n\t\t\t\t\t\t\t\t\t\ttitle {\n\t\t\t\t\t\t\t\t\t\t\tlocale\n\t\t\t\t\t\t\t\t\t\t\tvalue\n\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t\tdescription {\n\t\t\t\t\t\t\t\t\t\t\tlocale\n\t\t\t\t\t\t\t\t\t\t\tvalue\n\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t\tdetails {\n\t\t\t\t\t\t\t\t\t\t\tlocale\n\t\t\t\t\t\t\t\t\t\t\tvalue\n\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t\timages {\n\t\t\t\t\t\t\t\t\t\t\tlocale\n\t\t\t\t\t\t\t\t\t\t\turl\n\t\t\t\t\t\t\t\t\t\t\twidth\n\t\t\t\t\t\t\t\t\t\t\theight\n\t\t\t\t\t\t\t\t\t\t\torientation\n\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t"]))),
            pollInterval: 2000,
            variables: { storeId: storeId, pagingOptions: pagingOptions, status: status },
        })
            .valueChanges.pipe(operators_1.map(function (res) { return res.data['getStoreOrdersTableData']; }));
    };
    WarehouseOrdersService.prototype.getCountOfStoreOrders = function (storeId, status) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var res;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this._apollo
                            .query({
                            query: graphql_tag_1.default(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["\n\t\t\t\t\tquery getCountOfStoreOrders(\n\t\t\t\t\t\t$storeId: String!\n\t\t\t\t\t\t$status: String!\n\t\t\t\t\t) {\n\t\t\t\t\t\tgetCountOfStoreOrders(\n\t\t\t\t\t\t\tstoreId: $storeId\n\t\t\t\t\t\t\tstatus: $status\n\t\t\t\t\t\t)\n\t\t\t\t\t}\n\t\t\t\t"], ["\n\t\t\t\t\tquery getCountOfStoreOrders(\n\t\t\t\t\t\t$storeId: String!\n\t\t\t\t\t\t$status: String!\n\t\t\t\t\t) {\n\t\t\t\t\t\tgetCountOfStoreOrders(\n\t\t\t\t\t\t\tstoreId: $storeId\n\t\t\t\t\t\t\tstatus: $status\n\t\t\t\t\t\t)\n\t\t\t\t\t}\n\t\t\t\t"]))),
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
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var res;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this._apollo
                            .query({
                            query: graphql_tag_1.default(templateObject_4 || (templateObject_4 = tslib_1.__makeTemplateObject(["\n\t\t\t\t\tquery RemoveUserOrders(\n\t\t\t\t\t\t$storeId: String!\n\t\t\t\t\t\t$userId: String!\n\t\t\t\t\t) {\n\t\t\t\t\t\tremoveUserOrders(storeId: $storeId, userId: $userId) {\n\t\t\t\t\t\t\tnumber\n\t\t\t\t\t\t\tmodified\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t"], ["\n\t\t\t\t\tquery RemoveUserOrders(\n\t\t\t\t\t\t$storeId: String!\n\t\t\t\t\t\t$userId: String!\n\t\t\t\t\t) {\n\t\t\t\t\t\tremoveUserOrders(storeId: $storeId, userId: $userId) {\n\t\t\t\t\t\t\tnumber\n\t\t\t\t\t\t\tmodified\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t"]))),
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
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var res;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this._apollo
                            .query({
                            query: graphql_tag_1.default(templateObject_5 || (templateObject_5 = tslib_1.__makeTemplateObject(["\n\t\t\t\t\tquery GetOrdersInDelivery($storeId: String!) {\n\t\t\t\t\t\tgetOrdersInDelivery(storeId: $storeId) {\n\t\t\t\t\t\t\tcarrier {\n\t\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\t\tgeoLocation {\n\t\t\t\t\t\t\t\t\tloc {\n\t\t\t\t\t\t\t\t\t\tcoordinates\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\tuser {\n\t\t\t\t\t\t\t\tgeoLocation {\n\t\t\t\t\t\t\t\t\tloc {\n\t\t\t\t\t\t\t\t\t\tcoordinates\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t"], ["\n\t\t\t\t\tquery GetOrdersInDelivery($storeId: String!) {\n\t\t\t\t\t\tgetOrdersInDelivery(storeId: $storeId) {\n\t\t\t\t\t\t\tcarrier {\n\t\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\t\tgeoLocation {\n\t\t\t\t\t\t\t\t\tloc {\n\t\t\t\t\t\t\t\t\t\tcoordinates\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\tuser {\n\t\t\t\t\t\t\t\tgeoLocation {\n\t\t\t\t\t\t\t\t\tloc {\n\t\t\t\t\t\t\t\t\t\tcoordinates\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t"]))),
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
    WarehouseOrdersService = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [apollo_angular_1.Apollo])
    ], WarehouseOrdersService);
    return WarehouseOrdersService;
}());
exports.WarehouseOrdersService = WarehouseOrdersService;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
//# sourceMappingURL=warehouse-orders.service.js.map