"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var router_1 = require("@angular/router");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var angular_1 = require("@ionic/angular");
var merchants_page_1 = require("./merchants.page");
var geo_location_merchants_service_1 = require("app/services/geo-location-merchants.service");
var geo_location_1 = require("app/services/geo-location");
var merchants_service_1 = require("app/services/merchants/merchants.service");
var core_2 = require("@ngx-translate/core");
var routes = [
    {
        path: '',
        component: merchants_page_1.MerchantsPage,
    },
];
var MerchantsPageModule = (function () {
    function MerchantsPageModule() {
    }
    MerchantsPageModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                angular_1.IonicModule,
                router_1.RouterModule.forChild(routes),
                core_2.TranslateModule.forChild(),
            ],
            declarations: [merchants_page_1.MerchantsPage],
            providers: [
                geo_location_merchants_service_1.GeoLocationsMerchantsService,
                geo_location_1.GeoLocationService,
                merchants_service_1.MerchantsService,
            ],
        })
    ], MerchantsPageModule);
    return MerchantsPageModule;
}());
exports.MerchantsPageModule = MerchantsPageModule;
//# sourceMappingURL=merchants.module.js.map