"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var AddressComponent = (function () {
    function AddressComponent() {
    }
    AddressComponent.prototype.ngOnInit = function () {
        this.carrier = this.rowData.carrier;
    };
    AddressComponent.prototype.getStoreFullAddress = function (carrier) {
        var geoLocation = carrier.geoLocation;
        var fullAddress = geoLocation.city + ", " + geoLocation.streetAddress + " " + geoLocation.house;
        return fullAddress;
    };
    AddressComponent = tslib_1.__decorate([
        core_1.Component({
            styles: [
                "\n\t\t\th1 {\n\t\t\t\tfont-weight: normal;\n\t\t\t}\n\t\t\t.address {\n\t\t\t\tfont-style: italic;\n\t\t\t\ttext-decoration: underline;\n\t\t\t\tdisplay: block;\n\t\t\t}\n\t\t",
            ],
            template: "\n\t\t<strong\n\t\t\t>{{ carrier?.geoLocation.city }}\n\t\t\t<span *ngIf=\"carrier?.geoLocation.postcode\"\n\t\t\t\t>({{ carrier?.geoLocation.postcode }})</span\n\t\t\t>\n\t\t</strong>\n\t\t<span *ngIf=\"carrier\" class=\"address\">{{\n\t\t\tgetStoreFullAddress(carrier)\n\t\t}}</span>\n\t",
        })
    ], AddressComponent);
    return AddressComponent;
}());
exports.AddressComponent = AddressComponent;
//# sourceMappingURL=address.component.js.map