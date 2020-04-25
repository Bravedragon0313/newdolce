"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var auth_service_1 = require("../../services/auth.service");
var operators_1 = require("rxjs/operators");
var store_service_1 = require("../../services/store.service");
var environment_1 = require("../../environments/environment");
var router_1 = require("@angular/router");
var LoginPage = (function () {
    function LoginPage(authService, store, router) {
        this.authService = authService;
        this.store = store;
        this.router = router;
        this.username = '';
        this.password = '';
        localStorage.removeItem('_warehouseId');
        localStorage.removeItem('_language');
        localStorage.removeItem('token');
        this.username = environment_1.environment.DEFAULT_LOGIN_USERNAME;
        this.password = environment_1.environment.DEFAULT_LOGIN_PASSWORD;
        this.loginLogo = environment_1.environment.LOGIN_LOGO;
    }
    LoginPage.prototype.login = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var res;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.authService
                            .login(this.username, this.password)
                            .pipe(operators_1.first())
                            .toPromise()];
                    case 1:
                        res = _a.sent();
                        if (!res) {
                            alert('Merchant not found!');
                            return [2];
                        }
                        console.log("Merchant logged in with id " + res.warehouse.id);
                        this.store.warehouseId = res.warehouse.id;
                        this.store.token = res.token;
                        this.router.navigate(['warehouse']);
                        return [2];
                }
            });
        });
    };
    LoginPage = tslib_1.__decorate([
        core_1.Component({
            selector: 'page-login',
            templateUrl: 'login.html',
            styleUrls: ['./login.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [auth_service_1.AuthService,
            store_service_1.Store,
            router_1.Router])
    ], LoginPage);
    return LoginPage;
}());
exports.LoginPage = LoginPage;
//# sourceMappingURL=login.js.map