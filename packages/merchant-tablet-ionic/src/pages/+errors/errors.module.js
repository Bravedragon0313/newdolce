"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var routes = [
    {
        path: 'connection-lost',
        loadChildren: function () {
            return Promise.resolve().then(function () { return tslib_1.__importStar(require('./+connection-lost/connection-lost.module')); }).then(function (m) { return m.ConnectionLostPageModule; });
        },
    },
];
var ErrorsModule = (function () {
    function ErrorsModule() {
    }
    ErrorsModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule],
        })
    ], ErrorsModule);
    return ErrorsModule;
}());
exports.ErrorsModule = ErrorsModule;
//# sourceMappingURL=errors.module.js.map