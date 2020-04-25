"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var lodash_1 = tslib_1.__importDefault(require("lodash"));
var db_1 = require("../@pyro/db");
var GeoLocation_1 = tslib_1.__importDefault(require("./GeoLocation"));
var WarehouseProduct_1 = tslib_1.__importDefault(require("./WarehouseProduct"));
var typeorm_1 = require("typeorm");
var OrderBarcodeTypes_1 = tslib_1.__importDefault(require("../enums/OrderBarcodeTypes"));
var PaymentGateway_1 = tslib_1.__importDefault(require("./PaymentGateway"));
var Warehouse = (function (_super) {
    tslib_1.__extends(Warehouse, _super);
    function Warehouse(warehouse) {
        var _this = _super.call(this, warehouse) || this;
        if (warehouse) {
            if (warehouse.geoLocation) {
                _this.geoLocation = new GeoLocation_1.default(warehouse.geoLocation);
            }
            if (warehouse.products) {
                _this.products = lodash_1.default.map(warehouse.products, function (warehouseProduct) {
                    return new WarehouseProduct_1.default(warehouseProduct);
                });
            }
            if (!warehouse.barcodeData) {
                _this.barcodeData = warehouse._id.toString();
            }
        }
        return _this;
    }
    tslib_1.__decorate([
        db_1.Types.Boolean(false),
        typeorm_1.Column(),
        tslib_1.__metadata("design:type", Boolean)
    ], Warehouse.prototype, "isActive", void 0);
    tslib_1.__decorate([
        db_1.Types.Boolean(true),
        typeorm_1.Column(),
        tslib_1.__metadata("design:type", Boolean)
    ], Warehouse.prototype, "isPaymentEnabled", void 0);
    tslib_1.__decorate([
        db_1.Schema(db_1.getSchema(GeoLocation_1.default)),
        tslib_1.__metadata("design:type", GeoLocation_1.default)
    ], Warehouse.prototype, "geoLocation", void 0);
    tslib_1.__decorate([
        db_1.Schema({ type: Object }),
        tslib_1.__metadata("design:type", Object)
    ], Warehouse.prototype, "deliveryAreas", void 0);
    tslib_1.__decorate([
        db_1.Schema([db_1.getSchema(WarehouseProduct_1.default)]),
        tslib_1.__metadata("design:type", Array)
    ], Warehouse.prototype, "products", void 0);
    tslib_1.__decorate([
        db_1.Types.String(),
        typeorm_1.Column(),
        tslib_1.__metadata("design:type", String)
    ], Warehouse.prototype, "name", void 0);
    tslib_1.__decorate([
        db_1.Schema({ type: String, required: false }),
        typeorm_1.Column(),
        tslib_1.__metadata("design:type", String)
    ], Warehouse.prototype, "logo", void 0);
    tslib_1.__decorate([
        db_1.Schema({ type: String, unique: true }),
        typeorm_1.Column(),
        tslib_1.__metadata("design:type", String)
    ], Warehouse.prototype, "username", void 0);
    tslib_1.__decorate([
        db_1.Schema({ type: String, required: false, select: false }),
        typeorm_1.Column(),
        tslib_1.__metadata("design:type", String)
    ], Warehouse.prototype, "hash", void 0);
    tslib_1.__decorate([
        db_1.Schema({ type: String, required: false }),
        typeorm_1.Column(),
        tslib_1.__metadata("design:type", String)
    ], Warehouse.prototype, "contactEmail", void 0);
    tslib_1.__decorate([
        db_1.Schema({ type: String, required: false }),
        typeorm_1.Column(),
        tslib_1.__metadata("design:type", String)
    ], Warehouse.prototype, "contactPhone", void 0);
    tslib_1.__decorate([
        db_1.Schema({ type: String, required: false }),
        typeorm_1.Column(),
        tslib_1.__metadata("design:type", String)
    ], Warehouse.prototype, "ordersPhone", void 0);
    tslib_1.__decorate([
        db_1.Schema({ type: String, required: false }),
        typeorm_1.Column(),
        tslib_1.__metadata("design:type", String)
    ], Warehouse.prototype, "ordersEmail", void 0);
    tslib_1.__decorate([
        db_1.Schema([Number]),
        typeorm_1.Column(),
        tslib_1.__metadata("design:type", Array)
    ], Warehouse.prototype, "forwardOrdersUsing", void 0);
    tslib_1.__decorate([
        db_1.Types.Boolean(true),
        typeorm_1.Column(),
        tslib_1.__metadata("design:type", Boolean)
    ], Warehouse.prototype, "isManufacturing", void 0);
    tslib_1.__decorate([
        db_1.Types.Boolean(true),
        typeorm_1.Column(),
        tslib_1.__metadata("design:type", Boolean)
    ], Warehouse.prototype, "isCarrierRequired", void 0);
    tslib_1.__decorate([
        db_1.Schema([String]),
        tslib_1.__metadata("design:type", Array)
    ], Warehouse.prototype, "devicesIds", void 0);
    tslib_1.__decorate([
        db_1.Schema([String]),
        tslib_1.__metadata("design:type", Array)
    ], Warehouse.prototype, "usedCarriersIds", void 0);
    tslib_1.__decorate([
        db_1.Types.Boolean(false),
        typeorm_1.Column(),
        tslib_1.__metadata("design:type", Boolean)
    ], Warehouse.prototype, "hasRestrictedCarriers", void 0);
    tslib_1.__decorate([
        db_1.Schema([String]),
        tslib_1.__metadata("design:type", Array)
    ], Warehouse.prototype, "carriersIds", void 0);
    tslib_1.__decorate([
        db_1.Types.Boolean(false),
        typeorm_1.Column(),
        tslib_1.__metadata("design:type", Boolean)
    ], Warehouse.prototype, "isDeleted", void 0);
    tslib_1.__decorate([
        db_1.Schema({ type: Boolean, required: false }),
        typeorm_1.Column(),
        tslib_1.__metadata("design:type", Boolean)
    ], Warehouse.prototype, "productsDelivery", void 0);
    tslib_1.__decorate([
        db_1.Schema({ type: Boolean, required: false }),
        typeorm_1.Column(),
        tslib_1.__metadata("design:type", Boolean)
    ], Warehouse.prototype, "productsTakeaway", void 0);
    tslib_1.__decorate([
        db_1.Schema({ type: Number, required: false }),
        typeorm_1.Column(),
        tslib_1.__metadata("design:type", Number)
    ], Warehouse.prototype, "orderBarcodeType", void 0);
    tslib_1.__decorate([
        db_1.Schema({ type: String, unique: true, sparse: true }),
        typeorm_1.Column(),
        tslib_1.__metadata("design:type", String)
    ], Warehouse.prototype, "barcodeData", void 0);
    tslib_1.__decorate([
        db_1.Schema([db_1.getSchema(PaymentGateway_1.default)]),
        tslib_1.__metadata("design:type", Array)
    ], Warehouse.prototype, "paymentGateways", void 0);
    tslib_1.__decorate([
        db_1.Schema({ type: Boolean, required: false }),
        typeorm_1.Column(),
        tslib_1.__metadata("design:type", Boolean)
    ], Warehouse.prototype, "useOnlyRestrictedCarriersForDelivery", void 0);
    tslib_1.__decorate([
        db_1.Schema({ type: Boolean, required: false }),
        typeorm_1.Column(),
        tslib_1.__metadata("design:type", Boolean)
    ], Warehouse.prototype, "preferRestrictedCarriersForDelivery", void 0);
    Warehouse = tslib_1.__decorate([
        db_1.ModelName('Warehouse'),
        typeorm_1.Entity({ name: 'warehouses' }),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], Warehouse);
    return Warehouse;
}(db_1.DBObject));
exports.default = Warehouse;
//# sourceMappingURL=Warehouse.js.map