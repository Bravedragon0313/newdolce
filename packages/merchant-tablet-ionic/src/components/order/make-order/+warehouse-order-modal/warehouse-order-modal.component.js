"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var ng2_smart_table_1 = require("ng2-smart-table");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var warehouse_products_router_service_1 = require("@modules/client.common.angular2/routers/warehouse-products-router.service");
var warehouse_order_input_component_1 = require("./warehouse-order-input.component");
var core_2 = require("@ngx-translate/core");
var product_locales_service_1 = require("@modules/client.common.angular2/locale/product-locales.service");
var WarehouseOrderModalComponent = (function () {
    function WarehouseOrderModalComponent(_translateService, _productLocaleService, _warehouseProductsRouter) {
        this._translateService = _translateService;
        this._productLocaleService = _productLocaleService;
        this._warehouseProductsRouter = _warehouseProductsRouter;
        this.showOrderAction = true;
        this.makeOrderEmitter = new core_1.EventEmitter();
        this.isOrderAllowedEmitter = new core_1.EventEmitter();
        this.sourceSmartTable = new ng2_smart_table_1.LocalDataSource();
        this._warehouseProducts = [];
        this._orderProducts = [];
        this._clearAvailableProductsFilter = false;
        this._ngDestroy$ = new rxjs_1.Subject();
    }
    Object.defineProperty(WarehouseOrderModalComponent.prototype, "TRANSLATE_PREFIXES", {
        get: function () {
            var basePrefix = 'SHARED.WAREHOUSE.ORDER_MODAL';
            var smartTableTitlesPrefix = 'SMART_TABLE.TITLES';
            return {
                MAKE_ORDER: basePrefix + ".MAKE_ORDER",
                ONLY_AVAILABLE: basePrefix + ".ONLY_AVAILABLE",
                ORDER: basePrefix + ".ORDER",
                SMART_TABLE: {
                    TITLES: {
                        IMG: basePrefix + "." + smartTableTitlesPrefix + ".IMG",
                        PRODUCT: basePrefix + "." + smartTableTitlesPrefix + ".PRODUCT",
                        PRICE: basePrefix + "." + smartTableTitlesPrefix + ".PRICE",
                        AVAILABLE: basePrefix + "." + smartTableTitlesPrefix + ".AVAILABLE",
                        AMOUNT: basePrefix + "." + smartTableTitlesPrefix + ".AMOUNT",
                    },
                },
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WarehouseOrderModalComponent.prototype, "canOrder", {
        get: function () {
            return this._orderProducts.some(function (product) { return product.count > 0; });
        },
        enumerable: true,
        configurable: true
    });
    WarehouseOrderModalComponent.prototype.ngOnInit = function () {
        this._loadSettingsSmartTable();
        this._loadWarehouseProducts();
    };
    WarehouseOrderModalComponent.prototype.ngOnDestroy = function () {
        this._ngDestroy$.next();
        this._ngDestroy$.complete();
    };
    WarehouseOrderModalComponent.prototype.makeOrder = function () {
        this.makeOrderEmitter.emit(this._orderProducts.filter(function (_a) {
            var count = _a.count;
            return count > 0;
        }));
    };
    WarehouseOrderModalComponent.prototype.toggleAvalableProducts = function () {
        if (this._clearAvailableProductsFilter) {
            this.sourceSmartTable.setFilter([]);
        }
        else {
            this.sourceSmartTable.setFilter([
                {
                    field: 'available',
                    search: '0',
                    filter: function (element, valueToCompare) {
                        var regex = /<div class="badge badge-pill badge-secondary">([0-9]+)<\/div>/gm;
                        var productCount = +regex.exec(element)[1];
                        return productCount > +valueToCompare;
                    },
                },
            ]);
        }
        this._clearAvailableProductsFilter = !this
            ._clearAvailableProductsFilter;
    };
    WarehouseOrderModalComponent.prototype._loadWarehouseProducts = function () {
        var _this = this;
        this._warehouseProductsRouter
            .get(this.warehouseId)
            .pipe(operators_1.takeUntil(this._ngDestroy$))
            .subscribe(function (p) {
            Object.assign(_this._warehouseProducts, p);
            _this._loadDataSmartTable();
        });
    };
    WarehouseOrderModalComponent.prototype._loadDataSmartTable = function () {
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
                price: wp.price + "$",
                available: "\n\t\t\t\t\t\t<div class=\"badge badge-pill badge-secondary\">" + wp.count + "</div>\n\t\t\t\t\t",
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
    WarehouseOrderModalComponent.prototype._getTranslate = function (members) {
        return this._productLocaleService.getTranslate(members);
    };
    WarehouseOrderModalComponent.prototype._compareByAvailableProducts = function (_, first, second) {
        var regex = /<div class="badge badge-pill badge-secondary">([0-9]+)<\/div>/gm;
        var matchFirst = +regex.exec(first)[1];
        regex.lastIndex = 0;
        var matchSecond = +regex.exec(second)[1];
        return _ > 0 ? matchFirst - matchSecond : matchSecond - matchFirst;
    };
    WarehouseOrderModalComponent.prototype._translate = function (key) {
        var translationResult = '';
        this._translateService.get(key).subscribe(function (res) {
            translationResult = res;
        });
        return translationResult;
    };
    WarehouseOrderModalComponent.prototype._loadSettingsSmartTable = function () {
        var _this = this;
        var img = this._translate(this.TRANSLATE_PREFIXES.SMART_TABLE.TITLES.IMG);
        var product = this._translate(this.TRANSLATE_PREFIXES.SMART_TABLE.TITLES.PRODUCT);
        var price = this._translate(this.TRANSLATE_PREFIXES.SMART_TABLE.TITLES.PRICE);
        var available = this._translate(this.TRANSLATE_PREFIXES.SMART_TABLE.TITLES.AVAILABLE);
        var amount = this._translate(this.TRANSLATE_PREFIXES.SMART_TABLE.TITLES.AMOUNT);
        this.settingsSmartTable = {
            actions: false,
            pager: { perPage: 5 },
            columns: {
                img: {
                    title: img,
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
                    compareFunction: this._compareByAvailableProducts,
                },
                amount: {
                    title: amount,
                    filter: false,
                    type: 'custom',
                    renderComponent: warehouse_order_input_component_1.WarehouseOrderInputComponent,
                    onComponentInitFunction: function (childInstance) {
                        childInstance.amount
                            .pipe(operators_1.takeUntil(_this._ngDestroy$))
                            .subscribe(function (count) {
                            var wProduct = _this._orderProducts.find(function (_a) {
                                var productId = _a.productId;
                                return productId === childInstance.productId;
                            });
                            wProduct.count = count;
                            if (!_this.showOrderAction) {
                                _this.isOrderAllowedEmitter.emit(_this.canOrder);
                            }
                        });
                    },
                },
            },
        };
    };
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", String)
    ], WarehouseOrderModalComponent.prototype, "warehouseId", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], WarehouseOrderModalComponent.prototype, "showOrderAction", void 0);
    tslib_1.__decorate([
        core_1.Output(),
        tslib_1.__metadata("design:type", Object)
    ], WarehouseOrderModalComponent.prototype, "makeOrderEmitter", void 0);
    tslib_1.__decorate([
        core_1.Output(),
        tslib_1.__metadata("design:type", Object)
    ], WarehouseOrderModalComponent.prototype, "isOrderAllowedEmitter", void 0);
    WarehouseOrderModalComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'ea-warehouse-order-modal',
            styleUrls: ['./warehouse-order-modal.component.scss'],
            templateUrl: './warehouse-order-modal.component.html',
        }),
        tslib_1.__metadata("design:paramtypes", [core_2.TranslateService,
            product_locales_service_1.ProductLocalesService,
            warehouse_products_router_service_1.WarehouseProductsRouter])
    ], WarehouseOrderModalComponent);
    return WarehouseOrderModalComponent;
}());
exports.WarehouseOrderModalComponent = WarehouseOrderModalComponent;
//# sourceMappingURL=warehouse-order-modal.component.js.map