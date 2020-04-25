"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const warehouse_products_resolver_1 = require("./warehouse-products.resolver");
let WarehousesProductsModule = class WarehousesProductsModule {
};
WarehousesProductsModule = tslib_1.__decorate([
    common_1.Module({
        providers: [warehouse_products_resolver_1.WarehouseProductsResolver],
        imports: [],
    })
], WarehousesProductsModule);
exports.WarehousesProductsModule = WarehousesProductsModule;
//# sourceMappingURL=warehouses-products.modules.js.map