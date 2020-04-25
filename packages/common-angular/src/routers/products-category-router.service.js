"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var operators_1 = require("rxjs/operators");
var router_1 = require("../lib/router");
var core_1 = require("@angular/core");
var ProductsCategory_1 = tslib_1.__importDefault(require("@modules/server.common/entities/ProductsCategory"));
var ProductsCategoryRouter = (function () {
    function ProductsCategoryRouter(routerFactory) {
        this.router = routerFactory.create('productsCategory');
    }
    ProductsCategoryRouter.prototype.get = function (id) {
        return this.router
            .runAndObserve('get', id)
            .pipe(operators_1.map(function (category) { return new ProductsCategory_1.default(category); }));
    };
    ProductsCategoryRouter.prototype.create = function (c) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var category;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.router.run('create', c)];
                    case 1:
                        category = _a.sent();
                        return [2, new ProductsCategory_1.default(category)];
                }
            });
        });
    };
    ProductsCategoryRouter.prototype.update = function (id, updateObject) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var category;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.router.run('update', id, updateObject)];
                    case 1:
                        category = _a.sent();
                        return [2, new ProductsCategory_1.default(category)];
                }
            });
        });
    };
    ProductsCategoryRouter.prototype.remove = function (id) {
        return this.router.run('remove', id);
    };
    ProductsCategoryRouter = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [router_1.RouterFactory])
    ], ProductsCategoryRouter);
    return ProductsCategoryRouter;
}());
exports.ProductsCategoryRouter = ProductsCategoryRouter;
//# sourceMappingURL=products-category-router.service.js.map