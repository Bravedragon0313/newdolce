"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const lodash_1 = tslib_1.__importDefault(require("lodash"));
const base_1 = require("./base");
class ObservableListenerHandler extends base_1.BaseListenerHandler {
    constructor(router, listener, socket, log) {
        super(router, listener, socket, log);
        this.router = router;
        this.listener = listener;
        this.socket = socket;
        this.log = log;
    }
    handleRequest(_args) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const callId = lodash_1.default.last(_args);
            const args = this.serializer(lodash_1.default.initial(_args));
            this.logCall(callId, args);
            const observable = Reflect.apply(this.listener, this.router, args);
            this.socket.on(`${callId}_subscribe`, (subscriptionId) => {
                const subscription = observable.subscribe({
                    next: (value) => {
                        this.log.info(Object.assign(Object.assign({}, this.baseLogDetails), { callId,
                            value }), `Listener emitted next value`);
                        this.socket.emit(`${subscriptionId}_next`, value);
                    },
                    error: (err) => {
                        this.log.error(Object.assign(Object.assign({}, this.baseLogDetails), { callId,
                            err }), `Listener thrown error!`);
                        this.socket.emit(`${subscriptionId}_error`, this.serializeError(err));
                    },
                    complete: () => {
                        this.log.info(Object.assign(Object.assign({}, this.baseLogDetails), { callId }), `Listener completed`);
                        this.socket.emit(`_${subscriptionId}_complete`);
                    },
                });
                this.socket.on(`${subscriptionId}_unsubscribe`, () => subscription.unsubscribe());
                this.socket.on('disconnect', () => subscription.unsubscribe());
            });
        });
    }
}
exports.ObservableListenerHandler = ObservableListenerHandler;
//# sourceMappingURL=observable.js.map