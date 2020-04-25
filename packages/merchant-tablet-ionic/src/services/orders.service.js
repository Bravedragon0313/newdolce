"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var apollo_angular_1 = require("apollo-angular");
var graphql_tag_1 = tslib_1.__importDefault(require("graphql-tag"));
var operators_1 = require("rxjs/operators");
var OrdersService = (function () {
    function OrdersService(_apollo) {
        this._apollo = _apollo;
    }
    OrdersService.prototype.getOrderedUsersInfo = function (storeId) {
        return this._apollo
            .watchQuery({
            query: graphql_tag_1.default(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n\t\t\t\t\tquery GetOrderedUsersInfo($storeId: String!) {\n\t\t\t\t\t\tgetOrderedUsersInfo(storeId: $storeId) {\n\t\t\t\t\t\t\tuser {\n\t\t\t\t\t\t\t\t_id\n\t\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\t\timage\n\t\t\t\t\t\t\t\tfirstName\n\t\t\t\t\t\t\t\tlastName\n\t\t\t\t\t\t\t\temail\n\t\t\t\t\t\t\t\tapartment\n\t\t\t\t\t\t\t\tphone\n\t\t\t\t\t\t\t\tgeoLocation {\n\t\t\t\t\t\t\t\t\tcountryId\n\t\t\t\t\t\t\t\t\tcity\n\t\t\t\t\t\t\t\t\thouse\n\t\t\t\t\t\t\t\t\tstreetAddress\n\t\t\t\t\t\t\t\t\tloc {\n\t\t\t\t\t\t\t\t\t\ttype\n\t\t\t\t\t\t\t\t\t\tcoordinates\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\tordersCount\n\t\t\t\t\t\t\ttotalPrice\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t"], ["\n\t\t\t\t\tquery GetOrderedUsersInfo($storeId: String!) {\n\t\t\t\t\t\tgetOrderedUsersInfo(storeId: $storeId) {\n\t\t\t\t\t\t\tuser {\n\t\t\t\t\t\t\t\t_id\n\t\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\t\timage\n\t\t\t\t\t\t\t\tfirstName\n\t\t\t\t\t\t\t\tlastName\n\t\t\t\t\t\t\t\temail\n\t\t\t\t\t\t\t\tapartment\n\t\t\t\t\t\t\t\tphone\n\t\t\t\t\t\t\t\tgeoLocation {\n\t\t\t\t\t\t\t\t\tcountryId\n\t\t\t\t\t\t\t\t\tcity\n\t\t\t\t\t\t\t\t\thouse\n\t\t\t\t\t\t\t\t\tstreetAddress\n\t\t\t\t\t\t\t\t\tloc {\n\t\t\t\t\t\t\t\t\t\ttype\n\t\t\t\t\t\t\t\t\t\tcoordinates\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\tordersCount\n\t\t\t\t\t\t\ttotalPrice\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t"]))),
            variables: { storeId: storeId },
            pollInterval: 1000,
        })
            .valueChanges.pipe(operators_1.map(function (res) { return res.data['getOrderedUsersInfo']; }), operators_1.share());
    };
    OrdersService.prototype.getOrders = function () {
        return this._apollo
            .watchQuery({
            query: graphql_tag_1.default(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n\t\t\t\t\tquery Orders {\n\t\t\t\t\t\torders {\n\t\t\t\t\t\t\tcarrierId\n\t\t\t\t\t\t\tisCompleted\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t"], ["\n\t\t\t\t\tquery Orders {\n\t\t\t\t\t\torders {\n\t\t\t\t\t\t\tcarrierId\n\t\t\t\t\t\t\tisCompleted\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t"]))),
            pollInterval: 4000,
        })
            .valueChanges.pipe(operators_1.map(function (res) { return res.data.orders; }), operators_1.share());
    };
    OrdersService = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [apollo_angular_1.Apollo])
    ], OrdersService);
    return OrdersService;
}());
exports.OrdersService = OrdersService;
var templateObject_1, templateObject_2;
//# sourceMappingURL=orders.service.js.map