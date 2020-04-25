"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var product_locales_service_1 = require("@modules/client.common.angular2/locale/product-locales.service");
var CarouselViewComponent = (function () {
    function CarouselViewComponent(productLocalesService) {
        this.productLocalesService = productLocalesService;
        this.currentIndex = 0;
        this.direction = 'right';
        this.productsCount = 5;
        this.loadProducts = new core_1.EventEmitter();
    }
    CarouselViewComponent.prototype.localeTranslate = function (member) {
        return this.productLocalesService.getTranslate(member);
    };
    CarouselViewComponent.prototype.getImageOrientation = function (images) {
        var _this = this;
        return images.find(function (i) { return i.url === _this.localeTranslate(images); }).orientation;
    };
    CarouselViewComponent.prototype.showRight = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var productsLength;
            return tslib_1.__generator(this, function (_a) {
                productsLength = this.products.length;
                if (this.currentIndex + 1 >= productsLength - 3) {
                    this.loadProducts.emit(this.productsCount);
                }
                return [2];
            });
        });
    };
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Array)
    ], CarouselViewComponent.prototype, "products", void 0);
    tslib_1.__decorate([
        core_1.Output(),
        tslib_1.__metadata("design:type", Object)
    ], CarouselViewComponent.prototype, "loadProducts", void 0);
    CarouselViewComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'carousel-view',
            styleUrls: ['./carousel-view.component.scss'],
            templateUrl: './carousel-view.component.html',
        }),
        tslib_1.__metadata("design:paramtypes", [product_locales_service_1.ProductLocalesService])
    ], CarouselViewComponent);
    return CarouselViewComponent;
}());
exports.CarouselViewComponent = CarouselViewComponent;
//# sourceMappingURL=carousel-view.component.js.map