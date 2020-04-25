"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var db_1 = require("../@pyro/db");
var typeorm_1 = require("typeorm");
var Device = (function (_super) {
    tslib_1.__extends(Device, _super);
    function Device() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    tslib_1.__decorate([
        db_1.Schema({ type: String, required: false }),
        typeorm_1.Column(),
        tslib_1.__metadata("design:type", String)
    ], Device.prototype, "channelId", void 0);
    tslib_1.__decorate([
        db_1.Types.String(),
        typeorm_1.Column(),
        tslib_1.__metadata("design:type", String)
    ], Device.prototype, "type", void 0);
    tslib_1.__decorate([
        db_1.Types.String('en-US'),
        typeorm_1.Column(),
        tslib_1.__metadata("design:type", String)
    ], Device.prototype, "language", void 0);
    tslib_1.__decorate([
        db_1.Types.String(),
        typeorm_1.Column(),
        tslib_1.__metadata("design:type", String)
    ], Device.prototype, "uuid", void 0);
    tslib_1.__decorate([
        db_1.Types.Boolean(false),
        typeorm_1.Column(),
        tslib_1.__metadata("design:type", Boolean)
    ], Device.prototype, "isDeleted", void 0);
    Device = tslib_1.__decorate([
        db_1.ModelName('Device'),
        typeorm_1.Entity({ name: 'devices' })
    ], Device);
    return Device;
}(db_1.DBObject));
exports.default = Device;
//# sourceMappingURL=Device.js.map