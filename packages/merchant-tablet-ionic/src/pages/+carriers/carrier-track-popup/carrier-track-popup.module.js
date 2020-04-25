"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var carrier_track_popup_1 = require("./carrier-track-popup");
var core_2 = require("@ngx-translate/core");
var carrier_service_1 = require("../../../../src/services/carrier.service");
var angular_1 = require("@ionic/angular");
var common_1 = require("@angular/common");
var warehouses_service_1 = require("../../../../src/services/warehouses.service");
var CarrierTrackPopupModule = (function () {
    function CarrierTrackPopupModule() {
    }
    CarrierTrackPopupModule = tslib_1.__decorate([
        core_1.NgModule({
            declarations: [carrier_track_popup_1.CarrierTrackPopup],
            entryComponents: [carrier_track_popup_1.CarrierTrackPopup],
            imports: [core_2.TranslateModule.forChild(), angular_1.IonicModule, common_1.CommonModule],
            providers: [carrier_service_1.CarrierService, warehouses_service_1.WarehousesService],
        })
    ], CarrierTrackPopupModule);
    return CarrierTrackPopupModule;
}());
exports.CarrierTrackPopupModule = CarrierTrackPopupModule;
//# sourceMappingURL=carrier-track-popup.module.js.map