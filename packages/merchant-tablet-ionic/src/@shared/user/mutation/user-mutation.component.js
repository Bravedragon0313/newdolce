"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var user_auth_router_service_1 = require("@modules/client.common.angular2/routers/user-auth-router.service");
var basic_info_form_component_1 = require("../forms/basic-info/basic-info-form.component");
var location_form_component_1 = require("../forms/location/location-form.component");
var angular_1 = require("@ionic/angular");
var User_1 = tslib_1.__importDefault(require("@modules/server.common/entities/User"));
var user_router_service_1 = require("@modules/client.common.angular2/routers/user-router.service");
var utils_1 = require("@modules/server.common/utils");
var UserMutationComponent = (function () {
    function UserMutationComponent(_userAuthRouter, _formBuilder, modalController, userRouter, toastController) {
        this._userAuthRouter = _userAuthRouter;
        this._formBuilder = _formBuilder;
        this.modalController = modalController;
        this.userRouter = userRouter;
        this.toastController = toastController;
        this.form = this._formBuilder.group({
            basicInfo: basic_info_form_component_1.BasicInfoFormComponent.buildForm(this._formBuilder),
            apartment: location_form_component_1.LocationFormComponent.buildApartmentForm(this._formBuilder),
            location: location_form_component_1.LocationFormComponent.buildForm(this._formBuilder),
        });
        this.basicInfo = this.form.get('basicInfo');
        this.apartment = this.form.get('apartment');
        this.location = this.form.get('location');
        this.customerIdEmitter = new core_1.EventEmitter();
        this.mapCoordinatesEmitter = new core_1.EventEmitter();
        this.mapGeometryEmitter = new core_1.EventEmitter();
        this.isNextStepAvailable = false;
    }
    UserMutationComponent.prototype.onCoordinatesChanges = function (coords) {
        this.mapCoordinatesEmitter.emit(coords);
    };
    UserMutationComponent.prototype.onGeometrySend = function (geometry) {
        this.mapGeometryEmitter.emit(geometry);
    };
    UserMutationComponent.prototype.broadcastCustomerId = function (customerId) {
        this.customerIdEmitter.emit(customerId);
    };
    UserMutationComponent.prototype.createCustomer = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var userId, message, userRegistrationInput, userData, user, firstName, lastName, err_1;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, 3, 6]);
                        userRegistrationInput = {
                            user: tslib_1.__assign(tslib_1.__assign({}, this.basicInfoForm.getValue()), { geoLocation: this.locationForm.getValue(), apartment: this.locationForm.getApartment() }),
                        };
                        userData = userRegistrationInput.user;
                        if (userData) {
                            userRegistrationInput.user = this.getDefaultImage(userData);
                        }
                        userRegistrationInput.user.geoLocation.loc.coordinates.reverse();
                        return [4, this._userAuthRouter.register(userRegistrationInput)];
                    case 1:
                        user = _a.sent();
                        userId = user.id;
                        this.broadcastCustomerId(user.id);
                        firstName = user.firstName;
                        lastName = user.lastName;
                        message = "Customer " + (firstName ? firstName + ' ' : '') + " " + (lastName ? lastName + ' ' : '') + "(" + user.id + ") Created";
                        return [3, 6];
                    case 2:
                        err_1 = _a.sent();
                        message = "Error in creating customer: '" + err_1.message + "'!";
                        return [3, 6];
                    case 3: return [4, this.presentToast(message)];
                    case 4:
                        _a.sent();
                        return [4, this.modalController.dismiss(userId)];
                    case 5:
                        _a.sent();
                        return [7];
                    case 6: return [2];
                }
            });
        });
    };
    UserMutationComponent.prototype.saveCustomer = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var geoLocation, updateUpdateData;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        geoLocation = this.locationForm.getValue();
                        geoLocation.loc.coordinates.reverse();
                        updateUpdateData = tslib_1.__assign(tslib_1.__assign({}, this.basicInfoForm.getValue()), { geoLocation: geoLocation, apartment: this.locationForm.getApartment() });
                        if (updateUpdateData) {
                            updateUpdateData = this.getDefaultImage(updateUpdateData);
                        }
                        return [4, this.userRouter.updateUser(this.user.id, updateUpdateData)];
                    case 1:
                        _a.sent();
                        return [4, this.modalController.dismiss()];
                    case 2:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    UserMutationComponent.prototype.cancelModal = function () {
        this.modalController.dismiss();
    };
    UserMutationComponent.prototype.presentToast = function (message) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var toast;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.toastController.create({
                            message: message,
                            duration: 2000,
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2];
                }
            });
        });
    };
    UserMutationComponent.prototype.getDefaultImage = function (user) {
        if (user && !user.image) {
            var firstNameLetter = user.firstName
                ? user.firstName.charAt(0).toUpperCase()
                : '';
            var lastNameLetter = user.lastName
                ? user.lastName.charAt(0).toUpperCase()
                : '';
            if (firstNameLetter || lastNameLetter) {
                user.image = utils_1.getDummyImage(300, 300, firstNameLetter + lastNameLetter);
            }
            else {
                var firstCityLetter = user.geoLocation.city
                    .charAt(0)
                    .toUpperCase();
                user.image = utils_1.getDummyImage(300, 300, firstCityLetter);
            }
        }
        return user;
    };
    tslib_1.__decorate([
        core_1.ViewChild('basicInfoForm'),
        tslib_1.__metadata("design:type", basic_info_form_component_1.BasicInfoFormComponent)
    ], UserMutationComponent.prototype, "basicInfoForm", void 0);
    tslib_1.__decorate([
        core_1.ViewChild('locationForm'),
        tslib_1.__metadata("design:type", location_form_component_1.LocationFormComponent)
    ], UserMutationComponent.prototype, "locationForm", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", User_1.default)
    ], UserMutationComponent.prototype, "user", void 0);
    tslib_1.__decorate([
        core_1.Output(),
        tslib_1.__metadata("design:type", Object)
    ], UserMutationComponent.prototype, "customerIdEmitter", void 0);
    UserMutationComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'user-mutation',
            templateUrl: './user-mutation.component.html',
            styleUrls: ['./user-mutation.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [user_auth_router_service_1.UserAuthRouter,
            forms_1.FormBuilder,
            angular_1.ModalController,
            user_router_service_1.UserRouter,
            angular_1.ToastController])
    ], UserMutationComponent);
    return UserMutationComponent;
}());
exports.UserMutationComponent = UserMutationComponent;
//# sourceMappingURL=user-mutation.component.js.map