"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var Order_1 = tslib_1.__importDefault(require("@modules/server.common/entities/Order"));
var product_locales_service_1 = require("@modules/client.common.angular2/locale/product-locales.service");
var OrderWarehousePreparationProblemComponent = (function () {
    function OrderWarehousePreparationProblemComponent(_translateProductLocales) {
        this._translateProductLocales = _translateProductLocales;
    }
    OrderWarehousePreparationProblemComponent.prototype.localeTranslate = function (member) {
        return this._translateProductLocales.getTranslate(member);
    };
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Function)
    ], OrderWarehousePreparationProblemComponent.prototype, "getWarehouseStatus", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Order_1.default)
    ], OrderWarehousePreparationProblemComponent.prototype, "order", void 0);
    OrderWarehousePreparationProblemComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'order-warehouse-preparation-problem',
            templateUrl: 'order-warehouse-preparation-problem.html',
        }),
        tslib_1.__metadata("design:paramtypes", [product_locales_service_1.ProductLocalesService])
    ], OrderWarehousePreparationProblemComponent);
    return OrderWarehousePreparationProblemComponent;
}());
exports.OrderWarehousePreparationProblemComponent = OrderWarehousePreparationProblemComponent;
//# sourceMappingURL=order-warehouse-preparation-problem.js.map