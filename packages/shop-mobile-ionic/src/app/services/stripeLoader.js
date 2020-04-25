"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var StripeLoader = (function () {
    function StripeLoader() {
        this.load();
    }
    StripeLoader.prototype.load = function () {
        var node = document.createElement('script');
        node.src = "https://checkout.stripe.com/checkout.js";
        node.type = 'text/javascript';
        document.getElementsByTagName('head')[0].appendChild(node);
    };
    StripeLoader = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [])
    ], StripeLoader);
    return StripeLoader;
}());
exports.StripeLoader = StripeLoader;
//# sourceMappingURL=stripeLoader.js.map