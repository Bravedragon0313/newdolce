"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var AboutComponent = (function () {
    function AboutComponent(route) {
        this.route = route;
    }
    AboutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (data) {
            _this.localState = data.yourData;
        });
        console.log('hello `About` component');
        this.asyncDataWithWebpack();
    };
    AboutComponent.prototype.asyncDataWithWebpack = function () {
        var _this = this;
        setTimeout(function () {
            Promise.resolve().then(function () { return tslib_1.__importStar(require('../../assets/mock-data/mock-data.json')); }).then(function (json) {
                console.log('async mockData', json);
                _this.localState = json;
            });
        });
    };
    AboutComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'about',
            styles: [""],
            template: "\n\t\t<h1>About</h1>\n\t\t<div>\n\t\t\tFor hot module reloading run\n\t\t\t<pre>npm run start:hmr</pre>\n\t\t</div>\n\t\t<div><h3>patrick@tipe.io</h3></div>\n\t\t<pre>this.localState = {{ localState | json }}</pre>\n\t",
        }),
        tslib_1.__metadata("design:paramtypes", [router_1.ActivatedRoute])
    ], AboutComponent);
    return AboutComponent;
}());
exports.AboutComponent = AboutComponent;
//# sourceMappingURL=about.component.js.map