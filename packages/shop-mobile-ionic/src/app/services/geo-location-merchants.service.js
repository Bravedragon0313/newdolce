"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var apollo_angular_1 = require("apollo-angular");
var graphql_tag_1 = tslib_1.__importDefault(require("graphql-tag"));
var operators_1 = require("rxjs/operators");
var GeoLocationsMerchantsService = (function () {
    function GeoLocationsMerchantsService(_apollo) {
        this._apollo = _apollo;
    }
    GeoLocationsMerchantsService.prototype.getCoseMerchants = function (geoLocation) {
        return this._apollo
            .query({
            query: graphql_tag_1.default(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n\t\t\t\t\tquery GetCoseMerchants(\n\t\t\t\t\t\t$geoLocation: GeoLocationFindInput!\n\t\t\t\t\t) {\n\t\t\t\t\t\tgetCoseMerchants(geoLocation: $geoLocation) {\n\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\tusername\n\t\t\t\t\t\t\tname\n\t\t\t\t\t\t\tlogo\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t"], ["\n\t\t\t\t\tquery GetCoseMerchants(\n\t\t\t\t\t\t$geoLocation: GeoLocationFindInput!\n\t\t\t\t\t) {\n\t\t\t\t\t\tgetCoseMerchants(geoLocation: $geoLocation) {\n\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\tusername\n\t\t\t\t\t\t\tname\n\t\t\t\t\t\t\tlogo\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t"]))),
            variables: { geoLocation: geoLocation },
        })
            .pipe(operators_1.map(function (res) { return res.data['getCoseMerchants']; }), operators_1.share());
    };
    GeoLocationsMerchantsService = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [apollo_angular_1.Apollo])
    ], GeoLocationsMerchantsService);
    return GeoLocationsMerchantsService;
}());
exports.GeoLocationsMerchantsService = GeoLocationsMerchantsService;
var templateObject_1;
//# sourceMappingURL=geo-location-merchants.service.js.map