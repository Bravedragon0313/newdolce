"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var store_service_1 = require("../../services/store.service");
var ngx_1 = require("@ionic-native/call-number/ngx");
var User_1 = tslib_1.__importDefault(require("@modules/server.common/entities/User"));
var UserPhoneComponent = (function () {
    function UserPhoneComponent(store, callNumber) {
        this.store = store;
        this.callNumber = callNumber;
    }
    UserPhoneComponent.prototype.ngOnInit = function () {
        if (this.rowData) {
            this.user = this.rowData.user;
        }
    };
    Object.defineProperty(UserPhoneComponent.prototype, "canCall", {
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
    UserPhoneComponent.prototype.attemptCall = function (phone) {
        if (this.canCall) {
            this.callNumber
                .callNumber(phone, true)
                .then(function (res) { return console.warn('Called number!', res); })
                .catch(function (err) { return console.log('Error calling number!', err); });
        }
    };
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", User_1.default)
    ], UserPhoneComponent.prototype, "user", void 0);
    UserPhoneComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'user-phone',
            template: "\n\t\t<ion-icon\n\t\t\t*ngIf=\"user.phone\"\n\t\t\tname=\"call\"\n\t\t\tclass=\"call-icon icon icon-md ion-md-call\"\n\t\t\t(click)=\"attemptCall(user.phone)\"\n\t\t\t[ngClass]=\"canCall ? 'can-call' : 'can-not-call'\"\n\t\t>\n\t\t</ion-icon>\n\n\t\t<span>{{ user.phone || '' }}</span>\n\t",
        }),
        tslib_1.__metadata("design:paramtypes", [store_service_1.Store, ngx_1.CallNumber])
    ], UserPhoneComponent);
    return UserPhoneComponent;
}());
exports.UserPhoneComponent = UserPhoneComponent;
//# sourceMappingURL=phone.js.map