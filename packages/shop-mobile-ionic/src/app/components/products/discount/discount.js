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
            selector: 'e-cu-discount',
            styleUrls: ['./discount.scss'],
            template: "\n\t\t<div *ngIf=\"getDiscount() != 0\" class=\"discount-circle brand-light\">\n\t\t\t<div class=\"price-initial\">\n\t\t\t\t{{ currentProduct ? '$' + currentProduct.initialPrice : '' }}\n\t\t\t</div>\n\t\t\t<span\n\t\t\t\t><i class=\"fa fa-scissors\" aria-hidden=\"true\"></i>\n\t\t\t\t{{ getDiscount() }}%</span\n\t\t\t>\n\t\t</div>\n\t",
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], DiscountComponent);
    return DiscountComponent;
}());
exports.DiscountComponent = DiscountComponent;
//# sourceMappingURL=discount.js.map