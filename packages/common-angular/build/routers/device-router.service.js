"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var operators_1 = require("rxjs/operators");
var router_1 = require("../lib/router");
var core_1 = require("@angular/core");
var Device_1 = tslib_1.__importDefault(require("@modules/server.common/entities/Device"));
var DeviceRouter = (function () {
    function DeviceRouter(routerFactory) {
        this.router = routerFactory.create('device');
    }
    DeviceRouter.prototype.create = function (deviceCreateObject) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this._deviceFactory;
                        return [4, this.router.run('create', deviceCreateObject)];
                    case 1: return [2, _a.apply(this, [_b.sent()])];
                }
            });
        });
    };
    DeviceRouter.prototype.get = function (id) {
        var _this = this;
        return this.router
            .runAndObserve('get', id)
            .pipe(operators_1.map(function (device) { return _this._deviceFactory(device); }));
    };
    DeviceRouter.prototype.updateLanguage = function (deviceId, language) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this._deviceFactory;
                        return [4, this.router.run('updateLanguage', deviceId, language)];
                    case 1: return [2, _a.apply(this, [_b.sent()])];
                }
            });
        });
    };
    DeviceRouter.prototype._deviceFactory = function (device) {
        return device == null ? null : new Device_1.default(device);
    };
    DeviceRouter = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [router_1.RouterFactory])
    ], DeviceRouter);
    return DeviceRouter;
}());
exports.DeviceRouter = DeviceRouter;
//# sourceMappingURL=device-router.service.js.map