"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var user_mutation_component_1 = require("./user-mutation.component");
var core_2 = require("@ngx-translate/core");
var user_forms_module_1 = require("../forms/user-forms.module");
var google_map_module_1 = require("../../google-map/google-map.module");
var users_service_1 = require("../../../services/users.service");
var angular_1 = require("@ionic/angular");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var UserMutationModule = (function () {
    function UserMutationModule() {
    }
    UserMutationModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [
                core_2.TranslateModule.forChild(),
                user_forms_module_1.UserFormsModule,
                google_map_module_1.GoogleMapModule,
                angular_1.IonicModule,
                common_1.CommonModule,
                forms_1.FormsModule,
            ],
            providers: [users_service_1.UsersService],
            exports: [user_mutation_component_1.UserMutationComponent],
            declarations: [user_mutation_component_1.UserMutationComponent],
            entryComponents: [user_mutation_component_1.UserMutationComponent],
        })
    ], UserMutationModule);
    return UserMutationModule;
}());
exports.UserMutationModule = UserMutationModule;
//# sourceMappingURL=user-mutation.module.js.map