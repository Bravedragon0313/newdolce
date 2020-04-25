"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var operators_1 = require("rxjs/operators");
var router_1 = require("../lib/router");
var lodash_1 = tslib_1.__importDefault(require("lodash"));
var core_1 = require("@angular/core");
var Order_1 = tslib_1.__importDefault(require("@modules/server.common/entities/Order"));
var WarehouseOrdersRouter = (function () {
    function WarehouseOrdersRouter(routerFactory) {
        this.router = routerFactory.create('warehouse-orders');
    }
    WarehouseOrdersRouter.prototype.get = function (warehouseId, options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        return this.router
            .runAndObserve('get', warehouseId, options)
            .pipe(operators_1.map(function (orders) {
            return lodash_1.default.map(orders, function (order) { return _this._orderFactory(order); });
        }));
    };
    WarehouseOrdersRouter.prototype.create = function (createInput) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var order;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.router.run('create', createInput)];
                    case 1:
                        order = _a.sent();
                        return [2, this._orderFactory(order)];
                }
            });
        });
    };
    WarehouseOrdersRouter.prototype.cancel = function (orderId) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var order;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.router.run('cancel', orderId)];
                    case 1:
                        order = _a.sent();
                        return [2, this._orderFactory(order)];
                }
            });
        });
    };
    WarehouseOrdersRouter.prototype.createByProductType = function (userId, warehouseId, productId, orderType) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var order;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.router.run('createByProductType', userId, warehouseId, productId, orderType)];
                    case 1:
                        order = _a.sent();
                        return [2, this._orderFactory(order)];
                }
            });
        });
    };
    WarehouseOrdersRouter.prototype._orderFactory = function (order) {
        return order == null ? null : new Order_1.default(order);
    };
    WarehouseOrdersRouter = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [router_1.RouterFactory])
    ], WarehouseOrdersRouter);
    return WarehouseOrdersRouter;
}());
exports.WarehouseOrdersRouter = WarehouseOrdersRouter;
//# sourceMappingURL=warehouse-orders-router.service.js.map