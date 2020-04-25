"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var apollo_angular_1 = require("apollo-angular");
var Warehouse_1 = tslib_1.__importDefault(require("@modules/server.common/entities/Warehouse"));
var operators_1 = require("rxjs/operators");
var graphql_tag_1 = tslib_1.__importDefault(require("graphql-tag"));
var WarehousesService = (function () {
    function WarehousesService(_apollo) {
        this._apollo = _apollo;
    }
    WarehousesService.prototype.hasExistingStores = function () {
        return this._apollo
            .query({
            query: graphql_tag_1.default(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n\t\t\t\t\tquery HasExistingStores {\n\t\t\t\t\t\thasExistingStores\n\t\t\t\t\t}\n\t\t\t\t"], ["\n\t\t\t\t\tquery HasExistingStores {\n\t\t\t\t\t\thasExistingStores\n\t\t\t\t\t}\n\t\t\t\t"]))),
        })
            .pipe(operators_1.map(function (res) { return res.data.hasExistingStores; }));
    };
    WarehousesService.prototype.getCountExistingCustomers = function () {
        return this._apollo
            .watchQuery({
            query: graphql_tag_1.default(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n\t\t\t\t\tquery GetCountExistingCustomers {\n\t\t\t\t\t\tgetCountExistingCustomers {\n\t\t\t\t\t\t\ttotal\n\t\t\t\t\t\t\tperStore {\n\t\t\t\t\t\t\t\tstoreId\n\t\t\t\t\t\t\t\tcustomersCount\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t"], ["\n\t\t\t\t\tquery GetCountExistingCustomers {\n\t\t\t\t\t\tgetCountExistingCustomers {\n\t\t\t\t\t\t\ttotal\n\t\t\t\t\t\t\tperStore {\n\t\t\t\t\t\t\t\tstoreId\n\t\t\t\t\t\t\t\tcustomersCount\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t"]))),
        })
            .valueChanges.pipe(operators_1.map(function (res) { return res.data.getCountExistingCustomers; }));
    };
    WarehousesService.prototype.getCountExistingCustomersToday = function () {
        return this._apollo
            .watchQuery({
            query: graphql_tag_1.default(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["\n\t\t\t\t\tquery GetCountExistingCustomersToday {\n\t\t\t\t\t\tgetCountExistingCustomersToday {\n\t\t\t\t\t\t\ttotal\n\t\t\t\t\t\t\tperStore {\n\t\t\t\t\t\t\t\tstoreId\n\t\t\t\t\t\t\t\tcustomersCount\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t"], ["\n\t\t\t\t\tquery GetCountExistingCustomersToday {\n\t\t\t\t\t\tgetCountExistingCustomersToday {\n\t\t\t\t\t\t\ttotal\n\t\t\t\t\t\t\tperStore {\n\t\t\t\t\t\t\t\tstoreId\n\t\t\t\t\t\t\t\tcustomersCount\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t"]))),
        })
            .valueChanges.pipe(operators_1.map(function (res) { return res.data.getCountExistingCustomersToday; }));
    };
    WarehousesService.prototype.getAllStores = function () {
        return this._apollo
            .query({
            query: graphql_tag_1.default(templateObject_4 || (templateObject_4 = tslib_1.__makeTemplateObject(["\n\t\t\t\t\tquery GetAllStores {\n\t\t\t\t\t\tgetAllStores {\n\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\t_createdAt\n\t\t\t\t\t\t\tusedCarriersIds\n\t\t\t\t\t\t\tgeoLocation {\n\t\t\t\t\t\t\t\tcity\n\t\t\t\t\t\t\t\tstreetAddress\n\t\t\t\t\t\t\t\thouse\n\t\t\t\t\t\t\t\tloc {\n\t\t\t\t\t\t\t\t\tcoordinates\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t"], ["\n\t\t\t\t\tquery GetAllStores {\n\t\t\t\t\t\tgetAllStores {\n\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\t_createdAt\n\t\t\t\t\t\t\tusedCarriersIds\n\t\t\t\t\t\t\tgeoLocation {\n\t\t\t\t\t\t\t\tcity\n\t\t\t\t\t\t\t\tstreetAddress\n\t\t\t\t\t\t\t\thouse\n\t\t\t\t\t\t\t\tloc {\n\t\t\t\t\t\t\t\t\tcoordinates\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t"]))),
        })
            .pipe(operators_1.map(function (res) { return res.data.getAllStores; }));
    };
    WarehousesService.prototype.getStores = function (pagingOptions) {
        var _this = this;
        return this._apollo
            .watchQuery({
            query: graphql_tag_1.default(templateObject_5 || (templateObject_5 = tslib_1.__makeTemplateObject(["\n\t\t\t\t\tquery AllWarehouses($pagingOptions: PagingOptionsInput) {\n\t\t\t\t\t\twarehouses(pagingOptions: $pagingOptions) {\n\t\t\t\t\t\t\t_id\n\t\t\t\t\t\t\t_createdAt\n\t\t\t\t\t\t\tname\n\t\t\t\t\t\t\tcontactEmail\n\t\t\t\t\t\t\tcontactPhone\n\t\t\t\t\t\t\tlogo\n\t\t\t\t\t\t\tusername\n\t\t\t\t\t\t\tusedCarriersIds\n\t\t\t\t\t\t\tgeoLocation {\n\t\t\t\t\t\t\t\tcity\n\t\t\t\t\t\t\t\tstreetAddress\n\t\t\t\t\t\t\t\thouse\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t"], ["\n\t\t\t\t\tquery AllWarehouses($pagingOptions: PagingOptionsInput) {\n\t\t\t\t\t\twarehouses(pagingOptions: $pagingOptions) {\n\t\t\t\t\t\t\t_id\n\t\t\t\t\t\t\t_createdAt\n\t\t\t\t\t\t\tname\n\t\t\t\t\t\t\tcontactEmail\n\t\t\t\t\t\t\tcontactPhone\n\t\t\t\t\t\t\tlogo\n\t\t\t\t\t\t\tusername\n\t\t\t\t\t\t\tusedCarriersIds\n\t\t\t\t\t\t\tgeoLocation {\n\t\t\t\t\t\t\t\tcity\n\t\t\t\t\t\t\t\tstreetAddress\n\t\t\t\t\t\t\t\thouse\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t"]))),
            variables: { pagingOptions: pagingOptions },
            pollInterval: 5000,
        })
            .valueChanges.pipe(operators_1.map(function (res) { return res.data.warehouses; }), operators_1.map(function (ws) { return ws.map(function (w) { return _this._warehouseFactory(w); }); }), operators_1.share());
    };
    WarehousesService.prototype.getNearbyStores = function (geoLocation) {
        var _this = this;
        return this._apollo
            .watchQuery({
            query: graphql_tag_1.default(templateObject_6 || (templateObject_6 = tslib_1.__makeTemplateObject(["\n\t\t\t\t\tquery GetNearbyStores($geoLocation: GeoLocationFindInput!) {\n\t\t\t\t\t\tnearbyStores(geoLocation: $geoLocation) {\n\t\t\t\t\t\t\t_id\n\t\t\t\t\t\t\tname\n\t\t\t\t\t\t\tcontactEmail\n\t\t\t\t\t\t\tcontactPhone\n\t\t\t\t\t\t\tlogo\n\t\t\t\t\t\t\tgeoLocation {\n\t\t\t\t\t\t\t\tcity\n\t\t\t\t\t\t\t\tstreetAddress\n\t\t\t\t\t\t\t\thouse\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t"], ["\n\t\t\t\t\tquery GetNearbyStores($geoLocation: GeoLocationFindInput!) {\n\t\t\t\t\t\tnearbyStores(geoLocation: $geoLocation) {\n\t\t\t\t\t\t\t_id\n\t\t\t\t\t\t\tname\n\t\t\t\t\t\t\tcontactEmail\n\t\t\t\t\t\t\tcontactPhone\n\t\t\t\t\t\t\tlogo\n\t\t\t\t\t\t\tgeoLocation {\n\t\t\t\t\t\t\t\tcity\n\t\t\t\t\t\t\t\tstreetAddress\n\t\t\t\t\t\t\t\thouse\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t"]))),
            pollInterval: 5000,
            variables: { geoLocation: geoLocation },
        })
            .valueChanges.pipe(operators_1.map(function (res) { return res.data.nearbyStores; }), operators_1.map(function (ws) { return ws.map(function (w) { return _this._warehouseFactory(w); }); }), operators_1.share());
    };
    WarehousesService.prototype.removeByIds = function (ids) {
        return this._apollo.mutate({
            mutation: graphql_tag_1.default(templateObject_7 || (templateObject_7 = tslib_1.__makeTemplateObject(["\n\t\t\t\tmutation RemoveByIds($ids: [String!]!) {\n\t\t\t\t\tremoveWarehousesByIds(ids: $ids)\n\t\t\t\t}\n\t\t\t"], ["\n\t\t\t\tmutation RemoveByIds($ids: [String!]!) {\n\t\t\t\t\tremoveWarehousesByIds(ids: $ids)\n\t\t\t\t}\n\t\t\t"]))),
            variables: { ids: ids },
        });
    };
    WarehousesService.prototype.addProducts = function (warehouseId, products) {
        return this._apollo
            .mutate({
            mutation: graphql_tag_1.default(templateObject_8 || (templateObject_8 = tslib_1.__makeTemplateObject(["\n\t\t\t\t\tmutation AddProducts(\n\t\t\t\t\t\t$warehouseId: String!\n\t\t\t\t\t\t$products: [WarehouseProductInput!]!\n\t\t\t\t\t) {\n\t\t\t\t\t\taddWarehouseProducts(\n\t\t\t\t\t\t\twarehouseId: $warehouseId\n\t\t\t\t\t\t\tproducts: $products\n\t\t\t\t\t\t) {\n\t\t\t\t\t\t\tproduct {\n\t\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t"], ["\n\t\t\t\t\tmutation AddProducts(\n\t\t\t\t\t\t$warehouseId: String!\n\t\t\t\t\t\t$products: [WarehouseProductInput!]!\n\t\t\t\t\t) {\n\t\t\t\t\t\taddWarehouseProducts(\n\t\t\t\t\t\t\twarehouseId: $warehouseId\n\t\t\t\t\t\t\tproducts: $products\n\t\t\t\t\t\t) {\n\t\t\t\t\t\t\tproduct {\n\t\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t"]))),
            variables: {
                warehouseId: warehouseId,
                products: products,
            },
        })
            .pipe(operators_1.map(function (result) { return result.data['warehouseAddProducts']; }), operators_1.share());
    };
    WarehousesService.prototype.removeProductsById = function (warehouseId, productsIds) {
        return this._apollo.mutate({
            mutation: graphql_tag_1.default(templateObject_9 || (templateObject_9 = tslib_1.__makeTemplateObject(["\n\t\t\t\tmutation RemoveProductsByIds(\n\t\t\t\t\t$warehouseId: String!\n\t\t\t\t\t$productsIds: [String!]!\n\t\t\t\t) {\n\t\t\t\t\tremoveWarehouseProducts(\n\t\t\t\t\t\twarehouseId: $warehouseId\n\t\t\t\t\t\tproductsIds: $productsIds\n\t\t\t\t\t)\n\t\t\t\t}\n\t\t\t"], ["\n\t\t\t\tmutation RemoveProductsByIds(\n\t\t\t\t\t$warehouseId: String!\n\t\t\t\t\t$productsIds: [String!]!\n\t\t\t\t) {\n\t\t\t\t\tremoveWarehouseProducts(\n\t\t\t\t\t\twarehouseId: $warehouseId\n\t\t\t\t\t\tproductsIds: $productsIds\n\t\t\t\t\t)\n\t\t\t\t}\n\t\t\t"]))),
            variables: { warehouseId: warehouseId, productsIds: productsIds },
        });
    };
    WarehousesService.prototype.getStoreById = function (id) {
        return this._apollo
            .query({
            query: graphql_tag_1.default(templateObject_10 || (templateObject_10 = tslib_1.__makeTemplateObject(["\n\t\t\t\t\tquery GetStoreById($id: String!) {\n\t\t\t\t\t\twarehouse(id: $id) {\n\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\tname\n\t\t\t\t\t\t\tlogo\n\t\t\t\t\t\t\tusedCarriersIds\n\t\t\t\t\t\t\tcontactEmail\n\t\t\t\t\t\t\tcontactPhone\n\t\t\t\t\t\t\tgeoLocation {\n\t\t\t\t\t\t\t\tcity\n\t\t\t\t\t\t\t\tstreetAddress\n\t\t\t\t\t\t\t\thouse\n\t\t\t\t\t\t\t\tloc {\n\t\t\t\t\t\t\t\t\tcoordinates\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t"], ["\n\t\t\t\t\tquery GetStoreById($id: String!) {\n\t\t\t\t\t\twarehouse(id: $id) {\n\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\tname\n\t\t\t\t\t\t\tlogo\n\t\t\t\t\t\t\tusedCarriersIds\n\t\t\t\t\t\t\tcontactEmail\n\t\t\t\t\t\t\tcontactPhone\n\t\t\t\t\t\t\tgeoLocation {\n\t\t\t\t\t\t\t\tcity\n\t\t\t\t\t\t\t\tstreetAddress\n\t\t\t\t\t\t\t\thouse\n\t\t\t\t\t\t\t\tloc {\n\t\t\t\t\t\t\t\t\tcoordinates\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t"]))),
            variables: { id: id },
        })
            .pipe(operators_1.map(function (res) { return res.data['warehouse']; }), operators_1.share());
    };
    WarehousesService.prototype.getCountOfMerchants = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var res;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this._apollo
                            .query({
                            query: graphql_tag_1.default(templateObject_11 || (templateObject_11 = tslib_1.__makeTemplateObject(["\n\t\t\t\t\tquery GetCountOfMerchants {\n\t\t\t\t\t\tgetCountOfMerchants\n\t\t\t\t\t}\n\t\t\t\t"], ["\n\t\t\t\t\tquery GetCountOfMerchants {\n\t\t\t\t\t\tgetCountOfMerchants\n\t\t\t\t\t}\n\t\t\t\t"]))),
                        })
                            .toPromise()];
                    case 1:
                        res = _a.sent();
                        return [2, res.data['getCountOfMerchants']];
                }
            });
        });
    };
    WarehousesService.prototype._warehouseFactory = function (warehouse) {
        return warehouse == null ? null : new Warehouse_1.default(warehouse);
    };
    WarehousesService = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [apollo_angular_1.Apollo])
    ], WarehousesService);
    return WarehousesService;
}());
exports.WarehousesService = WarehousesService;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11;
//# sourceMappingURL=warehouses.service.js.map