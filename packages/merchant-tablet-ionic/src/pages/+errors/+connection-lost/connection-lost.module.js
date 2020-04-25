"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var connection_lost_1 = require("./connection-lost");
var core_2 = require("@ngx-translate/core");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var angular_1 = require("@ionic/angular");
var routes = [
    {
        path: '',
        component: connection_lost_1.ConnectionLostPage,
    },
];
var ConnectionLostPageModule = (function () {
    function ConnectionLostPageModule() {
    }
    ConnectionLostPageModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                angular_1.IonicModule,
                router_1.RouterModule.forChild(routes),
                core_2.TranslateModule.forChild(),
            ],
            declarations: [connection_lost_1.ConnectionLostPage],
        })
    ], ConnectionLostPageModule);
    return ConnectionLostPageModule;
}());
exports.ConnectionLostPageModule = ConnectionLostPageModule;
//# sourceMappingURL=connection-lost.module.js.map