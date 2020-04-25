"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const passport_jwt_1 = require("passport-jwt");
const jsonwebtoken_1 = tslib_1.__importDefault(require("jsonwebtoken"));
const operators_1 = require("rxjs/operators");
const inversify_1 = require("inversify");
const io_1 = require("@pyro/io");
const warehouses_1 = require("../warehouses");
const carriers_1 = require("../carriers");
const env_1 = require("../../env");
const jwtSecret = env_1.env.JWT_SECRET;
if (jwtSecret === 'default') {
    console.log('Warning: default JWT_SECRET used. Please add your own to config!');
}
exports.createJwtData = {
    jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: jwtSecret,
};
function createToken(id, appName) {
    const user = { id, appName };
    return jsonwebtoken_1.default.sign(user, 'secretKey', {
        expiresIn: 3600,
    });
}
exports.createToken = createToken;
let AuthenticationService = class AuthenticationService {
    constructor(warehousesService, carriersService) {
        this.warehousesService = warehousesService;
        this.carriersService = carriersService;
    }
    validateUser(payload) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (payload.appName === 'carrier') {
                return this.carriersService
                    .get(payload.id)
                    .pipe(operators_1.first())
                    .toPromise();
            }
            else if (payload.appName === 'warehouse') {
                return this.warehousesService
                    .get(payload.id)
                    .pipe(operators_1.first())
                    .toPromise();
            }
            else {
                return null;
            }
        });
    }
};
AuthenticationService = tslib_1.__decorate([
    inversify_1.injectable(),
    io_1.routerName('auth'),
    tslib_1.__param(0, inversify_1.inject(new inversify_1.LazyServiceIdentifer(() => warehouses_1.WarehousesService))),
    tslib_1.__param(1, inversify_1.inject(new inversify_1.LazyServiceIdentifer(() => carriers_1.CarriersService))),
    tslib_1.__metadata("design:paramtypes", [warehouses_1.WarehousesService,
        carriers_1.CarriersService])
], AuthenticationService);
exports.AuthenticationService = AuthenticationService;
//# sourceMappingURL=AuthenticationService.js.map