"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var operators_1 = require("rxjs/operators");
var router_1 = require("../lib/router");
var core_1 = require("@angular/core");
var Invite_1 = tslib_1.__importDefault(require("@modules/server.common/entities/Invite"));
var InviteRouter = (function () {
    function InviteRouter(routerFactory) {
        this.router = routerFactory.create('invite');
    }
    InviteRouter.prototype.get = function (id) {
        var _this = this;
        return this.router
            .runAndObserve('get', id)
            .pipe(operators_1.map(function (invite) { return _this._inviteFactory(invite); }));
    };
    InviteRouter.prototype.getInvitedStreetLocations = function () {
        return this.router.runAndObserve('getInvitedStreetLocations');
    };
    InviteRouter.prototype.getByLocation = function (info) {
        var _this = this;
        return this.router
            .runAndObserve('getByLocation', info)
            .pipe(operators_1.map(function (i) { return _this._inviteFactory(i); }));
    };
    InviteRouter.prototype.getByCode = function (info) {
        var _this = this;
        return this.router
            .runAndObserve('getByCode', info)
            .pipe(operators_1.map(function (i) { return _this._inviteFactory(i); }));
    };
    InviteRouter.prototype.create = function (inviteCreateObject) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var i;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.router.run('create', inviteCreateObject)];
                    case 1:
                        i = _a.sent();
                        return [2, this._inviteFactory(i)];
                }
            });
        });
    };
    InviteRouter.prototype.getInvitesSettings = function () {
        return this.router.run('getInvitesSettings');
    };
    InviteRouter.prototype._inviteFactory = function (invite) {
        return invite == null ? null : new Invite_1.default(invite);
    };
    InviteRouter = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [router_1.RouterFactory])
    ], InviteRouter);
    return InviteRouter;
}());
exports.InviteRouter = InviteRouter;
//# sourceMappingURL=invite-router.service.js.map