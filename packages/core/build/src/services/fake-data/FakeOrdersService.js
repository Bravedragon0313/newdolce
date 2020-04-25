"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const inversify_1 = require("inversify");
const lodash_1 = tslib_1.__importDefault(require("lodash"));
let FakeOrdersService = class FakeOrdersService {
    getOrderRaw(orderNumber, storeId, storeCreatedAt, carrierId, customers, products) {
        this._orderNumber = orderNumber;
        this._storeId = storeId;
        this._carrierId = carrierId;
        this._orderCreatedAt = this.getOrderDate(storeCreatedAt);
        switch (true) {
            case orderNumber <= 25:
                return this._getOrderJustCreated(customers, products);
            case orderNumber <= 50:
                return this._getOrderReadyForProcessing(customers, products);
            case orderNumber <= 75:
                return this._getOrderStoreStartProcessing(customers, products);
            case orderNumber <= 100:
                return this._getOrderConfirmed(customers, products);
            case orderNumber <= 125:
                return this._getOrderStartAllocation(customers, products);
            case orderNumber <= 150:
                return this._getOrderPackagingStarted(customers, products);
            case orderNumber <= 200:
                return this._getOrderAllocationFails(customers, products);
            case orderNumber <= 250:
                return this._getOrderPackagingFails(customers, products);
            case orderNumber <= 300:
                return this._getOrderIssuesDuringDelivery(customers, products);
            case orderNumber <= 350:
                return this._getOrderClientRefuseOrder(customers, products);
            case orderNumber <= 400:
                return this._getOrderAllocationFinished(customers, products);
            case orderNumber <= 450:
                return this._getOrderPackagingFinished(customers, products);
            case orderNumber <= 475:
                return this._getOrderCarrierSelected(customers, products);
            case orderNumber <= 500:
                return this._getOrderCarrierPickup(customers, products);
            case orderNumber <= 525:
                return this._getOrderCarrierArriveToCustomer(customers, products);
            case orderNumber <= 650:
                return this._getOrderCancelled(customers, products);
            case orderNumber <= 1000:
                return this._getOrderDeliveryCompleted(customers, products);
        }
    }
    getOrderDate(startDate) {
        const now = new Date();
        const orderYear = lodash_1.default.random(startDate.getFullYear(), now.getFullYear());
        const orderMonth = lodash_1.default.random(11);
        const orderDate = lodash_1.default.random(31);
        const orderHours = lodash_1.default.random(23);
        const orderMinutes = lodash_1.default.random(59);
        const orderCreatedAt = new Date(orderYear, orderMonth, orderDate, orderHours, orderMinutes);
        if (orderCreatedAt < startDate || orderCreatedAt > now) {
            const diff = now.getTime() - startDate.getTime();
            orderCreatedAt.setTime(startDate.getTime() + lodash_1.default.random(diff));
        }
        return orderCreatedAt;
    }
    getOrderNextTime(date) {
        const randomMinutes = lodash_1.default.random(1, 30);
        const randomSec = lodash_1.default.random(1, 60);
        const oldDate = new Date(date);
        oldDate.setSeconds(randomSec);
        return new Date(oldDate.setMinutes(date.getMinutes() + randomMinutes));
    }
    getRandomNumberOfProducts() {
        return this._orderNumber % 7 || 1;
    }
    getRandomOrderProductCount() {
        return this._orderNumber % 3 || 1;
    }
    getRandomOrderProductPrice() {
        return this._orderNumber % 110 || 1;
    }
    getRandomProduct(orderNumber, products) {
        return products[orderNumber % products.length];
    }
    generateRandomOrderProducts(products) {
        const numberOfProducts = this.getRandomNumberOfProducts();
        const orderProducts = [];
        for (let productNumber = 1; productNumber <= numberOfProducts; productNumber += 1) {
            const orderPrice = this.getRandomOrderProductPrice();
            orderProducts.push({
                count: this.getRandomOrderProductCount(),
                product: this.getRandomProduct(productNumber, products),
                isManufacturing: true,
                price: orderPrice,
                initialPrice: orderPrice,
            });
        }
        return orderProducts;
    }
    getRandomOrderCustomer(customers) {
        return customers[this._orderNumber % customers.length];
    }
    _getOrderDeliveryCompleted(customers, products) {
        const startDeliveryTime = this.getOrderNextTime(this._orderCreatedAt);
        const deliveryTime = this.getOrderNextTime(startDeliveryTime);
        return {
            isConfirmed: false,
            isCancelled: false,
            isPaid: true,
            deliveryTimeEstimate: 0,
            warehouseStatus: 6,
            carrierStatus: 5,
            isDeleted: false,
            orderNumber: this._orderNumber,
            warehouse: this._storeId,
            carrier: this._carrierId,
            startDeliveryTime,
            deliveryTime,
            user: this.getRandomOrderCustomer(customers),
            products: this.generateRandomOrderProducts(products),
            _createdAt: this._orderCreatedAt,
        };
    }
    _getOrderCarrierArriveToCustomer(customers, products) {
        return {
            isConfirmed: false,
            isCancelled: false,
            isPaid: false,
            deliveryTimeEstimate: 0,
            warehouseStatus: 6,
            carrierStatus: 4,
            isDeleted: false,
            orderNumber: this._orderNumber,
            warehouse: this._storeId,
            carrier: this._carrierId,
            user: this.getRandomOrderCustomer(customers),
            products: this.generateRandomOrderProducts(products),
            startDeliveryTime: this.getOrderNextTime(this._orderCreatedAt),
            _createdAt: this._orderCreatedAt,
        };
    }
    _getOrderCarrierPickup(customers, products) {
        return {
            isConfirmed: false,
            isCancelled: false,
            isPaid: false,
            deliveryTimeEstimate: 0,
            warehouseStatus: 6,
            carrierStatus: 2,
            isDeleted: false,
            orderNumber: this._orderNumber,
            warehouse: this._storeId,
            carrier: this._carrierId,
            startDeliveryTime: this.getOrderNextTime(this._orderCreatedAt),
            user: this.getRandomOrderCustomer(customers),
            products: this.generateRandomOrderProducts(products),
            _createdAt: this._orderCreatedAt,
        };
    }
    _getOrderCarrierSelected(customers, products) {
        return {
            isConfirmed: false,
            isCancelled: false,
            isPaid: false,
            deliveryTimeEstimate: 0,
            warehouseStatus: 6,
            carrierStatus: 1,
            isDeleted: false,
            orderNumber: this._orderNumber,
            warehouse: this._storeId,
            carrier: this._carrierId,
            user: this.getRandomOrderCustomer(customers),
            products: this.generateRandomOrderProducts(products),
            _createdAt: this._orderCreatedAt,
        };
    }
    _getOrderPackagingFinished(customers, products) {
        return {
            isConfirmed: false,
            isCancelled: false,
            isPaid: false,
            deliveryTimeEstimate: 0,
            warehouseStatus: 6,
            carrierStatus: 0,
            isDeleted: false,
            orderNumber: this._orderNumber,
            warehouse: this._storeId,
            user: this.getRandomOrderCustomer(customers),
            products: this.generateRandomOrderProducts(products),
            _createdAt: this._orderCreatedAt,
        };
    }
    _getOrderAllocationFinished(customers, products) {
        return {
            isConfirmed: false,
            isCancelled: false,
            isPaid: false,
            deliveryTimeEstimate: 0,
            warehouseStatus: 4,
            carrierStatus: 0,
            isDeleted: false,
            orderNumber: this._orderNumber,
            warehouse: this._storeId,
            user: this.getRandomOrderCustomer(customers),
            products: this.generateRandomOrderProducts(products),
            _createdAt: this._orderCreatedAt,
        };
    }
    _getOrderClientRefuseOrder(customers, products) {
        const startDeliveryTime = this.getOrderNextTime(this._orderCreatedAt);
        const finishedProcessingTime = this.getOrderNextTime(startDeliveryTime);
        return {
            isConfirmed: false,
            isCancelled: false,
            isPaid: false,
            deliveryTimeEstimate: 0,
            warehouseStatus: 6,
            carrierStatus: 205,
            isDeleted: false,
            orderNumber: this._orderNumber,
            warehouse: this._storeId,
            carrier: this._carrierId,
            user: this.getRandomOrderCustomer(customers),
            products: this.generateRandomOrderProducts(products),
            startDeliveryTime,
            finishedProcessingTime,
            _createdAt: this._orderCreatedAt,
        };
    }
    _getOrderIssuesDuringDelivery(customers, products) {
        const startDeliveryTime = this.getOrderNextTime(this._orderCreatedAt);
        const finishedProcessingTime = this.getOrderNextTime(startDeliveryTime);
        return {
            isConfirmed: false,
            isCancelled: false,
            isPaid: false,
            deliveryTimeEstimate: 0,
            warehouseStatus: 6,
            carrierStatus: 204,
            isDeleted: false,
            orderNumber: this._orderNumber,
            warehouse: this._storeId,
            carrier: this._carrierId,
            startDeliveryTime,
            finishedProcessingTime,
            user: this.getRandomOrderCustomer(customers),
            products: this.generateRandomOrderProducts(products),
            _createdAt: this._orderCreatedAt,
        };
    }
    _getOrderPackagingFails(customers, products) {
        const finishedProcessingTime = this.getOrderNextTime(this._orderCreatedAt);
        return {
            isConfirmed: false,
            isCancelled: false,
            isPaid: false,
            deliveryTimeEstimate: 0,
            warehouseStatus: 201,
            carrierStatus: 0,
            isDeleted: false,
            orderNumber: this._orderNumber,
            warehouse: this._storeId,
            finishedProcessingTime,
            user: this.getRandomOrderCustomer(customers),
            products: this.generateRandomOrderProducts(products),
            _createdAt: this._orderCreatedAt,
        };
    }
    _getOrderAllocationFails(customers, products) {
        const finishedProcessingTime = this.getOrderNextTime(this._orderCreatedAt);
        return {
            isConfirmed: false,
            isCancelled: false,
            isPaid: false,
            deliveryTimeEstimate: 0,
            warehouseStatus: 200,
            carrierStatus: 0,
            isDeleted: false,
            orderNumber: this._orderNumber,
            warehouse: this._storeId,
            finishedProcessingTime,
            user: this.getRandomOrderCustomer(customers),
            products: this.generateRandomOrderProducts(products),
            _createdAt: this._orderCreatedAt,
        };
    }
    _getOrderPackagingStarted(customers, products) {
        return {
            isConfirmed: false,
            isCancelled: false,
            isPaid: false,
            deliveryTimeEstimate: 0,
            warehouseStatus: 5,
            carrierStatus: 0,
            isDeleted: false,
            orderNumber: this._orderNumber,
            warehouse: this._storeId,
            user: this.getRandomOrderCustomer(customers),
            products: this.generateRandomOrderProducts(products),
            _createdAt: this._orderCreatedAt,
        };
    }
    _getOrderStartAllocation(customers, products) {
        return {
            isConfirmed: false,
            isCancelled: false,
            isPaid: false,
            deliveryTimeEstimate: 0,
            warehouseStatus: 3,
            carrierStatus: 0,
            isDeleted: false,
            orderNumber: this._orderNumber,
            warehouse: this._storeId,
            user: this.getRandomOrderCustomer(customers),
            products: this.generateRandomOrderProducts(products),
            _createdAt: this._orderCreatedAt,
        };
    }
    _getOrderStoreStartProcessing(customers, products) {
        return {
            isConfirmed: false,
            isCancelled: false,
            isPaid: false,
            deliveryTimeEstimate: 0,
            warehouseStatus: 2,
            carrierStatus: 0,
            isDeleted: false,
            orderNumber: this._orderNumber,
            warehouse: this._storeId,
            user: this.getRandomOrderCustomer(customers),
            products: this.generateRandomOrderProducts(products),
            _createdAt: this._orderCreatedAt,
        };
    }
    _getOrderReadyForProcessing(customers, products) {
        return {
            isConfirmed: false,
            isCancelled: false,
            isPaid: false,
            deliveryTimeEstimate: 0,
            warehouseStatus: 1,
            carrierStatus: 0,
            isDeleted: false,
            orderNumber: this._orderNumber,
            warehouse: this._storeId,
            user: this.getRandomOrderCustomer(customers),
            products: this.generateRandomOrderProducts(products),
            _createdAt: this._orderCreatedAt,
        };
    }
    _getOrderCancelled(customers, products) {
        const finishedProcessingTime = this.getOrderNextTime(this._orderCreatedAt);
        return {
            isConfirmed: true,
            isCancelled: true,
            isPaid: false,
            deliveryTimeEstimate: 0,
            warehouseStatus: 0,
            carrierStatus: 0,
            isDeleted: false,
            orderNumber: 1,
            warehouse: this._storeId,
            user: this.getRandomOrderCustomer(customers),
            products: this.generateRandomOrderProducts(products),
            finishedProcessingTime,
            _createdAt: this._orderCreatedAt,
        };
    }
    _getOrderConfirmed(customers, products) {
        return {
            isConfirmed: true,
            isCancelled: false,
            isPaid: false,
            deliveryTimeEstimate: 0,
            warehouseStatus: 0,
            carrierStatus: 0,
            isDeleted: false,
            orderNumber: 1,
            warehouse: this._storeId,
            user: this.getRandomOrderCustomer(customers),
            products: this.generateRandomOrderProducts(products),
            _createdAt: this._orderCreatedAt,
        };
    }
    _getOrderJustCreated(customers, products) {
        return {
            isConfirmed: false,
            isCancelled: false,
            isPaid: false,
            deliveryTimeEstimate: 0,
            warehouseStatus: 0,
            carrierStatus: 0,
            isDeleted: false,
            orderNumber: this._orderNumber,
            warehouse: this._storeId,
            user: this.getRandomOrderCustomer(customers),
            products: this.generateRandomOrderProducts(products),
            _createdAt: this._orderCreatedAt,
        };
    }
};
FakeOrdersService = tslib_1.__decorate([
    inversify_1.injectable()
], FakeOrdersService);
exports.FakeOrdersService = FakeOrdersService;
//# sourceMappingURL=FakeOrdersService.js.map