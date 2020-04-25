"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const InvitesService_1 = require("../../services/invites/InvitesService");
const admins_1 = require("../../services/admins");
const carriers_1 = require("../../services/carriers");
const invites_1 = require("../../services/invites");
const orders_1 = require("../../services/orders");
const users_1 = require("../../services/users");
const warehouses_1 = require("../../services/warehouses");
const devices_1 = require("../../services/devices");
const products_1 = require("../../services/products");
let DataResolver = class DataResolver {
    constructor(_adminsService, _carriersService, _inviteRequestsService, _invitesService, _ordersService, _usersService, _storesService, _devicesService, _productsService, _productsCategoriesService) {
        this._adminsService = _adminsService;
        this._carriersService = _carriersService;
        this._inviteRequestsService = _inviteRequestsService;
        this._invitesService = _invitesService;
        this._ordersService = _ordersService;
        this._usersService = _usersService;
        this._storesService = _storesService;
        this._devicesService = _devicesService;
        this._productsService = _productsService;
        this._productsCategoriesService = _productsCategoriesService;
    }
    clearAll() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            [
                this._adminsService,
                this._carriersService,
                this._devicesService,
                this._invitesService,
                this._inviteRequestsService,
                this._ordersService,
                this._productsService,
                this._productsCategoriesService,
                this._usersService,
                this._storesService,
            ].forEach((service) => {
                service.Model.updateMany({}, { isDeleted: true }, (err, raw) => {
                    if (err !== null) {
                        const collectionName = service.constructor.name.replace('Service', '');
                        throw new Error(`Cannot update '${collectionName}' collection`);
                    }
                });
            });
            return true;
        });
    }
};
tslib_1.__decorate([
    graphql_1.Query('clearAll'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], DataResolver.prototype, "clearAll", null);
DataResolver = tslib_1.__decorate([
    graphql_1.Resolver('Data'),
    tslib_1.__metadata("design:paramtypes", [admins_1.AdminsService,
        carriers_1.CarriersService,
        invites_1.InvitesRequestsService,
        InvitesService_1.InvitesService,
        orders_1.OrdersService,
        users_1.UsersService,
        warehouses_1.WarehousesService,
        devices_1.DevicesService,
        products_1.ProductsService,
        products_1.ProductsCategoriesService])
], DataResolver);
exports.DataResolver = DataResolver;
//# sourceMappingURL=data.resolver.js.map