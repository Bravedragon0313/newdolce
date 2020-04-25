"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var pipes_module_1 = require("@modules/client.common.angular2/pipes/pipes.module");
var components_module_1 = require("../../components/components.module");
var core_2 = require("@ngx-translate/core");
var customers_1 = require("./customers");
var warehouse_users_service_1 = require("@modules/client.common.angular2/routers/warehouse-users.service");
var ng2_smart_table_1 = require("ng2-smart-table");
var phone_1 = require("../../components/users-table/phone");
var address_1 = require("../../components/users-table/address");
var orders_1 = require("../../components/users-table/orders");
var total_1 = require("../../components/users-table/total");
var email_1 = require("../../components/users-table/email");
var image_1 = require("../../components/users-table/image");
var orders_service_1 = require("../../../src/services/orders.service");
var router_1 = require("@angular/router");
var angular_1 = require("@ionic/angular");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var confirm_delete_popup_module_1 = require("components/confirm-delete-popup/confirm-delete-popup.module");
var warehouse_orders_service_1 = require("services/warehouse-orders.service");
var routes = [
    {
        path: '',
        component: customers_1.CustomersPage,
    },
];
var CustomersPageModule = (function () {
    function CustomersPageModule() {
    }
    CustomersPageModule = tslib_1.__decorate([
        core_1.NgModule({
            declarations: [
                customers_1.CustomersPage,
                image_1.ImageUserComponent,
                address_1.AddressComponent,
                orders_1.OrdersComponent,
                total_1.TotalComponent,
                email_1.EmailComponent,
            ],
            imports: [
                pipes_module_1.PipesModule,
                components_module_1.ComponentsModule,
                angular_1.IonicModule,
                router_1.RouterModule.forChild(routes),
                common_1.CommonModule,
                forms_1.FormsModule,
                core_2.TranslateModule.forChild(),
                ng2_smart_table_1.Ng2SmartTableModule,
                confirm_delete_popup_module_1.ConfirmDeletePopupModule,
            ],
            entryComponents: [
                phone_1.UserPhoneComponent,
                image_1.ImageUserComponent,
                address_1.AddressComponent,
                orders_1.OrdersComponent,
                total_1.TotalComponent,
                email_1.EmailComponent,
            ],
            providers: [warehouse_users_service_1.WarehouseUsersService, orders_service_1.OrdersService, warehouse_orders_service_1.WarehouseOrdersService],
        })
    ], CustomersPageModule);
    return CustomersPageModule;
}());
exports.CustomersPageModule = CustomersPageModule;
//# sourceMappingURL=customers.module.js.map