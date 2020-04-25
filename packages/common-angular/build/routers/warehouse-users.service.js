"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("../lib/router");
var WarehouseUsersService = (function () {
    function WarehouseUsersService(routerFactory) {
        this.router = routerFactory.create('warehouse-users');
    }
    WarehouseUsersService.prototype.get = function (warehouseId) {
        return this.router.runAndObserve('get', warehouseId);
    };
    WarehouseUsersService = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [router_1.RouterFactory])
    ], WarehouseUsersService);
    return WarehouseUsersService;
}());
exports.WarehouseUsersService = WarehouseUsersService;
//# sourceMappingURL=warehouse-users.service.js.map