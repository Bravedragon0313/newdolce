"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var socket_service_1 = require("./socket.service");
var socket_io_client_1 = tslib_1.__importDefault(require("socket.io-client"));
var router_1 = require("./router");
var socket_factory_1 = require("./socket.factory");
var CommonLibModule = (function () {
    function CommonLibModule() {
    }
    CommonLibModule = tslib_1.__decorate([
        core_1.NgModule({
            providers: [
                { provide: socket_service_1.SOCKET_IO, useValue: socket_io_client_1.default },
                socket_factory_1.SocketFactory,
                router_1.RouterFactory,
                router_1.RoutersService,
            ],
            exports: [],
        })
    ], CommonLibModule);
    return CommonLibModule;
}());
exports.CommonLibModule = CommonLibModule;
//# sourceMappingURL=lib.module.js.map