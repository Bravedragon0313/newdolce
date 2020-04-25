"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const language_1 = require("graphql/language");
exports.DateScalar = new graphql_1.GraphQLScalarType({
    name: 'Date',
    parseValue(value) {
        return new Date(value);
    },
    serialize(value) {
        return value.getTime();
    },
    parseLiteral(ast) {
        if (ast.kind === language_1.Kind.INT) {
            return new Date(ast.value);
        }
        return null;
    },
});
//# sourceMappingURL=date.type.graphql.js.map