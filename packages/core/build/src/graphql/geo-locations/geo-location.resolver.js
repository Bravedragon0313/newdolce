"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const geo_locations_1 = require("../../services/geo-locations");
const operators_1 = require("rxjs/operators");
let GeoLocationResolver = class GeoLocationResolver {
    constructor(geoLocationsProductsService) {
        this.geoLocationsProductsService = geoLocationsProductsService;
    }
    getGeoLocationProducts(_, { geoLocation }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.geoLocationsProductsService
                .get(geoLocation)
                .pipe(operators_1.first())
                .toPromise();
        });
    }
    geoLocationProductsByPaging(_, { geoLocation, options, pagingOptions = {}, searchText, }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.geoLocationsProductsService.geoLocationProductsByPaging(geoLocation, pagingOptions, options, searchText);
        });
    }
    getCountOfGeoLocationProducts(_, { geoLocation, options, searchText, }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.geoLocationsProductsService.getCountOfGeoLocationProducts(geoLocation, options, searchText);
        });
    }
};
tslib_1.__decorate([
    graphql_1.Query('geoLocationProducts'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], GeoLocationResolver.prototype, "getGeoLocationProducts", null);
tslib_1.__decorate([
    graphql_1.Query(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], GeoLocationResolver.prototype, "geoLocationProductsByPaging", null);
tslib_1.__decorate([
    graphql_1.Query(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], GeoLocationResolver.prototype, "getCountOfGeoLocationProducts", null);
GeoLocationResolver = tslib_1.__decorate([
    graphql_1.Resolver('GeoLocation'),
    tslib_1.__metadata("design:paramtypes", [geo_locations_1.GeoLocationsProductsService])
], GeoLocationResolver);
exports.GeoLocationResolver = GeoLocationResolver;
//# sourceMappingURL=geo-location.resolver.js.map