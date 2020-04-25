"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const inversify_1 = require("inversify");
const Device_1 = tslib_1.__importDefault(require("@modules/server.common/entities/Device"));
const db_server_1 = require("@pyro/db-server");
const Log_1 = require("../../helpers/Log");
const rxjs_1 = require("rxjs");
const io_1 = require("@pyro/io");
const operators_1 = require("rxjs/operators");
let DevicesService = class DevicesService extends db_server_1.DBService {
    constructor() {
        super(...arguments);
        this.DBObject = Device_1.default;
        this.log = Log_1.createEverLogger({
            name: 'devicesService',
        });
    }
    get(id) {
        return super.get(id).pipe(operators_1.map((device) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.throwIfNotExists(id);
            return device;
        })), operators_1.switchMap((device) => device));
    }
    getMultipleDevices(ids) {
        const _super = Object.create(null, {
            getMultiple: { get: () => super.getMultiple }
        });
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const devices = yield this.find({
                _id: { $in: ids },
                isDeleted: { $eq: false },
            });
            const devicesIds = devices.map((device) => device.id);
            return _super.getMultiple.call(this, devicesIds);
        });
    }
    create(device) {
        const _super = Object.create(null, {
            create: { get: () => super.create }
        });
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return _super.create.call(this, device);
        });
    }
    updateLanguage(deviceId, language) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.throwIfNotExists(deviceId);
            return this.update(deviceId, {
                language,
            });
        });
    }
    throwIfNotExists(deviceId) {
        const _super = Object.create(null, {
            get: { get: () => super.get }
        });
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const device = yield _super.get.call(this, deviceId).pipe(operators_1.first()).toPromise();
            if (!device || device.isDeleted) {
                throw Error(`Device with id '${deviceId}' does not exists!`);
            }
        });
    }
};
tslib_1.__decorate([
    io_1.observableListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", rxjs_1.Observable)
], DevicesService.prototype, "get", null);
tslib_1.__decorate([
    io_1.asyncListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], DevicesService.prototype, "create", null);
tslib_1.__decorate([
    io_1.asyncListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, String]),
    tslib_1.__metadata("design:returntype", Promise)
], DevicesService.prototype, "updateLanguage", null);
DevicesService = tslib_1.__decorate([
    inversify_1.injectable(),
    io_1.routerName('device')
], DevicesService);
exports.DevicesService = DevicesService;
//# sourceMappingURL=DevicesService.js.map