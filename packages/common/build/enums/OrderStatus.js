"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var OrderStatus;
(function (OrderStatus) {
    OrderStatus[OrderStatus["WarehousePreparation"] = 0] = "WarehousePreparation";
    OrderStatus[OrderStatus["InDelivery"] = 1] = "InDelivery";
    OrderStatus[OrderStatus["Delivered"] = 2] = "Delivered";
    OrderStatus[OrderStatus["CanceledWhileWarehousePreparation"] = 200] = "CanceledWhileWarehousePreparation";
    OrderStatus[OrderStatus["CanceledWhileInDelivery"] = 201] = "CanceledWhileInDelivery";
    OrderStatus[OrderStatus["WarehouseIssue"] = 202] = "WarehouseIssue";
    OrderStatus[OrderStatus["CarrierIssue"] = 203] = "CarrierIssue";
})(OrderStatus || (OrderStatus = {}));
exports.default = OrderStatus;
//# sourceMappingURL=OrderStatus.js.map