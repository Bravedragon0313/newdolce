"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const router_1 = require("./router");
const connection_handler_1 = require("../connection-handler");
class RouterHandler {
    constructor(io, router, log) {
        this.io = io;
        this.router = router;
        this.log = log;
        this.routerName = router_1.getRouterName(router);
        this.listeners = router_1.getListeners(router);
    }
    listen() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.log.info(`Starting router listening`, {
                routerName: this.routerName,
                listeners: this.listeners
                    ? this.listeners.map((listener) => listener.name)
                    : null,
            });
            const routerNamespace = this.io.of(`/${this.routerName}`);
            routerNamespace.setMaxListeners(0);
            routerNamespace.on('connection', (socket) => {
                const connectionHandler = new connection_handler_1.ConnectionHandler(socket, this.router, this.log);
                connectionHandler.handle();
            });
        });
    }
}
exports.RouterHandler = RouterHandler;
//# sourceMappingURL=handler.js.map