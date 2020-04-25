"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var GeoLocation_1 = tslib_1.__importDefault(require("@modules/server.common/entities/GeoLocation"));
var angular_1 = require("@ionic/angular");
var CarrierAddrPopupPage = (function () {
    function CarrierAddrPopupPage(modalCtrl) {
        this.modalCtrl = modalCtrl;
        this.myLatLng = { lat: 0, lng: 0 };
    }
    CarrierAddrPopupPage.prototype.ngOnInit = function () {
        var geoLocation = this.geoLocation;
        this.city = geoLocation.city;
        this.country = geoLocation.countryName;
        this.street = geoLocation.streetAddress;
        this.house = geoLocation.house;
        this.coordinates = [
            geoLocation.coordinates.lat,
            geoLocation.coordinates.lng,
        ];
        this.myLatLng.lat = this.coordinates[0];
        this.myLatLng.lng = this.coordinates[1];
        this.loadMap();
    };
    CarrierAddrPopupPage.prototype.loadMap = function () {
        var mapProp = {
            center: this.myLatLng,
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
        };
        this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
        var marker = new google.maps.Marker({
            position: this.myLatLng,
            map: this.map,
            title: 'Your Warehouse!',
        });
    };
    CarrierAddrPopupPage.prototype.cancelModal = function () {
        this.modalCtrl.dismiss();
    };
    tslib_1.__decorate([
        core_1.ViewChild('gmap', { static: true }),
        tslib_1.__metadata("design:type", core_1.ElementRef)
    ], CarrierAddrPopupPage.prototype, "gmapElement", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", GeoLocation_1.default)
    ], CarrierAddrPopupPage.prototype, "geoLocation", void 0);
    CarrierAddrPopupPage = tslib_1.__decorate([
        core_1.Component({
            selector: 'carrier-addr-popup',
            templateUrl: 'carrier-addr-popup.html',
            styleUrls: ['./carrier-addr-popup.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [angular_1.ModalController])
    ], CarrierAddrPopupPage);
    return CarrierAddrPopupPage;
}());
exports.CarrierAddrPopupPage = CarrierAddrPopupPage;
//# sourceMappingURL=carrier-addr-popup.js.map