"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const inversify_1 = require("inversify");
const warehouses_1 = require("../warehouses");
const Warehouse_1 = tslib_1.__importDefault(require("@modules/server.common/entities/Warehouse"));
const GeoLocation_1 = tslib_1.__importDefault(require("@modules/server.common/entities/GeoLocation"));
const ProductInfo_1 = tslib_1.__importDefault(require("@modules/server.common/entities/ProductInfo"));
const lodash_1 = tslib_1.__importDefault(require("lodash"));
const utils_1 = tslib_1.__importDefault(require("@modules/server.common/utils"));
const Log_1 = require("../../helpers/Log");
const GeoLocationsWarehousesService_1 = require("./GeoLocationsWarehousesService");
const io_1 = require("@pyro/io");
const operators_1 = require("rxjs/operators");
const WarehouseProduct_1 = tslib_1.__importDefault(require("@modules/server.common/entities/WarehouseProduct"));
let GeoLocationsProductsService = class GeoLocationsProductsService {
    constructor(warehousesService, geoLocationsWarehousesService) {
        this.warehousesService = warehousesService;
        this.geoLocationsWarehousesService = geoLocationsWarehousesService;
        this.log = Log_1.createEverLogger({
            name: 'geoLocationsProductsService',
        });
    }
    get(geoLocation, options) {
        return this.geoLocationsWarehousesService
            .get(geoLocation, { fullProducts: true, activeOnly: true })
            .pipe(operators_1.map((warehouses) => this._getProductsFromWarehouses(geoLocation, warehouses, options)));
    }
    getCountOfGeoLocationProducts(geoLocation, options, searchText) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const merchants = yield this.geoLocationsWarehousesService.getMerchants(geoLocation, GeoLocationsWarehousesService_1.GeoLocationsWarehousesService.TrackingDistance, {
                    fullProducts: true,
                    activeOnly: true,
                    merchantsIds: options ? options.merchantIds : null,
                });
                const productsIds = merchants.map((m) => {
                    let products = m.products
                        .filter((wProduct) => this.productsFilter(wProduct, options))
                        .filter((wProduct) => this.filterBySearchText(wProduct, searchText));
                    if (!options || !options.withoutCount) {
                        products = products.filter((wProduct) => wProduct.count > 0);
                    }
                    return products.map((p) => new WarehouseProduct_1.default(p).productId);
                });
                return (productsIds.flat().filter((x, i, a) => a.indexOf(x) == i)
                    .length || 0);
            }
            catch (error) {
                return 0;
            }
        });
    }
    geoLocationProductsByPaging(geoLocation, pagingOptions, options, searchText) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const merchants = yield this.geoLocationsWarehousesService.getMerchants(geoLocation, GeoLocationsWarehousesService_1.GeoLocationsWarehousesService.TrackingDistance, {
                fullProducts: true,
                activeOnly: true,
                merchantsIds: options ? options.merchantIds : null,
            });
            const products = this._getProductsFromWarehouses(geoLocation, merchants.map((m) => new Warehouse_1.default(m)), options, searchText);
            return products.slice(pagingOptions.skip).slice(0, pagingOptions.limit);
        });
    }
    _getProductsFromWarehouses(geoLocation, warehouses, options, searchText) {
        const underscore_ = lodash_1.default;
        return underscore_(warehouses)
            .map((_warehouse) => {
            const warehouse = lodash_1.default.clone(_warehouse);
            if (!options || !options.withoutCount) {
                warehouse.products = warehouse.products.filter((wProduct) => wProduct.count > 0);
            }
            if (options) {
                warehouse.products = warehouse.products.filter((wProduct) => this.productsFilter(wProduct, options));
            }
            warehouse.products = warehouse.products.filter((wProduct) => this.filterBySearchText(wProduct, searchText));
            return warehouse;
        })
            .map((warehouse) => lodash_1.default.map(warehouse.products, (warehouseProduct) => {
            return new ProductInfo_1.default({
                warehouseId: warehouse.id,
                warehouseLogo: warehouse.logo,
                warehouseProduct,
                distance: utils_1.default.getDistance(geoLocation, warehouse.geoLocation),
            });
        }))
            .flatten()
            .groupBy((productInfo) => productInfo.warehouseProduct.productId)
            .map((productInfos, productId) => {
            return lodash_1.default.minBy(productInfos, (productInfo) => productInfo.distance);
        })
            .filter((productInfo) => !lodash_1.default.isUndefined(productInfo))
            .map((productInfo) => productInfo)
            .value();
    }
    productsFilter(wProduct, options) {
        if (!options) {
            return true;
        }
        wProduct.product.images = wProduct.product.images.filter((i) => {
            return ((options.imageOrientation !== undefined
                ? options.imageOrientation === 1
                    ? i.orientation === 1
                    : i.orientation === 0 || i.orientation === 2
                : true) &&
                (options.locale !== undefined
                    ? i.locale === options.locale
                    : true));
        });
        if (!wProduct.product.images || wProduct.product.images.length === 0) {
            return false;
        }
        return options.isDeliveryRequired
            ? wProduct.isDeliveryRequired === options.isDeliveryRequired
            : true && options.isTakeaway
                ? wProduct.isTakeaway === options.isTakeaway
                : true;
    }
    filterBySearchText(wProduct, searchText) {
        if (!searchText) {
            return true;
        }
        let titles = wProduct.product['title'];
        titles = titles ? titles.map((t) => t.value) : [];
        let descriptions = wProduct.product['description'];
        descriptions = descriptions
            ? descriptions.map((d) => d.value)
            : [];
        let details = wProduct.product['details'];
        details = details ? details.map((d) => d.value) : [];
        return ((titles &&
            titles
                .join()
                .toLocaleLowerCase()
                .includes(searchText.toLocaleLowerCase())) ||
            (descriptions &&
                descriptions
                    .join()
                    .toLocaleLowerCase()
                    .includes(searchText.toLocaleLowerCase())) ||
            (details &&
                details
                    .join()
                    .toLocaleLowerCase()
                    .includes(searchText.toLocaleLowerCase())));
    }
};
tslib_1.__decorate([
    io_1.observableListener(),
    tslib_1.__param(0, io_1.serialization((g) => new GeoLocation_1.default(g))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [GeoLocation_1.default, Object]),
    tslib_1.__metadata("design:returntype", void 0)
], GeoLocationsProductsService.prototype, "get", null);
tslib_1.__decorate([
    io_1.asyncListener(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, String]),
    tslib_1.__metadata("design:returntype", Promise)
], GeoLocationsProductsService.prototype, "getCountOfGeoLocationProducts", null);
tslib_1.__decorate([
    io_1.asyncListener(),
    tslib_1.__param(0, io_1.serialization((g) => new GeoLocation_1.default(g))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [GeoLocation_1.default, Object, Object, String]),
    tslib_1.__metadata("design:returntype", Promise)
], GeoLocationsProductsService.prototype, "geoLocationProductsByPaging", null);
GeoLocationsProductsService = tslib_1.__decorate([
    inversify_1.injectable(),
    io_1.routerName('geo-location-products'),
    tslib_1.__param(0, inversify_1.inject(warehouses_1.WarehousesService)),
    tslib_1.__param(1, inversify_1.inject(GeoLocationsWarehousesService_1.GeoLocationsWarehousesService)),
    tslib_1.__metadata("design:paramtypes", [warehouses_1.WarehousesService,
        GeoLocationsWarehousesService_1.GeoLocationsWarehousesService])
], GeoLocationsProductsService);
exports.GeoLocationsProductsService = GeoLocationsProductsService;
//# sourceMappingURL=GeoLocationsProductsService.js.map