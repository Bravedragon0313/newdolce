"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var user_router_service_1 = require("@modules/client.common.angular2/routers/user-router.service");
var store_service_1 = require("../../../services/store.service");
var TermsOfUsePage = (function () {
    function TermsOfUsePage(store, userRouter) {
        this.store = store;
        this.userRouter = userRouter;
        this.html$ = this.userRouter.getTermsOfUse(this.store.userId, this.store.deviceId);
    }
    TermsOfUsePage = tslib_1.__decorate([
        core_1.Component({
            selector: 'e-cu-terms-of-use',
            templateUrl: './terms-of-use.page.html',
            styleUrls: ['./terms-of-use.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [store_service_1.Store, user_router_service_1.UserRouter])
    ], TermsOfUsePage);
    return TermsOfUsePage;
}());
exports.TermsOfUsePage = TermsOfUsePage;
//# sourceMappingURL=terms-of-use.page.js.map