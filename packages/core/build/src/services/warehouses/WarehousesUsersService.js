"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const inversify_1 = require("inversify");
const Log_1 = require("../../helpers/Log");
const io_1 = require("@pyro/io");
const rxjs_1 = require("rxjs");
const User_1 = tslib_1.__importDefault(require("@modules/server.common/entities/User"));
const orders_1 = require("../orders");
const WarehousesOrdersService_1 = require("./WarehousesOrdersService");
const operators_1 = require("rxjs/operators");
const WarehousesService_1 = require("./WarehousesService");
let WarehousesUsersService = class WarehousesUsersService {
    constructor(warehousesOrdersService, ordersService, _warehousesService) {
        this.warehousesOrdersService = warehousesOrdersService;
        this.ordersService = ordersService;
        this._warehousesService = _warehousesService;
        this.log = Log_1.createEverLogger({
            name: 'warehousesUsersService',
        });
    }
    get(warehouseId) {
        return rxjs_1.concat(null, this.warehousesOrdersService.getExistence(warehouseId)).pipe(operators_1.exhaustMap(() => {
            return this.ordersService.Model.distinct('user._id', {
                warehouse: warehouseId,
                isDeleted: { $eq: false },
            })
                .lean()
                .exec();
        }), operators_1.map((users) => {
            return users.map((u) => new User_1.default(u));
        }));
    }
    getPromise(warehouseId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this._warehousesService.throwIfNotExists(warehouseId);
            return this.get(warehouseId).pipe(operators_1.first()).toPromise();
        });
    }
};
tslib_1.__decorate([
    io_1.observableListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", rxjs_1.Observable)
], WarehousesUsersService.prototype, "get", null);
tslib_1.__decorate([
    io_1.asyncListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], WarehousesUsersService.prototype, "getPromise", null);
WarehousesUsersService = tslib_1.__decorate([
    inversify_1.injectable(),
    io_1.routerName('warehouse-users'),
    tslib_1.__param(0, inversify_1.inject(new inversify_1.LazyServiceIdentifer(() => WarehousesOrdersService_1.WarehousesOrdersService))),
    tslib_1.__param(1, inversify_1.inject(new inversify_1.LazyServiceIdentifer(() => orders_1.OrdersService))),
    tslib_1.__param(2, inversify_1.inject(new inversify_1.LazyServiceIdentifer(() => WarehousesService_1.WarehousesService))),
    tslib_1.__metadata("design:paramtypes", [WarehousesOrdersService_1.WarehousesOrdersService,
        orders_1.OrdersService,
        WarehousesService_1.WarehousesService])
], WarehousesUsersService);
exports.WarehousesUsersService = WarehousesUsersService;
//# sourceMappingURL=WarehousesUsersService.js.map