"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const db_server_1 = require("@pyro/db-server");
const Admin_1 = tslib_1.__importDefault(require("@modules/server.common/entities/Admin"));
const Log_1 = require("../../helpers/Log");
const env_1 = require("../../env");
const rxjs_1 = require("rxjs");
const io_1 = require("@pyro/io");
const inversify_1 = require("inversify");
const operators_1 = require("rxjs/operators");
const typeorm_1 = require("typeorm");
let AdminsService = class AdminsService extends db_server_1.DBService {
    constructor(authServiceFactory, _adminRepository) {
        super();
        this._adminRepository = _adminRepository;
        this.DBObject = Admin_1.default;
        this.log = Log_1.createEverLogger({ name: 'adminService' });
        _adminRepository
            .count()
            .then((c) => {
            console.log('Admins count: ' + c);
        })
            .catch((e) => {
            console.log(e);
        });
        this.authService = authServiceFactory({
            role: 'admin',
            Entity: Admin_1.default,
            saltRounds: env_1.env.ADMIN_PASSWORD_BCRYPT_SALT_ROUNDS,
        });
    }
    get(id) {
        return super.get(id).pipe(operators_1.map((admin) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.throwIfNotExists(id);
            return admin;
        })), operators_1.switchMap((admin) => admin));
    }
    getByEmail(email) {
        const _super = Object.create(null, {
            findOne: { get: () => super.findOne }
        });
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return _super.findOne.call(this, { email, isDeleted: { $eq: false } });
        });
    }
    register(input) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const admin = yield this.create(Object.assign(Object.assign({}, input.admin), (input.password
                ? {
                    hash: yield this.authService.getPasswordHash(input.password),
                }
                : {})));
            return admin;
        });
    }
    updatePassword(id, password) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.throwIfNotExists(id);
            yield this.authService.updatePassword(id, password);
        });
    }
    login(email, password) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            let res = null;
            const admin = yield this.getByEmail(email);
            if (admin) {
                res = yield this.authService.login({ email }, password);
            }
            if (!res) {
                return null;
            }
            return {
                admin: res.entity,
                token: res.token,
            };
        });
    }
    isAuthenticated(token) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.authService.isAuthenticated(token);
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
    throwIfNotExists(adminId) {
        const _super = Object.create(null, {
            get: { get: () => super.get }
        });
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const admin = yield _super.get.call(this, adminId).pipe(operators_1.first()).toPromise();
            if (!admin || admin.isDeleted) {
                throw Error(`Admin with id '${adminId}' does not exists!`);
            }
        });
    }
};
tslib_1.__decorate([
    io_1.observableListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", rxjs_1.Observable)
], AdminsService.prototype, "get", null);
tslib_1.__decorate([
    io_1.asyncListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AdminsService.prototype, "getByEmail", null);
tslib_1.__decorate([
    io_1.asyncListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AdminsService.prototype, "register", null);
tslib_1.__decorate([
    io_1.asyncListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AdminsService.prototype, "updatePassword", null);
tslib_1.__decorate([
    io_1.asyncListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, String]),
    tslib_1.__metadata("design:returntype", Promise)
], AdminsService.prototype, "login", null);
tslib_1.__decorate([
    io_1.asyncListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], AdminsService.prototype, "isAuthenticated", null);
tslib_1.__decorate([
    io_1.asyncListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AdminsService.prototype, "updateById", null);
AdminsService = tslib_1.__decorate([
    inversify_1.injectable(),
    tslib_1.__param(0, inversify_1.inject('Factory<AuthService>')),
    tslib_1.__param(1, inversify_1.inject('AdminRepository')),
    tslib_1.__metadata("design:paramtypes", [Function, typeorm_1.Repository])
], AdminsService);
exports.AdminsService = AdminsService;
//# sourceMappingURL=AdminsService.js.map