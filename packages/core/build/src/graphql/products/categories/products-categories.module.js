"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const products_category_resolver_1 = require("./products-category.resolver");
let ProductsCategoriesModule = class ProductsCategoriesModule {
};
ProductsCategoriesModule = tslib_1.__decorate([
    common_1.Module({
        providers: [products_category_resolver_1.ProductsCategoryResolver],
    })
], ProductsCategoriesModule);
exports.ProductsCategoriesModule = ProductsCategoriesModule;
//# sourceMappingURL=products-categories.module.js.map