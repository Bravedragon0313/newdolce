"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var store_1 = require("app/services/store");
var MaintenanceModuleGuard = (function () {
    function MaintenanceModuleGuard(router, store) {
        this.router = router;
        this.store = store;
    }
    MaintenanceModuleGuard.prototype.canActivate = function (route, state) {
        var maintenanceMode = this.store.maintenanceMode;
        if (!maintenanceMode) {
            this.router.navigate(['']);
            return false;
        }
        return true;
    };
    MaintenanceModuleGuard = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [router_1.Router, store_1.Store])
    ], MaintenanceModuleGuard);
    return MaintenanceModuleGuard;
}());
exports.MaintenanceModuleGuard = MaintenanceModuleGuard;
//# sourceMappingURL=maintenance-info.module.guard.js.map