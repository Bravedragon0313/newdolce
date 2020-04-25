"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const inversify_1 = require("inversify");
const io_1 = require("@pyro/io");
const env_1 = require("../env");
let ConfigService = class ConfigService {
    get(key) {
        return env_1.env[key];
    }
    get Env() {
        return env_1.env;
    }
};
ConfigService = tslib_1.__decorate([
    inversify_1.injectable(),
    io_1.routerName('configService')
], ConfigService);
exports.ConfigService = ConfigService;
//# sourceMappingURL=config.service.js.map