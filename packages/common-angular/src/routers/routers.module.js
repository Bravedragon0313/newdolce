"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var lib_1 = require("../lib");
var carrier_orders_router_service_1 = require("./carrier-orders-router.service");
var invite_request_router_service_1 = require("./invite-request-router.service");
var product_router_service_1 = require("./product-router.service");
var invite_router_service_1 = require("./invite-router.service");
var geo_location_warehouses_router_service_1 = require("./geo-location-warehouses-router.service");
var geo_location_products_router_service_1 = require("./geo-location-products-router.service");
var carrier_router_service_1 = require("./carrier-router.service");
var device_router_service_1 = require("./device-router.service");
var geo_location_orders_router_service_1 = require("./geo-location-orders-router.service");
var order_router_service_1 = require("./order-router.service");
var user_router_service_1 = require("./user-router.service");
var warehouse_carriers_router_service_1 = require("./warehouse-carriers-router.service");
var warehouse_products_router_service_1 = require("./warehouse-products-router.service");
var warehouse_router_service_1 = require("./warehouse-router.service");
var user_products_router_service_1 = require("./user-products-router.service");
var warehouse_orders_router_service_1 = require("./warehouse-orders-router.service");
var user_orders_router_service_1 = require("./user-orders-router.service");
var user_auth_router_service_1 = require("./user-auth-router.service");
var geo_location_router_service_1 = require("./geo-location-router.service");
var RoutersModule = (function () {
    function RoutersModule() {
    }
    RoutersModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [lib_1.CommonLibModule],
            exports: [],
            declarations: [],
            providers: [
                carrier_orders_router_service_1.CarrierOrdersRouter,
                carrier_router_service_1.CarrierRouter,
                device_router_service_1.DeviceRouter,
                geo_location_orders_router_service_1.GeoLocationOrdersRouter,
                geo_location_products_router_service_1.GeoLocationProductsRouter,
                geo_location_warehouses_router_service_1.GeoLocationWarehousesRouter,
                geo_location_router_service_1.GeoLocationRouter,
                invite_request_router_service_1.InviteRequestRouter,
                invite_router_service_1.InviteRouter,
                order_router_service_1.OrderRouter,
                product_router_service_1.ProductRouter,
                user_orders_router_service_1.UserOrdersRouter,
                user_router_service_1.UserRouter,
                user_auth_router_service_1.UserAuthRouter,
                warehouse_carriers_router_service_1.WarehouseCarriersRouter,
                warehouse_router_service_1.WarehouseRouter,
                warehouse_products_router_service_1.WarehouseProductsRouter,
                warehouse_orders_router_service_1.WarehouseOrdersRouter,
                user_products_router_service_1.UserProductsRouter,
            ],
        })
    ], RoutersModule);
    return RoutersModule;
}());
exports.RoutersModule = RoutersModule;
//# sourceMappingURL=routers.module.js.map