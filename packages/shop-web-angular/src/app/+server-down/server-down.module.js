"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var server_down_page_1 = require("./server-down.page");
var core_2 = require("@ngx-translate/core");
var http_1 = require("@angular/common/http");
var http_loader_1 = require("@ngx-translate/http-loader");
var server_connection_service_1 = require("@modules/client.common.angular2/services/server-connection.service");
function HttpLoaderFactory(http) {
    return new http_loader_1.TranslateHttpLoader(http, '../../../assets/i18n/', '.json');
}
exports.HttpLoaderFactory = HttpLoaderFactory;
var routes = [
    {
        path: '',
        component: server_down_page_1.ServerDownPage,
    },
];
var ServerDownModule = (function () {
    function ServerDownModule() {
    }
    ServerDownModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                router_1.RouterModule.forChild(routes),
                core_2.TranslateModule.forChild({
                    loader: {
                        provide: core_2.TranslateLoader,
                        useFactory: HttpLoaderFactory,
                        deps: [http_1.HttpClient],
                    },
                }),
            ],
            providers: [server_connection_service_1.ServerConnectionService],
            declarations: [server_down_page_1.ServerDownPage],
        })
    ], ServerDownModule);
    return ServerDownModule;
}());
exports.ServerDownModule = ServerDownModule;
//# sourceMappingURL=server-down.module.js.map