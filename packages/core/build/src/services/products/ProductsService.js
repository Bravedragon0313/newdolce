"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const inversify_1 = require("inversify");
const Log_1 = require("../../helpers/Log");
const Product_1 = tslib_1.__importDefault(require("@modules/server.common/entities/Product"));
const db_server_1 = require("@pyro/db-server");
const rxjs_1 = require("rxjs");
const io_1 = require("@pyro/io");
const operators_1 = require("rxjs/operators");
let ProductsService = class ProductsService extends db_server_1.DBService {
    constructor() {
        super(...arguments);
        this.DBObject = Product_1.default;
        this.log = Log_1.createEverLogger({
            name: 'productsService',
        });
    }
    get(id) {
        return super.get(id).pipe(operators_1.map((product) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.throwIfNotExists(id);
            return product;
        })), operators_1.switchMap((product) => product));
    }
    getProducts(findInput, pagingOptions, existedProductsIds = []) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const sortObj = {};
            if (pagingOptions.sort) {
                sortObj[pagingOptions.sort.field] = pagingOptions.sort.sortBy;
            }
            return this.Model.find(Object.assign(Object.assign({}, findInput), { isDeleted: { $eq: false }, _id: { $nin: existedProductsIds } }))
                .sort(sortObj)
                .skip(pagingOptions.skip)
                .limit(pagingOptions.limit)
                .lean()
                .exec();
        });
    }
    create(product) {
        const _super = Object.create(null, {
            create: { get: () => super.create }
        });
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return _super.create.call(this, product);
        });
    }
    update(id, updateObject) {
        const _super = Object.create(null, {
            update: { get: () => super.update }
        });
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.throwIfNotExists(id);
            return _super.update.call(this, id, updateObject);
        });
    }
    save(updatedProduct) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.throwIfNotExists(updatedProduct.id);
            return this.update(updatedProduct.id, updatedProduct);
        });
    }
    throwIfNotExists(productId) {
        const _super = Object.create(null, {
            get: { get: () => super.get }
        });
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const product = yield _super.get.call(this, productId).pipe(operators_1.first()).toPromise();
            if (!product || product.isDeleted) {
                throw Error(`Product with id '${productId}' does not exists!`);
            }
        });
    }
};
tslib_1.__decorate([
    io_1.observableListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", rxjs_1.Observable)
], ProductsService.prototype, "get", null);
tslib_1.__decorate([
    io_1.asyncListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductsService.prototype, "getProducts", null);
tslib_1.__decorate([
    io_1.asyncListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [void 0]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductsService.prototype, "create", null);
tslib_1.__decorate([
    io_1.asyncListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductsService.prototype, "update", null);
tslib_1.__decorate([
    io_1.asyncListener(),
    tslib_1.__param(0, io_1.serialization((product) => new Product_1.default(product))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Product_1.default]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductsService.prototype, "save", null);
ProductsService = tslib_1.__decorate([
    inversify_1.injectable(),
    io_1.routerName('product')
], ProductsService);
exports.ProductsService = ProductsService;
//# sourceMappingURL=ProductsService.js.map