"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var warehouse_orders_router_service_1 = require("@modules/client.common.angular2/routers/warehouse-orders-router.service");
var product_locales_service_1 = require("@modules/client.common.angular2/locale/product-locales.service");
var store_1 = require("app/services/store");
var BuyProductComponent = (function () {
    function BuyProductComponent(warehouseOrdersRouter, _productLocalesService, store) {
        this.warehouseOrdersRouter = warehouseOrdersRouter;
        this._productLocalesService = _productLocalesService;
        this.store = store;
    }
    BuyProductComponent.prototype.createOrder = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                this.warehouseOrdersRouter.createByProductType(this.user._id.toString(), this.warehouse._id.toString(), this.warehouseProduct._id.toString(), this.store.deliveryType);
                return [2];
            });
        });
    };
    BuyProductComponent.prototype.localeTranslate = function (member) {
        return this._productLocalesService.getTranslate(member);
    };
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Object)
    ], BuyProductComponent.prototype, "warehouse", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Object)
    ], BuyProductComponent.prototype, "warehouseProduct", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Object)
    ], BuyProductComponent.prototype, "user", void 0);
    BuyProductComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'taggroup-remove-modal',
            templateUrl: './buy-product.component.html',
        }),
        tslib_1.__metadata("design:paramtypes", [warehouse_orders_router_service_1.WarehouseOrdersRouter,
            product_locales_service_1.ProductLocalesService,
            store_1.Store])
    ], BuyProductComponent);
    return BuyProductComponent;
}());
exports.BuyProductComponent = BuyProductComponent;
//# sourceMappingURL=buy-product.component.js.map