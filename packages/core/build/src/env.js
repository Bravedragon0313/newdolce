"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const envalid_1 = require("envalid");
exports.env = envalid_1.cleanEnv(process.env, {
    NODE_ENV: envalid_1.str({
        choices: ['production', 'development', 'test'],
        default: 'development',
    }),
    WEB_CONCURRENCY: envalid_1.num({ default: 1 }),
    WEB_MEMORY: envalid_1.num({ default: 2048 }),
    HTTPSPORT: envalid_1.port({ default: 5501 }),
    HTTPPORT: envalid_1.port({ default: 5500 }),
    GQLPORT: envalid_1.port({ default: 5555 }),
    GQLPORT_SUBSCRIPTIONS: envalid_1.port({ default: 5050 }),
    HTTPS_CERT_PATH: envalid_1.str({ default: 'certificates/https/cert.pem' }),
    HTTPS_KEY_PATH: envalid_1.str({ default: 'certificates/https/key.pem' }),
    LOGS_PATH: envalid_1.str({ default: './tmp/logs' }),
    DB_URI: envalid_1.str({ default: 'mongodb://localhost/ever_development' }),
    TESTING_DB_URI: envalid_1.str({ default: 'mongodb://localhost/ever_testing' }),
    STRIPE_SECRET_KEY: envalid_1.str({ default: '' }),
    URBAN_AIRSHIP_KEY: envalid_1.str({ default: '' }),
    URBAN_AIRSHIP_SECRET: envalid_1.str({ default: '' }),
    AWS_ACCESS_KEY_ID: envalid_1.str({ default: '' }),
    AWS_SECRET_ACCESS_KEY: envalid_1.str({ default: '' }),
    KEYMETRICS_MACHINE_NAME: envalid_1.str({ default: '' }),
    KEYMETRICS_SECRET_KEY: envalid_1.str({ default: '' }),
    KEYMETRICS_PUBLIC_KEY: envalid_1.str({ default: '' }),
    GOOGLE_APP_ID: envalid_1.str({ default: '' }),
    GOOGLE_APP_SECRET: envalid_1.str({ default: '' }),
    FACEBOOK_APP_ID: envalid_1.str({ default: '' }),
    FACEBOOK_APP_SECRET: envalid_1.str({ default: '' }),
    JWT_SECRET: envalid_1.str({ default: 'default' }),
    ADMIN_PASSWORD_BCRYPT_SALT_ROUNDS: envalid_1.num({
        desc: 'Used for passwords encryption, recommended value: 12',
        docs: 'https://security.stackexchange.com/questions/17207/recommended-of-rounds-for-bcrypt',
        default: 12,
    }),
    WAREHOUSE_PASSWORD_BCRYPT_SALT_ROUNDS: envalid_1.num({
        desc: 'Used for passwords encryption, recommended value: 12',
        docs: 'https://security.stackexchange.com/questions/17207/recommended-of-rounds-for-bcrypt',
        default: 12,
    }),
    CARRIER_PASSWORD_BCRYPT_SALT_ROUNDS: envalid_1.num({
        desc: 'Used for passwords encryption, recommended value: 12',
        docs: 'https://security.stackexchange.com/questions/17207/recommended-of-rounds-for-bcrypt',
        default: 12,
    }),
    USER_PASSWORD_BCRYPT_SALT_ROUNDS: envalid_1.num({
        desc: 'Used for passwords encryption, recommended value: 10',
        docs: 'https://security.stackexchange.com/questions/17207/recommended-of-rounds-for-bcrypt',
        default: 10,
    }),
    SETTING_INVITES_ENABLED: envalid_1.bool({ default: false }),
    SETTINGS_REGISTRATIONS_REQUIRED_ON_START: envalid_1.bool({ default: false }),
    FAKE_INVITE_CODE: envalid_1.num({ default: 0 }),
    ARCGIS_CLIENT_ID: envalid_1.str({ default: '' }),
    ARCGIS_CLIENT_SECRET: envalid_1.str({ default: '' }),
    IP_STACK_API_KEY: envalid_1.str({ default: '' }),
    LOG_LEVEL: envalid_1.str({
        choices: ['trace', 'debug', 'info', 'warn', 'error', 'fatal'],
        default: 'error',
    }),
    ENGINE_API_KEY: envalid_1.str({
        desc: 'Apollo Engine Key (optional, see https://www.apollographql.com/docs/platform/schema-registry)',
        default: '',
    }),
    MAX_SOCKETS: envalid_1.num({ default: Infinity }),
}, { strict: true, dotEnvPath: __dirname + '/../.env' });
//# sourceMappingURL=env.js.map