"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var Order_1 = tslib_1.__importDefault(require("@modules/server.common/entities/Order"));
var warehouse_router_service_1 = require("@modules/client.common.angular2/routers/warehouse-router.service");
var operators_1 = require("rxjs/operators");
var environment_1 = require("../../../src/environments/environment");
var angular_1 = require("@ionic/angular");
var OrderMapPopupPage = (function () {
    function OrderMapPopupPage(loadingCtrl, actionSheetCtrl, warehouseRouter, modalController) {
        this.loadingCtrl = loadingCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.warehouseRouter = warehouseRouter;
        this.modalController = modalController;
        this.myLatLng = { lat: 0, lng: 0 };
        this.merchantIcon = environment_1.environment.MAP_MERCHANT_ICON_LINK;
        this.userIcon = environment_1.environment.MAP_USER_ICON_LINK;
        this.carrierIcon = environment_1.environment.MAP_CARRIER_ICON_LINK;
    }
    OrderMapPopupPage.prototype.ngOnInit = function () {
        if (this.order) {
            this.loadWarehouse();
        }
        this.showMap();
    };
    OrderMapPopupPage.prototype.loadMap = function () {
        if (this.order && this.warehouse) {
            var user = this.order.user;
            var warehouse = this.warehouse;
            var carrier = this.order.carrier;
            var warehouseIcon = this.merchantIcon;
            var userIcon = this.userIcon;
            var carierIcon = this.carrierIcon;
            var _a = carrier['geoLocation'].loc.coordinates, cLng = _a[0], cLat = _a[1];
            this.marker = this.addMarker(new google.maps.LatLng(cLat, cLng), this.map, carierIcon);
            var _b = user.geoLocation.loc.coordinates, uLng = _b[0], uLat = _b[1];
            this.userMarker = this.addMarker(new google.maps.LatLng(uLat, uLng), this.map, userIcon);
            var _c = warehouse['geoLocation'].loc.coordinates, wLng = _c[0], wLat = _c[1];
            this.warehouseMarker = this.addMarker(new google.maps.LatLng(wLat, wLng), this.map, warehouseIcon);
            var bounds = new google.maps.LatLngBounds();
            bounds.extend(this.marker.getPosition());
            bounds.extend(this.warehouseMarker.getPosition());
            bounds.extend(this.userMarker.getPosition());
            this.map.fitBounds(bounds);
        }
    };
    OrderMapPopupPage.prototype.cancelModal = function () {
        this.modalController.dismiss();
    };
    OrderMapPopupPage.prototype.showMap = function () {
        var mapProp = {
            center: new google.maps.LatLng(42.642941, 23.334149),
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
        };
        this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
    };
    OrderMapPopupPage.prototype.addMarker = function (position, map, icon) {
        return new google.maps.Marker({
            position: position,
            map: map,
            icon: icon,
        });
    };
    OrderMapPopupPage.prototype.getfullAddress = function (geoLocation) {
        return (geoLocation.city + ", " + geoLocation.streetAddress + " " +
            ("" + geoLocation.house));
    };
    OrderMapPopupPage.prototype.loadWarehouse = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4, this.warehouseRouter
                                .get(this.order.warehouseId, false)
                                .pipe(operators_1.first())
                                .toPromise()];
                    case 1:
                        _a.warehouse = _b.sent();
                        this.loadMap();
                        return [2];
                }
            });
        });
    };
    tslib_1.__decorate([
        core_1.ViewChild('gmap', { static: true }),
        tslib_1.__metadata("design:type", core_1.ElementRef)
    ], OrderMapPopupPage.prototype, "gmapElement", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Order_1.default)
    ], OrderMapPopupPage.prototype, "order", void 0);
    OrderMapPopupPage = tslib_1.__decorate([
        core_1.Component({
            selector: 'order-map-popup',
            templateUrl: 'order-map-popup.html',
            styleUrls: ['./order-map-popup.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [angular_1.LoadingController,
            angular_1.ActionSheetController,
            warehouse_router_service_1.WarehouseRouter,
            angular_1.ModalController])
    ], OrderMapPopupPage);
    return OrderMapPopupPage;
}());
exports.OrderMapPopupPage = OrderMapPopupPage;
//# sourceMappingURL=order-map-popup.js.map