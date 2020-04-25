"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var angular_1 = require("@ionic/angular");
var customer_email_popup_1 = require("pages/+customers/customer-email-popup/customer-email-popup");
var EmailComponent = (function () {
    function EmailComponent(modalCtrl) {
        this.modalCtrl = modalCtrl;
    }
    EmailComponent.prototype.ngOnInit = function () {
        this.user = this.rowData.user;
    };
    EmailComponent.prototype.presentCustomerEmailPopup = function (user) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var modal;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.modalCtrl.create({
                            component: customer_email_popup_1.CustomerEmailPopupPage,
                            componentProps: { user: user },
                            cssClass: 'customer-email',
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4, modal.present()];
                    case 2:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    EmailComponent = tslib_1.__decorate([
        core_1.Component({
            template: "\n\t\t<div class=\"text-center\">\n\t\t\t<ion-icon\n\t\t\t\t*ngIf=\"user.email\"\n\t\t\t\tname=\"mail\"\n\t\t\t\tclass=\"mail-icon icon icon-md ion-md-mail\"\n\t\t\t\t(click)=\"presentCustomerEmailPopup(user)\"\n\t\t\t>\n\t\t\t</ion-icon>\n\t\t</div>\n\t",
        }),
        tslib_1.__metadata("design:paramtypes", [angular_1.ModalController])
    ], EmailComponent);
    return EmailComponent;
}());
exports.EmailComponent = EmailComponent;
//# sourceMappingURL=email.js.map