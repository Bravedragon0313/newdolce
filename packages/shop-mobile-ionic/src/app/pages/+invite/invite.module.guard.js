"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var store_service_1 = require("../../services/store.service");
var RegistrationSystem_1 = tslib_1.__importDefault(require("@modules/server.common/enums/RegistrationSystem"));
var InviteModuleGuard = (function () {
    function InviteModuleGuard(store, router) {
        this.store = store;
        this.router = router;
    }
    InviteModuleGuard.prototype.canLoad = function (route) {
        if (this.store.userId != null ||
            this.store.registrationSystem === RegistrationSystem_1.default.Disabled) {
            this.router.navigate(['products']);
            return false;
        }
        return true;
    };
    InviteModuleGuard = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [store_service_1.Store,
            router_1.Router])
    ], InviteModuleGuard);
    return InviteModuleGuard;
}());
exports.InviteModuleGuard = InviteModuleGuard;
//# sourceMappingURL=invite.module.guard.js.map