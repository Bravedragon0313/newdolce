"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var WarehouseProduct_1 = tslib_1.__importDefault(require("@modules/server.common/entities/WarehouseProduct"));
var operators_1 = require("rxjs/operators");
var core_2 = require("@ngx-translate/core");
var DeliveryType_1 = tslib_1.__importDefault(require("@modules/server.common/enums/DeliveryType"));
var environment_1 = require("environments/environment");
var store_1 = require("app/services/store");
var defaultDeliveryTimeMin = environment_1.environment.DELIVERY_TIME_MIN;
var defaultDeliveryTimeMax = environment_1.environment.DELIVERY_TIME_MAX;
var DeliveryInfoComponent = (function () {
    function DeliveryInfoComponent(translateService, store) {
        this.translateService = translateService;
        this.store = store;
        this.isTakeaway = this.store.deliveryType === DeliveryType_1.default.Takeaway;
    }
    DeliveryInfoComponent.prototype.ngOnInit = function () {
        this.getDeliveryText();
        this.getTakeawayText();
        this.getMinutesText();
        this.getReadyForText();
    };
    DeliveryInfoComponent.prototype.getDeliveryText = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4, this.translateService
                                .get('PRODUCTS_VIEW.DELIVERY')
                                .pipe(operators_1.first())
                                .toPromise()];
                    case 1:
                        _a.deliveryText = _b.sent();
                        return [2];
                }
            });
        });
    };
    DeliveryInfoComponent.prototype.getTakeawayText = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4, this.translateService
                                .get('PRODUCTS_VIEW.TAKEAWAY')
                                .pipe(operators_1.first())
                                .toPromise()];
                    case 1:
                        _a.takeawayText = _b.sent();
                        return [2];
                }
            });
        });
    };
    DeliveryInfoComponent.prototype.getMinutesText = function () {
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
    DeliveryInfoComponent.prototype.getReadyForText = function () {
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
    DeliveryInfoComponent.prototype.getIsInstant = function (currentProduct) {
        if (currentProduct == null) {
            return false;
        }
        var productInfo = currentProduct;
        if (productInfo.isDeliveryRequired) {
            if (productInfo.deliveryTimeMax !=
                null &&
                productInfo.deliveryTimeMax <= 15) {
                return true;
            }
            else {
                return false;
            }
        }
        else {
            if (productInfo.deliveryTimeMax == null ||
                productInfo.deliveryTimeMax <= 15) {
                return true;
            }
            else {
                return false;
            }
        }
    };
    DeliveryInfoComponent.prototype.getProductDeliverySignIconName = function () {
        if (this.currentProduct == null) {
            return '';
        }
        return this.isTakeaway ? 'flash_on' : 'directions_bike';
    };
    DeliveryInfoComponent.prototype.getProductDeliveryLine1 = function () {
        if (this.currentProduct == null) {
            return '';
        }
        var productInfo = this.currentProduct;
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
    };
    DeliveryInfoComponent.prototype.getProductDeliveryLine2 = function () {
        if (this.currentProduct == null) {
            return '';
        }
        if (!this.isTakeaway) {
            return this.deliveryText;
        }
        else {
            return this.takeawayText;
        }
    };
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", WarehouseProduct_1.default)
    ], DeliveryInfoComponent.prototype, "currentProduct", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], DeliveryInfoComponent.prototype, "overImage", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], DeliveryInfoComponent.prototype, "hasDiscount", void 0);
    DeliveryInfoComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'product-delivery-info',
            styleUrls: ['./delivery-info.scss'],
            templateUrl: './delivery-info.html',
        }),
        tslib_1.__metadata("design:paramtypes", [core_2.TranslateService,
            store_1.Store])
    ], DeliveryInfoComponent);
    return DeliveryInfoComponent;
}());
exports.DeliveryInfoComponent = DeliveryInfoComponent;
//# sourceMappingURL=delivery-info.js.map