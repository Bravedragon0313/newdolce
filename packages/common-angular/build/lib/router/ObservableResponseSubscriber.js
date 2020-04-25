"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var uuid_1 = require("uuid");
var operators_1 = require("rxjs/operators");
var rxjs_1 = require("rxjs");
var ObservableResponseSubscriber = (function () {
    function ObservableResponseSubscriber(socket, callId) {
        this.socket = socket;
        this.callId = callId;
        this.subscriptionId = uuid_1.v4();
        this.response = this.createResponseObservable();
    }
    ObservableResponseSubscriber.prototype.getResponse = function () {
        return this.response;
    };
    ObservableResponseSubscriber.prototype.createResponseObservable = function () {
        var _this = this;
        return rxjs_1.Observable.create(function () {
            _this.socket.emit(_this.callId + "_subscribe", _this.subscriptionId);
            return function () {
                _this.socket.emit(_this.subscriptionId + "_unsubscribe");
            };
        }).pipe(operators_1.merge(this.nexts(), this.errors()), operators_1.takeUntil(this.completes()), operators_1.share());
    };
    ObservableResponseSubscriber.prototype.nexts = function () {
        return this.socket.fromEvent(this.subscriptionId + "_next");
    };
    ObservableResponseSubscriber.prototype.errors = function () {
        var _this = this;
        return this.socket
            .fromEvent(this.subscriptionId + "_error")
            .pipe(operators_1.exhaustMap(function (error) { return rxjs_1.throwError(_this.deserializeError(error)); }));
    };
    ObservableResponseSubscriber.prototype.completes = function () {
        return this.socket.fromEvent(this.subscriptionId + "_complete");
    };
    ObservableResponseSubscriber.prototype.deserializeError = function (error) {
        if (error.__isError__) {
            var _error = new Error(error.message);
            _error.name = error.name;
            return _error;
        }
        else {
            return error;
        }
    };
    return ObservableResponseSubscriber;
}());
exports.ObservableResponseSubscriber = ObservableResponseSubscriber;
//# sourceMappingURL=ObservableResponseSubscriber.js.map