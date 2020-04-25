"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var environment_1 = require("environments/environment");
var LoadedInformationComponent = (function () {
    function LoadedInformationComponent() {
        this.appVersion = environment_1.environment.VERSION;
    }
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", String)
    ], LoadedInformationComponent.prototype, "html", void 0);
    LoadedInformationComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'e-cu-loaded-information',
            templateUrl: './loaded-information.component.html',
            styleUrls: ['./loaded-information.component.scss'],
        })
    ], LoadedInformationComponent);
    return LoadedInformationComponent;
}());
exports.LoadedInformationComponent = LoadedInformationComponent;
//# sourceMappingURL=loaded-information.component.js.map