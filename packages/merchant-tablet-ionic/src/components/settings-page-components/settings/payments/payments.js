"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var Warehouse_1 = tslib_1.__importDefault(require("@modules/server.common/entities/Warehouse"));
var PaymentGateways_1 = tslib_1.__importStar(require("@modules/server.common/enums/PaymentGateways"));
var angular_1 = require("@ionic/angular");
var mutation_1 = require("./mutation/mutation");
var confirm_delete_popup_1 = require("components/confirm-delete-popup/confirm-delete-popup");
var Currency_1 = require("@modules/server.common/entities/Currency");
var entities_1 = require("@modules/server.common/entities");
var operators_1 = require("rxjs/operators");
var SettingsPaymentsComponent = (function () {
    function SettingsPaymentsComponent(modalCtrl) {
        this.modalCtrl = modalCtrl;
        this.myPaymentsGateways = [];
        this.paymentsGateways = [];
    }
    SettingsPaymentsComponent.prototype.ngOnInit = function () {
        var _this = this;
        var merchantPaymentsGateways = this.currWarehouse.paymentGateways.map(function (mpg) { return mpg.paymentGateway; });
        var allPaymentGateways = Object.values(PaymentGateways_1.default).filter(function (r) { return !isNaN(r); });
        if (merchantPaymentsGateways) {
            this.myPaymentsGateways = allPaymentGateways.filter(function (pg) {
                return merchantPaymentsGateways.includes(pg);
            });
        }
        this.paymentsGateways = allPaymentGateways.filter(function (pg) { return !_this.myPaymentsGateways.includes(pg); });
        this.showPaymentsGateways = true;
    };
    Object.defineProperty(SettingsPaymentsComponent.prototype, "isValid", {
        get: function () {
            return (this.hasChanged &&
                (!this.currWarehouse.isPaymentEnabled ||
                    this.myPaymentsGateways.length > 0));
        },
        enumerable: true,
        configurable: true
    });
    SettingsPaymentsComponent.prototype.getPaymentName = function (pg) {
        return PaymentGateways_1.paymentGatewaysToString(pg);
    };
    SettingsPaymentsComponent.prototype.getPaymentLogo = function (pg) {
        return PaymentGateways_1.paymentGatewaysLogo(pg);
    };
    SettingsPaymentsComponent.prototype.showMutation = function (e) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var paymentGateway, modal, data, res_1;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        paymentGateway = this.currWarehouse.paymentGateways.find(function (pg) { return pg.paymentGateway === e; });
                        return [4, this.modalCtrl.create({
                                component: mutation_1.PaymentMutationComponent,
                                componentProps: {
                                    configureObject: paymentGateway && paymentGateway.configureObject,
                                    paymentGateway: e,
                                    defaultCompanyBrandLogo: this.currWarehouse.logo,
                                    defaultCurrency: Currency_1.countriesDefaultCurrencies[entities_1.Country[this.currWarehouse.geoLocation.countryId]],
                                },
                                cssClass: 'payments-mutation-wrapper',
                            })];
                    case 1:
                        modal = _a.sent();
                        return [4, modal.present()];
                    case 2:
                        _a.sent();
                        return [4, modal.onDidDismiss()];
                    case 3:
                        data = (_a.sent()).data;
                        if (!data) return [3, 5];
                        return [4, data.pipe(operators_1.first()).toPromise()];
                    case 4:
                        res_1 = _a.sent();
                        this.currWarehouse.paymentGateways = this.currWarehouse.paymentGateways.filter(function (pg) { return pg.paymentGateway !== res_1.paymentGateway; });
                        this.currWarehouse.paymentGateways.push(res_1);
                        this.myPaymentsGateways = this.myPaymentsGateways.filter(function (pg) { return pg !== res_1.paymentGateway; });
                        this.myPaymentsGateways.push(res_1.paymentGateway);
                        this.paymentsGateways = this.paymentsGateways.filter(function (pg) { return pg !== res_1.paymentGateway; });
                        this.hasChanged = true;
                        _a.label = 5;
                    case 5:
                        this.selectedMyPaymentsGateways = [];
                        this.selectedPaymentsGateways = [];
                        return [2];
                }
            });
        });
    };
    SettingsPaymentsComponent.prototype.confirmRemovePaymentGateway = function (pg) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var modal, res;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.modalCtrl.create({
                            component: confirm_delete_popup_1.ConfirmDeletePopupPage,
                            componentProps: {
                                data: {
                                    image: this.getPaymentLogo(pg),
                                    name: this.getPaymentName(pg),
                                },
                                isRemove: true,
                            },
                            cssClass: 'confirm-delete-wrapper',
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4, modal.present()];
                    case 2:
                        _a.sent();
                        return [4, modal.onDidDismiss()];
                    case 3:
                        res = _a.sent();
                        if (res.data) {
                            this.removePaymentGateway(pg);
                        }
                        return [2];
                }
            });
        });
    };
    SettingsPaymentsComponent.prototype.removePaymentGateway = function (pg) {
        this.paymentsGateways = tslib_1.__spreadArrays(this.paymentsGateways, [pg]);
        this.myPaymentsGateways = this.myPaymentsGateways.filter(function (existedPG) { return existedPG !== pg; });
        this.currWarehouse.paymentGateways = this.currWarehouse.paymentGateways.filter(function (existedPG) { return existedPG.paymentGateway !== pg; });
        this.hasChanged = true;
    };
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Warehouse_1.default)
    ], SettingsPaymentsComponent.prototype, "currWarehouse", void 0);
    SettingsPaymentsComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'merchant-payments-settings',
            templateUrl: 'payments.html',
            styleUrls: ['payments.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [angular_1.ModalController])
    ], SettingsPaymentsComponent);
    return SettingsPaymentsComponent;
}());
exports.SettingsPaymentsComponent = SettingsPaymentsComponent;
//# sourceMappingURL=payments.js.map