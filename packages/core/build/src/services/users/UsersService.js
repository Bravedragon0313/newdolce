"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const inversify_1 = require("inversify");
const env_1 = require("../../env");
const User_1 = tslib_1.__importDefault(require("@modules/server.common/entities/User"));
const Log_1 = require("../../helpers/Log");
const invites_1 = require("../invites");
const db_server_1 = require("@pyro/db-server");
const io_1 = require("@pyro/io");
const rxjs_1 = require("rxjs");
const utils_1 = require("../../utils");
const GeoLocation_1 = tslib_1.__importStar(require("@modules/server.common/entities/GeoLocation"));
const devices_1 = require("../devices");
const uuid_1 = require("uuid");
const operators_1 = require("rxjs/operators");
const of_1 = require("rxjs/observable/of");
const throw_1 = require("rxjs/observable/throw");
const _ = require("lodash");
const faker_1 = tslib_1.__importDefault(require("faker"));
const warehouses_1 = require("../../services/warehouses");
const Stripe = require("stripe");
let UsersService = class UsersService extends db_server_1.DBService {
    constructor(invitesService, devicesService, _storesService) {
        super();
        this.invitesService = invitesService;
        this.devicesService = devicesService;
        this._storesService = _storesService;
        this.DBObject = User_1.default;
        this.stripe = new Stripe(env_1.env.STRIPE_SECRET_KEY);
        this.log = Log_1.createEverLogger({
            name: 'usersService',
        });
        this.watchedFiles = _.zipObject(['aboutUs', 'privacy', 'termsOfUse'], _.map(['about_us', 'privacy', 'terms_of_use'], (folder) => _.zipObject(['en-US', 'he-IL', 'ru-RU', 'bg-BG'], _.map(['en-US', 'he-IL', 'ru-RU', 'bg-BG'], (language) => utils_1.observeFile(`${__dirname}/../../../res/templates/${folder}/${language}.hbs`).pipe(operators_1.tap({ error: (err) => this.log.error(err) }), operators_1.publishReplay(1), operators_1.refCount())))));
    }
    isUserEmailExists(email) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return (yield this.count({ email })) > 0;
        });
    }
    getSocial(socialId) {
        const _super = Object.create(null, {
            findOne: { get: () => super.findOne }
        });
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return _super.findOne.call(this, {
                socialIds: { $in: [socialId] },
                isDeleted: { $eq: false },
            });
        });
    }
    initUser(userInitializeObject) {
        const _super = Object.create(null, {
            create: { get: () => super.create }
        });
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return _super.create.call(this, userInitializeObject);
        });
    }
    getUsers(findInput, pagingOptions) {
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
    updateUser(id, userCreateObject) {
        const _super = Object.create(null, {
            update: { get: () => super.update }
        });
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.throwIfNotExists(id);
            return _super.update.call(this, id, userCreateObject);
        });
    }
    get(customerId) {
        return super.get(customerId).pipe(operators_1.map((user) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.throwIfNotExists(customerId);
            return user;
        })), operators_1.switchMap((user) => user));
    }
    getCards(userId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.throwIfNotExists(userId);
            const user = yield this.get(userId).pipe(operators_1.first()).toPromise();
            if (user != null) {
                if (user.stripeCustomerId != null) {
                    return (yield this.stripe.customers.listSources(user.stripeCustomerId, {
                        object: 'card',
                    })).data;
                }
                else {
                    return [];
                }
            }
            else {
                throw new Error(`User with the id ${userId} doesn't exist`);
            }
        });
    }
    addPaymentMethod(userId, tokenId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.throwIfNotExists(userId);
            const callId = uuid_1.v1();
            this.log.info({ callId, userId, tokenId }, '.addPaymentMethod(userId, tokenId) called');
            let card;
            try {
                let user = yield this.get(userId).pipe(operators_1.first()).toPromise();
                if (user != null) {
                    if (user.stripeCustomerId == null) {
                        const customer = yield this.stripe.customers.create({
                            email: user.email,
                            description: 'User id: ' + user.id,
                            metadata: {
                                userId: user.id,
                            },
                        });
                        user = yield this.update(userId, {
                            stripeCustomerId: customer.id,
                        });
                    }
                    card = (yield this.stripe.customers.createSource(user.stripeCustomerId, {
                        source: tokenId,
                    }));
                }
                else {
                    throw new Error(`User with the id ${userId} doesn't exist`);
                }
            }
            catch (err) {
                this.log.error({ callId, userId, tokenId, err }, '.addPaymentMethod(userId, tokenId) thrown error!');
                throw err;
            }
            this.log.info({ callId, userId, tokenId, card }, '.addPaymentMethod(userId, tokenId) added payment method');
            return card.id;
        });
    }
    updateEmail(userId, email) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.throwIfNotExists(userId);
            return this.update(userId, { email });
        });
    }
    updateGeoLocation(userId, geoLocation) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.throwIfNotExists(userId);
            return this.update(userId, { geoLocation });
        });
    }
    getAboutUs(userId, deviceId) {
        return this.devicesService.get(deviceId).pipe(operators_1.exhaustMap((device) => {
            if (device === null) {
                return throw_1._throw(new Error(`User with the id ${userId} doesn't exist`));
            }
            else {
                return of_1.of(device);
            }
        }), operators_1.distinctUntilChanged((oldDevice, newDevice) => oldDevice.language !== newDevice.language), operators_1.switchMap((device) => this.watchedFiles.aboutUs[device.language]));
    }
    getTermsOfUse(userId, deviceId) {
        return this.devicesService.get(deviceId).pipe(operators_1.exhaustMap((device) => {
            if (device === null) {
                return throw_1._throw(new Error(`Device with the id ${deviceId} doesn't exist`));
            }
            else {
                return of_1.of(device);
            }
        }), operators_1.distinctUntilChanged((oldDevice, newDevice) => oldDevice.language !== newDevice.language), operators_1.switchMap((device) => this.watchedFiles.termsOfUse[device.language]));
    }
    getPrivacy(userId, deviceId) {
        return this.devicesService.get(deviceId).pipe(operators_1.exhaustMap((device) => {
            if (device === null) {
                return throw_1._throw(new Error(`User with the id ${userId} doesn't exist`));
            }
            else {
                return of_1.of(device);
            }
        }), operators_1.distinctUntilChanged((oldDevice, newDevice) => oldDevice.language !== newDevice.language), operators_1.switchMap((device) => this.watchedFiles.privacy[device.language]));
    }
    generate1000Customers(defaultLng, defaultLat) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const existingEmails = _.map(yield this.Model.find({}).select({ email: 1 }).lean().exec(), (u) => u.email);
            const customersToCreate = [];
            const customerCreatedFrom = new Date(2015, 1);
            const customerCreatedTo = new Date();
            let customerCount = 1;
            while (customerCount <= 1000) {
                const firstName = faker_1.default.name.firstName();
                const lastName = faker_1.default.name.lastName();
                const email = faker_1.default.internet.email(firstName, lastName);
                const isBanned = Math.random() < 0.02;
                const geoLocation = {
                    countryId: faker_1.default.random.number(GeoLocation_1.Country.ZW),
                    city: faker_1.default.address.city(),
                    house: `${customerCount}`,
                    loc: {
                        type: 'Point',
                        coordinates: [defaultLng, defaultLat],
                    },
                    streetAddress: faker_1.default.address.streetAddress(),
                };
                if (!existingEmails.includes(email)) {
                    existingEmails.push(email);
                    customersToCreate.push({
                        firstName: faker_1.default.name.firstName(),
                        lastName: faker_1.default.name.lastName(),
                        geoLocation,
                        apartment: `${customerCount}`,
                        email,
                        isBanned,
                        image: faker_1.default.image.avatar(),
                        phone: faker_1.default.phone.phoneNumber(),
                        _createdAt: faker_1.default.date.between(customerCreatedFrom, customerCreatedTo),
                    });
                    customerCount += 1;
                }
            }
            return this.Model.insertMany(customersToCreate);
        });
    }
    banUser(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.throwIfNotExists(id);
            return this.update(id, { isBanned: true });
        });
    }
    unbanUser(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.throwIfNotExists(id);
            return this.update(id, { isBanned: false });
        });
    }
    throwIfNotExists(userId) {
        const _super = Object.create(null, {
            get: { get: () => super.get }
        });
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const user = yield _super.get.call(this, userId).pipe(operators_1.first()).toPromise();
            if (!user || user.isDeleted) {
                throw Error(`Customer with id '${userId}' does not exists!`);
            }
        });
    }
};
tslib_1.__decorate([
    io_1.asyncListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UsersService.prototype, "updateUser", null);
tslib_1.__decorate([
    io_1.observableListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", rxjs_1.Observable)
], UsersService.prototype, "get", null);
tslib_1.__decorate([
    io_1.asyncListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], UsersService.prototype, "getCards", null);
tslib_1.__decorate([
    io_1.asyncListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, String]),
    tslib_1.__metadata("design:returntype", Promise)
], UsersService.prototype, "addPaymentMethod", null);
tslib_1.__decorate([
    io_1.asyncListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, String]),
    tslib_1.__metadata("design:returntype", Promise)
], UsersService.prototype, "updateEmail", null);
tslib_1.__decorate([
    io_1.asyncListener(),
    tslib_1.__param(1, io_1.serialization((g) => new GeoLocation_1.default(g))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, GeoLocation_1.default]),
    tslib_1.__metadata("design:returntype", Promise)
], UsersService.prototype, "updateGeoLocation", null);
tslib_1.__decorate([
    io_1.observableListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, String]),
    tslib_1.__metadata("design:returntype", rxjs_1.Observable)
], UsersService.prototype, "getAboutUs", null);
tslib_1.__decorate([
    io_1.observableListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, String]),
    tslib_1.__metadata("design:returntype", rxjs_1.Observable)
], UsersService.prototype, "getTermsOfUse", null);
tslib_1.__decorate([
    io_1.observableListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, String]),
    tslib_1.__metadata("design:returntype", rxjs_1.Observable)
], UsersService.prototype, "getPrivacy", null);
UsersService = tslib_1.__decorate([
    inversify_1.injectable(),
    io_1.routerName('user'),
    tslib_1.__param(0, inversify_1.inject(new inversify_1.LazyServiceIdentifer(() => invites_1.InvitesService))),
    tslib_1.__param(1, inversify_1.inject(new inversify_1.LazyServiceIdentifer(() => devices_1.DevicesService))),
    tslib_1.__param(2, inversify_1.inject(new inversify_1.LazyServiceIdentifer(() => warehouses_1.WarehousesService))),
    tslib_1.__metadata("design:paramtypes", [invites_1.InvitesService,
        devices_1.DevicesService,
        warehouses_1.WarehousesService])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=UsersService.js.map