"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const inversify_1 = require("inversify");
const Carrier_1 = tslib_1.__importDefault(require("@modules/server.common/entities/Carrier"));
const rxjs_1 = require("rxjs");
const carriers_1 = require("../carriers");
const WarehousesService_1 = require("./WarehousesService");
const operators_1 = require("rxjs/operators");
const io_1 = require("@pyro/io");
const lodash_1 = tslib_1.__importDefault(require("lodash"));
const env_1 = require("../../env");
class NoWarehouseRestrictedCarriersError extends Error {
    constructor() {
        super("Warehouse doesn't have carriers restricted to himself");
    }
}
let WarehousesCarriersService = class WarehousesCarriersService {
    constructor(carriersService, warehousesService, authServiceFactory) {
        this.carriersService = carriersService;
        this.warehousesService = warehousesService;
        this.authServiceFactory = authServiceFactory;
        this.authService = this.authServiceFactory({
            role: 'carrier',
            Entity: Carrier_1.default,
            saltRounds: env_1.env.CARRIER_PASSWORD_BCRYPT_SALT_ROUNDS,
        });
    }
    get(warehouseId) {
        return this.warehousesService.get(warehouseId).pipe(operators_1.map((warehouse) => {
            if (!warehouse.hasRestrictedCarriers) {
                throw new NoWarehouseRestrictedCarriersError();
            }
            return warehouse.usedCarriersIds;
        }), operators_1.distinctUntilChanged((carrierIds1, carrierIds2) => {
            return lodash_1.default.isEqual(carrierIds1.sort(), carrierIds2.sort());
        }), operators_1.exhaustMap((carrierIds) => {
            return this.carriersService.getMultipleByIds(carrierIds);
        }), operators_1.switchMap((carriers) => carriers), operators_1.catchError((err) => {
            if (!(err instanceof NoWarehouseRestrictedCarriersError)) {
                throw err;
            }
            return rxjs_1.of(null);
        }));
    }
    updatePassword(id, password) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.carriersService.throwIfNotExists(id);
            yield this.authService._savePassword(id, password);
        });
    }
};
tslib_1.__decorate([
    io_1.observableListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", rxjs_1.Observable)
], WarehousesCarriersService.prototype, "get", null);
tslib_1.__decorate([
    io_1.asyncListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, String]),
    tslib_1.__metadata("design:returntype", Promise)
], WarehousesCarriersService.prototype, "updatePassword", null);
WarehousesCarriersService = tslib_1.__decorate([
    inversify_1.injectable(),
    io_1.routerName('warehouse-carriers'),
    tslib_1.__param(0, inversify_1.inject(new inversify_1.LazyServiceIdentifer(() => carriers_1.CarriersService))),
    tslib_1.__param(1, inversify_1.inject(new inversify_1.LazyServiceIdentifer(() => WarehousesService_1.WarehousesService))),
    tslib_1.__param(2, inversify_1.inject('Factory<AuthService>')),
    tslib_1.__metadata("design:paramtypes", [carriers_1.CarriersService,
        WarehousesService_1.WarehousesService, Function])
], WarehousesCarriersService);
exports.WarehousesCarriersService = WarehousesCarriersService;
//# sourceMappingURL=WarehousesCarriersService.js.map