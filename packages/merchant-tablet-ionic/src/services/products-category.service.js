"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var apollo_angular_1 = require("apollo-angular");
var graphql_tag_1 = tslib_1.__importDefault(require("graphql-tag"));
var operators_1 = require("rxjs/operators");
var ProductsCategoryService = (function () {
    function ProductsCategoryService(apollo) {
        this.apollo = apollo;
    }
    ProductsCategoryService.prototype.getCategories = function () {
        return this.apollo
            .watchQuery({
            query: graphql_tag_1.default(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n\t\t\t\t\tquery allCategories {\n\t\t\t\t\t\tproductsCategories {\n\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\tname {\n\t\t\t\t\t\t\t\tlocale\n\t\t\t\t\t\t\t\tvalue\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t"], ["\n\t\t\t\t\tquery allCategories {\n\t\t\t\t\t\tproductsCategories {\n\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\tname {\n\t\t\t\t\t\t\t\tlocale\n\t\t\t\t\t\t\t\tvalue\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t"]))),
            pollInterval: 1000,
        })
            .valueChanges.pipe(operators_1.map(function (res) { return res.data.productsCategories; }), operators_1.share());
    };
    ProductsCategoryService = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [apollo_angular_1.Apollo])
    ], ProductsCategoryService);
    return ProductsCategoryService;
}());
exports.ProductsCategoryService = ProductsCategoryService;
var templateObject_1;
//# sourceMappingURL=products-category.service.js.map