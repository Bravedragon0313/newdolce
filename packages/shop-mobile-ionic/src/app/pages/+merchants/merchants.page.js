"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var geo_location_merchants_service_1 = require("app/services/geo-location-merchants.service");
var store_service_1 = require("app/services/store.service");
var operators_1 = require("rxjs/operators");
var user_router_service_1 = require("@modules/client.common.angular2/routers/user-router.service");
var geo_location_1 = require("app/services/geo-location");
var merchants_service_1 = require("app/services/merchants/merchants.service");
var barcode_scanner_1 = require("@ionic-native/barcode-scanner");
var warehouse_router_service_1 = require("@modules/client.common.angular2/routers/warehouse-router.service");
var environment_1 = require("environments/environment");
var MerchantsPage = (function () {
    function MerchantsPage(router, geoLocationsMerchantsService, store, userRouter, geoLocationService, merchantsService, warehouseRouter) {
        this.router = router;
        this.geoLocationsMerchantsService = geoLocationsMerchantsService;
        this.store = store;
        this.userRouter = userRouter;
        this.geoLocationService = geoLocationService;
        this.merchantsService = merchantsService;
        this.warehouseRouter = warehouseRouter;
        this.loadCloseMerchants();
    }
    MerchantsPage.prototype.goToProductPage = function () {
        this.router.navigateByUrl('products');
    };
    MerchantsPage.prototype.searchChange = function (event) {
        if (this.searchName) {
            this.loadSearchMerchants();
        }
        else {
            this.loadCloseMerchants();
        }
    };
    MerchantsPage.prototype.selectMerchant = function (merchant) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                this.store.inStore = merchant.id;
                this.router.navigateByUrl('products');
                return [2];
            });
        });
    };
    MerchantsPage.prototype.scanQR = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var data, error_1;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4, barcode_scanner_1.BarcodeScanner.scan()];
                    case 1:
                        data = _a.sent();
                        this.loadScanedMerchant(data.text);
                        return [3, 3];
                    case 2:
                        error_1 = _a.sent();
                        alert(error_1);
                        console.log('Error', error_1);
                        return [3, 3];
                    case 3: return [2];
                }
            });
        });
    };
    MerchantsPage.prototype.ngOnDestroy = function () {
        console.warn('MerchantsPage destroy');
    };
    MerchantsPage.prototype.loadCloseMerchants = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var location, _a;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4, this.getLocation()];
                    case 1:
                        location = _b.sent();
                        _a = this;
                        return [4, this.geoLocationsMerchantsService
                                .getCoseMerchants({ loc: location })
                                .pipe(operators_1.first())
                                .toPromise()];
                    case 2:
                        _a.merchants = _b.sent();
                        return [2];
                }
            });
        });
    };
    MerchantsPage.prototype.loadSearchMerchants = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var location, _a;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4, this.getLocation()];
                    case 1:
                        location = _b.sent();
                        _a = this;
                        return [4, this.merchantsService.getMerchantsBuyName(this.searchName, { loc: location })];
                    case 2:
                        _a.merchants = _b.sent();
                        return [2];
                }
            });
        });
    };
    MerchantsPage.prototype.loadScanedMerchant = function (id) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var merchant;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.warehouseRouter
                            .get(id)
                            .pipe(operators_1.first())
                            .toPromise()];
                    case 1:
                        merchant = _a.sent();
                        this.searchName = merchant.name;
                        return [2];
                }
            });
        });
    };
    MerchantsPage.prototype.getLocation = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var location, isProductionEnv, user, findGeoLocation;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        isProductionEnv = environment_1.environment.production;
                        if (!(this.store.userId && isProductionEnv)) return [3, 2];
                        return [4, this.userRouter
                                .get(this.store.userId)
                                .pipe(operators_1.first())
                                .toPromise()];
                    case 1:
                        user = _a.sent();
                        location = {
                            type: 'Point',
                            coordinates: user.geoLocation.loc.coordinates,
                        };
                        return [3, 4];
                    case 2: return [4, this.geoLocationService.getCurrentGeoLocation()];
                    case 3:
                        findGeoLocation = _a.sent();
                        location = {
                            type: 'Point',
                            coordinates: findGeoLocation.loc.coordinates,
                        };
                        _a.label = 4;
                    case 4: return [2, location];
                }
            });
        });
    };
    MerchantsPage = tslib_1.__decorate([
        core_1.Component({
            templateUrl: './merchants.page.html',
            styleUrls: ['./merchants.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [router_1.Router,
            geo_location_merchants_service_1.GeoLocationsMerchantsService,
            store_service_1.Store,
            user_router_service_1.UserRouter,
            geo_location_1.GeoLocationService,
            merchants_service_1.MerchantsService,
            warehouse_router_service_1.WarehouseRouter])
    ], MerchantsPage);
    return MerchantsPage;
}());
exports.MerchantsPage = MerchantsPage;
//# sourceMappingURL=merchants.page.js.map