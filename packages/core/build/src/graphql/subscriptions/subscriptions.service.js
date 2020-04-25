"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const subscription_constants_1 = require("./subscription.constants");
const subscriptions_transport_ws_1 = require("subscriptions-transport-ws");
const graphql_1 = require("graphql");
let SubscriptionsService = class SubscriptionsService {
    constructor(ws) {
        this.ws = ws;
    }
    createSubscriptionServer(schema, options = {}, socketOptions = {}) {
        this.subscriptionServer = new subscriptions_transport_ws_1.SubscriptionServer(Object.assign({ execute: graphql_1.execute,
            subscribe: graphql_1.subscribe,
            schema }, options), Object.assign({ server: this.ws, path: '/subscriptions' }, socketOptions));
    }
    onModuleDestroy() {
        this.ws.close();
    }
};
SubscriptionsService = tslib_1.__decorate([
    common_1.Injectable(),
    tslib_1.__param(0, common_1.Inject(subscription_constants_1.SUBSCRIPTION_SERVER)),
    tslib_1.__metadata("design:paramtypes", [Object])
], SubscriptionsService);
exports.SubscriptionsService = SubscriptionsService;
//# sourceMappingURL=subscriptions.service.js.map