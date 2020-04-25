"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var store_service_1 = require("../../../services/store.service");
var OrderModuleGuard = (function () {
    function OrderModuleGuard(store, router) {
        this.store = store;
        this.router = router;
    }
    OrderModuleGuard.prototype.canLoad = function (route) {
        if (this.store.orderId == null) {
            this.router.navigate(['products']);
        }
        return true;
    };
    OrderModuleGuard = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [store_service_1.Store,
            router_1.Router])
    ], OrderModuleGuard);
    return OrderModuleGuard;
}());
exports.OrderModuleGuard = OrderModuleGuard;
//# sourceMappingURL=order.module.guard.js.map