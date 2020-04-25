"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const admin_resolver_1 = require("./admin.resolver");
let AdminsModule = class AdminsModule {
};
AdminsModule = tslib_1.__decorate([
    common_1.Module({
        providers: [admin_resolver_1.AdminResolver],
    })
], AdminsModule);
exports.AdminsModule = AdminsModule;
//# sourceMappingURL=admins.module.js.map