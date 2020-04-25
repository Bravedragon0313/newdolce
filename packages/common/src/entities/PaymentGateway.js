"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var db_1 = require("@pyro/db");
var PaymentGateways_1 = tslib_1.__importDefault(require("../enums/PaymentGateways"));
var typeorm_1 = require("typeorm");
var PaymentGateway = (function (_super) {
    tslib_1.__extends(PaymentGateway, _super);
    function PaymentGateway() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    tslib_1.__decorate([
        db_1.Types.Number(),
        typeorm_1.Column(),
        tslib_1.__metadata("design:type", Number)
    ], PaymentGateway.prototype, "paymentGateway", void 0);
    tslib_1.__decorate([
        db_1.Schema({ type: Object }),
        typeorm_1.Column(),
        tslib_1.__metadata("design:type", Object)
    ], PaymentGateway.prototype, "configureObject", void 0);
    PaymentGateway = tslib_1.__decorate([
        db_1.ModelName('PaymentGateway')
    ], PaymentGateway);
    return PaymentGateway;
}(db_1.DBObject));
exports.default = PaymentGateway;
//# sourceMappingURL=PaymentGateway.js.map