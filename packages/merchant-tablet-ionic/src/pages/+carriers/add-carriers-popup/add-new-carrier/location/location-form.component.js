"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var rxjs_1 = require("rxjs");
var core_2 = require("@ngx-translate/core");
var GeoLocation_1 = require("@modules/server.common/entities/GeoLocation");
var lodash_1 = require("lodash");
var store_service_1 = require("services/store.service");
var warehouse_router_service_1 = require("@modules/client.common.angular2/routers/warehouse-router.service");
var operators_1 = require("rxjs/operators");
var LocationFormComponent = (function () {
    function LocationFormComponent(formBuilder, translate, store, warehouseRouter) {
        this.formBuilder = formBuilder;
        this.translate = translate;
        this.store = store;
        this.warehouseRouter = warehouseRouter;
        this.buttonClickEventComplete = new core_1.EventEmitter();
        this.backToStep2event = new core_1.EventEmitter();
        this.mapCoordEmitter = new core_1.EventEmitter();
        this.mapGeometryEmitter = new core_1.EventEmitter();
        this.showCoordinates = false;
        this.OK = 'OK';
        this.CANCEL = 'CANCEL';
        this.PREFIX = 'CARRIERS_VIEW.ADD_CARRIER.';
        this._ngDestroy$ = new rxjs_1.Subject();
    }
    Object.defineProperty(LocationFormComponent.prototype, "buttonOK", {
        get: function () {
            return this._translate(this.PREFIX + this.OK);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocationFormComponent.prototype, "buttonCancel", {
        get: function () {
            return this._translate(this.PREFIX + this.CANCEL);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocationFormComponent.prototype, "countries", {
        get: function () {
            return GeoLocation_1.countriesIdsToNamesArray;
        },
        enumerable: true,
        configurable: true
    });
    LocationFormComponent.prototype.ngOnInit = function () {
        this._initGoogleAutocompleteApi();
        this.buildForm(this.formBuilder);
        this.bindFormControls();
        this._loadInitialData();
    };
    LocationFormComponent.prototype.ngOnChanges = function () {
        this._ngDestroy$.next();
        this._ngDestroy$.complete();
    };
    LocationFormComponent.prototype.ngOnDestroy = function () {
        this._ngDestroy$.next();
        this._ngDestroy$.complete();
    };
    LocationFormComponent.prototype.buildForm = function (formBuilder) {
        this.form = formBuilder.group({
            city: ['', forms_1.Validators.required],
            street: ['', forms_1.Validators.required],
            house: ['', forms_1.Validators.required],
            lat: ['', forms_1.Validators.required],
            lng: ['', forms_1.Validators.required],
            country: ['', forms_1.Validators.required],
            postcode: [''],
        });
    };
    LocationFormComponent.prototype.bindFormControls = function () {
        this.city = this.form.get('city');
        this.street = this.form.get('street');
        this.house = this.form.get('house');
        this.country = this.form.get('country');
        this.lng = this.form.get('lng');
        this.lat = this.form.get('lat');
        this.postcode = this.form.get('postcode');
    };
    LocationFormComponent.prototype.toggleCoordinates = function () {
        this.showCoordinates = !this.showCoordinates;
        console.log('Toggle Cordinates');
    };
    LocationFormComponent.prototype.textInputChange = function (val, input) {
        if (input === 'lat' || input === 'lng') {
            this._tryFindNewCoordinates();
        }
        else if (input !== 'apartment') {
            this._tryFindNewAddress();
        }
    };
    LocationFormComponent.prototype.toStep2 = function () {
        this.backToStep2event.emit();
    };
    LocationFormComponent.prototype.clickComplete = function () {
        console.log('send event to parent');
        this.buttonClickEventComplete.emit('complete');
    };
    LocationFormComponent.prototype._tryFindNewCoordinates = function () {
        var _this = this;
        var geocoder = new google.maps.Geocoder();
        geocoder.geocode({
            location: new google.maps.LatLng(this.lat.value, this.lng.value),
        }, function (res, status) {
            if (status === google.maps.GeocoderStatus.OK) {
                var location_1 = res[0].geometry.location;
                _this.mapCoordEmitter.emit(location_1);
                var place = res[0];
                _this._applyNewPlaceOnTheMap(place);
            }
        });
    };
    LocationFormComponent.prototype._applyNewPlaceOnTheMap = function (locationResult) {
        if (locationResult.geometry === undefined ||
            locationResult.geometry === null) {
            return;
        }
        var loc = locationResult.geometry.location;
        this.lat.setValue(loc.lat());
        this.lng.setValue(loc.lng());
        this.mapCoordEmitter.emit(loc);
        this.mapGeometryEmitter.emit(locationResult.geometry);
        this._gatherAddressInformation(locationResult);
    };
    LocationFormComponent.prototype._gatherAddressInformation = function (locationResult) {
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
        var country = '';
        var postcode = '';
        var city = '';
        locationResult.address_components.forEach(function (address) {
            var addressType = address.types[0];
            var addressTypeKey = neededAddressTypes[addressType];
            var val = address[addressTypeKey];
            switch (addressType) {
                case 'country':
                    country = val;
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
        this._setFormLocationValues(country, city, streetName, streetNumber, postcode);
    };
    LocationFormComponent.prototype._translate = function (key) {
        var translationResult = '';
        this.translate.get(key).subscribe(function (res) {
            translationResult = res;
        });
        return translationResult;
    };
    LocationFormComponent.prototype._setFormLocationValues = function (country, city, streetName, streetNumber, postcode) {
        if (!lodash_1.isEmpty(country)) {
            this.country.setValue(GeoLocation_1.Country[country].toString());
        }
        if (!lodash_1.isEmpty(city)) {
            this.city.setValue(city);
        }
        if (!lodash_1.isEmpty(streetName)) {
            this.street.setValue(streetName);
        }
        if (!lodash_1.isEmpty(streetNumber)) {
            this.house.setValue(streetNumber);
        }
        if (!lodash_1.isEmpty(postcode)) {
            this.postcode.setValue(postcode);
        }
    };
    LocationFormComponent.prototype._initGoogleAutocompleteApi = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var inputElement, autocomplete;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.searchElement) return [3, 2];
                        return [4, this.searchElement['getInputElement']()];
                    case 1:
                        inputElement = _a.sent();
                        autocomplete = new google.maps.places.Autocomplete(inputElement);
                        this._setupGoogleAutocompleteOptions(autocomplete);
                        this._listenForGoogleAutocompleteAddressChanges(autocomplete);
                        _a.label = 2;
                    case 2: return [2];
                }
            });
        });
    };
    LocationFormComponent.prototype._setupGoogleAutocompleteOptions = function (autocomplete) {
        autocomplete.setComponentRestrictions({ country: ['us', 'bg', 'il'] });
        autocomplete['setFields'](['address_components', 'geometry']);
    };
    LocationFormComponent.prototype._listenForGoogleAutocompleteAddressChanges = function (autocomplete) {
        var _this = this;
        autocomplete.addListener('place_changed', function (_) {
            var place = autocomplete.getPlace();
            _this._applyNewPlaceOnTheMap(place);
        });
    };
    LocationFormComponent.prototype._tryFindNewAddress = function () {
        var _this = this;
        var house = this.house.value;
        var city = this.city.value;
        var streetAddress = this.street.value;
        var countryName = GeoLocation_1.getCountryName(+this.country.value);
        if (lodash_1.isEmpty(streetAddress) ||
            lodash_1.isEmpty(house) ||
            lodash_1.isEmpty(city) ||
            lodash_1.isEmpty(countryName)) {
            return;
        }
        var newAddress = "" + house + streetAddress + city + countryName;
        if (newAddress !== this._lastUsedAddress) {
            this._lastUsedAddress = newAddress;
            var geocoder = new google.maps.Geocoder();
            geocoder.geocode({
                address: streetAddress + " " + house + ", " + city,
                componentRestrictions: { country: countryName },
            }, function (results, status) {
                if (status === google.maps.GeocoderStatus.OK) {
                    var formattedAddress = results[0].formatted_address;
                    var place = results[0];
                    _this._applyNewPlaceOnTheMap(place);
                    _this._applyFormattedAddress(formattedAddress);
                }
            });
        }
    };
    LocationFormComponent.prototype._applyFormattedAddress = function (address) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var inputElement;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.searchElement) return [3, 2];
                        return [4, this.searchElement['getInputElement']()];
                    case 1:
                        inputElement = _a.sent();
                        inputElement.value = address;
                        _a.label = 2;
                    case 2: return [2];
                }
            });
        });
    };
    LocationFormComponent.prototype._loadInitialData = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var geoLocation;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.warehouseRouter
                            .get(this.store.warehouseId, false)
                            .pipe(operators_1.first())
                            .toPromise()];
                    case 1:
                        geoLocation = (_a.sent()).geoLocation;
                        this.city.setValue(geoLocation.city);
                        this.street.setValue(geoLocation.streetAddress);
                        this.house.setValue(geoLocation.house);
                        this.country.setValue(geoLocation.countryId.toString());
                        this.lng.setValue(geoLocation.coordinates.lng);
                        this.lat.setValue(geoLocation.coordinates.lat);
                        this.postcode.setValue(geoLocation.postcode);
                        this._tryFindNewCoordinates();
                        return [2];
                }
            });
        });
    };
    tslib_1.__decorate([
        core_1.ViewChild('autocomplete', { static: true }),
        tslib_1.__metadata("design:type", core_1.ElementRef)
    ], LocationFormComponent.prototype, "searchElement", void 0);
    tslib_1.__decorate([
        core_1.Output(),
        tslib_1.__metadata("design:type", Object)
    ], LocationFormComponent.prototype, "buttonClickEventComplete", void 0);
    tslib_1.__decorate([
        core_1.Output(),
        tslib_1.__metadata("design:type", Object)
    ], LocationFormComponent.prototype, "backToStep2event", void 0);
    LocationFormComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'carrier-location-form',
            styleUrls: ['./location-form.component.scss'],
            templateUrl: 'location-form.component.html',
        }),
        tslib_1.__metadata("design:paramtypes", [forms_1.FormBuilder,
            core_2.TranslateService,
            store_service_1.Store,
            warehouse_router_service_1.WarehouseRouter])
    ], LocationFormComponent);
    return LocationFormComponent;
}());
exports.LocationFormComponent = LocationFormComponent;
//# sourceMappingURL=location-form.component.js.map