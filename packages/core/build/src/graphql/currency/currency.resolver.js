"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const CurrencyService_1 = require("../../services/currency/CurrencyService");
let CurrencyResolver = class CurrencyResolver {
    constructor(_currenciesService) {
        this._currenciesService = _currenciesService;
    }
    getCurrencies(_) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this._currenciesService.getAllCurrencies();
        });
    }
    createCurrency(_, { createInput }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this._currenciesService.createCurrency(createInput);
        });
    }
};
tslib_1.__decorate([
    graphql_1.Query('currencies'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CurrencyResolver.prototype, "getCurrencies", null);
tslib_1.__decorate([
    graphql_1.Mutation(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CurrencyResolver.prototype, "createCurrency", null);
CurrencyResolver = tslib_1.__decorate([
    graphql_1.Resolver('Currency'),
    tslib_1.__metadata("design:paramtypes", [CurrencyService_1.CurrenciesService])
], CurrencyResolver);
exports.CurrencyResolver = CurrencyResolver;
//# sourceMappingURL=currency.resolver.js.map