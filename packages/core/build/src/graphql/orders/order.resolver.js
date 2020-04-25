"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const graphql_1 = require("@nestjs/graphql");
const CarriersService_1 = tslib_1.__importDefault(require("../../services/carriers/CarriersService"));
const Order_1 = tslib_1.__importDefault(require("@modules/server.common/entities/Order"));
const operators_1 = require("rxjs/operators");
const OrderCarrierStatus_1 = tslib_1.__importDefault(require("@modules/server.common/enums/OrderCarrierStatus"));
const OrderWarehouseStatus_1 = tslib_1.__importDefault(require("@modules/server.common/enums/OrderWarehouseStatus"));
const warehouses_1 = require("../../services/warehouses");
const orders_1 = require("../../services/orders");
const users_1 = require("../../services/users");
const products_1 = require("../../services/products");
const lodash_1 = tslib_1.__importDefault(require("lodash"));
const bson_1 = require("bson");
const FakeOrdersService_1 = require("../../services/fake-data/FakeOrdersService");
let OrderResolver = class OrderResolver {
    constructor(_ordersService, _carriersService, _warehousesService, _usersService, _productsService, _fakeOrdersService) {
        this._ordersService = _ordersService;
        this._carriersService = _carriersService;
        this._warehousesService = _warehousesService;
        this._usersService = _usersService;
        this._productsService = _productsService;
        this._fakeOrdersService = _fakeOrdersService;
        this._getRandomProduct = (orderCount, products) => {
            return products[orderCount % products.length];
        };
        this._getRandomCustomer = (orderCount, customers) => {
            if (orderCount < customers.length) {
                return customers[orderCount];
            }
            else {
                return customers[orderCount % customers.length];
            }
        };
        this._getRandomCarrierId = (orderCount, carriers) => {
            return carriers[orderCount % carriers.length].id;
        };
        this._prepareOrderFieldsValues = (orderCount) => {
            const hasCarrier = Math.random() > 0.07;
            const orderIsPaid = Math.random() > 0.15;
            const numberOfProductsToOrder = orderCount % 4 || 1;
            return { numberOfProductsToOrder, hasCarrier, orderIsPaid };
        };
        this._getRandomOrderDate = (orderCount) => {
            const orderDate = new Date();
            orderDate.setFullYear(orderDate.getFullYear() - Math.round(Math.random() * 5));
            const dateNow = new Date();
            const isCurrentYear = orderDate.getFullYear() === dateNow.getFullYear();
            const months = isCurrentYear ? Number(dateNow.getMonth()) : 11;
            orderDate.setMonth(months > 0 ? orderCount % months : 0);
            const isCurrentMonth = orderDate.getMonth() === dateNow.getMonth() && isCurrentYear;
            const days = isCurrentMonth ? Number(dateNow.getDate()) : 31;
            orderDate.setDate(orderCount % days);
            const isCurrentDay = orderDate.getDate() === dateNow.getDate() &&
                isCurrentYear &&
                isCurrentMonth;
            const hours = isCurrentDay ? Number(dateNow.getHours()) : 24;
            orderDate.setHours(orderCount % hours);
            return orderDate;
        };
        this._setupOrderProducts = (products) => {
            let productCount = 1;
            const orderProducts = [];
            for (const p of products) {
                const productPrice = Math.round(Math.random() * 15);
                orderProducts.push({
                    count: 2,
                    isManufacturing: true,
                    isCarrierRequired: true,
                    isDeliveryRequired: true,
                    price: productPrice,
                    initialPrice: productPrice,
                    product: p,
                });
                if (productCount >= 3) {
                    break;
                }
                productCount += 1;
            }
            return orderProducts;
        };
        this._setupAvailableOrdersToCreate = (stores, products, users) => {
            const orders = [];
            for (let orderNumber = 1; orderNumber <= 30; orderNumber += 1) {
                const orderStore = stores[lodash_1.default.random(stores.length - 1)];
                const orderProducts = this._setupOrderProducts(products);
                const createdAt = this.getCloseDate(new Date());
                orders.push({
                    user: users[lodash_1.default.random(users.length - 1)],
                    warehouse: orderStore._id.toString(),
                    products: orderProducts,
                    isConfirmed: true,
                    isCancelled: false,
                    isPaid: false,
                    warehouseStatus: OrderWarehouseStatus_1.default.PackagingFinished,
                    carrierStatus: OrderCarrierStatus_1.default.NoCarrier,
                    orderNumber,
                    _createdAt: createdAt,
                });
            }
            return orders;
        };
        this._setupHistoryOrdersToCreate = (stores, products, users, carrierId, orderNumber) => {
            const orders = [];
            const availableStatuses = [
                OrderCarrierStatus_1.default.DeliveryCompleted,
                OrderCarrierStatus_1.default.IssuesDuringDelivery,
                OrderCarrierStatus_1.default.ClientRefuseTakingOrder,
            ];
            for (let i = 1; i <= 12; i += 1) {
                const orderStore = stores[lodash_1.default.random(stores.length - 1)];
                const orderProducts = this._setupOrderProducts(products);
                const carrierStatus = availableStatuses[lodash_1.default.random(availableStatuses.length - 1)];
                const createdAt = this.getCloseDate(new Date());
                const startDeliveryTime = this.getFinishedTime(createdAt);
                orders.push({
                    user: users[lodash_1.default.random(users.length - 1)],
                    warehouse: orderStore._id.toString(),
                    products: orderProducts,
                    isConfirmed: true,
                    isCancelled: false,
                    carrier: carrierId,
                    startDeliveryTime,
                    deliveryTime: carrierStatus === OrderCarrierStatus_1.default.DeliveryCompleted
                        ? this.getFinishedTime(startDeliveryTime)
                        : null,
                    finishedProcessingTime: carrierStatus !== OrderCarrierStatus_1.default.DeliveryCompleted
                        ? this.getFinishedTime(startDeliveryTime)
                        : null,
                    isPaid: true,
                    warehouseStatus: OrderWarehouseStatus_1.default.GivenToCarrier,
                    carrierStatus,
                    orderNumber,
                    _createdAt: createdAt,
                });
            }
            return orders;
        };
    }
    generateActiveAndAvailableOrdersPerCarrier() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const commonOptionsFlag = { isDeleted: { $eq: false } };
            const users = yield this._usersService.Model.find(commonOptionsFlag)
                .select({ __v: 0 })
                .lean()
                .exec();
            const stores = yield this._warehousesService.Model.find(commonOptionsFlag)
                .select({ _id: 1 })
                .lean()
                .exec();
            const products = yield this._productsService.Model.find(commonOptionsFlag)
                .select({ __v: 0 })
                .lean()
                .exec();
            const ordersRaw = this._setupAvailableOrdersToCreate(stores, products, users);
            yield this._ordersService.Model.insertMany(ordersRaw);
        });
    }
    generatePastOrdersPerCarrier() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const commonOptionsFlag = { isDeleted: { $eq: false } };
            const users = yield this._usersService.Model.find(commonOptionsFlag)
                .select({ __v: 0 })
                .lean()
                .exec();
            const stores = yield this._warehousesService.Model.find(commonOptionsFlag)
                .select({ _id: 1 })
                .lean()
                .exec();
            const carrierIds = yield this._carriersService.Model.find(commonOptionsFlag)
                .select({ _id: 1 })
                .lean()
                .exec();
            const products = yield this._productsService.Model.find(commonOptionsFlag)
                .select({ __v: 0 })
                .lean()
                .exec();
            const totalOrdersToCreate = [];
            carrierIds.forEach((objectId, index) => {
                const carrierId = objectId._id.toString();
                const orderNumber = index;
                const ordersRaw = this._setupHistoryOrdersToCreate(stores, products, users, carrierId, orderNumber);
                totalOrdersToCreate.push(ordersRaw);
            });
            yield this._ordersService.Model.insertMany(lodash_1.default.flatten(totalOrdersToCreate));
        });
    }
    addTakenOrders(_context, { carrierIds }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const commonOptionsFlag = { isDeleted: { $eq: false } };
            const stores = yield this._warehousesService.find(commonOptionsFlag);
            const customers = yield this._usersService.find(commonOptionsFlag);
            const products = yield this._productsService.find(commonOptionsFlag);
            const ordersToCreate = [];
            carrierIds.forEach((id) => {
                for (let orderNumber = 1; orderNumber <= 20; orderNumber += 1) {
                    const orderProducts = [];
                    const productCount = Math.round(Math.random() * 4) || 1;
                    for (let i = 0; i < productCount; i += 1) {
                        const orderPrice = (orderNumber + i) % 110 || 1;
                        orderProducts.push({
                            count: (orderNumber + i) % 12 || 1,
                            isManufacturing: true,
                            isCarrierRequired: true,
                            isDeliveryRequired: true,
                            price: orderPrice,
                            initialPrice: orderPrice,
                            product: this._getRandomProduct(orderNumber + i, products),
                        });
                    }
                    const orderIsPaid = Math.random() > 0.5;
                    const createdAt = this._getRandomOrderDate(orderNumber);
                    const startDeliveryTime = this.getFinishedTime(createdAt);
                    ordersToCreate.push({
                        isCancelled: !orderIsPaid,
                        isPaid: orderIsPaid,
                        deliveryTimeEstimate: 0,
                        startDeliveryTime,
                        deliveryTime: orderIsPaid
                            ? this.getFinishedTime(startDeliveryTime)
                            : null,
                        finishedProcessingTime: !orderIsPaid
                            ? this.getFinishedTime(startDeliveryTime)
                            : null,
                        warehouseStatus: OrderWarehouseStatus_1.default.PackagingFinished,
                        carrierStatus: OrderCarrierStatus_1.default.DeliveryCompleted,
                        orderNumber,
                        user: this._getRandomCustomer(orderNumber, customers),
                        warehouse: stores[orderNumber % stores.length].id,
                        products: orderProducts,
                        _createdAt: createdAt,
                        carrier: id,
                    });
                }
            });
            yield this._ordersService.Model.insertMany(ordersToCreate);
        });
    }
    addOrdersToTake() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const commonOptionsFlag = { isDeleted: { $eq: false } };
            const stores = yield this._warehousesService.find(commonOptionsFlag);
            const customers = yield this._usersService.find(commonOptionsFlag);
            const products = yield this._productsService.find(commonOptionsFlag);
            const ordersToCreate = [];
            for (let i = 0; i < 3; i += 1) {
                for (let orderNumber = 1; orderNumber <= 10; orderNumber += 1) {
                    const orderProducts = [];
                    const productCount = Math.round(Math.random() * 4) || 1;
                    for (let j = 0; j < productCount; j += 1) {
                        const orderPrice = (orderNumber + j) % 110 || 1;
                        orderProducts.push({
                            count: (orderNumber + j) % 6 || 1,
                            isManufacturing: true,
                            isCarrierRequired: true,
                            isDeliveryRequired: true,
                            price: orderPrice,
                            initialPrice: orderPrice,
                            product: this._getRandomProduct(orderNumber + j, products),
                        });
                    }
                    const createdAt = this.getCloseDate(new Date());
                    ordersToCreate.push({
                        isConfirmed: false,
                        isCancelled: false,
                        isPaid: false,
                        deliveryTimeEstimate: 0,
                        warehouseStatus: OrderWarehouseStatus_1.default.PackagingFinished,
                        carrierStatus: OrderCarrierStatus_1.default.NoCarrier,
                        orderNumber,
                        user: this._getRandomCustomer(orderNumber, customers),
                        warehouse: stores[orderNumber % stores.length].id,
                        products: orderProducts,
                        _createdAt: createdAt,
                    });
                }
            }
            yield this._ordersService.Model.insertMany(ordersToCreate);
        });
    }
    generateRandomOrdersCurrentStore(_context, { storeId, storeCreatedAt, ordersLimit, }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const commonOptionsFlag = { isDeleted: { $eq: false } };
            const customers = yield this._usersService.find(commonOptionsFlag);
            const carriers = yield this._carriersService.find(commonOptionsFlag);
            const products = yield this._productsService.find(commonOptionsFlag);
            let response = { error: false, message: null };
            try {
                const currentStoreOrders = [];
                const storeCreatedDate = new Date(storeCreatedAt);
                for (let orderNumber = 1; orderNumber <= ordersLimit; orderNumber += 1) {
                    const carrierId = this._getRandomCarrierId(orderNumber, carriers);
                    const orderRaw = this._fakeOrdersService.getOrderRaw(orderNumber, storeId, storeCreatedDate, carrierId, customers, products);
                    currentStoreOrders.push(orderRaw);
                }
                yield this._ordersService.Model.insertMany(currentStoreOrders);
            }
            catch (err) {
                response = { error: true, message: err.message };
            }
            return response;
        });
    }
    generateOrdersByCustomerId(_context, { numberOfOrders, customerId, }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const commonOptionsFlag = { isDeleted: { $eq: false } };
            const stores = (yield this._warehousesService.find(commonOptionsFlag)).filter((__, index) => index <= 20);
            const carriers = yield this._carriersService.find(commonOptionsFlag);
            const products = yield this._productsService.find(commonOptionsFlag);
            const user = yield this._usersService
                .get(customerId)
                .pipe(operators_1.first())
                .toPromise();
            if (products.length > 0) {
                const rawOrders = [];
                for (let orderNumber = 1; orderNumber <= numberOfOrders; orderNumber += 1) {
                    const { numberOfProductsToOrder, hasCarrier, orderIsPaid, } = this._prepareOrderFieldsValues(orderNumber);
                    const orderProducts = [];
                    for (let i = 0; i < numberOfProductsToOrder; i += 1) {
                        const orderPrice = (orderNumber + i) % 110 || 1;
                        orderProducts.push({
                            count: (orderNumber + i) % 6 || 1,
                            isManufacturing: true,
                            isCarrierRequired: hasCarrier,
                            isDeliveryRequired: hasCarrier,
                            price: orderPrice,
                            initialPrice: orderPrice,
                            product: this._getRandomProduct(orderNumber + i, products),
                        });
                    }
                    const orderDate = this._getRandomOrderDate(orderNumber);
                    const orderDeliveryTime = new Date(orderDate);
                    orderDeliveryTime.setMinutes(orderDeliveryTime.getMinutes() +
                        Math.round(Math.random() * 90));
                    const startDeliveryTime = this.getFinishedTime(orderDate);
                    rawOrders.push(Object.assign({ isCancelled: !orderIsPaid, isPaid: orderIsPaid, deliveryTimeEstimate: 0, startDeliveryTime, deliveryTime: orderIsPaid
                            ? this.getFinishedTime(startDeliveryTime)
                            : null, finishedProcessingTime: !orderIsPaid
                            ? this.getFinishedTime(startDeliveryTime)
                            : null, warehouseStatus: OrderWarehouseStatus_1.default.PackagingFinished, carrierStatus: OrderCarrierStatus_1.default.DeliveryCompleted, orderNumber,
                        user, warehouse: stores[orderNumber % stores.length].id, products: orderProducts, _createdAt: orderDate }, (hasCarrier && {
                        carrier: this._getRandomCarrierId(orderNumber, carriers),
                    })));
                }
                yield this._ordersService.Model.insertMany(rawOrders);
            }
        });
    }
    getOrdersChartTotalOrders() {
        return this._ordersService.getOrdersChartTotalOrders();
    }
    getCompletedOrdersInfo(_context, { storeId }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const orders = yield this._ordersService.getDashboardCompletedOrders(storeId);
            return {
                totalOrders: orders.length,
                totalRevenue: orders
                    .map((order) => order.totalPrice)
                    .reduce((prevPrice, nextPrice) => prevPrice + nextPrice, 0),
            };
        });
    }
    getDashboardCompletedOrders() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this._ordersService.getDashboardCompletedOrders();
        });
    }
    getDashboardCompletedOrdersToday() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this._ordersService.getDashboardCompletedOrdersToday();
        });
    }
    getOrder(_context, { id }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this._ordersService.get(id).pipe(operators_1.first()).toPromise();
        });
    }
    getOrders(_context, { findInput }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this._ordersService.find(Object.assign(Object.assign({}, findInput), { isDeleted: { $eq: false } }));
        });
    }
    getOrderedUsersInfo(_context, { storeId }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this._ordersService.getOrderedUsersInfo(storeId);
        });
    }
    getUsersOrdersCountInfo(_context, { usersIds }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const ordersInfo = yield this._ordersService.Model.aggregate([
                {
                    $match: {
                        $and: [
                            { 'user._id': { $ne: null } },
                            usersIds
                                ? {
                                    'user._id': {
                                        $in: usersIds.map((i) => new bson_1.ObjectId(i)),
                                    },
                                }
                                : {},
                        ],
                    },
                },
                {
                    $group: {
                        _id: '$user._id',
                        ordersCount: { $sum: 1 },
                    },
                },
            ]);
            return ordersInfo.map((o) => ({
                id: o._id,
                ordersCount: o.ordersCount,
            }));
        });
    }
    getMerchantsOrdersCountInfo(_context, { merchantsIds }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const ordersInfo = yield this._ordersService.Model.aggregate([
                {
                    $match: {
                        $and: [
                            { warehouse: { $ne: null } },
                            merchantsIds
                                ? { warehouse: { $in: merchantsIds } }
                                : {},
                        ],
                    },
                },
                {
                    $group: {
                        _id: '$warehouse',
                        ordersCount: { $sum: 1 },
                    },
                },
            ]);
            return ordersInfo.map((o) => ({
                id: o._id,
                ordersCount: o.ordersCount,
            }));
        });
    }
    updateOrderCarrierStatus(_context, { orderId, status, }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this._ordersService.updateCarrierStatus(orderId, OrderCarrierStatus_1.default[status]);
        });
    }
    updateOrderWarehouseStatus(_context, { orderId, status, }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this._ordersService.updateWarehouseStatus(orderId, OrderWarehouseStatus_1.default[status]);
        });
    }
    payOrderWithStripe(_context, { orderId, cardId, }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this._ordersService.payWithStripe(orderId, cardId);
        });
    }
    getCarrier(_order) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const order = new Order_1.default(_order);
            return order.carrierId == null
                ? null
                : this._carriersService
                    .get(order.carrierId)
                    .pipe(operators_1.first())
                    .toPromise();
        });
    }
    getWarehouse(_order) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const order = new Order_1.default(_order);
            return this._warehousesService
                .get(order.warehouseId)
                .pipe(operators_1.first())
                .toPromise();
        });
    }
    getFinishedTime(date) {
        const randomMinutes = lodash_1.default.random(1, 30);
        const randomSec = lodash_1.default.random(1, 60);
        const oldDate = new Date(date);
        oldDate.setSeconds(randomSec);
        return new Date(oldDate.setMinutes(date.getMinutes() + randomMinutes));
    }
    getCloseDate(date) {
        const randomMinutes = lodash_1.default.random(1, 10);
        const randomSec = lodash_1.default.random(1, 60);
        const oldDate = new Date(date);
        oldDate.setSeconds(randomSec);
        return new Date(oldDate.setMinutes(date.getMinutes() - randomMinutes));
    }
};
tslib_1.__decorate([
    graphql_1.Query(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], OrderResolver.prototype, "generateActiveAndAvailableOrdersPerCarrier", null);
tslib_1.__decorate([
    graphql_1.Query(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], OrderResolver.prototype, "generatePastOrdersPerCarrier", null);
tslib_1.__decorate([
    graphql_1.Query(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], OrderResolver.prototype, "addTakenOrders", null);
tslib_1.__decorate([
    graphql_1.Query(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], OrderResolver.prototype, "addOrdersToTake", null);
tslib_1.__decorate([
    graphql_1.Query(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], OrderResolver.prototype, "generateRandomOrdersCurrentStore", null);
tslib_1.__decorate([
    graphql_1.Query(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], OrderResolver.prototype, "generateOrdersByCustomerId", null);
tslib_1.__decorate([
    graphql_1.Query(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], OrderResolver.prototype, "getOrdersChartTotalOrders", null);
tslib_1.__decorate([
    graphql_1.Query(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], OrderResolver.prototype, "getCompletedOrdersInfo", null);
tslib_1.__decorate([
    graphql_1.Query(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], OrderResolver.prototype, "getDashboardCompletedOrders", null);
tslib_1.__decorate([
    graphql_1.Query(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], OrderResolver.prototype, "getDashboardCompletedOrdersToday", null);
tslib_1.__decorate([
    graphql_1.Query('getOrder'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], OrderResolver.prototype, "getOrder", null);
tslib_1.__decorate([
    graphql_1.Query('orders'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], OrderResolver.prototype, "getOrders", null);
tslib_1.__decorate([
    graphql_1.Query(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], OrderResolver.prototype, "getOrderedUsersInfo", null);
tslib_1.__decorate([
    graphql_1.Query(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], OrderResolver.prototype, "getUsersOrdersCountInfo", null);
tslib_1.__decorate([
    graphql_1.Query(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], OrderResolver.prototype, "getMerchantsOrdersCountInfo", null);
tslib_1.__decorate([
    graphql_1.Mutation(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], OrderResolver.prototype, "updateOrderCarrierStatus", null);
tslib_1.__decorate([
    graphql_1.Mutation(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], OrderResolver.prototype, "updateOrderWarehouseStatus", null);
tslib_1.__decorate([
    graphql_1.Mutation(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], OrderResolver.prototype, "payOrderWithStripe", null);
tslib_1.__decorate([
    graphql_1.ResolveProperty('carrier'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], OrderResolver.prototype, "getCarrier", null);
tslib_1.__decorate([
    graphql_1.ResolveProperty('warehouse'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], OrderResolver.prototype, "getWarehouse", null);
OrderResolver = tslib_1.__decorate([
    graphql_1.Resolver('Order'),
    tslib_1.__metadata("design:paramtypes", [orders_1.OrdersService,
        CarriersService_1.default,
        warehouses_1.WarehousesService,
        users_1.UsersService,
        products_1.ProductsService,
        FakeOrdersService_1.FakeOrdersService])
], OrderResolver);
exports.OrderResolver = OrderResolver;
//# sourceMappingURL=order.resolver.js.map