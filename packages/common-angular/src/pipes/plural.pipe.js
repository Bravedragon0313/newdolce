"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var PluralPipe = (function () {
    function PluralPipe() {
    }
    PluralPipe.prototype.transform = function (input, label, pluralLabel) {
        if (pluralLabel === void 0) { pluralLabel = ''; }
        input = input || 0;
        return input === 1
            ? input + " " + label
            : pluralLabel
                ? input + " " + pluralLabel
                : input + " " + label + "s";
    };
    PluralPipe = tslib_1.__decorate([
        core_1.Pipe({ name: 'ngxPlural' })
    ], PluralPipe);
    return PluralPipe;
}());
exports.PluralPipe = PluralPipe;
//# sourceMappingURL=plural.pipe.js.map