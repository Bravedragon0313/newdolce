"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var OrderWarehouseStatus;
(function (OrderWarehouseStatus) {
    OrderWarehouseStatus[OrderWarehouseStatus["NoStatus"] = 0] = "NoStatus";
    OrderWarehouseStatus[OrderWarehouseStatus["ReadyForProcessing"] = 1] = "ReadyForProcessing";
    OrderWarehouseStatus[OrderWarehouseStatus["WarehouseStartedProcessing"] = 2] = "WarehouseStartedProcessing";
    OrderWarehouseStatus[OrderWarehouseStatus["AllocationStarted"] = 3] = "AllocationStarted";
    OrderWarehouseStatus[OrderWarehouseStatus["AllocationFinished"] = 4] = "AllocationFinished";
    OrderWarehouseStatus[OrderWarehouseStatus["PackagingStarted"] = 5] = "PackagingStarted";
    OrderWarehouseStatus[OrderWarehouseStatus["PackagingFinished"] = 6] = "PackagingFinished";
    OrderWarehouseStatus[OrderWarehouseStatus["GivenToCarrier"] = 7] = "GivenToCarrier";
    OrderWarehouseStatus[OrderWarehouseStatus["GivenToCustomer"] = 8] = "GivenToCustomer";
    OrderWarehouseStatus[OrderWarehouseStatus["AllocationFailed"] = 200] = "AllocationFailed";
    OrderWarehouseStatus[OrderWarehouseStatus["PackagingFailed"] = 201] = "PackagingFailed";
})(OrderWarehouseStatus || (OrderWarehouseStatus = {}));
function warehouseStatusToString(status) {
    switch (status) {
        case OrderWarehouseStatus.NoStatus:
            return 'Created';
        case OrderWarehouseStatus.ReadyForProcessing:
            return 'Confirmed';
        case OrderWarehouseStatus.WarehouseStartedProcessing:
            return 'Processing';
        case OrderWarehouseStatus.AllocationStarted:
            return 'Allocation Started';
        case OrderWarehouseStatus.AllocationFinished:
            return 'Allocation Finished';
        case OrderWarehouseStatus.PackagingStarted:
            return 'Packaging Started';
        case OrderWarehouseStatus.PackagingFinished:
            return 'Packaged';
        case OrderWarehouseStatus.GivenToCarrier:
            return 'Given to Carrier';
        case OrderWarehouseStatus.GivenToCustomer:
            return 'Given to Customer';
        case OrderWarehouseStatus.AllocationFailed:
            return 'Allocation Failed';
        case OrderWarehouseStatus.PackagingFailed:
            return 'Packaging Failed';
        default:
            return 'BAD_STATUS';
    }
}
exports.warehouseStatusToString = warehouseStatusToString;
exports.default = OrderWarehouseStatus;
//# sourceMappingURL=OrderWarehouseStatus.js.map