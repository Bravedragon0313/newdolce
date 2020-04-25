"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var operators_1 = require("rxjs/operators");
var router_1 = require("../lib/router");
var core_1 = require("@angular/core");
var InviteRequest_1 = tslib_1.__importDefault(require("@modules/server.common/entities/InviteRequest"));
var InviteRequestRouter = (function () {
    function InviteRequestRouter(routerFactory) {
        this.router = routerFactory.create('invite-request');
    }
    InviteRequestRouter.prototype.get = function (id) {
        var _this = this;
        return this.router
            .runAndObserve('get', id)
            .pipe(operators_1.map(function (o) { return _this._inviteRequestFactory(o); }));
    };
    InviteRequestRouter.prototype.create = function (inviteRequest) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var o;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.router.run('create', inviteRequest)];
                    case 1:
                        o = _a.sent();
                        return [2, this._inviteRequestFactory(o)];
                }
            });
        });
    };
    InviteRequestRouter.prototype._inviteRequestFactory = function (inviteRequest) {
        return inviteRequest == null ? null : new InviteRequest_1.default(inviteRequest);
    };
    InviteRequestRouter = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [router_1.RouterFactory])
    ], InviteRequestRouter);
    return InviteRequestRouter;
}());
exports.InviteRequestRouter = InviteRequestRouter;
//# sourceMappingURL=invite-request-router.service.js.map