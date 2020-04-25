"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var Product_1 = tslib_1.__importDefault(require("./Product"));
var db_1 = require("../@pyro/db");
var typeorm_1 = require("typeorm");
var WarehouseProduct = (function (_super) {
    tslib_1.__extends(WarehouseProduct, _super);
    function WarehouseProduct(warehouseProduct) {
        var _this = _super.call(this, warehouseProduct) || this;
        if (typeof warehouseProduct.product !== 'string') {
            _this.product = new Product_1.default(warehouseProduct.product);
        }
        return _this;
    }
    Object.defineProperty(WarehouseProduct.prototype, "productId", {
        get: function () {
            if (typeof this.product === 'string') {
                return this.product;
            }
            else {
                return this.product.id;
            }
        },
        enumerable: true,
        configurable: true
    });
    tslib_1.__decorate([
        db_1.Types.Number(),
        typeorm_1.Column(),
        tslib_1.__metadata("design:type", Number)
    ], WarehouseProduct.prototype, "price", void 0);
    tslib_1.__decorate([
        db_1.Types.Number(),
        typeorm_1.Column(),
        tslib_1.__metadata("design:type", Number)
    ], WarehouseProduct.prototype, "initialPrice", void 0);
    tslib_1.__decorate([
        db_1.Types.Number(0),
        typeorm_1.Column(),
        tslib_1.__metadata("design:type", Number)
    ], WarehouseProduct.prototype, "count", void 0);
    tslib_1.__decorate([
        db_1.Types.Number(0),
        typeorm_1.Column(),
        tslib_1.__metadata("design:type", Number)
    ], WarehouseProduct.prototype, "soldCount", void 0);
    tslib_1.__decorate([
        db_1.Types.Ref(Product_1.default),
        tslib_1.__metadata("design:type", Object)
    ], WarehouseProduct.prototype, "product", void 0);
    tslib_1.__decorate([
        typeorm_1.Column(),
        db_1.Types.Boolean(true),
        tslib_1.__metadata("design:type", Boolean)
    ], WarehouseProduct.prototype, "isManufacturing", void 0);
    tslib_1.__decorate([
        typeorm_1.Column(),
        db_1.Types.Boolean(true),
        tslib_1.__metadata("design:type", Boolean)
    ], WarehouseProduct.prototype, "isCarrierRequired", void 0);
    tslib_1.__decorate([
        typeorm_1.Column(),
        db_1.Types.Boolean(true),
        tslib_1.__metadata("design:type", Boolean)
    ], WarehouseProduct.prototype, "isDeliveryRequired", void 0);
    tslib_1.__decorate([
        db_1.Schema({ required: false, type: Boolean }),
        typeorm_1.Column(),
        tslib_1.__metadata("design:type", Boolean)
    ], WarehouseProduct.prototype, "isTakeaway", void 0);
    tslib_1.__decorate([
        db_1.Schema({ required: false, type: Number }),
        typeorm_1.Column(),
        tslib_1.__metadata("design:type", Number)
    ], WarehouseProduct.prototype, "deliveryTimeMin", void 0);
    tslib_1.__decorate([
        db_1.Schema({ required: false, type: Number }),
        typeorm_1.Column(),
        tslib_1.__metadata("design:type", Number)
    ], WarehouseProduct.prototype, "deliveryTimeMax", void 0);
    WarehouseProduct = tslib_1.__decorate([
        db_1.ModelName('WarehouseProduct'),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], WarehouseProduct);
    return WarehouseProduct;
}(db_1.DBObject));
exports.default = WarehouseProduct;
//# sourceMappingURL=WarehouseProduct.js.map