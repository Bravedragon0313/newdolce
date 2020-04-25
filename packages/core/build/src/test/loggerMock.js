"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const bunyan_1 = tslib_1.__importDefault(require("bunyan"));
exports.loggerMock = bunyan_1.default.createLogger({
    name: 'testingLoggerMock',
    streams: [],
});
//# sourceMappingURL=loggerMock.js.map