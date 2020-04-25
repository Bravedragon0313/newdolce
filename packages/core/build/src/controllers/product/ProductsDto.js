"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const swagger_1 = require("@nestjs/swagger");
class UpdateProductDto {
}
tslib_1.__decorate([
    swagger_1.ApiModelProperty(),
    tslib_1.__metadata("design:type", String)
], UpdateProductDto.prototype, "name", void 0);
tslib_1.__decorate([
    swagger_1.ApiModelProperty(),
    tslib_1.__metadata("design:type", Number)
], UpdateProductDto.prototype, "price", void 0);
exports.UpdateProductDto = UpdateProductDto;
class CreateProductDto {
}
tslib_1.__decorate([
    swagger_1.ApiModelProperty(),
    tslib_1.__metadata("design:type", Array)
], CreateProductDto.prototype, "title", void 0);
tslib_1.__decorate([
    swagger_1.ApiModelProperty(),
    tslib_1.__metadata("design:type", Array)
], CreateProductDto.prototype, "description", void 0);
tslib_1.__decorate([
    swagger_1.ApiModelProperty(),
    tslib_1.__metadata("design:type", Array)
], CreateProductDto.prototype, "images", void 0);
exports.CreateProductDto = CreateProductDto;
//# sourceMappingURL=ProductsDto.js.map