(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-pages-simulation-simulation-module"],{

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/@shared/elapsed-time/elapsed-time.component.html":
/*!******************************************************************************************************************************************************!*\
  !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/raw-loader/dist/cjs.js!./src/app/@shared/elapsed-time/elapsed-time.component.html ***!
  \******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"text-align-center elapsed-time\">\n\t<h4 class=\"main-title\">\n\t\t{{ 'ELAPSED_TIME.TITLE' | translate }}\n\t</h4>\n\n\t<h6>\n\t\t{{ timePasssed.timePassed }}\n\t</h6>\n</div>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/@shared/invite/by-code/by-code-modal.component.html":
/*!*********************************************************************************************************************************************************!*\
  !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/raw-loader/dist/cjs.js!./src/app/@shared/invite/by-code/by-code-modal.component.html ***!
  \*********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\n\t<span>Invite code</span>\n\t<button class=\"close\" aria-label=\"Close\" (click)=\"closeModal()\">\n\t\t<span aria-hidden=\"true\">&times;</span>\n\t</button>\n</div>\n<div class=\"modal-body\">\n\t<div class=\"col-12 input-group\">\n\t\t<input\n\t\t\ttype=\"number\"\n\t\t\t[(ngModel)]=\"code\"\n\t\t\tplaceholder=\"Code\"\n\t\t\tclass=\"form-control\"\n\t\t/>\n\t</div>\n</div>\n<div class=\"modal-footer\">\n\t<div class=\"row\" style=\"width: 90%; margin: auto;\">\n\t\t<button\n\t\t\tnbButton\n\t\t\tstatus=\"primary\"\n\t\t\tclass=\"col-12\"\n\t\t\t[disabled]=\"!code || code < 1000 || code > 9999\"\n\t\t\t(click)=\"login()\"\n\t\t>\n\t\t\tGet inside\n\t\t</button>\n\t</div>\n</div>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/@shared/invite/invite-request/invite-request-modal.component.html":
/*!***********************************************************************************************************************************************************************!*\
  !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/raw-loader/dist/cjs.js!./src/app/@shared/invite/invite-request/invite-request-modal.component.html ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"invite-request-modal\">\n\t<div class=\"modal-header\">\n\t\t<h3>{{ 'SIMULATION_VIEW.CREATE_INVITE_REQUEST' | translate }}</h3>\n\t\t<button class=\"close\" aria-label=\"Close\" (click)=\"closeModal()\">\n\t\t\t<span aria-hidden=\"true\">&times;</span>\n\t\t</button>\n\t</div>\n\t<div class=\"modal-body\">\n\t\t<ea-location-form\n\t\t\t#locationForm\n\t\t\t[form]=\"location\"\n\t\t\t[apartment]=\"apartment\"\n\t\t\t[showAutocompleteSearch]=\"true\"\n\t\t\t(mapCoordinatesEmitter)=\"onCoordinatesChanges($event)\"\n\t\t\t(mapGeometryEmitter)=\"onGeometrySend($event)\"\n\t\t>\n\t\t</ea-location-form>\n\n\t\t<google-map\n\t\t\t[mapCoordEvent]=\"mapCoordEmitter\"\n\t\t\t[mapGeometryEvent]=\"mapGeometryEmitter\"\n\t\t>\n\t\t</google-map>\n\t</div>\n\t<div class=\"modal-footer\">\n\t\t<button\n\t\t\tnbButton\n\t\t\tstatus=\"success\"\n\t\t\thero\n\t\t\t[disabled]=\"location?.invalid\"\n\t\t\t(click)=\"create()\"\n\t\t>\n\t\t\t{{ 'SIMULATION_VIEW.SEND' | translate }}\n\t\t</button>\n\t</div>\n</div>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/@shared/render-component/simulation-table/sumulation-json.component.html":
/*!******************************************************************************************************************************************************************************!*\
  !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/raw-loader/dist/cjs.js!./src/app/@shared/render-component/simulation-table/sumulation-json.component.html ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"iconsCont\">\n\t<h6 class=\"text-center iconBtns\">\n\t\t<i (click)=\"openInfo()\" class=\"fa fa-info-circle infoBtn\"></i>\n\t</h6>\n</div>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/pages/+simulation/instructions/instructions.component.html":
/*!****************************************************************************************************************************************************************!*\
  !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/raw-loader/dist/cjs.js!./src/app/pages/+simulation/instructions/instructions.component.html ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nb-card>\n\t<nb-card-header class=\"specific-header-color\">\n\t\t{{ 'SIMULATION_VIEW.INSTRUCTIONS_STEPS.INSTRUTIONS' | translate }}\n\t</nb-card-header>\n\n\t<nb-card-body>\n\t\t<div>\n\t\t\t<div *ngIf=\"step === stepTypes.one\" class=\"row\">\n\t\t\t\t<h4 class=\"col-md-8\">\n\t\t\t\t\t{{\n\t\t\t\t\t\t'SIMULATION_VIEW.INSTRUCTIONS_STEPS.CREATE_USER_STEP.CREATE_USER'\n\t\t\t\t\t\t\t| translate\n\t\t\t\t\t}}\n\t\t\t\t</h4>\n\t\t\t\t<span class=\"col-md-4 text-right\">\n\t\t\t\t\t{{\n\t\t\t\t\t\t'SIMULATION_VIEW.INSTRUCTIONS_STEPS.CREATE_USER_STEP.STEP_1'\n\t\t\t\t\t\t\t| translate\n\t\t\t\t\t}}\n\t\t\t\t</span>\n\t\t\t</div>\n\t\t\t<div *ngIf=\"step === stepTypes.two\" class=\"row\">\n\t\t\t\t<h4 class=\"col-md-8\">\n\t\t\t\t\t<strong>\n\t\t\t\t\t\t{{\n\t\t\t\t\t\t\t'SIMULATION_VIEW.INSTRUCTIONS_STEPS.CREATE_USER_STEP.ORDER'\n\t\t\t\t\t\t\t\t| translate\n\t\t\t\t\t\t}}\n\t\t\t\t\t</strong>\n\t\t\t\t</h4>\n\t\t\t\t<span class=\"col-md-4 text-right\">\n\t\t\t\t\t{{\n\t\t\t\t\t\t'SIMULATION_VIEW.INSTRUCTIONS_STEPS.ORDER_STEP.STEP_2'\n\t\t\t\t\t\t\t| translate\n\t\t\t\t\t}}\n\t\t\t\t</span>\n\t\t\t</div>\n\t\t\t<div *ngIf=\"step === stepTypes.three\" class=\"row\">\n\t\t\t\t<h4 class=\"col-md-8\">\n\t\t\t\t\t<strong>\n\t\t\t\t\t\t{{\n\t\t\t\t\t\t\t'SIMULATION_VIEW.INSTRUCTIONS_STEPS.CONFIRM_OR_CANCEL_STEP.CONFIRM_CANCEL_ORDER'\n\t\t\t\t\t\t\t\t| translate\n\t\t\t\t\t\t}}</strong\n\t\t\t\t\t>\n\t\t\t\t</h4>\n\t\t\t\t<span class=\"col-md-4 text-right\">\n\t\t\t\t\t{{\n\t\t\t\t\t\t'SIMULATION_VIEW.INSTRUCTIONS_STEPS.CONFIRM_OR_CANCEL_STEP.STEP_3'\n\t\t\t\t\t\t\t| translate\n\t\t\t\t\t}}</span\n\t\t\t\t>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div *ngIf=\"step === stepTypes.one\">\n\t\t\t<ul *ngIf=\"inviteSystem\">\n\t\t\t\t<h5>\n\t\t\t\t\t{{\n\t\t\t\t\t\t'SIMULATION_VIEW.INSTRUCTIONS_STEPS.INVITE_STEP.TO_CONTINUE_ITs_REQUIRED_TO_BE_INVITED_IN_THE_SYSTEM'\n\t\t\t\t\t\t\t| translate\n\t\t\t\t\t}}\n\t\t\t\t</h5>\n\t\t\t\t<li>\n\t\t\t\t\t{{\n\t\t\t\t\t\t'SIMULATION_VIEW.INSTRUCTIONS_STEPS.INVITE_STEP.SEND_INVITE_REQUEST'\n\t\t\t\t\t\t\t| translate\n\t\t\t\t\t}}\n\t\t\t\t</li>\n\t\t\t\t<li>\n\t\t\t\t\t{{\n\t\t\t\t\t\t'SIMULATION_VIEW.INSTRUCTIONS_STEPS.INVITE_STEP.ALL_INVITE_REQUESTS_ARE_REVIEWED'\n\t\t\t\t\t\t\t| translate\n\t\t\t\t\t}}\n\t\t\t\t</li>\n\t\t\t\t<li>\n\t\t\t\t\t{{\n\t\t\t\t\t\t'SIMULATION_VIEW.INSTRUCTIONS_STEPS.INVITE_STEP.AFTER_YOU_GET_INVITED_BEFORE'\n\t\t\t\t\t\t\t| translate\n\t\t\t\t\t}}\n\t\t\t\t\t{{ inviteCode ? inviteCode : '...' }}\n\t\t\t\t\t{{\n\t\t\t\t\t\t'SIMULATION_VIEW.INSTRUCTIONS_STEPS.INVITE_STEP.AFTER_YOU_GET_INVITED_AFTER'\n\t\t\t\t\t\t\t| translate\n\t\t\t\t\t}}\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t\t<ul *ngIf=\"!inviteSystem\">\n\t\t\t\t<h5>\n\t\t\t\t\t{{\n\t\t\t\t\t\t'SIMULATION_VIEW.INSTRUCTIONS_STEPS.CREATE_USER_STEP.TO_CONTINUE_IS_REQUIRED_TO_REGISTER_IN_THE_SYSTEM'\n\t\t\t\t\t\t\t| translate\n\t\t\t\t\t}}\n\t\t\t\t</h5>\n\t\t\t\t<li>\n\t\t\t\t\t{{\n\t\t\t\t\t\t'SIMULATION_VIEW.INSTRUCTIONS_STEPS.CREATE_USER_STEP.CLICK_ON_BUTTON_CREATE_USER'\n\t\t\t\t\t\t\t| translate\n\t\t\t\t\t}}\n\t\t\t\t</li>\n\t\t\t\t<li>\n\t\t\t\t\t{{\n\t\t\t\t\t\t'SIMULATION_VIEW.INSTRUCTIONS_STEPS.CREATE_USER_STEP.FILL_THE_FORM_FOR_ADDITIONAL_INFO'\n\t\t\t\t\t\t\t| translate\n\t\t\t\t\t}}\n\t\t\t\t</li>\n\t\t\t\t<li>\n\t\t\t\t\t{{\n\t\t\t\t\t\t'SIMULATION_VIEW.INSTRUCTIONS_STEPS.CREATE_USER_STEP.FILL_THE_FORM_FOR_LOCATION_AND_PRESS_DONE_BUTTON'\n\t\t\t\t\t\t\t| translate\n\t\t\t\t\t}}\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\n\t\t<div *ngIf=\"step === stepTypes.two\">\n\t\t\t<ul>\n\t\t\t\t<h5>\n\t\t\t\t\t{{\n\t\t\t\t\t\t'SIMULATION_VIEW.INSTRUCTIONS_STEPS.ORDER_STEP.CREATE_ORDER'\n\t\t\t\t\t\t\t| translate\n\t\t\t\t\t}}\n\t\t\t\t</h5>\n\t\t\t\t<li>\n\t\t\t\t\t{{\n\t\t\t\t\t\t'SIMULATION_VIEW.INSTRUCTIONS_STEPS.ORDER_STEP.CHOICE_SOME_PRODUCTS_FROM_THE_TABLE'\n\t\t\t\t\t\t\t| translate\n\t\t\t\t\t}}\n\t\t\t\t</li>\n\t\t\t\t<li>\n\t\t\t\t\t{{\n\t\t\t\t\t\t'SIMULATION_VIEW.INSTRUCTIONS_STEPS.ORDER_STEP.SELECT_PRODUCT'\n\t\t\t\t\t\t\t| translate\n\t\t\t\t\t}}\n\t\t\t\t</li>\n\t\t\t\t<li>\n\t\t\t\t\t{{\n\t\t\t\t\t\t'SIMULATION_VIEW.INSTRUCTIONS_STEPS.ORDER_STEP.SELECT_BUTTON_ORDER_TO_CREATE_ORDER'\n\t\t\t\t\t\t\t| translate\n\t\t\t\t\t}}\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t\t<ul>\n\t\t\t\t<h5>\n\t\t\t\t\t{{\n\t\t\t\t\t\t'SIMULATION_VIEW.INSTRUCTIONS_STEPS.ORDER_STEP.REVIEW_ORDER_HISTORY'\n\t\t\t\t\t\t\t| translate\n\t\t\t\t\t}}\n\t\t\t\t</h5>\n\t\t\t\t<li>\n\t\t\t\t\t{{\n\t\t\t\t\t\t'SIMULATION_VIEW.INSTRUCTIONS_STEPS.ORDER_STEP.ON_PRESS_ORDER_HISTORY_TAB'\n\t\t\t\t\t\t\t| translate\n\t\t\t\t\t}}\n\t\t\t\t</li>\n\t\t\t\t<li>\n\t\t\t\t\t{{\n\t\t\t\t\t\t'SIMULATION_VIEW.INSTRUCTIONS_STEPS.ORDER_STEP.HERE_YOU_CAN_SEE_DETAILS_ABOUT_EACH_ORDER'\n\t\t\t\t\t\t\t| translate\n\t\t\t\t\t}}\n\t\t\t\t</li>\n\t\t\t\t<li>\n\t\t\t\t\t{{\n\t\t\t\t\t\t'SIMULATION_VIEW.INSTRUCTIONS_STEPS.ORDER_STEP.PRESS_ON_CARRIER_ORDER_OR_PRODUCT_NAME'\n\t\t\t\t\t\t\t| translate\n\t\t\t\t\t}}\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\n\t\t<div *ngIf=\"step === stepTypes.three\">\n\t\t\t<ul>\n\t\t\t\t<h5>\n\t\t\t\t\t{{\n\t\t\t\t\t\t'SIMULATION_VIEW.INSTRUCTIONS_STEPS.CONFIRM_OR_CANCEL_STEP.REAL_TIME'\n\t\t\t\t\t\t\t| translate\n\t\t\t\t\t}}\n\t\t\t\t</h5>\n\t\t\t\t<li>\n\t\t\t\t\t{{\n\t\t\t\t\t\t'SIMULATION_VIEW.INSTRUCTIONS_STEPS.CONFIRM_OR_CANCEL_STEP.TRACK_STATUS_ON_YOUR_ORDER'\n\t\t\t\t\t\t\t| translate\n\t\t\t\t\t}}\n\t\t\t\t</li>\n\t\t\t\t<li>\n\t\t\t\t\t{{\n\t\t\t\t\t\t'SIMULATION_VIEW.INSTRUCTIONS_STEPS.CONFIRM_OR_CANCEL_STEP.ELAPSED_TIME_FROM_CREATE_TO_DELIVERED'\n\t\t\t\t\t\t\t| translate\n\t\t\t\t\t}}\n\t\t\t\t</li>\n\t\t\t\t<li>\n\t\t\t\t\t{{\n\t\t\t\t\t\t'SIMULATION_VIEW.INSTRUCTIONS_STEPS.CONFIRM_OR_CANCEL_STEP.SHOWS_MERCHANT_LOCATION'\n\t\t\t\t\t\t\t| translate\n\t\t\t\t\t}}\n\t\t\t\t</li>\n\t\t\t\t<li>\n\t\t\t\t\t{{\n\t\t\t\t\t\t'SIMULATION_VIEW.INSTRUCTIONS_STEPS.CONFIRM_OR_CANCEL_STEP.SHOWS_CARRIER_LOCATION'\n\t\t\t\t\t\t\t| translate\n\t\t\t\t\t}}\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t\t<ul>\n\t\t\t\t<h5>\n\t\t\t\t\t{{\n\t\t\t\t\t\t'SIMULATION_VIEW.INSTRUCTIONS_STEPS.CONFIRM_OR_CANCEL_STEP.POSSIBILITIES'\n\t\t\t\t\t\t\t| translate\n\t\t\t\t\t}}\n\t\t\t\t</h5>\n\t\t\t\t<li>\n\t\t\t\t\t{{\n\t\t\t\t\t\t'SIMULATION_VIEW.INSTRUCTIONS_STEPS.CONFIRM_OR_CANCEL_STEP.SLIDER_REVIEW_OF_THE_ALL_PRODUCTS'\n\t\t\t\t\t\t\t| translate\n\t\t\t\t\t}}\n\t\t\t\t</li>\n\t\t\t\t<li>\n\t\t\t\t\t{{\n\t\t\t\t\t\t'SIMULATION_VIEW.INSTRUCTIONS_STEPS.CONFIRM_OR_CANCEL_STEP.CAN_CANCEL_IT_WITH_ORDER_CANCEL_BUTTON'\n\t\t\t\t\t\t\t| translate\n\t\t\t\t\t}}\n\t\t\t\t</li>\n\t\t\t\t<li>\n\t\t\t\t\t{{\n\t\t\t\t\t\t'SIMULATION_VIEW.INSTRUCTIONS_STEPS.CONFIRM_OR_CANCEL_STEP.AFTER_THE_ORDER_IS_DELIVER_USER_CAN_CLICK_BUTTON_ORDER_CONFIRM_TO_CONTINUE'\n\t\t\t\t\t\t\t| translate\n\t\t\t\t\t}}\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\t</nb-card-body>\n</nb-card>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/pages/+simulation/order/order.component.html":
/*!**************************************************************************************************************************************************!*\
  !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/raw-loader/dist/cjs.js!./src/app/pages/+simulation/order/order.component.html ***!
  \**************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"order\" class=\"order-info row\">\n\t<div class=\"col-md-6\">\n\t\t<div class=\"row\">\n\t\t\t<h4 class=\"main-title col-12\">\n\t\t\t\t{{ orderInfoStatuses.TITLE }}\n\t\t\t</h4>\n\n\t\t\t<h6 class=\"col-12\">\n\t\t\t\t{{ orderInfoStatuses.DETAILS }}\n\t\t\t</h6>\n\n\t\t\t<h6 class=\"col-12\" ng-if=\"!order?.isPaid\">\n\t\t\t\t{{ orderInfoStatuses.NOT_PAID_NOTE }}\n\t\t\t</h6>\n\t\t</div>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-12\">\n\t\t\t\t<ea-elapsed-time #elapsedTime></ea-elapsed-time>\n\t\t\t</div>\n\t\t</div>\n\t\t<div\n\t\t\tclass=\"row delivery-status\"\n\t\t\tdir=\"{{ 'CURRENT_DIRECTION' | translate }}\"\n\t\t>\n\t\t\t<div\n\t\t\t\tclass=\"status col-sm-3\"\n\t\t\t\t[ngClass]=\"{\n\t\t\t\t\tactivated: isWarehouseActive,\n\t\t\t\t\tcurrent: isWarehouseCurrent\n\t\t\t\t}\"\n\t\t\t>\n\t\t\t\t<h5>\n\t\t\t\t\t{{\n\t\t\t\t\t\t'SIMULATION_VIEW.ORDER_INFO.DELIVERY_STATUS.WE'\n\t\t\t\t\t\t\t| translate\n\t\t\t\t\t}}\n\t\t\t\t</h5>\n\t\t\t\t<i class=\"fa fa-building\"></i>\n\t\t\t</div>\n\t\t\t<span\n\t\t\t\tclass=\"col-sm-1 align-end\"\n\t\t\t\t[ngClass]=\"{ activated: isCarrierActive }\"\n\t\t\t\t>..</span\n\t\t\t>\n\n\t\t\t<div\n\t\t\t\tclass=\"status col-sm-4\"\n\t\t\t\t[ngClass]=\"{\n\t\t\t\t\tactivated: isCarrierActive,\n\t\t\t\t\tcurrent: isCarrierCurrent\n\t\t\t\t}\"\n\t\t\t>\n\t\t\t\t<h5>\n\t\t\t\t\t{{\n\t\t\t\t\t\t'SIMULATION_VIEW.ORDER_INFO.DELIVERY_STATUS.CARRIER'\n\t\t\t\t\t\t\t| translate\n\t\t\t\t\t}}\n\t\t\t\t</h5>\n\t\t\t\t<i\n\t\t\t\t\tclass=\"fa fa-motorcycle\"\n\t\t\t\t\t[ngClass]=\"{\n\t\t\t\t\t\tflip: ('CURRENT_DIRECTION' | translate) == 'rtl'\n\t\t\t\t\t}\"\n\t\t\t\t></i>\n\t\t\t</div>\n\t\t\t<span\n\t\t\t\tclass=\"col-sm-1 align-end\"\n\t\t\t\t[ngClass]=\"{ activated: isCustomerActive }\"\n\t\t\t\t>..</span\n\t\t\t>\n\n\t\t\t<div\n\t\t\t\tclass=\"status col-sm-3\"\n\t\t\t\t[ngClass]=\"{\n\t\t\t\t\tactivated: isCustomerActive,\n\t\t\t\t\tcurrent: isCustomerCurrent\n\t\t\t\t}\"\n\t\t\t>\n\t\t\t\t<h5>\n\t\t\t\t\t{{\n\t\t\t\t\t\t'SIMULATION_VIEW.ORDER_INFO.DELIVERY_STATUS.YOU'\n\t\t\t\t\t\t\t| translate\n\t\t\t\t\t}}\n\t\t\t\t</h5>\n\t\t\t\t<i class=\"fa fa-home\"></i>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-12 no-padding\">\n\t\t\t\t<slideshow\n\t\t\t\t\t*ngIf=\"order.products.length\"\n\t\t\t\t\t[height]=\"'355px'\"\n\t\t\t\t\t[autoPlay]=\"true\"\n\t\t\t\t\t[autoPlayInterval]=\"5000\"\n\t\t\t\t\t[imageUrls]=\"getSlideImage(order)\"\n\t\t\t\t\t[lazyLoad]=\"order.products.length\"\n\t\t\t\t\t[autoPlayWaitForLazyLoad]=\"true\"\n\t\t\t\t\t>></slideshow\n\t\t\t\t>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"col-md-6 order-map\">\n\t\t<ea-carrier-location\n\t\t\t[order]=\"order\"\n\t\t\t*ngIf=\"isCarrierCurrent\"\n\t\t></ea-carrier-location>\n\t\t<ea-user-warehouse-location\n\t\t\t[order]=\"order\"\n\t\t\t*ngIf=\"!isCarrierCurrent\"\n\t\t></ea-user-warehouse-location>\n\t</div>\n</div>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/pages/+simulation/products/products.component.html":
/*!********************************************************************************************************************************************************!*\
  !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/raw-loader/dist/cjs.js!./src/app/pages/+simulation/products/products.component.html ***!
  \********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng2-smart-table\n\t[settings]=\"settingsSmartTable\"\n\t[source]=\"sourceSmartTable\"\n\tid=\"smartTableCustomer\"\n\t(userRowSelect)=\"selectProductTmp($event)\"\n>\n</ng2-smart-table>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/pages/+simulation/simulation.component.html":
/*!*************************************************************************************************************************************************!*\
  !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/raw-loader/dist/cjs.js!./src/app/pages/+simulation/simulation.component.html ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<toaster-container></toaster-container>\n<div class=\"row\">\n\t<div class=\"col-md-9\">\n\t\t<nb-card class=\"col-12\">\n\t\t\t<nb-card-header>\n\t\t\t\t<div class=\"col-md-8\">\n\t\t\t\t\t<h1>{{ 'SIMULATION_VIEW.SIMULATION' | translate }}</h1>\n\t\t\t\t\t<br />\n\t\t\t\t\t<h4>\n\t\t\t\t\t\t{{ 'SIMULATION_VIEW.PURCHASE_PRODUCTS' | translate }}\n\t\t\t\t\t</h4>\n\t\t\t\t</div>\n\t\t\t</nb-card-header>\n\n\t\t\t<nb-card-body>\n\t\t\t\t<div *ngIf=\"loadButtons\" id=\"simulations-buttons\" class=\"row\">\n\t\t\t\t\t<div *ngIf=\"user == null\">\n\t\t\t\t\t\t<button\n\t\t\t\t\t\t\tnbButton\n\t\t\t\t\t\t\thero\n\t\t\t\t\t\t\tstatus=\"info\"\n\t\t\t\t\t\t\t*ngIf=\"inviteSystem && !inviteRequest && !invite\"\n\t\t\t\t\t\t\t(click)=\"showInviteRequestModal()\"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t\t{{ 'SIMULATION_VIEW.INVITE_REQUEST' | translate }}\n\t\t\t\t\t\t</button>\n\t\t\t\t\t\t<button\n\t\t\t\t\t\t\tnbButton\n\t\t\t\t\t\t\thero\n\t\t\t\t\t\t\tstatus=\"success\"\n\t\t\t\t\t\t\t*ngIf=\"inviteSystem && inviteRequest\"\n\t\t\t\t\t\t\t(click)=\"inviteUser()\"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t\t{{ 'SIMULATION_VIEW.INVITE_USER' | translate }}\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</div>\n\t\t\t\t\t<button\n\t\t\t\t\t\tnbButton\n\t\t\t\t\t\thero\n\t\t\t\t\t\tstatus=\"info\"\n\t\t\t\t\t\t*ngIf=\"\n\t\t\t\t\t\t\t(!inviteSystem && user == null) ||\n\t\t\t\t\t\t\t(invite && user == null)\n\t\t\t\t\t\t\"\n\t\t\t\t\t\t(click)=\"createUser()\"\n\t\t\t\t\t>\n\t\t\t\t\t\t{{ 'SIMULATION_VIEW.CREATE_USER' | translate }}\n\t\t\t\t\t</button>\n\t\t\t\t\t<button\n\t\t\t\t\t\tnbButton\n\t\t\t\t\t\tstatus=\"success\"\n\t\t\t\t\t\tid=\"order\"\n\t\t\t\t\t\tclass=\"fix-btn-height\"\n\t\t\t\t\t\t(click)=\"orderCreate()\"\n\t\t\t\t\t\t[disabled]=\"!hasProductsForOrder\"\n\t\t\t\t\t\t[hidden]=\"order != null || user == null\"\n\t\t\t\t\t\t[nbSpinner]=\"loading\"\n\t\t\t\t\t>\n\t\t\t\t\t\t{{ 'SIMULATION_VIEW.ORDER' | translate }}\n\t\t\t\t\t</button>\n\t\t\t\t\t<div\n\t\t\t\t\t\t*ngIf=\"hasProductsForOrder\"\n\t\t\t\t\t\tclass=\"order-info bg-warning\"\n\t\t\t\t\t>\n\t\t\t\t\t\t<span class=\"text-white d-block\"\n\t\t\t\t\t\t\t>{{ 'SIMULATION_VIEW.PRODUCTS' | translate }}:\n\t\t\t\t\t\t\t<h6 class=\"d-inline-block\">\n\t\t\t\t\t\t\t\t{{ productsCount }}\n\t\t\t\t\t\t\t</h6></span\n\t\t\t\t\t\t>\n\t\t\t\t\t\t<span class=\"text-white d-block\"\n\t\t\t\t\t\t\t>{{ 'SIMULATION_VIEW.STORE' | translate }}:\n\t\t\t\t\t\t\t<h6 class=\"d-inline-block\">\n\t\t\t\t\t\t\t\t{{ warehouse?.name }}\n\t\t\t\t\t\t\t</h6></span\n\t\t\t\t\t\t>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div id=\"orders\" class=\"btn-group\" *ngIf=\"order != null\">\n\t\t\t\t\t\t<button\n\t\t\t\t\t\t\tnbButton\n\t\t\t\t\t\t\tstatus=\"success\"\n\t\t\t\t\t\t\tid=\"orderConfirm\"\n\t\t\t\t\t\t\t[disabled]=\"!order?.isCompleted\"\n\t\t\t\t\t\t\t(click)=\"orderConfirm()\"\n\t\t\t\t\t\t\t[nbSpinner]=\"loading\"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t\t{{ 'SIMULATION_VIEW.ORDER_CONFIRM' | translate }}\n\t\t\t\t\t\t</button>\n\t\t\t\t\t\t<button\n\t\t\t\t\t\t\tnbButton\n\t\t\t\t\t\t\tstatus=\"danger\"\n\t\t\t\t\t\t\tid=\"orderCancel\"\n\t\t\t\t\t\t\t[disabled]=\"order?.isCompleted\"\n\t\t\t\t\t\t\t(click)=\"orderCancel()\"\n\t\t\t\t\t\t\t[nbSpinner]=\"loading\"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t\t{{ 'SIMULATION_VIEW.ORDER_CANCEL' | translate }}\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<nb-tabset\n\t\t\t\t\tclass=\"row\"\n\t\t\t\t\t[hidden]=\"order != null || user == null\"\n\t\t\t\t\tfullWidth\n\t\t\t\t>\n\t\t\t\t\t<nb-tab\n\t\t\t\t\t\ttabTitle=\"{{\n\t\t\t\t\t\t\t'SIMULATION_VIEW.TAB_BUTTONS.PRODUCTS' | translate\n\t\t\t\t\t\t}}\"\n\t\t\t\t\t>\n\t\t\t\t\t\t<ea-simulation-products\n\t\t\t\t\t\t\t#productsTable\n\t\t\t\t\t\t></ea-simulation-products>\n\t\t\t\t\t</nb-tab>\n\t\t\t\t\t<nb-tab\n\t\t\t\t\t\ttabTitle=\"{{\n\t\t\t\t\t\t\t'SIMULATION_VIEW.TAB_BUTTONS.ORDER_HISTORY'\n\t\t\t\t\t\t\t\t| translate\n\t\t\t\t\t\t}}\"\n\t\t\t\t\t>\n\t\t\t\t\t\t<ea-customer-orders\n\t\t\t\t\t\t\t#orderHistoryTable\n\t\t\t\t\t\t\t[userId]=\"user?.id\"\n\t\t\t\t\t\t></ea-customer-orders>\n\t\t\t\t\t</nb-tab>\n\t\t\t\t</nb-tabset>\n\n\t\t\t\t<ea-simulation-order\n\t\t\t\t\t*ngIf=\"order != null\"\n\t\t\t\t\t[order]=\"order\"\n\t\t\t\t></ea-simulation-order>\n\t\t\t</nb-card-body>\n\t\t</nb-card>\n\t</div>\n\t<div class=\"col-md-3\">\n\t\t<ea-simulation-instructions\n\t\t\t[inviteSystem]=\"inviteSystem\"\n\t\t\t#instructions\n\t\t></ea-simulation-instructions>\n\t</div>\n</div>\n");

/***/ }),

/***/ "../../node_modules/rxjs-compat/_esm2015/add/observable/of.js":
/*!**************************************************************************************************************!*\
  !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/rxjs-compat/_esm2015/add/observable/of.js ***!
  \**************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");

rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].of = rxjs__WEBPACK_IMPORTED_MODULE_0__["of"];
//# sourceMappingURL=of.js.map

/***/ }),

/***/ "../common/src/StorageService.ts":
/*!***************************************!*\
  !*** ../common/src/StorageService.ts ***!
  \***************************************/
/*! exports provided: StorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageService", function() { return StorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");

class StorageService {
}


/***/ }),

/***/ "./src/app/@core/data/fakeDataServices/storageService.ts":
/*!***************************************************************!*\
  !*** ./src/app/@core/data/fakeDataServices/storageService.ts ***!
  \***************************************************************/
/*! exports provided: AdminStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminStorageService", function() { return AdminStorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _modules_server_common_StorageService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @modules/server.common/StorageService */ "../common/src/StorageService.ts");
/* harmony import */ var _modules_server_common_entities_GeoLocation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @modules/server.common/entities/GeoLocation */ "../common/src/entities/GeoLocation.ts");
/* harmony import */ var _modules_server_common_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @modules/server.common/utils */ "../common/src/utils.ts");
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");






const lng = environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"]['DEFAULT_LONGITUDE'];
const lat = environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"]['DEFAULT_LATITUDE'];
let AdminStorageService = class AdminStorageService extends _modules_server_common_StorageService__WEBPACK_IMPORTED_MODULE_1__["StorageService"] {
    constructor() {
        super(...arguments);
        this.isConnected = false;
        this.order = null;
        this.user = null;
        this.customerGeoLocation = lng && lat
            ? new _modules_server_common_entities_GeoLocation__WEBPACK_IMPORTED_MODULE_2__["default"]({
                _id: Object(_modules_server_common_utils__WEBPACK_IMPORTED_MODULE_3__["generateObjectIdString"])(),
                _createdAt: new Date().toString(),
                _updatedAt: new Date().toString(),
                city: 'אשדוד',
                postcode: '77452',
                streetAddress: 'העצמאות',
                house: '38',
                countryId: 1,
                loc: {
                    type: 'Point',
                    coordinates: [lng, lat],
                },
            })
            : null;
    }
};
AdminStorageService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Injectable"])()
], AdminStorageService);



/***/ }),

/***/ "./src/app/@shared/elapsed-time/elapsed-time.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/@shared/elapsed-time/elapsed-time.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0BzaGFyZWQvZWxhcHNlZC10aW1lL2VsYXBzZWQtdGltZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/@shared/elapsed-time/elapsed-time.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/@shared/elapsed-time/elapsed-time.component.ts ***!
  \****************************************************************/
/*! exports provided: ElapsedTimeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElapsedTimeComponent", function() { return ElapsedTimeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ElapsedTimeComponent = class ElapsedTimeComponent {
    constructor() {
        this.timePasssed = { timePassed: '00 : 00' };
    }
    ngOnInit() {
        if (this._getEndTime) {
            this.timePasssed = JSON.parse(this._getEndTime);
        }
        else {
            this.timer = setInterval(this.updateTime, 1000, [this.timePasssed]);
        }
    }
    updateTime(comp) {
        const currDate = new Date();
        const startDate = new Date(JSON.parse(localStorage.getItem('simulationStartDate')));
        if (startDate) {
            let diff = (currDate.getTime() - startDate.getTime()) / 1000;
            const hoursPassed = Math.floor(diff / 3600);
            diff = diff - hoursPassed * 3600;
            const minutesPassed = Math.floor(diff / 60);
            const secondsPassed = Number((diff - minutesPassed * 60).toFixed(0));
            let minutesPassedStr = '';
            let secondsPassedStr = '';
            let hoursPassedStr = '';
            if (hoursPassed >= 1) {
                hoursPassedStr = hoursPassed.toString() + ' : ';
            }
            minutesPassedStr =
                minutesPassed < 10
                    ? '0' + minutesPassed
                    : minutesPassed.toString();
            secondsPassedStr =
                secondsPassed < 10
                    ? '0' + secondsPassed
                    : secondsPassed.toString();
            comp[0].timePassed =
                hoursPassedStr + minutesPassedStr + ' : ' + secondsPassedStr;
        }
    }
    get _getEndTime() {
        return localStorage.getItem('simulationEndTime');
    }
};
ElapsedTimeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ea-elapsed-time',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./elapsed-time.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/@shared/elapsed-time/elapsed-time.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./elapsed-time.component.scss */ "./src/app/@shared/elapsed-time/elapsed-time.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], ElapsedTimeComponent);



/***/ }),

/***/ "./src/app/@shared/elapsed-time/elapsed-time.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/@shared/elapsed-time/elapsed-time.module.ts ***!
  \*************************************************************/
/*! exports provided: ElapsedTimeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElapsedTimeModule", function() { return ElapsedTimeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _elapsed_time_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./elapsed-time.component */ "./src/app/@shared/elapsed-time/elapsed-time.component.ts");






let ElapsedTimeModule = class ElapsedTimeModule {
};
ElapsedTimeModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"].forChild()],
        declarations: [_elapsed_time_component__WEBPACK_IMPORTED_MODULE_5__["ElapsedTimeComponent"]],
        entryComponents: [_elapsed_time_component__WEBPACK_IMPORTED_MODULE_5__["ElapsedTimeComponent"]],
        exports: [_elapsed_time_component__WEBPACK_IMPORTED_MODULE_5__["ElapsedTimeComponent"]],
    })
], ElapsedTimeModule);



/***/ }),

/***/ "./src/app/@shared/invite/by-code/by-code-modal.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/@shared/invite/by-code/by-code-modal.component.ts ***!
  \*******************************************************************/
/*! exports provided: ByCodeModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ByCodeModalComponent", function() { return ByCodeModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _modules_client_common_angular2_routers_invite_router_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @modules/client.common.angular2/routers/invite-router.service */ "../common-angular/src/routers/invite-router.service.ts");
/* harmony import */ var _modules_client_common_angular2_routers_user_auth_router_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @modules/client.common.angular2/routers/user-auth-router.service */ "../common-angular/src/routers/user-auth-router.service.ts");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");







let ByCodeModalComponent = class ByCodeModalComponent {
    constructor(inviteRouter, userAuthRouter, toasterService, activeModal) {
        this.inviteRouter = inviteRouter;
        this.userAuthRouter = userAuthRouter;
        this.toasterService = toasterService;
        this.activeModal = activeModal;
    }
    closeModal() {
        this.activeModal.close();
    }
    login() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.code > 999 && this.code < 10000 && this.location) {
                try {
                    const invite = yield this.inviteRouter
                        .getByCode({
                        location: this.location,
                        inviteCode: this.code.toString(),
                    })
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["first"])())
                        .toPromise();
                    if (invite) {
                        const user = yield this.userAuthRouter.register({
                            user: {
                                apartment: invite.apartment,
                                geoLocation: invite.geoLocation,
                            },
                        });
                        this.toasterService.pop('success', `Successful logen with code`);
                        this.activeModal.close(user);
                    }
                    else {
                        this.invalidCodeToaster();
                    }
                }
                catch (error) {
                    this.toasterService.pop('error', `Error: "${error.message}"`);
                }
            }
            else {
                this.invalidCodeToaster();
            }
        });
    }
    invalidCodeToaster() {
        this.toasterService.pop('error', `Invalid code.`);
    }
};
ByCodeModalComponent.ctorParameters = () => [
    { type: _modules_client_common_angular2_routers_invite_router_service__WEBPACK_IMPORTED_MODULE_2__["InviteRouter"] },
    { type: _modules_client_common_angular2_routers_user_auth_router_service__WEBPACK_IMPORTED_MODULE_3__["UserAuthRouter"] },
    { type: angular2_toaster__WEBPACK_IMPORTED_MODULE_4__["ToasterService"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbActiveModal"] }
];
ByCodeModalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./by-code-modal.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/@shared/invite/by-code/by-code-modal.component.html")).default,
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_modules_client_common_angular2_routers_invite_router_service__WEBPACK_IMPORTED_MODULE_2__["InviteRouter"],
        _modules_client_common_angular2_routers_user_auth_router_service__WEBPACK_IMPORTED_MODULE_3__["UserAuthRouter"],
        angular2_toaster__WEBPACK_IMPORTED_MODULE_4__["ToasterService"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbActiveModal"]])
], ByCodeModalComponent);



/***/ }),

/***/ "./src/app/@shared/invite/by-code/by-code-modal.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/@shared/invite/by-code/by-code-modal.module.ts ***!
  \****************************************************************/
/*! exports provided: ByCodeModalModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ByCodeModalModule", function() { return ByCodeModalModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../@theme/theme.module */ "./src/app/@theme/theme.module.ts");
/* harmony import */ var _by_code_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./by-code-modal.component */ "./src/app/@shared/invite/by-code/by-code-modal.component.ts");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/fesm2015/index.js");






let ByCodeModalModule = class ByCodeModalModule {
};
ByCodeModalModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_theme_theme_module__WEBPACK_IMPORTED_MODULE_3__["ThemeModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"].forChild(), _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbButtonModule"]],
        exports: [_by_code_modal_component__WEBPACK_IMPORTED_MODULE_4__["ByCodeModalComponent"]],
        declarations: [_by_code_modal_component__WEBPACK_IMPORTED_MODULE_4__["ByCodeModalComponent"]],
        entryComponents: [_by_code_modal_component__WEBPACK_IMPORTED_MODULE_4__["ByCodeModalComponent"]],
    })
], ByCodeModalModule);



/***/ }),

/***/ "./src/app/@shared/invite/invite-request/invite-request-modal.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/@shared/invite/invite-request/invite-request-modal.component.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".invite-request-modal {\n  margin: 0 !important;\n}\n\n.invite-request-modal .modal-body {\n  padding-left: 0;\n  padding-right: 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvZC9Xb3JrL0FuZ3VsYXIvTmV3IGZvbGRlciAoMikvRG9sY2VHcm9jZXJ5L3BhY2thZ2VzL2FkbWluLXdlYi1hbmd1bGFyL3NyYy9hcHAvQHNoYXJlZC9pbnZpdGUvaW52aXRlLXJlcXVlc3QvaW52aXRlLXJlcXVlc3QtbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL0BzaGFyZWQvaW52aXRlL2ludml0ZS1yZXF1ZXN0L2ludml0ZS1yZXF1ZXN0LW1vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Msb0JBQW9CO0FDQ3JCOztBREZBO0VBR0UsZUFBZTtFQUNmLGdCQUFnQjtBQ0dsQiIsImZpbGUiOiJzcmMvYXBwL0BzaGFyZWQvaW52aXRlL2ludml0ZS1yZXF1ZXN0L2ludml0ZS1yZXF1ZXN0LW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmludml0ZS1yZXF1ZXN0LW1vZGFsIHtcblx0bWFyZ2luOiAwICFpbXBvcnRhbnQ7XG5cdC5tb2RhbC1ib2R5IHtcblx0XHRwYWRkaW5nLWxlZnQ6IDA7XG5cdFx0cGFkZGluZy1yaWdodDogMDtcblx0fVxufVxuIiwiLmludml0ZS1yZXF1ZXN0LW1vZGFsIHtcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG59XG5cbi5pbnZpdGUtcmVxdWVzdC1tb2RhbCAubW9kYWwtYm9keSB7XG4gIHBhZGRpbmctbGVmdDogMDtcbiAgcGFkZGluZy1yaWdodDogMDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/@shared/invite/invite-request/invite-request-modal.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/@shared/invite/invite-request/invite-request-modal.component.ts ***!
  \*********************************************************************************/
/*! exports provided: InviteRequestModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InviteRequestModalComponent", function() { return InviteRequestModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_shared_forms_location__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/@shared/forms/location */ "./src/app/@shared/forms/location/index.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _modules_client_common_angular2_routers_invite_request_router_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @modules/client.common.angular2/routers/invite-request-router.service */ "../common-angular/src/routers/invite-request-router.service.ts");







let InviteRequestModalComponent = class InviteRequestModalComponent {
    constructor(toasterService, activeModal, formBuilder, inviteRequestRouter) {
        this.toasterService = toasterService;
        this.activeModal = activeModal;
        this.formBuilder = formBuilder;
        this.inviteRequestRouter = inviteRequestRouter;
        this.mapTypeEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.mapCoordEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.mapGeometryEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.form = this.formBuilder.group({
            location: _app_shared_forms_location__WEBPACK_IMPORTED_MODULE_2__["LocationFormComponent"].buildForm(this.formBuilder),
            apartment: _app_shared_forms_location__WEBPACK_IMPORTED_MODULE_2__["LocationFormComponent"].buildApartmentForm(this.formBuilder),
        });
        this.location = this.form.get('location');
        this.apartment = this.form.get('apartment');
    }
    onCoordinatesChanges(coords) {
        this.mapCoordEmitter.emit(coords);
    }
    onGeometrySend(geometry) {
        this.mapGeometryEmitter.emit(geometry);
    }
    emitMapType(mapType) {
        this.mapTypeEmitter.emit(mapType);
    }
    create() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const inciteRequest = yield this.inviteRequestRouter.create(this.getInviteRequestCreateObj());
                this.toasterService.pop('success', `Successful create invite request`);
                this.activeModal.close(inciteRequest);
            }
            catch (err) {
                this.toasterService.pop('error', `Error in creating invite request: "${err.message}"`);
            }
        });
    }
    closeModal() {
        this.activeModal.close();
    }
    getInviteRequestCreateObj() {
        const geoLocationInput = this.locationForm.getValue();
        geoLocationInput.loc.coordinates.reverse();
        return {
            geoLocation: geoLocationInput,
            apartment: this.locationForm.getApartment() || ' ',
        };
    }
};
InviteRequestModalComponent.ctorParameters = () => [
    { type: angular2_toaster__WEBPACK_IMPORTED_MODULE_4__["ToasterService"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbActiveModal"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _modules_client_common_angular2_routers_invite_request_router_service__WEBPACK_IMPORTED_MODULE_6__["InviteRequestRouter"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('locationForm', { static: true }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _app_shared_forms_location__WEBPACK_IMPORTED_MODULE_2__["LocationFormComponent"])
], InviteRequestModalComponent.prototype, "locationForm", void 0);
InviteRequestModalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ea-invite-request-modal',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./invite-request-modal.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/@shared/invite/invite-request/invite-request-modal.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! .//invite-request-modal.component.scss */ "./src/app/@shared/invite/invite-request/invite-request-modal.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [angular2_toaster__WEBPACK_IMPORTED_MODULE_4__["ToasterService"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbActiveModal"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
        _modules_client_common_angular2_routers_invite_request_router_service__WEBPACK_IMPORTED_MODULE_6__["InviteRequestRouter"]])
], InviteRequestModalComponent);



/***/ }),

/***/ "./src/app/@shared/invite/invite-request/invite-request-modal.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/@shared/invite/invite-request/invite-request-modal.module.ts ***!
  \******************************************************************************/
/*! exports provided: InviteRequestModalModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InviteRequestModalModule", function() { return InviteRequestModalModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var angular2_wizard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-wizard */ "./node_modules/@ever-co/angular2-wizard/dist/index.js");
/* harmony import */ var angular2_wizard__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_wizard__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../@theme/theme.module */ "./src/app/@theme/theme.module.ts");
/* harmony import */ var _forms_location__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../forms/location */ "./src/app/@shared/forms/location/index.ts");
/* harmony import */ var _forms_google_map_google_map_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../forms/google-map/google-map.module */ "./src/app/@shared/forms/google-map/google-map.module.ts");
/* harmony import */ var _invite_request_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./invite-request-modal.component */ "./src/app/@shared/invite/invite-request/invite-request-modal.component.ts");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/fesm2015/index.js");









let InviteRequestModalModule = class InviteRequestModalModule {
};
InviteRequestModalModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _theme_theme_module__WEBPACK_IMPORTED_MODULE_4__["ThemeModule"],
            angular2_wizard__WEBPACK_IMPORTED_MODULE_3__["FormWizardModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"].forChild(),
            _forms_location__WEBPACK_IMPORTED_MODULE_5__["LocationFormModule"],
            _forms_google_map_google_map_module__WEBPACK_IMPORTED_MODULE_6__["GoogleMapModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbButtonModule"],
        ],
        exports: [_invite_request_modal_component__WEBPACK_IMPORTED_MODULE_7__["InviteRequestModalComponent"]],
        declarations: [_invite_request_modal_component__WEBPACK_IMPORTED_MODULE_7__["InviteRequestModalComponent"]],
        entryComponents: [_invite_request_modal_component__WEBPACK_IMPORTED_MODULE_7__["InviteRequestModalComponent"]],
    })
], InviteRequestModalModule);



/***/ }),

/***/ "./src/app/@shared/render-component/simulation-table/simulation-table.module.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/@shared/render-component/simulation-table/simulation-table.module.ts ***!
  \**************************************************************************************/
/*! exports provided: SimulationTableModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimulationTableModule", function() { return SimulationTableModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../@theme */ "./src/app/@theme/index.ts");
/* harmony import */ var _sumulation_json_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sumulation-json.component */ "./src/app/@shared/render-component/simulation-table/sumulation-json.component.ts");
/* harmony import */ var _json_modal_json_modal_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../json-modal/json-modal.module */ "./src/app/@shared/json-modal/json-modal.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");







const COMPONENTS = [_sumulation_json_component__WEBPACK_IMPORTED_MODULE_4__["SimulationJsonComponent"]];
let SimulationTableModule = class SimulationTableModule {
};
SimulationTableModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _theme__WEBPACK_IMPORTED_MODULE_3__["ThemeModule"],
            _json_modal_json_modal_module__WEBPACK_IMPORTED_MODULE_5__["JsonModalModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"].forChild(),
        ],
        declarations: COMPONENTS,
        entryComponents: COMPONENTS,
        exports: COMPONENTS,
    })
], SimulationTableModule);



/***/ }),

/***/ "./src/app/@shared/render-component/simulation-table/sumulation-json.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/@shared/render-component/simulation-table/sumulation-json.component.ts ***!
  \****************************************************************************************/
/*! exports provided: SimulationJsonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimulationJsonComponent", function() { return SimulationJsonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _json_modal_json_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../json-modal/json-modal.component */ "./src/app/@shared/json-modal/json-modal.component.ts");
/* harmony import */ var _modules_client_common_angular2_locale_product_locales_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @modules/client.common.angular2/locale/product-locales.service */ "../common-angular/src/locale/product-locales.service.ts");





let SimulationJsonComponent = class SimulationJsonComponent {
    constructor(modalService, _productLocalesService) {
        this.modalService = modalService;
        this._productLocalesService = _productLocalesService;
    }
    ngOnInit() { }
    openInfo() {
        const activeModal = this.modalService.open(_json_modal_json_modal_component__WEBPACK_IMPORTED_MODULE_3__["JsonModalComponent"], {
            size: 'lg',
            container: 'nb-layout',
            windowClass: 'simJSON',
        });
        const modalComponent = activeModal.componentInstance;
        modalComponent.obj = this.rowData;
        modalComponent.title = 'Product';
        modalComponent.subTitle = this.localeTranslate(this.rowData.product['title']);
    }
    localeTranslate(member) {
        return this._productLocalesService.getTranslate(member);
    }
    openCancel() {
    }
};
SimulationJsonComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"] },
    { type: _modules_client_common_angular2_locale_product_locales_service__WEBPACK_IMPORTED_MODULE_4__["ProductLocalesService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], SimulationJsonComponent.prototype, "value", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], SimulationJsonComponent.prototype, "rowData", void 0);
SimulationJsonComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./sumulation-json.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/@shared/render-component/simulation-table/sumulation-json.component.html")).default,
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"],
        _modules_client_common_angular2_locale_product_locales_service__WEBPACK_IMPORTED_MODULE_4__["ProductLocalesService"]])
], SimulationJsonComponent);



/***/ }),

/***/ "./src/app/@theme/index.ts":
/*!*********************************!*\
  !*** ./src/app/@theme/index.ts ***!
  \*********************************/
/*! exports provided: HttpLoaderFactory, ThemeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _theme_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./theme.module */ "./src/app/@theme/theme.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return _theme_module__WEBPACK_IMPORTED_MODULE_1__["HttpLoaderFactory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ThemeModule", function() { return _theme_module__WEBPACK_IMPORTED_MODULE_1__["ThemeModule"]; });





/***/ }),

/***/ "./src/app/pages/+simulation/instructions/instructions.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/pages/+simulation/instructions/instructions.component.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzLytzaW11bGF0aW9uL2luc3RydWN0aW9ucy9pbnN0cnVjdGlvbnMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/+simulation/instructions/instructions.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/+simulation/instructions/instructions.component.ts ***!
  \**************************************************************************/
/*! exports provided: Step, SimulationInstructionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Step", function() { return Step; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimulationInstructionsComponent", function() { return SimulationInstructionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



var Step;
(function (Step) {
    Step[Step["One"] = 0] = "One";
    Step[Step["Two"] = 1] = "Two";
    Step[Step["Three"] = 2] = "Three";
})(Step || (Step = {}));
let SimulationInstructionsComponent = class SimulationInstructionsComponent {
    constructor() {
        this.stepTypes = {
            one: Step.One,
            two: Step.Two,
            three: Step.Three,
        };
        this._ngDestroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    ngOnDestroy() {
        this._ngDestroy$.next();
        this._ngDestroy$.complete();
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
], SimulationInstructionsComponent.prototype, "inviteSystem", void 0);
SimulationInstructionsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ea-simulation-instructions',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./instructions.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/pages/+simulation/instructions/instructions.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./instructions.component.scss */ "./src/app/pages/+simulation/instructions/instructions.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], SimulationInstructionsComponent);



/***/ }),

/***/ "./src/app/pages/+simulation/order/order.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/pages/+simulation/order/order.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@-webkit-keyframes blinking {\n  0% {\n    color: black;\n  }\n  50% {\n    color: #9a9a9a;\n  }\n}\n\n@keyframes blinking {\n  0% {\n    color: black;\n  }\n  50% {\n    color: #9a9a9a;\n  }\n}\n\n.order-info {\n  text-align: center;\n  background: #ebeef2;\n  margin-top: 1.25rem;\n}\n\n.order-info .row {\n  margin-top: 1rem;\n}\n\n.order-info .col {\n  padding: 0 !important;\n}\n\n.order-info .delivery-status {\n  margin-top: 20px;\n  margin-bottom: 20px;\n  text-align: center;\n  font-size: 36px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.order-info .delivery-status .status {\n  display: inline-block;\n}\n\n.order-info .delivery-status .align-end {\n  -ms-flex-item-align: end;\n      align-self: flex-end;\n}\n\n.order-info .delivery-status * {\n  color: #9a9a9a !important;\n}\n\n.order-info .delivery-status .activated,\n.order-info .delivery-status .activated * {\n  color: black !important;\n}\n\n.order-info .delivery-status .current,\n.order-info .delivery-status .current * {\n  -webkit-animation: blinking 1s ease-in-out infinite !important;\n          animation: blinking 1s ease-in-out infinite !important;\n}\n\n.order-info .order-img {\n  padding-right: 0;\n}\n\n.order-info .order-img img {\n  max-height: 350px;\n  max-width: 100%;\n}\n\n.order-info .order-map {\n  min-height: 300px;\n  padding: 0;\n}\n\n.order-info .no-padding {\n  padding: 0 !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvZC9Xb3JrL0FuZ3VsYXIvTmV3IGZvbGRlciAoMikvRG9sY2VHcm9jZXJ5L3BhY2thZ2VzL2FkbWluLXdlYi1hbmd1bGFyL3NyYy9hcHAvcGFnZXMvK3NpbXVsYXRpb24vb3JkZXIvb3JkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzLytzaW11bGF0aW9uL29yZGVyL29yZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0M7SUFDQyxZQUFZO0VDQ1o7RURDRDtJQUNDLGNBQWM7RUNDZDtBQUNGOztBRFBBO0VBQ0M7SUFDQyxZQUFZO0VDQ1o7RURDRDtJQUNDLGNBQWM7RUNDZDtBQUNGOztBRENBO0VBQ0Msa0JBQWtCO0VBRWxCLG1CQUFtQjtFQU9uQixtQkFBbUI7QUNMcEI7O0FETEE7RUFLRSxnQkFBZ0I7QUNJbEI7O0FEVEE7RUFRRSxxQkFBcUI7QUNLdkI7O0FEYkE7RUFZRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2Ysb0JBQWE7RUFBYixvQkFBYTtFQUFiLGFBQWE7QUNLZjs7QURyQkE7RUFrQkcscUJBQXFCO0FDT3hCOztBRHpCQTtFQXNCRyx3QkFBb0I7TUFBcEIsb0JBQW9CO0FDT3ZCOztBRDdCQTtFQTBCRyx5QkFBeUI7QUNPNUI7O0FEakNBOztFQWdDSSx1QkFBdUI7QUNNM0I7O0FEdENBOztFQXVDSSw4REFBc0Q7VUFBdEQsc0RBQXNEO0FDSTFEOztBRDNDQTtFQTZDRSxnQkFBZ0I7QUNFbEI7O0FEL0NBO0VBK0NHLGlCQUFpQjtFQUNqQixlQUFlO0FDSWxCOztBRHBEQTtFQXFERSxpQkFBaUI7RUFDakIsVUFBVTtBQ0daOztBRHpEQTtFQTBERSxxQkFBcUI7QUNHdkIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy8rc2ltdWxhdGlvbi9vcmRlci9vcmRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBrZXlmcmFtZXMgYmxpbmtpbmcge1xuXHQwJSB7XG5cdFx0Y29sb3I6IGJsYWNrO1xuXHR9XG5cdDUwJSB7XG5cdFx0Y29sb3I6ICM5YTlhOWE7XG5cdH1cbn1cbi5vcmRlci1pbmZvIHtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXG5cdGJhY2tncm91bmQ6ICNlYmVlZjI7XG5cdC5yb3cge1xuXHRcdG1hcmdpbi10b3A6IDFyZW07XG5cdH1cblx0LmNvbCB7XG5cdFx0cGFkZGluZzogMCAhaW1wb3J0YW50O1xuXHR9XG5cdG1hcmdpbi10b3A6IDEuMjVyZW07XG5cdC5kZWxpdmVyeS1zdGF0dXMge1xuXHRcdG1hcmdpbi10b3A6IDIwcHg7XG5cdFx0bWFyZ2luLWJvdHRvbTogMjBweDtcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0Zm9udC1zaXplOiAzNnB4O1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0LnN0YXR1cyB7XG5cdFx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdFx0fVxuXG5cdFx0LmFsaWduLWVuZCB7XG5cdFx0XHRhbGlnbi1zZWxmOiBmbGV4LWVuZDtcblx0XHR9XG5cblx0XHQqIHtcblx0XHRcdGNvbG9yOiAjOWE5YTlhICFpbXBvcnRhbnQ7XG5cdFx0fVxuXG5cdFx0LmFjdGl2YXRlZCB7XG5cdFx0XHQmLFxuXHRcdFx0KiB7XG5cdFx0XHRcdGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC5jdXJyZW50IHtcblx0XHRcdCYsXG5cdFx0XHQqIHtcblx0XHRcdFx0YW5pbWF0aW9uOiBibGlua2luZyAxcyBlYXNlLWluLW91dCBpbmZpbml0ZSAhaW1wb3J0YW50O1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC5vcmRlci1pbWcge1xuXHRcdHBhZGRpbmctcmlnaHQ6IDA7XG5cdFx0aW1nIHtcblx0XHRcdG1heC1oZWlnaHQ6IDM1MHB4O1xuXHRcdFx0bWF4LXdpZHRoOiAxMDAlO1xuXHRcdH1cblx0fVxuXG5cdC5vcmRlci1tYXAge1xuXHRcdG1pbi1oZWlnaHQ6IDMwMHB4O1xuXHRcdHBhZGRpbmc6IDA7XG5cdH1cblxuXHQubm8tcGFkZGluZyB7XG5cdFx0cGFkZGluZzogMCAhaW1wb3J0YW50O1xuXHR9XG59XG4iLCJAa2V5ZnJhbWVzIGJsaW5raW5nIHtcbiAgMCUge1xuICAgIGNvbG9yOiBibGFjaztcbiAgfVxuICA1MCUge1xuICAgIGNvbG9yOiAjOWE5YTlhO1xuICB9XG59XG5cbi5vcmRlci1pbmZvIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjZWJlZWYyO1xuICBtYXJnaW4tdG9wOiAxLjI1cmVtO1xufVxuXG4ub3JkZXItaW5mbyAucm93IHtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbn1cblxuLm9yZGVyLWluZm8gLmNvbCB7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbn1cblxuLm9yZGVyLWluZm8gLmRlbGl2ZXJ5LXN0YXR1cyB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAzNnB4O1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4ub3JkZXItaW5mbyAuZGVsaXZlcnktc3RhdHVzIC5zdGF0dXMge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5vcmRlci1pbmZvIC5kZWxpdmVyeS1zdGF0dXMgLmFsaWduLWVuZCB7XG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xufVxuXG4ub3JkZXItaW5mbyAuZGVsaXZlcnktc3RhdHVzICoge1xuICBjb2xvcjogIzlhOWE5YSAhaW1wb3J0YW50O1xufVxuXG4ub3JkZXItaW5mbyAuZGVsaXZlcnktc3RhdHVzIC5hY3RpdmF0ZWQsXG4ub3JkZXItaW5mbyAuZGVsaXZlcnktc3RhdHVzIC5hY3RpdmF0ZWQgKiB7XG4gIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xufVxuXG4ub3JkZXItaW5mbyAuZGVsaXZlcnktc3RhdHVzIC5jdXJyZW50LFxuLm9yZGVyLWluZm8gLmRlbGl2ZXJ5LXN0YXR1cyAuY3VycmVudCAqIHtcbiAgYW5pbWF0aW9uOiBibGlua2luZyAxcyBlYXNlLWluLW91dCBpbmZpbml0ZSAhaW1wb3J0YW50O1xufVxuXG4ub3JkZXItaW5mbyAub3JkZXItaW1nIHtcbiAgcGFkZGluZy1yaWdodDogMDtcbn1cblxuLm9yZGVyLWluZm8gLm9yZGVyLWltZyBpbWcge1xuICBtYXgtaGVpZ2h0OiAzNTBweDtcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuXG4ub3JkZXItaW5mbyAub3JkZXItbWFwIHtcbiAgbWluLWhlaWdodDogMzAwcHg7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5vcmRlci1pbmZvIC5uby1wYWRkaW5nIHtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/pages/+simulation/order/order.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/+simulation/order/order.component.ts ***!
  \************************************************************/
/*! exports provided: DeliveryStatus, SimulationOrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeliveryStatus", function() { return DeliveryStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimulationOrderComponent", function() { return SimulationOrderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _modules_server_common_entities_Order__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @modules/server.common/entities/Order */ "../common/src/entities/Order.ts");
/* harmony import */ var _modules_client_common_angular2_locale_product_locales_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @modules/client.common.angular2/locale/product-locales.service */ "../common-angular/src/locale/product-locales.service.ts");
/* harmony import */ var _modules_server_common_enums_OrderCarrierStatus__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @modules/server.common/enums/OrderCarrierStatus */ "../common/src/enums/OrderCarrierStatus.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _app_shared_elapsed_time_elapsed_time_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/@shared/elapsed-time/elapsed-time.component */ "./src/app/@shared/elapsed-time/elapsed-time.component.ts");









var DeliveryStatus;
(function (DeliveryStatus) {
    DeliveryStatus[DeliveryStatus["Warehouse"] = 0] = "Warehouse";
    DeliveryStatus[DeliveryStatus["Carrier"] = 1] = "Carrier";
    DeliveryStatus[DeliveryStatus["Customer"] = 2] = "Customer";
    DeliveryStatus[DeliveryStatus["Completed"] = 3] = "Completed";
})(DeliveryStatus || (DeliveryStatus = {}));
let SimulationOrderComponent = class SimulationOrderComponent {
    constructor(_translateService, _localeTranslate) {
        this._translateService = _translateService;
        this._localeTranslate = _localeTranslate;
        this._ngDestroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    ngOnInit() {
        if (!this._getStartDate) {
            this._setStartDate = new Date();
        }
    }
    getSlideImage(order) {
        const images = order.products.map((p) => {
            return {
                url: this._localeTranslate.getTranslate(p.product.images),
                caption: this._localeTranslate.getTranslate(p.product.title),
                title: this._localeTranslate.getTranslate(p.product.description),
                backgroundSize: 'contain',
                backgroundPosition: 'center',
            };
        });
        return images;
    }
    get _getStartDate() {
        return localStorage.getItem('simulationStartDate');
    }
    set _setStartDate(val) {
        localStorage.setItem('simulationStartDate', JSON.stringify(val));
    }
    set _setEndTime(val) {
        localStorage.setItem('simulationEndTime', JSON.stringify(val));
    }
    get isCustomerActive() {
        return this.currentStatus >= DeliveryStatus.Customer;
    }
    get isCustomerCurrent() {
        const isCurrent = this.currentStatus === DeliveryStatus.Customer;
        if (isCurrent !== this.delivered &&
            !isCurrent &&
            this.isCustomerActive) {
            if (this.elapsedTime) {
                this._setEndTime = this.elapsedTime.timePasssed;
                this.clearTimer();
            }
        }
        this.delivered = isCurrent;
        return isCurrent;
    }
    get isWarehouseActive() {
        return this.currentStatus >= DeliveryStatus.Warehouse;
    }
    get isWarehouseCurrent() {
        return this.currentStatus === DeliveryStatus.Warehouse;
    }
    get isCarrierActive() {
        return this.currentStatus >= DeliveryStatus.Carrier;
    }
    get isCarrierCurrent() {
        return this.currentStatus === DeliveryStatus.Carrier;
    }
    get currentStatus() {
        if (this.order == null) {
            return DeliveryStatus.Warehouse;
        }
        if (this.order['isCompleted']) {
            return DeliveryStatus.Completed;
        }
        else if (this.order.carrierStatus >=
            _modules_server_common_enums_OrderCarrierStatus__WEBPACK_IMPORTED_MODULE_6__["default"].CarrierArrivedToCustomer) {
            return DeliveryStatus.Customer;
        }
        else if (this.order.carrierStatus >= _modules_server_common_enums_OrderCarrierStatus__WEBPACK_IMPORTED_MODULE_6__["default"].CarrierPickedUpOrder) {
            return DeliveryStatus.Carrier;
        }
        else {
            return DeliveryStatus.Warehouse;
        }
    }
    get deliveryTimeRange() {
        if (this.order == null) {
            return '';
        }
        let deliveryTimeMin = 0;
        let deliveryTimeMax = 0;
        this.order.products.forEach((product) => {
            if (product.deliveryTimeMin &&
                product.deliveryTimeMin > deliveryTimeMin) {
                deliveryTimeMin = product.deliveryTimeMin;
            }
            if (product.deliveryTimeMax &&
                product.deliveryTimeMax > deliveryTimeMax) {
                deliveryTimeMax = product.deliveryTimeMax;
            }
        });
        if (deliveryTimeMin !== 0 && deliveryTimeMax !== 0) {
            return deliveryTimeMin + '-' + deliveryTimeMax;
        }
        if (deliveryTimeMin !== 0) {
            return deliveryTimeMin.toString();
        }
        if (deliveryTimeMax !== 0) {
            return deliveryTimeMax.toString();
        }
        return 30 + '-' + 60;
    }
    get orderInfoStatuses() {
        const popupStatuses = 'SIMULATION_VIEW.ORDER_INFO.STATUSES.' + this.currentStatus;
        let result = '';
        const getTitle = () => {
            this._translateService
                .get(popupStatuses + '.TITLE')
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this._ngDestroy$))
                .subscribe((t) => (result = t));
            return result;
        };
        const getDetails = () => {
            this._translateService
                .get(popupStatuses + '.DETAILS')
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this._ngDestroy$))
                .subscribe((d) => (result = d));
            return result.replace('%t', this.deliveryTimeRange);
        };
        const getPaidNote = () => {
            this._translateService
                .get(popupStatuses + '.NOT_PAID_NOTE')
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this._ngDestroy$))
                .subscribe((n) => (result = n));
            return result.replace('%s', `${this.order
                ? this.order.totalPrice.toFixed(2)
                : '00.00'}$`);
        };
        return {
            TITLE: getTitle(),
            DETAILS: getDetails(),
            NOT_PAID_NOTE: getPaidNote(),
        };
    }
    clearTimer() {
        clearInterval(this.elapsedTime.timer);
    }
    ngOnDestroy() {
        this.clearTimer();
        localStorage.removeItem('simulationStartDate');
        localStorage.removeItem('simulationEndTime');
        this._ngDestroy$.next();
        this._ngDestroy$.complete();
    }
};
SimulationOrderComponent.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] },
    { type: _modules_client_common_angular2_locale_product_locales_service__WEBPACK_IMPORTED_MODULE_5__["ProductLocalesService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('elapsedTime'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _app_shared_elapsed_time_elapsed_time_component__WEBPACK_IMPORTED_MODULE_8__["ElapsedTimeComponent"])
], SimulationOrderComponent.prototype, "elapsedTime", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _modules_server_common_entities_Order__WEBPACK_IMPORTED_MODULE_4__["default"])
], SimulationOrderComponent.prototype, "order", void 0);
SimulationOrderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ea-simulation-order',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./order.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/pages/+simulation/order/order.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./order.component.scss */ "./src/app/pages/+simulation/order/order.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"],
        _modules_client_common_angular2_locale_product_locales_service__WEBPACK_IMPORTED_MODULE_5__["ProductLocalesService"]])
], SimulationOrderComponent);



/***/ }),

/***/ "./src/app/pages/+simulation/order/order.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/+simulation/order/order.module.ts ***!
  \*********************************************************/
/*! exports provided: SimulationOrderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimulationOrderModule", function() { return SimulationOrderModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _app_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/@theme */ "./src/app/@theme/index.ts");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _order_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./order.component */ "./src/app/pages/+simulation/order/order.component.ts");
/* harmony import */ var _app_shared_elapsed_time_elapsed_time_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/@shared/elapsed-time/elapsed-time.module */ "./src/app/@shared/elapsed-time/elapsed-time.module.ts");
/* harmony import */ var ng_simple_slideshow__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-simple-slideshow */ "./node_modules/ng-simple-slideshow/ng-simple-slideshow.js");
/* harmony import */ var _app_shared_order_order_map_order_map_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @app/@shared/order/order-map/order-map.module */ "./src/app/@shared/order/order-map/order-map.module.ts");










const SIMULATION_ORDER_COMPONENTS = [_order_component__WEBPACK_IMPORTED_MODULE_6__["SimulationOrderComponent"]];
let SimulationOrderModule = class SimulationOrderModule {
};
SimulationOrderModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _app_theme__WEBPACK_IMPORTED_MODULE_3__["ThemeModule"],
            angular2_toaster__WEBPACK_IMPORTED_MODULE_4__["ToasterModule"].forRoot(),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"].forChild(),
            _app_shared_elapsed_time_elapsed_time_module__WEBPACK_IMPORTED_MODULE_7__["ElapsedTimeModule"],
            ng_simple_slideshow__WEBPACK_IMPORTED_MODULE_8__["SlideshowModule"],
            _app_shared_order_order_map_order_map_module__WEBPACK_IMPORTED_MODULE_9__["OrderMapModule"],
        ],
        declarations: [...SIMULATION_ORDER_COMPONENTS],
        exports: [...SIMULATION_ORDER_COMPONENTS],
        entryComponents: [],
        providers: [],
    })
], SimulationOrderModule);



/***/ }),

/***/ "./src/app/pages/+simulation/products/products.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/+simulation/products/products.component.ts ***!
  \******************************************************************/
/*! exports provided: SimulationProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimulationProductsComponent", function() { return SimulationProductsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-smart-table */ "./node_modules/ng2-smart-table/fesm2015/ng2-smart-table.js");
/* harmony import */ var _app_shared_render_component_product_image_redirect_product_image_redirect_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/@shared/render-component/product-image-redirect/product-image-redirect.component */ "./src/app/@shared/render-component/product-image-redirect/product-image-redirect.component.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _app_shared_render_component_product_title_redirect_product_title_redirect_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/@shared/render-component/product-title-redirect/product-title-redirect.component */ "./src/app/@shared/render-component/product-title-redirect/product-title-redirect.component.ts");
/* harmony import */ var _app_shared_render_component_simulation_table_sumulation_json_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/@shared/render-component/simulation-table/sumulation-json.component */ "./src/app/@shared/render-component/simulation-table/sumulation-json.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _app_shared_render_component_product_checkbox_product_checkbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @app/@shared/render-component/product-checkbox/product-checkbox */ "./src/app/@shared/render-component/product-checkbox/product-checkbox.ts");










let SimulationProductsComponent = class SimulationProductsComponent {
    constructor(_translateService) {
        this._translateService = _translateService;
        this.sourceSmartTable = new ng2_smart_table__WEBPACK_IMPORTED_MODULE_2__["LocalDataSource"]();
        this._ngDestroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.selectedProducts = [];
        this.selectProducts$ = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.selectProductsChange$ = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this._loadSmartTableSettings();
        this._applyTranslationOnSmartTable();
    }
    setupDataForSmartTable(products) {
        if (products.length > 0) {
            const data = products.map((pInfo) => {
                const product = pInfo.warehouseProduct.product;
                return {
                    id: product['id'],
                    product,
                    warehouseId: pInfo.warehouseId,
                };
            });
            this.selectProducts$
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(this._ngDestroy$))
                .subscribe(({ current, allData }) => {
                allData.find((d) => d.id === current['id'])['checked'] = !current.checked;
                this.selectedProducts = allData.filter((r) => r.checked);
                if (this.selectedProducts.length !== 0) {
                    const newData = data.filter((d) => d['warehouseId'] === current['warehouseId']);
                    this.sourceSmartTable.load(newData);
                    this.selectProductsChange$.emit();
                }
                else {
                    this.sourceSmartTable.load(data);
                    this.selectProductsChange$.emit();
                }
            });
            this.sourceSmartTable.load(data);
        }
    }
    selectProductTmp(ev) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.selectProducts$.emit({
                current: ev.data,
                allData: ev.source.data,
            });
        });
    }
    _applyTranslationOnSmartTable() {
        this._translateService.onLangChange.subscribe(() => {
            this._loadSmartTableSettings();
        });
    }
    _loadSmartTableSettings() {
        const columnTitlePrefix = 'SIMULATION_VIEW.SMART_TABLE.';
        const getTranslate = (name) => this._translateService.get(columnTitlePrefix + name);
        Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["forkJoin"])(getTranslate('ID'), getTranslate('TITLE'), getTranslate('IMAGE'))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(this._ngDestroy$))
            .subscribe(([id, titleTr, image]) => {
            this.settingsSmartTable = {
                actions: false,
                hideSubHeader: true,
                mode: 'inline',
                columns: {
                    checkbox: {
                        title: '',
                        filter: false,
                        type: 'custom',
                        renderComponent: _app_shared_render_component_product_checkbox_product_checkbox__WEBPACK_IMPORTED_MODULE_9__["ProductCheckboxComponent"],
                    },
                    images: {
                        title: image,
                        filter: false,
                        renderComponent: _app_shared_render_component_product_image_redirect_product_image_redirect_component__WEBPACK_IMPORTED_MODULE_3__["ProductImageRedirectComponent"],
                        type: 'custom',
                        width: '6%',
                    },
                    title: {
                        title: titleTr,
                        filter: false,
                        class: 'text-left',
                        renderComponent: _app_shared_render_component_product_title_redirect_product_title_redirect_component__WEBPACK_IMPORTED_MODULE_5__["ProductTitleRedirectComponent"],
                        type: 'custom',
                    },
                    id: {
                        class: 'text-left',
                        title: id,
                        filter: false,
                    },
                    json: {
                        title: 'Actions',
                        width: '6%',
                        filter: false,
                        type: 'custom',
                        renderComponent: _app_shared_render_component_simulation_table_sumulation_json_component__WEBPACK_IMPORTED_MODULE_6__["SimulationJsonComponent"],
                    },
                },
                pager: {
                    display: true,
                    perPage: 5,
                },
            };
        });
    }
    ngOnDestroy() {
        this._ngDestroy$.next();
        this._ngDestroy$.complete();
    }
};
SimulationProductsComponent.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"] }
];
SimulationProductsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ea-simulation-products',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./products.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/pages/+simulation/products/products.component.html")).default,
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"]])
], SimulationProductsComponent);



/***/ }),

/***/ "./src/app/pages/+simulation/simulation.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/+simulation/simulation.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host ::ng-deep .ng2-smart-titles:first-child {\n  text-align: center !important;\n}\n\n.simulation-products-table {\n  text-align: center !important;\n}\n\n:host ::ng-deep ng2-smart-table .tableImg {\n  height: 100px;\n  width: 100px;\n}\n\nnb-card {\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0);\n}\n\n.tableImg {\n  height: 100px;\n  width: 100px;\n}\n\n.tableImg:hover {\n  cursor: pointer;\n}\n\n.ion-clipboard {\n  padding-left: 20px;\n}\n\n.ion-clipboard:hover {\n  cursor: pointer;\n}\n\npre {\n  background-color: #f4f4f4;\n  padding: 1%;\n}\n\na {\n  background-color: yellow;\n  font-size: 120px;\n}\n\n.hid {\n  visibility: hidden;\n}\n\n.body-title {\n  margin-top: 1.25rem;\n  margin-bottom: 10px;\n}\n\n#simulations-buttons {\n  text-align: left !important;\n}\n\n#simulations-buttons div {\n  text-align: left !important;\n}\n\n.order-info {\n  display: inline-block;\n  margin-left: 15px;\n  padding: 0.5rem;\n  border-bottom-left-radius: 0.375rem;\n  border-bottom-right-radius: 0.375rem;\n}\n\n.order-info h6 {\n  color: white !important;\n  margin-bottom: 0 !important;\n}\n\n.fix-btn-height {\n  height: 2.5rem !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvZC9Xb3JrL0FuZ3VsYXIvTmV3IGZvbGRlciAoMikvRG9sY2VHcm9jZXJ5L3BhY2thZ2VzL2FkbWluLXdlYi1hbmd1bGFyL3NyYy9hcHAvcGFnZXMvK3NpbXVsYXRpb24vc2ltdWxhdGlvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvK3NpbXVsYXRpb24vc2ltdWxhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLDZCQUE2QjtBQ0M5Qjs7QURFQTtFQUNDLDZCQUE2QjtBQ0M5Qjs7QURFQTtFQUNDLGFBQWE7RUFDYixZQUFZO0FDQ2I7O0FERUE7RUFDQyx1Q0FBK0I7VUFBL0IsK0JBQStCO0FDQ2hDOztBREVBO0VBQ0MsYUFBYTtFQUNiLFlBQVk7QUNDYjs7QURFQTtFQUNDLGVBQWU7QUNDaEI7O0FERUE7RUFDQyxrQkFBa0I7QUNDbkI7O0FERUE7RUFDQyxlQUFlO0FDQ2hCOztBREVBO0VBQ0MseUJBQXlCO0VBQ3pCLFdBQVc7QUNDWjs7QURFQTtFQUNDLHdCQUF3QjtFQUN4QixnQkFBZ0I7QUNDakI7O0FERUE7RUFDQyxrQkFBa0I7QUNDbkI7O0FERUE7RUFDQyxtQkFBbUI7RUFDbkIsbUJBQW1CO0FDQ3BCOztBREVBO0VBQ0MsMkJBQTJCO0FDQzVCOztBREZBO0VBSUUsMkJBQTJCO0FDRTdCOztBREVBO0VBQ0MscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQU9qQixlQUFlO0VBQ2YsbUNBQW1DO0VBQ25DLG9DQUFvQztBQ0xyQzs7QUROQTtFQUtFLHVCQUF1QjtFQUN2QiwyQkFBMkI7QUNLN0I7O0FER0E7RUFDQyx5QkFBeUI7QUNBMUIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy8rc2ltdWxhdGlvbi9zaW11bGF0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QgOjpuZy1kZWVwIC5uZzItc21hcnQtdGl0bGVzOmZpcnN0LWNoaWxkIHtcblx0dGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG59XG5cbi5zaW11bGF0aW9uLXByb2R1Y3RzLXRhYmxlIHtcblx0dGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG59XG5cbjpob3N0IDo6bmctZGVlcCBuZzItc21hcnQtdGFibGUgLnRhYmxlSW1nIHtcblx0aGVpZ2h0OiAxMDBweDtcblx0d2lkdGg6IDEwMHB4O1xufVxuXG5uYi1jYXJkIHtcblx0dHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbn1cblxuLnRhYmxlSW1nIHtcblx0aGVpZ2h0OiAxMDBweDtcblx0d2lkdGg6IDEwMHB4O1xufVxuXG4udGFibGVJbWc6aG92ZXIge1xuXHRjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5pb24tY2xpcGJvYXJkIHtcblx0cGFkZGluZy1sZWZ0OiAyMHB4O1xufVxuXG4uaW9uLWNsaXBib2FyZDpob3ZlciB7XG5cdGN1cnNvcjogcG9pbnRlcjtcbn1cblxucHJlIHtcblx0YmFja2dyb3VuZC1jb2xvcjogI2Y0ZjRmNDtcblx0cGFkZGluZzogMSU7XG59XG5cbmEge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XG5cdGZvbnQtc2l6ZTogMTIwcHg7XG59XG5cbi5oaWQge1xuXHR2aXNpYmlsaXR5OiBoaWRkZW47XG59XG5cbi5ib2R5LXRpdGxlIHtcblx0bWFyZ2luLXRvcDogMS4yNXJlbTtcblx0bWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuI3NpbXVsYXRpb25zLWJ1dHRvbnMge1xuXHR0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XG5cblx0ZGl2IHtcblx0XHR0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XG5cdH1cbn1cblxuLm9yZGVyLWluZm8ge1xuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdG1hcmdpbi1sZWZ0OiAxNXB4O1xuXG5cdGg2IHtcblx0XHRjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcblx0XHRtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7XG5cdH1cblxuXHRwYWRkaW5nOiAwLjVyZW07XG5cdGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDAuMzc1cmVtO1xuXHRib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMC4zNzVyZW07XG59XG5cbi5maXgtYnRuLWhlaWdodCB7XG5cdGhlaWdodDogMi41cmVtICFpbXBvcnRhbnQ7XG59XG4iLCI6aG9zdCA6Om5nLWRlZXAgLm5nMi1zbWFydC10aXRsZXM6Zmlyc3QtY2hpbGQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbn1cblxuLnNpbXVsYXRpb24tcHJvZHVjdHMtdGFibGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIG5nMi1zbWFydC10YWJsZSAudGFibGVJbWcge1xuICBoZWlnaHQ6IDEwMHB4O1xuICB3aWR0aDogMTAwcHg7XG59XG5cbm5iLWNhcmQge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xufVxuXG4udGFibGVJbWcge1xuICBoZWlnaHQ6IDEwMHB4O1xuICB3aWR0aDogMTAwcHg7XG59XG5cbi50YWJsZUltZzpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmlvbi1jbGlwYm9hcmQge1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG59XG5cbi5pb24tY2xpcGJvYXJkOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5wcmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNGY0O1xuICBwYWRkaW5nOiAxJTtcbn1cblxuYSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcbiAgZm9udC1zaXplOiAxMjBweDtcbn1cblxuLmhpZCB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cblxuLmJvZHktdGl0bGUge1xuICBtYXJnaW4tdG9wOiAxLjI1cmVtO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4jc2ltdWxhdGlvbnMtYnV0dG9ucyB7XG4gIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcbn1cblxuI3NpbXVsYXRpb25zLWJ1dHRvbnMgZGl2IHtcbiAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xufVxuXG4ub3JkZXItaW5mbyB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIHBhZGRpbmc6IDAuNXJlbTtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMC4zNzVyZW07XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwLjM3NXJlbTtcbn1cblxuLm9yZGVyLWluZm8gaDYge1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50O1xufVxuXG4uZml4LWJ0bi1oZWlnaHQge1xuICBoZWlnaHQ6IDIuNXJlbSAhaW1wb3J0YW50O1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/pages/+simulation/simulation.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/+simulation/simulation.component.ts ***!
  \***********************************************************/
/*! exports provided: SimulationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimulationComponent", function() { return SimulationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _modules_client_common_angular2_locale_product_locales_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @modules/client.common.angular2/locale/product-locales.service */ "../common-angular/src/locale/product-locales.service.ts");
/* harmony import */ var _shared_user_user_mutation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../@shared/user/user-mutation */ "./src/app/@shared/user/user-mutation/index.ts");
/* harmony import */ var _core_data_geo_location_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../@core/data/geo-location.service */ "./src/app/@core/data/geo-location.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _modules_client_common_angular2_routers_user_router_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @modules/client.common.angular2/routers/user-router.service */ "../common-angular/src/routers/user-router.service.ts");
/* harmony import */ var _app_core_data_store_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @app/@core/data/store.service */ "./src/app/@core/data/store.service.ts");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./products/products.component */ "./src/app/pages/+simulation/products/products.component.ts");
/* harmony import */ var _modules_client_common_angular2_routers_warehouse_orders_router_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @modules/client.common.angular2/routers/warehouse-orders-router.service */ "../common-angular/src/routers/warehouse-orders-router.service.ts");
/* harmony import */ var _modules_client_common_angular2_routers_order_router_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @modules/client.common.angular2/routers/order-router.service */ "../common-angular/src/routers/order-router.service.ts");
/* harmony import */ var _modules_client_common_angular2_routers_invite_router_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @modules/client.common.angular2/routers/invite-router.service */ "../common-angular/src/routers/invite-router.service.ts");
/* harmony import */ var _app_shared_invite_invite_request_invite_request_modal_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @app/@shared/invite/invite-request/invite-request-modal.component */ "./src/app/@shared/invite/invite-request/invite-request-modal.component.ts");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var _app_shared_invite_by_code_by_code_modal_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @app/@shared/invite/by-code/by-code-modal.component */ "./src/app/@shared/invite/by-code/by-code-modal.component.ts");
/* harmony import */ var _instructions_instructions_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./instructions/instructions.component */ "./src/app/pages/+simulation/instructions/instructions.component.ts");
/* harmony import */ var _modules_client_common_angular2_routers_warehouse_router_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @modules/client.common.angular2/routers/warehouse-router.service */ "../common-angular/src/routers/warehouse-router.service.ts");




















let SimulationComponent = class SimulationComponent {
    constructor(_modalService, translate, _productLocalesService, geoLocationService, store, userRouter, warehouseOrdersRouter, orderRouter, inviteRouter, toasterService, warehouseRouter) {
        this._modalService = _modalService;
        this.translate = translate;
        this._productLocalesService = _productLocalesService;
        this.geoLocationService = geoLocationService;
        this.store = store;
        this.userRouter = userRouter;
        this.warehouseOrdersRouter = warehouseOrdersRouter;
        this.orderRouter = orderRouter;
        this.inviteRouter = inviteRouter;
        this.toasterService = toasterService;
        this.warehouseRouter = warehouseRouter;
        this._ngDestroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this._productsInfoData = [];
        this.loadPage();
    }
    loadPage() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const invitesSettings = yield this.inviteRouter.getInvitesSettings();
            this.inviteSystem = invitesSettings.isEnabled;
            this.loadButtons = true;
            this._listenForEntityLocaleTranslate();
            this._startTracking();
        });
    }
    ngOnInit() {
        this.selectProductsChange();
        localStorage.removeItem('simulationStartDate');
        localStorage.removeItem('simulationEndTime');
    }
    localeTranslate(member) {
        return this._productLocalesService.getTranslate(member);
    }
    showInviteRequestModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                this.inviteRequest = yield this._modalService.open(_app_shared_invite_invite_request_invite_request_modal_component__WEBPACK_IMPORTED_MODULE_15__["InviteRequestModalComponent"], {
                    size: 'lg',
                    container: 'nb-layout',
                    backdrop: 'static',
                }).result;
            }
            catch (error) {
                this.inviteRequest = null;
            }
        });
    }
    selectProductsChange() {
        this.productsTable.selectProductsChange$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this._ngDestroy$))
            .subscribe((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.productsCount = this.productsTable.selectedProducts.length;
            if (this.productsCount > 0) {
                const warehouseId = this.productsTable.selectedProducts[0]['warehouseId'];
                if (!this.warehouse ||
                    (warehouseId && this.warehouse.id !== warehouseId)) {
                    this.warehouse = yield this.warehouseRouter
                        .get(warehouseId)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])())
                        .toPromise();
                }
            }
            this.hasProductsForOrder =
                this.productsTable.selectedProducts.length > 0;
        }));
    }
    orderCreate() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const products = this.productsTable.selectedProducts;
            this.loading = true;
            if (products.length > 0) {
                this.hasProductsForOrder = false;
                const orderProducts = products.map((p) => ({
                    count: 1,
                    productId: p.id,
                }));
                const warehouseId = products[0]['warehouseId'];
                const orderRouterOptions = {
                    populateWarehouse: true,
                    populateCarrier: true,
                };
                const orderCreateInput = {
                    userId: this.user.id,
                    warehouseId,
                    products: orderProducts,
                };
                const order = yield this.warehouseOrdersRouter.create(orderCreateInput);
                this.orderRouter
                    .get(order.id, orderRouterOptions)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this._ngDestroy$))
                    .subscribe((o) => {
                    this.order = o;
                });
                this.loading = false;
                this.instructions.step = _instructions_instructions_component__WEBPACK_IMPORTED_MODULE_18__["Step"].Three;
            }
        });
    }
    orderConfirm() {
        this.loading = true;
        this.order = null;
        this.instructions.step = _instructions_instructions_component__WEBPACK_IMPORTED_MODULE_18__["Step"].Two;
        this.productsTable.setupDataForSmartTable(this._productsInfoData);
    }
    inviteUser() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                this.invite = yield this.inviteRouter.create(this.getInviteCreateObj());
                this.inviteRequest = null;
                this.instructions.inviteCode = this.invite.code;
                this.toasterService.pop('success', `Successful invited user, your code is ${this.invite.code}`);
            }
            catch (err) {
                this.toasterService.pop('error', `Error in invite user: "${err.message}"`);
            }
        });
    }
    createUser() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.inviteSystem) {
                return this.showByCodeModal();
            }
            else {
                return this.showCreateUserModal();
            }
        });
    }
    orderCancel() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loading = true;
            yield this.warehouseOrdersRouter.cancel(this.order.id);
            this.order = null;
            this.instructions.step = _instructions_instructions_component__WEBPACK_IMPORTED_MODULE_18__["Step"].Two;
            this.loading = false;
        });
    }
    getInviteCreateObj() {
        if (this.inviteRequest) {
            return {
                geoLocation: this.inviteRequest.geoLocation,
                apartment: this.inviteRequest.apartment,
            };
        }
        return null;
    }
    showCreateUserModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                this.user = yield this._modalService.open(_shared_user_user_mutation__WEBPACK_IMPORTED_MODULE_3__["UserMutationComponent"], {
                    size: 'lg',
                    container: 'nb-layout',
                    backdrop: 'static',
                }).result;
                this.store.userId = this.user.id;
                this._startTracking();
            }
            catch (error) {
                this.user = null;
            }
        });
    }
    showByCodeModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const activeModal = this._modalService.open(_app_shared_invite_by_code_by_code_modal_component__WEBPACK_IMPORTED_MODULE_17__["ByCodeModalComponent"], {
                    size: 'sm',
                    container: 'nb-layout',
                });
                const modalComponent = activeModal.componentInstance;
                if (this.invite) {
                    modalComponent.location = this.invite.geoLocation.loc;
                }
                this.user = yield activeModal.result;
                this.store.userId = this.user.id;
                this.invite = null;
                this._startTracking();
            }
            catch (error) {
                this.user = null;
            }
        });
    }
    _startTracking() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.store.userId) {
                this.user = yield this.userRouter
                    .get(this.store.userId)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])())
                    .toPromise();
                const productsInfo = this.geoLocationService.getGeoLocationProducts(this.user.geoLocation);
                productsInfo
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this._ngDestroy$))
                    .subscribe((pInfo) => {
                    pInfo = pInfo || [];
                    this._productsInfoData = pInfo;
                    this.productsTable.setupDataForSmartTable(pInfo);
                });
                this.instructions.step = _instructions_instructions_component__WEBPACK_IMPORTED_MODULE_18__["Step"].Two;
            }
            else {
                this.instructions.step = _instructions_instructions_component__WEBPACK_IMPORTED_MODULE_18__["Step"].One;
            }
        });
    }
    _listenForEntityLocaleTranslate() {
        this.translate.onLangChange
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this._ngDestroy$))
            .subscribe(() => {
            this.productsTable.setupDataForSmartTable(this._productsInfoData);
        });
    }
    ngOnDestroy() {
        this._ngDestroy$.next();
        this._ngDestroy$.complete();
    }
};
SimulationComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModal"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"] },
    { type: _modules_client_common_angular2_locale_product_locales_service__WEBPACK_IMPORTED_MODULE_2__["ProductLocalesService"] },
    { type: _core_data_geo_location_service__WEBPACK_IMPORTED_MODULE_4__["GeoLocationService"] },
    { type: _app_core_data_store_service__WEBPACK_IMPORTED_MODULE_10__["Store"] },
    { type: _modules_client_common_angular2_routers_user_router_service__WEBPACK_IMPORTED_MODULE_9__["UserRouter"] },
    { type: _modules_client_common_angular2_routers_warehouse_orders_router_service__WEBPACK_IMPORTED_MODULE_12__["WarehouseOrdersRouter"] },
    { type: _modules_client_common_angular2_routers_order_router_service__WEBPACK_IMPORTED_MODULE_13__["OrderRouter"] },
    { type: _modules_client_common_angular2_routers_invite_router_service__WEBPACK_IMPORTED_MODULE_14__["InviteRouter"] },
    { type: angular2_toaster__WEBPACK_IMPORTED_MODULE_16__["ToasterService"] },
    { type: _modules_client_common_angular2_routers_warehouse_router_service__WEBPACK_IMPORTED_MODULE_19__["WarehouseRouter"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('productsTable', { static: true }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _products_products_component__WEBPACK_IMPORTED_MODULE_11__["SimulationProductsComponent"])
], SimulationComponent.prototype, "productsTable", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('instructions'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _instructions_instructions_component__WEBPACK_IMPORTED_MODULE_18__["SimulationInstructionsComponent"])
], SimulationComponent.prototype, "instructions", void 0);
SimulationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ea-simulation',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./simulation.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/pages/+simulation/simulation.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! .//simulation.component.scss */ "./src/app/pages/+simulation/simulation.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModal"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"],
        _modules_client_common_angular2_locale_product_locales_service__WEBPACK_IMPORTED_MODULE_2__["ProductLocalesService"],
        _core_data_geo_location_service__WEBPACK_IMPORTED_MODULE_4__["GeoLocationService"],
        _app_core_data_store_service__WEBPACK_IMPORTED_MODULE_10__["Store"],
        _modules_client_common_angular2_routers_user_router_service__WEBPACK_IMPORTED_MODULE_9__["UserRouter"],
        _modules_client_common_angular2_routers_warehouse_orders_router_service__WEBPACK_IMPORTED_MODULE_12__["WarehouseOrdersRouter"],
        _modules_client_common_angular2_routers_order_router_service__WEBPACK_IMPORTED_MODULE_13__["OrderRouter"],
        _modules_client_common_angular2_routers_invite_router_service__WEBPACK_IMPORTED_MODULE_14__["InviteRouter"],
        angular2_toaster__WEBPACK_IMPORTED_MODULE_16__["ToasterService"],
        _modules_client_common_angular2_routers_warehouse_router_service__WEBPACK_IMPORTED_MODULE_19__["WarehouseRouter"]])
], SimulationComponent);



/***/ }),

/***/ "./src/app/pages/+simulation/simulation.module.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/+simulation/simulation.module.ts ***!
  \********************************************************/
/*! exports provided: SimulationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimulationModule", function() { return SimulationModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var angular2_wizard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-wizard */ "./node_modules/@ever-co/angular2-wizard/dist/index.js");
/* harmony import */ var angular2_wizard__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_wizard__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-smart-table */ "./node_modules/ng2-smart-table/fesm2015/ng2-smart-table.js");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../@theme */ "./src/app/@theme/index.ts");
/* harmony import */ var _core_data_fakeDataServices_storageService__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../@core/data/fakeDataServices/storageService */ "./src/app/@core/data/fakeDataServices/storageService.ts");
/* harmony import */ var _shared_user_user_mutation__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../@shared/user/user-mutation */ "./src/app/@shared/user/user-mutation/index.ts");
/* harmony import */ var _shared_warehouse_warehouse_mutation__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../@shared/warehouse/warehouse-mutation */ "./src/app/@shared/warehouse/warehouse-mutation/index.ts");
/* harmony import */ var _simulation_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./simulation.component */ "./src/app/pages/+simulation/simulation.component.ts");
/* harmony import */ var _simulation_routes__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./simulation.routes */ "./src/app/pages/+simulation/simulation.routes.ts");
/* harmony import */ var _shared_render_component_simulation_table_simulation_table_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../@shared/render-component/simulation-table/simulation-table.module */ "./src/app/@shared/render-component/simulation-table/simulation-table.module.ts");
/* harmony import */ var _core_data_geo_location_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../@core/data/geo-location.service */ "./src/app/@core/data/geo-location.service.ts");
/* harmony import */ var ngx_highlightjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-highlightjs */ "./node_modules/ngx-highlightjs/fesm2015/ngx-highlightjs.js");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./products/products.component */ "./src/app/pages/+simulation/products/products.component.ts");
/* harmony import */ var _customers_customer_ea_customer_orders_ea_customer_orders_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../+customers/+customer/ea-customer-orders/ea-customer-orders.module */ "./src/app/pages/+customers/+customer/ea-customer-orders/ea-customer-orders.module.ts");
/* harmony import */ var _instructions_instructions_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./instructions/instructions.component */ "./src/app/pages/+simulation/instructions/instructions.component.ts");
/* harmony import */ var _app_shared_invite_invite_request_invite_request_modal_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @app/@shared/invite/invite-request/invite-request-modal.module */ "./src/app/@shared/invite/invite-request/invite-request-modal.module.ts");
/* harmony import */ var _app_shared_invite_by_code_by_code_modal_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @app/@shared/invite/by-code/by-code-modal.module */ "./src/app/@shared/invite/by-code/by-code-modal.module.ts");
/* harmony import */ var _order_order_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./order/order.module */ "./src/app/pages/+simulation/order/order.module.ts");
/* harmony import */ var _app_shared_render_component_render_components_module__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @app/@shared/render-component/render-components.module */ "./src/app/@shared/render-component/render-components.module.ts");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/fesm2015/index.js");

























let SimulationModule = class SimulationModule {
};
SimulationModule.routes = _simulation_routes__WEBPACK_IMPORTED_MODULE_13__["routes"];
SimulationModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _theme__WEBPACK_IMPORTED_MODULE_8__["ThemeModule"],
            angular2_wizard__WEBPACK_IMPORTED_MODULE_4__["FormWizardModule"],
            ng2_smart_table__WEBPACK_IMPORTED_MODULE_5__["Ng2SmartTableModule"],
            angular2_toaster__WEBPACK_IMPORTED_MODULE_6__["ToasterModule"].forRoot(),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forChild(),
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_simulation_routes__WEBPACK_IMPORTED_MODULE_13__["routes"]),
            ngx_highlightjs__WEBPACK_IMPORTED_MODULE_16__["HighlightModule"].forRoot({ theme: 'github' }),
            _shared_user_user_mutation__WEBPACK_IMPORTED_MODULE_10__["UserMutationModule"],
            _app_shared_invite_invite_request_invite_request_modal_module__WEBPACK_IMPORTED_MODULE_20__["InviteRequestModalModule"],
            _app_shared_invite_by_code_by_code_modal_module__WEBPACK_IMPORTED_MODULE_21__["ByCodeModalModule"],
            _shared_warehouse_warehouse_mutation__WEBPACK_IMPORTED_MODULE_11__["WarehouseMutationModule"],
            _shared_render_component_simulation_table_simulation_table_module__WEBPACK_IMPORTED_MODULE_14__["SimulationTableModule"],
            _customers_customer_ea_customer_orders_ea_customer_orders_module__WEBPACK_IMPORTED_MODULE_18__["CustomerOrdersModule"],
            _order_order_module__WEBPACK_IMPORTED_MODULE_22__["SimulationOrderModule"],
            _app_shared_render_component_render_components_module__WEBPACK_IMPORTED_MODULE_23__["RenderComponentsModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_24__["NbSpinnerModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_24__["NbButtonModule"],
        ],
        declarations: [
            _simulation_component__WEBPACK_IMPORTED_MODULE_12__["SimulationComponent"],
            _products_products_component__WEBPACK_IMPORTED_MODULE_17__["SimulationProductsComponent"],
            _instructions_instructions_component__WEBPACK_IMPORTED_MODULE_19__["SimulationInstructionsComponent"],
        ],
        entryComponents: [],
        providers: [_core_data_fakeDataServices_storageService__WEBPACK_IMPORTED_MODULE_9__["AdminStorageService"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["JsonPipe"], _core_data_geo_location_service__WEBPACK_IMPORTED_MODULE_15__["GeoLocationService"]],
    })
], SimulationModule);



/***/ }),

/***/ "./src/app/pages/+simulation/simulation.routes.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/+simulation/simulation.routes.ts ***!
  \********************************************************/
/*! exports provided: routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _simulation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./simulation.component */ "./src/app/pages/+simulation/simulation.component.ts");


const routes = [
    {
        path: '',
        component: _simulation_component__WEBPACK_IMPORTED_MODULE_1__["SimulationComponent"],
    },
];


/***/ })

}]);
//# sourceMappingURL=app-pages-simulation-simulation-module-es2015.js.map