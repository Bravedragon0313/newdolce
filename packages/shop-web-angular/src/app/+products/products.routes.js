"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var product_details_1 = require("./product-details");
var products_component_1 = require("./products.component");
exports.routes = [
    {
        path: '',
        component: products_component_1.ProductsComponent,
    },
    {
        path: 'details/:warehouseId/:productId',
        component: product_details_1.ProductDetailsComponent,
    },
];
//# sourceMappingURL=products.routes.js.map