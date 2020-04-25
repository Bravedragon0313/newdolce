"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var invite_router_service_1 = require("@modules/client.common.angular2/routers/invite-router.service");
var geolocation_1 = require("@ionic-native/geolocation");
var operators_1 = require("rxjs/operators");
var router_1 = require("@angular/router");
var rxjs_1 = require("rxjs");
var store_service_1 = require("../../../services/store.service");
var user_auth_router_service_1 = require("@modules/client.common.angular2/routers/user-auth-router.service");
var environment_1 = require("environments/environment");
var orders_service_1 = require("app/services/orders/orders.service");
var ByCodePage = (function () {
    function ByCodePage(store, inviteRouter, userAuthRouter, router, _ordersService) {
        this.store = store;
        this.inviteRouter = inviteRouter;
        this.userAuthRouter = userAuthRouter;
        this.router = router;
        this._ordersService = _ordersService;
        this.ngDestroy$ = new rxjs_1.Subject();
        this.code = null;
        this.inviteByCodeLogo = environment_1.environment.INVITE_BY_CODE_LOGO;
        this._hasNewcustomer = false;
    }
    Object.defineProperty(ByCodePage.prototype, "isInvited", {
        get: function () {
            return this.store.inviteRequestId != null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ByCodePage.prototype, "inviteAddress", {
        get: function () {
            return this.store.inviteAddress;
        },
        enumerable: true,
        configurable: true
    });
    ByCodePage.prototype.onCodeInputKeyPress = function (e) {
        var currentCode = this.code;
        if (currentCode != null && currentCode >= 1000) {
            e.preventDefault();
        }
    };
    ByCodePage.prototype.onCodeInputChange = function () {
        if (this.code != null) {
            if (this.code >= 1000 && this.code <= 9999) {
                this.onCodeInserted();
            }
            if (this.code > 9999) {
                this.code = parseInt(("" + this.code).slice(0, -1), 10);
            }
        }
    };
    ByCodePage.prototype.onCodeInserted = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var code, fakeInvite, invite, location_1, coords, error_1, invite, err_1;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        code = this.code;
                        this.code = null;
                        if (!!this._hasNewcustomer) return [3, 12];
                        fakeInvite = environment_1.environment['FAKE_INVITE'];
                        if (!(fakeInvite && code === fakeInvite.CODE)) return [3, 2];
                        invite = {
                            _id: fakeInvite.ID,
                            geoLocation: {
                                loc: {
                                    type: 'Point',
                                    coordinates: [
                                        environment_1.environment.DEFAULT_LONGITUDE,
                                        environment_1.environment.DEFAULT_LATITUDE,
                                    ],
                                },
                                city: fakeInvite.CITY,
                                postcode: fakeInvite.POSTCODE,
                                streetAddress: fakeInvite.ADDRESS,
                                house: fakeInvite.HOUSE,
                                countryId: fakeInvite.COUNTRY_ID,
                                _id: fakeInvite.ID,
                                _createdAt: fakeInvite.CREATED_AT,
                                _updatedAt: fakeInvite.UPDATED_AT,
                            },
                            apartment: fakeInvite.APARTMENT,
                            code: fakeInvite.CODE.toString(),
                            _createdAt: fakeInvite.CREATED_AT,
                            _updatedAt: fakeInvite.UPDATED_AT,
                        };
                        return [4, this.register(invite)];
                    case 1:
                        _a.sent();
                        this._addOrdersToNewUser();
                        return [2];
                    case 2:
                        _a.trys.push([2, 11, , 12]);
                        _a.label = 3;
                    case 3:
                        _a.trys.push([3, 5, , 6]);
                        return [4, geolocation_1.Geolocation.getCurrentPosition()];
                    case 4:
                        coords = (_a.sent()).coords;
                        location_1 = {
                            type: 'Point',
                            coordinates: [coords.longitude, coords.latitude],
                        };
                        return [3, 6];
                    case 5:
                        error_1 = _a.sent();
                        console.log('Error getting location', error_1);
                        return [3, 6];
                    case 6: return [4, this.inviteRouter
                            .getByCode({
                            location: location_1,
                            inviteCode: code.toString(),
                        })
                            .pipe(operators_1.first())
                            .toPromise()];
                    case 7:
                        invite = _a.sent();
                        if (!(invite != null)) return [3, 9];
                        return [4, this.register(invite)];
                    case 8:
                        _a.sent();
                        return [3, 10];
                    case 9:
                        alert('Wrong code!');
                        _a.label = 10;
                    case 10: return [3, 12];
                    case 11:
                        err_1 = _a.sent();
                        console.error(err_1);
                        return [3, 12];
                    case 12: return [2];
                }
            });
        });
    };
    ByCodePage.prototype.register = function (invite) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var user;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.userAuthRouter.register({
                            user: {
                                apartment: invite.apartment,
                                geoLocation: invite.geoLocation,
                            },
                        })];
                    case 1:
                        user = _a.sent();
                        this.store.userId = user.id;
                        if (this.store.backToDetails) {
                            this.goToDetailsPage();
                            this.store.backToDetails = null;
                            return [2];
                        }
                        return [4, this.router.navigate(['/products'], { skipLocationChange: true })];
                    case 2:
                        _a.sent();
                        this._hasNewcustomer = true;
                        return [2];
                }
            });
        });
    };
    ByCodePage.prototype.goToInviteByLocation = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.router.navigateByUrl('invite/by-location')];
                    case 1:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    ByCodePage.prototype.goToDetailsPage = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var id;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = this.store.backToDetails;
                        return [4, this.router.navigate(["/products/product-details/" + id], {
                                skipLocationChange: true,
                                queryParams: {
                                    backUrl: '/products',
                                    warehouseId: this.store.warehouseId,
                                },
                            })];
                    case 1:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    ByCodePage.prototype._addOrdersToNewUser = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.store.userId) return [3, 2];
                        return [4, this._ordersService
                                .generateOrdersByCustomerId(40, this.store.userId)
                                .toPromise()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2];
                }
            });
        });
    };
    ByCodePage.prototype.ngOnDestroy = function () {
        console.warn('ByCodePage did leave');
        this.ngDestroy$.next();
        this.ngDestroy$.complete();
    };
    ByCodePage = tslib_1.__decorate([
        core_1.Component({
            selector: 'e-cu-by-code',
            templateUrl: './by-code.page.html',
            styleUrls: ['./by-code.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [store_service_1.Store,
            invite_router_service_1.InviteRouter,
            user_auth_router_service_1.UserAuthRouter,
            router_1.Router,
            orders_service_1.OrdersService])
    ], ByCodePage);
    return ByCodePage;
}());
exports.ByCodePage = ByCodePage;
//# sourceMappingURL=by-code.page.js.map