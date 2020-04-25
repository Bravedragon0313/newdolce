"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var apollo_angular_1 = require("apollo-angular");
var graphql_tag_1 = tslib_1.__importDefault(require("graphql-tag"));
var operators_1 = require("rxjs/operators");
var CurrenciesService = (function () {
    function CurrenciesService(apollo) {
        this.apollo = apollo;
        this.currencies$ = this.apollo
            .watchQuery({
            query: graphql_tag_1.default(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n\t\t\t\tquery allCurrencies {\n\t\t\t\t\tcurrencies {\n\t\t\t\t\t\tcurrencyCode\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t"], ["\n\t\t\t\tquery allCurrencies {\n\t\t\t\t\tcurrencies {\n\t\t\t\t\t\tcurrencyCode\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t"]))),
            pollInterval: 2000,
        })
            .valueChanges.pipe(operators_1.map(function (result) { return result.data.currencies; }), operators_1.share());
    }
    CurrenciesService.prototype.getCurrencies = function () {
        return this.currencies$;
    };
    CurrenciesService = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [apollo_angular_1.Apollo])
    ], CurrenciesService);
    return CurrenciesService;
}());
exports.CurrenciesService = CurrenciesService;
var templateObject_1;
//# sourceMappingURL=currencies.service.js.map