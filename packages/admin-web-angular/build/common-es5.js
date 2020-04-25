function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
  /***/
  "../../node_modules/raw-loader/dist/cjs.js!./src/app/@shared/json-modal/json-modal.component.html":
  /*!**************************************************************************************************************************************************!*\
    !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/raw-loader/dist/cjs.js!./src/app/@shared/json-modal/json-modal.component.html ***!
    \**************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedJsonModalJsonModalComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nb-card-header class=\"header\">\n\t<h6 class=\"title\">\n\t\t{{ title | translate }}\n\t\t<span *ngIf=\"subTitle\" class=\"product-title\">\"{{ subTitle }}\"</span>\n\t\t{{ 'Details' | translate }}\n\t</h6>\n</nb-card-header>\n\n<nb-card-body class=\"body\">\n\t<pre><code highlight [language]=\"['json']\" [code]=\"obj | json\" class=\"iconInfo\"></code></pre>\n</nb-card-body>\n";
    /***/
  },

  /***/
  "./src/app/@shared/json-modal/json-modal.component.scss":
  /*!**************************************************************!*\
    !*** ./src/app/@shared/json-modal/json-modal.component.scss ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedJsonModalJsonModalComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".header {\n  padding: 0px;\n  margin: 0px;\n}\n\n.body {\n  padding: 0px;\n  margin: 0px;\n}\n\n.product-title {\n  color: #009100;\n}\n\n.title {\n  padding: 0px;\n  margin: 0px;\n  text-align: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvZC9Xb3JrL0FuZ3VsYXIvTmV3IGZvbGRlciAoMikvRG9sY2VHcm9jZXJ5L3BhY2thZ2VzL2FkbWluLXdlYi1hbmd1bGFyL3NyYy9hcHAvQHNoYXJlZC9qc29uLW1vZGFsL2pzb24tbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL0BzaGFyZWQvanNvbi1tb2RhbC9qc29uLW1vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0MsWUFBWTtFQUNaLFdBQVc7QUNEWjs7QURHQTtFQUNDLFlBQVk7RUFDWixXQUFXO0FDQVo7O0FERUE7RUFDQyxjQUFjO0FDQ2Y7O0FEQ0E7RUFDQyxZQUFZO0VBQ1osV0FBVztFQUNYLGtCQUFrQjtBQ0VuQiIsImZpbGUiOiJzcmMvYXBwL0BzaGFyZWQvanNvbi1tb2RhbC9qc29uLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmljb25JbmZvIHtcbn1cbi5oZWFkZXIge1xuXHRwYWRkaW5nOiAwcHg7XG5cdG1hcmdpbjogMHB4O1xufVxuLmJvZHkge1xuXHRwYWRkaW5nOiAwcHg7XG5cdG1hcmdpbjogMHB4O1xufVxuLnByb2R1Y3QtdGl0bGUge1xuXHRjb2xvcjogIzAwOTEwMDtcbn1cbi50aXRsZSB7XG5cdHBhZGRpbmc6IDBweDtcblx0bWFyZ2luOiAwcHg7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiIsIi5oZWFkZXIge1xuICBwYWRkaW5nOiAwcHg7XG4gIG1hcmdpbjogMHB4O1xufVxuXG4uYm9keSB7XG4gIHBhZGRpbmc6IDBweDtcbiAgbWFyZ2luOiAwcHg7XG59XG5cbi5wcm9kdWN0LXRpdGxlIHtcbiAgY29sb3I6ICMwMDkxMDA7XG59XG5cbi50aXRsZSB7XG4gIHBhZGRpbmc6IDBweDtcbiAgbWFyZ2luOiAwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/@shared/json-modal/json-modal.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/@shared/json-modal/json-modal.component.ts ***!
    \************************************************************/

  /*! exports provided: JsonModalComponent */

  /***/
  function srcAppSharedJsonModalJsonModalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JsonModalComponent", function () {
      return JsonModalComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");

    var JsonModalComponent = /*#__PURE__*/function () {
      function JsonModalComponent(activeModal) {
        _classCallCheck(this, JsonModalComponent);

        this.activeModal = activeModal;
      }

      _createClass(JsonModalComponent, [{
        key: "cancel",
        value: function cancel() {
          this.activeModal.dismiss('canceled');
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return JsonModalComponent;
    }();

    JsonModalComponent.ctorParameters = function () {
      return [{
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"]
      }];
    };

    JsonModalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./json-modal.component.html */
      "../../node_modules/raw-loader/dist/cjs.js!./src/app/@shared/json-modal/json-modal.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./json-modal.component.scss */
      "./src/app/@shared/json-modal/json-modal.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"]])], JsonModalComponent);
    /***/
  },

  /***/
  "./src/app/@shared/json-modal/json-modal.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/@shared/json-modal/json-modal.module.ts ***!
    \*********************************************************/

  /*! exports provided: JsonModalModule */

  /***/
  function srcAppSharedJsonModalJsonModalModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JsonModalModule", function () {
      return JsonModalModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../@theme */
    "./src/app/@theme/index.ts");
    /* harmony import */


    var _json_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./json-modal.component */
    "./src/app/@shared/json-modal/json-modal.component.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ngx-translate/core */
    "../../node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var ngx_highlightjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-highlightjs */
    "./node_modules/ngx-highlightjs/fesm2015/ngx-highlightjs.js");

    var COMPONENTS = [_json_modal_component__WEBPACK_IMPORTED_MODULE_4__["JsonModalComponent"]];

    var JsonModalModule = function JsonModalModule() {
      _classCallCheck(this, JsonModalModule);
    };

    JsonModalModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _theme__WEBPACK_IMPORTED_MODULE_3__["ThemeModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"].forChild(), ngx_highlightjs__WEBPACK_IMPORTED_MODULE_6__["HighlightModule"].forRoot({
        theme: 'github'
      })],
      declarations: COMPONENTS,
      entryComponents: COMPONENTS,
      exports: COMPONENTS
    })], JsonModalModule);
    /***/
  },

  /***/
  "./src/app/@shared/order/order-map/carreir-location/carreir-location.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/@shared/order/order-map/carreir-location/carreir-location.ts ***!
    \******************************************************************************/

  /*! exports provided: CarrierLocationComponent */

  /***/
  function srcAppSharedOrderOrderMapCarreirLocationCarreirLocationTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CarrierLocationComponent", function () {
      return CarrierLocationComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _modules_server_common_entities_Order__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @modules/server.common/entities/Order */
    "../common/src/entities/Order.ts");
    /* harmony import */


    var environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! environments/environment */
    "./src/environments/environment.ts");

    var CarrierLocationComponent = /*#__PURE__*/function () {
      function CarrierLocationComponent() {
        _classCallCheck(this, CarrierLocationComponent);

        this.directionsDisplay = new google.maps.DirectionsRenderer();
        this.directionsService = new google.maps.DirectionsService();
      }

      _createClass(CarrierLocationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loadMap();
          this.loadRoot();
        }
      }, {
        key: "loadMap",
        value: function loadMap() {
          var mapProp = {
            center: new google.maps.LatLng(environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].DEFAULT_LATITUDE, environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].DEFAULT_LONGITUDE),
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            mapTypeControl: false,
            streetViewControl: false
          };
          this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
        }
      }, {
        key: "loadRoot",
        value: function loadRoot() {
          var _this = this;

          if (this.order) {
            var _this$order$carrier$g = _slicedToArray(this.order.carrier['geoLocation'].loc.coordinates, 2),
                carrierLng = _this$order$carrier$g[0],
                carrierLat = _this$order$carrier$g[1];

            var _this$order$user$geoL = _slicedToArray(this.order.user['geoLocation'].loc.coordinates, 2),
                userLng = _this$order$user$geoL[0],
                userLat = _this$order$user$geoL[1];

            var origin = new google.maps.LatLng(carrierLat, carrierLng);
            var destination = new google.maps.LatLng(userLat, userLng);
            var request = {
              origin: origin,
              destination: destination,
              travelMode: google.maps.TravelMode['DRIVING']
            };
            this.directionsService.route(request, function (res, stat) {
              if (stat === 'OK') {
                _this.directionsDisplay.setDirections(res);
              }
            });
            this.directionsDisplay.setMap(this.map);
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.directionsDisplay.setMap(null);
        }
      }]);

      return CarrierLocationComponent;
    }();

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gmap', {
      "static": true
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], CarrierLocationComponent.prototype, "gmapElement", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _modules_server_common_entities_Order__WEBPACK_IMPORTED_MODULE_2__["default"])], CarrierLocationComponent.prototype, "order", void 0);
    CarrierLocationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'ea-carrier-location',
      template: " <div style=\"height:100%\" #gmap></div> "
    })], CarrierLocationComponent);
    /***/
  },

  /***/
  "./src/app/@shared/order/order-map/order-map.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/@shared/order/order-map/order-map.module.ts ***!
    \*************************************************************/

  /*! exports provided: OrderMapModule */

  /***/
  function srcAppSharedOrderOrderMapOrderMapModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderMapModule", function () {
      return OrderMapModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var angular2_toaster__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! angular2-toaster */
    "./node_modules/angular2-toaster/angular2-toaster.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngx-translate/core */
    "../../node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _app_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @app/@theme */
    "./src/app/@theme/index.ts");
    /* harmony import */


    var _user_warehouse_map_user_warehouse_map__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./user-warehouse-map/user-warehouse-map */
    "./src/app/@shared/order/order-map/user-warehouse-map/user-warehouse-map.ts");
    /* harmony import */


    var _carreir_location_carreir_location__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./carreir-location/carreir-location */
    "./src/app/@shared/order/order-map/carreir-location/carreir-location.ts");

    var ORDER_MAP_COMPONENTS = [_user_warehouse_map_user_warehouse_map__WEBPACK_IMPORTED_MODULE_6__["UserWarehouseLocationComponent"], _carreir_location_carreir_location__WEBPACK_IMPORTED_MODULE_7__["CarrierLocationComponent"]];

    var OrderMapModule = function OrderMapModule() {
      _classCallCheck(this, OrderMapModule);
    };

    OrderMapModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _app_theme__WEBPACK_IMPORTED_MODULE_5__["ThemeModule"], angular2_toaster__WEBPACK_IMPORTED_MODULE_3__["ToasterModule"].forRoot(), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"].forChild()],
      declarations: [].concat(ORDER_MAP_COMPONENTS),
      exports: [].concat(ORDER_MAP_COMPONENTS),
      entryComponents: [],
      providers: []
    })], OrderMapModule);
    /***/
  },

  /***/
  "./src/app/@shared/order/order-map/user-warehouse-map/user-warehouse-map.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/@shared/order/order-map/user-warehouse-map/user-warehouse-map.ts ***!
    \**********************************************************************************/

  /*! exports provided: UserWarehouseLocationComponent */

  /***/
  function srcAppSharedOrderOrderMapUserWarehouseMapUserWarehouseMapTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserWarehouseLocationComponent", function () {
      return UserWarehouseLocationComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _modules_server_common_entities_Order__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @modules/server.common/entities/Order */
    "../common/src/entities/Order.ts");
    /* harmony import */


    var environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! environments/environment */
    "./src/environments/environment.ts");

    var warehouseIcon = environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].MAP_MERCHANT_ICON_LINK;
    var userIcon = environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].MAP_USER_ICON_LINK;

    var UserWarehouseLocationComponent = /*#__PURE__*/function () {
      function UserWarehouseLocationComponent() {
        _classCallCheck(this, UserWarehouseLocationComponent);
      }

      _createClass(UserWarehouseLocationComponent, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.loadMap();
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges() {
          this.loadMarkers();
        }
      }, {
        key: "loadMap",
        value: function loadMap() {
          var mapProp = {
            center: new google.maps.LatLng(environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].DEFAULT_LATITUDE, environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].DEFAULT_LONGITUDE),
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            mapTypeControl: false,
            streetViewControl: false
          };
          this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
          this.loadMarkers();
        }
      }, {
        key: "loadMarkers",
        value: function loadMarkers() {
          if (this.order && !this.isLoaded && this.map) {
            this.isLoaded = true;
            var user = this.order.user;
            var warehouse = this.order.warehouse;
            this.userMarker = this.addMarker(user['geoLocation'], this.map, userIcon);
            this.warehouseMarker = this.addMarker(warehouse['geoLocation'], this.map, warehouseIcon);
            var bounds = new google.maps.LatLngBounds();
            bounds.extend(this.warehouseMarker.getPosition());
            bounds.extend(this.userMarker.getPosition());
            this.map.fitBounds(bounds);
          }
        }
      }, {
        key: "addMarker",
        value: function addMarker(geoLocation, map, icon) {
          var _geoLocation$loc$coor = _slicedToArray(geoLocation.loc.coordinates, 2),
              lng = _geoLocation$loc$coor[0],
              lat = _geoLocation$loc$coor[1];

          var position = new google.maps.LatLng(lat, lng);
          return new google.maps.Marker({
            position: position,
            map: map,
            icon: icon
          });
        }
      }, {
        key: "removeMarkers",
        value: function removeMarkers() {
          if (this.userMarker) {
            this.userMarker.setMap(null);
          }

          if (this.warehouseMarker) {
            this.warehouseMarker.setMap(null);
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.removeMarkers();
        }
      }]);

      return UserWarehouseLocationComponent;
    }();

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gmap', {
      "static": true
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], UserWarehouseLocationComponent.prototype, "gmapElement", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _modules_server_common_entities_Order__WEBPACK_IMPORTED_MODULE_2__["default"])], UserWarehouseLocationComponent.prototype, "order", void 0);
    UserWarehouseLocationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'ea-user-warehouse-location',
      template: " <div style=\"height:100%\" #gmap></div> "
    })], UserWarehouseLocationComponent);
    /***/
  }
}]);
//# sourceMappingURL=common-es5.js.map