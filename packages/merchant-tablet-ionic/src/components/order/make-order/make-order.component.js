"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var ng2_smart_table_1 = require("ng2-smart-table");
var rxjs_1 = require("rxjs");
var make_order_input_component_1 = require("./make-order-input.component");
var warehouse_products_router_service_1 = require("@modules/client.common.angular2/routers/warehouse-products-router.service");
var operators_1 = require("rxjs/operators");
var product_locales_service_1 = require("@modules/client.common.angular2/locale/product-locales.service");
var warehouse_orders_service_1 = require("../../../services/warehouse-orders.service");
var core_2 = require("@ngx-translate/core");
var angular_1 = require("@ionic/angular");
var MakeOrderComponent = (function () {
    function MakeOrderComponent(_warehouseProductsRouter, _productLocaleService, _warehouseOrdersService, _alertController, _translateService) {
        this._warehouseProductsRouter = _warehouseProductsRouter;
        this._productLocaleService = _productLocaleService;
        this._warehouseOrdersService = _warehouseOrdersService;
        this._alertController = _alertController;
        this._translateService = _translateService;
        this.ngDestroy$ = new rxjs_1.Subject();
        this.isOrderAllowedEmitter = new core_1.EventEmitter();
        this.sourceSmartTable = new ng2_smart_table_1.LocalDataSource();
        this._orderProducts = [];
        this._warehouseProducts = [];
        this._ngDestroy$ = new rxjs_1.Subject();
    }
    Object.defineProperty(MakeOrderComponent.prototype, "canOrder", {
        get: function () {
            return this._orderProducts.some(function (product) { return product.count > 0; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MakeOrderComponent.prototype, "warehouseId", {
        get: function () {
            return localStorage.getItem('_warehouseId');
        },
        enumerable: true,
        configurable: true
    });
    MakeOrderComponent.prototype.ngOnInit = function () {
        this._loadSettingsSmartTable();
        this._loadWarehouseProducts();
    };
    MakeOrderComponent.prototype.makeOrder = function () {
        var _this = this;
        var orderProducts = this._orderProducts.filter(function (_a) {
            var count = _a.count;
            return count > 0;
        });
        this._warehouseOrdersService
            .createOrder({
            userId: this.customerId,
            warehouseId: this.warehouseId,
            products: orderProducts,
        })
            .pipe(operators_1.takeUntil(this._ngDestroy$))
            .subscribe(function () {
            _this._showNotification("User with id '" + _this.customerId + "' finish the order");
            _this.orderFinishedEmitter.emit();
        }, function () {
            _this._showNotification('Something is wrong, unable to place order!');
        });
    };
    MakeOrderComponent.prototype._compareByAvailableProducts = function (_, first, second) {
        var regex = /<div class="text-center"><div class="badge badge-pill badge-secondary text-center">([0-9]+)<\/div><\/div>/gm;
        var matchFirst = +regex.exec(first)[1];
        regex.lastIndex = 0;
        var matchSecond = +regex.exec(second)[1];
        return _ > 0 ? matchFirst - matchSecond : matchSecond - matchFirst;
    };
    MakeOrderComponent.prototype._showNotification = function (message) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var alert;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this._alertController.create({
                            message: message,
                            buttons: ['OK'],
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4, alert.present()];
                    case 2:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    MakeOrderComponent.prototype._loadWarehouseProducts = function () {
        var _this = this;
        this._warehouseProductsRouter
            .get(this.warehouseId)
            .pipe(operators_1.takeUntil(this._ngDestroy$))
            .subscribe(function (p) {
            Object.assign(_this._warehouseProducts, p);
            _this._loadDataSmartTable();
        });
    };
    MakeOrderComponent.prototype._loadDataSmartTable = function () {
        var _this = this;
        this._orderProducts = this._warehouseProducts.map(function (wp) {
            return {
                productId: wp.productId,
                count: 0,
            };
        });
        var productsData = this._warehouseProducts.map(function (wp) {
            return {
                img: "\n\t\t\t\t\t\t<img src=\"" + _this._getTranslate(wp.product['images']) + "\" height=\"68px\"/>\n\t\t\t\t\t",
                product: "\n\t\t\t\t\t\t<span class=\"float-left\">" + _this._getTranslate(wp.product['title']) + "</span>\n\t\t\t\t\t",
                price: "<div class=\"text-center\">$" + wp.price + "</div>",
                available: "\n\t\t\t\t\t\t<div class=\"text-center\"><div class=\"badge badge-pill badge-secondary text-center\">" + wp.count + "</div></div>\n\t\t\t\t\t",
                amount: { productId: wp.productId, available: wp.count },
            };
        });
        this.sourceSmartTable.setSort([
            {
                field: 'available',
                direction: 'desc',
                compare: this._compareByAvailableProducts,
            },
        ]);
        this.sourceSmartTable.load(productsData);
    };
    MakeOrderComponent.prototype._getTranslate = function (members) {
        return this._productLocaleService.getTranslate(members);
    };
    MakeOrderComponent.prototype._loadSettingsSmartTable = function () {
        var _this = this;
        var columnTitlePrefix = 'WAREHOUSE_VIEW.NEW_ORDER_VIEW.';
        var getTranslate = function (name) {
            return _this._translateService.get(columnTitlePrefix + name);
        };
        rxjs_1.forkJoin(this._translateService.get('Id'), getTranslate('IMAGE'), getTranslate('PRODUCT'), getTranslate('PRICE'), getTranslate('AVAILABLE'), getTranslate('AMOUNT'))
            .pipe(operators_1.takeUntil(this.ngDestroy$))
            .subscribe(function (_a) {
            var id = _a[0], image = _a[1], product = _a[2], price = _a[3], available = _a[4], amount = _a[5];
            _this.settingsSmartTable = {
                actions: false,
                pager: { perPage: 3 },
                columns: {
                    img: {
                        title: image,
                        filter: false,
                        type: 'html',
                        width: '50px',
                    },
                    product: {
                        title: product,
                        type: 'html',
                    },
                    price: {
                        title: price,
                        filter: false,
                        type: 'html',
                        compareFunction: function (_, first, second) {
                            var matchFirst = +first.replace('$', '');
                            var matchSecond = +second.replace('$', '');
                            return _ > 0
                                ? matchFirst - matchSecond
                                : matchSecond - matchFirst;
                        },
                    },
                    available: {
                        title: available,
                        type: 'html',
                        filter: false,
                        compareFunction: _this._compareByAvailableProducts,
                    },
                    amount: {
                        title: amount,
                        filter: false,
                        type: 'custom',
                        renderComponent: make_order_input_component_1.MakeOrderInputComponent,
                        onComponentInitFunction: function (childInstance) {
                            childInstance.amount
                                .pipe(operators_1.takeUntil(_this._ngDestroy$))
                                .subscribe(function (count) {
                                var wProduct = _this._orderProducts.find(function (_a) {
                                    var productId = _a.productId;
                                    return productId ===
                                        childInstance.productId;
                                });
                                wProduct.count = count;
                                _this.isOrderAllowedEmitter.emit(_this.canOrder);
                            });
                        },
                    },
                },
            };
        });
    };
    MakeOrderComponent.prototype.ngOnDestroy = function () {
        this.ngDestroy$.next();
        this.ngDestroy$.complete();
    };
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", String)
    ], MakeOrderComponent.prototype, "customerId", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", core_1.EventEmitter)
    ], MakeOrderComponent.prototype, "orderFinishedEmitter", void 0);
    tslib_1.__decorate([
        core_1.Output(),
        tslib_1.__metadata("design:type", Object)
    ], MakeOrderComponent.prototype, "isOrderAllowedEmitter", void 0);
    MakeOrderComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'make-order',
            templateUrl: './make-order.component.html',
            styleUrls: ['./make-order.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [warehouse_products_router_service_1.WarehouseProductsRouter,
            product_locales_service_1.ProductLocalesService,
            warehouse_orders_service_1.WarehouseOrdersService,
            angular_1.AlertController,
            core_2.TranslateService])
    ], MakeOrderComponent);
    return MakeOrderComponent;
}());
exports.MakeOrderComponent = MakeOrderComponent;
//# sourceMappingURL=make-order.component.js.map