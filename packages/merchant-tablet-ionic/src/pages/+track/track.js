"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var carrier_service_1 = require("../../../src/services/carrier.service");
var rxjs_1 = require("rxjs");
var ionic_selectable_1 = require("ionic-selectable");
var router_1 = require("@angular/router");
var warehouses_service_1 = require("services/warehouses.service");
var warehouse_orders_service_1 = require("../../services/warehouse-orders.service");
var TrackPage = (function () {
    function TrackPage(carrierService, route, router, warehouseService, warehouseOrderService) {
        this.carrierService = carrierService;
        this.route = route;
        this.router = router;
        this.warehouseService = warehouseService;
        this.warehouseOrderService = warehouseOrderService;
        this._ngDestroy$ = new rxjs_1.Subject();
        this.markers = [];
        this.totalDeliveries = 0;
        this.totalCarriers = 0;
        this.totalActiveCarriers = 0;
        this.showAssignedOnly = true;
        this.showActiveOnly = true;
        this.showCheckboxFilters = true;
        this.loadingMap = false;
        this.storeIcon = 'http://maps.google.com/mapfiles/kml/pal3/icon21.png';
        this.sharedCarrierIcon = 'http://maps.google.com/mapfiles/kml/pal4/icon23.png';
        this.userIcon = 'http://maps.google.com/mapfiles/kml/pal3/icon48.png';
        this.carrierIcon = 'http://maps.google.com/mapfiles/kml/pal4/icon54.png';
    }
    TrackPage.prototype.openModal = function () {
        this.filterComponent.close();
    };
    TrackPage.prototype.navigationHandler = function (event) {
        this.carriers$.unsubscribe();
        this.params$.unsubscribe();
        this.warehouse$.unsubscribe();
        this.router.navigate(["track/" + event.value.id]);
    };
    TrackPage.prototype.ngOnInit = function () {
        var _this = this;
        this.warehouse$ = this.warehouseService
            .getAllStores()
            .subscribe(function (warehouse) {
            var currentWarehouse = warehouse.find(function (wh) { return wh.id === _this.warehouseId; });
            var allAssignedCarriers = warehouse
                .filter(function (wh) { return wh.id !== _this.warehouseId; })
                .map(function (wh) { return wh.usedCarriersIds; });
            _this.warehouseCoordinates = {
                lat: currentWarehouse.geoLocation.loc.coordinates[1],
                lng: currentWarehouse.geoLocation.loc.coordinates[0],
            };
            _this.totalCarriers = currentWarehouse.usedCarriersIds.length;
            _this.carriers$ = _this.carrierService
                .getAllCarriers()
                .subscribe(function (carriers) {
                _this.loadGoogleMaps();
                _this.carriers = carriers.filter(function (car) {
                    if (currentWarehouse.usedCarriersIds.includes(car.id)) {
                        car.shared = false;
                        return true;
                    }
                    else {
                        if (allAssignedCarriers.every(function (arr) { return !arr.includes(car.id); })) {
                            car.shared = true;
                            return true;
                        }
                        else {
                            return false;
                        }
                    }
                });
                var total = 0;
                _this.carriers.forEach(function (car) {
                    total += car.numberOfDeliveries;
                });
                _this.totalDeliveries = total;
                _this.params$ = _this.route.params.subscribe(function (res) {
                    _this.totalActiveCarriers = _this.carriers.filter(function (car) { return car.status === 0; }).length;
                    if (res.id) {
                        _this.selectedCarrier = _this.carriers.filter(function (car) { return car.id === res.id; })[0];
                        _this.showCheckboxFilters = false;
                        _this.carriersOnDisplay = [_this.selectedCarrier];
                        _this.renderCarriers([_this.selectedCarrier]);
                    }
                    else {
                        _this.filterDisplayedCarriers();
                        _this.renderCarriers(_this.carriersOnDisplay);
                    }
                });
            });
        });
    };
    Object.defineProperty(TrackPage.prototype, "warehouseId", {
        get: function () {
            return localStorage.getItem('_warehouseId');
        },
        enumerable: true,
        configurable: true
    });
    TrackPage.prototype.drawOrderRoutes = function () {
        var _this = this;
        this.warehouseOrderService
            .getOrdersInDelivery(this.warehouseId)
            .then(function (orderList) {
            _this.listOfOrders = orderList;
            _this.listOfOrders.forEach(function (order) {
                var carrier = _this.carriersOnDisplay.find(function (x) { return x.id === order.carrier.id; });
                if (carrier && carrier.shared) {
                    _this.addMarker({
                        lat: order.carrier.geoLocation.loc
                            .coordinates[1],
                        lng: order.carrier.geoLocation.loc
                            .coordinates[0],
                    }, _this.map, _this.sharedCarrierIcon);
                }
                var carriersWithOrders = orderList.map(function (o) { return o.carrier.id; });
                _this.carriers = _this.carriers.filter(function (car) {
                    if (!carriersWithOrders.includes(car.id) &&
                        car.shared) {
                        return false;
                    }
                    else {
                        return true;
                    }
                });
                _this.carrierListDropdown = _this.carriers;
                if (_this.carriersOnDisplay
                    .map(function (car) { return car.id; })
                    .includes(order.carrier.id)) {
                    _this.addMarker({
                        lat: order.user.geoLocation.loc.coordinates[1],
                        lng: order.user.geoLocation.loc.coordinates[0],
                    }, _this.map, _this.userIcon);
                    var request = {
                        origin: new google.maps.LatLng(order.carrier.geoLocation.loc.coordinates[1], order.carrier.geoLocation.loc.coordinates[0]),
                        destination: new google.maps.LatLng(order.user.geoLocation.loc.coordinates[1], order.user.geoLocation.loc.coordinates[0]),
                        travelMode: 'DRIVING',
                    };
                    var directionsDisplay_1 = new google.maps.DirectionsRenderer({
                        polylineOptions: {
                            strokeColor: "hsl(" + Math.floor(Math.random() * 320) + ",100%,50%)",
                        },
                    });
                    var directionsService = new google.maps.DirectionsService();
                    directionsService.route(request, function (res, stat) {
                        if (stat === 'OK') {
                            directionsDisplay_1.setDirections(res);
                        }
                    });
                    directionsDisplay_1.setOptions({
                        suppressMarkers: true,
                    });
                    directionsDisplay_1.setMap(_this.map);
                }
            });
        });
    };
    TrackPage.prototype.renderCarriers = function (carriers) {
        var _this = this;
        if (this.markers.length > 0) {
            this.markers.forEach(function (m) {
                m.setMap(null);
            });
            this.markers = [];
        }
        carriers.forEach(function (carrier) {
            var mylatLng = {
                lat: carrier.geoLocation.loc.coordinates[1],
                lng: carrier.geoLocation.loc.coordinates[0],
            };
            _this.addMarker(_this.warehouseCoordinates, _this.map, _this.storeIcon);
            if (!carrier.shared) {
                _this.addMarker(mylatLng, _this.map, _this.carrierIcon);
            }
        });
        this.drawOrderRoutes();
    };
    TrackPage.prototype.filterDisplayedCarriers = function () {
        var filteredCarriers = this.carriers;
        if (this.showActiveOnly && this.carriers.length > 1) {
            filteredCarriers = filteredCarriers.filter(function (car) { return car.status === 0; });
        }
        if (this.showAssignedOnly && this.carriers.length > 1) {
            filteredCarriers = filteredCarriers.filter(function (car) { return car.shared === false; });
        }
        this.carrierListDropdown = filteredCarriers;
        this.carriersOnDisplay = filteredCarriers;
    };
    TrackPage.prototype.loadGoogleMaps = function () {
        this.loadingMap = true;
        var initialCoords = new google.maps.LatLng(42.7089136, 23.3702736);
        var mapProp = {
            center: initialCoords,
            zoom: 13,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
        };
        this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
        this.loadingMap = false;
    };
    TrackPage.prototype.addMarker = function (position, map, icon) {
        var marker = new google.maps.Marker({
            position: position,
            map: map,
            icon: icon,
        });
        this.markers.push(marker);
    };
    TrackPage.prototype.refreshMap = function () {
        this.filterDisplayedCarriers();
        this.renderCarriers(this.carriersOnDisplay);
    };
    TrackPage.prototype.ngOnDestroy = function () {
        this._ngDestroy$.next();
        this._ngDestroy$.complete();
        if (this.carriers$) {
            this.carriers$.unsubscribe();
        }
        if (this.params$) {
            this.params$.unsubscribe();
        }
    };
    tslib_1.__decorate([
        core_1.ViewChild('gmap', { static: true }),
        tslib_1.__metadata("design:type", core_1.ElementRef)
    ], TrackPage.prototype, "gmapElement", void 0);
    tslib_1.__decorate([
        core_1.ViewChild('filterComponent', { static: true }),
        tslib_1.__metadata("design:type", ionic_selectable_1.IonicSelectableComponent)
    ], TrackPage.prototype, "filterComponent", void 0);
    TrackPage = tslib_1.__decorate([
        core_1.Component({
            selector: 'page-track',
            templateUrl: 'track.html',
            styleUrls: ['./track.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [carrier_service_1.CarrierService,
            router_1.ActivatedRoute,
            router_1.Router,
            warehouses_service_1.WarehousesService,
            warehouse_orders_service_1.WarehouseOrdersService])
    ], TrackPage);
    return TrackPage;
}());
exports.TrackPage = TrackPage;
//# sourceMappingURL=track.js.map