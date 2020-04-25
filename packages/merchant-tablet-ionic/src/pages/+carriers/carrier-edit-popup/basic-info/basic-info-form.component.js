"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var rxjs_1 = require("rxjs");
var Carrier_1 = tslib_1.__importDefault(require("@modules/server.common/entities/Carrier"));
var BasicInfoFormComponent = (function () {
    function BasicInfoFormComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this._ngDestroy$ = new rxjs_1.Subject();
        this.buildForm(this.formBuilder);
    }
    BasicInfoFormComponent_1 = BasicInfoFormComponent;
    BasicInfoFormComponent.prototype.ngOnDestroy = function () {
        this._ngDestroy$.next();
        this._ngDestroy$.complete();
    };
    BasicInfoFormComponent.prototype.ngOnInit = function () {
        this.bindFormControls();
        this.loadData();
    };
    Object.defineProperty(BasicInfoFormComponent.prototype, "isFirstNameValid", {
        get: function () {
            return (this.firstName.errors &&
                (this.firstName.dirty || this.firstName.touched));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BasicInfoFormComponent.prototype, "isLastNameValid", {
        get: function () {
            return (this.lastName.errors &&
                (this.lastName.dirty || this.lastName.touched));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BasicInfoFormComponent.prototype, "isPhoneValid", {
        get: function () {
            return this.phone && (this.phone.dirty || this.phone.touched);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BasicInfoFormComponent.prototype, "isEmailValid", {
        get: function () {
            return this.email && (this.email.dirty || this.email.touched);
        },
        enumerable: true,
        configurable: true
    });
    BasicInfoFormComponent.prototype.buildForm = function (formBuilder) {
        this.form = formBuilder.group({
            firstName: [
                '',
                [
                    forms_1.Validators.required,
                    forms_1.Validators.pattern(new RegExp("^[a-z ,.'-]+$", 'i')),
                ],
            ],
            lastName: [
                '',
                [
                    forms_1.Validators.required,
                    forms_1.Validators.pattern(new RegExp("^[a-z ,.'-]+$", 'i')),
                ],
            ],
            phone: [
                '',
                [
                    forms_1.Validators.required,
                    forms_1.Validators.pattern(BasicInfoFormComponent_1.phoneNumberRegex),
                ],
            ],
            email: ['', forms_1.Validators.required],
            logo: [''],
        });
    };
    BasicInfoFormComponent.prototype.bindFormControls = function () {
        this.firstName = this.form.get('firstName');
        this.lastName = this.form.get('lastName');
        this.logo = this.form.get('logo');
        this.email = this.form.get('email');
        this.phone = this.form.get('phone');
    };
    BasicInfoFormComponent.prototype.deleteImg = function () {
        this.logo.setValue('');
    };
    BasicInfoFormComponent.prototype.loadData = function () {
        if (this.carrier) {
            this.firstName.setValue(this.carrier.firstName);
            this.lastName.setValue(this.carrier.lastName);
            this.logo.setValue(this.carrier.logo);
            this.email.setValue(this.carrier.email);
            this.phone.setValue(this.carrier.phone);
        }
    };
    var BasicInfoFormComponent_1;
    BasicInfoFormComponent.phoneNumberRegex = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9x]*$/;
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Carrier_1.default)
    ], BasicInfoFormComponent.prototype, "carrier", void 0);
    BasicInfoFormComponent = BasicInfoFormComponent_1 = tslib_1.__decorate([
        core_1.Component({
            selector: 'basic-info-form',
            styleUrls: ['./basic-info-form.component.scss'],
            templateUrl: 'basic-info-form.component.html',
        }),
        tslib_1.__metadata("design:paramtypes", [forms_1.FormBuilder])
    ], BasicInfoFormComponent);
    return BasicInfoFormComponent;
}());
exports.BasicInfoFormComponent = BasicInfoFormComponent;
//# sourceMappingURL=basic-info-form.component.js.map