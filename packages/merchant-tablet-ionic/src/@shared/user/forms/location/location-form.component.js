"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var GeoLocation_1 = tslib_1.__importStar(require("@modules/server.common/entities/GeoLocation"));
var lodash_1 = require("lodash");
var helpers_1 = require("../../../forms/helpers");
var core_2 = require("@ngx-translate/core");
var product_locales_service_1 = require("@modules/client.common.angular2/locale/product-locales.service");
var angular_1 = require("@ionic/angular");
var User_1 = tslib_1.__importDefault(require("@modules/server.common/entities/User"));
var LocationFormComponent = (function () {
    function LocationFormComponent(_alertController, translate, localeTranslateService) {
        this._alertController = _alertController;
        this.translate = translate;
        this.localeTranslateService = localeTranslateService;
        this.OK = 'OK';
        this.CANCEL = 'CANCEL';
        this.PREFIX = 'WAREHOUSE_VIEW.SELECT_POP_UP.';
        this.showAutocompleteSearch = false;
        this.mapCoordinatesEmitter = new core_1.EventEmitter();
        this.mapGeometryEmitter = new core_1.EventEmitter();
        this.showCoordinates = false;
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
    Object.defineProperty(LocationFormComponent.prototype, "isCountryValid", {
        get: function () {
            return (this.countryId.errors &&
                (this.countryId.dirty || this.countryId.touched));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocationFormComponent.prototype, "isCityValid", {
        get: function () {
            return this.city.errors && (this.city.dirty || this.city.touched);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocationFormComponent.prototype, "isStreetAddressValid", {
        get: function () {
            return (this.streetAddress.errors &&
                (this.streetAddress.dirty || this.streetAddress.touched));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocationFormComponent.prototype, "isHouseValid", {
        get: function () {
            return this.house.errors && (this.house.dirty || this.house.touched);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocationFormComponent.prototype, "isLocationValid", {
        get: function () {
            return (this.coordinates.errors &&
                (this.coordinates.dirty || this.coordinates.touched));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocationFormComponent.prototype, "countryId", {
        get: function () {
            return this.form.get('countryId');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocationFormComponent.prototype, "city", {
        get: function () {
            return this.form.get('city');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocationFormComponent.prototype, "streetAddress", {
        get: function () {
            return this.form.get('streetAddress');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocationFormComponent.prototype, "house", {
        get: function () {
            return this.form.get('house');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocationFormComponent.prototype, "postcode", {
        get: function () {
            return this.form.get('postcode');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocationFormComponent.prototype, "coordinates", {
        get: function () {
            return this.form.get('loc').get('coordinates');
        },
        enumerable: true,
        configurable: true
    });
    LocationFormComponent.buildForm = function (formBuilder) {
        var form = formBuilder.group({
            countryId: [GeoLocation_1.Country.US],
            city: ['', [forms_1.Validators.required]],
            streetAddress: ['', [forms_1.Validators.required]],
            house: ['', [forms_1.Validators.required]],
            postcode: [''],
            loc: formBuilder.group({
                type: ['Point'],
                coordinates: formBuilder.array([null, null]),
            }),
        });
        return form;
    };
    LocationFormComponent.buildApartmentForm = function (formBuilder) {
        return formBuilder.control('');
    };
    LocationFormComponent.prototype.ngOnInit = function () {
        this.loadData();
    };
    LocationFormComponent.prototype.ngAfterViewInit = function () {
        this._initGoogleAutocompleteApi();
    };
    LocationFormComponent.prototype.toggleCoordinates = function () {
        this.showCoordinates = !this.showCoordinates;
    };
    LocationFormComponent.prototype.onAddressChanges = function () {
        if (this.showAutocompleteSearch) {
            this._tryFindNewAddress();
        }
    };
    LocationFormComponent.prototype.onCoordinatesChanged = function () {
        if (this.showAutocompleteSearch) {
            this._tryFindNewCoordinates();
        }
    };
    LocationFormComponent.prototype.getValue = function () {
        var location = this.form.getRawValue();
        if (!location.postcode) {
            delete location.postcode;
        }
        return location;
    };
    LocationFormComponent.prototype.getApartment = function () {
        if (!this.apartment) {
            throw new Error("Form doesn't contain apartment");
        }
        return this.apartment.value;
    };
    LocationFormComponent.prototype.setValue = function (geoLocation) {
        helpers_1.FormHelpers.deepMark(this.form, 'dirty');
        this.form.setValue(tslib_1.__assign({ postcode: geoLocation.postcode || '' }, lodash_1.pick(geoLocation, Object.keys(this.getValue()))));
        this._tryFindNewCoordinates();
    };
    LocationFormComponent.prototype.setApartment = function (apartment) {
        this.apartment.setValue(apartment);
    };
    LocationFormComponent.prototype._translate = function (key) {
        var translationResult = '';
        this.translate.get(key).subscribe(function (res) {
            translationResult = res;
        });
        return translationResult;
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
    LocationFormComponent.prototype._tryFindNewAddress = function () {
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
        if (newAddress !== this._lastUsedAddressText) {
            this._lastUsedAddressText = newAddress;
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
                    _this._applyNewPlaceOnTheMap(place);
                    _this._applyFormattedAddress(formattedAddress);
                }
            });
        }
    };
    LocationFormComponent.prototype._tryFindNewCoordinates = function () {
        var _this = this;
        var formCoordinates = this.coordinates.value;
        this._lat = formCoordinates[0];
        this._lng = formCoordinates[1];
        var geocoder = new google.maps.Geocoder();
        geocoder.geocode({
            location: new google.maps.LatLng(this._lat, this._lng),
        }, function (results, status) {
            if (status === google.maps.GeocoderStatus.OK) {
                var formattedAddress = results[0].formatted_address;
                var place = results[0];
                var useGeometryLatLng = false;
                _this._applyNewPlaceOnTheMap(place, useGeometryLatLng);
                _this._applyFormattedAddress(formattedAddress);
            }
        });
    };
    LocationFormComponent.prototype._emitCoordinates = function (location) {
        this.mapCoordinatesEmitter.emit(location);
    };
    LocationFormComponent.prototype._emitGeometry = function (geometry) {
        this.mapGeometryEmitter.emit(geometry);
    };
    LocationFormComponent.prototype._popInvalidAddressMessage = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var alert;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this._alertController.create({
                            message: 'Invalid address, please try again!',
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4, alert.present()];
                    case 2:
                        _a.sent();
                        setTimeout(function () { return alert.dismiss(); }, 2000);
                        return [2];
                }
            });
        });
    };
    LocationFormComponent.prototype._setupGoogleAutocompleteOptions = function (autocomplete) {
        autocomplete['setFields'](['address_components', 'geometry']);
    };
    LocationFormComponent.prototype._applyNewPlaceOnTheMap = function (place, useGeometryLatLng) {
        if (useGeometryLatLng === void 0) { useGeometryLatLng = true; }
        if (place.geometry === undefined || place.geometry === null) {
            this._popInvalidAddressMessage();
            return;
        }
        if (useGeometryLatLng) {
            var loc = place.geometry.location;
            this._lat = loc.lat();
            this._lng = loc.lng();
        }
        this._emitGeometry(place.geometry);
        this._emitCoordinates(new google.maps.LatLng(this._lat, this._lng));
        this._gatherAddressInformation(place);
    };
    LocationFormComponent.prototype._listenForGoogleAutocompleteAddressChanges = function (autocomplete) {
        var _this = this;
        autocomplete.addListener('place_changed', function (_) {
            var place = autocomplete.getPlace();
            _this._applyNewPlaceOnTheMap(place);
        });
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
        this._setFormLocationValues(countryId, city, streetName, streetNumber, postcode);
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
    LocationFormComponent.prototype._setFormLocationValues = function (countryId, city, streetName, streetNumber, postcode) {
        if (!lodash_1.isEmpty(countryId)) {
            this.countryId.setValue(GeoLocation_1.Country[countryId].toString());
        }
        if (!lodash_1.isEmpty(city)) {
            this.city.setValue(city);
        }
        if (!lodash_1.isEmpty(postcode)) {
            this.postcode.setValue(postcode);
        }
        if (!lodash_1.isEmpty(streetName)) {
            this.streetAddress.setValue(streetName);
        }
        if (!lodash_1.isEmpty(streetNumber)) {
            this.house.setValue(streetNumber);
        }
        this.coordinates.setValue([this._lat, this._lng]);
    };
    LocationFormComponent.prototype.loadData = function () {
        if (this.userData) {
            var userGeoLocation = new GeoLocation_1.default(this.userData.geoLocation);
            this.city.setValue(userGeoLocation.city);
            this.streetAddress.setValue(userGeoLocation.streetAddress);
            this.house.setValue(userGeoLocation.house);
            this.coordinates.setValue([
                userGeoLocation.coordinates.lat,
                userGeoLocation.coordinates.lng,
            ]);
            this.countryId.setValue(userGeoLocation.countryId.toString());
            this.postcode.setValue(userGeoLocation.postcode);
            this.apartment.setValue(this.userData.apartment);
            this._tryFindNewCoordinates();
        }
    };
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", forms_1.FormGroup)
    ], LocationFormComponent.prototype, "form", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", forms_1.AbstractControl)
    ], LocationFormComponent.prototype, "apartment", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", User_1.default)
    ], LocationFormComponent.prototype, "userData", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], LocationFormComponent.prototype, "showAutocompleteSearch", void 0);
    tslib_1.__decorate([
        core_1.Output(),
        tslib_1.__metadata("design:type", Object)
    ], LocationFormComponent.prototype, "mapCoordinatesEmitter", void 0);
    tslib_1.__decorate([
        core_1.Output(),
        tslib_1.__metadata("design:type", Object)
    ], LocationFormComponent.prototype, "mapGeometryEmitter", void 0);
    tslib_1.__decorate([
        core_1.ViewChild('autocomplete'),
        tslib_1.__metadata("design:type", core_1.ElementRef)
    ], LocationFormComponent.prototype, "searchElement", void 0);
    LocationFormComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'location-form',
            styleUrls: ['./location-form.component.scss'],
            templateUrl: './location-form.component.html',
        }),
        tslib_1.__metadata("design:paramtypes", [angular_1.AlertController,
            core_2.TranslateService,
            product_locales_service_1.ProductLocalesService])
    ], LocationFormComponent);
    return LocationFormComponent;
}());
exports.LocationFormComponent = LocationFormComponent;
//# sourceMappingURL=location-form.component.js.map