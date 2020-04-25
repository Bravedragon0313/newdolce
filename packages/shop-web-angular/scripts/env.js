"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var envalid_1 = require("envalid");
exports.env = envalid_1.cleanEnv(process.env, {
    production: envalid_1.bool({ default: false }),
    DEFAULT_LATITUDE: envalid_1.num({ default: 42.6459136 }),
    DEFAULT_LONGITUDE: envalid_1.num({ default: 23.3332736 }),
    DEFAULT_LANGUAGE: envalid_1.str({ default: 'en-US' }),
    SERVICES_ENDPOINT: envalid_1.str({ default: 'http://localhost:5500' }),
    HTTPS_SERVICES_ENDPOINT: envalid_1.str({ default: 'https://localhost:5501' }),
    GQL_ENDPOINT: envalid_1.str({ default: 'http://localhost:5555/graphql' }),
    GQL_SUBSCRIPTIONS_ENDPOINT: envalid_1.str({
        default: 'ws://localhost:5050/subscriptions',
    }),
    AUTH_LOGO: envalid_1.str({ default: 'assets/img/logo.png' }),
    NO_INTERNET_LOGO: envalid_1.str({ default: 'assets/img/logo.png' }),
    GOOGLE_MAPS_API_KEY: envalid_1.str({ default: '' }),
    DELIVERY_TIME_MIN: envalid_1.num({ default: 30 }),
    DELIVERY_TIME_MAX: envalid_1.num({ default: 60 }),
    SETTINGS_APP_TYPE: envalid_1.str({ default: 'shop-web' }),
    SETTINGS_MAINTENANCE_API_URL: envalid_1.str({
        default: '',
    }),
    WEB_CONCURRENCY: envalid_1.num({ default: 1 }),
    WEB_MEMORY: envalid_1.num({ default: 2048 }),
    PORT: envalid_1.num({ default: 3000 }),
}, { strict: true, dotEnvPath: __dirname + '/../.env' });
//# sourceMappingURL=env.js.map