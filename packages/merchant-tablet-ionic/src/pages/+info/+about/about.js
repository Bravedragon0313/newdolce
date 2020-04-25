"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var user_router_service_1 = require("@modules/client.common.angular2/routers/user-router.service");
var store_service_1 = require("services/store.service");
var environment_1 = require("environments/environment");
var AboutPage = (function () {
    function AboutPage(userRouter, store) {
        this.userRouter = userRouter;
        this.store = store;
        this._getAboutHtml();
        this.appVersion = environment_1.environment.APP_VERSION;
    }
    Object.defineProperty(AboutPage.prototype, "userId", {
        get: function () {
            return localStorage.getItem('_userId');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AboutPage.prototype, "deviceId", {
        get: function () {
            return localStorage.getItem('_deviceId');
        },
        enumerable: true,
        configurable: true
    });
    AboutPage.prototype._getAboutHtml = function () {
        var _this = this;
        var deviceId = this.deviceId;
        if (this.userId && deviceId) {
            this.s$ = this.userRouter
                .getAboutUs(this.userId, deviceId)
                .subscribe(function (html) {
                _this.aboutHtml = html;
            });
        }
    };
    AboutPage.prototype.ngOnDestroy = function () {
        if (this.s$) {
            this.s$.unsubscribe();
        }
    };
    AboutPage = tslib_1.__decorate([
        core_1.Component({
            selector: 'page-about',
            templateUrl: 'about.html',
        }),
        tslib_1.__metadata("design:paramtypes", [user_router_service_1.UserRouter, store_service_1.Store])
    ], AboutPage);
    return AboutPage;
}());
exports.AboutPage = AboutPage;
//# sourceMappingURL=about.js.map