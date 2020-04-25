"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var login_1 = require("./login");
var core_2 = require("@ngx-translate/core");
var auth_service_1 = require("../../services/auth.service");
var store_service_1 = require("../../services/store.service");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var angular_1 = require("@ionic/angular");
var routes = [
    {
        path: '',
        component: login_1.LoginPage,
    },
];
var LoginPageModule = (function () {
    function LoginPageModule() {
    }
    LoginPageModule = tslib_1.__decorate([
        core_1.NgModule({
            declarations: [login_1.LoginPage],
            providers: [auth_service_1.AuthService, store_service_1.Store],
            imports: [
                angular_1.IonicModule,
                router_1.RouterModule.forChild(routes),
                common_1.CommonModule,
                forms_1.FormsModule,
                core_2.TranslateModule.forChild(),
            ],
        })
    ], LoginPageModule);
    return LoginPageModule;
}());
exports.LoginPageModule = LoginPageModule;
//# sourceMappingURL=login.module.js.map