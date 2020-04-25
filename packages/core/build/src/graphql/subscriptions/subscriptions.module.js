"use strict";
var SubscriptionsModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const subscription_providers_1 = require("./subscription.providers");
const subscriptions_service_1 = require("./subscriptions.service");
let SubscriptionsModule = SubscriptionsModule_1 = class SubscriptionsModule {
    static forRoot(port) {
        const providers = subscription_providers_1.createSubscriptionProviders(port);
        return {
            module: SubscriptionsModule_1,
            providers: [...providers],
            exports: [...providers],
        };
    }
};
SubscriptionsModule = SubscriptionsModule_1 = tslib_1.__decorate([
    common_1.Module({
        providers: [subscriptions_service_1.SubscriptionsService],
        exports: [subscriptions_service_1.SubscriptionsService],
    })
], SubscriptionsModule);
exports.SubscriptionsModule = SubscriptionsModule;
//# sourceMappingURL=subscriptions.module.js.map