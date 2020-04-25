"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var track_1 = require("./track");
var pipes_module_1 = require("@modules/client.common.angular2/pipes/pipes.module");
var components_module_1 = require("../../components/components.module");
var core_2 = require("@ngx-translate/core");
var carrier_service_1 = require("../../../src/services/carrier.service");
var warehouses_service_1 = require("../../../src/services/warehouses.service");
var router_1 = require("@angular/router");
var angular_1 = require("@ionic/angular");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var ionic_selectable_1 = require("ionic-selectable");
var warehouse_orders_service_1 = require("../../services/warehouse-orders.service");
var routes = [
    {
        path: '',
        component: track_1.TrackPage,
    },
];
var TrackPageModule = (function () {
    function TrackPageModule() {
    }
    TrackPageModule = tslib_1.__decorate([
        core_1.NgModule({
            declarations: [track_1.TrackPage],
            imports: [
                pipes_module_1.PipesModule,
                components_module_1.ComponentsModule,
                core_2.TranslateModule.forChild(),
                ionic_selectable_1.IonicSelectableModule,
                angular_1.IonicModule,
                common_1.CommonModule,
                forms_1.FormsModule,
                router_1.RouterModule.forChild(routes),
            ],
            providers: [carrier_service_1.CarrierService, warehouses_service_1.WarehousesService, warehouse_orders_service_1.WarehouseOrdersService],
        })
    ], TrackPageModule);
    return TrackPageModule;
}());
exports.TrackPageModule = TrackPageModule;
//# sourceMappingURL=track.module.js.map