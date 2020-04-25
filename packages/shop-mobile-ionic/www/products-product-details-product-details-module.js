(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["products-product-details-product-details-module"],{

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/pages/+products/product-details/product-details.page.html":
/*!***************************************************************************************************************************************************************!*\
  !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/raw-loader/dist/cjs.js!./src/app/pages/+products/product-details/product-details.page.html ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n\t<ion-toolbar color=\"primary\">\n\t\t<ion-buttons slot=\"start\">\n\t\t\t<ion-menu-button autoHide=\"false\"></ion-menu-button>\n\t\t</ion-buttons>\n\n\t\t<ion-title>{{ 'PRODUCTS_VIEW.DETAILS.DETAILS' | translate }}</ion-title>\n\t\t<ion-buttons slot=\"end\">\n\t\t\t<ion-button (click)=\"goToProductPage()\">\n\t\t\t\t<i class=\"fa fa-angle-left back-btn\"></i>\n\t\t\t\t<span>{{ 'PRODUCTS_VIEW.DETAILS.BACK' | translate }}</span>\n\t\t\t</ion-button>\n\t\t</ion-buttons>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content [ngClass]=\"{'blur-filter': modalOpen}\">\n\t<ion-card class=\"product-card brand-dark\">\n\t\t<div *ngIf=\"modalOpen\" class=\"blur-lighter\"></div>\n\t\t<ion-grid *ngIf=\"product\" no-padding>\n\t\t\t<ion-row\n\t\t\t\tno-padding\n\t\t\t\talign-items-center\n\t\t\t\tclass=\"header-container brand-light\"\n\t\t\t>\n\t\t\t\t<ion-col class=\"col-2\">\n\t\t\t\t\t<e-cu-warehouse-logo\n\t\t\t\t\t\t[logo]=\"warehouseLogo\"\n\t\t\t\t\t\tclass=\"icon\"\n\t\t\t\t\t></e-cu-warehouse-logo>\n\t\t\t\t</ion-col>\n\t\t\t\t<ion-col class=\"text-content\" clsss=\"col-6\">\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<h2 class=\"text\">\n\t\t\t\t\t\t\t{{ localeTranslate(product.product?.title) }}\n\t\t\t\t\t\t</h2>\n\t\t\t\t\t\t<h6 class=\"productDescription\">\n\t\t\t\t\t\t\t{{\n\t\t\t\t\t\t\tshortenDescription(localeTranslate(product.product?.description))\n\t\t\t\t\t\t\t}}\n\t\t\t\t\t\t</h6>\n\t\t\t\t\t</div>\n\t\t\t\t</ion-col>\n\t\t\t\t<ion-col class=\"col-2\">\n\t\t\t\t\t<e-cu-delivery-info\n\t\t\t\t\t\t[currentProduct]=\"product\"\n\t\t\t\t\t></e-cu-delivery-info>\n\t\t\t\t</ion-col>\n\t\t\t</ion-row>\n\n\t\t\t<ion-row no-padding *ngIf=\"product\" class=\"images\">\n\t\t\t\t<e-cu-discount [currentProduct]=\"product\"></e-cu-discount>\n\t\t\t\t<div *ngIf=\"image\" class=\"single-image\">\n\t\t\t\t\t<img\n\t\t\t\t\t\tsrc=\"{{image.url}}\"\n\t\t\t\t\t\t[ngClass]=\"image.orientation === 2 ? 'all-space' : 'half-space'\"\n\t\t\t\t\t\talt=\"\"\n\t\t\t\t\t/>\n\t\t\t\t</div>\n\t\t\t\t<ion-slides\n\t\t\t\t\t*ngIf=\"images && images.length !== 0\"\n\t\t\t\t\t[options]=\"swiperOptions\"\n\t\t\t\t\tdir=\"{{ 'CURRENT_DIRECTION' | translate }}\"\n\t\t\t\t>\n\t\t\t\t\t<ion-slide\n\t\t\t\t\t\t*ngFor=\"let image of images\"\n\t\t\t\t\t\tclass=\"slide-content\"\n\t\t\t\t\t>\n\t\t\t\t\t\t<img\n\t\t\t\t\t\t\tsrc=\"{{ image.url }}\"\n\t\t\t\t\t\t\t*ngIf=\"product.product.images.length !== 0\"\n\t\t\t\t\t\t/>\n\t\t\t\t\t</ion-slide>\n\t\t\t\t</ion-slides>\n\t\t\t</ion-row>\n\n\t\t\t<ion-row size=\"12\" class=\"list-content\">\n\t\t\t\t<div class=\"list\">\n\t\t\t\t\t<h6 class=\"title-text\">\n\t\t\t\t\t\t{{ 'PRODUCTS_VIEW.DETAILS.INCLUDES' | translate }}\n\t\t\t\t\t</h6>\n\t\t\t\t\t<span class=\"description-text\">\n\t\t\t\t\t\t{{ localeTranslate(product?.product.details) }}\n\t\t\t\t\t</span>\n\t\t\t\t</div>\n\t\t\t</ion-row>\n\n\t\t\t<ion-col\n\t\t\t\t[hidden]=\"true\"\n\t\t\t\tno-padding\n\t\t\t\tsize=\"12\"\n\t\t\t\tclass=\"reviews-content\"\n\t\t\t>\n\t\t\t\t<ion-img src=\"/assets/imgs/reviews.png\"></ion-img>\n\t\t\t</ion-col>\n\n\t\t\t<div class=\"box details-buttons\">\n\t\t\t\t<button\n\t\t\t\t\tclass=\"button button-assertive border-color-brand col-100\"\n\t\t\t\t\t[ngClass]=\"{'disabled': soldOut}\"\n\t\t\t\t\t(click)=\"!soldOut && buyItem(product.product)\"\n\t\t\t\t>\n\t\t\t\t\t<span\n\t\t\t\t\t\t>{{ !soldOut ? ('PRODUCTS_VIEW.BUY_BUTTON.PRE' |\n\t\t\t\t\t\ttranslate) : ('PRODUCTS_VIEW.NOT_AVAILABLE' | translate)\n\t\t\t\t\t\t}} {{ !soldOut ? (product?.price + '$') : ('') }} {{\n\t\t\t\t\t\t!soldOut ? ('PRODUCTS_VIEW.BUY_BUTTON.SUF' | translate)\n\t\t\t\t\t\t: ('') }}</span\n\t\t\t\t\t>\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t</ion-grid>\n\t</ion-card>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/+products/product-details/product-details.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/+products/product-details/product-details.module.ts ***!
  \***************************************************************************/
/*! exports provided: HttpLoaderFactory, ProductDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailsPageModule", function() { return ProductDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_progressbar_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-progressbar/core */ "./node_modules/@ngx-progressbar/core/fesm5/ngx-progressbar-core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _product_details_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./product-details.page */ "./src/app/pages/+products/product-details/product-details.page.ts");
/* harmony import */ var _components_warehouse_logo_warehouse_logo_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/warehouse-logo/warehouse-logo.module */ "./src/app/components/warehouse-logo/warehouse-logo.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm5/ngx-translate-http-loader.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _order_order_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../+order/order.module */ "./src/app/pages/+products/+order/order.module.ts");
/* harmony import */ var _order_cancel_cancel_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../+order/+cancel/cancel.module */ "./src/app/pages/+products/+order/+cancel/cancel.module.ts");
/* harmony import */ var _components_products_products_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../components/products/products.module */ "./src/app/components/products/products.module.ts");
/* harmony import */ var _order_takeaway_popup_popup_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../+order/takeaway/popup/popup.module */ "./src/app/pages/+products/+order/takeaway/popup/popup.module.ts");
















function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_10__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
}
var routes = [
    {
        path: '',
        component: _product_details_page__WEBPACK_IMPORTED_MODULE_7__["ProductDetailsPage"],
    },
];
var ProductDetailsPageModule = (function () {
    function ProductDetailsPageModule() {
    }
    ProductDetailsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
                _components_warehouse_logo_warehouse_logo_module__WEBPACK_IMPORTED_MODULE_8__["WarehouseLogoModule"],
                _ngx_progressbar_core__WEBPACK_IMPORTED_MODULE_5__["NgProgressModule"].withConfig({}),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateModule"].forChild({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateLoader"],
                        useFactory: HttpLoaderFactory,
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClient"]],
                    },
                }),
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _order_order_module__WEBPACK_IMPORTED_MODULE_12__["OrderPageModule"],
                _order_cancel_cancel_module__WEBPACK_IMPORTED_MODULE_13__["CancelPageModule"],
                _components_products_products_module__WEBPACK_IMPORTED_MODULE_14__["ProductsModule"],
                _order_takeaway_popup_popup_module__WEBPACK_IMPORTED_MODULE_15__["OrderTakeawayInfoPopupModule"],
            ],
            providers: [],
            declarations: [_product_details_page__WEBPACK_IMPORTED_MODULE_7__["ProductDetailsPage"]],
        })
    ], ProductDetailsPageModule);
    return ProductDetailsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/+products/product-details/product-details.page.scss":
/*!***************************************************************************!*\
  !*** ./src/app/pages/+products/product-details/product-details.page.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".disabled {\n  background: #cccccc !important;\n  color: #666666 !important;\n}\n\n.product-card {\n  border-radius: 0px;\n  margin: 0px;\n  width: 100%;\n  height: 100%;\n}\n\n.icon {\n  border: 1px solid #95989a;\n  padding: 5px;\n}\n\n.product-description {\n  color: #d0d0d0;\n}\n\n.btn-sm {\n  font-size: 60%;\n}\n\nion-slide {\n  display: block;\n  height: 100vh;\n}\n\n.product-details ion-title.title-ios.hydrated {\n  padding: 0;\n}\n\n.product-details .title-content {\n  width: 100%;\n}\n\n.product-details .title-content .ios-arrow-round-back {\n  height: 35px;\n  width: 35px;\n  float: left;\n  margin-right: 50px;\n}\n\n.product-details .title-content span {\n  margin-top: 4px;\n  float: left;\n}\n\n.slide-content {\n  max-height: 180px;\n}\n\nion-slide.swiper-slide {\n  display: flex !important;\n  align-content: center !important;\n  align-items: center !important;\n}\n\nion-slides.hydrated {\n  min-width: 100%;\n}\n\n.list-content {\n  margin-top: 10px;\n  padding-top: 10px;\n}\n\n.list {\n  max-height: 17em;\n  overflow: scroll;\n  padding-left: 20px;\n  padding-right: 20px;\n  list-style-type: none;\n  margin-bottom: 10px !important;\n}\n\n.reviews-content {\n  height: 70px;\n}\n\n.icon-cicle {\n  height: 130px;\n}\n\n.single-image {\n  width: 100%;\n}\n\n.all-space {\n  width: 100%;\n}\n\n.half-space {\n  width: 30%;\n  margin: 0 auto;\n}\n\n.back-btn {\n  font-size: 30px;\n  margin-right: 10px;\n  margin-bottom: 4px;\n}\n\n.title-text {\n  color: white;\n}\n\n.description-text {\n  color: #d0d0d0;\n}\n\n.delivery-sign {\n  font-size: 18px;\n}\n\n.delivery-info {\n  text-align: center;\n  line-height: 1;\n  padding-right: 5px;\n  color: white;\n}\n\n.delivery-info .delivery-lines {\n  font-size: 80%;\n}\n\n.delivery-info .delivery-lines small {\n  display: block;\n}\n\n.discount-circle {\n  z-index: 1000;\n  opacity: 0.8;\n  position: absolute;\n  right: 13px;\n  top: 10px;\n  font-size: 15px;\n  border-radius: 5px;\n  color: white;\n  padding: 5px;\n  line-height: 1;\n  text-align: center;\n}\n\n.discount-circle .price-initial {\n  font-size: 14px;\n  text-decoration: line-through;\n}\n\n.images {\n  position: relative;\n}\n\n.details-buttons {\n  position: absolute;\n  padding-right: 5px;\n  padding-left: 5px;\n  bottom: 5px;\n}\n\n.details-buttons button {\n  padding: 15px;\n  border-radius: 5px;\n  display: flex !important;\n  align-content: center !important;\n  align-items: center !important;\n  position: relative;\n  text-align: center;\n  height: 100%;\n  color: white;\n  text-align: center;\n}\n\n.details-buttons button span {\n  margin: 0 auto;\n}\n\n.details-buttons .disabled {\n  background: #cccccc !important;\n  border: 1px solid #999999 !important;\n  color: #666666 !important;\n}\n\n.text-content {\n  padding-left: 10px;\n  line-height: 1;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: inline-block;\n}\n\n.text {\n  margin: 0;\n  color: white;\n  font-size: 16px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.productDescription {\n  color: #d0d0d0;\n  margin: 0 !important;\n}\n\nion-col {\n  padding: 2px;\n}\n\n.header-container {\n  display: flex !important;\n  padding: 5px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvZC9Xb3JrL0FuZ3VsYXIvTmV3IGZvbGRlciAoMikvRG9sY2VHcm9jZXJ5L3BhY2thZ2VzL3Nob3AtbW9iaWxlLWlvbmljL3NyYy9hcHAvcGFnZXMvK3Byb2R1Y3RzL3Byb2R1Y3QtZGV0YWlscy9wcm9kdWN0LWRldGFpbHMucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy8rcHJvZHVjdHMvcHJvZHVjdC1kZXRhaWxzL3Byb2R1Y3QtZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyw4QkFBOEI7RUFDOUIseUJBQXlCO0FDQzFCOztBREVBO0VBQ0Msa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxXQUFXO0VBQ1gsWUFBWTtBQ0NiOztBREVBO0VBQ0MseUJBQXlCO0VBQ3pCLFlBQVk7QUNDYjs7QURFQTtFQUNDLGNBQWM7QUNDZjs7QURFQTtFQUNDLGNBQWM7QUNDZjs7QURFQTtFQUNDLGNBQWM7RUFDZCxhQUFhO0FDQ2Q7O0FERUE7RUFFRSxVQUFVO0FDQVo7O0FERkE7RUFNRSxXQUFXO0FDQWI7O0FETkE7RUFRRyxZQUFZO0VBQ1osV0FBVztFQUNYLFdBQVc7RUFDWCxrQkFBa0I7QUNFckI7O0FEYkE7RUFlRyxlQUFlO0VBQ2YsV0FBVztBQ0VkOztBREdBO0VBQ0MsaUJBQWlCO0FDQWxCOztBREdBO0VBQ0Msd0JBQXdCO0VBQ3hCLGdDQUFnQztFQUNoQyw4QkFBOEI7QUNBL0I7O0FER0E7RUFDQyxlQUFlO0FDQWhCOztBREdBO0VBQ0MsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQ0FsQjs7QURHQTtFQUNDLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsOEJBQThCO0FDQS9COztBREdBO0VBQ0MsWUFBWTtBQ0FiOztBREdBO0VBQ0MsYUFBYTtBQ0FkOztBREdBO0VBQ0MsV0FBVztBQ0FaOztBREdBO0VBQ0MsV0FBVztBQ0FaOztBREdBO0VBQ0MsVUFBVTtFQUNWLGNBQWM7QUNBZjs7QURHQTtFQUNDLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsa0JBQWtCO0FDQW5COztBREdBO0VBQ0MsWUFBWTtBQ0FiOztBREdBO0VBQ0MsY0FBYztBQ0FmOztBREdBO0VBQ0MsZUFBZTtBQ0FoQjs7QURHQTtFQUNDLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLFlBQVk7QUNBYjs7QURKQTtFQU1FLGNBQWM7QUNFaEI7O0FEUkE7RUFRRyxjQUFjO0FDSWpCOztBRENBO0VBQ0MsYUFBYTtFQUNiLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFNBQVM7RUFDVCxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixZQUFZO0VBRVosY0FBYztFQUNkLGtCQUFrQjtBQ0NuQjs7QURiQTtFQWVFLGVBQWU7RUFDZiw2QkFBNkI7QUNFL0I7O0FERUE7RUFDQyxrQkFBa0I7QUNDbkI7O0FERUE7RUFDQyxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixXQUFXO0FDQ1o7O0FETEE7RUFNRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLHdCQUF3QjtFQUN4QixnQ0FBZ0M7RUFDaEMsOEJBQThCO0VBQzlCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0I7QUNHcEI7O0FEbEJBO0VBaUJHLGNBQWM7QUNLakI7O0FEdEJBO0VBc0JFLDhCQUE4QjtFQUM5QixvQ0FBb0M7RUFDcEMseUJBQXlCO0FDSTNCOztBREFBO0VBQ0Msa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLHFCQUFxQjtBQ0d0Qjs7QURBQTtFQUNDLFNBQVM7RUFDVCxZQUFZO0VBQ1osZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsdUJBQXVCO0FDR3hCOztBREFBO0VBQ0MsY0FBYztFQUNkLG9CQUFvQjtBQ0dyQjs7QURBQTtFQUNDLFlBQVk7QUNHYjs7QURBQTtFQUNDLHdCQUF3QjtFQUN4QixZQUFZO0FDR2IiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy8rcHJvZHVjdHMvcHJvZHVjdC1kZXRhaWxzL3Byb2R1Y3QtZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGlzYWJsZWQge1xuXHRiYWNrZ3JvdW5kOiAjY2NjY2NjICFpbXBvcnRhbnQ7XG5cdGNvbG9yOiAjNjY2NjY2ICFpbXBvcnRhbnQ7XG59XG5cbi5wcm9kdWN0LWNhcmQge1xuXHRib3JkZXItcmFkaXVzOiAwcHg7XG5cdG1hcmdpbjogMHB4O1xuXHR3aWR0aDogMTAwJTtcblx0aGVpZ2h0OiAxMDAlO1xufVxuXG4uaWNvbiB7XG5cdGJvcmRlcjogMXB4IHNvbGlkICM5NTk4OWE7XG5cdHBhZGRpbmc6IDVweDtcbn1cblxuLnByb2R1Y3QtZGVzY3JpcHRpb24ge1xuXHRjb2xvcjogI2QwZDBkMDtcbn1cblxuLmJ0bi1zbSB7XG5cdGZvbnQtc2l6ZTogNjAlO1xufVxuXG5pb24tc2xpZGUge1xuXHRkaXNwbGF5OiBibG9jaztcblx0aGVpZ2h0OiAxMDB2aDtcbn1cblxuLnByb2R1Y3QtZGV0YWlscyB7XG5cdGlvbi10aXRsZS50aXRsZS1pb3MuaHlkcmF0ZWQge1xuXHRcdHBhZGRpbmc6IDA7XG5cdH1cblxuXHQudGl0bGUtY29udGVudCB7XG5cdFx0d2lkdGg6IDEwMCU7XG5cdFx0Lmlvcy1hcnJvdy1yb3VuZC1iYWNrIHtcblx0XHRcdGhlaWdodDogMzVweDtcblx0XHRcdHdpZHRoOiAzNXB4O1xuXHRcdFx0ZmxvYXQ6IGxlZnQ7XG5cdFx0XHRtYXJnaW4tcmlnaHQ6IDUwcHg7XG5cdFx0fVxuXG5cdFx0c3BhbiB7XG5cdFx0XHRtYXJnaW4tdG9wOiA0cHg7XG5cdFx0XHRmbG9hdDogbGVmdDtcblx0XHR9XG5cdH1cbn1cblxuLnNsaWRlLWNvbnRlbnQge1xuXHRtYXgtaGVpZ2h0OiAxODBweDtcbn1cblxuaW9uLXNsaWRlLnN3aXBlci1zbGlkZSB7XG5cdGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcblx0YWxpZ24tY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcbn1cblxuaW9uLXNsaWRlcy5oeWRyYXRlZCB7XG5cdG1pbi13aWR0aDogMTAwJTtcbn1cblxuLmxpc3QtY29udGVudCB7XG5cdG1hcmdpbi10b3A6IDEwcHg7XG5cdHBhZGRpbmctdG9wOiAxMHB4O1xufVxuXG4ubGlzdCB7XG5cdG1heC1oZWlnaHQ6IDE3ZW07XG5cdG92ZXJmbG93OiBzY3JvbGw7XG5cdHBhZGRpbmctbGVmdDogMjBweDtcblx0cGFkZGluZy1yaWdodDogMjBweDtcblx0bGlzdC1zdHlsZS10eXBlOiBub25lO1xuXHRtYXJnaW4tYm90dG9tOiAxMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5yZXZpZXdzLWNvbnRlbnQge1xuXHRoZWlnaHQ6IDcwcHg7XG59XG5cbi5pY29uLWNpY2xlIHtcblx0aGVpZ2h0OiAxMzBweDtcbn1cblxuLnNpbmdsZS1pbWFnZSB7XG5cdHdpZHRoOiAxMDAlO1xufVxuXG4uYWxsLXNwYWNlIHtcblx0d2lkdGg6IDEwMCU7XG59XG5cbi5oYWxmLXNwYWNlIHtcblx0d2lkdGg6IDMwJTtcblx0bWFyZ2luOiAwIGF1dG87XG59XG5cbi5iYWNrLWJ0biB7XG5cdGZvbnQtc2l6ZTogMzBweDtcblx0bWFyZ2luLXJpZ2h0OiAxMHB4O1xuXHRtYXJnaW4tYm90dG9tOiA0cHg7XG59XG5cbi50aXRsZS10ZXh0IHtcblx0Y29sb3I6IHdoaXRlO1xufVxuXG4uZGVzY3JpcHRpb24tdGV4dCB7XG5cdGNvbG9yOiAjZDBkMGQwO1xufVxuXG4uZGVsaXZlcnktc2lnbiB7XG5cdGZvbnQtc2l6ZTogMThweDtcbn1cblxuLmRlbGl2ZXJ5LWluZm8ge1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdGxpbmUtaGVpZ2h0OiAxO1xuXHRwYWRkaW5nLXJpZ2h0OiA1cHg7XG5cdGNvbG9yOiB3aGl0ZTtcblx0LmRlbGl2ZXJ5LWxpbmVzIHtcblx0XHRmb250LXNpemU6IDgwJTtcblx0XHRzbWFsbCB7XG5cdFx0XHRkaXNwbGF5OiBibG9jaztcblx0XHR9XG5cdH1cbn1cblxuLmRpc2NvdW50LWNpcmNsZSB7XG5cdHotaW5kZXg6IDEwMDA7XG5cdG9wYWNpdHk6IDAuODtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHRyaWdodDogMTNweDtcblx0dG9wOiAxMHB4O1xuXHRmb250LXNpemU6IDE1cHg7XG5cdGJvcmRlci1yYWRpdXM6IDVweDtcblx0Y29sb3I6IHdoaXRlO1xuXHRwYWRkaW5nOiA1cHg7XG5cblx0bGluZS1oZWlnaHQ6IDE7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblxuXHQucHJpY2UtaW5pdGlhbCB7XG5cdFx0Zm9udC1zaXplOiAxNHB4O1xuXHRcdHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuXHR9XG59XG5cbi5pbWFnZXMge1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5kZXRhaWxzLWJ1dHRvbnMge1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHBhZGRpbmctcmlnaHQ6IDVweDtcblx0cGFkZGluZy1sZWZ0OiA1cHg7XG5cdGJvdHRvbTogNXB4O1xuXHRidXR0b24ge1xuXHRcdHBhZGRpbmc6IDE1cHg7XG5cdFx0Ym9yZGVyLXJhZGl1czogNXB4O1xuXHRcdGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcblx0XHRhbGlnbi1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcblx0XHRhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRoZWlnaHQ6IDEwMCU7XG5cdFx0Y29sb3I6IHdoaXRlO1xuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRzcGFuIHtcblx0XHRcdG1hcmdpbjogMCBhdXRvO1xuXHRcdH1cblx0fVxuXG5cdC5kaXNhYmxlZCB7XG5cdFx0YmFja2dyb3VuZDogI2NjY2NjYyAhaW1wb3J0YW50O1xuXHRcdGJvcmRlcjogMXB4IHNvbGlkICM5OTk5OTkgIWltcG9ydGFudDtcblx0XHRjb2xvcjogIzY2NjY2NiAhaW1wb3J0YW50O1xuXHR9XG59XG5cbi50ZXh0LWNvbnRlbnQge1xuXHRwYWRkaW5nLWxlZnQ6IDEwcHg7XG5cdGxpbmUtaGVpZ2h0OiAxO1xuXHRvdmVyZmxvdzogaGlkZGVuO1xuXHR0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4udGV4dCB7XG5cdG1hcmdpbjogMDtcblx0Y29sb3I6IHdoaXRlO1xuXHRmb250LXNpemU6IDE2cHg7XG5cdHdoaXRlLXNwYWNlOiBub3dyYXA7XG5cdG92ZXJmbG93OiBoaWRkZW47XG5cdHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG4ucHJvZHVjdERlc2NyaXB0aW9uIHtcblx0Y29sb3I6ICNkMGQwZDA7XG5cdG1hcmdpbjogMCAhaW1wb3J0YW50O1xufVxuXG5pb24tY29sIHtcblx0cGFkZGluZzogMnB4O1xufVxuXG4uaGVhZGVyLWNvbnRhaW5lciB7XG5cdGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcblx0cGFkZGluZzogNXB4O1xufVxuIiwiLmRpc2FibGVkIHtcbiAgYmFja2dyb3VuZDogI2NjY2NjYyAhaW1wb3J0YW50O1xuICBjb2xvcjogIzY2NjY2NiAhaW1wb3J0YW50O1xufVxuXG4ucHJvZHVjdC1jYXJkIHtcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xuICBtYXJnaW46IDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmljb24ge1xuICBib3JkZXI6IDFweCBzb2xpZCAjOTU5ODlhO1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbi5wcm9kdWN0LWRlc2NyaXB0aW9uIHtcbiAgY29sb3I6ICNkMGQwZDA7XG59XG5cbi5idG4tc20ge1xuICBmb250LXNpemU6IDYwJTtcbn1cblxuaW9uLXNsaWRlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogMTAwdmg7XG59XG5cbi5wcm9kdWN0LWRldGFpbHMgaW9uLXRpdGxlLnRpdGxlLWlvcy5oeWRyYXRlZCB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5wcm9kdWN0LWRldGFpbHMgLnRpdGxlLWNvbnRlbnQge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnByb2R1Y3QtZGV0YWlscyAudGl0bGUtY29udGVudCAuaW9zLWFycm93LXJvdW5kLWJhY2sge1xuICBoZWlnaHQ6IDM1cHg7XG4gIHdpZHRoOiAzNXB4O1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xufVxuXG4ucHJvZHVjdC1kZXRhaWxzIC50aXRsZS1jb250ZW50IHNwYW4ge1xuICBtYXJnaW4tdG9wOiA0cHg7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4uc2xpZGUtY29udGVudCB7XG4gIG1heC1oZWlnaHQ6IDE4MHB4O1xufVxuXG5pb24tc2xpZGUuc3dpcGVyLXNsaWRlIHtcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xufVxuXG5pb24tc2xpZGVzLmh5ZHJhdGVkIHtcbiAgbWluLXdpZHRoOiAxMDAlO1xufVxuXG4ubGlzdC1jb250ZW50IHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG59XG5cbi5saXN0IHtcbiAgbWF4LWhlaWdodDogMTdlbTtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIG1hcmdpbi1ib3R0b206IDEwcHggIWltcG9ydGFudDtcbn1cblxuLnJldmlld3MtY29udGVudCB7XG4gIGhlaWdodDogNzBweDtcbn1cblxuLmljb24tY2ljbGUge1xuICBoZWlnaHQ6IDEzMHB4O1xufVxuXG4uc2luZ2xlLWltYWdlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5hbGwtc3BhY2Uge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmhhbGYtc3BhY2Uge1xuICB3aWR0aDogMzAlO1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLmJhY2stYnRuIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDRweDtcbn1cblxuLnRpdGxlLXRleHQge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5kZXNjcmlwdGlvbi10ZXh0IHtcbiAgY29sb3I6ICNkMGQwZDA7XG59XG5cbi5kZWxpdmVyeS1zaWduIHtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4uZGVsaXZlcnktaW5mbyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uZGVsaXZlcnktaW5mbyAuZGVsaXZlcnktbGluZXMge1xuICBmb250LXNpemU6IDgwJTtcbn1cblxuLmRlbGl2ZXJ5LWluZm8gLmRlbGl2ZXJ5LWxpbmVzIHNtYWxsIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5kaXNjb3VudC1jaXJjbGUge1xuICB6LWluZGV4OiAxMDAwO1xuICBvcGFjaXR5OiAwLjg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDEzcHg7XG4gIHRvcDogMTBweDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogNXB4O1xuICBsaW5lLWhlaWdodDogMTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZGlzY291bnQtY2lyY2xlIC5wcmljZS1pbml0aWFsIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbn1cblxuLmltYWdlcyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmRldGFpbHMtYnV0dG9ucyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcGFkZGluZy1yaWdodDogNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgYm90dG9tOiA1cHg7XG59XG5cbi5kZXRhaWxzLWJ1dHRvbnMgYnV0dG9uIHtcbiAgcGFkZGluZzogMTVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xuICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZGV0YWlscy1idXR0b25zIGJ1dHRvbiBzcGFuIHtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5kZXRhaWxzLWJ1dHRvbnMgLmRpc2FibGVkIHtcbiAgYmFja2dyb3VuZDogI2NjY2NjYyAhaW1wb3J0YW50O1xuICBib3JkZXI6IDFweCBzb2xpZCAjOTk5OTk5ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjNjY2NjY2ICFpbXBvcnRhbnQ7XG59XG5cbi50ZXh0LWNvbnRlbnQge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4udGV4dCB7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG4ucHJvZHVjdERlc2NyaXB0aW9uIHtcbiAgY29sb3I6ICNkMGQwZDA7XG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xufVxuXG5pb24tY29sIHtcbiAgcGFkZGluZzogMnB4O1xufVxuXG4uaGVhZGVyLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgcGFkZGluZzogNXB4O1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/pages/+products/product-details/product-details.page.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/+products/product-details/product-details.page.ts ***!
  \*************************************************************************/
/*! exports provided: ProductDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailsPage", function() { return ProductDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_store_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/store.service */ "./src/app/services/store.service.ts");
/* harmony import */ var _modules_client_common_angular2_locale_product_locales_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @modules/client.common.angular2/locale/product-locales.service */ "../common-angular/src/locale/product-locales.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _modules_client_common_angular2_routers_warehouse_orders_router_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @modules/client.common.angular2/routers/warehouse-orders-router.service */ "../common-angular/src/routers/warehouse-orders-router.service.ts");
/* harmony import */ var _order_order_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../+order/order.page */ "./src/app/pages/+products/+order/order.page.ts");
/* harmony import */ var _modules_client_common_angular2_routers_warehouse_router_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @modules/client.common.angular2/routers/warehouse-router.service */ "../common-angular/src/routers/warehouse-router.service.ts");
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _modules_client_common_angular2_routers_warehouse_products_router_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @modules/client.common.angular2/routers/warehouse-products-router.service */ "../common-angular/src/routers/warehouse-products-router.service.ts");
/* harmony import */ var _modules_server_common_enums_RegistrationSystem__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @modules/server.common/enums/RegistrationSystem */ "../common/src/enums/RegistrationSystem.ts");
/* harmony import */ var _modules_server_common_enums_DeliveryType__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @modules/server.common/enums/DeliveryType */ "../common/src/enums/DeliveryType.ts");
/* harmony import */ var _order_takeaway_popup_popup_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../+order/takeaway/popup/popup.component */ "./src/app/pages/+products/+order/takeaway/popup/popup.component.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
















var ProductDetailsPage = (function () {
    function ProductDetailsPage(route, store, translateProductLocales, ngZone, router, navCtrl, warehouseOrdersRouter, modalController, warehouseRouter, warehouseProductsRouter) {
        this.route = route;
        this.store = store;
        this.translateProductLocales = translateProductLocales;
        this.ngZone = ngZone;
        this.router = router;
        this.navCtrl = navCtrl;
        this.warehouseOrdersRouter = warehouseOrdersRouter;
        this.modalController = modalController;
        this.warehouseRouter = warehouseRouter;
        this.warehouseProductsRouter = warehouseProductsRouter;
        this.ngDestroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_15__["Subject"]();
        this.swiperEvents$ = new rxjs__WEBPACK_IMPORTED_MODULE_15__["Subject"]();
        this.modalChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.slideOptions();
        this.getModalChange();
    }
    ProductDetailsPage_1 = ProductDetailsPage;
    ProductDetailsPage.prototype.ngAfterViewInit = function () {
        this.prevUrl = this.route.snapshot.queryParams.backUrl;
        this.warehouseId = this.route.snapshot.queryParams.warehouseId;
        this.loadProductImages();
    };
    ProductDetailsPage.prototype.slideOptions = function () {
        var _this = this;
        var self = this;
        this.swiperOptions = {
            autoHeight: true,
            slidesPerView: 2,
            spaceBetween: 5,
            resistance: true,
            watchSlidesProgress: true,
            longSwipes: false,
            on: {
                init: function () {
                    self.swiper = this;
                    window.swiper = this.swiper;
                    self.swiperEvents$.next('init');
                },
                transitionStart: function () {
                    if (_this.swiper) {
                        _this.ngZone.run(function () {
                        });
                    }
                },
            },
        };
    };
    ProductDetailsPage.prototype.localeTranslate = function (member) {
        return this.translateProductLocales.getTranslate(member);
    };
    ProductDetailsPage.prototype.buyItem = function (currentProduct) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var orderCreateInput, order;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(!this.store.userId &&
                            this.store.registrationSystem === _modules_server_common_enums_RegistrationSystem__WEBPACK_IMPORTED_MODULE_11__["default"].Disabled)) return [3, 1];
                        this.store.registrationSystem = _modules_server_common_enums_RegistrationSystem__WEBPACK_IMPORTED_MODULE_11__["default"].Once;
                        this.store.buyProduct = currentProduct.id;
                        this.store.backToDetails = currentProduct.id;
                        this.store.warehouseId = this.warehouseId;
                        this.navCtrl.navigateRoot('/invite');
                        return [3, 3];
                    case 1:
                        orderCreateInput = {
                            warehouseId: this.warehouseId,
                            products: [{ count: 1, productId: currentProduct.id }],
                            userId: this.store.userId,
                            orderType: this.store.deliveryType,
                            options: { autoConfirm: true },
                        };
                        return [4, this.warehouseOrdersRouter.create(orderCreateInput)];
                    case 2:
                        order = _a.sent();
                        this.store.orderId = order.id;
                        this.store.orderWarehouseId = order.warehouseId;
                        if (environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].ORDER_INFO_TYPE === 'popup') {
                            this.showOrderInfoModal();
                        }
                        if (environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].ORDER_INFO_TYPE === 'page') {
                            this.router.navigate([
                                "" + (this.store.deliveryType === _modules_server_common_enums_DeliveryType__WEBPACK_IMPORTED_MODULE_12__["default"].Delivery
                                    ? '/order-info'
                                    : '/order-info-takeaway'),
                            ]);
                        }
                        _a.label = 3;
                    case 3: return [2];
                }
            });
        });
    };
    ProductDetailsPage.prototype.goToProductPage = function () {
        this.router.navigateByUrl(this.prevUrl);
    };
    ProductDetailsPage.prototype.shortenDescription = function (desc) {
        return desc.length < ProductDetailsPage_1.MAX_DESCRIPTION_LENGTH
            ? desc
            : desc.substr(0, ProductDetailsPage_1.MAX_DESCRIPTION_LENGTH - 3) +
                '...';
    };
    ProductDetailsPage.prototype.showOrderInfoModal = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var modal;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.modalController.create({
                            component: this.store.deliveryType === _modules_server_common_enums_DeliveryType__WEBPACK_IMPORTED_MODULE_12__["default"].Delivery
                                ? _order_order_page__WEBPACK_IMPORTED_MODULE_7__["OrderPage"]
                                : _order_takeaway_popup_popup_component__WEBPACK_IMPORTED_MODULE_13__["OrderTakeawayInfoPopup"],
                            cssClass: 'order-info-modal',
                            componentProps: { modalChange: this.modalChange },
                        })];
                    case 1:
                        modal = _a.sent();
                        this.modalChange.emit(true);
                        return [2, modal.present()];
                }
            });
        });
    };
    ProductDetailsPage.prototype.getModalChange = function () {
        var _this = this;
        this.modalChange
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["takeUntil"])(this.ngDestroy$))
            .subscribe(function (result) {
            _this.modalOpen = result;
        });
    };
    ProductDetailsPage.prototype.continueOrder = function () {
        var buyProductId = this.store.buyProduct;
        if (this.store.userId) {
            if (buyProductId && buyProductId !== 'null') {
                this.buyItem(this.product.product);
                this.store.buyProduct = null;
                this.store.warehouseId = null;
            }
        }
        else {
            this.store.buyProduct = null;
            this.store.warehouseId = null;
        }
    };
    ProductDetailsPage.prototype._subscribeWarehouseProduct = function () {
        var _this = this;
        if (this.warehouseProduct$) {
            this.warehouseProduct$.unsubscribe();
        }
        if (this.product) {
            this.warehouseProduct$ = this.warehouseProductsRouter
                .get(this.warehouseId, false)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["takeUntil"])(this.ngDestroy$))
                .subscribe(function (r) {
                var prod = r.filter(function (p) { return p.productId === _this.product.productId; })[0];
                _this.soldOut = !prod || prod.count <= 0;
            });
        }
    };
    ProductDetailsPage.prototype.loadProductImages = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var warehouse, products;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.productID = this.route.snapshot.paramMap.get('id');
                        return [4, this.warehouseRouter
                                .get(this.warehouseId, true)
                                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["first"])())
                                .toPromise()];
                    case 1:
                        warehouse = _a.sent();
                        this.warehouseLogo = warehouse.logo;
                        products = warehouse.products;
                        this.product = products.filter(function (p) { return p.product['id'] === _this.productID; })[0];
                        this.continueOrder();
                        this.loadImages();
                        this._subscribeWarehouseProduct();
                        return [2];
                }
            });
        });
    };
    ProductDetailsPage.prototype.loadImages = function () {
        var currentProduct = this.product.product;
        if (currentProduct.images.length > 1) {
            var horizontal = currentProduct.images.filter(function (i) { return i.orientation === 2; });
            var vertical = currentProduct.images.filter(function (i) { return i.orientation !== 2; });
            if (vertical.length === horizontal.length &&
                vertical.length === 1) {
                this.image = horizontal[0];
            }
            else if (vertical.length === 1) {
                this.images = horizontal;
            }
            else if (horizontal.length === 1) {
                this.images = vertical;
            }
            else {
                if (vertical.length > 0) {
                    this.images = vertical;
                }
                else {
                    this.images = horizontal;
                }
            }
        }
        else if (currentProduct.images.length === 1) {
            this.image = currentProduct.images[0];
        }
    };
    ProductDetailsPage.prototype.ngOnDestroy = function () {
        if (this.swiperEvents$) {
            this.swiperEvents$.complete();
        }
        this.ngDestroy$.next();
        this.ngDestroy$.complete();
    };
    var ProductDetailsPage_1;
    ProductDetailsPage.MAX_DESCRIPTION_LENGTH = 53;
    ProductDetailsPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _services_store_service__WEBPACK_IMPORTED_MODULE_3__["Store"] },
        { type: _modules_client_common_angular2_locale_product_locales_service__WEBPACK_IMPORTED_MODULE_4__["ProductLocalesService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
        { type: _modules_client_common_angular2_routers_warehouse_orders_router_service__WEBPACK_IMPORTED_MODULE_6__["WarehouseOrdersRouter"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
        { type: _modules_client_common_angular2_routers_warehouse_router_service__WEBPACK_IMPORTED_MODULE_8__["WarehouseRouter"] },
        { type: _modules_client_common_angular2_routers_warehouse_products_router_service__WEBPACK_IMPORTED_MODULE_10__["WarehouseProductsRouter"] }
    ]; };
    ProductDetailsPage = ProductDetailsPage_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'e-cu-product-details',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./product-details.page.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/pages/+products/product-details/product-details.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./product-details.page.scss */ "./src/app/pages/+products/product-details/product-details.page.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_store_service__WEBPACK_IMPORTED_MODULE_3__["Store"],
            _modules_client_common_angular2_locale_product_locales_service__WEBPACK_IMPORTED_MODULE_4__["ProductLocalesService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"],
            _modules_client_common_angular2_routers_warehouse_orders_router_service__WEBPACK_IMPORTED_MODULE_6__["WarehouseOrdersRouter"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"],
            _modules_client_common_angular2_routers_warehouse_router_service__WEBPACK_IMPORTED_MODULE_8__["WarehouseRouter"],
            _modules_client_common_angular2_routers_warehouse_products_router_service__WEBPACK_IMPORTED_MODULE_10__["WarehouseProductsRouter"]])
    ], ProductDetailsPage);
    return ProductDetailsPage;
}());



/***/ })

}]);
//# sourceMappingURL=products-product-details-product-details-module.js.map