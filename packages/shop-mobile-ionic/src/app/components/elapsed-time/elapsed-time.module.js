"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var angular_1 = require("@ionic/angular");
var core_2 = require("@ngx-translate/core");
var elapsed_time_component_1 = require("./elapsed-time.component");
var ElapsedTimeModule = (function () {
    function ElapsedTimeModule() {
    }
    ElapsedTimeModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                angular_1.IonicModule,
                core_2.TranslateModule.forChild(),
            ],
            declarations: [elapsed_time_component_1.ElapsedTimeComponent],
            entryComponents: [elapsed_time_component_1.ElapsedTimeComponent],
            exports: [elapsed_time_component_1.ElapsedTimeComponent],
        })
    ], ElapsedTimeModule);
    return ElapsedTimeModule;
}());
exports.ElapsedTimeModule = ElapsedTimeModule;
//# sourceMappingURL=elapsed-time.module.js.map