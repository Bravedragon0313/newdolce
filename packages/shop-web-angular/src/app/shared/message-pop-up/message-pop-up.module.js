"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var core_2 = require("@ngx-translate/core");
var message_pop_up_component_1 = require("./message-pop-up.component");
var button_1 = require("@angular/material/button");
var card_1 = require("@angular/material/card");
var dialog_1 = require("@angular/material/dialog");
var COMPONENTS = [message_pop_up_component_1.MessagePopUpComponent];
var MessagePopUpModalModule = (function () {
    function MessagePopUpModalModule() {
    }
    MessagePopUpModalModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                dialog_1.MatDialogModule,
                button_1.MatButtonModule,
                card_1.MatCardModule,
                core_2.TranslateModule.forChild(),
            ],
            declarations: COMPONENTS,
            entryComponents: COMPONENTS,
            exports: COMPONENTS,
        })
    ], MessagePopUpModalModule);
    return MessagePopUpModalModule;
}());
exports.MessagePopUpModalModule = MessagePopUpModalModule;
//# sourceMappingURL=message-pop-up.module.js.map