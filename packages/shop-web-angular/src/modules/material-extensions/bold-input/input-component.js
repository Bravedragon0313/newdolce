"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var InputComponent = (function () {
    function InputComponent() {
        this.placeholder = '';
        this.type = 'text';
        this.disabled = false;
        this.required = false;
        this.changes = new core_1.EventEmitter();
        this.touches = new core_1.EventEmitter();
    }
    Object.defineProperty(InputComponent.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (value) {
            if (this._value !== value) {
                this._value = value;
                this.changes.emit(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    InputComponent.prototype.writeValue = function (value) {
        if (typeof value !== 'string') {
            throw new Error('Written value is not string!');
        }
        if (value == null) {
            value = '';
        }
        this._value = value;
    };
    InputComponent.prototype.registerOnChange = function (fn) {
        this.changes.subscribe(fn);
    };
    InputComponent.prototype.registerOnTouched = function (fn) {
        this.touches.subscribe(fn);
    };
    InputComponent.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
    };
    InputComponent.prototype.touch = function () {
        this.touches.emit();
    };
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", String)
    ], InputComponent.prototype, "placeholder", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", String)
    ], InputComponent.prototype, "type", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], InputComponent.prototype, "disabled", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], InputComponent.prototype, "required", void 0);
    InputComponent = tslib_1.__decorate([
        core_1.Directive()
    ], InputComponent);
    return InputComponent;
}());
exports.InputComponent = InputComponent;
//# sourceMappingURL=input-component.js.map