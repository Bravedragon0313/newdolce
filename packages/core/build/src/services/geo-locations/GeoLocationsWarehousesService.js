"use strict";
var GeoLocationsWarehousesService_1;
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const inversify_1 = require("inversify");
const lodash_1 = tslib_1.__importDefault(require("lodash"));
const utils_1 = tslib_1.__importDefault(require("@modules/server.common/utils"));
const Log_1 = require("../../helpers/Log");
const warehouses_1 = require("../warehouses");
const GeoLocation_1 = tslib_1.__importDefault(require("@modules/server.common/entities/GeoLocation"));
const Warehouse_1 = tslib_1.__importDefault(require("@modules/server.common/entities/Warehouse"));
const rxjs_1 = require("rxjs");
const io_1 = require("@pyro/io");
const db_server_1 = require("@pyro/db-server");
const of_1 = require("rxjs/observable/of");
const operators_1 = require("rxjs/operators");
let GeoLocationsWarehousesService = GeoLocationsWarehousesService_1 = class GeoLocationsWarehousesService {
    constructor(warehousesService) {
        this.warehousesService = warehousesService;
        this.log = Log_1.createEverLogger({
            name: 'geoLocationsWarehousesService',
        });
    }
    static isNearly(warehouse, geoLocation) {
        return (utils_1.default.getDistance(warehouse.geoLocation, geoLocation) <=
            GeoLocationsWarehousesService_1.TrackingDistance);
    }
    get(geoLocation, _options) {
        const options = {
            fullProducts: _options != null && _options.fullProducts != null,
            activeOnly: _options != null && _options.activeOnly != null
                ? _options.activeOnly
                : false,
        };
        return of_1.of(null).pipe(operators_1.concat(this.warehousesService.existence.pipe(operators_1.filter((existenceEvent) => {
            let warehouse;
            let oldWarehouse;
            switch (existenceEvent.type) {
                case db_server_1.ExistenceEventType.Created:
                    warehouse = existenceEvent.value;
                    if (warehouse == null) {
                        return false;
                    }
                    return (GeoLocationsWarehousesService_1.isNearly(warehouse, geoLocation) &&
                        (options.activeOnly
                            ? warehouse.isActive
                            : true));
                case db_server_1.ExistenceEventType.Updated:
                    warehouse = existenceEvent.value;
                    oldWarehouse = existenceEvent.lastValue;
                    if (warehouse == null || oldWarehouse == null) {
                        return false;
                    }
                    return (GeoLocationsWarehousesService_1.isNearly(warehouse, geoLocation) !==
                        GeoLocationsWarehousesService_1.isNearly(oldWarehouse, geoLocation) &&
                        (options.activeOnly
                            ? warehouse.isActive !==
                                oldWarehouse.isActive
                            : true));
                case db_server_1.ExistenceEventType.Removed:
                    oldWarehouse = existenceEvent.lastValue;
                    if (oldWarehouse == null) {
                        return false;
                    }
                    return (GeoLocationsWarehousesService_1.isNearly(oldWarehouse, geoLocation) &&
                        (options.activeOnly
                            ? oldWarehouse.isActive
                            : true));
            }
        }), operators_1.share())), operators_1.exhaustMap(() => this._get(geoLocation, GeoLocationsWarehousesService_1.TrackingDistance, options)), operators_1.share());
    }
    getMerchants(geoLocation, maxDistance, options) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const merchantsIds = options.merchantsIds;
            const merchants = (yield this.warehousesService.Model.find(lodash_1.default.assign({
                'geoLocation.loc': {
                    $near: {
                        $geometry: {
                            type: 'Point',
                            coordinates: geoLocation.loc.coordinates,
                        },
                        $maxDistance: maxDistance,
                    },
                },
            }, options.activeOnly ? { isActive: true } : {}, merchantsIds && merchantsIds.length > 0
                ? {
                    _id: { $in: merchantsIds },
                }
                : {}))
                .populate(options.fullProducts ? 'products.product' : '')
                .lean()
                .exec());
            return merchants;
        });
    }
    _get(geoLocation, maxDistance, options) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const warehouses = (yield this.warehousesService.Model.find(lodash_1.default.assign({
                'geoLocation.loc': {
                    $near: {
                        $geometry: {
                            type: 'Point',
                            coordinates: geoLocation.loc.coordinates,
                        },
                        $maxDistance: maxDistance,
                    },
                },
            }, options.activeOnly ? { isActive: true } : {}))
                .populate(options.fullProducts ? 'products.product' : '')
                .lean()
                .exec());
            return warehouses.map((warehouse) => new Warehouse_1.default(warehouse));
        });
    }
};
GeoLocationsWarehousesService.TrackingDistance = 50000;
tslib_1.__decorate([
    io_1.observableListener(),
    tslib_1.__param(0, io_1.serialization((g) => new GeoLocation_1.default(g))),
    tslib_1.__param(1, io_1.serialization((o) => lodash_1.default.omit(o, ['fullProducts', 'activeOnly']))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [GeoLocation_1.default, Object]),
    tslib_1.__metadata("design:returntype", rxjs_1.Observable)
], GeoLocationsWarehousesService.prototype, "get", null);
tslib_1.__decorate([
    io_1.asyncListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], GeoLocationsWarehousesService.prototype, "getMerchants", null);
GeoLocationsWarehousesService = GeoLocationsWarehousesService_1 = tslib_1.__decorate([
    inversify_1.injectable(),
    io_1.routerName('geo-location-warehouses'),
    tslib_1.__metadata("design:paramtypes", [warehouses_1.WarehousesService])
], GeoLocationsWarehousesService);
exports.GeoLocationsWarehousesService = GeoLocationsWarehousesService;
//# sourceMappingURL=GeoLocationsWarehousesService.js.map