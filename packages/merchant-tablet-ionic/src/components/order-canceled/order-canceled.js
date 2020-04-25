"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var Order_1 = tslib_1.__importDefault(require("@modules/server.common/entities/Order"));
var product_locales_service_1 = require("@modules/client.common.angular2/locale/product-locales.service");
var OrderCanceledComponent = (function () {
    function OrderCanceledComponent(_translateProductLocales) {
        this._translateProductLocales = _translateProductLocales;
    }
    OrderCanceledComponent.prototype.localeTranslate = function (member) {
        return this._translateProductLocales.getTranslate(member);
    };
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Function)
    ], OrderCanceledComponent.prototype, "getWarehouseStatus", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Order_1.default)
    ], OrderCanceledComponent.prototype, "order", void 0);
    OrderCanceledComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'order-canceled',
            templateUrl: 'order-canceled.html',
        }),
        tslib_1.__metadata("design:paramtypes", [product_locales_service_1.ProductLocalesService])
    ], OrderCanceledComponent);
    return OrderCanceledComponent;
}());
exports.OrderCanceledComponent = OrderCanceledComponent;
//# sourceMappingURL=order-canceled.js.map