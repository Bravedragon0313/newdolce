"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var apollo_angular_1 = require("apollo-angular");
var core_1 = require("@angular/core");
var graphql_tag_1 = tslib_1.__importDefault(require("graphql-tag"));
var WarehouseProductsService = (function () {
    function WarehouseProductsService(apollo) {
        this.apollo = apollo;
    }
    WarehouseProductsService.prototype.getWarehouseProduct = function (warehouseId, warehouseProductId) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var res;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.warn(warehouseId);
                        return [4, this.apollo
                                .query({
                                query: graphql_tag_1.default(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n\t\t\t\t\tquery GetWarehouseProduct(\n\t\t\t\t\t\t$warehouseId: String!\n\t\t\t\t\t\t$warehouseProductId: String!\n\t\t\t\t\t) {\n\t\t\t\t\t\tgetWarehouseProduct(\n\t\t\t\t\t\t\twarehouseId: $warehouseId\n\t\t\t\t\t\t\twarehouseProductId: $warehouseProductId\n\t\t\t\t\t\t) {\n\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\tprice\n\t\t\t\t\t\t\tinitialPrice\n\t\t\t\t\t\t\tcount\n\t\t\t\t\t\t\tsoldCount\n\n\t\t\t\t\t\t\tproduct {\n\t\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\t\ttitle {\n\t\t\t\t\t\t\t\t\tlocale\n\t\t\t\t\t\t\t\t\tvalue\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\tdescription {\n\t\t\t\t\t\t\t\t\tlocale\n\t\t\t\t\t\t\t\t\tvalue\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\tdetails {\n\t\t\t\t\t\t\t\t\tlocale\n\t\t\t\t\t\t\t\t\tvalue\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\timages {\n\t\t\t\t\t\t\t\t\tlocale\n\t\t\t\t\t\t\t\t\turl\n\t\t\t\t\t\t\t\t\twidth\n\t\t\t\t\t\t\t\t\theight\n\t\t\t\t\t\t\t\t\torientation\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\tisManufacturing\n\t\t\t\t\t\t\tisCarrierRequired\n\t\t\t\t\t\t\tisDeliveryRequired\n\t\t\t\t\t\t\tisTakeaway\n\t\t\t\t\t\t\tdeliveryTimeMin\n\t\t\t\t\t\t\tdeliveryTimeMax\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t"], ["\n\t\t\t\t\tquery GetWarehouseProduct(\n\t\t\t\t\t\t$warehouseId: String!\n\t\t\t\t\t\t$warehouseProductId: String!\n\t\t\t\t\t) {\n\t\t\t\t\t\tgetWarehouseProduct(\n\t\t\t\t\t\t\twarehouseId: $warehouseId\n\t\t\t\t\t\t\twarehouseProductId: $warehouseProductId\n\t\t\t\t\t\t) {\n\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\tprice\n\t\t\t\t\t\t\tinitialPrice\n\t\t\t\t\t\t\tcount\n\t\t\t\t\t\t\tsoldCount\n\n\t\t\t\t\t\t\tproduct {\n\t\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\t\ttitle {\n\t\t\t\t\t\t\t\t\tlocale\n\t\t\t\t\t\t\t\t\tvalue\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\tdescription {\n\t\t\t\t\t\t\t\t\tlocale\n\t\t\t\t\t\t\t\t\tvalue\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\tdetails {\n\t\t\t\t\t\t\t\t\tlocale\n\t\t\t\t\t\t\t\t\tvalue\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\timages {\n\t\t\t\t\t\t\t\t\tlocale\n\t\t\t\t\t\t\t\t\turl\n\t\t\t\t\t\t\t\t\twidth\n\t\t\t\t\t\t\t\t\theight\n\t\t\t\t\t\t\t\t\torientation\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\tisManufacturing\n\t\t\t\t\t\t\tisCarrierRequired\n\t\t\t\t\t\t\tisDeliveryRequired\n\t\t\t\t\t\t\tisTakeaway\n\t\t\t\t\t\t\tdeliveryTimeMin\n\t\t\t\t\t\t\tdeliveryTimeMax\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t"]))),
                                variables: { warehouseId: warehouseId, warehouseProductId: warehouseProductId },
                            })
                                .toPromise()];
                    case 1:
                        res = _a.sent();
                        return [2, res.data['getWarehouseProduct']];
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
var templateObject_1;
//# sourceMappingURL=warehouse-products.js.map