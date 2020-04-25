"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const inversify_1 = require("inversify");
const orders_1 = require("../orders");
const GeoLocation_1 = tslib_1.__importDefault(require("@modules/server.common/entities/GeoLocation"));
const lodash_1 = tslib_1.__importDefault(require("lodash"));
const Order_1 = tslib_1.__importDefault(require("@modules/server.common/entities/Order"));
const Log_1 = require("../../helpers/Log");
const GeoLocationsWarehousesService_1 = require("./GeoLocationsWarehousesService");
const bluebird_1 = tslib_1.__importDefault(require("bluebird"));
const warehouses_1 = require("../warehouses");
const io_1 = require("@pyro/io");
const db_server_1 = require("@pyro/db-server");
const operators_1 = require("rxjs/operators");
const of_1 = require("rxjs/observable/of");
const from_1 = require("rxjs/observable/from");
const OrderWarehouseStatus_1 = tslib_1.__importDefault(require("@modules/server.common/enums/OrderWarehouseStatus"));
const OrderCarrierStatus_1 = tslib_1.__importDefault(require("@modules/server.common/enums/OrderCarrierStatus"));
const bson_1 = require("bson");
let GeoLocationsOrdersService = class GeoLocationsOrdersService {
    constructor(ordersService, warehousesService, geoLocationsWarehousesService, warehousesProductsService, warehousesOrdersService) {
        this.ordersService = ordersService;
        this.warehousesService = warehousesService;
        this.geoLocationsWarehousesService = geoLocationsWarehousesService;
        this.warehousesProductsService = warehousesProductsService;
        this.warehousesOrdersService = warehousesOrdersService;
        this.log = Log_1.createEverLogger({
            name: 'geoLocationsOrdersService',
        });
    }
    get(geoLocation, options = {}) {
        return of_1.of(null).pipe(operators_1.concat(this.ordersService.existence.pipe(operators_1.exhaustMap((existenceEvent) => {
            switch (existenceEvent.type) {
                case db_server_1.ExistenceEventType.Created:
                case db_server_1.ExistenceEventType.Updated:
                    if (existenceEvent.value != null) {
                        return this.warehousesService
                            .get(existenceEvent.value.warehouseId)
                            .pipe(operators_1.first());
                    }
                    else {
                        return this.warehousesService
                            .get('wrong')
                            .pipe(operators_1.first());
                    }
                case db_server_1.ExistenceEventType.Removed:
                    if (existenceEvent.lastValue != null) {
                        return this.warehousesService
                            .get(existenceEvent.lastValue.warehouseId)
                            .pipe(operators_1.first());
                    }
                    else {
                        return this.warehousesService
                            .get('wrong')
                            .pipe(operators_1.first());
                    }
            }
        }), operators_1.filter((warehouse) => warehouse != null
            ? GeoLocationsWarehousesService_1.GeoLocationsWarehousesService.isNearly(warehouse, geoLocation)
            : true), operators_1.share())), operators_1.exhaustMap(() => from_1.from(this._get(geoLocation, options))));
    }
    getCountOfOrdersForWork(geoLocation, skippedOrderIds = [], searchObj) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const merchants = yield this.geoLocationsWarehousesService.getMerchants(geoLocation, GeoLocationsWarehousesService_1.GeoLocationsWarehousesService.TrackingDistance, { fullProducts: false, activeOnly: true });
            const merchantsIds = merchants.map((m) => m._id);
            let searchByRegex = [];
            if (searchObj && searchObj.byRegex.length > 0) {
                searchByRegex = searchObj.byRegex.map((s) => {
                    return { [s.key]: { $regex: s.value, $options: 'i' } };
                });
            }
            return this.ordersService.Model.find(lodash_1.default.assign({
                warehouse: { $in: merchantsIds },
                warehouseStatus: {
                    $eq: OrderWarehouseStatus_1.default.PackagingFinished,
                },
                carrierStatus: {
                    $lte: OrderCarrierStatus_1.default.CarrierSelectedOrder,
                },
                _id: { $nin: skippedOrderIds },
            }, ...searchByRegex))
                .countDocuments()
                .exec();
        });
    }
    getOrdersForWork(geoLocation, skippedOrderIds = [], options, searchObj) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const merchants = yield this.geoLocationsWarehousesService.getMerchants(geoLocation, GeoLocationsWarehousesService_1.GeoLocationsWarehousesService.TrackingDistance, { fullProducts: false, activeOnly: true });
            const merchantsIds = merchants.map((m) => m._id.toString());
            let searchByRegex = [];
            if (searchObj) {
                const byRegex = searchObj.byRegex;
                if (byRegex && byRegex.length > 0) {
                    searchByRegex = byRegex.map((s) => {
                        return { [s.key]: { $regex: s.value, $options: 'i' } };
                    });
                }
                const isCancelled = searchObj.isCancelled;
                if (isCancelled != null) {
                    searchByRegex.push({ isCancelled });
                }
            }
            const orders = yield this.ordersService.Model.aggregate([
                {
                    $match: lodash_1.default.assign({
                        warehouse: { $in: merchantsIds },
                        warehouseStatus: {
                            $eq: OrderWarehouseStatus_1.default.PackagingFinished,
                        },
                        carrierStatus: {
                            $lte: OrderCarrierStatus_1.default.CarrierSelectedOrder,
                        },
                        _id: {
                            $nin: skippedOrderIds.map((id) => new bson_1.ObjectId(id)),
                        },
                    }, ...searchByRegex),
                },
                {
                    $sort: {
                        _createdAt: options.sort &&
                            options.sort.toLowerCase().includes('desc')
                            ? -1
                            : 1,
                    },
                },
            ])
                .allowDiskUse(true)
                .skip(options.skip || 0)
                .limit(options.limit || 1)
                .exec();
            return orders.filter((o) => o !== null).map((o) => new Order_1.default(o));
        });
    }
    _get(geoLocation, options = {}) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const warehouses = yield this.geoLocationsWarehousesService
                .get(geoLocation, { activeOnly: true })
                .pipe(operators_1.first())
                .toPromise();
            this.log.info({
                geoLocation,
                warehouses,
            }, 'warehouses by location');
            const orders = lodash_1.default.flatten(yield bluebird_1.default.map(warehouses, (warehouse) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                const warehouseOrders = yield this.warehousesOrdersService
                    .get(warehouse.id, {
                    populateCarrier: !!options.populateCarrier,
                })
                    .pipe(operators_1.first())
                    .toPromise();
                if (options.populateWarehouse) {
                    lodash_1.default.each(warehouseOrders, (order) => (order.warehouse = warehouse));
                }
                this.log.info({
                    geoLocation,
                    warehouseOrders,
                    warehouse,
                }, 'orders by warehouse');
                return warehouseOrders;
            })));
            this.log.info({
                geoLocation,
                orders,
            }, 'orders by warehouses');
            return orders;
        });
    }
};
tslib_1.__decorate([
    io_1.observableListener(),
    tslib_1.__param(0, io_1.serialization((geoLocationParam) => new GeoLocation_1.default(geoLocationParam))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [GeoLocation_1.default, Object]),
    tslib_1.__metadata("design:returntype", void 0)
], GeoLocationsOrdersService.prototype, "get", null);
tslib_1.__decorate([
    io_1.asyncListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Array, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], GeoLocationsOrdersService.prototype, "getCountOfOrdersForWork", null);
tslib_1.__decorate([
    io_1.asyncListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Array, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], GeoLocationsOrdersService.prototype, "getOrdersForWork", null);
GeoLocationsOrdersService = tslib_1.__decorate([
    inversify_1.injectable(),
    io_1.routerName('geo-location-orders'),
    tslib_1.__param(0, inversify_1.inject(orders_1.OrdersService)),
    tslib_1.__param(1, inversify_1.inject(warehouses_1.WarehousesService)),
    tslib_1.__param(2, inversify_1.inject(GeoLocationsWarehousesService_1.GeoLocationsWarehousesService)),
    tslib_1.__param(3, inversify_1.inject(warehouses_1.WarehousesProductsService)),
    tslib_1.__param(4, inversify_1.inject(warehouses_1.WarehousesOrdersService)),
    tslib_1.__metadata("design:paramtypes", [orders_1.OrdersService,
        warehouses_1.WarehousesService,
        GeoLocationsWarehousesService_1.GeoLocationsWarehousesService,
        warehouses_1.WarehousesProductsService,
        warehouses_1.WarehousesOrdersService])
], GeoLocationsOrdersService);
exports.GeoLocationsOrdersService = GeoLocationsOrdersService;
//# sourceMappingURL=GeoLocationsOrdersService.js.map