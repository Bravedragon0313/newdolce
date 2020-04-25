"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ObservableRequest_1 = require("./ObservableRequest");
var Request_1 = require("./Request");
var core_1 = require("@angular/core");
exports.API_URL = new core_1.InjectionToken('api_url');
var Router = (function () {
    function Router(socketFactory, routersService, name, apiUrl) {
        this.routersService = routersService;
        this.name = name;
        this.apiUrl = apiUrl;
        this.socket = socketFactory.build(apiUrl + "/" + name);
        this.routersService.sockets.next(this.socket);
        console.log("Router named " + name + " created!");
    }
    Router.prototype.runAndObserve = function (methodName) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var request = new ObservableRequest_1.ObservableRequest(this.socket, methodName, args);
        return request.run();
    };
    Router.prototype.run = function (methodName) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var request = new Request_1.Request(this.socket, methodName, args);
        return request.run();
    };
    return Router;
}());
exports.Router = Router;
//# sourceMappingURL=router.service.js.map