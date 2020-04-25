"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const users_1 = require("../../services/users");
const operators_1 = require("rxjs/operators");
const User_1 = tslib_1.__importDefault(require("@modules/server.common/entities/User"));
const devices_1 = require("../../services/devices");
const UsersAuthService_1 = require("../../services/users/UsersAuthService");
const mongodb_1 = require("mongodb");
const orders_1 = require("../../services/orders");
let UserResolver = class UserResolver {
    constructor(_usersService, _usersAuthService, _usersOrdersService, _devicesService, _ordersService) {
        this._usersService = _usersService;
        this._usersAuthService = _usersAuthService;
        this._usersOrdersService = _usersOrdersService;
        this._devicesService = _devicesService;
        this._ordersService = _ordersService;
    }
    isUserEmailExists(_, { email }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this._usersService.isUserEmailExists(email);
        });
    }
    generate1000Customers(_, { defaultLng, defaultLat }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            let success = true;
            let message = null;
            try {
                yield this._ordersService.generateOrdersPerEachCustomer(yield this._usersService.generate1000Customers(defaultLng, defaultLat));
            }
            catch (err) {
                message = err.message;
                success = false;
            }
            return {
                success,
                message,
            };
        });
    }
    getSocial(_, { socialId }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this._usersService.getSocial(socialId);
        });
    }
    userExists(_, { conditions }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const userId = conditions.exceptCustomerId;
            const memberKey = conditions.memberKey;
            const memberValue = conditions.memberValue;
            return ((yield this._usersService.count({
                _id: { $nin: [new mongodb_1.ObjectId(userId)] },
                isDeleted: { $eq: false },
                [memberKey]: memberValue,
            })) > 0);
        });
    }
    getUser(_, { id }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this._usersService.get(id).pipe(operators_1.first()).toPromise();
        });
    }
    getUsers(_, { findInput, pagingOptions = {} }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (!pagingOptions || (pagingOptions && !pagingOptions['sort'])) {
                pagingOptions['sort'] = { field: '_createdAt', sortBy: 'desc' };
            }
            const users = yield this._usersService.getUsers(findInput, pagingOptions);
            return users.map((u) => new User_1.default(u));
        });
    }
    getOrders(_, { userId }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this._usersService.throwIfNotExists(userId);
            const result = yield this._usersOrdersService
                .get(userId)
                .pipe(operators_1.first())
                .toPromise();
            return result;
        });
    }
    getCountOfUsers() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this._usersService.Model.find({ isDeleted: { $eq: false } })
                .countDocuments()
                .exec();
        });
    }
    getCustomerMetrics(_, { id }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this._usersOrdersService.getCustomerMetrics(id);
        });
    }
    updateUser(_, { id, updateObject }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this._usersService.updateUser(id, updateObject);
        });
    }
    updateUserEmail(_, { userId, email }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this._usersService.updateEmail(userId, email);
        });
    }
    registerUser(_, { registerInput }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this._usersAuthService.register(registerInput);
        });
    }
    userLogin(_, { email, password }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this._usersAuthService.login(email, password);
        });
    }
    removeUsersByIds(obj, { ids }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const users = yield this._usersService.find({
                _id: { $in: ids },
                isDeleted: { $eq: false },
            });
            const usersIds = users.map((u) => u.id);
            return this._usersService.removeMultipleByIds(usersIds);
        });
    }
    getDevices(_user) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const user = new User_1.default(_user);
            return ((yield this._devicesService.getMultipleDevices(user.devicesIds))
                .pipe(operators_1.first())
                .toPromise());
        });
    }
    updateUserPassword(_, { id, password, }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this._usersAuthService.updatePassword(id, password);
        });
    }
    addUserRegistrationInfo(_, { id, registrationInfo, }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this._usersAuthService.addRegistrationInfo(id, registrationInfo);
        });
    }
    banUser(_, { id }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this._usersService.banUser(id);
        });
    }
    unbanUser(_, { id }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this._usersService.unbanUser(id);
        });
    }
};
tslib_1.__decorate([
    graphql_1.Query(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UserResolver.prototype, "isUserEmailExists", null);
tslib_1.__decorate([
    graphql_1.Query(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UserResolver.prototype, "generate1000Customers", null);
tslib_1.__decorate([
    graphql_1.Query(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UserResolver.prototype, "getSocial", null);
tslib_1.__decorate([
    graphql_1.Query('isUserExists'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UserResolver.prototype, "userExists", null);
tslib_1.__decorate([
    graphql_1.Query('user'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UserResolver.prototype, "getUser", null);
tslib_1.__decorate([
    graphql_1.Query('users'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UserResolver.prototype, "getUsers", null);
tslib_1.__decorate([
    graphql_1.Query('getOrders'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UserResolver.prototype, "getOrders", null);
tslib_1.__decorate([
    graphql_1.Query(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], UserResolver.prototype, "getCountOfUsers", null);
tslib_1.__decorate([
    graphql_1.Query(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UserResolver.prototype, "getCustomerMetrics", null);
tslib_1.__decorate([
    graphql_1.Mutation(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UserResolver.prototype, "updateUser", null);
tslib_1.__decorate([
    graphql_1.Mutation(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UserResolver.prototype, "updateUserEmail", null);
tslib_1.__decorate([
    graphql_1.Mutation(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UserResolver.prototype, "registerUser", null);
tslib_1.__decorate([
    graphql_1.Mutation(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UserResolver.prototype, "userLogin", null);
tslib_1.__decorate([
    graphql_1.Mutation(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UserResolver.prototype, "removeUsersByIds", null);
tslib_1.__decorate([
    graphql_1.ResolveProperty('devices'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UserResolver.prototype, "getDevices", null);
tslib_1.__decorate([
    graphql_1.Mutation(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UserResolver.prototype, "updateUserPassword", null);
tslib_1.__decorate([
    graphql_1.Mutation(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UserResolver.prototype, "addUserRegistrationInfo", null);
tslib_1.__decorate([
    graphql_1.Mutation(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UserResolver.prototype, "banUser", null);
tslib_1.__decorate([
    graphql_1.Mutation(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UserResolver.prototype, "unbanUser", null);
UserResolver = tslib_1.__decorate([
    graphql_1.Resolver('User'),
    tslib_1.__metadata("design:paramtypes", [users_1.UsersService,
        UsersAuthService_1.UsersAuthService,
        users_1.UsersOrdersService,
        devices_1.DevicesService,
        orders_1.OrdersService])
], UserResolver);
exports.UserResolver = UserResolver;
//# sourceMappingURL=user.resolver.js.map