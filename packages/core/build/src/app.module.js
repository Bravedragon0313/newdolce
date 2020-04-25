"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const mongoose_1 = tslib_1.__importDefault(require("mongoose"));
const graphql_1 = require("@nestjs/graphql");
const subscriptions_module_1 = require("./graphql/subscriptions/subscriptions.module");
const subscriptions_service_1 = require("./graphql/subscriptions/subscriptions.service");
const invites_module_1 = require("./graphql/invites/invites.module");
const devices_module_1 = require("./graphql/devices/devices.module");
const config_module_1 = require("./config/config.module");
const product_module_1 = require("./controllers/product/product.module");
const users_module_1 = require("./graphql/users/users.module");
const warehouses_module_1 = require("./graphql/warehouses/warehouses.module");
const orders_module_1 = require("./graphql/orders/orders.module");
const carriers_module_1 = require("./graphql/carriers/carriers.module");
const products_module_1 = require("./graphql/products/products.module");
const env_1 = require("./env");
const Log_1 = require("./helpers/Log");
const cqrs_1 = require("@nestjs/cqrs");
const test_controller_1 = require("./controllers/test.controller");
const core_1 = require("@nestjs/core");
const geo_locations_module_1 = require("./graphql/geo-locations/geo-locations.module");
const scalars_1 = require("./graphql/scalars");
const warehouses_products_modules_1 = require("./graphql/warehouses-products/warehouses-products.modules");
const warehouses_carriers_module_1 = require("./graphql/warehouses-carriers/warehouses-carriers.module");
const warehouses_orders_module_1 = require("./graphql/warehouses-orders/warehouses-orders.module");
const invites_requests_module_1 = require("./graphql/invites-requests/invites-requests.module");
const auth_module_1 = require("./auth/auth.module");
const admins_module_1 = require("./graphql/admin/admins.module");
const data_module_1 = require("./graphql/data/data.module");
const carriers_orders_module_1 = require("./graphql/carriers-orders/carriers-orders.module");
const geo_location_orders_module_1 = require("./graphql/geo-locations/orders/geo-location-orders.module");
const geo_location_merchants_module_1 = require("./graphql/geo-locations/merchants/geo-location-merchants.module");
const apollo_server_express_1 = require("apollo-server-express");
const merge_graphql_schemas_1 = require("merge-graphql-schemas");
const users_1 = require("./services/users");
const typeorm_1 = require("@nestjs/typeorm");
const services_module_1 = require("./services/services.module");
const services_app_1 = require("./services/services.app");
const currency_module_1 = require("./graphql/currency/currency.module");
const port = env_1.env.GQLPORT;
const log = Log_1.createEverLogger({
    name: 'ApplicationModule from NestJS',
});
exports.CommandHandlers = [users_1.GetAboutUsHandler];
exports.EventHandlers = [];
const entities = services_app_1.ServicesApp.getEntities();
let ApplicationModule = class ApplicationModule {
    constructor(subscriptionsService, moduleRef, command$, event$) {
        this.subscriptionsService = subscriptionsService;
        this.moduleRef = moduleRef;
        this.command$ = command$;
        this.event$ = event$;
    }
    onModuleInit() {
        this.event$.register(exports.EventHandlers);
        this.command$.register(exports.CommandHandlers);
    }
    configure(consumer) {
        const { ObjectId } = mongoose_1.default.Types;
        ObjectId.prototype.valueOf = function () {
            return this.toString();
        };
        log.info(`GraphQL playground available at http://localhost/graphql`);
    }
    createServer(schema) {
        return new apollo_server_express_1.ApolloServer({
            schema,
            context: ({ req, res }) => ({
                req,
            }),
            playground: {
                endpoint: `http://localhost/graphql`,
                subscriptionEndpoint: `ws://localhost/subscriptions`,
                settings: {
                    'editor.theme': 'dark',
                },
            },
        });
    }
    createSchema() {
        const graphqlPath = './**/*.graphql';
        console.log(`Searching for *.graphql files`);
        const typesArray = merge_graphql_schemas_1.fileLoader(graphqlPath);
        const typeDefs = merge_graphql_schemas_1.mergeTypes(typesArray, { all: true });
        const schema = apollo_server_express_1.makeExecutableSchema({
            typeDefs,
            resolvers: Object.assign({}, scalars_1.SCALARS),
        });
        return schema;
    }
};
ApplicationModule = tslib_1.__decorate([
    common_1.Module({
        controllers: [test_controller_1.TestController],
        providers: [...exports.CommandHandlers, ...exports.EventHandlers],
        imports: [
            data_module_1.DataModule,
            services_module_1.ServicesModule,
            cqrs_1.CqrsModule,
            auth_module_1.AuthModule,
            admins_module_1.AdminsModule,
            config_module_1.ConfigModule,
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mongodb',
                host: 'localhost',
                database: 'test',
                entities,
                synchronize: true,
                useNewUrlParser: true,
                autoReconnect: true,
                logging: true,
            }),
            typeorm_1.TypeOrmModule.forFeature(entities),
            subscriptions_module_1.SubscriptionsModule.forRoot(env_1.env.GQLPORT_SUBSCRIPTIONS),
            graphql_1.GraphQLModule.forRoot({
                typePaths: ['./**/*.graphql'],
                installSubscriptionHandlers: true,
                debug: true,
                playground: true,
                context: ({ req, res }) => ({
                    req,
                }),
            }),
            invites_module_1.InvitesModule,
            devices_module_1.DevicesModule,
            product_module_1.ProductModule,
            warehouses_module_1.WarehousesModule,
            geo_locations_module_1.GeoLocationsModule,
            users_module_1.UsersModule,
            orders_module_1.OrdersModule,
            carriers_module_1.CarriersModule,
            carriers_orders_module_1.CarriersOrdersModule,
            products_module_1.ProductsModule,
            warehouses_products_modules_1.WarehousesProductsModule,
            warehouses_orders_module_1.WarehousesOrdersModule,
            warehouses_carriers_module_1.WarehousesCarriersModule,
            invites_requests_module_1.InvitesRequestsModule,
            geo_location_orders_module_1.GeoLocationOrdersModule,
            geo_location_merchants_module_1.GeoLocationMerchantsModule,
            currency_module_1.CurrencyModule,
        ],
    }),
    tslib_1.__metadata("design:paramtypes", [subscriptions_service_1.SubscriptionsService,
        core_1.ModuleRef,
        cqrs_1.CommandBus,
        cqrs_1.EventBus])
], ApplicationModule);
exports.ApplicationModule = ApplicationModule;
//# sourceMappingURL=app.module.js.map