"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var StatusComponent = (function () {
    function StatusComponent() {
    }
    StatusComponent.prototype.ngOnInit = function () {
        this.carrier = this.rowData.carrier;
    };
    StatusComponent = tslib_1.__decorate([
        core_1.Component({
            styles: [""],
            template: "\n\t\t<div class=\"text-center\" [ngSwitch]=\"carrier.status\">\n\t\t\t<span class=\"work\" *ngSwitchCase=\"0\">{{\n\t\t\t\t'CARRIERS_VIEW.WORKING' | translate\n\t\t\t}}</span>\n\t\t\t<span class=\"notWork\" *ngSwitchCase=\"1\">{{\n\t\t\t\t'CARRIERS_VIEW.NOT_WORKING' | translate\n\t\t\t}}</span>\n\t\t\t<span class=\"notWork\" *ngSwitchCase=\"2\">{{\n\t\t\t\t'CARRIERS_VIEW.BLOCKED' | translate\n\t\t\t}}</span>\n\t\t\t<div></div>\n\t\t</div>\n\t",
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], StatusComponent);
    return StatusComponent;
}());
exports.StatusComponent = StatusComponent;
//# sourceMappingURL=status.js.map