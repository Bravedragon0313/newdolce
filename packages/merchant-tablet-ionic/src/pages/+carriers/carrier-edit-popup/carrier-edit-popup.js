"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var basic_info_form_component_1 = require("./basic-info/basic-info-form.component");
var account_form_component_1 = require("./account/account-form.component");
var rxjs_1 = require("rxjs");
var location_form_component_1 = require("./location/location-form.component");
var carrier_service_1 = require("../../../services/carrier.service");
var angular_1 = require("@ionic/angular");
var Carrier_1 = tslib_1.__importDefault(require("@modules/server.common/entities/Carrier"));
var warehouse_carriers_router_service_1 = require("@modules/client.common.angular2/routers/warehouse-carriers-router.service");
var CarrierEditPopupPage = (function () {
    function CarrierEditPopupPage(modalCtrl, _carrierService, warehouseCarriersRouter) {
        this.modalCtrl = modalCtrl;
        this._carrierService = _carrierService;
        this.warehouseCarriersRouter = warehouseCarriersRouter;
        this.emptyLogo = false;
        this._ngDestroy$ = new rxjs_1.Subject();
        this.buttonClickEvent = new core_1.EventEmitter();
        this.onCompleteEvent = new core_1.EventEmitter();
        this.isNextStepOneAvailable = true;
        this.isNextStepTwoAvailable = false;
        this.isNextStepThreeAvailable = false;
        this.backToPrevPage = false;
    }
    CarrierEditPopupPage.prototype.ngOnInit = function () { };
    CarrierEditPopupPage.prototype.ngOnChanges = function () { };
    CarrierEditPopupPage.prototype._updateCarrier = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var basic, geoLocation, account, carrier, carrierCreateObj, id;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        basic = {
                            firstName: this.basicInfoForm.firstName.value,
                            lastName: this.basicInfoForm.lastName.value,
                            phone: this.basicInfoForm.phone.value,
                            logo: this.basicInfoForm.logo.value,
                            email: this.basicInfoForm.email.value,
                        };
                        geoLocation = {
                            countryId: Number(this.locationForm.country.value),
                            city: this.locationForm.city.value,
                            streetAddress: this.locationForm.street.value,
                            postcode: this.locationForm.postcode.value,
                            house: this.locationForm.house.value,
                            loc: {
                                type: 'Point',
                                coordinates: [
                                    Number(this.locationForm.lng.value),
                                    Number(this.locationForm.lat.value),
                                ],
                            },
                        };
                        account = {
                            isActive: this.accountForm.isActive.value,
                            isSharedCarrier: this.accountForm.isSharedCarrier.value,
                            username: this.accountForm.userName.value,
                            password: this.accountForm.password.value,
                            repeatPassword: this.accountForm.repeatPassword.value,
                        };
                        carrier = this.carrier;
                        carrierCreateObj = {
                            firstName: basic.firstName,
                            lastName: basic.lastName,
                            phone: basic.phone,
                            email: basic.email,
                            logo: basic.logo,
                            username: account.username,
                            isActive: account.isActive,
                            isSharedCarrier: account.isSharedCarrier,
                            geoLocation: geoLocation,
                        };
                        if (!account.password) return [3, 2];
                        return [4, this.warehouseCarriersRouter.updatePassword(carrier.id, account.password)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [4, this._carrierService
                            .updateCarrier(carrier.id, carrierCreateObj)
                            .toPromise()];
                    case 3:
                        id = _a.sent();
                        this.cancelModal();
                        return [2];
                }
            });
        });
    };
    Object.defineProperty(CarrierEditPopupPage.prototype, "password", {
        get: function () {
            return this.accountForm.password.value;
        },
        enumerable: true,
        configurable: true
    });
    CarrierEditPopupPage.prototype.backToStep1 = function () {
        this.isNextStepOneAvailable = true;
        this.isNextStepTwoAvailable = false;
        this.isNextStepThreeAvailable = false;
    };
    CarrierEditPopupPage.prototype.toStep2event = function ($event) {
        this.isNextStepOneAvailable = false;
        this.isNextStepTwoAvailable = true;
        this.isNextStepThreeAvailable = false;
    };
    CarrierEditPopupPage.prototype.nextToStep2 = function () {
        this.isNextStepOneAvailable = false;
        this.isNextStepTwoAvailable = true;
        this.isNextStepThreeAvailable = false;
    };
    CarrierEditPopupPage.prototype.nextToStep3 = function () {
        this.isNextStepOneAvailable = false;
        this.isNextStepTwoAvailable = false;
        this.isNextStepThreeAvailable = true;
    };
    CarrierEditPopupPage.prototype.cancelModal = function () {
        this.modalCtrl.dismiss();
    };
    CarrierEditPopupPage.prototype.clickPrevOrComplete = function (data) {
        var prevOrComplete = data;
        this.buttonClickEvent.emit(prevOrComplete);
    };
    CarrierEditPopupPage.prototype.onClickComplete = function (data) {
        this._updateCarrier();
    };
    CarrierEditPopupPage.prototype.ngOnDestroy = function () {
        this._ngDestroy$.next();
        this._ngDestroy$.complete();
    };
    tslib_1.__decorate([
        core_1.Output(),
        tslib_1.__metadata("design:type", Object)
    ], CarrierEditPopupPage.prototype, "buttonClickEvent", void 0);
    tslib_1.__decorate([
        core_1.Output(),
        tslib_1.__metadata("design:type", Object)
    ], CarrierEditPopupPage.prototype, "onCompleteEvent", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], CarrierEditPopupPage.prototype, "isDone", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Carrier_1.default)
    ], CarrierEditPopupPage.prototype, "carrier", void 0);
    tslib_1.__decorate([
        core_1.ViewChild('basicInfoForm', { static: true }),
        tslib_1.__metadata("design:type", basic_info_form_component_1.BasicInfoFormComponent)
    ], CarrierEditPopupPage.prototype, "basicInfoForm", void 0);
    tslib_1.__decorate([
        core_1.ViewChild('accountForm', { static: true }),
        tslib_1.__metadata("design:type", account_form_component_1.AccountFormComponent)
    ], CarrierEditPopupPage.prototype, "accountForm", void 0);
    tslib_1.__decorate([
        core_1.ViewChild('locationForm', { static: true }),
        tslib_1.__metadata("design:type", location_form_component_1.LocationFormComponent)
    ], CarrierEditPopupPage.prototype, "locationForm", void 0);
    CarrierEditPopupPage = tslib_1.__decorate([
        core_1.Component({
            selector: 'carrier-edit-popup',
            templateUrl: 'carrier-edit-popup.html',
            styleUrls: ['./carrier-edit-popup.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [angular_1.ModalController,
            carrier_service_1.CarrierService,
            warehouse_carriers_router_service_1.WarehouseCarriersRouter])
    ], CarrierEditPopupPage);
    return CarrierEditPopupPage;
}());
exports.CarrierEditPopupPage = CarrierEditPopupPage;
//# sourceMappingURL=carrier-edit-popup.js.map