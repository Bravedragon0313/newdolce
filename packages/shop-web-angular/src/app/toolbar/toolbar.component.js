"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var sidenav_service_1 = require("../sidenav/sidenav.service");
var variables_1 = require("../../styles/variables");
var store_1 = require("app/services/store");
var DeliveryType_1 = tslib_1.__importDefault(require("@modules/server.common/enums/DeliveryType"));
var router_1 = require("@angular/router");
var GeoLocation_1 = require("@modules/server.common/entities/GeoLocation");
var user_router_service_1 = require("@modules/client.common.angular2/routers/user-router.service");
var operators_1 = require("rxjs/operators");
var geo_location_1 = require("app/services/geo-location");
var mat_search_component_1 = require("@modules/material-extensions/search/mat-search.component");
var dialog_1 = require("@angular/material/dialog");
var location_popup_component_1 = require("app/shared/location-popup/location-popup.component");
var environment_1 = require("environments/environment");
var ToolbarComponent = (function () {
    function ToolbarComponent(sidenavService, ngZone, store, router, userRouter, geoLocationService, dialog) {
        this.sidenavService = sidenavService;
        this.ngZone = ngZone;
        this.store = store;
        this.router = router;
        this.userRouter = userRouter;
        this.geoLocationService = geoLocationService;
        this.dialog = dialog;
        this.styleVariables = variables_1.styleVariables;
        this.isDeliveryRequired =
            this.store.deliveryType === DeliveryType_1.default.Delivery;
        this.loadAddress();
    }
    ToolbarComponent.prototype.ngAfterViewInit = function () {
        this.initGoogleAutocompleteApi();
    };
    ToolbarComponent.prototype.toggleGetProductsType = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.isDeliveryRequired = !this.isDeliveryRequired;
                        this.store.deliveryType = this.isDeliveryRequired
                            ? DeliveryType_1.default.Delivery
                            : DeliveryType_1.default.Takeaway;
                        return [4, this.reload()];
                    case 1:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    ToolbarComponent.prototype.tryFindNewAddress = function (address) {
        var _this = this;
        var geocoder = new google.maps.Geocoder();
        geocoder.geocode({
            address: address,
        }, function (results, status) {
            if (status === google.maps.GeocoderStatus.OK) {
                var place = results[0];
                _this.applyNewPlaceOnTheMap(place);
            }
        });
    };
    ToolbarComponent.prototype.loadAddress = function (findNew) {
        if (findNew === void 0) { findNew = false; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var geoLocationForProducts, isProductionEnv, user, error_1;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        isProductionEnv = environment_1.environment.production;
                        if (!(this.store.userId && !findNew && isProductionEnv)) return [3, 2];
                        return [4, this.userRouter
                                .get(this.store.userId)
                                .pipe(operators_1.first())
                                .toPromise()];
                    case 1:
                        user = _a.sent();
                        geoLocationForProducts = user.geoLocation;
                        return [3, 5];
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        return [4, this.geoLocationService.getCurrentGeoLocation()];
                    case 3:
                        geoLocationForProducts = _a.sent();
                        return [3, 5];
                    case 4:
                        error_1 = _a.sent();
                        console.warn(error_1);
                        return [3, 5];
                    case 5:
                        this.tryFindNewCoordinates(geoLocationForProducts, findNew);
                        return [2];
                }
            });
        });
    };
    ToolbarComponent.prototype.tryFindNewCoordinates = function (geoLocation, findNew) {
        var _this = this;
        if (findNew === void 0) { findNew = false; }
        var lat = geoLocation.loc.coordinates[1];
        var lng = geoLocation.loc.coordinates[0];
        var geocoder = new google.maps.Geocoder();
        geocoder.geocode({
            location: { lng: lng, lat: lat },
        }, function (results, status) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var formattedAddress, place, userId, addressComponents, city, streetAddress, house, country;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(status === google.maps.GeocoderStatus.OK)) return [3, 3];
                        formattedAddress = results[0].formatted_address;
                        place = results[0];
                        userId = this.store.userId;
                        if (!(findNew && userId)) return [3, 2];
                        addressComponents = place.address_components;
                        city = addressComponents.find(function (a) {
                            return a.types.includes('locality');
                        }).long_name;
                        streetAddress = addressComponents.find(function (a) {
                            return a.types.includes('route') ||
                                a.types.includes('intersection');
                        }).long_name;
                        house = addressComponents.find(function (a) {
                            return a.types.includes('street_number');
                        }).long_name;
                        country = addressComponents.find(function (a) {
                            return a.types.includes('country');
                        }).short_name;
                        return [4, this.updateUser(userId, {
                                countryId: GeoLocation_1.Country[country],
                                city: city,
                                streetAddress: streetAddress,
                                house: house,
                                loc: {
                                    type: 'Point',
                                    coordinates: [lng, lat],
                                },
                            })];
                    case 1:
                        _a.sent();
                        this.reload();
                        _a.label = 2;
                    case 2:
                        this.applyFormattedAddress(formattedAddress);
                        _a.label = 3;
                    case 3: return [2];
                }
            });
        }); });
    };
    ToolbarComponent.prototype.applyFormattedAddress = function (address) {
        if (this.matSearch.input) {
            this.initializedAddress = address;
            this.matSearch.input.nativeElement.value = address;
        }
    };
    ToolbarComponent.prototype.initGoogleAutocompleteApi = function () {
        if (this.matSearch.input) {
            new google.maps.places.Autocomplete(this.matSearch.input.nativeElement);
        }
    };
    ToolbarComponent.prototype.applyNewPlaceOnTheMap = function (place) {
        if (place.geometry === undefined || place.geometry === null) {
            return;
        }
        var neededAddressTypes = [
            'country',
            'locality',
            'route',
            'street_number',
        ];
        var existedTypes = place.address_components.map(function (ac) { return ac.types[0]; });
        for (var _i = 0, neededAddressTypes_1 = neededAddressTypes; _i < neededAddressTypes_1.length; _i++) {
            var type = neededAddressTypes_1[_i];
            if (!existedTypes.includes(type)) {
                this.openLocationForm(place);
                return;
            }
        }
        if (this.initializedAddress &&
            this.initializedAddress !== place.formatted_address) {
            this.tryFindNewCoordinates({
                loc: {
                    type: 'Point',
                    coordinates: [
                        place.geometry.location.lng(),
                        place.geometry.location.lat(),
                    ],
                },
            }, true);
        }
        this.initializedAddress = place.formatted_address;
    };
    ToolbarComponent.prototype.openLocationForm = function (place) {
        if (place === void 0) { place = null; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var locationPopup, res;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.dialog.open(location_popup_component_1.LocationPopupComponent, {
                            width: '900px',
                            data: {
                                place: place,
                            },
                        })];
                    case 1:
                        locationPopup = _a.sent();
                        return [4, locationPopup
                                .beforeClosed()
                                .pipe(operators_1.first())
                                .toPromise()];
                    case 2:
                        res = _a.sent();
                        if (res !== '') {
                            this.matSearch.input.nativeElement.value = res;
                        }
                        else if (this.initializedAddress) {
                            this.matSearch.input.nativeElement.value = this.initializedAddress;
                        }
                        return [2];
                }
            });
        });
    };
    ToolbarComponent.prototype.reload = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.router.navigateByUrl('reload', {
                            skipLocationChange: true,
                        })];
                    case 1:
                        _a.sent();
                        return [4, this.router.navigateByUrl('/products')];
                    case 2:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    ToolbarComponent.prototype.updateUser = function (userId, geoLocation) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!userId) return [3, 2];
                        return [4, this.userRouter.updateUser(userId, {
                                geoLocation: geoLocation,
                            })];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2];
                }
            });
        });
    };
    tslib_1.__decorate([
        core_1.ViewChild('matSearch'),
        tslib_1.__metadata("design:type", mat_search_component_1.MatSearchComponent)
    ], ToolbarComponent.prototype, "matSearch", void 0);
    ToolbarComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'toolbar',
            styleUrls: ['./toolbar.component.scss'],
            templateUrl: './toolbar.component.html',
        }),
        tslib_1.__metadata("design:paramtypes", [sidenav_service_1.SidenavService,
            core_1.NgZone,
            store_1.Store,
            router_1.Router,
            user_router_service_1.UserRouter,
            geo_location_1.GeoLocationService,
            dialog_1.MatDialog])
    ], ToolbarComponent);
    return ToolbarComponent;
}());
exports.ToolbarComponent = ToolbarComponent;
//# sourceMappingURL=toolbar.component.js.map