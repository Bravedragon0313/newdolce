"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var SidenavContentComponent = (function () {
    function SidenavContentComponent() {
    }
    SidenavContentComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'sidenav-content',
            styles: [""],
            template: "\n\t\t<mat-list>\n\t\t\t<mat-list-item>\n\t\t\t\t<mat-icon mat-list-icon>shopping_basket</mat-icon>\n\t\t\t\t<h4 mat-line>Products</h4>\n\t\t\t</mat-list-item>\n\t\t\t<mat-list-item>\n\t\t\t\t<mat-icon mat-list-icon>history</mat-icon>\n\t\t\t\t<h4 mat-line>Orders</h4>\n\t\t\t</mat-list-item>\n\t\t\t<mat-divider></mat-divider>\n\t\t\t<div style=\"position: absolute; bottom: 0; width: 100%\">\n\t\t\t\t<mat-list-item>\n\t\t\t\t\t<mat-icon mat-list-icon>settings</mat-icon>\n\t\t\t\t\t<h4 mat-line>Options</h4>\n\t\t\t\t</mat-list-item>\n\t\t\t</div>\n\t\t</mat-list>\n\t",
        })
    ], SidenavContentComponent);
    return SidenavContentComponent;
}());
exports.SidenavContentComponent = SidenavContentComponent;
//# sourceMappingURL=sidenav-content.component.js.map