"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const graphql_subscriptions_1 = require("graphql-subscriptions");
const devices_1 = require("../../services/devices");
const operators_1 = require("rxjs/operators");
const pubSub = new graphql_subscriptions_1.PubSub();
let DeviceResolver = class DeviceResolver {
    constructor(_devicesService) {
        this._devicesService = _devicesService;
    }
    getDevice(_, { id }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this._devicesService.get(id).pipe(operators_1.first()).toPromise();
        });
    }
    getDevices(_, { findInput }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this._devicesService.find(Object.assign(Object.assign({}, findInput), { isDeleted: { $eq: false } }));
        });
    }
    updateDeviceLanguage(_, { deviceId, language, }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this._devicesService.updateLanguage(deviceId, language);
        });
    }
    createDevice(_, { createInfo }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this._devicesService.create(createInfo);
        });
    }
    updateDevice(_, { id, updateInput }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this._devicesService.throwIfNotExists(id);
            try {
                const device = yield this._devicesService.update(id, updateInput);
                pubSub.publish('deviceCreated', { deviceCreated: device });
                return device;
            }
            catch (error) {
                console.log(error);
                return null;
            }
        });
    }
    removeDevice(_, { id }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this._devicesService.throwIfNotExists(id);
            return this._devicesService.remove(id);
        });
    }
    removeDeviceByIds(_, { ids }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const devices = yield this._devicesService.find({
                _id: { $in: ids },
                isDeleted: { $eq: false },
            });
            const devicesIds = devices.map((d) => d.id);
            return this._devicesService.removeMultipleByIds(devicesIds);
        });
    }
    deviceCreated() {
        return {
            subscribe: () => pubSub.asyncIterator('deviceCreated'),
        };
    }
};
tslib_1.__decorate([
    graphql_1.Query('device'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], DeviceResolver.prototype, "getDevice", null);
tslib_1.__decorate([
    graphql_1.Query('devices'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], DeviceResolver.prototype, "getDevices", null);
tslib_1.__decorate([
    graphql_1.Mutation(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], DeviceResolver.prototype, "updateDeviceLanguage", null);
tslib_1.__decorate([
    graphql_1.Mutation(),
    common_1.UseGuards(passport_1.AuthGuard('jwt')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], DeviceResolver.prototype, "createDevice", null);
tslib_1.__decorate([
    graphql_1.Mutation(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], DeviceResolver.prototype, "updateDevice", null);
tslib_1.__decorate([
    graphql_1.Mutation(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], DeviceResolver.prototype, "removeDevice", null);
tslib_1.__decorate([
    graphql_1.Mutation(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], DeviceResolver.prototype, "removeDeviceByIds", null);
tslib_1.__decorate([
    graphql_1.Subscription(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], DeviceResolver.prototype, "deviceCreated", null);
DeviceResolver = tslib_1.__decorate([
    graphql_1.Resolver('Device'),
    tslib_1.__metadata("design:paramtypes", [devices_1.DevicesService])
], DeviceResolver);
exports.DeviceResolver = DeviceResolver;
//# sourceMappingURL=device.resolver.js.map