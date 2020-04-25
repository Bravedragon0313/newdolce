"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var GeoLocation_1 = tslib_1.__importDefault(require("./GeoLocation"));
var db_1 = require("../@pyro/db");
var typeorm_1 = require("typeorm");
var UserOrder = (function (_super) {
    tslib_1.__extends(UserOrder, _super);
    function UserOrder(userOrder) {
        var _this = _super.call(this, userOrder) || this;
        if (userOrder && userOrder.geoLocation) {
            _this.geoLocation = new GeoLocation_1.default(userOrder.geoLocation);
        }
        return _this;
    }
    Object.defineProperty(UserOrder.prototype, "fullAddress", {
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
    ], UserOrder.prototype, "firstName", void 0);
    tslib_1.__decorate([
        db_1.Schema({ type: String, required: false }),
        typeorm_1.Column(),
        tslib_1.__metadata("design:type", String)
    ], UserOrder.prototype, "lastName", void 0);
    tslib_1.__decorate([
        db_1.Schema({ type: String, required: false }),
        typeorm_1.Column(),
        tslib_1.__metadata("design:type", String)
    ], UserOrder.prototype, "image", void 0);
    tslib_1.__decorate([
        db_1.Schema({
            type: String,
            required: false,
            sparse: true,
        }),
        typeorm_1.Column(),
        tslib_1.__metadata("design:type", String)
    ], UserOrder.prototype, "email", void 0);
    tslib_1.__decorate([
        db_1.Schema({ type: String, required: false, select: false }),
        typeorm_1.Column(),
        tslib_1.__metadata("design:type", String)
    ], UserOrder.prototype, "hash", void 0);
    tslib_1.__decorate([
        db_1.Schema(db_1.getSchema(GeoLocation_1.default)),
        tslib_1.__metadata("design:type", GeoLocation_1.default)
    ], UserOrder.prototype, "geoLocation", void 0);
    tslib_1.__decorate([
        db_1.Schema(String),
        typeorm_1.Column(),
        tslib_1.__metadata("design:type", String)
    ], UserOrder.prototype, "apartment", void 0);
    tslib_1.__decorate([
        db_1.Schema({ type: String, required: false }),
        typeorm_1.Column(),
        tslib_1.__metadata("design:type", String)
    ], UserOrder.prototype, "stripeCustomerId", void 0);
    tslib_1.__decorate([
        db_1.Schema([String]),
        tslib_1.__metadata("design:type", Array)
    ], UserOrder.prototype, "devicesIds", void 0);
    tslib_1.__decorate([
        db_1.Schema([String]),
        tslib_1.__metadata("design:type", Array)
    ], UserOrder.prototype, "socialIds", void 0);
    tslib_1.__decorate([
        db_1.Schema(String),
        typeorm_1.Column(),
        tslib_1.__metadata("design:type", String)
    ], UserOrder.prototype, "phone", void 0);
    tslib_1.__decorate([
        db_1.Schema(Boolean),
        typeorm_1.Column(),
        tslib_1.__metadata("design:type", Boolean)
    ], UserOrder.prototype, "isRegistrationCompleted", void 0);
    UserOrder = tslib_1.__decorate([
        db_1.ModelName('UserOrder'),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], UserOrder);
    return UserOrder;
}(db_1.DBObject));
exports.default = UserOrder;
//# sourceMappingURL=UserOrder.js.map