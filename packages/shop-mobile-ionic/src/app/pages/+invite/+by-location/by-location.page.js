"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var lodash_1 = tslib_1.__importDefault(require("lodash"));
var lodash_2 = require("lodash");
var core_1 = require("@angular/core");
var invite_request_router_service_1 = require("@modules/client.common.angular2/routers/invite-request-router.service");
var GeoLocation_1 = require("@modules/server.common/entities/GeoLocation");
var operators_1 = require("rxjs/operators");
var invite_router_service_1 = require("@modules/client.common.angular2/routers/invite-router.service");
var http_1 = require("@angular/common/http");
var geolocation_1 = require("@ionic-native/geolocation");
var router_1 = require("@angular/router");
var store_service_1 = require("../../../services/store.service");
var user_auth_router_service_1 = require("@modules/client.common.angular2/routers/user-auth-router.service");
var geo_location_router_service_1 = require("@modules/client.common.angular2/routers/geo-location-router.service");
var rxjs_1 = require("rxjs");
var environment_1 = require("environments/environment");
var ByLocationPage = (function () {
    function ByLocationPage(store, http, router, userAuthRouter, inviteRouter, inviteRequestRouter, geoLocationRouter) {
        this.store = store;
        this.http = http;
        this.router = router;
        this.userAuthRouter = userAuthRouter;
        this.inviteRouter = inviteRouter;
        this.inviteRequestRouter = inviteRequestRouter;
        this.geoLocationRouter = geoLocationRouter;
        this.isApartment = true;
        this.country = GeoLocation_1.Country.IL;
        this.detectingLocation = true;
        this.ngDestroy$ = new rxjs_1.Subject();
    }
    ByLocationPage_1 = ByLocationPage;
    ByLocationPage.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.updateCurrentAddressByCoordinates()];
                    case 1:
                        _a.sent();
                        return [2];
                }
            });
        }); }, 50);
    };
    Object.defineProperty(ByLocationPage.prototype, "isValid", {
        get: function () {
            var notEmptyString = function (s) {
                return typeof s === 'string' && !lodash_2.isEmpty(s);
            };
            return (lodash_2.every([this.city, this.streetAddress], notEmptyString) &&
                lodash_2.every([this.house, this.country], function (n) { return lodash_2.isNumber(n) && n !== 0; }) &&
                ((lodash_2.isNumber(this.apartment) && this.apartment !== 0) ||
                    !this.isApartment));
        },
        enumerable: true,
        configurable: true
    });
    ByLocationPage.prototype.getCoordinates = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var options, defaultLat, defaultLng, response, coords, error_1;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        options = {
                            timeout: 30000,
                            enableHighAccuracy: true,
                        };
                        defaultLat = environment_1.environment.DEFAULT_LATITUDE;
                        defaultLng = environment_1.environment.DEFAULT_LONGITUDE;
                        response = void 0;
                        if (!(defaultLat && defaultLng)) return [3, 1];
                        response = {
                            coords: { latitude: defaultLat, longitude: defaultLng },
                        };
                        return [3, 3];
                    case 1: return [4, geolocation_1.Geolocation.getCurrentPosition(options)];
                    case 2:
                        response = _a.sent();
                        _a.label = 3;
                    case 3:
                        coords = response.coords;
                        if (!response ||
                            !response.coords ||
                            !response.coords.latitude ||
                            !response.coords.longitude) {
                            console.log('Device location using @ionic-native/geolocation services recieved empty');
                            return [2, null];
                        }
                        console.log("Device location using @ionic-native/geolocation services recieved: " + coords.latitude + ", " + coords.longitude);
                        return [2, { lng: coords.longitude, lat: coords.latitude }];
                    case 4:
                        error_1 = _a.sent();
                        console.warn("Can't detect location");
                        console.warn(error_1);
                        return [2, null];
                    case 5: return [2];
                }
            });
        });
    };
    ByLocationPage.prototype.login = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var invite, inviteRequest, currentInvite, inviteCurrent, err_1;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.isValid) {
                            alert("Some of the information missing!");
                            throw new Error('Some of the info is missing!');
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 11, , 12]);
                        return [4, this.inviteRouter
                                .getByLocation({
                                apartment: this.isApartment
                                    ? this.apartment.toString()
                                    : '0',
                                house: this.house.toString(),
                                streetAddress: this.streetAddress,
                                city: this.city,
                                countryId: this.country,
                            })
                                .pipe(operators_1.first())
                                .toPromise()];
                    case 2:
                        invite = _a.sent();
                        if (!(invite != null)) return [3, 4];
                        return [4, this.register(invite)];
                    case 3:
                        _a.sent();
                        return [3, 10];
                    case 4:
                        console.log('Creating invite request...');
                        return [4, this.createInviteRequest()];
                    case 5:
                        inviteRequest = _a.sent();
                        if (!this.store.inviteSystem) return [3, 7];
                        return [4, this.processInviteRequest(inviteRequest)];
                    case 6:
                        currentInvite = _a.sent();
                        return [3, 10];
                    case 7: return [4, this.inviteRouter.create(inviteRequest)];
                    case 8:
                        inviteCurrent = _a.sent();
                        return [4, this.register(inviteCurrent)];
                    case 9:
                        _a.sent();
                        _a.label = 10;
                    case 10: return [3, 12];
                    case 11:
                        err_1 = _a.sent();
                        console.error(err_1);
                        return [3, 12];
                    case 12: return [2];
                }
            });
        });
    };
    ByLocationPage.prototype.register = function (invite) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var user;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.userAuthRouter.register({
                            user: {
                                apartment: invite.apartment,
                                geoLocation: invite.geoLocation,
                            },
                        })];
                    case 1:
                        user = _a.sent();
                        localStorage.setItem('_userId', user.id);
                        if (this.store.backToDetails) {
                            this.goToDetailsPage();
                            this.store.backToDetails = null;
                            return [2];
                        }
                        this.router.navigate(['/products'], { skipLocationChange: true });
                        return [2];
                }
            });
        });
    };
    ByLocationPage.prototype.goToDetailsPage = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var id;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = this.store.backToDetails;
                        return [4, this.router.navigate(["/products/product-details/" + id], {
                                skipLocationChange: true,
                                queryParams: {
                                    backUrl: '/products',
                                    warehouseId: this.store.warehouseId,
                                },
                            })];
                    case 1:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    ByLocationPage.prototype._getIsraeliCities = function (query) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var params, successResponse, hebrewNames, err_2;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        params = new http_1.HttpParams()
                            .set('plain', 'false')
                            .set('resource_id', 'd4901968-dad3-4845-a9b0-a57d027f11ab')
                            .set('limit', '100')
                            .set('offset', '0')
                            .set('fields', 'שם_ישוב')
                            .set('distinct', 'true')
                            .set('sort', 'שם_ישוב')
                            .set('q', JSON.stringify({ שם_ישוב: query.replace(' ', '+') + ':*' }));
                        return [4, this.http.get(ByLocationPage_1.israelAPIUrl, { params: params })];
                    case 1:
                        successResponse = _a.sent();
                        hebrewNames = successResponse.data.result.records.map(function (it) { return it['שם_ישוב']; });
                        return [2, lodash_1.default.map(hebrewNames, function (name) {
                                return name.trim().replace('(', ')').replace(')', '(');
                            })];
                    case 2:
                        err_2 = _a.sent();
                        console.error(err_2);
                        return [2, []];
                    case 3: return [2];
                }
            });
        });
    };
    ByLocationPage.prototype.processInviteRequest = function (inviteRequest) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (inviteRequest) {
                            this.store.inviteRequestId = inviteRequest.id;
                        }
                        else {
                        }
                        this.store.inviteAddress = inviteRequest.toAddressString();
                        return [4, this.router.navigateByUrl('invite/by-code')];
                    case 1:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    ByLocationPage.prototype.createInviteRequest = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var device, coordinatesObj;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        device = { id: this.store.deviceId };
                        return [4, this.getCoordinatesByAddress()];
                    case 1:
                        coordinatesObj = _a.sent();
                        if (!(coordinatesObj == null)) return [3, 3];
                        return [4, this.getCoordinates()];
                    case 2:
                        coordinatesObj = _a.sent();
                        _a.label = 3;
                    case 3:
                        if (coordinatesObj != null) {
                            return [2, this.inviteRequestRouter.create({
                                    geoLocation: {
                                        loc: {
                                            type: 'Point',
                                            coordinates: [coordinatesObj.lng, coordinatesObj.lat],
                                        },
                                        countryId: this.country,
                                        city: this.city,
                                        streetAddress: this.streetAddress,
                                        house: this.house.toString(),
                                    },
                                    apartment: this.isApartment ? this.apartment.toString() : '0',
                                    deviceId: device.id,
                                })];
                        }
                        else {
                            throw new Error("Can't get coordinates for the creation of invite request!");
                        }
                        return [2];
                }
            });
        });
    };
    ByLocationPage.prototype.updateCurrentAddressByCoordinates = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var coordinatesObj, address, error_2, result, err_3;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 7, , 8]);
                        console.log('Attempt to detect device location using @ionic-native/geolocation services');
                        return [4, this.getCoordinates()];
                    case 1:
                        coordinatesObj = _a.sent();
                        if (!coordinatesObj) {
                            this.detectingLocation = false;
                            return [2, false];
                        }
                        console.log("Reverse geo-code address by coordinates [" + coordinatesObj.lat + ", " + coordinatesObj.lng + "] started...");
                        return [4, this.geoLocationRouter.getAddressByCoordinatesUsingArcGIS(coordinatesObj.lat, coordinatesObj.lng)];
                    case 2:
                        address = _a.sent();
                        console.log("Attempt to reverse geo-code address by coordinates finished. Result: " + address);
                        if (!!address) return [3, 6];
                        _a.label = 3;
                    case 3:
                        _a.trys.push([3, 5, , 6]);
                        return [4, this.getAddressByGoogleGeocoder(coordinatesObj.lat, coordinatesObj.lng)];
                    case 4:
                        address = _a.sent();
                        return [3, 6];
                    case 5:
                        error_2 = _a.sent();
                        this.detectingLocation = false;
                        return [2, false];
                    case 6:
                        result = false;
                        if (!this.city) {
                            this.city = address.locality;
                            result = true;
                        }
                        if (!this.streetAddress) {
                            this.streetAddress = address.thoroughfare;
                            result = true;
                        }
                        this.country = +GeoLocation_1.Country[address.country];
                        this.detectingLocation = false;
                        return [2, result];
                    case 7:
                        err_3 = _a.sent();
                        console.warn("Can't detect location");
                        console.warn(err_3);
                        this.detectingLocation = false;
                        return [3, 8];
                    case 8: return [2, false];
                }
            });
        });
    };
    ByLocationPage.prototype.ngOnDestroy = function () {
        console.warn('ByLocationPage did leave');
        this.ngDestroy$.next();
        this.ngDestroy$.complete();
    };
    ByLocationPage.prototype.getAddressByGoogleGeocoder = function (lat, lng) {
        var geocoder = new google.maps.Geocoder();
        return new Promise(function (resolve, reject) {
            geocoder.geocode({
                location: { lng: lng, lat: lat },
            }, function (results, status) {
                if (status === google.maps.GeocoderStatus.OK) {
                    var country = results.find(function (x) {
                        return x.types.includes('country');
                    });
                    var address = results.find(function (x) {
                        return x.types.includes('street_address');
                    });
                    if (!address) {
                        address = results.find(function (x) {
                            return x.types.includes('route');
                        });
                    }
                    var formattedAddress = {
                        locality: address.address_components[3].short_name,
                        thoroughfare: address.address_components[1].short_name,
                        country: country.address_components[0].short_name,
                    };
                    resolve(formattedAddress);
                }
                else {
                    reject('Cannot find the address.');
                }
            });
        });
    };
    ByLocationPage.prototype.getCoordinatesByAddress = function () {
        var house = this.house;
        var streetAddress = this.streetAddress;
        var city = this.city;
        var countryName = GeoLocation_1.getCountryName(this.country);
        if (!streetAddress || !house || !city || !countryName) {
            return;
        }
        var geocoder = new google.maps.Geocoder();
        return new Promise(function (resolve, reject) {
            geocoder.geocode({
                address: streetAddress + " " + house + ", " + city,
                componentRestrictions: {
                    country: countryName,
                },
            }, function (results, status) {
                if (status === google.maps.GeocoderStatus.OK) {
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
                            resolve(null);
                            return;
                        }
                    }
                    var loc = place.geometry.location;
                    resolve({ lat: loc.lat(), lng: loc.lng() });
                }
                else {
                    resolve(null);
                }
            });
        });
    };
    var ByLocationPage_1;
    ByLocationPage.israelAPIUrl = 'https://data.gov.il/api/action/datastore_search';
    ByLocationPage = ByLocationPage_1 = tslib_1.__decorate([
        core_1.Component({
            selector: 'e-cu-by-location',
            templateUrl: './by-location.page.html',
            styleUrls: ['./by-location.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [store_service_1.Store,
            http_1.HttpClient,
            router_1.Router,
            user_auth_router_service_1.UserAuthRouter,
            invite_router_service_1.InviteRouter,
            invite_request_router_service_1.InviteRequestRouter,
            geo_location_router_service_1.GeoLocationRouter])
    ], ByLocationPage);
    return ByLocationPage;
}());
exports.ByLocationPage = ByLocationPage;
//# sourceMappingURL=by-location.page.js.map