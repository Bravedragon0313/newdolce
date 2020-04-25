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
var http_loader_1 = require("@ngx-translate/http-loader");
var core_2 = require("@ngx-translate/core");
var common_module_1 = require("@modules/client.common.angular2/common.module");
var menu_module_1 = require("./components/menu/menu.module");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var environment_1 = require("environments/environment");
var apollo_angular_link_http_1 = require("apollo-angular-link-http");
var apollo_angular_1 = require("apollo-angular");
var apollo_cache_inmemory_1 = require("apollo-cache-inmemory");
var apollo_link_ws_1 = require("apollo-link-ws");
var apollo_link_context_1 = require("apollo-link-context");
var apollo_link_1 = require("apollo-link");
var graphql_1 = require("graphql");
var store_service_1 = require("./services/store.service");
var server_settings_1 = require("./services/server-settings");
var googleMapsLoader_1 = require("@modules/client.common.angular2/services/googleMapsLoader");
var maintenance_service_1 = require("@modules/client.common.angular2/services/maintenance.service");
var pages_module_guard_1 = require("./pages/pages.module.guard");
var maintenance_info_module_guard_1 = require("./maintenance-info/maintenance-info.module.guard");
var service_worker_1 = require("@angular/service-worker");
var ngx_4 = require("@ionic-native/network/ngx");
var ngx_5 = require("@ionic-native/device/ngx");
var server_connection_service_1 = require("@modules/client.common.angular2/services/server-connection.service");
var AppModule = (function () {
    function AppModule(apollo, httpLink, store) {
        this.apollo = apollo;
        this.httpLink = httpLink;
        this.store = store;
        this._setupApolloAngular();
    }
    AppModule.prototype._setupApolloAngular = function () {
        var _this = this;
        var http = this.httpLink.create({
            uri: environment_1.environment.GQL_ENDPOINT,
        });
        var ws = new apollo_link_ws_1.WebSocketLink({
            uri: environment_1.environment.GQL_SUBSCRIPTIONS_ENDPOINT,
            options: {
                reconnect: true,
                lazy: true,
            },
        });
        var authLink = apollo_link_context_1.setContext(function (_, _a) {
            var headers = _a.headers;
            var token = _this.store.token;
            return {
                headers: tslib_1.__assign(tslib_1.__assign({}, headers), { authorization: token ? "Bearer " + token : '' }),
            };
        });
        this.apollo.create({
            link: authLink.concat(apollo_link_1.ApolloLink.split(function (operation) {
                var operationAST = graphql_1.getOperationAST(operation.query, operation.operationName);
                return (!!operationAST &&
                    operationAST.operation === 'subscription');
            }, ws, http)),
            defaultOptions: {
                watchQuery: {
                    fetchPolicy: 'network-only',
                    errorPolicy: 'ignore',
                },
                query: {
                    fetchPolicy: 'network-only',
                    errorPolicy: 'all',
                },
            },
            cache: new apollo_cache_inmemory_1.InMemoryCache(),
        });
    };
    AppModule = tslib_1.__decorate([
        core_1.NgModule({
            declarations: [app_component_1.AppComponent],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                http_1.HttpClientModule,
                animations_1.BrowserAnimationsModule,
                menu_module_1.MenuModule,
                apollo_angular_1.ApolloModule,
                apollo_angular_link_http_1.HttpLinkModule,
                angular_1.IonicModule.forRoot(),
                storage_1.IonicStorageModule.forRoot(),
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
                service_worker_1.ServiceWorkerModule.register('ngsw-worker.js', {
                    enabled: environment_1.environment.production,
                }),
            ],
            entryComponents: [app_component_1.AppComponent],
            providers: [
                ngx_1.InAppBrowser,
                ngx_2.SplashScreen,
                ngx_3.StatusBar,
                ngx_4.Network,
                ngx_5.Device,
                server_connection_service_1.ServerConnectionService,
                {
                    provide: core_1.APP_INITIALIZER,
                    useFactory: serverConnectionFactory,
                    deps: [server_connection_service_1.ServerConnectionService, store_service_1.Store],
                    multi: true,
                },
                googleMapsLoader_1.GoogleMapsLoader,
                {
                    provide: core_1.APP_INITIALIZER,
                    useFactory: googleMapsLoaderFactory,
                    deps: [googleMapsLoader_1.GoogleMapsLoader],
                    multi: true,
                },
                maintenance_service_1.MaintenanceService,
                {
                    provide: core_1.APP_INITIALIZER,
                    useFactory: maintenanceFactory,
                    deps: [maintenance_service_1.MaintenanceService],
                    multi: true,
                },
                server_settings_1.ServerSettings,
                {
                    provide: core_1.APP_INITIALIZER,
                    useFactory: serverSettingsFactory,
                    deps: [server_settings_1.ServerSettings],
                    multi: true,
                },
                { provide: router_1.RouteReuseStrategy, useClass: angular_1.IonicRouteStrategy },
                pages_module_guard_1.PagesModuleGuard,
                maintenance_info_module_guard_1.MaintenanceModuleGuard,
            ],
            bootstrap: [app_component_1.AppComponent],
        }),
        tslib_1.__metadata("design:paramtypes", [apollo_angular_1.Apollo,
            apollo_angular_link_http_1.HttpLink,
            store_service_1.Store])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
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
//# sourceMappingURL=app.module.js.map