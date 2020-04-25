"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const env_1 = require("./env");
const v8_1 = tslib_1.__importDefault(require("v8"));
console.log('Setting NodeJS Max memory usage limit to ' + env_1.env.WEB_MEMORY);
v8_1.default.setFlagsFromString('--max_old_space_size=' + env_1.env.WEB_MEMORY);
require("reflect-metadata");
const source_map_support_1 = tslib_1.__importDefault(require("source-map-support"));
const module_alias_1 = tslib_1.__importDefault(require("module-alias"));
try {
    if (global.v8debug) {
        global.v8debug.Debug.setBreakOnException();
    }
    source_map_support_1.default.install();
    module_alias_1.default.addAliases({
        '@pyro/db-server': __dirname + '/@pyro/db-server',
        '@pyro/io': __dirname + '/@pyro/io',
        '@pyro/db': '@ever-platform/common/build/@pyro/db',
        '@modules/server.common': '@ever-platform/common/build/',
    });
}
catch (err) {
    console.error(err);
}
const bluebird_1 = tslib_1.__importDefault(require("bluebird"));
const mongoose_1 = tslib_1.__importDefault(require("mongoose"));
const Log_1 = require("./helpers/Log");
const inversify_config_1 = require("./services/inversify.config");
const services_app_1 = require("./services/services.app");
const log = Log_1.createEverLogger({ name: 'uncaught' });
process.on('uncaughtException', (err) => {
    try {
        log.error(err, 'Caught exception: ' + err);
    }
    catch (logWritingErr) {
        try {
            console.error("Can't write to log!!!!!!");
            console.error(logWritingErr);
        }
        catch (consoleWritingError) { }
    }
    console.error(err);
});
process.on('unhandledRejection', (err, promise) => {
    try {
        log.error(err, 'Uncaught rejection: ' + err);
    }
    catch (logWritingErr) {
        try {
            console.error("Can't write to log!!!!!!");
            console.error(logWritingErr);
        }
        catch (consoleWritingError) { }
    }
    console.error(err);
});
mongoose_1.default.Promise = bluebird_1.default;
(() => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    yield services_app_1.ServicesApp.CreateTypeORMConnection();
    const app = inversify_config_1.servicesContainer.get(services_app_1.ServicesApp);
    yield app.start(() => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        const bootstrapNest = yield require('./nest-bootstrap').bootstrapNest;
        bootstrapNest();
    }));
}))();
//# sourceMappingURL=main.js.map