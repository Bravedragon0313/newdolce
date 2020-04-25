"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var GoogleMapComponent = (function () {
    function GoogleMapComponent() {
        this._ngDestroy$ = new rxjs_1.Subject();
    }
    GoogleMapComponent.prototype.ngOnInit = function () {
        this._setupGoogleMap();
        this._listenForMapType();
        this._listenForMapCoordinates();
        this._listenForMapGeometry();
    };
    GoogleMapComponent.prototype._navigateTo = function (location) {
        this.map.setCenter(location);
    };
    GoogleMapComponent.prototype._listenForMapGeometry = function () {
        var _this = this;
        this.mapGeometryEvent
            .pipe(operators_1.takeUntil(this._ngDestroy$))
            .subscribe(function (geometry) {
            if (geometry.viewport) {
                _this.map.fitBounds(geometry.viewport);
            }
            else {
                _this.map.setCenter(geometry.location);
                _this.map.setZoom(16);
            }
        });
    };
    GoogleMapComponent.prototype._listenForMapType = function () {
        var _this = this;
        if (this.mapTypeEvent) {
            this.mapTypeEvent
                .pipe(operators_1.takeUntil(this._ngDestroy$))
                .subscribe(function (mapType) {
                _this.map.setMapTypeId(mapType);
            });
        }
    };
    GoogleMapComponent.prototype._listenForMapCoordinates = function () {
        var _this = this;
        this.mapCoordEvent
            .pipe(operators_1.takeUntil(this._ngDestroy$))
            .subscribe(function (location) {
            _this._navigateTo(location);
            _this._addMapMarker(location);
        });
    };
    GoogleMapComponent.prototype._setupGoogleMap = function () {
        var optionsMap = {
            center: new google.maps.LatLng(0, 0),
            zoom: 14,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
        };
        this.map = new google.maps.Map(this.mapElement.nativeElement, optionsMap);
    };
    GoogleMapComponent.prototype._addMapMarker = function (location) {
        this._clearMarker();
        this._mapMarker = new google.maps.Marker({
            map: this.map,
            position: location,
            title: 'Store',
        });
    };
    GoogleMapComponent.prototype._clearMarker = function () {
        if (this._mapMarker) {
            this._mapMarker.setMap(null);
        }
    };
    GoogleMapComponent.prototype.ngOnDestroy = function () {
        this._ngDestroy$.next();
        this._ngDestroy$.complete();
    };
    tslib_1.__decorate([
        core_1.ViewChild('gmap', { static: true }),
        tslib_1.__metadata("design:type", Object)
    ], GoogleMapComponent.prototype, "mapElement", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", rxjs_1.Observable)
    ], GoogleMapComponent.prototype, "mapTypeEvent", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", rxjs_1.Observable)
    ], GoogleMapComponent.prototype, "mapCoordEvent", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", rxjs_1.Observable)
    ], GoogleMapComponent.prototype, "mapGeometryEvent", void 0);
    GoogleMapComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'google-map',
            styles: [
                "\n\t\t\t.g-map {\n\t\t\t\theight: 220px;\n\t\t\t\twidth: 100%;\n\t\t\t}\n\t\t",
            ],
            template: " <div #gmap class=\"g-map\"></div> ",
        })
    ], GoogleMapComponent);
    return GoogleMapComponent;
}());
exports.GoogleMapComponent = GoogleMapComponent;
//# sourceMappingURL=google-map.component.js.map