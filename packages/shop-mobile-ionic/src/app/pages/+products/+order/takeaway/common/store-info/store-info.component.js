"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var Order_1 = tslib_1.__importDefault(require("@modules/server.common/entities/Order"));
var entities_1 = require("@modules/server.common/entities");
var call_number_1 = require("@ionic-native/call-number");
var store_service_1 = require("app/services/store.service");
var TakeawayStoreInfoComponent = (function () {
    function TakeawayStoreInfoComponent(store) {
        this.store = store;
        this.openMap = new core_1.EventEmitter();
    }
    Object.defineProperty(TakeawayStoreInfoComponent.prototype, "warehouse", {
        get: function () {
            if (this.order && this.order.warehouse) {
                return this.order.warehouse;
            }
            else {
                return null;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TakeawayStoreInfoComponent.prototype, "inStore", {
        get: function () {
            return this.store.inStore;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TakeawayStoreInfoComponent.prototype, "storeFullAddress", {
        get: function () {
            if (this.order && this.order.warehouse) {
                var store = this.order.warehouse;
                return (store['geoLocation'].city + ", " + store['geoLocation'].streetAddress + " " +
                    (store['geoLocation'].house + ", " + (store['geoLocation'].postcode
                        ? store['geoLocation'].postcode + ', '
                        : '') + " " + entities_1.getCountryName(store['geoLocation'].countryId)));
            }
            return;
        },
        enumerable: true,
        configurable: true
    });
    TakeawayStoreInfoComponent.prototype.attemptCall = function (phone) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var err_1;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4, call_number_1.CallNumber.callNumber(phone, true)];
                    case 1:
                        _a.sent();
                        return [3, 3];
                    case 2:
                        err_1 = _a.sent();
                        console.warn('Call Was Unsuccessful!');
                        return [3, 3];
                    case 3: return [2];
                }
            });
        });
    };
    TakeawayStoreInfoComponent.prototype.ngOnDestroy = function () { };
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Order_1.default)
    ], TakeawayStoreInfoComponent.prototype, "order", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], TakeawayStoreInfoComponent.prototype, "lessInfo", void 0);
    tslib_1.__decorate([
        core_1.Output(),
        tslib_1.__metadata("design:type", Object)
    ], TakeawayStoreInfoComponent.prototype, "openMap", void 0);
    TakeawayStoreInfoComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'e-cu-order-takeaway-info-store-info',
            templateUrl: './store-info.component.html',
            styleUrls: ['./store-info.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [store_service_1.Store])
    ], TakeawayStoreInfoComponent);
    return TakeawayStoreInfoComponent;
}());
exports.TakeawayStoreInfoComponent = TakeawayStoreInfoComponent;
//# sourceMappingURL=store-info.component.js.map