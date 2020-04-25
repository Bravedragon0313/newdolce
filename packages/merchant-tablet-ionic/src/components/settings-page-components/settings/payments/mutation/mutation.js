"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var angular_1 = require("@ionic/angular");
var PaymentGateways_1 = tslib_1.__importStar(require("@modules/server.common/enums/PaymentGateways"));
var operators_1 = require("rxjs/operators");
var currencies_service_1 = require("services/currencies.service");
var rxjs_1 = require("rxjs");
var PaymentMutationComponent = (function () {
    function PaymentMutationComponent(modalController, currenciesService) {
        this.modalController = modalController;
        this.currenciesService = currenciesService;
        this.currenciesCodes = [];
        this.paymentGateways = PaymentGateways_1.default;
        this.newConfigureObject = new rxjs_1.Subject();
        this.loadCurrenciesCodes();
    }
    Object.defineProperty(PaymentMutationComponent.prototype, "titleText", {
        get: function () {
            return (this.configureObject ? 'Update' : 'Add') + "  " + PaymentGateways_1.paymentGatewaysToString(this.paymentGateway) + " gateway";
        },
        enumerable: true,
        configurable: true
    });
    PaymentMutationComponent.prototype.cancelModal = function (newConfigureObject) {
        this.modalController.dismiss(newConfigureObject);
    };
    PaymentMutationComponent.prototype.updateConfigureObject = function (e) {
        this.newConfigureObject.next(e);
    };
    PaymentMutationComponent.prototype.loadCurrenciesCodes = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var res;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.currenciesService
                            .getCurrencies()
                            .pipe(operators_1.first())
                            .toPromise()];
                    case 1:
                        res = _a.sent();
                        if (res) {
                            this.currenciesCodes = res.map(function (r) { return r.currencyCode; });
                        }
                        return [2];
                }
            });
        });
    };
    PaymentMutationComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'merchant-payments-mutation',
            templateUrl: 'mutation.html',
            styleUrls: ['mutation.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [angular_1.ModalController,
            currencies_service_1.CurrenciesService])
    ], PaymentMutationComponent);
    return PaymentMutationComponent;
}());
exports.PaymentMutationComponent = PaymentMutationComponent;
//# sourceMappingURL=mutation.js.map