"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const lodash_1 = tslib_1.__importDefault(require("lodash"));
const inversify_1 = require("inversify");
const products_1 = require("../products");
const Log_1 = require("../../helpers/Log");
const Warehouse_1 = tslib_1.__importDefault(require("@modules/server.common/entities/Warehouse"));
const rxjs_1 = require("rxjs");
const io_1 = require("@pyro/io");
const operators_1 = require("rxjs/operators");
const of_1 = require("rxjs/observable/of");
const db_server_1 = require("@pyro/db-server");
const env_1 = require("../../env");
const uuid_1 = require("uuid");
let WarehousesService = class WarehousesService extends db_server_1.DBService {
    constructor(productsService, authServiceFactory) {
        super();
        this.productsService = productsService;
        this.authServiceFactory = authServiceFactory;
        this.DBObject = Warehouse_1.default;
        this.log = Log_1.createEverLogger({ name: 'warehousesService' });
        this.authService = this.authServiceFactory({
            role: 'warehouse',
            Entity: Warehouse_1.default,
            saltRounds: env_1.env.USER_PASSWORD_BCRYPT_SALT_ROUNDS,
        });
    }
    getMerchants(findInput, pagingOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const sortObj = {};
            if (pagingOptions.sort) {
                sortObj[pagingOptions.sort.field] = pagingOptions.sort.sortBy;
            }
            return this.Model.find(Object.assign(Object.assign({}, findInput), { isDeleted: { $eq: false } }))
                .sort(sortObj)
                .skip(pagingOptions.skip)
                .limit(pagingOptions.limit)
                .lean()
                .exec();
        });
    }
    getAllActive(fullProducts = false) {
        const callId = uuid_1.v1();
        this.log.info({ callId, fullProducts }, '.getAllActive(fullProducts) called');
        return of_1.of(null).pipe(operators_1.concat(this.existence), operators_1.exhaustMap(() => this._getAllCurrentActive(fullProducts)), operators_1.tap({
            next: (warehouses) => {
                this.log.info({ callId, fullProducts, warehouses }, '.getAllActive(fullProducts) emitted next value');
            },
            error: (err) => {
                this.log.error({ callId, fullProducts, err }, '.getAllActive(fullProducts) thrown error!');
            },
        }));
    }
    register(input) {
        const _super = Object.create(null, {
            create: { get: () => super.create }
        });
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const warehouse = yield _super.create.call(this, Object.assign(Object.assign({}, input.warehouse), (input.password
                ? {
                    hash: yield this.authService.getPasswordHash(input.password),
                }
                : {})));
            return warehouse;
        });
    }
    updatePassword(id, password) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.throwIfNotExists(id);
            yield this.authService.updatePassword(id, password);
        });
    }
    login(username, password) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const res = yield this.authService.login({ username }, password);
            if (!res || res.entity.isDeleted) {
                return null;
            }
            return {
                warehouse: res.entity,
                token: res.token,
            };
        });
    }
    get(id, fullProducts = true) {
        if (!fullProducts) {
            return super.get(id).pipe(operators_1.map((warehouse) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                yield this.throwIfNotExists(id);
                return warehouse;
            })), operators_1.switchMap((warehouse) => warehouse));
        }
        else {
            return super
                .get(id)
                .pipe(operators_1.map((warehouse) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                yield this.throwIfNotExists(id);
                return warehouse;
            })), operators_1.switchMap((warehouse) => warehouse))
                .pipe(operators_1.exhaustMap(() => this._get(id, true)));
        }
    }
    updateGeoLocation(warehouseId, geoLocation) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.throwIfNotExists(warehouseId);
            return this.update(warehouseId, { geoLocation });
        });
    }
    updateAvailability(warehouseId, isAvailable) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.throwIfNotExists(warehouseId);
            return this.update(warehouseId, { isActive: isAvailable });
        });
    }
    save(warehouse) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.throwIfNotExists(warehouse.id);
            warehouse = lodash_1.default.clone(warehouse);
            lodash_1.default.each(warehouse.products, (warehouseProduct) => {
                warehouseProduct.product = warehouseProduct.productId;
            });
            return this.update(warehouse.id, warehouse);
        });
    }
    throwIfNotExists(storeId) {
        const _super = Object.create(null, {
            get: { get: () => super.get }
        });
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const store = yield _super.get.call(this, storeId).pipe(operators_1.first()).toPromise();
            if (!store || store.isDeleted) {
                throw Error(`Store with id '${storeId}' does not exists!`);
            }
        });
    }
    _get(id, fullProducts = false) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const _warehouse = (yield this.Model.findById(id)
                .populate(fullProducts ? 'products.product' : '')
                .lean()
                .exec());
            return new Warehouse_1.default(_warehouse);
        });
    }
    _getAllCurrentActive(fullProducts = false) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return lodash_1.default.map((yield this.Model.find({
                isActive: true,
                isDeleted: { $eq: false },
            })
                .populate(fullProducts ? 'products.product' : '')
                .lean()
                .exec()), (warehouse) => new Warehouse_1.default(warehouse));
        });
    }
};
tslib_1.__decorate([
    io_1.observableListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Boolean]),
    tslib_1.__metadata("design:returntype", rxjs_1.Observable)
], WarehousesService.prototype, "getAllActive", null);
tslib_1.__decorate([
    io_1.asyncListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], WarehousesService.prototype, "register", null);
tslib_1.__decorate([
    io_1.asyncListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], WarehousesService.prototype, "updatePassword", null);
tslib_1.__decorate([
    io_1.asyncListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, String]),
    tslib_1.__metadata("design:returntype", Promise)
], WarehousesService.prototype, "login", null);
tslib_1.__decorate([
    io_1.observableListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", rxjs_1.Observable)
], WarehousesService.prototype, "get", null);
tslib_1.__decorate([
    io_1.asyncListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], WarehousesService.prototype, "updateGeoLocation", null);
tslib_1.__decorate([
    io_1.asyncListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Boolean]),
    tslib_1.__metadata("design:returntype", Promise)
], WarehousesService.prototype, "updateAvailability", null);
tslib_1.__decorate([
    io_1.asyncListener(),
    tslib_1.__param(0, io_1.serialization((w) => new Warehouse_1.default(w))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Warehouse_1.default]),
    tslib_1.__metadata("design:returntype", Promise)
], WarehousesService.prototype, "save", null);
WarehousesService = tslib_1.__decorate([
    inversify_1.injectable(),
    io_1.routerName('warehouse'),
    tslib_1.__param(0, inversify_1.inject(products_1.ProductsService)),
    tslib_1.__param(1, inversify_1.inject('Factory<AuthService>')),
    tslib_1.__metadata("design:paramtypes", [products_1.ProductsService, Function])
], WarehousesService);
exports.WarehousesService = WarehousesService;
//# sourceMappingURL=WarehousesService.js.map