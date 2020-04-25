"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var OrderIdComponent = (function () {
    function OrderIdComponent() {
    }
    OrderIdComponent.prototype.ngOnInit = function () {
        this.orderId = this.rowData.orderId;
    };
    OrderIdComponent = tslib_1.__decorate([
        core_1.Component({
            template: " <strong *ngIf=\"orderId\">{{ orderId }}</strong> ",
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], OrderIdComponent);
    return OrderIdComponent;
}());
exports.OrderIdComponent = OrderIdComponent;
//# sourceMappingURL=orderId.js.map