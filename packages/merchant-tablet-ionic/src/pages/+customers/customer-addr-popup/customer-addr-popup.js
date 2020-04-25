"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var angular_1 = require("@ionic/angular");
var User_1 = tslib_1.__importDefault(require("@modules/server.common/entities/User"));
var CustomerAddrPopupPage = (function () {
    function CustomerAddrPopupPage(modalController) {
        this.modalController = modalController;
        this.myLatLng = { lat: 0, lng: 0 };
    }
    Object.defineProperty(CustomerAddrPopupPage.prototype, "coordinatesStr", {
        get: function () {
            return this.user
                ? this.user.geoLocation.loc.coordinates
                    .map(function (c) { return c.toFixed(6); })
                    .reverse()
                    .join(', ')
                : '';
        },
        enumerable: true,
        configurable: true
    });
    CustomerAddrPopupPage.prototype.ngOnInit = function () {
        var user = this.user;
        this.city = user.geoLocation.city;
        this.country = user.geoLocation.countryName;
        this.street = user.geoLocation.streetAddress;
        this.house = user.geoLocation.house;
        this.apartment = user.apartment;
        this.coordinates = Array.from(user.geoLocation.loc.coordinates).reverse();
        this.myLatLng.lat = this.coordinates[0];
        this.myLatLng.lng = this.coordinates[1];
        this.loadMap();
    };
    CustomerAddrPopupPage.prototype.loadMap = function () {
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
    CustomerAddrPopupPage.prototype.cancelModal = function () {
        this.modalController.dismiss();
    };
    tslib_1.__decorate([
        core_1.ViewChild('gmap', { static: true }),
        tslib_1.__metadata("design:type", core_1.ElementRef)
    ], CustomerAddrPopupPage.prototype, "gmapElement", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", User_1.default)
    ], CustomerAddrPopupPage.prototype, "user", void 0);
    CustomerAddrPopupPage = tslib_1.__decorate([
        core_1.Component({
            selector: 'customer-addr-popup',
            templateUrl: 'customer-addr-popup.html',
            styleUrls: ['./customer-addr-popup.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [angular_1.ModalController])
    ], CustomerAddrPopupPage);
    return CustomerAddrPopupPage;
}());
exports.CustomerAddrPopupPage = CustomerAddrPopupPage;
//# sourceMappingURL=customer-addr-popup.js.map