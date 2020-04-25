"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const device_resolver_1 = require("./device.resolver");
let DevicesModule = class DevicesModule {
};
DevicesModule = tslib_1.__decorate([
    common_1.Module({
        providers: [device_resolver_1.DeviceResolver],
    })
], DevicesModule);
exports.DevicesModule = DevicesModule;
//# sourceMappingURL=devices.module.js.map