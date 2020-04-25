"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var angular_1 = require("@ionic/angular");
var language_page_1 = require("./language.page");
var http_loader_1 = require("@ngx-translate/http-loader");
var core_2 = require("@ngx-translate/core");
var http_1 = require("@angular/common/http");
function HttpLoaderFactory(http) {
    return new http_loader_1.TranslateHttpLoader(http, './assets/i18n/', '.json');
}
exports.HttpLoaderFactory = HttpLoaderFactory;
var routes = [
    {
        path: '',
        component: language_page_1.LanguagePage,
    },
];
var LanguagePageModule = (function () {
    function LanguagePageModule() {
    }
    LanguagePageModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                angular_1.IonicModule,
                router_1.RouterModule.forChild(routes),
                core_2.TranslateModule.forChild({
                    loader: {
                        provide: core_2.TranslateLoader,
                        useFactory: HttpLoaderFactory,
                        deps: [http_1.HttpClient],
                    },
                }),
            ],
            declarations: [language_page_1.LanguagePage],
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], LanguagePageModule);
    return LanguagePageModule;
}());
exports.LanguagePageModule = LanguagePageModule;
//# sourceMappingURL=language.module.js.map