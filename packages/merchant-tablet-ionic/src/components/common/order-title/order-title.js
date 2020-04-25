"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var utils_1 = require("@modules/server.common/utils");
var OrderTitleComponent = (function () {
    function OrderTitleComponent() {
    }
    Object.defineProperty(OrderTitleComponent.prototype, "orderName", {
        get: function () {
            return utils_1.getIdFromTheDate(this.order);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OrderTitleComponent.prototype, "userFullName", {
        get: function () {
            var fullName = (this.order.user.firstName || '') + " " + (this.order.user.lastName || '');
            return fullName.trim();
        },
        enumerable: true,
        configurable: true
    });
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Object)
    ], OrderTitleComponent.prototype, "order", void 0);
    OrderTitleComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'order-title',
            styleUrls: ['./order-title.scss'],
            templateUrl: 'order-title.html',
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], OrderTitleComponent);
    return OrderTitleComponent;
}());
exports.OrderTitleComponent = OrderTitleComponent;
//# sourceMappingURL=order-title.js.map