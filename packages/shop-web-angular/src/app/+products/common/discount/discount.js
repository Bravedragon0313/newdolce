"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var WarehouseProduct_1 = tslib_1.__importDefault(require("@modules/server.common/entities/WarehouseProduct"));
var DiscountComponent = (function () {
    function DiscountComponent() {
    }
    DiscountComponent.prototype.getDiscount = function () {
        if (!this.currentProduct ||
            this.currentProduct == null ||
            !this.currentProduct.initialPrice ||
            this.currentProduct.price === this.currentProduct.initialPrice) {
            return 0;
        }
        return Math.floor((1 - this.currentProduct.price / this.currentProduct.initialPrice) *
            100);
    };
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", WarehouseProduct_1.default)
    ], DiscountComponent.prototype, "currentProduct", void 0);
    DiscountComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'product-discount',
            styleUrls: ['./discount.scss'],
            templateUrl: './discount.html',
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], DiscountComponent);
    return DiscountComponent;
}());
exports.DiscountComponent = DiscountComponent;
//# sourceMappingURL=discount.js.map