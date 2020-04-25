"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var ngx_1 = require("@ionic-native/mixpanel/ngx");
var OrderCarrierStatus_1 = tslib_1.__importDefault(require("@modules/server.common/enums/OrderCarrierStatus"));
var OrderWarehouseStatus_1 = tslib_1.__importDefault(require("@modules/server.common/enums/OrderWarehouseStatus"));
var order_router_service_1 = require("@modules/client.common.angular2/routers/order-router.service");
var warehouse_products_router_service_1 = require("@modules/client.common.angular2/routers/warehouse-products-router.service");
var product_locales_service_1 = require("@modules/client.common.angular2/locale/product-locales.service");
var store_service_1 = require("../../../src/services/store.service");
var ngx_2 = require("@ionic-native/barcode-scanner/ngx");
var Product_1 = tslib_1.__importDefault(require("@modules/server.common/entities/Product"));
var angular_1 = require("@ionic/angular");
var create_product_type_popup_1 = require("./create-product-type-popup/create-product-type-popup");
var edit_product_type_popup_1 = require("./edit-product-type-popup/edit-product-type-popup");
var OrderState;
(function (OrderState) {
    OrderState[OrderState["WarehousePreparation"] = 0] = "WarehousePreparation";
    OrderState[OrderState["WarehousePreparationProblem"] = 1] = "WarehousePreparationProblem";
    OrderState[OrderState["InDelivery"] = 2] = "InDelivery";
    OrderState[OrderState["Canceled"] = 3] = "Canceled";
    OrderState[OrderState["DeliveryProblem"] = 4] = "DeliveryProblem";
    OrderState[OrderState["Delivered"] = 5] = "Delivered";
})(OrderState = exports.OrderState || (exports.OrderState = {}));
var WarehousePage = (function () {
    function WarehousePage(popoverCtrl, modalCtrl, orderRouter, warehouseProductsRouter, mixpanel, translateProductLocales, store, barcodeScanner) {
        this.popoverCtrl = popoverCtrl;
        this.modalCtrl = modalCtrl;
        this.orderRouter = orderRouter;
        this.warehouseProductsRouter = warehouseProductsRouter;
        this.mixpanel = mixpanel;
        this.translateProductLocales = translateProductLocales;
        this.store = store;
        this.barcodeScanner = barcodeScanner;
        this.filterMode = 'ready';
        this.OrderState = OrderState;
        this.isOrderContainerLive = false;
        this.productsLoading = true;
        this.showRelevant = true;
        this.showAllProducts = false;
    }
    Object.defineProperty(WarehousePage.prototype, "isLogged", {
        get: function () {
            return localStorage.getItem('_warehouseId');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WarehousePage.prototype, "warehouseId", {
        get: function () {
            return localStorage.getItem('_warehouseId');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WarehousePage.prototype, "language", {
        get: function () {
            return localStorage.getItem('_language');
        },
        enumerable: true,
        configurable: true
    });
    WarehousePage.prototype.scanBarcode = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var barcodeData, orderId, error_1;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4, this.barcodeScanner.scan()];
                    case 1:
                        barcodeData = _a.sent();
                        orderId = barcodeData.text;
                        if (orderId !== '') {
                            this.focusedOrder$ = this.orderRouter
                                .get(orderId, {
                                populateCarrier: true,
                                populateWarehouse: true,
                            })
                                .subscribe(function (order) {
                                if (order.warehouseStatus >=
                                    OrderWarehouseStatus_1.default.GivenToCarrier) {
                                    _this.switchOrders(_this.showRelevant);
                                }
                                else {
                                    _this.focusedOrder = order;
                                }
                            });
                        }
                        return [3, 3];
                    case 2:
                        error_1 = _a.sent();
                        console.warn(error_1);
                        return [3, 3];
                    case 3: return [2];
                }
            });
        });
    };
    WarehousePage.prototype.switchOrders = function (showRelevant) {
        if (this.focusedOrder$) {
            this.focusedOrder$.unsubscribe();
        }
        this.focusedOrder = null;
        this.showRelevant = showRelevant;
    };
    WarehousePage.prototype.onOrderFinish = function () {
        this.toggleOrderContainer();
    };
    WarehousePage.prototype.toggleOrderContainer = function () {
        this.isOrderContainerLive = !this.isOrderContainerLive;
    };
    WarehousePage.prototype.getWarehouseProductImageUrl = function (p) {
        var _this = this;
        if (p instanceof Product_1.default) {
            var productImg = p.images.filter(function (i) {
                return i.locale.includes(_this.language);
            })[0];
            if (productImg) {
                return productImg.url;
            }
            return p.images[0].url;
        }
    };
    WarehousePage.prototype.truncateTitle = function (title) {
        if (title) {
            title = title.replace(/[ ]{2,}/, ' ');
            if (title.length <= 15) {
                return title;
            }
            return title.substring(0, 12) + '...';
        }
    };
    WarehousePage.prototype.localeTranslate = function (member) {
        if (member !== undefined) {
            return this.translateProductLocales.getTranslate(member);
        }
    };
    WarehousePage.prototype.orderState = function (order) {
        if (order.warehouseStatus >= 200) {
            return OrderState.WarehousePreparationProblem;
        }
        if (order.carrierStatus >= 200) {
            return OrderState.DeliveryProblem;
        }
        if (order.isCancelled) {
            return OrderState.Canceled;
        }
        if (order.carrierStatus === OrderCarrierStatus_1.default.DeliveryCompleted) {
            return OrderState.Delivered;
        }
        if (order.carrier == null) {
            return OrderState.WarehousePreparation;
        }
        else {
            return OrderState.InDelivery;
        }
    };
    WarehousePage.prototype.updateOrderWarehouseStatus = function (orderId, status) {
        if (status >= 200) {
            if (this.mixpanel) {
                this.mixpanel.track('Order Failed');
            }
        }
        return this.orderRouter.updateWarehouseStatus(orderId, status);
    };
    WarehousePage.prototype.addProduct = function (productId) {
        return this.warehouseProductsRouter.increaseCount(this.warehouseId, productId, 1);
    };
    WarehousePage.prototype.presentCreateProductPopover = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var modal;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.modalCtrl.create({
                            component: create_product_type_popup_1.CreateProductTypePopupPage,
                            cssClass: 'mutation-product-modal',
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4, modal.present()];
                    case 2:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    WarehousePage.prototype.openEditProductModal = function (product) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var modal;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.modalCtrl.create({
                            component: edit_product_type_popup_1.EditProductTypePopupPage,
                            componentProps: { warehouseProduct: product },
                            cssClass: 'mutation-product-modal',
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4, modal.present()];
                    case 2:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    WarehousePage.prototype.getWarehouseStatus = function (orderWarehouseStatusNumber) {
        var basePath = 'WAREHOUSE_VIEW.ORDER_WAREHOUSE_STATUSES.';
        switch (orderWarehouseStatusNumber) {
            case OrderWarehouseStatus_1.default.NoStatus:
                return basePath + 'CREATED';
            case OrderWarehouseStatus_1.default.ReadyForProcessing:
                return basePath + 'CONFIRMED';
            case OrderWarehouseStatus_1.default.WarehouseStartedProcessing:
                return basePath + 'PROCESSING';
            case OrderWarehouseStatus_1.default.AllocationStarted:
                return basePath + 'ALLOCATION_STARTED';
            case OrderWarehouseStatus_1.default.AllocationFinished:
                return basePath + 'ALLOCATION_FINISHED';
            case OrderWarehouseStatus_1.default.PackagingStarted:
                return basePath + 'PACKAGING_STARTED';
            case OrderWarehouseStatus_1.default.PackagingFinished:
                return basePath + 'PACKAGED';
            case OrderWarehouseStatus_1.default.GivenToCarrier:
                return basePath + 'GIVEN_TO_CARRIER';
            case OrderWarehouseStatus_1.default.GivenToCustomer:
                return basePath + 'TAKEN';
            case OrderWarehouseStatus_1.default.AllocationFailed:
                return basePath + 'ALLOCATION_FAILED';
            case OrderWarehouseStatus_1.default.PackagingFailed:
                return basePath + 'PACKAGING_FAILED';
            default:
                return basePath + 'BAD_STATUS';
        }
    };
    WarehousePage.prototype.ionViewWillLeave = function () {
        if (this.warehouse$) {
            this.warehouse$.unsubscribe();
        }
        if (this.focusedOrder$) {
            this.focusedOrder$.unsubscribe();
        }
    };
    WarehousePage = tslib_1.__decorate([
        core_1.Component({
            selector: 'page-warehouse',
            templateUrl: 'warehouse.html',
            styleUrls: ['./warehouse.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [angular_1.PopoverController,
            angular_1.ModalController,
            order_router_service_1.OrderRouter,
            warehouse_products_router_service_1.WarehouseProductsRouter,
            ngx_1.Mixpanel,
            product_locales_service_1.ProductLocalesService,
            store_service_1.Store,
            ngx_2.BarcodeScanner])
    ], WarehousePage);
    return WarehousePage;
}());
exports.WarehousePage = WarehousePage;
//# sourceMappingURL=warehouse.js.map