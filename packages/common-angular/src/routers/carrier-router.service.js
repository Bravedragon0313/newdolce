"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var lodash_1 = tslib_1.__importDefault(require("lodash"));
var operators_1 = require("rxjs/operators");
var router_1 = require("../lib/router");
var core_1 = require("@angular/core");
var Carrier_1 = tslib_1.__importDefault(require("@modules/server.common/entities/Carrier"));
var CarrierRouter = (function () {
    function CarrierRouter(routerFactory) {
        this.router = routerFactory.create('carrier');
    }
    CarrierRouter.prototype.get = function (id) {
        var _this = this;
        return this.router
            .runAndObserve('get', id)
            .pipe(operators_1.map(function (carrier) { return _this._carrierFactory(carrier); }));
    };
    CarrierRouter.prototype.getAllActive = function () {
        var _this = this;
        return this.router
            .runAndObserve('getAllActive')
            .pipe(operators_1.map(function (carriers) {
            return lodash_1.default.map(carriers, function (carrier) { return _this._carrierFactory(carrier); });
        }));
    };
    CarrierRouter.prototype.updateStatus = function (carrierId, newStatus) {
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
    CarrierRouter.prototype.updateActivity = function (carrierId, activity) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var carrier;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.router.run('updateActivity', carrierId, activity)];
                    case 1:
                        carrier = _a.sent();
                        return [2, this._carrierFactory(carrier)];
                }
            });
        });
    };
    CarrierRouter.prototype.updateGeoLocation = function (carrierId, geoLocation) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var carrier;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.router.run('updateGeoLocation', carrierId, geoLocation)];
                    case 1:
                        carrier = _a.sent();
                        return [2, this._carrierFactory(carrier)];
                }
            });
        });
    };
    CarrierRouter.prototype.updatePassword = function (id, password) {
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
    CarrierRouter.prototype.updateById = function (id, updateObject) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var c;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.router.run('updateById', id, updateObject)];
                    case 1:
                        c = _a.sent();
                        return [2, this._carrierFactory(c)];
                }
            });
        });
    };
    CarrierRouter.prototype.register = function (input) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var warehouse;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.router.run('register', input)];
                    case 1:
                        warehouse = _a.sent();
                        return [2, this._carrierFactory(warehouse)];
                }
            });
        });
    };
    CarrierRouter.prototype.login = function (username, password) {
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
                                    carrier: this._carrierFactory(res.carrier),
                                }];
                        }
                        return [2];
                }
            });
        });
    };
    CarrierRouter.prototype._carrierFactory = function (carrier) {
        return carrier == null ? null : new Carrier_1.default(carrier);
    };
    CarrierRouter = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [router_1.RouterFactory])
    ], CarrierRouter);
    return CarrierRouter;
}());
exports.CarrierRouter = CarrierRouter;
//# sourceMappingURL=carrier-router.service.js.map