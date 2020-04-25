"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var user_router_service_1 = require("@modules/client.common.angular2/routers/user-router.service");
var store_service_1 = require("../../../services/store.service");
var AboutPage = (function () {
    function AboutPage(store, userRouter) {
        this.store = store;
        this.userRouter = userRouter;
        this.html$ = this.userRouter.getAboutUs(this.store.userId, this.store.deviceId);
    }
    AboutPage = tslib_1.__decorate([
        core_1.Component({
            selector: 'e-cu-about',
            templateUrl: './about.page.html',
            styleUrls: ['./about.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [store_service_1.Store, user_router_service_1.UserRouter])
    ], AboutPage);
    return AboutPage;
}());
exports.AboutPage = AboutPage;
//# sourceMappingURL=about.page.js.map