"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var product_locales_service_1 = require("@modules/client.common.angular2/locale/product-locales.service");
var rxjs_1 = require("rxjs");
var utils_1 = require("@modules/server.common/utils");
var Order_1 = tslib_1.__importDefault(require("@modules/server.common/entities/Order"));
var qrcode_1 = tslib_1.__importDefault(require("qrcode"));
var OrderBarcodeTypes_1 = tslib_1.__importStar(require("@modules/server.common/enums/OrderBarcodeTypes"));
var TakeawayOrderInfoComponent = (function () {
    function TakeawayOrderInfoComponent(_translateProductLocales) {
        this._translateProductLocales = _translateProductLocales;
        this.bcWidth = 0.7;
        this.ngDestroy$ = new rxjs_1.Subject();
    }
    Object.defineProperty(TakeawayOrderInfoComponent.prototype, "orderId", {
        get: function () {
            if (this.order) {
                return utils_1.getIdFromTheDate(this.order);
            }
            return null;
        },
        enumerable: true,
        configurable: true
    });
    TakeawayOrderInfoComponent.prototype.ngOnInit = function () {
        this.loadQRCode();
    };
    TakeawayOrderInfoComponent.prototype.orderBarcodeTypesToString = function (type) {
        return OrderBarcodeTypes_1.orderBarcodeTypesToString(type);
    };
    TakeawayOrderInfoComponent.prototype.localeTranslate = function (member) {
        return this._translateProductLocales.getTranslate(member);
    };
    TakeawayOrderInfoComponent.prototype.ngOnDestroy = function () {
        console.warn('TakeawayOrderInfoComponent did leave');
        this.ngDestroy$.next();
        this.ngDestroy$.complete();
    };
    TakeawayOrderInfoComponent.prototype.loadQRCode = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var generateQRCode, orderBarcodeType;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        generateQRCode = function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                            var _a;
                            return tslib_1.__generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0:
                                        _a = this;
                                        return [4, qrcode_1.default.toDataURL(this.order.id)];
                                    case 1:
                                        _a.barcodetDataUrl = _b.sent();
                                        return [2];
                                }
                            });
                        }); };
                        if (!this.order) return [3, 6];
                        if (!(this.order.warehouse &&
                            this.order.warehouse['orderBarcodeType'])) return [3, 4];
                        orderBarcodeType = this.order.warehouse['orderBarcodeType'];
                        if (!(orderBarcodeType === OrderBarcodeTypes_1.default.QR)) return [3, 2];
                        return [4, generateQRCode()];
                    case 1:
                        _a.sent();
                        return [3, 3];
                    case 2:
                        if (orderBarcodeType === OrderBarcodeTypes_1.default.CODE39) {
                            this.bcWidth = 0.5;
                        }
                        this.bcFormat = orderBarcodeType;
                        _a.label = 3;
                    case 3: return [3, 6];
                    case 4: return [4, generateQRCode()];
                    case 5:
                        _a.sent();
                        _a.label = 6;
                    case 6: return [2];
                }
            });
        });
    };
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Order_1.default)
    ], TakeawayOrderInfoComponent.prototype, "order", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], TakeawayOrderInfoComponent.prototype, "lessInfo", void 0);
    TakeawayOrderInfoComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'e-cu-order-takeaway-info-order-info',
            templateUrl: './order-info.component.html',
            styleUrls: ['./order-info.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [product_locales_service_1.ProductLocalesService])
    ], TakeawayOrderInfoComponent);
    return TakeawayOrderInfoComponent;
}());
exports.TakeawayOrderInfoComponent = TakeawayOrderInfoComponent;
//# sourceMappingURL=order-info.component.js.map