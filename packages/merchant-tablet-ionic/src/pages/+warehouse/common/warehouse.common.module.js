"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var core_2 = require("@ngx-translate/core");
var http_1 = require("@angular/common/http");
var app_module_1 = require("../../../../src/app/app.module");
var no_orders_info_component_1 = require("./no-orders-info/no-orders-info.component");
var common_1 = require("@angular/common");
var angular_1 = require("@ionic/angular");
var COMPONENTS = [no_orders_info_component_1.NoOrdersInfoComponent];
var WarehouseCommonModule = (function () {
    function WarehouseCommonModule() {
    }
    WarehouseCommonModule = tslib_1.__decorate([
        core_1.NgModule({
            declarations: COMPONENTS,
            exports: COMPONENTS,
            providers: [],
            imports: [
                common_1.CommonModule,
                angular_1.IonicModule,
                core_2.TranslateModule.forChild({
                    loader: {
                        provide: core_2.TranslateLoader,
                        useFactory: app_module_1.HttpLoaderFactory,
                        deps: [http_1.HttpClient],
                    },
                }),
            ],
        })
    ], WarehouseCommonModule);
    return WarehouseCommonModule;
}());
exports.WarehouseCommonModule = WarehouseCommonModule;
//# sourceMappingURL=warehouse.common.module.js.map