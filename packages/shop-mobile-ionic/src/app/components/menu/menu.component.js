"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var call_number_1 = require("@ionic-native/call-number");
var environment_1 = require("environments/environment");
var store_service_1 = require("app/services/store.service");
var warehouse_router_service_1 = require("@modules/client.common.angular2/routers/warehouse-router.service");
var operators_1 = require("rxjs/operators");
var MenuComponent = (function () {
    function MenuComponent(store, warehouseRouter) {
        this.store = store;
        this.warehouseRouter = warehouseRouter;
        this._ourSupportNumber = environment_1.environment.SUPPORT_NUMBER;
    }
    Object.defineProperty(MenuComponent.prototype, "maintenanceMode", {
        get: function () {
            return this.store.maintenanceMode;
        },
        enumerable: true,
        configurable: true
    });
    MenuComponent.prototype.menuOpened = function () {
        this.loadMerchant();
    };
    MenuComponent.prototype.callUs = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var err_1;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4, call_number_1.CallNumber.callNumber(this._ourSupportNumber, true)];
                    case 1:
                        _a.sent();
                        return [3, 3];
                    case 2:
                        err_1 = _a.sent();
                        console.error('Call Was Unsuccessful!');
                        return [3, 3];
                    case 3: return [2];
                }
            });
        });
    };
    MenuComponent.prototype.loadMerchant = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!this.store.inStore) return [3, 2];
                        _a = this;
                        return [4, this.warehouseRouter
                                .get(this.store.inStore, false)
                                .pipe(operators_1.first())
                                .toPromise()];
                    case 1:
                        _a.merchant = _b.sent();
                        return [3, 3];
                    case 2:
                        this.merchant = null;
                        _b.label = 3;
                    case 3: return [2];
                }
            });
        });
    };
    MenuComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'e-cu-menu',
            templateUrl: './menu.component.html',
            styleUrls: ['./menu.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [store_service_1.Store,
            warehouse_router_service_1.WarehouseRouter])
    ], MenuComponent);
    return MenuComponent;
}());
exports.MenuComponent = MenuComponent;
//# sourceMappingURL=menu.component.js.map