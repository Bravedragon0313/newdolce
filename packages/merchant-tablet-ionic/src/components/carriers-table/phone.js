"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var Carrier_1 = tslib_1.__importDefault(require("@modules/server.common/entities/Carrier"));
var store_service_1 = require("../../services/store.service");
var ngx_1 = require("@ionic-native/call-number/ngx");
var PhoneComponent = (function () {
    function PhoneComponent(store, callNumber) {
        this.store = store;
        this.callNumber = callNumber;
    }
    PhoneComponent.prototype.ngOnInit = function () {
        if (this.rowData) {
            this.carrier = this.rowData.carrier;
        }
    };
    Object.defineProperty(PhoneComponent.prototype, "canCall", {
        get: function () {
            if (this.store.platform) {
                return (this.store.platform.toLocaleLowerCase() === 'android' ||
                    this.store.platform.toLocaleLowerCase() === 'ios');
            }
            return false;
        },
        enumerable: true,
        configurable: true
    });
    PhoneComponent.prototype.attemptCall = function (phone) {
        if (this.canCall) {
            this.callNumber
                .callNumber(phone, true)
                .then(function (res) { return console.warn('Called number!', res); })
                .catch(function (err) { return console.log('Error calling number!', err); });
        }
    };
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Carrier_1.default)
    ], PhoneComponent.prototype, "carrier", void 0);
    PhoneComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'carrier-phone',
            template: "\n\t\t<ion-icon\n\t\t\t*ngIf=\"carrier?.phone\"\n\t\t\tname=\"call\"\n\t\t\tclass=\"call-icon icon icon-md ion-md-call\"\n\t\t\t(click)=\"attemptCall(carrier?.phone)\"\n\t\t\t[ngClass]=\"canCall ? 'can-call' : 'can-not-call'\"\n\t\t>\n\t\t</ion-icon>\n\t\t<span>{{ carrier?.phone || '' }}</span>\n\t",
        }),
        tslib_1.__metadata("design:paramtypes", [store_service_1.Store, ngx_1.CallNumber])
    ], PhoneComponent);
    return PhoneComponent;
}());
exports.PhoneComponent = PhoneComponent;
//# sourceMappingURL=phone.js.map