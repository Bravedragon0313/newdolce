"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const cqrs_1 = require("@nestjs/cqrs");
const io_1 = require("@pyro/io");
const inversify_1 = require("inversify");
const UsersService_1 = require("./UsersService");
class GetAboutUsCommand {
    constructor(userId, deviceId) {
        this.userId = userId;
        this.deviceId = deviceId;
    }
}
exports.GetAboutUsCommand = GetAboutUsCommand;
let UserCommandService = class UserCommandService {
    constructor(_commandBus) {
        this._commandBus = _commandBus;
    }
    exec(userId, deviceId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this._commandBus.execute(new GetAboutUsCommand(userId, deviceId));
        });
    }
};
UserCommandService = tslib_1.__decorate([
    inversify_1.injectable(),
    io_1.routerName('userCommandService'),
    tslib_1.__param(0, inversify_1.optional()),
    tslib_1.__metadata("design:paramtypes", [cqrs_1.CommandBus])
], UserCommandService);
exports.UserCommandService = UserCommandService;
let GetAboutUsHandler = class GetAboutUsHandler {
    constructor(_userService) {
        this._userService = _userService;
    }
    execute(command) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const { userId, deviceId } = command;
            console.log('COMMAND PARAM 1:', userId);
            console.log('COMMAND PARAM 2:', deviceId);
            const result = this._userService.getAboutUs(userId, deviceId);
            return result;
        });
    }
};
GetAboutUsHandler = tslib_1.__decorate([
    cqrs_1.CommandHandler(GetAboutUsCommand),
    tslib_1.__metadata("design:paramtypes", [UsersService_1.UsersService])
], GetAboutUsHandler);
exports.GetAboutUsHandler = GetAboutUsHandler;
//# sourceMappingURL=UserCommandService.js.map