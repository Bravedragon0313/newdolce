"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var warehouse_products_router_service_1 = require("@modules/client.common.angular2/routers/warehouse-products-router.service");
var product_locales_service_1 = require("@modules/client.common.angular2/locale/product-locales.service");
var angular_1 = require("@ionic/angular");
var TopProductsComponent = (function () {
    function TopProductsComponent(warehouseProductsRouter, modalCtrl, translateProductLocales) {
        this.warehouseProductsRouter = warehouseProductsRouter;
        this.modalCtrl = modalCtrl;
        this.translateProductLocales = translateProductLocales;
        this.topProducts = [];
        this.showNoProductsIcon = false;
    }
    TopProductsComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.topProducts$) {
            this.topProducts$.unsubscribe();
        }
        this.topProducts$ = this.warehouseProductsRouter
            .getTopProducts(this.warehouseId, 20)
            .subscribe(function (products) {
            products.length === 0
                ? (_this.showNoProductsIcon = true)
                : (_this.showNoProductsIcon = false);
            _this.topProducts = products;
        });
    };
    TopProductsComponent.prototype.ngOnDestroy = function () {
        if (this.topProducts$) {
            this.topProducts$.unsubscribe();
        }
    };
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", String)
    ], TopProductsComponent.prototype, "warehouseId", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Function)
    ], TopProductsComponent.prototype, "presentCreateProductPopover", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Function)
    ], TopProductsComponent.prototype, "addProduct", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Function)
    ], TopProductsComponent.prototype, "getWarehouseProductImageUrl", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Function)
    ], TopProductsComponent.prototype, "openEditProductModal", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Function)
    ], TopProductsComponent.prototype, "truncateTitle", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Function)
    ], TopProductsComponent.prototype, "localeTranslate", void 0);
    TopProductsComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'merchant-top-products',
            templateUrl: 'top-products.component.html',
            styleUrls: ['../common/no-orders-info/no-orders-info.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [warehouse_products_router_service_1.WarehouseProductsRouter,
            angular_1.ModalController,
            product_locales_service_1.ProductLocalesService])
    ], TopProductsComponent);
    return TopProductsComponent;
}());
exports.TopProductsComponent = TopProductsComponent;
//# sourceMappingURL=top-products.component.js.map