"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var GeoLocation_1 = tslib_1.__importDefault(require("./GeoLocation"));
var db_1 = require("../@pyro/db");
var typeorm_1 = require("typeorm");
var Invite = (function (_super) {
    tslib_1.__extends(Invite, _super);
    function Invite(invite) {
        var _this = _super.call(this, invite) || this;
        if (invite && invite.geoLocation) {
            _this.geoLocation = new GeoLocation_1.default(invite.geoLocation);
        }
        return _this;
    }
    Invite.prototype.toInviteRequestFindObject = function () {
        return {
            geoLocation: this.geoLocation,
            apartment: this.apartment,
        };
    };
    tslib_1.__decorate([
        db_1.Types.String(),
        typeorm_1.Column(),
        tslib_1.__metadata("design:type", String)
    ], Invite.prototype, "code", void 0);
    tslib_1.__decorate([
        db_1.Types.String(),
        typeorm_1.Column(),
        tslib_1.__metadata("design:type", String)
    ], Invite.prototype, "apartment", void 0);
    tslib_1.__decorate([
        db_1.Schema(db_1.getSchema(GeoLocation_1.default)),
        tslib_1.__metadata("design:type", GeoLocation_1.default)
    ], Invite.prototype, "geoLocation", void 0);
    tslib_1.__decorate([
        db_1.Types.Boolean(false),
        typeorm_1.Column(),
        tslib_1.__metadata("design:type", Boolean)
    ], Invite.prototype, "isDeleted", void 0);
    Invite = tslib_1.__decorate([
        db_1.ModelName('Invite'),
        typeorm_1.Entity({ name: 'invites' }),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], Invite);
    return Invite;
}(db_1.DBObject));
exports.default = Invite;
//# sourceMappingURL=Invite.js.map