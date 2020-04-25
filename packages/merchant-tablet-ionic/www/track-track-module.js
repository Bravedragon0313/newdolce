(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["track-track-module"],{

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/pages/+track/track.html":
/*!*************************************************************************************************************************!*\
  !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/raw-loader/dist/cjs.js!./src/pages/+track/track.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"header\" class=\"bar bar-header bar-brand\">\n\t<h1 class=\"title\">Track Carriers</h1>\n\t<div class=\"buttons buttons-left header-item\">\n\t\t<span class=\"left-buttons\">\n\t\t\t<div class=\"waves-effect waves-classic\">\n\t\t\t\t<ion-menu-toggle class=\"button-icon\">\n\t\t\t\t\t<ion-icon ios=\"ios-menu\" md=\"md-menu\"></ion-icon>\n\t\t\t\t</ion-menu-toggle>\n\t\t\t</div>\n\t\t</span>\n\t</div>\n</div>\n<div id=\"contentWrapper\" scroll=\"false\">\n\t<div #gmap id=\"mapDiv\" class=\"map\"></div>\n\t<div class=\"sidebar\">\n\t\t<ion-item class=\"statistics\">\n\t\t\tTotal Active Carriers: {{ totalActiveCarriers }}\n\t\t</ion-item>\n\t\t<ion-item class=\"statistics\">\n\t\t\tTotal Carriers: {{ totalCarriers }}\n\t\t</ion-item>\n\t\t<ion-item class=\"statistics\">\n\t\t\tTotal Deliveries: {{ totalDeliveries }}\n\t\t</ion-item>\n\t\t<ion-item *ngIf=\"showCheckboxFilters\" (click)=\"refreshMap();\">\n\t\t\t<ion-label>Show active only</ion-label>\n\t\t\t<ion-checkbox\n\t\t\t\tslot=\"end\"\n\t\t\t\t[disabled]=\"loadingMap\"\n\t\t\t\t[(ngModel)]=\"showActiveOnly\"\n\t\t\t></ion-checkbox>\n\t\t</ion-item>\n\t\t<ion-item *ngIf=\"showCheckboxFilters\" (click)=\"refreshMap();\">\n\t\t\t<ion-label>Show assigned only</ion-label>\n\t\t\t<ion-checkbox\n\t\t\t\tslot=\"end\"\n\t\t\t\t[disabled]=\"loadingMap\"\n\t\t\t\t[(ngModel)]=\"showAssignedOnly\"\n\t\t\t></ion-checkbox>\n\t\t</ion-item>\n\t\t<ion-item>\n\t\t\t<ion-label>Search for Carrier</ion-label>\n\t\t\t<ionic-selectable\n\t\t\t\t#filterComponent\n\t\t\t\titem-content\n\t\t\t\t[(ngModel)]=\"selectedCarrier\"\n\t\t\t\t[items]=\"carrierListDropdown\"\n\t\t\t\titemValueField=\"id\"\n\t\t\t\titemTextField=\"fullName\"\n\t\t\t\t[canSearch]=\"true\"\n\t\t\t\t(onChange)=\"navigationHandler($event)\"\n\t\t\t>\n\t\t\t</ionic-selectable>\n\t\t</ion-item>\n\t</div>\n</div>\n");

/***/ }),

/***/ "./node_modules/ionic-selectable/esm5/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/ionic-selectable/esm5/index.js ***!
  \*****************************************************/
/*! exports provided: IonicSelectableAddItemTemplateDirective, IonicSelectableCloseButtonTemplateDirective, IonicSelectableFooterTemplateDirective, IonicSelectableGroupEndTemplateDirective, IonicSelectableGroupTemplateDirective, IonicSelectableHeaderTemplateDirective, IonicSelectableItemEndTemplateDirective, IonicSelectableItemIconTemplateDirective, IonicSelectableItemTemplateDirective, IonicSelectableMessageTemplateDirective, IonicSelectableModalComponent, IonicSelectablePlaceholderTemplateDirective, IonicSelectableSearchFailTemplateDirective, IonicSelectableTitleTemplateDirective, IonicSelectableValueTemplateDirective, IonicSelectableIconTemplateDirective, IonicSelectableComponent, IonicSelectableModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_app_components_ionic_selectable_ionic_selectable_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/app/components/ionic-selectable/ionic-selectable.module */ "./node_modules/ionic-selectable/esm5/src/app/components/ionic-selectable/ionic-selectable.module.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IonicSelectableAddItemTemplateDirective", function() { return _src_app_components_ionic_selectable_ionic_selectable_module__WEBPACK_IMPORTED_MODULE_0__["IonicSelectableAddItemTemplateDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IonicSelectableCloseButtonTemplateDirective", function() { return _src_app_components_ionic_selectable_ionic_selectable_module__WEBPACK_IMPORTED_MODULE_0__["IonicSelectableCloseButtonTemplateDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IonicSelectableFooterTemplateDirective", function() { return _src_app_components_ionic_selectable_ionic_selectable_module__WEBPACK_IMPORTED_MODULE_0__["IonicSelectableFooterTemplateDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IonicSelectableGroupEndTemplateDirective", function() { return _src_app_components_ionic_selectable_ionic_selectable_module__WEBPACK_IMPORTED_MODULE_0__["IonicSelectableGroupEndTemplateDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IonicSelectableGroupTemplateDirective", function() { return _src_app_components_ionic_selectable_ionic_selectable_module__WEBPACK_IMPORTED_MODULE_0__["IonicSelectableGroupTemplateDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IonicSelectableHeaderTemplateDirective", function() { return _src_app_components_ionic_selectable_ionic_selectable_module__WEBPACK_IMPORTED_MODULE_0__["IonicSelectableHeaderTemplateDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IonicSelectableItemEndTemplateDirective", function() { return _src_app_components_ionic_selectable_ionic_selectable_module__WEBPACK_IMPORTED_MODULE_0__["IonicSelectableItemEndTemplateDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IonicSelectableItemIconTemplateDirective", function() { return _src_app_components_ionic_selectable_ionic_selectable_module__WEBPACK_IMPORTED_MODULE_0__["IonicSelectableItemIconTemplateDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IonicSelectableItemTemplateDirective", function() { return _src_app_components_ionic_selectable_ionic_selectable_module__WEBPACK_IMPORTED_MODULE_0__["IonicSelectableItemTemplateDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IonicSelectableMessageTemplateDirective", function() { return _src_app_components_ionic_selectable_ionic_selectable_module__WEBPACK_IMPORTED_MODULE_0__["IonicSelectableMessageTemplateDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IonicSelectableModalComponent", function() { return _src_app_components_ionic_selectable_ionic_selectable_module__WEBPACK_IMPORTED_MODULE_0__["IonicSelectableModalComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IonicSelectablePlaceholderTemplateDirective", function() { return _src_app_components_ionic_selectable_ionic_selectable_module__WEBPACK_IMPORTED_MODULE_0__["IonicSelectablePlaceholderTemplateDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IonicSelectableSearchFailTemplateDirective", function() { return _src_app_components_ionic_selectable_ionic_selectable_module__WEBPACK_IMPORTED_MODULE_0__["IonicSelectableSearchFailTemplateDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IonicSelectableTitleTemplateDirective", function() { return _src_app_components_ionic_selectable_ionic_selectable_module__WEBPACK_IMPORTED_MODULE_0__["IonicSelectableTitleTemplateDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IonicSelectableValueTemplateDirective", function() { return _src_app_components_ionic_selectable_ionic_selectable_module__WEBPACK_IMPORTED_MODULE_0__["IonicSelectableValueTemplateDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IonicSelectableIconTemplateDirective", function() { return _src_app_components_ionic_selectable_ionic_selectable_module__WEBPACK_IMPORTED_MODULE_0__["IonicSelectableIconTemplateDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IonicSelectableComponent", function() { return _src_app_components_ionic_selectable_ionic_selectable_module__WEBPACK_IMPORTED_MODULE_0__["IonicSelectableComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IonicSelectableModule", function() { return _src_app_components_ionic_selectable_ionic_selectable_module__WEBPACK_IMPORTED_MODULE_0__["IonicSelectableModule"]; });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9pb25pYy1zZWxlY3RhYmxlLyIsInNvdXJjZXMiOlsiaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLHFzQkFBYywrREFBK0QsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCAqIGZyb20gJy4vc3JjL2FwcC9jb21wb25lbnRzL2lvbmljLXNlbGVjdGFibGUvaW9uaWMtc2VsZWN0YWJsZS5tb2R1bGUnO1xuXG4iXX0=

/***/ }),

/***/ "./node_modules/ionic-selectable/esm5/ionic-selectable.min.js":
/*!********************************************************************!*\
  !*** ./node_modules/ionic-selectable/esm5/ionic-selectable.min.js ***!
  \********************************************************************/
/*! exports provided: IonicSelectableAddItemTemplateDirective, IonicSelectableCloseButtonTemplateDirective, IonicSelectableFooterTemplateDirective, IonicSelectableGroupEndTemplateDirective, IonicSelectableGroupTemplateDirective, IonicSelectableHeaderTemplateDirective, IonicSelectableItemEndTemplateDirective, IonicSelectableItemIconTemplateDirective, IonicSelectableItemTemplateDirective, IonicSelectableMessageTemplateDirective, IonicSelectableModalComponent, IonicSelectablePlaceholderTemplateDirective, IonicSelectableSearchFailTemplateDirective, IonicSelectableTitleTemplateDirective, IonicSelectableValueTemplateDirective, IonicSelectableIconTemplateDirective, IonicSelectableComponent, IonicSelectableModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./node_modules/ionic-selectable/esm5/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IonicSelectableAddItemTemplateDirective", function() { return _index__WEBPACK_IMPORTED_MODULE_0__["IonicSelectableAddItemTemplateDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IonicSelectableCloseButtonTemplateDirective", function() { return _index__WEBPACK_IMPORTED_MODULE_0__["IonicSelectableCloseButtonTemplateDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IonicSelectableFooterTemplateDirective", function() { return _index__WEBPACK_IMPORTED_MODULE_0__["IonicSelectableFooterTemplateDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IonicSelectableGroupEndTemplateDirective", function() { return _index__WEBPACK_IMPORTED_MODULE_0__["IonicSelectableGroupEndTemplateDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IonicSelectableGroupTemplateDirective", function() { return _index__WEBPACK_IMPORTED_MODULE_0__["IonicSelectableGroupTemplateDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IonicSelectableHeaderTemplateDirective", function() { return _index__WEBPACK_IMPORTED_MODULE_0__["IonicSelectableHeaderTemplateDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IonicSelectableItemEndTemplateDirective", function() { return _index__WEBPACK_IMPORTED_MODULE_0__["IonicSelectableItemEndTemplateDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IonicSelectableItemIconTemplateDirective", function() { return _index__WEBPACK_IMPORTED_MODULE_0__["IonicSelectableItemIconTemplateDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IonicSelectableItemTemplateDirective", function() { return _index__WEBPACK_IMPORTED_MODULE_0__["IonicSelectableItemTemplateDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IonicSelectableMessageTemplateDirective", function() { return _index__WEBPACK_IMPORTED_MODULE_0__["IonicSelectableMessageTemplateDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IonicSelectableModalComponent", function() { return _index__WEBPACK_IMPORTED_MODULE_0__["IonicSelectableModalComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IonicSelectablePlaceholderTemplateDirective", function() { return _index__WEBPACK_IMPORTED_MODULE_0__["IonicSelectablePlaceholderTemplateDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IonicSelectableSearchFailTemplateDirective", function() { return _index__WEBPACK_IMPORTED_MODULE_0__["IonicSelectableSearchFailTemplateDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IonicSelectableTitleTemplateDirective", function() { return _index__WEBPACK_IMPORTED_MODULE_0__["IonicSelectableTitleTemplateDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IonicSelectableValueTemplateDirective", function() { return _index__WEBPACK_IMPORTED_MODULE_0__["IonicSelectableValueTemplateDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IonicSelectableIconTemplateDirective", function() { return _index__WEBPACK_IMPORTED_MODULE_0__["IonicSelectableIconTemplateDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IonicSelectableComponent", function() { return _index__WEBPACK_IMPORTED_MODULE_0__["IonicSelectableComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IonicSelectableModule", function() { return _index__WEBPACK_IMPORTED_MODULE_0__["IonicSelectableModule"]; });



/***/ }),

/***/ "./node_modules/ionic-selectable/esm5/src/app/components/ionic-selectable/ionic-selectable-add-item-template.directive.js":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/ionic-selectable/esm5/src/app/components/ionic-selectable/ionic-selectable-add-item-template.directive.js ***!
  \********************************************************************************************************************************/
/*! exports provided: IonicSelectableAddItemTemplateDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonicSelectableAddItemTemplateDirective", function() { return IonicSelectableAddItemTemplateDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

var IonicSelectableAddItemTemplateDirective = /** @class */ (function () {
    function IonicSelectableAddItemTemplateDirective() {
    }
    IonicSelectableAddItemTemplateDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[ionicSelectableAddItemTemplate]',
                },] }
    ];
    return IonicSelectableAddItemTemplateDirective;
}());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9uaWMtc2VsZWN0YWJsZS1hZGQtaXRlbS10ZW1wbGF0ZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9pb25pYy1zZWxlY3RhYmxlLyIsInNvdXJjZXMiOlsic3JjL2FwcC9jb21wb25lbnRzL2lvbmljLXNlbGVjdGFibGUvaW9uaWMtc2VsZWN0YWJsZS1hZGQtaXRlbS10ZW1wbGF0ZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFMUM7SUFBQTtJQUd1RCxDQUFDOztnQkFIdkQsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxrQ0FBa0M7aUJBQzdDOztJQUNzRCw4Q0FBQztDQUFBLEFBSHhELElBR3dEO1NBQTNDLHVDQUF1QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbaW9uaWNTZWxlY3RhYmxlQWRkSXRlbVRlbXBsYXRlXScsXG59KVxuZXhwb3J0IGNsYXNzIElvbmljU2VsZWN0YWJsZUFkZEl0ZW1UZW1wbGF0ZURpcmVjdGl2ZSB7IH1cbiJdfQ==

/***/ }),

/***/ "./node_modules/ionic-selectable/esm5/src/app/components/ionic-selectable/ionic-selectable-close-button-template.directive.js":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/ionic-selectable/esm5/src/app/components/ionic-selectable/ionic-selectable-close-button-template.directive.js ***!
  \************************************************************************************************************************************/
/*! exports provided: IonicSelectableCloseButtonTemplateDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonicSelectableCloseButtonTemplateDirective", function() { return IonicSelectableCloseButtonTemplateDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

var IonicSelectableCloseButtonTemplateDirective = /** @class */ (function () {
    function IonicSelectableCloseButtonTemplateDirective() {
    }
    IonicSelectableCloseButtonTemplateDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[ionicSelectableCloseButtonTemplate]',
                },] }
    ];
    return IonicSelectableCloseButtonTemplateDirective;
}());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9uaWMtc2VsZWN0YWJsZS1jbG9zZS1idXR0b24tdGVtcGxhdGUuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vaW9uaWMtc2VsZWN0YWJsZS8iLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pb25pYy1zZWxlY3RhYmxlL2lvbmljLXNlbGVjdGFibGUtY2xvc2UtYnV0dG9uLXRlbXBsYXRlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUxQztJQUFBO0lBRzJELENBQUM7O2dCQUgzRCxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHNDQUFzQztpQkFDakQ7O0lBQzBELGtEQUFDO0NBQUEsQUFINUQsSUFHNEQ7U0FBL0MsMkNBQTJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tpb25pY1NlbGVjdGFibGVDbG9zZUJ1dHRvblRlbXBsYXRlXScsXG59KVxuZXhwb3J0IGNsYXNzIElvbmljU2VsZWN0YWJsZUNsb3NlQnV0dG9uVGVtcGxhdGVEaXJlY3RpdmUgeyB9XG4iXX0=

/***/ }),

/***/ "./node_modules/ionic-selectable/esm5/src/app/components/ionic-selectable/ionic-selectable-footer-template.directive.js":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/ionic-selectable/esm5/src/app/components/ionic-selectable/ionic-selectable-footer-template.directive.js ***!
  \******************************************************************************************************************************/
/*! exports provided: IonicSelectableFooterTemplateDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonicSelectableFooterTemplateDirective", function() { return IonicSelectableFooterTemplateDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

var IonicSelectableFooterTemplateDirective = /** @class */ (function () {
    function IonicSelectableFooterTemplateDirective() {
    }
    IonicSelectableFooterTemplateDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[ionicSelectableFooterTemplate]',
                },] }
    ];
    return IonicSelectableFooterTemplateDirective;
}());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9uaWMtc2VsZWN0YWJsZS1mb290ZXItdGVtcGxhdGUuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vaW9uaWMtc2VsZWN0YWJsZS8iLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pb25pYy1zZWxlY3RhYmxlL2lvbmljLXNlbGVjdGFibGUtZm9vdGVyLXRlbXBsYXRlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUxQztJQUFBO0lBR3NELENBQUM7O2dCQUh0RCxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGlDQUFpQztpQkFDNUM7O0lBQ3FELDZDQUFDO0NBQUEsQUFIdkQsSUFHdUQ7U0FBMUMsc0NBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tpb25pY1NlbGVjdGFibGVGb290ZXJUZW1wbGF0ZV0nLFxufSlcbmV4cG9ydCBjbGFzcyBJb25pY1NlbGVjdGFibGVGb290ZXJUZW1wbGF0ZURpcmVjdGl2ZSB7IH1cbiJdfQ==

/***/ }),

/***/ "./node_modules/ionic-selectable/esm5/src/app/components/ionic-selectable/ionic-selectable-group-end-template.directive.js":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/ionic-selectable/esm5/src/app/components/ionic-selectable/ionic-selectable-group-end-template.directive.js ***!
  \*********************************************************************************************************************************/
/*! exports provided: IonicSelectableGroupEndTemplateDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonicSelectableGroupEndTemplateDirective", function() { return IonicSelectableGroupEndTemplateDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

var IonicSelectableGroupEndTemplateDirective = /** @class */ (function () {
    function IonicSelectableGroupEndTemplateDirective() {
    }
    IonicSelectableGroupEndTemplateDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[ionicSelectableGroupEndTemplate]',
                },] }
    ];
    return IonicSelectableGroupEndTemplateDirective;
}());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9uaWMtc2VsZWN0YWJsZS1ncm91cC1lbmQtdGVtcGxhdGUuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vaW9uaWMtc2VsZWN0YWJsZS8iLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pb25pYy1zZWxlY3RhYmxlL2lvbmljLXNlbGVjdGFibGUtZ3JvdXAtZW5kLXRlbXBsYXRlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUxQztJQUFBO0lBR3dELENBQUM7O2dCQUh4RCxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG1DQUFtQztpQkFDOUM7O0lBQ3VELCtDQUFDO0NBQUEsQUFIekQsSUFHeUQ7U0FBNUMsd0NBQXdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tpb25pY1NlbGVjdGFibGVHcm91cEVuZFRlbXBsYXRlXScsXG59KVxuZXhwb3J0IGNsYXNzIElvbmljU2VsZWN0YWJsZUdyb3VwRW5kVGVtcGxhdGVEaXJlY3RpdmUgeyB9XG4iXX0=

/***/ }),

/***/ "./node_modules/ionic-selectable/esm5/src/app/components/ionic-selectable/ionic-selectable-group-template.directive.js":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/ionic-selectable/esm5/src/app/components/ionic-selectable/ionic-selectable-group-template.directive.js ***!
  \*****************************************************************************************************************************/
/*! exports provided: IonicSelectableGroupTemplateDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonicSelectableGroupTemplateDirective", function() { return IonicSelectableGroupTemplateDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

var IonicSelectableGroupTemplateDirective = /** @class */ (function () {
    function IonicSelectableGroupTemplateDirective() {
    }
    IonicSelectableGroupTemplateDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[ionicSelectableGroupTemplate]',
                },] }
    ];
    return IonicSelectableGroupTemplateDirective;
}());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9uaWMtc2VsZWN0YWJsZS1ncm91cC10ZW1wbGF0ZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9pb25pYy1zZWxlY3RhYmxlLyIsInNvdXJjZXMiOlsic3JjL2FwcC9jb21wb25lbnRzL2lvbmljLXNlbGVjdGFibGUvaW9uaWMtc2VsZWN0YWJsZS1ncm91cC10ZW1wbGF0ZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFMUM7SUFBQTtJQUdxRCxDQUFDOztnQkFIckQsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxnQ0FBZ0M7aUJBQzNDOztJQUNvRCw0Q0FBQztDQUFBLEFBSHRELElBR3NEO1NBQXpDLHFDQUFxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbaW9uaWNTZWxlY3RhYmxlR3JvdXBUZW1wbGF0ZV0nLFxufSlcbmV4cG9ydCBjbGFzcyBJb25pY1NlbGVjdGFibGVHcm91cFRlbXBsYXRlRGlyZWN0aXZlIHsgfVxuIl19

/***/ }),

/***/ "./node_modules/ionic-selectable/esm5/src/app/components/ionic-selectable/ionic-selectable-header-template.directive.js":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/ionic-selectable/esm5/src/app/components/ionic-selectable/ionic-selectable-header-template.directive.js ***!
  \******************************************************************************************************************************/
/*! exports provided: IonicSelectableHeaderTemplateDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonicSelectableHeaderTemplateDirective", function() { return IonicSelectableHeaderTemplateDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

var IonicSelectableHeaderTemplateDirective = /** @class */ (function () {
    function IonicSelectableHeaderTemplateDirective() {
    }
    IonicSelectableHeaderTemplateDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[ionicSelectableHeaderTemplate]',
                },] }
    ];
    return IonicSelectableHeaderTemplateDirective;
}());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9uaWMtc2VsZWN0YWJsZS1oZWFkZXItdGVtcGxhdGUuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vaW9uaWMtc2VsZWN0YWJsZS8iLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pb25pYy1zZWxlY3RhYmxlL2lvbmljLXNlbGVjdGFibGUtaGVhZGVyLXRlbXBsYXRlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUxQztJQUFBO0lBR3NELENBQUM7O2dCQUh0RCxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGlDQUFpQztpQkFDNUM7O0lBQ3FELDZDQUFDO0NBQUEsQUFIdkQsSUFHdUQ7U0FBMUMsc0NBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tpb25pY1NlbGVjdGFibGVIZWFkZXJUZW1wbGF0ZV0nLFxufSlcbmV4cG9ydCBjbGFzcyBJb25pY1NlbGVjdGFibGVIZWFkZXJUZW1wbGF0ZURpcmVjdGl2ZSB7IH1cbiJdfQ==

/***/ }),

/***/ "./node_modules/ionic-selectable/esm5/src/app/components/ionic-selectable/ionic-selectable-icon-template.directive.js":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/ionic-selectable/esm5/src/app/components/ionic-selectable/ionic-selectable-icon-template.directive.js ***!
  \****************************************************************************************************************************/
/*! exports provided: IonicSelectableIconTemplateDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonicSelectableIconTemplateDirective", function() { return IonicSelectableIconTemplateDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

var IonicSelectableIconTemplateDirective = /** @class */ (function () {
    function IonicSelectableIconTemplateDirective() {
    }
    IonicSelectableIconTemplateDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[ionicSelectableIconTemplate]'
                },] }
    ];
    return IonicSelectableIconTemplateDirective;
}());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9uaWMtc2VsZWN0YWJsZS1pY29uLXRlbXBsYXRlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lvbmljLXNlbGVjdGFibGUvIiwic291cmNlcyI6WyJzcmMvYXBwL2NvbXBvbmVudHMvaW9uaWMtc2VsZWN0YWJsZS9pb25pYy1zZWxlY3RhYmxlLWljb24tdGVtcGxhdGUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTFDO0lBQUE7SUFHb0QsQ0FBQzs7Z0JBSHBELFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsK0JBQStCO2lCQUMxQzs7SUFDbUQsMkNBQUM7Q0FBQSxBQUhyRCxJQUdxRDtTQUF4QyxvQ0FBb0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2lvbmljU2VsZWN0YWJsZUljb25UZW1wbGF0ZV0nXG59KVxuZXhwb3J0IGNsYXNzIElvbmljU2VsZWN0YWJsZUljb25UZW1wbGF0ZURpcmVjdGl2ZSB7IH1cbiJdfQ==

/***/ }),

/***/ "./node_modules/ionic-selectable/esm5/src/app/components/ionic-selectable/ionic-selectable-item-end-template.directive.js":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/ionic-selectable/esm5/src/app/components/ionic-selectable/ionic-selectable-item-end-template.directive.js ***!
  \********************************************************************************************************************************/
/*! exports provided: IonicSelectableItemEndTemplateDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonicSelectableItemEndTemplateDirective", function() { return IonicSelectableItemEndTemplateDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

var IonicSelectableItemEndTemplateDirective = /** @class */ (function () {
    function IonicSelectableItemEndTemplateDirective() {
    }
    IonicSelectableItemEndTemplateDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[ionicSelectableItemEndTemplate]',
                },] }
    ];
    return IonicSelectableItemEndTemplateDirective;
}());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9uaWMtc2VsZWN0YWJsZS1pdGVtLWVuZC10ZW1wbGF0ZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9pb25pYy1zZWxlY3RhYmxlLyIsInNvdXJjZXMiOlsic3JjL2FwcC9jb21wb25lbnRzL2lvbmljLXNlbGVjdGFibGUvaW9uaWMtc2VsZWN0YWJsZS1pdGVtLWVuZC10ZW1wbGF0ZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFMUM7SUFBQTtJQUd1RCxDQUFDOztnQkFIdkQsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxrQ0FBa0M7aUJBQzdDOztJQUNzRCw4Q0FBQztDQUFBLEFBSHhELElBR3dEO1NBQTNDLHVDQUF1QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbaW9uaWNTZWxlY3RhYmxlSXRlbUVuZFRlbXBsYXRlXScsXG59KVxuZXhwb3J0IGNsYXNzIElvbmljU2VsZWN0YWJsZUl0ZW1FbmRUZW1wbGF0ZURpcmVjdGl2ZSB7IH1cbiJdfQ==

/***/ }),

/***/ "./node_modules/ionic-selectable/esm5/src/app/components/ionic-selectable/ionic-selectable-item-icon-template.directive.js":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/ionic-selectable/esm5/src/app/components/ionic-selectable/ionic-selectable-item-icon-template.directive.js ***!
  \*********************************************************************************************************************************/
/*! exports provided: IonicSelectableItemIconTemplateDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonicSelectableItemIconTemplateDirective", function() { return IonicSelectableItemIconTemplateDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

var IonicSelectableItemIconTemplateDirective = /** @class */ (function () {
    function IonicSelectableItemIconTemplateDirective() {
    }
    IonicSelectableItemIconTemplateDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[ionicSelectableItemIconTemplate]'
                },] }
    ];
    return IonicSelectableItemIconTemplateDirective;
}());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9uaWMtc2VsZWN0YWJsZS1pdGVtLWljb24tdGVtcGxhdGUuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vaW9uaWMtc2VsZWN0YWJsZS8iLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pb25pYy1zZWxlY3RhYmxlL2lvbmljLXNlbGVjdGFibGUtaXRlbS1pY29uLXRlbXBsYXRlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUxQztJQUFBO0lBR3dELENBQUM7O2dCQUh4RCxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG1DQUFtQztpQkFDOUM7O0lBQ3VELCtDQUFDO0NBQUEsQUFIekQsSUFHeUQ7U0FBNUMsd0NBQXdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tpb25pY1NlbGVjdGFibGVJdGVtSWNvblRlbXBsYXRlXSdcbn0pXG5leHBvcnQgY2xhc3MgSW9uaWNTZWxlY3RhYmxlSXRlbUljb25UZW1wbGF0ZURpcmVjdGl2ZSB7IH1cbiJdfQ==

/***/ }),

/***/ "./node_modules/ionic-selectable/esm5/src/app/components/ionic-selectable/ionic-selectable-item-template.directive.js":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/ionic-selectable/esm5/src/app/components/ionic-selectable/ionic-selectable-item-template.directive.js ***!
  \****************************************************************************************************************************/
/*! exports provided: IonicSelectableItemTemplateDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonicSelectableItemTemplateDirective", function() { return IonicSelectableItemTemplateDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

var IonicSelectableItemTemplateDirective = /** @class */ (function () {
    function IonicSelectableItemTemplateDirective() {
    }
    IonicSelectableItemTemplateDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[ionicSelectableItemTemplate]'
                },] }
    ];
    return IonicSelectableItemTemplateDirective;
}());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9uaWMtc2VsZWN0YWJsZS1pdGVtLXRlbXBsYXRlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lvbmljLXNlbGVjdGFibGUvIiwic291cmNlcyI6WyJzcmMvYXBwL2NvbXBvbmVudHMvaW9uaWMtc2VsZWN0YWJsZS9pb25pYy1zZWxlY3RhYmxlLWl0ZW0tdGVtcGxhdGUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTFDO0lBQUE7SUFHb0QsQ0FBQzs7Z0JBSHBELFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsK0JBQStCO2lCQUMxQzs7SUFDbUQsMkNBQUM7Q0FBQSxBQUhyRCxJQUdxRDtTQUF4QyxvQ0FBb0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2lvbmljU2VsZWN0YWJsZUl0ZW1UZW1wbGF0ZV0nXG59KVxuZXhwb3J0IGNsYXNzIElvbmljU2VsZWN0YWJsZUl0ZW1UZW1wbGF0ZURpcmVjdGl2ZSB7IH1cbiJdfQ==

/***/ }),

/***/ "./node_modules/ionic-selectable/esm5/src/app/components/ionic-selectable/ionic-selectable-message-template.directive.js":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/ionic-selectable/esm5/src/app/components/ionic-selectable/ionic-selectable-message-template.directive.js ***!
  \*******************************************************************************************************************************/
/*! exports provided: IonicSelectableMessageTemplateDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonicSelectableMessageTemplateDirective", function() { return IonicSelectableMessageTemplateDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

var IonicSelectableMessageTemplateDirective = /** @class */ (function () {
    function IonicSelectableMessageTemplateDirective() {
    }
    IonicSelectableMessageTemplateDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[ionicSelectableMessageTemplate]',
                },] }
    ];
    return IonicSelectableMessageTemplateDirective;
}());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9uaWMtc2VsZWN0YWJsZS1tZXNzYWdlLXRlbXBsYXRlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lvbmljLXNlbGVjdGFibGUvIiwic291cmNlcyI6WyJzcmMvYXBwL2NvbXBvbmVudHMvaW9uaWMtc2VsZWN0YWJsZS9pb25pYy1zZWxlY3RhYmxlLW1lc3NhZ2UtdGVtcGxhdGUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTFDO0lBQUE7SUFHdUQsQ0FBQzs7Z0JBSHZELFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsa0NBQWtDO2lCQUM3Qzs7SUFDc0QsOENBQUM7Q0FBQSxBQUh4RCxJQUd3RDtTQUEzQyx1Q0FBdUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2lvbmljU2VsZWN0YWJsZU1lc3NhZ2VUZW1wbGF0ZV0nLFxufSlcbmV4cG9ydCBjbGFzcyBJb25pY1NlbGVjdGFibGVNZXNzYWdlVGVtcGxhdGVEaXJlY3RpdmUgeyB9XG4iXX0=

/***/ }),

/***/ "./node_modules/ionic-selectable/esm5/src/app/components/ionic-selectable/ionic-selectable-modal.component.js":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/ionic-selectable/esm5/src/app/components/ionic-selectable/ionic-selectable-modal.component.js ***!
  \********************************************************************************************************************/
/*! exports provided: IonicSelectableModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonicSelectableModalComponent", function() { return IonicSelectableModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


var IonicSelectableModalComponent = /** @class */ (function () {
    function IonicSelectableModalComponent(navParams, _element) {
        var _this = this;
        this.navParams = navParams;
        this._element = _element;
        this._cssClass = true;
        this.selectComponent = this.navParams.get('selectComponent');
        this.selectComponent._modalComponent = this;
        this.selectComponent._selectedItems = [];
        if (!this.selectComponent._isNullOrWhiteSpace(this.selectComponent.value)) {
            if (this.selectComponent.isMultiple) {
                this.selectComponent.value.forEach((/**
                 * @param {?} item
                 * @return {?}
                 */
                function (item) {
                    _this.selectComponent._selectedItems.push(item);
                }));
            }
            else {
                this.selectComponent._selectedItems.push(this.selectComponent.value);
            }
        }
        this.selectComponent._setItemsToConfirm(this.selectComponent._selectedItems);
    }
    Object.defineProperty(IonicSelectableModalComponent.prototype, "_canClearCssClass", {
        get: /**
         * @return {?}
         */
        function () {
            return this.selectComponent.canClear;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IonicSelectableModalComponent.prototype, "_isMultipleCssClass", {
        get: /**
         * @return {?}
         */
        function () {
            return this.selectComponent.isMultiple;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IonicSelectableModalComponent.prototype, "_isSearchingCssClass", {
        get: /**
         * @return {?}
         */
        function () {
            return this.selectComponent._isSearching;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IonicSelectableModalComponent.prototype, "_isIos", {
        get: /**
         * @return {?}
         */
        function () {
            return this.selectComponent._isIos;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    IonicSelectableModalComponent.prototype._isMD = /**
     * @return {?}
     */
    function () {
        return this.selectComponent._isMD;
    };
    Object.defineProperty(IonicSelectableModalComponent.prototype, "_isAddItemTemplateVisibleCssClass", {
        get: /**
         * @return {?}
         */
        function () {
            return this.selectComponent._isAddItemTemplateVisible;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    IonicSelectableModalComponent.prototype.onResize = /**
     * @return {?}
     */
    function () {
        // ion-footer inside the template might change its height when
        // device orientation changes.
        this.selectComponent._positionAddItemTemplate();
    };
    /**
     * @return {?}
     */
    IonicSelectableModalComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._header = this._element.nativeElement.querySelector('ion-header');
        if (this._searchbarComponent && this.selectComponent.shouldFocusSearchbar) {
            // Focus after a delay because focus doesn't work without it.
            setTimeout((/**
             * @return {?}
             */
            function () {
                _this._searchbarComponent.setFocus();
            }), 1000);
        }
    };
    IonicSelectableModalComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'ionic-selectable-modal',
                    template: "<ion-header>\n  <ion-toolbar *ngIf=\"!selectComponent.headerTemplate\"\n    [color]=\"selectComponent.headerColor ? selectComponent.headerColor : null\">\n    <ion-buttons [slot]=\"selectComponent.closeButtonSlot\">\n      <ion-button (click)=\"selectComponent._close()\">\n        <span *ngIf=\"selectComponent.closeButtonTemplate\"\n          [ngTemplateOutlet]=\"selectComponent.closeButtonTemplate\">\n        </span>\n        <span *ngIf=\"!selectComponent.closeButtonTemplate\">\n          {{selectComponent.closeButtonText}}\n        </span>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>\n      <!-- Need span for for text ellipsis. -->\n      <span *ngIf=\"selectComponent.titleTemplate\"\n        [ngTemplateOutlet]=\"selectComponent.titleTemplate\">\n      </span>\n      <span *ngIf=\"!selectComponent.titleTemplate\">\n        {{selectComponent.label}}\n      </span>\n    </ion-title>\n  </ion-toolbar>\n  <div *ngIf=\"selectComponent.headerTemplate\"\n    [ngTemplateOutlet]=\"selectComponent.headerTemplate\">\n  </div>\n  <ion-toolbar\n    *ngIf=\"selectComponent.canSearch || selectComponent.messageTemplate\">\n    <ion-searchbar *ngIf=\"selectComponent.canSearch\" #searchbarComponent\n      [(ngModel)]=\"selectComponent._searchText\"\n      (ionChange)=\"selectComponent._filterItems()\"\n      (ionClear)=\"selectComponent._onSearchbarClear()\"\n      [placeholder]=\"selectComponent.searchPlaceholder\"\n      [debounce]=\"selectComponent.searchDebounce\">\n    </ion-searchbar>\n    <div class=\"ionic-selectable-message\"\n      *ngIf=\"selectComponent.messageTemplate\">\n      <div [ngTemplateOutlet]=\"selectComponent.messageTemplate\">\n      </div>\n    </div>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div class=\"ionic-selectable-spinner\" *ngIf=\"selectComponent._isSearching\">\n    <div class=\"ionic-selectable-spinner-background\"></div>\n    <ion-spinner></ion-spinner>\n  </div>\n  <ion-list class=\"ion-no-margin\"\n    *ngIf=\"!selectComponent.hasVirtualScroll && selectComponent._hasFilteredItems\">\n    <ion-item-group *ngFor=\"let group of selectComponent._filteredGroups\"\n      class=\"ionic-selectable-group\">\n      <ion-item-divider *ngIf=\"selectComponent._hasGroups\"\n        [color]=\"selectComponent.groupColor ? selectComponent.groupColor : null\">\n        <!-- Need span for for text ellipsis. -->\n        <span *ngIf=\"selectComponent.groupTemplate\"\n          [ngTemplateOutlet]=\"selectComponent.groupTemplate\"\n          [ngTemplateOutletContext]=\"{ group: group }\">\n        </span>\n        <!-- Need ion-label for text ellipsis. -->\n        <ion-label *ngIf=\"!selectComponent.groupTemplate\">\n          {{group.text}}\n        </ion-label>\n        <div *ngIf=\"selectComponent.groupEndTemplate\" slot=\"end\">\n          <div [ngTemplateOutlet]=\"selectComponent.groupEndTemplate\"\n            [ngTemplateOutletContext]=\"{ group: group }\">\n          </div>\n        </div>\n      </ion-item-divider>\n      <ion-item button=\"true\" detail=\"false\" *ngFor=\"let item of group.items\"\n        (click)=\"selectComponent._select(item)\" class=\"ionic-selectable-item\"\n        [ngClass]=\"{\n          'ionic-selectable-item-is-selected': selectComponent._isItemSelected(item),\n          'ionic-selectable-item-is-disabled': selectComponent._isItemDisabled(item)\n        }\" [disabled]=\"selectComponent._isItemDisabled(item)\">\n        <!-- Need span for text ellipsis. -->\n        <span *ngIf=\"selectComponent.itemTemplate\"\n          [ngTemplateOutlet]=\"selectComponent.itemTemplate\"\n          [ngTemplateOutletContext]=\"{ item: item, isItemSelected: selectComponent._isItemSelected(item) }\">\n        </span>\n        <!-- Need ion-label for text ellipsis. -->\n        <ion-label *ngIf=\"!selectComponent.itemTemplate\">\n          {{selectComponent._formatItem(item)}}\n        </ion-label>\n        <div *ngIf=\"selectComponent.itemEndTemplate\" slot=\"end\">\n          <div [ngTemplateOutlet]=\"selectComponent.itemEndTemplate\"\n            [ngTemplateOutletContext]=\"{ item: item, isItemSelected: selectComponent._isItemSelected(item) }\">\n          </div>\n        </div>\n        <span *ngIf=\"selectComponent.itemIconTemplate\"\n          [ngTemplateOutlet]=\"selectComponent.itemIconTemplate\"\n          [ngTemplateOutletContext]=\"{ item: item, isItemSelected: selectComponent._isItemSelected(item) }\">\n        </span>\n        <ion-icon *ngIf=\"!selectComponent.itemIconTemplate\"\n          [name]=\"selectComponent._isItemSelected(item) ? 'checkmark-circle' : 'radio-button-off'\"\n          [color]=\"selectComponent._isItemSelected(item) ? 'primary' : null\"\n          [slot]=\"selectComponent.itemIconSlot\">\n        </ion-icon>\n        <ion-button *ngIf=\"selectComponent.canSaveItem\"\n          class=\"ionic-selectable-item-button\" slot=\"end\" fill=\"outline\"\n          (click)=\"selectComponent._saveItem($event, item)\">\n          <ion-icon slot=\"icon-only\" ios=\"create\" md=\"create-sharp\"></ion-icon>\n        </ion-button>\n        <ion-button *ngIf=\"selectComponent.canDeleteItem\"\n          class=\"ionic-selectable-item-button\" slot=\"end\" fill=\"outline\"\n          (click)=\"selectComponent._deleteItemClick($event, item)\">\n          <ion-icon slot=\"icon-only\" ios=\"trash\" md=\"trash-sharp\"></ion-icon>\n        </ion-button>\n      </ion-item>\n    </ion-item-group>\n  </ion-list>\n  <!-- Fail text should be above InfiniteScroll to avoid a gap when no items are found. -->\n  <div *ngIf=\"!selectComponent._hasFilteredItems\">\n    <span *ngIf=\"selectComponent.searchFailTemplate\"\n      [ngTemplateOutlet]=\"selectComponent.searchFailTemplate\">\n    </span>\n    <div *ngIf=\"!selectComponent.searchFailTemplate\" class=\"ion-margin\">\n      {{selectComponent.searchFailText}}\n    </div>\n  </div>\n  <ion-infinite-scroll *ngIf=\"!selectComponent.hasVirtualScroll\"\n    [disabled]=\"!selectComponent.hasInfiniteScroll\"\n    (ionInfinite)=\"selectComponent._getMoreItems()\">\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n  <ion-virtual-scroll class=\"ion-no-margin\"\n    *ngIf=\"selectComponent.hasVirtualScroll && selectComponent._hasFilteredItems\"\n    [items]=\"selectComponent._filteredGroups[0].items\"\n    [headerFn]=\"selectComponent.virtualScrollHeaderFn\"\n    [approxItemHeight]=\"selectComponent.virtualScrollApproxItemHeight\">\n    <ion-item-divider *virtualHeader=\"let header\"\n      [color]=\"selectComponent.groupColor ? selectComponent.groupColor : null\">\n      {{header}}\n    </ion-item-divider>\n    <ion-item button=\"true\" detail=\"false\" *virtualItem=\"let item\"\n      (click)=\"selectComponent._select(item)\" class=\"ionic-selectable-item\"\n      [ngClass]=\"{\n        'ionic-selectable-item-is-selected': selectComponent._isItemSelected(item),\n        'ionic-selectable-item-is-disabled': selectComponent._isItemDisabled(item)\n      }\" [disabled]=\"selectComponent._isItemDisabled(item)\">\n      <!-- Need span for text ellipsis. -->\n      <span *ngIf=\"selectComponent.itemTemplate\"\n        [ngTemplateOutlet]=\"selectComponent.itemTemplate\"\n        [ngTemplateOutletContext]=\"{ item: item, isItemSelected: selectComponent._isItemSelected(item) }\">\n      </span>\n      <!-- Need ion-label for text ellipsis. -->\n      <ion-label *ngIf=\"!selectComponent.itemTemplate\">\n        {{selectComponent._formatItem(item)}}\n      </ion-label>\n      <div *ngIf=\"selectComponent.itemEndTemplate\" slot=\"end\">\n        <div [ngTemplateOutlet]=\"selectComponent.itemEndTemplate\"\n          [ngTemplateOutletContext]=\"{ item: item, isItemSelected: selectComponent._isItemSelected(item) }\">\n        </div>\n      </div>\n      <span *ngIf=\"selectComponent.itemIconTemplate\"\n        [ngTemplateOutlet]=\"selectComponent.itemIconTemplate\"\n        [ngTemplateOutletContext]=\"{ item: item, isItemSelected: selectComponent._isItemSelected(item) }\">\n      </span>\n      <ion-icon *ngIf=\"!selectComponent.itemIconTemplate\"\n        [name]=\"selectComponent._isItemSelected(item) ? 'checkmark-circle' : 'radio-button-off'\"\n        [color]=\"selectComponent._isItemSelected(item) ? 'primary' : null\"\n        [slot]=\"selectComponent.itemIconSlot\">\n      </ion-icon>\n      <ion-button *ngIf=\"selectComponent.canSaveItem\"\n        class=\"ionic-selectable-item-button\" slot=\"end\" fill=\"outline\"\n        (click)=\"selectComponent._saveItem($event, item)\">\n        <ion-icon slot=\"icon-only\" name=\"md-create\"></ion-icon>\n      </ion-button>\n      <ion-button *ngIf=\"selectComponent.canDeleteItem\"\n        class=\"ionic-selectable-item-button\" slot=\"end\" fill=\"outline\"\n        (click)=\"selectComponent._deleteItemClick($event, item)\">\n        <ion-icon slot=\"icon-only\" name=\"md-trash\"></ion-icon>\n      </ion-button>\n    </ion-item>\n  </ion-virtual-scroll>\n</ion-content>\n<div class=\"ionic-selectable-add-item-template\"\n  *ngIf=\"selectComponent._isAddItemTemplateVisible\"\n  [ngStyle]=\"{ 'top.px': _header.offsetHeight }\">\n  <div class=\"ionic-selectable-add-item-template-inner\"\n    [ngStyle]=\"{ 'height': selectComponent._addItemTemplateFooterHeight }\">\n    <span [ngTemplateOutlet]=\"selectComponent.addItemTemplate\"\n      [ngTemplateOutletContext]=\"{ item: selectComponent._itemToAdd, isAdd: selectComponent._itemToAdd === null }\">\n    </span>\n  </div>\n</div>\n<ion-footer\n  *ngIf=\"selectComponent._footerButtonsCount > 0 || selectComponent.footerTemplate\"\n  [ngStyle]=\"{ 'visibility': selectComponent._isFooterVisible ? 'initial' : 'hidden' }\">\n  <ion-toolbar *ngIf=\"!selectComponent.footerTemplate\">\n    <ion-row>\n      <ion-col *ngIf=\"selectComponent.canClear\">\n        <ion-button expand=\"full\" (click)=\"selectComponent._clear()\"\n          [disabled]=\"!selectComponent._selectedItems.length\">\n          {{selectComponent.clearButtonText}}\n        </ion-button>\n      </ion-col>\n      <ion-col *ngIf=\"selectComponent.canAddItem\">\n        <ion-button expand=\"full\" (click)=\"selectComponent._addItemClick()\">\n          {{selectComponent.addButtonText}}\n        </ion-button>\n      </ion-col>\n      <ion-col\n        *ngIf=\"selectComponent.isMultiple || selectComponent.hasConfirmButton\">\n        <ion-button expand=\"full\" (click)=\"selectComponent._confirm()\"\n          [disabled]=\"!selectComponent.isConfirmButtonEnabled\">\n          {{selectComponent.confirmButtonText}}\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n  <div *ngIf=\"selectComponent.footerTemplate\"\n    [ngTemplateOutlet]=\"selectComponent.footerTemplate\">\n  </div>\n</ion-footer>\n"
                }] }
    ];
    /** @nocollapse */
    IonicSelectableModalComponent.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavParams"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
    ]; };
    IonicSelectableModalComponent.propDecorators = {
        _content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonContent"],] }],
        _searchbarComponent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['searchbarComponent',] }],
        _infiniteScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonInfiniteScroll"],] }],
        _cssClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.ionic-selectable-modal',] }],
        _canClearCssClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.ionic-selectable-modal-can-clear',] }],
        _isMultipleCssClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.ionic-selectable-modal-is-multiple',] }],
        _isSearchingCssClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.ionic-selectable-modal-is-searching',] }],
        _isIos: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.ionic-selectable-modal-ios',] }],
        _isMD: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.ionic-selectable-modal-md',] }],
        _isAddItemTemplateVisibleCssClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.ionic-selectable-modal-is-add-item-template-visible',] }],
        onResize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['window:resize',] }]
    };
    return IonicSelectableModalComponent;
}());

if (false) {}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9uaWMtc2VsZWN0YWJsZS1tb2RhbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9pb25pYy1zZWxlY3RhYmxlLyIsInNvdXJjZXMiOlsic3JjL2FwcC9jb21wb25lbnRzL2lvbmljLXNlbGVjdGFibGUvaW9uaWMtc2VsZWN0YWJsZS1tb2RhbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBaUIsU0FBUyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzRyxPQUFPLEVBQUUsVUFBVSxFQUFFLGlCQUFpQixFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUd4RjtJQThDRSx1Q0FDVSxTQUFvQixFQUNyQixRQUFvQjtRQUY3QixpQkFtQkM7UUFsQlMsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUNyQixhQUFRLEdBQVIsUUFBUSxDQUFZO1FBbEM3QixjQUFTLEdBQUcsSUFBSSxDQUFDO1FBb0NmLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUM3RCxJQUFJLENBQUMsZUFBZSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7UUFDNUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxjQUFjLEdBQUcsRUFBRSxDQUFDO1FBRXpDLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDekUsSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsRUFBRTtnQkFDbkMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsT0FBTzs7OztnQkFBQyxVQUFBLElBQUk7b0JBQ3JDLEtBQUksQ0FBQyxlQUFlLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDakQsQ0FBQyxFQUFDLENBQUM7YUFDSjtpQkFBTTtnQkFDTCxJQUFJLENBQUMsZUFBZSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUN0RTtTQUNGO1FBRUQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQy9FLENBQUM7SUFsREQsc0JBQ0ksNERBQWlCOzs7O1FBRHJCO1lBRUUsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQztRQUN2QyxDQUFDOzs7T0FBQTtJQUNELHNCQUNJLDhEQUFtQjs7OztRQUR2QjtZQUVFLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUM7UUFDekMsQ0FBQzs7O09BQUE7SUFDRCxzQkFDSSwrREFBb0I7Ozs7UUFEeEI7WUFFRSxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxDQUFDO1FBQzNDLENBQUM7OztPQUFBO0lBQ0Qsc0JBQ0ksaURBQU07Ozs7UUFEVjtZQUVFLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUM7UUFDckMsQ0FBQzs7O09BQUE7Ozs7SUFFRCw2Q0FBSzs7O0lBREw7UUFFRSxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDO0lBQ3BDLENBQUM7SUFDRCxzQkFDSSw0RUFBaUM7Ozs7UUFEckM7WUFFRSxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMseUJBQXlCLENBQUM7UUFDeEQsQ0FBQzs7O09BQUE7Ozs7SUFFRCxnREFBUTs7O0lBRFI7UUFFRSw4REFBOEQ7UUFDOUQsOEJBQThCO1FBQzlCLElBQUksQ0FBQyxlQUFlLENBQUMsd0JBQXdCLEVBQUUsQ0FBQztJQUNsRCxDQUFDOzs7O0lBdUJELHVEQUFlOzs7SUFBZjtRQUFBLGlCQVNDO1FBUkMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLENBQUM7UUFFdkUsSUFBSSxJQUFJLENBQUMsbUJBQW1CLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxvQkFBb0IsRUFBRTtZQUN6RSw2REFBNkQ7WUFDN0QsVUFBVTs7O1lBQUM7Z0JBQ1QsS0FBSSxDQUFDLG1CQUFtQixDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ3RDLENBQUMsR0FBRSxJQUFJLENBQUMsQ0FBQztTQUNWO0lBQ0gsQ0FBQzs7Z0JBNUVGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsd0JBQXdCO29CQUNsQyx5aVZBQXNEO2lCQUN2RDs7OztnQkFOcUQsU0FBUztnQkFENUIsVUFBVTs7OzJCQVMxQyxTQUFTLFNBQUMsVUFBVTtzQ0FJcEIsU0FBUyxTQUFDLG9CQUFvQjtrQ0FFOUIsU0FBUyxTQUFDLGlCQUFpQjs0QkFFM0IsV0FBVyxTQUFDLDhCQUE4QjtvQ0FFMUMsV0FBVyxTQUFDLHdDQUF3QztzQ0FJcEQsV0FBVyxTQUFDLDBDQUEwQzt1Q0FJdEQsV0FBVyxTQUFDLDJDQUEyQzt5QkFJdkQsV0FBVyxTQUFDLGtDQUFrQzt3QkFJOUMsV0FBVyxTQUFDLGlDQUFpQztvREFJN0MsV0FBVyxTQUFDLDJEQUEyRDsyQkFJdkUsWUFBWSxTQUFDLGVBQWU7O0lBc0MvQixvQ0FBQztDQUFBLEFBN0VELElBNkVDO1NBekVZLDZCQUE2Qjs7O0lBQ3hDLGlEQUNxQjs7SUFDckIsZ0RBQXFCOztJQUNyQix3REFBMEM7O0lBQzFDLDREQUNrQzs7SUFDbEMsd0RBQ21DOztJQUNuQyxrREFDaUI7Ozs7O0lBaUNmLGtEQUE0Qjs7SUFDNUIsaURBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBIb3N0QmluZGluZywgSG9zdExpc3RlbmVyLCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElvbkNvbnRlbnQsIElvbkluZmluaXRlU2Nyb2xsLCBJb25TZWFyY2hiYXIsIE5hdlBhcmFtcyB9IGZyb20gJ0Bpb25pYy9hbmd1bGFyJztcbmltcG9ydCB7IElvbmljU2VsZWN0YWJsZUNvbXBvbmVudCB9IGZyb20gJy4vaW9uaWMtc2VsZWN0YWJsZS5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdpb25pYy1zZWxlY3RhYmxlLW1vZGFsJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2lvbmljLXNlbGVjdGFibGUtbW9kYWwuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIElvbmljU2VsZWN0YWJsZU1vZGFsQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gIEBWaWV3Q2hpbGQoSW9uQ29udGVudClcbiAgX2NvbnRlbnQ6IElvbkNvbnRlbnQ7XG4gIF9oZWFkZXI6IEhUTUxFbGVtZW50O1xuICBzZWxlY3RDb21wb25lbnQ6IElvbmljU2VsZWN0YWJsZUNvbXBvbmVudDtcbiAgQFZpZXdDaGlsZCgnc2VhcmNoYmFyQ29tcG9uZW50JylcbiAgX3NlYXJjaGJhckNvbXBvbmVudDogSW9uU2VhcmNoYmFyO1xuICBAVmlld0NoaWxkKElvbkluZmluaXRlU2Nyb2xsKVxuICBfaW5maW5pdGVTY3JvbGw6IElvbkluZmluaXRlU2Nyb2xsO1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmlvbmljLXNlbGVjdGFibGUtbW9kYWwnKVxuICBfY3NzQ2xhc3MgPSB0cnVlO1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmlvbmljLXNlbGVjdGFibGUtbW9kYWwtY2FuLWNsZWFyJylcbiAgZ2V0IF9jYW5DbGVhckNzc0NsYXNzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnNlbGVjdENvbXBvbmVudC5jYW5DbGVhcjtcbiAgfVxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmlvbmljLXNlbGVjdGFibGUtbW9kYWwtaXMtbXVsdGlwbGUnKVxuICBnZXQgX2lzTXVsdGlwbGVDc3NDbGFzcygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zZWxlY3RDb21wb25lbnQuaXNNdWx0aXBsZTtcbiAgfVxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmlvbmljLXNlbGVjdGFibGUtbW9kYWwtaXMtc2VhcmNoaW5nJylcbiAgZ2V0IF9pc1NlYXJjaGluZ0Nzc0NsYXNzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnNlbGVjdENvbXBvbmVudC5faXNTZWFyY2hpbmc7XG4gIH1cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pb25pYy1zZWxlY3RhYmxlLW1vZGFsLWlvcycpXG4gIGdldCBfaXNJb3MoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc2VsZWN0Q29tcG9uZW50Ll9pc0lvcztcbiAgfVxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmlvbmljLXNlbGVjdGFibGUtbW9kYWwtbWQnKVxuICBfaXNNRCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zZWxlY3RDb21wb25lbnQuX2lzTUQ7XG4gIH1cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pb25pYy1zZWxlY3RhYmxlLW1vZGFsLWlzLWFkZC1pdGVtLXRlbXBsYXRlLXZpc2libGUnKVxuICBnZXQgX2lzQWRkSXRlbVRlbXBsYXRlVmlzaWJsZUNzc0NsYXNzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnNlbGVjdENvbXBvbmVudC5faXNBZGRJdGVtVGVtcGxhdGVWaXNpYmxlO1xuICB9XG4gIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzpyZXNpemUnKVxuICBvblJlc2l6ZSgpIHtcbiAgICAvLyBpb24tZm9vdGVyIGluc2lkZSB0aGUgdGVtcGxhdGUgbWlnaHQgY2hhbmdlIGl0cyBoZWlnaHQgd2hlblxuICAgIC8vIGRldmljZSBvcmllbnRhdGlvbiBjaGFuZ2VzLlxuICAgIHRoaXMuc2VsZWN0Q29tcG9uZW50Ll9wb3NpdGlvbkFkZEl0ZW1UZW1wbGF0ZSgpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBuYXZQYXJhbXM6IE5hdlBhcmFtcyxcbiAgICBwdWJsaWMgX2VsZW1lbnQ6IEVsZW1lbnRSZWYsXG4gICkge1xuICAgIHRoaXMuc2VsZWN0Q29tcG9uZW50ID0gdGhpcy5uYXZQYXJhbXMuZ2V0KCdzZWxlY3RDb21wb25lbnQnKTtcbiAgICB0aGlzLnNlbGVjdENvbXBvbmVudC5fbW9kYWxDb21wb25lbnQgPSB0aGlzO1xuICAgIHRoaXMuc2VsZWN0Q29tcG9uZW50Ll9zZWxlY3RlZEl0ZW1zID0gW107XG5cbiAgICBpZiAoIXRoaXMuc2VsZWN0Q29tcG9uZW50Ll9pc051bGxPcldoaXRlU3BhY2UodGhpcy5zZWxlY3RDb21wb25lbnQudmFsdWUpKSB7XG4gICAgICBpZiAodGhpcy5zZWxlY3RDb21wb25lbnQuaXNNdWx0aXBsZSkge1xuICAgICAgICB0aGlzLnNlbGVjdENvbXBvbmVudC52YWx1ZS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgIHRoaXMuc2VsZWN0Q29tcG9uZW50Ll9zZWxlY3RlZEl0ZW1zLnB1c2goaXRlbSk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zZWxlY3RDb21wb25lbnQuX3NlbGVjdGVkSXRlbXMucHVzaCh0aGlzLnNlbGVjdENvbXBvbmVudC52YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5zZWxlY3RDb21wb25lbnQuX3NldEl0ZW1zVG9Db25maXJtKHRoaXMuc2VsZWN0Q29tcG9uZW50Ll9zZWxlY3RlZEl0ZW1zKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLl9oZWFkZXIgPSB0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignaW9uLWhlYWRlcicpO1xuXG4gICAgaWYgKHRoaXMuX3NlYXJjaGJhckNvbXBvbmVudCAmJiB0aGlzLnNlbGVjdENvbXBvbmVudC5zaG91bGRGb2N1c1NlYXJjaGJhcikge1xuICAgICAgLy8gRm9jdXMgYWZ0ZXIgYSBkZWxheSBiZWNhdXNlIGZvY3VzIGRvZXNuJ3Qgd29yayB3aXRob3V0IGl0LlxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuX3NlYXJjaGJhckNvbXBvbmVudC5zZXRGb2N1cygpO1xuICAgICAgfSwgMTAwMCk7XG4gICAgfVxuICB9XG59XG4iXX0=

/***/ }),

/***/ "./node_modules/ionic-selectable/esm5/src/app/components/ionic-selectable/ionic-selectable-placeholder-template.directive.js":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/ionic-selectable/esm5/src/app/components/ionic-selectable/ionic-selectable-placeholder-template.directive.js ***!
  \***********************************************************************************************************************************/
/*! exports provided: IonicSelectablePlaceholderTemplateDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonicSelectablePlaceholderTemplateDirective", function() { return IonicSelectablePlaceholderTemplateDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

var IonicSelectablePlaceholderTemplateDirective = /** @class */ (function () {
    function IonicSelectablePlaceholderTemplateDirective() {
    }
    IonicSelectablePlaceholderTemplateDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[ionicSelectablePlaceholderTemplate]',
                },] }
    ];
    return IonicSelectablePlaceholderTemplateDirective;
}());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9uaWMtc2VsZWN0YWJsZS1wbGFjZWhvbGRlci10ZW1wbGF0ZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9pb25pYy1zZWxlY3RhYmxlLyIsInNvdXJjZXMiOlsic3JjL2FwcC9jb21wb25lbnRzL2lvbmljLXNlbGVjdGFibGUvaW9uaWMtc2VsZWN0YWJsZS1wbGFjZWhvbGRlci10ZW1wbGF0ZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFMUM7SUFBQTtJQUcyRCxDQUFDOztnQkFIM0QsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxzQ0FBc0M7aUJBQ2pEOztJQUMwRCxrREFBQztDQUFBLEFBSDVELElBRzREO1NBQS9DLDJDQUEyQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbaW9uaWNTZWxlY3RhYmxlUGxhY2Vob2xkZXJUZW1wbGF0ZV0nLFxufSlcbmV4cG9ydCBjbGFzcyBJb25pY1NlbGVjdGFibGVQbGFjZWhvbGRlclRlbXBsYXRlRGlyZWN0aXZlIHsgfVxuIl19

/***/ }),

/***/ "./node_modules/ionic-selectable/esm5/src/app/components/ionic-selectable/ionic-selectable-search-fail-template.directive.js":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/ionic-selectable/esm5/src/app/components/ionic-selectable/ionic-selectable-search-fail-template.directive.js ***!
  \***********************************************************************************************************************************/
/*! exports provided: IonicSelectableSearchFailTemplateDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonicSelectableSearchFailTemplateDirective", function() { return IonicSelectableSearchFailTemplateDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

var IonicSelectableSearchFailTemplateDirective = /** @class */ (function () {
    function IonicSelectableSearchFailTemplateDirective() {
    }
    IonicSelectableSearchFailTemplateDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[ionicSelectableSearchFailTemplate]',
                },] }
    ];
    return IonicSelectableSearchFailTemplateDirective;
}());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9uaWMtc2VsZWN0YWJsZS1zZWFyY2gtZmFpbC10ZW1wbGF0ZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9pb25pYy1zZWxlY3RhYmxlLyIsInNvdXJjZXMiOlsic3JjL2FwcC9jb21wb25lbnRzL2lvbmljLXNlbGVjdGFibGUvaW9uaWMtc2VsZWN0YWJsZS1zZWFyY2gtZmFpbC10ZW1wbGF0ZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFMUM7SUFBQTtJQUcwRCxDQUFDOztnQkFIMUQsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxxQ0FBcUM7aUJBQ2hEOztJQUN5RCxpREFBQztDQUFBLEFBSDNELElBRzJEO1NBQTlDLDBDQUEwQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbaW9uaWNTZWxlY3RhYmxlU2VhcmNoRmFpbFRlbXBsYXRlXScsXG59KVxuZXhwb3J0IGNsYXNzIElvbmljU2VsZWN0YWJsZVNlYXJjaEZhaWxUZW1wbGF0ZURpcmVjdGl2ZSB7IH1cbiJdfQ==

/***/ }),

/***/ "./node_modules/ionic-selectable/esm5/src/app/components/ionic-selectable/ionic-selectable-title-template.directive.js":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/ionic-selectable/esm5/src/app/components/ionic-selectable/ionic-selectable-title-template.directive.js ***!
  \*****************************************************************************************************************************/
/*! exports provided: IonicSelectableTitleTemplateDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonicSelectableTitleTemplateDirective", function() { return IonicSelectableTitleTemplateDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

var IonicSelectableTitleTemplateDirective = /** @class */ (function () {
    function IonicSelectableTitleTemplateDirective() {
    }
    IonicSelectableTitleTemplateDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[ionicSelectableTitleTemplate]',
                },] }
    ];
    return IonicSelectableTitleTemplateDirective;
}());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9uaWMtc2VsZWN0YWJsZS10aXRsZS10ZW1wbGF0ZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9pb25pYy1zZWxlY3RhYmxlLyIsInNvdXJjZXMiOlsic3JjL2FwcC9jb21wb25lbnRzL2lvbmljLXNlbGVjdGFibGUvaW9uaWMtc2VsZWN0YWJsZS10aXRsZS10ZW1wbGF0ZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFMUM7SUFBQTtJQUdxRCxDQUFDOztnQkFIckQsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxnQ0FBZ0M7aUJBQzNDOztJQUNvRCw0Q0FBQztDQUFBLEFBSHRELElBR3NEO1NBQXpDLHFDQUFxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbaW9uaWNTZWxlY3RhYmxlVGl0bGVUZW1wbGF0ZV0nLFxufSlcbmV4cG9ydCBjbGFzcyBJb25pY1NlbGVjdGFibGVUaXRsZVRlbXBsYXRlRGlyZWN0aXZlIHsgfVxuIl19

/***/ }),

/***/ "./node_modules/ionic-selectable/esm5/src/app/components/ionic-selectable/ionic-selectable-value-template.directive.js":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/ionic-selectable/esm5/src/app/components/ionic-selectable/ionic-selectable-value-template.directive.js ***!
  \*****************************************************************************************************************************/
/*! exports provided: IonicSelectableValueTemplateDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonicSelectableValueTemplateDirective", function() { return IonicSelectableValueTemplateDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

var IonicSelectableValueTemplateDirective = /** @class */ (function () {
    function IonicSelectableValueTemplateDirective() {
    }
    IonicSelectableValueTemplateDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[ionicSelectableValueTemplate]',
                },] }
    ];
    return IonicSelectableValueTemplateDirective;
}());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9uaWMtc2VsZWN0YWJsZS12YWx1ZS10ZW1wbGF0ZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9pb25pYy1zZWxlY3RhYmxlLyIsInNvdXJjZXMiOlsic3JjL2FwcC9jb21wb25lbnRzL2lvbmljLXNlbGVjdGFibGUvaW9uaWMtc2VsZWN0YWJsZS12YWx1ZS10ZW1wbGF0ZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFMUM7SUFBQTtJQUdxRCxDQUFDOztnQkFIckQsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxnQ0FBZ0M7aUJBQzNDOztJQUNvRCw0Q0FBQztDQUFBLEFBSHRELElBR3NEO1NBQXpDLHFDQUFxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbaW9uaWNTZWxlY3RhYmxlVmFsdWVUZW1wbGF0ZV0nLFxufSlcbmV4cG9ydCBjbGFzcyBJb25pY1NlbGVjdGFibGVWYWx1ZVRlbXBsYXRlRGlyZWN0aXZlIHsgfVxuIl19

/***/ }),

/***/ "./node_modules/ionic-selectable/esm5/src/app/components/ionic-selectable/ionic-selectable.component.js":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/ionic-selectable/esm5/src/app/components/ionic-selectable/ionic-selectable.component.js ***!
  \**************************************************************************************************************/
/*! exports provided: IonicSelectableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonicSelectableComponent", function() { return IonicSelectableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _ionic_selectable_add_item_template_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ionic-selectable-add-item-template.directive */ "./node_modules/ionic-selectable/esm5/src/app/components/ionic-selectable/ionic-selectable-add-item-template.directive.js");
/* harmony import */ var _ionic_selectable_close_button_template_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ionic-selectable-close-button-template.directive */ "./node_modules/ionic-selectable/esm5/src/app/components/ionic-selectable/ionic-selectable-close-button-template.directive.js");
/* harmony import */ var _ionic_selectable_footer_template_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ionic-selectable-footer-template.directive */ "./node_modules/ionic-selectable/esm5/src/app/components/ionic-selectable/ionic-selectable-footer-template.directive.js");
/* harmony import */ var _ionic_selectable_group_end_template_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ionic-selectable-group-end-template.directive */ "./node_modules/ionic-selectable/esm5/src/app/components/ionic-selectable/ionic-selectable-group-end-template.directive.js");
/* harmony import */ var _ionic_selectable_group_template_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ionic-selectable-group-template.directive */ "./node_modules/ionic-selectable/esm5/src/app/components/ionic-selectable/ionic-selectable-group-template.directive.js");
/* harmony import */ var _ionic_selectable_header_template_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ionic-selectable-header-template.directive */ "./node_modules/ionic-selectable/esm5/src/app/components/ionic-selectable/ionic-selectable-header-template.directive.js");
/* harmony import */ var _ionic_selectable_item_end_template_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ionic-selectable-item-end-template.directive */ "./node_modules/ionic-selectable/esm5/src/app/components/ionic-selectable/ionic-selectable-item-end-template.directive.js");
/* harmony import */ var _ionic_selectable_item_icon_template_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ionic-selectable-item-icon-template.directive */ "./node_modules/ionic-selectable/esm5/src/app/components/ionic-selectable/ionic-selectable-item-icon-template.directive.js");
/* harmony import */ var _ionic_selectable_item_template_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ionic-selectable-item-template.directive */ "./node_modules/ionic-selectable/esm5/src/app/components/ionic-selectable/ionic-selectable-item-template.directive.js");
/* harmony import */ var _ionic_selectable_message_template_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ionic-selectable-message-template.directive */ "./node_modules/ionic-selectable/esm5/src/app/components/ionic-selectable/ionic-selectable-message-template.directive.js");
/* harmony import */ var _ionic_selectable_modal_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ionic-selectable-modal.component */ "./node_modules/ionic-selectable/esm5/src/app/components/ionic-selectable/ionic-selectable-modal.component.js");
/* harmony import */ var _ionic_selectable_placeholder_template_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./ionic-selectable-placeholder-template.directive */ "./node_modules/ionic-selectable/esm5/src/app/components/ionic-selectable/ionic-selectable-placeholder-template.directive.js");
/* harmony import */ var _ionic_selectable_search_fail_template_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./ionic-selectable-search-fail-template.directive */ "./node_modules/ionic-selectable/esm5/src/app/components/ionic-selectable/ionic-selectable-search-fail-template.directive.js");
/* harmony import */ var _ionic_selectable_title_template_directive__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./ionic-selectable-title-template.directive */ "./node_modules/ionic-selectable/esm5/src/app/components/ionic-selectable/ionic-selectable-title-template.directive.js");
/* harmony import */ var _ionic_selectable_value_template_directive__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./ionic-selectable-value-template.directive */ "./node_modules/ionic-selectable/esm5/src/app/components/ionic-selectable/ionic-selectable-value-template.directive.js");
/* harmony import */ var _ionic_selectable_icon_template_directive__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./ionic-selectable-icon-template.directive */ "./node_modules/ionic-selectable/esm5/src/app/components/ionic-selectable/ionic-selectable-icon-template.directive.js");
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// tslint:disable-next-line:max-line-length



















var IonicSelectableComponent = /** @class */ (function () {
    function IonicSelectableComponent(_modalController, _platform, ionItem, _iterableDiffers, _element, _renderer) {
        this._modalController = _modalController;
        this._platform = _platform;
        this.ionItem = ionItem;
        this._iterableDiffers = _iterableDiffers;
        this._element = _element;
        this._renderer = _renderer;
        this._cssClass = true;
        this._isOnSearchEnabled = true;
        this._isEnabled = true;
        this._shouldBackdropClose = true;
        this._isOpened = false;
        this._value = null;
        this._canClear = false;
        this._hasConfirmButton = false;
        this._isMultiple = false;
        this._canAddItem = false;
        this.onItemsChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._hasIonLabel = false;
        this._ionLabelPosition = null;
        this._label = null;
        this._valueItems = [];
        this._searchText = '';
        this._hasSearchText = false;
        this._groups = [];
        this._itemsToConfirm = [];
        this._selectedItems = [];
        this._filteredGroups = [];
        this._isAddItemTemplateVisible = false;
        this._isFooterVisible = true;
        this._itemToAdd = null;
        this._footerButtonsCount = 0;
        this._hasFilteredItems = false;
        /**
         * A list of items.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#items).
         *
         * \@default []
         * \@memberof IonicSelectableComponent
         */
        this.items = [];
        this.itemsChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Modal CSS class.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#modalcssclass).
         *
         * \@default null
         * \@memberof IonicSelectableComponent
         */
        this.modalCssClass = null;
        /**
         * Modal enter animation.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#modalenteranimation).
         *
         * \@default null
         * \@memberof IonicSelectableComponent
         */
        this.modalEnterAnimation = null;
        /**
         * Modal leave animation.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#modalleaveanimation).
         *
         * \@default null
         * \@memberof IonicSelectableComponent
         */
        this.modalLeaveAnimation = null;
        /**
         * Determines whether Confirm button is enabled.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#isconfirmbuttonenabled).
         *
         * \@default true
         * \@memberof IonicSelectableComponent
         */
        this.isConfirmButtonEnabled = true;
        /**
         * Item property to use as a unique identifier, e.g, `'id'`.
         * **Note**: `items` should be an object array.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#itemvaluefield).
         *
         * \@default null
         * \@memberof IonicSelectableComponent
         */
        this.itemValueField = null;
        /**
         * Item property to display, e.g, `'name'`.
         * **Note**: `items` should be an object array.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#itemtextfield).
         *
         * \@default false
         * \@memberof IonicSelectableComponent
         */
        this.itemTextField = null;
        /**
         *
         * Group property to use as a unique identifier to group items, e.g. `'country.id'`.
         * **Note**: `items` should be an object array.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#groupvaluefield).
         *
         * \@default null
         * \@memberof IonicSelectableComponent
         */
        this.groupValueField = null;
        /**
         * Group property to display, e.g. `'country.name'`.
         * **Note**: `items` should be an object array.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#grouptextfield).
         *
         * \@default null
         * \@memberof IonicSelectableComponent
         */
        this.groupTextField = null;
        /**
         * Determines whether to show Searchbar.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#cansearch).
         *
         * \@default false
         * \@memberof IonicSelectableComponent
         */
        this.canSearch = false;
        /**
         * Determines whether Ionic [InfiniteScroll](https://ionicframework.com/docs/api/components/infinite-scroll/InfiniteScroll/) is enabled.
         * **Note**: Infinite scroll cannot be used together with virtual scroll.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#hasinfinitescroll).
         *
         * \@default false
         * \@memberof IonicSelectableComponent
         */
        this.hasInfiniteScroll = false;
        /**
         * Determines whether Ionic [VirtualScroll](https://ionicframework.com/docs/api/components/virtual-scroll/VirtualScroll/) is enabled.
         * **Note**: Virtual scroll cannot be used together with infinite scroll.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#hasvirtualscroll).
         *
         * \@default false
         * \@memberof IonicSelectableComponent
         */
        this.hasVirtualScroll = false;
        /**
         * See Ionic VirtualScroll [approxItemHeight](https://ionicframework.com/docs/api/components/virtual-scroll/VirtualScroll/).
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#virtualscrollapproxitemheight).
         *
         * \@default '40px'
         * \@memberof IonicSelectableComponent
         */
        this.virtualScrollApproxItemHeight = '40px';
        /**
         * A placeholder for Searchbar.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#searchplaceholder).
         *
         * \@default 'Search'
         * \@memberof IonicSelectableComponent
         */
        this.searchPlaceholder = 'Search';
        /**
         * A placeholder.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#placeholder).
         *
         * \@default null
         * \@memberof IonicSelectableComponent
         */
        this.placeholder = null;
        /**
         * Text to display when no items have been found during search.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#searchfailtext).
         *
         * \@default 'No items found.'
         * \@memberof IonicSelectableComponent
         */
        this.searchFailText = 'No items found.';
        /**
         * Clear button text.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#clearbuttontext).
         *
         * \@default 'Clear'
         * \@memberof IonicSelectableComponent
         */
        this.clearButtonText = 'Clear';
        /**
         * Add button text.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#addbuttontext).
         *
         * \@default 'Add'
         * \@memberof IonicSelectableComponent
         */
        this.addButtonText = 'Add';
        /**
         * Confirm button text.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#confirmbuttontext).
         *
         * \@default 'OK'
         * \@memberof IonicSelectableComponent
         */
        this.confirmButtonText = 'OK';
        /**
         * Close button text.
         * The field is only applicable to **iOS** platform, on **Android** only Cross icon is displayed.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#closebuttontext).
         *
         * \@default 'Cancel'
         * \@memberof IonicSelectableComponent
         */
        this.closeButtonText = 'Cancel';
        /**
         * Determines whether Searchbar should receive focus when Modal is opened.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#shouldfocussearchbar).
         *
         * \@default false
         * \@memberof IonicSelectableComponent
         */
        this.shouldFocusSearchbar = false;
        /**
         * Header color. [Ionic colors](https://ionicframework.com/docs/theming/advanced#colors) are supported.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#headercolor).
         *
         * \@default null
         * \@memberof IonicSelectableComponent
         */
        this.headerColor = null;
        /**
         * Group color. [Ionic colors](https://ionicframework.com/docs/theming/advanced#colors) are supported.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#groupcolor).
         *
         * \@default null
         * \@memberof IonicSelectableComponent
         */
        this.groupColor = null;
        /**
         * Close button slot. [Ionic slots](https://ionicframework.com/docs/api/buttons) are supported.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#closebuttonslot).
         *
         * \@default 'start'
         * \@memberof IonicSelectableComponent
         */
        this.closeButtonSlot = 'start';
        /**
         * Item icon slot. [Ionic slots](https://ionicframework.com/docs/api/item) are supported.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#itemiconslot).
         *
         * \@default 'start'
         * \@memberof IonicSelectableComponent
         */
        this.itemIconSlot = 'start';
        /**
         * Fires when item/s has been selected and Modal closed.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#onchange).
         *
         * \@memberof IonicSelectableComponent
         */
        this.onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Fires when the user is typing in Searchbar.
         * **Note**: `canSearch` and `isOnSearchEnabled` has to be enabled.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#onsearch).
         *
         * \@memberof IonicSelectableComponent
         */
        this.onSearch = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Fires when no items have been found.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#onsearchfail).
         *
         * \@memberof IonicSelectableComponent
         */
        this.onSearchFail = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Fires when some items have been found.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#onsearchsuccess).
         *
         * \@memberof IonicSelectableComponent
         */
        this.onSearchSuccess = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Fires when the user has scrolled to the end of the list.
         * **Note**: `hasInfiniteScroll` has to be enabled.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#oninfinitescroll).
         *
         * \@memberof IonicSelectableComponent
         */
        this.onInfiniteScroll = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Fires when Modal has been opened.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#onopen).
         *
         * \@memberof IonicSelectableComponent
         */
        this.onOpen = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Fires when Modal has been closed.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#onclose).
         *
         * \@memberof IonicSelectableComponent
         */
        this.onClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Fires when an item has been selected or unselected.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#onselect).
         *
         * \@memberof IonicSelectableComponent
         */
        this.onSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Fires when Clear button has been clicked.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#onclear).
         *
         * \@memberof IonicSelectableComponent
         */
        this.onClear = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * How long, in milliseconds, to wait to filter items or to trigger `onSearch` event after each keystroke.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#searchdebounce).
         *
         * \@default 250
         * \@memberof IonicSelectableComponent
         */
        this.searchDebounce = 250;
        /**
         * A list of items to disable.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#disableditems).
         *
         * \@default []
         * \@memberof IonicSelectableComponent
         */
        this.disabledItems = [];
        /**
         * Determines whether item value only should be stored in `ngModel`, not the entire item.
         * **Note**: Item value is defined by `itemValueField`.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#shouldstoreitemvalue).
         *
         * \@default false
         * \@memberof IonicSelectableComponent
         */
        this.shouldStoreItemValue = false;
        /**
         * Determines whether to allow editing items.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#cansaveitem).
         *
         * \@default false
         * \@memberof IonicSelectableComponent
         */
        this.canSaveItem = false;
        /**
         * Determines whether to allow deleting items.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#candeleteitem).
         *
         * \@default false
         * \@memberof IonicSelectableComponent
         */
        this.canDeleteItem = false;
        /**
         * Fires when Edit item button has been clicked.
         * When the button has been clicked `ionicSelectableAddItemTemplate` will be shown. Use the template to create a form to edit item.
         * **Note**: `canSaveItem` has to be enabled.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#onsaveitem).
         *
         * \@memberof IonicSelectableComponent
         */
        this.onSaveItem = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Fires when Delete item button has been clicked.
         * **Note**: `canDeleteItem` has to be enabled.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#ondeleteitem).
         *
         * \@memberof IonicSelectableComponent
         */
        this.onDeleteItem = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Fires when Add item button has been clicked.
         * When the button has been clicked `ionicSelectableAddItemTemplate` will be shown. Use the template to create a form to add item.
         * **Note**: `canAddItem` has to be enabled.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#onadditem).
         *
         * \@memberof IonicSelectableComponent
         */
        this.onAddItem = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * See Ionic VirtualScroll [headerFn](https://ionicframework.com/docs/api/components/virtual-scroll/VirtualScroll/).
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#virtualscrollheaderfn).
         *
         * \@memberof IonicSelectableComponent
         */
        this.virtualScrollHeaderFn = (/**
         * @return {?}
         */
        function () {
            return null;
        });
        this.propagateOnChange = (/**
         * @param {?} _
         * @return {?}
         */
        function (_) { });
        this.propagateOnTouched = (/**
         * @return {?}
         */
        function () { });
        if (!this.items || !this.items.length) {
            this.items = [];
        }
        this._itemsDiffer = this._iterableDiffers.find(this.items).create();
    }
    Object.defineProperty(IonicSelectableComponent.prototype, "_isMultipleCssClass", {
        get: /**
         * @return {?}
         */
        function () {
            return this.isMultiple;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IonicSelectableComponent.prototype, "_hasValueCssClass", {
        get: /**
         * @return {?}
         */
        function () {
            return this.hasValue();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IonicSelectableComponent.prototype, "_hasPlaceholderCssClass", {
        get: /**
         * @return {?}
         */
        function () {
            return this._hasPlaceholder;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IonicSelectableComponent.prototype, "_hasIonLabelCssClass", {
        get: /**
         * @return {?}
         */
        function () {
            return this._hasIonLabel;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IonicSelectableComponent.prototype, "_hasDefaultIonLabelCssClass", {
        get: /**
         * @return {?}
         */
        function () {
            return this._ionLabelPosition === 'default';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IonicSelectableComponent.prototype, "_hasFixedIonLabelCssClass", {
        get: /**
         * @return {?}
         */
        function () {
            return this._ionLabelPosition === 'fixed';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IonicSelectableComponent.prototype, "_hasStackedIonLabelCssClass", {
        get: /**
         * @return {?}
         */
        function () {
            return this._ionLabelPosition === 'stacked';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IonicSelectableComponent.prototype, "_hasFloatingIonLabelCssClass", {
        get: /**
         * @return {?}
         */
        function () {
            return this._ionLabelPosition === 'floating';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IonicSelectableComponent.prototype, "_hasInfiniteScroll", {
        get: /**
         * @private
         * @return {?}
         */
        function () {
            return this.isEnabled && this._modalComponent &&
                this._modalComponent._infiniteScroll ? true : false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IonicSelectableComponent.prototype, "_shouldStoreItemValue", {
        get: /**
         * @return {?}
         */
        function () {
            return this.shouldStoreItemValue && this._hasObjects;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IonicSelectableComponent.prototype, "label", {
        /**
         * Text of [Ionic Label](https://ionicframework.com/docs/api/label).
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#label).
         *
         * @readonly
         * @default null
         * @memberof IonicSelectableComponent
         */
        get: /**
         * Text of [Ionic Label](https://ionicframework.com/docs/api/label).
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#label).
         *
         * \@readonly
         * \@default null
         * \@memberof IonicSelectableComponent
         * @return {?}
         */
        function () {
            return this._label;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IonicSelectableComponent.prototype, "searchText", {
        /**
         * Text that the user has typed in Searchbar.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#searchtext).
         *
         * @readonly
         * @default ''
         * @memberof IonicSelectableComponent
         */
        get: /**
         * Text that the user has typed in Searchbar.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#searchtext).
         *
         * \@readonly
         * \@default ''
         * \@memberof IonicSelectableComponent
         * @return {?}
         */
        function () {
            return this._searchText;
        },
        set: /**
         * @param {?} searchText
         * @return {?}
         */
        function (searchText) {
            this._searchText = searchText;
            this._setHasSearchText();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IonicSelectableComponent.prototype, "isSearching", {
        /**
         * Determines whether search is running.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#issearching).
         *
         * @default false
         * @readonly
         * @memberof IonicSelectableComponent
         */
        get: /**
         * Determines whether search is running.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#issearching).
         *
         * \@default false
         * \@readonly
         * \@memberof IonicSelectableComponent
         * @return {?}
         */
        function () {
            return this._isSearching;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IonicSelectableComponent.prototype, "hasSearchText", {
        /**
         * Determines whether user has typed anything in Searchbar.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#hassearchtext).
         *
         * @default false
         * @readonly
         * @memberof IonicSelectableComponent
         */
        get: /**
         * Determines whether user has typed anything in Searchbar.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#hassearchtext).
         *
         * \@default false
         * \@readonly
         * \@memberof IonicSelectableComponent
         * @return {?}
         */
        function () {
            return this._hasSearchText;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IonicSelectableComponent.prototype, "value", {
        get: /**
         * @return {?}
         */
        function () {
            return this._value;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._value = value;
            // Set value items.
            this._valueItems.splice(0, this._valueItems.length);
            if (this.isMultiple) {
                if (value && value.length) {
                    Array.prototype.push.apply(this._valueItems, value);
                }
            }
            else {
                if (!this._isNullOrWhiteSpace(value)) {
                    this._valueItems.push(value);
                }
            }
            this._setIonItemHasValue();
            this._setHasPlaceholder();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IonicSelectableComponent.prototype, "isEnabled", {
        /**
         * Determines whether the component is enabled.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#isenabled).
         *
         * @default true
         * @memberof IonicSelectableComponent
         */
        get: /**
         * Determines whether the component is enabled.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#isenabled).
         *
         * \@default true
         * \@memberof IonicSelectableComponent
         * @return {?}
         */
        function () {
            return this._isEnabled;
        },
        set: /**
         * @param {?} isEnabled
         * @return {?}
         */
        function (isEnabled) {
            this._isEnabled = !!isEnabled;
            this.enableIonItem(this._isEnabled);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IonicSelectableComponent.prototype, "shouldBackdropClose", {
        /**
         * Determines whether Modal should be closed when backdrop is clicked.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#shouldbackdropclose).
         *
         * @default true
         * @memberof IonicSelectableComponent
         */
        get: /**
         * Determines whether Modal should be closed when backdrop is clicked.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#shouldbackdropclose).
         *
         * \@default true
         * \@memberof IonicSelectableComponent
         * @return {?}
         */
        function () {
            return this._shouldBackdropClose;
        },
        set: /**
         * @param {?} shouldBackdropClose
         * @return {?}
         */
        function (shouldBackdropClose) {
            this._shouldBackdropClose = !!shouldBackdropClose;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IonicSelectableComponent.prototype, "isOpened", {
        /**
         * Determines whether Modal is opened.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#isopened).
         *
         * @default false
         * @readonly
         * @memberof IonicSelectableComponent
         */
        get: /**
         * Determines whether Modal is opened.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#isopened).
         *
         * \@default false
         * \@readonly
         * \@memberof IonicSelectableComponent
         * @return {?}
         */
        function () {
            return this._isOpened;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IonicSelectableComponent.prototype, "hasConfirmButton", {
        /**
       * Determines whether Confirm button is visible for single selection.
       * By default Confirm button is visible only for multiple selection.
       * **Note**: It is always true for multiple selection and cannot be changed.
       * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#hasconfirmbutton).
       *
       * @default true
       * @memberof IonicSelectableComponent
       */
        get: /**
         * Determines whether Confirm button is visible for single selection.
         * By default Confirm button is visible only for multiple selection.
         * **Note**: It is always true for multiple selection and cannot be changed.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#hasconfirmbutton).
         *
         * \@default true
         * \@memberof IonicSelectableComponent
         * @return {?}
         */
        function () {
            return this._hasConfirmButton;
        },
        set: /**
         * @param {?} hasConfirmButton
         * @return {?}
         */
        function (hasConfirmButton) {
            this._hasConfirmButton = !!hasConfirmButton;
            this._countFooterButtons();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IonicSelectableComponent.prototype, "isOnSearchEnabled", {
        /**
         * Determines whether `onSearch` event is enabled.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#isonsearchenabled).
         *
         * @default true
         * @memberof IonicSelectableComponent
         */
        get: /**
         * Determines whether `onSearch` event is enabled.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#isonsearchenabled).
         *
         * \@default true
         * \@memberof IonicSelectableComponent
         * @return {?}
         */
        function () {
            return this._isOnSearchEnabled;
        },
        set: /**
         * @param {?} isOnSearchEnabled
         * @return {?}
         */
        function (isOnSearchEnabled) {
            this._isOnSearchEnabled = !!isOnSearchEnabled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IonicSelectableComponent.prototype, "canClear", {
        /**
         * Determines whether to show Clear button.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#canclear).
         *
         * @default false
         * @memberof IonicSelectableComponent
         */
        get: /**
         * Determines whether to show Clear button.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#canclear).
         *
         * \@default false
         * \@memberof IonicSelectableComponent
         * @return {?}
         */
        function () {
            return this._canClear;
        },
        set: /**
         * @param {?} canClear
         * @return {?}
         */
        function (canClear) {
            this._canClear = !!canClear;
            this._countFooterButtons();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IonicSelectableComponent.prototype, "isMultiple", {
        /**
         * Determines whether multiple items can be selected.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#ismultiple).
         *
         * @default false
         * @memberof IonicSelectableComponent
         */
        get: /**
         * Determines whether multiple items can be selected.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#ismultiple).
         *
         * \@default false
         * \@memberof IonicSelectableComponent
         * @return {?}
         */
        function () {
            return this._isMultiple;
        },
        set: /**
         * @param {?} isMultiple
         * @return {?}
         */
        function (isMultiple) {
            this._isMultiple = !!isMultiple;
            this._countFooterButtons();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IonicSelectableComponent.prototype, "itemsToConfirm", {
        /**
         * A list of items that are selected and awaiting confirmation by user, when he has clicked Confirm button.
         * After the user has clicked Confirm button items to confirm are cleared.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#itemstoconfirm).
         *
         * @default []
         * @readonly
         * @memberof IonicSelectableComponent
         */
        get: /**
         * A list of items that are selected and awaiting confirmation by user, when he has clicked Confirm button.
         * After the user has clicked Confirm button items to confirm are cleared.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#itemstoconfirm).
         *
         * \@default []
         * \@readonly
         * \@memberof IonicSelectableComponent
         * @return {?}
         */
        function () {
            return this._itemsToConfirm;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IonicSelectableComponent.prototype, "canAddItem", {
        /**
         * Determines whether to allow adding items.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#canadditem).
         *
         * @default false
         * @memberof IonicSelectableComponent
         */
        get: /**
         * Determines whether to allow adding items.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#canadditem).
         *
         * \@default false
         * \@memberof IonicSelectableComponent
         * @return {?}
         */
        function () {
            return this._canAddItem;
        },
        set: /**
         * @param {?} canAddItem
         * @return {?}
         */
        function (canAddItem) {
            this._canAddItem = !!canAddItem;
            this._countFooterButtons();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    IonicSelectableComponent.prototype.initFocus = /**
     * @return {?}
     */
    function () { };
    /**
     * @param {?} isEnabled
     * @return {?}
     */
    IonicSelectableComponent.prototype.enableIonItem = /**
     * @param {?} isEnabled
     * @return {?}
     */
    function (isEnabled) {
        if (!this.ionItem) {
            return;
        }
        this.ionItem.disabled = !isEnabled;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    IonicSelectableComponent.prototype._isNullOrWhiteSpace = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (value === null || value === undefined) {
            return true;
        }
        // Convert value to string in case if it's not.
        return value.toString().replace(/\s/g, '').length < 1;
    };
    /**
     * @return {?}
     */
    IonicSelectableComponent.prototype._setHasSearchText = /**
     * @return {?}
     */
    function () {
        this._hasSearchText = !this._isNullOrWhiteSpace(this._searchText);
    };
    /**
     * @return {?}
     */
    IonicSelectableComponent.prototype._hasOnSearch = /**
     * @return {?}
     */
    function () {
        return this.isOnSearchEnabled && this.onSearch.observers.length > 0;
    };
    /**
     * @return {?}
     */
    IonicSelectableComponent.prototype._hasOnSaveItem = /**
     * @return {?}
     */
    function () {
        return this.canSaveItem && this.onSaveItem.observers.length > 0;
    };
    /**
     * @return {?}
     */
    IonicSelectableComponent.prototype._hasOnAddItem = /**
     * @return {?}
     */
    function () {
        return this.canAddItem && this.onAddItem.observers.length > 0;
    };
    /**
     * @return {?}
     */
    IonicSelectableComponent.prototype._hasOnDeleteItem = /**
     * @return {?}
     */
    function () {
        return this.canDeleteItem && this.onDeleteItem.observers.length > 0;
    };
    /**
     * @return {?}
     */
    IonicSelectableComponent.prototype._emitValueChange = /**
     * @return {?}
     */
    function () {
        this.propagateOnChange(this.value);
        this.onChange.emit({
            component: this,
            value: this.value
        });
    };
    /**
     * @return {?}
     */
    IonicSelectableComponent.prototype._emitSearch = /**
     * @return {?}
     */
    function () {
        if (!this.canSearch) {
            return;
        }
        this.onSearch.emit({
            component: this,
            text: this._searchText
        });
    };
    /**
     * @param {?} item
     * @param {?} isSelected
     * @return {?}
     */
    IonicSelectableComponent.prototype._emitOnSelect = /**
     * @param {?} item
     * @param {?} isSelected
     * @return {?}
     */
    function (item, isSelected) {
        this.onSelect.emit({
            component: this,
            item: item,
            isSelected: isSelected
        });
    };
    /**
     * @param {?} items
     * @return {?}
     */
    IonicSelectableComponent.prototype._emitOnClear = /**
     * @param {?} items
     * @return {?}
     */
    function (items) {
        this.onClear.emit({
            component: this,
            items: items
        });
    };
    /**
     * @param {?} isSuccess
     * @return {?}
     */
    IonicSelectableComponent.prototype._emitOnSearchSuccessOrFail = /**
     * @param {?} isSuccess
     * @return {?}
     */
    function (isSuccess) {
        /** @type {?} */
        var eventData = {
            component: this,
            text: this._searchText
        };
        if (isSuccess) {
            this.onSearchSuccess.emit(eventData);
        }
        else {
            this.onSearchFail.emit(eventData);
        }
    };
    /**
     * @param {?} item
     * @return {?}
     */
    IonicSelectableComponent.prototype._formatItem = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        if (this._isNullOrWhiteSpace(item)) {
            return null;
        }
        return this.itemTextField ? item[this.itemTextField] : item.toString();
    };
    /**
     * @param {?} item
     * @return {?}
     */
    IonicSelectableComponent.prototype._formatValueItem = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        var _this = this;
        if (this._shouldStoreItemValue) {
            // Get item text from the list as we store it's value only.
            /** @type {?} */
            var selectedItem = this.items.find((/**
             * @param {?} _item
             * @return {?}
             */
            function (_item) {
                return _item[_this.itemValueField] === item;
            }));
            return this._formatItem(selectedItem);
        }
        else {
            return this._formatItem(item);
        }
    };
    /**
     * @param {?} item
     * @return {?}
     */
    IonicSelectableComponent.prototype._getItemValue = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        if (!this._hasObjects) {
            return item;
        }
        return item[this.itemValueField];
    };
    /**
     * @param {?} item
     * @return {?}
     */
    IonicSelectableComponent.prototype._getStoredItemValue = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        if (!this._hasObjects) {
            return item;
        }
        return this._shouldStoreItemValue ? item : item[this.itemValueField];
    };
    /**
     * @return {?}
     */
    IonicSelectableComponent.prototype._onSearchbarClear = /**
     * @return {?}
     */
    function () {
        // Ionic Searchbar doesn't clear bind with ngModel value.
        // Do it ourselves.
        this._searchText = '';
    };
    /**
     * @return {?}
     */
    IonicSelectableComponent.prototype._filterItems = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._setHasSearchText();
        if (this._hasOnSearch()) {
            // Delegate filtering to the event.
            this._emitSearch();
        }
        else {
            // Default filtering.
            /** @type {?} */
            var groups_1 = [];
            if (!this._searchText || !this._searchText.trim()) {
                groups_1 = this._groups;
            }
            else {
                /** @type {?} */
                var filterText_1 = this._searchText.trim().toLowerCase();
                this._groups.forEach((/**
                 * @param {?} group
                 * @return {?}
                 */
                function (group) {
                    /** @type {?} */
                    var items = group.items.filter((/**
                     * @param {?} item
                     * @return {?}
                     */
                    function (item) {
                        /** @type {?} */
                        var itemText = (_this.itemTextField ?
                            item[_this.itemTextField] : item).toString().toLowerCase();
                        return itemText.indexOf(filterText_1) !== -1;
                    }));
                    if (items.length) {
                        groups_1.push({
                            value: group.value,
                            text: group.text,
                            items: items
                        });
                    }
                }));
                // No items found.
                if (!groups_1.length) {
                    groups_1.push({
                        items: []
                    });
                }
            }
            this._filteredGroups = groups_1;
            this._hasFilteredItems = !this._areGroupsEmpty(groups_1);
            this._emitOnSearchSuccessOrFail(this._hasFilteredItems);
        }
    };
    /**
     * @param {?} item
     * @return {?}
     */
    IonicSelectableComponent.prototype._isItemDisabled = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        var _this = this;
        if (!this.disabledItems) {
            return;
        }
        return this.disabledItems.some((/**
         * @param {?} _item
         * @return {?}
         */
        function (_item) {
            return _this._getItemValue(_item) === _this._getItemValue(item);
        }));
    };
    /**
     * @param {?} item
     * @return {?}
     */
    IonicSelectableComponent.prototype._isItemSelected = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        var _this = this;
        return this._selectedItems.find((/**
         * @param {?} selectedItem
         * @return {?}
         */
        function (selectedItem) {
            return _this._getItemValue(item) === _this._getStoredItemValue(selectedItem);
        })) !== undefined;
    };
    /**
     * @param {?} item
     * @return {?}
     */
    IonicSelectableComponent.prototype._addSelectedItem = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        if (this._shouldStoreItemValue) {
            this._selectedItems.push(this._getItemValue(item));
        }
        else {
            this._selectedItems.push(item);
        }
    };
    /**
     * @param {?} item
     * @return {?}
     */
    IonicSelectableComponent.prototype._deleteSelectedItem = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        var _this = this;
        /** @type {?} */
        var itemToDeleteIndex;
        this._selectedItems.forEach((/**
         * @param {?} selectedItem
         * @param {?} itemIndex
         * @return {?}
         */
        function (selectedItem, itemIndex) {
            if (_this._getItemValue(item) ===
                _this._getStoredItemValue(selectedItem)) {
                itemToDeleteIndex = itemIndex;
            }
        }));
        this._selectedItems.splice(itemToDeleteIndex, 1);
    };
    /**
     * @return {?}
     */
    IonicSelectableComponent.prototype._click = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.isEnabled) {
            return;
        }
        this._label = this._getLabelText();
        this.open().then((/**
         * @return {?}
         */
        function () {
            _this.onOpen.emit({
                component: _this
            });
        }));
    };
    /**
     * @param {?} event
     * @param {?} item
     * @return {?}
     */
    IonicSelectableComponent.prototype._saveItem = /**
     * @param {?} event
     * @param {?} item
     * @return {?}
     */
    function (event, item) {
        event.stopPropagation();
        this._itemToAdd = item;
        if (this._hasOnSaveItem()) {
            this.onSaveItem.emit({
                component: this,
                item: this._itemToAdd
            });
        }
        else {
            this.showAddItemTemplate();
        }
    };
    /**
     * @param {?} event
     * @param {?} item
     * @return {?}
     */
    IonicSelectableComponent.prototype._deleteItemClick = /**
     * @param {?} event
     * @param {?} item
     * @return {?}
     */
    function (event, item) {
        event.stopPropagation();
        this._itemToAdd = item;
        if (this._hasOnDeleteItem()) {
            // Delegate logic to event.
            this.onDeleteItem.emit({
                component: this,
                item: this._itemToAdd
            });
        }
        else {
            this.deleteItem(this._itemToAdd);
        }
    };
    /**
     * @return {?}
     */
    IonicSelectableComponent.prototype._addItemClick = /**
     * @return {?}
     */
    function () {
        if (this._hasOnAddItem()) {
            this.onAddItem.emit({
                component: this
            });
        }
        else {
            this.showAddItemTemplate();
        }
    };
    /**
     * @return {?}
     */
    IonicSelectableComponent.prototype._positionAddItemTemplate = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // Wait for the template to render.
        setTimeout((/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var footer = _this._modalComponent._element.nativeElement
                .querySelector('.ionic-selectable-add-item-template ion-footer');
            _this._addItemTemplateFooterHeight = footer ? "calc(100% - " + footer.offsetHeight + "px)" : '100%';
        }), 100);
    };
    /**
     * @return {?}
     */
    IonicSelectableComponent.prototype._close = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.close().then((/**
         * @return {?}
         */
        function () {
            _this.onClose.emit({
                component: _this
            });
        }));
        if (!this._hasOnSearch()) {
            this._searchText = '';
            this._setHasSearchText();
        }
    };
    /**
     * @return {?}
     */
    IonicSelectableComponent.prototype._clear = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var selectedItems = this._selectedItems;
        this.clear();
        this._emitValueChange();
        this._emitOnClear(selectedItems);
        this.close().then((/**
         * @return {?}
         */
        function () {
            _this.onClose.emit({
                component: _this
            });
        }));
    };
    /**
     * @return {?}
     */
    IonicSelectableComponent.prototype._getMoreItems = /**
     * @return {?}
     */
    function () {
        this.onInfiniteScroll.emit({
            component: this,
            text: this._searchText
        });
    };
    /**
     * @param {?} items
     * @return {?}
     */
    IonicSelectableComponent.prototype._setItemsToConfirm = /**
     * @param {?} items
     * @return {?}
     */
    function (items) {
        // Return a copy of original array, so it couldn't be changed from outside.
        this._itemsToConfirm = [].concat(items);
    };
    /**
     * @param {?} selectedItem
     * @return {?}
     */
    IonicSelectableComponent.prototype._doSelect = /**
     * @param {?} selectedItem
     * @return {?}
     */
    function (selectedItem) {
        this.value = selectedItem;
        this._emitValueChange();
    };
    /**
     * @param {?} item
     * @return {?}
     */
    IonicSelectableComponent.prototype._select = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        /** @type {?} */
        var isItemSelected = this._isItemSelected(item);
        if (this.isMultiple) {
            if (isItemSelected) {
                this._deleteSelectedItem(item);
            }
            else {
                this._addSelectedItem(item);
            }
            this._setItemsToConfirm(this._selectedItems);
            // Emit onSelect event after setting items to confirm so they could be used
            // inside the event.
            this._emitOnSelect(item, !isItemSelected);
        }
        else {
            if (this.hasConfirmButton || this.footerTemplate) {
                // Don't close Modal and keep track on items to confirm.
                // When footer template is used it's up to developer to close Modal.
                this._selectedItems = [];
                if (isItemSelected) {
                    this._deleteSelectedItem(item);
                }
                else {
                    this._addSelectedItem(item);
                }
                this._setItemsToConfirm(this._selectedItems);
                // Emit onSelect event after setting items to confirm so they could be used
                // inside the event.
                this._emitOnSelect(item, !isItemSelected);
            }
            else {
                if (!isItemSelected) {
                    this._selectedItems = [];
                    this._addSelectedItem(item);
                    // Emit onSelect before onChange.
                    this._emitOnSelect(item, true);
                    if (this._shouldStoreItemValue) {
                        this._doSelect(this._getItemValue(item));
                    }
                    else {
                        this._doSelect(item);
                    }
                }
                this._close();
            }
        }
    };
    /**
     * @return {?}
     */
    IonicSelectableComponent.prototype._confirm = /**
     * @return {?}
     */
    function () {
        this.confirm();
        this._close();
    };
    /**
     * @private
     * @return {?}
     */
    IonicSelectableComponent.prototype._getLabelText = /**
     * @private
     * @return {?}
     */
    function () {
        return this._ionLabelElement ? this._ionLabelElement.textContent : null;
    };
    /**
     * @private
     * @param {?} groups
     * @return {?}
     */
    IonicSelectableComponent.prototype._areGroupsEmpty = /**
     * @private
     * @param {?} groups
     * @return {?}
     */
    function (groups) {
        return groups.length === 0 || groups.every((/**
         * @param {?} group
         * @return {?}
         */
        function (group) {
            return !group.items || group.items.length === 0;
        }));
    };
    /**
     * @private
     * @return {?}
     */
    IonicSelectableComponent.prototype._countFooterButtons = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var footerButtonsCount = 0;
        if (this.canClear) {
            footerButtonsCount++;
        }
        if (this.isMultiple || this._hasConfirmButton) {
            footerButtonsCount++;
        }
        if (this.canAddItem) {
            footerButtonsCount++;
        }
        this._footerButtonsCount = footerButtonsCount;
    };
    /**
     * @private
     * @param {?} items
     * @return {?}
     */
    IonicSelectableComponent.prototype._setItems = /**
     * @private
     * @param {?} items
     * @return {?}
     */
    function (items) {
        var _this = this;
        // It's important to have an empty starting group with empty items (groups[0].items),
        // because we bind to it when using VirtualScroll.
        // See https://github.com/eakoriakin/ionic-selectable/issues/70.
        /** @type {?} */
        var groups = [{
                items: items || []
            }];
        if (items && items.length) {
            if (this._hasGroups) {
                groups = [];
                items.forEach((/**
                 * @param {?} item
                 * @return {?}
                 */
                function (item) {
                    /** @type {?} */
                    var groupValue = _this._getPropertyValue(item, _this.groupValueField);
                    /** @type {?} */
                    var group = groups.find((/**
                     * @param {?} _group
                     * @return {?}
                     */
                    function (_group) { return _group.value === groupValue; }));
                    if (group) {
                        group.items.push(item);
                    }
                    else {
                        groups.push({
                            value: groupValue,
                            text: _this._getPropertyValue(item, _this.groupTextField),
                            items: [item]
                        });
                    }
                }));
            }
        }
        this._groups = groups;
        this._filteredGroups = this._groups;
        this._hasFilteredItems = !this._areGroupsEmpty(this._filteredGroups);
    };
    /**
     * @private
     * @param {?} object
     * @param {?} property
     * @return {?}
     */
    IonicSelectableComponent.prototype._getPropertyValue = /**
     * @private
     * @param {?} object
     * @param {?} property
     * @return {?}
     */
    function (object, property) {
        if (!property) {
            return null;
        }
        return property.split('.').reduce((/**
         * @param {?} _object
         * @param {?} _property
         * @return {?}
         */
        function (_object, _property) {
            return _object ? _object[_property] : null;
        }), object);
    };
    /**
     * @private
     * @param {?} hasFocus
     * @return {?}
     */
    IonicSelectableComponent.prototype._setIonItemHasFocus = /**
     * @private
     * @param {?} hasFocus
     * @return {?}
     */
    function (hasFocus) {
        if (!this.ionItem) {
            return;
        }
        // Apply focus CSS class for proper stylying of ion-item/ion-label.
        this._setIonItemCssClass('item-has-focus', hasFocus);
    };
    /**
     * @private
     * @return {?}
     */
    IonicSelectableComponent.prototype._setIonItemHasValue = /**
     * @private
     * @return {?}
     */
    function () {
        if (!this.ionItem) {
            return;
        }
        // Apply value CSS class for proper stylying of ion-item/ion-label.
        this._setIonItemCssClass('item-has-value', this.hasValue());
    };
    /**
     * @private
     * @return {?}
     */
    IonicSelectableComponent.prototype._setHasPlaceholder = /**
     * @private
     * @return {?}
     */
    function () {
        this._hasPlaceholder = !this.hasValue() &&
            (!this._isNullOrWhiteSpace(this.placeholder) || this.placeholderTemplate) ?
            true : false;
    };
    /**
     * @private
     * @param {?} cssClass
     * @param {?} shouldAdd
     * @return {?}
     */
    IonicSelectableComponent.prototype._setIonItemCssClass = /**
     * @private
     * @param {?} cssClass
     * @param {?} shouldAdd
     * @return {?}
     */
    function (cssClass, shouldAdd) {
        if (!this._ionItemElement) {
            return;
        }
        // Change to Renderer2
        if (shouldAdd) {
            this._renderer.addClass(this._ionItemElement, cssClass);
        }
        else {
            this._renderer.removeClass(this._ionItemElement, cssClass);
        }
    };
    /**
     * @private
     * @param {?} isVisible
     * @return {?}
     */
    IonicSelectableComponent.prototype._toggleAddItemTemplate = /**
     * @private
     * @param {?} isVisible
     * @return {?}
     */
    function (isVisible) {
        // It should be possible to show/hide the template regardless
        // canAddItem or canSaveItem parameters, so we could implement some
        // custom behavior. E.g. adding item when search fails using onSearchFail event.
        if (!this.addItemTemplate) {
            return;
        }
        // To make SaveItemTemplate visible we just position it over list using CSS.
        // We don't hide list with *ngIf or [hidden] to prevent its scroll position.
        this._isAddItemTemplateVisible = isVisible;
        this._isFooterVisible = !isVisible;
    };
    /* ControlValueAccessor */
    /* ControlValueAccessor */
    /**
     * @param {?} value
     * @return {?}
     */
    IonicSelectableComponent.prototype.writeValue = /* ControlValueAccessor */
    /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.value = value;
    };
    /**
     * @param {?} method
     * @return {?}
     */
    IonicSelectableComponent.prototype.registerOnChange = /**
     * @param {?} method
     * @return {?}
     */
    function (method) {
        this.propagateOnChange = method;
    };
    /**
     * @param {?} method
     * @return {?}
     */
    IonicSelectableComponent.prototype.registerOnTouched = /**
     * @param {?} method
     * @return {?}
     */
    function (method) {
        this.propagateOnTouched = method;
    };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    IonicSelectableComponent.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this.isEnabled = !isDisabled;
    };
    /* .ControlValueAccessor */
    /* .ControlValueAccessor */
    /**
     * @return {?}
     */
    IonicSelectableComponent.prototype.ngOnInit = /* .ControlValueAccessor */
    /**
     * @return {?}
     */
    function () {
        this._isIos = this._platform.is('ios');
        this._isMD = !this._isIos;
        this._hasObjects = !this._isNullOrWhiteSpace(this.itemValueField);
        // Grouping is supported for objects only.
        // Ionic VirtualScroll has it's own implementation of grouping.
        this._hasGroups = Boolean(this._hasObjects && this.groupValueField && !this.hasVirtualScroll);
        if (this.ionItem) {
            this._ionItemElement = this._element.nativeElement.closest('ion-item');
            this._setIonItemCssClass('item-interactive', true);
            this._setIonItemCssClass('item-ionic-selectable', true);
            if (this._ionItemElement) {
                this._ionLabelElement = this._ionItemElement.querySelector('ion-label');
                if (this._ionLabelElement) {
                    this._hasIonLabel = true;
                    this._ionLabelPosition = this._ionLabelElement.getAttribute('position') || 'default';
                }
            }
        }
        this.enableIonItem(this.isEnabled);
    };
    /**
     * @return {?}
     */
    IonicSelectableComponent.prototype.ngDoCheck = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var itemsChanges = this._itemsDiffer.diff(this.items);
        if (itemsChanges) {
            this._setItems(this.items);
            this.value = this.value;
            this.onItemsChange.emit({
                component: this
            });
        }
    };
    /**
     * Adds item.
     * **Note**: If you want an item to be added to the original array as well use two-way data binding syntax on `[(items)]` field.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#additem).
     *
     * @param item Item to add.
     * @returns Promise that resolves when item has been added.
     * @memberof IonicSelectableComponent
     */
    /**
     * Adds item.
     * **Note**: If you want an item to be added to the original array as well use two-way data binding syntax on `[(items)]` field.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#additem).
     *
     * \@memberof IonicSelectableComponent
     * @param {?} item Item to add.
     * @return {?} Promise that resolves when item has been added.
     */
    IonicSelectableComponent.prototype.addItem = /**
     * Adds item.
     * **Note**: If you want an item to be added to the original array as well use two-way data binding syntax on `[(items)]` field.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#additem).
     *
     * \@memberof IonicSelectableComponent
     * @param {?} item Item to add.
     * @return {?} Promise that resolves when item has been added.
     */
    function (item) {
        /** @type {?} */
        var self = this;
        // Adding item triggers onItemsChange.
        // Return a promise that resolves when onItemsChange finishes.
        // We need a promise or user could do something after item has been added,
        // e.g. use search() method to find the added item.
        this.items.unshift(item);
        // Close any running subscription.
        if (this._addItemObservable) {
            this._addItemObservable.unsubscribe();
        }
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        function (resolve, reject) {
            // Complete callback isn't fired for some reason,
            // so unsubscribe in both success and fail cases.
            self._addItemObservable = self.onItemsChange.asObservable().subscribe((/**
             * @return {?}
             */
            function () {
                self._addItemObservable.unsubscribe();
                resolve();
            }), (/**
             * @return {?}
             */
            function () {
                self._addItemObservable.unsubscribe();
                reject();
            }));
        }));
    };
    /**
   * Deletes item.
   * **Note**: If you want an item to be deleted from the original array as well use two-way data binding syntax on `[(items)]` field.
   * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#deleteitem).
   *
   * @param item Item to delete.
   * @returns Promise that resolves when item has been deleted.
   * @memberof IonicSelectableComponent
   */
    /**
     * Deletes item.
     * **Note**: If you want an item to be deleted from the original array as well use two-way data binding syntax on `[(items)]` field.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#deleteitem).
     *
     * \@memberof IonicSelectableComponent
     * @param {?} item Item to delete.
     * @return {?} Promise that resolves when item has been deleted.
     */
    IonicSelectableComponent.prototype.deleteItem = /**
     * Deletes item.
     * **Note**: If you want an item to be deleted from the original array as well use two-way data binding syntax on `[(items)]` field.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#deleteitem).
     *
     * \@memberof IonicSelectableComponent
     * @param {?} item Item to delete.
     * @return {?} Promise that resolves when item has been deleted.
     */
    function (item) {
        var _this = this;
        /** @type {?} */
        var self = this;
        /** @type {?} */
        var hasValueChanged = false;
        // Remove deleted item from selected items.
        if (this._selectedItems) {
            this._selectedItems = this._selectedItems.filter((/**
             * @param {?} _item
             * @return {?}
             */
            function (_item) {
                return _this._getItemValue(item) !== _this._getStoredItemValue(_item);
            }));
        }
        // Remove deleted item from value.
        if (this.value) {
            if (this.isMultiple) {
                /** @type {?} */
                var values = this.value.filter((/**
                 * @param {?} value
                 * @return {?}
                 */
                function (value) {
                    return value.id !== item.id;
                }));
                if (values.length !== this.value.length) {
                    this.value = values;
                    hasValueChanged = true;
                }
            }
            else {
                if (item === this.value) {
                    this.value = null;
                    hasValueChanged = true;
                }
            }
        }
        if (hasValueChanged) {
            this._emitValueChange();
        }
        // Remove deleted item from list.
        /** @type {?} */
        var items = this.items.filter((/**
         * @param {?} _item
         * @return {?}
         */
        function (_item) {
            return _item.id !== item.id;
        }));
        // Refresh items on parent component.
        this.itemsChange.emit(items);
        // Refresh list.
        this._setItems(items);
        this.onItemsChange.emit({
            component: this
        });
        // Close any running subscription.
        if (this._deleteItemObservable) {
            this._deleteItemObservable.unsubscribe();
        }
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        function (resolve, reject) {
            // Complete callback isn't fired for some reason,
            // so unsubscribe in both success and fail cases.
            self._deleteItemObservable = self.onItemsChange.asObservable().subscribe((/**
             * @return {?}
             */
            function () {
                self._deleteItemObservable.unsubscribe();
                resolve();
            }), (/**
             * @return {?}
             */
            function () {
                self._deleteItemObservable.unsubscribe();
                reject();
            }));
        }));
    };
    /**
     * Determines whether any item has been selected.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#hasvalue).
     *
     * @returns A boolean determining whether any item has been selected.
     * @memberof IonicSelectableComponent
     */
    /**
     * Determines whether any item has been selected.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#hasvalue).
     *
     * \@memberof IonicSelectableComponent
     * @return {?} A boolean determining whether any item has been selected.
     */
    IonicSelectableComponent.prototype.hasValue = /**
     * Determines whether any item has been selected.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#hasvalue).
     *
     * \@memberof IonicSelectableComponent
     * @return {?} A boolean determining whether any item has been selected.
     */
    function () {
        if (this.isMultiple) {
            return this._valueItems.length !== 0;
        }
        else {
            return this._valueItems.length !== 0 && !this._isNullOrWhiteSpace(this._valueItems[0]);
        }
    };
    /**
     * Opens Modal.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#open).
     *
     * @returns Promise that resolves when Modal has been opened.
     * @memberof IonicSelectableComponent
     */
    /**
     * Opens Modal.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#open).
     *
     * \@memberof IonicSelectableComponent
     * @return {?} Promise that resolves when Modal has been opened.
     */
    IonicSelectableComponent.prototype.open = /**
     * Opens Modal.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#open).
     *
     * \@memberof IonicSelectableComponent
     * @return {?} Promise that resolves when Modal has been opened.
     */
    function () {
        /** @type {?} */
        var self = this;
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        function (resolve, reject) {
            if (!self._isEnabled || self._isOpened) {
                reject('IonicSelectable is disabled or already opened.');
                return;
            }
            self._filterItems();
            self._isOpened = true;
            /** @type {?} */
            var modalOptions = {
                component: _ionic_selectable_modal_component__WEBPACK_IMPORTED_MODULE_13__["IonicSelectableModalComponent"],
                componentProps: { selectComponent: self },
                backdropDismiss: self._shouldBackdropClose
            };
            if (self.modalCssClass) {
                modalOptions.cssClass = self.modalCssClass;
            }
            if (self.modalEnterAnimation) {
                modalOptions.enterAnimation = self.modalEnterAnimation;
            }
            if (self.modalLeaveAnimation) {
                modalOptions.leaveAnimation = self.modalLeaveAnimation;
            }
            self._modalController.create(modalOptions).then((/**
             * @param {?} modal
             * @return {?}
             */
            function (modal) {
                self._modal = modal;
                modal.present().then((/**
                 * @return {?}
                 */
                function () {
                    // Set focus after Modal has opened to avoid flickering of focus highlighting
                    // before Modal opening.
                    self._setIonItemHasFocus(true);
                    resolve();
                }));
                modal.onWillDismiss().then((/**
                 * @return {?}
                 */
                function () {
                    self._setIonItemHasFocus(false);
                }));
                modal.onDidDismiss().then((/**
                 * @param {?} event
                 * @return {?}
                 */
                function (event) {
                    self._isOpened = false;
                    self._itemsToConfirm = [];
                    // Closed by clicking on backdrop outside modal.
                    if (event.role === 'backdrop') {
                        self.onClose.emit({
                            component: self
                        });
                    }
                }));
            }));
        }));
    };
    /**
     * Closes Modal.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#close).
     *
     * @returns Promise that resolves when Modal has been closed.
     * @memberof IonicSelectableComponent
     */
    /**
     * Closes Modal.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#close).
     *
     * \@memberof IonicSelectableComponent
     * @return {?} Promise that resolves when Modal has been closed.
     */
    IonicSelectableComponent.prototype.close = /**
     * Closes Modal.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#close).
     *
     * \@memberof IonicSelectableComponent
     * @return {?} Promise that resolves when Modal has been closed.
     */
    function () {
        /** @type {?} */
        var self = this;
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        function (resolve, reject) {
            if (!self._isEnabled || !self._isOpened) {
                reject('IonicSelectable is disabled or already closed.');
                return;
            }
            self.propagateOnTouched();
            self._isOpened = false;
            self._itemToAdd = null;
            self._modal.dismiss().then((/**
             * @return {?}
             */
            function () {
                self._setIonItemHasFocus(false);
                self.hideAddItemTemplate();
                resolve();
            }));
        }));
    };
    /**
     * Clears value.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#clear).
     *
     * @memberof IonicSelectableComponent
     */
    /**
     * Clears value.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#clear).
     *
     * \@memberof IonicSelectableComponent
     * @return {?}
     */
    IonicSelectableComponent.prototype.clear = /**
     * Clears value.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#clear).
     *
     * \@memberof IonicSelectableComponent
     * @return {?}
     */
    function () {
        this.value = this.isMultiple ? [] : null;
        this._itemsToConfirm = [];
        this.propagateOnChange(this.value);
    };
    /**
     * Confirms selected items by updating value.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#confirm).
     *
     * @memberof IonicSelectableComponent
     */
    /**
     * Confirms selected items by updating value.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#confirm).
     *
     * \@memberof IonicSelectableComponent
     * @return {?}
     */
    IonicSelectableComponent.prototype.confirm = /**
     * Confirms selected items by updating value.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#confirm).
     *
     * \@memberof IonicSelectableComponent
     * @return {?}
     */
    function () {
        if (this.isMultiple) {
            this._doSelect(this._selectedItems);
        }
        else if (this.hasConfirmButton || this.footerTemplate) {
            this._doSelect(this._selectedItems[0] || null);
        }
    };
    /**
     * Selects or deselects all or specific items.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#toggleitems).
     *
     * @param isSelect Determines whether to select or deselect items.
     * @param [items] Items to toggle. If items are not set all items will be toggled.
     * @memberof IonicSelectableComponent
     */
    /**
     * Selects or deselects all or specific items.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#toggleitems).
     *
     * \@memberof IonicSelectableComponent
     * @param {?} isSelect Determines whether to select or deselect items.
     * @param {?=} items
     * @return {?}
     */
    IonicSelectableComponent.prototype.toggleItems = /**
     * Selects or deselects all or specific items.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#toggleitems).
     *
     * \@memberof IonicSelectableComponent
     * @param {?} isSelect Determines whether to select or deselect items.
     * @param {?=} items
     * @return {?}
     */
    function (isSelect, items) {
        var _this = this;
        if (isSelect) {
            /** @type {?} */
            var hasItems = items && items.length;
            /** @type {?} */
            var itemsToToggle = this._groups.reduce((/**
             * @param {?} allItems
             * @param {?} group
             * @return {?}
             */
            function (allItems, group) {
                return allItems.concat(group.items);
            }), []);
            // Don't allow to select all items in single mode.
            if (!this.isMultiple && !hasItems) {
                itemsToToggle = [];
            }
            // Toggle specific items.
            if (hasItems) {
                itemsToToggle = itemsToToggle.filter((/**
                 * @param {?} itemToToggle
                 * @return {?}
                 */
                function (itemToToggle) {
                    return items.find((/**
                     * @param {?} item
                     * @return {?}
                     */
                    function (item) {
                        return _this._getItemValue(itemToToggle) === _this._getItemValue(item);
                    })) !== undefined;
                }));
                // Take the first item for single mode.
                if (!this.isMultiple) {
                    itemsToToggle.splice(0, 1);
                }
            }
            itemsToToggle.forEach((/**
             * @param {?} item
             * @return {?}
             */
            function (item) {
                _this._addSelectedItem(item);
            }));
        }
        else {
            this._selectedItems = [];
        }
        this._setItemsToConfirm(this._selectedItems);
    };
    /**
     * Scrolls to the top of Modal content.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#scrolltotop).
     *
     * @returns Promise that resolves when scroll has been completed.
     * @memberof IonicSelectableComponent
     */
    /**
     * Scrolls to the top of Modal content.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#scrolltotop).
     *
     * \@memberof IonicSelectableComponent
     * @return {?} Promise that resolves when scroll has been completed.
     */
    IonicSelectableComponent.prototype.scrollToTop = /**
     * Scrolls to the top of Modal content.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#scrolltotop).
     *
     * \@memberof IonicSelectableComponent
     * @return {?} Promise that resolves when scroll has been completed.
     */
    function () {
        /** @type {?} */
        var self = this;
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        function (resolve, reject) {
            if (!self._isOpened) {
                reject('IonicSelectable content cannot be scrolled.');
                return;
            }
            self._modalComponent._content.scrollToTop().then((/**
             * @return {?}
             */
            function () {
                resolve();
            }));
        }));
    };
    /**
     * Scrolls to the bottom of Modal content.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#scrolltobottom).
     *
     * @returns Promise that resolves when scroll has been completed.
     * @memberof IonicSelectableComponent
     */
    /**
     * Scrolls to the bottom of Modal content.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#scrolltobottom).
     *
     * \@memberof IonicSelectableComponent
     * @return {?} Promise that resolves when scroll has been completed.
     */
    IonicSelectableComponent.prototype.scrollToBottom = /**
     * Scrolls to the bottom of Modal content.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#scrolltobottom).
     *
     * \@memberof IonicSelectableComponent
     * @return {?} Promise that resolves when scroll has been completed.
     */
    function () {
        /** @type {?} */
        var self = this;
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        function (resolve, reject) {
            if (!self._isOpened) {
                reject('IonicSelectable content cannot be scrolled.');
                return;
            }
            self._modalComponent._content.scrollToBottom().then((/**
             * @return {?}
             */
            function () {
                resolve();
            }));
        }));
    };
    /**
     * Starts search process by showing Loading spinner.
     * Use it together with `onSearch` event to indicate search start.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#startsearch).
     *
     * @memberof IonicSelectableComponent
     */
    /**
     * Starts search process by showing Loading spinner.
     * Use it together with `onSearch` event to indicate search start.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#startsearch).
     *
     * \@memberof IonicSelectableComponent
     * @return {?}
     */
    IonicSelectableComponent.prototype.startSearch = /**
     * Starts search process by showing Loading spinner.
     * Use it together with `onSearch` event to indicate search start.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#startsearch).
     *
     * \@memberof IonicSelectableComponent
     * @return {?}
     */
    function () {
        if (!this._isEnabled) {
            return;
        }
        this.showLoading();
    };
    /**
     * Ends search process by hiding Loading spinner and refreshing items.
     * Use it together with `onSearch` event to indicate search end.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#endsearch).
     *
     * @memberof IonicSelectableComponent
     */
    /**
     * Ends search process by hiding Loading spinner and refreshing items.
     * Use it together with `onSearch` event to indicate search end.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#endsearch).
     *
     * \@memberof IonicSelectableComponent
     * @return {?}
     */
    IonicSelectableComponent.prototype.endSearch = /**
     * Ends search process by hiding Loading spinner and refreshing items.
     * Use it together with `onSearch` event to indicate search end.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#endsearch).
     *
     * \@memberof IonicSelectableComponent
     * @return {?}
     */
    function () {
        if (!this._isEnabled) {
            return;
        }
        this.hideLoading();
        // When inside Ionic Modal and onSearch event is used,
        // ngDoCheck() doesn't work as _itemsDiffer fails to detect changes.
        // See https://github.com/eakoriakin/ionic-selectable/issues/44.
        // Refresh items manually.
        this._setItems(this.items);
        this._emitOnSearchSuccessOrFail(this._hasFilteredItems);
    };
    /**
     * Enables infinite scroll.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#enableinfinitescroll).
     *
     * @memberof IonicSelectableComponent
     */
    /**
     * Enables infinite scroll.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#enableinfinitescroll).
     *
     * \@memberof IonicSelectableComponent
     * @return {?}
     */
    IonicSelectableComponent.prototype.enableInfiniteScroll = /**
     * Enables infinite scroll.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#enableinfinitescroll).
     *
     * \@memberof IonicSelectableComponent
     * @return {?}
     */
    function () {
        if (!this._hasInfiniteScroll) {
            return;
        }
        this._modalComponent._infiniteScroll.disabled = false;
    };
    /**
     * Disables infinite scroll.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#disableinfinitescroll).
     *
     * @memberof IonicSelectableComponent
     */
    /**
     * Disables infinite scroll.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#disableinfinitescroll).
     *
     * \@memberof IonicSelectableComponent
     * @return {?}
     */
    IonicSelectableComponent.prototype.disableInfiniteScroll = /**
     * Disables infinite scroll.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#disableinfinitescroll).
     *
     * \@memberof IonicSelectableComponent
     * @return {?}
     */
    function () {
        if (!this._hasInfiniteScroll) {
            return;
        }
        this._modalComponent._infiniteScroll.disabled = true;
    };
    /**
     * Ends infinite scroll.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#endinfinitescroll).
     *
     * @memberof IonicSelectableComponent
     */
    /**
     * Ends infinite scroll.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#endinfinitescroll).
     *
     * \@memberof IonicSelectableComponent
     * @return {?}
     */
    IonicSelectableComponent.prototype.endInfiniteScroll = /**
     * Ends infinite scroll.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#endinfinitescroll).
     *
     * \@memberof IonicSelectableComponent
     * @return {?}
     */
    function () {
        if (!this._hasInfiniteScroll) {
            return;
        }
        this._modalComponent._infiniteScroll.complete();
        this._setItems(this.items);
    };
    /**
     * Triggers search of items.
     * **Note**: `canSearch` has to be enabled.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#search).
     *
     * @param text Text to search items by.
     * @memberof IonicSelectableComponent
     */
    /**
     * Triggers search of items.
     * **Note**: `canSearch` has to be enabled.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#search).
     *
     * \@memberof IonicSelectableComponent
     * @param {?} text Text to search items by.
     * @return {?}
     */
    IonicSelectableComponent.prototype.search = /**
     * Triggers search of items.
     * **Note**: `canSearch` has to be enabled.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#search).
     *
     * \@memberof IonicSelectableComponent
     * @param {?} text Text to search items by.
     * @return {?}
     */
    function (text) {
        if (!this._isEnabled || !this._isOpened || !this.canSearch) {
            return;
        }
        this._searchText = text;
        this._setHasSearchText();
        this._filterItems();
    };
    /**
     * Shows Loading spinner.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#showloading).
     *
     * @memberof IonicSelectableComponent
     */
    /**
     * Shows Loading spinner.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#showloading).
     *
     * \@memberof IonicSelectableComponent
     * @return {?}
     */
    IonicSelectableComponent.prototype.showLoading = /**
     * Shows Loading spinner.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#showloading).
     *
     * \@memberof IonicSelectableComponent
     * @return {?}
     */
    function () {
        if (!this._isEnabled) {
            return;
        }
        this._isSearching = true;
    };
    /**
     * Hides Loading spinner.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#hideloading).
     *
     * @memberof IonicSelectableComponent
     */
    /**
     * Hides Loading spinner.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#hideloading).
     *
     * \@memberof IonicSelectableComponent
     * @return {?}
     */
    IonicSelectableComponent.prototype.hideLoading = /**
     * Hides Loading spinner.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#hideloading).
     *
     * \@memberof IonicSelectableComponent
     * @return {?}
     */
    function () {
        if (!this._isEnabled) {
            return;
        }
        this._isSearching = false;
    };
    /**
     * Shows `ionicSelectableAddItemTemplate`.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#showadditemtemplate).
     *
     * @memberof IonicSelectableComponent
     */
    /**
     * Shows `ionicSelectableAddItemTemplate`.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#showadditemtemplate).
     *
     * \@memberof IonicSelectableComponent
     * @return {?}
     */
    IonicSelectableComponent.prototype.showAddItemTemplate = /**
     * Shows `ionicSelectableAddItemTemplate`.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#showadditemtemplate).
     *
     * \@memberof IonicSelectableComponent
     * @return {?}
     */
    function () {
        this._toggleAddItemTemplate(true);
        // Position the template only when it shous up.
        this._positionAddItemTemplate();
    };
    /**
     * Hides `ionicSelectableAddItemTemplate`.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#hideadditemtemplate).
     *
     * @memberof IonicSelectableComponent
     */
    /**
     * Hides `ionicSelectableAddItemTemplate`.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#hideadditemtemplate).
     *
     * \@memberof IonicSelectableComponent
     * @return {?}
     */
    IonicSelectableComponent.prototype.hideAddItemTemplate = /**
     * Hides `ionicSelectableAddItemTemplate`.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#hideadditemtemplate).
     *
     * \@memberof IonicSelectableComponent
     * @return {?}
     */
    function () {
        // Clean item to add as it's no longer needed once Add Item Modal has been closed.
        this._itemToAdd = null;
        this._toggleAddItemTemplate(false);
    };
    IonicSelectableComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'ionic-selectable',
                    template: "<div class=\"ionic-selectable-inner\">\n  <div class=\"ionic-selectable-value\">\n    <div *ngIf=\"valueTemplate && _valueItems.length && isMultiple\"\n      [ngTemplateOutlet]=\"valueTemplate\"\n      [ngTemplateOutletContext]=\"{ value: _valueItems }\">\n    </div>\n    <div class=\"ionic-selectable-value-item\"\n      *ngIf=\"valueTemplate && _valueItems.length && !isMultiple\">\n      <div [ngTemplateOutlet]=\"valueTemplate\"\n        [ngTemplateOutletContext]=\"{ value: _valueItems[0] }\">\n      </div>\n    </div>\n    <span *ngIf=\"!valueTemplate && _valueItems.length\">\n      <div class=\"ionic-selectable-value-item\"\n        *ngFor=\"let valueItem of _valueItems\">\n        {{_formatValueItem(valueItem)}}\n      </div>\n    </span>\n    <div *ngIf=\"_hasPlaceholder && placeholderTemplate\"\n      class=\"ionic-selectable-value-item\">\n      <div [ngTemplateOutlet]=\"placeholderTemplate\">\n      </div>\n    </div>\n    <div class=\"ionic-selectable-value-item\"\n      *ngIf=\"_hasPlaceholder && !placeholderTemplate\">\n      {{placeholder}}\n    </div>\n    <!-- Fix icon allignment when there's no value or placeholder. -->\n    <span *ngIf=\"!_valueItems.length && !_hasPlaceholder\">&nbsp;</span>\n  </div>\n  <div *ngIf=\"iconTemplate\" class=\"ionic-selectable-icon-template\">\n      <div [ngTemplateOutlet]=\"iconTemplate\"></div>\n  </div>\n  <div *ngIf=\"!iconTemplate\" class=\"ionic-selectable-icon\">\n    <div class=\"ionic-selectable-icon-inner\"></div>\n  </div>\n  <!-- Need to be type=\"button\" otherwise click event triggers form ngSubmit. -->\n  <button class=\"ionic-selectable-cover\" [disabled]=\"!isEnabled\"\n    (click)=\"_click()\" type=\"button\">\n  </button>\n</div>\n",
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                    providers: [{
                            provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                            useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])((/**
                             * @return {?}
                             */
                            function () { return IonicSelectableComponent; })),
                            multi: true
                        }],
                    styles: [".item-ionic-selectable .item-inner .input-wrapper{align-items:normal}.item-ionic-selectable ion-label{flex:1;max-width:initial}.ionic-selectable{display:block;max-width:45%}.ionic-selectable-inner{display:flex;flex-wrap:wrap;flex-direction:row;justify-content:flex-end}.ionic-selectable-has-placeholder .ionic-selectable-value-item{color:var(--placeholder-color,#999)}.ionic-selectable-value{flex:1;padding-top:13px;padding-bottom:13px;overflow:hidden}.ionic-selectable-value-item{text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.ionic-selectable-value-item:not(:last-child){margin-bottom:5px}.ionic-selectable-icon{position:relative;width:20px}.ionic-selectable-icon-inner{position:absolute;top:20px;left:5px;border-top:5px solid;border-right:5px solid transparent;border-left:5px solid transparent;pointer-events:none;color:var(--icon-color,#999)}.ionic-selectable-icon-template{-ms-grid-row-align:center;align-self:center;margin-left:5px}.ionic-selectable-ios .ionic-selectable-value{padding-top:11px;padding-bottom:11px}.ionic-selectable-ios .ionic-selectable-icon-inner{top:19px}.ionic-selectable-spinner{position:fixed;bottom:0;top:0;left:0;right:0;z-index:1}.ionic-selectable-spinner-background{top:0;bottom:0;left:0;right:0;position:absolute;background-color:#000;opacity:.05}.ionic-selectable-spinner ion-spinner{position:absolute;top:50%;left:50%;z-index:10;margin-top:-14px;margin-left:-14px}.ionic-selectable-cover{left:0;top:0;margin:0;position:absolute;width:100%;height:100%;border:0;background:0 0;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:0}.ionic-selectable-add-item-template{position:fixed;bottom:0;left:0;right:0;background-color:#fff}.ionic-selectable-add-item-template-inner{overflow-y:auto}.ionic-selectable-add-item-template-inner>ion-footer{bottom:0;position:absolute}.ionic-selectable:not(.ionic-selectable-has-label){max-width:100%;width:100%}.ionic-selectable:not(.ionic-selectable-has-label)-value-item{text-align:right}.ionic-selectable-label-floating,.ionic-selectable-label-stacked{-ms-grid-row-align:stretch;align-self:stretch;max-width:100%;padding-left:0;padding-top:8px;padding-bottom:8px}.ionic-selectable-label-floating .ionic-selectable-value,.ionic-selectable-label-stacked .ionic-selectable-value{padding-top:0;padding-bottom:0;min-height:19px}.ionic-selectable-label-floating .ionic-selectable-icon-inner,.ionic-selectable-label-stacked .ionic-selectable-icon-inner{top:7px}.ionic-selectable-label-floating.ionic-selectable-ios .ionic-selectable-value,.ionic-selectable-label-stacked.ionic-selectable-ios .ionic-selectable-value{padding-top:0;padding-bottom:0;min-height:20px}.ionic-selectable-label-floating.ionic-selectable-ios .ionic-selectable-icon-inner,.ionic-selectable-label-stacked.ionic-selectable-ios .ionic-selectable-icon-inner{top:8px}.ionic-selectable-label-default .ionic-selectable-value,.ionic-selectable-label-fixed .ionic-selectable-value{padding-left:var(--padding-start,16px)}.ionic-selectable-label-fixed:not(.ionic-selectable-has-value) .ionic-selectable-value{padding-left:calc(var(--padding-start,$padding) + 11px)}.ionic-selectable-modal .ionic-selectable-group ion-item-divider{padding-right:16px}.ionic-selectable-modal .ionic-selectable-item-button{margin-left:8px;margin-right:8px}.ionic-selectable-modal-ios .ionic-selectable-message{padding:8px}.ionic-selectable-modal-ios .ionic-selectable-group ion-item-divider{padding-right:8px}.ionic-selectable-modal-md .ionic-selectable-message{padding:8px 12px}.ionic-selectable-modal.ionic-selectable-modal-can-clear.ionic-selectable-modal-is-multiple .footer .col:first-child{padding-right:8px}.ionic-selectable-modal.ionic-selectable-modal-can-clear.ionic-selectable-modal-is-multiple .footer .col:last-child{padding-left:8px}.ionic-selectable-modal.ionic-selectable-modal-is-add-item-template-visible>.content>.scroll-content,.ionic-selectable-modal.ionic-selectable-modal-is-searching .scroll-content{overflow-y:hidden}.ionic-selectable-modal ion-header ion-toolbar:first-of-type{padding-top:var(--ion-safe-area-top,0)}"]
                }] }
    ];
    /** @nocollapse */
    IonicSelectableComponent.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonItem"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }
    ]; };
    IonicSelectableComponent.propDecorators = {
        _cssClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.ionic-selectable',] }],
        _isIos: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.ionic-selectable-ios',] }],
        _isMD: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.ionic-selectable-md',] }],
        _isMultipleCssClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.ionic-selectable-is-multiple',] }],
        _hasValueCssClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.ionic-selectable-has-value',] }],
        _hasPlaceholderCssClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.ionic-selectable-has-placeholder',] }],
        _hasIonLabelCssClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.ionic-selectable-has-label',] }],
        _hasDefaultIonLabelCssClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.ionic-selectable-label-default',] }],
        _hasFixedIonLabelCssClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.ionic-selectable-label-fixed',] }],
        _hasStackedIonLabelCssClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.ionic-selectable-label-stacked',] }],
        _hasFloatingIonLabelCssClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.ionic-selectable-label-floating',] }],
        items: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        itemsChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        isEnabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.ionic-selectable-is-enabled',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['isEnabled',] }],
        shouldBackdropClose: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['shouldBackdropClose',] }],
        modalCssClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        modalEnterAnimation: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        modalLeaveAnimation: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        isConfirmButtonEnabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        hasConfirmButton: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['hasConfirmButton',] }],
        itemValueField: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        itemTextField: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        groupValueField: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        groupTextField: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        canSearch: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        isOnSearchEnabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['isOnSearchEnabled',] }],
        canClear: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.ionic-selectable-can-clear',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['canClear',] }],
        hasInfiniteScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        hasVirtualScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        virtualScrollApproxItemHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        searchPlaceholder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        placeholder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        isMultiple: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['isMultiple',] }],
        searchFailText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        clearButtonText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        addButtonText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        confirmButtonText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        closeButtonText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        shouldFocusSearchbar: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        headerColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        groupColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        closeButtonSlot: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        itemIconSlot: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        onChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        onSearch: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        onSearchFail: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        onSearchSuccess: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        onInfiniteScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        onOpen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        onClose: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        onSelect: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        onClear: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        searchDebounce: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        disabledItems: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        shouldStoreItemValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        canSaveItem: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        canDeleteItem: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        canAddItem: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['canAddItem',] }],
        onSaveItem: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        onDeleteItem: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        onAddItem: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        valueTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [_ionic_selectable_value_template_directive__WEBPACK_IMPORTED_MODULE_17__["IonicSelectableValueTemplateDirective"], { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] },] }],
        itemTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [_ionic_selectable_item_template_directive__WEBPACK_IMPORTED_MODULE_11__["IonicSelectableItemTemplateDirective"], { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] },] }],
        itemEndTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [_ionic_selectable_item_end_template_directive__WEBPACK_IMPORTED_MODULE_9__["IonicSelectableItemEndTemplateDirective"], { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] },] }],
        titleTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [_ionic_selectable_title_template_directive__WEBPACK_IMPORTED_MODULE_16__["IonicSelectableTitleTemplateDirective"], { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] },] }],
        placeholderTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [_ionic_selectable_placeholder_template_directive__WEBPACK_IMPORTED_MODULE_14__["IonicSelectablePlaceholderTemplateDirective"], { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] },] }],
        messageTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [_ionic_selectable_message_template_directive__WEBPACK_IMPORTED_MODULE_12__["IonicSelectableMessageTemplateDirective"], { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] },] }],
        groupTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [_ionic_selectable_group_template_directive__WEBPACK_IMPORTED_MODULE_7__["IonicSelectableGroupTemplateDirective"], { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] },] }],
        groupEndTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [_ionic_selectable_group_end_template_directive__WEBPACK_IMPORTED_MODULE_6__["IonicSelectableGroupEndTemplateDirective"], { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] },] }],
        closeButtonTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [_ionic_selectable_close_button_template_directive__WEBPACK_IMPORTED_MODULE_4__["IonicSelectableCloseButtonTemplateDirective"], { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] },] }],
        searchFailTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [_ionic_selectable_search_fail_template_directive__WEBPACK_IMPORTED_MODULE_15__["IonicSelectableSearchFailTemplateDirective"], { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] },] }],
        addItemTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [_ionic_selectable_add_item_template_directive__WEBPACK_IMPORTED_MODULE_3__["IonicSelectableAddItemTemplateDirective"], { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] },] }],
        footerTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [_ionic_selectable_footer_template_directive__WEBPACK_IMPORTED_MODULE_5__["IonicSelectableFooterTemplateDirective"], { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] },] }],
        headerTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [_ionic_selectable_header_template_directive__WEBPACK_IMPORTED_MODULE_8__["IonicSelectableHeaderTemplateDirective"], { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] },] }],
        itemIconTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [_ionic_selectable_item_icon_template_directive__WEBPACK_IMPORTED_MODULE_10__["IonicSelectableItemIconTemplateDirective"], { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] },] }],
        iconTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [_ionic_selectable_icon_template_directive__WEBPACK_IMPORTED_MODULE_18__["IonicSelectableIconTemplateDirective"], { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] },] }],
        virtualScrollHeaderFn: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return IonicSelectableComponent;
}());

if (false) {}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9uaWMtc2VsZWN0YWJsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9pb25pYy1zZWxlY3RhYmxlLyIsInNvdXJjZXMiOlsic3JjL2FwcC9jb21wb25lbnRzL2lvbmljLXNlbGVjdGFibGUvaW9uaWMtc2VsZWN0YWJsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBVyxVQUFVLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFrQixlQUFlLEVBQVUsUUFBUSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pPLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxRQUFRLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUdwRSxPQUFPLEVBQUUsdUNBQXVDLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUN6RyxPQUFPLEVBQUUsMkNBQTJDLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUNqSCxPQUFPLEVBQUUsc0NBQXNDLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUN0RyxPQUFPLEVBQUUsd0NBQXdDLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUMzRyxPQUFPLEVBQUUscUNBQXFDLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUNwRyxPQUFPLEVBQUUsc0NBQXNDLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUN0RyxPQUFPLEVBQUUsdUNBQXVDLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUN6RyxPQUFPLEVBQUUsd0NBQXdDLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUMzRyxPQUFPLEVBQUUsb0NBQW9DLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUNsRyxPQUFPLEVBQUUsdUNBQXVDLEVB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OztJQUNqQyxnRUFBcUM7O0lBQ3JDLGtEQUNpQzs7SUFDakMsb0RBQ21DOztJQUNuQyxnREFDK0I7Ozs7Ozs7O0lBUS9CLHlEQUdDOzs7OztJQXllRCxxREFBNEM7Ozs7O0lBQzVDLHNEQUF1Qzs7Ozs7SUF2ZXJDLG9EQUF5Qzs7Ozs7SUFDekMsNkNBQTJCOzs7OztJQUMzQiwyQ0FBb0M7Ozs7O0lBQ3BDLG9EQUF5Qzs7Ozs7SUFDekMsNENBQTRCOzs7OztJQUM1Qiw2Q0FBNEIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bWF4LWxpbmUtbGVuZ3RoXG5pbXBvcnQgeyBDb21wb25lbnQsIENvbnRlbnRDaGlsZCwgRG9DaGVjaywgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBmb3J3YXJkUmVmLCBIb3N0QmluZGluZywgSW5wdXQsIEl0ZXJhYmxlRGlmZmVyLCBJdGVyYWJsZURpZmZlcnMsIE9uSW5pdCwgT3B0aW9uYWwsIE91dHB1dCwgUmVuZGVyZXIyLCBUZW1wbGF0ZVJlZiwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IElvbkl0ZW0sIE1vZGFsQ29udHJvbGxlciwgUGxhdGZvcm0gfSBmcm9tICdAaW9uaWMvYW5ndWxhcic7XG5pbXBvcnQgeyBBbmltYXRpb25CdWlsZGVyLCBNb2RhbE9wdGlvbnMgfSBmcm9tICdAaW9uaWMvY29yZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IElvbmljU2VsZWN0YWJsZUFkZEl0ZW1UZW1wbGF0ZURpcmVjdGl2ZSB9IGZyb20gJy4vaW9uaWMtc2VsZWN0YWJsZS1hZGQtaXRlbS10ZW1wbGF0ZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgSW9uaWNTZWxlY3RhYmxlQ2xvc2VCdXR0b25UZW1wbGF0ZURpcmVjdGl2ZSB9IGZyb20gJy4vaW9uaWMtc2VsZWN0YWJsZS1jbG9zZS1idXR0b24tdGVtcGxhdGUuZGlyZWN0aXZlJztcbmltcG9ydCB7IElvbmljU2VsZWN0YWJsZUZvb3RlclRlbXBsYXRlRGlyZWN0aXZlIH0gZnJvbSAnLi9pb25pYy1zZWxlY3RhYmxlLWZvb3Rlci10ZW1wbGF0ZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgSW9uaWNTZWxlY3RhYmxlR3JvdXBFbmRUZW1wbGF0ZURpcmVjdGl2ZSB9IGZyb20gJy4vaW9uaWMtc2VsZWN0YWJsZS1ncm91cC1lbmQtdGVtcGxhdGUuZGlyZWN0aXZlJztcbmltcG9ydCB7IElvbmljU2VsZWN0YWJsZUdyb3VwVGVtcGxhdGVEaXJlY3RpdmUgfSBmcm9tICcuL2lvbmljLXNlbGVjdGFibGUtZ3JvdXAtdGVtcGxhdGUuZGlyZWN0aXZlJztcbmltcG9ydCB7IElvbmljU2VsZWN0YWJsZUhlYWRlclRlbXBsYXRlRGlyZWN0aXZlIH0gZnJvbSAnLi9pb25pYy1zZWxlY3RhYmxlLWhlYWRlci10ZW1wbGF0ZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgSW9uaWNTZWxlY3RhYmxlSXRlbUVuZFRlbXBsYXRlRGlyZWN0aXZlIH0gZnJvbSAnLi9pb25pYy1zZWxlY3RhYmxlLWl0ZW0tZW5kLXRlbXBsYXRlLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBJb25pY1NlbGVjdGFibGVJdGVtSWNvblRlbXBsYXRlRGlyZWN0aXZlIH0gZnJvbSAnLi9pb25pYy1zZWxlY3RhYmxlLWl0ZW0taWNvbi10ZW1wbGF0ZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgSW9uaWNTZWxlY3RhYmxlSXRlbVRlbXBsYXRlRGlyZWN0aXZlIH0gZnJvbSAnLi9pb25pYy1zZWxlY3RhYmxlLWl0ZW0tdGVtcGxhdGUuZGlyZWN0aXZlJztcbmltcG9ydCB7IElvbmljU2VsZWN0YWJsZU1lc3NhZ2VUZW1wbGF0ZURpcmVjdGl2ZSB9IGZyb20gJy4vaW9uaWMtc2VsZWN0YWJsZS1tZXNzYWdlLXRlbXBsYXRlLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBJb25pY1NlbGVjdGFibGVNb2RhbENvbXBvbmVudCB9IGZyb20gJy4vaW9uaWMtc2VsZWN0YWJsZS1tb2RhbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgSW9uaWNTZWxlY3RhYmxlUGxhY2Vob2xkZXJUZW1wbGF0ZURpcmVjdGl2ZSB9IGZyb20gJy4vaW9uaWMtc2VsZWN0YWJsZS1wbGFjZWhvbGRlci10ZW1wbGF0ZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgSW9uaWNTZWxlY3RhYmxlU2VhcmNoRmFpbFRlbXBsYXRlRGlyZWN0aXZlIH0gZnJvbSAnLi9pb25pYy1zZWxlY3RhYmxlLXNlYXJjaC1mYWlsLXRlbXBsYXRlLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBJb25pY1NlbGVjdGFibGVUaXRsZVRlbXBsYXRlRGlyZWN0aXZlIH0gZnJvbSAnLi9pb25pYy1zZWxlY3RhYmxlLXRpdGxlLXRlbXBsYXRlLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBJb25pY1NlbGVjdGFibGVWYWx1ZVRlbXBsYXRlRGlyZWN0aXZlIH0gZnJvbSAnLi9pb25pYy1zZWxlY3RhYmxlLXZhbHVlLXRlbXBsYXRlLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBJb25pY1NlbGVjdGFibGVJY29uVGVtcGxhdGVEaXJlY3RpdmUgfSBmcm9tICcuL2lvbmljLXNlbGVjdGFibGUtaWNvbi10ZW1wbGF0ZS5kaXJlY3RpdmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdpb25pYy1zZWxlY3RhYmxlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2lvbmljLXNlbGVjdGFibGUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9pb25pYy1zZWxlY3RhYmxlLmNvbXBvbmVudC5zY3NzJ10sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHByb3ZpZGVyczogW3tcbiAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBJb25pY1NlbGVjdGFibGVDb21wb25lbnQpLFxuICAgIG11bHRpOiB0cnVlXG4gIH1dXG59KVxuZXhwb3J0IGNsYXNzIElvbmljU2VsZWN0YWJsZUNvbXBvbmVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBPbkluaXQsIERvQ2hlY2sge1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmlvbmljLXNlbGVjdGFibGUnKVxuICBfY3NzQ2xhc3MgPSB0cnVlO1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmlvbmljLXNlbGVjdGFibGUtaW9zJylcbiAgX2lzSW9zOiBib29sZWFuO1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmlvbmljLXNlbGVjdGFibGUtbWQnKVxuICBfaXNNRDogYm9vbGVhbjtcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pb25pYy1zZWxlY3RhYmxlLWlzLW11bHRpcGxlJylcbiAgZ2V0IF9pc011bHRpcGxlQ3NzQ2xhc3MoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuaXNNdWx0aXBsZTtcbiAgfVxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmlvbmljLXNlbGVjdGFibGUtaGFzLXZhbHVlJylcbiAgZ2V0IF9oYXNWYWx1ZUNzc0NsYXNzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmhhc1ZhbHVlKCk7XG4gIH1cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pb25pYy1zZWxlY3RhYmxlLWhhcy1wbGFjZWhvbGRlcicpXG4gIGdldCBfaGFzUGxhY2Vob2xkZXJDc3NDbGFzcygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5faGFzUGxhY2Vob2xkZXI7XG4gIH1cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pb25pYy1zZWxlY3RhYmxlLWhhcy1sYWJlbCcpXG4gIGdldCBfaGFzSW9uTGFiZWxDc3NDbGFzcygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5faGFzSW9uTGFiZWw7XG4gIH1cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pb25pYy1zZWxlY3RhYmxlLWxhYmVsLWRlZmF1bHQnKVxuICBnZXQgX2hhc0RlZmF1bHRJb25MYWJlbENzc0NsYXNzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9pb25MYWJlbFBvc2l0aW9uID09PSAnZGVmYXVsdCc7XG4gIH1cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pb25pYy1zZWxlY3RhYmxlLWxhYmVsLWZpeGVkJylcbiAgZ2V0IF9oYXNGaXhlZElvbkxhYmVsQ3NzQ2xhc3MoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2lvbkxhYmVsUG9zaXRpb24gPT09ICdmaXhlZCc7XG4gIH1cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pb25pYy1zZWxlY3RhYmxlLWxhYmVsLXN0YWNrZWQnKVxuICBnZXQgX2hhc1N0YWNrZWRJb25MYWJlbENzc0NsYXNzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9pb25MYWJlbFBvc2l0aW9uID09PSAnc3RhY2tlZCc7XG4gIH1cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pb25pYy1zZWxlY3RhYmxlLWxhYmVsLWZsb2F0aW5nJylcbiAgZ2V0IF9oYXNGbG9hdGluZ0lvbkxhYmVsQ3NzQ2xhc3MoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2lvbkxhYmVsUG9zaXRpb24gPT09ICdmbG9hdGluZyc7XG4gIH1cbiAgcHJpdmF0ZSBfaXNPblNlYXJjaEVuYWJsZWQgPSB0cnVlO1xuICBwcml2YXRlIF9pc0VuYWJsZWQgPSB0cnVlO1xuICBwcml2YXRlIF9zaG91bGRCYWNrZHJvcENsb3NlID0gdHJ1ZTtcbiAgcHJpdmF0ZSBfaXNPcGVuZWQgPSBmYWxzZTtcbiAgcHJpdmF0ZSBfdmFsdWU6IGFueSA9IG51bGw7XG4gIHByaXZhdGUgX21vZGFsOiBIVE1MSW9uTW9kYWxFbGVtZW50O1xuICBwcml2YXRlIF9pdGVtc0RpZmZlcjogSXRlcmFibGVEaWZmZXI8YW55PjtcbiAgcHJpdmF0ZSBfaGFzT2JqZWN0czogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfY2FuQ2xlYXIgPSBmYWxzZTtcbiAgcHJpdmF0ZSBfaGFzQ29uZmlybUJ1dHRvbiA9IGZhbHNlO1xuICBwcml2YXRlIF9pc011bHRpcGxlID0gZmFsc2U7XG4gIHByaXZhdGUgX2NhbkFkZEl0ZW0gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfYWRkSXRlbU9ic2VydmFibGU6IFN1YnNjcmlwdGlvbjtcbiAgcHJpdmF0ZSBfZGVsZXRlSXRlbU9ic2VydmFibGU6IFN1YnNjcmlwdGlvbjtcbiAgcHJpdmF0ZSBvbkl0ZW1zQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgcHJpdmF0ZSBfaW9uSXRlbUVsZW1lbnQ6IGFueTtcbiAgcHJpdmF0ZSBfaW9uTGFiZWxFbGVtZW50OiBhbnk7XG4gIHByaXZhdGUgX2hhc0lvbkxhYmVsID0gZmFsc2U7XG4gIHByaXZhdGUgX2lvbkxhYmVsUG9zaXRpb246ICdmaXhlZCcgfCAnc3RhY2tlZCcgfCAnZmxvYXRpbmcnIHwgJ2RlZmF1bHQnIHwgbnVsbCA9IG51bGw7XG4gIHByaXZhdGUgX2xhYmVsOiBzdHJpbmcgPSBudWxsO1xuICBwcml2YXRlIGdldCBfaGFzSW5maW5pdGVTY3JvbGwoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuaXNFbmFibGVkICYmIHRoaXMuX21vZGFsQ29tcG9uZW50ICYmXG4gICAgICB0aGlzLl9tb2RhbENvbXBvbmVudC5faW5maW5pdGVTY3JvbGwgPyB0cnVlIDogZmFsc2U7XG4gIH1cbiAgZ2V0IF9zaG91bGRTdG9yZUl0ZW1WYWx1ZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zaG91bGRTdG9yZUl0ZW1WYWx1ZSAmJiB0aGlzLl9oYXNPYmplY3RzO1xuICB9XG4gIF92YWx1ZUl0ZW1zOiBhbnlbXSA9IFtdO1xuICBfc2VhcmNoVGV4dCA9ICcnO1xuICBfaGFzU2VhcmNoVGV4dCA9IGZhbHNlO1xuICBfZ3JvdXBzOiBhbnlbXSA9IFtdO1xuICBfaXRlbXNUb0NvbmZpcm06IGFueVtdID0gW107XG4gIF9zZWxlY3RlZEl0ZW1zOiBhbnlbXSA9IFtdO1xuICBfbW9kYWxDb21wb25lbnQ6IElvbmljU2VsZWN0YWJsZU1vZGFsQ29tcG9uZW50O1xuICBfZmlsdGVyZWRHcm91cHM6IGFueVtdID0gW107XG4gIF9oYXNHcm91cHM6IGJvb2xlYW47XG4gIF9pc1NlYXJjaGluZzogYm9vbGVhbjtcbiAgX2hhc1BsYWNlaG9sZGVyOiBib29sZWFuO1xuICBfaXNBZGRJdGVtVGVtcGxhdGVWaXNpYmxlID0gZmFsc2U7XG4gIF9pc0Zvb3RlclZpc2libGUgPSB0cnVlO1xuICBfaXRlbVRvQWRkOiBhbnkgPSBudWxsO1xuICBfZm9vdGVyQnV0dG9uc0NvdW50ID0gMDtcbiAgX2hhc0ZpbHRlcmVkSXRlbXMgPSBmYWxzZTtcblxuICAvKipcbiAgICogVGV4dCBvZiBbSW9uaWMgTGFiZWxdKGh0dHBzOi8vaW9uaWNmcmFtZXdvcmsuY29tL2RvY3MvYXBpL2xhYmVsKS5cbiAgICogU2VlIG1vcmUgb24gW0dpdEh1Yl0oaHR0cHM6Ly9naXRodWIuY29tL2Vha29yaWFraW4vaW9uaWMtc2VsZWN0YWJsZS93aWtpL0RvY3VtZW50YXRpb24jbGFiZWwpLlxuICAgKlxuICAgKiBAcmVhZG9ubHlcbiAgICogQGRlZmF1bHQgbnVsbFxuICAgKiBAbWVtYmVyb2YgSW9uaWNTZWxlY3RhYmxlQ29tcG9uZW50XG4gICAqL1xuICBnZXQgbGFiZWwoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fbGFiZWw7XG4gIH1cblxuICAvKipcbiAgICogVGV4dCB0aGF0IHRoZSB1c2VyIGhhcyB0eXBlZCBpbiBTZWFyY2hiYXIuXG4gICAqIFNlZSBtb3JlIG9uIFtHaXRIdWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9lYWtvcmlha2luL2lvbmljLXNlbGVjdGFibGUvd2lraS9Eb2N1bWVudGF0aW9uI3NlYXJjaHRleHQpLlxuICAgKlxuICAgKiBAcmVhZG9ubHlcbiAgICogQGRlZmF1bHQgJydcbiAgICogQG1lbWJlcm9mIElvbmljU2VsZWN0YWJsZUNvbXBvbmVudFxuICAgKi9cbiAgZ2V0IHNlYXJjaFRleHQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fc2VhcmNoVGV4dDtcbiAgfVxuICBzZXQgc2VhcmNoVGV4dChzZWFyY2hUZXh0OiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zZWFyY2hUZXh0ID0gc2VhcmNoVGV4dDtcbiAgICB0aGlzLl9zZXRIYXNTZWFyY2hUZXh0KCk7XG4gIH1cblxuICAvKipcbiAgICogRGV0ZXJtaW5lcyB3aGV0aGVyIHNlYXJjaCBpcyBydW5uaW5nLlxuICAgKiBTZWUgbW9yZSBvbiBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vZWFrb3JpYWtpbi9pb25pYy1zZWxlY3RhYmxlL3dpa2kvRG9jdW1lbnRhdGlvbiNpc3NlYXJjaGluZykuXG4gICAqXG4gICAqIEBkZWZhdWx0IGZhbHNlXG4gICAqIEByZWFkb25seVxuICAgKiBAbWVtYmVyb2YgSW9uaWNTZWxlY3RhYmxlQ29tcG9uZW50XG4gICAqL1xuICBnZXQgaXNTZWFyY2hpbmcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2lzU2VhcmNoaW5nO1xuICB9XG5cbiAgLyoqXG4gICAqIERldGVybWluZXMgd2hldGhlciB1c2VyIGhhcyB0eXBlZCBhbnl0aGluZyBpbiBTZWFyY2hiYXIuXG4gICAqIFNlZSBtb3JlIG9uIFtHaXRIdWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9lYWtvcmlha2luL2lvbmljLXNlbGVjdGFibGUvd2lraS9Eb2N1bWVudGF0aW9uI2hhc3NlYXJjaHRleHQpLlxuICAgKlxuICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgKiBAcmVhZG9ubHlcbiAgICogQG1lbWJlcm9mIElvbmljU2VsZWN0YWJsZUNvbXBvbmVudFxuICAgKi9cbiAgZ2V0IGhhc1NlYXJjaFRleHQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2hhc1NlYXJjaFRleHQ7XG4gIH1cblxuICBnZXQgdmFsdWUoKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gIH1cbiAgc2V0IHZhbHVlKHZhbHVlOiBhbnkpIHtcbiAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuXG4gICAgLy8gU2V0IHZhbHVlIGl0ZW1zLlxuICAgIHRoaXMuX3ZhbHVlSXRlbXMuc3BsaWNlKDAsIHRoaXMuX3ZhbHVlSXRlbXMubGVuZ3RoKTtcblxuICAgIGlmICh0aGlzLmlzTXVsdGlwbGUpIHtcbiAgICAgIGlmICh2YWx1ZSAmJiB2YWx1ZS5sZW5ndGgpIHtcbiAgICAgICAgQXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkodGhpcy5fdmFsdWVJdGVtcywgdmFsdWUpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoIXRoaXMuX2lzTnVsbE9yV2hpdGVTcGFjZSh2YWx1ZSkpIHtcbiAgICAgICAgdGhpcy5fdmFsdWVJdGVtcy5wdXNoKHZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLl9zZXRJb25JdGVtSGFzVmFsdWUoKTtcbiAgICB0aGlzLl9zZXRIYXNQbGFjZWhvbGRlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIEEgbGlzdCBvZiBpdGVtcy5cbiAgICogU2VlIG1vcmUgb24gW0dpdEh1Yl0oaHR0cHM6Ly9naXRodWIuY29tL2Vha29yaWFraW4vaW9uaWMtc2VsZWN0YWJsZS93aWtpL0RvY3VtZW50YXRpb24jaXRlbXMpLlxuICAgKlxuICAgKiBAZGVmYXVsdCBbXVxuICAgKiBAbWVtYmVyb2YgSW9uaWNTZWxlY3RhYmxlQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKVxuICBpdGVtczogYW55W10gPSBbXTtcbiAgQE91dHB1dCgpXG4gIGl0ZW1zQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAvKipcbiAgICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBjb21wb25lbnQgaXMgZW5hYmxlZC5cbiAgICogU2VlIG1vcmUgb24gW0dpdEh1Yl0oaHR0cHM6Ly9naXRodWIuY29tL2Vha29yaWFraW4vaW9uaWMtc2VsZWN0YWJsZS93aWtpL0RvY3VtZW50YXRpb24jaXNlbmFibGVkKS5cbiAgICpcbiAgICogQGRlZmF1bHQgdHJ1ZVxuICAgKiBAbWVtYmVyb2YgSW9uaWNTZWxlY3RhYmxlQ29tcG9uZW50XG4gICAqL1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmlvbmljLXNlbGVjdGFibGUtaXMtZW5hYmxlZCcpXG4gIEBJbnB1dCgnaXNFbmFibGVkJylcbiAgZ2V0IGlzRW5hYmxlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5faXNFbmFibGVkO1xuICB9XG4gIHNldCBpc0VuYWJsZWQoaXNFbmFibGVkOiBib29sZWFuKSB7XG4gICAgdGhpcy5faXNFbmFibGVkID0gISFpc0VuYWJsZWQ7XG4gICAgdGhpcy5lbmFibGVJb25JdGVtKHRoaXMuX2lzRW5hYmxlZCk7XG4gIH1cblxuICAvKipcbiAgICogRGV0ZXJtaW5lcyB3aGV0aGVyIE1vZGFsIHNob3VsZCBiZSBjbG9zZWQgd2hlbiBiYWNrZHJvcCBpcyBjbGlja2VkLlxuICAgKiBTZWUgbW9yZSBvbiBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vZWFrb3JpYWtpbi9pb25pYy1zZWxlY3RhYmxlL3dpa2kvRG9jdW1lbnRhdGlvbiNzaG91bGRiYWNrZHJvcGNsb3NlKS5cbiAgICpcbiAgICogQGRlZmF1bHQgdHJ1ZVxuICAgKiBAbWVtYmVyb2YgSW9uaWNTZWxlY3RhYmxlQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoJ3Nob3VsZEJhY2tkcm9wQ2xvc2UnKVxuICBnZXQgc2hvdWxkQmFja2Ryb3BDbG9zZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fc2hvdWxkQmFja2Ryb3BDbG9zZTtcbiAgfVxuICBzZXQgc2hvdWxkQmFja2Ryb3BDbG9zZShzaG91bGRCYWNrZHJvcENsb3NlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fc2hvdWxkQmFja2Ryb3BDbG9zZSA9ICEhc2hvdWxkQmFja2Ryb3BDbG9zZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNb2RhbCBDU1MgY2xhc3MuXG4gICAqIFNlZSBtb3JlIG9uIFtHaXRIdWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9lYWtvcmlha2luL2lvbmljLXNlbGVjdGFibGUvd2lraS9Eb2N1bWVudGF0aW9uI21vZGFsY3NzY2xhc3MpLlxuICAgKlxuICAgKiBAZGVmYXVsdCBudWxsXG4gICAqIEBtZW1iZXJvZiBJb25pY1NlbGVjdGFibGVDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpXG4gIG1vZGFsQ3NzQ2xhc3M6IHN0cmluZyA9IG51bGw7XG5cbiAgLyoqXG4gICAqIE1vZGFsIGVudGVyIGFuaW1hdGlvbi5cbiAgICogU2VlIG1vcmUgb24gW0dpdEh1Yl0oaHR0cHM6Ly9naXRodWIuY29tL2Vha29yaWFraW4vaW9uaWMtc2VsZWN0YWJsZS93aWtpL0RvY3VtZW50YXRpb24jbW9kYWxlbnRlcmFuaW1hdGlvbikuXG4gICAqXG4gICAqIEBkZWZhdWx0IG51bGxcbiAgICogQG1lbWJlcm9mIElvbmljU2VsZWN0YWJsZUNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KClcbiAgbW9kYWxFbnRlckFuaW1hdGlvbjogQW5pbWF0aW9uQnVpbGRlciA9IG51bGw7XG5cbiAgLyoqXG4gICAqIE1vZGFsIGxlYXZlIGFuaW1hdGlvbi5cbiAgICogU2VlIG1vcmUgb24gW0dpdEh1Yl0oaHR0cHM6Ly9naXRodWIuY29tL2Vha29yaWFraW4vaW9uaWMtc2VsZWN0YWJsZS93aWtpL0RvY3VtZW50YXRpb24jbW9kYWxsZWF2ZWFuaW1hdGlvbikuXG4gICAqXG4gICAqIEBkZWZhdWx0IG51bGxcbiAgICogQG1lbWJlcm9mIElvbmljU2VsZWN0YWJsZUNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KClcbiAgbW9kYWxMZWF2ZUFuaW1hdGlvbjogQW5pbWF0aW9uQnVpbGRlciA9IG51bGw7XG5cbiAgLyoqXG4gICAqIERldGVybWluZXMgd2hldGhlciBNb2RhbCBpcyBvcGVuZWQuXG4gICAqIFNlZSBtb3JlIG9uIFtHaXRIdWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9lYWtvcmlha2luL2lvbmljLXNlbGVjdGFibGUvd2lraS9Eb2N1bWVudGF0aW9uI2lzb3BlbmVkKS5cbiAgICpcbiAgICogQGRlZmF1bHQgZmFsc2VcbiAgICogQHJlYWRvbmx5XG4gICAqIEBtZW1iZXJvZiBJb25pY1NlbGVjdGFibGVDb21wb25lbnRcbiAgICovXG4gIGdldCBpc09wZW5lZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5faXNPcGVuZWQ7XG4gIH1cblxuICAvKipcbiAgICogRGV0ZXJtaW5lcyB3aGV0aGVyIENvbmZpcm0gYnV0dG9uIGlzIGVuYWJsZWQuXG4gICAqIFNlZSBtb3JlIG9uIFtHaXRIdWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9lYWtvcmlha2luL2lvbmljLXNlbGVjdGFibGUvd2lraS9Eb2N1bWVudGF0aW9uI2lzY29uZmlybWJ1dHRvbmVuYWJsZWQpLlxuICAgKlxuICAgKiBAZGVmYXVsdCB0cnVlXG4gICAqIEBtZW1iZXJvZiBJb25pY1NlbGVjdGFibGVDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpXG4gIGlzQ29uZmlybUJ1dHRvbkVuYWJsZWQgPSB0cnVlO1xuXG4gIC8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIENvbmZpcm0gYnV0dG9uIGlzIHZpc2libGUgZm9yIHNpbmdsZSBzZWxlY3Rpb24uXG4gKiBCeSBkZWZhdWx0IENvbmZpcm0gYnV0dG9uIGlzIHZpc2libGUgb25seSBmb3IgbXVsdGlwbGUgc2VsZWN0aW9uLlxuICogKipOb3RlKio6IEl0IGlzIGFsd2F5cyB0cnVlIGZvciBtdWx0aXBsZSBzZWxlY3Rpb24gYW5kIGNhbm5vdCBiZSBjaGFuZ2VkLlxuICogU2VlIG1vcmUgb24gW0dpdEh1Yl0oaHR0cHM6Ly9naXRodWIuY29tL2Vha29yaWFraW4vaW9uaWMtc2VsZWN0YWJsZS93aWtpL0RvY3VtZW50YXRpb24jaGFzY29uZmlybWJ1dHRvbikuXG4gKlxuICogQGRlZmF1bHQgdHJ1ZVxuICogQG1lbWJlcm9mIElvbmljU2VsZWN0YWJsZUNvbXBvbmVudFxuICovXG4gIEBJbnB1dCgnaGFzQ29uZmlybUJ1dHRvbicpXG4gIGdldCBoYXNDb25maXJtQnV0dG9uKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9oYXNDb25maXJtQnV0dG9uO1xuICB9XG4gIHNldCBoYXNDb25maXJtQnV0dG9uKGhhc0NvbmZpcm1CdXR0b246IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9oYXNDb25maXJtQnV0dG9uID0gISFoYXNDb25maXJtQnV0dG9uO1xuICAgIHRoaXMuX2NvdW50Rm9vdGVyQnV0dG9ucygpO1xuICB9XG5cbiAgLyoqXG4gICAqIEl0ZW0gcHJvcGVydHkgdG8gdXNlIGFzIGEgdW5pcXVlIGlkZW50aWZpZXIsIGUuZywgYCdpZCdgLlxuICAgKiAqKk5vdGUqKjogYGl0ZW1zYCBzaG91bGQgYmUgYW4gb2JqZWN0IGFycmF5LlxuICAgKiBTZWUgbW9yZSBvbiBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vZWFrb3JpYWtpbi9pb25pYy1zZWxlY3RhYmxlL3dpa2kvRG9jdW1lbnRhdGlvbiNpdGVtdmFsdWVmaWVsZCkuXG4gICAqXG4gICAqIEBkZWZhdWx0IG51bGxcbiAgICogQG1lbWJlcm9mIElvbmljU2VsZWN0YWJsZUNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KClcbiAgaXRlbVZhbHVlRmllbGQ6IHN0cmluZyA9IG51bGw7XG5cbiAgLyoqXG4gICAqIEl0ZW0gcHJvcGVydHkgdG8gZGlzcGxheSwgZS5nLCBgJ25hbWUnYC5cbiAgICogKipOb3RlKio6IGBpdGVtc2Agc2hvdWxkIGJlIGFuIG9iamVjdCBhcnJheS5cbiAgICogU2VlIG1vcmUgb24gW0dpdEh1Yl0oaHR0cHM6Ly9naXRodWIuY29tL2Vha29yaWFraW4vaW9uaWMtc2VsZWN0YWJsZS93aWtpL0RvY3VtZW50YXRpb24jaXRlbXRleHRmaWVsZCkuXG4gICAqXG4gICAqIEBkZWZhdWx0IGZhbHNlXG4gICAqIEBtZW1iZXJvZiBJb25pY1NlbGVjdGFibGVDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpXG4gIGl0ZW1UZXh0RmllbGQ6IHN0cmluZyA9IG51bGw7XG5cbiAgLyoqXG4gICAqXG4gICAqIEdyb3VwIHByb3BlcnR5IHRvIHVzZSBhcyBhIHVuaXF1ZSBpZGVudGlmaWVyIHRvIGdyb3VwIGl0ZW1zLCBlLmcuIGAnY291bnRyeS5pZCdgLlxuICAgKiAqKk5vdGUqKjogYGl0ZW1zYCBzaG91bGQgYmUgYW4gb2JqZWN0IGFycmF5LlxuICAgKiBTZWUgbW9yZSBvbiBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vZWFrb3JpYWtpbi9pb25pYy1zZWxlY3RhYmxlL3dpa2kvRG9jdW1lbnRhdGlvbiNncm91cHZhbHVlZmllbGQpLlxuICAgKlxuICAgKiBAZGVmYXVsdCBudWxsXG4gICAqIEBtZW1iZXJvZiBJb25pY1NlbGVjdGFibGVDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpXG4gIGdyb3VwVmFsdWVGaWVsZDogc3RyaW5nID0gbnVsbDtcblxuICAvKipcbiogR3JvdXAgcHJvcGVydHkgdG8gZGlzcGxheSwgZS5nLiBgJ2NvdW50cnkubmFtZSdgLlxuKiAqKk5vdGUqKjogYGl0ZW1zYCBzaG91bGQgYmUgYW4gb2JqZWN0IGFycmF5LlxuKiBTZWUgbW9yZSBvbiBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vZWFrb3JpYWtpbi9pb25pYy1zZWxlY3RhYmxlL3dpa2kvRG9jdW1lbnRhdGlvbiNncm91cHRleHRmaWVsZCkuXG4qXG4qIEBkZWZhdWx0IG51bGxcbiogQG1lbWJlcm9mIElvbmljU2VsZWN0YWJsZUNvbXBvbmVudFxuKi9cbiAgQElucHV0KClcbiAgZ3JvdXBUZXh0RmllbGQ6IHN0cmluZyA9IG51bGw7XG5cbiAgLyoqXG4gICAqIERldGVybWluZXMgd2hldGhlciB0byBzaG93IFNlYXJjaGJhci5cbiAgICogU2VlIG1vcmUgb24gW0dpdEh1Yl0oaHR0cHM6Ly9naXRodWIuY29tL2Vha29yaWFraW4vaW9uaWMtc2VsZWN0YWJsZS93aWtpL0RvY3VtZW50YXRpb24jY2Fuc2VhcmNoKS5cbiAgICpcbiAgICogQGRlZmF1bHQgZmFsc2VcbiAgICogQG1lbWJlcm9mIElvbmljU2VsZWN0YWJsZUNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KClcbiAgY2FuU2VhcmNoID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIERldGVybWluZXMgd2hldGhlciBgb25TZWFyY2hgIGV2ZW50IGlzIGVuYWJsZWQuXG4gICAqIFNlZSBtb3JlIG9uIFtHaXRIdWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9lYWtvcmlha2luL2lvbmljLXNlbGVjdGFibGUvd2lraS9Eb2N1bWVudGF0aW9uI2lzb25zZWFyY2hlbmFibGVkKS5cbiAgICpcbiAgICogQGRlZmF1bHQgdHJ1ZVxuICAgKiBAbWVtYmVyb2YgSW9uaWNTZWxlY3RhYmxlQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoJ2lzT25TZWFyY2hFbmFibGVkJylcbiAgZ2V0IGlzT25TZWFyY2hFbmFibGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9pc09uU2VhcmNoRW5hYmxlZDtcbiAgfVxuICBzZXQgaXNPblNlYXJjaEVuYWJsZWQoaXNPblNlYXJjaEVuYWJsZWQ6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9pc09uU2VhcmNoRW5hYmxlZCA9ICEhaXNPblNlYXJjaEVuYWJsZWQ7XG4gIH1cblxuICAvKipcbiAgICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRvIHNob3cgQ2xlYXIgYnV0dG9uLlxuICAgKiBTZWUgbW9yZSBvbiBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vZWFrb3JpYWtpbi9pb25pYy1zZWxlY3RhYmxlL3dpa2kvRG9jdW1lbnRhdGlvbiNjYW5jbGVhcikuXG4gICAqXG4gICAqIEBkZWZhdWx0IGZhbHNlXG4gICAqIEBtZW1iZXJvZiBJb25pY1NlbGVjdGFibGVDb21wb25lbnRcbiAgICovXG4gIEBIb3N0QmluZGluZygnY2xhc3MuaW9uaWMtc2VsZWN0YWJsZS1jYW4tY2xlYXInKVxuICBASW5wdXQoJ2NhbkNsZWFyJylcbiAgZ2V0IGNhbkNsZWFyKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9jYW5DbGVhcjtcbiAgfVxuICBzZXQgY2FuQ2xlYXIoY2FuQ2xlYXI6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9jYW5DbGVhciA9ICEhY2FuQ2xlYXI7XG4gICAgdGhpcy5fY291bnRGb290ZXJCdXR0b25zKCk7XG4gIH1cblxuICAvKipcbiAgICogRGV0ZXJtaW5lcyB3aGV0aGVyIElvbmljIFtJbmZpbml0ZVNjcm9sbF0oaHR0cHM6Ly9pb25pY2ZyYW1ld29yay5jb20vZG9jcy9hcGkvY29tcG9uZW50cy9pbmZpbml0ZS1zY3JvbGwvSW5maW5pdGVTY3JvbGwvKSBpcyBlbmFibGVkLlxuICAgKiAqKk5vdGUqKjogSW5maW5pdGUgc2Nyb2xsIGNhbm5vdCBiZSB1c2VkIHRvZ2V0aGVyIHdpdGggdmlydHVhbCBzY3JvbGwuXG4gICAqIFNlZSBtb3JlIG9uIFtHaXRIdWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9lYWtvcmlha2luL2lvbmljLXNlbGVjdGFibGUvd2lraS9Eb2N1bWVudGF0aW9uI2hhc2luZmluaXRlc2Nyb2xsKS5cbiAgICpcbiAgICogQGRlZmF1bHQgZmFsc2VcbiAgICogQG1lbWJlcm9mIElvbmljU2VsZWN0YWJsZUNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KClcbiAgaGFzSW5maW5pdGVTY3JvbGwgPSBmYWxzZTtcblxuICAvKipcbiAgICogRGV0ZXJtaW5lcyB3aGV0aGVyIElvbmljIFtWaXJ0dWFsU2Nyb2xsXShodHRwczovL2lvbmljZnJhbWV3b3JrLmNvbS9kb2NzL2FwaS9jb21wb25lbnRzL3ZpcnR1YWwtc2Nyb2xsL1ZpcnR1YWxTY3JvbGwvKSBpcyBlbmFibGVkLlxuICAgKiAqKk5vdGUqKjogVmlydHVhbCBzY3JvbGwgY2Fubm90IGJlIHVzZWQgdG9nZXRoZXIgd2l0aCBpbmZpbml0ZSBzY3JvbGwuXG4gICAqIFNlZSBtb3JlIG9uIFtHaXRIdWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9lYWtvcmlha2luL2lvbmljLXNlbGVjdGFibGUvd2lraS9Eb2N1bWVudGF0aW9uI2hhc3ZpcnR1YWxzY3JvbGwpLlxuICAgKlxuICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgKiBAbWVtYmVyb2YgSW9uaWNTZWxlY3RhYmxlQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKVxuICBoYXNWaXJ0dWFsU2Nyb2xsID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIFNlZSBJb25pYyBWaXJ0dWFsU2Nyb2xsIFthcHByb3hJdGVtSGVpZ2h0XShodHRwczovL2lvbmljZnJhbWV3b3JrLmNvbS9kb2NzL2FwaS9jb21wb25lbnRzL3ZpcnR1YWwtc2Nyb2xsL1ZpcnR1YWxTY3JvbGwvKS5cbiAgICogU2VlIG1vcmUgb24gW0dpdEh1Yl0oaHR0cHM6Ly9naXRodWIuY29tL2Vha29yaWFraW4vaW9uaWMtc2VsZWN0YWJsZS93aWtpL0RvY3VtZW50YXRpb24jdmlydHVhbHNjcm9sbGFwcHJveGl0ZW1oZWlnaHQpLlxuICAgKlxuICAgKiBAZGVmYXVsdCAnNDBweCdcbiAgICogQG1lbWJlcm9mIElvbmljU2VsZWN0YWJsZUNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KClcbiAgdmlydHVhbFNjcm9sbEFwcHJveEl0ZW1IZWlnaHQgPSAnNDBweCc7XG5cbiAgLyoqXG4gICAqIEEgcGxhY2Vob2xkZXIgZm9yIFNlYXJjaGJhci5cbiAgICogU2VlIG1vcmUgb24gW0dpdEh1Yl0oaHR0cHM6Ly9naXRodWIuY29tL2Vha29yaWFraW4vaW9uaWMtc2VsZWN0YWJsZS93aWtpL0RvY3VtZW50YXRpb24jc2VhcmNocGxhY2Vob2xkZXIpLlxuICAgKlxuICAgKiBAZGVmYXVsdCAnU2VhcmNoJ1xuICAgKiBAbWVtYmVyb2YgSW9uaWNTZWxlY3RhYmxlQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKVxuICBzZWFyY2hQbGFjZWhvbGRlciA9ICdTZWFyY2gnO1xuXG4gIC8qKlxuICAgKiBBIHBsYWNlaG9sZGVyLlxuICAgKiBTZWUgbW9yZSBvbiBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vZWFrb3JpYWtpbi9pb25pYy1zZWxlY3RhYmxlL3dpa2kvRG9jdW1lbnRhdGlvbiNwbGFjZWhvbGRlcikuXG4gICAqXG4gICAqIEBkZWZhdWx0IG51bGxcbiAgICogQG1lbWJlcm9mIElvbmljU2VsZWN0YWJsZUNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KClcbiAgcGxhY2Vob2xkZXI6IHN0cmluZyA9IG51bGw7XG5cbiAgLyoqXG4gICAqIERldGVybWluZXMgd2hldGhlciBtdWx0aXBsZSBpdGVtcyBjYW4gYmUgc2VsZWN0ZWQuXG4gICAqIFNlZSBtb3JlIG9uIFtHaXRIdWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9lYWtvcmlha2luL2lvbmljLXNlbGVjdGFibGUvd2lraS9Eb2N1bWVudGF0aW9uI2lzbXVsdGlwbGUpLlxuICAgKlxuICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgKiBAbWVtYmVyb2YgSW9uaWNTZWxlY3RhYmxlQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoJ2lzTXVsdGlwbGUnKVxuICBnZXQgaXNNdWx0aXBsZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5faXNNdWx0aXBsZTtcbiAgfVxuICBzZXQgaXNNdWx0aXBsZShpc011bHRpcGxlOiBib29sZWFuKSB7XG4gICAgdGhpcy5faXNNdWx0aXBsZSA9ICEhaXNNdWx0aXBsZTtcbiAgICB0aGlzLl9jb3VudEZvb3RlckJ1dHRvbnMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUZXh0IHRvIGRpc3BsYXkgd2hlbiBubyBpdGVtcyBoYXZlIGJlZW4gZm91bmQgZHVyaW5nIHNlYXJjaC5cbiAgICogU2VlIG1vcmUgb24gW0dpdEh1Yl0oaHR0cHM6Ly9naXRodWIuY29tL2Vha29yaWFraW4vaW9uaWMtc2VsZWN0YWJsZS93aWtpL0RvY3VtZW50YXRpb24jc2VhcmNoZmFpbHRleHQpLlxuICAgKlxuICAgKiBAZGVmYXVsdCAnTm8gaXRlbXMgZm91bmQuJ1xuICAgKiBAbWVtYmVyb2YgSW9uaWNTZWxlY3RhYmxlQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKVxuICBzZWFyY2hGYWlsVGV4dCA9ICdObyBpdGVtcyBmb3VuZC4nO1xuXG4gIC8qKlxuICAgKiBDbGVhciBidXR0b24gdGV4dC5cbiAgICogU2VlIG1vcmUgb24gW0dpdEh1Yl0oaHR0cHM6Ly9naXRodWIuY29tL2Vha29yaWFraW4vaW9uaWMtc2VsZWN0YWJsZS93aWtpL0RvY3VtZW50YXRpb24jY2xlYXJidXR0b250ZXh0KS5cbiAgICpcbiAgICogQGRlZmF1bHQgJ0NsZWFyJ1xuICAgKiBAbWVtYmVyb2YgSW9uaWNTZWxlY3RhYmxlQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKVxuICBjbGVhckJ1dHRvblRleHQgPSAnQ2xlYXInO1xuXG4gIC8qKlxuICAgKiBBZGQgYnV0dG9uIHRleHQuXG4gICAqIFNlZSBtb3JlIG9uIFtHaXRIdWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9lYWtvcmlha2luL2lvbmljLXNlbGVjdGFibGUvd2lraS9Eb2N1bWVudGF0aW9uI2FkZGJ1dHRvbnRleHQpLlxuICAgKlxuICAgKiBAZGVmYXVsdCAnQWRkJ1xuICAgKiBAbWVtYmVyb2YgSW9uaWNTZWxlY3RhYmxlQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKVxuICBhZGRCdXR0b25UZXh0ID0gJ0FkZCc7XG5cbiAgLyoqXG4gICAqIENvbmZpcm0gYnV0dG9uIHRleHQuXG4gICAqIFNlZSBtb3JlIG9uIFtHaXRIdWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9lYWtvcmlha2luL2lvbmljLXNlbGVjdGFibGUvd2lraS9Eb2N1bWVudGF0aW9uI2NvbmZpcm1idXR0b250ZXh0KS5cbiAgICpcbiAgICogQGRlZmF1bHQgJ09LJ1xuICAgKiBAbWVtYmVyb2YgSW9uaWNTZWxlY3RhYmxlQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKVxuICBjb25maXJtQnV0dG9uVGV4dCA9ICdPSyc7XG5cbiAgLyoqXG4gICAqIENsb3NlIGJ1dHRvbiB0ZXh0LlxuICAgKiBUaGUgZmllbGQgaXMgb25seSBhcHBsaWNhYmxlIHRvICoqaU9TKiogcGxhdGZvcm0sIG9uICoqQW5kcm9pZCoqIG9ubHkgQ3Jvc3MgaWNvbiBpcyBkaXNwbGF5ZWQuXG4gICAqIFNlZSBtb3JlIG9uIFtHaXRIdWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9lYWtvcmlha2luL2lvbmljLXNlbGVjdGFibGUvd2lraS9Eb2N1bWVudGF0aW9uI2Nsb3NlYnV0dG9udGV4dCkuXG4gICAqXG4gICAqIEBkZWZhdWx0ICdDYW5jZWwnXG4gICAqIEBtZW1iZXJvZiBJb25pY1NlbGVjdGFibGVDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpXG4gIGNsb3NlQnV0dG9uVGV4dCA9ICdDYW5jZWwnO1xuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmVzIHdoZXRoZXIgU2VhcmNoYmFyIHNob3VsZCByZWNlaXZlIGZvY3VzIHdoZW4gTW9kYWwgaXMgb3BlbmVkLlxuICAgKiBTZWUgbW9yZSBvbiBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vZWFrb3JpYWtpbi9pb25pYy1zZWxlY3RhYmxlL3dpa2kvRG9jdW1lbnRhdGlvbiNzaG91bGRmb2N1c3NlYXJjaGJhcikuXG4gICAqXG4gICAqIEBkZWZhdWx0IGZhbHNlXG4gICAqIEBtZW1iZXJvZiBJb25pY1NlbGVjdGFibGVDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpXG4gIHNob3VsZEZvY3VzU2VhcmNoYmFyID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIEhlYWRlciBjb2xvci4gW0lvbmljIGNvbG9yc10oaHR0cHM6Ly9pb25pY2ZyYW1ld29yay5jb20vZG9jcy90aGVtaW5nL2FkdmFuY2VkI2NvbG9ycykgYXJlIHN1cHBvcnRlZC5cbiAgICogU2VlIG1vcmUgb24gW0dpdEh1Yl0oaHR0cHM6Ly9naXRodWIuY29tL2Vha29yaWFraW4vaW9uaWMtc2VsZWN0YWJsZS93aWtpL0RvY3VtZW50YXRpb24jaGVhZGVyY29sb3IpLlxuICAgKlxuICAgKiBAZGVmYXVsdCBudWxsXG4gICAqIEBtZW1iZXJvZiBJb25pY1NlbGVjdGFibGVDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpXG4gIGhlYWRlckNvbG9yOiBzdHJpbmcgPSBudWxsO1xuXG4gIC8qKlxuICAgKiBHcm91cCBjb2xvci4gW0lvbmljIGNvbG9yc10oaHR0cHM6Ly9pb25pY2ZyYW1ld29yay5jb20vZG9jcy90aGVtaW5nL2FkdmFuY2VkI2NvbG9ycykgYXJlIHN1cHBvcnRlZC5cbiAgICogU2VlIG1vcmUgb24gW0dpdEh1Yl0oaHR0cHM6Ly9naXRodWIuY29tL2Vha29yaWFraW4vaW9uaWMtc2VsZWN0YWJsZS93aWtpL0RvY3VtZW50YXRpb24jZ3JvdXBjb2xvcikuXG4gICAqXG4gICAqIEBkZWZhdWx0IG51bGxcbiAgICogQG1lbWJlcm9mIElvbmljU2VsZWN0YWJsZUNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KClcbiAgZ3JvdXBDb2xvcjogc3RyaW5nID0gbnVsbDtcblxuICAvKipcbiAgICogQ2xvc2UgYnV0dG9uIHNsb3QuIFtJb25pYyBzbG90c10oaHR0cHM6Ly9pb25pY2ZyYW1ld29yay5jb20vZG9jcy9hcGkvYnV0dG9ucykgYXJlIHN1cHBvcnRlZC5cbiAgICogU2VlIG1vcmUgb24gW0dpdEh1Yl0oaHR0cHM6Ly9naXRodWIuY29tL2Vha29yaWFraW4vaW9uaWMtc2VsZWN0YWJsZS93aWtpL0RvY3VtZW50YXRpb24jY2xvc2VidXR0b25zbG90KS5cbiAgICpcbiAgICogQGRlZmF1bHQgJ3N0YXJ0J1xuICAgKiBAbWVtYmVyb2YgSW9uaWNTZWxlY3RhYmxlQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKVxuICBjbG9zZUJ1dHRvblNsb3QgPSAnc3RhcnQnO1xuXG4gIC8qKlxuICAgKiBJdGVtIGljb24gc2xvdC4gW0lvbmljIHNsb3RzXShodHRwczovL2lvbmljZnJhbWV3b3JrLmNvbS9kb2NzL2FwaS9pdGVtKSBhcmUgc3VwcG9ydGVkLlxuICAgKiBTZWUgbW9yZSBvbiBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vZWFrb3JpYWtpbi9pb25pYy1zZWxlY3RhYmxlL3dpa2kvRG9jdW1lbnRhdGlvbiNpdGVtaWNvbnNsb3QpLlxuICAgKlxuICAgKiBAZGVmYXVsdCAnc3RhcnQnXG4gICAqIEBtZW1iZXJvZiBJb25pY1NlbGVjdGFibGVDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpXG4gIGl0ZW1JY29uU2xvdCA9ICdzdGFydCc7XG5cbiAgLyoqXG4gICAqIEZpcmVzIHdoZW4gaXRlbS9zIGhhcyBiZWVuIHNlbGVjdGVkIGFuZCBNb2RhbCBjbG9zZWQuXG4gICAqIFNlZSBtb3JlIG9uIFtHaXRIdWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9lYWtvcmlha2luL2lvbmljLXNlbGVjdGFibGUvd2lraS9Eb2N1bWVudGF0aW9uI29uY2hhbmdlKS5cbiAgICpcbiAgICogQG1lbWJlcm9mIElvbmljU2VsZWN0YWJsZUNvbXBvbmVudFxuICAgKi9cbiAgQE91dHB1dCgpXG4gIG9uQ2hhbmdlOiBFdmVudEVtaXR0ZXI8eyBjb21wb25lbnQ6IElvbmljU2VsZWN0YWJsZUNvbXBvbmVudCwgdmFsdWU6IGFueSB9PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAvKipcbiAgICogRmlyZXMgd2hlbiB0aGUgdXNlciBpcyB0eXBpbmcgaW4gU2VhcmNoYmFyLlxuICAgKiAqKk5vdGUqKjogYGNhblNlYXJjaGAgYW5kIGBpc09uU2VhcmNoRW5hYmxlZGAgaGFzIHRvIGJlIGVuYWJsZWQuXG4gICAqIFNlZSBtb3JlIG9uIFtHaXRIdWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9lYWtvcmlha2luL2lvbmljLXNlbGVjdGFibGUvd2lraS9Eb2N1bWVudGF0aW9uI29uc2VhcmNoKS5cbiAgICpcbiAgICogQG1lbWJlcm9mIElvbmljU2VsZWN0YWJsZUNvbXBvbmVudFxuICAgKi9cbiAgQE91dHB1dCgpXG4gIG9uU2VhcmNoOiBFdmVudEVtaXR0ZXI8eyBjb21wb25lbnQ6IElvbmljU2VsZWN0YWJsZUNvbXBvbmVudCwgdGV4dDogc3RyaW5nIH0+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIC8qKlxuICAgKiBGaXJlcyB3aGVuIG5vIGl0ZW1zIGhhdmUgYmVlbiBmb3VuZC5cbiAgICogU2VlIG1vcmUgb24gW0dpdEh1Yl0oaHR0cHM6Ly9naXRodWIuY29tL2Vha29yaWFraW4vaW9uaWMtc2VsZWN0YWJsZS93aWtpL0RvY3VtZW50YXRpb24jb25zZWFyY2hmYWlsKS5cbiAgICpcbiAgICogQG1lbWJlcm9mIElvbmljU2VsZWN0YWJsZUNvbXBvbmVudFxuICAgKi9cbiAgQE91dHB1dCgpXG4gIG9uU2VhcmNoRmFpbDogRXZlbnRFbWl0dGVyPHsgY29tcG9uZW50OiBJb25pY1NlbGVjdGFibGVDb21wb25lbnQsIHRleHQ6IHN0cmluZyB9PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAvKipcbiAgICogRmlyZXMgd2hlbiBzb21lIGl0ZW1zIGhhdmUgYmVlbiBmb3VuZC5cbiAgICogU2VlIG1vcmUgb24gW0dpdEh1Yl0oaHR0cHM6Ly9naXRodWIuY29tL2Vha29yaWFraW4vaW9uaWMtc2VsZWN0YWJsZS93aWtpL0RvY3VtZW50YXRpb24jb25zZWFyY2hzdWNjZXNzKS5cbiAgICpcbiAgICogQG1lbWJlcm9mIElvbmljU2VsZWN0YWJsZUNvbXBvbmVudFxuICAgKi9cbiAgQE91dHB1dCgpXG4gIG9uU2VhcmNoU3VjY2VzczogRXZlbnRFbWl0dGVyPHsgY29tcG9uZW50OiBJb25pY1NlbGVjdGFibGVDb21wb25lbnQsIHRleHQ6IHN0cmluZyB9PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAvKipcbiAgICogRmlyZXMgd2hlbiB0aGUgdXNlciBoYXMgc2Nyb2xsZWQgdG8gdGhlIGVuZCBvZiB0aGUgbGlzdC5cbiAgICogKipOb3RlKio6IGBoYXNJbmZpbml0ZVNjcm9sbGAgaGFzIHRvIGJlIGVuYWJsZWQuXG4gICAqIFNlZSBtb3JlIG9uIFtHaXRIdWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9lYWtvcmlha2luL2lvbmljLXNlbGVjdGFibGUvd2lraS9Eb2N1bWVudGF0aW9uI29uaW5maW5pdGVzY3JvbGwpLlxuICAgKlxuICAgKiBAbWVtYmVyb2YgSW9uaWNTZWxlY3RhYmxlQ29tcG9uZW50XG4gICAqL1xuICBAT3V0cHV0KClcbiAgb25JbmZpbml0ZVNjcm9sbDogRXZlbnRFbWl0dGVyPHsgY29tcG9uZW50OiBJb25pY1NlbGVjdGFibGVDb21wb25lbnQsIHRleHQ6IHN0cmluZyB9PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAvKipcbiAgICogRmlyZXMgd2hlbiBNb2RhbCBoYXMgYmVlbiBvcGVuZWQuXG4gICAqIFNlZSBtb3JlIG9uIFtHaXRIdWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9lYWtvcmlha2luL2lvbmljLXNlbGVjdGFibGUvd2lraS9Eb2N1bWVudGF0aW9uI29ub3BlbikuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBJb25pY1NlbGVjdGFibGVDb21wb25lbnRcbiAgICovXG4gIEBPdXRwdXQoKVxuICBvbk9wZW46IEV2ZW50RW1pdHRlcjx7IGNvbXBvbmVudDogSW9uaWNTZWxlY3RhYmxlQ29tcG9uZW50IH0+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIC8qKlxuICAgKiBGaXJlcyB3aGVuIE1vZGFsIGhhcyBiZWVuIGNsb3NlZC5cbiAgICogU2VlIG1vcmUgb24gW0dpdEh1Yl0oaHR0cHM6Ly9naXRodWIuY29tL2Vha29yaWFraW4vaW9uaWMtc2VsZWN0YWJsZS93aWtpL0RvY3VtZW50YXRpb24jb25jbG9zZSkuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBJb25pY1NlbGVjdGFibGVDb21wb25lbnRcbiAgICovXG4gIEBPdXRwdXQoKVxuICBvbkNsb3NlOiBFdmVudEVtaXR0ZXI8eyBjb21wb25lbnQ6IElvbmljU2VsZWN0YWJsZUNvbXBvbmVudCB9PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAvKipcbiAgICogRmlyZXMgd2hlbiBhbiBpdGVtIGhhcyBiZWVuIHNlbGVjdGVkIG9yIHVuc2VsZWN0ZWQuXG4gICAqIFNlZSBtb3JlIG9uIFtHaXRIdWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9lYWtvcmlha2luL2lvbmljLXNlbGVjdGFibGUvd2lraS9Eb2N1bWVudGF0aW9uI29uc2VsZWN0KS5cbiAgICpcbiAgICogQG1lbWJlcm9mIElvbmljU2VsZWN0YWJsZUNvbXBvbmVudFxuICAgKi9cbiAgQE91dHB1dCgpXG4gIG9uU2VsZWN0OiBFdmVudEVtaXR0ZXI8eyBjb21wb25lbnQ6IElvbmljU2VsZWN0YWJsZUNvbXBvbmVudCwgaXRlbTogYW55LCBpc1NlbGVjdGVkOiBib29sZWFuIH0+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIC8qKlxuICAgKiBGaXJlcyB3aGVuIENsZWFyIGJ1dHRvbiBoYXMgYmVlbiBjbGlja2VkLlxuICAgKiBTZWUgbW9yZSBvbiBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vZWFrb3JpYWtpbi9pb25pYy1zZWxlY3RhYmxlL3dpa2kvRG9jdW1lbnRhdGlvbiNvbmNsZWFyKS5cbiAgICpcbiAgICogQG1lbWJlcm9mIElvbmljU2VsZWN0YWJsZUNvbXBvbmVudFxuICAgKi9cbiAgQE91dHB1dCgpXG4gIG9uQ2xlYXI6IEV2ZW50RW1pdHRlcjx7IGNvbXBvbmVudDogSW9uaWNTZWxlY3RhYmxlQ29tcG9uZW50LCBpdGVtczogYW55W10gfT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgLyoqXG4gICAqIEEgbGlzdCBvZiBpdGVtcyB0aGF0IGFyZSBzZWxlY3RlZCBhbmQgYXdhaXRpbmcgY29uZmlybWF0aW9uIGJ5IHVzZXIsIHdoZW4gaGUgaGFzIGNsaWNrZWQgQ29uZmlybSBidXR0b24uXG4gICAqIEFmdGVyIHRoZSB1c2VyIGhhcyBjbGlja2VkIENvbmZpcm0gYnV0dG9uIGl0ZW1zIHRvIGNvbmZpcm0gYXJlIGNsZWFyZWQuXG4gICAqIFNlZSBtb3JlIG9uIFtHaXRIdWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9lYWtvcmlha2luL2lvbmljLXNlbGVjdGFibGUvd2lraS9Eb2N1bWVudGF0aW9uI2l0ZW1zdG9jb25maXJtKS5cbiAgICpcbiAgICogQGRlZmF1bHQgW11cbiAgICogQHJlYWRvbmx5XG4gICAqIEBtZW1iZXJvZiBJb25pY1NlbGVjdGFibGVDb21wb25lbnRcbiAgICovXG4gIGdldCBpdGVtc1RvQ29uZmlybSgpOiBhbnlbXSB7XG4gICAgcmV0dXJuIHRoaXMuX2l0ZW1zVG9Db25maXJtO1xuICB9XG5cbiAgLyoqXG4gICAqIEhvdyBsb25nLCBpbiBtaWxsaXNlY29uZHMsIHRvIHdhaXQgdG8gZmlsdGVyIGl0ZW1zIG9yIHRvIHRyaWdnZXIgYG9uU2VhcmNoYCBldmVudCBhZnRlciBlYWNoIGtleXN0cm9rZS5cbiAgICogU2VlIG1vcmUgb24gW0dpdEh1Yl0oaHR0cHM6Ly9naXRodWIuY29tL2Vha29yaWFraW4vaW9uaWMtc2VsZWN0YWJsZS93aWtpL0RvY3VtZW50YXRpb24jc2VhcmNoZGVib3VuY2UpLlxuICAgKlxuICAgKiBAZGVmYXVsdCAyNTBcbiAgICogQG1lbWJlcm9mIElvbmljU2VsZWN0YWJsZUNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KClcbiAgc2VhcmNoRGVib3VuY2U6IE51bWJlciA9IDI1MDtcblxuICAvKipcbiAgICogQSBsaXN0IG9mIGl0ZW1zIHRvIGRpc2FibGUuXG4gICAqIFNlZSBtb3JlIG9uIFtHaXRIdWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9lYWtvcmlha2luL2lvbmljLXNlbGVjdGFibGUvd2lraS9Eb2N1bWVudGF0aW9uI2Rpc2FibGVkaXRlbXMpLlxuICAgKlxuICAgKiBAZGVmYXVsdCBbXVxuICAgKiBAbWVtYmVyb2YgSW9uaWNTZWxlY3RhYmxlQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKVxuICBkaXNhYmxlZEl0ZW1zOiBhbnlbXSA9IFtdO1xuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmVzIHdoZXRoZXIgaXRlbSB2YWx1ZSBvbmx5IHNob3VsZCBiZSBzdG9yZWQgaW4gYG5nTW9kZWxgLCBub3QgdGhlIGVudGlyZSBpdGVtLlxuICAgKiAqKk5vdGUqKjogSXRlbSB2YWx1ZSBpcyBkZWZpbmVkIGJ5IGBpdGVtVmFsdWVGaWVsZGAuXG4gICAqIFNlZSBtb3JlIG9uIFtHaXRIdWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9lYWtvcmlha2luL2lvbmljLXNlbGVjdGFibGUvd2lraS9Eb2N1bWVudGF0aW9uI3Nob3VsZHN0b3JlaXRlbXZhbHVlKS5cbiAgICpcbiAgICogQGRlZmF1bHQgZmFsc2VcbiAgICogQG1lbWJlcm9mIElvbmljU2VsZWN0YWJsZUNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KClcbiAgc2hvdWxkU3RvcmVJdGVtVmFsdWUgPSBmYWxzZTtcblxuICAvKipcbiAgICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRvIGFsbG93IGVkaXRpbmcgaXRlbXMuXG4gICAqIFNlZSBtb3JlIG9uIFtHaXRIdWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9lYWtvcmlha2luL2lvbmljLXNlbGVjdGFibGUvd2lraS9Eb2N1bWVudGF0aW9uI2NhbnNhdmVpdGVtKS5cbiAgICpcbiAgICogQGRlZmF1bHQgZmFsc2VcbiAgICogQG1lbWJlcm9mIElvbmljU2VsZWN0YWJsZUNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KClcbiAgY2FuU2F2ZUl0ZW0gPSBmYWxzZTtcblxuICAvKipcbiAgICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRvIGFsbG93IGRlbGV0aW5nIGl0ZW1zLlxuICAgKiBTZWUgbW9yZSBvbiBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vZWFrb3JpYWtpbi9pb25pYy1zZWxlY3RhYmxlL3dpa2kvRG9jdW1lbnRhdGlvbiNjYW5kZWxldGVpdGVtKS5cbiAgICpcbiAgICogQGRlZmF1bHQgZmFsc2VcbiAgICogQG1lbWJlcm9mIElvbmljU2VsZWN0YWJsZUNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KClcbiAgY2FuRGVsZXRlSXRlbSA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmVzIHdoZXRoZXIgdG8gYWxsb3cgYWRkaW5nIGl0ZW1zLlxuICAgKiBTZWUgbW9yZSBvbiBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vZWFrb3JpYWtpbi9pb25pYy1zZWxlY3RhYmxlL3dpa2kvRG9jdW1lbnRhdGlvbiNjYW5hZGRpdGVtKS5cbiAgICpcbiAgICogQGRlZmF1bHQgZmFsc2VcbiAgICogQG1lbWJlcm9mIElvbmljU2VsZWN0YWJsZUNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KCdjYW5BZGRJdGVtJylcbiAgZ2V0IGNhbkFkZEl0ZW0oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2NhbkFkZEl0ZW07XG4gIH1cbiAgc2V0IGNhbkFkZEl0ZW0oY2FuQWRkSXRlbTogYm9vbGVhbikge1xuICAgIHRoaXMuX2NhbkFkZEl0ZW0gPSAhIWNhbkFkZEl0ZW07XG4gICAgdGhpcy5fY291bnRGb290ZXJCdXR0b25zKCk7XG4gIH1cblxuICAvKipcbiAgICogRmlyZXMgd2hlbiBFZGl0IGl0ZW0gYnV0dG9uIGhhcyBiZWVuIGNsaWNrZWQuXG4gICAqIFdoZW4gdGhlIGJ1dHRvbiBoYXMgYmVlbiBjbGlja2VkIGBpb25pY1NlbGVjdGFibGVBZGRJdGVtVGVtcGxhdGVgIHdpbGwgYmUgc2hvd24uIFVzZSB0aGUgdGVtcGxhdGUgdG8gY3JlYXRlIGEgZm9ybSB0byBlZGl0IGl0ZW0uXG4gICAqICoqTm90ZSoqOiBgY2FuU2F2ZUl0ZW1gIGhhcyB0byBiZSBlbmFibGVkLlxuICAgKiBTZWUgbW9yZSBvbiBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vZWFrb3JpYWtpbi9pb25pYy1zZWxlY3RhYmxlL3dpa2kvRG9jdW1lbnRhdGlvbiNvbnNhdmVpdGVtKS5cbiAgICpcbiAgICogQG1lbWJlcm9mIElvbmljU2VsZWN0YWJsZUNvbXBvbmVudFxuICAgKi9cbiAgQE91dHB1dCgpXG4gIG9uU2F2ZUl0ZW06IEV2ZW50RW1pdHRlcjx7IGNvbXBvbmVudDogSW9uaWNTZWxlY3RhYmxlQ29tcG9uZW50LCBpdGVtOiBhbnkgfT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgLyoqXG4gICAqIEZpcmVzIHdoZW4gRGVsZXRlIGl0ZW0gYnV0dG9uIGhhcyBiZWVuIGNsaWNrZWQuXG4gICAqICoqTm90ZSoqOiBgY2FuRGVsZXRlSXRlbWAgaGFzIHRvIGJlIGVuYWJsZWQuXG4gICAqIFNlZSBtb3JlIG9uIFtHaXRIdWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9lYWtvcmlha2luL2lvbmljLXNlbGVjdGFibGUvd2lraS9Eb2N1bWVudGF0aW9uI29uZGVsZXRlaXRlbSkuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBJb25pY1NlbGVjdGFibGVDb21wb25lbnRcbiAgICovXG4gIEBPdXRwdXQoKVxuICBvbkRlbGV0ZUl0ZW06IEV2ZW50RW1pdHRlcjx7IGNvbXBvbmVudDogSW9uaWNTZWxlY3RhYmxlQ29tcG9uZW50LCBpdGVtOiBhbnkgfT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgLyoqXG4gICAqIEZpcmVzIHdoZW4gQWRkIGl0ZW0gYnV0dG9uIGhhcyBiZWVuIGNsaWNrZWQuXG4gICAqIFdoZW4gdGhlIGJ1dHRvbiBoYXMgYmVlbiBjbGlja2VkIGBpb25pY1NlbGVjdGFibGVBZGRJdGVtVGVtcGxhdGVgIHdpbGwgYmUgc2hvd24uIFVzZSB0aGUgdGVtcGxhdGUgdG8gY3JlYXRlIGEgZm9ybSB0byBhZGQgaXRlbS5cbiAgICogKipOb3RlKio6IGBjYW5BZGRJdGVtYCBoYXMgdG8gYmUgZW5hYmxlZC5cbiAgICogU2VlIG1vcmUgb24gW0dpdEh1Yl0oaHR0cHM6Ly9naXRodWIuY29tL2Vha29yaWFraW4vaW9uaWMtc2VsZWN0YWJsZS93aWtpL0RvY3VtZW50YXRpb24jb25hZGRpdGVtKS5cbiAgICpcbiAgICogQG1lbWJlcm9mIElvbmljU2VsZWN0YWJsZUNvbXBvbmVudFxuICAgKi9cbiAgQE91dHB1dCgpXG4gIG9uQWRkSXRlbTogRXZlbnRFbWl0dGVyPHsgY29tcG9uZW50OiBJb25pY1NlbGVjdGFibGVDb21wb25lbnQgfT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgQENvbnRlbnRDaGlsZChJb25pY1NlbGVjdGFibGVWYWx1ZVRlbXBsYXRlRGlyZWN0aXZlLCB7IHJlYWQ6IFRlbXBsYXRlUmVmIH0pXG4gIHZhbHVlVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG4gIEBDb250ZW50Q2hpbGQoSW9uaWNTZWxlY3RhYmxlSXRlbVRlbXBsYXRlRGlyZWN0aXZlLCB7IHJlYWQ6IFRlbXBsYXRlUmVmIH0pXG4gIGl0ZW1UZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcbiAgQENvbnRlbnRDaGlsZChJb25pY1NlbGVjdGFibGVJdGVtRW5kVGVtcGxhdGVEaXJlY3RpdmUsIHsgcmVhZDogVGVtcGxhdGVSZWYgfSlcbiAgaXRlbUVuZFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICBAQ29udGVudENoaWxkKElvbmljU2VsZWN0YWJsZVRpdGxlVGVtcGxhdGVEaXJlY3RpdmUsIHsgcmVhZDogVGVtcGxhdGVSZWYgfSlcbiAgdGl0bGVUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcbiAgQENvbnRlbnRDaGlsZChJb25pY1NlbGVjdGFibGVQbGFjZWhvbGRlclRlbXBsYXRlRGlyZWN0aXZlLCB7IHJlYWQ6IFRlbXBsYXRlUmVmIH0pXG4gIHBsYWNlaG9sZGVyVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG4gIEBDb250ZW50Q2hpbGQoSW9uaWNTZWxlY3RhYmxlTWVzc2FnZVRlbXBsYXRlRGlyZWN0aXZlLCB7IHJlYWQ6IFRlbXBsYXRlUmVmIH0pXG4gIG1lc3NhZ2VUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcbiAgQENvbnRlbnRDaGlsZChJb25pY1NlbGVjdGFibGVHcm91cFRlbXBsYXRlRGlyZWN0aXZlLCB7IHJlYWQ6IFRlbXBsYXRlUmVmIH0pXG4gIGdyb3VwVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG4gIEBDb250ZW50Q2hpbGQoSW9uaWNTZWxlY3RhYmxlR3JvdXBFbmRUZW1wbGF0ZURpcmVjdGl2ZSwgeyByZWFkOiBUZW1wbGF0ZVJlZiB9KVxuICBncm91cEVuZFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICBAQ29udGVudENoaWxkKElvbmljU2VsZWN0YWJsZUNsb3NlQnV0dG9uVGVtcGxhdGVEaXJlY3RpdmUsIHsgcmVhZDogVGVtcGxhdGVSZWYgfSlcbiAgY2xvc2VCdXR0b25UZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcbiAgQENvbnRlbnRDaGlsZChJb25pY1NlbGVjdGFibGVTZWFyY2hGYWlsVGVtcGxhdGVEaXJlY3RpdmUsIHsgcmVhZDogVGVtcGxhdGVSZWYgfSlcbiAgc2VhcmNoRmFpbFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICBAQ29udGVudENoaWxkKElvbmljU2VsZWN0YWJsZUFkZEl0ZW1UZW1wbGF0ZURpcmVjdGl2ZSwgeyByZWFkOiBUZW1wbGF0ZVJlZiB9KVxuICBhZGRJdGVtVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG4gIEBDb250ZW50Q2hpbGQoSW9uaWNTZWxlY3RhYmxlRm9vdGVyVGVtcGxhdGVEaXJlY3RpdmUsIHsgcmVhZDogVGVtcGxhdGVSZWYgfSlcbiAgZm9vdGVyVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG4gIF9hZGRJdGVtVGVtcGxhdGVGb290ZXJIZWlnaHQ6IHN0cmluZztcbiAgQENvbnRlbnRDaGlsZChJb25pY1NlbGVjdGFibGVIZWFkZXJUZW1wbGF0ZURpcmVjdGl2ZSwgeyByZWFkOiBUZW1wbGF0ZVJlZiB9KVxuICBoZWFkZXJUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcbiAgQENvbnRlbnRDaGlsZChJb25pY1NlbGVjdGFibGVJdGVtSWNvblRlbXBsYXRlRGlyZWN0aXZlLCB7IHJlYWQ6IFRlbXBsYXRlUmVmIH0pXG4gIGl0ZW1JY29uVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG4gIEBDb250ZW50Q2hpbGQoSW9uaWNTZWxlY3RhYmxlSWNvblRlbXBsYXRlRGlyZWN0aXZlLCB7IHJlYWQ6IFRlbXBsYXRlUmVmIH0pXG4gIGljb25UZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICAvKipcbiAgICogU2VlIElvbmljIFZpcnR1YWxTY3JvbGwgW2hlYWRlckZuXShodHRwczovL2lvbmljZnJhbWV3b3JrLmNvbS9kb2NzL2FwaS9jb21wb25lbnRzL3ZpcnR1YWwtc2Nyb2xsL1ZpcnR1YWxTY3JvbGwvKS5cbiAgICogU2VlIG1vcmUgb24gW0dpdEh1Yl0oaHR0cHM6Ly9naXRodWIuY29tL2Vha29yaWFraW4vaW9uaWMtc2VsZWN0YWJsZS93aWtpL0RvY3VtZW50YXRpb24jdmlydHVhbHNjcm9sbGhlYWRlcmZuKS5cbiAgICpcbiAgICogQG1lbWJlcm9mIElvbmljU2VsZWN0YWJsZUNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KClcbiAgdmlydHVhbFNjcm9sbEhlYWRlckZuID0gKCkgPT4ge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfbW9kYWxDb250cm9sbGVyOiBNb2RhbENvbnRyb2xsZXIsXG4gICAgcHJpdmF0ZSBfcGxhdGZvcm06IFBsYXRmb3JtLFxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgaW9uSXRlbTogSW9uSXRlbSxcbiAgICBwcml2YXRlIF9pdGVyYWJsZURpZmZlcnM6IEl0ZXJhYmxlRGlmZmVycyxcbiAgICBwcml2YXRlIF9lbGVtZW50OiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjJcbiAgKSB7XG4gICAgaWYgKCF0aGlzLml0ZW1zIHx8ICF0aGlzLml0ZW1zLmxlbmd0aCkge1xuICAgICAgdGhpcy5pdGVtcyA9IFtdO1xuICAgIH1cblxuICAgIHRoaXMuX2l0ZW1zRGlmZmVyID0gdGhpcy5faXRlcmFibGVEaWZmZXJzLmZpbmQodGhpcy5pdGVtcykuY3JlYXRlKCk7XG4gIH1cblxuICBpbml0Rm9jdXMoKSB7IH1cblxuICBlbmFibGVJb25JdGVtKGlzRW5hYmxlZDogYm9vbGVhbikge1xuICAgIGlmICghdGhpcy5pb25JdGVtKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5pb25JdGVtLmRpc2FibGVkID0gIWlzRW5hYmxlZDtcbiAgfVxuXG4gIF9pc051bGxPcldoaXRlU3BhY2UodmFsdWU6IGFueSk6IGJvb2xlYW4ge1xuICAgIGlmICh2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBDb252ZXJ0IHZhbHVlIHRvIHN0cmluZyBpbiBjYXNlIGlmIGl0J3Mgbm90LlxuICAgIHJldHVybiB2YWx1ZS50b1N0cmluZygpLnJlcGxhY2UoL1xccy9nLCAnJykubGVuZ3RoIDwgMTtcbiAgfVxuXG4gIF9zZXRIYXNTZWFyY2hUZXh0KCkge1xuICAgIHRoaXMuX2hhc1NlYXJjaFRleHQgPSAhdGhpcy5faXNOdWxsT3JXaGl0ZVNwYWNlKHRoaXMuX3NlYXJjaFRleHQpO1xuICB9XG5cbiAgX2hhc09uU2VhcmNoKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmlzT25TZWFyY2hFbmFibGVkICYmIHRoaXMub25TZWFyY2gub2JzZXJ2ZXJzLmxlbmd0aCA+IDA7XG4gIH1cblxuICBfaGFzT25TYXZlSXRlbSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5jYW5TYXZlSXRlbSAmJiB0aGlzLm9uU2F2ZUl0ZW0ub2JzZXJ2ZXJzLmxlbmd0aCA+IDA7XG4gIH1cblxuICBfaGFzT25BZGRJdGVtKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmNhbkFkZEl0ZW0gJiYgdGhpcy5vbkFkZEl0ZW0ub2JzZXJ2ZXJzLmxlbmd0aCA+IDA7XG4gIH1cblxuICBfaGFzT25EZWxldGVJdGVtKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmNhbkRlbGV0ZUl0ZW0gJiYgdGhpcy5vbkRlbGV0ZUl0ZW0ub2JzZXJ2ZXJzLmxlbmd0aCA+IDA7XG4gIH1cblxuICBfZW1pdFZhbHVlQ2hhbmdlKCkge1xuICAgIHRoaXMucHJvcGFnYXRlT25DaGFuZ2UodGhpcy52YWx1ZSk7XG5cbiAgICB0aGlzLm9uQ2hhbmdlLmVtaXQoe1xuICAgICAgY29tcG9uZW50OiB0aGlzLFxuICAgICAgdmFsdWU6IHRoaXMudmFsdWVcbiAgICB9KTtcbiAgfVxuXG4gIF9lbWl0U2VhcmNoKCkge1xuICAgIGlmICghdGhpcy5jYW5TZWFyY2gpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLm9uU2VhcmNoLmVtaXQoe1xuICAgICAgY29tcG9uZW50OiB0aGlzLFxuICAgICAgdGV4dDogdGhpcy5fc2VhcmNoVGV4dFxuICAgIH0pO1xuICB9XG5cbiAgX2VtaXRPblNlbGVjdChpdGVtOiBhbnksIGlzU2VsZWN0ZWQ6IGJvb2xlYW4pIHtcbiAgICB0aGlzLm9uU2VsZWN0LmVtaXQoe1xuICAgICAgY29tcG9uZW50OiB0aGlzLFxuICAgICAgaXRlbTogaXRlbSxcbiAgICAgIGlzU2VsZWN0ZWQ6IGlzU2VsZWN0ZWRcbiAgICB9KTtcbiAgfVxuXG4gIF9lbWl0T25DbGVhcihpdGVtczogYW55W10pIHtcbiAgICB0aGlzLm9uQ2xlYXIuZW1pdCh7XG4gICAgICBjb21wb25lbnQ6IHRoaXMsXG4gICAgICBpdGVtczogaXRlbXNcbiAgICB9KTtcbiAgfVxuXG4gIF9lbWl0T25TZWFyY2hTdWNjZXNzT3JGYWlsKGlzU3VjY2VzczogYm9vbGVhbikge1xuICAgIGNvbnN0IGV2ZW50RGF0YSA9IHtcbiAgICAgIGNvbXBvbmVudDogdGhpcyxcbiAgICAgIHRleHQ6IHRoaXMuX3NlYXJjaFRleHRcbiAgICB9O1xuXG4gICAgaWYgKGlzU3VjY2Vzcykge1xuICAgICAgdGhpcy5vblNlYXJjaFN1Y2Nlc3MuZW1pdChldmVudERhdGEpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm9uU2VhcmNoRmFpbC5lbWl0KGV2ZW50RGF0YSk7XG4gICAgfVxuICB9XG5cbiAgX2Zvcm1hdEl0ZW0oaXRlbTogYW55KTogc3RyaW5nIHtcbiAgICBpZiAodGhpcy5faXNOdWxsT3JXaGl0ZVNwYWNlKGl0ZW0pKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5pdGVtVGV4dEZpZWxkID8gaXRlbVt0aGlzLml0ZW1UZXh0RmllbGRdIDogaXRlbS50b1N0cmluZygpO1xuICB9XG5cbiAgX2Zvcm1hdFZhbHVlSXRlbShpdGVtOiBhbnkpOiBzdHJpbmcge1xuICAgIGlmICh0aGlzLl9zaG91bGRTdG9yZUl0ZW1WYWx1ZSkge1xuICAgICAgLy8gR2V0IGl0ZW0gdGV4dCBmcm9tIHRoZSBsaXN0IGFzIHdlIHN0b3JlIGl0J3MgdmFsdWUgb25seS5cbiAgICAgIGNvbnN0IHNlbGVjdGVkSXRlbSA9IHRoaXMuaXRlbXMuZmluZChfaXRlbSA9PiB7XG4gICAgICAgIHJldHVybiBfaXRlbVt0aGlzLml0ZW1WYWx1ZUZpZWxkXSA9PT0gaXRlbTtcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gdGhpcy5fZm9ybWF0SXRlbShzZWxlY3RlZEl0ZW0pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5fZm9ybWF0SXRlbShpdGVtKTtcbiAgICB9XG4gIH1cblxuICBfZ2V0SXRlbVZhbHVlKGl0ZW06IGFueSk6IGFueSB7XG4gICAgaWYgKCF0aGlzLl9oYXNPYmplY3RzKSB7XG4gICAgICByZXR1cm4gaXRlbTtcbiAgICB9XG5cbiAgICByZXR1cm4gaXRlbVt0aGlzLml0ZW1WYWx1ZUZpZWxkXTtcbiAgfVxuXG4gIF9nZXRTdG9yZWRJdGVtVmFsdWUoaXRlbTogYW55KTogYW55IHtcbiAgICBpZiAoIXRoaXMuX2hhc09iamVjdHMpIHtcbiAgICAgIHJldHVybiBpdGVtO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl9zaG91bGRTdG9yZUl0ZW1WYWx1ZSA/IGl0ZW0gOiBpdGVtW3RoaXMuaXRlbVZhbHVlRmllbGRdO1xuICB9XG5cbiAgX29uU2VhcmNoYmFyQ2xlYXIoKSB7XG4gICAgLy8gSW9uaWMgU2VhcmNoYmFyIGRvZXNuJ3QgY2xlYXIgYmluZCB3aXRoIG5nTW9kZWwgdmFsdWUuXG4gICAgLy8gRG8gaXQgb3Vyc2VsdmVzLlxuICAgIHRoaXMuX3NlYXJjaFRleHQgPSAnJztcbiAgfVxuXG4gIF9maWx0ZXJJdGVtcygpIHtcbiAgICB0aGlzLl9zZXRIYXNTZWFyY2hUZXh0KCk7XG5cbiAgICBpZiAodGhpcy5faGFzT25TZWFyY2goKSkge1xuICAgICAgLy8gRGVsZWdhdGUgZmlsdGVyaW5nIHRvIHRoZSBldmVudC5cbiAgICAgIHRoaXMuX2VtaXRTZWFyY2goKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gRGVmYXVsdCBmaWx0ZXJpbmcuXG4gICAgICBsZXQgZ3JvdXBzID0gW107XG5cbiAgICAgIGlmICghdGhpcy5fc2VhcmNoVGV4dCB8fCAhdGhpcy5fc2VhcmNoVGV4dC50cmltKCkpIHtcbiAgICAgICAgZ3JvdXBzID0gdGhpcy5fZ3JvdXBzO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgZmlsdGVyVGV4dCA9IHRoaXMuX3NlYXJjaFRleHQudHJpbSgpLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgdGhpcy5fZ3JvdXBzLmZvckVhY2goZ3JvdXAgPT4ge1xuICAgICAgICAgIGNvbnN0IGl0ZW1zID0gZ3JvdXAuaXRlbXMuZmlsdGVyKGl0ZW0gPT4ge1xuICAgICAgICAgICAgY29uc3QgaXRlbVRleHQgPSAodGhpcy5pdGVtVGV4dEZpZWxkID9cbiAgICAgICAgICAgICAgaXRlbVt0aGlzLml0ZW1UZXh0RmllbGRdIDogaXRlbSkudG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW1UZXh0LmluZGV4T2YoZmlsdGVyVGV4dCkgIT09IC0xO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgaWYgKGl0ZW1zLmxlbmd0aCkge1xuICAgICAgICAgICAgZ3JvdXBzLnB1c2goe1xuICAgICAgICAgICAgICB2YWx1ZTogZ3JvdXAudmFsdWUsXG4gICAgICAgICAgICAgIHRleHQ6IGdyb3VwLnRleHQsXG4gICAgICAgICAgICAgIGl0ZW1zOiBpdGVtc1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBObyBpdGVtcyBmb3VuZC5cbiAgICAgICAgaWYgKCFncm91cHMubGVuZ3RoKSB7XG4gICAgICAgICAgZ3JvdXBzLnB1c2goe1xuICAgICAgICAgICAgaXRlbXM6IFtdXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5fZmlsdGVyZWRHcm91cHMgPSBncm91cHM7XG4gICAgICB0aGlzLl9oYXNGaWx0ZXJlZEl0ZW1zID0gIXRoaXMuX2FyZUdyb3Vwc0VtcHR5KGdyb3Vwcyk7XG4gICAgICB0aGlzLl9lbWl0T25TZWFyY2hTdWNjZXNzT3JGYWlsKHRoaXMuX2hhc0ZpbHRlcmVkSXRlbXMpO1xuICAgIH1cbiAgfVxuXG4gIF9pc0l0ZW1EaXNhYmxlZChpdGVtOiBhbnkpOiBib29sZWFuIHtcbiAgICBpZiAoIXRoaXMuZGlzYWJsZWRJdGVtcykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmRpc2FibGVkSXRlbXMuc29tZShfaXRlbSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5fZ2V0SXRlbVZhbHVlKF9pdGVtKSA9PT0gdGhpcy5fZ2V0SXRlbVZhbHVlKGl0ZW0pO1xuICAgIH0pO1xuICB9XG5cbiAgX2lzSXRlbVNlbGVjdGVkKGl0ZW06IGFueSkge1xuICAgIHJldHVybiB0aGlzLl9zZWxlY3RlZEl0ZW1zLmZpbmQoc2VsZWN0ZWRJdGVtID0+IHtcbiAgICAgIHJldHVybiB0aGlzLl9nZXRJdGVtVmFsdWUoaXRlbSkgPT09IHRoaXMuX2dldFN0b3JlZEl0ZW1WYWx1ZShzZWxlY3RlZEl0ZW0pO1xuICAgIH0pICE9PSB1bmRlZmluZWQ7XG4gIH1cblxuICBfYWRkU2VsZWN0ZWRJdGVtKGl0ZW06IGFueSkge1xuICAgIGlmICh0aGlzLl9zaG91bGRTdG9yZUl0ZW1WYWx1ZSkge1xuICAgICAgdGhpcy5fc2VsZWN0ZWRJdGVtcy5wdXNoKHRoaXMuX2dldEl0ZW1WYWx1ZShpdGVtKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3NlbGVjdGVkSXRlbXMucHVzaChpdGVtKTtcbiAgICB9XG4gIH1cblxuICBfZGVsZXRlU2VsZWN0ZWRJdGVtKGl0ZW06IGFueSkge1xuICAgIGxldCBpdGVtVG9EZWxldGVJbmRleDtcblxuICAgIHRoaXMuX3NlbGVjdGVkSXRlbXMuZm9yRWFjaCgoc2VsZWN0ZWRJdGVtLCBpdGVtSW5kZXgpID0+IHtcbiAgICAgIGlmIChcbiAgICAgICAgdGhpcy5fZ2V0SXRlbVZhbHVlKGl0ZW0pID09PVxuICAgICAgICB0aGlzLl9nZXRTdG9yZWRJdGVtVmFsdWUoc2VsZWN0ZWRJdGVtKVxuICAgICAgKSB7XG4gICAgICAgIGl0ZW1Ub0RlbGV0ZUluZGV4ID0gaXRlbUluZGV4O1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5fc2VsZWN0ZWRJdGVtcy5zcGxpY2UoaXRlbVRvRGVsZXRlSW5kZXgsIDEpO1xuICB9XG5cbiAgX2NsaWNrKCkge1xuICAgIGlmICghdGhpcy5pc0VuYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9sYWJlbCA9IHRoaXMuX2dldExhYmVsVGV4dCgpO1xuICAgIHRoaXMub3BlbigpLnRoZW4oKCkgPT4ge1xuICAgICAgdGhpcy5vbk9wZW4uZW1pdCh7XG4gICAgICAgIGNvbXBvbmVudDogdGhpc1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBfc2F2ZUl0ZW0oZXZlbnQ6IEV2ZW50LCBpdGVtOiBhbnkpIHtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB0aGlzLl9pdGVtVG9BZGQgPSBpdGVtO1xuXG4gICAgaWYgKHRoaXMuX2hhc09uU2F2ZUl0ZW0oKSkge1xuICAgICAgdGhpcy5vblNhdmVJdGVtLmVtaXQoe1xuICAgICAgICBjb21wb25lbnQ6IHRoaXMsXG4gICAgICAgIGl0ZW06IHRoaXMuX2l0ZW1Ub0FkZFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2hvd0FkZEl0ZW1UZW1wbGF0ZSgpO1xuICAgIH1cbiAgfVxuXG4gIF9kZWxldGVJdGVtQ2xpY2soZXZlbnQ6IEV2ZW50LCBpdGVtOiBhbnkpIHtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB0aGlzLl9pdGVtVG9BZGQgPSBpdGVtO1xuXG4gICAgaWYgKHRoaXMuX2hhc09uRGVsZXRlSXRlbSgpKSB7XG4gICAgICAvLyBEZWxlZ2F0ZSBsb2dpYyB0byBldmVudC5cbiAgICAgIHRoaXMub25EZWxldGVJdGVtLmVtaXQoe1xuICAgICAgICBjb21wb25lbnQ6IHRoaXMsXG4gICAgICAgIGl0ZW06IHRoaXMuX2l0ZW1Ub0FkZFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZGVsZXRlSXRlbSh0aGlzLl9pdGVtVG9BZGQpO1xuICAgIH1cbiAgfVxuXG4gIF9hZGRJdGVtQ2xpY2soKSB7XG4gICAgaWYgKHRoaXMuX2hhc09uQWRkSXRlbSgpKSB7XG4gICAgICB0aGlzLm9uQWRkSXRlbS5lbWl0KHtcbiAgICAgICAgY29tcG9uZW50OiB0aGlzXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zaG93QWRkSXRlbVRlbXBsYXRlKCk7XG4gICAgfVxuICB9XG5cbiAgX3Bvc2l0aW9uQWRkSXRlbVRlbXBsYXRlKCkge1xuICAgIC8vIFdhaXQgZm9yIHRoZSB0ZW1wbGF0ZSB0byByZW5kZXIuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjb25zdCBmb290ZXIgPSB0aGlzLl9tb2RhbENvbXBvbmVudC5fZWxlbWVudC5uYXRpdmVFbGVtZW50XG4gICAgICAgIC5xdWVyeVNlbGVjdG9yKCcuaW9uaWMtc2VsZWN0YWJsZS1hZGQtaXRlbS10ZW1wbGF0ZSBpb24tZm9vdGVyJyk7XG5cbiAgICAgIHRoaXMuX2FkZEl0ZW1UZW1wbGF0ZUZvb3RlckhlaWdodCA9IGZvb3RlciA/IGBjYWxjKDEwMCUgLSAke2Zvb3Rlci5vZmZzZXRIZWlnaHR9cHgpYCA6ICcxMDAlJztcbiAgICB9LCAxMDApO1xuICB9XG5cbiAgX2Nsb3NlKCkge1xuICAgIHRoaXMuY2xvc2UoKS50aGVuKCgpID0+IHtcbiAgICAgIHRoaXMub25DbG9zZS5lbWl0KHtcbiAgICAgICAgY29tcG9uZW50OiB0aGlzXG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIGlmICghdGhpcy5faGFzT25TZWFyY2goKSkge1xuICAgICAgdGhpcy5fc2VhcmNoVGV4dCA9ICcnO1xuICAgICAgdGhpcy5fc2V0SGFzU2VhcmNoVGV4dCgpO1xuICAgIH1cbiAgfVxuXG4gIF9jbGVhcigpIHtcbiAgICBjb25zdCBzZWxlY3RlZEl0ZW1zID0gdGhpcy5fc2VsZWN0ZWRJdGVtcztcblxuICAgIHRoaXMuY2xlYXIoKTtcbiAgICB0aGlzLl9lbWl0VmFsdWVDaGFuZ2UoKTtcbiAgICB0aGlzLl9lbWl0T25DbGVhcihzZWxlY3RlZEl0ZW1zKTtcbiAgICB0aGlzLmNsb3NlKCkudGhlbigoKSA9PiB7XG4gICAgICB0aGlzLm9uQ2xvc2UuZW1pdCh7XG4gICAgICAgIGNvbXBvbmVudDogdGhpc1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBfZ2V0TW9yZUl0ZW1zKCkge1xuICAgIHRoaXMub25JbmZpbml0ZVNjcm9sbC5lbWl0KHtcbiAgICAgIGNvbXBvbmVudDogdGhpcyxcbiAgICAgIHRleHQ6IHRoaXMuX3NlYXJjaFRleHRcbiAgICB9KTtcbiAgfVxuXG4gIF9zZXRJdGVtc1RvQ29uZmlybShpdGVtczogYW55W10pIHtcbiAgICAvLyBSZXR1cm4gYSBjb3B5IG9mIG9yaWdpbmFsIGFycmF5LCBzbyBpdCBjb3VsZG4ndCBiZSBjaGFuZ2VkIGZyb20gb3V0c2lkZS5cbiAgICB0aGlzLl9pdGVtc1RvQ29uZmlybSA9IFtdLmNvbmNhdChpdGVtcyk7XG4gIH1cblxuICBfZG9TZWxlY3Qoc2VsZWN0ZWRJdGVtOiBhbnkpIHtcbiAgICB0aGlzLnZhbHVlID0gc2VsZWN0ZWRJdGVtO1xuICAgIHRoaXMuX2VtaXRWYWx1ZUNoYW5nZSgpO1xuICB9XG5cbiAgX3NlbGVjdChpdGVtOiBhbnkpIHtcbiAgICBjb25zdCBpc0l0ZW1TZWxlY3RlZCA9IHRoaXMuX2lzSXRlbVNlbGVjdGVkKGl0ZW0pO1xuXG4gICAgaWYgKHRoaXMuaXNNdWx0aXBsZSkge1xuICAgICAgaWYgKGlzSXRlbVNlbGVjdGVkKSB7XG4gICAgICAgIHRoaXMuX2RlbGV0ZVNlbGVjdGVkSXRlbShpdGVtKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX2FkZFNlbGVjdGVkSXRlbShpdGVtKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fc2V0SXRlbXNUb0NvbmZpcm0odGhpcy5fc2VsZWN0ZWRJdGVtcyk7XG5cbiAgICAgIC8vIEVtaXQgb25TZWxlY3QgZXZlbnQgYWZ0ZXIgc2V0dGluZyBpdGVtcyB0byBjb25maXJtIHNvIHRoZXkgY291bGQgYmUgdXNlZFxuICAgICAgLy8gaW5zaWRlIHRoZSBldmVudC5cbiAgICAgIHRoaXMuX2VtaXRPblNlbGVjdChpdGVtLCAhaXNJdGVtU2VsZWN0ZWQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5oYXNDb25maXJtQnV0dG9uIHx8IHRoaXMuZm9vdGVyVGVtcGxhdGUpIHtcbiAgICAgICAgLy8gRG9uJ3QgY2xvc2UgTW9kYWwgYW5kIGtlZXAgdHJhY2sgb24gaXRlbXMgdG8gY29uZmlybS5cbiAgICAgICAgLy8gV2hlbiBmb290ZXIgdGVtcGxhdGUgaXMgdXNlZCBpdCdzIHVwIHRvIGRldmVsb3BlciB0byBjbG9zZSBNb2RhbC5cbiAgICAgICAgdGhpcy5fc2VsZWN0ZWRJdGVtcyA9IFtdO1xuXG4gICAgICAgIGlmIChpc0l0ZW1TZWxlY3RlZCkge1xuICAgICAgICAgIHRoaXMuX2RlbGV0ZVNlbGVjdGVkSXRlbShpdGVtKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLl9hZGRTZWxlY3RlZEl0ZW0oaXRlbSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9zZXRJdGVtc1RvQ29uZmlybSh0aGlzLl9zZWxlY3RlZEl0ZW1zKTtcblxuICAgICAgICAvLyBFbWl0IG9uU2VsZWN0IGV2ZW50IGFmdGVyIHNldHRpbmcgaXRlbXMgdG8gY29uZmlybSBzbyB0aGV5IGNvdWxkIGJlIHVzZWRcbiAgICAgICAgLy8gaW5zaWRlIHRoZSBldmVudC5cbiAgICAgICAgdGhpcy5fZW1pdE9uU2VsZWN0KGl0ZW0sICFpc0l0ZW1TZWxlY3RlZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoIWlzSXRlbVNlbGVjdGVkKSB7XG4gICAgICAgICAgdGhpcy5fc2VsZWN0ZWRJdGVtcyA9IFtdO1xuICAgICAgICAgIHRoaXMuX2FkZFNlbGVjdGVkSXRlbShpdGVtKTtcblxuICAgICAgICAgIC8vIEVtaXQgb25TZWxlY3QgYmVmb3JlIG9uQ2hhbmdlLlxuICAgICAgICAgIHRoaXMuX2VtaXRPblNlbGVjdChpdGVtLCB0cnVlKTtcblxuICAgICAgICAgIGlmICh0aGlzLl9zaG91bGRTdG9yZUl0ZW1WYWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fZG9TZWxlY3QodGhpcy5fZ2V0SXRlbVZhbHVlKGl0ZW0pKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fZG9TZWxlY3QoaXRlbSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fY2xvc2UoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBfY29uZmlybSgpIHtcbiAgICB0aGlzLmNvbmZpcm0oKTtcbiAgICB0aGlzLl9jbG9zZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0TGFiZWxUZXh0KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2lvbkxhYmVsRWxlbWVudCA/IHRoaXMuX2lvbkxhYmVsRWxlbWVudC50ZXh0Q29udGVudCA6IG51bGw7XG4gIH1cblxuICBwcml2YXRlIF9hcmVHcm91cHNFbXB0eShncm91cHMpIHtcbiAgICByZXR1cm4gZ3JvdXBzLmxlbmd0aCA9PT0gMCB8fCBncm91cHMuZXZlcnkoZ3JvdXAgPT4ge1xuICAgICAgcmV0dXJuICFncm91cC5pdGVtcyB8fCBncm91cC5pdGVtcy5sZW5ndGggPT09IDA7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF9jb3VudEZvb3RlckJ1dHRvbnMoKSB7XG4gICAgbGV0IGZvb3RlckJ1dHRvbnNDb3VudCA9IDA7XG5cbiAgICBpZiAodGhpcy5jYW5DbGVhcikge1xuICAgICAgZm9vdGVyQnV0dG9uc0NvdW50Kys7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaXNNdWx0aXBsZSB8fCB0aGlzLl9oYXNDb25maXJtQnV0dG9uKSB7XG4gICAgICBmb290ZXJCdXR0b25zQ291bnQrKztcbiAgICB9XG5cbiAgICBpZiAodGhpcy5jYW5BZGRJdGVtKSB7XG4gICAgICBmb290ZXJCdXR0b25zQ291bnQrKztcbiAgICB9XG5cbiAgICB0aGlzLl9mb290ZXJCdXR0b25zQ291bnQgPSBmb290ZXJCdXR0b25zQ291bnQ7XG4gIH1cblxuICBwcml2YXRlIF9zZXRJdGVtcyhpdGVtczogYW55W10pIHtcbiAgICAvLyBJdCdzIGltcG9ydGFudCB0byBoYXZlIGFuIGVtcHR5IHN0YXJ0aW5nIGdyb3VwIHdpdGggZW1wdHkgaXRlbXMgKGdyb3Vwc1swXS5pdGVtcyksXG4gICAgLy8gYmVjYXVzZSB3ZSBiaW5kIHRvIGl0IHdoZW4gdXNpbmcgVmlydHVhbFNjcm9sbC5cbiAgICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2Vha29yaWFraW4vaW9uaWMtc2VsZWN0YWJsZS9pc3N1ZXMvNzAuXG4gICAgbGV0IGdyb3VwczogYW55W10gPSBbe1xuICAgICAgaXRlbXM6IGl0ZW1zIHx8IFtdXG4gICAgfV07XG5cbiAgICBpZiAoaXRlbXMgJiYgaXRlbXMubGVuZ3RoKSB7XG4gICAgICBpZiAodGhpcy5faGFzR3JvdXBzKSB7XG4gICAgICAgIGdyb3VwcyA9IFtdO1xuXG4gICAgICAgIGl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgY29uc3QgZ3JvdXBWYWx1ZSA9IHRoaXMuX2dldFByb3BlcnR5VmFsdWUoaXRlbSwgdGhpcy5ncm91cFZhbHVlRmllbGQpLFxuICAgICAgICAgICAgZ3JvdXAgPSBncm91cHMuZmluZChfZ3JvdXAgPT4gX2dyb3VwLnZhbHVlID09PSBncm91cFZhbHVlKTtcblxuICAgICAgICAgIGlmIChncm91cCkge1xuICAgICAgICAgICAgZ3JvdXAuaXRlbXMucHVzaChpdGVtKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZ3JvdXBzLnB1c2goe1xuICAgICAgICAgICAgICB2YWx1ZTogZ3JvdXBWYWx1ZSxcbiAgICAgICAgICAgICAgdGV4dDogdGhpcy5fZ2V0UHJvcGVydHlWYWx1ZShpdGVtLCB0aGlzLmdyb3VwVGV4dEZpZWxkKSxcbiAgICAgICAgICAgICAgaXRlbXM6IFtpdGVtXVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLl9ncm91cHMgPSBncm91cHM7XG4gICAgdGhpcy5fZmlsdGVyZWRHcm91cHMgPSB0aGlzLl9ncm91cHM7XG4gICAgdGhpcy5faGFzRmlsdGVyZWRJdGVtcyA9ICF0aGlzLl9hcmVHcm91cHNFbXB0eSh0aGlzLl9maWx0ZXJlZEdyb3Vwcyk7XG4gIH1cblxuICBwcml2YXRlIF9nZXRQcm9wZXJ0eVZhbHVlKG9iamVjdDogYW55LCBwcm9wZXJ0eTogc3RyaW5nKTogYW55IHtcbiAgICBpZiAoIXByb3BlcnR5KSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvcGVydHkuc3BsaXQoJy4nKS5yZWR1Y2UoKF9vYmplY3QsIF9wcm9wZXJ0eSkgPT4ge1xuICAgICAgcmV0dXJuIF9vYmplY3QgPyBfb2JqZWN0W19wcm9wZXJ0eV0gOiBudWxsO1xuICAgIH0sIG9iamVjdCk7XG4gIH1cblxuICBwcml2YXRlIF9zZXRJb25JdGVtSGFzRm9jdXMoaGFzRm9jdXM6IGJvb2xlYW4pIHtcbiAgICBpZiAoIXRoaXMuaW9uSXRlbSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIEFwcGx5IGZvY3VzIENTUyBjbGFzcyBmb3IgcHJvcGVyIHN0eWx5aW5nIG9mIGlvbi1pdGVtL2lvbi1sYWJlbC5cbiAgICB0aGlzLl9zZXRJb25JdGVtQ3NzQ2xhc3MoJ2l0ZW0taGFzLWZvY3VzJywgaGFzRm9jdXMpO1xuICB9XG5cbiAgcHJpdmF0ZSBfc2V0SW9uSXRlbUhhc1ZhbHVlKCkge1xuICAgIGlmICghdGhpcy5pb25JdGVtKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gQXBwbHkgdmFsdWUgQ1NTIGNsYXNzIGZvciBwcm9wZXIgc3R5bHlpbmcgb2YgaW9uLWl0ZW0vaW9uLWxhYmVsLlxuICAgIHRoaXMuX3NldElvbkl0ZW1Dc3NDbGFzcygnaXRlbS1oYXMtdmFsdWUnLCB0aGlzLmhhc1ZhbHVlKCkpO1xuICB9XG5cbiAgcHJpdmF0ZSBfc2V0SGFzUGxhY2Vob2xkZXIoKSB7XG4gICAgdGhpcy5faGFzUGxhY2Vob2xkZXIgPSAhdGhpcy5oYXNWYWx1ZSgpICYmXG4gICAgICAoIXRoaXMuX2lzTnVsbE9yV2hpdGVTcGFjZSh0aGlzLnBsYWNlaG9sZGVyKSB8fCB0aGlzLnBsYWNlaG9sZGVyVGVtcGxhdGUpID9cbiAgICAgIHRydWUgOiBmYWxzZTtcbiAgfVxuXG4gIHByaXZhdGUgcHJvcGFnYXRlT25DaGFuZ2UgPSAoXzogYW55KSA9PiB7IH07XG4gIHByaXZhdGUgcHJvcGFnYXRlT25Ub3VjaGVkID0gKCkgPT4geyB9O1xuXG4gIHByaXZhdGUgX3NldElvbkl0ZW1Dc3NDbGFzcyhjc3NDbGFzczogc3RyaW5nLCBzaG91bGRBZGQ6IGJvb2xlYW4pIHtcbiAgICBpZiAoIXRoaXMuX2lvbkl0ZW1FbGVtZW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gQ2hhbmdlIHRvIFJlbmRlcmVyMlxuICAgIGlmIChzaG91bGRBZGQpIHtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2lvbkl0ZW1FbGVtZW50LCBjc3NDbGFzcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX2lvbkl0ZW1FbGVtZW50LCBjc3NDbGFzcyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfdG9nZ2xlQWRkSXRlbVRlbXBsYXRlKGlzVmlzaWJsZTogYm9vbGVhbikge1xuICAgIC8vIEl0IHNob3VsZCBiZSBwb3NzaWJsZSB0byBzaG93L2hpZGUgdGhlIHRlbXBsYXRlIHJlZ2FyZGxlc3NcbiAgICAvLyBjYW5BZGRJdGVtIG9yIGNhblNhdmVJdGVtIHBhcmFtZXRlcnMsIHNvIHdlIGNvdWxkIGltcGxlbWVudCBzb21lXG4gICAgLy8gY3VzdG9tIGJlaGF2aW9yLiBFLmcuIGFkZGluZyBpdGVtIHdoZW4gc2VhcmNoIGZhaWxzIHVzaW5nIG9uU2VhcmNoRmFpbCBldmVudC5cbiAgICBpZiAoIXRoaXMuYWRkSXRlbVRlbXBsYXRlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gVG8gbWFrZSBTYXZlSXRlbVRlbXBsYXRlIHZpc2libGUgd2UganVzdCBwb3NpdGlvbiBpdCBvdmVyIGxpc3QgdXNpbmcgQ1NTLlxuICAgIC8vIFdlIGRvbid0IGhpZGUgbGlzdCB3aXRoICpuZ0lmIG9yIFtoaWRkZW5dIHRvIHByZXZlbnQgaXRzIHNjcm9sbCBwb3NpdGlvbi5cbiAgICB0aGlzLl9pc0FkZEl0ZW1UZW1wbGF0ZVZpc2libGUgPSBpc1Zpc2libGU7XG4gICAgdGhpcy5faXNGb290ZXJWaXNpYmxlID0gIWlzVmlzaWJsZTtcbiAgfVxuXG4gIC8qIENvbnRyb2xWYWx1ZUFjY2Vzc29yICovXG4gIHdyaXRlVmFsdWUodmFsdWU6IGFueSkge1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UobWV0aG9kOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLnByb3BhZ2F0ZU9uQ2hhbmdlID0gbWV0aG9kO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQobWV0aG9kOiAoKSA9PiB2b2lkKSB7XG4gICAgdGhpcy5wcm9wYWdhdGVPblRvdWNoZWQgPSBtZXRob2Q7XG4gIH1cblxuICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmlzRW5hYmxlZCA9ICFpc0Rpc2FibGVkO1xuICB9XG4gIC8qIC5Db250cm9sVmFsdWVBY2Nlc3NvciAqL1xuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuX2lzSW9zID0gdGhpcy5fcGxhdGZvcm0uaXMoJ2lvcycpO1xuICAgIHRoaXMuX2lzTUQgPSAhdGhpcy5faXNJb3M7XG4gICAgdGhpcy5faGFzT2JqZWN0cyA9ICF0aGlzLl9pc051bGxPcldoaXRlU3BhY2UodGhpcy5pdGVtVmFsdWVGaWVsZCk7XG4gICAgLy8gR3JvdXBpbmcgaXMgc3VwcG9ydGVkIGZvciBvYmplY3RzIG9ubHkuXG4gICAgLy8gSW9uaWMgVmlydHVhbFNjcm9sbCBoYXMgaXQncyBvd24gaW1wbGVtZW50YXRpb24gb2YgZ3JvdXBpbmcuXG4gICAgdGhpcy5faGFzR3JvdXBzID0gQm9vbGVhbih0aGlzLl9oYXNPYmplY3RzICYmIHRoaXMuZ3JvdXBWYWx1ZUZpZWxkICYmICF0aGlzLmhhc1ZpcnR1YWxTY3JvbGwpO1xuXG4gICAgaWYgKHRoaXMuaW9uSXRlbSkge1xuICAgICAgdGhpcy5faW9uSXRlbUVsZW1lbnQgPSB0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuY2xvc2VzdCgnaW9uLWl0ZW0nKTtcbiAgICAgIHRoaXMuX3NldElvbkl0ZW1Dc3NDbGFzcygnaXRlbS1pbnRlcmFjdGl2ZScsIHRydWUpO1xuICAgICAgdGhpcy5fc2V0SW9uSXRlbUNzc0NsYXNzKCdpdGVtLWlvbmljLXNlbGVjdGFibGUnLCB0cnVlKTtcblxuICAgICAgaWYgKHRoaXMuX2lvbkl0ZW1FbGVtZW50KSB7XG4gICAgICAgIHRoaXMuX2lvbkxhYmVsRWxlbWVudCA9IHRoaXMuX2lvbkl0ZW1FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lvbi1sYWJlbCcpO1xuXG4gICAgICAgIGlmICh0aGlzLl9pb25MYWJlbEVsZW1lbnQpIHtcbiAgICAgICAgICB0aGlzLl9oYXNJb25MYWJlbCA9IHRydWU7XG4gICAgICAgICAgdGhpcy5faW9uTGFiZWxQb3NpdGlvbiA9IHRoaXMuX2lvbkxhYmVsRWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJykgfHwgJ2RlZmF1bHQnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5lbmFibGVJb25JdGVtKHRoaXMuaXNFbmFibGVkKTtcbiAgfVxuXG4gIG5nRG9DaGVjaygpIHtcbiAgICBjb25zdCBpdGVtc0NoYW5nZXMgPSB0aGlzLl9pdGVtc0RpZmZlci5kaWZmKHRoaXMuaXRlbXMpO1xuXG4gICAgaWYgKGl0ZW1zQ2hhbmdlcykge1xuICAgICAgdGhpcy5fc2V0SXRlbXModGhpcy5pdGVtcyk7XG4gICAgICB0aGlzLnZhbHVlID0gdGhpcy52YWx1ZTtcblxuICAgICAgdGhpcy5vbkl0ZW1zQ2hhbmdlLmVtaXQoe1xuICAgICAgICBjb21wb25lbnQ6IHRoaXNcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGl0ZW0uXG4gICAqICoqTm90ZSoqOiBJZiB5b3Ugd2FudCBhbiBpdGVtIHRvIGJlIGFkZGVkIHRvIHRoZSBvcmlnaW5hbCBhcnJheSBhcyB3ZWxsIHVzZSB0d28td2F5IGRhdGEgYmluZGluZyBzeW50YXggb24gYFsoaXRlbXMpXWAgZmllbGQuXG4gICAqIFNlZSBtb3JlIG9uIFtHaXRIdWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9lYWtvcmlha2luL2lvbmljLXNlbGVjdGFibGUvd2lraS9Eb2N1bWVudGF0aW9uI2FkZGl0ZW0pLlxuICAgKlxuICAgKiBAcGFyYW0gaXRlbSBJdGVtIHRvIGFkZC5cbiAgICogQHJldHVybnMgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gaXRlbSBoYXMgYmVlbiBhZGRlZC5cbiAgICogQG1lbWJlcm9mIElvbmljU2VsZWN0YWJsZUNvbXBvbmVudFxuICAgKi9cbiAgYWRkSXRlbShpdGVtOiBhbnkpOiBQcm9taXNlPGFueT4ge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gICAgLy8gQWRkaW5nIGl0ZW0gdHJpZ2dlcnMgb25JdGVtc0NoYW5nZS5cbiAgICAvLyBSZXR1cm4gYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiBvbkl0ZW1zQ2hhbmdlIGZpbmlzaGVzLlxuICAgIC8vIFdlIG5lZWQgYSBwcm9taXNlIG9yIHVzZXIgY291bGQgZG8gc29tZXRoaW5nIGFmdGVyIGl0ZW0gaGFzIGJlZW4gYWRkZWQsXG4gICAgLy8gZS5nLiB1c2Ugc2VhcmNoKCkgbWV0aG9kIHRvIGZpbmQgdGhlIGFkZGVkIGl0ZW0uXG4gICAgdGhpcy5pdGVtcy51bnNoaWZ0KGl0ZW0pO1xuXG4gICAgLy8gQ2xvc2UgYW55IHJ1bm5pbmcgc3Vic2NyaXB0aW9uLlxuICAgIGlmICh0aGlzLl9hZGRJdGVtT2JzZXJ2YWJsZSkge1xuICAgICAgdGhpcy5fYWRkSXRlbU9ic2VydmFibGUudW5zdWJzY3JpYmUoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgLy8gQ29tcGxldGUgY2FsbGJhY2sgaXNuJ3QgZmlyZWQgZm9yIHNvbWUgcmVhc29uLFxuICAgICAgLy8gc28gdW5zdWJzY3JpYmUgaW4gYm90aCBzdWNjZXNzIGFuZCBmYWlsIGNhc2VzLlxuICAgICAgc2VsZi5fYWRkSXRlbU9ic2VydmFibGUgPSBzZWxmLm9uSXRlbXNDaGFuZ2UuYXNPYnNlcnZhYmxlKCkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgc2VsZi5fYWRkSXRlbU9ic2VydmFibGUudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgfSwgKCkgPT4ge1xuICAgICAgICBzZWxmLl9hZGRJdGVtT2JzZXJ2YWJsZS51bnN1YnNjcmliZSgpO1xuICAgICAgICByZWplY3QoKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gKiBEZWxldGVzIGl0ZW0uXG4gKiAqKk5vdGUqKjogSWYgeW91IHdhbnQgYW4gaXRlbSB0byBiZSBkZWxldGVkIGZyb20gdGhlIG9yaWdpbmFsIGFycmF5IGFzIHdlbGwgdXNlIHR3by13YXkgZGF0YSBiaW5kaW5nIHN5bnRheCBvbiBgWyhpdGVtcyldYCBmaWVsZC5cbiAqIFNlZSBtb3JlIG9uIFtHaXRIdWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9lYWtvcmlha2luL2lvbmljLXNlbGVjdGFibGUvd2lraS9Eb2N1bWVudGF0aW9uI2RlbGV0ZWl0ZW0pLlxuICpcbiAqIEBwYXJhbSBpdGVtIEl0ZW0gdG8gZGVsZXRlLlxuICogQHJldHVybnMgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gaXRlbSBoYXMgYmVlbiBkZWxldGVkLlxuICogQG1lbWJlcm9mIElvbmljU2VsZWN0YWJsZUNvbXBvbmVudFxuICovXG4gIGRlbGV0ZUl0ZW0oaXRlbTogYW55KTogUHJvbWlzZTxhbnk+IHtcbiAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICBsZXQgaGFzVmFsdWVDaGFuZ2VkID0gZmFsc2U7XG5cbiAgICAvLyBSZW1vdmUgZGVsZXRlZCBpdGVtIGZyb20gc2VsZWN0ZWQgaXRlbXMuXG4gICAgaWYgKHRoaXMuX3NlbGVjdGVkSXRlbXMpIHtcbiAgICAgIHRoaXMuX3NlbGVjdGVkSXRlbXMgPSB0aGlzLl9zZWxlY3RlZEl0ZW1zLmZpbHRlcihfaXRlbSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRJdGVtVmFsdWUoaXRlbSkgIT09IHRoaXMuX2dldFN0b3JlZEl0ZW1WYWx1ZShfaXRlbSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBSZW1vdmUgZGVsZXRlZCBpdGVtIGZyb20gdmFsdWUuXG4gICAgaWYgKHRoaXMudmFsdWUpIHtcbiAgICAgIGlmICh0aGlzLmlzTXVsdGlwbGUpIHtcbiAgICAgICAgY29uc3QgdmFsdWVzID0gdGhpcy52YWx1ZS5maWx0ZXIodmFsdWUgPT4ge1xuICAgICAgICAgIHJldHVybiB2YWx1ZS5pZCAhPT0gaXRlbS5pZDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHZhbHVlcy5sZW5ndGggIT09IHRoaXMudmFsdWUubGVuZ3RoKSB7XG4gICAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlcztcbiAgICAgICAgICBoYXNWYWx1ZUNoYW5nZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoaXRlbSA9PT0gdGhpcy52YWx1ZSkge1xuICAgICAgICAgIHRoaXMudmFsdWUgPSBudWxsO1xuICAgICAgICAgIGhhc1ZhbHVlQ2hhbmdlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoaGFzVmFsdWVDaGFuZ2VkKSB7XG4gICAgICB0aGlzLl9lbWl0VmFsdWVDaGFuZ2UoKTtcbiAgICB9XG5cbiAgICAvLyBSZW1vdmUgZGVsZXRlZCBpdGVtIGZyb20gbGlzdC5cbiAgICBjb25zdCBpdGVtcyA9IHRoaXMuaXRlbXMuZmlsdGVyKF9pdGVtID0+IHtcbiAgICAgIHJldHVybiBfaXRlbS5pZCAhPT0gaXRlbS5pZDtcbiAgICB9KTtcblxuICAgIC8vIFJlZnJlc2ggaXRlbXMgb24gcGFyZW50IGNvbXBvbmVudC5cbiAgICB0aGlzLml0ZW1zQ2hhbmdlLmVtaXQoaXRlbXMpO1xuXG4gICAgLy8gUmVmcmVzaCBsaXN0LlxuICAgIHRoaXMuX3NldEl0ZW1zKGl0ZW1zKTtcblxuICAgIHRoaXMub25JdGVtc0NoYW5nZS5lbWl0KHtcbiAgICAgIGNvbXBvbmVudDogdGhpc1xuICAgIH0pO1xuXG4gICAgLy8gQ2xvc2UgYW55IHJ1bm5pbmcgc3Vic2NyaXB0aW9uLlxuICAgIGlmICh0aGlzLl9kZWxldGVJdGVtT2JzZXJ2YWJsZSkge1xuICAgICAgdGhpcy5fZGVsZXRlSXRlbU9ic2VydmFibGUudW5zdWJzY3JpYmUoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgLy8gQ29tcGxldGUgY2FsbGJhY2sgaXNuJ3QgZmlyZWQgZm9yIHNvbWUgcmVhc29uLFxuICAgICAgLy8gc28gdW5zdWJzY3JpYmUgaW4gYm90aCBzdWNjZXNzIGFuZCBmYWlsIGNhc2VzLlxuICAgICAgc2VsZi5fZGVsZXRlSXRlbU9ic2VydmFibGUgPSBzZWxmLm9uSXRlbXNDaGFuZ2UuYXNPYnNlcnZhYmxlKCkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgc2VsZi5fZGVsZXRlSXRlbU9ic2VydmFibGUudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgfSwgKCkgPT4ge1xuICAgICAgICBzZWxmLl9kZWxldGVJdGVtT2JzZXJ2YWJsZS51bnN1YnNjcmliZSgpO1xuICAgICAgICByZWplY3QoKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIERldGVybWluZXMgd2hldGhlciBhbnkgaXRlbSBoYXMgYmVlbiBzZWxlY3RlZC5cbiAgICogU2VlIG1vcmUgb24gW0dpdEh1Yl0oaHR0cHM6Ly9naXRodWIuY29tL2Vha29yaWFraW4vaW9uaWMtc2VsZWN0YWJsZS93aWtpL0RvY3VtZW50YXRpb24jaGFzdmFsdWUpLlxuICAgKlxuICAgKiBAcmV0dXJucyBBIGJvb2xlYW4gZGV0ZXJtaW5pbmcgd2hldGhlciBhbnkgaXRlbSBoYXMgYmVlbiBzZWxlY3RlZC5cbiAgICogQG1lbWJlcm9mIElvbmljU2VsZWN0YWJsZUNvbXBvbmVudFxuICAgKi9cbiAgaGFzVmFsdWUoKTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMuaXNNdWx0aXBsZSkge1xuICAgICAgcmV0dXJuIHRoaXMuX3ZhbHVlSXRlbXMubGVuZ3RoICE9PSAwO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5fdmFsdWVJdGVtcy5sZW5ndGggIT09IDAgJiYgIXRoaXMuX2lzTnVsbE9yV2hpdGVTcGFjZSh0aGlzLl92YWx1ZUl0ZW1zWzBdKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogT3BlbnMgTW9kYWwuXG4gICAqIFNlZSBtb3JlIG9uIFtHaXRIdWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9lYWtvcmlha2luL2lvbmljLXNlbGVjdGFibGUvd2lraS9Eb2N1bWVudGF0aW9uI29wZW4pLlxuICAgKlxuICAgKiBAcmV0dXJucyBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiBNb2RhbCBoYXMgYmVlbiBvcGVuZWQuXG4gICAqIEBtZW1iZXJvZiBJb25pY1NlbGVjdGFibGVDb21wb25lbnRcbiAgICovXG4gIG9wZW4oKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgaWYgKCFzZWxmLl9pc0VuYWJsZWQgfHwgc2VsZi5faXNPcGVuZWQpIHtcbiAgICAgICAgcmVqZWN0KCdJb25pY1NlbGVjdGFibGUgaXMgZGlzYWJsZWQgb3IgYWxyZWFkeSBvcGVuZWQuJyk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgc2VsZi5fZmlsdGVySXRlbXMoKTtcbiAgICAgIHNlbGYuX2lzT3BlbmVkID0gdHJ1ZTtcblxuICAgICAgY29uc3QgbW9kYWxPcHRpb25zOiBNb2RhbE9wdGlvbnMgPSB7XG4gICAgICAgIGNvbXBvbmVudDogSW9uaWNTZWxlY3RhYmxlTW9kYWxDb21wb25lbnQsXG4gICAgICAgIGNvbXBvbmVudFByb3BzOiB7IHNlbGVjdENvbXBvbmVudDogc2VsZiB9LFxuICAgICAgICBiYWNrZHJvcERpc21pc3M6IHNlbGYuX3Nob3VsZEJhY2tkcm9wQ2xvc2VcbiAgICAgIH07XG5cbiAgICAgIGlmIChzZWxmLm1vZGFsQ3NzQ2xhc3MpIHtcbiAgICAgICAgbW9kYWxPcHRpb25zLmNzc0NsYXNzID0gc2VsZi5tb2RhbENzc0NsYXNzO1xuICAgICAgfVxuXG4gICAgICBpZiAoc2VsZi5tb2RhbEVudGVyQW5pbWF0aW9uKSB7XG4gICAgICAgIG1vZGFsT3B0aW9ucy5lbnRlckFuaW1hdGlvbiA9IHNlbGYubW9kYWxFbnRlckFuaW1hdGlvbjtcbiAgICAgIH1cblxuICAgICAgaWYgKHNlbGYubW9kYWxMZWF2ZUFuaW1hdGlvbikge1xuICAgICAgICBtb2RhbE9wdGlvbnMubGVhdmVBbmltYXRpb24gPSBzZWxmLm1vZGFsTGVhdmVBbmltYXRpb247XG4gICAgICB9XG5cbiAgICAgIHNlbGYuX21vZGFsQ29udHJvbGxlci5jcmVhdGUobW9kYWxPcHRpb25zKS50aGVuKG1vZGFsID0+IHtcbiAgICAgICAgc2VsZi5fbW9kYWwgPSBtb2RhbDtcbiAgICAgICAgbW9kYWwucHJlc2VudCgpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIC8vIFNldCBmb2N1cyBhZnRlciBNb2RhbCBoYXMgb3BlbmVkIHRvIGF2b2lkIGZsaWNrZXJpbmcgb2YgZm9jdXMgaGlnaGxpZ2h0aW5nXG4gICAgICAgICAgLy8gYmVmb3JlIE1vZGFsIG9wZW5pbmcuXG4gICAgICAgICAgc2VsZi5fc2V0SW9uSXRlbUhhc0ZvY3VzKHRydWUpO1xuICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbW9kYWwub25XaWxsRGlzbWlzcygpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIHNlbGYuX3NldElvbkl0ZW1IYXNGb2N1cyhmYWxzZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG1vZGFsLm9uRGlkRGlzbWlzcygpLnRoZW4oZXZlbnQgPT4ge1xuICAgICAgICAgIHNlbGYuX2lzT3BlbmVkID0gZmFsc2U7XG4gICAgICAgICAgc2VsZi5faXRlbXNUb0NvbmZpcm0gPSBbXTtcblxuICAgICAgICAgIC8vIENsb3NlZCBieSBjbGlja2luZyBvbiBiYWNrZHJvcCBvdXRzaWRlIG1vZGFsLlxuICAgICAgICAgIGlmIChldmVudC5yb2xlID09PSAnYmFja2Ryb3AnKSB7XG4gICAgICAgICAgICBzZWxmLm9uQ2xvc2UuZW1pdCh7XG4gICAgICAgICAgICAgIGNvbXBvbmVudDogc2VsZlxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENsb3NlcyBNb2RhbC5cbiAgICogU2VlIG1vcmUgb24gW0dpdEh1Yl0oaHR0cHM6Ly9naXRodWIuY29tL2Vha29yaWFraW4vaW9uaWMtc2VsZWN0YWJsZS93aWtpL0RvY3VtZW50YXRpb24jY2xvc2UpLlxuICAgKlxuICAgKiBAcmV0dXJucyBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiBNb2RhbCBoYXMgYmVlbiBjbG9zZWQuXG4gICAqIEBtZW1iZXJvZiBJb25pY1NlbGVjdGFibGVDb21wb25lbnRcbiAgICovXG4gIGNsb3NlKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIGlmICghc2VsZi5faXNFbmFibGVkIHx8ICFzZWxmLl9pc09wZW5lZCkge1xuICAgICAgICByZWplY3QoJ0lvbmljU2VsZWN0YWJsZSBpcyBkaXNhYmxlZCBvciBhbHJlYWR5IGNsb3NlZC4nKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBzZWxmLnByb3BhZ2F0ZU9uVG91Y2hlZCgpO1xuICAgICAgc2VsZi5faXNPcGVuZWQgPSBmYWxzZTtcbiAgICAgIHNlbGYuX2l0ZW1Ub0FkZCA9IG51bGw7XG4gICAgICBzZWxmLl9tb2RhbC5kaXNtaXNzKCkudGhlbigoKSA9PiB7XG4gICAgICAgIHNlbGYuX3NldElvbkl0ZW1IYXNGb2N1cyhmYWxzZSk7XG4gICAgICAgIHNlbGYuaGlkZUFkZEl0ZW1UZW1wbGF0ZSgpO1xuICAgICAgICByZXNvbHZlKCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhcnMgdmFsdWUuXG4gICAqIFNlZSBtb3JlIG9uIFtHaXRIdWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9lYWtvcmlha2luL2lvbmljLXNlbGVjdGFibGUvd2lraS9Eb2N1bWVudGF0aW9uI2NsZWFyKS5cbiAgICpcbiAgICogQG1lbWJlcm9mIElvbmljU2VsZWN0YWJsZUNvbXBvbmVudFxuICAgKi9cbiAgY2xlYXIoKSB7XG4gICAgdGhpcy52YWx1ZSA9IHRoaXMuaXNNdWx0aXBsZSA/IFtdIDogbnVsbDtcbiAgICB0aGlzLl9pdGVtc1RvQ29uZmlybSA9IFtdO1xuICAgIHRoaXMucHJvcGFnYXRlT25DaGFuZ2UodGhpcy52YWx1ZSk7XG4gIH1cblxuICAvKipcbiAgICogQ29uZmlybXMgc2VsZWN0ZWQgaXRlbXMgYnkgdXBkYXRpbmcgdmFsdWUuXG4gICAqIFNlZSBtb3JlIG9uIFtHaXRIdWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9lYWtvcmlha2luL2lvbmljLXNlbGVjdGFibGUvd2lraS9Eb2N1bWVudGF0aW9uI2NvbmZpcm0pLlxuICAgKlxuICAgKiBAbWVtYmVyb2YgSW9uaWNTZWxlY3RhYmxlQ29tcG9uZW50XG4gICAqL1xuICBjb25maXJtKCkge1xuICAgIGlmICh0aGlzLmlzTXVsdGlwbGUpIHtcbiAgICAgIHRoaXMuX2RvU2VsZWN0KHRoaXMuX3NlbGVjdGVkSXRlbXMpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5oYXNDb25maXJtQnV0dG9uIHx8IHRoaXMuZm9vdGVyVGVtcGxhdGUpIHtcbiAgICAgIHRoaXMuX2RvU2VsZWN0KHRoaXMuX3NlbGVjdGVkSXRlbXNbMF0gfHwgbnVsbCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNlbGVjdHMgb3IgZGVzZWxlY3RzIGFsbCBvciBzcGVjaWZpYyBpdGVtcy5cbiAgICogU2VlIG1vcmUgb24gW0dpdEh1Yl0oaHR0cHM6Ly9naXRodWIuY29tL2Vha29yaWFraW4vaW9uaWMtc2VsZWN0YWJsZS93aWtpL0RvY3VtZW50YXRpb24jdG9nZ2xlaXRlbXMpLlxuICAgKlxuICAgKiBAcGFyYW0gaXNTZWxlY3QgRGV0ZXJtaW5lcyB3aGV0aGVyIHRvIHNlbGVjdCBvciBkZXNlbGVjdCBpdGVtcy5cbiAgICogQHBhcmFtIFtpdGVtc10gSXRlbXMgdG8gdG9nZ2xlLiBJZiBpdGVtcyBhcmUgbm90IHNldCBhbGwgaXRlbXMgd2lsbCBiZSB0b2dnbGVkLlxuICAgKiBAbWVtYmVyb2YgSW9uaWNTZWxlY3RhYmxlQ29tcG9uZW50XG4gICAqL1xuICB0b2dnbGVJdGVtcyhpc1NlbGVjdDogYm9vbGVhbiwgaXRlbXM/OiBhbnlbXSkge1xuICAgIGlmIChpc1NlbGVjdCkge1xuICAgICAgY29uc3QgaGFzSXRlbXMgPSBpdGVtcyAmJiBpdGVtcy5sZW5ndGg7XG4gICAgICBsZXQgaXRlbXNUb1RvZ2dsZSA9IHRoaXMuX2dyb3Vwcy5yZWR1Y2UoKGFsbEl0ZW1zLCBncm91cCkgPT4ge1xuICAgICAgICByZXR1cm4gYWxsSXRlbXMuY29uY2F0KGdyb3VwLml0ZW1zKTtcbiAgICAgIH0sIFtdKTtcblxuICAgICAgLy8gRG9uJ3QgYWxsb3cgdG8gc2VsZWN0IGFsbCBpdGVtcyBpbiBzaW5nbGUgbW9kZS5cbiAgICAgIGlmICghdGhpcy5pc011bHRpcGxlICYmICFoYXNJdGVtcykge1xuICAgICAgICBpdGVtc1RvVG9nZ2xlID0gW107XG4gICAgICB9XG5cbiAgICAgIC8vIFRvZ2dsZSBzcGVjaWZpYyBpdGVtcy5cbiAgICAgIGlmIChoYXNJdGVtcykge1xuICAgICAgICBpdGVtc1RvVG9nZ2xlID0gaXRlbXNUb1RvZ2dsZS5maWx0ZXIoaXRlbVRvVG9nZ2xlID0+IHtcbiAgICAgICAgICByZXR1cm4gaXRlbXMuZmluZChpdGVtID0+IHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9nZXRJdGVtVmFsdWUoaXRlbVRvVG9nZ2xlKSA9PT0gdGhpcy5fZ2V0SXRlbVZhbHVlKGl0ZW0pO1xuICAgICAgICAgIH0pICE9PSB1bmRlZmluZWQ7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIFRha2UgdGhlIGZpcnN0IGl0ZW0gZm9yIHNpbmdsZSBtb2RlLlxuICAgICAgICBpZiAoIXRoaXMuaXNNdWx0aXBsZSkge1xuICAgICAgICAgIGl0ZW1zVG9Ub2dnbGUuc3BsaWNlKDAsIDEpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGl0ZW1zVG9Ub2dnbGUuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgdGhpcy5fYWRkU2VsZWN0ZWRJdGVtKGl0ZW0pO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3NlbGVjdGVkSXRlbXMgPSBbXTtcbiAgICB9XG5cbiAgICB0aGlzLl9zZXRJdGVtc1RvQ29uZmlybSh0aGlzLl9zZWxlY3RlZEl0ZW1zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTY3JvbGxzIHRvIHRoZSB0b3Agb2YgTW9kYWwgY29udGVudC5cbiAgICogU2VlIG1vcmUgb24gW0dpdEh1Yl0oaHR0cHM6Ly9naXRodWIuY29tL2Vha29yaWFraW4vaW9uaWMtc2VsZWN0YWJsZS93aWtpL0RvY3VtZW50YXRpb24jc2Nyb2xsdG90b3ApLlxuICAgKlxuICAgKiBAcmV0dXJucyBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiBzY3JvbGwgaGFzIGJlZW4gY29tcGxldGVkLlxuICAgKiBAbWVtYmVyb2YgSW9uaWNTZWxlY3RhYmxlQ29tcG9uZW50XG4gICAqL1xuICBzY3JvbGxUb1RvcCgpOiBQcm9taXNlPGFueT4ge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIGlmICghc2VsZi5faXNPcGVuZWQpIHtcbiAgICAgICAgcmVqZWN0KCdJb25pY1NlbGVjdGFibGUgY29udGVudCBjYW5ub3QgYmUgc2Nyb2xsZWQuJyk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgc2VsZi5fbW9kYWxDb21wb25lbnQuX2NvbnRlbnQuc2Nyb2xsVG9Ub3AoKS50aGVuKCgpID0+IHtcbiAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogU2Nyb2xscyB0byB0aGUgYm90dG9tIG9mIE1vZGFsIGNvbnRlbnQuXG4gICAqIFNlZSBtb3JlIG9uIFtHaXRIdWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9lYWtvcmlha2luL2lvbmljLXNlbGVjdGFibGUvd2lraS9Eb2N1bWVudGF0aW9uI3Njcm9sbHRvYm90dG9tKS5cbiAgICpcbiAgICogQHJldHVybnMgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gc2Nyb2xsIGhhcyBiZWVuIGNvbXBsZXRlZC5cbiAgICogQG1lbWJlcm9mIElvbmljU2VsZWN0YWJsZUNvbXBvbmVudFxuICAgKi9cbiAgc2Nyb2xsVG9Cb3R0b20oKTogUHJvbWlzZTxhbnk+IHtcbiAgICBjb25zdCBzZWxmID0gdGhpcztcblxuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICBpZiAoIXNlbGYuX2lzT3BlbmVkKSB7XG4gICAgICAgIHJlamVjdCgnSW9uaWNTZWxlY3RhYmxlIGNvbnRlbnQgY2Fubm90IGJlIHNjcm9sbGVkLicpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHNlbGYuX21vZGFsQ29tcG9uZW50Ll9jb250ZW50LnNjcm9sbFRvQm90dG9tKCkudGhlbigoKSA9PiB7XG4gICAgICAgIHJlc29sdmUoKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFN0YXJ0cyBzZWFyY2ggcHJvY2VzcyBieSBzaG93aW5nIExvYWRpbmcgc3Bpbm5lci5cbiAgICogVXNlIGl0IHRvZ2V0aGVyIHdpdGggYG9uU2VhcmNoYCBldmVudCB0byBpbmRpY2F0ZSBzZWFyY2ggc3RhcnQuXG4gICAqIFNlZSBtb3JlIG9uIFtHaXRIdWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9lYWtvcmlha2luL2lvbmljLXNlbGVjdGFibGUvd2lraS9Eb2N1bWVudGF0aW9uI3N0YXJ0c2VhcmNoKS5cbiAgICpcbiAgICogQG1lbWJlcm9mIElvbmljU2VsZWN0YWJsZUNvbXBvbmVudFxuICAgKi9cbiAgc3RhcnRTZWFyY2goKSB7XG4gICAgaWYgKCF0aGlzLl9pc0VuYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnNob3dMb2FkaW5nKCk7XG4gIH1cblxuICAvKipcbiAgICogRW5kcyBzZWFyY2ggcHJvY2VzcyBieSBoaWRpbmcgTG9hZGluZyBzcGlubmVyIGFuZCByZWZyZXNoaW5nIGl0ZW1zLlxuICAgKiBVc2UgaXQgdG9nZXRoZXIgd2l0aCBgb25TZWFyY2hgIGV2ZW50IHRvIGluZGljYXRlIHNlYXJjaCBlbmQuXG4gICAqIFNlZSBtb3JlIG9uIFtHaXRIdWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9lYWtvcmlha2luL2lvbmljLXNlbGVjdGFibGUvd2lraS9Eb2N1bWVudGF0aW9uI2VuZHNlYXJjaCkuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBJb25pY1NlbGVjdGFibGVDb21wb25lbnRcbiAgICovXG4gIGVuZFNlYXJjaCgpIHtcbiAgICBpZiAoIXRoaXMuX2lzRW5hYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuaGlkZUxvYWRpbmcoKTtcblxuICAgIC8vIFdoZW4gaW5zaWRlIElvbmljIE1vZGFsIGFuZCBvblNlYXJjaCBldmVudCBpcyB1c2VkLFxuICAgIC8vIG5nRG9DaGVjaygpIGRvZXNuJ3Qgd29yayBhcyBfaXRlbXNEaWZmZXIgZmFpbHMgdG8gZGV0ZWN0IGNoYW5nZXMuXG4gICAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9lYWtvcmlha2luL2lvbmljLXNlbGVjdGFibGUvaXNzdWVzLzQ0LlxuICAgIC8vIFJlZnJlc2ggaXRlbXMgbWFudWFsbHkuXG4gICAgdGhpcy5fc2V0SXRlbXModGhpcy5pdGVtcyk7XG4gICAgdGhpcy5fZW1pdE9uU2VhcmNoU3VjY2Vzc09yRmFpbCh0aGlzLl9oYXNGaWx0ZXJlZEl0ZW1zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFbmFibGVzIGluZmluaXRlIHNjcm9sbC5cbiAgICogU2VlIG1vcmUgb24gW0dpdEh1Yl0oaHR0cHM6Ly9naXRodWIuY29tL2Vha29yaWFraW4vaW9uaWMtc2VsZWN0YWJsZS93aWtpL0RvY3VtZW50YXRpb24jZW5hYmxlaW5maW5pdGVzY3JvbGwpLlxuICAgKlxuICAgKiBAbWVtYmVyb2YgSW9uaWNTZWxlY3RhYmxlQ29tcG9uZW50XG4gICAqL1xuICBlbmFibGVJbmZpbml0ZVNjcm9sbCgpIHtcbiAgICBpZiAoIXRoaXMuX2hhc0luZmluaXRlU2Nyb2xsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fbW9kYWxDb21wb25lbnQuX2luZmluaXRlU2Nyb2xsLmRpc2FibGVkID0gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogRGlzYWJsZXMgaW5maW5pdGUgc2Nyb2xsLlxuICAgKiBTZWUgbW9yZSBvbiBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vZWFrb3JpYWtpbi9pb25pYy1zZWxlY3RhYmxlL3dpa2kvRG9jdW1lbnRhdGlvbiNkaXNhYmxlaW5maW5pdGVzY3JvbGwpLlxuICAgKlxuICAgKiBAbWVtYmVyb2YgSW9uaWNTZWxlY3RhYmxlQ29tcG9uZW50XG4gICAqL1xuICBkaXNhYmxlSW5maW5pdGVTY3JvbGwoKSB7XG4gICAgaWYgKCF0aGlzLl9oYXNJbmZpbml0ZVNjcm9sbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX21vZGFsQ29tcG9uZW50Ll9pbmZpbml0ZVNjcm9sbC5kaXNhYmxlZCA9IHRydWU7XG4gIH1cblxuICAvKipcbiAgICogRW5kcyBpbmZpbml0ZSBzY3JvbGwuXG4gICAqIFNlZSBtb3JlIG9uIFtHaXRIdWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9lYWtvcmlha2luL2lvbmljLXNlbGVjdGFibGUvd2lraS9Eb2N1bWVudGF0aW9uI2VuZGluZmluaXRlc2Nyb2xsKS5cbiAgICpcbiAgICogQG1lbWJlcm9mIElvbmljU2VsZWN0YWJsZUNvbXBvbmVudFxuICAgKi9cbiAgZW5kSW5maW5pdGVTY3JvbGwoKSB7XG4gICAgaWYgKCF0aGlzLl9oYXNJbmZpbml0ZVNjcm9sbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX21vZGFsQ29tcG9uZW50Ll9pbmZpbml0ZVNjcm9sbC5jb21wbGV0ZSgpO1xuICAgIHRoaXMuX3NldEl0ZW1zKHRoaXMuaXRlbXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRyaWdnZXJzIHNlYXJjaCBvZiBpdGVtcy5cbiAgICogKipOb3RlKio6IGBjYW5TZWFyY2hgIGhhcyB0byBiZSBlbmFibGVkLlxuICAgKiBTZWUgbW9yZSBvbiBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vZWFrb3JpYWtpbi9pb25pYy1zZWxlY3RhYmxlL3dpa2kvRG9jdW1lbnRhdGlvbiNzZWFyY2gpLlxuICAgKlxuICAgKiBAcGFyYW0gdGV4dCBUZXh0IHRvIHNlYXJjaCBpdGVtcyBieS5cbiAgICogQG1lbWJlcm9mIElvbmljU2VsZWN0YWJsZUNvbXBvbmVudFxuICAgKi9cbiAgc2VhcmNoKHRleHQ6IHN0cmluZykge1xuICAgIGlmICghdGhpcy5faXNFbmFibGVkIHx8ICF0aGlzLl9pc09wZW5lZCB8fCAhdGhpcy5jYW5TZWFyY2gpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9zZWFyY2hUZXh0ID0gdGV4dDtcbiAgICB0aGlzLl9zZXRIYXNTZWFyY2hUZXh0KCk7XG4gICAgdGhpcy5fZmlsdGVySXRlbXMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTaG93cyBMb2FkaW5nIHNwaW5uZXIuXG4gICAqIFNlZSBtb3JlIG9uIFtHaXRIdWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9lYWtvcmlha2luL2lvbmljLXNlbGVjdGFibGUvd2lraS9Eb2N1bWVudGF0aW9uI3Nob3dsb2FkaW5nKS5cbiAgICpcbiAgICogQG1lbWJlcm9mIElvbmljU2VsZWN0YWJsZUNvbXBvbmVudFxuICAgKi9cbiAgc2hvd0xvYWRpbmcoKSB7XG4gICAgaWYgKCF0aGlzLl9pc0VuYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9pc1NlYXJjaGluZyA9IHRydWU7XG4gIH1cblxuICAvKipcbiAgICogSGlkZXMgTG9hZGluZyBzcGlubmVyLlxuICAgKiBTZWUgbW9yZSBvbiBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vZWFrb3JpYWtpbi9pb25pYy1zZWxlY3RhYmxlL3dpa2kvRG9jdW1lbnRhdGlvbiNoaWRlbG9hZGluZykuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBJb25pY1NlbGVjdGFibGVDb21wb25lbnRcbiAgICovXG4gIGhpZGVMb2FkaW5nKCkge1xuICAgIGlmICghdGhpcy5faXNFbmFibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5faXNTZWFyY2hpbmcgPSBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTaG93cyBgaW9uaWNTZWxlY3RhYmxlQWRkSXRlbVRlbXBsYXRlYC5cbiAgICogU2VlIG1vcmUgb24gW0dpdEh1Yl0oaHR0cHM6Ly9naXRodWIuY29tL2Vha29yaWFraW4vaW9uaWMtc2VsZWN0YWJsZS93aWtpL0RvY3VtZW50YXRpb24jc2hvd2FkZGl0ZW10ZW1wbGF0ZSkuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBJb25pY1NlbGVjdGFibGVDb21wb25lbnRcbiAgICovXG4gIHNob3dBZGRJdGVtVGVtcGxhdGUoKSB7XG4gICAgdGhpcy5fdG9nZ2xlQWRkSXRlbVRlbXBsYXRlKHRydWUpO1xuXG4gICAgLy8gUG9zaXRpb24gdGhlIHRlbXBsYXRlIG9ubHkgd2hlbiBpdCBzaG91cyB1cC5cbiAgICB0aGlzLl9wb3NpdGlvbkFkZEl0ZW1UZW1wbGF0ZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEhpZGVzIGBpb25pY1NlbGVjdGFibGVBZGRJdGVtVGVtcGxhdGVgLlxuICAgKiBTZWUgbW9yZSBvbiBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vZWFrb3JpYWtpbi9pb25pYy1zZWxlY3RhYmxlL3dpa2kvRG9jdW1lbnRhdGlvbiNoaWRlYWRkaXRlbXRlbXBsYXRlKS5cbiAgICpcbiAgICogQG1lbWJlcm9mIElvbmljU2VsZWN0YWJsZUNvbXBvbmVudFxuICAgKi9cbiAgaGlkZUFkZEl0ZW1UZW1wbGF0ZSgpIHtcbiAgICAvLyBDbGVhbiBpdGVtIHRvIGFkZCBhcyBpdCdzIG5vIGxvbmdlciBuZWVkZWQgb25jZSBBZGQgSXRlbSBNb2RhbCBoYXMgYmVlbiBjbG9zZWQuXG4gICAgdGhpcy5faXRlbVRvQWRkID0gbnVsbDtcbiAgICB0aGlzLl90b2dnbGVBZGRJdGVtVGVtcGxhdGUoZmFsc2UpO1xuICB9XG59XG4iXX0=

/***/ }),

/***/ "./node_modules/ionic-selectable/esm5/src/app/components/ionic-selectable/ionic-selectable.module.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/ionic-selectable/esm5/src/app/components/ionic-selectable/ionic-selectable.module.js ***!
  \***********************************************************************************************************/
/*! exports provided: IonicSelectableAddItemTemplateDirective, IonicSelectableCloseButtonTemplateDirective, IonicSelectableFooterTemplateDirective, IonicSelectableGroupEndTemplateDirective, IonicSelectableGroupTemplateDirective, IonicSelectableHeaderTemplateDirective, IonicSelectableItemEndTemplateDirective, IonicSelectableItemIconTemplateDirective, IonicSelectableItemTemplateDirective, IonicSelectableMessageTemplateDirective, IonicSelectableModalComponent, IonicSelectablePlaceholderTemplateDirective, IonicSelectableSearchFailTemplateDirective, IonicSelectableTitleTemplateDirective, IonicSelectableValueTemplateDirective, IonicSelectableIconTemplateDirective, IonicSelectableComponent, IonicSelectableModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonicSelectableModule", function() { return IonicSelectableModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _ionic_selectable_add_item_template_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ionic-selectable-add-item-template.directive */ "./node_modules/ionic-selectable/esm5/src/app/components/ionic-selectable/ionic-selectable-add-item-template.directive.js");
/* harmony import */ var _ionic_selectable_close_button_template_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ionic-selectable-close-button-template.directive */ "./node_modules/ionic-selectable/esm5/src/app/components/ionic-selectable/ionic-selectable-close-button-template.directive.js");
/* harmony import */ var _ionic_selectable_footer_template_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ionic-selectable-footer-template.directive */ "./node_modules/ionic-selectable/esm5/src/app/components/ionic-selectable/ionic-selectable-footer-template.directive.js");
/* harmony import */ var _ionic_selectable_group_end_template_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ionic-selectable-group-end-template.directive */ "./node_modules/ionic-selectable/esm5/src/app/components/ionic-selectable/ionic-selectable-group-end-template.directive.js");
/* harmony import */ var _ionic_selectable_group_template_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ionic-selectable-group-template.directive */ "./node_modules/ionic-selectable/esm5/src/app/components/ionic-selectable/ionic-selectable-group-template.directive.js");
/* harmony import */ var _ionic_selectable_header_template_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ionic-selectable-header-template.directive */ "./node_modules/ionic-selectable/esm5/src/app/components/ionic-selectable/ionic-selectable-header-template.directive.js");
/* harmony import */ var _ionic_selectable_item_end_template_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ionic-selectable-item-end-template.directive */ "./node_modules/ionic-selectable/esm5/src/app/components/ionic-selectable/ionic-selectable-item-end-template.directive.js");
/* harmony import */ var _ionic_selectable_item_icon_template_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ionic-selectable-item-icon-template.directive */ "./node_modules/ionic-selectable/esm5/src/app/components/ionic-selectable/ionic-selectable-item-icon-template.directive.js");
/* harmony import */ var _ionic_selectable_item_template_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ionic-selectable-item-template.directive */ "./node_modules/ionic-selectable/esm5/src/app/components/ionic-selectable/ionic-selectable-item-template.directive.js");
/* harmony import */ var _ionic_selectable_message_template_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./ionic-selectable-message-template.directive */ "./node_modules/ionic-selectable/esm5/src/app/components/ionic-selectable/ionic-selectable-message-template.directive.js");
/* harmony import */ var _ionic_selectable_modal_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./ionic-selectable-modal.component */ "./node_modules/ionic-selectable/esm5/src/app/components/ionic-selectable/ionic-selectable-modal.component.js");
/* harmony import */ var _ionic_selectable_placeholder_template_directive__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./ionic-selectable-placeholder-template.directive */ "./node_modules/ionic-selectable/esm5/src/app/components/ionic-selectable/ionic-selectable-placeholder-template.directive.js");
/* harmony import */ var _ionic_selectable_search_fail_template_directive__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./ionic-selectable-search-fail-template.directive */ "./node_modules/ionic-selectable/esm5/src/app/components/ionic-selectable/ionic-selectable-search-fail-template.directive.js");
/* harmony import */ var _ionic_selectable_title_template_directive__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./ionic-selectable-title-template.directive */ "./node_modules/ionic-selectable/esm5/src/app/components/ionic-selectable/ionic-selectable-title-template.directive.js");
/* harmony import */ var _ionic_selectable_value_template_directive__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./ionic-selectable-value-template.directive */ "./node_modules/ionic-selectable/esm5/src/app/components/ionic-selectable/ionic-selectable-value-template.directive.js");
/* harmony import */ var _ionic_selectable_icon_template_directive__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./ionic-selectable-icon-template.directive */ "./node_modules/ionic-selectable/esm5/src/app/components/ionic-selectable/ionic-selectable-icon-template.directive.js");
/* harmony import */ var _ionic_selectable_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./ionic-selectable.component */ "./node_modules/ionic-selectable/esm5/src/app/components/ionic-selectable/ionic-selectable.component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IonicSelectableAddItemTemplateDirective", function() { return _ionic_selectable_add_item_template_directive__WEBPACK_IMPORTED_MODULE_5__["IonicSelectableAddItemTemplateDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IonicSelectableCloseButtonTemplateDirective", function() { return _ionic_selectable_close_button_template_directive__WEBPACK_IMPORTED_MODULE_6__["IonicSelectableCloseButtonTemplateDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IonicSelectableFooterTemplateDirective", function() { return _ionic_selectable_footer_template_directive__WEBPACK_IMPORTED_MODULE_7__["IonicSelectableFooterTemplateDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IonicSelectableGroupEndTemplateDirective", function() { return _ionic_selectable_group_end_template_directive__WEBPACK_IMPORTED_MODULE_8__["IonicSelectableGroupEndTemplateDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IonicSelectableGroupTemplateDirective", function() { return _ionic_selectable_group_template_directive__WEBPACK_IMPORTED_MODULE_9__["IonicSelectableGroupTemplateDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IonicSelectableHeaderTemplateDirective", function() { return _ionic_selectable_header_template_directive__WEBPACK_IMPORTED_MODULE_10__["IonicSelectableHeaderTemplateDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IonicSelectableItemEndTemplateDirective", function() { return _ionic_selectable_item_end_template_directive__WEBPACK_IMPORTED_MODULE_11__["IonicSelectableItemEndTemplateDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IonicSelectableItemIconTemplateDirective", function() { return _ionic_selectable_item_icon_template_directive__WEBPACK_IMPORTED_MODULE_12__["IonicSelectableItemIconTemplateDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IonicSelectableItemTemplateDirective", function() { return _ionic_selectable_item_template_directive__WEBPACK_IMPORTED_MODULE_13__["IonicSelectableItemTemplateDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IonicSelectableMessageTemplateDirective", function() { return _ionic_selectable_message_template_directive__WEBPACK_IMPORTED_MODULE_14__["IonicSelectableMessageTemplateDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IonicSelectableModalComponent", function() { return _ionic_selectable_modal_component__WEBPACK_IMPORTED_MODULE_15__["IonicSelectableModalComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IonicSelectablePlaceholderTemplateDirective", function() { return _ionic_selectable_placeholder_template_directive__WEBPACK_IMPORTED_MODULE_16__["IonicSelectablePlaceholderTemplateDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IonicSelectableSearchFailTemplateDirective", function() { return _ionic_selectable_search_fail_template_directive__WEBPACK_IMPORTED_MODULE_17__["IonicSelectableSearchFailTemplateDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IonicSelectableTitleTemplateDirective", function() { return _ionic_selectable_title_template_directive__WEBPACK_IMPORTED_MODULE_18__["IonicSelectableTitleTemplateDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IonicSelectableValueTemplateDirective", function() { return _ionic_selectable_value_template_directive__WEBPACK_IMPORTED_MODULE_19__["IonicSelectableValueTemplateDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IonicSelectableIconTemplateDirective", function() { return _ionic_selectable_icon_template_directive__WEBPACK_IMPORTED_MODULE_20__["IonicSelectableIconTemplateDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IonicSelectableComponent", function() { return _ionic_selectable_component__WEBPACK_IMPORTED_MODULE_21__["IonicSelectableComponent"]; });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */







































/** @type {?} */
var components = [_ionic_selectable_component__WEBPACK_IMPORTED_MODULE_21__["IonicSelectableComponent"], _ionic_selectable_modal_component__WEBPACK_IMPORTED_MODULE_15__["IonicSelectableModalComponent"]];
/** @type {?} */
var directives = [
    _ionic_selectable_value_template_directive__WEBPACK_IMPORTED_MODULE_19__["IonicSelectableValueTemplateDirective"],
    _ionic_selectable_item_template_directive__WEBPACK_IMPORTED_MODULE_13__["IonicSelectableItemTemplateDirective"],
    _ionic_selectable_item_end_template_directive__WEBPACK_IMPORTED_MODULE_11__["IonicSelectableItemEndTemplateDirective"],
    _ionic_selectable_title_template_directive__WEBPACK_IMPORTED_MODULE_18__["IonicSelectableTitleTemplateDirective"],
    _ionic_selectable_placeholder_template_directive__WEBPACK_IMPORTED_MODULE_16__["IonicSelectablePlaceholderTemplateDirective"],
    _ionic_selectable_message_template_directive__WEBPACK_IMPORTED_MODULE_14__["IonicSelectableMessageTemplateDirective"],
    _ionic_selectable_group_template_directive__WEBPACK_IMPORTED_MODULE_9__["IonicSelectableGroupTemplateDirective"],
    _ionic_selectable_group_end_template_directive__WEBPACK_IMPORTED_MODULE_8__["IonicSelectableGroupEndTemplateDirective"],
    _ionic_selectable_close_button_template_directive__WEBPACK_IMPORTED_MODULE_6__["IonicSelectableCloseButtonTemplateDirective"],
    _ionic_selectable_search_fail_template_directive__WEBPACK_IMPORTED_MODULE_17__["IonicSelectableSearchFailTemplateDirective"],
    _ionic_selectable_add_item_template_directive__WEBPACK_IMPORTED_MODULE_5__["IonicSelectableAddItemTemplateDirective"],
    _ionic_selectable_footer_template_directive__WEBPACK_IMPORTED_MODULE_7__["IonicSelectableFooterTemplateDirective"],
    _ionic_selectable_header_template_directive__WEBPACK_IMPORTED_MODULE_10__["IonicSelectableHeaderTemplateDirective"],
    _ionic_selectable_item_icon_template_directive__WEBPACK_IMPORTED_MODULE_12__["IonicSelectableItemIconTemplateDirective"],
    _ionic_selectable_icon_template_directive__WEBPACK_IMPORTED_MODULE_20__["IonicSelectableIconTemplateDirective"]
];
var IonicSelectableModule = /** @class */ (function () {
    function IonicSelectableModule() {
    }
    IonicSelectableModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"], args: [{
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"]
                    ],
                    declarations: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(components, directives),
                    exports: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(components, directives),
                    entryComponents: components
                },] }
    ];
    return IonicSelectableModule;
}());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9uaWMtc2VsZWN0YWJsZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9pb25pYy1zZWxlY3RhYmxlLyIsInNvdXJjZXMiOlsic3JjL2FwcC9jb21wb25lbnRzL2lvbmljLXNlbGVjdGFibGUvaW9uaWMtc2VsZWN0YWJsZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSx1Q0FBdUMsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ3pHLE9BQU8sRUFBRSwyQ0FBMkMsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBQ2pILE9BQU8sRUFBRSxzQ0FBc0MsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQ3RHLE9BQU8sRUFBRSx3Q0FBd0MsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQzNHLE9BQU8sRUFBRSxxQ0FBcUMsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQ3BHLE9BQU8sRUFBRSxzQ0FBc0MsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQ3RHLE9BQU8sRUFBRSx1Q0FBdUMsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ3pHLE9BQU8sRUFBRSx3Q0FBd0MsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQzNHLE9BQU8sRUFBRSxvQ0FBb0MsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQ2xHLE9BQU8sRUFBRSx1Q0FBdUMsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQ3hHLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ25GLE9BQU8sRUFBRSwyQ0FBMkMsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBQ2hILE9BQU8sRUFBRSwwQ0FBMEMsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBQy9HLE9BQU8sRUFBRSxxQ0FBcUMsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQ3BHLE9BQU8sRUFBRSxxQ0FBcUMsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQ3BHLE9BQU8sRUFBRSxvQ0FBb0MsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQ2xHLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ3hFLE9BQU8sRUFBRSx1Q0FBdUMsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ3pHLE9BQU8sRUFBRSwyQ0FBMkMsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBQ2pILE9BQU8sRUFBRSxzQ0FBc0MsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQ3RHLE9BQU8sRUFBRSx3Q0FBd0MsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQzNHLE9BQU8sRUFBRSxxQ0FBcUMsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQ3BHLE9BQU8sRUFBRSxzQ0FBc0MsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQ3RHLE9BQU8sRUFBRSx1Q0FBdUMsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ3pHLE9BQU8sRUFBRSx3Q0FBd0MsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQzNHLE9BQU8sRUFBRSxvQ0FBb0MsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQ2xHLE9BQU8sRUFBRSx1Q0FBdUMsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQ3hHLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ25GLE9BQU8sRUFBRSwyQ0FBMkMsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBQ2hILE9BQU8sRUFBRSwwQ0FBMEMsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBQy9HLE9BQU8sRUFBRSxxQ0FBcUMsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQ3BHLE9BQU8sRUFBRSxxQ0FBcUMsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQ3BHLE9BQU8sRUFBRSxvQ0FBb0MsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQ2xHLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDOztJQUVsRSxVQUFVLEdBQUcsQ0FBQyx3QkFBd0IsRUFBRSw2QkFBNkIsQ0FBQzs7SUFDMUUsVUFBVSxHQUFHO0lBQ1gscUNBQXFDO0lBQ3JDLG9DQUFvQztJQUNwQyx1Q0FBdUM7SUFDdkMscUNBQXFDO0lBQ3JDLDJDQUEyQztJQUMzQyx1Q0FBdUM7SUFDdkMscUNBQXFDO0lBQ3JDLHdDQUF3QztJQUN4QywyQ0FBMkM7SUFDM0MsMENBQTBDO0lBQzFDLHVDQUF1QztJQUN2QyxzQ0FBc0M7SUFDdEMsc0NBQXNDO0lBQ3RDLHdDQUF3QztJQUN4QyxvQ0FBb0M7Q0FDckM7QUFFSDtJQUFBO0lBZ0JxQyxDQUFDOztnQkFoQnJDLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixXQUFXO3dCQUNYLFdBQVc7cUJBQ1o7b0JBQ0QsWUFBWSxXQUNQLFVBQVUsRUFDVixVQUFVLENBQ2Q7b0JBQ0QsT0FBTyxXQUNGLFVBQVUsRUFDVixVQUFVLENBQ2Q7b0JBQ0QsZUFBZSxFQUFFLFVBQVU7aUJBQzVCOztJQUNvQyw0QkFBQztDQUFBLEFBaEJ0QyxJQWdCc0M7U0FBekIscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IElvbmljTW9kdWxlIH0gZnJvbSAnQGlvbmljL2FuZ3VsYXInO1xuaW1wb3J0IHsgSW9uaWNTZWxlY3RhYmxlQWRkSXRlbVRlbXBsYXRlRGlyZWN0aXZlIH0gZnJvbSAnLi9pb25pYy1zZWxlY3RhYmxlLWFkZC1pdGVtLXRlbXBsYXRlLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBJb25pY1NlbGVjdGFibGVDbG9zZUJ1dHRvblRlbXBsYXRlRGlyZWN0aXZlIH0gZnJvbSAnLi9pb25pYy1zZWxlY3RhYmxlLWNsb3NlLWJ1dHRvbi10ZW1wbGF0ZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgSW9uaWNTZWxlY3RhYmxlRm9vdGVyVGVtcGxhdGVEaXJlY3RpdmUgfSBmcm9tICcuL2lvbmljLXNlbGVjdGFibGUtZm9vdGVyLXRlbXBsYXRlLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBJb25pY1NlbGVjdGFibGVHcm91cEVuZFRlbXBsYXRlRGlyZWN0aXZlIH0gZnJvbSAnLi9pb25pYy1zZWxlY3RhYmxlLWdyb3VwLWVuZC10ZW1wbGF0ZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgSW9uaWNTZWxlY3RhYmxlR3JvdXBUZW1wbGF0ZURpcmVjdGl2ZSB9IGZyb20gJy4vaW9uaWMtc2VsZWN0YWJsZS1ncm91cC10ZW1wbGF0ZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgSW9uaWNTZWxlY3RhYmxlSGVhZGVyVGVtcGxhdGVEaXJlY3RpdmUgfSBmcm9tICcuL2lvbmljLXNlbGVjdGFibGUtaGVhZGVyLXRlbXBsYXRlLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBJb25pY1NlbGVjdGFibGVJdGVtRW5kVGVtcGxhdGVEaXJlY3RpdmUgfSBmcm9tICcuL2lvbmljLXNlbGVjdGFibGUtaXRlbS1lbmQtdGVtcGxhdGUuZGlyZWN0aXZlJztcbmltcG9ydCB7IElvbmljU2VsZWN0YWJsZUl0ZW1JY29uVGVtcGxhdGVEaXJlY3RpdmUgfSBmcm9tICcuL2lvbmljLXNlbGVjdGFibGUtaXRlbS1pY29uLXRlbXBsYXRlLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBJb25pY1NlbGVjdGFibGVJdGVtVGVtcGxhdGVEaXJlY3RpdmUgfSBmcm9tICcuL2lvbmljLXNlbGVjdGFibGUtaXRlbS10ZW1wbGF0ZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgSW9uaWNTZWxlY3RhYmxlTWVzc2FnZVRlbXBsYXRlRGlyZWN0aXZlIH0gZnJvbSAnLi9pb25pYy1zZWxlY3RhYmxlLW1lc3NhZ2UtdGVtcGxhdGUuZGlyZWN0aXZlJztcbmltcG9ydCB7IElvbmljU2VsZWN0YWJsZU1vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi9pb25pYy1zZWxlY3RhYmxlLW1vZGFsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJb25pY1NlbGVjdGFibGVQbGFjZWhvbGRlclRlbXBsYXRlRGlyZWN0aXZlIH0gZnJvbSAnLi9pb25pYy1zZWxlY3RhYmxlLXBsYWNlaG9sZGVyLXRlbXBsYXRlLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBJb25pY1NlbGVjdGFibGVTZWFyY2hGYWlsVGVtcGxhdGVEaXJlY3RpdmUgfSBmcm9tICcuL2lvbmljLXNlbGVjdGFibGUtc2VhcmNoLWZhaWwtdGVtcGxhdGUuZGlyZWN0aXZlJztcbmltcG9ydCB7IElvbmljU2VsZWN0YWJsZVRpdGxlVGVtcGxhdGVEaXJlY3RpdmUgfSBmcm9tICcuL2lvbmljLXNlbGVjdGFibGUtdGl0bGUtdGVtcGxhdGUuZGlyZWN0aXZlJztcbmltcG9ydCB7IElvbmljU2VsZWN0YWJsZVZhbHVlVGVtcGxhdGVEaXJlY3RpdmUgfSBmcm9tICcuL2lvbmljLXNlbGVjdGFibGUtdmFsdWUtdGVtcGxhdGUuZGlyZWN0aXZlJztcbmltcG9ydCB7IElvbmljU2VsZWN0YWJsZUljb25UZW1wbGF0ZURpcmVjdGl2ZSB9IGZyb20gJy4vaW9uaWMtc2VsZWN0YWJsZS1pY29uLXRlbXBsYXRlLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBJb25pY1NlbGVjdGFibGVDb21wb25lbnQgfSBmcm9tICcuL2lvbmljLXNlbGVjdGFibGUuY29tcG9uZW50JztcbmV4cG9ydCB7IElvbmljU2VsZWN0YWJsZUFkZEl0ZW1UZW1wbGF0ZURpcmVjdGl2ZSB9IGZyb20gJy4vaW9uaWMtc2VsZWN0YWJsZS1hZGQtaXRlbS10ZW1wbGF0ZS5kaXJlY3RpdmUnO1xuZXhwb3J0IHsgSW9uaWNTZWxlY3RhYmxlQ2xvc2VCdXR0b25UZW1wbGF0ZURpcmVjdGl2ZSB9IGZyb20gJy4vaW9uaWMtc2VsZWN0YWJsZS1jbG9zZS1idXR0b24tdGVtcGxhdGUuZGlyZWN0aXZlJztcbmV4cG9ydCB7IElvbmljU2VsZWN0YWJsZUZvb3RlclRlbXBsYXRlRGlyZWN0aXZlIH0gZnJvbSAnLi9pb25pYy1zZWxlY3RhYmxlLWZvb3Rlci10ZW1wbGF0ZS5kaXJlY3RpdmUnO1xuZXhwb3J0IHsgSW9uaWNTZWxlY3RhYmxlR3JvdXBFbmRUZW1wbGF0ZURpcmVjdGl2ZSB9IGZyb20gJy4vaW9uaWMtc2VsZWN0YWJsZS1ncm91cC1lbmQtdGVtcGxhdGUuZGlyZWN0aXZlJztcbmV4cG9ydCB7IElvbmljU2VsZWN0YWJsZUdyb3VwVGVtcGxhdGVEaXJlY3RpdmUgfSBmcm9tICcuL2lvbmljLXNlbGVjdGFibGUtZ3JvdXAtdGVtcGxhdGUuZGlyZWN0aXZlJztcbmV4cG9ydCB7IElvbmljU2VsZWN0YWJsZUhlYWRlclRlbXBsYXRlRGlyZWN0aXZlIH0gZnJvbSAnLi9pb25pYy1zZWxlY3RhYmxlLWhlYWRlci10ZW1wbGF0ZS5kaXJlY3RpdmUnO1xuZXhwb3J0IHsgSW9uaWNTZWxlY3RhYmxlSXRlbUVuZFRlbXBsYXRlRGlyZWN0aXZlIH0gZnJvbSAnLi9pb25pYy1zZWxlY3RhYmxlLWl0ZW0tZW5kLXRlbXBsYXRlLmRpcmVjdGl2ZSc7XG5leHBvcnQgeyBJb25pY1NlbGVjdGFibGVJdGVtSWNvblRlbXBsYXRlRGlyZWN0aXZlIH0gZnJvbSAnLi9pb25pYy1zZWxlY3RhYmxlLWl0ZW0taWNvbi10ZW1wbGF0ZS5kaXJlY3RpdmUnO1xuZXhwb3J0IHsgSW9uaWNTZWxlY3RhYmxlSXRlbVRlbXBsYXRlRGlyZWN0aXZlIH0gZnJvbSAnLi9pb25pYy1zZWxlY3RhYmxlLWl0ZW0tdGVtcGxhdGUuZGlyZWN0aXZlJztcbmV4cG9ydCB7IElvbmljU2VsZWN0YWJsZU1lc3NhZ2VUZW1wbGF0ZURpcmVjdGl2ZSB9IGZyb20gJy4vaW9uaWMtc2VsZWN0YWJsZS1tZXNzYWdlLXRlbXBsYXRlLmRpcmVjdGl2ZSc7XG5leHBvcnQgeyBJb25pY1NlbGVjdGFibGVNb2RhbENvbXBvbmVudCB9IGZyb20gJy4vaW9uaWMtc2VsZWN0YWJsZS1tb2RhbC5jb21wb25lbnQnO1xuZXhwb3J0IHsgSW9uaWNTZWxlY3RhYmxlUGxhY2Vob2xkZXJUZW1wbGF0ZURpcmVjdGl2ZSB9IGZyb20gJy4vaW9uaWMtc2VsZWN0YWJsZS1wbGFjZWhvbGRlci10ZW1wbGF0ZS5kaXJlY3RpdmUnO1xuZXhwb3J0IHsgSW9uaWNTZWxlY3RhYmxlU2VhcmNoRmFpbFRlbXBsYXRlRGlyZWN0aXZlIH0gZnJvbSAnLi9pb25pYy1zZWxlY3RhYmxlLXNlYXJjaC1mYWlsLXRlbXBsYXRlLmRpcmVjdGl2ZSc7XG5leHBvcnQgeyBJb25pY1NlbGVjdGFibGVUaXRsZVRlbXBsYXRlRGlyZWN0aXZlIH0gZnJvbSAnLi9pb25pYy1zZWxlY3RhYmxlLXRpdGxlLXRlbXBsYXRlLmRpcmVjdGl2ZSc7XG5leHBvcnQgeyBJb25pY1NlbGVjdGFibGVWYWx1ZVRlbXBsYXRlRGlyZWN0aXZlIH0gZnJvbSAnLi9pb25pYy1zZWxlY3RhYmxlLXZhbHVlLXRlbXBsYXRlLmRpcmVjdGl2ZSc7XG5leHBvcnQgeyBJb25pY1NlbGVjdGFibGVJY29uVGVtcGxhdGVEaXJlY3RpdmUgfSBmcm9tICcuL2lvbmljLXNlbGVjdGFibGUtaWNvbi10ZW1wbGF0ZS5kaXJlY3RpdmUnO1xuZXhwb3J0IHsgSW9uaWNTZWxlY3RhYmxlQ29tcG9uZW50IH0gZnJvbSAnLi9pb25pYy1zZWxlY3RhYmxlLmNvbXBvbmVudCc7XG5cbmNvbnN0IGNvbXBvbmVudHMgPSBbSW9uaWNTZWxlY3RhYmxlQ29tcG9uZW50LCBJb25pY1NlbGVjdGFibGVNb2RhbENvbXBvbmVudF0sXG4gIGRpcmVjdGl2ZXMgPSBbXG4gICAgSW9uaWNTZWxlY3RhYmxlVmFsdWVUZW1wbGF0ZURpcmVjdGl2ZSxcbiAgICBJb25pY1NlbGVjdGFibGVJdGVtVGVtcGxhdGVEaXJlY3RpdmUsXG4gICAgSW9uaWNTZWxlY3RhYmxlSXRlbUVuZFRlbXBsYXRlRGlyZWN0aXZlLFxuICAgIElvbmljU2VsZWN0YWJsZVRpdGxlVGVtcGxhdGVEaXJlY3RpdmUsXG4gICAgSW9uaWNTZWxlY3RhYmxlUGxhY2Vob2xkZXJUZW1wbGF0ZURpcmVjdGl2ZSxcbiAgICBJb25pY1NlbGVjdGFibGVNZXNzYWdlVGVtcGxhdGVEaXJlY3RpdmUsXG4gICAgSW9uaWNTZWxlY3RhYmxlR3JvdXBUZW1wbGF0ZURpcmVjdGl2ZSxcbiAgICBJb25pY1NlbGVjdGFibGVHcm91cEVuZFRlbXBsYXRlRGlyZWN0aXZlLFxuICAgIElvbmljU2VsZWN0YWJsZUNsb3NlQnV0dG9uVGVtcGxhdGVEaXJlY3RpdmUsXG4gICAgSW9uaWNTZWxlY3RhYmxlU2VhcmNoRmFpbFRlbXBsYXRlRGlyZWN0aXZlLFxuICAgIElvbmljU2VsZWN0YWJsZUFkZEl0ZW1UZW1wbGF0ZURpcmVjdGl2ZSxcbiAgICBJb25pY1NlbGVjdGFibGVGb290ZXJUZW1wbGF0ZURpcmVjdGl2ZSxcbiAgICBJb25pY1NlbGVjdGFibGVIZWFkZXJUZW1wbGF0ZURpcmVjdGl2ZSxcbiAgICBJb25pY1NlbGVjdGFibGVJdGVtSWNvblRlbXBsYXRlRGlyZWN0aXZlLFxuICAgIElvbmljU2VsZWN0YWJsZUljb25UZW1wbGF0ZURpcmVjdGl2ZVxuICBdO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIElvbmljTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIC4uLmNvbXBvbmVudHMsXG4gICAgLi4uZGlyZWN0aXZlc1xuICBdLFxuICBleHBvcnRzOiBbXG4gICAgLi4uY29tcG9uZW50cyxcbiAgICAuLi5kaXJlY3RpdmVzXG4gIF0sXG4gIGVudHJ5Q29tcG9uZW50czogY29tcG9uZW50c1xufSlcbmV4cG9ydCBjbGFzcyBJb25pY1NlbGVjdGFibGVNb2R1bGUgeyB9XG4iXX0=

/***/ }),

/***/ "./src/pages/+track/track.module.ts":
/*!******************************************!*\
  !*** ./src/pages/+track/track.module.ts ***!
  \******************************************/
/*! exports provided: TrackPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackPageModule", function() { return TrackPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _track__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./track */ "./src/pages/+track/track.ts");
/* harmony import */ var _modules_client_common_angular2_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @modules/client.common.angular2/pipes/pipes.module */ "../common-angular/src/pipes/pipes.module.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/components.module */ "./src/components/components.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _src_services_carrier_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../src/services/carrier.service */ "./src/services/carrier.service.ts");
/* harmony import */ var _src_services_warehouses_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../src/services/warehouses.service */ "./src/services/warehouses.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ionic-selectable */ "./node_modules/ionic-selectable/esm5/ionic-selectable.min.js");
/* harmony import */ var _services_warehouse_orders_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../services/warehouse-orders.service */ "./src/services/warehouse-orders.service.ts");














var routes = [
    {
        path: '',
        component: _track__WEBPACK_IMPORTED_MODULE_2__["TrackPage"],
    },
];
var TrackPageModule = (function () {
    function TrackPageModule() {
    }
    TrackPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_track__WEBPACK_IMPORTED_MODULE_2__["TrackPage"]],
            imports: [
                _modules_client_common_angular2_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_3__["PipesModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_4__["ComponentsModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"].forChild(),
                ionic_selectable__WEBPACK_IMPORTED_MODULE_12__["IonicSelectableModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forChild(routes),
            ],
            providers: [_src_services_carrier_service__WEBPACK_IMPORTED_MODULE_6__["CarrierService"], _src_services_warehouses_service__WEBPACK_IMPORTED_MODULE_7__["WarehousesService"], _services_warehouse_orders_service__WEBPACK_IMPORTED_MODULE_13__["WarehouseOrdersService"]],
        })
    ], TrackPageModule);
    return TrackPageModule;
}());



/***/ }),

/***/ "./src/pages/+track/track.scss":
/*!*************************************!*\
  !*** ./src/pages/+track/track.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".map {\n  width: calc(100vw - 375px);\n  height: calc(100vh - 43px);\n}\n\n#contentWrapper {\n  margin-top: 45px;\n  display: flex;\n}\n\n#contentWrapper .sidebar {\n  width: 375px;\n  height: 100%;\n  background: white;\n  display: flex;\n  flex-direction: column;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvZC9Xb3JrL0FuZ3VsYXIvTmV3IGZvbGRlciAoMikvRG9sY2VHcm9jZXJ5L3BhY2thZ2VzL21lcmNoYW50LXRhYmxldC1pb25pYy9zcmMvcGFnZXMvK3RyYWNrL3RyYWNrLnNjc3MiLCJzcmMvcGFnZXMvK3RyYWNrL3RyYWNrLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQywwQkFBMEI7RUFDMUIsMEJBQTBCO0FDQzNCOztBRENBO0VBQ0MsZ0JBQWdCO0VBQ2hCLGFBQWE7QUNFZDs7QURKQTtFQUlFLFlBQVk7RUFDWixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixzQkFBc0I7QUNJeEIiLCJmaWxlIjoic3JjL3BhZ2VzLyt0cmFjay90cmFjay5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hcCB7XG5cdHdpZHRoOiBjYWxjKDEwMHZ3IC0gMzc1cHgpO1xuXHRoZWlnaHQ6IGNhbGMoMTAwdmggLSA0M3B4KTtcbn1cbiNjb250ZW50V3JhcHBlciB7XG5cdG1hcmdpbi10b3A6IDQ1cHg7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdC5zaWRlYmFyIHtcblx0XHR3aWR0aDogMzc1cHg7XG5cdFx0aGVpZ2h0OiAxMDAlO1xuXHRcdGJhY2tncm91bmQ6IHdoaXRlO1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0XHQuc3RhdGlzdGljcyB7XG5cdFx0XHQvL3BhZGRpbmctbGVmdDoxMHB4O1xuXHRcdFx0Ly9wYWRkaW5nLXRvcDoxMHB4O1xuXHRcdH1cblx0fVxufVxuIiwiLm1hcCB7XG4gIHdpZHRoOiBjYWxjKDEwMHZ3IC0gMzc1cHgpO1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA0M3B4KTtcbn1cblxuI2NvbnRlbnRXcmFwcGVyIHtcbiAgbWFyZ2luLXRvcDogNDVweDtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuI2NvbnRlbnRXcmFwcGVyIC5zaWRlYmFyIHtcbiAgd2lkdGg6IDM3NXB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuIl19 */");

/***/ }),

/***/ "./src/pages/+track/track.ts":
/*!***********************************!*\
  !*** ./src/pages/+track/track.ts ***!
  \***********************************/
/*! exports provided: TrackPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackPage", function() { return TrackPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _src_services_carrier_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../src/services/carrier.service */ "./src/services/carrier.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ionic-selectable */ "./node_modules/ionic-selectable/esm5/ionic-selectable.min.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var services_warehouses_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! services/warehouses.service */ "./src/services/warehouses.service.ts");
/* harmony import */ var _services_warehouse_orders_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/warehouse-orders.service */ "./src/services/warehouse-orders.service.ts");








var TrackPage = (function () {
    function TrackPage(carrierService, route, router, warehouseService, warehouseOrderService) {
        this.carrierService = carrierService;
        this.route = route;
        this.router = router;
        this.warehouseService = warehouseService;
        this.warehouseOrderService = warehouseOrderService;
        this._ngDestroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.markers = [];
        this.totalDeliveries = 0;
        this.totalCarriers = 0;
        this.totalActiveCarriers = 0;
        this.showAssignedOnly = true;
        this.showActiveOnly = true;
        this.showCheckboxFilters = true;
        this.loadingMap = false;
        this.storeIcon = 'http://maps.google.com/mapfiles/kml/pal3/icon21.png';
        this.sharedCarrierIcon = 'http://maps.google.com/mapfiles/kml/pal4/icon23.png';
        this.userIcon = 'http://maps.google.com/mapfiles/kml/pal3/icon48.png';
        this.carrierIcon = 'http://maps.google.com/mapfiles/kml/pal4/icon54.png';
    }
    TrackPage.prototype.openModal = function () {
        this.filterComponent.close();
    };
    TrackPage.prototype.navigationHandler = function (event) {
        this.carriers$.unsubscribe();
        this.params$.unsubscribe();
        this.warehouse$.unsubscribe();
        this.router.navigate(["track/" + event.value.id]);
    };
    TrackPage.prototype.ngOnInit = function () {
        var _this = this;
        this.warehouse$ = this.warehouseService
            .getAllStores()
            .subscribe(function (warehouse) {
            var currentWarehouse = warehouse.find(function (wh) { return wh.id === _this.warehouseId; });
            var allAssignedCarriers = warehouse
                .filter(function (wh) { return wh.id !== _this.warehouseId; })
                .map(function (wh) { return wh.usedCarriersIds; });
            _this.warehouseCoordinates = {
                lat: currentWarehouse.geoLocation.loc.coordinates[1],
                lng: currentWarehouse.geoLocation.loc.coordinates[0],
            };
            _this.totalCarriers = currentWarehouse.usedCarriersIds.length;
            _this.carriers$ = _this.carrierService
                .getAllCarriers()
                .subscribe(function (carriers) {
                _this.loadGoogleMaps();
                _this.carriers = carriers.filter(function (car) {
                    if (currentWarehouse.usedCarriersIds.includes(car.id)) {
                        car.shared = false;
                        return true;
                    }
                    else {
                        if (allAssignedCarriers.every(function (arr) { return !arr.includes(car.id); })) {
                            car.shared = true;
                            return true;
                        }
                        else {
                            return false;
                        }
                    }
                });
                var total = 0;
                _this.carriers.forEach(function (car) {
                    total += car.numberOfDeliveries;
                });
                _this.totalDeliveries = total;
                _this.params$ = _this.route.params.subscribe(function (res) {
                    _this.totalActiveCarriers = _this.carriers.filter(function (car) { return car.status === 0; }).length;
                    if (res.id) {
                        _this.selectedCarrier = _this.carriers.filter(function (car) { return car.id === res.id; })[0];
                        _this.showCheckboxFilters = false;
                        _this.carriersOnDisplay = [_this.selectedCarrier];
                        _this.renderCarriers([_this.selectedCarrier]);
                    }
                    else {
                        _this.filterDisplayedCarriers();
                        _this.renderCarriers(_this.carriersOnDisplay);
                    }
                });
            });
        });
    };
    Object.defineProperty(TrackPage.prototype, "warehouseId", {
        get: function () {
            return localStorage.getItem('_warehouseId');
        },
        enumerable: true,
        configurable: true
    });
    TrackPage.prototype.drawOrderRoutes = function () {
        var _this = this;
        this.warehouseOrderService
            .getOrdersInDelivery(this.warehouseId)
            .then(function (orderList) {
            _this.listOfOrders = orderList;
            _this.listOfOrders.forEach(function (order) {
                var carrier = _this.carriersOnDisplay.find(function (x) { return x.id === order.carrier.id; });
                if (carrier && carrier.shared) {
                    _this.addMarker({
                        lat: order.carrier.geoLocation.loc
                            .coordinates[1],
                        lng: order.carrier.geoLocation.loc
                            .coordinates[0],
                    }, _this.map, _this.sharedCarrierIcon);
                }
                var carriersWithOrders = orderList.map(function (o) { return o.carrier.id; });
                _this.carriers = _this.carriers.filter(function (car) {
                    if (!carriersWithOrders.includes(car.id) &&
                        car.shared) {
                        return false;
                    }
                    else {
                        return true;
                    }
                });
                _this.carrierListDropdown = _this.carriers;
                if (_this.carriersOnDisplay
                    .map(function (car) { return car.id; })
                    .includes(order.carrier.id)) {
                    _this.addMarker({
                        lat: order.user.geoLocation.loc.coordinates[1],
                        lng: order.user.geoLocation.loc.coordinates[0],
                    }, _this.map, _this.userIcon);
                    var request = {
                        origin: new google.maps.LatLng(order.carrier.geoLocation.loc.coordinates[1], order.carrier.geoLocation.loc.coordinates[0]),
                        destination: new google.maps.LatLng(order.user.geoLocation.loc.coordinates[1], order.user.geoLocation.loc.coordinates[0]),
                        travelMode: 'DRIVING',
                    };
                    var directionsDisplay_1 = new google.maps.DirectionsRenderer({
                        polylineOptions: {
                            strokeColor: "hsl(" + Math.floor(Math.random() * 320) + ",100%,50%)",
                        },
                    });
                    var directionsService = new google.maps.DirectionsService();
                    directionsService.route(request, function (res, stat) {
                        if (stat === 'OK') {
                            directionsDisplay_1.setDirections(res);
                        }
                    });
                    directionsDisplay_1.setOptions({
                        suppressMarkers: true,
                    });
                    directionsDisplay_1.setMap(_this.map);
                }
            });
        });
    };
    TrackPage.prototype.renderCarriers = function (carriers) {
        var _this = this;
        if (this.markers.length > 0) {
            this.markers.forEach(function (m) {
                m.setMap(null);
            });
            this.markers = [];
        }
        carriers.forEach(function (carrier) {
            var mylatLng = {
                lat: carrier.geoLocation.loc.coordinates[1],
                lng: carrier.geoLocation.loc.coordinates[0],
            };
            _this.addMarker(_this.warehouseCoordinates, _this.map, _this.storeIcon);
            if (!carrier.shared) {
                _this.addMarker(mylatLng, _this.map, _this.carrierIcon);
            }
        });
        this.drawOrderRoutes();
    };
    TrackPage.prototype.filterDisplayedCarriers = function () {
        var filteredCarriers = this.carriers;
        if (this.showActiveOnly && this.carriers.length > 1) {
            filteredCarriers = filteredCarriers.filter(function (car) { return car.status === 0; });
        }
        if (this.showAssignedOnly && this.carriers.length > 1) {
            filteredCarriers = filteredCarriers.filter(function (car) { return car.shared === false; });
        }
        this.carrierListDropdown = filteredCarriers;
        this.carriersOnDisplay = filteredCarriers;
    };
    TrackPage.prototype.loadGoogleMaps = function () {
        this.loadingMap = true;
        var initialCoords = new google.maps.LatLng(42.7089136, 23.3702736);
        var mapProp = {
            center: initialCoords,
            zoom: 13,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
        };
        this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
        this.loadingMap = false;
    };
    TrackPage.prototype.addMarker = function (position, map, icon) {
        var marker = new google.maps.Marker({
            position: position,
            map: map,
            icon: icon,
        });
        this.markers.push(marker);
    };
    TrackPage.prototype.refreshMap = function () {
        this.filterDisplayedCarriers();
        this.renderCarriers(this.carriersOnDisplay);
    };
    TrackPage.prototype.ngOnDestroy = function () {
        this._ngDestroy$.next();
        this._ngDestroy$.complete();
        if (this.carriers$) {
            this.carriers$.unsubscribe();
        }
        if (this.params$) {
            this.params$.unsubscribe();
        }
    };
    TrackPage.ctorParameters = function () { return [
        { type: _src_services_carrier_service__WEBPACK_IMPORTED_MODULE_2__["CarrierService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: services_warehouses_service__WEBPACK_IMPORTED_MODULE_6__["WarehousesService"] },
        { type: _services_warehouse_orders_service__WEBPACK_IMPORTED_MODULE_7__["WarehouseOrdersService"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gmap', { static: true }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], TrackPage.prototype, "gmapElement", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('filterComponent', { static: true }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", ionic_selectable__WEBPACK_IMPORTED_MODULE_4__["IonicSelectableComponent"])
    ], TrackPage.prototype, "filterComponent", void 0);
    TrackPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'page-track',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./track.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/pages/+track/track.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./track.scss */ "./src/pages/+track/track.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_src_services_carrier_service__WEBPACK_IMPORTED_MODULE_2__["CarrierService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            services_warehouses_service__WEBPACK_IMPORTED_MODULE_6__["WarehousesService"],
            _services_warehouse_orders_service__WEBPACK_IMPORTED_MODULE_7__["WarehouseOrdersService"]])
    ], TrackPage);
    return TrackPage;
}());



/***/ })

}]);
//# sourceMappingURL=track-track-module.js.map