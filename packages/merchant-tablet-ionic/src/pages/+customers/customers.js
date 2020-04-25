"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var warehouse_orders_router_service_1 = require("@modules/client.common.angular2/routers/warehouse-orders-router.service");
var rxjs_1 = require("rxjs");
var core_2 = require("@ngx-translate/core");
var ng2_smart_table_1 = require("ng2-smart-table");
var phone_1 = require("../../components/users-table/phone");
var address_1 = require("../../components/users-table/address");
var orders_1 = require("../../components/users-table/orders");
var total_1 = require("../../components/users-table/total");
var email_1 = require("../../components/users-table/email");
var user_mutation_component_1 = require("../../@shared/user/mutation/user-mutation.component");
var image_1 = require("../../components/users-table/image");
var orders_service_1 = require("../../../src/services/orders.service");
var store_service_1 = require("../../../src/services/store.service");
var angular_1 = require("@ionic/angular");
var customer_addr_popup_1 = require("./customer-addr-popup/customer-addr-popup");
var confirm_delete_popup_1 = require("components/confirm-delete-popup/confirm-delete-popup");
var warehouse_orders_service_1 = require("services/warehouse-orders.service");
var operators_1 = require("rxjs/operators");
require("rxjs/add/operator/takeUntil");
var CustomersPage = (function () {
    function CustomersPage(warehouseOrdersRouter, _modalCtrl, _translateService, ordersService, warehouseOrdersService, store) {
        this.warehouseOrdersRouter = warehouseOrdersRouter;
        this._modalCtrl = _modalCtrl;
        this._translateService = _translateService;
        this.ordersService = ordersService;
        this.warehouseOrdersService = warehouseOrdersService;
        this.store = store;
        this.sourceSmartTable = new ng2_smart_table_1.LocalDataSource();
        this._ngDestroy$ = new rxjs_1.Subject();
        this.loadUsers();
        this._loadSettingsSmartTable();
    }
    Object.defineProperty(CustomersPage.prototype, "warehouseId", {
        get: function () {
            return localStorage.getItem('_warehouseId');
        },
        enumerable: true,
        configurable: true
    });
    CustomersPage.prototype.ionViewCanEnter = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var isLogged;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.store.isLogged()];
                    case 1:
                        isLogged = _a.sent();
                        return [2, this.store.maintenanceMode === null && isLogged];
                }
            });
        });
    };
    CustomersPage.prototype.getUserName = function (user) {
        var name = '';
        if (user) {
            var firstName = user.firstName;
            var lastName = user.lastName;
            name = (firstName ? firstName : '') + " " + (lastName ? lastName : '');
        }
        return name.trim();
    };
    CustomersPage.prototype.getOrdersCount = function (userId) {
        return this.orders.filter(function (o) { return o.user.id === userId; }).length;
    };
    CustomersPage.prototype.getTotalPrice = function (userId) {
        var orders = this.orders
            .filter(function (o) { return o.isPaid; })
            .filter(function (o) { return o.user.id === userId; });
        var totalPrice = 0;
        if (orders.length > 0) {
            totalPrice = orders
                .map(function (o) { return o.totalPrice; })
                .reduce(function (a, b) { return a + b; });
        }
        return totalPrice;
    };
    CustomersPage.prototype.showCustomerMutationModal = function (user) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var modal, res, userId, orderCreateInput;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this._modalCtrl.create({
                            component: user_mutation_component_1.UserMutationComponent,
                            componentProps: { user: user },
                            cssClass: 'customer-add-wrapper',
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4, modal.present()];
                    case 2:
                        _a.sent();
                        return [4, modal.onDidDismiss()];
                    case 3:
                        res = _a.sent();
                        userId = res.data;
                        if (!userId) return [3, 5];
                        orderCreateInput = {
                            warehouseId: this.warehouseId,
                            userId: userId,
                            products: [],
                        };
                        return [4, this.warehouseOrdersRouter.create(orderCreateInput)];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5: return [2];
                }
            });
        });
    };
    CustomersPage.prototype.showAddress = function (e) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var modal;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this._modalCtrl.create({
                            component: customer_addr_popup_1.CustomerAddrPopupPage,
                            componentProps: { user: e.data.user },
                            cssClass: 'customer-address-popup',
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4, modal.present()];
                    case 2:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    CustomersPage.prototype.deleteCustomer = function (e) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var modal, res, userId, storeId;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this._modalCtrl.create({
                            component: confirm_delete_popup_1.ConfirmDeletePopupPage,
                            componentProps: { data: e.data },
                            cssClass: 'confirm-delete-wrapper',
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4, modal.present()];
                    case 2:
                        _a.sent();
                        return [4, modal.onDidDismiss()];
                    case 3:
                        res = _a.sent();
                        if (!res.data) return [3, 5];
                        userId = e.data.user.id;
                        storeId = this.warehouseId;
                        return [4, this.warehouseOrdersService.removeUserOrders(storeId, userId)];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5: return [2];
                }
            });
        });
    };
    CustomersPage.prototype.editCustomer = function (e) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var user;
            return tslib_1.__generator(this, function (_a) {
                user = e.data.user;
                this.showCustomerMutationModal(user);
                return [2];
            });
        });
    };
    CustomersPage.prototype.loadUsers = function () {
        var _this = this;
        var loadData = function (usersInfo) {
            var usersVM = usersInfo.map(function (userInfo) {
                return {
                    image: userInfo.user.image,
                    name: _this.getUserName(userInfo.user),
                    user: userInfo.user,
                    phone: userInfo.user.phone,
                    addresses: userInfo.user.geoLocation.city,
                    orders: userInfo.ordersCount,
                    total: userInfo.totalPrice,
                };
            });
            _this.sourceSmartTable.load(usersVM);
        };
        this.ordersService
            .getOrderedUsersInfo(this.warehouseId)
            .pipe(operators_1.takeUntil(this._ngDestroy$))
            .subscribe(function (userInfo) {
            userInfo.length === 0
                ? (_this.showNoDeliveryIcon = true)
                : (_this.showNoDeliveryIcon = false);
            loadData(userInfo);
        });
    };
    CustomersPage.prototype._loadSettingsSmartTable = function () {
        var _this = this;
        var columnTitlePrefix = 'CUSTOMERS_VIEW.';
        var getTranslate = function (name) {
            return _this._translateService.get(columnTitlePrefix + name);
        };
        rxjs_1.forkJoin(getTranslate('IMAGE'), getTranslate('NAME'), getTranslate('PHONE_NUMBER'), getTranslate('ADDRESSES'), getTranslate('ORDERS'), getTranslate('TOTAL'), getTranslate('E_MAIL'))
            .pipe(operators_1.takeUntil(this._ngDestroy$))
            .subscribe(function (_a) {
            var image = _a[0], name = _a[1], phone = _a[2], addresses = _a[3], orders = _a[4], total = _a[5], email = _a[6];
            _this.settingsSmartTable = {
                mode: 'external',
                edit: {
                    editButtonContent: '<i class="fa fa-edit"></i>',
                    confirmEdit: true,
                },
                delete: {
                    deleteButtonContent: '<i class="fa fa-trash"></i>',
                    confirmDelete: true,
                },
                actions: {
                    custom: [
                        {
                            name: 'track',
                            title: '<i class="fa fa-map-marker"></i>',
                        },
                    ],
                },
                columns: {
                    image: {
                        title: image,
                        type: 'custom',
                        renderComponent: image_1.ImageUserComponent,
                        filter: false,
                    },
                    name: { title: name },
                    phone: {
                        title: phone,
                        type: 'custom',
                        renderComponent: phone_1.UserPhoneComponent,
                    },
                    addresses: {
                        title: addresses,
                        type: 'custom',
                        renderComponent: address_1.AddressComponent,
                    },
                    orders: {
                        title: orders,
                        class: 'text-center',
                        type: 'custom',
                        renderComponent: orders_1.OrdersComponent,
                    },
                    total: {
                        title: total,
                        class: 'text-center',
                        type: 'custom',
                        renderComponent: total_1.TotalComponent,
                    },
                    email: {
                        title: email,
                        class: 'text-center',
                        filter: false,
                        type: 'custom',
                        renderComponent: email_1.EmailComponent,
                    },
                },
                pager: {
                    display: true,
                    perPage: 14,
                },
            };
        });
    };
    CustomersPage.prototype.ionViewWillLeave = function () {
        if (this.orders$) {
            this.orders$.unsubscribe();
        }
    };
    CustomersPage.prototype.ngOnDestroy = function () {
        this._ngDestroy$.next();
        this._ngDestroy$.complete();
    };
    CustomersPage = tslib_1.__decorate([
        core_1.Component({
            selector: 'page-customers',
            templateUrl: 'customers.html',
            styleUrls: ['./customers.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [warehouse_orders_router_service_1.WarehouseOrdersRouter,
            angular_1.ModalController,
            core_2.TranslateService,
            orders_service_1.OrdersService,
            warehouse_orders_service_1.WarehouseOrdersService,
            store_service_1.Store])
    ], CustomersPage);
    return CustomersPage;
}());
exports.CustomersPage = CustomersPage;
//# sourceMappingURL=customers.js.map