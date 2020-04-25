"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var core_2 = require("@ngx-translate/core");
var environment_1 = require("environments/environment");
var ProductLocalesService = (function () {
    function ProductLocalesService(translate) {
        this.translate = translate;
        this._defaultLang = environment_1.environment.DEFAULT_LANGUAGE;
        this._defaultLocale = environment_1.environment.DEFAULT_LOCALE;
        this._productTransientProperties = {
            title: '',
            description: '',
        };
    }
    Object.defineProperty(ProductLocalesService.prototype, "isServiceStateValid", {
        get: function () {
            return (this._productTransientProperties.title !== '' &&
                this._productTransientProperties.description !== '');
        },
        enumerable: true,
        configurable: true
    });
    ProductLocalesService.prototype.getTranslate = function (member) {
        var _this = this;
        if (member !== null) {
            var productMember = member.find(function (x) {
                return x.locale.startsWith(_this.translate.currentLang);
            }) ||
                member.find(function (x) { return x.locale.startsWith(_this._defaultLang); }) ||
                member[0];
            var value = productMember.value;
            return value;
        }
    };
    ProductLocalesService.prototype.getMemberValue = function (productMember) {
        var valueMember = this._getProductLocaleMember(productMember);
        if (valueMember === undefined) {
            var useDefaultLocale = true;
            valueMember = this._getProductLocaleMember(productMember, useDefaultLocale);
        }
        if (valueMember === undefined) {
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
            var LocaleMember = {
                locale: this.currentLocale,
                value: memberValueToAssign,
            };
            member.push(LocaleMember);
        }
    };
    ProductLocalesService.prototype._getProductLocaleMember = function (productMember, defaultLocale) {
        var _this = this;
        return productMember.find(function (t) {
            return t.locale ===
                (defaultLocale ? _this._defaultLocale : _this.currentLocale);
        });
    };
    ProductLocalesService = tslib_1.__decorate([
        core_1.Injectable({
            providedIn: 'root',
        }),
        tslib_1.__metadata("design:paramtypes", [core_2.TranslateService])
    ], ProductLocalesService);
    return ProductLocalesService;
}());
exports.ProductLocalesService = ProductLocalesService;
//# sourceMappingURL=product-locales.service.js.map