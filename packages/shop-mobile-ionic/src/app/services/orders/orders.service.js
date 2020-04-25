"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var apollo_angular_1 = require("apollo-angular");
var graphql_tag_1 = tslib_1.__importDefault(require("graphql-tag"));
var OrdersService = (function () {
    function OrdersService(_apollo) {
        this._apollo = _apollo;
    }
    OrdersService.prototype.generateOrdersByCustomerId = function (numberOfOrders, customerId) {
        return this._apollo.query({
            query: graphql_tag_1.default(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n\t\t\t\tquery GenerateOrdersByCustomerId(\n\t\t\t\t\t$numberOfOrders: Int!\n\t\t\t\t\t$customerId: String!\n\t\t\t\t) {\n\t\t\t\t\tgenerateOrdersByCustomerId(\n\t\t\t\t\t\tnumberOfOrders: $numberOfOrders\n\t\t\t\t\t\tcustomerId: $customerId\n\t\t\t\t\t)\n\t\t\t\t}\n\t\t\t"], ["\n\t\t\t\tquery GenerateOrdersByCustomerId(\n\t\t\t\t\t$numberOfOrders: Int!\n\t\t\t\t\t$customerId: String!\n\t\t\t\t) {\n\t\t\t\t\tgenerateOrdersByCustomerId(\n\t\t\t\t\t\tnumberOfOrders: $numberOfOrders\n\t\t\t\t\t\tcustomerId: $customerId\n\t\t\t\t\t)\n\t\t\t\t}\n\t\t\t"]))),
            variables: { numberOfOrders: numberOfOrders, customerId: customerId },
        });
    };
    OrdersService = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [apollo_angular_1.Apollo])
    ], OrdersService);
    return OrdersService;
}());
exports.OrdersService = OrdersService;
var templateObject_1;
//# sourceMappingURL=orders.service.js.map