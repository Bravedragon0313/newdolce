"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var core_2 = require("@ngx-translate/core");
var globalization_1 = require("@ionic-native/globalization");
var angular_1 = require("@ionic/angular");
var invite_router_service_1 = require("@modules/client.common.angular2/routers/invite-router.service");
var operators_1 = require("rxjs/operators");
var user_router_service_1 = require("@modules/client.common.angular2/routers/user-router.service");
var Store = (function () {
    function Store(_translateService, platform, inviteRouter, userRouter) {
        this._translateService = _translateService;
        this.platform = platform;
        this.inviteRouter = inviteRouter;
        this.userRouter = userRouter;
        this._initLanguage();
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
    Object.defineProperty(Store.prototype, "inviteRequestId", {
        get: function () {
            return localStorage.getItem('_inviteRequestId') || null;
        },
        set: function (id) {
            if (id == null) {
                localStorage.removeItem('_inviteRequestId');
            }
            else {
                localStorage.setItem('_inviteRequestId', id);
            }
        },
        enumerable: true,
        configurable: true
    });
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
    Object.defineProperty(Store.prototype, "orderId", {
        get: function () {
            return localStorage.getItem('_orderId') || null;
        },
        set: function (id) {
            if (id == null) {
                localStorage.removeItem('_orderId');
            }
            else {
                localStorage.setItem('_orderId', id);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Store.prototype, "language", {
        get: function () {
            return this._translateService.currentLang;
        },
        set: function (l) {
            if (l == null) {
                localStorage.removeItem('_language');
            }
            else {
                localStorage.setItem('_language', l);
            }
            this._translateService.use(l);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Store.prototype, "orderWarehouseId", {
        get: function () {
            return localStorage.getItem('_currOrderWarehouseId') || null;
        },
        set: function (id) {
            if (id == null) {
                localStorage.removeItem('_currOrderWarehouseId');
            }
            else {
                localStorage.setItem('_currOrderWarehouseId', id);
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
    Object.defineProperty(Store.prototype, "backToDetails", {
        get: function () {
            return localStorage.getItem('_backToDetails');
        },
        set: function (warehouseProductId) {
            localStorage.setItem('_backToDetails', warehouseProductId);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Store.prototype, "warehouseId", {
        get: function () {
            return localStorage.getItem('_warehouseId');
        },
        set: function (warehouseId) {
            localStorage.setItem('_warehouseId', warehouseId);
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
    Object.defineProperty(Store.prototype, "startOrderDate", {
        get: function () {
            return localStorage.getItem('startDate');
        },
        set: function (val) {
            localStorage.setItem('startDate', JSON.stringify(val));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Store.prototype, "endOrderTime", {
        get: function () {
            return localStorage.getItem('endTime');
        },
        set: function (val) {
            localStorage.setItem('endTime', JSON.stringify(val));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Store.prototype, "inviteAddress", {
        get: function () {
            return localStorage.getItem('inviteAddress');
        },
        set: function (val) {
            localStorage.setItem('inviteAddress', val);
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
    Object.defineProperty(Store.prototype, "inStore", {
        get: function () {
            return localStorage.getItem('inStore');
        },
        set: function (val) {
            localStorage.setItem('inStore', val);
        },
        enumerable: true,
        configurable: true
    });
    Store.prototype.clearInStore = function () {
        localStorage.removeItem('inStore');
    };
    Store.prototype.clearMaintenanceMode = function () {
        localStorage.removeItem('maintenanceMode');
    };
    Store.prototype.clear = function () {
        localStorage.clear();
    };
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
    Store.prototype._initLanguage = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var lang, langs, browserLang, _a;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        lang = localStorage.getItem('_language') || null;
                        langs = { he: 'he-IL', ru: 'ru-RU', bg: 'bg-BG', en: 'en-US', it: 'it-IT', fr: 'fr-FR' };
                        this._translateService.use(langs.he);
                        this._translateService.use(langs.ru);
                        this._translateService.use(langs.bg);
                        this._translateService.use(langs.en);
                        this._translateService.use(langs.it);
                        this._translateService.use(langs.fr);
                        this._translateService.resetLang(langs.en);
                        if (!lang) return [3, 1];
                        this._translateService.use(lang);
                        return [3, 5];
                    case 1:
                        if (!this.platform.is('cordova')) return [3, 3];
                        return [4, globalization_1.Globalization.getPreferredLanguage()];
                    case 2:
                        _a = (_b.sent()).value;
                        return [3, 4];
                    case 3:
                        _a = this._translateService.getBrowserLang();
                        _b.label = 4;
                    case 4:
                        browserLang = _a;
                        if (langs[browserLang]) {
                            this._translateService.use(langs[browserLang]);
                        }
                        else {
                            this._translateService.use(langs.en);
                        }
                        _b.label = 5;
                    case 5: return [2];
                }
            });
        });
    };
    Store = tslib_1.__decorate([
        core_1.Injectable({
            providedIn: 'root',
        }),
        tslib_1.__metadata("design:paramtypes", [core_2.TranslateService,
            angular_1.Platform,
            invite_router_service_1.InviteRouter,
            user_router_service_1.UserRouter])
    ], Store);
    return Store;
}());
exports.Store = Store;
//# sourceMappingURL=store.service.js.map