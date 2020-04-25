"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const entity_service_1 = require("@pyro/db-server/entity-service");
const env_1 = require("../../env");
const WrongPasswordError_1 = require("@modules/server.common/errors/WrongPasswordError");
const bcrypt_1 = tslib_1.__importDefault(require("bcrypt"));
const inversify_1 = require("inversify");
const jsonwebtoken_1 = tslib_1.__importDefault(require("jsonwebtoken"));
const jsonwebtoken_2 = require("jsonwebtoken");
let AuthService = class AuthService extends entity_service_1.EntityService {
    setConfig(config) {
        this.role = config.role;
        this.DBObject = config.Entity;
        this.saltRounds = config.saltRounds;
    }
    getPasswordHash(password) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return bcrypt_1.default.hash(password, this.saltRounds);
        });
    }
    addPassword(id, password) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const entity = this.parse(yield this.Model.findById(id).select('+hash').lean().exec());
            if (entity.hash != null) {
                throw new Error('Password already exists, please call updatePassword instead.');
            }
            yield this._savePassword(id, password);
        });
    }
    updatePassword(id, password) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const entity = this.parse(yield this.Model.findById(id).select('+hash').lean().exec());
            if (!(yield bcrypt_1.default.compare(password.current, entity.hash))) {
                throw new WrongPasswordError_1.WrongPasswordError();
            }
            yield this._savePassword(id, password.new);
        });
    }
    _savePassword(id, password) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const hash = yield this.getPasswordHash(password);
            yield this.Model.findByIdAndUpdate(id, {
                hash,
            })
                .lean()
                .exec();
        });
    }
    login(findObj, password) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const entity = this.parse(yield this.Model.findOne(findObj).select('+hash').lean().exec());
            if (!entity || !(yield bcrypt_1.default.compare(password, entity.hash))) {
                return null;
            }
            const token = jsonwebtoken_1.default.sign({ id: entity.id, role: this.role }, env_1.env.JWT_SECRET, {});
            delete entity.hash;
            return {
                entity,
                token,
            };
        });
    }
    isAuthenticated(token) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const { id, role } = jsonwebtoken_1.default.verify(token, env_1.env.JWT_SECRET);
                const entity = yield this.Model.findById(id).lean().exec();
                if (!entity) {
                    return false;
                }
                return role === this.role;
            }
            catch (err) {
                if (err instanceof jsonwebtoken_2.JsonWebTokenError) {
                    return false;
                }
                else {
                    throw err;
                }
            }
        });
    }
};
AuthService = tslib_1.__decorate([
    inversify_1.injectable()
], AuthService);
exports.AuthService = AuthService;
exports.authServiceFactory = (context) => {
    return (config) => {
        const authService = context.container.get(AuthService);
        authService.setConfig(config);
        return authService;
    };
};
//# sourceMappingURL=AuthService.js.map