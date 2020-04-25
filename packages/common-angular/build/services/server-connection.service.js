"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var operators_1 = require("rxjs/operators");
var ServerConnectionService = (function () {
    function ServerConnectionService(httpClient) {
        this.httpClient = httpClient;
    }
    ServerConnectionService.prototype.load = function (endPoint, store) {
        var _this = this;
        return new Promise(function (resolve, reject) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.checkServerConnection(endPoint, store)];
                    case 1:
                        _a.sent();
                        resolve(true);
                        return [2];
                }
            });
        }); });
    };
    ServerConnectionService.prototype.checkServerConnection = function (endPoint, store) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var error_1;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4, this.httpClient.get(endPoint).pipe(operators_1.first()).toPromise()];
                    case 1:
                        _a.sent();
                        return [3, 3];
                    case 2:
                        error_1 = _a.sent();
                        store.serverConnection = error_1.status;
                        return [3, 3];
                    case 3: return [2];
                }
            });
        });
    };
    ServerConnectionService = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [http_1.HttpClient])
    ], ServerConnectionService);
    return ServerConnectionService;
}());
exports.ServerConnectionService = ServerConnectionService;
//# sourceMappingURL=server-connection.service.js.map