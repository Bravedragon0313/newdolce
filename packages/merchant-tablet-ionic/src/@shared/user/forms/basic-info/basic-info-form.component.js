"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var User_1 = tslib_1.__importDefault(require("@modules/server.common/entities/User"));
var users_service_1 = require("../../../../services/users.service");
var helpers_1 = require("../../../forms/helpers");
var angular_1 = require("@ionic/angular");
var BasicInfoFormComponent = (function () {
    function BasicInfoFormComponent(_usersService, alertController) {
        this._usersService = _usersService;
        this.alertController = alertController;
        this._ngDestroy$ = new rxjs_1.Subject();
    }
    BasicInfoFormComponent_1 = BasicInfoFormComponent;
    Object.defineProperty(BasicInfoFormComponent.prototype, "firstName", {
        get: function () {
            return this.form.get('firstName');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BasicInfoFormComponent.prototype, "lastName", {
        get: function () {
            return this.form.get('lastName');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BasicInfoFormComponent.prototype, "email", {
        get: function () {
            return this.form.get('email');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BasicInfoFormComponent.prototype, "image", {
        get: function () {
            return this.form.get('image');
        },
        enumerable: true,
        configurable: true
    });
    BasicInfoFormComponent.prototype.ngOnInit = function () {
        BasicInfoFormComponent_1.initialize(this._usersService, this._ngDestroy$, this.userData);
        this.loadData();
    };
    BasicInfoFormComponent.prototype.deleteImg = function () {
        this.image.setValue('');
    };
    BasicInfoFormComponent.initialize = function (usersService, ngDestroy, userData) {
        var _this = this;
        usersService
            .getUsers()
            .pipe(operators_1.takeUntil(ngDestroy))
            .subscribe(function (usersResult) {
            _this._users = usersResult;
        });
        this._user = userData;
    };
    BasicInfoFormComponent.buildForm = function (formBuilder) {
        var _this = this;
        var emailSearch$ = new rxjs_1.Subject();
        var isSearchRdy = false;
        return formBuilder.group({
            firstName: [''],
            lastName: [''],
            email: [
                '',
                [
                    function (control) {
                        return control.value ? forms_1.Validators.email(control) : null;
                    },
                ],
                function (ctrlEmail) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                    var _this = this;
                    return tslib_1.__generator(this, function (_a) {
                        if (!isSearchRdy) {
                            emailSearch$.pipe(operators_1.debounceTime(500)).subscribe(function () {
                                var hasExistedEmail = _this._users.some(function (u) { return u.email === ctrlEmail.value; });
                                if (hasExistedEmail &&
                                    _this._user &&
                                    _this._user.email !== ctrlEmail.value) {
                                    ctrlEmail.setErrors({ emailTaken: true });
                                }
                            });
                            isSearchRdy = true;
                        }
                        if (isSearchRdy &&
                            ctrlEmail.value &&
                            ctrlEmail.value.length > 0) {
                            emailSearch$.next();
                        }
                        return [2];
                    });
                }); },
            ],
            image: [''],
        });
    };
    BasicInfoFormComponent.prototype.getValue = function () {
        var basicInfo = this.form.getRawValue();
        return tslib_1.__assign(tslib_1.__assign({ firstName: basicInfo.firstName, lastName: basicInfo.lastName }, (basicInfo.email ? { email: basicInfo.email } : {})), { image: basicInfo.image });
    };
    BasicInfoFormComponent.prototype.setValue = function (basicInfo) {
        helpers_1.FormHelpers.deepMark(this.form, 'dirty');
        this.form.setValue({
            firstName: basicInfo.firstName ? basicInfo.firstName : '',
            lastName: basicInfo.lastName ? basicInfo.lastName : '',
            email: basicInfo.email ? basicInfo.email : '',
            image: basicInfo.image ? basicInfo.image : '',
        });
    };
    BasicInfoFormComponent.prototype.ngOnDestroy = function () {
        this._ngDestroy$.next();
        this._ngDestroy$.complete();
    };
    BasicInfoFormComponent.prototype.loadData = function () {
        var userData = this.userData;
        if (userData) {
            this.firstName.setValue(userData.firstName);
            this.lastName.setValue(userData.lastName);
            this.email.setValue(userData.email);
            this.image.setValue(userData.image);
        }
    };
    var BasicInfoFormComponent_1;
    BasicInfoFormComponent._users = [];
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", forms_1.FormGroup)
    ], BasicInfoFormComponent.prototype, "form", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", User_1.default)
    ], BasicInfoFormComponent.prototype, "userData", void 0);
    BasicInfoFormComponent = BasicInfoFormComponent_1 = tslib_1.__decorate([
        core_1.Component({
            selector: 'basic-info-form',
            styleUrls: ['./basic-info-form.component.scss'],
            templateUrl: 'basic-info-form.component.html',
        }),
        tslib_1.__metadata("design:paramtypes", [users_service_1.UsersService,
            angular_1.AlertController])
    ], BasicInfoFormComponent);
    return BasicInfoFormComponent;
}());
exports.BasicInfoFormComponent = BasicInfoFormComponent;
//# sourceMappingURL=basic-info-form.component.js.map