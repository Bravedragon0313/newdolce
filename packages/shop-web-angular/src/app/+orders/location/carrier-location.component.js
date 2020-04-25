"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var dialog_1 = require("@angular/material/dialog");
var directionsDisplay = new google.maps.DirectionsRenderer();
var directionsService = new google.maps.DirectionsService();
var CarrierLocationComponent = (function () {
    function CarrierLocationComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.ngDestroy$ = new rxjs_1.Subject();
        this.carrierLoc = data.carrier;
        this.storeLoc = data.merchant;
        this.userOrder = data.userOrder;
    }
    CarrierLocationComponent.prototype.ngOnInit = function () {
        this.showMap();
        this.showIconsOnMap();
    };
    CarrierLocationComponent.prototype.showIconsOnMap = function () {
        var _this = this;
        var newCoordinates = new google.maps.LatLng(this.carrierLoc.geoLocation.coordinates.lat, this.carrierLoc.geoLocation.coordinates.lng);
        var warehouseIcon = 'http://maps.google.com/mapfiles/kml/pal3/icon21.png';
        var userIcon = 'http://maps.google.com/mapfiles/kml/pal3/icon48.png';
        this.userMarker = this.addMarker(new google.maps.LatLng(this.userOrder.geoLocation.coordinates.lat, this.userOrder.geoLocation.coordinates.lng), this.map, userIcon);
        this.warehouseMarker = this.addMarker(new google.maps.LatLng(this.storeLoc.geoLocation.coordinates.lat, this.storeLoc.geoLocation.coordinates.lng), this.map, warehouseIcon);
        var start = new google.maps.LatLng(this.userOrder.geoLocation.coordinates.lat, this.userOrder.geoLocation.coordinates.lng);
        var end = new google.maps.LatLng(this.storeLoc.geoLocation.coordinates.lat, this.storeLoc.geoLocation.coordinates.lng);
        var request = {
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
        var warehouseInfoContent = "\n\t\t\t\t\t\t\t\t\t<h3>  " + this.storeLoc.name + "</h3>\n\t\t\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t<i style='margin-right:5px;' class=\"ion-md-mail\"></i>\n\t\t\t\t\t\t\t\t\t\t\t" + this.storeLoc.contactEmail + "\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t<i style='margin-right:5px;' class=\"ion-md-phone\"></i><i class=\"ion-md-call\"></i>\n\t\t\t\t\t\t\t\t\t\t\t" + this.storeLoc.contactPhone + "\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t<i style='margin-right:5px;' class=\"ion-md-locate\"></i>\n\t\t\t\t\t\t\t\t\t\t\t" + this.storeLoc.geoLocation.streetAddress + "\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t";
        var warehouseInfoWindow = new google.maps.InfoWindow({
            content: warehouseInfoContent,
        });
        this.warehouseMarker.addListener('click', function () {
            warehouseInfoWindow.open(_this.map, _this.warehouseMarker);
        });
        this.map.setCenter(newCoordinates);
        var carierIcon = 'http://maps.google.com/mapfiles/kml/pal4/icon54.png';
        this.marker = this.addMarker(newCoordinates, this.map, carierIcon);
        var carrierInfoContent = "\n\t\t\t\t\t<h3>  " + this.carrierLoc.fullName + "</h3>\n\t\t\t\t\t<ul>\n\t\t\t\t\t\t<li>" + this.carrierLoc.username + "</li>\n\t\t\t\t\t\t<li><i style='margin-right:5px;' class=\"ion-md-call\"></i>" + this.carrierLoc.phone + "</li>\n\t\t\t\t\t\t<li><i style='margin-right:5px;' class=\"ion-md-locate\"></i>" + this.carrierLoc.geoLocation.streetAddress + "</li>\n\t\t\t\t\t</ul>\n\t\t\t\t\t";
        var carrierInfoWindow = new google.maps.InfoWindow({
            content: carrierInfoContent,
        });
        this.marker.addListener('click', function () {
            carrierInfoWindow.open(_this.map, _this.marker);
        });
    };
    CarrierLocationComponent.prototype.revertMap = function () {
        this.map.setZoom(15);
        this.warehouseMarker.setMap(null);
        this.userMarker.setMap(null);
    };
    CarrierLocationComponent.prototype.showMap = function () {
        var mapProp = {
            center: new google.maps.LatLng(42.642941, 23.334149),
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
        };
        this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
    };
    CarrierLocationComponent.prototype.addMarker = function (position, map, icon) {
        return new google.maps.Marker({
            position: position,
            map: map,
            icon: icon,
        });
    };
    tslib_1.__decorate([
        core_1.ViewChild('gmap', { static: true }),
        tslib_1.__metadata("design:type", Object)
    ], CarrierLocationComponent.prototype, "gmapElement", void 0);
    CarrierLocationComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'ea-carrier-location',
            styleUrls: ['./carrier-location.component.scss'],
            templateUrl: './carrier-location.component.html',
        }),
        tslib_1.__param(1, core_1.Inject(dialog_1.MAT_DIALOG_DATA)),
        tslib_1.__metadata("design:paramtypes", [dialog_1.MatDialogRef, Object])
    ], CarrierLocationComponent);
    return CarrierLocationComponent;
}());
exports.CarrierLocationComponent = CarrierLocationComponent;
//# sourceMappingURL=carrier-location.component.js.map