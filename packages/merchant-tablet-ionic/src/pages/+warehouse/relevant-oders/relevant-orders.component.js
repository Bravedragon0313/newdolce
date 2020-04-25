"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var warehouse_orders_service_1 = require("../../../services/warehouse-orders.service");
var store_service_1 = require("../../../services/store.service");
var Order_1 = tslib_1.__importDefault(require("@modules/server.common/entities/Order"));
var warehouse_1 = require("../warehouse");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var showOrdersNumber = 10;
var RelevantOrdersComponent = (function () {
    function RelevantOrdersComponent(warehouseOrdersService, store) {
        this.warehouseOrdersService = warehouseOrdersService;
        this.store = store;
        this.toggleOrderContainer = new core_1.EventEmitter();
        this.orders = [];
        this.OrderState = warehouse_1.OrderState;
        this.page = 1;
        this.ngDestroy$ = new rxjs_1.Subject();
        this.loadedPages = [];
        this.subscriptions = [];
    }
    RelevantOrdersComponent.prototype.ngOnChanges = function () {
        if (this.focusedOrder) {
            this.orders = [this.focusedOrder];
        }
        else {
            this.loadAllOrders();
        }
    };
    RelevantOrdersComponent.prototype.ngAfterViewInit = function () { };
    RelevantOrdersComponent.prototype.loadData = function (event) {
        if (event === void 0) { event = null; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var sub;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                sub = this.warehouseOrdersService
                    .getStoreOrdersTableData(this.store.warehouseId, {
                    sort: {
                        field: '_createdAt',
                        sortBy: 'desc',
                    },
                    skip: (this.page - 1) * showOrdersNumber,
                    limit: showOrdersNumber,
                }, 'relevant')
                    .pipe(operators_1.takeUntil(this.ngDestroy$))
                    .subscribe(function (res) {
                    var _a, _b;
                    var orders = res['orders'];
                    var page = res['page'];
                    if (!_this.focusedOrder) {
                        if (_this.loadedPages.includes(res['page'])) {
                            var start = (page - 1) * showOrdersNumber;
                            (_a = _this.orders).splice.apply(_a, tslib_1.__spreadArrays([start, showOrdersNumber], orders));
                        }
                        else {
                            _this.loadedPages.push(res['page']);
                            (_b = _this.orders).push.apply(_b, orders);
                            _this.page++;
                        }
                        if (event) {
                            event.target.complete();
                        }
                    }
                    _this.ordersLoaded = true;
                });
                this.subscriptions.push(sub);
                return [2];
            });
        });
    };
    RelevantOrdersComponent.prototype.loadAllOrders = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _i, _a, sub;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4, this.loadOrdersCount()];
                    case 1:
                        _b.sent();
                        this.orders = [];
                        this.page = 1;
                        _i = 0, _a = this.subscriptions;
                        _b.label = 2;
                    case 2:
                        if (!(_i < _a.length)) return [3, 5];
                        sub = _a[_i];
                        return [4, sub.unsubscribe()];
                    case 3:
                        _b.sent();
                        _b.label = 4;
                    case 4:
                        _i++;
                        return [3, 2];
                    case 5:
                        this.subscriptions = [];
                        this.loadedPages = [];
                        this.loadData();
                        return [2];
                }
            });
        });
    };
    RelevantOrdersComponent.prototype.loadOrdersCount = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4, this.warehouseOrdersService.getCountOfStoreOrders(this.store.warehouseId, 'relevant')];
                    case 1:
                        _a.ordersCount = _b.sent();
                        return [2];
                }
            });
        });
    };
    RelevantOrdersComponent.prototype.ngOnDestroy = function () {
        this.ngDestroy$.next();
        this.ngDestroy$.complete();
    };
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Function)
    ], RelevantOrdersComponent.prototype, "getWarehouseStatus", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Object)
    ], RelevantOrdersComponent.prototype, "onUpdateWarehouseStatus", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Function)
    ], RelevantOrdersComponent.prototype, "orderState", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Order_1.default)
    ], RelevantOrdersComponent.prototype, "focusedOrder", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], RelevantOrdersComponent.prototype, "isOrderContainerLive", void 0);
    tslib_1.__decorate([
        core_1.Output(),
        tslib_1.__metadata("design:type", core_1.EventEmitter)
    ], RelevantOrdersComponent.prototype, "toggleOrderContainer", void 0);
    RelevantOrdersComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'merchant-relevant-orders',
            templateUrl: 'relevant-orders.component.html',
            styleUrls: ['./relevant-orders.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [warehouse_orders_service_1.WarehouseOrdersService,
            store_service_1.Store])
    ], RelevantOrdersComponent);
    return RelevantOrdersComponent;
}());
exports.RelevantOrdersComponent = RelevantOrdersComponent;
//# sourceMappingURL=relevant-orders.component.js.map