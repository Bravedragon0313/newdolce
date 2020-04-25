"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var rxjs_1 = require("rxjs");
var PaymentGateways_1 = tslib_1.__importDefault(require("@modules/server.common/enums/PaymentGateways"));
var operators_1 = require("rxjs/operators");
var StripeGatewayComponent = (function () {
    function StripeGatewayComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.currenciesCodes = [];
        this.isValidChange = new core_1.EventEmitter();
        this.configureObject = new rxjs_1.Subject();
        this._ngDestroy$ = new rxjs_1.Subject();
    }
    StripeGatewayComponent.prototype.ngOnInit = function () {
        this.buildForm(this.formBuilder);
        this.bindFormControls();
        this.onFormChanges();
    };
    StripeGatewayComponent.prototype.deleteImg = function () {
        this.companyBrandLogo.setValue('');
    };
    StripeGatewayComponent.prototype.ngOnDestroy = function () {
        this.configureObject.next(this.getConfigureObject());
    };
    StripeGatewayComponent.prototype.onUrlChanges = function (isInvalid) {
        this.invalidUrl = isInvalid;
        this.isValid = this.form.valid && !isInvalid;
        this.isValidChange.emit(this.isValid);
    };
    StripeGatewayComponent.prototype.buildForm = function (formBuilder) {
        this.form = formBuilder.group({
            payButtontext: [
                this.data ? this.data.payButtontext : '',
                [forms_1.Validators.required],
            ],
            currency: [
                this.data ? this.data.currency : this.defaultCurrency,
                [forms_1.Validators.required],
            ],
            companyBrandLogo: [
                this.data
                    ? this.data.companyBrandLogo
                    : this.defaultCompanyBrandLogo,
                [forms_1.Validators.required],
            ],
            publishableKey: [
                this.data ? this.data.publishableKey : '',
                forms_1.Validators.required,
            ],
            allowRememberMe: [this.data ? this.data.allowRememberMe : ''],
        });
    };
    StripeGatewayComponent.prototype.bindFormControls = function () {
        this.payButtontext = this.form.get('payButtontext');
        this.currency = this.form.get('currency');
        this.companyBrandLogo = this.form.get('companyBrandLogo');
        this.publishableKey = this.form.get('publishableKey');
        this.allowRememberMe = this.form.get('allowRememberMe');
    };
    StripeGatewayComponent.prototype.getConfigureObject = function () {
        return {
            paymentGateway: PaymentGateways_1.default.Stripe,
            configureObject: this.form.getRawValue(),
        };
    };
    StripeGatewayComponent.prototype.onFormChanges = function () {
        var _this = this;
        this.form.statusChanges
            .pipe(operators_1.takeUntil(this._ngDestroy$))
            .subscribe(function (value) {
            _this.isValid = _this.form.valid && !_this.invalidUrl;
            _this.isValidChange.emit(_this.isValid);
        });
    };
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Array)
    ], StripeGatewayComponent.prototype, "currenciesCodes", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", String)
    ], StripeGatewayComponent.prototype, "defaultCompanyBrandLogo", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", String)
    ], StripeGatewayComponent.prototype, "defaultCurrency", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Object)
    ], StripeGatewayComponent.prototype, "data", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], StripeGatewayComponent.prototype, "isValid", void 0);
    tslib_1.__decorate([
        core_1.Output(),
        tslib_1.__metadata("design:type", Object)
    ], StripeGatewayComponent.prototype, "isValidChange", void 0);
    tslib_1.__decorate([
        core_1.Output(),
        tslib_1.__metadata("design:type", Object)
    ], StripeGatewayComponent.prototype, "configureObject", void 0);
    StripeGatewayComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'e-cu-stripe-gateway',
            templateUrl: './stripe.html',
            styleUrls: ['stripe.scss', '../mutation/mutation.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [forms_1.FormBuilder])
    ], StripeGatewayComponent);
    return StripeGatewayComponent;
}());
exports.StripeGatewayComponent = StripeGatewayComponent;
//# sourceMappingURL=stripe.js.map