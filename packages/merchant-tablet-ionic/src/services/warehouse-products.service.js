"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var apollo_angular_1 = require("apollo-angular");
var graphql_tag_1 = tslib_1.__importDefault(require("graphql-tag"));
var operators_1 = require("rxjs/operators");
var WarehouseProductsService = (function () {
    function WarehouseProductsService(_apollo) {
        this._apollo = _apollo;
    }
    WarehouseProductsService.prototype.getProductsWithPagination = function (id, pagingOptions) {
        return this._apollo
            .watchQuery({
            query: graphql_tag_1.default(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n\t\t\t\t\tquery GetProductsWithPagination(\n\t\t\t\t\t\t$id: String!\n\t\t\t\t\t\t$pagingOptions: PagingOptionsInput\n\t\t\t\t\t) {\n\t\t\t\t\t\tgetProductsWithPagination(\n\t\t\t\t\t\t\tid: $id\n\t\t\t\t\t\t\tpagingOptions: $pagingOptions\n\t\t\t\t\t\t) {\n\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\t_id\n\t\t\t\t\t\t\tprice\n\t\t\t\t\t\t\tinitialPrice\n\t\t\t\t\t\t\tcount\n\t\t\t\t\t\t\tsoldCount\n\t\t\t\t\t\t\tproduct {\n\t\t\t\t\t\t\t\tdescription {\n\t\t\t\t\t\t\t\t\tvalue\n\t\t\t\t\t\t\t\t\tlocale\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t_id\n\t\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\t\ttitle {\n\t\t\t\t\t\t\t\t\tvalue\n\t\t\t\t\t\t\t\t\tlocale\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\tdetails {\n\t\t\t\t\t\t\t\t\tvalue\n\t\t\t\t\t\t\t\t\tlocale\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\timages {\n\t\t\t\t\t\t\t\t\tlocale\n\t\t\t\t\t\t\t\t\turl\n\t\t\t\t\t\t\t\t\torientation\n\t\t\t\t\t\t\t\t\twidth\n\t\t\t\t\t\t\t\t\theight\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\tcategories\n\t\t\t\t\t\t\t\t_createdAt\n\t\t\t\t\t\t\t\t_updatedAt\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\tisCarrierRequired\n\t\t\t\t\t\t\tisTakeaway\n\t\t\t\t\t\t\tdeliveryTimeMin\n\t\t\t\t\t\t\tdeliveryTimeMax\n\t\t\t\t\t\t\tisCarrierRequired\n\t\t\t\t\t\t\tisDeliveryRequired\n\t\t\t\t\t\t\tisManufacturing\n\t\t\t\t\t\t\tisTakeaway\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t"], ["\n\t\t\t\t\tquery GetProductsWithPagination(\n\t\t\t\t\t\t$id: String!\n\t\t\t\t\t\t$pagingOptions: PagingOptionsInput\n\t\t\t\t\t) {\n\t\t\t\t\t\tgetProductsWithPagination(\n\t\t\t\t\t\t\tid: $id\n\t\t\t\t\t\t\tpagingOptions: $pagingOptions\n\t\t\t\t\t\t) {\n\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\t_id\n\t\t\t\t\t\t\tprice\n\t\t\t\t\t\t\tinitialPrice\n\t\t\t\t\t\t\tcount\n\t\t\t\t\t\t\tsoldCount\n\t\t\t\t\t\t\tproduct {\n\t\t\t\t\t\t\t\tdescription {\n\t\t\t\t\t\t\t\t\tvalue\n\t\t\t\t\t\t\t\t\tlocale\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t_id\n\t\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\t\ttitle {\n\t\t\t\t\t\t\t\t\tvalue\n\t\t\t\t\t\t\t\t\tlocale\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\tdetails {\n\t\t\t\t\t\t\t\t\tvalue\n\t\t\t\t\t\t\t\t\tlocale\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\timages {\n\t\t\t\t\t\t\t\t\tlocale\n\t\t\t\t\t\t\t\t\turl\n\t\t\t\t\t\t\t\t\torientation\n\t\t\t\t\t\t\t\t\twidth\n\t\t\t\t\t\t\t\t\theight\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\tcategories\n\t\t\t\t\t\t\t\t_createdAt\n\t\t\t\t\t\t\t\t_updatedAt\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\tisCarrierRequired\n\t\t\t\t\t\t\tisTakeaway\n\t\t\t\t\t\t\tdeliveryTimeMin\n\t\t\t\t\t\t\tdeliveryTimeMax\n\t\t\t\t\t\t\tisCarrierRequired\n\t\t\t\t\t\t\tisDeliveryRequired\n\t\t\t\t\t\t\tisManufacturing\n\t\t\t\t\t\t\tisTakeaway\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t"]))),
            pollInterval: 2000,
            variables: { id: id, pagingOptions: pagingOptions },
        })
            .valueChanges.pipe(operators_1.map(function (res) { return res.data['getProductsWithPagination']; }));
    };
    WarehouseProductsService.prototype.getProductsCount = function (id) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var res;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this._apollo
                            .query({
                            query: graphql_tag_1.default(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n\t\t\t\t\tquery GetProductsCount($id: String!) {\n\t\t\t\t\t\tgetProductsCount(id: $id)\n\t\t\t\t\t}\n\t\t\t\t"], ["\n\t\t\t\t\tquery GetProductsCount($id: String!) {\n\t\t\t\t\t\tgetProductsCount(id: $id)\n\t\t\t\t\t}\n\t\t\t\t"]))),
                            variables: { id: id },
                        })
                            .toPromise()];
                    case 1:
                        res = _a.sent();
                        return [2, res.data['getProductsCount']];
                }
            });
        });
    };
    WarehouseProductsService = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [apollo_angular_1.Apollo])
    ], WarehouseProductsService);
    return WarehouseProductsService;
}());
exports.WarehouseProductsService = WarehouseProductsService;
var templateObject_1, templateObject_2;
//# sourceMappingURL=warehouse-products.service.js.map