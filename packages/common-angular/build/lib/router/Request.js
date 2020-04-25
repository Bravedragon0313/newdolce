"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var Request = (function () {
    function Request(socket, event, args) {
        this.socket = socket;
        this.event = event;
        this.args = args;
    }
    Request.prototype.run = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                return [2, new Promise(function (resolve, reject) {
                        var _a;
                        (_a = _this.socket).emit.apply(_a, tslib_1.__spreadArrays([_this.event], _this.args, [function (err, res) {
                                if (err != null) {
                                    reject(_this.deserializeError(err));
                                }
                                else {
                                    resolve(res);
                                }
                            }]));
                    })];
            });
        });
    };
    Request.prototype.deserializeError = function (error) {
        if (error.__isError__) {
            var _error = new Error(error.message);
            _error.name = error.name;
            return _error;
        }
        else {
            return error;
        }
    };
    return Request;
}());
exports.Request = Request;
//# sourceMappingURL=Request.js.map