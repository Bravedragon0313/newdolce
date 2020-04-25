"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const inversify_1 = require("inversify");
const Log_1 = require("../../helpers/Log");
const InviteRequest_1 = tslib_1.__importDefault(require("@modules/server.common/entities/InviteRequest"));
const db_server_1 = require("@pyro/db-server");
const InvitesService_1 = require("./InvitesService");
const Subscription_1 = require("rxjs/Subscription");
const lodash_1 = tslib_1.__importDefault(require("lodash"));
const Invite_1 = tslib_1.__importDefault(require("@modules/server.common/entities/Invite"));
const request_promise_1 = tslib_1.__importDefault(require("request-promise"));
const bluebird_1 = tslib_1.__importDefault(require("bluebird"));
const devices_1 = require("../devices");
const notifications_1 = require("@modules/server.common/notifications");
const io_1 = require("@pyro/io");
const env_1 = require("../../env");
const operators_1 = require("rxjs/operators");
const GeoLocation_1 = require("@modules/server.common/entities/GeoLocation");
const faker_1 = tslib_1.__importDefault(require("faker"));
let InvitesRequestsService = class InvitesRequestsService extends db_server_1.DBService {
    constructor(invitesService, devicesService) {
        super();
        this.invitesService = invitesService;
        this.devicesService = devicesService;
        this.DBObject = InviteRequest_1.default;
        this.log = Log_1.createEverLogger({
            name: 'invitesRequestsService',
        });
        this.pushSendingInvitesSubscription = Subscription_1.Subscription.EMPTY;
        this.pushSendingInvitesSubscription = this.invitesService.existence
            .pipe(operators_1.filter((existenceEvent) => existenceEvent.type === db_server_1.ExistenceEventType.Created), operators_1.map((existenceEvent) => existenceEvent.value))
            .subscribe((invite) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            const results = yield this.Model.aggregate()
                .sort({ channelId: 1, _createdAt: 1 })
                .group({
                _id: '$deviceId',
                createdAt: { $last: '$_createdAt' },
            })
                .exec();
            if (results.length > 0) {
                yield this.notifyAboutLaunch(invite, lodash_1.default.map(results, (result) => result._id));
            }
        }));
    }
    get(id) {
        return super.get(id).pipe(operators_1.map((inviteReq) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.throwIfNotExists(id);
            return inviteReq;
        })), operators_1.switchMap((inviteReq) => inviteReq));
    }
    create(inviteRequest) {
        const _super = Object.create(null, {
            create: { get: () => super.create }
        });
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return _super.create.call(this, inviteRequest);
        });
    }
    notifyAboutLaunch(invite, devicesIds) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const devices = yield (yield this.devicesService.getMultipleDevices(devicesIds))
                .pipe(operators_1.first())
                .toPromise();
            const devicesByLanguages = lodash_1.default.groupBy(devices, (device) => device.language);
            const languages = lodash_1.default.keys(devicesByLanguages);
            yield bluebird_1.default.map(languages, (language) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                const devicesByLanguage = devicesByLanguages[language];
                const request = {
                    audience: this._getLaunchAudience(devicesByLanguage),
                    device_types: 'all',
                    notification: this._getLaunchNotification(language, invite),
                };
                try {
                    const rp = request_promise_1.default;
                    yield rp({
                        method: 'POST',
                        uri: 'https://go.urbanairship.com/api/push',
                        body: request,
                        headers: {
                            Accept: 'application/vnd.urbanairship+json; version=3;',
                        },
                        auth: {
                            user: env_1.env.URBAN_AIRSHIP_KEY,
                            pass: env_1.env.URBAN_AIRSHIP_SECRET,
                        },
                        json: true,
                    });
                }
                catch (e) {
                    console.error(`.notifyAboutLaunch(...) error: ${e.message}`);
                    throw e;
                }
            }));
        });
    }
    getInvitesRequests(findInput, invited, pagingOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const sortObj = {};
            const findNotInvited = Object.assign(Object.assign({}, findInput), { isDeleted: { $eq: false }, isInvited: { $eq: false } });
            if (pagingOptions.sort) {
                sortObj[pagingOptions.sort.field] = pagingOptions.sort.sortBy;
            }
            const inviteRequests = yield this.Model.find(findNotInvited)
                .sort(sortObj)
                .skip(pagingOptions.skip)
                .limit(pagingOptions.limit)
                .lean()
                .exec();
            const allNotInvitedCount = yield this.Model.find(findNotInvited)
                .countDocuments()
                .exec();
            const skipInvited = pagingOptions.skip + inviteRequests.length - allNotInvitedCount;
            if (invited && skipInvited >= 0) {
                const invitedFromDB = yield this.Model.find(Object.assign(Object.assign({}, findInput), { isDeleted: { $eq: false }, isInvited: { $eq: true } }))
                    .sort({ invitedDate: 'desc' })
                    .skip(skipInvited)
                    .limit(pagingOptions.limit - inviteRequests.length)
                    .lean()
                    .exec();
                return [...inviteRequests, ...invitedFromDB];
            }
            return inviteRequests;
        });
    }
    throwIfNotExists(inviteRequestId) {
        const _super = Object.create(null, {
            get: { get: () => super.get }
        });
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const inviteRequest = yield _super.get.call(this, inviteRequestId)
                .pipe(operators_1.first())
                .toPromise();
            if (!inviteRequest || inviteRequest.isDeleted) {
                throw Error(`Invite request with id '${inviteRequestId}' does not exists!`);
            }
        });
    }
    generate1000InviteRequests(defaultLng, defaultLat) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const invitesRequestsToCreate = [];
            let inviteRequestsCount = 1;
            while (inviteRequestsCount <= 1000) {
                const houseNumber = `${inviteRequestsCount}`;
                const requestLocation = this._getInviteRequestGeoLocationCreateObj(houseNumber, defaultLng, defaultLat);
                invitesRequestsToCreate.push({
                    isInvited: false,
                    apartment: `${inviteRequestsCount}`,
                    geoLocation: requestLocation,
                });
                inviteRequestsCount += 1;
            }
            yield this.Model.insertMany(invitesRequestsToCreate);
        });
    }
    _getLaunchAudience(devices) {
        const audience = {
            or: [],
        };
        const ios_devices = lodash_1.default.filter(devices, (device) => device.type === 'ios');
        if (ios_devices.length > 0) {
            audience.or.push({
                ios_channel: ios_devices
                    .map((device) => device.channelId)
                    .filter((channelId) => channelId != null)
                    .map((channelId) => channelId),
            });
        }
        const android_devices = lodash_1.default.filter(devices, (device) => device.type === 'android');
        if (android_devices.length > 0) {
            audience.or.push({
                android_channel: android_devices
                    .map((device) => device.channelId)
                    .filter((channelId) => channelId != null)
                    .map((channelId) => channelId),
            });
        }
        return audience;
    }
    _getLaunchNotification(language, invite) {
        switch (language) {
            case 'en-US':
                return {
                    android: {
                        title: 'Ever just launched!',
                        alert: 'Click to see some available products.',
                        extra: {
                            event: notifications_1.launched,
                            invite: JSON.stringify(invite),
                        },
                    },
                    ios: {
                        alert: 'Ever just launched at your address. Have fun!',
                        extra: {
                            event: notifications_1.launched,
                            invite: JSON.stringify(invite),
                        },
                    },
                };
            case 'ru-RU':
                return {
                    android: {
                        title: 'Ever только что запустился!',
                        alert: 'Кликните чтобы увидить доступные продукты.',
                        extra: {
                            event: notifications_1.launched,
                            invite: JSON.stringify(invite),
                        },
                    },
                    ios: {
                        alert: 'Ever тольуо что запустился по Вашему адресу. Удачи!',
                        extra: {
                            event: notifications_1.launched,
                            invite: JSON.stringify(invite),
                        },
                    },
                };
            case 'bg-BG':
                return {
                    android: {
                        title: 'Ever стартира!',
                        alert: 'Кликнете, за да видите някои налични продукти.',
                        extra: {
                            event: notifications_1.launched,
                            invite: JSON.stringify(invite),
                        },
                    },
                    ios: {
                        alert: 'Ever стартира на вашия адрес. Забавлявай се!',
                        extra: {
                            event: notifications_1.launched,
                            invite: JSON.stringify(invite),
                        },
                    },
                };
            case 'he-IL':
            default:
                return {
                    android: {
                        title: 'הושקנו בכתובת שלך!',
                        alert: 'תלחץ כדי לצפות במוצרים!',
                        extra: {
                            event: notifications_1.launched,
                            invite: JSON.stringify(invite),
                        },
                    },
                    ios: {
                        alert: 'Ever הושק בכתובת שלך! תלחץ כדי לצפות במוצרים!',
                        extra: {
                            event: notifications_1.launched,
                            invite: JSON.stringify(invite),
                        },
                    },
                };
        }
    }
    _getInviteRequestGeoLocationCreateObj(houseNumber, defaultLng, defaultLat) {
        const GeoLocation = {
            countryId: faker_1.default.random.number(GeoLocation_1.Country.ZW),
            city: faker_1.default.address.city(),
            house: houseNumber,
            loc: {
                type: 'Point',
                coordinates: [defaultLng, defaultLat],
            },
            streetAddress: faker_1.default.address.streetAddress(),
        };
        return GeoLocation;
    }
};
tslib_1.__decorate([
    io_1.observableListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", void 0)
], InvitesRequestsService.prototype, "get", null);
tslib_1.__decorate([
    io_1.asyncListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], InvitesRequestsService.prototype, "create", null);
tslib_1.__decorate([
    io_1.asyncListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Invite_1.default, Array]),
    tslib_1.__metadata("design:returntype", Promise)
], InvitesRequestsService.prototype, "notifyAboutLaunch", null);
tslib_1.__decorate([
    io_1.asyncListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], InvitesRequestsService.prototype, "getInvitesRequests", null);
InvitesRequestsService = tslib_1.__decorate([
    inversify_1.injectable(),
    io_1.routerName('invite-request'),
    tslib_1.__param(0, inversify_1.inject(InvitesService_1.InvitesService)),
    tslib_1.__param(1, inversify_1.inject(devices_1.DevicesService)),
    tslib_1.__metadata("design:paramtypes", [InvitesService_1.InvitesService,
        devices_1.DevicesService])
], InvitesRequestsService);
exports.InvitesRequestsService = InvitesRequestsService;
//# sourceMappingURL=InvitesRequestsService.js.map