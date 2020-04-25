"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var warehouse_orders_router_service_1 = require("@modules/client.common.angular2/routers/warehouse-orders-router.service");
var user_products_router_service_1 = require("@modules/client.common.angular2/routers/user-products-router.service");
var user_router_service_1 = require("@modules/client.common.angular2/routers/user-router.service");
var operators_1 = require("rxjs/operators");
var rxjs_1 = require("rxjs");
var store_service_1 = require("../../services/store.service");
var router_1 = require("@angular/router");
var order_page_1 = require("./+order/order.page");
var angular_1 = require("@ionic/angular");
var environment_1 = require("environments/environment");
var geo_location_1 = require("../../services/geo-location");
var RegistrationSystem_1 = tslib_1.__importDefault(require("@modules/server.common/enums/RegistrationSystem"));
var DeliveryType_1 = tslib_1.__importDefault(require("@modules/server.common/enums/DeliveryType"));
var popup_component_1 = require("./+order/takeaway/popup/popup.component");
var warehouse_router_service_1 = require("@modules/client.common.angular2/routers/warehouse-router.service");
var geo_location_products_1 = require("app/services/geo-location/geo-location-products");
var warehouse_products_1 = require("app/services/merchants/warehouse-products");
var initializeProductsNumber = 10;
var ProductsPage = (function () {
    function ProductsPage(store, userRouter, geoLocationProductsService, warehouseOrdersRouter, userProductsRouter, router, modalController, geoLocationService, warehouseRouter, warehouseProductsService) {
        this.store = store;
        this.userRouter = userRouter;
        this.geoLocationProductsService = geoLocationProductsService;
        this.warehouseOrdersRouter = warehouseOrdersRouter;
        this.userProductsRouter = userProductsRouter;
        this.router = router;
        this.modalController = modalController;
        this.geoLocationService = geoLocationService;
        this.warehouseRouter = warehouseRouter;
        this.warehouseProductsService = warehouseProductsService;
        this.viewType = environment_1.environment.PRODUCTS_VIEW_TYPE;
        this.products = [];
        this.areProductsLoaded = false;
        this.products_placeholder = '';
        this.modalChange = new core_1.EventEmitter();
        this.$areProductsLoaded = new core_1.EventEmitter();
        this.ngDestroy$ = new rxjs_1.Subject();
        this.productsLocale = this.store.language || environment_1.environment.DEFAULT_LOCALE;
        if (this.inStore) {
            this.store.deliveryType = DeliveryType_1.default.Takeaway;
            this.loadMerchant();
        }
        this.isDeliveryRequired =
            this.store.deliveryType === DeliveryType_1.default.Delivery;
        this._subscribeProductsPlaceholder();
        this.loadGeoLocationProducts();
        this.hasOrder();
        this.getModalChange();
    }
    Object.defineProperty(ProductsPage.prototype, "inStore", {
        get: function () {
            return this.store.inStore;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProductsPage.prototype, "navigateToMerchants", {
        get: function () {
            var merchantIds = environment_1.environment['MERCHANT_IDS'];
            return (!merchantIds || merchantIds.length < 1) && !this.inStore;
        },
        enumerable: true,
        configurable: true
    });
    ProductsPage.prototype.ngOnInit = function () {
        this.continueOrder();
    };
    ProductsPage.prototype.buyItem = function (currentProduct) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var orderCreateInput, order, error_1, loadedProduct;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(!this.store.userId &&
                            this.store.registrationSystem === RegistrationSystem_1.default.Disabled)) return [3, 1];
                        this.store.registrationSystem = RegistrationSystem_1.default.Once;
                        this.store.buyProduct = currentProduct.warehouseProduct.id;
                        this.store.warehouseId = currentProduct.warehouseId;
                        this.router.navigateByUrl('/invite');
                        return [3, 5];
                    case 1:
                        orderCreateInput = {
                            warehouseId: currentProduct.warehouseId || this.store.warehouseId,
                            products: [
                                {
                                    count: 1,
                                    productId: currentProduct.warehouseProduct
                                        ? currentProduct.warehouseProduct.product['id']
                                        : currentProduct.product.id,
                                },
                            ],
                            userId: this.store.userId,
                            orderType: this.store.deliveryType,
                            options: { autoConfirm: true },
                        };
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        return [4, this.warehouseOrdersRouter.create(orderCreateInput)];
                    case 3:
                        order = _a.sent();
                        this.store.orderId = order.id;
                        this.store.orderWarehouseId = order.warehouseId;
                        if (environment_1.environment.ORDER_INFO_TYPE === 'popup') {
                            this.showOrderInfoModal();
                        }
                        if (environment_1.environment.ORDER_INFO_TYPE === 'page') {
                            this.router.navigate([
                                "" + (this.store.deliveryType === DeliveryType_1.default.Delivery
                                    ? '/order-info'
                                    : '/order-info-takeaway'),
                            ]);
                        }
                        return [3, 5];
                    case 4:
                        error_1 = _a.sent();
                        loadedProduct = this.products.find(function (p) {
                            return p.warehouseProduct.id ===
                                currentProduct.warehouseProduct.id;
                        });
                        if (loadedProduct) {
                            loadedProduct['soldOut'] = true;
                        }
                        return [3, 5];
                    case 5: return [2];
                }
            });
        });
    };
    ProductsPage.prototype.toggleGetProductsType = function () {
        this.changePage = true;
        this.products = [];
        this.loadProducts({
            count: this.lastLoadProductsCount,
            imageOrientation: this.lastImageOrientation,
        });
    };
    ProductsPage.prototype.changeStoreMode = function () {
        if (this.inStore) {
            this.store.clearInStore();
        }
        else {
            if (!this.navigateToMerchants) {
                this.store.inStore = environment_1.environment['MERCHANT_IDS'][0];
                this.loadMerchant();
            }
        }
        this.changePage = true;
        this.products = [];
        this.loadProducts({
            count: this.lastLoadProductsCount,
            imageOrientation: this.lastImageOrientation,
        });
    };
    ProductsPage.prototype.ngOnDestroy = function () {
        this.ngDestroy$.next();
        this.ngDestroy$.complete();
    };
    ProductsPage.prototype.showOrderInfoModal = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var modal;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.modalController.create({
                            component: this.store.deliveryType === DeliveryType_1.default.Delivery
                                ? order_page_1.OrderPage
                                : popup_component_1.OrderTakeawayInfoPopup,
                            cssClass: 'order-info-modal',
                            showBackdrop: true,
                            componentProps: { modalChange: this.modalChange },
                        })];
                    case 1:
                        modal = _a.sent();
                        this.modalChange.emit(true);
                        return [2, modal.present()];
                }
            });
        });
    };
    ProductsPage.prototype.loadGeoLocationProducts = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var geoLocationForProducts, isProductionEnv, user, error_2;
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
                        error_2 = _a.sent();
                        console.warn(error_2);
                        this.store.registrationSystem = RegistrationSystem_1.default.Once;
                        this.router.navigate(['/invite']);
                        return [3, 5];
                    case 5:
                        if (geoLocationForProducts) {
                            this.getOrdersGeoObj = {
                                loc: {
                                    type: 'Point',
                                    coordinates: geoLocationForProducts.loc.coordinates,
                                },
                            };
                        }
                        return [2];
                }
            });
        });
    };
    ProductsPage.prototype.loadProducts = function (options) {
        if (options === void 0) { options = {}; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var count, imageOrientation, merchantIds, isDeliveryRequired, isTakeaway, loadProducts_1;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.store.deliveryType = this.isDeliveryRequired
                            ? DeliveryType_1.default.Delivery
                            : DeliveryType_1.default.Takeaway;
                        count = options['count'];
                        imageOrientation = options['imageOrientation'];
                        this.lastLoadProductsCount = count;
                        this.lastImageOrientation = imageOrientation;
                        merchantIds = environment_1.environment['MERCHANT_IDS'];
                        if ((!merchantIds || merchantIds.length === 0) && this.inStore) {
                            merchantIds = [this.inStore];
                        }
                        return [4, this.loadProductsCount(merchantIds, imageOrientation)];
                    case 1:
                        _a.sent();
                        this.changePage = false;
                        if (this.productsCount > this.products.length) {
                            if (this.getOrdersGeoObj) {
                                this.areProductsLoaded = false;
                                isDeliveryRequired = this.store.deliveryType === DeliveryType_1.default.Delivery;
                                isTakeaway = this.store.deliveryType === DeliveryType_1.default.Takeaway;
                                loadProducts_1 = true;
                                this.geoLocationProductsService
                                    .geoLocationProductsByPaging(this.getOrdersGeoObj, {
                                    skip: this.products.length,
                                    limit: count ? count : initializeProductsNumber,
                                }, {
                                    isDeliveryRequired: isDeliveryRequired,
                                    isTakeaway: isTakeaway,
                                    merchantIds: merchantIds,
                                    imageOrientation: imageOrientation,
                                    locale: this.productsLocale,
                                    withoutCount: true,
                                })
                                    .pipe(operators_1.takeUntil(this.ngDestroy$))
                                    .subscribe(function (products) {
                                    var _a;
                                    if (!loadProducts_1) {
                                        var _loop_1 = function (product) {
                                            var loadedProduct = _this.products.find(function (p) {
                                                return p.warehouseProduct.id ===
                                                    product.warehouseProduct.id;
                                            });
                                            if (loadedProduct) {
                                                loadedProduct['soldOut'] =
                                                    product.warehouseProduct.count === 0;
                                            }
                                        };
                                        for (var _i = 0, products_1 = products; _i < products_1.length; _i++) {
                                            var product = products_1[_i];
                                            _loop_1(product);
                                        }
                                    }
                                    if (loadProducts_1) {
                                        (_a = _this.products).push.apply(_a, products);
                                    }
                                    loadProducts_1 = false;
                                    _this.areProductsLoaded = true;
                                });
                            }
                            else {
                                this.store.registrationSystem = RegistrationSystem_1.default.Once;
                                this.router.navigate(['/invite']);
                            }
                        }
                        else {
                            this.areProductsLoaded = true;
                        }
                        this.$areProductsLoaded.emit();
                        return [2];
                }
            });
        });
    };
    ProductsPage.prototype.loadProductsCount = function (merchantIds, imageOrientation) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var isDeliveryRequired, isTakeaway, _a;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!this.getOrdersGeoObj) return [3, 2];
                        isDeliveryRequired = this.store.deliveryType === DeliveryType_1.default.Delivery;
                        isTakeaway = this.store.deliveryType === DeliveryType_1.default.Takeaway;
                        _a = this;
                        return [4, this.geoLocationProductsService.getCountOfGeoLocationProducts(this.getOrdersGeoObj, {
                                isDeliveryRequired: isDeliveryRequired,
                                isTakeaway: isTakeaway,
                                merchantIds: merchantIds,
                                imageOrientation: imageOrientation,
                                locale: this.productsLocale,
                                withoutCount: true,
                            })];
                    case 1:
                        _a.productsCount = _b.sent();
                        _b.label = 2;
                    case 2: return [2];
                }
            });
        });
    };
    ProductsPage.prototype._subscribeProductsPlaceholder = function () {
        var _this = this;
        if (this.store.userId) {
            this.userProductsRouter
                .getPlaceholder(this.store.userId, this.store.deviceId)
                .pipe(operators_1.takeUntil(this.ngDestroy$))
                .subscribe(function (placeholder) {
                _this.products_placeholder = placeholder;
            });
        }
    };
    ProductsPage.prototype.hasOrder = function () {
        if (this.store.orderId) {
            if (environment_1.environment.ORDER_INFO_TYPE === 'popup') {
                this.showOrderInfoModal();
            }
        }
    };
    ProductsPage.prototype.getModalChange = function () {
        var _this = this;
        this.modalChange
            .pipe(operators_1.takeUntil(this.ngDestroy$))
            .subscribe(function (result) {
            _this.modalOpen = result;
        });
    };
    ProductsPage.prototype.continueOrder = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var buyProduct, userId, mechantId, productForBuy;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        buyProduct = this.store.buyProduct;
                        if (!buyProduct) return [3, 3];
                        userId = this.store.userId;
                        mechantId = this.store.warehouseId;
                        if (!(userId && mechantId)) return [3, 2];
                        return [4, this.warehouseProductsService.getWarehouseProduct(mechantId, buyProduct)];
                    case 1:
                        productForBuy = _a.sent();
                        if (productForBuy) {
                            this.buyItem(productForBuy);
                            this.store.buyProduct = '';
                            this.store.warehouseId = '';
                        }
                        return [3, 3];
                    case 2:
                        this.store.buyProduct = '';
                        this.store.warehouseId = '';
                        _a.label = 3;
                    case 3: return [2];
                }
            });
        });
    };
    ProductsPage.prototype.loadMerchant = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!this.store.inStore) return [3, 2];
                        _a = this;
                        return [4, this.warehouseRouter
                                .get(this.store.inStore, false)
                                .pipe(operators_1.first())
                                .toPromise()];
                    case 1:
                        _a.merchant = _b.sent();
                        _b.label = 2;
                    case 2: return [2];
                }
            });
        });
    };
    ProductsPage = tslib_1.__decorate([
        core_1.Component({
            selector: 'e-cu-products',
            templateUrl: './products.page.html',
            styleUrls: ['./products.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [store_service_1.Store,
            user_router_service_1.UserRouter,
            geo_location_products_1.GeoLocationProductsService,
            warehouse_orders_router_service_1.WarehouseOrdersRouter,
            user_products_router_service_1.UserProductsRouter,
            router_1.Router,
            angular_1.ModalController,
            geo_location_1.GeoLocationService,
            warehouse_router_service_1.WarehouseRouter,
            warehouse_products_1.WarehouseProductsService])
    ], ProductsPage);
    return ProductsPage;
}());
exports.ProductsPage = ProductsPage;
//# sourceMappingURL=products.page.js.map