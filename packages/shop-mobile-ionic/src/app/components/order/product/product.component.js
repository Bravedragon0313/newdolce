"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var product_locales_service_1 = require("../../../services/product-locales.service");
var OrderProduct_1 = tslib_1.__importDefault(require("@modules/server.common/entities/OrderProduct"));
var store_service_1 = require("../../../services/store.service");
var ProductComponent = (function () {
    function ProductComponent(translateProductLocales, store) {
        this.translateProductLocales = translateProductLocales;
        this.store = store;
        this.showDetailsButton = false;
    }
    ProductComponent_1 = ProductComponent;
    Object.defineProperty(ProductComponent.prototype, "title", {
        get: function () {
            return this.translateProductLocales.getTranslate(this.orderProduct.product.title);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProductComponent.prototype, "description", {
        get: function () {
            var description = this.translateProductLocales.getTranslate(this.orderProduct.product.description);
            return description.length < ProductComponent_1.MAX_DESCRIPTION_LENGTH
                ? description
                : description.substring(0, ProductComponent_1.MAX_DESCRIPTION_LENGTH - 3) + '...';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProductComponent.prototype, "image", {
        get: function () {
            var _this = this;
            return (this.orderProduct.product.images.find(function (product) { return product.locale === _this.store.language; }) ||
                this.orderProduct.product.images.find(function (product) { return product.locale === 'en-US'; }));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProductComponent.prototype, "imageClass", {
        get: function () {
            switch (this.image.orientation) {
                case 1:
                    return 'vertical';
                case 2:
                    return 'horizontal';
                default:
                    return 'square';
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProductComponent.prototype, "count", {
        get: function () {
            return this.orderProduct.count;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProductComponent.prototype, "price", {
        get: function () {
            return this.orderProduct.count * this.orderProduct.price;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProductComponent.prototype, "showInsideDetailsButton", {
        get: function () {
            var description = this.translateProductLocales.getTranslate(this.orderProduct.product.description);
            var isTwoRowsDesc = description.length > ProductComponent_1.MAX_DESCRIPTION_LENGTH / 2;
            return (this.showDetailsButton &&
                !isTwoRowsDesc &&
                this.image.orientation === 1);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProductComponent.prototype, "showOutsideDetailsButton", {
        get: function () {
            var description = this.translateProductLocales.getTranslate(this.orderProduct.product.description);
            var isTwoRowsDesc = description.length > ProductComponent_1.MAX_DESCRIPTION_LENGTH / 2;
            return (this.showDetailsButton &&
                (this.image.orientation !== 1 || isTwoRowsDesc));
        },
        enumerable: true,
        configurable: true
    });
    var ProductComponent_1;
    ProductComponent.MAX_DESCRIPTION_LENGTH = 53;
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", OrderProduct_1.default)
    ], ProductComponent.prototype, "orderProduct", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], ProductComponent.prototype, "showDetailsButton", void 0);
    ProductComponent = ProductComponent_1 = tslib_1.__decorate([
        core_1.Component({
            selector: 'e-cu-order-product',
            styleUrls: ['./product.component.scss'],
            templateUrl: './product.component.html',
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
        }),
        tslib_1.__metadata("design:paramtypes", [product_locales_service_1.ProductLocalesService,
            store_service_1.Store])
    ], ProductComponent);
    return ProductComponent;
}());
exports.ProductComponent = ProductComponent;
//# sourceMappingURL=product.component.js.map