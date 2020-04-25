"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var Product_1 = tslib_1.__importDefault(require("./Product"));
var db_1 = require("../@pyro/db");
var typeorm_1 = require("typeorm");
var OrderProduct = (function (_super) {
    tslib_1.__extends(OrderProduct, _super);
    function OrderProduct(orderProduct) {
        var _this = _super.call(this, orderProduct) || this;
        if (orderProduct && orderProduct.product) {
            _this.product = new Product_1.default(orderProduct.product);
        }
        return _this;
    }
    tslib_1.__decorate([
        db_1.Types.Number(),
        typeorm_1.Column(),
        tslib_1.__metadata("design:type", Number)
    ], OrderProduct.prototype, "price", void 0);
    tslib_1.__decorate([
        db_1.Types.Number(),
        typeorm_1.Column(),
        tslib_1.__metadata("design:type", Number)
    ], OrderProduct.prototype, "initialPrice", void 0);
    tslib_1.__decorate([
        db_1.Types.Number(0),
        typeorm_1.Column(),
        tslib_1.__metadata("design:type", Number)
    ], OrderProduct.prototype, "count", void 0);
    tslib_1.__decorate([
        db_1.Schema(db_1.getSchema(Product_1.default)),
        tslib_1.__metadata("design:type", Product_1.default)
    ], OrderProduct.prototype, "product", void 0);
    tslib_1.__decorate([
        db_1.Types.Boolean(true),
        typeorm_1.Column(),
        tslib_1.__metadata("design:type", Boolean)
    ], OrderProduct.prototype, "isManufacturing", void 0);
    tslib_1.__decorate([
        db_1.Types.Boolean(true),
        typeorm_1.Column(),
        tslib_1.__metadata("design:type", Boolean)
    ], OrderProduct.prototype, "isCarrierRequired", void 0);
    tslib_1.__decorate([
        db_1.Types.Boolean(true),
        typeorm_1.Column(),
        tslib_1.__metadata("design:type", Boolean)
    ], OrderProduct.prototype, "isDeliveryRequired", void 0);
    tslib_1.__decorate([
        db_1.Schema({ required: false, type: Boolean }),
        typeorm_1.Column(),
        tslib_1.__metadata("design:type", Boolean)
    ], OrderProduct.prototype, "isTakeaway", void 0);
    tslib_1.__decorate([
        db_1.Schema({ required: false, type: Number }),
        typeorm_1.Column(),
        tslib_1.__metadata("design:type", Number)
    ], OrderProduct.prototype, "deliveryTimeMin", void 0);
    tslib_1.__decorate([
        db_1.Schema({ required: false, type: Number }),
        typeorm_1.Column(),
        tslib_1.__metadata("design:type", Number)
    ], OrderProduct.prototype, "deliveryTimeMax", void 0);
    OrderProduct = tslib_1.__decorate([
        db_1.ModelName('OrderProduct'),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], OrderProduct);
    return OrderProduct;
}(db_1.DBObject));
exports.default = OrderProduct;
//# sourceMappingURL=OrderProduct.js.map