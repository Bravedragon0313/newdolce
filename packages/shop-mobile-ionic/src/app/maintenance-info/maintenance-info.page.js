"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var maintenance_service_1 = require("@modules/client.common.angular2/services/maintenance.service");
var environment_1 = require("environments/environment");
var store_service_1 = require("app/services/store.service");
var router_1 = require("@angular/router");
var MaintenanceInfoPage = (function () {
    function MaintenanceInfoPage(maintenanceService, store, router) {
        this.maintenanceService = maintenanceService;
        this.store = store;
        this.router = router;
        this.getMessage();
        this.getStatus();
    }
    MaintenanceInfoPage.prototype.ngOnInit = function () { };
    MaintenanceInfoPage.prototype.getMessage = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4, this.maintenanceService.getMessage(this.store.maintenanceMode, environment_1.environment['SETTINGS_MAINTENANCE_API_URL'])];
                    case 1:
                        _a.message = _b.sent();
                        return [2];
                }
            });
        });
    };
    MaintenanceInfoPage.prototype.getStatus = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var interval;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                interval = setInterval(function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                    var status;
                    return tslib_1.__generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4, this.maintenanceService.getStatus(environment_1.environment['SETTINGS_APP_TYPE'], environment_1.environment['SETTINGS_MAINTENANCE_API_URL'])];
                            case 1:
                                status = _a.sent();
                                console.warn("Maintenance on '" + this.store.maintenanceMode + "': " + status);
                                if (!status) {
                                    clearInterval(interval);
                                    this.store.clearMaintenanceMode();
                                    this.router.navigate(['']);
                                }
                                return [2];
                        }
                    });
                }); }, 5000);
                return [2];
            });
        });
    };
    MaintenanceInfoPage = tslib_1.__decorate([
        core_1.Component({
            selector: 'e-cu-maintenance-info',
            templateUrl: './maintenance-info.page.html',
            styleUrls: ['./maintenance-info.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [maintenance_service_1.MaintenanceService,
            store_service_1.Store,
            router_1.Router])
    ], MaintenanceInfoPage);
    return MaintenanceInfoPage;
}());
exports.MaintenanceInfoPage = MaintenanceInfoPage;
//# sourceMappingURL=maintenance-info.page.js.map