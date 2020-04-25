"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var apollo_angular_1 = require("apollo-angular");
var graphql_tag_1 = tslib_1.__importDefault(require("graphql-tag"));
var operators_1 = require("rxjs/operators");
var AuthService = (function () {
    function AuthService(apollo) {
        this.apollo = apollo;
    }
    AuthService.prototype.login = function (username, password) {
        return this.apollo
            .mutate({
            mutation: graphql_tag_1.default(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n\t\t\t\t\tmutation WarehouseLogin(\n\t\t\t\t\t\t$username: String!\n\t\t\t\t\t\t$password: String!\n\t\t\t\t\t) {\n\t\t\t\t\t\twarehouseLogin(\n\t\t\t\t\t\t\tusername: $username\n\t\t\t\t\t\t\tpassword: $password\n\t\t\t\t\t\t) {\n\t\t\t\t\t\t\ttoken\n\t\t\t\t\t\t\twarehouse {\n\t\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t"], ["\n\t\t\t\t\tmutation WarehouseLogin(\n\t\t\t\t\t\t$username: String!\n\t\t\t\t\t\t$password: String!\n\t\t\t\t\t) {\n\t\t\t\t\t\twarehouseLogin(\n\t\t\t\t\t\t\tusername: $username\n\t\t\t\t\t\t\tpassword: $password\n\t\t\t\t\t\t) {\n\t\t\t\t\t\t\ttoken\n\t\t\t\t\t\t\twarehouse {\n\t\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t"]))),
            variables: {
                username: username,
                password: password,
            },
        })
            .pipe(operators_1.map(function (result) { return result.data.warehouseLogin; }), operators_1.share());
    };
    AuthService = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [apollo_angular_1.Apollo])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
var templateObject_1;
//# sourceMappingURL=auth.service.js.map