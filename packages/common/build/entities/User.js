"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var GeoLocation_1 = tslib_1.__importDefault(require("./GeoLocation"));
var db_1 = require("../@pyro/db");
var typeorm_1 = require("typeorm");
var User = (function (_super) {
    tslib_1.__extends(User, _super);
    function User(user) {
        var _this = _super.call(this, user) || this;
        if (user && user.geoLocation) {
            _this.geoLocation = new GeoLocation_1.default(user.geoLocation);
        }
        return _this;
    }
    Object.defineProperty(User.prototype, "fullAddress", {
        get: function () {
            return (this.geoLocation.city + ", " + this.geoLocation.streetAddress + " " +
                (this.apartment + "/" + this.geoLocation.house));
        },
        enumerable: true,
        configurable: true
    });
    tslib_1.__decorate([
        db_1.Schema({ type: String, required: false }),
        typeorm_1.Column(),
        tslib_1.__metadata("design:type", String)
    ], User.prototype, "firstName", void 0);
    tslib_1.__decorate([
        db_1.Schema({ type: String, required: false }),
        typeorm_1.Column(),
        tslib_1.__metadata("design:type", String)
    ], User.prototype, "lastName", void 0);
    tslib_1.__decorate([
        db_1.Schema({ type: String, required: false }),
        typeorm_1.Column(),
        tslib_1.__metadata("design:type", String)
    ], User.prototype, "image", void 0);
    tslib_1.__decorate([
        db_1.Schema({
            type: String,
            required: false,
            sparse: true,
            unique: true,
        }),
        typeorm_1.Column(),
        tslib_1.__metadata("design:type", String)
    ], User.prototype, "email", void 0);
    tslib_1.__decorate([
        db_1.Schema({
            type: String,
            required: false,
            select: false,
        }),
        typeorm_1.Column(),
        tslib_1.__metadata("design:type", String)
    ], User.prototype, "hash", void 0);
    tslib_1.__decorate([
        db_1.Schema(db_1.getSchema(GeoLocation_1.default)),
        tslib_1.__metadata("design:type", GeoLocation_1.default)
    ], User.prototype, "geoLocation", void 0);
    tslib_1.__decorate([
        db_1.Schema(String),
        typeorm_1.Column(),
        tslib_1.__metadata("design:type", String)
    ], User.prototype, "apartment", void 0);
    tslib_1.__decorate([
        db_1.Schema({ type: String, required: false }),
        typeorm_1.Column(),
        tslib_1.__metadata("design:type", String)
    ], User.prototype, "stripeCustomerId", void 0);
    tslib_1.__decorate([
        db_1.Schema([String]),
        tslib_1.__metadata("design:type", Array)
    ], User.prototype, "devicesIds", void 0);
    tslib_1.__decorate([
        db_1.Schema([String]),
        tslib_1.__metadata("design:type", Array)
    ], User.prototype, "socialIds", void 0);
    tslib_1.__decorate([
        db_1.Schema(String),
        typeorm_1.Column(),
        tslib_1.__metadata("design:type", String)
    ], User.prototype, "phone", void 0);
    tslib_1.__decorate([
        db_1.Schema(Boolean),
        typeorm_1.Column(),
        tslib_1.__metadata("design:type", Boolean)
    ], User.prototype, "isRegistrationCompleted", void 0);
    tslib_1.__decorate([
        db_1.Types.Boolean(false),
        typeorm_1.Column(),
        tslib_1.__metadata("design:type", Boolean)
    ], User.prototype, "isBanned", void 0);
    tslib_1.__decorate([
        db_1.Types.Boolean(false),
        typeorm_1.Column(),
        tslib_1.__metadata("design:type", Boolean)
    ], User.prototype, "isDeleted", void 0);
    User = tslib_1.__decorate([
        db_1.ModelName('User'),
        typeorm_1.Entity({ name: 'users' }),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], User);
    return User;
}(db_1.DBObject));
exports.default = User;
//# sourceMappingURL=User.js.map