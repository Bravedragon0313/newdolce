"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var store_service_1 = require("../../../services/store.service");
var router_1 = require("@angular/router");
var warehouse_products_1 = require("app/services/merchants/warehouse-products");
var ProductsViewComponent = (function () {
    function ProductsViewComponent(store, router, warehouseProductsService) {
        this.store = store;
        this.router = router;
        this.warehouseProductsService = warehouseProductsService;
        this.buy = new core_1.EventEmitter();
        this.loadProducts = new core_1.EventEmitter();
    }
    ProductsViewComponent.prototype.ngOnChanges = function (_a) {
        var products = _a.products;
    };
    ProductsViewComponent.prototype.goToDetailsPage = function (product) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var prod, loadedProduct;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.warehouseProductsService.getWarehouseProduct(product.warehouseId, product.warehouseProduct.id)];
                    case 1:
                        prod = _a.sent();
                        if (prod) {
                            this.router.navigate([
                                "/products/product-details/" + product.warehouseProduct.product['id'],
                            ], {
                                queryParams: {
                                    backUrl: '/products',
                                    warehouseId: product.warehouseId,
                                },
                            });
                        }
                        else {
                            loadedProduct = this.products.find(function (p) { return p.warehouseProduct.id === product.warehouseProduct.id; });
                            if (loadedProduct) {
                                loadedProduct['soldOut'] = true;
                            }
                        }
                        return [2];
                }
            });
        });
    };
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Array)
    ], ProductsViewComponent.prototype, "products", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], ProductsViewComponent.prototype, "areProductsLoaded", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", String)
    ], ProductsViewComponent.prototype, "placeholder", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Number)
    ], ProductsViewComponent.prototype, "productsCount", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", core_1.EventEmitter)
    ], ProductsViewComponent.prototype, "$areProductsLoaded", void 0);
    tslib_1.__decorate([
        core_1.Output(),
        tslib_1.__metadata("design:type", Object)
    ], ProductsViewComponent.prototype, "buy", void 0);
    tslib_1.__decorate([
        core_1.Output(),
        tslib_1.__metadata("design:type", Object)
    ], ProductsViewComponent.prototype, "loadProducts", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", String)
    ], ProductsViewComponent.prototype, "type", void 0);
    ProductsViewComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'e-cu-products-view',
            templateUrl: './products-view.component.html',
            styleUrls: ['./products-view.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [store_service_1.Store,
            router_1.Router,
            warehouse_products_1.WarehouseProductsService])
    ], ProductsViewComponent);
    return ProductsViewComponent;
}());
exports.ProductsViewComponent = ProductsViewComponent;
//# sourceMappingURL=products-view.component.js.map