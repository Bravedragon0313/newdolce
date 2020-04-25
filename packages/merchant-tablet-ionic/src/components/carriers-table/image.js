"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var store_service_1 = require("../../services/store.service");
var ImageComponent = (function () {
    function ImageComponent(store) {
        this.store = store;
    }
    ImageComponent.prototype.ngOnInit = function () {
        this.carrier = this.rowData.carrier;
    };
    ImageComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'carrier-image-view',
            styleUrls: ['./image.scss'],
            template: "\n\t\t<span class=\"image-component\">\n\t\t\t<img *ngIf=\"carrier?.logo\" src=\"{{ carrier.logo }}\" />\n\t\t</span>\n\t",
        }),
        tslib_1.__metadata("design:paramtypes", [store_service_1.Store])
    ], ImageComponent);
    return ImageComponent;
}());
exports.ImageComponent = ImageComponent;
//# sourceMappingURL=image.js.map