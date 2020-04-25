"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var button_1 = require("@angular/material/button");
var button_toggle_1 = require("@angular/material/button-toggle");
var card_1 = require("@angular/material/card");
var checkbox_1 = require("@angular/material/checkbox");
var form_field_1 = require("@angular/material/form-field");
var icon_1 = require("@angular/material/icon");
var list_1 = require("@angular/material/list");
var sidenav_1 = require("@angular/material/sidenav");
var slide_toggle_1 = require("@angular/material/slide-toggle");
var toolbar_1 = require("@angular/material/toolbar");
var animations_1 = require("@angular/platform-browser/animations");
var environment_1 = require("environments/environment");
var icons_1 = require("../modules/icons");
var material_extensions_1 = require("../modules/material-extensions");
var app_routes_1 = require("./app.routes");
var app_component_1 = require("./app.component");
var app_resolver_1 = require("./app.resolver");
var app_service_1 = require("./app.service");
var toolbar_component_1 = require("./toolbar/toolbar.component");
var no_content_1 = require("./no-content");
var common_module_1 = require("@modules/client.common.angular2/common.module");
var sidenav_service_1 = require("./sidenav/sidenav.service");
var sidenav_content_component_1 = require("./sidenav/sidenav-content.component");
require("../styles/styles.scss");
var http_1 = require("@angular/common/http");
var core_2 = require("@ngx-translate/core");
var http_loader_1 = require("@ngx-translate/http-loader");
var server_settings_1 = require("./services/server-settings");
var login_module_guard_1 = require("./+login/login.module.guard");
var products_module_guard_1 = require("./+products/products.module.guard");
var maintenance_service_1 = require("@modules/client.common.angular2/services/maintenance.service");
var app_module_guard_1 = require("./app.module.guard");
var maintenance_info_module_guard_1 = require("./+maintenance-info/maintenance-info.module.guard");
var googleMapsLoader_1 = require("@modules/client.common.angular2/services/googleMapsLoader");
var apollo_angular_1 = require("apollo-angular");
var apollo_angular_link_http_1 = require("apollo-angular-link-http");
var apollo_cache_inmemory_1 = require("apollo-cache-inmemory");
var apollo_link_context_1 = require("apollo-link-context");
var store_1 = require("./services/store");
var ngx_infinite_scroll_1 = require("ngx-infinite-scroll");
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var geo_location_1 = require("./services/geo-location");
var location_popup_module_1 = require("./shared/location-popup/location-popup.module");
var auth_guard_1 = require("./authentication/auth.guard");
var server_connection_service_1 = require("@modules/client.common.angular2/services/server-connection.service");
function HttpLoaderFactory(http) {
    return new http_loader_1.TranslateHttpLoader(http, './assets/i18n/', '.json');
}
exports.HttpLoaderFactory = HttpLoaderFactory;
function serverSettingsFactory(provider) {
    return function () { return provider.load(); };
}
exports.serverSettingsFactory = serverSettingsFactory;
function maintenanceFactory(provider) {
    return function () {
        return provider.load(environment_1.environment['SETTINGS_APP_TYPE'], environment_1.environment['SETTINGS_MAINTENANCE_API_URL']);
    };
}
exports.maintenanceFactory = maintenanceFactory;
function googleMapsLoaderFactory(provider) {
    return function () { return provider.load(environment_1.environment.GOOGLE_MAPS_API_KEY); };
}
exports.googleMapsLoaderFactory = googleMapsLoaderFactory;
function serverConnectionFactory(provider, store) {
    return function () { return provider.load(environment_1.environment.SERVICES_ENDPOINT, store); };
}
exports.serverConnectionFactory = serverConnectionFactory;
var APP_PROVIDERS = tslib_1.__spreadArrays([
    server_connection_service_1.ServerConnectionService,
    {
        provide: core_1.APP_INITIALIZER,
        useFactory: serverConnectionFactory,
        deps: [server_connection_service_1.ServerConnectionService, store_1.Store],
        multi: true,
    },
    maintenance_service_1.MaintenanceService,
    {
        provide: core_1.APP_INITIALIZER,
        useFactory: maintenanceFactory,
        deps: [maintenance_service_1.MaintenanceService],
        multi: true,
    },
    googleMapsLoader_1.GoogleMapsLoader,
    {
        provide: core_1.APP_INITIALIZER,
        useFactory: googleMapsLoaderFactory,
        deps: [googleMapsLoader_1.GoogleMapsLoader],
        multi: true,
    }
], app_resolver_1.APP_RESOLVER_PROVIDERS, [
    app_service_1.AppState,
    sidenav_service_1.SidenavService,
    server_settings_1.ServerSettings,
    ngx_infinite_scroll_1.InfiniteScrollModule,
    {
        provide: core_1.APP_INITIALIZER,
        useFactory: serverSettingsFactory,
        deps: [server_settings_1.ServerSettings],
        multi: true,
    },
]);
var AppModule = (function () {
    function AppModule(apollo, httpLink, store) {
        var http = httpLink.create({
            uri: environment_1.environment.GQL_ENDPOINT,
        });
        var authLink = apollo_link_context_1.setContext(function (_, _a) {
            var headers = _a.headers;
            var token = store.token;
            return {
                headers: tslib_1.__assign(tslib_1.__assign({}, headers), { authorization: token ? "Bearer " + token : '' }),
            };
        });
        apollo.create({
            link: http,
            defaultOptions: {
                watchQuery: {
                    fetchPolicy: 'network-only',
                    errorPolicy: 'ignore',
                },
                query: {
                    fetchPolicy: 'network-only',
                    errorPolicy: 'all',
                },
                mutate: {
                    errorPolicy: 'all',
                },
            },
            cache: new apollo_cache_inmemory_1.InMemoryCache(),
        });
    }
    AppModule = tslib_1.__decorate([
        core_1.NgModule({
            bootstrap: [app_component_1.AppComponent],
            declarations: [
                app_component_1.AppComponent,
                toolbar_component_1.ToolbarComponent,
                no_content_1.NoContentComponent,
                sidenav_content_component_1.SidenavContentComponent,
            ],
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpClientModule,
                apollo_angular_1.ApolloModule,
                core_2.TranslateModule.forRoot({
                    loader: {
                        provide: core_2.TranslateLoader,
                        useFactory: HttpLoaderFactory,
                        deps: [http_1.HttpClient],
                    },
                }),
                animations_1.BrowserAnimationsModule,
                forms_1.FormsModule,
                apollo_angular_link_http_1.HttpLinkModule,
                router_1.RouterModule.forRoot(app_routes_1.ROUTES, {
                    useHash: Boolean(history.pushState) === false,
                    preloadingStrategy: router_1.PreloadAllModules,
                }),
                icon_1.MatIconModule,
                button_1.MatButtonModule,
                sidenav_1.MatSidenavModule,
                toolbar_1.MatToolbarModule,
                checkbox_1.MatCheckboxModule,
                form_field_1.MatFormFieldModule,
                list_1.MatListModule,
                card_1.MatCardModule,
                material_extensions_1.MatBoldInputModule,
                material_extensions_1.MatSearchModule,
                slide_toggle_1.MatSlideToggleModule,
                button_toggle_1.MatButtonToggleModule,
                icons_1.IconsModule,
                common_module_1.CommonModule.forRoot({
                    apiUrl: environment_1.environment.SERVICES_ENDPOINT,
                }),
                location_popup_module_1.LocationPopupModalModule,
            ],
            providers: [
                environment_1.environment.ENV_PROVIDERS,
                APP_PROVIDERS,
                login_module_guard_1.LoginModuleGuard,
                products_module_guard_1.ProductsModuleGuard,
                app_module_guard_1.AppModuleGuard,
                maintenance_info_module_guard_1.MaintenanceModuleGuard,
                geo_location_1.GeoLocationService,
                auth_guard_1.AuthGuard,
            ],
        }),
        tslib_1.__metadata("design:paramtypes", [apollo_angular_1.Apollo, apollo_angular_link_http_1.HttpLink, store_1.Store])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(AppModule);
//# sourceMappingURL=app.module.js.map