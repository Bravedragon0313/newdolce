"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
require("rxjs/add/observable/fromEvent");
var ConnectionStatus;
(function (ConnectionStatus) {
    ConnectionStatus[ConnectionStatus["NotConnected"] = 0] = "NotConnected";
    ConnectionStatus[ConnectionStatus["Disconnected"] = 1] = "Disconnected";
    ConnectionStatus[ConnectionStatus["Connected"] = 2] = "Connected";
    ConnectionStatus[ConnectionStatus["ConnectError"] = 3] = "ConnectError";
})(ConnectionStatus = exports.ConnectionStatus || (exports.ConnectionStatus = {}));
exports.SOCKET_IO = new core_1.InjectionToken('socket.io');
var Socket = (function () {
    function Socket(socketUrl, io) {
        var _this = this;
        this.socketUrl = socketUrl;
        this.io = io;
        this.subscribersCounter = 0;
        this.connectionStatus = rxjs_1.of(ConnectionStatus.NotConnected).pipe(operators_1.merge(this.fromEvent('connect').pipe(operators_1.map(function () { return ConnectionStatus.Connected; })), this.fromEvent('disconnect').pipe(operators_1.map(function () { return ConnectionStatus.Disconnected; })), this.fromEvent('connect_error').pipe(operators_1.map(function () { return ConnectionStatus.ConnectError; }))), operators_1.publishReplay(1), operators_1.refCount());
        this.connection = this.connectionStatus.pipe(operators_1.filter(function (status) { return status === ConnectionStatus.Connected; }));
        this.disconnection = this.connectionStatus.pipe(operators_1.filter(function (status) { return status === ConnectionStatus.Disconnected; }));
        this.connectionErrors = this.connectionStatus.pipe(operators_1.filter(function (status) { return status === ConnectionStatus.ConnectError; }));
        console.log("Socket with url " + socketUrl + " created!");
        var ioCallable = this.io;
        this.ioSocket = ioCallable("" + this.socketUrl, {
            reconnection: false,
        });
        this.connectionStatus
            .pipe(operators_1.filter(function (status) {
            return status === ConnectionStatus.Disconnected ||
                status === ConnectionStatus.ConnectError;
        }), operators_1.delay(1000))
            .subscribe(function () {
            _this.connect();
        });
    }
    Socket.prototype.on = function (eventName, callback) {
        this.ioSocket.on(eventName, callback);
    };
    Socket.prototype.once = function (eventName, callback) {
        this.ioSocket.once(eventName, callback);
    };
    Socket.prototype.connect = function () {
        return this.ioSocket.connect();
    };
    Socket.prototype.disconnect = function (close) {
        return this.ioSocket.disconnect.apply(this.ioSocket, arguments);
    };
    Socket.prototype.emit = function (eventName) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return this.ioSocket.emit.apply(this.ioSocket, arguments);
    };
    Socket.prototype.removeListener = function (eventName, callback) {
        return this.ioSocket.removeListener.apply(this.ioSocket, arguments);
    };
    Socket.prototype.removeAllListeners = function (eventName) {
        return this.ioSocket.removeAllListeners.apply(this.ioSocket, arguments);
    };
    Socket.prototype.fromEvent = function (eventName) {
        var _this = this;
        this.subscribersCounter++;
        return rxjs_1.Observable.create(function (observer) {
            _this.ioSocket.on(eventName, function (data) {
                observer.next(data);
            });
            return function () {
                if (_this.subscribersCounter === 1) {
                    _this.ioSocket.removeListener(eventName);
                }
            };
        }).pipe(operators_1.share());
    };
    return Socket;
}());
exports.Socket = Socket;
//# sourceMappingURL=socket.service.js.map