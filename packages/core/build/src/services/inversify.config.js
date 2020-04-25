"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
require("reflect-metadata");
const inversify_1 = require("inversify");
const lodash_1 = tslib_1.__importDefault(require("lodash"));
const io_1 = require("@pyro/io");
const carriers_1 = require("./carriers");
const users_1 = require("./users");
const products_1 = require("./products");
const warehouses_1 = require("./warehouses");
const orders_1 = require("./orders");
const invites_1 = require("./invites");
const geo_locations_1 = require("./geo-locations");
const devices_1 = require("./devices");
const IService_1 = require("./IService");
const config_service_1 = require("../config/config.service");
const services_app_1 = require("./services.app");
const auth_1 = require("./auth");
const UsersAuthService_1 = require("./users/UsersAuthService");
const admins_1 = require("./admins");
const typeorm_1 = require("typeorm");
const Admin_1 = tslib_1.__importDefault(require("@modules/server.common/entities/Admin"));
const Device_1 = tslib_1.__importDefault(require("@modules/server.common/entities/Device"));
const FakeOrdersService_1 = require("./fake-data/FakeOrdersService");
const CurrencyService_1 = require("./currency/CurrencyService");
function getRepository(t) {
    const conn = typeorm_1.getConnection('typeorm');
    return conn.getRepository(t);
}
const bindings = new inversify_1.ContainerModule((bind) => {
    bind('AdminRepository')
        .toDynamicValue(() => {
        return getRepository(Admin_1.default);
    })
        .inRequestScope();
    bind('DeviceRepository')
        .toDynamicValue(() => {
        return getRepository(Device_1.default);
    })
        .inRequestScope();
    lodash_1.default.each([
        config_service_1.ConfigService,
        users_1.UserCommandService,
        admins_1.AdminsService,
        carriers_1.CarriersOrdersService,
        carriers_1.CarriersService,
        devices_1.DevicesService,
        geo_locations_1.GeoLocationsOrdersService,
        geo_locations_1.GeoLocationsProductsService,
        geo_locations_1.GeoLocationsWarehousesService,
        geo_locations_1.GeoLocationsService,
        invites_1.InvitesRequestsService,
        invites_1.InvitesService,
        orders_1.OrdersService,
        products_1.ProductsService,
        products_1.ProductsCategoriesService,
        users_1.UsersOrdersService,
        users_1.UsersService,
        UsersAuthService_1.UsersAuthService,
        users_1.SocialStrategiesService,
        users_1.SocialRegisterService,
        warehouses_1.WarehousesOrdersService,
        warehouses_1.WarehousesProductsService,
        warehouses_1.WarehousesUsersService,
        warehouses_1.WarehousesCarriersService,
        warehouses_1.WarehousesService,
        users_1.UsersProductsService,
        auth_1.AuthenticationService,
        FakeOrdersService_1.FakeOrdersService,
        CurrencyService_1.CurrenciesService,
    ], (Service) => {
        bind(Service).to(Service).inSingletonScope();
        bind(IService_1.ServiceSymbol).toFactory((context) => {
            return context.container.get(Service);
        });
        bind(io_1.RouterSymbol).toFactory((context) => {
            return context.container.get(Service);
        });
    });
    bind(auth_1.AuthService).toSelf();
    bind('Factory<AuthService>').toFactory(auth_1.authServiceFactory);
    bind('RoutersManager')
        .to(io_1.RoutersManager)
        .inSingletonScope();
    bind(services_app_1.ServicesApp).toSelf().inSingletonScope();
});
const container = new inversify_1.Container();
container.load(bindings);
exports.servicesContainer = container;
//# sourceMappingURL=inversify.config.js.map