"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var apollo_angular_1 = require("apollo-angular");
var graphql_tag_1 = tslib_1.__importDefault(require("graphql-tag"));
var operators_1 = require("rxjs/operators");
var User_1 = tslib_1.__importDefault(require("@modules/server.common/entities/User"));
var UsersService = (function () {
    function UsersService(_apollo) {
        this._apollo = _apollo;
    }
    UsersService.prototype.getUsers = function () {
        var _this = this;
        return this._apollo
            .watchQuery({
            query: graphql_tag_1.default(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n\t\t\t\t\tquery AllUsers {\n\t\t\t\t\t\tusers {\n\t\t\t\t\t\t\t_id\n\t\t\t\t\t\t\tfirstName\n\t\t\t\t\t\t\tlastName\n\t\t\t\t\t\t\temail\n\t\t\t\t\t\t\tapartment\n\t\t\t\t\t\t\tphone\n\t\t\t\t\t\t\tgeoLocation {\n\t\t\t\t\t\t\t\tcountryId\n\t\t\t\t\t\t\t\tcity\n\t\t\t\t\t\t\t\thouse\n\t\t\t\t\t\t\t\tstreetAddress\n\t\t\t\t\t\t\t\tloc {\n\t\t\t\t\t\t\t\t\ttype\n\t\t\t\t\t\t\t\t\tcoordinates\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t"], ["\n\t\t\t\t\tquery AllUsers {\n\t\t\t\t\t\tusers {\n\t\t\t\t\t\t\t_id\n\t\t\t\t\t\t\tfirstName\n\t\t\t\t\t\t\tlastName\n\t\t\t\t\t\t\temail\n\t\t\t\t\t\t\tapartment\n\t\t\t\t\t\t\tphone\n\t\t\t\t\t\t\tgeoLocation {\n\t\t\t\t\t\t\t\tcountryId\n\t\t\t\t\t\t\t\tcity\n\t\t\t\t\t\t\t\thouse\n\t\t\t\t\t\t\t\tstreetAddress\n\t\t\t\t\t\t\t\tloc {\n\t\t\t\t\t\t\t\t\ttype\n\t\t\t\t\t\t\t\t\tcoordinates\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t"]))),
            pollInterval: 5000,
        })
            .valueChanges.pipe(operators_1.map(function (res) { return res.data.users; }), operators_1.map(function (users) { return users.map(function (user) { return _this._userFactory(user); }); }), operators_1.share());
    };
    UsersService.prototype._userFactory = function (user) {
        return user == null ? null : new User_1.default(user);
    };
    UsersService = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [apollo_angular_1.Apollo])
    ], UsersService);
    return UsersService;
}());
exports.UsersService = UsersService;
var templateObject_1;
//# sourceMappingURL=users.service.js.map