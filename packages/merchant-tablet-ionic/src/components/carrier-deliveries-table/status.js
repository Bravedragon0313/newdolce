"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var StatusComponent = (function () {
    function StatusComponent() {
    }
    StatusComponent.prototype.ngOnInit = function () {
        this.order = this.rowData.order;
    };
    StatusComponent = tslib_1.__decorate([
        core_1.Component({
            template: "\n\t\t<span>\n\t\t\t<div class=\"space\">\n\t\t\t\t{{ 'CARRIERS_VIEW.DELIVERIES_POP_UP.COMPLETED' | translate\n\t\t\t\t}}{{ order.isCompleted ? ' \u2714' : ' \u2718' }}\n\t\t\t</div>\n\t\t\t<div class=\"space\">\n\t\t\t\t{{ 'CARRIERS_VIEW.DELIVERIES_POP_UP.PAID' | translate\n\t\t\t\t}}{{ order.isPaid ? ' \u2714' : ' \u2718' }}\n\t\t\t</div>\n\t\t</span>\n\t",
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], StatusComponent);
    return StatusComponent;
}());
exports.StatusComponent = StatusComponent;
//# sourceMappingURL=status.js.map