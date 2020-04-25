"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var rxjs_1 = require("rxjs");
var core_2 = require("@ngx-translate/core");
var AccountFormComponent = (function () {
    function AccountFormComponent(formBuilder, translate) {
        this.formBuilder = formBuilder;
        this.translate = translate;
        this._ngDestroy$ = new rxjs_1.Subject();
    }
    AccountFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.buildForm(this.formBuilder);
        this.bindFormControls();
        this.repeatPassword = this.form.get('repeatPassword');
        this.$password = this.password.valueChanges.subscribe(function (res) {
            _this.repeatPassword.setValue('');
        });
    };
    AccountFormComponent.prototype.ngOnChanges = function () { };
    AccountFormComponent.prototype.buildForm = function (formBuilder) {
        var _this = this;
        this.form = formBuilder.group({
            userName: ['', forms_1.Validators.required],
            password: ['', forms_1.Validators.required],
            repeatPassword: [
                '',
                [
                    function (control) {
                        if (_this.password) {
                            return control.value === _this.password.value
                                ? null
                                : { validUrl: true };
                        }
                        else {
                            return null;
                        }
                    },
                ],
            ],
            isActive: [true, forms_1.Validators.required],
            isSharedCarrier: [false],
        });
    };
    AccountFormComponent.prototype.bindFormControls = function () {
        this.userName = this.form.get('userName');
        this.password = this.form.get('password');
        this.repeatPassword = this.form.get('repeatPassword');
        this.isActive = this.form.get('isActive');
        this.isSharedCarrier = this.form.get('isSharedCarrier');
    };
    AccountFormComponent.prototype.ngOnDestroy = function () {
        if (this.$password) {
            this.$password.unsubscribe();
        }
    };
    AccountFormComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'account-form',
            styleUrls: ['./account-form.component.scss'],
            templateUrl: 'account-form.component.html',
        }),
        tslib_1.__metadata("design:paramtypes", [forms_1.FormBuilder,
            core_2.TranslateService])
    ], AccountFormComponent);
    return AccountFormComponent;
}());
exports.AccountFormComponent = AccountFormComponent;
//# sourceMappingURL=account-form.component.js.map