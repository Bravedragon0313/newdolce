"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var maintenance_info_1 = require("./maintenance-info");
var pipes_module_1 = require("@modules/client.common.angular2/pipes/pipes.module");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var angular_1 = require("@ionic/angular");
var routes = [
    {
        path: '',
        component: maintenance_info_1.MaintenanceInfoPage,
    },
];
var MaintenanceInfoPageModule = (function () {
    function MaintenanceInfoPageModule() {
    }
    MaintenanceInfoPageModule = tslib_1.__decorate([
        core_1.NgModule({
            declarations: [maintenance_info_1.MaintenanceInfoPage],
            imports: [
                router_1.RouterModule.forChild(routes),
                common_1.CommonModule,
                forms_1.FormsModule,
                pipes_module_1.PipesModule,
                angular_1.IonicModule,
            ],
        })
    ], MaintenanceInfoPageModule);
    return MaintenanceInfoPageModule;
}());
exports.MaintenanceInfoPageModule = MaintenanceInfoPageModule;
//# sourceMappingURL=maintenance-info.module.js.map