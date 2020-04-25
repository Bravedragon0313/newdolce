"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var jsbarcode = require('jsbarcode');
var NgxBarcodeComponent = (function () {
    function NgxBarcodeComponent(renderer) {
        this.renderer = renderer;
        this.elementType = 'svg';
        this.cssClass = 'barcode';
        this.format = 'CODE128';
        this.lineColor = '#000000';
        this.width = 2;
        this.height = 100;
        this.displayValue = false;
        this.fontOptions = '';
        this.font = 'monospace';
        this.textAlign = 'center';
        this.textPosition = 'bottom';
        this.textMargin = 2;
        this.fontSize = 20;
        this.background = '#ffffff';
        this.value = '';
        this.valid = function () { return true; };
    }
    Object.defineProperty(NgxBarcodeComponent.prototype, "options", {
        get: function () {
            var options = {
                format: this.format,
                lineColor: this.lineColor,
                width: this.width,
                height: this.height,
                displayValue: this.displayValue,
                fontOptions: this.fontOptions,
                font: this.font,
                textAlign: this.textAlign,
                textPosition: this.textPosition,
                textMargin: this.textMargin,
                fontSize: this.fontSize,
                background: this.background,
                valid: this.valid,
            };
            if (this.margin) {
                options['margin'] = this.margin;
            }
            if (this.marginTop) {
                options['marginTop'] = this.marginTop;
            }
            if (this.marginBottom) {
                options['marginBottom'] = this.marginBottom;
            }
            if (this.marginLeft) {
                options['marginLeft'] = this.marginLeft;
            }
            if (this.marginRight) {
                options['marginRight'] = this.marginRight;
            }
            return options;
        },
        enumerable: true,
        configurable: true
    });
    NgxBarcodeComponent.prototype.ngOnChanges = function () {
        this.createBarcode();
    };
    NgxBarcodeComponent.prototype.createBarcode = function () {
        if (!this.value) {
            return;
        }
        var element;
        switch (this.elementType) {
            case 'img':
                element = this.renderer.createElement('img');
                break;
            case 'canvas':
                element = this.renderer.createElement('canvas');
                break;
            case 'svg':
            default:
                element = this.renderer.createElement('svg', 'svg');
        }
        jsbarcode(element, this.value, this.options);
        for (var _i = 0, _a = this.bcElement.nativeElement.childNodes; _i < _a.length; _i++) {
            var node = _a[_i];
            this.renderer.removeChild(this.bcElement.nativeElement, node);
        }
        this.renderer.appendChild(this.bcElement.nativeElement, element);
    };
    tslib_1.__decorate([
        core_1.Input('bc-element-type'),
        tslib_1.__metadata("design:type", String)
    ], NgxBarcodeComponent.prototype, "elementType", void 0);
    tslib_1.__decorate([
        core_1.Input('bc-class'),
        tslib_1.__metadata("design:type", Object)
    ], NgxBarcodeComponent.prototype, "cssClass", void 0);
    tslib_1.__decorate([
        core_1.Input('bc-format'),
        tslib_1.__metadata("design:type", String)
    ], NgxBarcodeComponent.prototype, "format", void 0);
    tslib_1.__decorate([
        core_1.Input('bc-line-color'),
        tslib_1.__metadata("design:type", Object)
    ], NgxBarcodeComponent.prototype, "lineColor", void 0);
    tslib_1.__decorate([
        core_1.Input('bc-width'),
        tslib_1.__metadata("design:type", Object)
    ], NgxBarcodeComponent.prototype, "width", void 0);
    tslib_1.__decorate([
        core_1.Input('bc-height'),
        tslib_1.__metadata("design:type", Object)
    ], NgxBarcodeComponent.prototype, "height", void 0);
    tslib_1.__decorate([
        core_1.Input('bc-display-value'),
        tslib_1.__metadata("design:type", Object)
    ], NgxBarcodeComponent.prototype, "displayValue", void 0);
    tslib_1.__decorate([
        core_1.Input('bc-font-options'),
        tslib_1.__metadata("design:type", Object)
    ], NgxBarcodeComponent.prototype, "fontOptions", void 0);
    tslib_1.__decorate([
        core_1.Input('bc-font'),
        tslib_1.__metadata("design:type", Object)
    ], NgxBarcodeComponent.prototype, "font", void 0);
    tslib_1.__decorate([
        core_1.Input('bc-text-align'),
        tslib_1.__metadata("design:type", Object)
    ], NgxBarcodeComponent.prototype, "textAlign", void 0);
    tslib_1.__decorate([
        core_1.Input('bc-text-position'),
        tslib_1.__metadata("design:type", Object)
    ], NgxBarcodeComponent.prototype, "textPosition", void 0);
    tslib_1.__decorate([
        core_1.Input('bc-text-margin'),
        tslib_1.__metadata("design:type", Object)
    ], NgxBarcodeComponent.prototype, "textMargin", void 0);
    tslib_1.__decorate([
        core_1.Input('bc-font-size'),
        tslib_1.__metadata("design:type", Object)
    ], NgxBarcodeComponent.prototype, "fontSize", void 0);
    tslib_1.__decorate([
        core_1.Input('bc-background'),
        tslib_1.__metadata("design:type", Object)
    ], NgxBarcodeComponent.prototype, "background", void 0);
    tslib_1.__decorate([
        core_1.Input('bc-margin'),
        tslib_1.__metadata("design:type", Object)
    ], NgxBarcodeComponent.prototype, "margin", void 0);
    tslib_1.__decorate([
        core_1.Input('bc-margin-top'),
        tslib_1.__metadata("design:type", Object)
    ], NgxBarcodeComponent.prototype, "marginTop", void 0);
    tslib_1.__decorate([
        core_1.Input('bc-margin-bottom'),
        tslib_1.__metadata("design:type", Object)
    ], NgxBarcodeComponent.prototype, "marginBottom", void 0);
    tslib_1.__decorate([
        core_1.Input('bc-margin-left'),
        tslib_1.__metadata("design:type", Object)
    ], NgxBarcodeComponent.prototype, "marginLeft", void 0);
    tslib_1.__decorate([
        core_1.Input('bc-margin-right'),
        tslib_1.__metadata("design:type", Object)
    ], NgxBarcodeComponent.prototype, "marginRight", void 0);
    tslib_1.__decorate([
        core_1.Input('bc-value'),
        tslib_1.__metadata("design:type", Object)
    ], NgxBarcodeComponent.prototype, "value", void 0);
    tslib_1.__decorate([
        core_1.ViewChild('bcElement', { static: true }),
        tslib_1.__metadata("design:type", core_1.ElementRef)
    ], NgxBarcodeComponent.prototype, "bcElement", void 0);
    tslib_1.__decorate([
        core_1.Input('bc-valid'),
        tslib_1.__metadata("design:type", Function)
    ], NgxBarcodeComponent.prototype, "valid", void 0);
    NgxBarcodeComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'ngx-barcode',
            template: " <div #bcElement [class]=\"cssClass\"></div> ",
            styles: [],
        }),
        tslib_1.__metadata("design:paramtypes", [core_1.Renderer2])
    ], NgxBarcodeComponent);
    return NgxBarcodeComponent;
}());
exports.NgxBarcodeComponent = NgxBarcodeComponent;
//# sourceMappingURL=ngx-barcode.component.js.map