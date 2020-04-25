"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const bunyan_1 = tslib_1.__importDefault(require("bunyan"));
const fs_1 = require("fs");
const mkdirp_1 = tslib_1.__importDefault(require("mkdirp"));
const env_1 = require("../env");
const _ = require("lodash");
const bunyan_cloudwatch_1 = tslib_1.__importDefault(require("bunyan-cloudwatch"));
const os_1 = tslib_1.__importDefault(require("os"));
const bunyan_prettystream_1 = tslib_1.__importDefault(require("bunyan-prettystream"));
let isLogsFolderExists = env_1.env.LOGS_PATH ? fs_1.existsSync(env_1.env.LOGS_PATH) : false;
const getAdditionalLoggerStreams = ({ name }) => {
    const hostname = os_1.default.hostname();
    if (env_1.env.isProd) {
        const logLevels = ['info', 'error', 'debug'];
        return _.map(logLevels, (type) => {
            let stream;
            try {
                stream = bunyan_cloudwatch_1.default({
                    logGroupName: 'ever/api',
                    logStreamName: `${type}_${name}_${hostname}`,
                    cloudWatchLogsOptions: {
                        region: 'us-east-1',
                    },
                });
            }
            catch (err) {
                console.log(err);
            }
            return {
                stream,
                type: 'raw',
                level: type,
            };
        });
    }
    else {
        return [];
    }
};
const prettyStdOut = new bunyan_prettystream_1.default();
prettyStdOut.pipe(process.stdout);
function createEverLogger({ name }) {
    if (!isLogsFolderExists) {
        mkdirp_1.default.sync(env_1.env.LOGS_PATH);
        isLogsFolderExists = true;
    }
    const logger = bunyan_1.default.createLogger({
        name: `everbie.${name}`,
        serializers: bunyan_1.default.stdSerializers,
        streams: [
            {
                level: 'info',
                path: `${env_1.env.LOGS_PATH}/info_${name}.log`,
            },
            {
                level: 'error',
                path: `${env_1.env.LOGS_PATH}/error_${name}.log`,
            },
            {
                level: 'debug',
                path: `${env_1.env.LOGS_PATH}/debug_${name}.log`,
            },
            {
                level: 'debug',
                type: 'raw',
                stream: prettyStdOut,
            },
            ...getAdditionalLoggerStreams({ name }),
        ],
    });
    if (env_1.env.LOG_LEVEL) {
        logger.level(bunyan_1.default[env_1.env.LOG_LEVEL.toUpperCase()]);
    }
    return logger;
}
exports.createEverLogger = createEverLogger;
function Log(logArgs) {
    return function (target) {
        target.prototype.logName = logArgs.name;
        target.prototype.log = createEverLogger(logArgs);
    };
}
exports.Log = Log;
//# sourceMappingURL=Log.js.map