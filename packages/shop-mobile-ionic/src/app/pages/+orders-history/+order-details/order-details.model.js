"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var graphql_tag_1 = tslib_1.__importDefault(require("graphql-tag"));
var order_model_1 = require("../../../components/order/order.model");
exports.OrderDetailsQuery = graphql_tag_1.default(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n\tquery OrderDetailsPageQuery($id: String!) {\n\t\tgetOrder(id: $id) {\n\t\t\t...OrderFragment\n\t\t}\n\t}\n\t", "\n"], ["\n\tquery OrderDetailsPageQuery($id: String!) {\n\t\tgetOrder(id: $id) {\n\t\t\t...OrderFragment\n\t\t}\n\t}\n\t", "\n"])), order_model_1.OrderFragment);
var templateObject_1;
//# sourceMappingURL=order-details.model.js.map