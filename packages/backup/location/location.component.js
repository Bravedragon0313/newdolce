"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var User_1 = tslib_1.__importDefault(require("@modules/server.common/entities/User"));
var GeoLocation_1 = require("@modules/server.common/entities/GeoLocation");
var geo_location_router_service_1 = require("@modules/client.common.angular2/routers/geo-location-router.service");
var invite_request_router_service_1 = require("@modules/client.common.angular2/routers/invite-request-router.service");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var lodash_1 = require("lodash");
var abbreviation_to_country_1 = require("@modules/server.common/data/abbreviation-to-country");
var environment_1 = require("environments/environment");
var defaultLng = environment_1.environment.DEFAULT_LONGITUDE || 0;
var defaultLat = environment_1.environment.DEFAULT_LATITUDE || 0;
var LocationFormComponent = (function () {
    function LocationFormComponent(fb, geoLocationRouter, inviteRequestRouter) {
        this.fb = fb;
        this.geoLocationRouter = geoLocationRouter;
        this.inviteRequestRouter = inviteRequestRouter;
        this.mapCoordinatesEmitter = new core_1.EventEmitter();
        this.continue = new core_1.EventEmitter();
        this.mapGeometryEmitter = new core_1.EventEmitter();
        this.formControl = this.fb.group({
            house: ['', forms_1.Validators.required],
            apartament: [''],
            countryId: ['', forms_1.Validators.required],
            city: ['', forms_1.Validators.required],
            streetAddress: ['', forms_1.Validators.required],
            isApartment: ['checked'],
        });
        this.streetAddress = this.formControl.get('streetAddress');
        this.city = this.formControl.get('city');
        this.house = this.formControl.get('house');
        this.apartament = this.formControl.get('apartament');
        this.countryId = this.formControl.get('countryId');
        this.isApartment = this.formControl.get('isApartment');
        this.showAutocompleteSearch = true;
        this._ngDestroy$ = new rxjs_1.Subject();
    }
    LocationFormComponent_1 = LocationFormComponent;
    Object.defineProperty(LocationFormComponent.prototype, "countries", {
        get: function () {
            return LocationFormComponent_1.COUNTRIES;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocationFormComponent.prototype, "isApartmentValid", {
        get: function () {
            var valid = (this.isApartment && !this.isApartment.value) ||
                this.apartament.value;
            return valid;
        },
        enumerable: true,
        configurable: true
    });
    LocationFormComponent.prototype.ngOnInit = function () {
        this.onChanges();
    };
    LocationFormComponent.prototype.ngAfterViewInit = function () {
        this.initGoogleAutocompleteApi();
    };
    LocationFormComponent.prototype.ngOnChanges = function () {
        if (this.place) {
            this.applyNewPlaceOnTheMap(this.place);
        }
        else if (this.coordinates) {
            this.onCoordinatesChanged();
        }
    };
    LocationFormComponent.prototype.getCreateUserInfo = function () {
        return {
            geoLocation: {
                loc: this.coordinates
                    ? this.getLocObj(Array.from(this.coordinates.coordinates).reverse())
                    : this.getLocObj([defaultLng, defaultLat]),
                countryId: GeoLocation_1.Country.IL,
                city: this.city.value,
                streetAddress: this.streetAddress.value,
                house: this.house.value.toString(),
            },
        };
    };
    LocationFormComponent.prototype.onAddressChanges = function () {
        if (this.showAutocompleteSearch) {
            this.tryFindNewAddress();
        }
    };
    LocationFormComponent.prototype.onCoordinatesChanged = function () {
        if (this.showAutocompleteSearch) {
            this.tryFindNewCoordinates();
        }
    };
    LocationFormComponent.prototype.createInviteRequest = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2, this.inviteRequestRouter.create({
                        geoLocation: {
                            loc: this.coordinates
                                ? this.getLocObj(Array.from(this.coordinates.coordinates).reverse())
                                : this.getLocObj([defaultLng, defaultLat]),
                            countryId: GeoLocation_1.Country.IL,
                            city: this.city.value,
                            streetAddress: this.streetAddress.value,
                            house: this.house.value.toString(),
                        },
                        apartment: this.apartament.value
                            ? this.apartament.value.toString()
                            : '0',
                        deviceId: '1',
                    })];
            });
        });
    };
    LocationFormComponent.prototype.getLocObj = function (coordinates) {
        return {
            type: 'Point',
            coordinates: coordinates,
        };
    };
    LocationFormComponent.prototype.onChanges = function () {
        var _this = this;
        this.formControl.statusChanges
            .pipe(operators_1.takeUntil(this._ngDestroy$))
            .subscribe(function (value) {
            _this.statusForm =
                _this.formControl.valid === true && _this.isApartmentValid;
        });
    };
    LocationFormComponent.prototype.emitCoordinates = function (location) {
        this.mapCoordinatesEmitter.emit(location);
    };
    LocationFormComponent.prototype.emitGeometry = function (geometry) {
        this.mapGeometryEmitter.emit(geometry);
    };
    LocationFormComponent.prototype.applyNewPlaceOnTheMap = function (place, useGeometryLatLng) {
        if (useGeometryLatLng === void 0) { useGeometryLatLng = true; }
        if (place.geometry === undefined || place.geometry === null) {
            return;
        }
        if (useGeometryLatLng) {
            var loc = place.geometry.location;
            this.coordinates.coordinates = [loc.lat(), loc.lng()];
        }
        this.emitGeometry(place.geometry);
        this.emitCoordinates(new google.maps.LatLng(this.coordinates.coordinates[0], this.coordinates.coordinates[1]));
        this.gatherAddressInformation(place);
    };
    LocationFormComponent.prototype.tryFindNewAddress = function () {
        var _this = this;
        var house = this.house.value;
        var streetAddress = this.streetAddress.value;
        var city = this.city.value;
        var countryName = GeoLocation_1.getCountryName(+this.countryId.value);
        if (lodash_1.isEmpty(streetAddress) ||
            lodash_1.isEmpty(house) ||
            lodash_1.isEmpty(city) ||
            lodash_1.isEmpty(countryName)) {
            return;
        }
        var newAddress = "" + house + streetAddress + city + countryName;
        if (newAddress !== this.lastUsedAddressText) {
            this.lastUsedAddressText = newAddress;
            var geocoder = new google.maps.Geocoder();
            geocoder.geocode({
                address: streetAddress + " " + house + ", " + city,
                componentRestrictions: {
                    country: countryName,
                },
            }, function (results, status) {
                if (status === google.maps.GeocoderStatus.OK) {
                    var formattedAddress = results[0].formatted_address;
                    var place = results[0];
                    var neededAddressTypes = [
                        'country',
                        'locality',
                        'route',
                        'street_number',
                    ];
                    var existedTypes = place.address_components
                        .map(function (ac) { return ac.types; })
                        .reduce(function (acc, val) { return acc.concat(val); }, []);
                    for (var _i = 0, neededAddressTypes_1 = neededAddressTypes; _i < neededAddressTypes_1.length; _i++) {
                        var type = neededAddressTypes_1[_i];
                        if (!existedTypes.includes(type)) {
                            _this.statusForm = false;
                        }
                    }
                    _this.applyNewPlaceOnTheMap(place);
                    _this.applyFormattedAddress(formattedAddress);
                }
            });
        }
    };
    LocationFormComponent.prototype.tryFindNewCoordinates = function () {
        var _this = this;
        var formCoordinates = this.coordinates.coordinates;
        this.lat = formCoordinates[0];
        this.lng = formCoordinates[1];
        var geocoder = new google.maps.Geocoder();
        geocoder.geocode({
            location: { lng: this.lng, lat: this.lat },
        }, function (results, status) {
            if (status === google.maps.GeocoderStatus.OK) {
                var formattedAddress = results[0].formatted_address;
                var place = results[0];
                var useGeometryLatLng = false;
                _this.applyNewPlaceOnTheMap(place, useGeometryLatLng);
                _this.applyFormattedAddress(formattedAddress);
            }
        });
    };
    LocationFormComponent.prototype.applyFormattedAddress = function (address) {
        if (this.searchElement) {
            this.searchElement.nativeElement.value = address;
        }
    };
    LocationFormComponent.prototype.gatherAddressInformation = function (locationResult) {
        var longName = 'long_name';
        var shortName = 'short_name';
        var neededAddressTypes = {
            country: shortName,
            locality: longName,
            route: longName,
            intersection: longName,
            street_number: longName,
            postal_code: longName,
            administrative_area_level_1: shortName,
            administrative_area_level_2: shortName,
            administrative_area_level_3: shortName,
            administrative_area_level_4: shortName,
            administrative_area_level_5: shortName,
        };
        var streetName = '';
        var streetNumber = '';
        var countryId = '';
        var postcode = '';
        var city = '';
        locationResult.address_components.forEach(function (address) {
            var addressType = address.types[0];
            var addressTypeKey = neededAddressTypes[addressType];
            var val = address[addressTypeKey];
            switch (addressType) {
                case 'country':
                    countryId = val;
                    break;
                case 'locality':
                case 'administrative_area_level_1':
                case 'administrative_area_level_2':
                case 'administrative_area_level_3':
                case 'administrative_area_level_4':
                case 'administrative_area_level_5':
                    if (city === '') {
                        city = val;
                    }
                    break;
                case 'route':
                case 'intersection':
                    if (streetName === '') {
                        streetName = val;
                    }
                    break;
                case 'street_number':
                    streetNumber = val;
                    break;
                case 'postal_code':
                    postcode = val;
                    break;
            }
        });
        this.setFormLocationValues(countryId, city, streetName, streetNumber, postcode);
    };
    LocationFormComponent.prototype.setFormLocationValues = function (countryId, city, streetName, streetNumber, postcode) {
        if (!lodash_1.isEmpty(countryId)) {
            this.countryId.setValue(GeoLocation_1.Country[countryId].toString());
        }
        if (!lodash_1.isEmpty(city)) {
            this.city.setValue(city);
        }
        if (!lodash_1.isEmpty(streetName)) {
            this.streetAddress.setValue(streetName);
        }
        if (!lodash_1.isEmpty(streetNumber)) {
            this.house.setValue(streetNumber);
        }
    };
    LocationFormComponent.prototype.listenForGoogleAutocompleteAddressChanges = function (autocomplete) {
        var _this = this;
        autocomplete.addListener('place_changed', function (_) {
            var place = autocomplete.getPlace();
            _this.applyNewPlaceOnTheMap(place);
        });
    };
    LocationFormComponent.prototype.setupGoogleAutocompleteOptions = function (autocomplete) {
        autocomplete['setFields'](['address_components', 'geometry']);
    };
    LocationFormComponent.prototype.initGoogleAutocompleteApi = function () {
        if (this.searchElement) {
            var autocomplete = new google.maps.places.Autocomplete(this.searchElement.nativeElement);
            this.setupGoogleAutocompleteOptions(autocomplete);
            this.listenForGoogleAutocompleteAddressChanges(autocomplete);
        }
    };
    LocationFormComponent.prototype.ngOnDestroy = function () {
        this._ngDestroy$.next();
        this._ngDestroy$.complete();
    };
    var LocationFormComponent_1;
    LocationFormComponent.COUNTRIES = Object.keys(abbreviation_to_country_1.countries).map(function (abbr) {
        return { id: GeoLocation_1.Country[abbr], name: GeoLocation_1.getCountryName(+GeoLocation_1.Country[abbr]) };
    });
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", User_1.default)
    ], LocationFormComponent.prototype, "InitUser", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Object)
    ], LocationFormComponent.prototype, "coordinates", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Object)
    ], LocationFormComponent.prototype, "place", void 0);
    tslib_1.__decorate([
        core_1.ViewChild('autocomplete'),
        tslib_1.__metadata("design:type", core_1.ElementRef)
    ], LocationFormComponent.prototype, "searchElement", void 0);
    tslib_1.__decorate([
        core_1.Output(),
        tslib_1.__metadata("design:type", Object)
    ], LocationFormComponent.prototype, "mapCoordinatesEmitter", void 0);
    tslib_1.__decorate([
        core_1.Output(),
        tslib_1.__metadata("design:type", Object)
    ], LocationFormComponent.prototype, "continue", void 0);
    tslib_1.__decorate([
        core_1.Output(),
        tslib_1.__metadata("design:type", Object)
    ], LocationFormComponent.prototype, "mapGeometryEmitter", void 0);
    LocationFormComponent = LocationFormComponent_1 = tslib_1.__decorate([
        core_1.Component({
            selector: 'es-location-form',
            styleUrls: ['./location.component.scss'],
            templateUrl: '/location.component.html',
        }),
        tslib_1.__metadata("design:paramtypes", [forms_1.FormBuilder,
            geo_location_router_service_1.GeoLocationRouter,
            invite_request_router_service_1.InviteRequestRouter])
    ], LocationFormComponent);
    return LocationFormComponent;
}());
exports.LocationFormComponent = LocationFormComponent;
//# sourceMappingURL=location.component.js.map