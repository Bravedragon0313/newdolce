"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const carriers_1 = require("../../services/carriers");
const Carrier_1 = tslib_1.__importDefault(require("@modules/server.common/entities/Carrier"));
const operators_1 = require("rxjs/operators");
const devices_1 = require("../../services/devices");
const CarrierStatus_1 = tslib_1.__importDefault(require("@modules/server.common/enums/CarrierStatus"));
let CarrierResolver = class CarrierResolver {
    constructor(_carriersService, _devicesService) {
        this._carriersService = _carriersService;
        this._devicesService = _devicesService;
    }
    getActiveCarriers() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this._carriersService.getAllActive().pipe(operators_1.first()).toPromise();
        });
    }
    getCarriers(_, { carriersFindInput, pagingOptions = {} }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (!pagingOptions || (pagingOptions && !pagingOptions['sort'])) {
                pagingOptions['sort'] = { field: '_createdAt', sortBy: 'desc' };
            }
            const carriers = yield this._carriersService.getCarriers(carriersFindInput, pagingOptions);
            return carriers.map((c) => new Carrier_1.default(c));
        });
    }
    getCarrierByUsername(_, { username }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this._carriersService.findOne({
                username,
                isDeleted: { $eq: false },
            });
        });
    }
    getCarrier(_, { id }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this._carriersService.get(id).pipe(operators_1.first()).toPromise();
        });
    }
    getCountOfCarriers(_, { carriersFindInput }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this._carriersService.Model.find(Object.assign(Object.assign({}, carriersFindInput), { isDeleted: { $eq: false } }))
                .countDocuments()
                .exec();
        });
    }
    updateCarrierEmail(_, { carrierId, email }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this._carriersService.updateEmail(carrierId, email);
        });
    }
    registerCarrier(_, { registerInput }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this._carriersService.register(registerInput);
        });
    }
    updateCarrierStatus(_, { id, status }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this._carriersService.updateStatus(id, CarrierStatus_1.default[status]);
        });
    }
    updateCarrier(_, { id, updateInput }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this._carriersService.throwIfNotExists(id);
            return this._carriersService.update(id, updateInput);
        });
    }
    removeCarrier(_, { id }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this._carriersService.throwIfNotExists(id);
            return this._carriersService.remove(id);
        });
    }
    removeCarriersByIds(_, { ids }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const carriers = yield this._carriersService.find({
                _id: { $in: ids },
                isDeleted: { $eq: false },
            });
            const carriersIds = carriers.map((d) => d.id);
            return this._carriersService.removeMultipleByIds(carriersIds);
        });
    }
    getDevices(_carrier) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const carrier = new Carrier_1.default(_carrier);
            return this._devicesService
                .getMultiple(carrier.devicesIds)
                .pipe(operators_1.map((devices) => devices.filter((d) => !d.isDeleted)), operators_1.first())
                .toPromise();
        });
    }
    carrierLogin(_, { username, password }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this._carriersService.login(username, password);
        });
    }
    updateCarrierPassword(_, { id, password, }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this._carriersService.updatePassword(id, password);
        });
    }
};
tslib_1.__decorate([
    graphql_1.Query('getActiveCarriers'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], CarrierResolver.prototype, "getActiveCarriers", null);
tslib_1.__decorate([
    graphql_1.Query('getCarriers'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CarrierResolver.prototype, "getCarriers", null);
tslib_1.__decorate([
    graphql_1.Query('getCarrierByUsername'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CarrierResolver.prototype, "getCarrierByUsername", null);
tslib_1.__decorate([
    graphql_1.Query('getCarrier'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CarrierResolver.prototype, "getCarrier", null);
tslib_1.__decorate([
    graphql_1.Query('getCountOfCarriers'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CarrierResolver.prototype, "getCountOfCarriers", null);
tslib_1.__decorate([
    graphql_1.Mutation('updateCarrierEmail'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CarrierResolver.prototype, "updateCarrierEmail", null);
tslib_1.__decorate([
    graphql_1.Mutation('registerCarrier'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CarrierResolver.prototype, "registerCarrier", null);
tslib_1.__decorate([
    graphql_1.Mutation('updateCarrierStatus'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CarrierResolver.prototype, "updateCarrierStatus", null);
tslib_1.__decorate([
    graphql_1.Mutation('updateCarrier'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CarrierResolver.prototype, "updateCarrier", null);
tslib_1.__decorate([
    graphql_1.Mutation('removeCarrier'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CarrierResolver.prototype, "removeCarrier", null);
tslib_1.__decorate([
    graphql_1.Mutation('removeCarriersByIds'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CarrierResolver.prototype, "removeCarriersByIds", null);
tslib_1.__decorate([
    graphql_1.ResolveProperty('devices'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CarrierResolver.prototype, "getDevices", null);
tslib_1.__decorate([
    graphql_1.Mutation('carrierLogin'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CarrierResolver.prototype, "carrierLogin", null);
tslib_1.__decorate([
    graphql_1.Mutation('updateCarrierPassword'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CarrierResolver.prototype, "updateCarrierPassword", null);
CarrierResolver = tslib_1.__decorate([
    graphql_1.Resolver('Carrier'),
    tslib_1.__metadata("design:paramtypes", [carriers_1.CarriersService,
        devices_1.DevicesService])
], CarrierResolver);
exports.CarrierResolver = CarrierResolver;
//# sourceMappingURL=carrier.resolver.js.map