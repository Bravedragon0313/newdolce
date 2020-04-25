"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var uuid_1 = require("uuid");
var operators_1 = require("rxjs/operators");
var ObservableResponseSubscriber_1 = require("./ObservableResponseSubscriber");
var ObservableRequest = (function () {
    function ObservableRequest(socket, event, args) {
        this.socket = socket;
        this.event = event;
        this.args = args;
        this.callId = uuid_1.v4();
    }
    ObservableRequest.prototype.run = function () {
        var _this = this;
        return this.socket.connection.pipe(operators_1.first(), operators_1.switchMap(function () {
            var _a;
            (_a = _this.socket).emit.apply(_a, tslib_1.__spreadArrays([_this.event], _this.args, [_this.callId]));
            return _this.socket.connection.pipe(operators_1.exhaustMap(function () {
                var subscriber = new ObservableResponseSubscriber_1.ObservableResponseSubscriber(_this.socket, _this.callId);
                return subscriber.getResponse();
            }));
        }));
    };
    return ObservableRequest;
}());
exports.ObservableRequest = ObservableRequest;
//# sourceMappingURL=ObservableRequest.js.map