"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var StoreSignComponent = (function () {
    function StoreSignComponent() {
    }
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], StoreSignComponent.prototype, "inStore", void 0);
    StoreSignComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'e-cu-store-sign',
            templateUrl: './store-sign.component.html',
            styleUrls: ['./store-sign.component.scss'],
        })
    ], StoreSignComponent);
    return StoreSignComponent;
}());
exports.StoreSignComponent = StoreSignComponent;
//# sourceMappingURL=store-sign.component.js.map