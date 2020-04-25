"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const env_1 = require("./env");
const util_1 = tslib_1.__importDefault(require("util"));
const path_1 = tslib_1.__importDefault(require("path"));
const os_1 = tslib_1.__importDefault(require("os"));
const API_js_1 = tslib_1.__importDefault(require("pm2/lib/API.js"));
const constants_js_1 = tslib_1.__importDefault(require("pm2/constants.js"));
const pm2 = new API_js_1.default(env_1.env.isProd
    ? {
        public_key: env_1.env.KEYMETRICS_PUBLIC_KEY,
        secret_key: env_1.env.KEYMETRICS_SECRET_KEY,
    }
    : {});
const start = util_1.default.promisify(pm2.start.bind(pm2));
const interact = (private_key, public_key, machine_name) => new Promise((resolve) => pm2.interact(private_key, public_key, machine_name, resolve));
const launchBus = util_1.default.promisify(pm2.launchBus.bind(pm2));
const runningApps = util_1.default.promisify(pm2.list.bind(pm2));
const dump = util_1.default.promisify(pm2.dump.bind(pm2));
const timeout = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
(() => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    try {
        const bus = yield launchBus();
        console.log('[PM2] Log streaming started');
        bus.on('log:out', (packet) => {
            console.log('[App:%s] %s', packet.process.name, packet.data);
        });
        bus.on('log:err', (packet) => {
            console.error('[App:%s][Err] %s', packet.process.name, packet.data);
        });
    }
    catch (err) {
        exitPM2();
    }
}))();
(() => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    try {
        yield start(Object.assign({ pm2_home: path_1.default.join(os_1.default.homedir(), '.pm2'), script: './build/main.js', name: 'EverApi', daemon_mode: true, exec_mode: 'fork', instances: env_1.env.WEB_CONCURRENCY, max_memory_restart: env_1.env.WEB_MEMORY + 'M' }, (env_1.env.isDev ? { watch: true } : {})));
        yield dump();
    }
    catch (err) {
        console.error(err);
    }
    if (env_1.env.isProd) {
        yield interact(env_1.env.KEYMETRICS_SECRET_KEY, env_1.env.KEYMETRICS_PUBLIC_KEY, env_1.env.KEYMETRICS_MACHINE_NAME);
    }
    process.on('SIGINT', function () {
        exitPM2();
    });
    process.on('SIGTERM', function () {
        exitPM2();
    });
}))();
function exitPM2() {
    console.log('Exiting PM2');
    pm2.kill(function () {
        process.exit(0);
    });
}
function autoExit() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const interval = 3000;
        const aliveInterval = interval * 1.5;
        let alive = false;
        while (true) {
            yield timeout(interval);
            const aliveTimer = setTimeout(function () {
                if (!alive) {
                    console.error('PM2 Daemon is dead');
                    process.exit(1);
                }
            }, aliveInterval);
            try {
                const apps = yield runningApps();
                clearTimeout(aliveTimer);
                alive = true;
                let appOnline = 0;
                apps.forEach(function (app) {
                    if (app.pm2_env.status === constants_js_1.default.ONLINE_STATUS ||
                        app.pm2_env.status === constants_js_1.default.LAUNCHING_STATUS) {
                        appOnline++;
                    }
                });
                console.log('check ' + appOnline);
                if (appOnline === 0) {
                    console.log('0 application online, exiting');
                    exitPM2();
                }
            }
            catch (err) {
                console.log('pm2.list got error');
                console.error(err);
                exitPM2();
                return;
            }
        }
    });
}
//# sourceMappingURL=pm2bootstrap.js.map