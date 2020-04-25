"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var Order_1 = tslib_1.__importDefault(require("@modules/server.common/entities/Order"));
var product_locales_service_1 = require("@modules/client.common.angular2/locale/product-locales.service");
var OrderWithoutCarrierComponent = (function () {
    function OrderWithoutCarrierComponent(_translateProductLocales) {
        this._translateProductLocales = _translateProductLocales;
    }
    Object.defineProperty(OrderWithoutCarrierComponent.prototype, "hasProducts", {
        get: function () {
            if (this.order && this.order.products && this.order.products.length) {
                return true;
            }
            return false;
        },
        enumerable: true,
        configurable: true
    });
    OrderWithoutCarrierComponent.prototype.localeTranslate = function (member) {
        return this._translateProductLocales.getTranslate(member);
    };
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Function)
    ], OrderWithoutCarrierComponent.prototype, "getWarehouseStatus", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Order_1.default)
    ], OrderWithoutCarrierComponent.prototype, "order", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Object)
    ], OrderWithoutCarrierComponent.prototype, "onUpdateWarehouseStatus", void 0);
    OrderWithoutCarrierComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'order-without-carrier',
            templateUrl: 'order-without-carrier.html',
            styleUrls: ['./order-without-carrier.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [product_locales_service_1.ProductLocalesService])
    ], OrderWithoutCarrierComponent);
    return OrderWithoutCarrierComponent;
}());
exports.OrderWithoutCarrierComponent = OrderWithoutCarrierComponent;
//# sourceMappingURL=order-without-carrier.js.map