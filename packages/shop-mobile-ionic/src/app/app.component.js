"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var angular_1 = require("@ionic/angular");
var ngx_1 = require("@ionic-native/status-bar/ngx");
var ngx_2 = require("@ionic-native/splash-screen/ngx");
var ngx_3 = require("@ionic-native/network/ngx");
var core_2 = require("@ngx-translate/core");
var device_router_service_1 = require("@modules/client.common.angular2/routers/device-router.service");
var ngx_4 = require("@ionic-native/device/ngx");
var router_1 = require("@angular/router");
var store_service_1 = require("./services/store.service");
var environment_1 = require("environments/environment");
var AppComponent = (function () {
    function AppComponent(platform, store, router, deviceRouter, _translateService, location, statusBar, splashScreen, network, device) {
        this.platform = platform;
        this.store = store;
        this.router = router;
        this.deviceRouter = deviceRouter;
        this._translateService = _translateService;
        this.location = location;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.network = network;
        this.device = device;
        this.defaultLanguage = '';
        this._initializeApp();
        this.defaultLanguage = environment_1.environment['DEFAULT_LANGUAGE'];
        _translateService.addLangs([
            'en-US',
            'bg-BG',
            'he-IL',
            'ru-RU',
            'es-ES',
            'it-IT',
            'fr-FR',
        ]);
        _translateService.setDefaultLang('en-US');
        var browserLang = _translateService.getBrowserLang();
        if (this.defaultLanguage) {
            _translateService.use(this.defaultLanguage);
        }
        else {
            _translateService.use(browserLang.match(/en-US|bg-BG|he-HE|ru-RU|es-ES|it-IT|fr-FR/)
                ? browserLang
                : 'en-US');
        }
    }
    AppComponent.prototype.getChannelId = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var urbanAirshipPlugin;
            return tslib_1.__generator(this, function (_a) {
                urbanAirshipPlugin = window.UrbanAirshipPlugin;
                if (urbanAirshipPlugin !== undefined) {
                    return [2, new Promise(function (resolve) {
                            return urbanAirshipPlugin.getChannelID(function (channelID) {
                                return resolve(channelID);
                            });
                        })];
                }
                else {
                    if (this.platform.is('cordova')) {
                        console.error("DeviceService can't getChannelId() because UrbanAirship plugin isn't installed!");
                    }
                    return [2, null];
                }
                return [2];
            });
        });
    };
    AppComponent.prototype.getLanguage = function () {
        return this.store.language;
    };
    AppComponent.prototype.getPlatform = function () {
        return this.platform.is('cordova')
            ? this.device.platform.toLowerCase()
            : 'browser';
    };
    AppComponent.prototype.getUUID = function () {
        return this.platform.is('cordova')
            ? this.device.uuid
            : environment_1.environment.FAKE_UUID;
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
    AppComponent.prototype._watchNetworkConnection = function () {
        var _this = this;
        this.network.onDisconnect().subscribe(function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.error('Network was disconnected!');
                        return [4, this.router.navigate(['errors', 'connection-lost'])];
                    case 1:
                        _a.sent();
                        return [2];
                }
            });
        }); });
        this.network.onConnect().subscribe(function () {
            console.warn('Network connected!');
            _this.location.back();
            setTimeout(function () {
                if (_this.network.type === 'wifi') {
                    console.log('Wifi connection detected!');
                }
            }, 3000);
        });
    };
    AppComponent.prototype._initializeApp = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.platform.ready()];
                    case 1:
                        _a.sent();
                        this._watchNetworkConnection();
                        this.statusBar.styleBlackOpaque();
                        this.splashScreen.hide();
                        if (!!this.store.deviceId) return [3, 3];
                        return [4, this._registerDeviceDevMode()];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2];
                }
            });
        });
    };
    AppComponent.prototype._registerDeviceDevMode = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var device, _a, _b, _c;
            return tslib_1.__generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _b = (_a = this.deviceRouter).create;
                        _c = {};
                        return [4, this.getChannelId()];
                    case 1: return [4, _b.apply(_a, [(_c.channelId = _d.sent(),
                                _c.language = this.getLanguage(),
                                _c.type = this.getPlatform(),
                                _c.uuid = this.getUUID(),
                                _c)])];
                    case 2:
                        device = _d.sent();
                        this.store.deviceId = device.id;
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
            store_service_1.Store,
            router_1.Router,
            device_router_service_1.DeviceRouter,
            core_2.TranslateService,
            common_1.Location,
            ngx_1.StatusBar,
            ngx_2.SplashScreen,
            ngx_3.Network,
            ngx_4.Device])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map