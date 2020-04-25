"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const operators_1 = require("rxjs/operators");
const admins_1 = require("../../services/admins");
const passport_jwt_1 = require("passport-jwt");
let AdminResolver = class AdminResolver {
    constructor(_adminsService) {
        this._adminsService = _adminsService;
    }
    getAdmin(_, { id }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this._adminsService.get(id).pipe(operators_1.first()).toPromise();
        });
    }
    getByEmail(_, { email }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this._adminsService.getByEmail(email);
        });
    }
    registerAdmin(_, { registerInput }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this._adminsService.register(registerInput);
        });
    }
    updateAdmin(_, { id, updateInput }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this._adminsService.throwIfNotExists(id);
            return this._adminsService.update(id, updateInput);
        });
    }
    adminLogin(_, { email, password }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this._adminsService.login(email, password);
        });
    }
    adminAuthenticated(_, __, context) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this._adminsService.isAuthenticated(passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken()(context.req));
        });
    }
    updateAdminPassword(_, { id, password, }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this._adminsService.updatePassword(id, password);
        });
    }
};
tslib_1.__decorate([
    graphql_1.Query('admin'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AdminResolver.prototype, "getAdmin", null);
tslib_1.__decorate([
    graphql_1.Query('adminByEmail'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AdminResolver.prototype, "getByEmail", null);
tslib_1.__decorate([
    graphql_1.Mutation(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AdminResolver.prototype, "registerAdmin", null);
tslib_1.__decorate([
    graphql_1.Mutation(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AdminResolver.prototype, "updateAdmin", null);
tslib_1.__decorate([
    graphql_1.Mutation(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AdminResolver.prototype, "adminLogin", null);
tslib_1.__decorate([
    graphql_1.Query(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AdminResolver.prototype, "adminAuthenticated", null);
tslib_1.__decorate([
    graphql_1.Mutation(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AdminResolver.prototype, "updateAdminPassword", null);
AdminResolver = tslib_1.__decorate([
    graphql_1.Resolver('Admin'),
    tslib_1.__metadata("design:paramtypes", [admins_1.AdminsService])
], AdminResolver);
exports.AdminResolver = AdminResolver;
//# sourceMappingURL=admin.resolver.js.map