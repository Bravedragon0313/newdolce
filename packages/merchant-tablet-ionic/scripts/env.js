"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var envalid_1 = require("envalid");
var uuid_1 = require("uuid");
exports.env = envalid_1.cleanEnv(process.env, {
    production: envalid_1.bool({ default: false }),
    SERVICES_ENDPOINT: envalid_1.str({ default: 'http://localhost:5500' }),
    HTTPS_SERVICES_ENDPOINT: envalid_1.str({ default: 'https://localhost:5501' }),
    GQL_ENDPOINT: envalid_1.str({ default: 'http://localhost:5555/graphql' }),
    GQL_SUBSCRIPTIONS_ENDPOINT: envalid_1.str({
        default: 'ws://localhost:5050/subscriptions',
    }),
    APP_VERSION: envalid_1.str({ default: '0.2.0' }),
    API_FILE_UPLOAD_URL: envalid_1.str({
        default: 'https://api.cloudinary.com/v1_1/evereq/upload',
    }),
    DEFAULT_LOGIN_USERNAME: envalid_1.str({ default: 'hut_pizza' }),
    DEFAULT_LOGIN_PASSWORD: envalid_1.str({ default: '123456' }),
    LOGIN_LOGO: envalid_1.str({ default: 'assets/imgs/logo.png' }),
    NO_INTERNET_LOGO: envalid_1.str({ default: 'assets/imgs/logo.png' }),
    COMPANY_NAME: envalid_1.str({ default: 'Ever Co. LTD' }),
    APP_NAME: envalid_1.str({ default: 'Ever Merchant' }),
    GOOGLE_MAPS_API_KEY: envalid_1.str({ default: '' }),
    GOOGLE_ANALYTICS_API_KEY: envalid_1.str({ default: '' }),
    FAKE_UUID: envalid_1.str({ default: uuid_1.v4() }),
    MIXPANEL_API_KEY: envalid_1.str({ default: '' }),
    MAP_MERCHANT_ICON_LINK: envalid_1.str({
        default: 'http://maps.google.com/mapfiles/kml/pal3/icon21.png',
    }),
    MAP_USER_ICON_LINK: envalid_1.str({
        default: 'http://maps.google.com/mapfiles/kml/pal3/icon48.png',
    }),
    MAP_CARRIER_ICON_LINK: envalid_1.str({
        default: 'http://maps.google.com/mapfiles/kml/pal4/icon54.png',
    }),
    SETTINGS_APP_TYPE: envalid_1.str({ default: 'merchant-tablet' }),
    SETTINGS_MAINTENANCE_API_URL: envalid_1.str({
        default: '',
    }),
    DEFAULT_LANGUAGE: envalid_1.str({ default: 'en-US' }),
    WEB_CONCURRENCY: envalid_1.num({ default: 1 }),
    WEB_MEMORY: envalid_1.num({ default: 2048 }),
    PORT: envalid_1.num({ default: 4202 }),
}, { strict: true, dotEnvPath: __dirname + '/../.env' });
//# sourceMappingURL=env.js.map