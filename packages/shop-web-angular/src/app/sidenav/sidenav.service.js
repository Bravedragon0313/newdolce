"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var rxjs_1 = require("rxjs");
var core_1 = require("@angular/core");
var SidenavService = (function () {
    function SidenavService() {
        this.sidenavToggleRequests = new rxjs_1.BehaviorSubject(false);
        this.isSidenavOpen = new rxjs_1.BehaviorSubject(false);
    }
    SidenavService = tslib_1.__decorate([
        core_1.Injectable()
    ], SidenavService);
    return SidenavService;
}());
exports.SidenavService = SidenavService;
//# sourceMappingURL=sidenav.service.js.map