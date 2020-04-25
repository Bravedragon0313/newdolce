"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var ChooseCustomerOptionComponent = (function () {
    function ChooseCustomerOptionComponent() {
        this.optionEmitter = new core_1.EventEmitter();
    }
    ChooseCustomerOptionComponent.prototype.chooseOption = function (optionBit) {
        this.optionEmitter.emit(optionBit);
    };
    tslib_1.__decorate([
        core_1.Output(),
        tslib_1.__metadata("design:type", Object)
    ], ChooseCustomerOptionComponent.prototype, "optionEmitter", void 0);
    ChooseCustomerOptionComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'choose-customer-option',
            styles: [
                'button { padding: 3.5%; background: none; border: 1px solid; } button:hover { color: #bd4742; border-color: #bd4742; }',
            ],
            templateUrl: './choose-customer-option.component.html',
        })
    ], ChooseCustomerOptionComponent);
    return ChooseCustomerOptionComponent;
}());
exports.ChooseCustomerOptionComponent = ChooseCustomerOptionComponent;
//# sourceMappingURL=choose-customer-option.component.js.map