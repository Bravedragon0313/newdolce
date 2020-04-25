"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var store_service_1 = require("app/services/store.service");
var DeliveryType_1 = tslib_1.__importDefault(require("@modules/server.common/enums/DeliveryType"));
var OrderTakeawayInfoModuleGuard = (function () {
    function OrderTakeawayInfoModuleGuard(store, router) {
        this.store = store;
        this.router = router;
    }
    OrderTakeawayInfoModuleGuard.prototype.canLoad = function (route) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var isLogged;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.store.isLogged()];
                    case 1:
                        isLogged = _a.sent();
                        if (!isLogged) {
                            this.router.navigate(['invite']);
                            return [2, false];
                        }
                        if (this.store.deliveryType === DeliveryType_1.default.Delivery) {
                            this.router.navigate(['order-info']);
                            return [2, false];
                        }
                        return [2, true];
                }
            });
        });
    };
    OrderTakeawayInfoModuleGuard = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [store_service_1.Store,
            router_1.Router])
    ], OrderTakeawayInfoModuleGuard);
    return OrderTakeawayInfoModuleGuard;
}());
exports.OrderTakeawayInfoModuleGuard = OrderTakeawayInfoModuleGuard;
//# sourceMappingURL=takeaway-page.module.guard.js.map