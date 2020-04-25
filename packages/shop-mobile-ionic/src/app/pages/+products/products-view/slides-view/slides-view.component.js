"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var product_locales_service_1 = require("@modules/client.common.angular2/locale/product-locales.service");
var rxjs_1 = require("rxjs");
var router_1 = require("@angular/router");
var store_service_1 = require("../../../../services/store.service");
var angular_1 = require("@ionic/angular");
var initializeProductsNumber = 10;
var ProductsSlidesViewComponent = (function () {
    function ProductsSlidesViewComponent(translateProductLocales, ngZone, router, store) {
        var _this = this;
        this.translateProductLocales = translateProductLocales;
        this.ngZone = ngZone;
        this.router = router;
        this.store = store;
        this.buy = new core_1.EventEmitter();
        this.loadProducts = new core_1.EventEmitter();
        this.goToDetailsPage = new core_1.EventEmitter();
        this.imageOrientation = 1;
        this.swiperEvents$ = new rxjs_1.Subject();
        this.ngDestroy$ = new rxjs_1.Subject();
        var self = this;
        this.swiperOptions = {
            autoHeight: true,
            resistance: true,
            watchSlidesProgress: true,
            longSwipes: false,
            on: {
                init: function () {
                    self.swiper = this;
                    window.swiper = this.swiper;
                    self.swiperEvents$.next('init');
                },
                transitionStart: function () {
                    if (_this.swiper) {
                        _this.ngZone.run(function () {
                        });
                    }
                },
            },
        };
    }
    ProductsSlidesViewComponent_1 = ProductsSlidesViewComponent;
    Object.defineProperty(ProductsSlidesViewComponent.prototype, "showProducts", {
        get: function () {
            return this.products.filter(function (p) { return p.warehouseProduct.count !== 0; });
        },
        enumerable: true,
        configurable: true
    });
    ProductsSlidesViewComponent.prototype.ngOnInit = function () {
        this.loadProducts.emit({
            count: initializeProductsNumber,
            imageOrientation: this.imageOrientation,
        });
    };
    ProductsSlidesViewComponent.prototype.ngOnChanges = function (_a) {
        var products = _a.products;
        if (products && products.currentValue.length === 0 && this.slides) {
            this.slides.slideTo(0);
        }
    };
    ProductsSlidesViewComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this._loadData(0);
        this.slides$ = this.slides.ionSlideWillChange.subscribe(function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var index;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.slides.getActiveIndex()];
                    case 1:
                        index = _a.sent();
                        if (this.products.length - 1 <= index + 1) {
                            this.loadProducts.emit({
                                count: initializeProductsNumber,
                                imageOrientation: this.imageOrientation,
                            });
                        }
                        this._loadData(index);
                        return [2];
                }
            });
        }); });
    };
    ProductsSlidesViewComponent.prototype.shortenDescription = function (desc) {
        return desc.length < ProductsSlidesViewComponent_1.MAX_DESCRIPTION_LENGTH
            ? desc
            : desc.substr(0, ProductsSlidesViewComponent_1.MAX_DESCRIPTION_LENGTH - 3) + '...';
    };
    ProductsSlidesViewComponent.prototype.localeTranslate = function (member) {
        return this.translateProductLocales.getTranslate(member);
    };
    ProductsSlidesViewComponent.prototype.ngOnDestroy = function () {
        this.swiperEvents$.complete();
        if (this.slides$) {
            this.slides$.unsubscribe();
        }
        this.ngDestroy$.next();
        this.ngDestroy$.complete();
    };
    ProductsSlidesViewComponent.prototype._loadData = function (index) {
        this.product = this.products[index];
    };
    var ProductsSlidesViewComponent_1;
    ProductsSlidesViewComponent.MAX_DESCRIPTION_LENGTH = 45;
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Array)
    ], ProductsSlidesViewComponent.prototype, "products", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", String)
    ], ProductsSlidesViewComponent.prototype, "placeholder", void 0);
    tslib_1.__decorate([
        core_1.Output(),
        tslib_1.__metadata("design:type", Object)
    ], ProductsSlidesViewComponent.prototype, "buy", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", core_1.EventEmitter)
    ], ProductsSlidesViewComponent.prototype, "$areProductsLoaded", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], ProductsSlidesViewComponent.prototype, "areProductsLoaded", void 0);
    tslib_1.__decorate([
        core_1.Output(),
        tslib_1.__metadata("design:type", Object)
    ], ProductsSlidesViewComponent.prototype, "loadProducts", void 0);
    tslib_1.__decorate([
        core_1.Output(),
        tslib_1.__metadata("design:type", Object)
    ], ProductsSlidesViewComponent.prototype, "goToDetailsPage", void 0);
    tslib_1.__decorate([
        core_1.ViewChild(angular_1.IonSlides),
        tslib_1.__metadata("design:type", angular_1.IonSlides)
    ], ProductsSlidesViewComponent.prototype, "slides", void 0);
    ProductsSlidesViewComponent = ProductsSlidesViewComponent_1 = tslib_1.__decorate([
        core_1.Component({
            selector: 'e-cu-products-slides-view',
            templateUrl: './slides-view.component.html',
            styleUrls: ['./slides-view.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [product_locales_service_1.ProductLocalesService,
            core_1.NgZone,
            router_1.Router,
            store_service_1.Store])
    ], ProductsSlidesViewComponent);
    return ProductsSlidesViewComponent;
}());
exports.ProductsSlidesViewComponent = ProductsSlidesViewComponent;
//# sourceMappingURL=slides-view.component.js.map