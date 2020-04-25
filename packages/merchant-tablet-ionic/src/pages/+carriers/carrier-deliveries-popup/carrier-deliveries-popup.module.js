"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var carrier_deliveries_popup_1 = require("./carrier-deliveries-popup");
var core_2 = require("@ngx-translate/core");
var ng2_smart_table_1 = require("ng2-smart-table");
var customer_1 = require("../../../components/carrier-deliveries-table/customer");
var delivery_1 = require("../../../components/carrier-deliveries-table/delivery");
var status_1 = require("../../../components/carrier-deliveries-table/status");
var warehouse_1 = require("../../../components/carrier-deliveries-table/warehouse");
var angular_1 = require("@ionic/angular");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var COMPONENTS = [
    carrier_deliveries_popup_1.CarrierDeliveriesPopupPage,
    customer_1.CustomerComponent,
    delivery_1.DeliveryComponent,
    status_1.StatusComponent,
    warehouse_1.WarehouseComponent,
];
var CarrierDeliveriesPopupPageModule = (function () {
    function CarrierDeliveriesPopupPageModule() {
    }
    CarrierDeliveriesPopupPageModule = tslib_1.__decorate([
        core_1.NgModule({
            declarations: COMPONENTS,
            imports: [
                core_2.TranslateModule.forChild(),
                ng2_smart_table_1.Ng2SmartTableModule,
                angular_1.IonicModule,
                common_1.CommonModule,
                forms_1.FormsModule,
            ],
            entryComponents: COMPONENTS,
        })
    ], CarrierDeliveriesPopupPageModule);
    return CarrierDeliveriesPopupPageModule;
}());
exports.CarrierDeliveriesPopupPageModule = CarrierDeliveriesPopupPageModule;
//# sourceMappingURL=carrier-deliveries-popup.module.js.map