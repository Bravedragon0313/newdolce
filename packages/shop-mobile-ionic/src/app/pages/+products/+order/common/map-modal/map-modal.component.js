"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var angular_1 = require("@ionic/angular");
var MapModalComponent = (function () {
    function MapModalComponent(modalController) {
        this.modalController = modalController;
    }
    MapModalComponent.prototype.closeModal = function () {
        this.modalController.dismiss();
    };
    MapModalComponent.prototype.ngOnDestroy = function () {
        console.warn('MapModalComponent destroyed');
    };
    MapModalComponent = tslib_1.__decorate([
        core_1.Component({
            templateUrl: './map-modal.component.html',
            styleUrls: ['./map-modal.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [angular_1.ModalController])
    ], MapModalComponent);
    return MapModalComponent;
}());
exports.MapModalComponent = MapModalComponent;
//# sourceMappingURL=map-modal.component.js.map