"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var store_service_1 = require("../services/store.service");
var PagesModuleGuard = (function () {
    function PagesModuleGuard(router, store) {
        this.router = router;
        this.store = store;
    }
    PagesModuleGuard.prototype.canActivate = function (route, state) {
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
    PagesModuleGuard = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [router_1.Router,
            store_service_1.Store])
    ], PagesModuleGuard);
    return PagesModuleGuard;
}());
exports.PagesModuleGuard = PagesModuleGuard;
//# sourceMappingURL=pages.module.guard.js.map