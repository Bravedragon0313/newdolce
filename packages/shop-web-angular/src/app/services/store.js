"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var user_router_service_1 = require("@modules/client.common.angular2/routers/user-router.service");
var operators_1 = require("rxjs/operators");
var Store = (function () {
    function Store(userRouter) {
        this.userRouter = userRouter;
    }
    Object.defineProperty(Store.prototype, "userId", {
        get: function () {
            return localStorage.getItem('_userId') || null;
        },
        set: function (id) {
            if (id == null) {
                localStorage.removeItem('_userId');
            }
            else {
                localStorage.setItem('_userId', id);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Store.prototype, "inviteSystem", {
        get: function () {
            var isEnabled = localStorage.getItem('_inviteSystem') === 'enabled';
            return isEnabled;
        },
        set: function (isEndabled) {
            var inviteSystem = isEndabled ? 'enabled' : 'disabled';
            localStorage.setItem('_inviteSystem', inviteSystem);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Store.prototype, "registrationSystem", {
        get: function () {
            return localStorage.getItem('_registrationSystem');
        },
        set: function (registrationRequiredOnStart) {
            localStorage.setItem('_registrationSystem', registrationRequiredOnStart);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Store.prototype, "buyProduct", {
        get: function () {
            return localStorage.getItem('_buyProduct');
        },
        set: function (warehouseProductId) {
            localStorage.setItem('_buyProduct', warehouseProductId);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Store.prototype, "mechantId", {
        get: function () {
            return localStorage.getItem('_mechantId');
        },
        set: function (mechantId) {
            localStorage.setItem('_mechantId', mechantId);
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
    Object.defineProperty(Store.prototype, "deliveryType", {
        get: function () {
            return Number(localStorage.getItem('deliveryType'));
        },
        set: function (deliveryType) {
            localStorage.setItem('deliveryType', deliveryType.toString());
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Store.prototype, "productListViewSpace", {
        get: function () {
            return localStorage.getItem('productListViewSpace');
        },
        set: function (productListViewSpace) {
            localStorage.setItem('productListViewSpace', productListViewSpace);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Store.prototype, "productListViewType", {
        get: function () {
            return localStorage.getItem('productListViewType');
        },
        set: function (productListViewType) {
            localStorage.setItem('productListViewType', productListViewType);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Store.prototype, "productViewType", {
        get: function () {
            return localStorage.getItem('productViewType');
        },
        set: function (productViewType) {
            localStorage.setItem('productViewType', productViewType);
        },
        enumerable: true,
        configurable: true
    });
    Store.prototype.isLogged = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var userId, error_1;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        userId = this.userId;
                        if (!userId) return [3, 4];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4, this.userRouter.get(userId).pipe(operators_1.first()).toPromise()];
                    case 2:
                        _a.sent();
                        return [2, true];
                    case 3:
                        error_1 = _a.sent();
                        this.userId = null;
                        return [3, 4];
                    case 4:
                        console.warn("User with id '" + userId + "' does not exists!\"");
                        return [2, false];
                }
            });
        });
    };
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
    Store.prototype.clearMaintenanceMode = function () {
        localStorage.removeItem('maintenanceMode');
    };
    Store.prototype.clear = function () {
        localStorage.clear();
    };
    Store = tslib_1.__decorate([
        core_1.Injectable({
            providedIn: 'root',
        }),
        tslib_1.__metadata("design:paramtypes", [user_router_service_1.UserRouter])
    ], Store);
    return Store;
}());
exports.Store = Store;
//# sourceMappingURL=store.js.map