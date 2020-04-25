"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const invites_1 = require("../../services/invites");
const operators_1 = require("rxjs/operators");
const InviteRequest_1 = tslib_1.__importDefault(require("@modules/server.common/entities/InviteRequest"));
let InviteRequestResolver = class InviteRequestResolver {
    constructor(_invitesRequestsService) {
        this._invitesRequestsService = _invitesRequestsService;
    }
    generate1000InviteRequests(_, { defaultLng, defaultLat }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this._invitesRequestsService.generate1000InviteRequests(defaultLng, defaultLat);
        });
    }
    getInviteRequest(_, { id }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this._invitesRequestsService.get(id).pipe(operators_1.first()).toPromise();
        });
    }
    notifyAboutLaunch(_, { invite, devicesIds, }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this._invitesRequestsService.notifyAboutLaunch(invite, devicesIds);
        });
    }
    getInvitesRequests(_, { findInput, invited, pagingOptions = {} }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (!pagingOptions || (pagingOptions && !pagingOptions['sort'])) {
                pagingOptions['sort'] = { field: '_createdAt', sortBy: 'asc' };
            }
            const invitesRequests = yield this._invitesRequestsService.getInvitesRequests(findInput, invited, pagingOptions);
            return invitesRequests.map((i) => new InviteRequest_1.default(i));
        });
    }
    getCountOfInvitesRequests(_, { invited }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const findObj = { isDeleted: { $eq: false } };
            if (!invited) {
                findObj['isInvited'] = { $eq: false };
            }
            return this._invitesRequestsService.Model.find(findObj)
                .countDocuments()
                .exec();
        });
    }
    createInviteRequest(_, { createInput }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this._invitesRequestsService.create(createInput);
        });
    }
    updateInviteRequest(_, { id, updateInput }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this._invitesRequestsService.throwIfNotExists(id);
            return this._invitesRequestsService.update(id, updateInput);
        });
    }
    removeInviteRequest(_, { id }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this._invitesRequestsService.throwIfNotExists(id);
            return this._invitesRequestsService.remove(id);
        });
    }
    removeInvitesRequestsByIds(_, { ids }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const inviteRequests = yield this._invitesRequestsService.find({
                _id: { $in: ids },
                isDeleted: { $eq: false },
            });
            const inviteRequestsIds = inviteRequests.map((d) => d.id);
            return this._invitesRequestsService.removeMultipleByIds(inviteRequestsIds);
        });
    }
};
tslib_1.__decorate([
    graphql_1.Query(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], InviteRequestResolver.prototype, "generate1000InviteRequests", null);
tslib_1.__decorate([
    graphql_1.Query('inviteRequest'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], InviteRequestResolver.prototype, "getInviteRequest", null);
tslib_1.__decorate([
    graphql_1.Query('notifyAboutLaunch'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], InviteRequestResolver.prototype, "notifyAboutLaunch", null);
tslib_1.__decorate([
    graphql_1.Query('invitesRequests'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], InviteRequestResolver.prototype, "getInvitesRequests", null);
tslib_1.__decorate([
    graphql_1.Query(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], InviteRequestResolver.prototype, "getCountOfInvitesRequests", null);
tslib_1.__decorate([
    graphql_1.Mutation(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], InviteRequestResolver.prototype, "createInviteRequest", null);
tslib_1.__decorate([
    graphql_1.Mutation(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], InviteRequestResolver.prototype, "updateInviteRequest", null);
tslib_1.__decorate([
    graphql_1.Mutation(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], InviteRequestResolver.prototype, "removeInviteRequest", null);
tslib_1.__decorate([
    graphql_1.Mutation(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], InviteRequestResolver.prototype, "removeInvitesRequestsByIds", null);
InviteRequestResolver = tslib_1.__decorate([
    graphql_1.Resolver('Invite-request'),
    tslib_1.__metadata("design:paramtypes", [invites_1.InvitesRequestsService])
], InviteRequestResolver);
exports.InviteRequestResolver = InviteRequestResolver;
//# sourceMappingURL=invites-requests.resolver.js.map