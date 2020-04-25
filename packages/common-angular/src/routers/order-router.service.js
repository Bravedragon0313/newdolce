"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var operators_1 = require("rxjs/operators");
var core_1 = require("@angular/core");
var router_1 = require("../lib/router");
var Order_1 = tslib_1.__importDefault(require("@modules/server.common/entities/Order"));
var OrderRouter = (function () {
    function OrderRouter(routerFactory) {
        this.router = routerFactory.create('order');
    }
    OrderRouter.prototype.get = function (id, options) {
        var _this = this;
        return this.router
            .runAndObserve('get', id, options)
            .pipe(operators_1.map(function (order) { return _this._orderFactory(order); }));
    };
    OrderRouter.prototype.confirm = function (orderId) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var order;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.router.run('confirm', orderId)];
                    case 1:
                        order = _a.sent();
                        return [2, this._orderFactory(order)];
                }
            });
        });
    };
    OrderRouter.prototype.complete = function (orderId) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var order;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.router.run('complete', orderId)];
                    case 1:
                        order = _a.sent();
                        return [2, this._orderFactory(order)];
                }
            });
        });
    };
    OrderRouter.prototype.updateCarrierStatus = function (orderId, status) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var order;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.router.run('updateCarrierStatus', orderId, status)];
                    case 1:
                        order = _a.sent();
                        return [2, this._orderFactory(order)];
                }
            });
        });
    };
    OrderRouter.prototype.updateWarehouseStatus = function (orderId, status) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var order;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.router.run('updateWarehouseStatus', orderId, status)];
                    case 1:
                        order = _a.sent();
                        return [2, this._orderFactory(order)];
                }
            });
        });
    };
    OrderRouter.prototype.payWithStripe = function (orderId, cardId) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var order;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.router.run('payWithStripe', orderId, cardId)];
                    case 1:
                        order = _a.sent();
                        return [2, this._orderFactory(order)];
                }
            });
        });
    };
    OrderRouter.prototype.refundWithStripe = function (orderId) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var order;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.router.run('refundWithStripe', orderId)];
                    case 1:
                        order = _a.sent();
                        return [2, this._orderFactory(order)];
                }
            });
        });
    };
    OrderRouter.prototype.addProducts = function (orderId, products, warehouseId) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var order;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.router.run('addProducts', orderId, products, warehouseId)];
                    case 1:
                        order = _a.sent();
                        return [2, this._orderFactory(order)];
                }
            });
        });
    };
    OrderRouter.prototype.decreaseOrderProducts = function (orderId, products, warehouseId) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var order;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.router.run('decreaseOrderProducts', orderId, products, warehouseId)];
                    case 1:
                        order = _a.sent();
                        return [2, this._orderFactory(order)];
                }
            });
        });
    };
    OrderRouter.prototype.removeProducts = function (orderId, productsIds) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var order;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.router.run('removeProducts', orderId, productsIds)];
                    case 1:
                        order = _a.sent();
                        return [2, this._orderFactory(order)];
                }
            });
        });
    };
    OrderRouter.prototype._orderFactory = function (order) {
        return order == null ? null : new Order_1.default(order);
    };
    OrderRouter = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [router_1.RouterFactory])
    ], OrderRouter);
    return OrderRouter;
}());
exports.OrderRouter = OrderRouter;
//# sourceMappingURL=order-router.service.js.map