"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var schema_1 = require("./schema");
exports.Types = {
    String: function (s) {
        if (s == null) {
            return schema_1.Schema({ type: String, required: true });
        }
        else {
            return schema_1.Schema({ type: String, default: s });
        }
    },
    Number: function (n) {
        if (n == null) {
            return schema_1.Schema({ type: Number, required: true });
        }
        else {
            return schema_1.Schema({ type: Number, default: n });
        }
    },
    Boolean: function (b) {
        if (b == null) {
            return schema_1.Schema({ type: Boolean, required: true });
        }
        else {
            return schema_1.Schema({ type: Boolean, default: b });
        }
    },
    Date: function (d) {
        if (d == null) {
            return schema_1.Schema({ type: Date, required: true });
        }
        else {
            return schema_1.Schema({ type: Date, default: d });
        }
    },
    Ref: function (Type, options) {
        if (options === void 0) { options = {}; }
        return function (target, propertyKey) {
            var multi = Array.isArray(Type);
            var op = tslib_1.__assign({}, options);
            op.type = String;
            op.ref = (multi ? Type[0] : Type).modelName;
            schema_1.Schema(multi ? [op] : op)(target, propertyKey);
        };
    },
};
//# sourceMappingURL=types.js.map