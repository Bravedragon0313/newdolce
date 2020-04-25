"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const carrier_resolver_1 = require("./carrier.resolver");
let CarriersModule = class CarriersModule {
};
CarriersModule = tslib_1.__decorate([
    common_1.Module({
        providers: [carrier_resolver_1.CarrierResolver],
    })
], CarriersModule);
exports.CarriersModule = CarriersModule;
//# sourceMappingURL=carriers.module.js.map