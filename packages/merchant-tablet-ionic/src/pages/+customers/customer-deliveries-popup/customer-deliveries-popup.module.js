"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var customer_deliveries_popup_1 = require("./customer-deliveries-popup");
var ng2_smart_table_1 = require("ng2-smart-table");
var orderId_1 = require("../../../components/customer-deliveries-table/orderId");
var delivery_1 = require("../../../components/customer-deliveries-table/delivery");
var address_1 = require("../../../components/customer-deliveries-table/address");
var status_1 = require("../../../components/customer-deliveries-table/status");
var core_2 = require("@ngx-translate/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var angular_1 = require("@ionic/angular");
var CustomerDeliveriesPopupPageModule = (function () {
    function CustomerDeliveriesPopupPageModule() {
    }
    CustomerDeliveriesPopupPageModule = tslib_1.__decorate([
        core_1.NgModule({
            declarations: [
                customer_deliveries_popup_1.CustomerDeliveriesPopupPage,
                orderId_1.OrderIdComponent,
                delivery_1.DeliveryComponent,
                address_1.AddressComponent,
                status_1.StatusComponent,
            ],
            imports: [
                core_2.TranslateModule.forChild(),
                ng2_smart_table_1.Ng2SmartTableModule,
                angular_1.IonicModule,
                common_1.CommonModule,
                forms_1.FormsModule,
            ],
            entryComponents: [
                customer_deliveries_popup_1.CustomerDeliveriesPopupPage,
                orderId_1.OrderIdComponent,
                delivery_1.DeliveryComponent,
                address_1.AddressComponent,
                status_1.StatusComponent,
            ],
        })
    ], CustomerDeliveriesPopupPageModule);
    return CustomerDeliveriesPopupPageModule;
}());
exports.CustomerDeliveriesPopupPageModule = CustomerDeliveriesPopupPageModule;
//# sourceMappingURL=customer-deliveries-popup.module.js.map