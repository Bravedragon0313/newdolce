"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var ReplacePipe = (function () {
    function ReplacePipe() {
    }
    ReplacePipe.prototype.transform = function (value, searchValue, replaceValue) {
        if (typeof value !== typeof 'string' ||
            typeof searchValue !== typeof 'string' ||
            typeof replaceValue !== typeof 'string') {
            throw Error('All pipe parameters should be strings!');
        }
        return value.replace(new RegExp(searchValue, 'g'), replaceValue);
    };
    ReplacePipe = tslib_1.__decorate([
        core_1.Pipe({ name: 'myReplacePipe' })
    ], ReplacePipe);
    return ReplacePipe;
}());
exports.ReplacePipe = ReplacePipe;
//# sourceMappingURL=replace.pipe.js.map