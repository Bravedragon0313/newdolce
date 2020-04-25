"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var WarehouseOrderInputComponent = (function () {
    function WarehouseOrderInputComponent() {
        this.amount = new core_1.EventEmitter();
        this._productAmount = 0;
    }
    Object.defineProperty(WarehouseOrderInputComponent.prototype, "warehouseAvailableProducts", {
        get: function () {
            return +this.value.available;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WarehouseOrderInputComponent.prototype, "productId", {
        get: function () {
            return this.value.productId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WarehouseOrderInputComponent.prototype, "productAmount", {
        get: function () {
            return this._productAmount;
        },
        set: function (amount) {
            this._productAmount = amount;
            this.amount.emit(amount);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WarehouseOrderInputComponent.prototype, "warehouseHasAvailable", {
        get: function () {
            return this._productAmount < this.warehouseAvailableProducts;
        },
        enumerable: true,
        configurable: true
    });
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Object)
    ], WarehouseOrderInputComponent.prototype, "value", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Object)
    ], WarehouseOrderInputComponent.prototype, "rowData", void 0);
    tslib_1.__decorate([
        core_1.Output(),
        tslib_1.__metadata("design:type", Object)
    ], WarehouseOrderInputComponent.prototype, "amount", void 0);
    WarehouseOrderInputComponent = tslib_1.__decorate([
        core_1.Component({
            styles: ['.order-input-wrapper { text-align: center; }'],
            template: "\n\t\t<div class=\"order-input-wrapper\">\n\t\t\t<button\n\t\t\t\t(click)=\"productAmount = productAmount - 1\"\n\t\t\t\t[disabled]=\"productAmount <= 0\"\n\t\t\t\tclass=\"btn btn-sm btn-secondary p-2\"\n\t\t\t>\n\t\t\t\t-\n\t\t\t</button>\n\n\t\t\t<span class=\"mx-2\">{{ productAmount }}</span>\n\n\t\t\t<button\n\t\t\t\t(click)=\"productAmount = productAmount + 1\"\n\t\t\t\t[disabled]=\"!warehouseHasAvailable\"\n\t\t\t\tclass=\"btn btn-sm btn-secondary p-2\"\n\t\t\t>\n\t\t\t\t+\n\t\t\t</button>\n\t\t</div>\n\t",
        })
    ], WarehouseOrderInputComponent);
    return WarehouseOrderInputComponent;
}());
exports.WarehouseOrderInputComponent = WarehouseOrderInputComponent;
//# sourceMappingURL=warehouse-order-input.component.js.map