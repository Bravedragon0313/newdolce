"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var apollo_angular_1 = require("apollo-angular");
var graphql_tag_1 = tslib_1.__importDefault(require("graphql-tag"));
var operators_1 = require("rxjs/operators");
var ProductService = (function () {
    function ProductService(apollo) {
        this.apollo = apollo;
    }
    ProductService.prototype.save = function (product) {
        return this.apollo
            .mutate({
            mutation: graphql_tag_1.default(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n\t\t\t\t\tmutation SaveProduct($product: ProductSaveInput!) {\n\t\t\t\t\t\tsaveProduct(product: $product) {\n\t\t\t\t\t\t\tid\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t"], ["\n\t\t\t\t\tmutation SaveProduct($product: ProductSaveInput!) {\n\t\t\t\t\t\tsaveProduct(product: $product) {\n\t\t\t\t\t\t\tid\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t"]))),
            variables: {
                product: product,
            },
        })
            .pipe(operators_1.map(function (result) { return result.data.product; }), operators_1.share());
    };
    ProductService = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [apollo_angular_1.Apollo])
    ], ProductService);
    return ProductService;
}());
exports.ProductService = ProductService;
var templateObject_1;
//# sourceMappingURL=product.service.js.map