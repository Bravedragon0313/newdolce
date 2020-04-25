"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var settings_1 = require("./settings");
var payments_1 = require("./payments/payments");
var common_1 = require("@angular/common");
var core_2 = require("@ngx-translate/core");
var angular_1 = require("@ionic/angular");
var forms_1 = require("@angular/forms");
var ng_select_1 = require("@ng-select/ng-select");
var mutation_1 = require("./payments/mutation/mutation");
var confirm_delete_popup_module_1 = require("components/confirm-delete-popup/confirm-delete-popup.module");
var stripe_1 = require("./payments/stripe/stripe");
var file_uploader_module_1 = require("components/file-uploader/file-uploader.module");
var currencies_service_1 = require("services/currencies.service");
var payPal_1 = require("./payments/payPal/payPal");
var MerchantSettingsComponentModule = (function () {
    function MerchantSettingsComponentModule() {
    }
    MerchantSettingsComponentModule = tslib_1.__decorate([
        core_1.NgModule({
            declarations: [
                settings_1.SettingsComponent,
                payments_1.SettingsPaymentsComponent,
                mutation_1.PaymentMutationComponent,
                stripe_1.StripeGatewayComponent,
                payPal_1.PayPalGatewayComponent,
            ],
            entryComponents: [mutation_1.PaymentMutationComponent],
            imports: [
                common_1.CommonModule,
                core_2.TranslateModule.forChild(),
                angular_1.IonicModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                ng_select_1.NgSelectModule,
                confirm_delete_popup_module_1.ConfirmDeletePopupModule,
                file_uploader_module_1.FileUploaderModule,
            ],
            exports: [settings_1.SettingsComponent],
            providers: [currencies_service_1.CurrenciesService],
        })
    ], MerchantSettingsComponentModule);
    return MerchantSettingsComponentModule;
}());
exports.MerchantSettingsComponentModule = MerchantSettingsComponentModule;
//# sourceMappingURL=settings.module.js.map