"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var angular_1 = require("@ionic/angular");
var pipes_module_1 = require("@modules/client.common.angular2/pipes/pipes.module");
var server_down_page_1 = require("./server-down.page");
var core_2 = require("@ngx-translate/core");
var http_1 = require("@angular/common/http");
var http_loader_1 = require("@ngx-translate/http-loader");
function HttpLoaderFactory(http) {
    return new http_loader_1.TranslateHttpLoader(http, './assets/i18n/', '.json');
}
exports.HttpLoaderFactory = HttpLoaderFactory;
var routes = [
    {
        path: '',
        component: server_down_page_1.ServerDownPage,
    },
];
var ServerDownPageModule = (function () {
    function ServerDownPageModule() {
    }
    ServerDownPageModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                angular_1.IonicModule,
                router_1.RouterModule.forChild(routes),
                pipes_module_1.PipesModule,
                core_2.TranslateModule.forChild({
                    loader: {
                        provide: core_2.TranslateLoader,
                        useFactory: HttpLoaderFactory,
                        deps: [http_1.HttpClient],
                    },
                }),
            ],
            declarations: [server_down_page_1.ServerDownPage],
        })
    ], ServerDownPageModule);
    return ServerDownPageModule;
}());
exports.ServerDownPageModule = ServerDownPageModule;
//# sourceMappingURL=server-down.module.js.map