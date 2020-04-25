"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var Warehouse_1 = tslib_1.__importDefault(require("@modules/server.common/entities/Warehouse"));
var warehouse_router_service_1 = require("@modules/client.common.angular2/routers/warehouse-router.service");
var angular_1 = require("@ionic/angular");
var AccountComponent = (function () {
    function AccountComponent(formBuilder, warehouseRouter, alertController) {
        this.formBuilder = formBuilder;
        this.warehouseRouter = warehouseRouter;
        this.alertController = alertController;
        this.buildForm();
        this.bindFormControls();
    }
    AccountComponent.prototype.saveChanges = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var error_1, alertError, alertSuccess;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.prepareUpdate();
                        return [4, this.warehouseRouter.save(this.currWarehouse)];
                    case 1:
                        _a.sent();
                        if (!this.password.value) return [3, 7];
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 7]);
                        return [4, this.warehouseRouter.updatePassword(this.currWarehouse.id, {
                                current: this.oldPassword.value,
                                new: this.password.value,
                            })];
                    case 3:
                        _a.sent();
                        return [3, 7];
                    case 4:
                        error_1 = _a.sent();
                        return [4, this.alertController.create({
                                cssClass: 'error-info',
                                message: error_1.message,
                                buttons: ['OK'],
                            })];
                    case 5:
                        alertError = _a.sent();
                        return [4, alertError.present()];
                    case 6:
                        _a.sent();
                        return [2];
                    case 7: return [4, this.alertController.create({
                            cssClass: 'success-info',
                            message: 'Successfully saved changes',
                            buttons: ['OK'],
                        })];
                    case 8:
                        alertSuccess = _a.sent();
                        return [4, alertSuccess.present()];
                    case 9:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    AccountComponent.prototype.ngOnChanges = function () {
        if (this.currWarehouse) {
            this.username.setValue(this.currWarehouse.username);
        }
    };
    AccountComponent.prototype.buildForm = function () {
        var _this = this;
        this.accountForm = this.formBuilder.group({
            username: ['', forms_1.Validators.minLength(4)],
            password: [''],
            oldPassword: [''],
            repeatPassword: [
                '',
                [
                    function (control) {
                        if (_this.password) {
                            return control.value === _this.password.value
                                ? null
                                : { validUrl: true };
                        }
                        else {
                            return null;
                        }
                    },
                ],
            ],
        });
    };
    AccountComponent.prototype.bindFormControls = function () {
        this.username = this.accountForm.get('username');
        this.oldPassword = this.accountForm.get('oldPassword');
        this.password = this.accountForm.get('password');
        this.repeatPassword = this.accountForm.get('repeatPassword');
    };
    AccountComponent.prototype.prepareUpdate = function () {
        this.currWarehouse.username = this.username.value;
    };
    AccountComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.$password = this.password.valueChanges.subscribe(function (res) {
            _this.repeatPassword.setValue('');
        });
    };
    AccountComponent.prototype.ngOnDestroy = function () {
        if (this.$password) {
            this.$password.unsubscribe();
        }
    };
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Warehouse_1.default)
    ], AccountComponent.prototype, "currWarehouse", void 0);
    AccountComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'merchant-account',
            templateUrl: 'account.html',
        }),
        tslib_1.__metadata("design:paramtypes", [forms_1.FormBuilder,
            warehouse_router_service_1.WarehouseRouter,
            angular_1.AlertController])
    ], AccountComponent);
    return AccountComponent;
}());
exports.AccountComponent = AccountComponent;
//# sourceMappingURL=account.js.map