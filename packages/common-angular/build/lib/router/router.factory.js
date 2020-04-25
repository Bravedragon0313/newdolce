"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_service_1 = require("./router.service");
var routers_service_1 = require("./routers.service");
var socket_factory_1 = require("../socket.factory");
var RouterFactory = (function () {
    function RouterFactory(socketFactory, routersService, apiUrl) {
        this.socketFactory = socketFactory;
        this.routersService = routersService;
        this.apiUrl = apiUrl;
    }
    RouterFactory.prototype.create = function (name) {
        return new router_service_1.Router(this.socketFactory, this.routersService, name, this.apiUrl);
    };
    RouterFactory = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__param(2, core_1.Inject(router_service_1.API_URL)),
        tslib_1.__metadata("design:paramtypes", [socket_factory_1.SocketFactory,
            routers_service_1.RoutersService, String])
    ], RouterFactory);
    return RouterFactory;
}());
exports.RouterFactory = RouterFactory;
//# sourceMappingURL=router.factory.js.map