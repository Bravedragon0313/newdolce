"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const product_controller_1 = require("./product.controller");
let ProductModule = class ProductModule {
};
ProductModule = tslib_1.__decorate([
    common_1.Module({
        controllers: [product_controller_1.ProductController],
    })
], ProductModule);
exports.ProductModule = ProductModule;
//# sourceMappingURL=product.module.js.map