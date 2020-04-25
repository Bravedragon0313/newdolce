"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var angular_1 = require("@ionic/angular");
var carrier_deliveries_popup_1 = require("pages/+carriers/carrier-deliveries-popup/carrier-deliveries-popup");
var DeliveriesComponent = (function () {
    function DeliveriesComponent(modalCtrl) {
        this.modalCtrl = modalCtrl;
    }
    DeliveriesComponent.prototype.ngOnInit = function () {
        this.carrier = this.rowData.carrier;
    };
    DeliveriesComponent.prototype.showDeliveriesInfo = function (carrier) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var modal;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.modalCtrl.create({
                            component: carrier_deliveries_popup_1.CarrierDeliveriesPopupPage,
                            componentProps: { carrier: carrier },
                            cssClass: 'carrier-deliveries',
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
    DeliveriesComponent = tslib_1.__decorate([
        core_1.Component({
            styles: [""],
            template: "\n\t\t<div class=\"text-center\">\n\t\t\t<ion-icon\n\t\t\t\tios=\"ios-information-circle\"\n\t\t\t\tmd=\"md-information-circle\"\n\t\t\t></ion-icon>\n\t\t</div>\n\t\t<div class=\"text-center\">\n\t\t\t<span class=\"underlined\" (click)=\"showDeliveriesInfo(carrier)\">\n\t\t\t\t{{\n\t\t\t\t\tcarrier.deliveriesCountToday +\n\t\t\t\t\t\t'/' +\n\t\t\t\t\t\tcarrier.numberOfDeliveries\n\t\t\t\t}}\n\t\t\t</span>\n\t\t</div>\n\t",
        }),
        tslib_1.__metadata("design:paramtypes", [angular_1.ModalController])
    ], DeliveriesComponent);
    return DeliveriesComponent;
}());
exports.DeliveriesComponent = DeliveriesComponent;
//# sourceMappingURL=deliveries.js.map