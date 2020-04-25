"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var operators_1 = require("rxjs/operators");
var router_1 = require("../lib/router");
var core_1 = require("@angular/core");
var User_1 = tslib_1.__importDefault(require("@modules/server.common/entities/User"));
var UserRouter = (function () {
    function UserRouter(routerFactory) {
        this.router = routerFactory.create('user');
    }
    UserRouter.prototype.get = function (id) {
        var _this = this;
        return this.router
            .runAndObserve('get', id)
            .pipe(operators_1.map(function (user) { return _this._userFactory(user); }));
    };
    UserRouter.prototype.updateUser = function (id, userCreateObject) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var user;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.router.run('updateUser', id, userCreateObject)];
                    case 1:
                        user = _a.sent();
                        return [2, this._userFactory(user)];
                }
            });
        });
    };
    UserRouter.prototype.addPaymentMethod = function (userId, tokenId) {
        return this.router.run('addPaymentMethod', userId, tokenId);
    };
    UserRouter.prototype.getCards = function (userId) {
        return this.router.run('getCards', userId);
    };
    UserRouter.prototype.updateEmail = function (userId, email) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var user;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.router.run('updateEmail', userId, email)];
                    case 1:
                        user = _a.sent();
                        return [2, this._userFactory(user)];
                }
            });
        });
    };
    UserRouter.prototype.updateGeoLocation = function (userId, geoLocation) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var user;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.router.run(userId, geoLocation)];
                    case 1:
                        user = _a.sent();
                        return [2, this._userFactory(user)];
                }
            });
        });
    };
    UserRouter.prototype.getAboutUs = function (userId, deviceId) {
        return this.router.runAndObserve('getAboutUs', userId, deviceId);
    };
    UserRouter.prototype.getTermsOfUse = function (userId, deviceId) {
        return this.router.runAndObserve('getTermsOfUse', userId, deviceId);
    };
    UserRouter.prototype.getPrivacy = function (userId, deviceId) {
        return this.router.runAndObserve('getPrivacy', userId, deviceId);
    };
    UserRouter.prototype._userFactory = function (user) {
        return user == null ? null : new User_1.default(user);
    };
    UserRouter = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [router_1.RouterFactory])
    ], UserRouter);
    return UserRouter;
}());
exports.UserRouter = UserRouter;
//# sourceMappingURL=user-router.service.js.map