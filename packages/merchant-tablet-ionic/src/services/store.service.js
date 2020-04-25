"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var core_2 = require("@ngx-translate/core");
var operators_1 = require("rxjs/operators");
var warehouse_router_service_1 = require("@modules/client.common.angular2/routers/warehouse-router.service");
var Store = (function () {
    function Store(translate, warehouseRouter) {
        this.translate = translate;
        this.warehouseRouter = warehouseRouter;
    }
    Object.defineProperty(Store.prototype, "token", {
        get: function () {
            return localStorage.getItem('token') || null;
        },
        set: function (token) {
            if (token == null) {
                localStorage.removeItem('token');
            }
            else {
                localStorage.setItem('token', token);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Store.prototype, "warehouseId", {
        get: function () {
            return localStorage.getItem('_warehouseId') || null;
        },
        set: function (id) {
            if (id == null) {
                localStorage.removeItem('_warehouseId');
            }
            else {
                localStorage.setItem('_warehouseId', id);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Store.prototype, "deviceId", {
        get: function () {
            return localStorage.getItem('_deviceId') || null;
        },
        set: function (id) {
            if (id == null) {
                localStorage.removeItem('_deviceId');
            }
            else {
                localStorage.setItem('_deviceId', id);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Store.prototype, "platform", {
        get: function () {
            return localStorage.getItem('_platform') || null;
        },
        set: function (type) {
            if (type == null) {
                localStorage.removeItem('_platform');
            }
            else {
                localStorage.setItem('_platform', type);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Store.prototype, "language", {
        get: function () {
            return localStorage.getItem('_language') || null;
        },
        set: function (language) {
            if (language == null) {
                localStorage.removeItem('_language');
            }
            else {
                localStorage.setItem('_language', language);
            }
            this.translate.use(language);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Store.prototype, "maintenanceMode", {
        get: function () {
            return localStorage.getItem('maintenanceMode') || null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Store.prototype, "serverConnection", {
        get: function () {
            return localStorage.getItem('serverConnection');
        },
        set: function (val) {
            localStorage.setItem('serverConnection', val);
        },
        enumerable: true,
        configurable: true
    });
    Store.prototype.isLogged = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var merchantId, error_1;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        merchantId = this.warehouseId;
                        if (!merchantId) return [3, 4];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4, this.warehouseRouter
                                .get(merchantId, false)
                                .pipe(operators_1.first())
                                .toPromise()];
                    case 2:
                        _a.sent();
                        return [2, true];
                    case 3:
                        error_1 = _a.sent();
                        return [3, 4];
                    case 4:
                        console.warn("Store with id '" + merchantId + "' does not exists!\"");
                        return [2, false];
                }
            });
        });
    };
    Store.prototype.clearMaintenanceMode = function () {
        localStorage.removeItem('maintenanceMode');
    };
    Store.prototype.clear = function () {
        localStorage.clear();
    };
    Store = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [core_2.TranslateService,
            warehouse_router_service_1.WarehouseRouter])
    ], Store);
    return Store;
}());
exports.Store = Store;
//# sourceMappingURL=store.service.js.map