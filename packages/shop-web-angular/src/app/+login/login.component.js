"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var dialog_1 = require("@angular/material/dialog");
var variables_1 = require("../../styles/variables");
var router_1 = require("@angular/router");
var invite_request_router_service_1 = require("@modules/client.common.angular2/routers/invite-request-router.service");
var invite_router_service_1 = require("@modules/client.common.angular2/routers/invite-router.service");
var operators_1 = require("rxjs/operators");
var user_router_service_1 = require("@modules/client.common.angular2/routers/user-router.service");
var environment_1 = require("environments/environment");
var rxjs_1 = require("rxjs");
var core_2 = require("@ngx-translate/core");
var message_pop_up_component_1 = require("app/shared/message-pop-up/message-pop-up.component");
var user_auth_router_service_1 = require("@modules/client.common.angular2/routers/user-auth-router.service");
var store_1 = require("app/services/store");
var MyErrorStateMatcher = (function () {
    function MyErrorStateMatcher() {
    }
    MyErrorStateMatcher.prototype.isErrorState = function (control, form) {
        var isSubmitted = form && form.submitted;
        return !!(control &&
            control.invalid &&
            (control.dirty || control.touched || isSubmitted));
    };
    return MyErrorStateMatcher;
}());
exports.MyErrorStateMatcher = MyErrorStateMatcher;
var LoginComponent = (function () {
    function LoginComponent(router, inviteRequestRouter, fb, inviteRouter, userRouter, translateService, dialog, userAuthRouter, store) {
        this.router = router;
        this.inviteRequestRouter = inviteRequestRouter;
        this.fb = fb;
        this.inviteRouter = inviteRouter;
        this.userRouter = userRouter;
        this.translateService = translateService;
        this.dialog = dialog;
        this.userAuthRouter = userAuthRouter;
        this.store = store;
        this.styleVariables = variables_1.styleVariables;
        this.msgAllowGPS = 'TO_BE_INVITED_ALLOW_GPS';
        this.confirmPopUpButton = 'OK';
        this.commonPopUpText = 'WRONG_CODE_TRY_AGAIN';
        this.modalTitleText = 'CONFIRMATION';
        this.toolbarDisabled = true;
        this.formControl = this.fb.group({
            code: [''],
        });
        this.matcher = new MyErrorStateMatcher();
        this.inviteAddress = null;
        this.authLogo = environment_1.environment.AUTH_LOGO;
        this.code = this.formControl.get('code');
        this._ngDestroy$ = new rxjs_1.Subject();
        this.addressLoad();
        this.HTTPS_SERVICES_ENDPOINT = environment_1.environment.HTTPS_SERVICES_ENDPOINT;
    }
    Object.defineProperty(LoginComponent.prototype, "isInvited", {
        get: function () {
            return localStorage.inviteRequestId;
        },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.openInvalidInviteCodeDialog = function () {
        var dialogRef = this.dialog.open(message_pop_up_component_1.MessagePopUpComponent, {
            width: '560px',
            data: {
                modalTitle: this.modalTitleText,
                confirmButton: this.confirmPopUpButton,
                commonText: this.commonPopUpText,
            },
        });
    };
    LoginComponent.prototype.openMsgAllowGPSDialog = function () {
        this.commonPopUpText = 'TO_BE_INVITED_ALLOW_GPS';
        var dialogRef = this.dialog.open(message_pop_up_component_1.MessagePopUpComponent, {
            width: '560px',
            data: {
                modalTitle: this.modalTitleText,
                confirmButton: this.confirmPopUpButton,
                commonText: this.commonPopUpText,
            },
        });
    };
    LoginComponent.prototype.getTranslate = function (key) {
        var translationResult = '';
        this.translateService.get(key).subscribe(function (res) {
            translationResult = res;
        });
        return translationResult;
    };
    LoginComponent.prototype.ngOnInit = function () {
        this.onCodeInputChange();
        return;
    };
    LoginComponent.prototype.loadByLocation = function () {
        this.router.navigate(['login/byLocation']);
    };
    LoginComponent.prototype.onCodeInputChange = function () {
        var _this = this;
        this.code.valueChanges.subscribe(function (code) {
            if (_this.code.value !== '') {
                if (code >= 1000 && code <= 9999) {
                    _this.onCodeInserted();
                }
                if (code > 9999) {
                    _this.code.setValue(("" + _this.code.value).slice(4, 5));
                }
            }
        });
    };
    LoginComponent.prototype.onCodeInserted = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                this.codeRef.nativeElement.querySelector('input').readOnly = true;
                navigator.geolocation.getCurrentPosition(function (_a) {
                    var coords = _a.coords;
                    return tslib_1.__awaiter(_this, void 0, void 0, function () {
                        var _b, longitude, latitude, invite;
                        return tslib_1.__generator(this, function (_c) {
                            switch (_c.label) {
                                case 0: return [4, [
                                        coords.longitude,
                                        coords.latitude,
                                    ]];
                                case 1:
                                    _b = _c.sent(), longitude = _b[0], latitude = _b[1];
                                    return [4, this.inviteRouter
                                            .getByCode({
                                            location: {
                                                type: 'Point',
                                                coordinates: [longitude, latitude],
                                            },
                                            inviteCode: this.code.value,
                                        })
                                            .pipe(operators_1.first())
                                            .toPromise()];
                                case 2:
                                    invite = _c.sent();
                                    this.codeRef.nativeElement.querySelector('input').readOnly = false;
                                    if (!(invite != null)) return [3, 4];
                                    return [4, this.register(invite)];
                                case 3:
                                    _c.sent();
                                    return [3, 5];
                                case 4:
                                    this.openInvalidInviteCodeDialog();
                                    this.code.setValue('');
                                    _c.label = 5;
                                case 5: return [2];
                            }
                        });
                    });
                }, function (err) {
                    _this.openMsgAllowGPSDialog();
                    _this.code.setValue('');
                });
                return [2];
            });
        });
    };
    LoginComponent.prototype.register = function (invite) {
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
                        this.router.navigate(['products']);
                        return [4, this.router.navigate(['products'])];
                    case 2:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    LoginComponent.prototype.addressLoad = function () {
        var _this = this;
        if (localStorage.inviteRequestId) {
            this.inviteRequestRouter
                .get(localStorage.inviteRequestId)
                .subscribe(function (result) {
                var address = result['geoLocation']['streetAddress'];
                var houseNumber = "" + result['geoLocation']['house'] + (result['apartment'] !== '0'
                    ? '/' + result['apartment']
                    : '');
                var city = result['geoLocation']['city'];
                _this.inviteAddress = address + " " + houseNumber + ", " + city;
            });
        }
    };
    LoginComponent.prototype.ngOnDestroy = function () {
        this._ngDestroy$.next();
        this._ngDestroy$.complete();
    };
    tslib_1.__decorate([
        core_1.ViewChild('codeRef', { read: core_1.ElementRef }),
        tslib_1.__metadata("design:type", core_1.ElementRef)
    ], LoginComponent.prototype, "codeRef", void 0);
    LoginComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'login',
            styleUrls: ['./login.component.scss'],
            templateUrl: './login.component.html',
        }),
        tslib_1.__metadata("design:paramtypes", [router_1.Router,
            invite_request_router_service_1.InviteRequestRouter,
            forms_1.FormBuilder,
            invite_router_service_1.InviteRouter,
            user_router_service_1.UserRouter,
            core_2.TranslateService,
            dialog_1.MatDialog,
            user_auth_router_service_1.UserAuthRouter,
            store_1.Store])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map