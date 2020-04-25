"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const carriers_orders_resolver_1 = require("./carriers-orders.resolver");
let CarriersOrdersModule = class CarriersOrdersModule {
};
CarriersOrdersModule = tslib_1.__decorate([
    common_1.Module({
        providers: [carriers_orders_resolver_1.CarriersOrdersResolver],
    })
], CarriersOrdersModule);
exports.CarriersOrdersModule = CarriersOrdersModule;
//# sourceMappingURL=carriers-orders.module.js.map