"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var store_1 = require("app/services/store");
var warehouse_orders_router_service_1 = require("@modules/client.common.angular2/routers/warehouse-orders-router.service");
var router_1 = require("@angular/router");
var operators_1 = require("rxjs/operators");
var user_router_service_1 = require("@modules/client.common.angular2/routers/user-router.service");
var geo_location_1 = require("app/services/geo-location");
var RegistrationSystem_1 = tslib_1.__importDefault(require("@modules/server.common/enums/RegistrationSystem"));
var geo_location_products_1 = require("app/services/geo-location-products");
var warehouse_products_1 = require("app/services/warehouse-products");
var DeliveryType_1 = tslib_1.__importDefault(require("@modules/server.common/enums/DeliveryType"));
var rxjs_1 = require("rxjs");
require("rxjs/add/operator/debounceTime");
require("rxjs/add/operator/distinctUntilChanged");
var carousel_view_component_1 = require("./views/carousel/carousel-view.component");
var environment_1 = require("environments/environment");
var initializeProductsNumber = 10;
var ProductsComponent = (function () {
    function ProductsComponent(store, warehouseOrdersRouter, router, userRouter, geoLocationService, geoLocationProductsService, warehouseProductsService) {
        this.store = store;
        this.warehouseOrdersRouter = warehouseOrdersRouter;
        this.router = router;
        this.userRouter = userRouter;
        this.geoLocationService = geoLocationService;
        this.geoLocationProductsService = geoLocationProductsService;
        this.warehouseProductsService = warehouseProductsService;
        this.products = [];
        this.productsLoading = true;
        this.modelChanged = new rxjs_1.Subject();
        this._ngDestroy$ = new rxjs_1.Subject();
        this.isWideView = this.store.productListViewSpace === 'wide';
        this.loadGeoLocationProducts();
        this.productsFilter();
    }
    Object.defineProperty(ProductsComponent.prototype, "isListView", {
        get: function () {
            return this.store.productViewType !== 'carousel';
        },
        enumerable: true,
        configurable: true
    });
    ProductsComponent.prototype.productsFilter = function () {
        var _this = this;
        this.modelChanged
            .pipe(operators_1.debounceTime(1000), operators_1.distinctUntilChanged())
            .subscribe(function (text) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.searchText = text;
                        this.products = [];
                        this.productsLoading = true;
                        if (this.carouselView) {
                            this.carouselView.currentIndex = 0;
                        }
                        return [4, this.loadProducts()];
                    case 1:
                        _a.sent();
                        return [2];
                }
            });
        }); });
    };
    ProductsComponent.prototype.changedProducts = function (text) {
        this.modelChanged.next(text);
    };
    ProductsComponent.prototype.ngOnInit = function () {
        if (this.products) {
            this.continueOrder();
        }
    };
    ProductsComponent.prototype.ngOnDestroy = function () {
        this._ngDestroy$.next();
        this._ngDestroy$.complete();
    };
    ProductsComponent.prototype.buyItem = function (currentProduct, warehouseId) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var orderCreateInput;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        orderCreateInput = {
                            warehouseId: warehouseId,
                            orderType: this.store.deliveryType,
                            products: [{ count: 1, productId: currentProduct.product['id'] }],
                            userId: this.store.userId,
                            options: { autoConfirm: true },
                        };
                        return [4, this.warehouseOrdersRouter.create(orderCreateInput)];
                    case 1:
                        _a.sent();
                        this.router.navigate(['/orders']);
                        return [2];
                }
            });
        });
    };
    ProductsComponent.prototype.continueOrder = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var buyProduct, userId, mechantId, productForBuy;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        buyProduct = this.store.buyProduct;
                        if (!buyProduct) return [3, 3];
                        userId = this.store.userId;
                        mechantId = this.store.mechantId;
                        if (!(userId && mechantId)) return [3, 2];
                        return [4, this.warehouseProductsService.getWarehouseProduct(mechantId, buyProduct)];
                    case 1:
                        productForBuy = _a.sent();
                        if (productForBuy) {
                            this.buyItem(productForBuy, mechantId);
                            this.store.buyProduct = '';
                            this.store.mechantId = '';
                        }
                        return [3, 3];
                    case 2:
                        this.store.buyProduct = '';
                        this.store.mechantId = '';
                        _a.label = 3;
                    case 3: return [2];
                }
            });
        });
    };
    ProductsComponent.prototype.loadGeoLocationProducts = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var geoLocationForProducts, isProductionEnv, user, error_1;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        isProductionEnv = environment_1.environment.production;
                        if (!(this.store.userId && isProductionEnv)) return [3, 2];
                        return [4, this.userRouter
                                .get(this.store.userId)
                                .pipe(operators_1.first())
                                .toPromise()];
                    case 1:
                        user = _a.sent();
                        geoLocationForProducts = user.geoLocation;
                        return [3, 5];
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        return [4, this.geoLocationService.getCurrentGeoLocation()];
                    case 3:
                        geoLocationForProducts = _a.sent();
                        return [3, 5];
                    case 4:
                        error_1 = _a.sent();
                        console.warn(error_1);
                        return [3, 5];
                    case 5:
                        this.getOrdersGeoObj = {
                            loc: {
                                type: 'Point',
                                coordinates: geoLocationForProducts.loc.coordinates,
                            },
                        };
                        this.loadProducts();
                        return [2];
                }
            });
        });
    };
    ProductsComponent.prototype.loadProducts = function (count) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var isDeliveryRequired, isTakeaway, products;
            var _a;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.productsLoading = true;
                        return [4, this.loadProductsCount()];
                    case 1:
                        _b.sent();
                        if (!(this.productsCount > this.products.length)) return [3, 4];
                        if (!this.getOrdersGeoObj) return [3, 3];
                        isDeliveryRequired = this.store.deliveryType === DeliveryType_1.default.Delivery;
                        isTakeaway = this.store.deliveryType === DeliveryType_1.default.Takeaway;
                        return [4, this.geoLocationProductsService
                                .geoLocationProductsByPaging(this.getOrdersGeoObj, {
                                skip: this.products.length,
                                limit: count ? count : initializeProductsNumber,
                            }, { isDeliveryRequired: isDeliveryRequired, isTakeaway: isTakeaway }, this.searchText)
                                .pipe(operators_1.first())
                                .toPromise()];
                    case 2:
                        products = _b.sent();
                        (_a = this.products).push.apply(_a, products);
                        return [3, 4];
                    case 3:
                        this.store.registrationSystem = RegistrationSystem_1.default.Once;
                        this.router.navigate(['/login']);
                        _b.label = 4;
                    case 4:
                        this.productsLoading = false;
                        return [2];
                }
            });
        });
    };
    ProductsComponent.prototype.loadProductsCount = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var isDeliveryRequired, isTakeaway, _a;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!this.getOrdersGeoObj) return [3, 2];
                        isDeliveryRequired = this.store.deliveryType === DeliveryType_1.default.Delivery;
                        isTakeaway = this.store.deliveryType === DeliveryType_1.default.Takeaway;
                        _a = this;
                        return [4, this.geoLocationProductsService.getCountOfGeoLocationProducts(this.getOrdersGeoObj, { isDeliveryRequired: isDeliveryRequired, isTakeaway: isTakeaway }, this.searchText)];
                    case 1:
                        _a.productsCount = _b.sent();
                        _b.label = 2;
                    case 2: return [2];
                }
            });
        });
    };
    tslib_1.__decorate([
        core_1.ViewChild('carouselView'),
        tslib_1.__metadata("design:type", carousel_view_component_1.CarouselViewComponent)
    ], ProductsComponent.prototype, "carouselView", void 0);
    ProductsComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'products',
            styleUrls: ['./products.component.scss'],
            templateUrl: './products.component.html',
        }),
        tslib_1.__metadata("design:paramtypes", [store_1.Store,
            warehouse_orders_router_service_1.WarehouseOrdersRouter,
            router_1.Router,
            user_router_service_1.UserRouter,
            geo_location_1.GeoLocationService,
            geo_location_products_1.GeoLocationProductsService,
            warehouse_products_1.WarehouseProductsService])
    ], ProductsComponent);
    return ProductsComponent;
}());
exports.ProductsComponent = ProductsComponent;
//# sourceMappingURL=products.component.js.map