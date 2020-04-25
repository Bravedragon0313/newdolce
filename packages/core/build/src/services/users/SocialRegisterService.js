"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const inversify_1 = require("inversify");
const UsersService_1 = require("./UsersService");
const io_1 = require("@pyro/io");
let SocialRegisterService = class SocialRegisterService {
    constructor(usersService) {
        this.usersService = usersService;
    }
    register(profileInfo) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const socialId = profileInfo['id'];
            const currentUser = yield this.usersService.getSocial(socialId);
            let redirectUrl = '';
            if (currentUser) {
                currentUser.isRegistrationCompleted
                    ? (redirectUrl = 'login/socie/' + currentUser['_id'])
                    : (redirectUrl = 'login/byLocation/' + currentUser['_id']);
            }
            else {
                const [firstname, lastname] = profileInfo['displayName'].split(' ');
                const email = profileInfo['emails'][0]['value'];
                const socialIdOnProfile = profileInfo['id'];
                const newUser = yield this.usersService.initUser({
                    firstName: firstname,
                    lastName: lastname,
                    email,
                    socialIds: [socialIdOnProfile],
                    isRegistrationCompleted: false,
                });
                redirectUrl = 'login/byLocation/' + newUser['_id'];
            }
            return { redirectUrl };
        });
    }
};
SocialRegisterService = tslib_1.__decorate([
    io_1.routerName('social-register-service'),
    inversify_1.injectable(),
    tslib_1.__param(0, inversify_1.inject(UsersService_1.UsersService)),
    tslib_1.__metadata("design:paramtypes", [UsersService_1.UsersService])
], SocialRegisterService);
exports.SocialRegisterService = SocialRegisterService;
//# sourceMappingURL=SocialRegisterService.js.map