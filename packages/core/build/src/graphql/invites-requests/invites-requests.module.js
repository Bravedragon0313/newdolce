"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const invites_requests_resolver_1 = require("./invites-requests.resolver");
let InvitesRequestsModule = class InvitesRequestsModule {
};
InvitesRequestsModule = tslib_1.__decorate([
    common_1.Module({
        providers: [invites_requests_resolver_1.InviteRequestResolver],
    })
], InvitesRequestsModule);
exports.InvitesRequestsModule = InvitesRequestsModule;
//# sourceMappingURL=invites-requests.module.js.map