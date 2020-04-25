"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var warehouse_router_service_1 = require("@modules/client.common.angular2/routers/warehouse-router.service");
var Warehouse_1 = tslib_1.__importDefault(require("@modules/server.common/entities/Warehouse"));
var angular_1 = require("@ionic/angular");
var CommonComponent = (function () {
    function CommonComponent(formBuilder, warehouseRouter, alertController) {
        this.formBuilder = formBuilder;
        this.warehouseRouter = warehouseRouter;
        this.alertController = alertController;
        this.buildForm();
        this.bindFormControls();
    }
    CommonComponent.prototype.saveChanges = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var alert;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.prepareUpdate();
                        return [4, this.warehouseRouter.save(this.currWarehouse)];
                    case 1:
                        _a.sent();
                        return [4, this.alertController.create({
                                cssClass: 'success-info',
                                message: 'Successfully saved changes',
                                buttons: ['OK'],
                            })];
                    case 2:
                        alert = _a.sent();
                        return [4, alert.present()];
                    case 3:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    CommonComponent.prototype.ngOnChanges = function () {
        if (this.currWarehouse) {
            this.loadData();
        }
    };
    CommonComponent.prototype.prepareUpdate = function () {
        this.currWarehouse.name = this.name.value;
        this.currWarehouse.logo = this.logo.value;
        this.currWarehouse.contactPhone = this.phone.value;
        this.currWarehouse.contactEmail = this.email.value;
    };
    CommonComponent.prototype.loadData = function () {
        this.name.setValue(this.currWarehouse.name);
        this.logo.setValue(this.currWarehouse.logo);
        this.email.setValue(this.currWarehouse.contactEmail);
        this.phone.setValue(this.currWarehouse.contactPhone);
    };
    CommonComponent.prototype.buildForm = function () {
        this.commonForm = this.formBuilder.group({
            name: ['', forms_1.Validators.required],
            logo: [''],
            email: [''],
            phone: [''],
        });
    };
    CommonComponent.prototype.bindFormControls = function () {
        this.name = this.commonForm.get('name');
        this.logo = this.commonForm.get('logo');
        this.email = this.commonForm.get('email');
        this.phone = this.commonForm.get('phone');
    };
    CommonComponent.prototype.deleteImg = function () {
        this.logo.setValue('');
    };
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Warehouse_1.default)
    ], CommonComponent.prototype, "currWarehouse", void 0);
    CommonComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'merchant-common',
            templateUrl: 'common.html',
        }),
        tslib_1.__metadata("design:paramtypes", [forms_1.FormBuilder,
            warehouse_router_service_1.WarehouseRouter,
            angular_1.AlertController])
    ], CommonComponent);
    return CommonComponent;
}());
exports.CommonComponent = CommonComponent;
//# sourceMappingURL=common.js.map