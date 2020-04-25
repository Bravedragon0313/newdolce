"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var NoOrdersInfoComponent = (function () {
    function NoOrdersInfoComponent() {
        this.toggleOrderContainer = new core_1.EventEmitter();
    }
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", String)
    ], NoOrdersInfoComponent.prototype, "filterMode", void 0);
    tslib_1.__decorate([
        core_1.Output(),
        tslib_1.__metadata("design:type", core_1.EventEmitter)
    ], NoOrdersInfoComponent.prototype, "toggleOrderContainer", void 0);
    NoOrdersInfoComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'no-orders-info',
            templateUrl: 'no-orders-info.component.html',
            styleUrls: ['./no-orders-info.component.scss'],
        })
    ], NoOrdersInfoComponent);
    return NoOrdersInfoComponent;
}());
exports.NoOrdersInfoComponent = NoOrdersInfoComponent;
//# sourceMappingURL=no-orders-info.component.js.map