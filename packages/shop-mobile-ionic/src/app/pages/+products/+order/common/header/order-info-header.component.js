"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var OrderInfoHeaderComponent = (function () {
    function OrderInfoHeaderComponent() {
        this.back = new core_1.EventEmitter();
    }
    tslib_1.__decorate([
        core_1.Output(),
        tslib_1.__metadata("design:type", Object)
    ], OrderInfoHeaderComponent.prototype, "back", void 0);
    OrderInfoHeaderComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'e-cu-order-info-header',
            templateUrl: './order-info-header.component.html',
            styles: [
                "\n\t\t\t.back-btn {\n\t\t\t\tfont-size: 30px;\n\t\t\t\tmargin-right: 10px;\n\t\t\t\tmargin-bottom: 4px;\n\t\t\t}\n\t\t",
            ],
        })
    ], OrderInfoHeaderComponent);
    return OrderInfoHeaderComponent;
}());
exports.OrderInfoHeaderComponent = OrderInfoHeaderComponent;
//# sourceMappingURL=order-info-header.component.js.map