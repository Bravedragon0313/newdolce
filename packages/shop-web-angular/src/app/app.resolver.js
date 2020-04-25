"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var DataResolver = (function () {
    function DataResolver() {
    }
    DataResolver.prototype.resolve = function (route, state) {
        return rxjs_1.of({ res: 'I am data' });
    };
    DataResolver = tslib_1.__decorate([
        core_1.Injectable()
    ], DataResolver);
    return DataResolver;
}());
exports.DataResolver = DataResolver;
exports.APP_RESOLVER_PROVIDERS = [DataResolver];
//# sourceMappingURL=app.resolver.js.map