"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var rxjs_1 = require("rxjs");
var animations_1 = require("@angular/animations");
var operators_1 = require("rxjs/operators");
var warehouse_router_service_1 = require("@modules/client.common.angular2/routers/warehouse-router.service");
var warehouse_orders_router_service_1 = require("@modules/client.common.angular2/routers/warehouse-orders-router.service");
var order_router_service_1 = require("@modules/client.common.angular2/routers/order-router.service");
var product_locales_service_1 = require("@modules/client.common.angular2/locale/product-locales.service");
var store_1 = require("app/services/store");
var RegistrationSystem_1 = tslib_1.__importDefault(require("@modules/server.common/enums/RegistrationSystem"));
var DeliveryType_1 = tslib_1.__importDefault(require("@modules/server.common/enums/DeliveryType"));
var core_2 = require("@ngx-translate/core");
var environment_1 = require("environments/environment");
var defaultDeliveryTimeMin = environment_1.environment.DELIVERY_TIME_MIN;
var defaultDeliveryTimeMax = environment_1.environment.DELIVERY_TIME_MAX;
var ProductDetailsComponent = (function () {
    function ProductDetailsComponent(route, router, warehouseRouter, warehouseOrdersRouter, orderRouter, _productLocalesService, store, translateService) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.warehouseRouter = warehouseRouter;
        this.warehouseOrdersRouter = warehouseOrdersRouter;
        this.orderRouter = orderRouter;
        this._productLocalesService = _productLocalesService;
        this.store = store;
        this.translateService = translateService;
        this.ngUnsubscribe = new rxjs_1.Subject();
        this.isTakeaway = this.store.deliveryType === DeliveryType_1.default.Takeaway;
        this.route.params
            .pipe(operators_1.takeUntil(this.ngUnsubscribe))
            .subscribe(function (params) { return _this.onParams(params); });
    }
    ProductDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getMinutesText();
        this.getReadyForText();
        this.warehouseRouter.get(this.warehouseId, true).subscribe(function (w) {
            _this.warehouseProduct = w.products.filter(function (res) { return res.product['id'] === _this.productId; })[0];
            _this.warehouse = w;
            _this.loadImages();
        });
    };
    ProductDetailsComponent.prototype.ngOnDestroy = function () {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    };
    ProductDetailsComponent.prototype.createOrder = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var userId, order;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(!this.store.userId &&
                            this.store.registrationSystem === RegistrationSystem_1.default.Disabled)) return [3, 1];
                        this.store.registrationSystem = RegistrationSystem_1.default.Once;
                        this.store.buyProduct = this.warehouseProduct.id;
                        this.store.mechantId = this.warehouseId;
                        this.router.navigate(['/login']);
                        return [3, 4];
                    case 1:
                        userId = this.store.userId;
                        return [4, this.warehouseOrdersRouter.createByProductType(userId, this.warehouseId, this.productId, this.store.deliveryType)];
                    case 2:
                        order = _a.sent();
                        return [4, this.orderRouter.confirm(order.id)];
                    case 3:
                        _a.sent();
                        this.router.navigate(['/orders']);
                        _a.label = 4;
                    case 4: return [2];
                }
            });
        });
    };
    ProductDetailsComponent.prototype.getDeliveryTime = function () {
        if (this.warehouseProduct != null) {
            var productInfo = this.warehouseProduct;
            if (!this.isTakeaway) {
                if (productInfo.deliveryTimeMax != null &&
                    productInfo.deliveryTimeMin != null) {
                    return (productInfo.deliveryTimeMin +
                        '-' +
                        productInfo.deliveryTimeMax +
                        ' ' +
                        this.minutesText);
                }
                else {
                    return (defaultDeliveryTimeMin +
                        '-' +
                        defaultDeliveryTimeMax +
                        ' ' +
                        this.minutesText);
                }
            }
            else {
                if (productInfo.deliveryTimeMax == null ||
                    productInfo.deliveryTimeMax <= 15) {
                    return this.readyForText;
                }
                else {
                    if (productInfo.deliveryTimeMax != null &&
                        productInfo.deliveryTimeMin != null) {
                        return (productInfo.deliveryTimeMin +
                            '-' +
                            productInfo.deliveryTimeMax +
                            ' ' +
                            this.minutesText);
                    }
                    else {
                        return (defaultDeliveryTimeMin +
                            '-' +
                            defaultDeliveryTimeMax +
                            ' ' +
                            this.minutesText);
                    }
                }
            }
        }
    };
    ProductDetailsComponent.prototype.localeTranslate = function (member) {
        return this._productLocalesService.getTranslate(member);
    };
    ProductDetailsComponent.prototype.onParams = function (params) {
        this.productId = params.productId;
        this.warehouseId = params.warehouseId;
    };
    ProductDetailsComponent.prototype.getMinutesText = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4, this.translateService
                                .get('PRODUCTS_VIEW.MINUTES')
                                .pipe(operators_1.first())
                                .toPromise()];
                    case 1:
                        _a.minutesText = _b.sent();
                        return [2];
                }
            });
        });
    };
    ProductDetailsComponent.prototype.getReadyForText = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4, this.translateService
                                .get('PRODUCTS_VIEW.READYFOR')
                                .pipe(operators_1.first())
                                .toPromise()];
                    case 1:
                        _a.readyForText = _b.sent();
                        return [2];
                }
            });
        });
    };
    ProductDetailsComponent.prototype.loadImages = function () {
        var currentProduct = this.warehouseProduct.product;
        if (currentProduct.images.length > 1) {
            var horizontal = currentProduct.images.filter(function (i) { return i.orientation === 2; });
            var vertical = currentProduct.images.filter(function (i) { return i.orientation !== 2; });
            if (vertical.length === horizontal.length &&
                vertical.length === 1) {
                this.images = [horizontal[0]];
            }
            else if (vertical.length === 1) {
                this.images = horizontal;
            }
            else if (horizontal.length === 1) {
                this.images = vertical;
            }
            else {
                if (horizontal.length > 0) {
                    this.images = horizontal;
                }
                else {
                    this.images = vertical;
                }
            }
        }
        else if (currentProduct.images.length === 1) {
            this.images = [currentProduct.images[0]];
        }
    };
    tslib_1.__decorate([
        core_1.HostBinding('@enterAnimation'),
        tslib_1.__metadata("design:type", Object)
    ], ProductDetailsComponent.prototype, "enterAnimation", void 0);
    ProductDetailsComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'product-details',
            styleUrls: ['./product-details.component.scss'],
            animations: [
                animations_1.trigger('enterAnimation', [
                    animations_1.transition(':enter', [
                        animations_1.style({ opacity: 0 }),
                        animations_1.animate('200ms', animations_1.style({ opacity: 1 })),
                    ]),
                    animations_1.transition(':leave', [
                        animations_1.style({ opacity: 1 }),
                        animations_1.animate('200ms', animations_1.style({ opacity: 0 })),
                    ]),
                ]),
            ],
            templateUrl: './product-details.component.html',
        }),
        tslib_1.__metadata("design:paramtypes", [router_1.ActivatedRoute,
            router_1.Router,
            warehouse_router_service_1.WarehouseRouter,
            warehouse_orders_router_service_1.WarehouseOrdersRouter,
            order_router_service_1.OrderRouter,
            product_locales_service_1.ProductLocalesService,
            store_1.Store,
            core_2.TranslateService])
    ], ProductDetailsComponent);
    return ProductDetailsComponent;
}());
exports.ProductDetailsComponent = ProductDetailsComponent;
//# sourceMappingURL=product-details.component.js.map