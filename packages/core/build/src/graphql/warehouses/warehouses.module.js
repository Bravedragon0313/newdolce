"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const warehouse_resolver_1 = require("./warehouse.resolver");
const auth_module_1 = require("../../auth/auth.module");
let WarehousesModule = class WarehousesModule {
};
WarehousesModule = tslib_1.__decorate([
    common_1.Module({
        providers: [warehouse_resolver_1.WarehouseResolver],
        imports: [auth_module_1.AuthModule],
    })
], WarehousesModule);
exports.WarehousesModule = WarehousesModule;
//# sourceMappingURL=warehouses.module.js.map