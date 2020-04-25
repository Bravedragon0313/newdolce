"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var operators_1 = require("rxjs/operators");
var lodash_1 = tslib_1.__importDefault(require("lodash"));
var router_1 = require("../lib/router");
var core_1 = require("@angular/core");
var Order_1 = tslib_1.__importDefault(require("@modules/server.common/entities/Order"));
var Carrier_1 = tslib_1.__importDefault(require("@modules/server.common/entities/Carrier"));
var CarrierOrdersRouter = (function () {
    function CarrierOrdersRouter(routerFactory) {
        this.router = routerFactory.create('carrier-orders');
    }
    CarrierOrdersRouter.prototype.get = function (id, options) {
        var _this = this;
        return this.router
            .runAndObserve('get', id, options)
            .pipe(operators_1.map(function (orders) {
            return lodash_1.default.map(orders, function (order) { return _this._orderFactory(order); });
        }));
    };
    CarrierOrdersRouter.prototype.getAvailable = function (id, options) {
        var _this = this;
        return this.router
            .runAndObserve('getAvailable', id, options)
            .pipe(operators_1.map(function (orders) {
            return lodash_1.default.map(orders, function (order) { return _this._orderFactory(order); });
        }));
    };
    CarrierOrdersRouter.prototype.selectedForDelivery = function (carrierId, orderIds) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var carrier;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.router.run('selectedForDelivery', carrierId, orderIds)];
                    case 1:
                        carrier = _a.sent();
                        return [2, this._carrierFactory(carrier)];
                }
            });
        });
    };
    CarrierOrdersRouter.prototype.updateStatus = function (carrierId, newStatus) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var carrier;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.router.run('updateStatus', carrierId, newStatus)];
                    case 1:
                        carrier = _a.sent();
                        return [2, this._carrierFactory(carrier)];
                }
            });
        });
    };
    CarrierOrdersRouter.prototype.cancelDelivery = function (carrierId, orderIds) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var carrier;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.router.run('cancelDelivery', carrierId, orderIds)];
                    case 1:
                        carrier = _a.sent();
                        return [2, this._carrierFactory(carrier)];
                }
            });
        });
    };
    CarrierOrdersRouter.prototype.getCount = function (carrierId) {
        return this.router.run('getCount', carrierId);
    };
    CarrierOrdersRouter.prototype.skipOrders = function (carrierId, ordersIds) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var carrier;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.router.run('skipOrders', carrierId, ordersIds)];
                    case 1:
                        carrier = _a.sent();
                        return [2, this._carrierFactory(carrier)];
                }
            });
        });
    };
    CarrierOrdersRouter.prototype._carrierFactory = function (carrier) {
        return carrier == null ? null : new Carrier_1.default(carrier);
    };
    CarrierOrdersRouter.prototype._orderFactory = function (order) {
        return order == null ? null : new Order_1.default(order);
    };
    CarrierOrdersRouter = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [router_1.RouterFactory])
    ], CarrierOrdersRouter);
    return CarrierOrdersRouter;
}());
exports.CarrierOrdersRouter = CarrierOrdersRouter;
//# sourceMappingURL=carrier-orders-router.service.js.map