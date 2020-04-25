"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var product_locales_service_1 = require("@modules/client.common.angular2/locale/product-locales.service");
var Order_1 = tslib_1.__importDefault(require("@modules/server.common/entities/Order"));
var OrderImageComponent = (function () {
    function OrderImageComponent(productLocalesService) {
        this.productLocalesService = productLocalesService;
    }
    OrderImageComponent.prototype.getOrderDate = function (date) {
        return new Date(date).getDate();
    };
    OrderImageComponent.prototype.getOrderMonth = function (date) {
        return new Date(date).getMonth() + 1;
    };
    OrderImageComponent.prototype.getProductImages = function (images) {
        return tslib_1.__spreadArrays(images).sort(function (a, b) {
            return b.orientation - a.orientation;
        });
    };
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Order_1.default)
    ], OrderImageComponent.prototype, "order", void 0);
    OrderImageComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'order-image',
            styleUrls: ['./order-image.scss'],
            templateUrl: 'order-image.html',
        }),
        tslib_1.__metadata("design:paramtypes", [product_locales_service_1.ProductLocalesService])
    ], OrderImageComponent);
    return OrderImageComponent;
}());
exports.OrderImageComponent = OrderImageComponent;
//# sourceMappingURL=order-image.js.map