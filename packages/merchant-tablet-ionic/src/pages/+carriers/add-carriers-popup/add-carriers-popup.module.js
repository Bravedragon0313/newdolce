"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var add_carriers_popup_1 = require("./add-carriers-popup");
var angular2_wizard_1 = require("angular2-wizard");
var add_choice_1 = require("./add-choice/add-choice");
var carriers_catalog_1 = require("./carriers-catalog/carriers-catalog");
var ng2_smart_table_1 = require("ng2-smart-table");
var address_component_1 = require("./carriers-catalog/address.component");
var core_2 = require("@ngx-translate/core");
var add_new_carrier_module_1 = require("./add-new-carrier/add-new-carrier.module");
var angular_1 = require("@ionic/angular");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var COMPONENTS = [
    add_carriers_popup_1.AddCarriersPopupPage,
    add_choice_1.AddChoiceComponent,
    carriers_catalog_1.CarriersCatalogComponent,
    address_component_1.AddressComponent,
];
var AddCarriersPopupPageModule = (function () {
    function AddCarriersPopupPageModule() {
    }
    AddCarriersPopupPageModule = tslib_1.__decorate([
        core_1.NgModule({
            declarations: COMPONENTS,
            entryComponents: COMPONENTS,
            exports: COMPONENTS,
            imports: [
                angular_1.IonicModule,
                common_1.CommonModule,
                forms_1.FormsModule,
                angular2_wizard_1.FormWizardModule,
                ng2_smart_table_1.Ng2SmartTableModule,
                add_new_carrier_module_1.AddNewCarriersPopupPageModule,
                core_2.TranslateModule.forChild(),
            ],
        })
    ], AddCarriersPopupPageModule);
    return AddCarriersPopupPageModule;
}());
exports.AddCarriersPopupPageModule = AddCarriersPopupPageModule;
//# sourceMappingURL=add-carriers-popup.module.js.map