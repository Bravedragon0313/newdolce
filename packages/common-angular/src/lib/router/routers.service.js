"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var socket_service_1 = require("../socket.service");
var RoutersService = (function () {
    function RoutersService() {
        this.sockets = new rxjs_1.ReplaySubject();
        this.isConnectionProblem = this.sockets.pipe(operators_1.map(function (socket) {
            return socket.connectionStatus.pipe(operators_1.map(function (status) {
                return status === socket_service_1.ConnectionStatus.Disconnected ||
                    status === socket_service_1.ConnectionStatus.ConnectError;
            }));
        }), operators_1.scan(function (isAnyErrorObs, isSpecificErrorObs) {
            return rxjs_1.combineLatest(isAnyErrorObs, isSpecificErrorObs).pipe(operators_1.map(function (_a) {
                var isAnyError = _a[0], isSpecificError = _a[1];
                return isAnyError || isSpecificError;
            }));
        }, rxjs_1.of(false)), operators_1.mergeAll(), operators_1.publishReplay(1), operators_1.refCount());
    }
    return RoutersService;
}());
exports.RoutersService = RoutersService;
//# sourceMappingURL=routers.service.js.map