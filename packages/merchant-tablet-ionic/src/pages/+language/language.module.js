"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var language_1 = require("./language");
var core_2 = require("@ngx-translate/core");
var http_1 = require("@angular/common/http");
var http_loader_1 = require("@ngx-translate/http-loader");
var store_service_1 = require("../../services/store.service");
var router_1 = require("@angular/router");
var angular_1 = require("@ionic/angular");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
function HttpLoaderFactory(http) {
    return new http_loader_1.TranslateHttpLoader(http, './assets/i18n/', '.json');
}
exports.HttpLoaderFactory = HttpLoaderFactory;
var routes = [
    {
        path: '',
        component: language_1.LanguagePage,
    },
];
var LanguagePageModule = (function () {
    function LanguagePageModule() {
    }
    LanguagePageModule = tslib_1.__decorate([
        core_1.NgModule({
            declarations: [language_1.LanguagePage],
            imports: [
                angular_1.IonicModule,
                router_1.RouterModule.forChild(routes),
                common_1.CommonModule,
                forms_1.FormsModule,
                core_2.TranslateModule.forChild({
                    loader: {
                        provide: core_2.TranslateLoader,
                        useFactory: HttpLoaderFactory,
                        deps: [http_1.HttpClient],
                    },
                }),
            ],
            providers: [store_service_1.Store],
        })
    ], LanguagePageModule);
    return LanguagePageModule;
}());
exports.LanguagePageModule = LanguagePageModule;
//# sourceMappingURL=language.module.js.map