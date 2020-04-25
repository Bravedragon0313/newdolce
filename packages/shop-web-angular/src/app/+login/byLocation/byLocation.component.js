"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var variables_1 = require("../../../styles/variables");
var operators_1 = require("rxjs/operators");
var invite_router_service_1 = require("@modules/client.common.angular2/routers/invite-router.service");
var invite_request_router_service_1 = require("@modules/client.common.angular2/routers/invite-request-router.service");
var http_1 = require("@angular/common/http");
var router_1 = require("@angular/router");
var user_router_service_1 = require("@modules/client.common.angular2/routers/user-router.service");
var geo_location_router_service_1 = require("@modules/client.common.angular2/routers/geo-location-router.service");
var store_1 = require("app/services/store");
var environment_1 = require("environments/environment");
var user_auth_router_service_1 = require("@modules/client.common.angular2/routers/user-auth-router.service");
var location_component_1 = require("./location/location.component");
var geo_location_1 = require("app/services/geo-location");
var core_2 = require("@ngx-translate/core");
var LoginByLocationComponent = (function () {
    function LoginByLocationComponent(inviteRouter, inviteRequestRouter, http, router, userRouter, activatedRoute, geoLocationRouter, store, userAuthRouter, geoLocationService, translateService) {
        this.inviteRouter = inviteRouter;
        this.inviteRequestRouter = inviteRequestRouter;
        this.http = http;
        this.router = router;
        this.userRouter = userRouter;
        this.activatedRoute = activatedRoute;
        this.geoLocationRouter = geoLocationRouter;
        this.store = store;
        this.userAuthRouter = userAuthRouter;
        this.geoLocationService = geoLocationService;
        this.translateService = translateService;
        this.mapCoordEmitter = new core_1.EventEmitter();
        this.mapGeometryEmitter = new core_1.EventEmitter();
        this.styleVariables = variables_1.styleVariables;
        this.toolbarDisabled = true;
        this.authLogo = environment_1.environment.AUTH_LOGO;
        this.loadUserData();
    }
    LoginByLocationComponent.prototype.ngOnInit = function () {
        this.updateCurrentAddressByCoordinates();
    };
    LoginByLocationComponent.prototype.login = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var readyUser, invite, inviteRequest, currentInvite, inviteCurrent, err_1;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.userId) return [3, 3];
                        return [4, this.userRouter.updateUser(this.userId, {
                                geoLocation: this.locationForm.getCreateUserInfo().geoLocation,
                                socialIds: this.InitUser ? this.InitUser.socialIds : [],
                                isRegistrationCompleted: true,
                                apartment: this.locationForm.apartament.value
                                    ? this.locationForm.apartament.value.toString()
                                    : '0',
                            })];
                    case 1:
                        readyUser = _a.sent();
                        this.store.userId = readyUser._id;
                        return [4, this.router.navigate(['products'])];
                    case 2:
                        _a.sent();
                        return [3, 14];
                    case 3:
                        _a.trys.push([3, 13, , 14]);
                        return [4, this.inviteRouter
                                .getByLocation({
                                apartment: this.locationForm.apartament.value
                                    ? this.locationForm.apartament.value.toString()
                                    : '0',
                                house: this.locationForm.house.value.toString(),
                                streetAddress: this.locationForm.streetAddress.value,
                                city: this.locationForm.city.value,
                                countryId: this.locationForm.countryId.value,
                            })
                                .pipe(operators_1.first())
                                .toPromise()];
                    case 4:
                        invite = _a.sent();
                        if (!(invite != null)) return [3, 6];
                        return [4, this.register(invite)];
                    case 5:
                        _a.sent();
                        return [3, 12];
                    case 6:
                        console.log('Creating invite request...');
                        return [4, this.locationForm.createInviteRequest()];
                    case 7:
                        inviteRequest = _a.sent();
                        if (!this.store.inviteSystem) return [3, 9];
                        return [4, this.processInviteRequest(inviteRequest)];
                    case 8:
                        currentInvite = _a.sent();
                        return [3, 12];
                    case 9: return [4, this.inviteRouter.create(inviteRequest)];
                    case 10:
                        inviteCurrent = _a.sent();
                        return [4, this.register(inviteCurrent)];
                    case 11:
                        _a.sent();
                        _a.label = 12;
                    case 12: return [3, 14];
                    case 13:
                        err_1 = _a.sent();
                        console.error(err_1);
                        return [3, 14];
                    case 14: return [2];
                }
            });
        });
    };
    LoginByLocationComponent.prototype.onCoordinatesChanges = function (coords) {
        this.mapCoordEmitter.emit(coords);
    };
    LoginByLocationComponent.prototype.onGeometrySend = function (geometry) {
        this.mapGeometryEmitter.emit(geometry);
    };
    LoginByLocationComponent.prototype.register = function (invite) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var user;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.userAuthRouter.register({
                            user: {
                                apartment: invite.apartment,
                                email: this.email,
                                geoLocation: invite.geoLocation,
                            },
                        })];
                    case 1:
                        user = _a.sent();
                        this.store.userId = user.id;
                        this.router.navigate(['products']);
                        return [2];
                }
            });
        });
    };
    LoginByLocationComponent.prototype.updateCurrentAddressByCoordinates = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var coords, error_1;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4, this.geoLocationService.getCurrentCoords()];
                    case 1:
                        coords = _a.sent();
                        this.coordinates = {
                            type: 'Point',
                            coordinates: [coords.latitude, coords.longitude],
                        };
                        return [3, 3];
                    case 2:
                        error_1 = _a.sent();
                        console.warn(error_1);
                        return [3, 3];
                    case 3: return [2, false];
                }
            });
        });
    };
    LoginByLocationComponent.prototype.processInviteRequest = function (inviteRequest) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (inviteRequest) {
                            localStorage.setItem('inviteRequestId', inviteRequest.id);
                        }
                        else {
                        }
                        return [4, this.router.navigate(['login'])];
                    case 1:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    LoginByLocationComponent.prototype.loadUserData = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return tslib_1.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = this;
                        return [4, this.activatedRoute.params
                                .pipe(operators_1.map(function (p) { return p.id; }), operators_1.first())
                                .toPromise()];
                    case 1:
                        _a.userId = _c.sent();
                        if (!this.userId) return [3, 3];
                        _b = this;
                        return [4, this.userRouter
                                .get(this.userId)
                                .pipe(operators_1.first())
                                .toPromise()];
                    case 2:
                        _b.InitUser = _c.sent();
                        this.email = this.InitUser.email;
                        _c.label = 3;
                    case 3: return [2];
                }
            });
        });
    };
    tslib_1.__decorate([
        core_1.ViewChild('locationForm'),
        tslib_1.__metadata("design:type", location_component_1.LocationFormComponent)
    ], LoginByLocationComponent.prototype, "locationForm", void 0);
    LoginByLocationComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'es-login-by-location',
            styleUrls: ['./byLocation.component.scss'],
            templateUrl: '/byLocation.component.html',
        }),
        tslib_1.__metadata("design:paramtypes", [invite_router_service_1.InviteRouter,
            invite_request_router_service_1.InviteRequestRouter,
            http_1.HttpClient,
            router_1.Router,
            user_router_service_1.UserRouter,
            router_1.ActivatedRoute,
            geo_location_router_service_1.GeoLocationRouter,
            store_1.Store,
            user_auth_router_service_1.UserAuthRouter,
            geo_location_1.GeoLocationService,
            core_2.TranslateService])
    ], LoginByLocationComponent);
    return LoginByLocationComponent;
}());
exports.LoginByLocationComponent = LoginByLocationComponent;
//# sourceMappingURL=byLocation.component.js.map