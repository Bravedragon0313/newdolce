"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var carrier_router_service_1 = require("@modules/client.common.angular2/routers/carrier-router.service");
var warehouse_router_service_1 = require("@modules/client.common.angular2/routers/warehouse-router.service");
var address_component_1 = require("./address.component");
var store_service_1 = require("../../../../services/store.service");
var operators_1 = require("rxjs/operators");
var core_2 = require("@ngx-translate/core");
var ng2_smart_table_1 = require("ng2-smart-table");
var rxjs_1 = require("rxjs");
var CarriersCatalogComponent = (function () {
    function CarriersCatalogComponent(carrierRouter, warehouseRouter, store, _sanitizer, _translateService) {
        this.carrierRouter = carrierRouter;
        this.warehouseRouter = warehouseRouter;
        this.store = store;
        this._sanitizer = _sanitizer;
        this._translateService = _translateService;
        this.sourceSmartTable = new ng2_smart_table_1.LocalDataSource();
        this.hasChanges = new core_1.EventEmitter();
        this._ngDestroy$ = new rxjs_1.Subject();
        this._loadSettingsSmartTable();
        this._loadDataSmartTable();
    }
    CarriersCatalogComponent.prototype.selectCarriersTmp = function (ev) {
        this.selecteCarriers = ev.selected;
        this.hasChanges.emit();
    };
    CarriersCatalogComponent.prototype._loadSettingsSmartTable = function () {
        var _this = this;
        var columnTitlePrefix = 'CARRIERS_VIEW.CARRIERS_CATALOG.';
        var getTranslate = function (name) {
            return _this._translateService.get(columnTitlePrefix + name);
        };
        rxjs_1.forkJoin(getTranslate('NAME'), getTranslate('PHONE'), getTranslate('ADDRESS'), getTranslate('LOGO'))
            .pipe(operators_1.takeUntil(this._ngDestroy$))
            .subscribe(function (_a) {
            var name = _a[0], phone = _a[1], address = _a[2], logo = _a[3];
            _this.settingsSmartTable = {
                actions: false,
                selectMode: 'multi',
                columns: {
                    name: { title: name },
                    phone: { title: phone },
                    address: {
                        title: address,
                        type: 'custom',
                        renderComponent: address_component_1.AddressComponent,
                    },
                    logo: {
                        title: logo,
                        type: 'html',
                        valuePrepareFunction: function (_, carrier) {
                            return _this._sanitizer.bypassSecurityTrustHtml("<div class='text-center'>\n\t\t\t\t\t\t\t\t<img src=\"" + carrier.logo + "\" alt=\"Product Image\" class='logo'\">\n\t\t\t\t\t\t\t<div>");
                        },
                        filter: false,
                    },
                },
                pager: {
                    display: true,
                    perPage: 3,
                },
            };
        });
    };
    CarriersCatalogComponent.prototype._loadDataSmartTable = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var warehouse, loadData;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.warehouseRouter
                            .get(this.store.warehouseId)
                            .pipe(operators_1.first())
                            .toPromise()];
                    case 1:
                        warehouse = _a.sent();
                        loadData = function (carriers) {
                            var carriersVM = carriers.map(function (c) {
                                return {
                                    name: c.firstName + ' ' + c.lastName,
                                    phone: c.phone,
                                    carrier: c,
                                    logo: c.logo,
                                    id: c.id,
                                };
                            });
                            _this.sourceSmartTable.load(carriersVM);
                        };
                        this.carrierRouter.getAllActive().subscribe(function (carriers) {
                            loadData(carriers.filter(function (c) { return !warehouse.usedCarriersIds.includes(c.id); }));
                        });
                        return [2];
                }
            });
        });
    };
    CarriersCatalogComponent.prototype.ngOnDestroy = function () {
        this._ngDestroy$.next();
        this._ngDestroy$.complete();
    };
    CarriersCatalogComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'carriers-catalog',
            templateUrl: 'carriers-catalog.html',
        }),
        tslib_1.__metadata("design:paramtypes", [carrier_router_service_1.CarrierRouter,
            warehouse_router_service_1.WarehouseRouter,
            store_service_1.Store,
            platform_browser_1.DomSanitizer,
            core_2.TranslateService])
    ], CarriersCatalogComponent);
    return CarriersCatalogComponent;
}());
exports.CarriersCatalogComponent = CarriersCatalogComponent;
//# sourceMappingURL=carriers-catalog.js.map