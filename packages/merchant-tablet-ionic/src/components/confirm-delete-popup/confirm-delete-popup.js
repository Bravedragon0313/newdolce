"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var angular_1 = require("@ionic/angular");
var ConfirmDeletePopupPage = (function () {
    function ConfirmDeletePopupPage(modalCtrl) {
        this.modalCtrl = modalCtrl;
    }
    ConfirmDeletePopupPage.prototype.cancelModal = function () {
        this.modalCtrl.dismiss();
    };
    ConfirmDeletePopupPage.prototype.confirmDelete = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                this.modalCtrl.dismiss(true);
                return [2];
            });
        });
    };
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Object)
    ], ConfirmDeletePopupPage.prototype, "data", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], ConfirmDeletePopupPage.prototype, "isRemove", void 0);
    ConfirmDeletePopupPage = tslib_1.__decorate([
        core_1.Component({
            selector: 'confirm-delete-popup',
            templateUrl: 'confirm-delete-popup.html',
            styleUrls: ['./confirm-delete-popup.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [angular_1.ModalController])
    ], ConfirmDeletePopupPage);
    return ConfirmDeletePopupPage;
}());
exports.ConfirmDeletePopupPage = ConfirmDeletePopupPage;
//# sourceMappingURL=confirm-delete-popup.js.map