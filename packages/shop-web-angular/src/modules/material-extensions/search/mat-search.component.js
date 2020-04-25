"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var button_1 = require("@angular/material/button");
var core_2 = require("@angular/material/core");
var MatSearchComponent = (function () {
    function MatSearchComponent() {
        this.searchLocation = new core_1.EventEmitter();
        this.detectLocation = new core_1.EventEmitter();
        this.isFocused = false;
        this.rippleSpeedFactor = 2;
        this.RIPPLE_FADE_IN_DURATION = 450;
        this.focusTimeout = null;
    }
    Object.defineProperty(MatSearchComponent.prototype, "isFocusing", {
        get: function () {
            return this.focusTimeout != null;
        },
        enumerable: true,
        configurable: true
    });
    MatSearchComponent.prototype.onFocus = function () {
        var _this = this;
        if (this.focusTimeout != null) {
            return;
        }
        this.focusTimeout = window.setTimeout(function () {
            _this.isFocused = true;
        }, this.RIPPLE_FADE_IN_DURATION / this.rippleSpeedFactor);
    };
    MatSearchComponent.prototype.onBlur = function () {
        this.isFocused = false;
        if (this.focusTimeout != null) {
            clearTimeout(this.focusTimeout);
            this.focusTimeout = null;
        }
    };
    MatSearchComponent.prototype.onInputEnter = function () {
        this.searchButton._elementRef.nativeElement.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }));
        this.searchButton._elementRef.nativeElement.dispatchEvent(new MouseEvent('click', { bubbles: true }));
        this.searchButton._elementRef.nativeElement.dispatchEvent(new MouseEvent('mouseup', { bubbles: true }));
    };
    MatSearchComponent.prototype.onSearch = function (e) {
        this.searchLocation.emit(this.input.nativeElement.value);
        e.preventDefault();
        this.input.nativeElement.focus();
        this.ripple.launch(e.pageX, e.pageY);
    };
    tslib_1.__decorate([
        core_1.HostBinding('class.mat-focusing'),
        tslib_1.__metadata("design:type", Boolean),
        tslib_1.__metadata("design:paramtypes", [])
    ], MatSearchComponent.prototype, "isFocusing", null);
    tslib_1.__decorate([
        core_1.Input(),
        core_1.HostBinding('style.background-color'),
        tslib_1.__metadata("design:type", String)
    ], MatSearchComponent.prototype, "color", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", String)
    ], MatSearchComponent.prototype, "focusedColor", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", String)
    ], MatSearchComponent.prototype, "address", void 0);
    tslib_1.__decorate([
        core_1.Output(),
        tslib_1.__metadata("design:type", core_1.EventEmitter)
    ], MatSearchComponent.prototype, "searchLocation", void 0);
    tslib_1.__decorate([
        core_1.Output(),
        tslib_1.__metadata("design:type", core_1.EventEmitter)
    ], MatSearchComponent.prototype, "detectLocation", void 0);
    tslib_1.__decorate([
        core_1.ViewChild(core_2.MatRipple),
        tslib_1.__metadata("design:type", core_2.MatRipple)
    ], MatSearchComponent.prototype, "ripple", void 0);
    tslib_1.__decorate([
        core_1.ViewChild('searchButton'),
        tslib_1.__metadata("design:type", button_1.MatButton)
    ], MatSearchComponent.prototype, "searchButton", void 0);
    tslib_1.__decorate([
        core_1.ViewChild('input'),
        tslib_1.__metadata("design:type", core_1.ElementRef)
    ], MatSearchComponent.prototype, "input", void 0);
    tslib_1.__decorate([
        core_1.HostBinding('class.mat-focused'),
        tslib_1.__metadata("design:type", Boolean)
    ], MatSearchComponent.prototype, "isFocused", void 0);
    MatSearchComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'mat-search',
            styleUrls: ['./mat-search.component.scss'],
            templateUrl: './mat-search.component.html',
        })
    ], MatSearchComponent);
    return MatSearchComponent;
}());
exports.MatSearchComponent = MatSearchComponent;
//# sourceMappingURL=mat-search.component.js.map