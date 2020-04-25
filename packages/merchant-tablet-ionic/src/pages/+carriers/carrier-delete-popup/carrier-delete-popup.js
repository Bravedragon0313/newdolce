"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var warehouse_router_service_1 = require("@modules/client.common.angular2/routers/warehouse-router.service");
var operators_1 = require("rxjs/operators");
var angular_1 = require("@ionic/angular");
var CarrierDeletePopupPage = (function () {
    function CarrierDeletePopupPage(modalCtrl, warehouseRouter) {
        this.modalCtrl = modalCtrl;
        this.warehouseRouter = warehouseRouter;
    }
    Object.defineProperty(CarrierDeletePopupPage.prototype, "getWarehouseId", {
        get: function () {
            return localStorage.getItem('_warehouseId');
        },
        enumerable: true,
        configurable: true
    });
    CarrierDeletePopupPage.prototype.cancelModal = function () {
        this.modalCtrl.dismiss();
    };
    CarrierDeletePopupPage.prototype.deleteCarrier = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var carrierId, id, merchant;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        carrierId = this.carrierData.carrier.id;
                        id = this.getWarehouseId;
                        return [4, this.warehouseRouter
                                .get(id)
                                .pipe(operators_1.first())
                                .toPromise()];
                    case 1:
                        merchant = _a.sent();
                        merchant.usedCarriersIds = merchant.usedCarriersIds.filter(function (x) { return x !== carrierId; });
                        return [4, this.warehouseRouter.save(merchant)];
                    case 2:
                        _a.sent();
                        this.cancelModal();
                        return [2];
                }
            });
        });
    };
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Object)
    ], CarrierDeletePopupPage.prototype, "carrierData", void 0);
    CarrierDeletePopupPage = tslib_1.__decorate([
        core_1.Component({
            selector: 'carrier-delete-popup',
            templateUrl: 'carrier-delete-popup.html',
            styleUrls: ['./carrier-delete-popup.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [angular_1.ModalController,
            warehouse_router_service_1.WarehouseRouter])
    ], CarrierDeletePopupPage);
    return CarrierDeletePopupPage;
}());
exports.CarrierDeletePopupPage = CarrierDeletePopupPage;
//# sourceMappingURL=carrier-delete-popup.js.map