"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var environment_1 = require("../../environments/environment");
var store_service_1 = require("../../services/store.service");
var common_1 = require("@angular/common");
var server_connection_service_1 = require("@modules/client.common.angular2/services/server-connection.service");
var ServerDownPage = (function () {
    function ServerDownPage(store, location, serverConnectionService) {
        this.store = store;
        this.location = location;
        this.serverConnectionService = serverConnectionService;
        this.noInternetLogo = environment_1.environment.NO_INTERNET_LOGO;
        this.testConnection();
    }
    ServerDownPage.prototype.testConnection = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                this.interval = setInterval(function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                    return tslib_1.__generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4, this.serverConnectionService.checkServerConnection(environment_1.environment.SERVICES_ENDPOINT, this.store)];
                            case 1:
                                _a.sent();
                                if (Number(this.store.serverConnection) !== 0) {
                                    clearInterval(this.interval);
                                    this.location.back();
                                }
                                return [2];
                        }
                    });
                }); }, 5000);
                return [2];
            });
        });
    };
    ServerDownPage.prototype.ngOnDestroy = function () {
        clearInterval(this.interval);
    };
    ServerDownPage = tslib_1.__decorate([
        core_1.Component({
            styleUrls: ['./server-down.page.scss'],
            templateUrl: 'server-down.page.html',
        }),
        tslib_1.__metadata("design:paramtypes", [store_service_1.Store,
            common_1.Location,
            server_connection_service_1.ServerConnectionService])
    ], ServerDownPage);
    return ServerDownPage;
}());
exports.ServerDownPage = ServerDownPage;
//# sourceMappingURL=server-down.page.js.map