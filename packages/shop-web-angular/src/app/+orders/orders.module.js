"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var orders_component_1 = require("./orders.component");
var orders_container_component_1 = require("./orders.container.component");
var orders_routes_1 = require("./orders.routes");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var common_1 = require("@angular/common");
var button_1 = require("@angular/material/button");
var card_1 = require("@angular/material/card");
var dialog_1 = require("@angular/material/dialog");
var order_1 = require("./order");
var warehouse_logo_1 = require("../warehouse-logo");
var core_2 = require("@ngx-translate/core");
var http_1 = require("@angular/common/http");
var http_loader_1 = require("@ngx-translate/http-loader");
var message_pop_up_module_1 = require("app/shared/message-pop-up/message-pop-up.module");
var carrier_location_component_1 = require("./location/carrier-location.component");
function HttpLoaderFactory(http) {
    return new http_loader_1.TranslateHttpLoader(http, './assets/i18n/', '.json');
}
exports.HttpLoaderFactory = HttpLoaderFactory;
var OrdersModule = (function () {
    function OrdersModule() {
    }
    OrdersModule = tslib_1.__decorate([
        core_1.NgModule({
            declarations: [
                orders_container_component_1.OrdersContainerComponent,
                orders_component_1.OrdersComponent,
                order_1.OrderComponent,
                carrier_location_component_1.CarrierLocationComponent,
            ],
            entryComponents: [carrier_location_component_1.CarrierLocationComponent],
            imports: [
                common_1.CommonModule,
                message_pop_up_module_1.MessagePopUpModalModule,
                core_2.TranslateModule.forChild({
                    loader: {
                        provide: core_2.TranslateLoader,
                        useFactory: HttpLoaderFactory,
                        deps: [http_1.HttpClient],
                    },
                }),
                forms_1.FormsModule,
                router_1.RouterModule.forChild(orders_routes_1.routes),
                dialog_1.MatDialogModule,
                button_1.MatButtonModule,
                card_1.MatCardModule,
                warehouse_logo_1.WarehouseLogoModule,
            ],
        })
    ], OrdersModule);
    return OrdersModule;
}());
exports.OrdersModule = OrdersModule;
//# sourceMappingURL=orders.module.js.map