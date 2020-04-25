"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const warehouses_orders_resolver_1 = require("./warehouses-orders.resolver");
let WarehousesOrdersModule = class WarehousesOrdersModule {
};
WarehousesOrdersModule = tslib_1.__decorate([
    common_1.Module({
        providers: [warehouses_orders_resolver_1.WarehouseOrdersResolver],
        imports: [],
    })
], WarehousesOrdersModule);
exports.WarehousesOrdersModule = WarehousesOrdersModule;
//# sourceMappingURL=warehouses-orders.module.js.map