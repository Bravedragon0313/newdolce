"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var router_1 = require("@angular/router");
var core_1 = require("@angular/core");
var animations_1 = require("@angular/animations");
var rxjs_1 = require("rxjs");
require("rxjs/add/observable/fromEvent");
var ElementQueries_1 = require("css-element-queries/src/ElementQueries");
var ProductInfo_1 = tslib_1.__importDefault(require("@modules/server.common/entities/ProductInfo"));
var order_router_service_1 = require("@modules/client.common.angular2/routers/order-router.service");
var warehouse_orders_router_service_1 = require("@modules/client.common.angular2/routers/warehouse-orders-router.service");
var product_locales_service_1 = require("@modules/client.common.angular2/locale/product-locales.service");
var store_1 = require("app/services/store");
var RegistrationSystem_1 = tslib_1.__importDefault(require("@modules/server.common/enums/RegistrationSystem"));
var ProductComponent = (function () {
    function ProductComponent(warehouseOrdersRouter, orderRouter, router, _productLocalesService, store) {
        this.warehouseOrdersRouter = warehouseOrdersRouter;
        this.orderRouter = orderRouter;
        this.router = router;
        this._productLocalesService = _productLocalesService;
        this.store = store;
        this.load = new core_1.EventEmitter();
        this.showTitle = 'hidden';
        this.isGridView = this.store.productListViewType === 'grid';
    }
    ProductComponent.prototype.ngOnChanges = function () {
        var _this = this;
        if (this.info) {
            this.productImage = this.info.warehouseProduct.product['images'].find(function (i) {
                return (i.url ===
                    _this.localeTranslate(_this.info.warehouseProduct.product['images']));
            });
        }
    };
    ProductComponent.prototype.onImageLoad = function () {
        if (ElementQueries_1.ElementQueries) {
            ElementQueries_1.ElementQueries.init();
        }
        this.load.emit();
        this.showTitle = 'shown';
    };
    ProductComponent.prototype.onLayoutComplete = function () {
        return;
    };
    ProductComponent.prototype.createOrder = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var userId, order;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(!this.store.userId &&
                            this.store.registrationSystem === RegistrationSystem_1.default.Disabled)) return [3, 1];
                        this.store.registrationSystem = RegistrationSystem_1.default.Once;
                        this.store.buyProduct = this.info.warehouseProduct.id;
                        this.store.mechantId = this.info.warehouseId;
                        this.router.navigate(['/login']);
                        return [3, 4];
                    case 1:
                        userId = this.store.userId;
                        return [4, this.warehouseOrdersRouter.createByProductType(userId, this.info.warehouseId, this.info.warehouseProduct.product['id'], this.store.deliveryType)];
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
    ProductComponent.prototype.localeTranslate = function (member) {
        return this._productLocalesService.getTranslate(member);
    };
    ProductComponent.prototype.resizeWorks = function () {
    };
    tslib_1.__decorate([
        core_1.Output(),
        tslib_1.__metadata("design:type", core_1.EventEmitter)
    ], ProductComponent.prototype, "load", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", ProductInfo_1.default)
    ], ProductComponent.prototype, "info", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", rxjs_1.Observable)
    ], ProductComponent.prototype, "layoutComplete", void 0);
    ProductComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'product',
            animations: [
                animations_1.trigger('show', [
                    animations_1.state('shown', animations_1.style({ opacity: 1 })),
                    animations_1.state('hidden', animations_1.style({ opacity: 0 })),
                    animations_1.transition('shown <=> hidden', animations_1.animate('.2s')),
                ]),
            ],
            styleUrls: ['./product.component.scss'],
            templateUrl: './product.component.html',
        }),
        tslib_1.__metadata("design:paramtypes", [warehouse_orders_router_service_1.WarehouseOrdersRouter,
            order_router_service_1.OrderRouter,
            router_1.Router,
            product_locales_service_1.ProductLocalesService,
            store_1.Store])
    ], ProductComponent);
    return ProductComponent;
}());
exports.ProductComponent = ProductComponent;
//# sourceMappingURL=product.component.js.map