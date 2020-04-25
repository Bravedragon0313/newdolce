"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const operators_1 = require("rxjs/operators");
const InvitesService_1 = require("../../services/invites/InvitesService");
const invites_1 = require("../../services/invites");
const Invite_1 = tslib_1.__importDefault(require("@modules/server.common/entities/Invite"));
let InviteResolver = class InviteResolver {
    constructor(_invitesService, _inviteRequestsService) {
        this._invitesService = _invitesService;
        this._inviteRequestsService = _inviteRequestsService;
    }
    generate1000InvitesConnectedToInviteRequests(_, { defaultLng, defaultLat }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const { invitesRequestsToCreate, invitesToCreate, } = this._invitesService.generate1000InvitesConnectedToInviteRequests(defaultLng, defaultLat);
            yield this._invitesService.Model.insertMany(invitesToCreate);
            yield this._inviteRequestsService.Model.insertMany(invitesRequestsToCreate);
        });
    }
    getInvite(_, { id }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this._invitesService.get(id).pipe(operators_1.first()).toPromise();
        });
    }
    getInviteByCode(_, { info }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this._invitesService.getByCode(info).pipe(operators_1.first()).toPromise();
        });
    }
    getInviteByLocation(_, { info }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this._invitesService
                .getByLocation(info)
                .pipe(operators_1.first())
                .toPromise();
        });
    }
    getInvites(_, { findInput, pagingOptions = {} }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (!pagingOptions || (pagingOptions && !pagingOptions['sort'])) {
                pagingOptions['sort'] = { field: '_createdAt', sortBy: 'desc' };
            }
            const invites = yield this._invitesService.getInvites(findInput, pagingOptions);
            return invites.map((i) => new Invite_1.default(i));
        });
    }
    getCountOfInvites() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this._invitesService.Model.find({ isDeleted: { $eq: false } })
                .countDocuments()
                .exec();
        });
    }
    createInvite(_, { createInput }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this._invitesService.create(createInput);
        });
    }
    updateInvite(_, { id, updateInput }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this._invitesService.throwIfNotExists(id);
            return this._invitesService.update(id, updateInput);
        });
    }
    removeInvite(_, { id }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this._invitesService.throwIfNotExists(id);
            return this._invitesService.remove(id);
        });
    }
    removeInvitesByIds(_, { ids }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const invites = yield this._invitesService.find({
                _id: { $in: ids },
                isDeleted: { $eq: false },
            });
            const invitesIds = invites.map((d) => d.id);
            return this._invitesService.removeMultipleByIds(invitesIds);
        });
    }
};
tslib_1.__decorate([
    graphql_1.Query(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], InviteResolver.prototype, "generate1000InvitesConnectedToInviteRequests", null);
tslib_1.__decorate([
    graphql_1.Query('invite'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], InviteResolver.prototype, "getInvite", null);
tslib_1.__decorate([
    graphql_1.Query('getInviteByCode'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], InviteResolver.prototype, "getInviteByCode", null);
tslib_1.__decorate([
    graphql_1.Query('getInviteByLocation'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], InviteResolver.prototype, "getInviteByLocation", null);
tslib_1.__decorate([
    graphql_1.Query('invites'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], InviteResolver.prototype, "getInvites", null);
tslib_1.__decorate([
    graphql_1.Query(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], InviteResolver.prototype, "getCountOfInvites", null);
tslib_1.__decorate([
    graphql_1.Mutation(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], InviteResolver.prototype, "createInvite", null);
tslib_1.__decorate([
    graphql_1.Mutation(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], InviteResolver.prototype, "updateInvite", null);
tslib_1.__decorate([
    graphql_1.Mutation(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], InviteResolver.prototype, "removeInvite", null);
tslib_1.__decorate([
    graphql_1.Mutation(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], InviteResolver.prototype, "removeInvitesByIds", null);
InviteResolver = tslib_1.__decorate([
    graphql_1.Resolver('Invite'),
    tslib_1.__metadata("design:paramtypes", [InvitesService_1.InvitesService,
        invites_1.InvitesRequestsService])
], InviteResolver);
exports.InviteResolver = InviteResolver;
//# sourceMappingURL=invite.resolver.js.map