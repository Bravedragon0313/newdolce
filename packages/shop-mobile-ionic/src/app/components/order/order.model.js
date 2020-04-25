"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var graphql_tag_1 = tslib_1.__importDefault(require("graphql-tag"));
var product_model_1 = require("./product/product.model");
exports.OrderFragment = graphql_tag_1.default(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n\tfragment OrderFragment on Order {\n\t\tid\n\t\tdeliveryTime\n\t\twarehouseId\n\t\tdeliveryTime\n\t\tcreatedAt\n\t\tstatus\n\t\tuser {\n\t\t\tid\n\t\t\tgeoLocation {\n\t\t\t\tcountryName\n\t\t\t\tcountryId\n\t\t\t\tstreetAddress\n\t\t\t\thouse\n\t\t\t\tpostcode\n\t\t\t\thouse\n\t\t\t\tcity\n\t\t\t}\n\t\t}\n\t\twarehouse {\n\t\t\tid\n\t\t\tlogo\n\t\t}\n\t\tproducts {\n\t\t\t...OrderProductFragment\n\t\t}\n\t}\n\t", "\n"], ["\n\tfragment OrderFragment on Order {\n\t\tid\n\t\tdeliveryTime\n\t\twarehouseId\n\t\tdeliveryTime\n\t\tcreatedAt\n\t\tstatus\n\t\tuser {\n\t\t\tid\n\t\t\tgeoLocation {\n\t\t\t\tcountryName\n\t\t\t\tcountryId\n\t\t\t\tstreetAddress\n\t\t\t\thouse\n\t\t\t\tpostcode\n\t\t\t\thouse\n\t\t\t\tcity\n\t\t\t}\n\t\t}\n\t\twarehouse {\n\t\t\tid\n\t\t\tlogo\n\t\t}\n\t\tproducts {\n\t\t\t...OrderProductFragment\n\t\t}\n\t}\n\t", "\n"])), product_model_1.OrderProductFragment);
var templateObject_1;
//# sourceMappingURL=order.model.js.map