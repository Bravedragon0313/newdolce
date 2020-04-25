"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var operators_1 = require("rxjs/operators");
var ng2_smart_table_1 = require("ng2-smart-table");
var rxjs_1 = require("rxjs");
var core_2 = require("@ngx-translate/core");
var phone_1 = require("../../components/carriers-table/phone");
var addresses_1 = require("../../components/carriers-table/addresses");
var status_1 = require("../../components/carriers-table/status");
var deliveries_1 = require("../../components/carriers-table/deliveries");
var image_1 = require("../../components/carriers-table/image");
var warehouse_carriers_router_service_1 = require("@modules/client.common.angular2/routers/warehouse-carriers-router.service");
var store_service_1 = require("../../../src/services/store.service");
var angular_1 = require("@ionic/angular");
var add_carriers_popup_1 = require("./add-carriers-popup/add-carriers-popup");
var carrier_edit_popup_1 = require("./carrier-edit-popup/carrier-edit-popup");
var carrier_track_popup_1 = require("./carrier-track-popup/carrier-track-popup");
var router_1 = require("@angular/router");
var confirm_delete_popup_1 = require("components/confirm-delete-popup/confirm-delete-popup");
var warehouse_router_service_1 = require("@modules/client.common.angular2/routers/warehouse-router.service");
var CarriersPage = (function () {
    function CarriersPage(router, modalCtrl, warehouseCarriersRouter, _translateService, store, warehouseRouter) {
        this.router = router;
        this.modalCtrl = modalCtrl;
        this.warehouseCarriersRouter = warehouseCarriersRouter;
        this._translateService = _translateService;
        this.store = store;
        this.warehouseRouter = warehouseRouter;
        this.sourceSmartTable = new ng2_smart_table_1.LocalDataSource();
        this._ngDestroy$ = new rxjs_1.Subject();
    }
    Object.defineProperty(CarriersPage.prototype, "deviceId", {
        get: function () {
            return localStorage.getItem('_deviceId');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CarriersPage.prototype, "warehouseId", {
        get: function () {
            return localStorage.getItem('_warehouseId');
        },
        enumerable: true,
        configurable: true
    });
    CarriersPage.prototype.ngOnInit = function () {
        this._loadCarriers();
        this._loadSettingsSmartTable();
    };
    CarriersPage.prototype.openAddCarriers = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var addCarriersPopupModal;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.modalCtrl.create({
                            component: add_carriers_popup_1.AddCarriersPopupPage,
                            cssClass: 'add-carriers-popup',
                        })];
                    case 1:
                        addCarriersPopupModal = _a.sent();
                        return [4, addCarriersPopupModal.present()];
                    case 2:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    CarriersPage.prototype.trackCarrier = function (e) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var modal;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.modalCtrl.create({
                            component: carrier_track_popup_1.CarrierTrackPopup,
                            componentProps: { carrier: e.data.carrier },
                            cssClass: 'carrier-track-wrapper',
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
    CarriersPage.prototype.deleteCarrier = function (e) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var modal, res, carrierId_1, id, merchant;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.modalCtrl.create({
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
                        if (!res.data) return [3, 6];
                        carrierId_1 = e.data.carrier.id;
                        id = this.warehouseId;
                        return [4, this.warehouseRouter
                                .get(id)
                                .pipe(operators_1.first())
                                .toPromise()];
                    case 4:
                        merchant = _a.sent();
                        merchant.usedCarriersIds = merchant.usedCarriersIds.filter(function (x) { return x !== carrierId_1; });
                        return [4, this.warehouseRouter.save(merchant)];
                    case 5:
                        _a.sent();
                        _a.label = 6;
                    case 6: return [2];
                }
            });
        });
    };
    CarriersPage.prototype.editCarrier = function (e) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var modal;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.modalCtrl.create({
                            component: carrier_edit_popup_1.CarrierEditPopupPage,
                            componentProps: { carrier: e.data.carrier },
                            cssClass: 'carrier-edit-wrapper',
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
    CarriersPage.prototype._loadCarriers = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var loadData;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                loadData = function (carriers) {
                    var carriersVM = carriers.map(function (c) {
                        return {
                            image: c.logo,
                            name: c.firstName + ' ' + c.lastName,
                            phone: c.phone,
                            addresses: c.geoLocation.city,
                            status: c.status === 0 ? 'working' : 'not working',
                            carrier: c,
                        };
                    });
                    _this.sourceSmartTable.load(carriersVM);
                };
                this.warehouseCarriersRouter
                    .get(this.warehouseId)
                    .pipe(operators_1.takeUntil(this._ngDestroy$))
                    .subscribe(function (carriers) {
                    _this.carriers = carriers;
                    loadData(_this.carriers);
                    _this.carriers.length === 0
                        ? (_this.showNoDeliveryIcon = true)
                        : (_this.showNoDeliveryIcon = false);
                });
                return [2];
            });
        });
    };
    CarriersPage.prototype.goToTrackPage = function () {
        this.router.navigateByUrl('/track');
    };
    CarriersPage.prototype.ngOnDestroy = function () {
        this._ngDestroy$.next();
        this._ngDestroy$.complete();
    };
    CarriersPage.prototype._loadSettingsSmartTable = function () {
        var _this = this;
        var columnTitlePrefix = 'CARRIERS_VIEW.';
        var getTranslate = function (name) {
            return _this._translateService.get(columnTitlePrefix + name);
        };
        rxjs_1.forkJoin(getTranslate('IMAGE'), getTranslate('NAME'), getTranslate('PHONE_NUMBER'), getTranslate('ADDRESSES'), getTranslate('STATUS'), getTranslate('DELIVERIES'))
            .pipe(operators_1.takeUntil(this._ngDestroy$))
            .subscribe(function (_a) {
            var image = _a[0], name = _a[1], phone = _a[2], addresses = _a[3], status = _a[4], deliveries = _a[5];
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
                        renderComponent: image_1.ImageComponent,
                        filter: false,
                    },
                    name: { title: name },
                    phone: {
                        title: phone,
                        type: 'custom',
                        renderComponent: phone_1.PhoneComponent,
                    },
                    addresses: {
                        title: addresses,
                        type: 'custom',
                        renderComponent: addresses_1.AddressesComponent,
                    },
                    status: {
                        title: status,
                        class: 'text-center',
                        type: 'custom',
                        renderComponent: status_1.StatusComponent,
                    },
                    deliveries: {
                        title: deliveries,
                        class: 'text-center',
                        filter: false,
                        type: 'custom',
                        renderComponent: deliveries_1.DeliveriesComponent,
                    },
                },
                pager: {
                    display: true,
                    perPage: 14,
                },
            };
        });
    };
    CarriersPage = tslib_1.__decorate([
        core_1.Component({
            selector: 'page-carriers',
            templateUrl: 'carriers.html',
            styleUrls: ['./carriers.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [router_1.Router,
            angular_1.ModalController,
            warehouse_carriers_router_service_1.WarehouseCarriersRouter,
            core_2.TranslateService,
            store_service_1.Store,
            warehouse_router_service_1.WarehouseRouter])
    ], CarriersPage);
    return CarriersPage;
}());
exports.CarriersPage = CarriersPage;
//# sourceMappingURL=carriers.js.map