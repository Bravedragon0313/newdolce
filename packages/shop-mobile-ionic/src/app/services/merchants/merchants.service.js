"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var apollo_angular_1 = require("apollo-angular");
var graphql_tag_1 = tslib_1.__importDefault(require("graphql-tag"));
var MerchantsService = (function () {
    function MerchantsService(_apollo) {
        this._apollo = _apollo;
    }
    MerchantsService.prototype.getMerchantsBuyName = function (searchName, geoLocation) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var res;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this._apollo
                            .query({
                            query: graphql_tag_1.default(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n\t\t\t\t\tquery GetMerchantsBuyName(\n\t\t\t\t\t\t$searchName: String!\n\t\t\t\t\t\t$geoLocation: GeoLocationFindInput\n\t\t\t\t\t) {\n\t\t\t\t\t\tgetMerchantsBuyName(\n\t\t\t\t\t\t\tsearchName: $searchName\n\t\t\t\t\t\t\tgeoLocation: $geoLocation\n\t\t\t\t\t\t) {\n\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\tusername\n\t\t\t\t\t\t\tname\n\t\t\t\t\t\t\tlogo\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t"], ["\n\t\t\t\t\tquery GetMerchantsBuyName(\n\t\t\t\t\t\t$searchName: String!\n\t\t\t\t\t\t$geoLocation: GeoLocationFindInput\n\t\t\t\t\t) {\n\t\t\t\t\t\tgetMerchantsBuyName(\n\t\t\t\t\t\t\tsearchName: $searchName\n\t\t\t\t\t\t\tgeoLocation: $geoLocation\n\t\t\t\t\t\t) {\n\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\tusername\n\t\t\t\t\t\t\tname\n\t\t\t\t\t\t\tlogo\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t"]))),
                            variables: { searchName: searchName, geoLocation: geoLocation },
                        })
                            .toPromise()];
                    case 1:
                        res = _a.sent();
                        return [2, res.data['getMerchantsBuyName']];
                }
            });
        });
    };
    MerchantsService = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [apollo_angular_1.Apollo])
    ], MerchantsService);
    return MerchantsService;
}());
exports.MerchantsService = MerchantsService;
var templateObject_1;
//# sourceMappingURL=merchants.service.js.map