"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var db_1 = require("@pyro/db");
var typeorm_1 = require("typeorm");
var Currency = (function (_super) {
    tslib_1.__extends(Currency, _super);
    function Currency() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    tslib_1.__decorate([
        db_1.Schema({ type: String, unique: true }),
        typeorm_1.Column(),
        tslib_1.__metadata("design:type", String)
    ], Currency.prototype, "currencyCode", void 0);
    tslib_1.__decorate([
        db_1.Types.Boolean(false),
        typeorm_1.Column(),
        tslib_1.__metadata("design:type", Boolean)
    ], Currency.prototype, "isDeleted", void 0);
    Currency = tslib_1.__decorate([
        db_1.ModelName('Currency'),
        typeorm_1.Entity({ name: 'currencies' })
    ], Currency);
    return Currency;
}(db_1.DBObject));
exports.default = Currency;
exports.countriesDefaultCurrencies = {
    IL: 'ILS',
    RU: 'RUB',
    US: 'USD',
    BG: 'BGN',
};
//# sourceMappingURL=Currency.js.map