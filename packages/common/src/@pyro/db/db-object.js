"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var schema_1 = require("./schema");
var mongoose_1 = tslib_1.__importDefault(require("mongoose"));
var utils_1 = require("../../utils");
var lodash_1 = tslib_1.__importDefault(require("lodash"));
var typeorm_1 = require("typeorm");
var DBObject = (function () {
    function DBObject(obj) {
        lodash_1.default.assign(this, obj);
        if (mongoose_1.default != null &&
            mongoose_1.default.Types != null &&
            mongoose_1.default.Types.ObjectId != null) {
            if (obj && obj['_id']) {
                this['_id'] = mongoose_1.default.Types.ObjectId.createFromHexString(obj['_id'].toString());
            }
        }
    }
    Object.defineProperty(DBObject.prototype, "createdAt", {
        get: function () {
            return this._createdAt != null ? utils_1.toDate(this._createdAt) : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DBObject.prototype, "updatedAt", {
        get: function () {
            return this._updatedAt != null ? utils_1.toDate(this._updatedAt) : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DBObject.prototype, "id", {
        get: function () {
            return this._id.toString();
        },
        enumerable: true,
        configurable: true
    });
    DBObject.prototype.isEqual = function (p) {
        for (var prop in schema_1.getPreSchema(this.constructor)) {
            if (this[prop] !== p[prop]) {
                return false;
            }
        }
        return true;
    };
    DBObject.modelName = '';
    tslib_1.__decorate([
        typeorm_1.PrimaryColumn(),
        tslib_1.__metadata("design:type", Object)
    ], DBObject.prototype, "_id", void 0);
    tslib_1.__decorate([
        typeorm_1.Column(),
        tslib_1.__metadata("design:type", Object)
    ], DBObject.prototype, "_createdAt", void 0);
    tslib_1.__decorate([
        typeorm_1.Column(),
        tslib_1.__metadata("design:type", Object)
    ], DBObject.prototype, "_updatedAt", void 0);
    return DBObject;
}());
exports.DBObject = DBObject;
//# sourceMappingURL=db-object.js.map