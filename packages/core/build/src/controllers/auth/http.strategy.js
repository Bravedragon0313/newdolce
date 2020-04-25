"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const passport_http_bearer_1 = require("passport-http-bearer");
const passport_1 = require("@nestjs/passport");
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./auth.service");
const passport_jwt_1 = require("passport-jwt");
let HttpStrategy = class HttpStrategy extends passport_1.PassportStrategy(passport_http_bearer_1.Strategy) {
    constructor(authService) {
        super({
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: 'secretKey',
        });
        this.authService = authService;
    }
};
HttpStrategy = tslib_1.__decorate([
    common_1.Injectable(),
    tslib_1.__metadata("design:paramtypes", [auth_service_1.AuthService])
], HttpStrategy);
exports.HttpStrategy = HttpStrategy;
//# sourceMappingURL=http.strategy.js.map