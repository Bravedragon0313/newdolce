"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var environment_1 = require("environments/environment");
var GeoLocation_1 = tslib_1.__importDefault(require("@modules/server.common/entities/GeoLocation"));
var DirectionsLocationComponent = (function () {
    function DirectionsLocationComponent() {
        this.directionsDisplay = new google.maps.DirectionsRenderer();
        this.directionsService = new google.maps.DirectionsService();
    }
    DirectionsLocationComponent.prototype.ngOnInit = function () {
        this.loadMap();
    };
    DirectionsLocationComponent.prototype.loadMap = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var mapProp, _a;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        mapProp = {
                            center: new google.maps.LatLng(environment_1.environment.DEFAULT_LATITUDE, environment_1.environment.DEFAULT_LONGITUDE),
                            zoom: 15,
                            mapTypeId: google.maps.MapTypeId.ROADMAP,
                            mapTypeControl: false,
                            streetViewControl: false,
                        };
                        _a = this;
                        return [4, new google.maps.Map(this.gmapElement.nativeElement, mapProp)];
                    case 1:
                        _a.map = _b.sent();
                        this.loadRoot();
                        return [2];
                }
            });
        });
    };
    DirectionsLocationComponent.prototype.loadRoot = function () {
        var _this = this;
        if (this.origin && this.destination) {
            var _a = this.origin.loc.coordinates, originLng = _a[0], originLat = _a[1];
            var _b = this.destination.loc.coordinates, destinationLng = _b[0], destinationLat = _b[1];
            var origin_1 = new google.maps.LatLng(originLat, originLng);
            var destination = new google.maps.LatLng(destinationLat, destinationLng);
            var request = {
                origin: origin_1,
                destination: destination,
                travelMode: google.maps.TravelMode['DRIVING'],
            };
            this.directionsService.route(request, function (res, stat) {
                if (stat === 'OK') {
                    _this.directionsDisplay.setDirections(res);
                }
            });
            this.directionsDisplay.setMap(this.map);
        }
    };
    DirectionsLocationComponent.prototype.ngOnDestroy = function () {
        this.directionsDisplay.setMap(null);
    };
    tslib_1.__decorate([
        core_1.ViewChild('gmap', { static: true }),
        tslib_1.__metadata("design:type", core_1.ElementRef)
    ], DirectionsLocationComponent.prototype, "gmapElement", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", GeoLocation_1.default)
    ], DirectionsLocationComponent.prototype, "origin", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", GeoLocation_1.default)
    ], DirectionsLocationComponent.prototype, "destination", void 0);
    DirectionsLocationComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'e-cu-directions-location',
            template: " <div style=\"height:100%\" #gmap></div> ",
        })
    ], DirectionsLocationComponent);
    return DirectionsLocationComponent;
}());
exports.DirectionsLocationComponent = DirectionsLocationComponent;
//# sourceMappingURL=carreir-location.js.map