"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const Warehouse_1 = tslib_1.__importDefault(require("@modules/server.common/entities/Warehouse"));
const warehouses_1 = require("../../services/warehouses");
const devices_1 = require("../../services/devices");
const orders_1 = require("../../services/orders");
const users_1 = require("../../services/users");
const geo_locations_1 = require("../../services/geo-locations");
const operators_1 = require("rxjs/operators");
const utils_1 = tslib_1.__importDefault(require("@modules/server.common/utils"));
const GeoLocation_1 = tslib_1.__importDefault(require("@modules/server.common/entities/GeoLocation"));
let WarehouseResolver = class WarehouseResolver {
    constructor(_geoLocationWarehousesService, _warehousesService, _warehousesOrdersService, _warehousesUsersService, _warehousesCarriersService, _warehouseProductsService, _devicesService, _ordersService, _usersService) {
        this._geoLocationWarehousesService = _geoLocationWarehousesService;
        this._warehousesService = _warehousesService;
        this._warehousesOrdersService = _warehousesOrdersService;
        this._warehousesUsersService = _warehousesUsersService;
        this._warehousesCarriersService = _warehousesCarriersService;
        this._warehouseProductsService = _warehouseProductsService;
        this._devicesService = _devicesService;
        this._ordersService = _ordersService;
        this._usersService = _usersService;
    }
    hasExistingStores() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return (yield this._warehousesService.count({})) > 0;
        });
    }
    getStoreProducts(_, { storeId, fullProducts }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this._warehouseProductsService
                .get(storeId, fullProducts)
                .pipe(operators_1.first())
                .toPromise();
        });
    }
    getStoreAvailableProducts(_, { storeId }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this._warehouseProductsService
                .getAvailable(storeId)
                .pipe(operators_1.first())
                .toPromise();
        });
    }
    getAllActiveStores(_, { fullProducts }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this._warehousesService
                .getAllActive(fullProducts)
                .pipe(operators_1.first())
                .toPromise();
        });
    }
    countStoreCustomers(_, { storeId }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const storeOrders = yield this._warehousesOrdersService
                .get(storeId)
                .pipe(operators_1.first())
                .toPromise();
            const storeCustomerIds = storeOrders.map((order) => order.user._id.toString());
            return new Set(storeCustomerIds).size;
        });
    }
    getCountExistingCustomers() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const isDeletedFlag = { isDeleted: { $eq: false } };
            const users = yield this._ordersService.Model.find(isDeletedFlag)
                .distinct('user._id')
                .lean();
            const storesIds = yield this._ordersService.Model.find(isDeletedFlag)
                .distinct('warehouse')
                .lean();
            return {
                total: users.length,
                perStore: storesIds.map((storeId) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                    const usersIds = yield this._ordersService.Model.find(Object.assign(Object.assign({}, isDeletedFlag), { warehouse: storeId })).distinct('user._id');
                    return {
                        storeId,
                        customersCount: usersIds.length,
                    };
                })),
            };
        });
    }
    getCountExistingCustomersToday() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const isDeletedFlag = { isDeleted: { $eq: false } };
            const start = new Date();
            const end = new Date();
            start.setHours(0, 0, 0, 0);
            end.setHours(23, 59, 59, 999);
            const users = yield this._ordersService.Model.find(Object.assign(Object.assign({}, isDeletedFlag), { _createdAt: { $gte: start, $lt: end } }))
                .distinct('user._id')
                .lean()
                .exec();
            const storesIds = yield this._ordersService.Model.find(Object.assign(Object.assign({}, isDeletedFlag), { _createdAt: { $gte: start, $lt: end } }))
                .distinct('warehouse')
                .lean()
                .exec();
            return {
                total: users.length,
                perStore: storesIds.map((storeId) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                    const usersIds = yield this._ordersService.Model.find(Object.assign(Object.assign({}, isDeletedFlag), { 'user._id': { $in: users.map((u) => u._id) }, warehouse: storeId })).distinct('user._id');
                    return {
                        storeId,
                        customersCount: usersIds.length,
                    };
                })),
            };
        });
    }
    getNearbyStores(_, { geoLocation }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this._geoLocationWarehousesService
                .get(geoLocation)
                .pipe(operators_1.first())
                .toPromise();
        });
    }
    getWarehouse(_, { id }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this._warehousesService.get(id).pipe(operators_1.first()).toPromise();
        });
    }
    getAllStores() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this._warehousesService.find({ isDeleted: { $eq: false } });
        });
    }
    getWarehouses(_, { findInput, pagingOptions = {} }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (!pagingOptions || (pagingOptions && !pagingOptions['sort'])) {
                pagingOptions['sort'] = { field: '_createdAt', sortBy: 'desc' };
            }
            const merchants = yield this._warehousesService.getMerchants(findInput, pagingOptions);
            return merchants.map((m) => new Warehouse_1.default(m));
        });
    }
    getStoreCustomers(_, { storeId }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this._warehousesUsersService.getPromise(storeId);
        });
    }
    getCountOfMerchants() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this._warehousesService.Model.find({ isDeleted: { $eq: false } })
                .countDocuments()
                .exec();
        });
    }
    getMerchantsBuyName(_, { searchName, geoLocation, }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const count = yield this._warehousesService.Model.find({
                name: { $regex: searchName, $options: 'i' },
            })
                .countDocuments()
                .exec();
            let merchants = yield this._warehousesService.getMerchants({ name: { $regex: searchName, $options: 'i' } }, { skip: 0, limit: count });
            if (geoLocation) {
                merchants = merchants.sort((m1, m2) => utils_1.default.getDistance(new GeoLocation_1.default(m1.geoLocation), new GeoLocation_1.default(geoLocation)) -
                    utils_1.default.getDistance(new GeoLocation_1.default(m2.geoLocation), new GeoLocation_1.default(geoLocation)));
            }
            return merchants.map((m) => new Warehouse_1.default(m));
        });
    }
    warehouseLogin(_, { username, password }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this._warehousesService.login(username, password);
        });
    }
    updateStoreGeoLocation(_, { storeId, geoLocation, }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this._warehousesService.updateGeoLocation(storeId, geoLocation);
        });
    }
    registerWarehouse(_, { registerInput }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this._warehousesService.register(registerInput);
        });
    }
    removeWarehousesByIds(_, { ids }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this._warehousesService.removeMultipleByIds(ids);
        });
    }
    getDevices(_warehouse) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const warehouse = new Warehouse_1.default(_warehouse);
            return this._devicesService
                .getMultiple(warehouse.devicesIds)
                .pipe(operators_1.first())
                .toPromise();
        });
    }
    getOrders(_warehouse) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const warehouse = new Warehouse_1.default(_warehouse);
            return this._warehousesOrdersService
                .get(warehouse.id)
                .pipe(operators_1.first())
                .toPromise();
        });
    }
    getUsers(_warehouse) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const warehouse = new Warehouse_1.default(_warehouse);
            return this._warehousesUsersService
                .get(warehouse.id)
                .pipe(operators_1.first())
                .toPromise();
        });
    }
    getCarriers(_warehouse) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const warehouse = new Warehouse_1.default(_warehouse);
            return this._warehousesCarriersService
                .get(warehouse.id)
                .pipe(operators_1.first())
                .toPromise();
        });
    }
    updateWarehousePassword(_, { id, password, }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this._warehousesService.updatePassword(id, password);
        });
    }
};
tslib_1.__decorate([
    graphql_1.Query(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], WarehouseResolver.prototype, "hasExistingStores", null);
tslib_1.__decorate([
    graphql_1.Query(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], WarehouseResolver.prototype, "getStoreProducts", null);
tslib_1.__decorate([
    graphql_1.Query(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], WarehouseResolver.prototype, "getStoreAvailableProducts", null);
tslib_1.__decorate([
    graphql_1.Query(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], WarehouseResolver.prototype, "getAllActiveStores", null);
tslib_1.__decorate([
    graphql_1.Query(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], WarehouseResolver.prototype, "countStoreCustomers", null);
tslib_1.__decorate([
    graphql_1.Query(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], WarehouseResolver.prototype, "getCountExistingCustomers", null);
tslib_1.__decorate([
    graphql_1.Query(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], WarehouseResolver.prototype, "getCountExistingCustomersToday", null);
tslib_1.__decorate([
    graphql_1.Query('nearbyStores'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], WarehouseResolver.prototype, "getNearbyStores", null);
tslib_1.__decorate([
    graphql_1.Query('warehouse'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], WarehouseResolver.prototype, "getWarehouse", null);
tslib_1.__decorate([
    graphql_1.Query(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], WarehouseResolver.prototype, "getAllStores", null);
tslib_1.__decorate([
    graphql_1.Query('warehouses'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], WarehouseResolver.prototype, "getWarehouses", null);
tslib_1.__decorate([
    graphql_1.Query(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], WarehouseResolver.prototype, "getStoreCustomers", null);
tslib_1.__decorate([
    graphql_1.Query(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], WarehouseResolver.prototype, "getCountOfMerchants", null);
tslib_1.__decorate([
    graphql_1.Query(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], WarehouseResolver.prototype, "getMerchantsBuyName", null);
tslib_1.__decorate([
    graphql_1.Mutation(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], WarehouseResolver.prototype, "warehouseLogin", null);
tslib_1.__decorate([
    graphql_1.Mutation(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], WarehouseResolver.prototype, "updateStoreGeoLocation", null);
tslib_1.__decorate([
    graphql_1.Mutation(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], WarehouseResolver.prototype, "registerWarehouse", null);
tslib_1.__decorate([
    graphql_1.Mutation(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], WarehouseResolver.prototype, "removeWarehousesByIds", null);
tslib_1.__decorate([
    graphql_1.ResolveProperty('devices'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], WarehouseResolver.prototype, "getDevices", null);
tslib_1.__decorate([
    graphql_1.ResolveProperty('orders'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], WarehouseResolver.prototype, "getOrders", null);
tslib_1.__decorate([
    graphql_1.ResolveProperty('users'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], WarehouseResolver.prototype, "getUsers", null);
tslib_1.__decorate([
    graphql_1.ResolveProperty('carriers'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], WarehouseResolver.prototype, "getCarriers", null);
tslib_1.__decorate([
    graphql_1.Mutation(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], WarehouseResolver.prototype, "updateWarehousePassword", null);
WarehouseResolver = tslib_1.__decorate([
    graphql_1.Resolver('Warehouse'),
    tslib_1.__metadata("design:paramtypes", [geo_locations_1.GeoLocationsWarehousesService,
        warehouses_1.WarehousesService,
        warehouses_1.WarehousesOrdersService,
        warehouses_1.WarehousesUsersService,
        warehouses_1.WarehousesCarriersService,
        warehouses_1.WarehousesProductsService,
        devices_1.DevicesService,
        orders_1.OrdersService,
        users_1.UsersService])
], WarehouseResolver);
exports.WarehouseResolver = WarehouseResolver;
//# sourceMappingURL=warehouse.resolver.js.map