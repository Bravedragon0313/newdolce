"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var store_service_1 = require("../../../services/store.service");
var ByCodeModuleGuard = (function () {
    function ByCodeModuleGuard(store, router) {
        this.store = store;
        this.router = router;
    }
    ByCodeModuleGuard.prototype.canLoad = function (route) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                if (!this.store.inviteSystem) {
                    this.router.navigate(['invite/by-location']);
                    return [2, false];
                }
                return [2, true];
            });
        });
    };
    ByCodeModuleGuard = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [store_service_1.Store,
            router_1.Router])
    ], ByCodeModuleGuard);
    return ByCodeModuleGuard;
}());
exports.ByCodeModuleGuard = ByCodeModuleGuard;
//# sourceMappingURL=by-code.module.guard.js.map