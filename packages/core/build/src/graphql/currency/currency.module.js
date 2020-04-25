"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const currency_resolver_1 = require("./currency.resolver");
let CurrencyModule = class CurrencyModule {
};
CurrencyModule = tslib_1.__decorate([
    common_1.Module({
        providers: [currency_resolver_1.CurrencyResolver],
    })
], CurrencyModule);
exports.CurrencyModule = CurrencyModule;
//# sourceMappingURL=currency.module.js.map