"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var routes = [
    {
        path: 'about',
        loadChildren: function () {
            return Promise.resolve().then(function () { return tslib_1.__importStar(require('./+about/about.module')); }).then(function (m) { return m.AboutPageModule; });
        },
    },
    {
        path: 'terms-of-use',
        loadChildren: function () {
            return Promise.resolve().then(function () { return tslib_1.__importStar(require('./+terms-of-use/terms-of-use.module')); }).then(function (m) { return m.TermsOfUsePageModule; });
        },
    },
];
var InfoModule = (function () {
    function InfoModule() {
    }
    InfoModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule],
        })
    ], InfoModule);
    return InfoModule;
}());
exports.InfoModule = InfoModule;
//# sourceMappingURL=info.module.js.map