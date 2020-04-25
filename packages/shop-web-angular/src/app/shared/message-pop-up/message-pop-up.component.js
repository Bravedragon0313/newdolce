"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var dialog_1 = require("@angular/material/dialog");
var MessagePopUpComponent = (function () {
    function MessagePopUpComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.PREFIX = 'MESSAGE_POP_UP.';
    }
    MessagePopUpComponent.prototype.ngOnInit = function () {
        this.initializeText();
    };
    MessagePopUpComponent.prototype.initializeText = function () {
        this.modalTitle = this.PREFIX + this.data.modalTitle;
        this.commonText = this.PREFIX + this.data.commonText;
        this.cancelButton = this.PREFIX + this.data.cancelButton;
        this.confirmButton = this.PREFIX + this.data.confirmButton;
    };
    MessagePopUpComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    MessagePopUpComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'message-pop-up',
            styleUrls: ['./message-pop-up.component.scss'],
            templateUrl: './message-pop-up.component.html',
        }),
        tslib_1.__param(1, core_1.Inject(dialog_1.MAT_DIALOG_DATA)),
        tslib_1.__metadata("design:paramtypes", [dialog_1.MatDialogRef, Object])
    ], MessagePopUpComponent);
    return MessagePopUpComponent;
}());
exports.MessagePopUpComponent = MessagePopUpComponent;
//# sourceMappingURL=message-pop-up.component.js.map