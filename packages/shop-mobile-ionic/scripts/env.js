"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var envalid_1 = require("envalid");
var uuid_1 = require("uuid");
var merchantIDs = envalid_1.makeValidator(function (x) { return x; }, 'merchantIDs');
exports.env = envalid_1.cleanEnv(process.env, {
    production: envalid_1.bool({ default: false }),
    VERSION: envalid_1.str({ default: '1.0.0' }),
    PRODUCTS_VIEW_TYPE: envalid_1.str({ default: 'slides' }),
    ORDER_INFO_TYPE: envalid_1.str({ default: 'page' }),
    API_FILE_UPLOAD_URL: envalid_1.str({
        default: 'https://api.cloudinary.com/v1_1/evereq/upload',
    }),
    INVITE_BY_CODE_LOGO: envalid_1.str({ default: 'assets/imgs/logo.png' }),
    NO_INTERNET_LOGO: envalid_1.str({ default: 'assets/imgs/logo.png' }),
    COMPANY_NAME: envalid_1.str({ default: 'Ever Co. LTD' }),
    GOOGLE_MAPS_API_KEY: envalid_1.str({ default: '' }),
    GOOGLE_ANALYTICS_API_KEY: envalid_1.str({ default: '' }),
    FAKE_UUID: envalid_1.str({ default: uuid_1.v4() }),
    MIXPANEL_API_KEY: envalid_1.str({ default: '' }),
    DEFAULT_LANGUAGE: envalid_1.str({ default: 'en-US' }),
    DEFAULT_LOCALE: envalid_1.str({ default: 'en-US' }),
    DELIVERY_TIME_MIN: envalid_1.num({ default: 30 }),
    DELIVERY_TIME_MAX: envalid_1.num({ default: 60 }),
    SUPPORT_NUMBER: envalid_1.str({ default: '0888888888' }),
    STRIPE_PUBLISHABLE_KEY: envalid_1.str({ default: '' }),
    STRIPE_POP_UP_LOGO: envalid_1.str({
        default: 'https://bitbucket-assetroot.s3.amazonaws.com/c/photos/2016/Jan/30/1263967991-1-everbie-avatar.png',
    }),
    MAP_MERCHANT_ICON_LINK: envalid_1.str({
        default: 'http://maps.google.com/mapfiles/kml/pal3/icon21.png',
    }),
    MAP_USER_ICON_LINK: envalid_1.str({
        default: 'http://maps.google.com/mapfiles/kml/pal3/icon48.png',
    }),
    MAP_CARRIER_ICON_LINK: envalid_1.str({
        default: 'http://maps.google.com/mapfiles/kml/pal4/icon54.png',
    }),
    DEFAULT_LATITUDE: envalid_1.num({ default: 42.6459136 }),
    DEFAULT_LONGITUDE: envalid_1.num({ default: 23.3332736 }),
    GQL_ENDPOINT: envalid_1.str({ default: 'http://localhost:5555/graphql' }),
    GQL_SUBSCRIPTIONS_ENDPOINT: envalid_1.str({
        default: 'ws://localhost:5050/subscriptions',
    }),
    SERVICES_ENDPOINT: envalid_1.str({ default: 'http://localhost:5500' }),
    HTTPS_SERVICES_ENDPOINT: envalid_1.str({ default: 'https://localhost:5501' }),
    FAKE_INVITE_ID: envalid_1.str({ default: '1ae9d04f9010d834f8906881' }),
    FAKE_INVITE_CITY: envalid_1.str({ default: 'Sofia' }),
    FAKE_INVITE_POSTCODE: envalid_1.str({ default: '1700' }),
    FAKE_INVITE_ADDRESS: envalid_1.str({ default: 'Simeonovsko shose' }),
    FAKE_INVITE_HOUSE: envalid_1.str({ default: '104' }),
    FAKE_INVITE_CREATED_AT: envalid_1.str({ default: '2018-05-02T14:50:55.658Z' }),
    FAKE_INVITE_UPDATED_AT: envalid_1.str({ default: '2018-05-02T14:50:55.658Z' }),
    FAKE_INVITE_APARTMENT: envalid_1.str({ default: '3' }),
    FAKE_INVITE_CODE: envalid_1.num({ default: 8321 }),
    FAKE_INVITE_COUNTRY_ID: envalid_1.num({ default: 21 }),
    SETTINGS_APP_TYPE: envalid_1.str({ default: 'shop-mobile' }),
    SETTINGS_MAINTENANCE_API_URL: envalid_1.str({
        default: '',
    }),
    MERCHANT_IDS: merchantIDs({
        default: [],
    }),
    WEB_CONCURRENCY: envalid_1.num({ default: 1 }),
    WEB_MEMORY: envalid_1.num({ default: 2048 }),
    PORT: envalid_1.num({ default: 4201 }),
}, { strict: true, dotEnvPath: __dirname + '/../.env' });
//# sourceMappingURL=env.js.map