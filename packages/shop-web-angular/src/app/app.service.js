"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var AppState = (function () {
    function AppState() {
        this._state = {};
    }
    Object.defineProperty(AppState.prototype, "state", {
        get: function () {
            return (this._state = this._clone(this._state));
        },
        set: function (value) {
            throw new Error('do not mutate the `.state` directly');
        },
        enumerable: true,
        configurable: true
    });
    AppState.prototype.get = function (prop) {
        var state = this.state;
        return state.hasOwnProperty(prop) ? state[prop] : state;
    };
    AppState.prototype.set = function (prop, value) {
        return (this._state[prop] = value);
    };
    AppState.prototype._clone = function (object) {
        return JSON.parse(JSON.stringify(object));
    };
    AppState = tslib_1.__decorate([
        core_1.Injectable()
    ], AppState);
    return AppState;
}());
exports.AppState = AppState;
//# sourceMappingURL=app.service.js.map