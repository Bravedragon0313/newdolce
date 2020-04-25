"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var store_1 = require("./services/store");
var AppModuleGuard = (function () {
    function AppModuleGuard(router, store) {
        this.router = router;
        this.store = store;
    }
    AppModuleGuard.prototype.canActivate = function (route, state) {
        var maintenanceMode = this.store.maintenanceMode;
        if (maintenanceMode) {
            this.router.navigate(['maintenance-info']);
            return false;
        }
        var serverConnection = Number(this.store.serverConnection);
        if (serverConnection === 0) {
            this.router.navigate(['server-down']);
            return false;
        }
        return true;
    };
    AppModuleGuard = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [router_1.Router, store_1.Store])
    ], AppModuleGuard);
    return AppModuleGuard;
}());
exports.AppModuleGuard = AppModuleGuard;
//# sourceMappingURL=app.module.guard.js.map