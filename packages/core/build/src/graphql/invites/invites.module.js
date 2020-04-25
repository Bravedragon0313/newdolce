"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const invite_resolver_1 = require("./invite.resolver");
let InvitesModule = class InvitesModule {
};
InvitesModule = tslib_1.__decorate([
    common_1.Module({
        providers: [invite_resolver_1.InviteResolver],
    })
], InvitesModule);
exports.InvitesModule = InvitesModule;
//# sourceMappingURL=invites.module.js.map