"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var CustomerComponent = (function () {
    function CustomerComponent() {
    }
    CustomerComponent.prototype.ngOnInit = function () {
        this.order = this.rowData.order;
    };
    CustomerComponent.prototype.getUserName = function (order) {
        var user = order.user;
        if (user.firstName) {
            if (user.lastName) {
                return user.firstName + ' ' + user.lastName;
            }
            return user.firstName;
        }
    };
    CustomerComponent = tslib_1.__decorate([
        core_1.Component({
            template: "\n\t\t<span class=\"nameAddress\">\n\t\t\t<strong *ngIf=\"getUserName(order)\">{{ getUserName(order) }}</strong>\n\t\t\t<div class=\"address\">{{ order.user.fullAddress }}</div>\n\t\t</span>\n\t",
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], CustomerComponent);
    return CustomerComponent;
}());
exports.CustomerComponent = CustomerComponent;
//# sourceMappingURL=customer.js.map