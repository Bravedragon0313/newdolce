"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var Order_1 = tslib_1.__importDefault(require("@modules/server.common/entities/Order"));
var environment_1 = require("environments/environment");
var product_locales_service_1 = require("@modules/client.common.angular2/locale/product-locales.service");
var OrderProductsInfo = (function () {
    function OrderProductsInfo(_translateProductLocales) {
        this._translateProductLocales = _translateProductLocales;
        this.undo = new core_1.EventEmitter();
        this.complete = new core_1.EventEmitter();
        this.listView = environment_1.environment.PRODUCTS_VIEW_TYPE === 'list';
        this.ngDestroy$ = new rxjs_1.Subject();
    }
    OrderProductsInfo.prototype.ngOnInit = function () {
        console.warn('OrderProductsInfo Initialize.');
    };
    OrderProductsInfo.prototype.localeTranslate = function (member) {
        return this._translateProductLocales.getTranslate(member);
    };
    OrderProductsInfo.prototype.ngOnDestroy = function () {
        console.warn('OrderProductsInfo did leave');
        this.ngDestroy$.next();
        this.ngDestroy$.complete();
    };
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Order_1.default)
    ], OrderProductsInfo.prototype, "order", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], OrderProductsInfo.prototype, "paymentsEnabled", void 0);
    tslib_1.__decorate([
        core_1.Output(),
        tslib_1.__metadata("design:type", Object)
    ], OrderProductsInfo.prototype, "undo", void 0);
    tslib_1.__decorate([
        core_1.Output(),
        tslib_1.__metadata("design:type", Object)
    ], OrderProductsInfo.prototype, "complete", void 0);
    OrderProductsInfo = tslib_1.__decorate([
        core_1.Component({
            selector: 'e-cu-order-produts-info',
            templateUrl: './products-info.component.html',
            styleUrls: ['./products-info.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [product_locales_service_1.ProductLocalesService])
    ], OrderProductsInfo);
    return OrderProductsInfo;
}());
exports.OrderProductsInfo = OrderProductsInfo;
//# sourceMappingURL=products-info.component.js.map