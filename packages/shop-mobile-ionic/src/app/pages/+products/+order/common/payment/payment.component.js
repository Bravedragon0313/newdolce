"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var Order_1 = tslib_1.__importDefault(require("@modules/server.common/entities/Order"));
var user_router_service_1 = require("@modules/client.common.angular2/routers/user-router.service");
var store_service_1 = require("app/services/store.service");
var order_router_service_1 = require("@modules/client.common.angular2/routers/order-router.service");
var environment_1 = require("environments/environment");
var angular_1 = require("@ionic/angular");
var order_page_1 = require("../../order.page");
var product_locales_service_1 = require("@modules/client.common.angular2/locale/product-locales.service");
var PaymentComponent = (function () {
    function PaymentComponent(userRouter, orderRouter, store, modalController, _translateProductLocales) {
        this.userRouter = userRouter;
        this.orderRouter = orderRouter;
        this.store = store;
        this.modalController = modalController;
        this._translateProductLocales = _translateProductLocales;
        this.userCard = null;
        this.stripePublishableKey = environment_1.environment.STRIPE_PUBLISHABLE_KEY;
        this.getUserCard();
    }
    PaymentComponent.prototype.payWithUserCard = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                if (!this.stripePublishableKey) {
                    throw Error("Can't pay in app");
                }
                if (this.userCard == null) {
                    throw new Error('userCard is null');
                }
                return [2, this.orderRouter.payWithStripe(this.store.orderId, this.userCard.id)];
            });
        });
    };
    PaymentComponent.prototype.toPaymentStage = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var pay_text, close, handler, currentOrderProduct, currentProduct;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                if (!this.stripePublishableKey) {
                    throw Error("Can't pay in app");
                }
                if (environment_1.environment.ORDER_INFO_TYPE === 'popup') {
                    this.modalController.dismiss();
                }
                pay_text = 'Pay {{amount}}';
                close = function () {
                    if (environment_1.environment.ORDER_INFO_TYPE === 'popup') {
                        _this.showOrderInfoModal();
                    }
                };
                handler = window.StripeCheckout.configure({
                    panelLabel: pay_text,
                    key: this.stripePublishableKey,
                    image: environment_1.environment.STRIPE_POP_UP_LOGO,
                    currency: 'ILS',
                    allowRememberMe: false,
                    token: function (token) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                        var user, cardId, order, err_1, err_2, err_3;
                        return tslib_1.__generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4, this.userRouter.updateEmail(this.store.userId, token['email'])];
                                case 1:
                                    user = _a.sent();
                                    _a.label = 2;
                                case 2:
                                    _a.trys.push([2, 12, , 13]);
                                    return [4, this.userRouter.addPaymentMethod(user.id, token.id)];
                                case 3:
                                    cardId = _a.sent();
                                    _a.label = 4;
                                case 4:
                                    _a.trys.push([4, 10, , 11]);
                                    return [4, this.orderRouter.payWithStripe(this.store.orderId, cardId)];
                                case 5:
                                    order = _a.sent();
                                    console.log('Payment Done!');
                                    _a.label = 6;
                                case 6:
                                    _a.trys.push([6, 8, , 9]);
                                    return [4, this.orderRouter.confirm(this.store.orderId)];
                                case 7:
                                    order = _a.sent();
                                    console.log('Order Confirmed!');
                                    return [3, 9];
                                case 8:
                                    err_1 = _a.sent();
                                    console.error('Could not confirm the order!');
                                    return [3, 9];
                                case 9: return [3, 11];
                                case 10:
                                    err_2 = _a.sent();
                                    alert('Payment Failed!');
                                    console.error('Payment Failed!', err_2);
                                    return [3, 11];
                                case 11: return [3, 13];
                                case 12:
                                    err_3 = _a.sent();
                                    console.error('Payment Method creation failed!', err_3);
                                    return [3, 13];
                                case 13:
                                    close();
                                    return [2];
                            }
                        });
                    }); },
                    closed: function () { return close(); },
                });
                currentOrderProduct = this.order.products[0];
                currentProduct = currentOrderProduct.product;
                handler.open({
                    name: this.localeTranslate(currentProduct.title),
                    description: this.localeTranslate(currentProduct.description),
                    amount: currentOrderProduct.price * 100,
                });
                return [2];
            });
        });
    };
    PaymentComponent.prototype.getUserCard = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var cards;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.userRouter.getCards(this.store.userId)];
                    case 1:
                        cards = _a.sent();
                        this.userCard = cards[0];
                        return [2];
                }
            });
        });
    };
    PaymentComponent.prototype.showOrderInfoModal = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var modal;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.modalController.create({
                            component: order_page_1.OrderPage,
                            cssClass: 'order-info-modal',
                            showBackdrop: true,
                            componentProps: { modalChange: this.modalChange },
                        })];
                    case 1:
                        modal = _a.sent();
                        if (this.modalChange) {
                            this.modalChange.emit(true);
                        }
                        return [2, modal.present()];
                }
            });
        });
    };
    PaymentComponent.prototype.localeTranslate = function (member) {
        return this._translateProductLocales.getTranslate(member);
    };
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Order_1.default)
    ], PaymentComponent.prototype, "order", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", core_1.EventEmitter)
    ], PaymentComponent.prototype, "modalChange", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], PaymentComponent.prototype, "smallButtons", void 0);
    PaymentComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'e-cu-payment',
            templateUrl: './payment.component.html',
            styleUrls: ['./payment.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [user_router_service_1.UserRouter,
            order_router_service_1.OrderRouter,
            store_service_1.Store,
            angular_1.ModalController,
            product_locales_service_1.ProductLocalesService])
    ], PaymentComponent);
    return PaymentComponent;
}());
exports.PaymentComponent = PaymentComponent;
//# sourceMappingURL=payment.component.js.map