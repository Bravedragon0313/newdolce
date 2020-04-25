"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var db_1 = require("../@pyro/db");
var ProductsCategory_1 = tslib_1.__importDefault(require("./ProductsCategory"));
var typeorm_1 = require("typeorm");
var Product = (function (_super) {
    tslib_1.__extends(Product, _super);
    function Product() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    tslib_1.__decorate([
        db_1.Schema({ type: Array }),
        tslib_1.__metadata("design:type", Array)
    ], Product.prototype, "title", void 0);
    tslib_1.__decorate([
        db_1.Schema({ type: Array }),
        tslib_1.__metadata("design:type", Array)
    ], Product.prototype, "description", void 0);
    tslib_1.__decorate([
        db_1.Schema({ type: Array }),
        tslib_1.__metadata("design:type", Array)
    ], Product.prototype, "descriptionHTML", void 0);
    tslib_1.__decorate([
        db_1.Schema({ type: Array }),
        tslib_1.__metadata("design:type", Array)
    ], Product.prototype, "details", void 0);
    tslib_1.__decorate([
        db_1.Schema({ type: Array }),
        tslib_1.__metadata("design:type", Array)
    ], Product.prototype, "detailsHTML", void 0);
    tslib_1.__decorate([
        db_1.Schema({ type: Array }),
        tslib_1.__metadata("design:type", Array)
    ], Product.prototype, "images", void 0);
    tslib_1.__decorate([
        db_1.Types.Ref([ProductsCategory_1.default]),
        tslib_1.__metadata("design:type", Array)
    ], Product.prototype, "categories", void 0);
    tslib_1.__decorate([
        db_1.Types.Boolean(false),
        typeorm_1.Column(),
        tslib_1.__metadata("design:type", Boolean)
    ], Product.prototype, "isDeleted", void 0);
    Product = tslib_1.__decorate([
        db_1.ModelName('Product'),
        typeorm_1.Entity({ name: 'products' })
    ], Product);
    return Product;
}(db_1.DBObject));
exports.default = Product;
//# sourceMappingURL=Product.js.map