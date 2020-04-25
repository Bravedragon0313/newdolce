"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var angular_1 = require("@ionic/angular");
var by_code_page_1 = require("./by-code.page");
var core_2 = require("@ngx-translate/core");
var loading_module_1 = require("../../../components/loading/loading.module");
var geo_location_1 = require("app/services/geo-location");
var orders_service_1 = require("app/services/orders/orders.service");
var routes = [
    {
        path: '',
        component: by_code_page_1.ByCodePage,
    },
];
var ByCodePageModule = (function () {
    function ByCodePageModule() {
    }
    ByCodePageModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                angular_1.IonicModule,
                loading_module_1.LoadingModule,
                router_1.RouterModule.forChild(routes),
                core_2.TranslateModule.forChild(),
            ],
            declarations: [by_code_page_1.ByCodePage],
            providers: [geo_location_1.GeoLocationService, orders_service_1.OrdersService],
        })
    ], ByCodePageModule);
    return ByCodePageModule;
}());
exports.ByCodePageModule = ByCodePageModule;
//# sourceMappingURL=by-code.module.js.map