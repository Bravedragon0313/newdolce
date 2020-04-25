"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const CarrierStatus_1 = tslib_1.__importDefault(require("@modules/server.common/enums/CarrierStatus"));
const Carrier_1 = tslib_1.__importDefault(require("@modules/server.common/entities/Carrier"));
const Log_1 = require("../../helpers/Log");
const db_server_1 = require("@pyro/db-server");
const inversify_1 = require("inversify");
const io_1 = require("@pyro/io");
const GeoLocation_1 = tslib_1.__importDefault(require("@modules/server.common/entities/GeoLocation"));
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const env_1 = require("../../env");
let CarriersService = class CarriersService extends db_server_1.DBService {
    constructor(authServiceFactory) {
        super();
        this.authServiceFactory = authServiceFactory;
        this.DBObject = Carrier_1.default;
        this.log = Log_1.createEverLogger({
            name: 'carriersService',
        });
        this.authService = this.authServiceFactory({
            role: 'carrier',
            Entity: Carrier_1.default,
            saltRounds: env_1.env.CARRIER_PASSWORD_BCRYPT_SALT_ROUNDS,
        });
    }
    get(id) {
        return super.get(id).pipe(operators_1.map((carrier) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.throwIfNotExists(id);
            return carrier;
        })), operators_1.switchMap((carrier) => {
            return carrier;
        }));
    }
    getAllActive() {
        return rxjs_1.concat(rxjs_1.of(null), this.existence).pipe(operators_1.exhaustMap(() => this._getAllActive()));
    }
    _getAllActive() {
        const _super = Object.create(null, {
            find: { get: () => super.find }
        });
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return _super.find.call(this, { isActive: true, isDeleted: { $eq: false } });
        });
    }
    getMultipleByIds(carrierIds) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const carriers = yield this.find({
                _id: { $in: carrierIds },
                isDeleted: { $eq: false },
            });
            const carriersIdsToReturn = carriers.map((c) => c.id);
            return this.getMultiple(carriersIdsToReturn);
        });
    }
    register(input) {
        const _super = Object.create(null, {
            create: { get: () => super.create }
        });
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const carrier = yield _super.create.call(this, Object.assign(Object.assign({}, input.carrier), (input.password
                ? {
                    hash: yield this.authService.getPasswordHash(input.password),
                }
                : {})));
            return carrier;
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
            if (!res) {
                return null;
            }
            else if (res.entity.isDeleted) {
                return null;
            }
            return {
                carrier: res.entity,
                token: res.token,
            };
        });
    }
    updateStatus(carrierId, status) {
        const _super = Object.create(null, {
            update: { get: () => super.update }
        });
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.throwIfNotExists(carrierId);
            return _super.update.call(this, carrierId, { status });
        });
    }
    updateActivity(carrierId, isActive) {
        const _super = Object.create(null, {
            update: { get: () => super.update }
        });
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.throwIfNotExists(carrierId);
            return _super.update.call(this, carrierId, { isActive });
        });
    }
    updateEmail(carrierId, email) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.throwIfNotExists(carrierId);
            return this.update(carrierId, { email });
        });
    }
    updateGeoLocation(carrierId, geoLocation) {
        const _super = Object.create(null, {
            update: { get: () => super.update }
        });
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.throwIfNotExists(carrierId);
            return _super.update.call(this, carrierId, { geoLocation });
        });
    }
    updateById(id, updateObject) {
        const _super = Object.create(null, {
            update: { get: () => super.update }
        });
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.throwIfNotExists(id);
            return _super.update.call(this, id, updateObject);
        });
    }
    increaseNumberOfDeliveries(carrierId, n) {
        const _super = Object.create(null, {
            update: { get: () => super.update }
        });
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.throwIfNotExists(carrierId);
            return _super.update.call(this, carrierId, {
                $inc: { numberOfDeliveries: n },
            });
        });
    }
    throwIfNotExists(carrierId) {
        const _super = Object.create(null, {
            get: { get: () => super.get }
        });
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const carrier = yield _super.get.call(this, carrierId).pipe(operators_1.first()).toPromise();
            if (!carrier || carrier.isDeleted) {
                throw Error(`Carrier with id '${carrierId}' does not exists!`);
            }
        });
    }
    getCarriers(findInput, pagingOptions) {
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
};
tslib_1.__decorate([
    io_1.observableListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], CarriersService.prototype, "get", null);
tslib_1.__decorate([
    io_1.observableListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", rxjs_1.Observable)
], CarriersService.prototype, "getAllActive", null);
tslib_1.__decorate([
    io_1.asyncListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CarriersService.prototype, "register", null);
tslib_1.__decorate([
    io_1.asyncListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, String]),
    tslib_1.__metadata("design:returntype", Promise)
], CarriersService.prototype, "login", null);
tslib_1.__decorate([
    io_1.asyncListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Number]),
    tslib_1.__metadata("design:returntype", Promise)
], CarriersService.prototype, "updateStatus", null);
tslib_1.__decorate([
    io_1.asyncListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Boolean]),
    tslib_1.__metadata("design:returntype", Promise)
], CarriersService.prototype, "updateActivity", null);
tslib_1.__decorate([
    io_1.asyncListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, String]),
    tslib_1.__metadata("design:returntype", Promise)
], CarriersService.prototype, "updateEmail", null);
tslib_1.__decorate([
    io_1.asyncListener(),
    tslib_1.__param(1, io_1.serialization((gl) => new GeoLocation_1.default(gl))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, GeoLocation_1.default]),
    tslib_1.__metadata("design:returntype", Promise)
], CarriersService.prototype, "updateGeoLocation", null);
tslib_1.__decorate([
    io_1.asyncListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CarriersService.prototype, "updateById", null);
CarriersService = tslib_1.__decorate([
    inversify_1.injectable(),
    io_1.routerName('carrier'),
    tslib_1.__param(0, inversify_1.inject('Factory<AuthService>')),
    tslib_1.__metadata("design:paramtypes", [Function])
], CarriersService);
exports.CarriersService = CarriersService;
exports.default = CarriersService;
//# sourceMappingURL=CarriersService.js.map