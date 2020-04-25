"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var environment_1 = require("environments/environment");
var ConnectionLostPage = (function () {
    function ConnectionLostPage() {
        this.noInternetLogo = environment_1.environment.NO_INTERNET_LOGO;
        this.companyName = environment_1.environment.COMPANY_NAME;
    }
    ConnectionLostPage.prototype.ngOnInit = function () { };
    ConnectionLostPage = tslib_1.__decorate([
        core_1.Component({
            selector: 'e-cu-connection-lost',
            templateUrl: './connection-lost.page.html',
            styleUrls: ['./connection-lost.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], ConnectionLostPage);
    return ConnectionLostPage;
}());
exports.ConnectionLostPage = ConnectionLostPage;
//# sourceMappingURL=connection-lost.page.js.map