"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var core_2 = require("@ngx-translate/core");
var device_router_service_1 = require("@modules/client.common.angular2/routers/device-router.service");
var store_service_1 = require("../../services/store.service");
var LanguagePage = (function () {
    function LanguagePage(translate, _deviceRouter, store) {
        this.translate = translate;
        this._deviceRouter = _deviceRouter;
        this.store = store;
        this.OK = 'OK';
        this.CANCEL = 'CANCEL';
        this.PREFIX = 'LANGUAGE_VIEW.';
    }
    LanguagePage.prototype.ngOnInit = function () {
        this.selected = localStorage.getItem('_language');
        this.language = localStorage.getItem('_language');
        this.translate.addLangs(['en-US', 'bg-BG', 'he-IL', 'ru-RU', 'es-ES', 'it-IT', 'fr-FR']);
    };
    Object.defineProperty(LanguagePage.prototype, "buttonOK", {
        get: function () {
            return this._translate(this.PREFIX + this.OK);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LanguagePage.prototype, "buttonCancel", {
        get: function () {
            return this._translate(this.PREFIX + this.CANCEL);
        },
        enumerable: true,
        configurable: true
    });
    LanguagePage.prototype.switchLanguage = function (language) {
        this._deviceRouter.updateLanguage(localStorage.getItem('_deviceId'), this.language);
        this.store.language = language;
        this.translate.use(language);
    };
    LanguagePage.prototype._translate = function (key) {
        var translationResult = '';
        this.translate.get(key).subscribe(function (res) {
            translationResult = res;
        });
        return translationResult;
    };
    LanguagePage = tslib_1.__decorate([
        core_1.Component({
            selector: 'page-language',
            templateUrl: 'language.html',
            styleUrls: ['./language.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [core_2.TranslateService,
            device_router_service_1.DeviceRouter,
            store_service_1.Store])
    ], LanguagePage);
    return LanguagePage;
}());
exports.LanguagePage = LanguagePage;
//# sourceMappingURL=language.js.map