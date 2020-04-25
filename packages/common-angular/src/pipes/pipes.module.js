"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var safe_pipe_1 = require("./safe.pipe");
var replace_pipe_1 = require("./replace.pipe");
var capitalize_pipe_1 = require("./capitalize.pipe");
var plural_pipe_1 = require("./plural.pipe");
var round_pipe_1 = require("./round.pipe");
var timing_pipe_1 = require("./timing.pipe");
var number_with_commas_pipe_1 = require("./number-with-commas.pipe");
var PipesModule = (function () {
    function PipesModule() {
    }
    PipesModule = tslib_1.__decorate([
        core_1.NgModule({
            exports: [
                safe_pipe_1.SafePipe,
                replace_pipe_1.ReplacePipe,
                capitalize_pipe_1.CapitalizePipe,
                plural_pipe_1.PluralPipe,
                round_pipe_1.RoundPipe,
                timing_pipe_1.TimingPipe,
                number_with_commas_pipe_1.NumberWithCommasPipe,
            ],
            imports: [],
            declarations: [
                safe_pipe_1.SafePipe,
                replace_pipe_1.ReplacePipe,
                capitalize_pipe_1.CapitalizePipe,
                plural_pipe_1.PluralPipe,
                round_pipe_1.RoundPipe,
                timing_pipe_1.TimingPipe,
                number_with_commas_pipe_1.NumberWithCommasPipe,
            ],
        })
    ], PipesModule);
    return PipesModule;
}());
exports.PipesModule = PipesModule;
//# sourceMappingURL=pipes.module.js.map