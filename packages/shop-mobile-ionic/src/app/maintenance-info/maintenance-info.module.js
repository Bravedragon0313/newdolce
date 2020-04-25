"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var angular_1 = require("@ionic/angular");
var maintenance_info_page_1 = require("./maintenance-info.page");
var maintenance_service_1 = require("@modules/client.common.angular2/services/maintenance.service");
var pipes_module_1 = require("@modules/client.common.angular2/pipes/pipes.module");
var routes = [
    {
        path: '',
        component: maintenance_info_page_1.MaintenanceInfoPage,
    },
];
var MaintenanceInfoPageModule = (function () {
    function MaintenanceInfoPageModule() {
    }
    MaintenanceInfoPageModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                angular_1.IonicModule,
                router_1.RouterModule.forChild(routes),
                pipes_module_1.PipesModule,
            ],
            providers: [maintenance_service_1.MaintenanceService],
            declarations: [maintenance_info_page_1.MaintenanceInfoPage],
        })
    ], MaintenanceInfoPageModule);
    return MaintenanceInfoPageModule;
}());
exports.MaintenanceInfoPageModule = MaintenanceInfoPageModule;
//# sourceMappingURL=maintenance-info.module.js.map