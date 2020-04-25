"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var rxjs_1 = require("rxjs");
var apollo_angular_1 = require("apollo-angular");
var operators_1 = require("rxjs/operators");
var order_details_model_1 = require("./order-details.model");
var OrderDetailsPage = (function () {
    function OrderDetailsPage(_route, _apollo) {
        var _this = this;
        this._route = _route;
        this._apollo = _apollo;
        this._ngDestroy$ = new rxjs_1.Subject();
        this._route.params
            .pipe(operators_1.switchMap(function (_a) {
            var id = _a.id;
            return _this._apollo.query({
                query: order_details_model_1.OrderDetailsQuery,
                variables: { id: id },
            });
        }), operators_1.map(function (res) { return res.data.getOrder; }), operators_1.takeUntil(this._ngDestroy$))
            .subscribe(function (order) {
            _this.order = order;
        });
    }
    OrderDetailsPage.prototype.ngOnDestroy = function () {
        this._ngDestroy$.next();
        this._ngDestroy$.complete();
    };
    OrderDetailsPage = tslib_1.__decorate([
        core_1.Component({
            templateUrl: 'order-details.page.html',
            styleUrls: ['./order-details.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [router_1.ActivatedRoute,
            apollo_angular_1.Apollo])
    ], OrderDetailsPage);
    return OrderDetailsPage;
}());
exports.OrderDetailsPage = OrderDetailsPage;
//# sourceMappingURL=order-details.page.js.map