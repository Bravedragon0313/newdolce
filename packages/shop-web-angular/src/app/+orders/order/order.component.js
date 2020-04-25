"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var Order_1 = tslib_1.__importDefault(require("@modules/server.common/entities/Order"));
var animations_1 = require("@angular/animations");
var product_locales_service_1 = require("@modules/client.common.angular2/locale/product-locales.service");
var warehouse_orders_router_service_1 = require("@modules/client.common.angular2/routers/warehouse-orders-router.service");
var warehouse_router_service_1 = require("@modules/client.common.angular2/routers/warehouse-router.service");
var core_2 = require("@ngx-translate/core");
var dialog_1 = require("@angular/material/dialog");
var message_pop_up_component_1 = require("app/shared/message-pop-up/message-pop-up.component");
var operators_1 = require("rxjs/operators");
var carrier_router_service_1 = require("@modules/client.common.angular2/routers/carrier-router.service");
var carrier_location_component_1 = require("../location/carrier-location.component");
var OrderComponent = (function () {
    function OrderComponent(warehouseOrdersRouter, warehouseRouter, carrierRouter, _productLocalesService, translateService, dialog) {
        this.warehouseOrdersRouter = warehouseOrdersRouter;
        this.warehouseRouter = warehouseRouter;
        this.carrierRouter = carrierRouter;
        this._productLocalesService = _productLocalesService;
        this.translateService = translateService;
        this.dialog = dialog;
        this.PREFIX_ORDER_STATUS = 'ORDER_CARRIER_STATUS.';
        this.cancelPopUpButton = 'CANCEL';
        this.confirmPopUpButton = 'OK';
        this.commonPopUpText = 'CANCEL_ORDER';
        this.modalTitleText = 'CONFIRMATION';
    }
    OrderComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(message_pop_up_component_1.MessagePopUpComponent, {
            width: '560px',
            data: {
                modalTitle: this.modalTitleText,
                cancelButton: this.cancelPopUpButton,
                confirmButton: this.confirmPopUpButton,
                commonText: this.commonPopUpText,
            },
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                return _this.warehouseOrdersRouter
                    .cancel(_this.order._id.toString())
                    .then();
            }
        });
    };
    OrderComponent.prototype.openMap = function () {
        this.dialog.open(carrier_location_component_1.CarrierLocationComponent, {
            width: '560px',
            panelClass: 'app-dialog-container',
            data: {
                carrier: this.carrier,
                merchant: this.warehouse,
                userOrder: this.order.user,
            },
        });
    };
    OrderComponent.prototype.getTranslate = function (key) {
        var translationResult = '';
        this.translateService.get(key).subscribe(function (res) {
            translationResult = res;
        });
        return translationResult;
    };
    OrderComponent.prototype.ngOnInit = function () {
        this.loadData();
    };
    OrderComponent.prototype.loadData = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return tslib_1.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        this.price = 0;
                        if (this.order.products.length) {
                            this.title = this.localeTranslate(this.order.products[0].product.title);
                            this.price = this.order.totalPrice;
                            this.description = this.localeTranslate(this.order.products[0].product.description);
                            this.img = this.localeTranslate(this.order.products[0].product.images);
                            this.products = this.order.products;
                        }
                        this.orderStatusText = this.order.warehouseStatusText;
                        this.orderStatusTextTranslates =
                            this.PREFIX_ORDER_STATUS + this.orderStatusText;
                        this.orderNumber = this.order.orderNumber;
                        this.orderType = this.order.orderType;
                        this.createdAt = this.order.createdAt;
                        _a = this;
                        return [4, this.warehouseRouter
                                .get(this.order.warehouseId, false)
                                .pipe(operators_1.first())
                                .toPromise()];
                    case 1:
                        _a.warehouse = _c.sent();
                        if (!this.order.carrierId) return [3, 3];
                        _b = this;
                        return [4, this.carrierRouter
                                .get(this.order.carrierId)
                                .pipe(operators_1.first())
                                .toPromise()];
                    case 2:
                        _b.carrier = _c.sent();
                        _c.label = 3;
                    case 3: return [2];
                }
            });
        });
    };
    OrderComponent.prototype.localeTranslate = function (member) {
        return this._productLocalesService.getTranslate(member);
    };
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Order_1.default)
    ], OrderComponent.prototype, "order", void 0);
    OrderComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'order',
            animations: [
                animations_1.trigger('show', [
                    animations_1.state('shown', animations_1.style({ opacity: 1 })),
                    animations_1.state('hidden', animations_1.style({ opacity: 0 })),
                    animations_1.transition('shown <=> hidden', animations_1.animate('.2s')),
                ]),
            ],
            styleUrls: ['./order.component.scss'],
            templateUrl: './order.component.html',
        }),
        tslib_1.__metadata("design:paramtypes", [warehouse_orders_router_service_1.WarehouseOrdersRouter,
            warehouse_router_service_1.WarehouseRouter,
            carrier_router_service_1.CarrierRouter,
            product_locales_service_1.ProductLocalesService,
            core_2.TranslateService,
            dialog_1.MatDialog])
    ], OrderComponent);
    return OrderComponent;
}());
exports.OrderComponent = OrderComponent;
//# sourceMappingURL=order.component.js.map