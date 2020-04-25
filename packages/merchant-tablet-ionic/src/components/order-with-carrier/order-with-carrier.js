"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var Order_1 = tslib_1.__importDefault(require("@modules/server.common/entities/Order"));
var OrderWarehouseStatus_1 = tslib_1.__importDefault(require("@modules/server.common/enums/OrderWarehouseStatus"));
var product_locales_service_1 = require("@modules/client.common.angular2/locale/product-locales.service");
var OrderWithCarrierComponent = (function () {
    function OrderWithCarrierComponent(_translateProductLocales) {
        this._translateProductLocales = _translateProductLocales;
    }
    OrderWithCarrierComponent.prototype.isGivenToCarrier = function () {
        return (this.order.warehouseStatus === OrderWarehouseStatus_1.default.GivenToCarrier);
    };
    OrderWithCarrierComponent.prototype.localeTranslate = function (member) {
        return this._translateProductLocales.getTranslate(member);
    };
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Function)
    ], OrderWithCarrierComponent.prototype, "getWarehouseStatus", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Order_1.default)
    ], OrderWithCarrierComponent.prototype, "order", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Object)
    ], OrderWithCarrierComponent.prototype, "onUpdateWarehouseStatus", void 0);
    OrderWithCarrierComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'order-with-carrier',
            templateUrl: 'order-with-carrier.html',
            styleUrls: ['./order-with-carrier.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [product_locales_service_1.ProductLocalesService])
    ], OrderWithCarrierComponent);
    return OrderWithCarrierComponent;
}());
exports.OrderWithCarrierComponent = OrderWithCarrierComponent;
//# sourceMappingURL=order-with-carrier.js.map