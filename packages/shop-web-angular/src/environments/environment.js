"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
core_1.enableProdMode();
exports.environment = {
    production: false,
    DEFAULT_LATITUDE: 42.6459136,
    DEFAULT_LONGITUDE: 23.3332736,
    DEFAULT_LANGUAGE: 'en-US',
    SERVICES_ENDPOINT: 'http://localhost:5500',
    HTTPS_SERVICES_ENDPOINT: 'https://localhost:5501',
    GQL_ENDPOINT: 'http://localhost:5555/graphql',
    GQL_SUBSCRIPTIONS_ENDPOINT: 'ws://localhost:5050/subscriptions',
    AUTH_LOGO: 'assets/img/logo.png',
    NO_INTERNET_LOGO: 'assets/img/logo.png',
    GOOGLE_MAPS_API_KEY: '',
    DELIVERY_TIME_MIN: 30,
    DELIVERY_TIME_MAX: 60,
    SETTINGS_APP_TYPE: 'shop-web',
    SETTINGS_MAINTENANCE_API_URL: '',
    ENV_PROVIDERS: [],
    decorateModuleRef: function (modRef) {
        platform_browser_1.disableDebugTools();
        return modRef;
    }
};
//# sourceMappingURL=environment.js.map