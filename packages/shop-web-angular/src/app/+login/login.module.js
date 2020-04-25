"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var button_1 = require("@angular/material/button");
var card_1 = require("@angular/material/card");
var dialog_1 = require("@angular/material/dialog");
var form_field_1 = require("@angular/material/form-field");
var input_1 = require("@angular/material/input");
var material_extensions_1 = require("../../modules/material-extensions");
var search_1 = require("../../modules/material-extensions/search");
var login_routes_1 = require("./login.routes");
var login_component_1 = require("./login.component");
var byLocation_1 = require("./byLocation");
var angular_fontawesome_1 = require("@fortawesome/angular-fontawesome");
var fontawesome_svg_core_1 = require("@fortawesome/fontawesome-svg-core");
var free_brands_svg_icons_1 = require("@fortawesome/free-brands-svg-icons");
var free_regular_svg_icons_1 = require("@fortawesome/free-regular-svg-icons");
var by_code_module_guard_1 = require("./by-code.module.guard");
var socie_module_guard_1 = require("./socie.module.guard");
var core_2 = require("@ngx-translate/core");
var http_1 = require("@angular/common/http");
var http_loader_1 = require("@ngx-translate/http-loader");
var message_pop_up_module_1 = require("app/shared/message-pop-up/message-pop-up.module");
fontawesome_svg_core_1.library.add(free_regular_svg_icons_1.far);
fontawesome_svg_core_1.library.add(free_brands_svg_icons_1.faFacebook);
fontawesome_svg_core_1.library.add(free_brands_svg_icons_1.faGoogle);
console.log('`Login` bundle loaded asynchronously');
function HttpLoaderFactory(http) {
    return new http_loader_1.TranslateHttpLoader(http, './assets/i18n/', '.json');
}
exports.HttpLoaderFactory = HttpLoaderFactory;
var LoginModule = (function () {
    function LoginModule() {
    }
    LoginModule.routes = login_routes_1.routes;
    LoginModule = tslib_1.__decorate([
        core_1.NgModule({
            declarations: [login_component_1.LoginComponent],
            imports: [
                common_1.CommonModule,
                angular_fontawesome_1.FontAwesomeModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                router_1.RouterModule.forChild(login_routes_1.routes),
                core_2.TranslateModule.forChild({
                    loader: {
                        provide: core_2.TranslateLoader,
                        useFactory: HttpLoaderFactory,
                        deps: [http_1.HttpClient],
                    },
                }),
                message_pop_up_module_1.MessagePopUpModalModule,
                form_field_1.MatFormFieldModule,
                button_1.MatButtonModule,
                input_1.MatInputModule,
                dialog_1.MatDialogModule,
                card_1.MatCardModule,
                search_1.MatSearchModule,
                material_extensions_1.MatBoldInputModule,
                byLocation_1.LoginByLocationModule,
            ],
            providers: [by_code_module_guard_1.ByCodeModuleGuard, socie_module_guard_1.SocieModuleGuard],
        })
    ], LoginModule);
    return LoginModule;
}());
exports.LoginModule = LoginModule;
//# sourceMappingURL=login.module.js.map