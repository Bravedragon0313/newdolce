"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var store_service_1 = require("../../../services/store.service");
var user_router_service_1 = require("@modules/client.common.angular2/routers/user-router.service");
var PrivacyPage = (function () {
    function PrivacyPage(store, userRouter) {
        this.store = store;
        this.userRouter = userRouter;
        this.html$ = this.userRouter.getPrivacy(this.store.userId, this.store.deviceId);
    }
    PrivacyPage = tslib_1.__decorate([
        core_1.Component({
            selector: 'e-cu-privacy',
            templateUrl: './privacy.page.html',
            styleUrls: ['./privacy.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [store_service_1.Store, user_router_service_1.UserRouter])
    ], PrivacyPage);
    return PrivacyPage;
}());
exports.PrivacyPage = PrivacyPage;
//# sourceMappingURL=privacy.page.js.map