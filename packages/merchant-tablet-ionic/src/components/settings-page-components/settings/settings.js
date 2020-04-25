"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var Warehouse_1 = tslib_1.__importDefault(require("@modules/server.common/entities/Warehouse"));
var OrderBarcodeTypes_1 = tslib_1.__importStar(require("@modules/server.common/enums/OrderBarcodeTypes"));
var warehouse_router_service_1 = require("@modules/client.common.angular2/routers/warehouse-router.service");
var qrcode_1 = tslib_1.__importDefault(require("qrcode"));
var ngx_1 = require("@ionic-native/barcode-scanner/ngx");
var angular_1 = require("@ionic/angular");
var SettingsComponent = (function () {
    function SettingsComponent(warehouseRouter, alertController, barcodeScanner) {
        this.warehouseRouter = warehouseRouter;
        this.alertController = alertController;
        this.barcodeScanner = barcodeScanner;
        this.showPayments = false;
        this.orderBarcodeTypes = [
            OrderBarcodeTypes_1.default.QR,
            OrderBarcodeTypes_1.default.CODE128,
            OrderBarcodeTypes_1.default.CODE39,
            OrderBarcodeTypes_1.default.pharmacode,
        ];
    }
    SettingsComponent.prototype.ngAfterViewInit = function () {
        if (this.currWarehouse) {
            this.merchantBeforeUpdate = new Warehouse_1.default(this.currWarehouse);
        }
        this.generateQRCode();
    };
    SettingsComponent.prototype.getorderBarcodeTypesToString = function (status) {
        return OrderBarcodeTypes_1.orderBarcodeTypesToString(status);
    };
    SettingsComponent.prototype.hasChanges = function () {
        return !Array.from(arguments).includes(true) && !this.hasScanCode;
    };
    SettingsComponent.prototype.saveChanges = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var alert_1, error_1, alert_2;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 7]);
                        return [4, this.warehouseRouter.save(this.currWarehouse)];
                    case 1:
                        _a.sent();
                        return [4, this.alertController.create({
                                cssClass: 'success-info',
                                message: 'Successfully saved changes',
                                buttons: ['OK'],
                            })];
                    case 2:
                        alert_1 = _a.sent();
                        return [4, alert_1.present()];
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
                        alert_2 = _a.sent();
                        this.currWarehouse = this.merchantBeforeUpdate;
                        return [4, alert_2.present()];
                    case 6:
                        _a.sent();
                        return [3, 7];
                    case 7: return [2];
                }
            });
        });
    };
    SettingsComponent.prototype.scan = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var barcodeData, error_2;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4, this.barcodeScanner.scan()];
                    case 1:
                        barcodeData = _a.sent();
                        this.currWarehouse.barcodeData = barcodeData.text;
                        this.hasScanCode = true;
                        return [3, 3];
                    case 2:
                        error_2 = _a.sent();
                        console.warn(error_2);
                        return [3, 3];
                    case 3: return [2];
                }
            });
        });
    };
    SettingsComponent.prototype.barcodeDataChange = function (e) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!e.value) return [3, 2];
                        return [4, this.generateQRCode()];
                    case 1:
                        _a.sent();
                        return [3, 3];
                    case 2:
                        this.barcodetDataUrl = null;
                        _a.label = 3;
                    case 3: return [2];
                }
            });
        });
    };
    SettingsComponent.prototype.generateQRCode = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!this.currWarehouse) return [3, 2];
                        _a = this;
                        return [4, qrcode_1.default.toDataURL(this.currWarehouse.barcodeData)];
                    case 1:
                        _a.barcodetDataUrl = _b.sent();
                        _b.label = 2;
                    case 2:
                        this.showPayments = true;
                        return [2];
                }
            });
        });
    };
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Warehouse_1.default)
    ], SettingsComponent.prototype, "currWarehouse", void 0);
    SettingsComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'merchant-settings',
            templateUrl: 'settings.html',
            styleUrls: ['settings.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [warehouse_router_service_1.WarehouseRouter,
            angular_1.AlertController,
            ngx_1.BarcodeScanner])
    ], SettingsComponent);
    return SettingsComponent;
}());
exports.SettingsComponent = SettingsComponent;
//# sourceMappingURL=settings.js.map