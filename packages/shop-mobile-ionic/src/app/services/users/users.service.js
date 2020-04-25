"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var apollo_angular_1 = require("apollo-angular");
var core_1 = require("@angular/core");
var graphql_tag_1 = tslib_1.__importDefault(require("graphql-tag"));
var operators_1 = require("rxjs/operators");
var UsersService = (function () {
    function UsersService(_apollo) {
        this._apollo = _apollo;
    }
    UsersService.prototype.getUser = function (id) {
        return this._apollo
            .query({
            query: graphql_tag_1.default(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n\t\t\t\t\tquery GetUser($id: String!) {\n\t\t\t\t\t\tuser(id: $id) {\n\t\t\t\t\t\t\tapartment\n\t\t\t\t\t\t\tgeoLocation {\n\t\t\t\t\t\t\t\tcountryId\n\t\t\t\t\t\t\t\tcountryName\n\t\t\t\t\t\t\t\tpostcode\n\t\t\t\t\t\t\t\tcity\n\t\t\t\t\t\t\t\tstreetAddress\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t"], ["\n\t\t\t\t\tquery GetUser($id: String!) {\n\t\t\t\t\t\tuser(id: $id) {\n\t\t\t\t\t\t\tapartment\n\t\t\t\t\t\t\tgeoLocation {\n\t\t\t\t\t\t\t\tcountryId\n\t\t\t\t\t\t\t\tcountryName\n\t\t\t\t\t\t\t\tpostcode\n\t\t\t\t\t\t\t\tcity\n\t\t\t\t\t\t\t\tstreetAddress\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t"]))),
            variables: { id: id },
        })
            .pipe(operators_1.map(function (res) { return res.data.user; }), operators_1.share());
    };
    UsersService = tslib_1.__decorate([
        core_1.Injectable({
            providedIn: 'root',
        }),
        tslib_1.__metadata("design:paramtypes", [apollo_angular_1.Apollo])
    ], UsersService);
    return UsersService;
}());
exports.UsersService = UsersService;
var templateObject_1;
//# sourceMappingURL=users.service.js.map