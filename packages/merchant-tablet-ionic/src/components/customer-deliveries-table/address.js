"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var AddressComponent = (function () {
    function AddressComponent() {
    }
    AddressComponent.prototype.ngOnInit = function () {
        this.order = this.rowData.order;
    };
    AddressComponent.prototype.getCustomerFullAddress = function (order) {
        var addressUser = order.user;
        var geoLocation = addressUser.geoLocation;
        var fullAddress = geoLocation.city + ", " + geoLocation.streetAddress + " " + geoLocation.house;
        return fullAddress;
    };
    AddressComponent = tslib_1.__decorate([
        core_1.Component({
            template: "\n\t\t<span class=\"nameAddress\">\n\t\t\t<span *ngIf=\"order.isCompleted\" class=\"address\">{{\n\t\t\t\tgetCustomerFullAddress(order)\n\t\t\t}}</span>\n\t\t</span>\n\t",
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], AddressComponent);
    return AddressComponent;
}());
exports.AddressComponent = AddressComponent;
//# sourceMappingURL=address.js.map