"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var pipes_module_1 = require("@modules/client.common.angular2/pipes/pipes.module");
var components_module_1 = require("../../components/components.module");
var core_2 = require("@ngx-translate/core");
var carriers_1 = require("./carriers");
var warehouse_carriers_router_service_1 = require("@modules/client.common.angular2/routers/warehouse-carriers-router.service");
var ng2_smart_table_1 = require("ng2-smart-table");
var addresses_1 = require("../../components/carriers-table/addresses");
var status_1 = require("../../components/carriers-table/status");
var deliveries_1 = require("../../components/carriers-table/deliveries");
var image_1 = require("../../components/carriers-table/image");
var phone_1 = require("../../../src/components/carriers-table/phone");
var router_1 = require("@angular/router");
var angular_1 = require("@ionic/angular");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var add_carriers_popup_module_1 = require("./add-carriers-popup/add-carriers-popup.module");
var carrier_addr_popup_module_1 = require("./carrier-addr-popup/carrier-addr-popup.module");
var carrier_deliveries_popup_module_1 = require("./carrier-deliveries-popup/carrier-deliveries-popup.module");
var carrier_edit_popup_module_1 = require("./carrier-edit-popup/carrier-edit-popup.module");
var carrier_track_popup_module_1 = require("./carrier-track-popup/carrier-track-popup.module");
var confirm_delete_popup_module_1 = require("components/confirm-delete-popup/confirm-delete-popup.module");
var routes = [
    {
        path: '',
        component: carriers_1.CarriersPage,
    },
];
var CarrierssPageModule = (function () {
    function CarrierssPageModule() {
    }
    CarrierssPageModule = tslib_1.__decorate([
        core_1.NgModule({
            declarations: [
                carriers_1.CarriersPage,
                image_1.ImageComponent,
                addresses_1.AddressesComponent,
                status_1.StatusComponent,
                deliveries_1.DeliveriesComponent,
            ],
            imports: [
                pipes_module_1.PipesModule,
                components_module_1.ComponentsModule,
                core_2.TranslateModule.forChild(),
                ng2_smart_table_1.Ng2SmartTableModule,
                angular_1.IonicModule,
                common_1.CommonModule,
                forms_1.FormsModule,
                router_1.RouterModule.forChild(routes),
                add_carriers_popup_module_1.AddCarriersPopupPageModule,
                carrier_addr_popup_module_1.CarrierAddrPopupPageModule,
                carrier_deliveries_popup_module_1.CarrierDeliveriesPopupPageModule,
                carrier_edit_popup_module_1.CarrierEditPopupModule,
                confirm_delete_popup_module_1.ConfirmDeletePopupModule,
                carrier_track_popup_module_1.CarrierTrackPopupModule,
            ],
            entryComponents: [
                image_1.ImageComponent,
                addresses_1.AddressesComponent,
                status_1.StatusComponent,
                deliveries_1.DeliveriesComponent,
                phone_1.PhoneComponent,
            ],
            providers: [warehouse_carriers_router_service_1.WarehouseCarriersRouter],
        })
    ], CarrierssPageModule);
    return CarrierssPageModule;
}());
exports.CarrierssPageModule = CarrierssPageModule;
//# sourceMappingURL=carriers.module.js.map