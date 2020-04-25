"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var db_1 = require("../@pyro/db");
var db_2 = require("@pyro/db");
var typeorm_1 = require("typeorm");
var Admin = (function (_super) {
    tslib_1.__extends(Admin, _super);
    function Admin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    tslib_1.__decorate([
        db_2.Schema({ type: String, unique: true }),
        db_2.Types.String(),
        typeorm_1.Column(),
        tslib_1.__metadata("design:type", String)
    ], Admin.prototype, "email", void 0);
    tslib_1.__decorate([
        db_2.Types.String(),
        typeorm_1.Column(),
        tslib_1.__metadata("design:type", String)
    ], Admin.prototype, "name", void 0);
    tslib_1.__decorate([
        db_2.Schema({ type: String, select: false }),
        db_2.Types.String(),
        typeorm_1.Column(),
        tslib_1.__metadata("design:type", String)
    ], Admin.prototype, "hash", void 0);
    tslib_1.__decorate([
        db_2.Types.String(),
        typeorm_1.Column(),
        tslib_1.__metadata("design:type", String)
    ], Admin.prototype, "pictureUrl", void 0);
    tslib_1.__decorate([
        db_2.Types.Boolean(false),
        typeorm_1.Column(),
        tslib_1.__metadata("design:type", Boolean)
    ], Admin.prototype, "isDeleted", void 0);
    tslib_1.__decorate([
        db_2.Schema({
            type: String,
            required: false,
            validate: new RegExp("^[a-z ,.'-]+$", 'i'),
        }),
        typeorm_1.Column(),
        tslib_1.__metadata("design:type", String)
    ], Admin.prototype, "firstName", void 0);
    tslib_1.__decorate([
        db_2.Schema({
            type: String,
            required: false,
            validate: new RegExp("^[a-z ,.'-]+$", 'i'),
        }),
        typeorm_1.Column(),
        tslib_1.__metadata("design:type", String)
    ], Admin.prototype, "lastName", void 0);
    Admin = tslib_1.__decorate([
        db_1.ModelName('Admin'),
        typeorm_1.Entity({ name: 'admins' })
    ], Admin);
    return Admin;
}(db_1.DBObject));
exports.default = Admin;
//# sourceMappingURL=Admin.js.map