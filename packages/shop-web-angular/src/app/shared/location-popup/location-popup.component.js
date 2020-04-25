"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var dialog_1 = require("@angular/material/dialog");
var router_1 = require("@angular/router");
var location_component_1 = require("app/+login/byLocation/location/location.component");
var environment_1 = require("environments/environment");
var store_1 = require("app/services/store");
var user_router_service_1 = require("@modules/client.common.angular2/routers/user-router.service");
var LocationPopupComponent = (function () {
    function LocationPopupComponent(dialogRef, data, router, store, userRouter) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.router = router;
        this.store = store;
        this.userRouter = userRouter;
        this.mapCoordEmitter = new core_1.EventEmitter();
        this.mapGeometryEmitter = new core_1.EventEmitter();
    }
    LocationPopupComponent.prototype.ngOnInit = function () {
        this.place = this.data.place;
        this.coordinates = {
            type: 'Point',
            coordinates: [
                this.place
                    ? this.place.geometry.location.lat()
                    : environment_1.environment.DEFAULT_LATITUDE || 0,
                this.place
                    ? this.place.geometry.location.lng()
                    : environment_1.environment.DEFAULT_LONGITUDE || 0,
            ],
        };
        console.warn('LocationPopupComponent loaded');
    };
    LocationPopupComponent.prototype.ngAfterViewInit = function () {
        if (this.place) {
            this.onCoordinatesChanges(this.place.geometry.location);
            this.onGeometrySend(this.place.geometry);
        }
    };
    LocationPopupComponent.prototype.onCoordinatesChanges = function (coords) {
        this.mapCoordEmitter.emit(coords);
    };
    LocationPopupComponent.prototype.onGeometrySend = function (geometry) {
        this.mapGeometryEmitter.emit(geometry);
    };
    LocationPopupComponent.prototype.updateLocation = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var isValid, userId, address;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.locationForm) return [3, 2];
                        isValid = this.locationForm.statusForm;
                        if (!isValid) return [3, 2];
                        userId = this.store.userId;
                        return [4, this.updateUser(userId, this.locationForm.getCreateUserInfo().geoLocation)];
                    case 1:
                        _a.sent();
                        address = this.locationForm.searchElement.nativeElement
                            .value;
                        this.close(address);
                        _a.label = 2;
                    case 2:
                        console.warn('TODO update');
                        return [2];
                }
            });
        });
    };
    LocationPopupComponent.prototype.close = function (text) {
        if (text === void 0) { text = ''; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.dialogRef.close(text)];
                    case 1:
                        _a.sent();
                        return [4, this.reload()];
                    case 2:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    LocationPopupComponent.prototype.reload = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.router.navigateByUrl('reload', {
                            skipLocationChange: true,
                        })];
                    case 1:
                        _a.sent();
                        return [4, this.router.navigateByUrl('/products')];
                    case 2:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    LocationPopupComponent.prototype.updateUser = function (userId, geoLocation) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!userId) return [3, 2];
                        return [4, this.userRouter.updateUser(userId, {
                                geoLocation: geoLocation,
                            })];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2];
                }
            });
        });
    };
    tslib_1.__decorate([
        core_1.ViewChild('locationForm'),
        tslib_1.__metadata("design:type", location_component_1.LocationFormComponent)
    ], LocationPopupComponent.prototype, "locationForm", void 0);
    LocationPopupComponent = tslib_1.__decorate([
        core_1.Component({
            styleUrls: ['./location-popup.component.scss'],
            templateUrl: './location-popup.component.html',
        }),
        tslib_1.__param(1, core_1.Inject(dialog_1.MAT_DIALOG_DATA)),
        tslib_1.__metadata("design:paramtypes", [dialog_1.MatDialogRef, Object, router_1.Router,
            store_1.Store,
            user_router_service_1.UserRouter])
    ], LocationPopupComponent);
    return LocationPopupComponent;
}());
exports.LocationPopupComponent = LocationPopupComponent;
//# sourceMappingURL=location-popup.component.js.map