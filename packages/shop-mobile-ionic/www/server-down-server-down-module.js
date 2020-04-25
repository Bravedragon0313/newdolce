(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["server-down-server-down-module"],{

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/+server-down/server-down.page.html":
/*!****************************************************************************************************************************************!*\
  !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/raw-loader/dist/cjs.js!./src/app/+server-down/server-down.page.html ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"login-view info-page\" scroll=\"false\">\n\t<div class=\"server-down-content\">\n\t\t<div class=\"logo app-hide-on-keyboard-open\">\n\t\t\t<img src=\"{{ noInternetLogo }}\" />\n\t\t</div>\n\n\t\t<div class=\"info-massage\">\n\t\t\t<h3 class=\"m-0\">\n\t\t\t\t{{ 'NO_SERVER_VIEW.NO_SERVER' | translate }}\n\t\t\t</h3>\n\t\t</div>\n\t</div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/+server-down/server-down.module.ts":
/*!****************************************************!*\
  !*** ./src/app/+server-down/server-down.module.ts ***!
  \****************************************************/
/*! exports provided: HttpLoaderFactory, ServerDownPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerDownPageModule", function() { return ServerDownPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _modules_client_common_angular2_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @modules/client.common.angular2/pipes/pipes.module */ "../common-angular/src/pipes/pipes.module.ts");
/* harmony import */ var _server_down_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./server-down.page */ "./src/app/+server-down/server-down.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm5/ngx-translate-http-loader.js");











function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_10__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
}
var routes = [
    {
        path: '',
        component: _server_down_page__WEBPACK_IMPORTED_MODULE_7__["ServerDownPage"],
    },
];
var ServerDownPageModule = (function () {
    function ServerDownPageModule() {
    }
    ServerDownPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _modules_client_common_angular2_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__["PipesModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"].forChild({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateLoader"],
                        useFactory: HttpLoaderFactory,
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"]],
                    },
                }),
            ],
            declarations: [_server_down_page__WEBPACK_IMPORTED_MODULE_7__["ServerDownPage"]],
        })
    ], ServerDownPageModule);
    return ServerDownPageModule;
}());



/***/ }),

/***/ "./src/app/+server-down/server-down.page.scss":
/*!****************************************************!*\
  !*** ./src/app/+server-down/server-down.page.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".app-keyboard-open .app-hide-on-keyboard-open {\n  display: none;\n}\n\nhtml,\nbody {\n  overflow: visible !important;\n  background-color: #1a8e45 !important;\n}\n\n.menu-open .side-menu-content-ltr {\n  -webkit-transform: translate3d(250px, 0px, 0px) !important;\n}\n\n.menu-open .side-menu-content-rtl {\n  -webkit-transform: translate3d(-250px, 0px, 0px) !important;\n}\n\n.loading-container .loading {\n  background-color: transparent;\n}\n\n.loading-container .loading .spinner {\n  fill: #fff;\n  stroke: #fff;\n}\n\n.loading-container .loading .spinner svg {\n  width: 40px;\n  height: 40px;\n}\n\n.bright-vie .loading-container .loading .spinner {\n  fill: #1ea44f;\n  stroke: #1ea44f;\n}\n\n.swiper-slide img {\n  width: 100%;\n}\n\n.bar.bar-brand {\n  border-bottom: 2px solid #1c9b4b;\n  background: #1ea44f none;\n  color: white !important;\n}\n\n.bar.bar-brand .title {\n  color: white;\n}\n\n.bar.bar-brand .button-icon mr-1 {\n  color: white;\n}\n\n.brand-link {\n  color: #1ea44f;\n}\n\n.brand-link:active {\n  color: #353748;\n}\n\n.everbie-input {\n  height: 57px;\n  width: 100%;\n  font-size: 16px;\n  line-height: 20px;\n  border: solid #5c5f73 1px;\n  color: #fff;\n  background-color: inherit;\n  border-radius: 8px;\n  padding: 20px;\n  text-align: center;\n  -webkit-appearance: none;\n}\n\n.everbie-input::-webkit-input-placeholder {\n  color: #6d6f80;\n}\n\n.everbie-input::-moz-placeholder {\n  color: #6d6f80;\n}\n\n.everbie-input:-ms-input-placeholder {\n  color: #6d6f80;\n}\n\n.button.button-brand, .button-brand.everbie-button {\n  background-color: #1ea44f;\n  border-color: #1c9749;\n  color: #fff;\n}\n\n.button.button-brand.active, .button-brand.active.everbie-button, .button.button-brand.activated, .button-brand.activated.everbie-button {\n  background-color: #1da04d;\n  box-shadow: inset 0 1px 4px rgba(0, 0, 0, 0.1);\n}\n\n.button.button-dark-brand, .button-dark-brand.everbie-button {\n  background-color: #1a8e45;\n  border-color: #18823e;\n  color: #fff;\n}\n\n.button.button-dark-brand.active, .button-dark-brand.active.everbie-button, .button.button-dark-brand.activated, .button-dark-brand.activated.everbie-button {\n  background-color: #198a43;\n  box-shadow: inset 0 1px 4px rgba(0, 0, 0, 0.1);\n}\n\n.button.button-brand-lighted, .button-brand-lighted.everbie-button {\n  background-color: #353748;\n  border-color: #2f303f;\n  color: #fff;\n}\n\n.button.button-brand-lighted.active, .button-brand-lighted.active.everbie-button, .button.button-brand-lighted.activated, .button-brand-lighted.activated.everbie-button {\n  background-color: #333545;\n  box-shadow: inset 0 1px 4px rgba(0, 0, 0, 0.1);\n}\n\n.button.button-assertive.active, .active.everbie-button, .button.button-assertive.activated, .activated.everbie-button {\n  border-color: #aa403b !important;\n}\n\n.button.button-balanced.active, .button-balanced.active.everbie-button, .button.button-balanced.activated, .button-balanced.activated.everbie-button {\n  border-color: #2fc159 !important;\n}\n\n.button.button-balanced, .button-balanced.everbie-button {\n  background-color: #2db955;\n}\n\n.everbie-button {\n  border-radius: 8px !important;\n  font-size: 20px;\n  padding: 10px 16px;\n  margin-bottom: 0;\n  line-height: 34px;\n  background-color: #ce4843;\n}\n\n.bottom-0 {\n  position: absolute;\n  bottom: 0;\n}\n\n.no-padding {\n  padding: 0;\n}\n\n.no-padding-right {\n  padding-right: 0;\n}\n\n.no-padding-left {\n  padding-left: 0;\n}\n\n.no-padding-top {\n  padding-top: 0;\n}\n\n.no-padding-bottom {\n  padding-bottom: 0;\n}\n\n.text-align-right {\n  text-align: right;\n}\n\n.text-align-center {\n  text-align: center;\n}\n\n.text-align-left {\n  text-align: left;\n}\n\n.col-100 {\n  width: 100%;\n}\n\n.display-block {\n  display: block;\n}\n\n.header-bar-big-title {\n  font-size: 22px !important;\n  text-align: center !important;\n}\n\n.button-bar-right-container {\n  width: 280px;\n  margin-left: auto;\n}\n\n.pull-right {\n  margin-left: auto;\n}\n\n.plus-navbar-button::before {\n  font-size: 24px !important;\n}\n\n.border-color-brand {\n  border-color: #1ea44f;\n}\n\n.flip {\n  transform: scale(-1, 1);\n}\n\n.transition-on-color-change {\n  transition: background-color 0.3s, border-color 0.3s, color 0.3s;\n}\n\n.horizontal-space-10 {\n  width: 10px;\n}\n\n.margin-top-bottom {\n  margin-top: 5px;\n  margin-bottom: 5px;\n}\n\n.maintenance-message-container {\n  color: white;\n  padding: 20px;\n  background: #1ea44f;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  height: 100%;\n}\n\n.info-page .server-down-content {\n  color: white;\n  padding: 20px;\n  background: #1ea44f;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  height: 100%;\n  flex-direction: column;\n}\n\n.info-page .info-massage h3 {\n  color: red;\n  width: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvZC9Xb3JrL0FuZ3VsYXIvTmV3IGZvbGRlciAoMikvRG9sY2VHcm9jZXJ5L3BhY2thZ2VzL3Nob3AtbW9iaWxlLWlvbmljL25vZGVfbW9kdWxlcy9AZXZlci1wbGF0Zm9ybS9jb21tb24tYW5ndWxhci9zcmMvc2Nzcy9ldmVyYmllLmNvbW1vbi5zY3NzIiwic3JjL2FwcC8rc2VydmVyLWRvd24vc2VydmVyLWRvd24ucGFnZS5zY3NzIiwiL21udC9kL1dvcmsvQW5ndWxhci9OZXcgZm9sZGVyICgyKS9Eb2xjZUdyb2NlcnkvcGFja2FnZXMvc2hvcC1tb2JpbGUtaW9uaWMvc3JjL2FwcC8rc2VydmVyLWRvd24vc2VydmVyLWRvd24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWVBO0VBRUUsYUFBYTtBQ2ZmOztBRDJGQTs7RUFFQyw0QkFBNEI7RUFDNUIsb0NBQTBDO0FDeEYzQzs7QUQrRkE7RUFFRSwwREFBMEQ7QUM3RjVEOztBRDJGQTtFQU1FLDJEQUEyRDtBQzdGN0Q7O0FEaUdBO0VBQ0MsNkJBQTZCO0FDOUY5Qjs7QUQ2RkE7RUFJRSxVQUFVO0VBQ1YsWUFBWTtBQzdGZDs7QUR3RkE7RUFPRyxXQUFXO0VBQ1gsWUFBWTtBQzNGZjs7QURnR0E7RUFDQyxhQTNIYztFQTRIZCxlQTVIYztBQytCZjs7QURnR0E7RUFFRSxXQUFXO0FDOUZiOztBRHNHQTtFQUVFLGdDQUEyQztFQUMzQyx3QkFBdUI7RUFDdkIsdUJBQXVCO0FDcEd6Qjs7QURnR0E7RUFNRyxZQUFZO0FDbEdmOztBRDRGQTtFQVNHLFlBQVk7QUNqR2Y7O0FEMEdBO0VBQ0MsY0E1SmM7QUNxRGY7O0FEc0dBO0VBR0UsY0E3SnFCO0FDd0R2Qjs7QUQ2R0E7RUFDQyxZQUFZO0VBQ1osV0FBVztFQUNYLGVBQWU7RUFDZixpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsd0JBQXdCO0FDMUd6Qjs7QURHQztFQUNDLGNBd0cyQjtBQ3hHN0I7O0FERUM7RUFDQyxjQXFHMkI7QUNwRzdCOztBRENDO0VBQ0MsY0FrRzJCO0FDaEc3Qjs7QUR1R0E7RUFDQyx5QkEzTGM7RUE0TGQscUJBQWdDO0VBQ2hDLFdBQVc7QUNwR1o7O0FEaUdBO0VBTUUseUJBQW9DO0VBQ3BDLDhDQUE4QztBQ25HaEQ7O0FEdUdBO0VBQ0MseUJBcE1nQztFQXFNaEMscUJBQXVDO0VBQ3ZDLFdBQVc7QUNwR1o7O0FEaUdBO0VBTUUseUJBQTJDO0VBQzNDLDhDQUE4QztBQ25HaEQ7O0FEdUdBO0VBQ0MseUJBaE5zQjtFQWlOdEIscUJBQXdDO0VBQ3hDLFdBQVc7QUNwR1o7O0FEaUdBO0VBTUUseUJBQTRDO0VBQzVDLDhDQUE4QztBQ25HaEQ7O0FEdUdBO0VBR0UsZ0NBQTBDO0FDdEc1Qzs7QUQwR0E7RUFHRSxnQ0FBOEM7QUN6R2hEOztBRDZHQTtFQUNDLHlCQUF1QztBQzFHeEM7O0FENkdBO0VBTUMsNkJBQTZCO0VBRTdCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUVqQix5QkFBeUI7QUNqSDFCOztBRHdIQTtFQUNDLGtCQUFrQjtFQUNsQixTQUFTO0FDckhWOztBRHdIQTtFQUNDLFVBQVU7QUNySFg7O0FEd0hBO0VBQ0MsZ0JBQWdCO0FDckhqQjs7QUR3SEE7RUFDQyxlQUFlO0FDckhoQjs7QUR3SEE7RUFDQyxjQUFjO0FDckhmOztBRHdIQTtFQUNDLGlCQUFpQjtBQ3JIbEI7O0FEd0hBO0VBQ0MsaUJBQWlCO0FDckhsQjs7QUR3SEE7RUFDQyxrQkFBa0I7QUNySG5COztBRHdIQTtFQUNDLGdCQUFnQjtBQ3JIakI7O0FEd0hBO0VBQ0MsV0FBVztBQ3JIWjs7QUR3SEE7RUFDQyxjQUFjO0FDckhmOztBRHdIQTtFQUNDLDBCQUEwQjtFQUMxQiw2QkFBNkI7QUNySDlCOztBRHdIQTtFQUNDLFlBQVk7RUFDWixpQkFBaUI7QUNySGxCOztBRHdIQTtFQUNDLGlCQUFpQjtBQ3JIbEI7O0FEd0hBO0VBRUUsMEJBQTBCO0FDdEg1Qjs7QUQwSEE7RUFDQyxxQkFuVWM7QUM0TWY7O0FEMEhBO0VBdFNDLHVCQXVTK0I7QUNuSGhDOztBRHNIQTtFQU1DLGdFQUxZO0FDaEhiOztBRHdIQTtFQUNDLFdBQVc7QUNySFo7O0FEd0hBO0VBQ0MsZUFBZTtFQUNmLGtCQUFrQjtBQ3JIbkI7O0FEd0hBO0VBQ0MsWUFBWTtFQUNaLGFBQWE7RUFFYixtQkFoV2M7RUFrV2QsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLFlBQVk7QUN2SGI7O0FDalBBO0VBRUUsWUFBWTtFQUNaLGFBQWE7RUFFYixtQkZIYTtFRUtiLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osc0JBQXNCO0FEaVB4Qjs7QUM3UEE7RUFnQkUsVUFBVTtFQUNWLFdBQVc7QURpUGIiLCJmaWxlIjoic3JjL2FwcC8rc2VydmVyLWRvd24vc2VydmVyLWRvd24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHBhdGggZm9yIG91ciBpb25pY29ucyBmb250IGZpbGVzLCByZWxhdGl2ZSB0byB0aGUgYnVpbHQgQ1NTIGluIHd3dy9jc3NcbiRpb25pY29ucy1mb250LXBhdGg6ICcuLi8uLi9saWIvaW9uaWMvcmVsZWFzZS9mb250cycgIWRlZmF1bHQ7XG4kZmEtZm9udC1wYXRoOiAnLi4vLi4vbGliL2ZvbnQtYXdlc29tZS9mb250cycgIWRlZmF1bHQ7XG5cbiRicmFuZDogIzFlYTQ0ZjtcbiRicmFuZC1saWdodGVkOiAjMzUzNzQ4O1xuJGJyYW5kLWRhcmtlbjogZGFya2VuKCRicmFuZCwgNSUpOyAvLyAjMWVhNDRmXG5cbiRhc3NlcnRpdmU6ICNiZDQ3NDI7XG4kYXNzZXJ0aXZlLWxpZ2h0ZWQ6ICNjZTQ4NDM7XG4kYXNzZXJ0aXZlLWRhcmtlbjogZGFya2VuKCRhc3NlcnRpdmUsIDUlKTtcblxuJGJhbGFuY2VkOiAjMzNjZDVmO1xuJGJhbGFuY2VkLWxpZ2h0ZWQ6ICM0N2QyNmY7XG5cbi5hcHAta2V5Ym9hcmQtb3BlbiB7XG5cdC5hcHAtaGlkZS1vbi1rZXlib2FyZC1vcGVuIHtcblx0XHRkaXNwbGF5OiBub25lO1xuXHR9XG59XG5cbi8vLy8vLy8vLy8vLy8vL1xuLy8vIE1peGlucyAvLy8vXG4vLy8vLy8vLy8vLy8vLy9cblxuQG1peGluIGNhbGMoJHByb3BlcnR5LCAkZXhwcmVzc2lvbi4uLikge1xuXHQjeyRwcm9wZXJ0eX06IC1tb3otY2FsYygjeyRleHByZXNzaW9ufSk7XG5cdCN7JHByb3BlcnR5fTogLXdlYmtpdC1jYWxjKCN7JGV4cHJlc3Npb259KTtcblx0I3skcHJvcGVydHl9OiBjYWxjKCN7JGV4cHJlc3Npb259KTtcbn1cblxuQG1peGluIHRyYW5zZm9ybSgkdHJhbnNmb3Jtcykge1xuXHQtbW96LXRyYW5zZm9ybTogJHRyYW5zZm9ybXM7XG5cdC1vLXRyYW5zZm9ybTogJHRyYW5zZm9ybXM7XG5cdC1tcy10cmFuc2Zvcm06ICR0cmFuc2Zvcm1zO1xuXHQtd2Via2l0LXRyYW5zZm9ybTogJHRyYW5zZm9ybXM7XG5cdHRyYW5zZm9ybTogJHRyYW5zZm9ybXM7XG59XG5cbkBtaXhpbiB2ZXJ0aWNhbC1hbGlnbigkcG9zaXRpb246IHJlbGF0aXZlKSB7XG5cdHBvc2l0aW9uOiAkcG9zaXRpb247XG5cdHRvcDogNTAlO1xuXHQtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcblx0LW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcblx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG5AbWl4aW4gY2VudGVyKCRwb3NpdGlvbjogcmVsYXRpdmUpIHtcblx0cG9zaXRpb246ICRwb3NpdGlvbjtcblx0dG9wOiA1MCU7XG5cdGxlZnQ6IDUwJTtcblx0LXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcblx0LW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cblxuQG1peGluIHRvcC1jZW50ZXIoJHBvc2l0aW9uOiByZWxhdGl2ZSkge1xuXHRwb3NpdGlvbjogJHBvc2l0aW9uO1xuXHRsZWZ0OiA1MCU7XG5cdC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCk7XG5cdC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwKTtcblx0dG9wOiAwO1xufVxuXG5AbWl4aW4gYm90dG9tLWNlbnRlcigkcG9zaXRpb246IHJlbGF0aXZlKSB7XG5cdHBvc2l0aW9uOiAkcG9zaXRpb247XG5cdGxlZnQ6IDUwJTtcblx0LXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwKTtcblx0LW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDApO1xuXHRib3R0b206IDA7XG59XG5cbkBtaXhpbiBjYWxjKCRwcm9wZXJ0eSwgJGV4cHJlc3Npb24pIHtcblx0I3skcHJvcGVydHl9OiAtd2Via2l0LWNhbGMoI3skZXhwcmVzc2lvbn0pO1xuXHQjeyRwcm9wZXJ0eX06IGNhbGMoI3skZXhwcmVzc2lvbn0pO1xufVxuXG5AbWl4aW4gcGxhY2Vob2xkZXIoJGNvbG9yKSB7XG5cdCY6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuXHRcdGNvbG9yOiAkY29sb3I7XG5cdH1cblx0Jjo6LW1vei1wbGFjZWhvbGRlciB7XG5cdFx0Y29sb3I6ICRjb2xvcjtcblx0fVxuXHQmOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG5cdFx0Y29sb3I6ICRjb2xvcjtcblx0fVxufVxuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLy8gTm9ybWFsaXplIEh0bWwgQW5kIEJvZHkgLy8vXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbmh0bWwsXG5ib2R5IHtcblx0b3ZlcmZsb3c6IHZpc2libGUgIWltcG9ydGFudDtcblx0YmFja2dyb3VuZC1jb2xvcjogJGJyYW5kLWRhcmtlbiAhaW1wb3J0YW50O1xufVxuXG4vLy8vLy8vLy8vLy8vLy9cbi8vIElvbmljIEFkZCAvL1xuLy8vLy8vLy8vLy8vLy8vXG5cbi5tZW51LW9wZW4ge1xuXHQuc2lkZS1tZW51LWNvbnRlbnQtbHRyIHtcblx0XHQtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMjUwcHgsIDBweCwgMHB4KSAhaW1wb3J0YW50O1xuXHR9XG5cblx0LnNpZGUtbWVudS1jb250ZW50LXJ0bCB7XG5cdFx0LXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0yNTBweCwgMHB4LCAwcHgpICFpbXBvcnRhbnQ7XG5cdH1cbn1cblxuLmxvYWRpbmctY29udGFpbmVyIC5sb2FkaW5nIHtcblx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG5cblx0LnNwaW5uZXIge1xuXHRcdGZpbGw6ICNmZmY7XG5cdFx0c3Ryb2tlOiAjZmZmO1xuXHRcdHN2ZyB7XG5cdFx0XHR3aWR0aDogNDBweDtcblx0XHRcdGhlaWdodDogNDBweDtcblx0XHR9XG5cdH1cbn1cblxuLmJyaWdodC12aWUgLmxvYWRpbmctY29udGFpbmVyIC5sb2FkaW5nIC5zcGlubmVyIHtcblx0ZmlsbDogJGJyYW5kO1xuXHRzdHJva2U6ICRicmFuZDtcbn1cblxuLnN3aXBlci1zbGlkZSB7XG5cdGltZyB7XG5cdFx0d2lkdGg6IDEwMCU7XG5cdH1cbn1cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLy8gQmFyIFN0eWxlcyAvLy9cbi8vLy8vLy8vLy8vLy8vLy8vL1xuXG4uYmFyIHtcblx0Ji5iYXItYnJhbmQge1xuXHRcdGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBkYXJrZW4oJGJyYW5kLCAyJSk7XG5cdFx0YmFja2dyb3VuZDogJGJyYW5kIG5vbmU7XG5cdFx0Y29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG5cdFx0LnRpdGxlIHtcblx0XHRcdGNvbG9yOiB3aGl0ZTtcblx0XHR9XG5cdFx0LmJ1dHRvbi1pY29uIG1yLTEge1xuXHRcdFx0Y29sb3I6IHdoaXRlO1xuXHRcdH1cblx0fVxufVxuXG4vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLy8gQ3VzdG9tIGxpbmsgLy8vXG4vLy8vLy8vLy8vLy8vLy8vLy9cblxuLmJyYW5kLWxpbmsge1xuXHRjb2xvcjogJGJyYW5kO1xuXHQmOmFjdGl2ZSB7XG5cdFx0Y29sb3I6ICRicmFuZC1saWdodGVkO1xuXHR9XG59XG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8vIEV2ZXJiaWUgSW5wdXQgLy8vXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuLmV2ZXJiaWUtaW5wdXQge1xuXHRoZWlnaHQ6IDU3cHg7XG5cdHdpZHRoOiAxMDAlO1xuXHRmb250LXNpemU6IDE2cHg7XG5cdGxpbmUtaGVpZ2h0OiAyMHB4O1xuXHRib3JkZXI6IHNvbGlkICM1YzVmNzMgMXB4O1xuXHRjb2xvcjogI2ZmZjtcblx0YmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcblx0Ym9yZGVyLXJhZGl1czogOHB4O1xuXHRwYWRkaW5nOiAyMHB4O1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcblxuXHRAaW5jbHVkZSBwbGFjZWhvbGRlcigjNmQ2ZjgwKTtcbn1cblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8vIEFkZCBCdXR0b24gU3R5bGVzIC8vL1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4uYnV0dG9uLmJ1dHRvbi1icmFuZCB7XG5cdGJhY2tncm91bmQtY29sb3I6ICRicmFuZDtcblx0Ym9yZGVyLWNvbG9yOiBkYXJrZW4oJGJyYW5kLCAzJSk7XG5cdGNvbG9yOiAjZmZmO1xuXHQmLmFjdGl2ZSxcblx0Ji5hY3RpdmF0ZWQge1xuXHRcdGJhY2tncm91bmQtY29sb3I6IGRhcmtlbigkYnJhbmQsIDElKTtcblx0XHRib3gtc2hhZG93OiBpbnNldCAwIDFweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuXHR9XG59XG5cbi5idXR0b24uYnV0dG9uLWRhcmstYnJhbmQge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAkYnJhbmQtZGFya2VuO1xuXHRib3JkZXItY29sb3I6IGRhcmtlbigkYnJhbmQtZGFya2VuLCAzJSk7XG5cdGNvbG9yOiAjZmZmO1xuXHQmLmFjdGl2ZSxcblx0Ji5hY3RpdmF0ZWQge1xuXHRcdGJhY2tncm91bmQtY29sb3I6IGRhcmtlbigkYnJhbmQtZGFya2VuLCAxJSk7XG5cdFx0Ym94LXNoYWRvdzogaW5zZXQgMCAxcHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcblx0fVxufVxuXG4uYnV0dG9uLmJ1dHRvbi1icmFuZC1saWdodGVkIHtcblx0YmFja2dyb3VuZC1jb2xvcjogJGJyYW5kLWxpZ2h0ZWQ7XG5cdGJvcmRlci1jb2xvcjogZGFya2VuKCRicmFuZC1saWdodGVkLCAzJSk7XG5cdGNvbG9yOiAjZmZmO1xuXHQmLmFjdGl2ZSxcblx0Ji5hY3RpdmF0ZWQge1xuXHRcdGJhY2tncm91bmQtY29sb3I6IGRhcmtlbigkYnJhbmQtbGlnaHRlZCwgMSUpO1xuXHRcdGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG5cdH1cbn1cblxuLmJ1dHRvbi5idXR0b24tYXNzZXJ0aXZlIHtcblx0Ji5hY3RpdmUsXG5cdCYuYWN0aXZhdGVkIHtcblx0XHRib3JkZXItY29sb3I6ICRhc3NlcnRpdmUtZGFya2VuICFpbXBvcnRhbnQ7XG5cdH1cbn1cblxuLmJ1dHRvbi5idXR0b24tYmFsYW5jZWQge1xuXHQmLmFjdGl2ZSxcblx0Ji5hY3RpdmF0ZWQge1xuXHRcdGJvcmRlci1jb2xvcjogZGFya2VuKCRiYWxhbmNlZCwgMyUpICFpbXBvcnRhbnQ7XG5cdH1cbn1cblxuLmJ1dHRvbi5idXR0b24tYmFsYW5jZWQge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZW4oJGJhbGFuY2VkLCA1JSk7XG59XG5cbi5ldmVyYmllLWJ1dHRvbiB7XG5cdC8vIEBleHRlbmQgLndhdmVzLWVmZmVjdDtcblx0Ly8gQGV4dGVuZCAud2F2ZXMtY2xhc3NpYztcblx0QGV4dGVuZCAuYnV0dG9uO1xuXHRAZXh0ZW5kIC5idXR0b24tYXNzZXJ0aXZlO1xuXG5cdGJvcmRlci1yYWRpdXM6IDhweCAhaW1wb3J0YW50O1xuXG5cdGZvbnQtc2l6ZTogMjBweDtcblx0cGFkZGluZzogMTBweCAxNnB4O1xuXHRtYXJnaW4tYm90dG9tOiAwO1xuXHRsaW5lLWhlaWdodDogMzRweDtcblxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjY2U0ODQzO1xufVxuXG4vLy8vLy8vLy8vLy8vXG4vLy8gVXRpbHMgLy8vXG4vLy8vLy8vLy8vLy8vXG5cbi5ib3R0b20tMCB7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0Ym90dG9tOiAwO1xufVxuXG4ubm8tcGFkZGluZyB7XG5cdHBhZGRpbmc6IDA7XG59XG5cbi5uby1wYWRkaW5nLXJpZ2h0IHtcblx0cGFkZGluZy1yaWdodDogMDtcbn1cblxuLm5vLXBhZGRpbmctbGVmdCB7XG5cdHBhZGRpbmctbGVmdDogMDtcbn1cblxuLm5vLXBhZGRpbmctdG9wIHtcblx0cGFkZGluZy10b3A6IDA7XG59XG5cbi5uby1wYWRkaW5nLWJvdHRvbSB7XG5cdHBhZGRpbmctYm90dG9tOiAwO1xufVxuXG4udGV4dC1hbGlnbi1yaWdodCB7XG5cdHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4udGV4dC1hbGlnbi1jZW50ZXIge1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi50ZXh0LWFsaWduLWxlZnQge1xuXHR0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4uY29sLTEwMCB7XG5cdHdpZHRoOiAxMDAlO1xufVxuXG4uZGlzcGxheS1ibG9jayB7XG5cdGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uaGVhZGVyLWJhci1iaWctdGl0bGUge1xuXHRmb250LXNpemU6IDIycHggIWltcG9ydGFudDtcblx0dGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG59XG5cbi5idXR0b24tYmFyLXJpZ2h0LWNvbnRhaW5lciB7XG5cdHdpZHRoOiAyODBweDtcblx0bWFyZ2luLWxlZnQ6IGF1dG87XG59XG5cbi5wdWxsLXJpZ2h0IHtcblx0bWFyZ2luLWxlZnQ6IGF1dG87XG59XG5cbi5wbHVzLW5hdmJhci1idXR0b24ge1xuXHQmOjpiZWZvcmUge1xuXHRcdGZvbnQtc2l6ZTogMjRweCAhaW1wb3J0YW50O1xuXHR9XG59XG5cbi5ib3JkZXItY29sb3ItYnJhbmQge1xuXHRib3JkZXItY29sb3I6ICRicmFuZDtcbn1cblxuLmZsaXAge1xuXHRAaW5jbHVkZSB0cmFuc2Zvcm0oc2NhbGUoLTEsIDEpKTtcbn1cblxuLnRyYW5zaXRpb24tb24tY29sb3ItY2hhbmdlIHtcblx0JHNwZWVkOiAwLjNzO1xuXHQtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgJHNwZWVkLCBib3JkZXItY29sb3IgJHNwZWVkLFxuXHRcdGNvbG9yICRzcGVlZDtcblx0LW1vei10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yICRzcGVlZCwgYm9yZGVyLWNvbG9yICRzcGVlZCwgY29sb3IgJHNwZWVkO1xuXHQtby10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yICRzcGVlZCwgYm9yZGVyLWNvbG9yICRzcGVlZCwgY29sb3IgJHNwZWVkO1xuXHR0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yICRzcGVlZCwgYm9yZGVyLWNvbG9yICRzcGVlZCwgY29sb3IgJHNwZWVkO1xufVxuXG4uaG9yaXpvbnRhbC1zcGFjZS0xMCB7XG5cdHdpZHRoOiAxMHB4O1xufVxuXG4ubWFyZ2luLXRvcC1ib3R0b20ge1xuXHRtYXJnaW4tdG9wOiA1cHg7XG5cdG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuLm1haW50ZW5hbmNlLW1lc3NhZ2UtY29udGFpbmVyIHtcblx0Y29sb3I6IHdoaXRlO1xuXHRwYWRkaW5nOiAyMHB4O1xuXG5cdGJhY2tncm91bmQ6ICRicmFuZDtcblxuXHRkaXNwbGF5OiBmbGV4O1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRoZWlnaHQ6IDEwMCU7XG59XG4iLCIuYXBwLWtleWJvYXJkLW9wZW4gLmFwcC1oaWRlLW9uLWtleWJvYXJkLW9wZW4ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5odG1sLFxuYm9keSB7XG4gIG92ZXJmbG93OiB2aXNpYmxlICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxYThlNDUgIWltcG9ydGFudDtcbn1cblxuLm1lbnUtb3BlbiAuc2lkZS1tZW51LWNvbnRlbnQtbHRyIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDI1MHB4LCAwcHgsIDBweCkgIWltcG9ydGFudDtcbn1cblxuLm1lbnUtb3BlbiAuc2lkZS1tZW51LWNvbnRlbnQtcnRsIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0yNTBweCwgMHB4LCAwcHgpICFpbXBvcnRhbnQ7XG59XG5cbi5sb2FkaW5nLWNvbnRhaW5lciAubG9hZGluZyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4ubG9hZGluZy1jb250YWluZXIgLmxvYWRpbmcgLnNwaW5uZXIge1xuICBmaWxsOiAjZmZmO1xuICBzdHJva2U6ICNmZmY7XG59XG5cbi5sb2FkaW5nLWNvbnRhaW5lciAubG9hZGluZyAuc3Bpbm5lciBzdmcge1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xufVxuXG4uYnJpZ2h0LXZpZSAubG9hZGluZy1jb250YWluZXIgLmxvYWRpbmcgLnNwaW5uZXIge1xuICBmaWxsOiAjMWVhNDRmO1xuICBzdHJva2U6ICMxZWE0NGY7XG59XG5cbi5zd2lwZXItc2xpZGUgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5iYXIuYmFyLWJyYW5kIHtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMxYzliNGI7XG4gIGJhY2tncm91bmQ6ICMxZWE0NGYgbm9uZTtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG5cbi5iYXIuYmFyLWJyYW5kIC50aXRsZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmJhci5iYXItYnJhbmQgLmJ1dHRvbi1pY29uIG1yLTEge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5icmFuZC1saW5rIHtcbiAgY29sb3I6ICMxZWE0NGY7XG59XG5cbi5icmFuZC1saW5rOmFjdGl2ZSB7XG4gIGNvbG9yOiAjMzUzNzQ4O1xufVxuXG4uZXZlcmJpZS1pbnB1dCB7XG4gIGhlaWdodDogNTdweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGJvcmRlcjogc29saWQgIzVjNWY3MyAxcHg7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xufVxuXG4uZXZlcmJpZS1pbnB1dDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjNmQ2ZjgwO1xufVxuXG4uZXZlcmJpZS1pbnB1dDo6LW1vei1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjNmQ2ZjgwO1xufVxuXG4uZXZlcmJpZS1pbnB1dDotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBjb2xvcjogIzZkNmY4MDtcbn1cblxuLmJ1dHRvbi5idXR0b24tYnJhbmQsIC5idXR0b24tYnJhbmQuZXZlcmJpZS1idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWVhNDRmO1xuICBib3JkZXItY29sb3I6ICMxYzk3NDk7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uYnV0dG9uLmJ1dHRvbi1icmFuZC5hY3RpdmUsIC5idXR0b24tYnJhbmQuYWN0aXZlLmV2ZXJiaWUtYnV0dG9uLCAuYnV0dG9uLmJ1dHRvbi1icmFuZC5hY3RpdmF0ZWQsIC5idXR0b24tYnJhbmQuYWN0aXZhdGVkLmV2ZXJiaWUtYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFkYTA0ZDtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cblxuLmJ1dHRvbi5idXR0b24tZGFyay1icmFuZCwgLmJ1dHRvbi1kYXJrLWJyYW5kLmV2ZXJiaWUtYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFhOGU0NTtcbiAgYm9yZGVyLWNvbG9yOiAjMTg4MjNlO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmJ1dHRvbi5idXR0b24tZGFyay1icmFuZC5hY3RpdmUsIC5idXR0b24tZGFyay1icmFuZC5hY3RpdmUuZXZlcmJpZS1idXR0b24sIC5idXR0b24uYnV0dG9uLWRhcmstYnJhbmQuYWN0aXZhdGVkLCAuYnV0dG9uLWRhcmstYnJhbmQuYWN0aXZhdGVkLmV2ZXJiaWUtYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE5OGE0MztcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cblxuLmJ1dHRvbi5idXR0b24tYnJhbmQtbGlnaHRlZCwgLmJ1dHRvbi1icmFuZC1saWdodGVkLmV2ZXJiaWUtYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM1Mzc0ODtcbiAgYm9yZGVyLWNvbG9yOiAjMmYzMDNmO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmJ1dHRvbi5idXR0b24tYnJhbmQtbGlnaHRlZC5hY3RpdmUsIC5idXR0b24tYnJhbmQtbGlnaHRlZC5hY3RpdmUuZXZlcmJpZS1idXR0b24sIC5idXR0b24uYnV0dG9uLWJyYW5kLWxpZ2h0ZWQuYWN0aXZhdGVkLCAuYnV0dG9uLWJyYW5kLWxpZ2h0ZWQuYWN0aXZhdGVkLmV2ZXJiaWUtYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMzU0NTtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cblxuLmJ1dHRvbi5idXR0b24tYXNzZXJ0aXZlLmFjdGl2ZSwgLmFjdGl2ZS5ldmVyYmllLWJ1dHRvbiwgLmJ1dHRvbi5idXR0b24tYXNzZXJ0aXZlLmFjdGl2YXRlZCwgLmFjdGl2YXRlZC5ldmVyYmllLWJ1dHRvbiB7XG4gIGJvcmRlci1jb2xvcjogI2FhNDAzYiAhaW1wb3J0YW50O1xufVxuXG4uYnV0dG9uLmJ1dHRvbi1iYWxhbmNlZC5hY3RpdmUsIC5idXR0b24tYmFsYW5jZWQuYWN0aXZlLmV2ZXJiaWUtYnV0dG9uLCAuYnV0dG9uLmJ1dHRvbi1iYWxhbmNlZC5hY3RpdmF0ZWQsIC5idXR0b24tYmFsYW5jZWQuYWN0aXZhdGVkLmV2ZXJiaWUtYnV0dG9uIHtcbiAgYm9yZGVyLWNvbG9yOiAjMmZjMTU5ICFpbXBvcnRhbnQ7XG59XG5cbi5idXR0b24uYnV0dG9uLWJhbGFuY2VkLCAuYnV0dG9uLWJhbGFuY2VkLmV2ZXJiaWUtYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJkYjk1NTtcbn1cblxuLmV2ZXJiaWUtYnV0dG9uIHtcbiAgYm9yZGVyLXJhZGl1czogOHB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgcGFkZGluZzogMTBweCAxNnB4O1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBsaW5lLWhlaWdodDogMzRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NlNDg0Mztcbn1cblxuLmJvdHRvbS0wIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG59XG5cbi5uby1wYWRkaW5nIHtcbiAgcGFkZGluZzogMDtcbn1cblxuLm5vLXBhZGRpbmctcmlnaHQge1xuICBwYWRkaW5nLXJpZ2h0OiAwO1xufVxuXG4ubm8tcGFkZGluZy1sZWZ0IHtcbiAgcGFkZGluZy1sZWZ0OiAwO1xufVxuXG4ubm8tcGFkZGluZy10b3Age1xuICBwYWRkaW5nLXRvcDogMDtcbn1cblxuLm5vLXBhZGRpbmctYm90dG9tIHtcbiAgcGFkZGluZy1ib3R0b206IDA7XG59XG5cbi50ZXh0LWFsaWduLXJpZ2h0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi50ZXh0LWFsaWduLWNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnRleHQtYWxpZ24tbGVmdCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5jb2wtMTAwIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5kaXNwbGF5LWJsb2NrIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5oZWFkZXItYmFyLWJpZy10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjJweCAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbn1cblxuLmJ1dHRvbi1iYXItcmlnaHQtY29udGFpbmVyIHtcbiAgd2lkdGg6IDI4MHB4O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn1cblxuLnB1bGwtcmlnaHQge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn1cblxuLnBsdXMtbmF2YmFyLWJ1dHRvbjo6YmVmb3JlIHtcbiAgZm9udC1zaXplOiAyNHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItY29sb3ItYnJhbmQge1xuICBib3JkZXItY29sb3I6ICMxZWE0NGY7XG59XG5cbi5mbGlwIHtcbiAgLW1vei10cmFuc2Zvcm06IHNjYWxlKC0xLCAxKTtcbiAgLW8tdHJhbnNmb3JtOiBzY2FsZSgtMSwgMSk7XG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKC0xLCAxKTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKC0xLCAxKTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgtMSwgMSk7XG59XG5cbi50cmFuc2l0aW9uLW9uLWNvbG9yLWNoYW5nZSB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzLCBib3JkZXItY29sb3IgMC4zcywgY29sb3IgMC4zcztcbiAgLW1vei10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MsIGJvcmRlci1jb2xvciAwLjNzLCBjb2xvciAwLjNzO1xuICAtby10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MsIGJvcmRlci1jb2xvciAwLjNzLCBjb2xvciAwLjNzO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MsIGJvcmRlci1jb2xvciAwLjNzLCBjb2xvciAwLjNzO1xufVxuXG4uaG9yaXpvbnRhbC1zcGFjZS0xMCB7XG4gIHdpZHRoOiAxMHB4O1xufVxuXG4ubWFyZ2luLXRvcC1ib3R0b20ge1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuLm1haW50ZW5hbmNlLW1lc3NhZ2UtY29udGFpbmVyIHtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAyMHB4O1xuICBiYWNrZ3JvdW5kOiAjMWVhNDRmO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5pbmZvLXBhZ2UgLnNlcnZlci1kb3duLWNvbnRlbnQge1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJhY2tncm91bmQ6ICMxZWE0NGY7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGhlaWdodDogMTAwJTtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmluZm8tcGFnZSAuaW5mby1tYXNzYWdlIGgzIHtcbiAgY29sb3I6IHJlZDtcbiAgd2lkdGg6IDEwMCU7XG59XG4iLCJAaW1wb3J0ICd+QGV2ZXItcGxhdGZvcm0vY29tbW9uLWFuZ3VsYXIvc3JjL3Njc3MvZXZlcmJpZS5jb21tb24nO1xuXG4uaW5mby1wYWdlIHtcblx0LnNlcnZlci1kb3duLWNvbnRlbnQge1xuXHRcdGNvbG9yOiB3aGl0ZTtcblx0XHRwYWRkaW5nOiAyMHB4O1xuXG5cdFx0YmFja2dyb3VuZDogJGJyYW5kO1xuXG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRoZWlnaHQ6IDEwMCU7XG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0fVxuXG5cdC5pbmZvLW1hc3NhZ2UgaDMge1xuXHRcdGNvbG9yOiByZWQ7XG5cdFx0d2lkdGg6IDEwMCU7XG5cdH1cbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/+server-down/server-down.page.ts":
/*!**************************************************!*\
  !*** ./src/app/+server-down/server-down.page.ts ***!
  \**************************************************/
/*! exports provided: ServerDownPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerDownPage", function() { return ServerDownPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var app_services_store_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/services/store.service */ "./src/app/services/store.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _modules_client_common_angular2_services_server_connection_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @modules/client.common.angular2/services/server-connection.service */ "../common-angular/src/services/server-connection.service.ts");






var ServerDownPage = (function () {
    function ServerDownPage(store, router, serverConnectionService) {
        this.store = store;
        this.router = router;
        this.serverConnectionService = serverConnectionService;
        this.noInternetLogo = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].NO_INTERNET_LOGO;
        this.testConnection();
    }
    ServerDownPage.prototype.testConnection = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.interval = setInterval(function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4, this.serverConnectionService.checkServerConnection(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].SERVICES_ENDPOINT, this.store)];
                            case 1:
                                _a.sent();
                                if (Number(this.store.serverConnection) !== 0) {
                                    clearInterval(this.interval);
                                    this.router.navigateByUrl('');
                                }
                                return [2];
                        }
                    });
                }); }, 5000);
                return [2];
            });
        });
    };
    ServerDownPage.prototype.ngOnDestroy = function () {
        clearInterval(this.interval);
    };
    ServerDownPage.ctorParameters = function () { return [
        { type: app_services_store_service__WEBPACK_IMPORTED_MODULE_3__["Store"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _modules_client_common_angular2_services_server_connection_service__WEBPACK_IMPORTED_MODULE_5__["ServerConnectionService"] }
    ]; };
    ServerDownPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./server-down.page.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/+server-down/server-down.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./server-down.page.scss */ "./src/app/+server-down/server-down.page.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [app_services_store_service__WEBPACK_IMPORTED_MODULE_3__["Store"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _modules_client_common_angular2_services_server_connection_service__WEBPACK_IMPORTED_MODULE_5__["ServerConnectionService"]])
    ], ServerDownPage);
    return ServerDownPage;
}());



/***/ })

}]);
//# sourceMappingURL=server-down-server-down-module.js.map