"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var operators_1 = require("rxjs/operators");
var router_1 = require("../lib/router");
var lodash_1 = tslib_1.__importDefault(require("lodash"));
var core_1 = require("@angular/core");
var WarehouseProduct_1 = tslib_1.__importDefault(require("@modules/server.common/entities/WarehouseProduct"));
var WarehouseProductsRouter = (function () {
    function WarehouseProductsRouter(routerFactory) {
        this.router = routerFactory.create('warehouse-products');
    }
    WarehouseProductsRouter.prototype.get = function (id, fullProducts) {
        var _this = this;
        if (fullProducts === void 0) { fullProducts = true; }
        return this.router
            .runAndObserve('get', id, fullProducts)
            .pipe(operators_1.map(function (warehouseProducts) {
            return lodash_1.default.map(warehouseProducts, function (warehouseProduct) {
                return _this._warehouseProductFactory(warehouseProduct);
            });
        }));
    };
    WarehouseProductsRouter.prototype.getAvailable = function (warehouseId) {
        var _this = this;
        return this.router
            .runAndObserve('getAvailable', warehouseId)
            .pipe(operators_1.map(function (warehouseProducts) {
            return lodash_1.default.map(warehouseProducts, function (warehouseProduct) {
                return _this._warehouseProductFactory(warehouseProduct);
            });
        }));
    };
    WarehouseProductsRouter.prototype.add = function (warehouseId, products) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var warehouseProducts;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.router.run('add', warehouseId, products)];
                    case 1:
                        warehouseProducts = _a.sent();
                        return [2, lodash_1.default.map(warehouseProducts, function (warehouseProduct) {
                                return _this._warehouseProductFactory(warehouseProduct);
                            })];
                }
            });
        });
    };
    WarehouseProductsRouter.prototype.saveUpdated = function (warehouseId, updatedWarehouseProduct) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var warehouseProduct;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.router.run('saveUpdated', warehouseId, updatedWarehouseProduct)];
                    case 1:
                        warehouseProduct = _a.sent();
                        return [2, this._warehouseProductFactory(warehouseProduct)];
                }
            });
        });
    };
    WarehouseProductsRouter.prototype.changePrice = function (warehouseId, productId, price) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var warehouseProduct;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.router.run('changePrice', warehouseId, productId, price)];
                    case 1:
                        warehouseProduct = _a.sent();
                        return [2, this._warehouseProductFactory(warehouseProduct)];
                }
            });
        });
    };
    WarehouseProductsRouter.prototype.decreaseCount = function (warehouseId, productId, count) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var warehouseProduct;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.router.run('decreaseCount', warehouseId, productId, count)];
                    case 1:
                        warehouseProduct = _a.sent();
                        return [2, this._warehouseProductFactory(warehouseProduct)];
                }
            });
        });
    };
    WarehouseProductsRouter.prototype.increaseCount = function (warehouseId, productId, count) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var warehouseProduct;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.router.run('increaseCount', warehouseId, productId, count)];
                    case 1:
                        warehouseProduct = _a.sent();
                        return [2, this._warehouseProductFactory(warehouseProduct)];
                }
            });
        });
    };
    WarehouseProductsRouter.prototype.increaseSoldCount = function (warehouseId, productId, count) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var warehouseProduct;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.router.run('increaseSoldCount', warehouseId, productId, count)];
                    case 1:
                        warehouseProduct = _a.sent();
                        return [2, this._warehouseProductFactory(warehouseProduct)];
                }
            });
        });
    };
    WarehouseProductsRouter.prototype.decreaseSoldCount = function (warehouseId, productId, count) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var warehouseProduct;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.router.run('decreaseSoldCount', warehouseId, productId, count)];
                    case 1:
                        warehouseProduct = _a.sent();
                        return [2, this._warehouseProductFactory(warehouseProduct)];
                }
            });
        });
    };
    WarehouseProductsRouter.prototype.getTopProducts = function (warehouseId, quantity) {
        var _this = this;
        return this.router
            .runAndObserve('getTopProducts', warehouseId, quantity)
            .pipe(operators_1.map(function (warehouseProducts) {
            return lodash_1.default.map(warehouseProducts, function (warehouseProduct) {
                return _this._warehouseProductFactory(warehouseProduct);
            });
        }));
    };
    WarehouseProductsRouter.prototype._warehouseProductFactory = function (warehouseProduct) {
        return warehouseProduct == null
            ? null
            : new WarehouseProduct_1.default(warehouseProduct);
    };
    WarehouseProductsRouter = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [router_1.RouterFactory])
    ], WarehouseProductsRouter);
    return WarehouseProductsRouter;
}());
exports.WarehouseProductsRouter = WarehouseProductsRouter;
//# sourceMappingURL=warehouse-products-router.service.js.map