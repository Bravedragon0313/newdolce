"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var apollo_angular_1 = require("apollo-angular");
var graphql_tag_1 = tslib_1.__importDefault(require("graphql-tag"));
var operators_1 = require("rxjs/operators");
var GeoLocationProductsService = (function () {
    function GeoLocationProductsService(apollo) {
        this.apollo = apollo;
    }
    GeoLocationProductsService.prototype.geoLocationProductsByPaging = function (geoLocation, pagingOptions, options, searchText) {
        return this.apollo
            .watchQuery({
            query: graphql_tag_1.default(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n\t\t\t\t\tquery GeoLocationProductsByPaging(\n\t\t\t\t\t\t$geoLocation: GeoLocationFindInput!\n\t\t\t\t\t\t$options: GetGeoLocationProductsOptions\n\t\t\t\t\t\t$pagingOptions: PagingOptionsInput\n\t\t\t\t\t\t$searchText: String\n\t\t\t\t\t) {\n\t\t\t\t\t\tgeoLocationProductsByPaging(\n\t\t\t\t\t\t\tgeoLocation: $geoLocation\n\t\t\t\t\t\t\toptions: $options\n\t\t\t\t\t\t\tpagingOptions: $pagingOptions\n\t\t\t\t\t\t\tsearchText: $searchText\n\t\t\t\t\t\t) {\n\t\t\t\t\t\t\tdistance\n\t\t\t\t\t\t\twarehouseId\n\t\t\t\t\t\t\twarehouseLogo\n\t\t\t\t\t\t\twarehouseProduct {\n\t\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\t\tprice\n\t\t\t\t\t\t\t\tinitialPrice\n\t\t\t\t\t\t\t\tcount\n\t\t\t\t\t\t\t\tsoldCount\n\n\t\t\t\t\t\t\t\tproduct {\n\t\t\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\t\t\ttitle {\n\t\t\t\t\t\t\t\t\t\tlocale\n\t\t\t\t\t\t\t\t\t\tvalue\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\tdescription {\n\t\t\t\t\t\t\t\t\t\tlocale\n\t\t\t\t\t\t\t\t\t\tvalue\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\tdetails {\n\t\t\t\t\t\t\t\t\t\tlocale\n\t\t\t\t\t\t\t\t\t\tvalue\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\timages {\n\t\t\t\t\t\t\t\t\t\tlocale\n\t\t\t\t\t\t\t\t\t\turl\n\t\t\t\t\t\t\t\t\t\twidth\n\t\t\t\t\t\t\t\t\t\theight\n\t\t\t\t\t\t\t\t\t\torientation\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\tisManufacturing\n\t\t\t\t\t\t\t\tisCarrierRequired\n\t\t\t\t\t\t\t\tisDeliveryRequired\n\t\t\t\t\t\t\t\tisTakeaway\n\t\t\t\t\t\t\t\tdeliveryTimeMin\n\t\t\t\t\t\t\t\tdeliveryTimeMax\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t"], ["\n\t\t\t\t\tquery GeoLocationProductsByPaging(\n\t\t\t\t\t\t$geoLocation: GeoLocationFindInput!\n\t\t\t\t\t\t$options: GetGeoLocationProductsOptions\n\t\t\t\t\t\t$pagingOptions: PagingOptionsInput\n\t\t\t\t\t\t$searchText: String\n\t\t\t\t\t) {\n\t\t\t\t\t\tgeoLocationProductsByPaging(\n\t\t\t\t\t\t\tgeoLocation: $geoLocation\n\t\t\t\t\t\t\toptions: $options\n\t\t\t\t\t\t\tpagingOptions: $pagingOptions\n\t\t\t\t\t\t\tsearchText: $searchText\n\t\t\t\t\t\t) {\n\t\t\t\t\t\t\tdistance\n\t\t\t\t\t\t\twarehouseId\n\t\t\t\t\t\t\twarehouseLogo\n\t\t\t\t\t\t\twarehouseProduct {\n\t\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\t\tprice\n\t\t\t\t\t\t\t\tinitialPrice\n\t\t\t\t\t\t\t\tcount\n\t\t\t\t\t\t\t\tsoldCount\n\n\t\t\t\t\t\t\t\tproduct {\n\t\t\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\t\t\ttitle {\n\t\t\t\t\t\t\t\t\t\tlocale\n\t\t\t\t\t\t\t\t\t\tvalue\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\tdescription {\n\t\t\t\t\t\t\t\t\t\tlocale\n\t\t\t\t\t\t\t\t\t\tvalue\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\tdetails {\n\t\t\t\t\t\t\t\t\t\tlocale\n\t\t\t\t\t\t\t\t\t\tvalue\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\timages {\n\t\t\t\t\t\t\t\t\t\tlocale\n\t\t\t\t\t\t\t\t\t\turl\n\t\t\t\t\t\t\t\t\t\twidth\n\t\t\t\t\t\t\t\t\t\theight\n\t\t\t\t\t\t\t\t\t\torientation\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\tisManufacturing\n\t\t\t\t\t\t\t\tisCarrierRequired\n\t\t\t\t\t\t\t\tisDeliveryRequired\n\t\t\t\t\t\t\t\tisTakeaway\n\t\t\t\t\t\t\t\tdeliveryTimeMin\n\t\t\t\t\t\t\t\tdeliveryTimeMax\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t"]))),
            variables: { geoLocation: geoLocation, options: options, pagingOptions: pagingOptions, searchText: searchText },
            pollInterval: 2000,
        })
            .valueChanges.pipe(operators_1.map(function (res) { return res.data.geoLocationProductsByPaging; }), operators_1.share());
    };
    GeoLocationProductsService.prototype.getCountOfGeoLocationProducts = function (geoLocation, options, searchText) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var res;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.apollo
                            .query({
                            query: graphql_tag_1.default(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n\t\t\t\t\tquery GetCountOfGeoLocationProducts(\n\t\t\t\t\t\t$geoLocation: GeoLocationFindInput!\n\t\t\t\t\t\t$options: GetGeoLocationProductsOptions\n\t\t\t\t\t\t$searchText: String\n\t\t\t\t\t) {\n\t\t\t\t\t\tgetCountOfGeoLocationProducts(\n\t\t\t\t\t\t\tgeoLocation: $geoLocation\n\t\t\t\t\t\t\toptions: $options\n\t\t\t\t\t\t\tsearchText: $searchText\n\t\t\t\t\t\t)\n\t\t\t\t\t}\n\t\t\t\t"], ["\n\t\t\t\t\tquery GetCountOfGeoLocationProducts(\n\t\t\t\t\t\t$geoLocation: GeoLocationFindInput!\n\t\t\t\t\t\t$options: GetGeoLocationProductsOptions\n\t\t\t\t\t\t$searchText: String\n\t\t\t\t\t) {\n\t\t\t\t\t\tgetCountOfGeoLocationProducts(\n\t\t\t\t\t\t\tgeoLocation: $geoLocation\n\t\t\t\t\t\t\toptions: $options\n\t\t\t\t\t\t\tsearchText: $searchText\n\t\t\t\t\t\t)\n\t\t\t\t\t}\n\t\t\t\t"]))),
                            variables: { geoLocation: geoLocation, options: options, searchText: searchText },
                        })
                            .toPromise()];
                    case 1:
                        res = _a.sent();
                        return [2, res.data['getCountOfGeoLocationProducts']];
                }
            });
        });
    };
    GeoLocationProductsService = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [apollo_angular_1.Apollo])
    ], GeoLocationProductsService);
    return GeoLocationProductsService;
}());
exports.GeoLocationProductsService = GeoLocationProductsService;
var templateObject_1, templateObject_2;
//# sourceMappingURL=geo-location-products.js.map