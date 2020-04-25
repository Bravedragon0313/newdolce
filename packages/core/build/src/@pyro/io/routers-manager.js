"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const Log_1 = require("../../helpers/Log");
const inversify_1 = require("inversify");
const router_1 = require("./router/router");
const handler_1 = require("./router/handler");
let RoutersManager = class RoutersManager {
    constructor(routers) {
        this.routers = routers;
        this.log = Log_1.createEverLogger({ name: 'io' });
    }
    startListening(io) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.io = io;
            this.routers.forEach((router) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                yield this.startRouterListening(router);
            }));
        });
    }
    startRouterListening(router) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const routerHandler = new handler_1.RouterHandler(this.io, router, this.log);
                yield routerHandler.listen();
            }
            catch (err) {
                this.log.fatal("Couldn't start router listening!", { err });
            }
        });
    }
};
RoutersManager = tslib_1.__decorate([
    inversify_1.injectable(),
    tslib_1.__param(0, inversify_1.multiInject(router_1.RouterSymbol)),
    tslib_1.__metadata("design:paramtypes", [Array])
], RoutersManager);
exports.RoutersManager = RoutersManager;
//# sourceMappingURL=routers-manager.js.map