"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const users_1 = require("../services/users");
const swagger_1 = require("@nestjs/swagger");
let TestController = class TestController {
    constructor(_userCommandService) {
        this._userCommandService = _userCommandService;
    }
    index() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const userId = '1';
            const deviceId = '2';
            yield this._userCommandService.exec(userId, deviceId);
        });
    }
};
tslib_1.__decorate([
    common_1.Get('index'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], TestController.prototype, "index", null);
TestController = tslib_1.__decorate([
    swagger_1.ApiUseTags('test'),
    common_1.Controller('test'),
    tslib_1.__metadata("design:paramtypes", [users_1.UserCommandService])
], TestController);
exports.TestController = TestController;
//# sourceMappingURL=test.controller.js.map