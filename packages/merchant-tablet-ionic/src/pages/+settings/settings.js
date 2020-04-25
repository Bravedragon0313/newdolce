"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var warehouse_router_service_1 = require("@modules/client.common.angular2/routers/warehouse-router.service");
var store_service_1 = require("../../../src/services/store.service");
var SettingsPage = (function () {
    function SettingsPage(warehouseRouter, store) {
        this.warehouseRouter = warehouseRouter;
        this.store = store;
        this.selectedSegment = 'account';
        this.getLocalWarehouse();
    }
    Object.defineProperty(SettingsPage.prototype, "isLogged", {
        get: function () {
            return localStorage.getItem('_warehouseId');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SettingsPage.prototype, "isBrowser", {
        get: function () {
            return localStorage.getItem('_platform') === 'browser';
        },
        enumerable: true,
        configurable: true
    });
    SettingsPage.prototype.ionViewCanEnter = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var isLogged;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.store.isLogged()];
                    case 1:
                        isLogged = _a.sent();
                        return [2, this.store.maintenanceMode === null && isLogged];
                }
            });
        });
    };
    SettingsPage.prototype.getLocalWarehouse = function () {
        var _this = this;
        this.warehouseRouter
            .get(localStorage.getItem('_warehouseId'))
            .subscribe(function (warehouse) {
            _this._currWarehouse = warehouse;
        });
    };
    SettingsPage = tslib_1.__decorate([
        core_1.Component({
            selector: 'page-settings',
            templateUrl: 'settings.html',
            styleUrls: ['./settings.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [warehouse_router_service_1.WarehouseRouter,
            store_service_1.Store])
    ], SettingsPage);
    return SettingsPage;
}());
exports.SettingsPage = SettingsPage;
//# sourceMappingURL=settings.js.map