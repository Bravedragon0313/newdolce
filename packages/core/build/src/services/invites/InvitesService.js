"use strict";
var InvitesService_1;
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const inversify_1 = require("inversify");
const utils_1 = tslib_1.__importDefault(require("@modules/server.common/utils"));
const Log_1 = require("../../helpers/Log");
const Invite_1 = tslib_1.__importDefault(require("@modules/server.common/entities/Invite"));
const db_server_1 = require("@pyro/db-server");
const rxjs_1 = require("rxjs");
const io_1 = require("@pyro/io");
const of_1 = require("rxjs/observable/of");
const operators_1 = require("rxjs/operators");
const from_1 = require("rxjs/observable/from");
const _ = require("lodash");
const env_1 = require("../../env");
const faker_1 = tslib_1.__importDefault(require("faker"));
const GeoLocation_1 = require("@modules/server.common/entities/GeoLocation");
let InvitesService = InvitesService_1 = class InvitesService extends db_server_1.DBService {
    constructor() {
        super();
        this.log = Log_1.createEverLogger({
            name: 'invitesService',
        });
        this.DBObject = Invite_1.default;
        this._invitedStreetLocations = of_1.of(null).pipe(operators_1.concat(this.existence), operators_1.exhaustMap(() => this._getInvitedStreetLocations()));
    }
    get(id) {
        return super.get(id).pipe(operators_1.map((invite) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.throwIfNotExists(id);
            return invite;
        })), operators_1.switchMap((invite) => {
            return invite;
        }));
    }
    getInvitedStreetLocations() {
        return this._invitedStreetLocations;
    }
    create(invite) {
        if (!invite.code) {
            invite.code = utils_1.default.getRandomInt(1001, 9999) + '';
        }
        return super.create(invite);
    }
    getInvitesSettings() {
        return new Promise((resolve, reject) => {
            resolve({ isEnabled: env_1.env.SETTING_INVITES_ENABLED });
        });
    }
    getByCode(info) {
        const findObject = {
            code: info.inviteCode,
        };
        if (info.inviteCode !== env_1.env.FAKE_INVITE_CODE.toString()) {
            findObject['geoLocation.loc'] = {
                $near: {
                    $geometry: {
                        type: 'Point',
                        coordinates: info.location.coordinates,
                    },
                    $maxDistance: InvitesService_1.InviteWorkingDistance,
                },
            };
        }
        return from_1.from(this.findOne(Object.assign(Object.assign({}, findObject), { isDeleted: { $eq: false } }))).pipe(operators_1.concat(this.existence.pipe(operators_1.filter((event) => event.type !== db_server_1.ExistenceEventType.Removed), operators_1.map((event) => event.value), operators_1.filter((invite) => {
            return (utils_1.default.getLocDistance(invite.geoLocation.loc, info.location) <= InvitesService_1.InviteWorkingDistance &&
                invite.code === info.inviteCode);
        }))));
    }
    getByLocation(info) {
        const findObject = {
            'geoLocation.city': info.city,
            'geoLocation.streetAddress': info.streetAddress,
            'geoLocation.house': info.house,
            'geoLocation.countryId': info.countryId,
            apartment: info.apartment,
        };
        if (info.postcode != null) {
            findObject['geoLocation.postcode'] = info.postcode;
        }
        return from_1.from(this.findOne(Object.assign(Object.assign({}, findObject), { isDeleted: { $eq: false } }))).pipe(operators_1.concat(this.existence.pipe(operators_1.filter((event) => event.type !== db_server_1.ExistenceEventType.Removed), operators_1.map((event) => event.value), operators_1.filter((invite) => {
            return (invite.geoLocation.city === info.city &&
                invite.geoLocation.streetAddress ===
                    info.streetAddress &&
                invite.geoLocation.house === info.house &&
                invite.geoLocation.countryId === info.countryId &&
                invite.apartment === info.apartment);
        }))));
    }
    getInvites(findInput, pagingOptions) {
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
    throwIfNotExists(inviteId) {
        const _super = Object.create(null, {
            get: { get: () => super.get }
        });
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const invite = yield _super.get.call(this, inviteId).pipe(operators_1.first()).toPromise();
            if (!invite || invite.isDeleted) {
                throw Error(`Invite with id '${inviteId}' does not exists!`);
            }
        });
    }
    generate1000InvitesConnectedToInviteRequests(defaultLng, defaultLat) {
        const invitesToCreate = [];
        const invitesRequestsToCreate = [];
        let inviteCount = 1;
        while (inviteCount <= 1000) {
            const apartment = `${inviteCount}`;
            const houseNumber = `${inviteCount}`;
            const geoLocation = this._getInviteGeoLocationCreateObj(houseNumber, defaultLng, defaultLat);
            invitesRequestsToCreate.push({
                apartment,
                geoLocation,
                isInvited: true,
                invitedDate: new Date(),
            });
            invitesToCreate.push({
                code: `${999 + inviteCount}`,
                apartment,
                geoLocation,
            });
            inviteCount += 1;
        }
        return {
            invitesRequestsToCreate,
            invitesToCreate,
        };
    }
    _getInviteGeoLocationCreateObj(houseNumber, defaultLng, defaultLat) {
        return {
            countryId: faker_1.default.random.number(GeoLocation_1.Country.ZW),
            city: faker_1.default.address.city(),
            house: houseNumber,
            loc: {
                type: 'Point',
                coordinates: [defaultLng, defaultLat],
            },
            streetAddress: faker_1.default.address.streetAddress(),
        };
    }
    _getInvitedStreetLocations() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const results = yield this.Model.aggregate()
                .group({
                _id: {
                    streetAddress: '$geoLocation.streetAddress',
                    city: '$geoLocation.city',
                    country: '$geoLocation.countryId',
                },
            })
                .exec();
            return _.map(results, (result) => result._id);
        });
    }
};
InvitesService.InviteWorkingDistance = 50000;
tslib_1.__decorate([
    io_1.observableListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", void 0)
], InvitesService.prototype, "get", null);
tslib_1.__decorate([
    io_1.observableListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], InvitesService.prototype, "getInvitedStreetLocations", null);
tslib_1.__decorate([
    io_1.asyncListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], InvitesService.prototype, "create", null);
tslib_1.__decorate([
    io_1.asyncListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], InvitesService.prototype, "getInvitesSettings", null);
tslib_1.__decorate([
    io_1.observableListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", rxjs_1.Observable)
], InvitesService.prototype, "getByCode", null);
tslib_1.__decorate([
    io_1.observableListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", rxjs_1.Observable)
], InvitesService.prototype, "getByLocation", null);
tslib_1.__decorate([
    io_1.asyncListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], InvitesService.prototype, "getInvites", null);
InvitesService = InvitesService_1 = tslib_1.__decorate([
    inversify_1.injectable(),
    io_1.routerName('invite'),
    tslib_1.__metadata("design:paramtypes", [])
], InvitesService);
exports.InvitesService = InvitesService;
//# sourceMappingURL=InvitesService.js.map