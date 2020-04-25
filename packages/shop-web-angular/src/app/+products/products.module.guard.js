"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var store_1 = require("app/services/store");
var ProductsModuleGuard = (function () {
    function ProductsModuleGuard(router, store) {
        this.router = router;
        this.store = store;
    }
    ProductsModuleGuard.prototype.canActivate = function (route, state) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2, true];
            });
        });
    };
    ProductsModuleGuard = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [router_1.Router,
            store_1.Store])
    ], ProductsModuleGuard);
    return ProductsModuleGuard;
}());
exports.ProductsModuleGuard = ProductsModuleGuard;
//# sourceMappingURL=products.module.guard.js.map