"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var store_service_1 = require("../../services/store.service");
var InfoModuleGuard = (function () {
    function InfoModuleGuard(store, router) {
        this.store = store;
        this.router = router;
    }
    InfoModuleGuard.prototype.canLoad = function (route) {
        if (!this.store.warehouseId || !this.store.deviceId) {
            this.router.navigate(['login']);
            return false;
        }
        return true;
    };
    InfoModuleGuard = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [store_service_1.Store,
            router_1.Router])
    ], InfoModuleGuard);
    return InfoModuleGuard;
}());
exports.InfoModuleGuard = InfoModuleGuard;
//# sourceMappingURL=info.module.guard.js.map