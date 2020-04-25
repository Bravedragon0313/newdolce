"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var store_service_1 = require("../../services/store.service");
var ProductsPageGuard = (function () {
    function ProductsPageGuard(store, router) {
        this.store = store;
        this.router = router;
    }
    ProductsPageGuard.prototype.canActivate = function (route, state) {
        if (this.store.orderId != null && state.url === '/products') {
            this.router.navigate(['products', 'order']);
        }
        return true;
    };
    ProductsPageGuard = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [store_service_1.Store,
            router_1.Router])
    ], ProductsPageGuard);
    return ProductsPageGuard;
}());
exports.ProductsPageGuard = ProductsPageGuard;
//# sourceMappingURL=products.page.guard.js.map