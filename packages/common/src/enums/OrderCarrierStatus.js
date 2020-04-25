"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var OrderCarrierStatus;
(function (OrderCarrierStatus) {
    OrderCarrierStatus[OrderCarrierStatus["NoCarrier"] = 0] = "NoCarrier";
    OrderCarrierStatus[OrderCarrierStatus["CarrierSelectedOrder"] = 1] = "CarrierSelectedOrder";
    OrderCarrierStatus[OrderCarrierStatus["CarrierPickedUpOrder"] = 2] = "CarrierPickedUpOrder";
    OrderCarrierStatus[OrderCarrierStatus["CarrierStartDelivery"] = 3] = "CarrierStartDelivery";
    OrderCarrierStatus[OrderCarrierStatus["CarrierArrivedToCustomer"] = 4] = "CarrierArrivedToCustomer";
    OrderCarrierStatus[OrderCarrierStatus["DeliveryCompleted"] = 5] = "DeliveryCompleted";
    OrderCarrierStatus[OrderCarrierStatus["IssuesDuringDelivery"] = 204] = "IssuesDuringDelivery";
    OrderCarrierStatus[OrderCarrierStatus["ClientRefuseTakingOrder"] = 205] = "ClientRefuseTakingOrder";
})(OrderCarrierStatus || (OrderCarrierStatus = {}));
function carrierStatusToString(status) {
    switch (status) {
        case OrderCarrierStatus.NoCarrier:
            return 'No Carrier';
        case OrderCarrierStatus.CarrierSelectedOrder:
            return 'Order Selected For Delivery';
        case OrderCarrierStatus.CarrierPickedUpOrder:
            return 'Order Picked Up';
        case OrderCarrierStatus.CarrierStartDelivery:
            return 'Order In Delivery';
        case OrderCarrierStatus.CarrierArrivedToCustomer:
            return 'Arrived To Client';
        case OrderCarrierStatus.DeliveryCompleted:
            return 'Delivered';
        case OrderCarrierStatus.IssuesDuringDelivery:
            return 'Delivery Issues';
        case OrderCarrierStatus.ClientRefuseTakingOrder:
            return 'Client Refuse to Take Order';
        default:
            return 'BAD_STATUS';
    }
}
exports.carrierStatusToString = carrierStatusToString;
exports.default = OrderCarrierStatus;
//# sourceMappingURL=OrderCarrierStatus.js.map