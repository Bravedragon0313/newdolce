"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const product_resolver_1 = require("./product.resolver");
const products_categories_module_1 = require("./categories/products-categories.module");
let ProductsModule = class ProductsModule {
};
ProductsModule = tslib_1.__decorate([
    common_1.Module({
        imports: [products_categories_module_1.ProductsCategoriesModule],
        providers: [product_resolver_1.ProductResolver],
    })
], ProductsModule);
exports.ProductsModule = ProductsModule;
//# sourceMappingURL=products.module.js.map