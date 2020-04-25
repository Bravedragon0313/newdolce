"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const warehouses_1 = require("../../services/warehouses");
const Order_1 = tslib_1.__importDefault(require("@modules/server.common/entities/Order"));
const operators_1 = require("rxjs/operators");
const orders_1 = require("../../services/orders");
const bson_1 = require("bson");
let WarehouseOrdersResolver = class WarehouseOrdersResolver {
    constructor(_warehousesOrdersService, _ordersService) {
        this._warehousesOrdersService = _warehousesOrdersService;
        this._ordersService = _ordersService;
    }
    getStoreOrders(_, { storeId }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this._warehousesOrdersService
                .get(storeId)
                .pipe(operators_1.first())
                .toPromise();
        });
    }
    getDashboardOrdersChartOrders(_, { storeId }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const resOrders = this._ordersService.getStoreOrdersChartTotalOrders(storeId);
            return resOrders;
        });
    }
    getNextOrderNumber(_, { storeId }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this._warehousesOrdersService.getNextOrderNumber(storeId);
        });
    }
    getMerchantsOrders() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this._ordersService.Model.aggregate([
                { $match: { warehouse: { $ne: null } } },
                {
                    $group: {
                        _id: '$warehouse',
                        ordersCount: { $sum: 1 },
                    },
                },
            ]);
        });
    }
    getStoreOrdersTableData(_, { storeId, pagingOptions = {}, status }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (!pagingOptions || (pagingOptions && !pagingOptions['sort'])) {
                pagingOptions['sort'] = { field: '_createdAt', sortBy: 'asc' };
            }
            const orders = yield this._warehousesOrdersService.getStoreOrders(storeId, pagingOptions, status);
            let page = 1;
            if (pagingOptions) {
                page = Math.ceil(pagingOptions['skip'] / pagingOptions['limit'] + 1);
            }
            return { orders: orders.map((o) => new Order_1.default(o)), page };
        });
    }
    getCountOfStoreOrders(_, { storeId, status }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const findObj = warehouses_1.getStoreOrdersFingObj(storeId, status);
            return this._ordersService.Model.find(findObj).countDocuments().exec();
        });
    }
    removeUserOrders(_, { storeId, userId }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const res = yield this._ordersService.Model.update({
                'user._id': new bson_1.ObjectId(userId),
                warehouse: storeId,
                isDeleted: false,
            }, { isDeleted: true }, { multi: true }).exec();
            return {
                number: res.n,
                modified: res.nModified,
            };
        });
    }
    getOrdersInDelivery(_, { storeId }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const order = yield this._ordersService.getOrdersInDelivery(storeId);
            return order || [];
        });
    }
    createOrder(_, { createInput }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this._warehousesOrdersService.create(createInput);
        });
    }
};
tslib_1.__decorate([
    graphql_1.Query(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], WarehouseOrdersResolver.prototype, "getStoreOrders", null);
tslib_1.__decorate([
    graphql_1.Query(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], WarehouseOrdersResolver.prototype, "getDashboardOrdersChartOrders", null);
tslib_1.__decorate([
    graphql_1.Query(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], WarehouseOrdersResolver.prototype, "getNextOrderNumber", null);
tslib_1.__decorate([
    graphql_1.Query(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], WarehouseOrdersResolver.prototype, "getMerchantsOrders", null);
tslib_1.__decorate([
    graphql_1.Query(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], WarehouseOrdersResolver.prototype, "getStoreOrdersTableData", null);
tslib_1.__decorate([
    graphql_1.Query(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], WarehouseOrdersResolver.prototype, "getCountOfStoreOrders", null);
tslib_1.__decorate([
    graphql_1.Query(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], WarehouseOrdersResolver.prototype, "removeUserOrders", null);
tslib_1.__decorate([
    graphql_1.Query(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], WarehouseOrdersResolver.prototype, "getOrdersInDelivery", null);
tslib_1.__decorate([
    graphql_1.Mutation(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], WarehouseOrdersResolver.prototype, "createOrder", null);
WarehouseOrdersResolver = tslib_1.__decorate([
    graphql_1.Resolver('WarehouseOrders'),
    tslib_1.__metadata("design:paramtypes", [warehouses_1.WarehousesOrdersService,
        orders_1.OrdersService])
], WarehouseOrdersResolver);
exports.WarehouseOrdersResolver = WarehouseOrdersResolver;
//# sourceMappingURL=warehouses-orders.resolver.js.map