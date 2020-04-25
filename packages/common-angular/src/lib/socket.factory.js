"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var socket_service_1 = require("./socket.service");
var core_1 = require("@angular/core");
var SocketFactory = (function () {
    function SocketFactory(io) {
        this.io = io;
    }
    SocketFactory.prototype.build = function (socketUrl) {
        return new socket_service_1.Socket(socketUrl, this.io);
    };
    SocketFactory = tslib_1.__decorate([
        tslib_1.__param(0, core_1.Inject(socket_service_1.SOCKET_IO)),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], SocketFactory);
    return SocketFactory;
}());
exports.SocketFactory = SocketFactory;
//# sourceMappingURL=socket.factory.js.map