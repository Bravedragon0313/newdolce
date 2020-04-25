"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var RoundPipe = (function () {
    function RoundPipe() {
    }
    RoundPipe.prototype.transform = function (input) {
        return Math.round(input);
    };
    RoundPipe = tslib_1.__decorate([
        core_1.Pipe({ name: 'ngxRound' })
    ], RoundPipe);
    return RoundPipe;
}());
exports.RoundPipe = RoundPipe;
//# sourceMappingURL=round.pipe.js.map