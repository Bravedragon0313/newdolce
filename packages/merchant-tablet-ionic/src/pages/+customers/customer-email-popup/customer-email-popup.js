"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var ngx_1 = require("@ionic-native/email-composer/ngx");
var angular_1 = require("@ionic/angular");
var CustomerEmailPopupPage = (function () {
    function CustomerEmailPopupPage(loadingCtrl, emailComposer, modalController) {
        this.loadingCtrl = loadingCtrl;
        this.emailComposer = emailComposer;
        this.modalController = modalController;
    }
    CustomerEmailPopupPage.prototype.attemptSendMail = function () {
        var _this = this;
        if (this.emailComposer.isAvailable()) {
            this.emailComposer.isAvailable().then(function (available) {
                if (available) {
                    var email = {
                        to: _this.email,
                    };
                    _this.emailComposer.open(email);
                }
            });
        }
    };
    CustomerEmailPopupPage.prototype.ngOnInit = function () {
        this.email = this.user.email;
    };
    CustomerEmailPopupPage.prototype.cancelModal = function () {
        this.modalController.dismiss();
    };
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Object)
    ], CustomerEmailPopupPage.prototype, "user", void 0);
    CustomerEmailPopupPage = tslib_1.__decorate([
        core_1.Component({
            selector: 'customer-email-popup',
            templateUrl: 'customer-email-popup.html',
            styleUrls: ['./customer-email-popup.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [angular_1.LoadingController,
            ngx_1.EmailComposer,
            angular_1.ModalController])
    ], CustomerEmailPopupPage);
    return CustomerEmailPopupPage;
}());
exports.CustomerEmailPopupPage = CustomerEmailPopupPage;
//# sourceMappingURL=customer-email-popup.js.map