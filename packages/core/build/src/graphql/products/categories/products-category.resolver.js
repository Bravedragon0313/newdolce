"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const products_1 = require("../../../services/products");
const operators_1 = require("rxjs/operators");
let ProductsCategoryResolver = class ProductsCategoryResolver {
    constructor(_productsCategoriesService) {
        this._productsCategoriesService = _productsCategoriesService;
    }
    getProductsCategory(_, { id }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this._productsCategoriesService
                .get(id)
                .pipe(operators_1.first())
                .toPromise();
        });
    }
    getProductsCategories(_, { findInput }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this._productsCategoriesService.find(Object.assign(Object.assign({}, findInput), { isDeleted: { $eq: false } }));
        });
    }
    createProductsCategory(_, { createInput }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this._productsCategoriesService.create(createInput);
        });
    }
    updateProductsCategory(_, { id, updateInput, }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this._productsCategoriesService.throwIfNotExists(id);
            return this._productsCategoriesService.update(id, updateInput);
        });
    }
    removeProductsCategoriesByIds(_, { ids }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const categories = yield this._productsCategoriesService.find({
                _id: { $in: ids },
                isDeleted: { $eq: false },
            });
            const categoriesIds = categories.map((c) => c.id);
            return this._productsCategoriesService.removeMultipleByIds(categoriesIds);
        });
    }
};
tslib_1.__decorate([
    graphql_1.Query('productsCategory'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductsCategoryResolver.prototype, "getProductsCategory", null);
tslib_1.__decorate([
    graphql_1.Query('productsCategories'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductsCategoryResolver.prototype, "getProductsCategories", null);
tslib_1.__decorate([
    graphql_1.Mutation(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductsCategoryResolver.prototype, "createProductsCategory", null);
tslib_1.__decorate([
    graphql_1.Mutation(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductsCategoryResolver.prototype, "updateProductsCategory", null);
tslib_1.__decorate([
    graphql_1.Mutation(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductsCategoryResolver.prototype, "removeProductsCategoriesByIds", null);
ProductsCategoryResolver = tslib_1.__decorate([
    graphql_1.Resolver('ProductsCategory'),
    tslib_1.__metadata("design:paramtypes", [products_1.ProductsCategoriesService])
], ProductsCategoryResolver);
exports.ProductsCategoryResolver = ProductsCategoryResolver;
//# sourceMappingURL=products-category.resolver.js.map