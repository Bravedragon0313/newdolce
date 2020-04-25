"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var ImageUserComponent = (function () {
    function ImageUserComponent() {
    }
    ImageUserComponent.prototype.ngOnInit = function () {
        this.user = this.rowData.user;
    };
    ImageUserComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'customer-image-view',
            styleUrls: ['./image.scss'],
            template: "\n\t\t<span class=\"image-component\">\n\t\t\t<img *ngIf=\"user?.image\" src=\"{{ user.image }}\" />\n\t\t</span>\n\t",
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], ImageUserComponent);
    return ImageUserComponent;
}());
exports.ImageUserComponent = ImageUserComponent;
//# sourceMappingURL=image.js.map