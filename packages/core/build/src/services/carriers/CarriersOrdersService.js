"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const lodash_1 = tslib_1.__importDefault(require("lodash"));
const Log_1 = require("../../helpers/Log");
const products_1 = require("../products");
const orders_1 = require("../orders");
const CarriersService_1 = tslib_1.__importDefault(require("./CarriersService"));
const OrderCarrierStatus_1 = tslib_1.__importDefault(require("@modules/server.common/enums/OrderCarrierStatus"));
const inversify_1 = require("inversify");
const warehouses_1 = require("../warehouses");
const io_1 = require("@pyro/io");
const Order_1 = tslib_1.__importDefault(require("@modules/server.common/entities/Order"));
const geo_locations_1 = require("../geo-locations");
const utils_1 = require("@modules/server.common/utils");
const db_server_1 = require("@pyro/db-server");
const operators_1 = require("rxjs/operators");
const rxjs_1 = require("rxjs");
const OrderWarehouseStatus_1 = tslib_1.__importDefault(require("@modules/server.common/enums/OrderWarehouseStatus"));
let CarriersOrdersService = class CarriersOrdersService {
    constructor(carriersService, productsService, ordersService, geoLocationsOrdersService, warehousesOrdersService) {
        this.carriersService = carriersService;
        this.productsService = productsService;
        this.ordersService = ordersService;
        this.geoLocationsOrdersService = geoLocationsOrdersService;
        this.warehousesOrdersService = warehousesOrdersService;
        this.log = Log_1.createEverLogger({
            name: 'carriersOrdersService',
        });
    }
    selectedForDelivery(carrierId, orderIds) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            let carrier = yield this.carriersService
                .get(carrierId)
                .pipe(operators_1.first())
                .toPromise();
            if (carrier != null) {
                if (orderIds.length > 0) {
                    yield this.ordersService.updateMultipleByIds(orderIds, {
                        carrier: carrierId,
                        carrierStatus: OrderCarrierStatus_1.default.CarrierSelectedOrder,
                    });
                }
                carrier = yield this.carriersService
                    .get(carrierId)
                    .pipe(operators_1.first())
                    .toPromise();
                return carrier;
            }
            else {
                throw new Error('Carrier with such id is not found!');
            }
        });
    }
    getCount(carrierId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.carriersService.throwIfNotExists(carrierId);
            return this.ordersService.count(lodash_1.default.extend({ carrier: carrierId }, orders_1.OrdersService.FindObjects.isCompleted));
        });
    }
    skipOrders(carrierId, ordersIds) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.carriersService.throwIfNotExists(carrierId);
            return this.carriersService.update(carrierId, {
                $push: {
                    skippedOrderIds: {
                        $each: ordersIds,
                    },
                },
            });
        });
    }
    updateStatus(carrierId, status) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.carriersService.throwIfNotExists(carrierId);
            const findObj = lodash_1.default.extend({ carrier: carrierId }, orders_1.OrdersService.FindObjects.isNotCompleted);
            const updateObj = {
                carrierStatus: status,
            };
            if (status === OrderCarrierStatus_1.default.DeliveryCompleted) {
                updateObj.isPaid = true;
                updateObj.deliveryTime = Date.now();
            }
            if (status === OrderCarrierStatus_1.default.CarrierStartDelivery ||
                status === OrderCarrierStatus_1.default.CarrierPickedUpOrder) {
                updateObj.startDeliveryTime = Date.now();
            }
            const finishedProcessingStatuses = [
                OrderCarrierStatus_1.default.ClientRefuseTakingOrder,
                OrderCarrierStatus_1.default.DeliveryCompleted,
                OrderCarrierStatus_1.default.IssuesDuringDelivery,
            ];
            if (finishedProcessingStatuses.includes(status)) {
                updateObj.finishedProcessingTime = Date.now();
            }
            if ((yield this.carriersService.getCurrent(carrierId)) != null) {
                try {
                    const orders = yield this.ordersService.updateMultiple(findObj, updateObj);
                    if (status === OrderCarrierStatus_1.default.DeliveryCompleted) {
                        return yield this.carriersService.increaseNumberOfDeliveries(carrierId, orders.length);
                    }
                    else {
                        return (yield this.carriersService.getCurrent(carrierId));
                    }
                }
                catch (err) {
                    this.log.error(err);
                    throw err;
                }
            }
            else {
                throw new Error('Carrier with such id is not found!');
            }
        });
    }
    cancelDelivery(carrierId, orderIds) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.carriersService.throwIfNotExists(carrierId);
            const _orders = yield this.ordersService.find({
                _id: { $in: orderIds },
                isDeleted: { $eq: false },
            });
            const ordersIdsFiltered = _orders.map((d) => d.id);
            const orders = yield this.ordersService.updateMultipleByIds(ordersIdsFiltered, {
                $unset: { carrier: 1 },
                carrierStatus: OrderCarrierStatus_1.default.NoCarrier,
            });
            yield this.skipOrders(carrierId, lodash_1.default.map(orders, (order) => order.id));
            return this.carriersService.updateStatus(carrierId, 0);
        });
    }
    getAvailable(carrierId, options = {
        populateWarehouse: false,
    }) {
        return this.carriersService.get(carrierId).pipe(operators_1.map((carrier) => (carrier != null ? carrier.geoLocation : null)), operators_1.distinctUntilChanged((geoLocation1, geoLocation2) => {
            if (geoLocation1 == null || geoLocation2 == null) {
                return true;
            }
            else {
                return utils_1.getDistance(geoLocation1, geoLocation2) <= 0.001;
            }
        }), operators_1.switchMap((geoLocation) => geoLocation != null
            ? this.geoLocationsOrdersService.get(geoLocation, {
                populateWarehouse: options.populateWarehouse,
            })
            : rxjs_1.throwError(new Error(`No such a carrier with the id ${carrierId} => can't getAvailable`))));
    }
    get(carrierId, options = {
        populateWarehouse: false,
        completion: 'not-completed',
    }) {
        return rxjs_1.of(null).pipe(operators_1.map((res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.carriersService.throwIfNotExists(carrierId);
            return res;
        })), operators_1.switchMap((res) => res), operators_1.concat(this.ordersService.existence.pipe(operators_1.filter((existenceEvent) => {
            switch (existenceEvent.type) {
                case db_server_1.ExistenceEventType.Created:
                    return existenceEvent.value != null
                        ? existenceEvent.value.carrierId ===
                            carrierId
                        : false;
                case db_server_1.ExistenceEventType.Updated:
                    return ((existenceEvent.value != null
                        ? existenceEvent.value.carrierId ===
                            carrierId
                        : false) ||
                        (existenceEvent.lastValue != null
                            ? existenceEvent.lastValue.carrierId ===
                                carrierId
                            : false));
                case db_server_1.ExistenceEventType.Removed:
                    return existenceEvent.lastValue != null
                        ? existenceEvent.lastValue.carrierId ===
                            carrierId
                        : false;
            }
        }), operators_1.share())), operators_1.exhaustMap(() => this._get(carrierId, options)));
    }
    getCarrierOrders(carrierId, options = {
        populateWarehouse: false,
        completion: 'not-completed',
    }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const ordersRaw = (yield this.ordersService.Model.find(lodash_1.default.extend({ carrier: carrierId, isDeleted: { $eq: false } }, (() => {
                switch (options.completion) {
                    case 'completed':
                        return orders_1.OrdersService.FindObjects.isCompleted;
                    case 'not-completed':
                        return orders_1.OrdersService.FindObjects.isNotCompleted;
                    case 'all':
                        return {};
                }
            })()))
                .populate(options.populateWarehouse ? 'warehouse' : '')
                .lean()
                .exec());
            return ordersRaw.map((orderRaw) => {
                orderRaw['id'] = orderRaw._id;
                orderRaw.products = orderRaw.products.map((p) => {
                    p['id'] = p._id;
                    p.product['id'] = p.product._id;
                    return p;
                });
                return orderRaw;
            });
        });
    }
    getCarrierCurrentOrder(carrierId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.carriersService.throwIfNotExists(carrierId);
            return this.ordersService.Model.findOne(lodash_1.default.assign(this.getOrdersForWorkFilter(carrierId), {
                carrier: carrierId,
            }))
                .lean()
                .exec();
        });
    }
    getCountOfCarrierOrdersHistory(carrierId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.carriersService.throwIfNotExists(carrierId);
            return this.ordersService.Model.find({ carrier: carrierId })
                .countDocuments()
                .exec();
        });
    }
    getCarrierOrdersHistory(carrierId, options) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.carriersService.throwIfNotExists(carrierId);
            const dbOrders = yield this.ordersService.Model.find({
                carrier: carrierId,
            })
                .sort({
                _createdAt: options.sort && options.sort.toLowerCase().includes('desc')
                    ? 'desc'
                    : 'asc',
            })
                .skip(options.skip || 0)
                .limit(options.limit || 1)
                .lean()
                .exec();
            return dbOrders.map((o) => new Order_1.default(o));
        });
    }
    _get(carrierId, options) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.carriersService.throwIfNotExists(carrierId);
            try {
                const ordersRaw = (yield this.ordersService.Model.find(lodash_1.default.extend({ carrier: carrierId, isDeleted: { $eq: false } }, (() => {
                    switch (options.completion) {
                        case 'completed':
                            return orders_1.OrdersService.FindObjects.isCompleted;
                        case 'not-completed':
                            return orders_1.OrdersService.FindObjects.isNotCompleted;
                        case 'all':
                            return {};
                    }
                })()))
                    .populate(options.populateWarehouse ? 'warehouse' : '')
                    .lean()
                    .exec());
                return lodash_1.default.map(ordersRaw, (orderRaw) => new Order_1.default(orderRaw));
            }
            catch (err) {
                this.log.error(err);
                throw err;
            }
        });
    }
    getOrdersForWorkFilter(carrierId) {
        return {
            carrierStatus: {
                $nin: [
                    OrderCarrierStatus_1.default.IssuesDuringDelivery,
                    OrderCarrierStatus_1.default.ClientRefuseTakingOrder,
                    OrderCarrierStatus_1.default.DeliveryCompleted,
                ],
            },
            warehouseStatus: {
                $in: [
                    OrderWarehouseStatus_1.default.PackagingFinished,
                    OrderWarehouseStatus_1.default.GivenToCarrier,
                ],
            },
            $or: [{ carrier: null }, { carrier: carrierId }],
        };
    }
};
CarriersOrdersService.CarrierTrackingDistance = 50000;
tslib_1.__decorate([
    io_1.asyncListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Array]),
    tslib_1.__metadata("design:returntype", Promise)
], CarriersOrdersService.prototype, "selectedForDelivery", null);
tslib_1.__decorate([
    io_1.asyncListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], CarriersOrdersService.prototype, "getCount", null);
tslib_1.__decorate([
    io_1.asyncListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Array]),
    tslib_1.__metadata("design:returntype", Promise)
], CarriersOrdersService.prototype, "skipOrders", null);
tslib_1.__decorate([
    io_1.asyncListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Number]),
    tslib_1.__metadata("design:returntype", Promise)
], CarriersOrdersService.prototype, "updateStatus", null);
tslib_1.__decorate([
    io_1.asyncListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Array]),
    tslib_1.__metadata("design:returntype", Promise)
], CarriersOrdersService.prototype, "cancelDelivery", null);
tslib_1.__decorate([
    io_1.observableListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", rxjs_1.Observable)
], CarriersOrdersService.prototype, "getAvailable", null);
tslib_1.__decorate([
    io_1.observableListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", rxjs_1.Observable)
], CarriersOrdersService.prototype, "get", null);
tslib_1.__decorate([
    io_1.asyncListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CarriersOrdersService.prototype, "getCarrierOrders", null);
tslib_1.__decorate([
    io_1.asyncListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], CarriersOrdersService.prototype, "getCarrierCurrentOrder", null);
tslib_1.__decorate([
    io_1.asyncListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], CarriersOrdersService.prototype, "getCountOfCarrierOrdersHistory", null);
tslib_1.__decorate([
    io_1.asyncListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CarriersOrdersService.prototype, "getCarrierOrdersHistory", null);
CarriersOrdersService = tslib_1.__decorate([
    inversify_1.injectable(),
    io_1.routerName('carrier-orders'),
    tslib_1.__param(0, inversify_1.inject(CarriersService_1.default)),
    tslib_1.__param(1, inversify_1.inject(products_1.ProductsService)),
    tslib_1.__param(2, inversify_1.inject(orders_1.OrdersService)),
    tslib_1.__param(3, inversify_1.inject(geo_locations_1.GeoLocationsOrdersService)),
    tslib_1.__param(4, inversify_1.inject(warehouses_1.WarehousesOrdersService)),
    tslib_1.__metadata("design:paramtypes", [CarriersService_1.default,
        products_1.ProductsService,
        orders_1.OrdersService,
        geo_locations_1.GeoLocationsOrdersService,
        warehouses_1.WarehousesOrdersService])
], CarriersOrdersService);
exports.CarriersOrdersService = CarriersOrdersService;
//# sourceMappingURL=CarriersOrdersService.js.map