"use strict";
var UsersProductsService_1;
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const inversify_1 = require("inversify");
const io_1 = require("@pyro/io");
const handlebars_1 = tslib_1.__importDefault(require("handlebars"));
const utils_1 = require("../../utils");
const DevicesService_1 = require("../devices/DevicesService");
const operators_1 = require("rxjs/operators");
const rxjs_1 = require("rxjs");
let UsersProductsService = UsersProductsService_1 = class UsersProductsService {
    constructor(devicesService) {
        this.devicesService = devicesService;
        this._placeholderTemplateFileName = UsersProductsService_1.templatesDirPath + `user_products_placeholder.hbs`;
        this._placeholderTranslationsFileName = UsersProductsService_1.templatesDirPath +
            `user_products_placeholder.json`;
        this._placeholderTemplateString = utils_1.observeFile(this._placeholderTemplateFileName).pipe(operators_1.distinctUntilChanged(), operators_1.publishReplay(1), operators_1.refCount());
        this._placeholderTranslationsJSON = utils_1.observeFile(this._placeholderTranslationsFileName).pipe(operators_1.distinctUntilChanged(), operators_1.publishReplay(1), operators_1.refCount());
    }
    getPlaceholder(userId, deviceId) {
        return this.devicesService.get(deviceId).pipe(operators_1.exhaustMap((device) => {
            if (device === null) {
                return rxjs_1.throwError(new Error(`User with the id ${userId} doesn't exist`));
            }
            else {
                return rxjs_1.of(device);
            }
        }), operators_1.distinctUntilChanged((oldDevice, newDevice) => oldDevice.language !== newDevice.language), operators_1.switchMap((device) => rxjs_1.combineLatest(this._placeholderTemplateString, this._placeholderTranslationsJSON, (templateString, translationsJSON) => {
            const translations = JSON.parse(translationsJSON);
            const template = handlebars_1.default.compile(templateString);
            const language = Object.keys(JSON.parse(translationsJSON)).filter((k) => k
                .toLowerCase()
                .includes(device.language.toLowerCase()))[0];
            return template(translations[language]);
        })), operators_1.share());
    }
};
UsersProductsService.templatesDirPath = `${__dirname}/../../../res/templates/`;
tslib_1.__decorate([
    io_1.observableListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, String]),
    tslib_1.__metadata("design:returntype", rxjs_1.Observable)
], UsersProductsService.prototype, "getPlaceholder", null);
UsersProductsService = UsersProductsService_1 = tslib_1.__decorate([
    inversify_1.injectable(),
    io_1.routerName('user-products'),
    tslib_1.__metadata("design:paramtypes", [DevicesService_1.DevicesService])
], UsersProductsService);
exports.UsersProductsService = UsersProductsService;
//# sourceMappingURL=UsersProductsService.js.map