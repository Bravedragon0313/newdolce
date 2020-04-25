"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var utils_1 = require("@modules/server.common/utils");
var basic_info_form_component_1 = require("./basic-info/basic-info-form.component");
var account_form_component_1 = require("./account/account-form.component");
var rxjs_1 = require("rxjs");
var location_form_component_1 = require("./location/location-form.component");
var AddNewCarrierComponent = (function () {
    function AddNewCarrierComponent() {
        this.emptyLogo = false;
        this._ngDestroy$ = new rxjs_1.Subject();
        this.buttonClickEvent = new core_1.EventEmitter();
        this.onCompleteEvent = new core_1.EventEmitter();
        this.isNextStepOneAvailable = true;
        this.isNextStepTwoAvailable = false;
        this.isNextStepThreeAvailable = false;
        this.backToPrevPage = false;
    }
    AddNewCarrierComponent.prototype.ngOnInit = function () { };
    AddNewCarrierComponent.prototype.ngOnChanges = function () { };
    Object.defineProperty(AddNewCarrierComponent.prototype, "password", {
        get: function () {
            return this.accountForm.password.value;
        },
        enumerable: true,
        configurable: true
    });
    AddNewCarrierComponent.prototype.getCarrierCreateObject = function () {
        var letter = this.basicInfoForm.firstName.value
            .charAt(0)
            .toUpperCase();
        var logo = '';
        this.basicInfoForm.logo.value === ''
            ? (logo = utils_1.getDummyImage(300, 300, letter))
            : (logo = this.basicInfoForm.logo.value);
        var CarrierCreateObject = {
            firstName: this.basicInfoForm.firstName.value,
            lastName: this.basicInfoForm.lastName.value,
            email: this.basicInfoForm.email.value,
            logo: logo,
            phone: this.basicInfoForm.phone.value,
            username: this.accountForm.userName.value,
            isSharedCarrier: this.accountForm.isSharedCarrier.value,
            geoLocation: {
                city: this.locationForm.city.value,
                streetAddress: this.locationForm.street.value,
                house: this.locationForm.house.value,
                loc: {
                    type: 'Point',
                    coordinates: [
                        this.locationForm.lng.value,
                        this.locationForm.lat.value,
                    ],
                },
                countryId: this.locationForm.country.value,
                postcode: this.locationForm.postcode.value,
            },
        };
        return CarrierCreateObject;
    };
    AddNewCarrierComponent.prototype.backToStep1 = function () {
        this.isNextStepOneAvailable = true;
        this.isNextStepTwoAvailable = false;
        this.isNextStepThreeAvailable = false;
    };
    AddNewCarrierComponent.prototype.toStep2event = function ($event) {
        this.isNextStepOneAvailable = false;
        this.isNextStepTwoAvailable = true;
        this.isNextStepThreeAvailable = false;
    };
    AddNewCarrierComponent.prototype.nextToStep2 = function () {
        this.isNextStepOneAvailable = false;
        this.isNextStepTwoAvailable = true;
        this.isNextStepThreeAvailable = false;
    };
    AddNewCarrierComponent.prototype.nextToStep3 = function () {
        this.isNextStepOneAvailable = false;
        this.isNextStepTwoAvailable = false;
        this.isNextStepThreeAvailable = true;
    };
    AddNewCarrierComponent.prototype.clickPrevOrComplete = function (data) {
        var prevOrComplete = data;
        this.buttonClickEvent.emit(prevOrComplete);
    };
    AddNewCarrierComponent.prototype.onClickComplete = function (data) {
        this.onCompleteEvent.emit(data);
    };
    AddNewCarrierComponent.prototype.ngOnDestroy = function () {
        this._ngDestroy$.next();
        this._ngDestroy$.complete();
    };
    tslib_1.__decorate([
        core_1.Output(),
        tslib_1.__metadata("design:type", Object)
    ], AddNewCarrierComponent.prototype, "buttonClickEvent", void 0);
    tslib_1.__decorate([
        core_1.Output(),
        tslib_1.__metadata("design:type", Object)
    ], AddNewCarrierComponent.prototype, "onCompleteEvent", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], AddNewCarrierComponent.prototype, "isDone", void 0);
    tslib_1.__decorate([
        core_1.ViewChild('basicInfoForm', { static: true }),
        tslib_1.__metadata("design:type", basic_info_form_component_1.BasicInfoFormComponent)
    ], AddNewCarrierComponent.prototype, "basicInfoForm", void 0);
    tslib_1.__decorate([
        core_1.ViewChild('accountForm', { static: true }),
        tslib_1.__metadata("design:type", account_form_component_1.AccountFormComponent)
    ], AddNewCarrierComponent.prototype, "accountForm", void 0);
    tslib_1.__decorate([
        core_1.ViewChild('locationForm', { static: true }),
        tslib_1.__metadata("design:type", location_form_component_1.LocationFormComponent)
    ], AddNewCarrierComponent.prototype, "locationForm", void 0);
    AddNewCarrierComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'add-new-carrier',
            templateUrl: './add-new-carrier.html',
            styleUrls: ['./add-new-carrier.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], AddNewCarrierComponent);
    return AddNewCarrierComponent;
}());
exports.AddNewCarrierComponent = AddNewCarrierComponent;
//# sourceMappingURL=add-new-carrier.js.map