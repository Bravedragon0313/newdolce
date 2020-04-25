"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var WarehouseComponent = (function () {
    function WarehouseComponent() {
    }
    WarehouseComponent.prototype.ngOnInit = function () {
        this.order = this.rowData.order;
    };
    WarehouseComponent.prototype.getStoreName = function (order) {
        var store = order.warehouse;
        if (store)
            return store.name;
        return null;
    };
    WarehouseComponent.prototype.getStoreFullAddress = function (order) {
        var store = order.warehouse;
        var geoLocation = store.geoLocation;
        var fullAddress = geoLocation.city + ", " + geoLocation.streetAddress + " " + geoLocation.house;
        return fullAddress;
    };
    WarehouseComponent = tslib_1.__decorate([
        core_1.Component({
            template: "\n\t\t<span class=\"storeAddress\">\n\t\t\t<strong *ngIf=\"getStoreName(order)\">{{\n\t\t\t\tgetStoreName(order)\n\t\t\t}}</strong>\n\t\t\t<div class=\"address\">{{ getStoreFullAddress(order) }}</div>\n\t\t</span>\n\t",
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], WarehouseComponent);
    return WarehouseComponent;
}());
exports.WarehouseComponent = WarehouseComponent;
//# sourceMappingURL=warehouse.js.map