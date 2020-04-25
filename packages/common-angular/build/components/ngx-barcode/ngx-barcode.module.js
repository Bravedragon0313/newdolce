"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var ngx_barcode_component_1 = require("./ngx-barcode.component");
var NgxBarcodeModule = (function () {
    function NgxBarcodeModule() {
    }
    NgxBarcodeModule_1 = NgxBarcodeModule;
    NgxBarcodeModule.forRoot = function () {
        return {
            ngModule: NgxBarcodeModule_1,
            providers: [],
        };
    };
    var NgxBarcodeModule_1;
    NgxBarcodeModule = NgxBarcodeModule_1 = tslib_1.__decorate([
        core_1.NgModule({
            imports: [],
            declarations: [ngx_barcode_component_1.NgxBarcodeComponent],
            exports: [ngx_barcode_component_1.NgxBarcodeComponent],
        })
    ], NgxBarcodeModule);
    return NgxBarcodeModule;
}());
exports.NgxBarcodeModule = NgxBarcodeModule;
//# sourceMappingURL=ngx-barcode.module.js.map