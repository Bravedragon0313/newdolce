"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var OrderBarcodeTypes;
(function (OrderBarcodeTypes) {
    OrderBarcodeTypes[OrderBarcodeTypes["QR"] = 0] = "QR";
    OrderBarcodeTypes[OrderBarcodeTypes["CODE128"] = 1] = "CODE128";
    OrderBarcodeTypes[OrderBarcodeTypes["CODE39"] = 2] = "CODE39";
    OrderBarcodeTypes[OrderBarcodeTypes["pharmacode"] = 3] = "pharmacode";
    OrderBarcodeTypes[OrderBarcodeTypes["MSI"] = 4] = "MSI";
})(OrderBarcodeTypes || (OrderBarcodeTypes = {}));
function orderBarcodeTypesToString(status) {
    switch (status) {
        case OrderBarcodeTypes.QR:
            return 'QR code';
        case OrderBarcodeTypes.CODE128:
            return 'CODE128';
        case OrderBarcodeTypes.CODE39:
            return 'CODE39';
        case OrderBarcodeTypes.pharmacode:
            return 'pharmacode';
        case OrderBarcodeTypes.MSI:
            return 'MSI';
        default:
            return 'BAD_STATUS';
    }
}
exports.orderBarcodeTypesToString = orderBarcodeTypesToString;
exports.default = OrderBarcodeTypes;
//# sourceMappingURL=OrderBarcodeTypes.js.map