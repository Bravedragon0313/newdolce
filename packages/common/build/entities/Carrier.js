"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var CarrierStatus_1 = tslib_1.__importDefault(require("../enums/CarrierStatus"));
var GeoLocation_1 = tslib_1.__importDefault(require("./GeoLocation"));
var db_1 = require("../@pyro/db");
var typeorm_1 = require("typeorm");
var Carrier = (function (_super) {
    tslib_1.__extends(Carrier, _super);
    function Carrier(carrier) {
        var _this = _super.call(this, carrier) || this;
        if (carrier && carrier.geoLocation) {
            _this.geoLocation = new GeoLocation_1.default(carrier.geoLocation);
        }
        return _this;
    }
    Object.defineProperty(Carrier.prototype, "fullName", {
        get: function () {
            return this.firstName + " " + this.lastName;
        },
        enumerable: true,
        configurable: true
    });
    tslib_1.__decorate([
        db_1.Schema({
            type: String,
            required: true,
            validate: new RegExp("^[a-z ,.'-]+$", 'i'),
        }),
        typeorm_1.Column(),
        tslib_1.__metadata("design:type", String)
    ], Carrier.prototype, "firstName", void 0);
    tslib_1.__decorate([
        db_1.Schema({
            type: String,
            required: true,
            validate: new RegExp("^[a-z ,.'-]+$", 'i'),
        }),
        typeorm_1.Column(),
        tslib_1.__metadata("design:type", String)
    ], Carrier.prototype, "lastName", void 0);
    tslib_1.__decorate([
        db_1.Types.Number(0),
        typeorm_1.Column(),
        tslib_1.__metadata("design:type", Number)
    ], Carrier.prototype, "numberOfDeliveries", void 0);
    tslib_1.__decorate([
        db_1.Schema(db_1.getSchema(GeoLocation_1.default)),
        tslib_1.__metadata("design:type", GeoLocation_1.default)
    ], Carrier.prototype, "geoLocation", void 0);
    tslib_1.__decorate([
        db_1.Schema(String),
        typeorm_1.Column(),
        tslib_1.__metadata("design:type", String)
    ], Carrier.prototype, "apartment", void 0);
    tslib_1.__decorate([
        db_1.Types.Boolean(true),
        typeorm_1.Column(),
        tslib_1.__metadata("design:type", Boolean)
    ], Carrier.prototype, "isActive", void 0);
    tslib_1.__decorate([
        db_1.Types.Boolean(false),
        typeorm_1.Column(),
        tslib_1.__metadata("design:type", Boolean)
    ], Carrier.prototype, "isDeleted", void 0);
    tslib_1.__decorate([
        db_1.Types.Number(CarrierStatus_1.default.Offline),
        typeorm_1.Column(),
        tslib_1.__metadata("design:type", Number)
    ], Carrier.prototype, "status", void 0);
    tslib_1.__decorate([
        db_1.Schema({ type: String, unique: true, required: true }),
        typeorm_1.Column(),
        tslib_1.__metadata("design:type", String)
    ], Carrier.prototype, "username", void 0);
    tslib_1.__decorate([
        db_1.Schema({ type: Boolean, required: false }),
        typeorm_1.Column(),
        tslib_1.__metadata("design:type", Boolean)
    ], Carrier.prototype, "shared", void 0);
    tslib_1.__decorate([
        db_1.Schema({ type: String, required: false, select: false }),
        typeorm_1.Column(),
        tslib_1.__metadata("design:type", String)
    ], Carrier.prototype, "hash", void 0);
    tslib_1.__decorate([
        db_1.Types.String(),
        typeorm_1.Column(),
        tslib_1.__metadata("design:type", String)
    ], Carrier.prototype, "phone", void 0);
    tslib_1.__decorate([
        db_1.Schema({
            type: String,
            required: true,
            validate: new RegExp("(http(s?):)s?:?(//[^\"']*.(?:png|jpg|jpeg|gif|png|svg))"),
        }),
        typeorm_1.Column(),
        tslib_1.__metadata("design:type", String)
    ], Carrier.prototype, "logo", void 0);
    tslib_1.__decorate([
        db_1.Schema({
            type: String,
            required: false,
            sparse: true,
            unique: true,
        }),
        typeorm_1.Column(),
        tslib_1.__metadata("design:type", String)
    ], Carrier.prototype, "email", void 0);
    tslib_1.__decorate([
        db_1.Schema([String]),
        typeorm_1.Column(),
        tslib_1.__metadata("design:type", Array)
    ], Carrier.prototype, "skippedOrderIds", void 0);
    tslib_1.__decorate([
        db_1.Types.Number(0),
        typeorm_1.Column(),
        tslib_1.__metadata("design:type", Number)
    ], Carrier.prototype, "deliveriesCountToday", void 0);
    tslib_1.__decorate([
        db_1.Types.Number(0),
        typeorm_1.Column(),
        tslib_1.__metadata("design:type", Number)
    ], Carrier.prototype, "totalDistanceToday", void 0);
    tslib_1.__decorate([
        db_1.Schema([String]),
        tslib_1.__metadata("design:type", Array)
    ], Carrier.prototype, "devicesIds", void 0);
    tslib_1.__decorate([
        db_1.Types.Boolean(false),
        typeorm_1.Column(),
        tslib_1.__metadata("design:type", Boolean)
    ], Carrier.prototype, "isSharedCarrier", void 0);
    Carrier = tslib_1.__decorate([
        db_1.ModelName('Carrier'),
        typeorm_1.Entity({ name: 'carriers' }),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], Carrier);
    return Carrier;
}(db_1.DBObject));
exports.default = Carrier;
//# sourceMappingURL=Carrier.js.map