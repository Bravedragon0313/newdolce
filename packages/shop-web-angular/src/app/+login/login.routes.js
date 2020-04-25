"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var login_component_1 = require("./login.component");
var byLocation_component_1 = require("./byLocation/byLocation.component");
var by_code_module_guard_1 = require("./by-code.module.guard");
var socie_module_guard_1 = require("./socie.module.guard");
exports.routes = [
    {
        path: '',
        component: login_component_1.LoginComponent,
        canActivate: [by_code_module_guard_1.ByCodeModuleGuard],
    },
    {
        path: 'socie/:id',
        component: login_component_1.LoginComponent,
        canActivate: [socie_module_guard_1.SocieModuleGuard],
    },
    {
        path: 'byLocation/:id',
        component: byLocation_component_1.LoginByLocationComponent,
    },
    {
        path: 'byLocation',
        component: byLocation_component_1.LoginByLocationComponent,
    },
];
//# sourceMappingURL=login.routes.js.map