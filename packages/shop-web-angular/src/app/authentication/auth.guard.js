"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var store_1 = require("app/services/store");
var RegistrationSystem_1 = tslib_1.__importDefault(require("@modules/server.common/enums/RegistrationSystem"));
var AuthGuard = (function () {
    function AuthGuard(router, store) {
        this.router = router;
        this.store = store;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var isLogged;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.store.isLogged()];
                    case 1:
                        isLogged = _a.sent();
                        if (!isLogged &&
                            this.store.registrationSystem === RegistrationSystem_1.default.Enabled) {
                            this.router.navigate(['login']);
                            return [2, false];
                        }
                        return [2, true];
                }
            });
        });
    };
    AuthGuard = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [router_1.Router,
            store_1.Store])
    ], AuthGuard);
    return AuthGuard;
}());
exports.AuthGuard = AuthGuard;
//# sourceMappingURL=auth.guard.js.map