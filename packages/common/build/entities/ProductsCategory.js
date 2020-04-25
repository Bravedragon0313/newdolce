"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var db_1 = require("../@pyro/db");
var typeorm_1 = require("typeorm");
var ProductsCategory = (function (_super) {
    tslib_1.__extends(ProductsCategory, _super);
    function ProductsCategory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    tslib_1.__decorate([
        db_1.Schema({ type: Array }),
        tslib_1.__metadata("design:type", Array)
    ], ProductsCategory.prototype, "name", void 0);
    tslib_1.__decorate([
        db_1.Schema({
            type: String,
            required: false,
        }),
        typeorm_1.Column(),
        tslib_1.__metadata("design:type", String)
    ], ProductsCategory.prototype, "image", void 0);
    tslib_1.__decorate([
        db_1.Types.Boolean(false),
        typeorm_1.Column(),
        tslib_1.__metadata("design:type", Boolean)
    ], ProductsCategory.prototype, "isDeleted", void 0);
    ProductsCategory = tslib_1.__decorate([
        db_1.ModelName('ProductCategory'),
        typeorm_1.Entity({ name: 'productcategories' })
    ], ProductsCategory);
    return ProductsCategory;
}(db_1.DBObject));
exports.default = ProductsCategory;
//# sourceMappingURL=ProductsCategory.js.map