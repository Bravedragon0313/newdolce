"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var platform_browser_1 = require("@angular/platform-browser");
var ngx_1 = require("@ionic-native/in-app-browser/ngx");
var ngx_2 = require("@ionic-native/splash-screen/ngx");
var ngx_3 = require("@ionic-native/status-bar/ngx");
var router_1 = require("@angular/router");
var animations_1 = require("@angular/platform-browser/animations");
var angular_1 = require("@ionic/angular");
var storage_1 = require("@ionic/storage");
var core_2 = require("@ngx-translate/core");
var http_loader_1 = require("@ngx-translate/http-loader");
var common_module_1 = require("@modules/client.common.angular2/common.module");
var menu_module_1 = require("../components/menu/menu.module");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var environment_1 = require("environments/environment");
var apollo_angular_link_http_1 = require("apollo-angular-link-http");
var ng2_file_upload_1 = require("ng2-file-upload");
var ngx_4 = require("@ionic-native/call-number/ngx");
var ngx_5 = require("@ionic-native/email-composer/ngx");
var ngx_6 = require("@ionic-native/globalization/ngx");
var ngx_7 = require("@ionic-native/google-analytics/ngx");
var ngx_8 = require("@ionic-native/mixpanel/ngx");
var ngx_9 = require("@ionic-native/intercom/ngx");
var ngx_10 = require("@ionic-native/screen-orientation/ngx");
var apollo_config_1 = require("../graphql/apollo.config");
var ngx_11 = require("@ionic-native/camera/ngx");
var store_service_1 = require("../services/store.service");
var user_mutation_module_1 = require("../@shared/user/mutation/user-mutation.module");
var googleMapsLoader_1 = require("@modules/client.common.angular2/services/googleMapsLoader");
var maintenance_service_1 = require("@modules/client.common.angular2/services/maintenance.service");
var ngx_12 = require("@ionic-native/barcode-scanner/ngx");
var pages_module_guard_1 = require("../pages/pages.module.guard");
var maintenance_info_module_guard_1 = require("./+maintenance-info/maintenance-info.module.guard");
var service_worker_1 = require("@angular/service-worker");
var ngx_13 = require("@ionic-native/network/ngx");
var ngx_14 = require("@ionic-native/device/ngx");
var server_connection_service_1 = require("@modules/client.common.angular2/services/server-connection.service");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = tslib_1.__decorate([
        core_1.NgModule({
            declarations: [app_component_1.AppComponent],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                http_1.HttpClientModule,
                animations_1.BrowserAnimationsModule,
                menu_module_1.MenuModule,
                apollo_angular_link_http_1.HttpLinkModule,
                angular_1.IonicModule.forRoot(),
                storage_1.IonicStorageModule.forRoot(),
                apollo_config_1.GraphQLModule,
                core_2.TranslateModule.forRoot({
                    loader: {
                        provide: core_2.TranslateLoader,
                        useFactory: HttpLoaderFactory,
                        deps: [http_1.HttpClient],
                    },
                }),
                common_module_1.CommonModule.forRoot({
                    apiUrl: environment_1.environment.SERVICES_ENDPOINT,
                }),
                ng2_file_upload_1.FileUploadModule,
                user_mutation_module_1.UserMutationModule,
                service_worker_1.ServiceWorkerModule.register('ngsw-worker.js', {
                    enabled: environment_1.environment.production,
                }),
            ],
            entryComponents: [app_component_1.AppComponent],
            providers: [
                ngx_1.InAppBrowser,
                ngx_2.SplashScreen,
                ngx_3.StatusBar,
                ngx_13.Network,
                ngx_14.Device,
                googleMapsLoader_1.GoogleMapsLoader,
                {
                    provide: core_1.APP_INITIALIZER,
                    useFactory: googleMapsLoaderFactory,
                    deps: [googleMapsLoader_1.GoogleMapsLoader],
                    multi: true,
                },
                server_connection_service_1.ServerConnectionService,
                {
                    provide: core_1.APP_INITIALIZER,
                    useFactory: serverConnectionFactory,
                    deps: [server_connection_service_1.ServerConnectionService, store_service_1.Store],
                    multi: true,
                },
                maintenance_service_1.MaintenanceService,
                {
                    provide: core_1.APP_INITIALIZER,
                    useFactory: maintenanceFactory,
                    deps: [maintenance_service_1.MaintenanceService],
                    multi: true,
                },
                { provide: router_1.RouteReuseStrategy, useClass: angular_1.IonicRouteStrategy },
                pages_module_guard_1.PagesModuleGuard,
                maintenance_info_module_guard_1.MaintenanceModuleGuard,
                store_service_1.Store,
                ngx_4.CallNumber,
                ngx_5.EmailComposer,
                ngx_6.Globalization,
                ngx_7.GoogleAnalytics,
                ngx_9.Intercom,
                ngx_8.Mixpanel,
                ngx_10.ScreenOrientation,
                ngx_11.Camera,
                ngx_12.BarcodeScanner,
            ],
            bootstrap: [app_component_1.AppComponent],
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
function HttpLoaderFactory(http) {
    return new http_loader_1.TranslateHttpLoader(http, './assets/i18n/', '.json');
}
exports.HttpLoaderFactory = HttpLoaderFactory;
function googleMapsLoaderFactory(provider) {
    return function () { return provider.load(environment_1.environment.GOOGLE_MAPS_API_KEY); };
}
exports.googleMapsLoaderFactory = googleMapsLoaderFactory;
function serverConnectionFactory(provider, store) {
    return function () { return provider.load(environment_1.environment.SERVICES_ENDPOINT, store); };
}
exports.serverConnectionFactory = serverConnectionFactory;
function maintenanceFactory(provider) {
    return function () {
        return provider.load(environment_1.environment['SETTINGS_APP_TYPE'], environment_1.environment['SETTINGS_MAINTENANCE_API_URL']);
    };
}
exports.maintenanceFactory = maintenanceFactory;
//# sourceMappingURL=app.module.js.map