"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var choose_customer_option_component_1 = require("./choose-customer-option.component");
var make_order_component_1 = require("./make-order/make-order.component");
var select_add_customer_component_1 = require("./select-add-customer.component");
var order_component_1 = require("./order.component");
var ng2_smart_table_1 = require("ng2-smart-table");
var users_service_1 = require("../../services/users.service");
var user_mutation_module_1 = require("../../@shared/user/mutation/user-mutation.module");
var address_component_1 = require("./address.component");
var make_order_input_component_1 = require("./make-order/make-order-input.component");
var warehouse_orders_service_1 = require("../../services/warehouse-orders.service");
var core_2 = require("@ngx-translate/core");
var angular_1 = require("@ionic/angular");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var OrderModule = (function () {
    function OrderModule() {
    }
    OrderModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [
                ng2_smart_table_1.Ng2SmartTableModule,
                angular_1.IonicModule,
                common_1.CommonModule,
                forms_1.FormsModule,
                user_mutation_module_1.UserMutationModule,
                core_2.TranslateModule.forChild(),
            ],
            declarations: [
                order_component_1.OrderComponent,
                choose_customer_option_component_1.ChooseCustomerOptionComponent,
                select_add_customer_component_1.SelectAddCustomerComponent,
                make_order_component_1.MakeOrderComponent,
                make_order_input_component_1.MakeOrderInputComponent,
                address_component_1.AddressComponent,
            ],
            entryComponents: [address_component_1.AddressComponent, make_order_input_component_1.MakeOrderInputComponent],
            exports: [
                order_component_1.OrderComponent,
                choose_customer_option_component_1.ChooseCustomerOptionComponent,
                select_add_customer_component_1.SelectAddCustomerComponent,
                make_order_component_1.MakeOrderComponent,
            ],
            providers: [users_service_1.UsersService, warehouse_orders_service_1.WarehouseOrdersService],
        })
    ], OrderModule);
    return OrderModule;
}());
exports.OrderModule = OrderModule;
//# sourceMappingURL=order.module.js.map