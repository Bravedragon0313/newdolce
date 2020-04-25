"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var app_service_1 = require("./app.service");
var core_2 = require("@ngx-translate/core");
var store_1 = require("./services/store");
exports.ROOT_SELECTOR = 'app';
var AppComponent = (function () {
    function AppComponent(appState, translateService, store) {
        this.appState = appState;
        this.translateService = translateService;
        this.store = store;
        if (translateService.currentLang) {
            var current = translateService.currentLang;
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
            translateService.use(browserLang.match(/en-US|bg-BG|he-HE|ru-RU|es-ES|it-IT|fr-FR/)
                ? browserLang
                : 'en-US');
        }
    }
    Object.defineProperty(AppComponent.prototype, "isToolbarDisabled", {
        get: function () {
            var serverConnection = Number(this.store.serverConnection);
            return (this.routerOutlet == null ||
                serverConnection === 0 ||
                !this.routerOutlet.isActivated ||
                this.routerOutlet.component
                    .toolbarDisabled === true);
        },
        enumerable: true,
        configurable: true
    });
    AppComponent.prototype.ngOnInit = function () {
        console.log('Initial App State', this.appState.state);
    };
    tslib_1.__decorate([
        core_1.ViewChild(router_1.RouterOutlet),
        tslib_1.__metadata("design:type", router_1.RouterOutlet)
    ], AppComponent.prototype, "routerOutlet", void 0);
    AppComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app',
            encapsulation: core_1.ViewEncapsulation.None,
            styles: [
                "\n\t\t\thtml,\n\t\t\tbody,\n\t\t\tapp,\n\t\t\tmat-sidenav-container {\n\t\t\t\tmargin: 0;\n\t\t\t\twidth: 100%;\n\t\t\t\theight: 100%;\n\t\t\t\tbackground-color: #eeeeee;\n\t\t\t}\n\n\t\t\t.app-content {\n\t\t\t\twidth: 100%;\n\t\t\t\theight: 100%;\n\t\t\t\tbackground-color: #eeeeee;\n\t\t\t}\n\n\t\t\t.app-content.toolbar-enabled {\n\t\t\t\tpadding-top: 64px;\n\t\t\t\theight: 100%;\n\t\t\t}\n\t\t",
            ],
            template: "\n\t\t<toolbar *ngIf=\"!isToolbarDisabled\"></toolbar>\n\t\t<div\n\t\t\tclass=\"app-content\"\n\t\t\t[ngClass]=\"{ 'toolbar-enabled': !isToolbarDisabled }\"\n\t\t>\n\t\t\t<router-outlet></router-outlet>\n\t\t</div>\n\t",
        }),
        tslib_1.__metadata("design:paramtypes", [app_service_1.AppState,
            core_2.TranslateService,
            store_1.Store])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map