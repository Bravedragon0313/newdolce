"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var store_service_1 = require("../../services/store.service");
var core_2 = require("@ngx-translate/core");
var LanguagePage = (function () {
    function LanguagePage(store, location, translate) {
        this.store = store;
        this.location = location;
        this.translate = translate;
    }
    Object.defineProperty(LanguagePage.prototype, "language", {
        get: function () {
            return this.store.language;
        },
        set: function (lang) {
            this.store.language = lang;
            this.goBack();
        },
        enumerable: true,
        configurable: true
    });
    LanguagePage.prototype.goBack = function () {
        this.location.back();
    };
    LanguagePage = tslib_1.__decorate([
        core_1.Component({
            selector: 'e-cu-language',
            templateUrl: './language.page.html',
            styleUrls: ['./language.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [store_service_1.Store,
            common_1.Location,
            core_2.TranslateService])
    ], LanguagePage);
    return LanguagePage;
}());
exports.LanguagePage = LanguagePage;
//# sourceMappingURL=language.page.js.map