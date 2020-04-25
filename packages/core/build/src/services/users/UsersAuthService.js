"use strict";
var UsersAuthService_1;
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const User_1 = tslib_1.__importDefault(require("@modules/server.common/entities/User"));
const Log_1 = require("../../helpers/Log");
const entity_service_1 = require("@pyro/db-server/entity-service");
const io_1 = require("@pyro/io");
const UsersService_1 = require("./UsersService");
const NotInvitedError_1 = require("@modules/server.common/errors/NotInvitedError");
const invites_1 = require("../invites");
const inversify_1 = require("inversify");
const env_1 = require("../../env");
let UsersAuthService = UsersAuthService_1 = class UsersAuthService extends entity_service_1.EntityService {
    constructor(usersService, invitesService, authServiceFactory) {
        super();
        this.usersService = usersService;
        this.invitesService = invitesService;
        this.authServiceFactory = authServiceFactory;
        this.DBObject = User_1.default;
        this.log = Log_1.createEverLogger({
            name: 'userAuthService',
        });
        this.authService = this.authServiceFactory({
            role: 'user',
            Entity: User_1.default,
            saltRounds: env_1.env.USER_PASSWORD_BCRYPT_SALT_ROUNDS,
        });
    }
    register(input) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (UsersAuthService_1.IS_INVITES_SYSTEM_ON &&
                !(yield this._isInvited(input.user))) {
                throw new NotInvitedError_1.NotInvitedError();
            }
            if (input.user.firstName === '') {
                delete input.user.firstName;
            }
            if (input.user.lastName === '') {
                delete input.user.lastName;
            }
            if (input.user.email === '') {
                delete input.user.email;
            }
            const user = yield this.usersService.create(Object.assign(Object.assign({}, input.user), (input.password
                ? {
                    hash: yield this.authService.getPasswordHash(input.password),
                }
                : {})));
            return user;
        });
    }
    updatePassword(id, password) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.usersService.throwIfNotExists(id);
            yield this.authService.updatePassword(id, password);
        });
    }
    addRegistrationInfo(id, { email, password, firstName, lastName, phone }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.usersService.throwIfNotExists(id);
            const user = yield this.usersService.getCurrent(id);
            if (user.email == null && email) {
                throw new Error('To add password user must have email');
            }
            yield this.authService.addPassword(id, password);
            yield this.usersService.update(id, Object.assign(Object.assign(Object.assign(Object.assign({}, (email ? { email } : {})), (firstName ? { firstName } : {})), (lastName ? { lastName } : {})), (phone ? { phone } : {})));
        });
    }
    login(email, password) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const res = yield this.authService.login({ email }, password);
            if (!res || res.entity.isDeleted) {
                return null;
            }
            return {
                user: res.entity,
                token: res.token,
            };
        });
    }
    getRegistrationsSettings() {
        return new Promise((resolve, reject) => {
            resolve({
                registrationRequiredOnStart: env_1.env.SETTINGS_REGISTRATIONS_REQUIRED_ON_START,
            });
        });
    }
    _isInvited(userCreateObject) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const inviteFindObject = {
                'geoLocation.countryId': userCreateObject.geoLocation.countryId,
                'geoLocation.city': userCreateObject.geoLocation.city,
                'geoLocation.streetAddress': userCreateObject.geoLocation.streetAddress,
                'geoLocation.house': userCreateObject.geoLocation.house,
                apartment: userCreateObject.apartment,
            };
            if (userCreateObject.geoLocation.postcode) {
                inviteFindObject['geoLocation.postcode'] =
                    userCreateObject.geoLocation.postcode;
            }
            const invite = yield this.invitesService.findOne(inviteFindObject);
            return invite != null;
        });
    }
};
UsersAuthService.IS_INVITES_SYSTEM_ON = false;
tslib_1.__decorate([
    io_1.asyncListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UsersAuthService.prototype, "register", null);
tslib_1.__decorate([
    io_1.asyncListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UsersAuthService.prototype, "updatePassword", null);
tslib_1.__decorate([
    io_1.asyncListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UsersAuthService.prototype, "addRegistrationInfo", null);
tslib_1.__decorate([
    io_1.asyncListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, String]),
    tslib_1.__metadata("design:returntype", Promise)
], UsersAuthService.prototype, "login", null);
tslib_1.__decorate([
    io_1.asyncListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], UsersAuthService.prototype, "getRegistrationsSettings", null);
UsersAuthService = UsersAuthService_1 = tslib_1.__decorate([
    inversify_1.injectable(),
    io_1.routerName('user-auth'),
    tslib_1.__param(2, inversify_1.inject('Factory<AuthService>')),
    tslib_1.__metadata("design:paramtypes", [UsersService_1.UsersService,
        invites_1.InvitesService, Function])
], UsersAuthService);
exports.UsersAuthService = UsersAuthService;
//# sourceMappingURL=UsersAuthService.js.map