"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var store_1 = require("app/services/store");
var SocieModuleGuard = (function () {
    function SocieModuleGuard(router, store) {
        this.router = router;
        this.store = store;
    }
    SocieModuleGuard.prototype.canActivate = function (route, state) {
        var id = route.params['id'];
        if (id) {
            this.store.userId = id;
            this.router.navigate(['products']);
            return false;
        }
        return true;
    };
    SocieModuleGuard = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [router_1.Router,
            store_1.Store])
    ], SocieModuleGuard);
    return SocieModuleGuard;
}());
exports.SocieModuleGuard = SocieModuleGuard;
//# sourceMappingURL=socie.module.guard.js.map