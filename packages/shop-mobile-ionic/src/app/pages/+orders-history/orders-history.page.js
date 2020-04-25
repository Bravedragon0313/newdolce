"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var store_service_1 = require("../../services/store.service");
var apollo_angular_1 = require("apollo-angular");
var orders_history_model_1 = require("./orders-history.model");
var OrdersHistoryPage = (function () {
    function OrdersHistoryPage(_store, _apollo) {
        this._store = _store;
        this._apollo = _apollo;
        this._ngDestroy$ = new rxjs_1.Subject();
        this.orders$ = this._apollo
            .watchQuery({
            query: orders_history_model_1.OrdersHistoryQuery,
            variables: { userId: this._store.userId },
        })
            .valueChanges.pipe(operators_1.map(function (res) { return res.data.getOrders; }), operators_1.takeUntil(this._ngDestroy$));
    }
    OrdersHistoryPage.prototype.ngOnDestroy = function () {
        this._ngDestroy$.next();
        this._ngDestroy$.complete();
    };
    OrdersHistoryPage.prototype.getStatusText = function (order) {
        return order.getStatusText(this._store.language);
    };
    OrdersHistoryPage = tslib_1.__decorate([
        core_1.Component({
            selector: 'e-cu-orders-history',
            templateUrl: './orders-history.page.html',
            styleUrls: ['./orders-history.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [store_service_1.Store,
            apollo_angular_1.Apollo])
    ], OrdersHistoryPage);
    return OrdersHistoryPage;
}());
exports.OrdersHistoryPage = OrdersHistoryPage;
//# sourceMappingURL=orders-history.page.js.map