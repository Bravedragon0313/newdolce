"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const inversify_1 = require("inversify");
const lodash_1 = tslib_1.__importDefault(require("lodash"));
const orders_1 = require("../orders");
const UsersService_1 = require("./UsersService");
const Log_1 = require("../../helpers/Log");
const io_1 = require("@pyro/io");
const db_server_1 = require("@pyro/db-server");
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const mongoose = require("mongoose");
const OrderCarrierStatus_1 = tslib_1.__importDefault(require("@modules/server.common/enums/OrderCarrierStatus"));
const OrderWarehouseStatus_1 = tslib_1.__importDefault(require("@modules/server.common/enums/OrderWarehouseStatus"));
let UsersOrdersService = class UsersOrdersService {
    constructor(ordersService, usersService) {
        this.ordersService = ordersService;
        this.usersService = usersService;
        this.log = Log_1.createEverLogger({
            name: 'usersOrdersService',
        });
    }
    get(userId) {
        return rxjs_1.concat(rxjs_1.of(null), this.ordersService.existence.pipe(operators_1.filter((e) => this._shouldPull(userId, e)), operators_1.share())).pipe(operators_1.exhaustMap(() => this.getCurrent(userId)));
    }
    getCurrent(userId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const orders = yield this.ordersService.find({
                'user._id': new mongoose.Types.ObjectId(userId),
                isDeleted: { $eq: false },
            });
            return lodash_1.default.orderBy(orders, [(order) => order.createdAt, (order) => order.orderNumber], ['desc', 'desc']);
        });
    }
    getCustomerMetrics(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const completedUserOrders = yield this.ordersService.Model.find({
                $and: [
                    { 'user._id': id },
                    {
                        $or: [
                            { carrierStatus: OrderCarrierStatus_1.default.DeliveryCompleted },
                            {
                                warehouseStatus: OrderWarehouseStatus_1.default.GivenToCustomer,
                            },
                        ],
                    },
                    { isCancelled: false },
                ],
            }).select({ products: 1 });
            const completedOrdersTotalSum = completedUserOrders
                .map((o) => {
                return o.products
                    .map((p) => {
                    return p.price * p.count;
                })
                    .reduce((a, b) => a + b, 0);
            })
                .reduce((a, b) => a + b, 0);
            const totalOrders = yield this.ordersService.Model.find({
                'user._id': id,
            })
                .countDocuments()
                .exec();
            const canceledOrders = yield this.ordersService.Model.find({
                $and: [{ 'user._id': id }, { isCancelled: true }],
            })
                .countDocuments()
                .exec();
            return {
                totalOrders,
                canceledOrders,
                completedOrdersTotalSum,
            };
        });
    }
    _shouldPull(userId, event) {
        switch (event.type) {
            case db_server_1.ExistenceEventType.Created:
                return event.value != null && event.value.user.id === userId;
            case db_server_1.ExistenceEventType.Updated:
                return ((event.value != null && event.value.user.id === userId) ||
                    (event.lastValue != null &&
                        event.lastValue.user.id === userId));
            case db_server_1.ExistenceEventType.Removed:
                return (event.lastValue != null &&
                    event.lastValue.user.id === userId);
        }
    }
};
tslib_1.__decorate([
    io_1.observableListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", rxjs_1.Observable)
], UsersOrdersService.prototype, "get", null);
UsersOrdersService = tslib_1.__decorate([
    inversify_1.injectable(),
    io_1.routerName('user-orders'),
    tslib_1.__param(0, inversify_1.inject(new inversify_1.LazyServiceIdentifer(() => orders_1.OrdersService))),
    tslib_1.__param(1, inversify_1.inject(new inversify_1.LazyServiceIdentifer(() => UsersService_1.UsersService))),
    tslib_1.__metadata("design:paramtypes", [orders_1.OrdersService,
        UsersService_1.UsersService])
], UsersOrdersService);
exports.UsersOrdersService = UsersOrdersService;
//# sourceMappingURL=UsersOrdersService.js.map