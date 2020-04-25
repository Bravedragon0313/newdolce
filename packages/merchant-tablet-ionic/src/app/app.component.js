"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var angular_1 = require("@ionic/angular");
var ngx_1 = require("@ionic-native/status-bar/ngx");
var ngx_2 = require("@ionic-native/splash-screen/ngx");
var ngx_3 = require("@ionic-native/globalization/ngx");
var ngx_4 = require("@ionic-native/device/ngx");
var ngx_5 = require("@ionic-native/google-analytics/ngx");
var ngx_6 = require("@ionic-native/network/ngx");
var ngx_7 = require("@ionic-native/mixpanel/ngx");
var ngx_8 = require("@ionic-native/intercom/ngx");
var ngx_9 = require("@ionic-native/screen-orientation/ngx");
var core_2 = require("@ngx-translate/core");
var device_router_service_1 = require("@modules/client.common.angular2/routers/device-router.service");
var router_1 = require("@angular/router");
var store_service_1 = require("../services/store.service");
var environment_1 = require("../environments/environment");
var AppComponent = (function () {
    function AppComponent(platform, statusBar, splashScreen, store, router, location, globalization, device, ga, _network, mixpanel, intercom, screenOrientation, deviceRouter, translate) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.store = store;
        this.router = router;
        this.location = location;
        this.globalization = globalization;
        this.device = device;
        this.ga = ga;
        this._network = _network;
        this.mixpanel = mixpanel;
        this.intercom = intercom;
        this.screenOrientation = screenOrientation;
        this.deviceRouter = deviceRouter;
        this.translate = translate;
        this.defaultLanguage = '';
        this.initializeApp();
    }
    AppComponent.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this._watchNetworkConnection();
            _this.defaultLanguage = environment_1.environment['DEFAULT_LANGUAGE'];
            var browserLang = _this.translate.getBrowserLang();
            if (_this.defaultLanguage) {
                _this.translate.use(_this.defaultLanguage);
            }
            else {
                _this.translate.use(browserLang.match(/en-US|bg-BG|he-IL|ru-RU|es-ES|it-IT|fr-FR/)
                    ? browserLang
                    : 'en-US');
            }
            _this.store.language = _this.translate.currentLang;
            if (_this.device.platform) {
                _this.startGoogleAnalytics();
                _this.preferredLanguage();
                _this.startMixpanel();
                _this.screenOrientation.lock(_this.screenOrientation.ORIENTATIONS.LANDSCAPE);
            }
            if (!_this.deviceId) {
                _this._registerDevice();
            }
            _this.statusBar.styleBlackOpaque();
            _this.splashScreen.hide();
        });
    };
    Object.defineProperty(AppComponent.prototype, "deviceId", {
        get: function () {
            return localStorage.getItem('_deviceId');
        },
        enumerable: true,
        configurable: true
    });
    AppComponent.prototype.startGoogleAnalytics = function () {
        var _this = this;
        setTimeout(function () {
            _this.ga
                .startTrackerWithId(environment_1.environment.GOOGLE_ANALYTICS_API_KEY, 30)
                .then(function () {
                console.log('Google analytics is ready now!');
                _this.ga.trackView('test');
            })
                .catch(function (e) { return console.log('Error starting GoogleAnalytics', e); });
        }, 3000);
    };
    AppComponent.prototype.preferredLanguage = function () {
        var _this = this;
        console.log('Preferred Language');
        this.globalization
            .getPreferredLanguage()
            .then(function (res) {
            _this.store.language = res.value.substr(0, 2);
        })
            .catch(function (e) { return console.log(e); });
    };
    AppComponent.prototype.deviceCreateObject = function () {
        var language = localStorage.getItem('_language') || 'en-US';
        if (!this.device.platform || this.device.platform === 'browser') {
            return {
                channelId: null,
                language: language,
                type: 'browser',
                uuid: environment_1.environment.FAKE_UUID,
            };
        }
        return {
            channelId: null,
            language: language,
            type: this.device.platform,
            uuid: this.device.uuid,
        };
    };
    AppComponent.prototype.startMixpanel = function () {
        var _this = this;
        this.mixpanel.init(environment_1.environment.MIXPANEL_API_KEY).then(function () {
            console.log('Mixpanel is ready now!');
            _this.mixpanel.track('App Booted');
        });
    };
    AppComponent.prototype.openPage = function (page) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.router.navigate(page.url)];
                    case 1:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    Object.defineProperty(AppComponent.prototype, "maintenanceMode", {
        get: function () {
            return this.store.maintenanceMode;
        },
        enumerable: true,
        configurable: true
    });
    AppComponent.prototype._watchNetworkConnection = function () {
        var _this = this;
        this._network.onDisconnect().subscribe(function (_) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.error('network was disconnected :-(');
                        return [4, this.router.navigate(['errors', 'connection-lost'])];
                    case 1:
                        _a.sent();
                        return [2];
                }
            });
        }); });
        this._network.onConnect().subscribe(function (_) {
            console.log('network connected!');
            _this.location.back();
            setTimeout(function () {
                if (_this._network.type === 'wifi') {
                    console.log('we got a wifi connection, woohoo!');
                }
            }, 3000);
        });
    };
    AppComponent.prototype._registerDevice = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var deviceCreateObject, device;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        deviceCreateObject = this.deviceCreateObject();
                        return [4, this.deviceRouter.create(deviceCreateObject)];
                    case 1:
                        device = _a.sent();
                        this.store.deviceId = device.id;
                        this.store.language = device.language;
                        this.store.platform = device.type;
                        return [2];
                }
            });
        });
    };
    AppComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'e-cu-root',
            templateUrl: 'app.component.html',
        }),
        tslib_1.__metadata("design:paramtypes", [angular_1.Platform,
            ngx_1.StatusBar,
            ngx_2.SplashScreen,
            store_service_1.Store,
            router_1.Router,
            common_1.Location,
            ngx_3.Globalization,
            ngx_4.Device,
            ngx_5.GoogleAnalytics,
            ngx_6.Network,
            ngx_7.Mixpanel,
            ngx_8.Intercom,
            ngx_9.ScreenOrientation,
            device_router_service_1.DeviceRouter,
            core_2.TranslateService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map