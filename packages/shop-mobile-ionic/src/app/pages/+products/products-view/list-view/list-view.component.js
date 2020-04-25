"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var product_locales_service_1 = require("@modules/client.common.angular2/locale/product-locales.service");
var operators_1 = require("rxjs/operators");
var initializeProductsNumber = 10;
var ProductsListViewComponent = (function () {
    function ProductsListViewComponent(translateProductLocales) {
        this.translateProductLocales = translateProductLocales;
        this.products = [];
        this.buy = new core_1.EventEmitter();
        this.goToDetailsPage = new core_1.EventEmitter();
        this.loadProducts = new core_1.EventEmitter();
        this.imageOrientation = 0;
        this.onChange = new core_1.EventEmitter();
    }
    ProductsListViewComponent_1 = ProductsListViewComponent;
    Object.defineProperty(ProductsListViewComponent.prototype, "showProducts", {
        get: function () {
            return this.products.filter(function (p) { return p.warehouseProduct.count !== 0; });
        },
        enumerable: true,
        configurable: true
    });
    ProductsListViewComponent.prototype.ngOnInit = function () {
        this.loadProducts.emit({
            count: initializeProductsNumber,
            imageOrientation: this.imageOrientation,
        });
    };
    ProductsListViewComponent.prototype.shortenDescription = function (desc) {
        return desc.length < ProductsListViewComponent_1.MAX_DESCRIPTION_LENGTH
            ? desc
            : desc.substr(0, ProductsListViewComponent_1.MAX_DESCRIPTION_LENGTH - 3) + '...';
    };
    ProductsListViewComponent.prototype.localeTranslate = function (member) {
        return this.translateProductLocales.getTranslate(member);
    };
    ProductsListViewComponent.prototype.loadData = function (event) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.loadProducts.emit({
                            count: initializeProductsNumber,
                            imageOrientation: this.imageOrientation,
                        })];
                    case 1:
                        _a.sent();
                        return [4, this.$areProductsLoaded.pipe(operators_1.first()).toPromise()];
                    case 2:
                        _a.sent();
                        event.target.complete();
                        return [2];
                }
            });
        });
    };
    var ProductsListViewComponent_1;
    ProductsListViewComponent.MAX_DESCRIPTION_LENGTH = 53;
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Array)
    ], ProductsListViewComponent.prototype, "products", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", String)
    ], ProductsListViewComponent.prototype, "placeholder", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], ProductsListViewComponent.prototype, "areProductsLoaded", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Number)
    ], ProductsListViewComponent.prototype, "productsCount", void 0);
    tslib_1.__decorate([
        core_1.Output(),
        tslib_1.__metadata("design:type", Object)
    ], ProductsListViewComponent.prototype, "buy", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", core_1.EventEmitter)
    ], ProductsListViewComponent.prototype, "$areProductsLoaded", void 0);
    tslib_1.__decorate([
        core_1.Output(),
        tslib_1.__metadata("design:type", Object)
    ], ProductsListViewComponent.prototype, "goToDetailsPage", void 0);
    tslib_1.__decorate([
        core_1.Output(),
        tslib_1.__metadata("design:type", Object)
    ], ProductsListViewComponent.prototype, "loadProducts", void 0);
    ProductsListViewComponent = ProductsListViewComponent_1 = tslib_1.__decorate([
        core_1.Component({
            selector: 'e-cu-products-list-view',
            templateUrl: './list-view.component.html',
            styleUrls: ['./list-view.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [product_locales_service_1.ProductLocalesService])
    ], ProductsListViewComponent);
    return ProductsListViewComponent;
}());
exports.ProductsListViewComponent = ProductsListViewComponent;
//# sourceMappingURL=list-view.component.js.map