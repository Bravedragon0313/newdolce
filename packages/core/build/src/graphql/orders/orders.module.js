"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const order_resolver_1 = require("./order.resolver");
let OrdersModule = class OrdersModule {
};
OrdersModule = tslib_1.__decorate([
    common_1.Module({
        providers: [order_resolver_1.OrderResolver],
    })
], OrdersModule);
exports.OrdersModule = OrdersModule;
//# sourceMappingURL=orders.module.js.map