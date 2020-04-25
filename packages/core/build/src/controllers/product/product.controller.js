"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const ProductsDto_1 = require("./ProductsDto");
const passport_1 = require("@nestjs/passport");
const products_1 = require("../../services/products");
let ProductController = class ProductController {
    constructor(productsService) {
        this.productsService = productsService;
    }
    findAll(request) {
        return this.productsService.find({});
    }
    findOne(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const prod = yield this.productsService.getCurrent(id);
            return prod;
        });
    }
    create(createInfo) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.productsService.create(createInfo);
        });
    }
    update(id, updateInfo) {
        return `Here updates a #${id} product`;
    }
    remove(id) {
        return `Here removes a #${id} product`;
    }
};
tslib_1.__decorate([
    common_1.Get(),
    common_1.Header('Cache-Control', 'none'),
    common_1.UseGuards(passport_1.AuthGuard('jwt')),
    swagger_1.ApiBearerAuth(),
    tslib_1.__param(0, common_1.Req()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], ProductController.prototype, "findAll", null);
tslib_1.__decorate([
    common_1.Get(':id'),
    tslib_1.__param(0, common_1.Param('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductController.prototype, "findOne", null);
tslib_1.__decorate([
    common_1.Post(':id'),
    tslib_1.__param(0, common_1.Body()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [ProductsDto_1.CreateProductDto]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductController.prototype, "create", null);
tslib_1.__decorate([
    common_1.Put(':id'),
    tslib_1.__param(0, common_1.Param('id')), tslib_1.__param(1, common_1.Body()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, ProductsDto_1.UpdateProductDto]),
    tslib_1.__metadata("design:returntype", void 0)
], ProductController.prototype, "update", null);
tslib_1.__decorate([
    common_1.Delete('id'),
    tslib_1.__param(0, common_1.Param('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", void 0)
], ProductController.prototype, "remove", null);
ProductController = tslib_1.__decorate([
    swagger_1.ApiUseTags('product'),
    common_1.Controller('product'),
    tslib_1.__metadata("design:paramtypes", [products_1.ProductsService])
], ProductController);
exports.ProductController = ProductController;
//# sourceMappingURL=product.controller.js.map