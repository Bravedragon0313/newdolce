"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const bluebird_1 = tslib_1.__importDefault(require("bluebird"));
const inversify_1 = require("inversify");
const env_1 = require("../../env");
const warehouses_1 = require("../warehouses");
const Log_1 = require("../../helpers/Log");
const OrderCarrierStatus_1 = tslib_1.__importDefault(require("@modules/server.common/enums/OrderCarrierStatus"));
const OrderWarehouseStatus_1 = tslib_1.__importDefault(require("@modules/server.common/enums/OrderWarehouseStatus"));
const users_1 = require("../users");
const Order_1 = tslib_1.__importDefault(require("@modules/server.common/entities/Order"));
const db_server_1 = require("@pyro/db-server");
const CarriersService_1 = tslib_1.__importDefault(require("../carriers/CarriersService"));
const io_1 = require("@pyro/io");
const operators_1 = require("rxjs/operators");
const uuid_1 = require("uuid");
const _ = require("lodash");
const OrderStatus_1 = tslib_1.__importDefault(require("@modules/server.common/enums/OrderStatus"));
const User_1 = tslib_1.__importDefault(require("@modules/server.common/entities/User"));
const products_1 = require("../../services/products");
const rxjs_1 = require("rxjs");
const Stripe = require("stripe");
let OrdersService = class OrdersService extends db_server_1.DBService {
    constructor(warehousesService, usersService, carriersService, warehousesProductsService, _storesService, _productsService) {
        super();
        this.warehousesService = warehousesService;
        this.usersService = usersService;
        this.carriersService = carriersService;
        this.warehousesProductsService = warehousesProductsService;
        this._storesService = _storesService;
        this._productsService = _productsService;
        this.DBObject = Order_1.default;
        this.stripe = new Stripe(env_1.env.STRIPE_SECRET_KEY);
        this.log = Log_1.createEverLogger({
            name: 'ordersService',
        });
    }
    generateOrdersPerEachCustomer(customers) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const stores = yield this._storesService.findAll({
                _id: 1,
                products: 1,
            });
            const products = yield this._productsService.findAll();
            const orders = [];
            customers.forEach((customer, index) => {
                const storeId = stores[index % stores.length]._id;
                const product1Price = Math.round(Math.random() * 99);
                const product2Price = Math.round(Math.random() * 99);
                orders.push({
                    products: [
                        {
                            count: 2,
                            isManufacturing: true,
                            isCarrierRequired: true,
                            isDeliveryRequired: true,
                            price: product1Price,
                            initialPrice: product1Price,
                            product: products[index % products.length],
                        },
                        {
                            count: 2,
                            isManufacturing: true,
                            isCarrierRequired: true,
                            isDeliveryRequired: true,
                            price: product2Price,
                            initialPrice: product2Price,
                            product: products[(index + 1) % products.length],
                        },
                    ],
                    user: customer,
                    warehouse: storeId,
                    orderNumber: index,
                });
            });
            yield this.Model.insertMany(orders);
        });
    }
    get(id, options = {}) {
        if (options.populateCarrier || options.populateWarehouse) {
            return super.get(id).pipe(operators_1.map((order) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                yield this._throwIfNotExists(id);
                return order;
            })), operators_1.switchMap((order) => order), operators_1.exhaustMap(() => this._get(id, options)));
        }
        else {
            return super.get(id).pipe(operators_1.map((order) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                yield this._throwIfNotExists(id);
                return order;
            })), operators_1.switchMap((order) => order));
        }
    }
    updateCarrierStatus(orderId, status) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this._throwIfNotExists(orderId);
            try {
                const updateObj = { carrierStatus: status };
                if (status === OrderCarrierStatus_1.default.DeliveryCompleted) {
                    updateObj.isPaid = true;
                    updateObj.deliveryTime = Date.now();
                }
                if (status === OrderCarrierStatus_1.default.CarrierStartDelivery ||
                    status === OrderCarrierStatus_1.default.CarrierPickedUpOrder) {
                    updateObj.startDeliveryTime = Date.now();
                }
                const finishedProcessingStatuses = [
                    OrderCarrierStatus_1.default.ClientRefuseTakingOrder,
                    OrderCarrierStatus_1.default.DeliveryCompleted,
                    OrderCarrierStatus_1.default.IssuesDuringDelivery,
                ];
                if (finishedProcessingStatuses.includes(status)) {
                    updateObj.finishedProcessingTime = Date.now();
                }
                const order = yield this.update(orderId, updateObj);
                if (order.carrierId != null) {
                    if (status === OrderCarrierStatus_1.default.DeliveryCompleted) {
                        yield this.carriersService.increaseNumberOfDeliveries(order.carrierId, 1);
                    }
                    return order;
                }
                else {
                    throw new Error("Can't updateCarrierStatus(orderId, status) - Order has no carrier!");
                }
            }
            catch (err) {
                this.log.error(err);
                throw err;
            }
        });
    }
    updateWarehouseStatus(orderId, status) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this._throwIfNotExists(orderId);
            const updateObj = { warehouseStatus: status };
            const finishedProcessingStatuses = [
                OrderWarehouseStatus_1.default.PackagingFailed,
                OrderWarehouseStatus_1.default.AllocationFailed,
            ];
            if (finishedProcessingStatuses.includes(status)) {
                updateObj.finishedProcessingTime = Date.now();
            }
            if (status === OrderWarehouseStatus_1.default.GivenToCustomer) {
                updateObj.isPaid = true;
                updateObj.finishedProcessingTime = Date.now();
            }
            return this.update(orderId, updateObj);
        });
    }
    payWithStripe(orderId, cardId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this._throwIfNotExists(orderId);
            const callId = uuid_1.v1();
            this.log.info({ callId, orderId, cardId }, '.payWithStripe(orderId, cardId) called');
            let order;
            try {
                const _order = yield this.get(orderId).pipe(operators_1.first()).toPromise();
                if (_order != null) {
                    order = _order;
                    const user = yield this.usersService
                        .get(order.user.id)
                        .pipe(operators_1.first())
                        .toPromise();
                    if (user != null) {
                        const charge = yield this.stripe.charges.create({
                            amount: order.totalPrice * 100,
                            customer: user.stripeCustomerId,
                            source: cardId,
                            currency: 'ils',
                            description: 'Order id: ' + orderId,
                            metadata: {
                                orderId,
                            },
                        });
                        order = yield this.update(orderId, {
                            stripeChargeId: charge.id,
                            isPaid: true,
                        });
                    }
                    else {
                        throw new Error('User specified in order is not found!');
                    }
                }
                else {
                    throw new Error("couldn't find order with such id");
                }
            }
            catch (err) {
                this.log.error({ callId, orderId, cardId, err }, '.payWithStripe(orderId, cardId) thrown error!');
                throw err;
            }
            this.log.info({ callId, orderId, cardId, order }, '.payWithStripe(orderId, cardId) accepted payment');
            return order;
        });
    }
    refundWithStripe(orderId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this._throwIfNotExists(orderId);
            const callId = uuid_1.v1();
            this.log.info({ callId, orderId }, '.refundWithStripe(orderId) called');
            let refund;
            let order;
            try {
                order = yield this.get(orderId).pipe(operators_1.first()).toPromise();
                if (order != null) {
                    if (order.stripeChargeId != null) {
                        refund = yield this.stripe.refunds.create({
                            charge: order.stripeChargeId,
                        });
                        this.log.info({ callId, orderId, refund }, '.refundWithStripe(orderId) made refund');
                        return order;
                    }
                    else {
                        throw new Error(`There is no order with stripeChargeId field and id of ${orderId} to refundWithStripe on!`);
                    }
                }
                else {
                    throw new Error(`There is no order with id of ${orderId} to refundWithStripe on!`);
                }
            }
            catch (err) {
                this.log.error({ callId, orderId, err }, '.refundWithStripe(orderId) thrown error!');
                throw err;
            }
        });
    }
    confirm(orderId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this._throwIfNotExists(orderId);
            return this.update(orderId, {
                isConfirmed: true,
                warehouseStatus: OrderWarehouseStatus_1.default.ReadyForProcessing,
            });
        });
    }
    addProducts(orderId, products, warehouseId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this._throwIfNotExists(orderId);
            const order = yield this._get(orderId);
            const oldProductsIds = order.products.map((p) => p.product.id);
            const newProductsIds = products.map((p) => p.productId);
            for (const product of order.products) {
                if (newProductsIds.includes(product.product.id)) {
                    const newProduct = products.find((p) => p.productId === product.product.id);
                    if (newProduct) {
                        product.count += newProduct.count;
                        yield this.warehousesProductsService.decreaseCount(warehouseId, newProduct.productId, newProduct.count);
                        yield this.warehousesProductsService.increaseSoldCount(warehouseId, newProduct.productId, newProduct.count);
                    }
                }
            }
            products = products.filter((p) => !oldProductsIds.includes(p['productId']));
            const warehouse = (yield this.warehousesService
                .get(warehouseId, true)
                .pipe(operators_1.first())
                .toPromise());
            const warehouseProducts = _.keyBy(warehouse.products, 'productId');
            const newOrderProducts = yield _.map(products, (args) => {
                const wProduct = warehouseProducts[args.productId];
                if (!wProduct) {
                    throw new Error(`WarehouseOrdersService got call to create(userId, orderProducts) - But there is no product with the id ${args.productId}!`);
                }
                return {
                    count: args.count,
                    price: wProduct.price,
                    initialPrice: wProduct.initialPrice,
                    deliveryTimeMin: wProduct.deliveryTimeMin,
                    deliveryTimeMax: wProduct.deliveryTimeMax,
                    product: wProduct.product,
                    isManufacturing: wProduct.isManufacturing,
                    isCarrierRequired: wProduct.isCarrierRequired,
                    isDeliveryRequired: wProduct.isDeliveryRequired,
                    isTakeaway: wProduct.isTakeaway,
                };
            });
            for (const product of products) {
                yield this.warehousesProductsService.decreaseCount(warehouseId, product.productId, product.count);
                yield this.warehousesProductsService.increaseSoldCount(warehouseId, product.productId, product.count);
            }
            return this.update(orderId, {
                products: [...order.products, ...newOrderProducts],
            });
        });
    }
    decreaseOrderProducts(orderId, products, warehouseId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this._throwIfNotExists(orderId);
            const order = yield this._get(orderId);
            const oldProductsIds = order.products.map((p) => p.product.id);
            const newProductsIds = products.map((p) => p.productId);
            for (const product of order.products) {
                if (newProductsIds.includes(product.product.id)) {
                    const newProduct = products.find((p) => p.productId === product.product.id);
                    if (newProduct) {
                        product.count -= newProduct.count;
                        if (product.count >= 1) {
                            yield this.warehousesProductsService.decreaseSoldCount(warehouseId, newProduct.productId, newProduct.count);
                            yield this.warehousesProductsService.increaseCount(warehouseId, newProduct.productId, newProduct.count);
                        }
                        else {
                            throw new Error(`You can not decrease product to be === 0 !`);
                        }
                    }
                }
            }
            products = products.filter((p) => !oldProductsIds.includes(p['productId']));
            const warehouse = (yield this.warehousesService
                .get(warehouseId, true)
                .pipe(operators_1.first())
                .toPromise());
            const warehouseProducts = _.keyBy(warehouse.products, 'productId');
            const newOrderProducts = yield _.map(products, (args) => {
                const wProduct = warehouseProducts[args.productId];
                if (!wProduct) {
                    throw new Error(`WarehouseOrdersService got call to create(userId, orderProducts) - But there is no product with the id ${args.productId}!`);
                }
                return {
                    count: args.count,
                    price: wProduct.price,
                    initialPrice: wProduct.initialPrice,
                    deliveryTimeMin: wProduct.deliveryTimeMin,
                    deliveryTimeMax: wProduct.deliveryTimeMax,
                    product: wProduct.product,
                    isManufacturing: wProduct.isManufacturing,
                    isCarrierRequired: wProduct.isCarrierRequired,
                    isDeliveryRequired: wProduct.isDeliveryRequired,
                    isTakeaway: wProduct.isTakeaway,
                };
            });
            for (const product of products) {
                yield this.warehousesProductsService.decreaseCount(warehouseId, product.productId, product.count);
                yield this.warehousesProductsService.increaseSoldCount(warehouseId, product.productId, product.count);
            }
            return this.update(orderId, {
                products: [...order.products, ...newOrderProducts],
            });
        });
    }
    removeProducts(orderId, productsIds) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this._throwIfNotExists(orderId);
            const order = yield this._get(orderId);
            const newProducts = order.products.filter((p) => !productsIds.includes(p.product.id));
            const removedProducts = order.products.filter((p) => productsIds.includes(p.product.id));
            yield bluebird_1.default.map(removedProducts, (orderProduct) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                const productId = orderProduct.product.id;
                yield this.warehousesProductsService.decreaseSoldCount(order.warehouseId, productId, orderProduct.count);
                yield this.warehousesProductsService.increaseCount(order.warehouseId, productId, orderProduct.count);
            }));
            return this.update(orderId, {
                products: newProducts,
            });
        });
    }
    cancel(orderId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this._throwIfNotExists(orderId);
            return this.update(orderId, {
                isCancelled: true,
                finishedProcessingTime: Date.now(),
            });
        });
    }
    paid(orderId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this._throwIfNotExists(orderId);
            return this.update(orderId, { isPaid: true });
        });
    }
    getStoreOrdersChartTotalOrders(storeId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const ordersRaw = yield this.Model.find({
                warehouse: storeId,
                isDeleted: { $eq: false },
            })
                .select({
                isCancelled: 1,
                isPaid: 1,
                carrier: 1,
                carrierStatus: 1,
                warehouseStatus: 1,
                _createdAt: 1,
                'products.price': 1,
                'products.count': 1,
            })
                .lean()
                .exec();
            const orders = _.map(ordersRaw, (o) => {
                return {
                    totalPrice: this._getOrderTotalPrice(o),
                    isCompleted: this._isOrderCompleted(o),
                    isCancelled: o.isCancelled,
                    _createdAt: o._createdAt,
                };
            });
            return orders.filter((o) => o.isCompleted);
        });
    }
    getOrdersChartTotalOrders() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const ordersRaw = yield this.Model.find({
                isDeleted: { $eq: false },
            })
                .select({
                isCancelled: 1,
                isPaid: 1,
                carrier: 1,
                carrierStatus: 1,
                warehouseStatus: 1,
                _createdAt: 1,
                'products.price': 1,
                'products.count': 1,
            })
                .lean()
                .exec();
            const orders = _.map(ordersRaw, (o) => {
                return {
                    totalPrice: this._getOrderTotalPrice(o),
                    isCompleted: this._isOrderCompleted(o),
                    isCancelled: o.isCancelled,
                    _createdAt: o._createdAt,
                };
            });
            const ordersRes = orders.filter((o) => o.isCompleted);
            return ordersRes;
        });
    }
    getDashboardCompletedOrdersToday() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const start = new Date();
            const end = new Date();
            start.setHours(0, 0, 0, 0);
            end.setHours(23, 59, 59, 999);
            const ordersRaw = yield this.Model.find({
                isDeleted: { $eq: false },
                isCancelled: { $eq: false },
                _createdAt: { $gte: start, $lt: end },
            })
                .select({
                isCancelled: 1,
                isPaid: 1,
                carrier: 1,
                carrierStatus: 1,
                warehouseStatus: 1,
                _createdAt: 1,
                warehouse: 1,
                user: 1,
                'products.price': 1,
                'products.count': 1,
            })
                .lean()
                .exec();
            const orders = _.map(ordersRaw, (o) => {
                return {
                    totalPrice: this._getOrderTotalPrice(o),
                    isCompleted: this._isOrderCompleted(o),
                    isCancelled: o.isCancelled,
                    user: o.user,
                    warehouseId: o.warehouse,
                    _createdAt: o._createdAt,
                };
            });
            return orders.filter((o) => o.isCompleted);
        });
    }
    getOrderedUsersInfo(storeId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const orders = yield this.Model.find({
                isDeleted: { $eq: false },
                warehouse: { $eq: storeId },
            })
                .select({
                user: 1,
                isPaid: 1,
                'products.price': 1,
                'products.count': 1,
            })
                .lean()
                .exec();
            const unique = (value, index, self) => {
                return (self
                    .map((s) => s.user._id.toString())
                    .indexOf(value.user._id.toString()) === index);
            };
            const oUsers = orders.filter(unique).map((o) => {
                const user = new User_1.default(o.user);
                return user;
            });
            const oUserIds = oUsers.map((u) => u.id);
            const realUsers = yield this.usersService.find({
                isDeleted: false,
                _id: { $in: oUserIds },
            });
            return oUsers.map((u) => {
                const userOrders = orders.filter((o) => o.user._id.toString() === u._id.toString());
                let totalPrice = 0;
                const paidOrders = userOrders.filter((o) => o.isPaid);
                if (paidOrders.length > 0) {
                    totalPrice = paidOrders
                        .map((o) => this._getOrderTotalPrice(o))
                        .reduce((a, b) => a + b);
                }
                return {
                    user: realUsers.find((ru) => ru.id === u.id),
                    ordersCount: userOrders.length,
                    totalPrice,
                };
            });
        });
    }
    getDashboardCompletedOrders(storeId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const quaryObj = {
                isDeleted: { $eq: false },
                isCancelled: { $eq: false },
            };
            if (storeId) {
                quaryObj['warehouse'] = { $eq: storeId };
            }
            const ordersRaw = yield this.Model.find(quaryObj)
                .select({
                isCancelled: 1,
                isPaid: 1,
                carrier: 1,
                carrierStatus: 1,
                warehouseStatus: 1,
                warehouse: 1,
                'products.price': 1,
                'products.count': 1,
            })
                .lean()
                .exec();
            const orders = _.map(ordersRaw, (o) => {
                return {
                    totalPrice: this._getOrderTotalPrice(o),
                    warehouseId: o.warehouse,
                    isCompleted: this._isOrderCompleted(o),
                };
            });
            return orders.filter((o) => o.isCompleted);
        });
    }
    getOrdersInDelivery(storeId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const order = yield this.Model.find({
                isDeleted: false,
                isCancelled: false,
                warehouse: storeId,
                carrierStatus: {
                    $in: [
                        OrderCarrierStatus_1.default.CarrierPickedUpOrder,
                        OrderCarrierStatus_1.default.CarrierStartDelivery,
                        OrderCarrierStatus_1.default.CarrierArrivedToCustomer,
                    ],
                },
            })
                .populate('carrier user')
                .lean()
                .exec();
            return order;
        });
    }
    _getOrderTotalPrice(order) {
        return _.sum(_.map(order.products, (p) => p.count * p.price));
    }
    _isOrderCompleted(order) {
        function getStatus(o) {
            if (o.carrier == null ||
                o.carrierStatus <= OrderCarrierStatus_1.default.CarrierPickedUpOrder) {
                if (o.warehouseStatus >= 200) {
                    return OrderStatus_1.default.WarehouseIssue;
                }
                else if (o.isCancelled) {
                    return OrderStatus_1.default.CanceledWhileWarehousePreparation;
                }
                else {
                    return OrderStatus_1.default.WarehousePreparation;
                }
            }
            else {
                if (o.carrierStatus >= 200) {
                    return OrderStatus_1.default.CarrierIssue;
                }
                else if (o.isCancelled) {
                    return OrderStatus_1.default.CanceledWhileInDelivery;
                }
                else if (o.isPaid &&
                    o.carrierStatus === OrderCarrierStatus_1.default.DeliveryCompleted) {
                    return OrderStatus_1.default.Delivered;
                }
                else {
                    return OrderStatus_1.default.InDelivery;
                }
            }
        }
        return ((order.isPaid && getStatus(order) === OrderStatus_1.default.Delivered) ||
            order.isCancelled);
    }
    _get(id, options = {}) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            let toPopulate = '';
            if (options.populateCarrier) {
                toPopulate += 'carrier ';
            }
            if (options.populateWarehouse) {
                toPopulate += 'warehouse ';
            }
            return new Order_1.default((yield this.Model.findById(id)
                .populate(toPopulate)
                .sort({ _createdAt: -1, orderNumber: -1 })
                .lean()
                .exec()));
        });
    }
    _throwIfNotExists(orderId) {
        const _super = Object.create(null, {
            get: { get: () => super.get }
        });
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const order = yield _super.get.call(this, orderId).pipe(operators_1.first()).toPromise();
            if (!order || order.isDeleted) {
                throw Error(`Order with id '${orderId}' does not exists!`);
            }
        });
    }
};
OrdersService.FindObjects = {
    isCompleted: {
        $or: [
            {
                isPaid: true,
                carrierStatus: OrderCarrierStatus_1.default.DeliveryCompleted,
            },
            {
                isCancelled: true,
            },
        ],
    },
    isNotCompleted: {
        $and: [
            {
                isPaid: false,
                carrierStatus: {
                    $ne: OrderCarrierStatus_1.default.DeliveryCompleted,
                },
            },
            {
                isCancelled: false,
            },
        ],
    },
};
tslib_1.__decorate([
    io_1.observableListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", rxjs_1.Observable)
], OrdersService.prototype, "get", null);
tslib_1.__decorate([
    io_1.asyncListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Number]),
    tslib_1.__metadata("design:returntype", Promise)
], OrdersService.prototype, "updateCarrierStatus", null);
tslib_1.__decorate([
    io_1.asyncListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Number]),
    tslib_1.__metadata("design:returntype", Promise)
], OrdersService.prototype, "updateWarehouseStatus", null);
tslib_1.__decorate([
    io_1.asyncListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, String]),
    tslib_1.__metadata("design:returntype", Promise)
], OrdersService.prototype, "payWithStripe", null);
tslib_1.__decorate([
    io_1.asyncListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], OrdersService.prototype, "refundWithStripe", null);
tslib_1.__decorate([
    io_1.asyncListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], OrdersService.prototype, "confirm", null);
tslib_1.__decorate([
    io_1.asyncListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], OrdersService.prototype, "addProducts", null);
tslib_1.__decorate([
    io_1.asyncListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], OrdersService.prototype, "decreaseOrderProducts", null);
tslib_1.__decorate([
    io_1.asyncListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Array]),
    tslib_1.__metadata("design:returntype", Promise)
], OrdersService.prototype, "removeProducts", null);
tslib_1.__decorate([
    io_1.asyncListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], OrdersService.prototype, "cancel", null);
tslib_1.__decorate([
    io_1.asyncListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], OrdersService.prototype, "paid", null);
tslib_1.__decorate([
    io_1.asyncListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], OrdersService.prototype, "getStoreOrdersChartTotalOrders", null);
tslib_1.__decorate([
    io_1.asyncListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], OrdersService.prototype, "getOrdersChartTotalOrders", null);
tslib_1.__decorate([
    io_1.asyncListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], OrdersService.prototype, "getDashboardCompletedOrdersToday", null);
tslib_1.__decorate([
    io_1.asyncListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], OrdersService.prototype, "getOrderedUsersInfo", null);
tslib_1.__decorate([
    io_1.asyncListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], OrdersService.prototype, "getDashboardCompletedOrders", null);
tslib_1.__decorate([
    io_1.asyncListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], OrdersService.prototype, "getOrdersInDelivery", null);
OrdersService = tslib_1.__decorate([
    inversify_1.injectable(),
    io_1.routerName('order'),
    tslib_1.__param(0, inversify_1.inject(new inversify_1.LazyServiceIdentifer(() => warehouses_1.WarehousesService))),
    tslib_1.__param(1, inversify_1.inject(new inversify_1.LazyServiceIdentifer(() => users_1.UsersService))),
    tslib_1.__param(2, inversify_1.inject(new inversify_1.LazyServiceIdentifer(() => CarriersService_1.default))),
    tslib_1.__param(3, inversify_1.inject(new inversify_1.LazyServiceIdentifer(() => warehouses_1.WarehousesProductsService))),
    tslib_1.__param(4, inversify_1.inject(new inversify_1.LazyServiceIdentifer(() => warehouses_1.WarehousesService))),
    tslib_1.__param(5, inversify_1.inject(new inversify_1.LazyServiceIdentifer(() => products_1.ProductsService))),
    tslib_1.__metadata("design:paramtypes", [warehouses_1.WarehousesService,
        users_1.UsersService,
        CarriersService_1.default,
        warehouses_1.WarehousesProductsService,
        warehouses_1.WarehousesService,
        products_1.ProductsService])
], OrdersService);
exports.OrdersService = OrdersService;
//# sourceMappingURL=OrdersService.js.map