"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var apollo_angular_1 = require("apollo-angular");
var Carrier_1 = tslib_1.__importDefault(require("@modules/server.common/entities/Carrier"));
var graphql_tag_1 = tslib_1.__importDefault(require("graphql-tag"));
var operators_1 = require("rxjs/operators");
var CarrierService = (function () {
    function CarrierService(_apollo) {
        var _this = this;
        this._apollo = _apollo;
        this.carriers$ = this._apollo
            .watchQuery({
            query: graphql_tag_1.default(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n\t\t\t\tquery getCarriers {\n\t\t\t\t\tgetCarriers {\n\t\t\t\t\t\t_id\n\t\t\t\t\t\tfirstName\n\t\t\t\t\t\tlastName\n\t\t\t\t\t\tphone\n\t\t\t\t\t\tlogo\n\t\t\t\t\t\tisDeleted\n\t\t\t\t\t\tnumberOfDeliveries\n\t\t\t\t\t\tskippedOrderIds\n\t\t\t\t\t\tstatus\n\t\t\t\t\t\tgeoLocation {\n\t\t\t\t\t\t\tcity\n\t\t\t\t\t\t\tstreetAddress\n\t\t\t\t\t\t\thouse\n\t\t\t\t\t\t\tloc {\n\t\t\t\t\t\t\t\ttype\n\t\t\t\t\t\t\t\tcoordinates\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t"], ["\n\t\t\t\tquery getCarriers {\n\t\t\t\t\tgetCarriers {\n\t\t\t\t\t\t_id\n\t\t\t\t\t\tfirstName\n\t\t\t\t\t\tlastName\n\t\t\t\t\t\tphone\n\t\t\t\t\t\tlogo\n\t\t\t\t\t\tisDeleted\n\t\t\t\t\t\tnumberOfDeliveries\n\t\t\t\t\t\tskippedOrderIds\n\t\t\t\t\t\tstatus\n\t\t\t\t\t\tgeoLocation {\n\t\t\t\t\t\t\tcity\n\t\t\t\t\t\t\tstreetAddress\n\t\t\t\t\t\t\thouse\n\t\t\t\t\t\t\tloc {\n\t\t\t\t\t\t\t\ttype\n\t\t\t\t\t\t\t\tcoordinates\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t"]))),
            pollInterval: 1000,
        })
            .valueChanges.pipe(operators_1.map(function (res) { return res.data.getCarriers; }), operators_1.map(function (carriers) { return carriers.map(function (c) { return _this._carrierFactory(c); }); }), operators_1.share());
    }
    CarrierService.prototype.getAllCarriers = function () {
        return this.carriers$;
    };
    CarrierService.prototype.updateCarrier = function (id, updateInput) {
        return this._apollo
            .mutate({
            mutation: graphql_tag_1.default(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n\t\t\t\t\tmutation UpdateCarrier(\n\t\t\t\t\t\t$id: String!\n\t\t\t\t\t\t$updateInput: CarrierUpdateInput!\n\t\t\t\t\t) {\n\t\t\t\t\t\tupdateCarrier(id: $id, updateInput: $updateInput) {\n\t\t\t\t\t\t\tid\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t"], ["\n\t\t\t\t\tmutation UpdateCarrier(\n\t\t\t\t\t\t$id: String!\n\t\t\t\t\t\t$updateInput: CarrierUpdateInput!\n\t\t\t\t\t) {\n\t\t\t\t\t\tupdateCarrier(id: $id, updateInput: $updateInput) {\n\t\t\t\t\t\t\tid\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t"]))),
            variables: {
                id: id,
                updateInput: updateInput,
            },
        })
            .pipe(operators_1.map(function (result) { return result.data.updateCarrier; }), operators_1.share());
    };
    CarrierService.prototype.getCarrierCurrentOrder = function (carrierId) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var res;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this._apollo
                            .query({
                            query: graphql_tag_1.default(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["\n\t\t\t\t\tquery GetCarrierCurrentOrder($carrierId: String!) {\n\t\t\t\t\t\tgetCarrierCurrentOrder(carrierId: $carrierId) {\n\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\tcarrierStatus\n\t\t\t\t\t\t\tcarrierStatusText\n\t\t\t\t\t\t\twarehouseStatusText\n\t\t\t\t\t\t\tcreatedAt\n\t\t\t\t\t\t\tstartDeliveryTime\n\t\t\t\t\t\t\tstatus\n\t\t\t\t\t\t\tdeliveryTime\n\t\t\t\t\t\t\tfinishedProcessingTime\n\t\t\t\t\t\t\tuser {\n\t\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\t\tphone\n\t\t\t\t\t\t\t\temail\n\t\t\t\t\t\t\t\tapartment\n\t\t\t\t\t\t\t\tfirstName\n\t\t\t\t\t\t\t\tlastName\n\t\t\t\t\t\t\t\timage\n\t\t\t\t\t\t\t\tgeoLocation {\n\t\t\t\t\t\t\t\t\thouse\n\t\t\t\t\t\t\t\t\tpostcode\n\t\t\t\t\t\t\t\t\tcountryName\n\t\t\t\t\t\t\t\t\tcity\n\t\t\t\t\t\t\t\t\tstreetAddress\n\t\t\t\t\t\t\t\t\tloc {\n\t\t\t\t\t\t\t\t\t\tcoordinates\n\t\t\t\t\t\t\t\t\t\ttype\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\twarehouse {\n\t\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\t\tname\n\t\t\t\t\t\t\t\tlogo\n\t\t\t\t\t\t\t\tcontactEmail\n\t\t\t\t\t\t\t\tcontactPhone\n\t\t\t\t\t\t\t\tgeoLocation {\n\t\t\t\t\t\t\t\t\thouse\n\t\t\t\t\t\t\t\t\tpostcode\n\t\t\t\t\t\t\t\t\tcountryName\n\t\t\t\t\t\t\t\t\tcity\n\t\t\t\t\t\t\t\t\tstreetAddress\n\t\t\t\t\t\t\t\t\tloc {\n\t\t\t\t\t\t\t\t\t\tcoordinates\n\t\t\t\t\t\t\t\t\t\ttype\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t"], ["\n\t\t\t\t\tquery GetCarrierCurrentOrder($carrierId: String!) {\n\t\t\t\t\t\tgetCarrierCurrentOrder(carrierId: $carrierId) {\n\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\tcarrierStatus\n\t\t\t\t\t\t\tcarrierStatusText\n\t\t\t\t\t\t\twarehouseStatusText\n\t\t\t\t\t\t\tcreatedAt\n\t\t\t\t\t\t\tstartDeliveryTime\n\t\t\t\t\t\t\tstatus\n\t\t\t\t\t\t\tdeliveryTime\n\t\t\t\t\t\t\tfinishedProcessingTime\n\t\t\t\t\t\t\tuser {\n\t\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\t\tphone\n\t\t\t\t\t\t\t\temail\n\t\t\t\t\t\t\t\tapartment\n\t\t\t\t\t\t\t\tfirstName\n\t\t\t\t\t\t\t\tlastName\n\t\t\t\t\t\t\t\timage\n\t\t\t\t\t\t\t\tgeoLocation {\n\t\t\t\t\t\t\t\t\thouse\n\t\t\t\t\t\t\t\t\tpostcode\n\t\t\t\t\t\t\t\t\tcountryName\n\t\t\t\t\t\t\t\t\tcity\n\t\t\t\t\t\t\t\t\tstreetAddress\n\t\t\t\t\t\t\t\t\tloc {\n\t\t\t\t\t\t\t\t\t\tcoordinates\n\t\t\t\t\t\t\t\t\t\ttype\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\twarehouse {\n\t\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\t\tname\n\t\t\t\t\t\t\t\tlogo\n\t\t\t\t\t\t\t\tcontactEmail\n\t\t\t\t\t\t\t\tcontactPhone\n\t\t\t\t\t\t\t\tgeoLocation {\n\t\t\t\t\t\t\t\t\thouse\n\t\t\t\t\t\t\t\t\tpostcode\n\t\t\t\t\t\t\t\t\tcountryName\n\t\t\t\t\t\t\t\t\tcity\n\t\t\t\t\t\t\t\t\tstreetAddress\n\t\t\t\t\t\t\t\t\tloc {\n\t\t\t\t\t\t\t\t\t\tcoordinates\n\t\t\t\t\t\t\t\t\t\ttype\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t"]))),
                            variables: { carrierId: carrierId },
                        })
                            .toPromise()];
                    case 1:
                        res = _a.sent();
                        return [2, res.data['getCarrierCurrentOrder']];
                }
            });
        });
    };
    CarrierService.prototype._carrierFactory = function (carrier) {
        return carrier == null ? null : new Carrier_1.default(carrier);
    };
    CarrierService = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [apollo_angular_1.Apollo])
    ], CarrierService);
    return CarrierService;
}());
exports.CarrierService = CarrierService;
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=carrier.service.js.map