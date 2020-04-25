"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var add_choice_1 = require("./add-choice/add-choice");
var add_new_carrier_1 = require("./add-new-carrier/add-new-carrier");
var carrier_router_service_1 = require("@modules/client.common.angular2/routers/carrier-router.service");
var warehouse_router_service_1 = require("@modules/client.common.angular2/routers/warehouse-router.service");
var store_service_1 = require("../../../services/store.service");
var carriers_catalog_1 = require("./carriers-catalog/carriers-catalog");
var core_2 = require("@ngx-translate/core");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var angular_1 = require("@ionic/angular");
var AddCarriersPopupPage = (function () {
    function AddCarriersPopupPage(modalController, carrierRouter, warehouseRouter, store, _translateService) {
        this.modalController = modalController;
        this.carrierRouter = carrierRouter;
        this.warehouseRouter = warehouseRouter;
        this.store = store;
        this._translateService = _translateService;
        this.choicedNew = false;
        this._ngDestroy$ = new rxjs_1.Subject();
    }
    AddCarriersPopupPage.prototype.ngOnInit = function () {
        var _this = this;
        this.wizzardFromStep1.showNext = false;
        this.choice$ = this.addChoiceComponent.choice.subscribe(function (res) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                this.choiced = res;
                this.wizzardFrom.next();
                return [2];
            });
        }); });
    };
    AddCarriersPopupPage.prototype.buttonClickEvent = function (data) {
        var prevOrdNext = data;
        if (prevOrdNext === 'previous') {
            this.wizzardFrom.previous();
            this.choicedNew = false;
        }
    };
    AddCarriersPopupPage.prototype.completeCreateCarrier = function (data) {
        if (data === 'complete') {
            this.wizzardFrom.complete();
        }
    };
    Object.defineProperty(AddCarriersPopupPage.prototype, "wizardStepsTitle", {
        get: function () {
            var _this = this;
            var resultTitle = '';
            var step1 = function () {
                _this._translateService
                    .get('CARRIERS_VIEW.ADD_CARRIER.SELECT_HOW_TO_ADD')
                    .pipe(operators_1.takeUntil(_this._ngDestroy$))
                    .subscribe(function (title) { return (resultTitle = title); });
                return resultTitle;
            };
            var step2 = function () {
                _this._translateService
                    .get('CARRIERS_VIEW.ADD_CARRIER.ADD')
                    .pipe(operators_1.takeUntil(_this._ngDestroy$))
                    .subscribe(function (title) { return (resultTitle = title); });
                return resultTitle;
            };
            return {
                step1: step1(),
                step2: step2(),
            };
        },
        enumerable: true,
        configurable: true
    });
    AddCarriersPopupPage.prototype.ngOnDestroy = function () {
        if (this.choice$) {
            this.choice$.unsubscribe();
        }
        if (this.form$) {
            this.form$.unsubscribe();
        }
        this._ngDestroy$.next();
        this._ngDestroy$.complete();
    };
    AddCarriersPopupPage.prototype.onStep1Next = function (choiced) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                if (choiced === 'new') {
                    this.choicedNew = true;
                }
                else if (choiced === 'existing') {
                    this.choicedNew = false;
                    this.form$ = this.carriersCatalog.hasChanges.subscribe(function (r) {
                        _this.isDone = _this.carriersCatalog.selecteCarriers.length > 0;
                    });
                }
                return [2];
            });
        });
    };
    AddCarriersPopupPage.prototype.add = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var warehouse, carrier;
            var _a;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.cancelModal();
                        return [4, this.warehouseRouter
                                .get(this.store.warehouseId)
                                .pipe(operators_1.first())
                                .toPromise()];
                    case 1:
                        warehouse = _b.sent();
                        if (!(this.choiced === 'new')) return [3, 3];
                        return [4, this.carrierRouter.register({
                                carrier: this.addNewCarrierComponent.getCarrierCreateObject(),
                                password: this.addNewCarrierComponent.password.value,
                            })];
                    case 2:
                        carrier = _b.sent();
                        warehouse.hasRestrictedCarriers = true;
                        warehouse.usedCarriersIds.push(carrier.id);
                        return [3, 4];
                    case 3:
                        if (this.choiced === 'existing') {
                            warehouse.hasRestrictedCarriers = true;
                            (_a = warehouse.usedCarriersIds).push.apply(_a, this.carriersCatalog.selecteCarriers.map(function (c) { return c.id; }));
                        }
                        _b.label = 4;
                    case 4:
                        this.warehouseRouter.save(warehouse);
                        return [2];
                }
            });
        });
    };
    AddCarriersPopupPage.prototype.cancelModal = function () {
        this.modalController.dismiss();
    };
    tslib_1.__decorate([
        core_1.ViewChild('addNewCarrier', { static: false }),
        tslib_1.__metadata("design:type", add_new_carrier_1.AddNewCarrierComponent)
    ], AddCarriersPopupPage.prototype, "addNewCarrierComponent", void 0);
    tslib_1.__decorate([
        core_1.ViewChild('carriersCatalog', { static: false }),
        tslib_1.__metadata("design:type", carriers_catalog_1.CarriersCatalogComponent)
    ], AddCarriersPopupPage.prototype, "carriersCatalog", void 0);
    tslib_1.__decorate([
        core_1.ViewChild('addChoice', { static: true }),
        tslib_1.__metadata("design:type", add_choice_1.AddChoiceComponent)
    ], AddCarriersPopupPage.prototype, "addChoiceComponent", void 0);
    tslib_1.__decorate([
        core_1.ViewChild('wizzardFrom', { static: true }),
        tslib_1.__metadata("design:type", Object)
    ], AddCarriersPopupPage.prototype, "wizzardFrom", void 0);
    tslib_1.__decorate([
        core_1.ViewChild('wizzardFromStep1', { static: true }),
        tslib_1.__metadata("design:type", Object)
    ], AddCarriersPopupPage.prototype, "wizzardFromStep1", void 0);
    tslib_1.__decorate([
        core_1.ViewChild('wizardFormStep2', { static: true }),
        tslib_1.__metadata("design:type", Object)
    ], AddCarriersPopupPage.prototype, "wizardFormStep2", void 0);
    AddCarriersPopupPage = tslib_1.__decorate([
        core_1.Component({
            selector: 'page-add-carriers-popup',
            templateUrl: 'add-carriers-popup.html',
            styleUrls: ['./add-carriers-popup.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [angular_1.ModalController,
            carrier_router_service_1.CarrierRouter,
            warehouse_router_service_1.WarehouseRouter,
            store_service_1.Store,
            core_2.TranslateService])
    ], AddCarriersPopupPage);
    return AddCarriersPopupPage;
}());
exports.AddCarriersPopupPage = AddCarriersPopupPage;
//# sourceMappingURL=add-carriers-popup.js.map