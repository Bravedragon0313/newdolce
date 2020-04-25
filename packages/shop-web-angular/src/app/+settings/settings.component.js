"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var core_2 = require("@ngx-translate/core");
var environment_1 = require("environments/environment");
var SettingsComponent = (function () {
    function SettingsComponent(translateService) {
        this.translateService = translateService;
        this.defaultLanguage = '';
        this.defaultLanguage = environment_1.environment['DEFAULT_LANGUAGE'];
        if (translateService.currentLang) {
            var current = translateService.currentLang;
            this.selectedLang = current;
            translateService.setDefaultLang(current);
        }
        else {
            translateService.addLangs([
                'en-US',
                'es-ES',
                'bg-BG',
                'he-IL',
                'ru-RU',
                'fr-FR',
                'it-IT',
            ]);
            translateService.setDefaultLang('en-US');
            var browserLang = translateService.getBrowserLang();
            if (this.defaultLanguage) {
                translateService.use(this.defaultLanguage);
            }
            else {
                browserLang.match(/en-US|es-ES|bg-BG|he-IL|ru-RU|fr-FR|it-IT/)
                    ? browserLang
                    : 'en-US';
            }
            this.selectedLang = this.translateService.currentLang;
        }
    }
    SettingsComponent.prototype.ngOnInit = function () { };
    SettingsComponent.prototype.switchLanguage = function (language) {
        this.translateService.use(language);
    };
    SettingsComponent.prototype.ngOnDestroy = function () { };
    SettingsComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'settings',
            styleUrls: ['./settings.component.scss'],
            templateUrl: './settings.component.html',
        }),
        tslib_1.__metadata("design:paramtypes", [core_2.TranslateService])
    ], SettingsComponent);
    return SettingsComponent;
}());
exports.SettingsComponent = SettingsComponent;
//# sourceMappingURL=settings.component.js.map