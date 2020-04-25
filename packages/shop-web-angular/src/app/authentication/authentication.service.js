"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var invite_router_service_1 = require("@modules/client.common.angular2/routers/invite-router.service");
var user_router_service_1 = require("@modules/client.common.angular2/routers/user-router.service");
var AuthenticationService = (function () {
    function AuthenticationService(userRouter, inviteRouter) {
        this.userRouter = userRouter;
        this.inviteRouter = inviteRouter;
    }
    AuthenticationService.prototype.login = function (invite) { };
    AuthenticationService = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [user_router_service_1.UserRouter,
            invite_router_service_1.InviteRouter])
    ], AuthenticationService);
    return AuthenticationService;
}());
exports.AuthenticationService = AuthenticationService;
//# sourceMappingURL=authentication.service.js.map