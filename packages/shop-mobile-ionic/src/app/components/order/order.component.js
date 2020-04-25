"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var store_service_1 = require("../../services/store.service");
var OrderStatus_1 = tslib_1.__importDefault(require("@modules/server.common/enums/OrderStatus"));
var Order_1 = tslib_1.__importDefault(require("@modules/server.common/entities/Order"));
var lodash_1 = tslib_1.__importDefault(require("lodash"));
var OrderComponent = (function () {
    function OrderComponent(store) {
        this.store = store;
        this.showDetailsButton = false;
    }
    Object.defineProperty(OrderComponent.prototype, "id", {
        get: function () {
            return this.order.id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OrderComponent.prototype, "warehouseLogo", {
        get: function () {
            return this.order.warehouse.logo;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OrderComponent.prototype, "customerAddress", {
        get: function () {
            return this.order.user.geoLocation.countryName + " " + this.order.user.geoLocation.postcode + ", " + this.order.user.geoLocation.city;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OrderComponent.prototype, "totalPrice", {
        get: function () {
            return lodash_1.default.chain(this.order.products)
                .map(function (p) { return p.count * p.price; })
                .reduce(function (p1, p2) { return p1 + p2; })
                .value();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OrderComponent.prototype, "createdAt", {
        get: function () {
            return this.order.createdAt;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OrderComponent.prototype, "deliveryTime", {
        get: function () {
            var deliveryTimeAsNumber = new Date(this.order.deliveryTime).getTime();
            var createdAtAsNumber = new Date(this.order.createdAt).getTime();
            return this.order.deliveryTime !== null
                ? this._millisToMinutes(deliveryTimeAsNumber - createdAtAsNumber) +
                    ' min'
                : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OrderComponent.prototype, "statusText", {
        get: function () {
            return this.order.getStatusText(this.store.language);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OrderComponent.prototype, "badgeClass", {
        get: function () {
            switch (this.order.status) {
                case OrderStatus_1.default.CanceledWhileInDelivery:
                case OrderStatus_1.default.CanceledWhileWarehousePreparation:
                    return 'badge-energized';
                case OrderStatus_1.default.CarrierIssue:
                case OrderStatus_1.default.WarehouseIssue:
                    return 'badge-assertive';
                default:
                    return 'badge-balanced';
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OrderComponent.prototype, "isCanceled", {
        get: function () {
            return ((this.order &&
                this.order.status === OrderStatus_1.default.CanceledWhileInDelivery) ||
                this.order.status === OrderStatus_1.default.CanceledWhileWarehousePreparation);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OrderComponent.prototype, "isFailed", {
        get: function () {
            return ((this.order && this.order.status === OrderStatus_1.default.CarrierIssue) ||
                this.order.status === OrderStatus_1.default.WarehouseIssue);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OrderComponent.prototype, "isTakeaway", {
        get: function () {
            return (this.order &&
                this.order.products.filter(function (p) { return p.isTakeaway; }).length > 0);
        },
        enumerable: true,
        configurable: true
    });
    OrderComponent.prototype._millisToMinutes = function (ms) {
        var minutes = Math.floor(ms / 60000);
        var seconds = ((ms % 60000) / 1000).toFixed(0);
        return minutes + ':' + (+seconds < 10 ? '0' : '') + seconds;
    };
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Order_1.default)
    ], OrderComponent.prototype, "order", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], OrderComponent.prototype, "showDetailsButton", void 0);
    OrderComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'e-cu-order',
            templateUrl: 'order.component.html',
            styleUrls: ['./order.component.scss'],
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
        }),
        tslib_1.__metadata("design:paramtypes", [store_service_1.Store])
    ], OrderComponent);
    return OrderComponent;
}());
exports.OrderComponent = OrderComponent;
//# sourceMappingURL=order.component.js.map