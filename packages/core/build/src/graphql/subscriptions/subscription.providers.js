"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("http");
const subscription_constants_1 = require("./subscription.constants");
exports.createSubscriptionProviders = (port = 5050) => [
    {
        provide: subscription_constants_1.SUBSCRIPTION_SERVER,
        useFactory: () => {
            const server = http_1.createServer();
            const closeServer = () => {
                try {
                    if (server != null) {
                        server.close(() => {
                            process.exit(0);
                        });
                    }
                }
                catch (err) {
                    process.exit(0);
                }
            };
            process
                .on('SIGINT', () => closeServer())
                .on('SIGTERM', () => closeServer());
            return new Promise((resolve) => server.listen(port, () => resolve(server)));
        },
    },
];
//# sourceMappingURL=subscription.providers.js.map