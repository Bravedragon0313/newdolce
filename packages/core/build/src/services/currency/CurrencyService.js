"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const Currency_1 = tslib_1.__importDefault(require("@modules/server.common/entities/Currency"));
const inversify_1 = require("inversify");
const io_1 = require("@pyro/io");
const db_server_1 = require("@pyro/db-server");
const Log_1 = require("../../helpers/Log");
let CurrenciesService = class CurrenciesService extends db_server_1.DBService {
    constructor() {
        super(...arguments);
        this.DBObject = Currency_1.default;
        this.log = Log_1.createEverLogger({
            name: 'currenciesService',
        });
    }
    createCurrency(currency) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            let success;
            let message;
            let data;
            try {
                data = yield this.create(currency);
                success = true;
                message = `Successfully create currency ${data.currencyCode}`;
            }
            catch (error) {
                success = false;
                message = error.message;
            }
            return { success, message, data };
        });
    }
    getAllCurrencies() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const currencies = yield this.find({
                isDeleted: { $eq: false },
            });
            return currencies;
        });
    }
};
CurrenciesService = tslib_1.__decorate([
    inversify_1.injectable(),
    io_1.routerName('currency')
], CurrenciesService);
exports.CurrenciesService = CurrenciesService;
//# sourceMappingURL=CurrencyService.js.map