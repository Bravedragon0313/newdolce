"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var Order_1 = tslib_1.__importDefault(require("@modules/server.common/entities/Order"));
var angular_1 = require("@ionic/angular");
var order_map_popup_1 = require("components/order-map-popup/order-map-popup");
var CarrierInfoComponent = (function () {
    function CarrierInfoComponent(modalCtrl) {
        this.modalCtrl = modalCtrl;
    }
    Object.defineProperty(CarrierInfoComponent.prototype, "fullName", {
        get: function () {
            var fullName = (this.order.carrier['firstName'] || '') + " " + (this.order.carrier['lastName'] || '');
            return fullName.trim();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CarrierInfoComponent.prototype, "fullAddress", {
        get: function () {
            return (this.order.carrier['geoLocation'].city + ", " + this.order.carrier['geoLocation'].streetAddress + " " +
                ("" + this.order.carrier['geoLocation'].house) +
                ("" + (this.order.carrier['apartment']
                    ? '/' + this.order.carrier['apartment']
                    : '')));
        },
        enumerable: true,
        configurable: true
    });
    CarrierInfoComponent.prototype.track = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var order, modal;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        order = this.order;
                        return [4, this.modalCtrl.create({
                                component: order_map_popup_1.OrderMapPopupPage,
                                componentProps: {
                                    order: order,
                                },
                                cssClass: 'order-map-popup',
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
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Order_1.default)
    ], CarrierInfoComponent.prototype, "order", void 0);
    CarrierInfoComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'carrier-info',
            styleUrls: ['./carrier-info.scss'],
            templateUrl: 'carrier-info.html',
        }),
        tslib_1.__metadata("design:paramtypes", [angular_1.ModalController])
    ], CarrierInfoComponent);
    return CarrierInfoComponent;
}());
exports.CarrierInfoComponent = CarrierInfoComponent;
//# sourceMappingURL=carrier-info.js.map