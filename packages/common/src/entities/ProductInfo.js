"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var lodash_1 = tslib_1.__importDefault(require("lodash"));
var WarehouseProduct_1 = tslib_1.__importDefault(require("./WarehouseProduct"));
var ProductInfo = (function () {
    function ProductInfo(productInfo) {
        if (productInfo) {
            lodash_1.default.assign(this, productInfo);
            if (productInfo.warehouseProduct) {
                this.warehouseProduct = new WarehouseProduct_1.default(productInfo.warehouseProduct);
            }
        }
    }
    Object.defineProperty(ProductInfo.prototype, "product", {
        get: function () {
            return this.warehouseProduct.product;
        },
        enumerable: true,
        configurable: true
    });
    ProductInfo.prototype.getOrderProductCreateObject = function (count) {
        return {
            initialPrice: this.warehouseProduct.initialPrice,
            price: this.warehouseProduct.price,
            deliveryTimeMin: this.warehouseProduct.deliveryTimeMin,
            deliveryTimeMax: this.warehouseProduct.deliveryTimeMax,
            count: count,
            product: this.warehouseProduct.product,
        };
    };
    return ProductInfo;
}());
exports.default = ProductInfo;
//# sourceMappingURL=ProductInfo.js.map