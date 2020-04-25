"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var core_2 = require("@ngx-translate/core");
var ProductTransientViewModel = (function () {
    function ProductTransientViewModel() {
        this.title = '';
        this.description = '';
    }
    return ProductTransientViewModel;
}());
var ProductLocalesService = (function () {
    function ProductLocalesService(_translateService) {
        this._translateService = _translateService;
        this._defaultLang = 'en-US';
        this._defaultLocale = 'en-US';
        this._productTransientProperties = new ProductTransientViewModel();
    }
    Object.defineProperty(ProductLocalesService.prototype, "isServiceStateValid", {
        get: function () {
            return (this._productTransientProperties.title !== '' &&
                this._productTransientProperties.description !== '');
        },
        enumerable: true,
        configurable: true
    });
    ProductLocalesService.prototype.getTranslate = function (member, langChoice) {
        var _this = this;
        if (!member || member.length <= 0) {
            return '';
        }
        var productMember = member.find(function (x) {
            return x.locale.startsWith(langChoice || _this._translateService.currentLang);
        }) ||
            member.find(function (x) { return x.locale.startsWith(_this._defaultLang); }) ||
            member[0];
        var value = productMember.value || productMember['url'];
        return value;
    };
    ProductLocalesService.prototype.getMemberValue = function (productMember) {
        var valueMember = this._getProductLocaleMember(productMember);
        if (valueMember === undefined) {
            var useDefaultLocale = true;
            valueMember = this._getProductLocaleMember(productMember, useDefaultLocale);
        }
        if (valueMember === undefined && productMember) {
            valueMember = productMember[0];
        }
        return valueMember ? valueMember.value : '';
    };
    ProductLocalesService.prototype.setMemberValue = function (memberKey, memberValue) {
        this._productTransientProperties[memberKey] = memberValue;
    };
    ProductLocalesService.prototype.assignPropertyValue = function (member, memberKey) {
        var _this = this;
        var memberValue = member.find(function (m) { return m.locale === _this.currentLocale; });
        var memberValueToAssign = this._productTransientProperties[memberKey];
        if (memberValue !== undefined) {
            memberValue.value = memberValueToAssign;
        }
        else {
            var locale = {
                locale: this.currentLocale,
                value: memberValueToAssign,
            };
            member.push(locale);
        }
    };
    ProductLocalesService.prototype.takeSelectedLang = function (lang) {
        var translateLang = this._defaultLocale;
        switch (lang) {
            case 'en-US':
                translateLang = 'en-US';
                break;
            case 'he-IL':
                translateLang = 'he-IL';
                break;
            case 'ru-RU':
                translateLang = 'ru-RU';
                break;
            case 'bg-BG':
                translateLang = 'bg-BG';
            case 'es-ES':
                translateLang = 'es-ES';
                break;
        }
        return translateLang;
    };
    ProductLocalesService.prototype._getProductLocaleMember = function (productMember, defaultLocale) {
        var _this = this;
        if (productMember) {
            return productMember.find(function (t) {
                return t.locale ===
                    (defaultLocale ? _this._defaultLocale : _this.currentLocale);
            });
        }
    };
    ProductLocalesService = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [core_2.TranslateService])
    ], ProductLocalesService);
    return ProductLocalesService;
}());
exports.ProductLocalesService = ProductLocalesService;
//# sourceMappingURL=product-locales.service.js.map