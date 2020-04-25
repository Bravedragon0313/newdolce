"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var operators_1 = require("rxjs/operators");
var router_1 = require("../lib/router");
var lodash_1 = tslib_1.__importDefault(require("lodash"));
var core_1 = require("@angular/core");
var Warehouse_1 = tslib_1.__importDefault(require("@modules/server.common/entities/Warehouse"));
var WarehouseRouter = (function () {
    function WarehouseRouter(routerFactory) {
        this.router = routerFactory.create('warehouse');
    }
    WarehouseRouter.prototype.get = function (id, fullProducts) {
        var _this = this;
        if (fullProducts === void 0) { fullProducts = true; }
        return this.router
            .runAndObserve('get', id, fullProducts)
            .pipe(operators_1.map(function (warehouse) { return _this._warehouseFactory(warehouse); }));
    };
    WarehouseRouter.prototype.getAllActive = function (fullProducts) {
        var _this = this;
        if (fullProducts === void 0) { fullProducts = false; }
        return this.router
            .runAndObserve('getAllActive', fullProducts)
            .pipe(operators_1.map(function (warehouses) {
            return lodash_1.default.map(warehouses, function (warehouse) {
                return _this._warehouseFactory(warehouse);
            });
        }));
    };
    WarehouseRouter.prototype.login = function (username, password) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var res;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.router.run('login', username, password)];
                    case 1:
                        res = _a.sent();
                        if (res == null) {
                            return [2, null];
                        }
                        else {
                            return [2, {
                                    token: res.token,
                                    warehouse: this._warehouseFactory(res.warehouse),
                                }];
                        }
                        return [2];
                }
            });
        });
    };
    WarehouseRouter.prototype.register = function (input) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var warehouse;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.router.run('register', input)];
                    case 1:
                        warehouse = _a.sent();
                        return [2, this._warehouseFactory(warehouse)];
                }
            });
        });
    };
    WarehouseRouter.prototype.updateGeoLocation = function (warehouseId, geoLocation) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var warehouse;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.router.run('updateGeoLocation', warehouseId, geoLocation)];
                    case 1:
                        warehouse = _a.sent();
                        return [2, this._warehouseFactory(warehouse)];
                }
            });
        });
    };
    WarehouseRouter.prototype.updatePassword = function (id, password) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.router.run('updatePassword', id, password)];
                    case 1:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    WarehouseRouter.prototype.updateAvailability = function (warehouseId, isAvailable) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var warehouse;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.router.run('updateAvailability', warehouseId, isAvailable)];
                    case 1:
                        warehouse = _a.sent();
                        return [2, this._warehouseFactory(warehouse)];
                }
            });
        });
    };
    WarehouseRouter.prototype.save = function (w) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var warehouse;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.router.run('save', w)];
                    case 1:
                        warehouse = _a.sent();
                        return [2, this._warehouseFactory(warehouse)];
                }
            });
        });
    };
    WarehouseRouter.prototype._warehouseFactory = function (warehouse) {
        return warehouse == null ? null : new Warehouse_1.default(warehouse);
    };
    WarehouseRouter = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [router_1.RouterFactory])
    ], WarehouseRouter);
    return WarehouseRouter;
}());
exports.WarehouseRouter = WarehouseRouter;
//# sourceMappingURL=warehouse-router.service.js.map