"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var angular_1 = require("@ionic/angular");
var carrier_track_popup_1 = require("pages/+carriers/carrier-track-popup/carrier-track-popup");
var AddressesComponent = (function () {
    function AddressesComponent(modalCtrl) {
        this.modalCtrl = modalCtrl;
    }
    AddressesComponent.prototype.ngOnInit = function () {
        this.carrier = this.rowData.carrier;
    };
    AddressesComponent.prototype.showAddress = function (carrier) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var modal;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.modalCtrl.create({
                            component: carrier_track_popup_1.CarrierTrackPopup,
                            componentProps: { carrier: carrier },
                            cssClass: 'carrier-track-wrapper',
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
    AddressesComponent = tslib_1.__decorate([
        core_1.Component({
            styles: [""],
            template: "\n\t\t<span class=\"underlined\" (click)=\"showAddress(carrier)\">\n\t\t\t{{ carrier.geoLocation.city }}\n\t\t\t<span *ngIf=\"carrier.geoLocation.postcode\">{{\n\t\t\t\t'(' + carrier.geoLocation.postcode + ')'\n\t\t\t}}</span>\n\t\t</span>\n\t",
        }),
        tslib_1.__metadata("design:paramtypes", [angular_1.ModalController])
    ], AddressesComponent);
    return AddressesComponent;
}());
exports.AddressesComponent = AddressesComponent;
//# sourceMappingURL=addresses.js.map