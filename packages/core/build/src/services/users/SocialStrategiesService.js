"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const passport_google_oauth20_1 = tslib_1.__importDefault(require("passport-google-oauth20"));
const passport_facebook_1 = tslib_1.__importDefault(require("passport-facebook"));
const inversify_1 = require("inversify");
const SocialRegisterService_1 = require("./SocialRegisterService");
const io_1 = require("@pyro/io");
const env_1 = require("../../env");
let SocialStrategiesService = class SocialStrategiesService {
    constructor(socialRegister) {
        this.socialRegister = socialRegister;
    }
    getGoogleStrategy() {
        if (env_1.env.GOOGLE_APP_ID !== '' && env_1.env.GOOGLE_APP_SECRET !== '') {
            return new passport_google_oauth20_1.default({
                clientID: env_1.env.GOOGLE_APP_ID,
                clientSecret: env_1.env.GOOGLE_APP_SECRET,
                callbackURL: '/auth/google/callback',
            }, (accessToken, refreshToken, profile, done) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                const { redirectUrl } = yield this.socialRegister.register(profile);
                done(null, { redirectUrl });
            }));
        }
        console.log(`Warning: Google OAuth disabled because no details provided in the settings/environment`);
        return null;
    }
    getFacebookStrategy() {
        if (env_1.env.FACEBOOK_APP_ID !== '' && env_1.env.FACEBOOK_APP_SECRET !== '') {
            return new passport_facebook_1.default({
                clientID: env_1.env.FACEBOOK_APP_ID,
                clientSecret: env_1.env.FACEBOOK_APP_SECRET,
                callbackURL: '/auth/facebook/callback',
                profileFields: [
                    'id',
                    'displayName',
                    'picture',
                    'email',
                    'gender',
                ],
            }, (accessToken, refreshToken, profile, done) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                const { redirectUrl } = yield this.socialRegister.register(profile);
                done(null, { redirectUrl });
            }));
        }
        console.log(`Warning: Facebook OAuth disabled because no details provided in the settings/environment`);
        return null;
    }
};
SocialStrategiesService = tslib_1.__decorate([
    io_1.routerName('social-strategies-service'),
    inversify_1.injectable(),
    tslib_1.__param(0, inversify_1.inject(SocialRegisterService_1.SocialRegisterService)),
    tslib_1.__metadata("design:paramtypes", [SocialRegisterService_1.SocialRegisterService])
], SocialStrategiesService);
exports.SocialStrategiesService = SocialStrategiesService;
//# sourceMappingURL=SocialStrategiesService.js.map