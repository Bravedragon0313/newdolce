"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var invite_router_service_1 = require("@modules/client.common.angular2/routers/invite-router.service");
var store_service_1 = require("./store.service");
var user_auth_router_service_1 = require("@modules/client.common.angular2/routers/user-auth-router.service");
var RegistrationSystem_1 = tslib_1.__importDefault(require("@modules/server.common/enums/RegistrationSystem"));
var ServerSettings = (function () {
    function ServerSettings(inviteRouter, userAuthRouter, store) {
        this.inviteRouter = inviteRouter;
        this.userAuthRouter = userAuthRouter;
        this.store = store;
    }
    ServerSettings.prototype.load = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                return [2, new Promise(function (resolve, reject) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                        var inviteSystem, registrationSystem;
                        return tslib_1.__generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    if (!(!this.store.maintenanceMode &&
                                        Number(this.store.serverConnection) !== 0)) return [3, 3];
                                    return [4, this.inviteRouter.getInvitesSettings()];
                                case 1:
                                    inviteSystem = _a.sent();
                                    return [4, this.userAuthRouter.getRegistrationsSettings()];
                                case 2:
                                    registrationSystem = _a.sent();
                                    this.store.inviteSystem = inviteSystem.isEnabled;
                                    this.store.registrationSystem = registrationSystem.registrationRequiredOnStart
                                        ? RegistrationSystem_1.default.Enabled
                                        : RegistrationSystem_1.default.Disabled;
                                    _a.label = 3;
                                case 3:
                                    resolve(true);
                                    return [2];
                            }
                        });
                    }); })];
            });
        });
    };
    ServerSettings = tslib_1.__decorate([
        core_1.Injectable({
            providedIn: 'root',
        }),
        tslib_1.__metadata("design:paramtypes", [invite_router_service_1.InviteRouter,
            user_auth_router_service_1.UserAuthRouter,
            store_service_1.Store])
    ], ServerSettings);
    return ServerSettings;
}());
exports.ServerSettings = ServerSettings;
//# sourceMappingURL=server-settings.js.map