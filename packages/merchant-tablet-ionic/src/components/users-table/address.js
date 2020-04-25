"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var angular_1 = require("@ionic/angular");
var customer_addr_popup_1 = require("pages/+customers/customer-addr-popup/customer-addr-popup");
var AddressComponent = (function () {
    function AddressComponent(modalCtrl) {
        this.modalCtrl = modalCtrl;
    }
    AddressComponent.prototype.ngOnInit = function () {
        this.user = this.rowData.user;
    };
    AddressComponent.prototype.showAddress = function (user) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var modal;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.modalCtrl.create({
                            component: customer_addr_popup_1.CustomerAddrPopupPage,
                            componentProps: { user: user },
                            cssClass: 'customer-address-popup',
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4, modal.present()];
                    case 2:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    AddressComponent = tslib_1.__decorate([
        core_1.Component({
            styles: [""],
            template: "\n\t\t<span class=\"underlined\" (click)=\"showAddress(user)\">\n\t\t\t{{ user.geoLocation.city }}\n\t\t\t<span *ngIf=\"user.geoLocation.postcode\">{{\n\t\t\t\t'(' + user.geoLocation.postcode + ')'\n\t\t\t}}</span>\n\t\t</span>\n\t",
        }),
        tslib_1.__metadata("design:paramtypes", [angular_1.ModalController])
    ], AddressComponent);
    return AddressComponent;
}());
exports.AddressComponent = AddressComponent;
//# sourceMappingURL=address.js.map