"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var core_2 = require("@ngx-translate/core");
var forms_1 = require("@angular/forms");
var card_1 = require("@angular/material/card");
var icon_1 = require("@angular/material/icon");
var product_module_1 = require("app/+products/product/product.module");
var view_type_modeule_1 = require("app/view-type/view-type.modeule");
var list_view_component_1 = require("./list-view.component");
var ngx_infinite_scroll_1 = require("ngx-infinite-scroll");
var masonry_1 = require("@modules/masonry");
var ListViewModule = (function () {
    function ListViewModule() {
    }
    ListViewModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                core_2.TranslateModule.forChild(),
                forms_1.FormsModule,
                card_1.MatCardModule,
                product_module_1.ProductModule,
                view_type_modeule_1.ViewTypeModule,
                icon_1.MatIconModule,
                ngx_infinite_scroll_1.InfiniteScrollModule,
                masonry_1.MasonryModule,
            ],
            declarations: [list_view_component_1.ListViewComponent],
            exports: [list_view_component_1.ListViewComponent],
        })
    ], ListViewModule);
    return ListViewModule;
}());
exports.ListViewModule = ListViewModule;
//# sourceMappingURL=list-view.module.js.map