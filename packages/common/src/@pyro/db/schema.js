"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var db_object_1 = require("./db-object");
require("reflect-metadata");
var _ = tslib_1.__importStar(require("lodash"));
var mongoose_1 = require("mongoose");
var mongooseSchemasKey = 'mongooseSchemas';
var mongooseIndexesKey = 'mongooseIndexes';
function Schema(schema) {
    return function (target, propertyKey) {
        var mongooseSchemas = Reflect.getMetadata(mongooseSchemasKey, target.constructor);
        if (typeof mongooseSchemas === 'undefined' || mongooseSchemas == null) {
            mongooseSchemas = {};
        }
        mongooseSchemas[propertyKey] = schema;
        Reflect.defineMetadata(mongooseSchemasKey, mongooseSchemas, target.constructor);
    };
}
exports.Schema = Schema;
function Index(value) {
    return function (target, propertyKey) {
        var indexesObj = Reflect.getMetadata(mongooseIndexesKey, target.constructor);
        if (typeof indexesObj === 'undefined' || indexesObj == null) {
            indexesObj = {};
        }
        indexesObj[propertyKey] = value;
        Reflect.defineMetadata(mongooseIndexesKey, indexesObj, target.constructor);
    };
}
exports.Index = Index;
function getPreSchema(DBObj) {
    var mongooseSchemas = Reflect.getMetadata(mongooseSchemasKey, DBObj);
    if (mongooseSchemas != null) {
        return mongooseSchemas;
    }
    else {
        return {};
    }
}
exports.getPreSchema = getPreSchema;
function getSchema(DBObj) {
    var preSchema = getPreSchema(DBObj);
    var schema = new mongoose_1.Schema(preSchema, {
        timestamps: {
            createdAt: '_createdAt',
            updatedAt: '_updatedAt',
        },
    });
    var mongooseIndexes = Reflect.getMetadata(mongooseIndexesKey, DBObj);
    if (mongooseIndexes != null) {
        schema.index(mongooseIndexes);
    }
    _.each(preSchema, function (SubType, property) {
        if (SubType.prototype instanceof db_object_1.DBObject) {
            _.each(getSchema(SubType).indexes(), function (index) {
                _.each(index, function (indexValue, indexProperty) {
                    var _a;
                    schema.index((_a = {},
                        _a[property + '.' + indexProperty] = indexValue,
                        _a));
                });
            });
        }
    });
    return schema;
}
exports.getSchema = getSchema;
//# sourceMappingURL=schema.js.map