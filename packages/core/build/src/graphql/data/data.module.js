"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const data_resolver_1 = require("./data.resolver");
let DataModule = class DataModule {
};
DataModule = tslib_1.__decorate([
    common_1.Module({
        providers: [data_resolver_1.DataResolver],
    })
], DataModule);
exports.DataModule = DataModule;
//# sourceMappingURL=data.module.js.map