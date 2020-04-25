"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var Order_1 = tslib_1.__importDefault(require("@modules/server.common/entities/Order"));
var environment_1 = require("environments/environment");
var warehouseIcon = environment_1.environment.MAP_MERCHANT_ICON_LINK;
var userIcon = environment_1.environment.MAP_USER_ICON_LINK;
var UserWarehouseLocationComponent = (function () {
    function UserWarehouseLocationComponent() {
    }
    UserWarehouseLocationComponent.prototype.ngAfterViewInit = function () {
        this.loadMap();
    };
    UserWarehouseLocationComponent.prototype.ngOnChanges = function () {
        this.loadMarkers();
    };
    UserWarehouseLocationComponent.prototype.loadMap = function () {
        var mapProp = {
            center: new google.maps.LatLng(environment_1.environment.DEFAULT_LATITUDE, environment_1.environment.DEFAULT_LONGITUDE),
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            mapTypeControl: false,
            streetViewControl: false,
        };
        this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
    };
    UserWarehouseLocationComponent.prototype.loadMarkers = function () {
        if (this.order && !this.isLoaded && this.map) {
            this.isLoaded = true;
            var user = this.order.user;
            var warehouse = this.order.warehouse;
            this.userMarker = this.addMarker(user['geoLocation'], this.map, userIcon);
            this.warehouseMarker = this.addMarker(warehouse['geoLocation'], this.map, warehouseIcon);
            var bounds = new google.maps.LatLngBounds();
            bounds.extend(this.warehouseMarker.getPosition());
            bounds.extend(this.userMarker.getPosition());
            this.map.fitBounds(bounds);
        }
    };
    UserWarehouseLocationComponent.prototype.addMarker = function (geoLocation, map, icon) {
        var _a = geoLocation.loc.coordinates, lng = _a[0], lat = _a[1];
        var position = new google.maps.LatLng(lat, lng);
        return new google.maps.Marker({
            position: position,
            map: map,
            icon: icon,
        });
    };
    UserWarehouseLocationComponent.prototype.removeMarkers = function () {
        if (this.userMarker) {
            this.userMarker.setMap(null);
        }
        if (this.warehouseMarker) {
            this.warehouseMarker.setMap(null);
        }
    };
    UserWarehouseLocationComponent.prototype.ngOnDestroy = function () {
        this.removeMarkers();
    };
    tslib_1.__decorate([
        core_1.ViewChild('gmap', { static: true }),
        tslib_1.__metadata("design:type", core_1.ElementRef)
    ], UserWarehouseLocationComponent.prototype, "gmapElement", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Order_1.default)
    ], UserWarehouseLocationComponent.prototype, "order", void 0);
    UserWarehouseLocationComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'e-cu-user-warehouse-location',
            template: " <div style=\"height:100%\" #gmap></div> ",
        })
    ], UserWarehouseLocationComponent);
    return UserWarehouseLocationComponent;
}());
exports.UserWarehouseLocationComponent = UserWarehouseLocationComponent;
//# sourceMappingURL=user-warehouse-map.js.map