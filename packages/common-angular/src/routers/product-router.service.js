"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var operators_1 = require("rxjs/operators");
var router_1 = require("../lib/router");
var core_1 = require("@angular/core");
var Product_1 = tslib_1.__importDefault(require("@modules/server.common/entities/Product"));
var ProductRouter = (function () {
    function ProductRouter(routerFactory) {
        this.router = routerFactory.create('product');
    }
    ProductRouter.prototype.get = function (id) {
        return this.router
            .runAndObserve('get', id)
            .pipe(operators_1.map(function (product) { return new Product_1.default(product); }));
    };
    ProductRouter.prototype.create = function (p) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var product;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.router.run('create', p)];
                    case 1:
                        product = _a.sent();
                        return [2, new Product_1.default(product)];
                }
            });
        });
    };
    ProductRouter.prototype.update = function (id, updateObject) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var product;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.router.run('update', id, updateObject)];
                    case 1:
                        product = _a.sent();
                        return [2, new Product_1.default(product)];
                }
            });
        });
    };
    ProductRouter.prototype.save = function (updatedProduct) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var product;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.router.run('save', updatedProduct)];
                    case 1:
                        product = _a.sent();
                        return [2, new Product_1.default(product)];
                }
            });
        });
    };
    ProductRouter = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [router_1.RouterFactory])
    ], ProductRouter);
    return ProductRouter;
}());
exports.ProductRouter = ProductRouter;
//# sourceMappingURL=product-router.service.js.map