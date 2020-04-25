"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var Carrier_1 = tslib_1.__importDefault(require("@modules/server.common/entities/Carrier"));
var carrier_service_1 = require("../../../../src/services/carrier.service");
var angular_1 = require("@ionic/angular");
var warehouses_service_1 = require("../../../../src/services/warehouses.service");
var directionsDisplay = new google.maps.DirectionsRenderer();
var directionsService = new google.maps.DirectionsService();
var CarrierTrackPopup = (function () {
    function CarrierTrackPopup(modalCtrl, carriersService, warehouseService) {
        this.modalCtrl = modalCtrl;
        this.carriersService = carriersService;
        this.warehouseService = warehouseService;
        this.myLatLng = { lat: 0, lng: 0 };
        this.storeIcon = 'http://maps.google.com/mapfiles/kml/pal3/icon21.png';
        this.userIcon = 'http://maps.google.com/mapfiles/kml/pal3/icon48.png';
        this.carrierIcon = 'http://maps.google.com/mapfiles/kml/pal4/icon54.png';
    }
    CarrierTrackPopup.prototype.ngOnInit = function () {
        var geoLocation = this.carrier.geoLocation;
        this.coordinates = [
            geoLocation.coordinates.lat,
            geoLocation.coordinates.lng,
        ];
        this.myLatLng.lat = this.coordinates[0];
        this.myLatLng.lng = this.coordinates[1];
        this.loadMap();
    };
    Object.defineProperty(CarrierTrackPopup.prototype, "warehouseId", {
        get: function () {
            return localStorage.getItem('_warehouseId');
        },
        enumerable: true,
        configurable: true
    });
    CarrierTrackPopup.prototype.loadMap = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var mapProp, carrierInfoContent, _a, carrierMarker_1, carrierInfoWindow_1, warehouseInfoContent, warehouseInfoWindow_1, warehouseMarker_1, order, carrierMarker_2, carrierInfoWindow_2, warehouseMarker_2, warehouseInfoContent, warehouseInfoWindow_2, userMarker_1, userInfoContent, userInfoWindow_1, start, end, request;
            var _this = this;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        mapProp = {
                            center: this.myLatLng,
                            zoom: 15,
                            mapTypeId: google.maps.MapTypeId.ROADMAP,
                        };
                        this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
                        carrierInfoContent = "\n\t\t<div class=\"carrier-track-carrier-info\">\n\t\t\t<h3>  " + this.carrier.fullName + "</h3>\n\t\t\t<ul>\n\t\t\t\t<li>" + this.carrier.username + "</li>\n\t\t\t\t<li><i style='margin-right:5px;' class=\"fa fa-phone\"></i>" + this.carrier.phone + "</li>\n\t\t\t\t<li><i style='margin-right:5px;' class=\"fa fa-address-card\"></i>" + this.carrier.geoLocation.streetAddress + "</li>\n\t\t\t</ul>\n\t\t</div>\n\t\t\t";
                        _a = this;
                        return [4, this.warehouseService
                                .getStoreById(this.warehouseId)
                                .toPromise()];
                    case 1:
                        _a.warehouse = _b.sent();
                        if (!(this.carrier.status !== 0)) return [3, 2];
                        carrierMarker_1 = this.addMarker(this.myLatLng, this.map, this.carrierIcon);
                        carrierInfoWindow_1 = new google.maps.InfoWindow({
                            content: carrierInfoContent,
                        });
                        carrierMarker_1.addListener('click', function () {
                            carrierInfoWindow_1.open(_this.map, carrierMarker_1);
                        });
                        warehouseInfoContent = "\n                                <div class=\"carrier-info\">\n\t\t\t\t\t\t\t\t\t<h3>  " + this.warehouse.name + "</h3>\n\t\t\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t<i style='margin-right:5px;' class=\"fa fa-envelope-open\"></i>\n\t\t\t\t\t\t\t\t\t\t\t" + this.warehouse.contactEmail + "\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t<i style='margin-right:5px;' class=\"fa fa-phone\"></i>\n\t\t\t\t\t\t\t\t\t\t\t" + this.warehouse.contactPhone + "\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t<i style='margin-right:5px;' class=\"fa fa-address-card\"></i>\n\t\t\t\t\t\t\t\t\t\t\t" + this.warehouse.geoLocation.streetAddress + "\n\t\t\t\t\t\t\t\t\t\t</li>\n                                    </ul>\n                                </div>\n\t\t\t\t\t\t\t\t\t";
                        warehouseInfoWindow_1 = new google.maps.InfoWindow({
                            content: warehouseInfoContent,
                        });
                        warehouseMarker_1 = this.addMarker({
                            lat: this.warehouse.geoLocation.loc.coordinates[1],
                            lng: this.warehouse.geoLocation.loc.coordinates[0],
                        }, this.map, this.storeIcon);
                        warehouseMarker_1.addListener('click', function () {
                            warehouseInfoWindow_1.open(_this.map, warehouseMarker_1);
                        });
                        return [3, 4];
                    case 2:
                        if (!(this.carrier.status === 0)) return [3, 4];
                        return [4, this.carriersService.getCarrierCurrentOrder(this.carrier.id)];
                    case 3:
                        order = _b.sent();
                        carrierMarker_2 = this.addMarker(this.myLatLng, this.map, this.carrierIcon);
                        carrierInfoWindow_2 = new google.maps.InfoWindow({
                            content: carrierInfoContent,
                        });
                        carrierMarker_2.addListener('click', function () {
                            carrierInfoWindow_2.open(_this.map, carrierMarker_2);
                        });
                        warehouseMarker_2 = this.addMarker({
                            lat: this.warehouse.geoLocation.loc.coordinates[1],
                            lng: this.warehouse.geoLocation.loc.coordinates[0],
                        }, this.map, this.storeIcon);
                        warehouseInfoContent = "\n                                <div class=\"carrier-info\">\n\t\t\t\t\t\t\t\t\t<h3>  " + this.warehouse.name + "</h3>\n\t\t\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t<i style='margin-right:5px;' class=\"fa fa-envelope-open\"></i>\n\t\t\t\t\t\t\t\t\t\t\t" + this.warehouse.contactEmail + "\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t<i style='margin-right:5px;' class=\"fa fa-phone\"></i>\n\t\t\t\t\t\t\t\t\t\t\t" + this.warehouse.contactPhone + "\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t<i style='margin-right:5px;' class=\"fa fa-address-card\"></i>\n\t\t\t\t\t\t\t\t\t\t\t" + this.warehouse.geoLocation.streetAddress + "\n\t\t\t\t\t\t\t\t\t\t</li>\n                                    </ul>\n                                </div>\n\t\t\t\t\t\t\t\t\t";
                        warehouseInfoWindow_2 = new google.maps.InfoWindow({
                            content: warehouseInfoContent,
                        });
                        warehouseMarker_2.addListener('click', function () {
                            warehouseInfoWindow_2.open(_this.map, warehouseMarker_2);
                        });
                        if (order) {
                            this.user = order.user;
                            userMarker_1 = this.addMarker({
                                lat: this.user.geoLocation.loc.coordinates[1],
                                lng: this.user.geoLocation.loc.coordinates[0],
                            }, this.map, this.userIcon);
                            userInfoContent = "\n                                <div class=\"carrier-info\">\n\t\t\t\t\t\t\t\t\t<h3>  " + (this.user.firstName + ' ' + this.user.lastName) + "</h3>\n\t\t\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t\t\t<li><i style='margin-right:5px;' class=\"fa fa-envelope-open\"></i>" + this.user.email + "</li>\n                                             <li><i style='margin-right:5px;' class=\"fa fa-phone\"></i>" + this.user.phone + "</li>\n\t\t\t\t\t\t\t\t\t\t<li><i style='margin-right:5px;' class=\"fa fa-address-card\"></i>" + this.user.geoLocation.streetAddress + "</li>\n                                    </ul>\n                                <div class=\"carrier-info\">\n\t\t\t\t\t\t\t\t\t";
                            userInfoWindow_1 = new google.maps.InfoWindow({
                                content: userInfoContent,
                            });
                            userMarker_1.addListener('click', function () {
                                userInfoWindow_1.open(_this.map, userMarker_1);
                            });
                            start = new google.maps.LatLng(this.user.geoLocation.loc.coordinates[1], this.user.geoLocation.loc.coordinates[0]);
                            end = new google.maps.LatLng(this.warehouse.geoLocation.loc.coordinates[1], this.warehouse.geoLocation.loc.coordinates[0]);
                            request = {
                                origin: start,
                                destination: end,
                                travelMode: 'DRIVING',
                            };
                            directionsService.route(request, function (res, stat) {
                                if (stat === 'OK') {
                                    directionsDisplay.setDirections(res);
                                }
                            });
                            directionsDisplay.setOptions({
                                suppressMarkers: true,
                            });
                            directionsDisplay.setMap(this.map);
                        }
                        _b.label = 4;
                    case 4: return [2];
                }
            });
        });
    };
    CarrierTrackPopup.prototype.addMarker = function (position, map, icon) {
        return new google.maps.Marker({
            position: position,
            map: map,
            icon: icon,
        });
    };
    CarrierTrackPopup.prototype.cancelModal = function () {
        this.modalCtrl.dismiss();
    };
    tslib_1.__decorate([
        core_1.ViewChild('gmap', { static: true }),
        tslib_1.__metadata("design:type", core_1.ElementRef)
    ], CarrierTrackPopup.prototype, "gmapElement", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Carrier_1.default)
    ], CarrierTrackPopup.prototype, "carrier", void 0);
    CarrierTrackPopup = tslib_1.__decorate([
        core_1.Component({
            selector: 'carrier-track-popup',
            templateUrl: 'carrier-track-popup.html',
            styleUrls: ['./carrier-track-popup.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [angular_1.ModalController,
            carrier_service_1.CarrierService,
            warehouses_service_1.WarehousesService])
    ], CarrierTrackPopup);
    return CarrierTrackPopup;
}());
exports.CarrierTrackPopup = CarrierTrackPopup;
//# sourceMappingURL=carrier-track-popup.js.map