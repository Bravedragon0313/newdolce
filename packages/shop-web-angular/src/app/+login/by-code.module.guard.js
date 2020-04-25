"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var store_1 = require("app/services/store");
var ByCodeModuleGuard = (function () {
    function ByCodeModuleGuard(router, store) {
        this.router = router;
        this.store = store;
    }
    ByCodeModuleGuard.prototype.canActivate = function (route, state) {
        if (!this.store.inviteSystem) {
            this.router.navigate(['login/byLocation']);
            return false;
        }
        return true;
    };
    ByCodeModuleGuard = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [router_1.Router,
            store_1.Store])
    ], ByCodeModuleGuard);
    return ByCodeModuleGuard;
}());
exports.ByCodeModuleGuard = ByCodeModuleGuard;
//# sourceMappingURL=by-code.module.guard.js.map