"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var settings_1 = require("./settings");
var core_2 = require("@ngx-translate/core");
var http_1 = require("@angular/common/http");
var http_loader_1 = require("@ngx-translate/http-loader");
var ng2_file_upload_1 = require("ng2-file-upload");
var google_map_module_1 = require("../../@shared/google-map/google-map.module");
var components_module_1 = require("../../components/components.module");
var router_1 = require("@angular/router");
var angular_1 = require("@ionic/angular");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var settings_module_1 = require("components/settings-page-components/settings/settings.module");
function HttpLoaderFactory(http) {
    return new http_loader_1.TranslateHttpLoader(http, './assets/i18n/', '.json');
}
exports.HttpLoaderFactory = HttpLoaderFactory;
var routes = [
    {
        path: '',
        component: settings_1.SettingsPage,
    },
];
var SettingsPageModule = (function () {
    function SettingsPageModule() {
    }
    SettingsPageModule = tslib_1.__decorate([
        core_1.NgModule({
            declarations: [settings_1.SettingsPage],
            imports: [
                ng2_file_upload_1.FileUploadModule,
                google_map_module_1.GoogleMapModule,
                components_module_1.ComponentsModule,
                core_2.TranslateModule.forChild({
                    loader: {
                        provide: core_2.TranslateLoader,
                        useFactory: HttpLoaderFactory,
                        deps: [http_1.HttpClient],
                    },
                }),
                angular_1.IonicModule,
                common_1.CommonModule,
                forms_1.FormsModule,
                settings_module_1.MerchantSettingsComponentModule,
                router_1.RouterModule.forChild(routes),
            ],
        })
    ], SettingsPageModule);
    return SettingsPageModule;
}());
exports.SettingsPageModule = SettingsPageModule;
//# sourceMappingURL=settings.module.js.map