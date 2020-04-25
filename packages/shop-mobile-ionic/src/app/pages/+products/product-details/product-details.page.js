"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var store_service_1 = require("../../../services/store.service");
var product_locales_service_1 = require("@modules/client.common.angular2/locale/product-locales.service");
var angular_1 = require("@ionic/angular");
var warehouse_orders_router_service_1 = require("@modules/client.common.angular2/routers/warehouse-orders-router.service");
var order_page_1 = require("../+order/order.page");
var warehouse_router_service_1 = require("@modules/client.common.angular2/routers/warehouse-router.service");
var environment_1 = require("environments/environment");
var warehouse_products_router_service_1 = require("@modules/client.common.angular2/routers/warehouse-products-router.service");
var RegistrationSystem_1 = tslib_1.__importDefault(require("@modules/server.common/enums/RegistrationSystem"));
var DeliveryType_1 = tslib_1.__importDefault(require("@modules/server.common/enums/DeliveryType"));
var popup_component_1 = require("../+order/takeaway/popup/popup.component");
var operators_1 = require("rxjs/operators");
var rxjs_1 = require("rxjs");
var ProductDetailsPage = (function () {
    function ProductDetailsPage(route, store, translateProductLocales, ngZone, router, navCtrl, warehouseOrdersRouter, modalController, warehouseRouter, warehouseProductsRouter) {
        this.route = route;
        this.store = store;
        this.translateProductLocales = translateProductLocales;
        this.ngZone = ngZone;
        this.router = router;
        this.navCtrl = navCtrl;
        this.warehouseOrdersRouter = warehouseOrdersRouter;
        this.modalController = modalController;
        this.warehouseRouter = warehouseRouter;
        this.warehouseProductsRouter = warehouseProductsRouter;
        this.ngDestroy$ = new rxjs_1.Subject();
        this.swiperEvents$ = new rxjs_1.Subject();
        this.modalChange = new core_1.EventEmitter();
        this.slideOptions();
        this.getModalChange();
    }
    ProductDetailsPage_1 = ProductDetailsPage;
    ProductDetailsPage.prototype.ngAfterViewInit = function () {
        this.prevUrl = this.route.snapshot.queryParams.backUrl;
        this.warehouseId = this.route.snapshot.queryParams.warehouseId;
        this.loadProductImages();
    };
    ProductDetailsPage.prototype.slideOptions = function () {
        var _this = this;
        var self = this;
        this.swiperOptions = {
            autoHeight: true,
            slidesPerView: 2,
            spaceBetween: 5,
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
    };
    ProductDetailsPage.prototype.localeTranslate = function (member) {
        return this.translateProductLocales.getTranslate(member);
    };
    ProductDetailsPage.prototype.buyItem = function (currentProduct) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var orderCreateInput, order;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(!this.store.userId &&
                            this.store.registrationSystem === RegistrationSystem_1.default.Disabled)) return [3, 1];
                        this.store.registrationSystem = RegistrationSystem_1.default.Once;
                        this.store.buyProduct = currentProduct.id;
                        this.store.backToDetails = currentProduct.id;
                        this.store.warehouseId = this.warehouseId;
                        this.navCtrl.navigateRoot('/invite');
                        return [3, 3];
                    case 1:
                        orderCreateInput = {
                            warehouseId: this.warehouseId,
                            products: [{ count: 1, productId: currentProduct.id }],
                            userId: this.store.userId,
                            orderType: this.store.deliveryType,
                            options: { autoConfirm: true },
                        };
                        return [4, this.warehouseOrdersRouter.create(orderCreateInput)];
                    case 2:
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
                        _a.label = 3;
                    case 3: return [2];
                }
            });
        });
    };
    ProductDetailsPage.prototype.goToProductPage = function () {
        this.router.navigateByUrl(this.prevUrl);
    };
    ProductDetailsPage.prototype.shortenDescription = function (desc) {
        return desc.length < ProductDetailsPage_1.MAX_DESCRIPTION_LENGTH
            ? desc
            : desc.substr(0, ProductDetailsPage_1.MAX_DESCRIPTION_LENGTH - 3) +
                '...';
    };
    ProductDetailsPage.prototype.showOrderInfoModal = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var modal;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.modalController.create({
                            component: this.store.deliveryType === DeliveryType_1.default.Delivery
                                ? order_page_1.OrderPage
                                : popup_component_1.OrderTakeawayInfoPopup,
                            cssClass: 'order-info-modal',
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
    ProductDetailsPage.prototype.getModalChange = function () {
        var _this = this;
        this.modalChange
            .pipe(operators_1.takeUntil(this.ngDestroy$))
            .subscribe(function (result) {
            _this.modalOpen = result;
        });
    };
    ProductDetailsPage.prototype.continueOrder = function () {
        var buyProductId = this.store.buyProduct;
        if (this.store.userId) {
            if (buyProductId && buyProductId !== 'null') {
                this.buyItem(this.product.product);
                this.store.buyProduct = null;
                this.store.warehouseId = null;
            }
        }
        else {
            this.store.buyProduct = null;
            this.store.warehouseId = null;
        }
    };
    ProductDetailsPage.prototype._subscribeWarehouseProduct = function () {
        var _this = this;
        if (this.warehouseProduct$) {
            this.warehouseProduct$.unsubscribe();
        }
        if (this.product) {
            this.warehouseProduct$ = this.warehouseProductsRouter
                .get(this.warehouseId, false)
                .pipe(operators_1.takeUntil(this.ngDestroy$))
                .subscribe(function (r) {
                var prod = r.filter(function (p) { return p.productId === _this.product.productId; })[0];
                _this.soldOut = !prod || prod.count <= 0;
            });
        }
    };
    ProductDetailsPage.prototype.loadProductImages = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var warehouse, products;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.productID = this.route.snapshot.paramMap.get('id');
                        return [4, this.warehouseRouter
                                .get(this.warehouseId, true)
                                .pipe(operators_1.first())
                                .toPromise()];
                    case 1:
                        warehouse = _a.sent();
                        this.warehouseLogo = warehouse.logo;
                        products = warehouse.products;
                        this.product = products.filter(function (p) { return p.product['id'] === _this.productID; })[0];
                        this.continueOrder();
                        this.loadImages();
                        this._subscribeWarehouseProduct();
                        return [2];
                }
            });
        });
    };
    ProductDetailsPage.prototype.loadImages = function () {
        var currentProduct = this.product.product;
        if (currentProduct.images.length > 1) {
            var horizontal = currentProduct.images.filter(function (i) { return i.orientation === 2; });
            var vertical = currentProduct.images.filter(function (i) { return i.orientation !== 2; });
            if (vertical.length === horizontal.length &&
                vertical.length === 1) {
                this.image = horizontal[0];
            }
            else if (vertical.length === 1) {
                this.images = horizontal;
            }
            else if (horizontal.length === 1) {
                this.images = vertical;
            }
            else {
                if (vertical.length > 0) {
                    this.images = vertical;
                }
                else {
                    this.images = horizontal;
                }
            }
        }
        else if (currentProduct.images.length === 1) {
            this.image = currentProduct.images[0];
        }
    };
    ProductDetailsPage.prototype.ngOnDestroy = function () {
        if (this.swiperEvents$) {
            this.swiperEvents$.complete();
        }
        this.ngDestroy$.next();
        this.ngDestroy$.complete();
    };
    var ProductDetailsPage_1;
    ProductDetailsPage.MAX_DESCRIPTION_LENGTH = 53;
    ProductDetailsPage = ProductDetailsPage_1 = tslib_1.__decorate([
        core_1.Component({
            selector: 'e-cu-product-details',
            templateUrl: './product-details.page.html',
            styleUrls: ['./product-details.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [router_1.ActivatedRoute,
            store_service_1.Store,
            product_locales_service_1.ProductLocalesService,
            core_1.NgZone,
            router_1.Router,
            angular_1.NavController,
            warehouse_orders_router_service_1.WarehouseOrdersRouter,
            angular_1.ModalController,
            warehouse_router_service_1.WarehouseRouter,
            warehouse_products_router_service_1.WarehouseProductsRouter])
    ], ProductDetailsPage);
    return ProductDetailsPage;
}());
exports.ProductDetailsPage = ProductDetailsPage;
//# sourceMappingURL=product-details.page.js.map