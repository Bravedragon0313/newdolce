"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const warehouses_carriers_resolver_1 = require("./warehouses-carriers.resolver");
let WarehousesCarriersModule = class WarehousesCarriersModule {
};
WarehousesCarriersModule = tslib_1.__decorate([
    common_1.Module({
        providers: [warehouses_carriers_resolver_1.WarehouseCarriersResolver],
        imports: [],
    })
], WarehousesCarriersModule);
exports.WarehousesCarriersModule = WarehousesCarriersModule;
//# sourceMappingURL=warehouses-carriers.module.js.map