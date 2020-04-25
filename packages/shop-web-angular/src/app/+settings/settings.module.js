"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var core_1 = require("@angular/core");
var ng_lazyload_image_1 = require("ng-lazyload-image");
var settings_routes_1 = require("./settings.routes");
var button_1 = require("@angular/material/button");
var card_1 = require("@angular/material/card");
var checkbox_1 = require("@angular/material/checkbox");
var form_field_1 = require("@angular/material/form-field");
var icon_1 = require("@angular/material/icon");
var input_1 = require("@angular/material/input");
var list_1 = require("@angular/material/list");
var select_1 = require("@angular/material/select");
var sidenav_1 = require("@angular/material/sidenav");
var toolbar_1 = require("@angular/material/toolbar");
var router_1 = require("@angular/router");
var warehouse_logo_1 = require("../warehouse-logo");
var core_2 = require("@ngx-translate/core");
var http_1 = require("@angular/common/http");
var http_loader_1 = require("@ngx-translate/http-loader");
var settings_component_1 = require("app/+settings/settings.component");
function HttpLoaderFactory(http) {
    return new http_loader_1.TranslateHttpLoader(http, './assets/i18n/', '.json');
}
exports.HttpLoaderFactory = HttpLoaderFactory;
var SettingsModule = (function () {
    function SettingsModule() {
    }
    SettingsModule.routes = settings_routes_1.routes;
    SettingsModule = tslib_1.__decorate([
        core_1.NgModule({
            declarations: [settings_component_1.SettingsComponent],
            imports: [
                common_1.CommonModule,
                form_field_1.MatFormFieldModule,
                input_1.MatInputModule,
                select_1.MatSelectModule,
                core_2.TranslateModule.forChild({
                    loader: {
                        provide: core_2.TranslateLoader,
                        useFactory: HttpLoaderFactory,
                        deps: [http_1.HttpClient],
                    },
                }),
                forms_1.FormsModule,
                router_1.RouterModule.forChild(settings_routes_1.routes),
                ng_lazyload_image_1.LazyLoadImageModule,
                warehouse_logo_1.WarehouseLogoModule,
                icon_1.MatIconModule,
                button_1.MatButtonModule,
                sidenav_1.MatSidenavModule,
                toolbar_1.MatToolbarModule,
                checkbox_1.MatCheckboxModule,
                list_1.MatListModule,
                card_1.MatCardModule,
            ],
        })
    ], SettingsModule);
    return SettingsModule;
}());
exports.SettingsModule = SettingsModule;
//# sourceMappingURL=settings.module.js.map