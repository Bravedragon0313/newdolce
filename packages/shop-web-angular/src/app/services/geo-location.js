"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var GeoLocation_1 = tslib_1.__importDefault(require("@modules/server.common/entities/GeoLocation"));
var http_1 = require("@angular/common/http");
var environment_1 = require("environments/environment");
var GeoLocationService = (function () {
    function GeoLocationService(http) {
        this.http = http;
        this.headers = new http_1.HttpHeaders({
            'Content-Type': 'application/json',
        });
    }
    GeoLocationService.prototype.getCurrentGeoLocation = function () {
        var _this = this;
        return new Promise(function (resolve, reject) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var coords, location_1, currentGeolocation, error_1;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4, this.getCurrentCoords()];
                    case 1:
                        coords = _a.sent();
                        location_1 = {
                            type: 'Point',
                            coordinates: [coords.longitude, coords.latitude],
                        };
                        currentGeolocation = new GeoLocation_1.default({
                            _id: '',
                            loc: location_1,
                            countryId: null,
                            city: null,
                            streetAddress: null,
                            house: null,
                            _createdAt: '',
                            _updatedAt: '',
                        });
                        resolve(currentGeolocation);
                        return [3, 3];
                    case 2:
                        error_1 = _a.sent();
                        reject(error_1);
                        return [3, 3];
                    case 3: return [2];
                }
            });
        }); });
    };
    GeoLocationService.prototype.getCurrentCoords = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var defaultLat = environment_1.environment.DEFAULT_LATITUDE;
            var defaultLng = environment_1.environment.DEFAULT_LONGITUDE;
            if (defaultLat && defaultLng) {
                resolve(_this.getCoordsObj({
                    latitude: defaultLat,
                    longitude: defaultLng,
                }));
                return;
            }
            navigator.geolocation.getCurrentPosition(function (res) {
                resolve(_this.getCoordsObj(res.coords));
            }, function (err) {
                _this.getLocationByIP().subscribe(function (res) {
                    if (res) {
                        resolve(_this.getCoordsObj(res));
                    }
                    else {
                        reject(err.message);
                    }
                });
            });
        });
    };
    GeoLocationService.prototype.getLocationByIP = function () {
        return this.http.get(environment_1.environment.SERVICES_ENDPOINT + '/getLocationByIP', { headers: this.headers });
    };
    GeoLocationService.prototype.getCoordsObj = function (coords) {
        return {
            longitude: coords.longitude,
            latitude: coords.latitude,
        };
    };
    GeoLocationService = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [http_1.HttpClient])
    ], GeoLocationService);
    return GeoLocationService;
}());
exports.GeoLocationService = GeoLocationService;
//# sourceMappingURL=geo-location.js.map