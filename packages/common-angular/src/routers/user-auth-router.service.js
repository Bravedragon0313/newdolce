"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var router_1 = require("../lib/router");
var core_1 = require("@angular/core");
var User_1 = tslib_1.__importDefault(require("@modules/server.common/entities/User"));
var UserAuthRouter = (function () {
    function UserAuthRouter(routerFactory) {
        this.router = routerFactory.create('user-auth');
    }
    UserAuthRouter.prototype.register = function (input) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var u;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.router.run('register', input)];
                    case 1:
                        u = _a.sent();
                        return [2, this._userFactory(u)];
                }
            });
        });
    };
    UserAuthRouter.prototype.addRegistrationInfo = function (id, info) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.router.run('addRegistrationInfo', id, info)];
                    case 1:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    UserAuthRouter.prototype.login = function (username, password) {
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
                                    user: this._userFactory(res.user),
                                }];
                        }
                        return [2];
                }
            });
        });
    };
    UserAuthRouter.prototype.updatePassword = function (id, password) {
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
    UserAuthRouter.prototype._userFactory = function (user) {
        return user == null ? null : new User_1.default(user);
    };
    UserAuthRouter.prototype.getRegistrationsSettings = function () {
        return this.router.run('getRegistrationsSettings');
    };
    UserAuthRouter = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [router_1.RouterFactory])
    ], UserAuthRouter);
    return UserAuthRouter;
}());
exports.UserAuthRouter = UserAuthRouter;
//# sourceMappingURL=user-auth-router.service.js.map