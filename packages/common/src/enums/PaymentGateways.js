"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PaymentGateways;
(function (PaymentGateways) {
    PaymentGateways[PaymentGateways["Stripe"] = 0] = "Stripe";
    PaymentGateways[PaymentGateways["PayPal"] = 1] = "PayPal";
})(PaymentGateways || (PaymentGateways = {}));
function paymentGatewaysToString(paymentGateway) {
    switch (paymentGateway) {
        case PaymentGateways.Stripe:
            return 'Stripe';
        case PaymentGateways.PayPal:
            return 'PayPal';
        default:
            return 'BAD_PAYMENT_GATEWAY';
    }
}
exports.paymentGatewaysToString = paymentGatewaysToString;
function paymentGatewaysLogo(paymentGateway) {
    switch (paymentGateway) {
        case PaymentGateways.Stripe:
            return 'https://stripe.com/img/v3/home/twitter.png';
        case PaymentGateways.PayPal:
            return 'https://avatars1.githubusercontent.com/u/476675?s=200&v=4';
        default:
            return 'BAD_PAYMENT_GATEWAY';
    }
}
exports.paymentGatewaysLogo = paymentGatewaysLogo;
exports.default = PaymentGateways;
//# sourceMappingURL=PaymentGateways.js.map