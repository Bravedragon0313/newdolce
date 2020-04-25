"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var router_1 = require("../lib/router");
var operators_1 = require("rxjs/operators");
var lodash_1 = tslib_1.__importDefault(require("lodash"));
var core_1 = require("@angular/core");
var Carrier_1 = tslib_1.__importDefault(require("@modules/server.common/entities/Carrier"));
var WarehouseCarriersRouter = (function () {
    function WarehouseCarriersRouter(routerFactory) {
        this.router = routerFactory.create('warehouse-carriers');
    }
    WarehouseCarriersRouter.prototype.get = function (warehouseId) {
        var _this = this;
        return this.router
            .runAndObserve('get', warehouseId)
            .pipe(operators_1.map(function (carriers) {
            return lodash_1.default.map(carriers, function (carrier) { return _this._carrierFactory(carrier); });
        }));
    };
    WarehouseCarriersRouter.prototype.updatePassword = function (id, password) {
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
    WarehouseCarriersRouter.prototype._carrierFactory = function (carrier) {
        return carrier == null ? null : new Carrier_1.default(carrier);
    };
    WarehouseCarriersRouter = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [router_1.RouterFactory])
    ], WarehouseCarriersRouter);
    return WarehouseCarriersRouter;
}());
exports.WarehouseCarriersRouter = WarehouseCarriersRouter;
//# sourceMappingURL=warehouse-carriers-router.service.js.map