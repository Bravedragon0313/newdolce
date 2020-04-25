"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var OrderStatus_1 = tslib_1.__importDefault(require("@modules/server.common/enums/OrderStatus"));
var OrderWarehouseStatus_1 = tslib_1.__importDefault(require("@modules/server.common/enums/OrderWarehouseStatus"));
var lodash_1 = tslib_1.__importDefault(require("lodash"));
function ordersFilter(orders, mode) {
    function isMatching(ordersMode, order) {
        switch (ordersMode) {
            case 'ready':
                return ((order.status === OrderStatus_1.default.WarehousePreparation ||
                    (order.status === OrderStatus_1.default.InDelivery &&
                        order.warehouseStatus ===
                            OrderWarehouseStatus_1.default.PackagingFinished)) &&
                    order.warehouseStatus !==
                        OrderWarehouseStatus_1.default.GivenToCustomer);
            case 'in_delivery':
                return order.status === OrderStatus_1.default.InDelivery;
            case 'not_confirmed':
                return (!order.isConfirmed &&
                    !order.isCancelled &&
                    !order.isCompleted);
            case 'cancelled':
                return order.isCancelled;
            case 'all':
            default:
                return true;
        }
    }
    return lodash_1.default.filter(orders, function (order) { return isMatching(mode, order); });
}
exports.ordersFilter = ordersFilter;
//# sourceMappingURL=orders-filters.js.map