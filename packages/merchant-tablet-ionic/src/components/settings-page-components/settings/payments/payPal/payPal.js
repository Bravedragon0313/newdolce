"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var forms_1 = require("@angular/forms");
var operators_1 = require("rxjs/operators");
var PaymentGateways_1 = tslib_1.__importDefault(require("@modules/server.common/enums/PaymentGateways"));
var PayPalGatewayComponent = (function () {
    function PayPalGatewayComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.currenciesCodes = [];
        this.isValidChange = new core_1.EventEmitter();
        this.configureObject = new rxjs_1.Subject();
        this.payPalTypes = ['sandbox', 'live'];
        this._ngDestroy$ = new rxjs_1.Subject();
    }
    PayPalGatewayComponent.prototype.ngOnInit = function () {
        this.buildForm(this.formBuilder);
        this.bindFormControls();
        this.onFormChanges();
    };
    PayPalGatewayComponent.prototype.ngOnDestroy = function () {
        this.configureObject.next(this.getConfigureObject());
    };
    PayPalGatewayComponent.prototype.buildForm = function (formBuilder) {
        this.form = formBuilder.group({
            currency: [
                this.data ? this.data.currency : this.defaultCurrency,
                [forms_1.Validators.required],
            ],
            mode: [this.data ? this.data.mode : '', [forms_1.Validators.required]],
            publishableKey: [
                this.data ? this.data.publishableKey : '',
                [forms_1.Validators.required],
            ],
            secretKey: [
                this.data ? this.data.secretKey : '',
                forms_1.Validators.required,
            ],
            description: [
                this.data ? this.data.description : '',
                forms_1.Validators.required,
            ],
        });
    };
    PayPalGatewayComponent.prototype.bindFormControls = function () {
        this.currency = this.form.get('currency');
        this.mode = this.form.get('mode');
        this.publishableKey = this.form.get('publishableKey');
        this.secretKey = this.form.get('secretKey');
        this.description = this.form.get('description');
    };
    PayPalGatewayComponent.prototype.onFormChanges = function () {
        var _this = this;
        this.form.statusChanges
            .pipe(operators_1.takeUntil(this._ngDestroy$))
            .subscribe(function (value) {
            _this.isValid = _this.form.valid;
            _this.isValidChange.emit(_this.isValid);
        });
    };
    PayPalGatewayComponent.prototype.getConfigureObject = function () {
        return {
            paymentGateway: PaymentGateways_1.default.PayPal,
            configureObject: this.form.getRawValue(),
        };
    };
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Array)
    ], PayPalGatewayComponent.prototype, "currenciesCodes", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", String)
    ], PayPalGatewayComponent.prototype, "defaultCurrency", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Object)
    ], PayPalGatewayComponent.prototype, "data", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], PayPalGatewayComponent.prototype, "isValid", void 0);
    tslib_1.__decorate([
        core_1.Output(),
        tslib_1.__metadata("design:type", Object)
    ], PayPalGatewayComponent.prototype, "isValidChange", void 0);
    tslib_1.__decorate([
        core_1.Output(),
        tslib_1.__metadata("design:type", Object)
    ], PayPalGatewayComponent.prototype, "configureObject", void 0);
    PayPalGatewayComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'e-cu-paypal-gateway',
            templateUrl: './payPal.html',
            styleUrls: ['payPal.scss', '../mutation/mutation.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [forms_1.FormBuilder])
    ], PayPalGatewayComponent);
    return PayPalGatewayComponent;
}());
exports.PayPalGatewayComponent = PayPalGatewayComponent;
//# sourceMappingURL=payPal.js.map