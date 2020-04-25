"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const inversify_1 = require("inversify");
const Log_1 = require("../../helpers/Log");
const io_1 = require("@pyro/io");
const axios_1 = tslib_1.__importDefault(require("axios"));
const env_1 = require("../../env");
const util_1 = require("util");
let GeoLocationsService = class GeoLocationsService {
    constructor() {
        this.log = Log_1.createEverLogger({
            name: 'GeoLocationsService',
        });
        this.arcgisClientID = env_1.env.ARCGIS_CLIENT_ID;
        this.arcgisClientSecret = env_1.env.ARCGIS_CLIENT_SECRET;
    }
    getAddressByCoordinatesUsingArcGIS(lat, lng) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (!this.arcgisClientID || !this.arcgisClientSecret) {
                this.log.info(`Cannot use getAddressByCoordinatesUsingArcGIS without${this.arcgisClientID ? '' : ' arcgisClientID'}${this.arcgisClientSecret ? '' : ' arcgisClientSecret'}`);
                return null;
            }
            try {
                this.log.info(`Attempt to reverse Geocode coordinates: ${lat},${lng}`);
                const tokenRequestUrl = `https://www.arcgis.com/sharing/oauth2/token?client_id=${this.arcgisClientID}&client_secret=${this.arcgisClientSecret}&grant_type=client_credentials&f=json`;
                const tokenResult = yield axios_1.default.get(tokenRequestUrl);
                if (!tokenResult ||
                    !tokenResult.data ||
                    !tokenResult.data['access_token']) {
                    this.log.info(`Cannot get arcgis token with client_id=${this.arcgisClientID}, client_secret=${this.arcgisClientSecret}`);
                    return null;
                }
                else {
                    const token = tokenResult.data['access_token'];
                    const requestBaseUrl = `https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/reverseGeocode?location=${lng}%2C${lat}&distance=200&f=json`;
                    const requestUrl = `${requestBaseUrl}&forStorage=true&token=${token}`;
                    const resp = yield axios_1.default.get(requestUrl);
                    if (resp &&
                        resp.data &&
                        resp.data['address'] &&
                        (resp.data['address'].City ||
                            resp.data['address'].Region ||
                            resp.data['address'].Subregion)) {
                        let locality;
                        if (resp.data['address'].City) {
                            locality = resp.data['address'].City;
                        }
                        else if (resp.data['address'].Subregion) {
                            locality = resp.data['address'].Subregion;
                        }
                        else if (resp.data['address'].Region) {
                            locality = resp.data['address'].Region;
                        }
                        const result = {
                            locality,
                            thoroughfare: resp.data['address'].Address
                                ? resp.data['address'].Address.replace(/\d+|^\s+|\s+$/g, '').replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '')
                                : null,
                        };
                        this.log.info(`Attempted to reverse Geocode coordinates: ${lat}, ${lng}. Got results: ` +
                            `${JSON.stringify(result)}`);
                        return result;
                    }
                    else {
                        this.log.info(`Attempted to reverse Geocode coordinates: ${lat}, ${lng}. ` +
                            `Got empty response: ${resp ? util_1.inspect(resp) : ''}`);
                        return null;
                    }
                }
            }
            catch (err) {
                this.log.info(err);
                return null;
            }
        });
    }
};
tslib_1.__decorate([
    io_1.asyncListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Number]),
    tslib_1.__metadata("design:returntype", Promise)
], GeoLocationsService.prototype, "getAddressByCoordinatesUsingArcGIS", null);
GeoLocationsService = tslib_1.__decorate([
    inversify_1.injectable(),
    io_1.routerName('geo-location'),
    tslib_1.__metadata("design:paramtypes", [])
], GeoLocationsService);
exports.GeoLocationsService = GeoLocationsService;
//# sourceMappingURL=GeoLocationsService.js.map