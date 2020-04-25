"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var UserOrder_1 = tslib_1.__importDefault(require("./UserOrder"));
var Warehouse_1 = tslib_1.__importDefault(require("./Warehouse"));
var OrderProduct_1 = tslib_1.__importDefault(require("./OrderProduct"));
var Carrier_1 = tslib_1.__importDefault(require("./Carrier"));
var db_1 = require("../@pyro/db");
var lodash_1 = tslib_1.__importDefault(require("lodash"));
var OrderWarehouseStatus_1 = tslib_1.__importStar(require("../enums/OrderWarehouseStatus"));
var OrderCarrierStatus_1 = tslib_1.__importStar(require("../enums/OrderCarrierStatus"));
var OrderStatus_1 = tslib_1.__importDefault(require("../enums/OrderStatus"));
var typeorm_1 = require("typeorm");
var DeliveryType_1 = tslib_1.__importDefault(require("../enums/DeliveryType"));
var Order = (function (_super) {
    tslib_1.__extends(Order, _super);
    function Order(order) {
        var _this = _super.call(this, order) || this;
        if (order) {
            if (order.user) {
                _this.user = new UserOrder_1.default(order.user);
            }
            if (order.warehouse &&
                order.warehouse != null &&
                typeof order.warehouse !== 'string') {
                _this.warehouse = new Warehouse_1.default(order.warehouse);
            }
            if (order.carrier &&
                order.carrier != null &&
                typeof order.carrier !== 'string') {
                _this.carrier = new Carrier_1.default(order.carrier);
            }
            if (order.products && order.products != null) {
                _this.products = lodash_1.default.map(order.products, function (orderProduct) {
                    return new OrderProduct_1.default(orderProduct);
                });
            }
        }
        return _this;
    }
    Object.defineProperty(Order.prototype, "warehouseId", {
        get: function () {
            if (typeof this.warehouse === 'string') {
                return this.warehouse;
            }
            else {
                return this.warehouse.id;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Order.prototype, "isCompleted", {
        get: function () {
            return ((this.isPaid && this.status === OrderStatus_1.default.Delivered) ||
                this.isCancelled);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Order.prototype, "carrierId", {
        get: function () {
            if (this.carrier == null) {
                return null;
            }
            else if (typeof this.carrier === 'string') {
                return this.carrier;
            }
            else {
                return this.carrier.id;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Order.prototype, "warehouseStatusText", {
        get: function () {
            return OrderWarehouseStatus_1.warehouseStatusToString(this.warehouseStatus);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Order.prototype, "carrierStatusText", {
        get: function () {
            return OrderCarrierStatus_1.carrierStatusToString(this.carrierStatus);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Order.prototype, "totalPrice", {
        get: function () {
            return lodash_1.default.sum(lodash_1.default.map(this.products, function (product) { return product.count * product.price; }));
        },
        enumerable: true,
        configurable: true
    });
    Order.prototype.getStatusText = function (language) {
        switch (language) {
            case 'en-US':
                return this._getStatusTextEnglish();
            case 'he-IL':
                return this._getStatusTextHebrew();
            case 'ru-RU':
                return this._getStatusTextRussian();
            case 'bg-BG':
                return this._getStatusTextBulgarian();
            case 'es-ES':
                return this._getStatusTextSpanish();
            case 'it-IT':
                return this._getStatusTextItalian();
            case 'fr-FR':
                return this._getStatusTextFrench();
            default:
                return 'BAD_STATUS';
        }
    };
    Object.defineProperty(Order.prototype, "status", {
        get: function () {
            if (this.carrier == null ||
                this.carrierStatus <= OrderCarrierStatus_1.default.CarrierPickedUpOrder) {
                if (this.warehouseStatus >= 200) {
                    return OrderStatus_1.default.WarehouseIssue;
                }
                else if (this.isCancelled) {
                    return OrderStatus_1.default.CanceledWhileWarehousePreparation;
                }
                else {
                    return OrderStatus_1.default.WarehousePreparation;
                }
            }
            else {
                if (this.carrierStatus >= 200) {
                    return OrderStatus_1.default.CarrierIssue;
                }
                else if (this.isCancelled) {
                    return OrderStatus_1.default.CanceledWhileInDelivery;
                }
                else if (this.isPaid &&
                    this.carrierStatus === OrderCarrierStatus_1.default.DeliveryCompleted) {
                    return OrderStatus_1.default.Delivered;
                }
                else {
                    return OrderStatus_1.default.InDelivery;
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Order.prototype._getStatusTextEnglish = function () {
        switch (this.status) {
            case OrderStatus_1.default.WarehousePreparation:
                return 'Preparation';
            case OrderStatus_1.default.InDelivery:
                return 'In Delivery';
            case OrderStatus_1.default.Delivered:
                return 'Delivered';
            case OrderStatus_1.default.CanceledWhileWarehousePreparation:
            case OrderStatus_1.default.CanceledWhileInDelivery:
                return 'Cancelled';
            case OrderStatus_1.default.WarehouseIssue:
                return 'Preparation Issue';
            case OrderStatus_1.default.CarrierIssue:
                return 'Delivery Issue';
            default:
                return 'BAD_STATUS';
        }
    };
    Order.prototype._getStatusTextBulgarian = function () {
        switch (this.status) {
            case OrderStatus_1.default.WarehousePreparation:
                return 'Подготовка';
            case OrderStatus_1.default.InDelivery:
                return 'Доставя се';
            case OrderStatus_1.default.Delivered:
                return 'Доставено';
            case OrderStatus_1.default.CanceledWhileWarehousePreparation:
            case OrderStatus_1.default.CanceledWhileInDelivery:
                return 'Отказана';
            case OrderStatus_1.default.WarehouseIssue:
                return 'Проблем при подготовката';
            case OrderStatus_1.default.CarrierIssue:
                return 'Проблем при доставката';
            default:
                return 'Проблем с поръчката';
        }
    };
    Order.prototype._getStatusTextHebrew = function () {
        switch (this.status) {
            case OrderStatus_1.default.WarehousePreparation:
                return 'בהכנה';
            case OrderStatus_1.default.InDelivery:
                return 'במשלוח';
            case OrderStatus_1.default.Delivered:
                return 'הסתיים בצלחה';
            case OrderStatus_1.default.CanceledWhileWarehousePreparation:
            case OrderStatus_1.default.CanceledWhileInDelivery:
                return 'התבטל';
            case OrderStatus_1.default.WarehouseIssue:
                return 'בעייה בהכנה';
            case OrderStatus_1.default.CarrierIssue:
                return 'בעייה במשלוח';
            default:
                return 'BAD_STATUS';
        }
    };
    Order.prototype._getStatusTextRussian = function () {
        switch (this.status) {
            case OrderStatus_1.default.WarehousePreparation:
                return 'В подготовке';
            case OrderStatus_1.default.InDelivery:
                return 'В доставки';
            case OrderStatus_1.default.Delivered:
                return 'Доставлено';
            case OrderStatus_1.default.CanceledWhileWarehousePreparation:
            case OrderStatus_1.default.CanceledWhileInDelivery:
                return 'Отменено';
            case OrderStatus_1.default.WarehouseIssue:
                return 'Проблема с подготовкой';
            case OrderStatus_1.default.CarrierIssue:
                return 'Проблема с доставкой';
            default:
                return 'BAD_STATUS';
        }
    };
    Order.prototype._getStatusTextSpanish = function () {
        switch (this.status) {
            case OrderStatus_1.default.WarehousePreparation:
                return 'Preparación';
            case OrderStatus_1.default.InDelivery:
                return 'En la entrega';
            case OrderStatus_1.default.Delivered:
                return 'Entregado';
            case OrderStatus_1.default.CanceledWhileWarehousePreparation:
            case OrderStatus_1.default.CanceledWhileInDelivery:
                return 'Cancelado';
            case OrderStatus_1.default.WarehouseIssue:
                return 'Problema de preparación';
            case OrderStatus_1.default.CarrierIssue:
                return 'Problema de envio';
            default:
                return 'BAD_STATUS';
        }
    };
    Order.prototype._getStatusTextItalian = function () {
        switch (this.status) {
            case OrderStatus_1.default.WarehousePreparation:
                return 'Preparazione';
            case OrderStatus_1.default.InDelivery:
                return 'In consegna';
            case OrderStatus_1.default.Delivered:
                return 'consegnato';
            case OrderStatus_1.default.CanceledWhileWarehousePreparation:
            case OrderStatus_1.default.CanceledWhileInDelivery:
                return 'Annullato';
            case OrderStatus_1.default.WarehouseIssue:
                return 'Problema di preparazione';
            case OrderStatus_1.default.CarrierIssue:
                return 'Problema di consegna';
            default:
                return 'BAD_STATUS';
        }
    };
    Order.prototype._getStatusTextFrench = function () {
        switch (this.status) {
            case OrderStatus_1.default.WarehousePreparation:
                return 'Préparation';
            case OrderStatus_1.default.InDelivery:
                return 'En livraison';
            case OrderStatus_1.default.Delivered:
                return 'Livré';
            case OrderStatus_1.default.CanceledWhileWarehousePreparation:
            case OrderStatus_1.default.CanceledWhileInDelivery:
                return 'Annulé';
            case OrderStatus_1.default.WarehouseIssue:
                return 'Problème de préparation';
            case OrderStatus_1.default.CarrierIssue:
                return 'Problème de livraison';
            default:
                return 'BAD_STATUS';
        }
    };
    tslib_1.__decorate([
        db_1.Index(1),
        db_1.Schema(db_1.getSchema(UserOrder_1.default)),
        tslib_1.__metadata("design:type", UserOrder_1.default)
    ], Order.prototype, "user", void 0);
    tslib_1.__decorate([
        db_1.Index(1),
        db_1.Types.Ref(Warehouse_1.default),
        tslib_1.__metadata("design:type", Object)
    ], Order.prototype, "warehouse", void 0);
    tslib_1.__decorate([
        db_1.Schema([db_1.getSchema(OrderProduct_1.default)]),
        tslib_1.__metadata("design:type", Array)
    ], Order.prototype, "products", void 0);
    tslib_1.__decorate([
        db_1.Types.Boolean(false),
        typeorm_1.Column(),
        tslib_1.__metadata("design:type", Boolean)
    ], Order.prototype, "isConfirmed", void 0);
    tslib_1.__decorate([
        db_1.Types.Boolean(false),
        typeorm_1.Column(),
        tslib_1.__metadata("design:type", Boolean)
    ], Order.prototype, "isCancelled", void 0);
    tslib_1.__decorate([
        db_1.Types.Boolean(false),
        typeorm_1.Column(),
        tslib_1.__metadata("design:type", Boolean)
    ], Order.prototype, "isPaid", void 0);
    tslib_1.__decorate([
        db_1.Schema({ type: Date, required: false }),
        typeorm_1.Column(),
        tslib_1.__metadata("design:type", Date)
    ], Order.prototype, "deliveryTime", void 0);
    tslib_1.__decorate([
        db_1.Schema({ type: Date, required: false }),
        typeorm_1.Column(),
        tslib_1.__metadata("design:type", Date)
    ], Order.prototype, "finishedProcessingTime", void 0);
    tslib_1.__decorate([
        db_1.Schema({ type: Date, required: false }),
        typeorm_1.Column(),
        tslib_1.__metadata("design:type", Date)
    ], Order.prototype, "startDeliveryTime", void 0);
    tslib_1.__decorate([
        db_1.Types.Number(0),
        typeorm_1.Column(),
        tslib_1.__metadata("design:type", Number)
    ], Order.prototype, "deliveryTimeEstimate", void 0);
    tslib_1.__decorate([
        db_1.Types.Number(OrderWarehouseStatus_1.default.NoStatus),
        typeorm_1.Column(),
        tslib_1.__metadata("design:type", Number)
    ], Order.prototype, "warehouseStatus", void 0);
    tslib_1.__decorate([
        db_1.Types.Number(OrderCarrierStatus_1.default.NoCarrier),
        typeorm_1.Column(),
        tslib_1.__metadata("design:type", Number)
    ], Order.prototype, "carrierStatus", void 0);
    tslib_1.__decorate([
        db_1.Types.Ref(Carrier_1.default, { required: false }),
        tslib_1.__metadata("design:type", Object)
    ], Order.prototype, "carrier", void 0);
    tslib_1.__decorate([
        db_1.Types.Boolean(false),
        typeorm_1.Column(),
        tslib_1.__metadata("design:type", Boolean)
    ], Order.prototype, "isDeleted", void 0);
    tslib_1.__decorate([
        db_1.Schema({ type: String, required: false }),
        typeorm_1.Column(),
        tslib_1.__metadata("design:type", String)
    ], Order.prototype, "stripeChargeId", void 0);
    tslib_1.__decorate([
        db_1.Types.Number(),
        typeorm_1.Column(),
        tslib_1.__metadata("design:type", Number)
    ], Order.prototype, "orderNumber", void 0);
    tslib_1.__decorate([
        db_1.Types.Number(DeliveryType_1.default.Delivery),
        typeorm_1.Column(),
        tslib_1.__metadata("design:type", Number)
    ], Order.prototype, "orderType", void 0);
    Order = tslib_1.__decorate([
        db_1.ModelName('Order'),
        typeorm_1.Entity({ name: 'orders' }),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], Order);
    return Order;
}(db_1.DBObject));
exports.default = Order;
//# sourceMappingURL=Order.js.map