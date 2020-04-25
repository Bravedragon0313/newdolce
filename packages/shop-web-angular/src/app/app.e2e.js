"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
require("jasmine");
var protractor_1 = require("protractor");
require("tslib");
describe('App', function () {
    beforeEach(function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, protractor_1.browser.get('/')];
                case 1:
                    _a.sent();
                    return [2];
            }
        });
    }); });
    it('should have a title', function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var subject, result;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, protractor_1.browser.getTitle()];
                case 1:
                    subject = _a.sent();
                    result = '...';
                    expect(subject).toEqual(result);
                    return [2];
            }
        });
    }); });
    it('should have header', function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var subject, result;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, protractor_1.element(protractor_1.by.css('h1')).isPresent()];
                case 1:
                    subject = _a.sent();
                    result = true;
                    expect(subject).toEqual(result);
                    return [2];
            }
        });
    }); });
    it('should have <home>', function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var subject, result;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, protractor_1.element(protractor_1.by.css('app home')).isPresent()];
                case 1:
                    subject = _a.sent();
                    result = true;
                    expect(subject).toEqual(result);
                    return [2];
            }
        });
    }); });
    it('should have buttons', function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var subject, result;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, protractor_1.element(protractor_1.by.css('button')).getText()];
                case 1:
                    subject = _a.sent();
                    result = 'Submit Value';
                    expect(subject).toEqual(result);
                    return [2];
            }
        });
    }); });
});
//# sourceMappingURL=app.e2e.js.map