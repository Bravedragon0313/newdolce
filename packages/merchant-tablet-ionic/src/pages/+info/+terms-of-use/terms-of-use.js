"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var user_router_service_1 = require("@modules/client.common.angular2/routers/user-router.service");
var store_service_1 = require("services/store.service");
var TermsOfUsePage = (function () {
    function TermsOfUsePage(userRouter, store) {
        this.userRouter = userRouter;
        this.store = store;
        this.useTermsHtml = '<h1>Loading...</h1>';
    }
    TermsOfUsePage.prototype.ngOnInit = function () {
        var _this = this;
        this.userRouter
            .getTermsOfUse(this._warehouseId, this._deviceId)
            .subscribe(function (innerHtml) {
            _this.useTermsHtml = innerHtml;
        }, function (err) {
            console.log(err);
        });
    };
    Object.defineProperty(TermsOfUsePage.prototype, "_warehouseId", {
        get: function () {
            return localStorage.getItem('_warehouseId');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TermsOfUsePage.prototype, "_deviceId", {
        get: function () {
            return localStorage.getItem('_deviceId');
        },
        enumerable: true,
        configurable: true
    });
    TermsOfUsePage = tslib_1.__decorate([
        core_1.Component({
            selector: 'page-terms-of-use',
            templateUrl: 'terms-of-use.html',
        }),
        tslib_1.__metadata("design:paramtypes", [user_router_service_1.UserRouter, store_service_1.Store])
    ], TermsOfUsePage);
    return TermsOfUsePage;
}());
exports.TermsOfUsePage = TermsOfUsePage;
//# sourceMappingURL=terms-of-use.js.map