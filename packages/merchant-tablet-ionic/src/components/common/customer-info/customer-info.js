"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var UserOrder_1 = tslib_1.__importDefault(require("@modules/server.common/entities/UserOrder"));
var CustomerInfoComponent = (function () {
    function CustomerInfoComponent() {
    }
    Object.defineProperty(CustomerInfoComponent.prototype, "userFullName", {
        get: function () {
            var fullName = (this.user.firstName || '') + " " + (this.user.lastName || '');
            return fullName.trim();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomerInfoComponent.prototype, "fullAddress", {
        get: function () {
            return (this.user.geoLocation.city + ", " + this.user.geoLocation.streetAddress + " " +
                ("" + this.user.geoLocation.house) +
                ("" + (this.user.apartment ? '/' + this.user.apartment : '')));
        },
        enumerable: true,
        configurable: true
    });
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", UserOrder_1.default)
    ], CustomerInfoComponent.prototype, "user", void 0);
    CustomerInfoComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'customer-info',
            styleUrls: ['./customer-info.scss'],
            templateUrl: 'customer-info.html',
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], CustomerInfoComponent);
    return CustomerInfoComponent;
}());
exports.CustomerInfoComponent = CustomerInfoComponent;
//# sourceMappingURL=customer-info.js.map