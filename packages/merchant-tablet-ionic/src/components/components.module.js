"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var loading_1 = require("./loading/loading");
var order_without_carrier_1 = require("./order-without-carrier/order-without-carrier");
var common_1 = require("@angular/common");
var order_control_buttons_1 = require("./order-control-buttons/order-control-buttons");
var order_with_carrier_1 = require("./order-with-carrier/order-with-carrier");
var order_delivered_1 = require("./order-delivered/order-delivered");
var order_canceled_1 = require("./order-canceled/order-canceled");
var order_delivery_problem_1 = require("./order-delivery-problem/order-delivery-problem");
var core_2 = require("@ngx-translate/core");
var order_image_1 = require("./common/order-image/order-image");
var common_2 = require("./settings-page-components/common/common");
var account_1 = require("./settings-page-components/account/account");
var location_1 = require("./settings-page-components/location/location");
var google_map_module_1 = require("../@shared/google-map/google-map.module");
var order_title_1 = require("./common/order-title/order-title");
var customer_info_1 = require("./common/customer-info/customer-info");
var carrier_info_1 = require("./common/carrier-info/carrier-info");
var phone_1 = require("./carriers-table/phone");
var phone_2 = require("./users-table/phone");
var ngx_moment_1 = require("ngx-moment");
var order_warehouse_preparation_problem_1 = require("./order-warehouse-preparation-problem/order-warehouse-preparation-problem");
var angular_1 = require("@ionic/angular");
var forms_1 = require("@angular/forms");
var order_map_popup_module_1 = require("./order-map-popup/order-map-popup.module");
var customer_email_popup_module_1 = require("pages/+customers/customer-email-popup/customer-email-popup.module");
var customer_deliveries_popup_module_1 = require("pages/+customers/customer-deliveries-popup/customer-deliveries-popup.module");
var customer_addr_popup_module_1 = require("pages/+customers/customer-addr-popup/customer-addr-popup.module");
var file_uploader_module_1 = require("./file-uploader/file-uploader.module");
var ComponentsModule = (function () {
    function ComponentsModule() {
    }
    ComponentsModule = tslib_1.__decorate([
        core_1.NgModule({
            declarations: [
                loading_1.LoadingComponent,
                order_image_1.OrderImageComponent,
                order_without_carrier_1.OrderWithoutCarrierComponent,
                order_control_buttons_1.OrderControlButtonsComponent,
                order_without_carrier_1.OrderWithoutCarrierComponent,
                order_with_carrier_1.OrderWithCarrierComponent,
                order_delivered_1.OrderDeliveredComponent,
                order_canceled_1.OrderCanceledComponent,
                order_delivery_problem_1.OrderDeliveryProblemComponent,
                order_warehouse_preparation_problem_1.OrderWarehousePreparationProblemComponent,
                common_2.CommonComponent,
                account_1.AccountComponent,
                location_1.LocationComponent,
                order_title_1.OrderTitleComponent,
                customer_info_1.CustomerInfoComponent,
                carrier_info_1.CarrierInfoComponent,
                phone_1.PhoneComponent,
                phone_2.UserPhoneComponent,
            ],
            imports: [
                common_1.CommonModule,
                core_2.TranslateModule.forChild(),
                angular_1.IonicModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                google_map_module_1.GoogleMapModule,
                ngx_moment_1.MomentModule,
                order_map_popup_module_1.OrderMapPopupPageModule,
                customer_email_popup_module_1.CustomerEmailPopupPageModule,
                customer_deliveries_popup_module_1.CustomerDeliveriesPopupPageModule,
                customer_addr_popup_module_1.CustomerAddrPopupPageModule,
                file_uploader_module_1.FileUploaderModule,
            ],
            exports: [
                loading_1.LoadingComponent,
                order_image_1.OrderImageComponent,
                order_without_carrier_1.OrderWithoutCarrierComponent,
                order_control_buttons_1.OrderControlButtonsComponent,
                order_without_carrier_1.OrderWithoutCarrierComponent,
                order_with_carrier_1.OrderWithCarrierComponent,
                order_delivered_1.OrderDeliveredComponent,
                order_canceled_1.OrderCanceledComponent,
                order_delivery_problem_1.OrderDeliveryProblemComponent,
                order_warehouse_preparation_problem_1.OrderWarehousePreparationProblemComponent,
                common_2.CommonComponent,
                account_1.AccountComponent,
                location_1.LocationComponent,
                phone_1.PhoneComponent,
            ],
        })
    ], ComponentsModule);
    return ComponentsModule;
}());
exports.ComponentsModule = ComponentsModule;
//# sourceMappingURL=components.module.js.map