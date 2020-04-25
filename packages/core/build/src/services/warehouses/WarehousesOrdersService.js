"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const inversify_1 = require("inversify");
const moment_1 = tslib_1.__importDefault(require("moment"));
const bluebird_1 = tslib_1.__importDefault(require("bluebird"));
const Log_1 = require("../../helpers/Log");
const Order_1 = tslib_1.__importDefault(require("@modules/server.common/entities/Order"));
const WarehousesService_1 = require("./WarehousesService");
const products_1 = require("../products");
const orders_1 = require("../orders");
const WarehousesProductsService_1 = require("./WarehousesProductsService");
const io_1 = require("@pyro/io");
const users_1 = require("../users");
const operators_1 = require("rxjs/operators");
const db_server_1 = require("@pyro/db-server");
const rxjs_1 = require("rxjs");
const _ = require("lodash");
const OrderWarehouseStatus_1 = tslib_1.__importDefault(require("@modules/server.common/enums/OrderWarehouseStatus"));
const OrderCarrierStatus_1 = tslib_1.__importDefault(require("@modules/server.common/enums/OrderCarrierStatus"));
const DeliveryType_1 = tslib_1.__importDefault(require("@modules/server.common/enums/DeliveryType"));
let WarehousesOrdersService = class WarehousesOrdersService {
    constructor(warehousesService, productsService, warehousesProductsService, ordersService, usersService) {
        this.warehousesService = warehousesService;
        this.productsService = productsService;
        this.warehousesProductsService = warehousesProductsService;
        this.ordersService = ordersService;
        this.usersService = usersService;
        this.log = Log_1.createEverLogger({
            name: 'warehousesOrdersService',
        });
    }
    getExistence(warehouseId) {
        return this.ordersService.existence.pipe(operators_1.filter((existenceEvent) => {
            switch (existenceEvent.type) {
                case db_server_1.ExistenceEventType.Created:
                    return (existenceEvent.value != null &&
                        existenceEvent.value.warehouseId === warehouseId);
                case db_server_1.ExistenceEventType.Updated:
                    return ((existenceEvent.value != null &&
                        existenceEvent.value.warehouseId ===
                            warehouseId) ||
                        (existenceEvent.lastValue != null &&
                            existenceEvent.lastValue.warehouseId ===
                                warehouseId));
                case db_server_1.ExistenceEventType.Removed:
                    return (existenceEvent.lastValue != null &&
                        existenceEvent.lastValue.warehouseId === warehouseId);
            }
        }), operators_1.share());
    }
    get(warehouseId, options = {}) {
        return rxjs_1.concat(rxjs_1.of(null), this.getExistence(warehouseId)).pipe(operators_1.map((res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.warehousesService.throwIfNotExists(warehouseId);
            return res;
        })), operators_1.switchMap((res) => res), operators_1.exhaustMap(() => this._get(warehouseId, {
            populateWarehouse: !!options.populateWarehouse,
            populateCarrier: !!options.populateCarrier,
            onlyAvailableToCarrier: false,
        })));
    }
    getNextOrderNumber(warehouseId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.warehousesService.throwIfNotExists(warehouseId);
            const orderDocument = (yield this.ordersService.Model.findOne({
                warehouse: warehouseId,
                isDeleted: { $eq: false },
                _createdAt: {
                    $gte: moment_1.default().startOf('day').toDate(),
                },
            })
                .select('orderNumber')
                .sort({ orderNumber: -1 })
                .exec());
            if (orderDocument == null) {
                return 1;
            }
            else {
                return orderDocument.orderNumber + 1;
            }
        });
    }
    create({ warehouseId, userId, products, orderType, options, }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (!options) {
                options = {};
            }
            options = {
                autoConfirm: !!options.autoConfirm,
            };
            const user = yield this.usersService
                .get(userId)
                .pipe(operators_1.first())
                .toPromise();
            const warehouse = (yield this.warehousesService
                .get(warehouseId, true)
                .pipe(operators_1.first())
                .toPromise());
            const warehouseProducts = _.keyBy(warehouse.products, 'productId');
            if (user == null) {
                throw new Error(`There is no user with the id ${userId}`);
            }
            this.log.info({
                user,
                warehouseId,
                products,
            }, 'Order create call');
            const orderProducts = yield _.map(products, (args) => {
                const wProduct = warehouseProducts[args.productId];
                if (!wProduct) {
                    throw new Error(`WarehouseOrdersService got call to create(userId, orderProducts) - But there is no product with the id ${args.productId}!`);
                }
                return {
                    count: args.count,
                    price: wProduct.price,
                    initialPrice: wProduct.initialPrice,
                    deliveryTimeMin: wProduct.deliveryTimeMin,
                    deliveryTimeMax: wProduct.deliveryTimeMax,
                    product: wProduct.product,
                    isManufacturing: wProduct.isManufacturing,
                    isCarrierRequired: wProduct.isCarrierRequired,
                    isDeliveryRequired: wProduct.isDeliveryRequired,
                    isTakeaway: wProduct.isTakeaway,
                };
            });
            const order = yield this.ordersService.create(Object.assign({ user, products: orderProducts, warehouse: warehouseId, orderNumber: yield this.getNextOrderNumber(warehouseId), orderType }, (options.autoConfirm ? { isConfirmed: true } : {})));
            yield bluebird_1.default.map(order.products, (orderProduct) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                const productId = orderProduct.product.id;
                this.log.info({
                    warehouseId,
                    productId,
                    count: orderProduct.count,
                }, 'Order create remove products call');
                yield this.warehousesProductsService.decreaseCount(warehouseId, productId, orderProduct.count);
                yield this.warehousesProductsService.increaseSoldCount(warehouseId, productId, orderProduct.count);
                this.log.info({
                    warehouseId,
                    productId,
                    count: orderProduct.count,
                }, 'Order create remove products call succeed');
            }));
            return order;
        });
    }
    createByProductType(userId, warehouseId, productId, orderType) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.usersService.throwIfNotExists(userId);
            yield this.warehousesService.throwIfNotExists(warehouseId);
            yield this.productsService.throwIfNotExists(productId);
            return this.create({
                userId,
                warehouseId,
                orderType,
                products: [
                    {
                        productId,
                        count: 1,
                    },
                ],
            });
        });
    }
    cancel(orderId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            let order = yield this.ordersService
                .get(orderId)
                .pipe(operators_1.first())
                .toPromise();
            if (order == null) {
                throw new Error(`There is no order with the id ${orderId} to cancel`);
            }
            if (order.isCancelled) {
                this.log.warn(`Order with id ${orderId} is already cancelled!`);
                return;
            }
            order = yield this.ordersService.cancel(orderId);
            if (order.isConfirmed) {
            }
            this.log.info({
                warehouseId: order.warehouseId,
                products: order.products,
            }, 'Order cancel add products back call');
            yield this.warehousesProductsService.add(order.warehouseId, _.map(order.products, (orderProduct) => {
                return {
                    product: orderProduct.product.id,
                    count: orderProduct.count,
                    price: orderProduct.price,
                    initialPrice: orderProduct.initialPrice,
                    deliveryTimeMin: orderProduct.deliveryTimeMin,
                    deliveryTimeMax: orderProduct.deliveryTimeMax,
                };
            }));
            yield bluebird_1.default.map(order.products, (orderProduct) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                const productId = orderProduct.product.id;
                yield this.warehousesProductsService.decreaseSoldCount(order.warehouseId, productId, orderProduct.count);
            }));
            this.log.info({
                warehouseId: order.warehouseId,
                products: order.products,
            }, 'Order cancel add products back call succeed');
            return order;
        });
    }
    getStoreOrders(storeId, pagingOptions, status) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const sortObj = {};
            const findObj = getStoreOrdersFingObj(storeId, status);
            if (pagingOptions.sort) {
                sortObj[pagingOptions.sort.field] = pagingOptions.sort.sortBy;
            }
            return this.ordersService.Model.find(findObj)
                .sort(sortObj)
                .skip(pagingOptions.skip)
                .limit(pagingOptions.limit)
                .lean()
                .exec();
        });
    }
    _get(warehouseId, options = {}) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.warehousesService.throwIfNotExists(warehouseId);
            const findObj = { warehouse: warehouseId };
            if (options.onlyAvailableToCarrier) {
                _.extend(findObj, {
                    carrierStatus: 0,
                    $or: [
                        {
                            carrier: { $exists: false },
                        },
                        {
                            carrier: null,
                        },
                    ],
                    warehouseStatus: { $gte: 2, $lt: 200 },
                }, orders_1.OrdersService.FindObjects.isCompleted);
            }
            let toPopulate = '';
            if (options.populateCarrier) {
                toPopulate += 'carrier ';
            }
            if (options.populateWarehouse) {
                toPopulate += 'warehouse ';
            }
            const orders = _.map((yield this.ordersService.Model.find(Object.assign(Object.assign({}, findObj), { isDeleted: { $eq: false } }))
                .populate(toPopulate)
                .sort({
                _createdAt: -1,
            })
                .lean()
                .exec()), (order) => new Order_1.default(order));
            this.log.info({
                warehouseId,
                orders,
            }, 'orders by warehouse (in getByWarehouse)');
            return orders;
        });
    }
};
tslib_1.__decorate([
    io_1.observableListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", rxjs_1.Observable)
], WarehousesOrdersService.prototype, "get", null);
tslib_1.__decorate([
    io_1.asyncListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], WarehousesOrdersService.prototype, "create", null);
tslib_1.__decorate([
    io_1.asyncListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, String, String, Number]),
    tslib_1.__metadata("design:returntype", Promise)
], WarehousesOrdersService.prototype, "createByProductType", null);
tslib_1.__decorate([
    io_1.asyncListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], WarehousesOrdersService.prototype, "cancel", null);
WarehousesOrdersService = tslib_1.__decorate([
    inversify_1.injectable(),
    io_1.routerName('warehouse-orders'),
    tslib_1.__param(0, inversify_1.inject(new inversify_1.LazyServiceIdentifer(() => WarehousesService_1.WarehousesService))),
    tslib_1.__param(1, inversify_1.inject(new inversify_1.LazyServiceIdentifer(() => products_1.ProductsService))),
    tslib_1.__param(2, inversify_1.inject(new inversify_1.LazyServiceIdentifer(() => WarehousesProductsService_1.WarehousesProductsService))),
    tslib_1.__param(3, inversify_1.inject(new inversify_1.LazyServiceIdentifer(() => orders_1.OrdersService))),
    tslib_1.__param(4, inversify_1.inject(new inversify_1.LazyServiceIdentifer(() => users_1.UsersService))),
    tslib_1.__metadata("design:paramtypes", [WarehousesService_1.WarehousesService,
        products_1.ProductsService,
        WarehousesProductsService_1.WarehousesProductsService,
        orders_1.OrdersService,
        users_1.UsersService])
], WarehousesOrdersService);
exports.WarehousesOrdersService = WarehousesOrdersService;
function getStoreOrdersFingObj(storeId, status) {
    const findObj = {
        isDeleted: { $eq: false },
        warehouse: storeId,
    };
    switch (status) {
        case 'confirmed':
            findObj['$and'] = [
                {
                    warehouseStatus: {
                        $gt: OrderWarehouseStatus_1.default.NoStatus,
                    },
                },
                {
                    warehouseStatus: {
                        $lt: OrderWarehouseStatus_1.default.GivenToCustomer,
                    },
                },
                {
                    carrierStatus: {
                        $lte: OrderCarrierStatus_1.default.CarrierSelectedOrder,
                    },
                },
            ];
            findObj['isCancelled'] = false;
            break;
        case 'in_delivery':
            findObj['$and'] = [
                {
                    carrierStatus: {
                        $gte: OrderCarrierStatus_1.default.CarrierPickedUpOrder,
                    },
                },
                {
                    warehouseStatus: {
                        $lt: OrderWarehouseStatus_1.default.AllocationFailed,
                    },
                },
                {
                    carrierStatus: {
                        $lt: OrderCarrierStatus_1.default.DeliveryCompleted,
                    },
                },
            ];
            findObj['isCancelled'] = false;
            break;
        case 'not_confirmed':
            findObj['warehouseStatus'] = OrderWarehouseStatus_1.default.NoStatus;
            findObj['isCancelled'] = false;
            break;
        case 'not_paid':
            findObj['isPaid'] = false;
            break;
        case 'cancelled':
            findObj['isCancelled'] = true;
            break;
        case 'relevant':
            findObj['$and'] = [
                {
                    warehouseStatus: {
                        $gte: OrderWarehouseStatus_1.default.NoStatus,
                    },
                },
                {
                    warehouseStatus: {
                        $lt: OrderWarehouseStatus_1.default.GivenToCustomer,
                    },
                },
                {
                    carrierStatus: {
                        $lte: OrderCarrierStatus_1.default.CarrierSelectedOrder,
                    },
                },
            ];
            findObj['isCancelled'] = false;
            break;
        default:
            break;
    }
    return findObj;
}
exports.getStoreOrdersFingObj = getStoreOrdersFingObj;
//# sourceMappingURL=WarehousesOrdersService.js.map