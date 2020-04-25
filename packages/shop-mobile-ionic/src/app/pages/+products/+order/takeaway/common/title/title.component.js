"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var core_2 = require("@ngx-translate/core");
var Order_1 = tslib_1.__importDefault(require("@modules/server.common/entities/Order"));
var TakeawayTitleComponent = (function () {
    function TakeawayTitleComponent(_translateService) {
        this._translateService = _translateService;
        this.order = null;
        this._pageSubscriptions = [];
        this.ngDestroy$ = new rxjs_1.Subject();
    }
    Object.defineProperty(TakeawayTitleComponent.prototype, "byPopupStatuses", {
        get: function () {
            var _this = this;
            var popupStatuses = 'BUY_POPUP.STATUSES_TAKEAWAY';
            var result = '';
            var getTitle = function () {
                var sub = _this._translateService
                    .get(popupStatuses + '.TITLE')
                    .subscribe(function (t) { return (result = t); });
                _this._pageSubscriptions.push(sub);
                return result;
            };
            var getDetails = function () {
                var sub = _this._translateService
                    .get(popupStatuses + '.DETAILS')
                    .subscribe(function (d) { return (result = d); });
                _this._pageSubscriptions.push(sub);
                return result.replace('%t', _this.deliveryTimeRange);
            };
            var getPaidNote = function () {
                var sub = _this._translateService
                    .get(popupStatuses + '.NOT_PAID_NOTE')
                    .subscribe(function (n) { return (result = n); });
                _this._pageSubscriptions.push(sub);
                return result.replace('%s', (_this.order
                    ? _this.order.totalPrice.toFixed(2)
                    : '00.00') + "$");
            };
            return {
                TITLE: getTitle(),
                DETAILS: getDetails(),
                NOT_PAID_NOTE: getPaidNote(),
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TakeawayTitleComponent.prototype, "deliveryTimeRange", {
        get: function () {
            if (this.order == null) {
                return '';
            }
            var deliveryTimeMin = 0;
            var deliveryTimeMax = 0;
            this.order.products.forEach(function (product) {
                if (product.deliveryTimeMin &&
                    product.deliveryTimeMin > deliveryTimeMin) {
                    deliveryTimeMin = product.deliveryTimeMin;
                }
                if (product.deliveryTimeMax &&
                    product.deliveryTimeMax > deliveryTimeMax) {
                    deliveryTimeMax = product.deliveryTimeMax;
                }
            });
            if (deliveryTimeMin !== 0 && deliveryTimeMax !== 0) {
                return deliveryTimeMin + '-' + deliveryTimeMax;
            }
            if (deliveryTimeMin !== 0) {
                return deliveryTimeMin.toString();
            }
            if (deliveryTimeMax !== 0) {
                return deliveryTimeMax.toString();
            }
            return 30 + '-' + 60;
        },
        enumerable: true,
        configurable: true
    });
    TakeawayTitleComponent.prototype._unsubscribeAll = function () {
        this._pageSubscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    TakeawayTitleComponent.prototype.ngOnDestroy = function () {
        console.warn('OrderStoreInfo did leave');
        this._unsubscribeAll();
        this.ngDestroy$.next();
        this.ngDestroy$.complete();
    };
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Order_1.default)
    ], TakeawayTitleComponent.prototype, "order", void 0);
    TakeawayTitleComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'e-cu-order-takeaway-info-title',
            templateUrl: './title.component.html',
            styleUrls: ['./title.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [core_2.TranslateService])
    ], TakeawayTitleComponent);
    return TakeawayTitleComponent;
}());
exports.TakeawayTitleComponent = TakeawayTitleComponent;
//# sourceMappingURL=title.component.js.map