"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var TotalComponent = (function () {
    function TotalComponent() {
    }
    TotalComponent.prototype.ngOnInit = function () {
        this.user = this.rowData.user;
        this.orders = this.rowData.allOrders;
    };
    TotalComponent.prototype.getTotalPrice = function (userId) {
        var orders = this.orders
            .filter(function (o) { return o.isPaid; })
            .filter(function (o) { return o.user.id === userId; });
        var totalPrice = 0;
        if (orders.length > 0) {
            totalPrice = orders
                .map(function (o) { return o.totalPrice; })
                .reduce(function (a, b) { return a + b; });
        }
        return totalPrice;
    };
    TotalComponent = tslib_1.__decorate([
        core_1.Component({
            template: "\n\t\t<div class=\"text-center\" *ngIf=\"rowData?.total !== 0\">\n\t\t\t<span>{{ '$' + rowData?.total }}</span>\n\t\t\t<div></div>\n\t\t</div>\n\t",
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], TotalComponent);
    return TotalComponent;
}());
exports.TotalComponent = TotalComponent;
//# sourceMappingURL=total.js.map