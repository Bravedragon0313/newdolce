"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var warehouse_products_service_1 = require("../../../services/warehouse-products.service");
var WarehouseProduct_1 = tslib_1.__importDefault(require("@modules/server.common/entities/WarehouseProduct"));
var product_locales_service_1 = require("@modules/client.common.angular2/locale/product-locales.service");
var warehouse_products_router_service_1 = require("@modules/client.common.angular2/routers/warehouse-products-router.service");
var angular_1 = require("@ionic/angular");
var AllProductsComponent = (function () {
    function AllProductsComponent(warehouseProductsService, translateProductLocales, warehouseProductsRouter, modalCtrl) {
        this.warehouseProductsService = warehouseProductsService;
        this.translateProductLocales = translateProductLocales;
        this.warehouseProductsRouter = warehouseProductsRouter;
        this.modalCtrl = modalCtrl;
        this.allProducts = [];
        this.masonryOptions = {
            itemSelector: '.masonry-item',
            columnWidth: 234,
            transitionDuration: '0.2s',
            gutter: 10,
            resize: true,
            initLayout: true,
            fitWidth: true,
        };
        this.page = 1;
        this.updateMasonryLayout = false;
        this.showNoProductsIcon = false;
    }
    AllProductsComponent.prototype.ngOnInit = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                this.warehouseProductsService
                    .getProductsCount(this.warehouseId)
                    .then(function (count) {
                    count === 0
                        ? (_this.showNoProductsIcon = true)
                        : (_this.showNoProductsIcon = false);
                    _this.productsCount = count;
                });
                this.loadPage(this.page);
                return [2];
            });
        });
    };
    AllProductsComponent.prototype.loadPage = function (page) {
        var _this = this;
        if (this.products$) {
            this.products$.unsubscribe();
        }
        this.products$ = this.warehouseProductsService
            .getProductsWithPagination(this.warehouseId, {
            skip: (page - 1) * 10,
            limit: 10,
        })
            .subscribe(function (products) {
            _this.updateMasonryLayout = true;
            _this.allProducts = products.map(function (p) {
                return new WarehouseProduct_1.default({
                    _id: p._id,
                    count: p.count,
                    product: p.product,
                    isManufacturing: p.isManufacturing,
                    isCarrierRequired: p.isCarrierRequired,
                    isDeliveryRequired: p.isCarrierRequired,
                    isTakeaway: p.isTakeaway,
                    _createdAt: p._createdAt,
                    _updatedAt: p._updatedAt,
                    price: p.price,
                    initialPrice: p.initialPrice,
                });
            });
            _this.page = page;
        });
    };
    AllProductsComponent.prototype.ngOnDestroy = function () {
        if (this.products$) {
            this.products$.unsubscribe();
        }
    };
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", String)
    ], AllProductsComponent.prototype, "warehouseId", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Function)
    ], AllProductsComponent.prototype, "presentCreateProductPopover", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Function)
    ], AllProductsComponent.prototype, "addProduct", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Function)
    ], AllProductsComponent.prototype, "getWarehouseProductImageUrl", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Function)
    ], AllProductsComponent.prototype, "openEditProductModal", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Function)
    ], AllProductsComponent.prototype, "truncateTitle", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Function)
    ], AllProductsComponent.prototype, "localeTranslate", void 0);
    AllProductsComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'merchant-all-products',
            templateUrl: 'all-products.component.html',
            styleUrls: ['all-products.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [warehouse_products_service_1.WarehouseProductsService,
            product_locales_service_1.ProductLocalesService,
            warehouse_products_router_service_1.WarehouseProductsRouter,
            angular_1.ModalController])
    ], AllProductsComponent);
    return AllProductsComponent;
}());
exports.AllProductsComponent = AllProductsComponent;
//# sourceMappingURL=all-products.component.js.map