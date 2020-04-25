"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
require("jasmine");
var core_1 = require("@angular/core");
var testing_1 = require("@angular/core/testing");
var angular_1 = require("@ionic/angular");
var ngx_1 = require("@ionic-native/splash-screen/ngx");
var ngx_2 = require("@ionic-native/status-bar/ngx");
var app_component_1 = require("./app.component");
describe('AppComponent', function () {
    var statusBarSpy;
    var splashScreenSpy;
    var platformReadySpy;
    var platformSpy;
    beforeEach(function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
            statusBarSpy = jasmine.createSpyObj('StatusBar', ['styleDefault']);
            splashScreenSpy = jasmine.createSpyObj('SplashScreen', ['hide']);
            platformReadySpy = Promise.resolve();
            platformSpy = jasmine.createSpyObj('Platform', {
                ready: platformReadySpy,
            });
            testing_1.TestBed.configureTestingModule({
                declarations: [app_component_1.AppComponent],
                schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA],
                providers: [
                    { provide: ngx_2.StatusBar, useValue: statusBarSpy },
                    { provide: ngx_1.SplashScreen, useValue: splashScreenSpy },
                    { provide: angular_1.Platform, useValue: platformSpy },
                ],
            }).compileComponents();
            return [2];
        });
    }); });
    it('should create the app', function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var fixture, app;
        return tslib_1.__generator(this, function (_a) {
            fixture = testing_1.TestBed.createComponent(app_component_1.AppComponent);
            app = fixture.debugElement.componentInstance;
            expect(app).toBeTruthy();
            return [2];
        });
    }); });
    it('should initialize the app', function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    testing_1.TestBed.createComponent(app_component_1.AppComponent);
                    expect(platformSpy.ready).toHaveBeenCalled();
                    return [4, platformReadySpy];
                case 1:
                    _a.sent();
                    expect(statusBarSpy.styleDefault).toHaveBeenCalled();
                    expect(splashScreenSpy.hide).toHaveBeenCalled();
                    return [2];
            }
        });
    }); });
});
//# sourceMappingURL=app.component.spec.js.map