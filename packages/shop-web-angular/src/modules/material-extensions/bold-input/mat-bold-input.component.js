"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var core_2 = require("@angular/material/core");
var input_component_1 = require("./input-component");
var MatBoldInputComponent = (function (_super) {
    tslib_1.__extends(MatBoldInputComponent, _super);
    function MatBoldInputComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.rippleSpeedFactor = 2;
        _this.isFocused = false;
        _this.RIPPLE_FADE_IN_DURATION = 450;
        _this.focusTimeout = null;
        return _this;
    }
    MatBoldInputComponent_1 = MatBoldInputComponent;
    Object.defineProperty(MatBoldInputComponent.prototype, "isFocusing", {
        get: function () {
            return this.focusTimeout != null;
        },
        enumerable: true,
        configurable: true
    });
    MatBoldInputComponent.prototype.ngOnInit = function () {
        if (!this.color) {
            throw new Error("Attribute 'color' is required");
        }
        if (!this.focusedColor) {
            throw new Error("Attribute 'focusedColor' is required");
        }
    };
    MatBoldInputComponent.prototype.onFocus = function () {
        var _this = this;
        if (this.focusTimeout != null) {
            return;
        }
        this.focusTimeout = window.setTimeout(function () {
            _this.isFocused = true;
        }, this.RIPPLE_FADE_IN_DURATION / this.rippleSpeedFactor);
    };
    MatBoldInputComponent.prototype.onBlur = function () {
        this.isFocused = false;
        if (this.focusTimeout != null) {
            clearTimeout(this.focusTimeout);
            this.focusTimeout = null;
        }
    };
    var MatBoldInputComponent_1;
    tslib_1.__decorate([
        core_1.HostBinding('class.mat-focusing'),
        tslib_1.__metadata("design:type", Boolean),
        tslib_1.__metadata("design:paramtypes", [])
    ], MatBoldInputComponent.prototype, "isFocusing", null);
    tslib_1.__decorate([
        core_1.Input(),
        core_1.HostBinding('style.background-color'),
        tslib_1.__metadata("design:type", String)
    ], MatBoldInputComponent.prototype, "color", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", String)
    ], MatBoldInputComponent.prototype, "focusedColor", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Number)
    ], MatBoldInputComponent.prototype, "rippleSpeedFactor", void 0);
    tslib_1.__decorate([
        core_1.ViewChild(core_2.MatRipple),
        tslib_1.__metadata("design:type", core_2.MatRipple)
    ], MatBoldInputComponent.prototype, "ripple", void 0);
    tslib_1.__decorate([
        core_1.ViewChild('input'),
        tslib_1.__metadata("design:type", core_1.ElementRef)
    ], MatBoldInputComponent.prototype, "input", void 0);
    tslib_1.__decorate([
        core_1.HostBinding('class.mat-focused'),
        tslib_1.__metadata("design:type", Boolean)
    ], MatBoldInputComponent.prototype, "isFocused", void 0);
    MatBoldInputComponent = MatBoldInputComponent_1 = tslib_1.__decorate([
        core_1.Component({
            selector: 'mat-bold-input',
            styleUrls: ['./mat-bold-input.component.scss'],
            templateUrl: 'mat-bold-input.component.html',
            providers: [
                {
                    provide: forms_1.NG_VALUE_ACCESSOR,
                    useExisting: MatBoldInputComponent_1,
                    multi: true,
                },
            ],
        })
    ], MatBoldInputComponent);
    return MatBoldInputComponent;
}(input_component_1.InputComponent));
exports.MatBoldInputComponent = MatBoldInputComponent;
//# sourceMappingURL=mat-bold-input.component.js.map