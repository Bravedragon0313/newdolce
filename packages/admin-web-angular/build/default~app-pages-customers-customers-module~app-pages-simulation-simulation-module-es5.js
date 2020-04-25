function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\t\t\t\t\tquery geoLocationProducts(\n\t\t\t\t\t\t$geoLocation: GeoLocationFindInput!\n\t\t\t\t\t) {\n\t\t\t\t\t\tgeoLocationProducts(geoLocation: $geoLocation) {\n\t\t\t\t\t\t\tdistance\n\t\t\t\t\t\t\twarehouseId\n\t\t\t\t\t\t\twarehouseLogo\n\t\t\t\t\t\t\twarehouseProduct {\n\t\t\t\t\t\t\t\tprice\n\t\t\t\t\t\t\t\tinitialPrice\n\t\t\t\t\t\t\t\tcount\n\t\t\t\t\t\t\t\tisManufacturing\n\t\t\t\t\t\t\t\tisCarrierRequired\n\t\t\t\t\t\t\t\tisDeliveryRequired\n\t\t\t\t\t\t\t\tdeliveryTimeMin\n\t\t\t\t\t\t\t\tdeliveryTimeMax\n\t\t\t\t\t\t\t\tproduct {\n\t\t\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\t\t\ttitle {\n\t\t\t\t\t\t\t\t\t\tlocale\n\t\t\t\t\t\t\t\t\t\tvalue\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\tdescription {\n\t\t\t\t\t\t\t\t\t\tlocale\n\t\t\t\t\t\t\t\t\t\tvalue\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\tdetails {\n\t\t\t\t\t\t\t\t\t\tlocale\n\t\t\t\t\t\t\t\t\t\tvalue\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\timages {\n\t\t\t\t\t\t\t\t\t\tlocale\n\t\t\t\t\t\t\t\t\t\turl\n\t\t\t\t\t\t\t\t\t\twidth\n\t\t\t\t\t\t\t\t\t\theight\n\t\t\t\t\t\t\t\t\t\torientation\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~app-pages-customers-customers-module~app-pages-simulation-simulation-module"], {
  /***/
  "../../node_modules/raw-loader/dist/cjs.js!./src/app/@shared/user/user-mutation/user-mutation.component.html":
  /*!*************************************************************************************************************************************************************!*\
    !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/raw-loader/dist/cjs.js!./src/app/@shared/user/user-mutation/user-mutation.component.html ***!
    \*************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedUserUserMutationUserMutationComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nb-card [nbSpinner]=\"loading\" class=\"user-modal\">\n\t<div class=\"modal-header\">\n\t\t<span class=\"modal-title\">{{\n\t\t\t'SIMULATION_VIEW.USER_MUTATION.TITLE' | translate\n\t\t}}</span>\n\t\t<button class=\"close\" aria-label=\"Close\" (click)=\"cancel()\">\n\t\t\t<span aria-hidden=\"true\">&times;</span>\n\t\t</button>\n\t</div>\n\n\t<form-wizard\n\t\tclass=\"form-horizontal\"\n\t\t[formGroup]=\"form\"\n\t\t[buttonDone]=\"buttonDone\"\n\t\t[buttonNext]=\"buttonNext\"\n\t\t[buttonPrevious]=\"buttonPrevious\"\n\t>\n\t\t<wizard-step\n\t\t\t[title]=\"\n\t\t\t\t'SIMULATION_VIEW.USER_MUTATION.WIZARD_TITLES.ADDITIONAL_INFO'\n\t\t\t\t\t| translate\n\t\t\t\"\n\t\t\t[isValid]=\"basicInfo.valid\"\n\t\t>\n\t\t\t<br />\n\t\t\t<ea-user-basic-info-form\n\t\t\t\t#basicInfoForm\n\t\t\t\t[form]=\"basicInfo\"\n\t\t\t\t[showBasicInfoLabel]=\"true\"\n\t\t\t></ea-user-basic-info-form>\n\t\t</wizard-step>\n\n\t\t<wizard-step\n\t\t\t[title]=\"\n\t\t\t\t'SIMULATION_VIEW.USER_MUTATION.WIZARD_TITLES.LOCATION'\n\t\t\t\t\t| translate\n\t\t\t\"\n\t\t\t(onComplete)=\"create()\"\n\t\t\t[isValid]=\"location.valid\"\n\t\t>\n\t\t\t<br />\n\t\t\t<ea-location-form\n\t\t\t\t#locationForm\n\t\t\t\t[form]=\"location\"\n\t\t\t\t[apartment]=\"apartment\"\n\t\t\t\t[showAutocompleteSearch]=\"true\"\n\t\t\t\t(mapCoordinatesEmitter)=\"onCoordinatesChanges($event)\"\n\t\t\t\t(mapGeometryEmitter)=\"onGeometrySend($event)\"\n\t\t\t>\n\t\t\t</ea-location-form>\n\n\t\t\t<google-map\n\t\t\t\t[mapCoordEvent]=\"mapCoordEmitter\"\n\t\t\t\t[mapGeometryEvent]=\"mapGeometryEmitter\"\n\t\t\t>\n\t\t\t</google-map>\n\t\t</wizard-step>\n\t</form-wizard>\n</nb-card>\n";
    /***/
  },

  /***/
  "./src/app/@core/data/geo-location.service.ts":
  /*!****************************************************!*\
    !*** ./src/app/@core/data/geo-location.service.ts ***!
    \****************************************************/

  /*! exports provided: GeoLocationService */

  /***/
  function srcAppCoreDataGeoLocationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GeoLocationService", function () {
      return GeoLocationService;
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


    var apollo_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! apollo-angular */
    "./node_modules/apollo-angular/fesm2015/ngApollo.js");
    /* harmony import */


    var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! graphql-tag */
    "../../node_modules/graphql-tag/src/index.js");
    /* harmony import */


    var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var GeoLocationService = /*#__PURE__*/function () {
      function GeoLocationService(apollo) {
        _classCallCheck(this, GeoLocationService);

        this.apollo = apollo;
      }

      _createClass(GeoLocationService, [{
        key: "getGeoLocationProducts",
        value: function getGeoLocationProducts(geoLocation) {
          return this.apollo.watchQuery({
            query: graphql_tag__WEBPACK_IMPORTED_MODULE_3___default.a(_templateObject()),
            variables: {
              geoLocation: {
                countryId: geoLocation.countryId,
                city: geoLocation.city,
                postcode: geoLocation.postcode,
                streetAddress: geoLocation.streetAddress,
                house: geoLocation.house,
                loc: geoLocation.loc
              }
            },
            pollInterval: 2000
          }).valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            return res.data.geoLocationProducts;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["share"])());
        }
      }]);

      return GeoLocationService;
    }();

    GeoLocationService.ctorParameters = function () {
      return [{
        type: apollo_angular__WEBPACK_IMPORTED_MODULE_2__["Apollo"]
      }];
    };

    GeoLocationService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [apollo_angular__WEBPACK_IMPORTED_MODULE_2__["Apollo"]])], GeoLocationService);
    /***/
  },

  /***/
  "./src/app/@shared/user/user-mutation/index.ts":
  /*!*****************************************************!*\
    !*** ./src/app/@shared/user/user-mutation/index.ts ***!
    \*****************************************************/

  /*! exports provided: UserMutationComponent, UserMutationModule */

  /***/
  function srcAppSharedUserUserMutationIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _user_mutation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./user-mutation.component */
    "./src/app/@shared/user/user-mutation/user-mutation.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "UserMutationComponent", function () {
      return _user_mutation_component__WEBPACK_IMPORTED_MODULE_1__["UserMutationComponent"];
    });
    /* harmony import */


    var _user_mutation_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./user-mutation.module */
    "./src/app/@shared/user/user-mutation/user-mutation.module.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "UserMutationModule", function () {
      return _user_mutation_module__WEBPACK_IMPORTED_MODULE_2__["UserMutationModule"];
    });
    /***/

  },

  /***/
  "./src/app/@shared/user/user-mutation/user-mutation.component.scss":
  /*!*************************************************************************!*\
    !*** ./src/app/@shared/user/user-mutation/user-mutation.component.scss ***!
    \*************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedUserUserMutationUserMutationComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host ::ng-deep .card-footer button {\n  background-color: #111111 !important;\n  border: none !important;\n  color: white !important;\n  cursor: pointer !important;\n}\n\n:host ::ng-deep .card-footer button:hover {\n  background-color: #bebebe !important;\n  color: #111111 !important;\n}\n\nnb-card-header ul {\n  padding-left: 0;\n}\n\ngoogle-map {\n  margin-top: 25px;\n}\n\n.user-modal {\n  margin: 0px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvZC9Xb3JrL0FuZ3VsYXIvTmV3IGZvbGRlciAoMikvRG9sY2VHcm9jZXJ5L3BhY2thZ2VzL2FkbWluLXdlYi1hbmd1bGFyL3NyYy9hcHAvQHNoYXJlZC91c2VyL3VzZXItbXV0YXRpb24vdXNlci1tdXRhdGlvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvQHNoYXJlZC91c2VyL3VzZXItbXV0YXRpb24vdXNlci1tdXRhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLG9DQUFvQztFQUNwQyx1QkFBdUI7RUFDdkIsdUJBQXVCO0VBQ3ZCLDBCQUEwQjtBQ0MzQjs7QURFQTtFQUNDLG9DQUFvQztFQUNwQyx5QkFBeUI7QUNDMUI7O0FERUE7RUFDQyxlQUFlO0FDQ2hCOztBREVBO0VBQ0MsZ0JBQWdCO0FDQ2pCOztBREVBO0VBQ0MsV0FBVztBQ0NaIiwiZmlsZSI6InNyYy9hcHAvQHNoYXJlZC91c2VyL3VzZXItbXV0YXRpb24vdXNlci1tdXRhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IDo6bmctZGVlcCAuY2FyZC1mb290ZXIgYnV0dG9uIHtcblx0YmFja2dyb3VuZC1jb2xvcjogIzExMTExMSAhaW1wb3J0YW50O1xuXHRib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcblx0Y29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG5cdGN1cnNvcjogcG9pbnRlciAhaW1wb3J0YW50O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmNhcmQtZm9vdGVyIGJ1dHRvbjpob3ZlciB7XG5cdGJhY2tncm91bmQtY29sb3I6ICNiZWJlYmUgIWltcG9ydGFudDtcblx0Y29sb3I6ICMxMTExMTEgIWltcG9ydGFudDtcbn1cblxubmItY2FyZC1oZWFkZXIgdWwge1xuXHRwYWRkaW5nLWxlZnQ6IDA7XG59XG5cbmdvb2dsZS1tYXAge1xuXHRtYXJnaW4tdG9wOiAyNXB4O1xufVxuXG4udXNlci1tb2RhbCB7XG5cdG1hcmdpbjogMHB4O1xufVxuIiwiOmhvc3QgOjpuZy1kZWVwIC5jYXJkLWZvb3RlciBidXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTExMTExICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgY3Vyc29yOiBwb2ludGVyICFpbXBvcnRhbnQ7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuY2FyZC1mb290ZXIgYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JlYmViZSAhaW1wb3J0YW50O1xuICBjb2xvcjogIzExMTExMSAhaW1wb3J0YW50O1xufVxuXG5uYi1jYXJkLWhlYWRlciB1bCB7XG4gIHBhZGRpbmctbGVmdDogMDtcbn1cblxuZ29vZ2xlLW1hcCB7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG59XG5cbi51c2VyLW1vZGFsIHtcbiAgbWFyZ2luOiAwcHg7XG59XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/@shared/user/user-mutation/user-mutation.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/@shared/user/user-mutation/user-mutation.component.ts ***!
    \***********************************************************************/

  /*! exports provided: UserMutationComponent */

  /***/
  function srcAppSharedUserUserMutationUserMutationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserMutationComponent", function () {
      return UserMutationComponent;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var angular2_toaster__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! angular2-toaster */
    "./node_modules/angular2-toaster/angular2-toaster.js");
    /* harmony import */


    var _forms_basic_info__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../forms/basic-info */
    "./src/app/@shared/user/forms/basic-info/index.ts");
    /* harmony import */


    var _forms_location__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../forms/location */
    "./src/app/@shared/forms/location/index.ts");
    /* harmony import */


    var _modules_client_common_angular2_routers_user_auth_router_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @modules/client.common.angular2/routers/user-auth-router.service */
    "../common-angular/src/routers/user-auth-router.service.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ngx-translate/core */
    "../../node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");

    var UserMutationComponent = /*#__PURE__*/function () {
      function UserMutationComponent(userAuthRouter, toasterService, activeModal, formBuilder, translateService) {
        _classCallCheck(this, UserMutationComponent);

        this.userAuthRouter = userAuthRouter;
        this.toasterService = toasterService;
        this.activeModal = activeModal;
        this.formBuilder = formBuilder;
        this.translateService = translateService;
        this.mapTypeEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.mapCoordEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.mapGeometryEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.BUTTON_DONE = 'BUTTON_DONE';
        this.BUTTON_NEXT = 'BUTTON_NEXT';
        this.BUTTON_PREV = 'BUTTON_PREV';
        this.form = this.formBuilder.group({
          basicInfo: _forms_basic_info__WEBPACK_IMPORTED_MODULE_5__["BasicInfoFormComponent"].buildForm(this.formBuilder),
          apartment: _forms_location__WEBPACK_IMPORTED_MODULE_6__["LocationFormComponent"].buildApartmentForm(this.formBuilder),
          location: _forms_location__WEBPACK_IMPORTED_MODULE_6__["LocationFormComponent"].buildForm(this.formBuilder)
        });
        this.basicInfo = this.form.get('basicInfo');
        this.apartment = this.form.get('apartment');
        this.location = this.form.get('location');
      }

      _createClass(UserMutationComponent, [{
        key: "onCoordinatesChanges",
        value: function onCoordinatesChanges(coords) {
          this.mapCoordEmitter.emit(coords);
        }
      }, {
        key: "onGeometrySend",
        value: function onGeometrySend(geometry) {
          this.mapGeometryEmitter.emit(geometry);
        }
      }, {
        key: "emitMapType",
        value: function emitMapType(mapType) {
          this.mapTypeEmitter.emit(mapType);
        }
      }, {
        key: "create",
        value: function create() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var location, user;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.prev = 0;
                    this.loading = true;
                    location = this.locationForm.getValue();
                    location.loc.coordinates.reverse();
                    _context.next = 6;
                    return this.userAuthRouter.register({
                      user: Object.assign(Object.assign({}, this.basicInfoForm.getValue()), {
                        geoLocation: location,
                        apartment: this.locationForm.getApartment()
                      })
                    });

                  case 6:
                    user = _context.sent;
                    this.loading = false;
                    this.toasterService.pop('success', "Customer with '".concat(user.id, "' was added"));
                    this.activeModal.close(user);
                    _context.next = 16;
                    break;

                  case 12:
                    _context.prev = 12;
                    _context.t0 = _context["catch"](0);
                    this.loading = false;
                    this.toasterService.pop('error', "Error in creating customer: \"".concat(_context.t0.message, "\""));

                  case 16:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this, [[0, 12]]);
          }));
        }
      }, {
        key: "cancel",
        value: function cancel() {
          this.activeModal.dismiss('canceled');
        }
      }, {
        key: "_translate",
        value: function _translate(key) {
          var translationResult = '';
          this.translateService.get(key).subscribe(function (res) {
            translationResult = res;
          });
          return translationResult;
        }
      }, {
        key: "buttonDone",
        get: function get() {
          return this._translate(this.BUTTON_DONE);
        }
      }, {
        key: "buttonNext",
        get: function get() {
          return this._translate(this.BUTTON_NEXT);
        }
      }, {
        key: "buttonPrevious",
        get: function get() {
          return this._translate(this.BUTTON_PREV);
        }
      }]);

      return UserMutationComponent;
    }();

    UserMutationComponent.ctorParameters = function () {
      return [{
        type: _modules_client_common_angular2_routers_user_auth_router_service__WEBPACK_IMPORTED_MODULE_7__["UserAuthRouter"]
      }, {
        type: angular2_toaster__WEBPACK_IMPORTED_MODULE_4__["ToasterService"]
      }, {
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbActiveModal"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('basicInfoForm'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _forms_basic_info__WEBPACK_IMPORTED_MODULE_5__["BasicInfoFormComponent"])], UserMutationComponent.prototype, "basicInfoForm", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('locationForm'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _forms_location__WEBPACK_IMPORTED_MODULE_6__["LocationFormComponent"])], UserMutationComponent.prototype, "locationForm", void 0);
    UserMutationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'ea-user-mutation',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./user-mutation.component.html */
      "../../node_modules/raw-loader/dist/cjs.js!./src/app/@shared/user/user-mutation/user-mutation.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! .//user-mutation.component.scss */
      "./src/app/@shared/user/user-mutation/user-mutation.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_modules_client_common_angular2_routers_user_auth_router_service__WEBPACK_IMPORTED_MODULE_7__["UserAuthRouter"], angular2_toaster__WEBPACK_IMPORTED_MODULE_4__["ToasterService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbActiveModal"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"]])], UserMutationComponent);
    /***/
  },

  /***/
  "./src/app/@shared/user/user-mutation/user-mutation.module.ts":
  /*!********************************************************************!*\
    !*** ./src/app/@shared/user/user-mutation/user-mutation.module.ts ***!
    \********************************************************************/

  /*! exports provided: UserMutationModule */

  /***/
  function srcAppSharedUserUserMutationUserMutationModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserMutationModule", function () {
      return UserMutationModule;
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


    var _user_mutation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./user-mutation.component */
    "./src/app/@shared/user/user-mutation/user-mutation.component.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngx-translate/core */
    "../../node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var angular2_wizard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! angular2-wizard */
    "./node_modules/@ever-co/angular2-wizard/dist/index.js");
    /* harmony import */


    var angular2_wizard__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_wizard__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var _theme_theme_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../@theme/theme.module */
    "./src/app/@theme/theme.module.ts");
    /* harmony import */


    var _forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../forms */
    "./src/app/@shared/user/forms/index.ts");
    /* harmony import */


    var _forms_location__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../forms/location */
    "./src/app/@shared/forms/location/index.ts");
    /* harmony import */


    var _forms_google_map_google_map_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../forms/google-map/google-map.module */
    "./src/app/@shared/forms/google-map/google-map.module.ts");
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/fesm2015/index.js");

    var UserMutationModule = function UserMutationModule() {
      _classCallCheck(this, UserMutationModule);
    };

    UserMutationModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_theme_theme_module__WEBPACK_IMPORTED_MODULE_5__["ThemeModule"], angular2_wizard__WEBPACK_IMPORTED_MODULE_4__["FormWizardModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"].forChild(), _forms__WEBPACK_IMPORTED_MODULE_6__["UserFormsModule"], _forms_location__WEBPACK_IMPORTED_MODULE_7__["LocationFormModule"], _forms_google_map_google_map_module__WEBPACK_IMPORTED_MODULE_8__["GoogleMapModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_9__["NbSpinnerModule"]],
      exports: [_user_mutation_component__WEBPACK_IMPORTED_MODULE_2__["UserMutationComponent"]],
      declarations: [_user_mutation_component__WEBPACK_IMPORTED_MODULE_2__["UserMutationComponent"]],
      entryComponents: [_user_mutation_component__WEBPACK_IMPORTED_MODULE_2__["UserMutationComponent"]]
    })], UserMutationModule);
    /***/
  }
}]);
//# sourceMappingURL=default~app-pages-customers-customers-module~app-pages-simulation-simulation-module-es5.js.map