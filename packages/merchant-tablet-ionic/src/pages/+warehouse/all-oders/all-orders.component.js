"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var warehouse_orders_service_1 = require("../../../services/warehouse-orders.service");
var store_service_1 = require("../../../services/store.service");
var Order_1 = tslib_1.__importDefault(require("@modules/server.common/entities/Order"));
var warehouse_1 = require("../warehouse");
var AllOrdersComponent = (function () {
    function AllOrdersComponent(warehouseOrdersService, store) {
        this.warehouseOrdersService = warehouseOrdersService;
        this.store = store;
        this.toggleOrderContainer = new core_1.EventEmitter();
        this.orders = [];
        this.OrderState = warehouse_1.OrderState;
        this.page = 1;
    }
    AllOrdersComponent.prototype.ngOnInit = function () {
        this.loadAllOrders();
    };
    AllOrdersComponent.prototype.ngOnChanges = function () {
        if (this.focusedOrder) {
            this.orders = [this.focusedOrder];
        }
        else {
            this.orders = [];
            this.page = 1;
            this.loadAllOrders();
        }
    };
    AllOrdersComponent.prototype.loadPage = function (page) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.orders$) return [3, 2];
                        return [4, this.orders$.unsubscribe()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        this.orders$ = this.warehouseOrdersService
                            .getStoreOrdersTableData(this.store.warehouseId, {
                            sort: {
                                field: '_createdAt',
                                sortBy: 'desc',
                            },
                            skip: (page - 1) * 10,
                            limit: 10,
                        }, 'all')
                            .subscribe(function (res) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                            var orders;
                            return tslib_1.__generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        orders = res['orders'];
                                        return [4, this.loadOrdersCount()];
                                    case 1:
                                        _a.sent();
                                        if (!this.focusedOrder) {
                                            this.page = page;
                                            this.orders = orders;
                                        }
                                        this.ordersLoaded = true;
                                        return [2];
                                }
                            });
                        }); });
                        return [2];
                }
            });
        });
    };
    AllOrdersComponent.prototype.ngOnDestroy = function () {
        if (this.orders$) {
            this.orders$.unsubscribe();
        }
    };
    AllOrdersComponent.prototype.loadAllOrders = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.loadOrdersCount()];
                    case 1:
                        _a.sent();
                        this.loadPage(1);
                        return [2];
                }
            });
        });
    };
    AllOrdersComponent.prototype.loadOrdersCount = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4, this.warehouseOrdersService.getCountOfStoreOrders(this.store.warehouseId, 'all')];
                    case 1:
                        _a.ordersCount = _b.sent();
                        return [2];
                }
            });
        });
    };
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Function)
    ], AllOrdersComponent.prototype, "getWarehouseStatus", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Object)
    ], AllOrdersComponent.prototype, "onUpdateWarehouseStatus", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Function)
    ], AllOrdersComponent.prototype, "orderState", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Order_1.default)
    ], AllOrdersComponent.prototype, "focusedOrder", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], AllOrdersComponent.prototype, "isOrderContainerLive", void 0);
    tslib_1.__decorate([
        core_1.Output(),
        tslib_1.__metadata("design:type", core_1.EventEmitter)
    ], AllOrdersComponent.prototype, "toggleOrderContainer", void 0);
    AllOrdersComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'merchant-all-orders',
            templateUrl: 'all-orders.component.html',
            styleUrls: ['./all-orders.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [warehouse_orders_service_1.WarehouseOrdersService,
            store_service_1.Store])
    ], AllOrdersComponent);
    return AllOrdersComponent;
}());
exports.AllOrdersComponent = AllOrdersComponent;
//# sourceMappingURL=all-orders.component.js.map