"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var Warehouse_1 = tslib_1.__importDefault(require("@modules/server.common/entities/Warehouse"));
var warehouse_router_service_1 = require("@modules/client.common.angular2/routers/warehouse-router.service");
var forms_1 = require("@angular/forms");
var GeoLocation_1 = require("@modules/server.common/entities/GeoLocation");
var lodash_1 = require("lodash");
var core_2 = require("@ngx-translate/core");
var angular_1 = require("@ionic/angular");
var LocationComponent = (function () {
    function LocationComponent(formBuilder, warehouseRouter, alertController, translate) {
        this.formBuilder = formBuilder;
        this.warehouseRouter = warehouseRouter;
        this.alertController = alertController;
        this.translate = translate;
        this.OK = 'OK';
        this.CANCEL = 'CANCEL';
        this.PREFIX = 'SETTINGS_VIEW.';
        this.mapCoordEmitter = new core_1.EventEmitter();
        this.mapGeometryEmitter = new core_1.EventEmitter();
        this.buildForm();
        this.bindFormControls();
    }
    Object.defineProperty(LocationComponent.prototype, "countries", {
        get: function () {
            return GeoLocation_1.countriesIdsToNamesArray;
        },
        enumerable: true,
        configurable: true
    });
    LocationComponent.prototype.ngOnChanges = function () {
        if (this.currWarehouse) {
            this.country.setValue(this.currWarehouse.geoLocation.countryId.toString());
            this.city.setValue(this.currWarehouse.geoLocation.city);
            this.postcode.setValue(this.currWarehouse.geoLocation.postcode);
            this.street.setValue(this.currWarehouse.geoLocation.streetAddress);
            this.house.setValue(this.currWarehouse.geoLocation.house);
            this.apartment.setValue(this.currWarehouse.geoLocation.apartment);
            this.latitude.setValue(this.currWarehouse.geoLocation.coordinates.lat);
            this.longitude.setValue(this.currWarehouse.geoLocation.coordinates.lng);
        }
    };
    LocationComponent.prototype.ngOnInit = function () {
        this._initGoogleAutocompleteApi();
        this._tryFindNewCoordinates();
    };
    Object.defineProperty(LocationComponent.prototype, "buttonOK", {
        get: function () {
            return this._translate(this.PREFIX + this.OK);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocationComponent.prototype, "buttonCancel", {
        get: function () {
            return this._translate(this.PREFIX + this.CANCEL);
        },
        enumerable: true,
        configurable: true
    });
    LocationComponent.prototype.saveChanges = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var warehouse, alert;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.prepareUpdate();
                        return [4, this.warehouseRouter.save(this.currWarehouse)];
                    case 1:
                        warehouse = _a.sent();
                        return [4, this.alertController.create({
                                cssClass: 'success-info',
                                message: 'Successfully saved changes',
                                buttons: ['OK'],
                            })];
                    case 2:
                        alert = _a.sent();
                        return [4, alert.present()];
                    case 3:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    LocationComponent.prototype.prepareUpdate = function () {
        this.currWarehouse.geoLocation.countryId = this.country.value;
        this.currWarehouse.geoLocation.city = this.city.value;
        this.currWarehouse.geoLocation.postcode = this.postcode.value;
        this.currWarehouse.geoLocation.streetAddress = this.street.value;
        this.currWarehouse.geoLocation.house = this.house.value;
        this.currWarehouse.geoLocation.apartment = this.apartment.value;
        this.currWarehouse.geoLocation.loc = {
            type: 'Point',
            coordinates: [this.longitude.value, this.latitude.value],
        };
    };
    LocationComponent.prototype.bindFormControls = function () {
        this.country = this.locationForm.get('country');
        this.city = this.locationForm.get('city');
        this.postcode = this.locationForm.get('postcode');
        this.street = this.locationForm.get('street');
        this.house = this.locationForm.get('house');
        this.apartment = this.locationForm.get('apartment');
        this.autodetectCoordinates = this.locationForm.get('autodetectCoordinates');
        this.latitude = this.locationForm.get('latitude');
        this.longitude = this.locationForm.get('longitude');
    };
    LocationComponent.prototype.buildForm = function () {
        this.locationForm = this.formBuilder.group({
            country: ['', forms_1.Validators.required],
            city: ['', forms_1.Validators.required],
            postcode: [''],
            street: ['', forms_1.Validators.required],
            house: ['', forms_1.Validators.required],
            apartment: [''],
            autodetectCoordinates: [true],
            latitude: ['', forms_1.Validators.required],
            longitude: ['', forms_1.Validators.required],
        });
    };
    LocationComponent.prototype.textInputChange = function (val, input) {
        if (input === 'latitude' || input === 'longitude') {
            this._tryFindNewCoordinates();
        }
        else if (input !== 'apartment') {
            this._tryFindNewAddress();
        }
    };
    LocationComponent.prototype._tryFindNewCoordinates = function () {
        var _this = this;
        var geocoder = new google.maps.Geocoder();
        geocoder.geocode({
            location: new google.maps.LatLng(this.latitude.value, this.longitude.value),
        }, function (res, status) {
            if (status === google.maps.GeocoderStatus.OK) {
                var location_1 = res[0].geometry.location;
                _this.mapCoordEmitter.emit(location_1);
                var place = res[0];
                _this._applyNewPlaceOnTheMap(place);
            }
        });
    };
    LocationComponent.prototype._applyNewPlaceOnTheMap = function (locationResult) {
        if (locationResult.geometry === undefined ||
            locationResult.geometry === null) {
            return;
        }
        var loc = locationResult.geometry.location;
        this.latitude.setValue(loc.lat());
        this.longitude.setValue(loc.lng());
        this.mapCoordEmitter.emit(loc);
        this.mapGeometryEmitter.emit(locationResult.geometry);
        this._gatherAddressInformation(locationResult);
    };
    LocationComponent.prototype._translate = function (key) {
        var translationResult = '';
        this.translate.get(key).subscribe(function (res) {
            translationResult = res;
        });
        return translationResult;
    };
    LocationComponent.prototype._gatherAddressInformation = function (locationResult) {
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
    LocationComponent.prototype._setFormLocationValues = function (country, city, streetName, streetNumber, postcode) {
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
    LocationComponent.prototype._initGoogleAutocompleteApi = function () {
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
    LocationComponent.prototype._setupGoogleAutocompleteOptions = function (autocomplete) {
        autocomplete.setComponentRestrictions({ country: ['us', 'bg', 'il'] });
        autocomplete['setFields'](['address_components', 'geometry']);
    };
    LocationComponent.prototype._listenForGoogleAutocompleteAddressChanges = function (autocomplete) {
        var _this = this;
        autocomplete.addListener('place_changed', function (_) {
            var place = autocomplete.getPlace();
            _this._applyNewPlaceOnTheMap(place);
        });
    };
    LocationComponent.prototype._tryFindNewAddress = function () {
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
    LocationComponent.prototype._applyFormattedAddress = function (address) {
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
    LocationComponent.prototype.ngOnDestroy = function () { };
    tslib_1.__decorate([
        core_1.ViewChild('autocomplete', { static: true }),
        tslib_1.__metadata("design:type", core_1.ElementRef)
    ], LocationComponent.prototype, "searchElement", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Warehouse_1.default)
    ], LocationComponent.prototype, "currWarehouse", void 0);
    LocationComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'merchant-location',
            templateUrl: 'location.html',
        }),
        tslib_1.__metadata("design:paramtypes", [forms_1.FormBuilder,
            warehouse_router_service_1.WarehouseRouter,
            angular_1.AlertController,
            core_2.TranslateService])
    ], LocationComponent);
    return LocationComponent;
}());
exports.LocationComponent = LocationComponent;
//# sourceMappingURL=location.js.map