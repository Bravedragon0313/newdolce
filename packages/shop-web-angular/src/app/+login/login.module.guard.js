"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var store_1 = require("app/services/store");
var RegistrationSystem_1 = tslib_1.__importDefault(require("@modules/server.common/enums/RegistrationSystem"));
var LoginModuleGuard = (function () {
    function LoginModuleGuard(router, store) {
        this.router = router;
        this.store = store;
    }
    LoginModuleGuard.prototype.canActivate = function (route, state) {
        var id = route.firstChild['params'].id;
        if (this.store.userId != null ||
            (this.store.registrationSystem === RegistrationSystem_1.default.Disabled &&
                !id)) {
            this.router.navigate(['products']);
            return false;
        }
        return true;
    };
    LoginModuleGuard = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [router_1.Router,
            store_1.Store])
    ], LoginModuleGuard);
    return LoginModuleGuard;
}());
exports.LoginModuleGuard = LoginModuleGuard;
//# sourceMappingURL=login.module.guard.js.map