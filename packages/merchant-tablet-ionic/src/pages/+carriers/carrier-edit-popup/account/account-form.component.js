"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var Carrier_1 = tslib_1.__importDefault(require("@modules/server.common/entities/Carrier"));
var AccountFormComponent = (function () {
    function AccountFormComponent(formBuilder) {
        this.formBuilder = formBuilder;
    }
    AccountFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.buildForm(this.formBuilder);
        this.bindFormControls();
        this.repeatPassword = this.form.get('repeatPassword');
        this.$password = this.password.valueChanges.subscribe(function (res) {
            _this.repeatPassword.setValue('');
        });
        this.loadData();
    };
    AccountFormComponent.prototype.ngOnChanges = function () { };
    AccountFormComponent.prototype.buildForm = function (formBuilder) {
        var _this = this;
        this.form = formBuilder.group({
            userName: ['', forms_1.Validators.required],
            password: [''],
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
    AccountFormComponent.prototype.loadData = function () {
        if (this.carrier) {
            this.userName.setValue(this.carrier.username);
            this.isActive.setValue(this.carrier.isActive);
            this.isSharedCarrier.setValue(this.carrier.isSharedCarrier);
        }
    };
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Carrier_1.default)
    ], AccountFormComponent.prototype, "carrier", void 0);
    AccountFormComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'account-form',
            styleUrls: ['./account-form.component.scss'],
            templateUrl: 'account-form.component.html',
        }),
        tslib_1.__metadata("design:paramtypes", [forms_1.FormBuilder])
    ], AccountFormComponent);
    return AccountFormComponent;
}());
exports.AccountFormComponent = AccountFormComponent;
//# sourceMappingURL=account-form.component.js.map