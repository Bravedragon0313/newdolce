"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const inversify_1 = require("inversify");
const Log_1 = require("../../helpers/Log");
const db_server_1 = require("@pyro/db-server");
const rxjs_1 = require("rxjs");
const io_1 = require("@pyro/io");
const ProductsCategory_1 = tslib_1.__importDefault(require("@modules/server.common/entities/ProductsCategory"));
const operators_1 = require("rxjs/operators");
let ProductsCategoriesService = class ProductsCategoriesService extends db_server_1.DBService {
    constructor() {
        super(...arguments);
        this.DBObject = ProductsCategory_1.default;
        this.log = Log_1.createEverLogger({
            name: 'productsCategoriesService',
        });
    }
    get(id) {
        return super.get(id).pipe(operators_1.map((category) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.throwIfNotExists(id);
            return category;
        })), operators_1.switchMap((category) => category));
    }
    create(category) {
        const _super = Object.create(null, {
            create: { get: () => super.create }
        });
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return _super.create.call(this, category);
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
    remove(id) {
        const _super = Object.create(null, {
            remove: { get: () => super.remove }
        });
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.throwIfNotExists(id);
            return _super.remove.call(this, id);
        });
    }
    throwIfNotExists(categoryId) {
        const _super = Object.create(null, {
            get: { get: () => super.get }
        });
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const category = yield _super.get.call(this, categoryId).pipe(operators_1.first()).toPromise();
            if (!category || category.isDeleted) {
                throw Error(`Category with id '${categoryId}' does not exists!`);
            }
        });
    }
};
tslib_1.__decorate([
    io_1.observableListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", rxjs_1.Observable)
], ProductsCategoriesService.prototype, "get", null);
tslib_1.__decorate([
    io_1.asyncListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [void 0]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductsCategoriesService.prototype, "create", null);
tslib_1.__decorate([
    io_1.asyncListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductsCategoriesService.prototype, "update", null);
tslib_1.__decorate([
    io_1.asyncListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductsCategoriesService.prototype, "remove", null);
ProductsCategoriesService = tslib_1.__decorate([
    inversify_1.injectable(),
    io_1.routerName('products-category')
], ProductsCategoriesService);
exports.ProductsCategoriesService = ProductsCategoriesService;
//# sourceMappingURL=ProductsCategoriesService.js.map