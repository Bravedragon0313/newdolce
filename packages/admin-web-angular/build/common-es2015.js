(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/@shared/json-modal/json-modal.component.html":
/*!**************************************************************************************************************************************************!*\
  !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/raw-loader/dist/cjs.js!./src/app/@shared/json-modal/json-modal.component.html ***!
  \**************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nb-card-header class=\"header\">\n\t<h6 class=\"title\">\n\t\t{{ title | translate }}\n\t\t<span *ngIf=\"subTitle\" class=\"product-title\">\"{{ subTitle }}\"</span>\n\t\t{{ 'Details' | translate }}\n\t</h6>\n</nb-card-header>\n\n<nb-card-body class=\"body\">\n\t<pre><code highlight [language]=\"['json']\" [code]=\"obj | json\" class=\"iconInfo\"></code></pre>\n</nb-card-body>\n");

/***/ }),

/***/ "./src/app/@shared/json-modal/json-modal.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/@shared/json-modal/json-modal.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".header {\n  padding: 0px;\n  margin: 0px;\n}\n\n.body {\n  padding: 0px;\n  margin: 0px;\n}\n\n.product-title {\n  color: #009100;\n}\n\n.title {\n  padding: 0px;\n  margin: 0px;\n  text-align: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvZC9Xb3JrL0FuZ3VsYXIvTmV3IGZvbGRlciAoMikvRG9sY2VHcm9jZXJ5L3BhY2thZ2VzL2FkbWluLXdlYi1hbmd1bGFyL3NyYy9hcHAvQHNoYXJlZC9qc29uLW1vZGFsL2pzb24tbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL0BzaGFyZWQvanNvbi1tb2RhbC9qc29uLW1vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0MsWUFBWTtFQUNaLFdBQVc7QUNEWjs7QURHQTtFQUNDLFlBQVk7RUFDWixXQUFXO0FDQVo7O0FERUE7RUFDQyxjQUFjO0FDQ2Y7O0FEQ0E7RUFDQyxZQUFZO0VBQ1osV0FBVztFQUNYLGtCQUFrQjtBQ0VuQiIsImZpbGUiOiJzcmMvYXBwL0BzaGFyZWQvanNvbi1tb2RhbC9qc29uLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmljb25JbmZvIHtcbn1cbi5oZWFkZXIge1xuXHRwYWRkaW5nOiAwcHg7XG5cdG1hcmdpbjogMHB4O1xufVxuLmJvZHkge1xuXHRwYWRkaW5nOiAwcHg7XG5cdG1hcmdpbjogMHB4O1xufVxuLnByb2R1Y3QtdGl0bGUge1xuXHRjb2xvcjogIzAwOTEwMDtcbn1cbi50aXRsZSB7XG5cdHBhZGRpbmc6IDBweDtcblx0bWFyZ2luOiAwcHg7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiIsIi5oZWFkZXIge1xuICBwYWRkaW5nOiAwcHg7XG4gIG1hcmdpbjogMHB4O1xufVxuXG4uYm9keSB7XG4gIHBhZGRpbmc6IDBweDtcbiAgbWFyZ2luOiAwcHg7XG59XG5cbi5wcm9kdWN0LXRpdGxlIHtcbiAgY29sb3I6ICMwMDkxMDA7XG59XG5cbi50aXRsZSB7XG4gIHBhZGRpbmc6IDBweDtcbiAgbWFyZ2luOiAwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/@shared/json-modal/json-modal.component.ts":
/*!************************************************************!*\
  !*** ./src/app/@shared/json-modal/json-modal.component.ts ***!
  \************************************************************/
/*! exports provided: JsonModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsonModalComponent", function() { return JsonModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");



let JsonModalComponent = class JsonModalComponent {
    constructor(activeModal) {
        this.activeModal = activeModal;
    }
    cancel() {
        this.activeModal.dismiss('canceled');
    }
    ngOnInit() { }
};
JsonModalComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"] }
];
JsonModalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./json-modal.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/@shared/json-modal/json-modal.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./json-modal.component.scss */ "./src/app/@shared/json-modal/json-modal.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"]])
], JsonModalComponent);



/***/ }),

/***/ "./src/app/@shared/json-modal/json-modal.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/@shared/json-modal/json-modal.module.ts ***!
  \*********************************************************/
/*! exports provided: JsonModalModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsonModalModule", function() { return JsonModalModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../@theme */ "./src/app/@theme/index.ts");
/* harmony import */ var _json_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./json-modal.component */ "./src/app/@shared/json-modal/json-modal.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var ngx_highlightjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-highlightjs */ "./node_modules/ngx-highlightjs/fesm2015/ngx-highlightjs.js");







const COMPONENTS = [_json_modal_component__WEBPACK_IMPORTED_MODULE_4__["JsonModalComponent"]];
let JsonModalModule = class JsonModalModule {
};
JsonModalModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _theme__WEBPACK_IMPORTED_MODULE_3__["ThemeModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"].forChild(),
            ngx_highlightjs__WEBPACK_IMPORTED_MODULE_6__["HighlightModule"].forRoot({ theme: 'github' }),
        ],
        declarations: COMPONENTS,
        entryComponents: COMPONENTS,
        exports: COMPONENTS,
    })
], JsonModalModule);



/***/ }),

/***/ "./src/app/@shared/order/order-map/carreir-location/carreir-location.ts":
/*!******************************************************************************!*\
  !*** ./src/app/@shared/order/order-map/carreir-location/carreir-location.ts ***!
  \******************************************************************************/
/*! exports provided: CarrierLocationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarrierLocationComponent", function() { return CarrierLocationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _modules_server_common_entities_Order__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @modules/server.common/entities/Order */ "../common/src/entities/Order.ts");
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! environments/environment */ "./src/environments/environment.ts");




let CarrierLocationComponent = class CarrierLocationComponent {
    constructor() {
        this.directionsDisplay = new google.maps.DirectionsRenderer();
        this.directionsService = new google.maps.DirectionsService();
    }
    ngOnInit() {
        this.loadMap();
        this.loadRoot();
    }
    loadMap() {
        const mapProp = {
            center: new google.maps.LatLng(environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].DEFAULT_LATITUDE, environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].DEFAULT_LONGITUDE),
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            mapTypeControl: false,
            streetViewControl: false,
        };
        this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
    }
    loadRoot() {
        if (this.order) {
            const [carrierLng, carrierLat] = this.order.carrier['geoLocation'].loc.coordinates;
            const [userLng, userLat] = this.order.user['geoLocation'].loc.coordinates;
            const origin = new google.maps.LatLng(carrierLat, carrierLng);
            const destination = new google.maps.LatLng(userLat, userLng);
            const request = {
                origin,
                destination,
                travelMode: google.maps.TravelMode['DRIVING'],
            };
            this.directionsService.route(request, (res, stat) => {
                if (stat === 'OK') {
                    this.directionsDisplay.setDirections(res);
                }
            });
            this.directionsDisplay.setMap(this.map);
        }
    }
    ngOnDestroy() {
        this.directionsDisplay.setMap(null);
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gmap', { static: true }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], CarrierLocationComponent.prototype, "gmapElement", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _modules_server_common_entities_Order__WEBPACK_IMPORTED_MODULE_2__["default"])
], CarrierLocationComponent.prototype, "order", void 0);
CarrierLocationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ea-carrier-location',
        template: ` <div style="height:100%" #gmap></div> `,
    })
], CarrierLocationComponent);



/***/ }),

/***/ "./src/app/@shared/order/order-map/order-map.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/@shared/order/order-map/order-map.module.ts ***!
  \*************************************************************/
/*! exports provided: OrderMapModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderMapModule", function() { return OrderMapModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _app_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/@theme */ "./src/app/@theme/index.ts");
/* harmony import */ var _user_warehouse_map_user_warehouse_map__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-warehouse-map/user-warehouse-map */ "./src/app/@shared/order/order-map/user-warehouse-map/user-warehouse-map.ts");
/* harmony import */ var _carreir_location_carreir_location__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./carreir-location/carreir-location */ "./src/app/@shared/order/order-map/carreir-location/carreir-location.ts");








const ORDER_MAP_COMPONENTS = [
    _user_warehouse_map_user_warehouse_map__WEBPACK_IMPORTED_MODULE_6__["UserWarehouseLocationComponent"],
    _carreir_location_carreir_location__WEBPACK_IMPORTED_MODULE_7__["CarrierLocationComponent"],
];
let OrderMapModule = class OrderMapModule {
};
OrderMapModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _app_theme__WEBPACK_IMPORTED_MODULE_5__["ThemeModule"],
            angular2_toaster__WEBPACK_IMPORTED_MODULE_3__["ToasterModule"].forRoot(),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"].forChild(),
        ],
        declarations: [...ORDER_MAP_COMPONENTS],
        exports: [...ORDER_MAP_COMPONENTS],
        entryComponents: [],
        providers: [],
    })
], OrderMapModule);



/***/ }),

/***/ "./src/app/@shared/order/order-map/user-warehouse-map/user-warehouse-map.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/@shared/order/order-map/user-warehouse-map/user-warehouse-map.ts ***!
  \**********************************************************************************/
/*! exports provided: UserWarehouseLocationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserWarehouseLocationComponent", function() { return UserWarehouseLocationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _modules_server_common_entities_Order__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @modules/server.common/entities/Order */ "../common/src/entities/Order.ts");
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! environments/environment */ "./src/environments/environment.ts");




const warehouseIcon = environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].MAP_MERCHANT_ICON_LINK;
const userIcon = environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].MAP_USER_ICON_LINK;
let UserWarehouseLocationComponent = class UserWarehouseLocationComponent {
    ngAfterViewInit() {
        this.loadMap();
    }
    ngOnChanges() {
        this.loadMarkers();
    }
    loadMap() {
        const mapProp = {
            center: new google.maps.LatLng(environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].DEFAULT_LATITUDE, environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].DEFAULT_LONGITUDE),
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            mapTypeControl: false,
            streetViewControl: false,
        };
        this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
        this.loadMarkers();
    }
    loadMarkers() {
        if (this.order && !this.isLoaded && this.map) {
            this.isLoaded = true;
            const user = this.order.user;
            const warehouse = this.order.warehouse;
            this.userMarker = this.addMarker(user['geoLocation'], this.map, userIcon);
            this.warehouseMarker = this.addMarker(warehouse['geoLocation'], this.map, warehouseIcon);
            const bounds = new google.maps.LatLngBounds();
            bounds.extend(this.warehouseMarker.getPosition());
            bounds.extend(this.userMarker.getPosition());
            this.map.fitBounds(bounds);
        }
    }
    addMarker(geoLocation, map, icon) {
        const [lng, lat] = geoLocation.loc.coordinates;
        const position = new google.maps.LatLng(lat, lng);
        return new google.maps.Marker({
            position,
            map,
            icon,
        });
    }
    removeMarkers() {
        if (this.userMarker) {
            this.userMarker.setMap(null);
        }
        if (this.warehouseMarker) {
            this.warehouseMarker.setMap(null);
        }
    }
    ngOnDestroy() {
        this.removeMarkers();
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gmap', { static: true }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], UserWarehouseLocationComponent.prototype, "gmapElement", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _modules_server_common_entities_Order__WEBPACK_IMPORTED_MODULE_2__["default"])
], UserWarehouseLocationComponent.prototype, "order", void 0);
UserWarehouseLocationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ea-user-warehouse-location',
        template: ` <div style="height:100%" #gmap></div> `,
    })
], UserWarehouseLocationComponent);



/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map