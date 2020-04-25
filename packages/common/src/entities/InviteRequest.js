"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var db_1 = require("../@pyro/db");
var GeoLocation_1 = tslib_1.__importDefault(require("./GeoLocation"));
var typeorm_1 = require("typeorm");
var InviteRequest = (function (_super) {
    tslib_1.__extends(InviteRequest, _super);
    function InviteRequest(inviteRequest) {
        var _this = _super.call(this, inviteRequest) || this;
        if (inviteRequest && inviteRequest.geoLocation) {
            _this.geoLocation = new GeoLocation_1.default(inviteRequest.geoLocation);
        }
        return _this;
    }
    InviteRequest.prototype.toAddressString = function () {
        if (!this.geoLocation) {
            return null;
        }
        var address = this.geoLocation.streetAddress + " " + this.geoLocation.house;
        if (this.apartment) {
            address += "/" + this.apartment;
        }
        address += ", " + this.geoLocation.city;
        return address;
    };
    InviteRequest.prototype.toEnterByLocationToken = function () {
        if (this.geoLocation.house != null &&
            this.geoLocation.streetAddress != null &&
            this.geoLocation.city != null &&
            this.geoLocation.countryId != null) {
            return {
                apartment: this.apartment,
                house: this.geoLocation.house,
                streetAddress: this.geoLocation.streetAddress,
                city: this.geoLocation.city,
                postcode: this.geoLocation.postcode,
                countryId: this.geoLocation.countryId,
            };
        }
        else {
            throw new Error('GeoLocation is not full!');
        }
    };
    tslib_1.__decorate([
        db_1.Schema(db_1.getSchema(GeoLocation_1.default)),
        tslib_1.__metadata("design:type", GeoLocation_1.default)
    ], InviteRequest.prototype, "geoLocation", void 0);
    tslib_1.__decorate([
        db_1.Schema({ required: false, type: String }),
        typeorm_1.Column(),
        tslib_1.__metadata("design:type", String)
    ], InviteRequest.prototype, "deviceId", void 0);
    tslib_1.__decorate([
        db_1.Types.String(),
        typeorm_1.Column(),
        tslib_1.__metadata("design:type", String)
    ], InviteRequest.prototype, "apartment", void 0);
    tslib_1.__decorate([
        db_1.Schema({ required: false, type: Boolean, default: false }),
        typeorm_1.Column(),
        tslib_1.__metadata("design:type", Boolean)
    ], InviteRequest.prototype, "isManual", void 0);
    tslib_1.__decorate([
        db_1.Types.Boolean(false),
        typeorm_1.Column(),
        tslib_1.__metadata("design:type", Boolean)
    ], InviteRequest.prototype, "isDeleted", void 0);
    tslib_1.__decorate([
        db_1.Types.Boolean(false),
        typeorm_1.Column(),
        tslib_1.__metadata("design:type", Boolean)
    ], InviteRequest.prototype, "isInvited", void 0);
    tslib_1.__decorate([
        db_1.Schema({ type: Date, required: false }),
        typeorm_1.Column(),
        tslib_1.__metadata("design:type", Date)
    ], InviteRequest.prototype, "invitedDate", void 0);
    InviteRequest = tslib_1.__decorate([
        db_1.ModelName('InviteRequest'),
        typeorm_1.Entity({ name: 'inviterequests' }),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], InviteRequest);
    return InviteRequest;
}(db_1.DBObject));
exports.default = InviteRequest;
//# sourceMappingURL=InviteRequest.js.map