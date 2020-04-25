"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var angular_1 = require("@ionic/angular");
var by_location_page_1 = require("./by-location.page");
var core_2 = require("@ngx-translate/core");
var loading_module_1 = require("../../../components/loading/loading.module");
var routes = [
    {
        path: '',
        component: by_location_page_1.ByLocationPage,
    },
];
var ByLocationPageModule = (function () {
    function ByLocationPageModule() {
    }
    ByLocationPageModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                angular_1.IonicModule,
                router_1.RouterModule.forChild(routes),
                core_2.TranslateModule.forChild(),
                loading_module_1.LoadingModule,
            ],
            declarations: [by_location_page_1.ByLocationPage],
        })
    ], ByLocationPageModule);
    return ByLocationPageModule;
}());
exports.ByLocationPageModule = ByLocationPageModule;
//# sourceMappingURL=by-location.module.js.map