"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const uuid_1 = require("uuid");
const lodash_1 = tslib_1.__importDefault(require("lodash"));
const base_1 = require("./base");
class AsyncListenerHandler extends base_1.BaseListenerHandler {
    constructor(router, listener, socket, log) {
        super(router, listener, socket, log);
        this.router = router;
        this.listener = listener;
        this.socket = socket;
        this.log = log;
    }
    handleRequest(_args) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const callId = uuid_1.v1();
            const callback = lodash_1.default.last(_args);
            const args = this.serializer(lodash_1.default.initial(_args));
            this.logCall(callId, args);
            try {
                const data = yield this.listener.apply(this.router, args);
                this.log.info(Object.assign(Object.assign({}, this.baseLogDetails), { callId, result: data }), `Listener completed`);
                callback(null, data);
            }
            catch (err) {
                this.log.error(Object.assign(Object.assign({}, this.baseLogDetails), { callId,
                    err }), `Listener thrown error!`);
                callback(this.serializeError(err), null);
            }
        });
    }
}
exports.AsyncListenerHandler = AsyncListenerHandler;
//# sourceMappingURL=async.js.map