"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var maintenance_service_1 = require("@modules/client.common.angular2/services/maintenance.service");
var maintenance_info_component_1 = require("./maintenance-info.component");
var pipes_module_1 = require("@modules/client.common.angular2/pipes/pipes.module");
var routes = [
    {
        path: '',
        component: maintenance_info_component_1.MaintenanceInfoComponent,
    },
];
var MaintenanceInfoModule = (function () {
    function MaintenanceInfoModule() {
    }
    MaintenanceInfoModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, router_1.RouterModule.forChild(routes), pipes_module_1.PipesModule],
            providers: [maintenance_service_1.MaintenanceService],
            declarations: [maintenance_info_component_1.MaintenanceInfoComponent],
        })
    ], MaintenanceInfoModule);
    return MaintenanceInfoModule;
}());
exports.MaintenanceInfoModule = MaintenanceInfoModule;
//# sourceMappingURL=maintenance-info.module.js.map