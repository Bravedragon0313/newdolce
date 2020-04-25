"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const jsonwebtoken_1 = tslib_1.__importDefault(require("jsonwebtoken"));
const common_1 = require("@nestjs/common");
const User_1 = tslib_1.__importDefault(require("@modules/server.common/entities/User"));
const Log_1 = require("../../helpers/Log");
const operators_1 = require("rxjs/operators");
const users_1 = require("../../services/users");
let AuthService = class AuthService {
    constructor(_usersService) {
        this._usersService = _usersService;
        this.DBObject = User_1.default;
        this.log = Log_1.createEverLogger({ name: 'authService' });
    }
    createToken(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const user = { id };
            return jsonwebtoken_1.default.sign(user, 'secretKey', { expiresIn: 3600 });
        });
    }
    validateUser(payload) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this._usersService.get(payload.id).pipe(operators_1.first()).toPromise();
        });
    }
};
AuthService = tslib_1.__decorate([
    common_1.Injectable(),
    tslib_1.__metadata("design:paramtypes", [users_1.UsersService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map