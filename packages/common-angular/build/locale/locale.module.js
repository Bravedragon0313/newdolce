"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var product_locales_service_1 = require("./product-locales.service");
var core_2 = require("@ngx-translate/core");
var LocaleModule = (function () {
    function LocaleModule() {
    }
    LocaleModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [
                core_2.TranslateModule.forRoot({
                    loader: { provide: core_2.TranslateLoader, useClass: core_2.TranslateFakeLoader },
                }),
            ],
            providers: [product_locales_service_1.ProductLocalesService, core_2.TranslateService],
        })
    ], LocaleModule);
    return LocaleModule;
}());
exports.LocaleModule = LocaleModule;
//# sourceMappingURL=locale.module.js.map