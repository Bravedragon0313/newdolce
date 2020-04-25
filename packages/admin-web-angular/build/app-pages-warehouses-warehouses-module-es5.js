function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-pages-warehouses-warehouses-module"], {
  /***/
  "../../node_modules/raw-loader/dist/cjs.js!./src/app/@shared/confirmation-modal/confirmation-modal.component.html":
  /*!******************************************************************************************************************************************************************!*\
    !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/raw-loader/dist/cjs.js!./src/app/@shared/confirmation-modal/confirmation-modal.component.html ***!
    \******************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedConfirmationModalConfirmationModalComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"modal-header\">\n\t<span>{{ mainTextTr() }}</span\n\t><button aria-label=\"Close\" class=\"close\" (click)=\"cancel()\">\n\t\t<span aria-hidden=\"true\">×</span>\n\t</button>\n</div>\n\n<div class=\"modal-footer\">\n\t<button nbButton status=\"danger\" (click)=\"cancel()\">\n\t\t{{ cancelButtonTr() }}\n\t</button>\n\t<button nbButton status=\"success\" (click)=\"confirmEvent.emit()\">\n\t\t{{ confirmButtonTr() }}\n\t</button>\n</div>\n";
    /***/
  },

  /***/
  "../../node_modules/raw-loader/dist/cjs.js!./src/app/pages/+warehouses/+warehouse-track/warehouse-track.component.html":
  /*!***********************************************************************************************************************************************************************!*\
    !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/raw-loader/dist/cjs.js!./src/app/pages/+warehouses/+warehouse-track/warehouse-track.component.html ***!
    \***********************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesWarehousesWarehouseTrackWarehouseTrackComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\n\t<div class=\"col-12\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-8\">\n\t\t\t\t<nb-card>\n\t\t\t\t\t<nb-card-header>\n\t\t\t\t\t\t{{\n\t\t\t\t\t\t\t'WAREHOUSES_VIEW.MERCHANTS.TRACK_ALL_MERCHANTS'\n\t\t\t\t\t\t\t\t| translate\n\t\t\t\t\t\t}}\n\t\t\t\t\t</nb-card-header>\n\t\t\t\t\t<nb-card-body>\n\t\t\t\t\t\t<div #gmap class=\"googleMap\"></div>\n\t\t\t\t\t</nb-card-body>\n\t\t\t\t</nb-card>\n\t\t\t</div>\n\n\t\t\t<div class=\"col-4\">\n\t\t\t\t<nb-card>\n\t\t\t\t\t<nb-card-header>\n\t\t\t\t\t\t{{\n\t\t\t\t\t\t\t'WAREHOUSES_VIEW.MERCHANTS.FILTER_MERCHANTS'\n\t\t\t\t\t\t\t\t| translate\n\t\t\t\t\t\t}}\n\t\t\t\t\t</nb-card-header>\n\t\t\t\t\t<nb-card-body style=\"overflow: inherit;\">\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<ng-select\n\t\t\t\t\t\t\t\t[items]=\"listOfMerchants\"\n\t\t\t\t\t\t\t\t[placeholder]=\"\n\t\t\t\t\t\t\t\t\t'WAREHOUSES_VIEW.MERCHANTS.FILTER_BY_NAME'\n\t\t\t\t\t\t\t\t\t\t| translate\n\t\t\t\t\t\t\t\t\"\n\t\t\t\t\t\t\t\t[clearable]=\"true\"\n\t\t\t\t\t\t\t\tbindLabel=\"name\"\n\t\t\t\t\t\t\t\t[(ngModel)]=\"merchantName\"\n\t\t\t\t\t\t\t\tstyle=\"width: 100%; margin-bottom: 30px;\"\n\t\t\t\t\t\t\t\t(change)=\"filterByName($event)\"\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t<ng-template ng-label-tmp let-item=\"item\">\n\t\t\t\t\t\t\t\t\t<img\n\t\t\t\t\t\t\t\t\t\t*ngIf=\"item.logo\"\n\t\t\t\t\t\t\t\t\t\theight=\"15\"\n\t\t\t\t\t\t\t\t\t\twidth=\"15\"\n\t\t\t\t\t\t\t\t\t\tclass=\"mr-2\"\n\t\t\t\t\t\t\t\t\t\t[src]=\"item.logo\"\n\t\t\t\t\t\t\t\t\t/>\n\t\t\t\t\t\t\t\t\t<b>{{ item }}</b>\n\t\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t</ng-select>\n\t\t\t\t\t\t\t<ng-select\n\t\t\t\t\t\t\t\t[items]=\"listOfCities\"\n\t\t\t\t\t\t\t\t[(ngModel)]=\"merchantCity\"\n\t\t\t\t\t\t\t\t[clearable]=\"true\"\n\t\t\t\t\t\t\t\t[placeholder]=\"\n\t\t\t\t\t\t\t\t\t'WAREHOUSES_VIEW.MERCHANTS.FILTER_BY_CITY'\n\t\t\t\t\t\t\t\t\t\t| translate\n\t\t\t\t\t\t\t\t\"\n\t\t\t\t\t\t\t\tbindLabel=\"city\"\n\t\t\t\t\t\t\t\tstyle=\"width: 100%; margin-bottom: 30px;\"\n\t\t\t\t\t\t\t\t(change)=\"filterByCity($event)\"\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t<ng-template\n\t\t\t\t\t\t\t\t\tng-option-tmp\n\t\t\t\t\t\t\t\t\tlet-item=\"item\"\n\t\t\t\t\t\t\t\t\tlet-index=\"index\"\n\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t<p class=\"card-title\">\n\t\t\t\t\t\t\t\t\t\t<img\n\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"item.logo\"\n\t\t\t\t\t\t\t\t\t\t\theight=\"40\"\n\t\t\t\t\t\t\t\t\t\t\twidth=\"40\"\n\t\t\t\t\t\t\t\t\t\t\tclass=\"mr-1\"\n\t\t\t\t\t\t\t\t\t\t\t[src]=\"item.logo\"\n\t\t\t\t\t\t\t\t\t\t/>\n\t\t\t\t\t\t\t\t\t\t{{ item }}\n\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t</ng-select>\n\t\t\t\t\t\t\t<ng-select\n\t\t\t\t\t\t\t\t[items]=\"listOfCountries\"\n\t\t\t\t\t\t\t\t[clearable]=\"true\"\n\t\t\t\t\t\t\t\t[placeholder]=\"\n\t\t\t\t\t\t\t\t\t'WAREHOUSES_VIEW.MERCHANTS.FILTER_BY_COUNTRY'\n\t\t\t\t\t\t\t\t\t\t| translate\n\t\t\t\t\t\t\t\t\"\n\t\t\t\t\t\t\t\tbindLabel=\"city\"\n\t\t\t\t\t\t\t\t[(ngModel)]=\"merchantCountry\"\n\t\t\t\t\t\t\t\tstyle=\"width: 100%; margin-bottom: 30px;\"\n\t\t\t\t\t\t\t\t(change)=\"filterByCountry($event)\"\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t<ng-template\n\t\t\t\t\t\t\t\t\tng-option-tmp\n\t\t\t\t\t\t\t\t\tlet-item=\"item\"\n\t\t\t\t\t\t\t\t\tlet-index=\"index\"\n\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t<p class=\"card-title\">\n\t\t\t\t\t\t\t\t\t\t<img\n\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"item.logo\"\n\t\t\t\t\t\t\t\t\t\t\theight=\"40\"\n\t\t\t\t\t\t\t\t\t\t\twidth=\"40\"\n\t\t\t\t\t\t\t\t\t\t\tclass=\"mr-1\"\n\t\t\t\t\t\t\t\t\t\t\t[src]=\"item.logo\"\n\t\t\t\t\t\t\t\t\t\t/>\n\t\t\t\t\t\t\t\t\t\t{{ item }}\n\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t</ng-select>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<nb-card-footer>\n\t\t\t\t\t\t\t<div class=\"details\">\n\t\t\t\t\t\t\t\t<div class=\"warehouse\" *ngIf=\"selectedStore\">\n\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t<b>{{ selectedStore.name }}</b>\n\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\tPhone:\n\t\t\t\t\t\t\t\t\t\t\t{{ selectedStore.contactPhone }}\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\tEmail:\n\t\t\t\t\t\t\t\t\t\t\t{{ selectedStore.contactEmail }}\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\tAddress:\n\t\t\t\t\t\t\t\t\t\t\t{{\n\t\t\t\t\t\t\t\t\t\t\t\tselectedStore.geoLocation\n\t\t\t\t\t\t\t\t\t\t\t\t\t.streetAddress\n\t\t\t\t\t\t\t\t\t\t\t}}\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"carrier\" *ngIf=\"selectedCarrier\">\n\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t<b>{{ selectedCarrier.fullName }}</b>\n\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\tDelivery Count:\n\t\t\t\t\t\t\t\t\t\t\t{{\n\t\t\t\t\t\t\t\t\t\t\t\tselectedCarrier.numberOfDeliveries\n\t\t\t\t\t\t\t\t\t\t\t}}\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\tPhone: {{ selectedCarrier.phone }}\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\tAddress:\n\t\t\t\t\t\t\t\t\t\t\t{{\n\t\t\t\t\t\t\t\t\t\t\t\tselectedCarrier.geoLocation\n\t\t\t\t\t\t\t\t\t\t\t\t\t.streetAddress\n\t\t\t\t\t\t\t\t\t\t\t}}\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</nb-card-footer>\n\t\t\t\t\t</nb-card-body>\n\t\t\t\t</nb-card>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n";
    /***/
  },

  /***/
  "../../node_modules/raw-loader/dist/cjs.js!./src/app/pages/+warehouses/warehouses.component.html":
  /*!*************************************************************************************************************************************************!*\
    !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/raw-loader/dist/cjs.js!./src/app/pages/+warehouses/warehouses.component.html ***!
    \*************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesWarehousesWarehousesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nb-card [nbSpinner]=\"loading\">\n\t<toaster-container></toaster-container>\n\n\t<nb-card-header>\n\t\t<button\n\t\t\tnbButton\n\t\t\tstatus=\"success\"\n\t\t\tclass=\"mr-2 d-inline-block\"\n\t\t\t(click)=\"createWarehouseModel()\"\n\t\t>\n\t\t\t<i class=\"ion-md-add button-icon mr-1\"></i>\n\t\t\t<small _ngcontent-c55=\"\">{{\n\t\t\t\t'WAREHOUSES_VIEW.CREATE' | translate\n\t\t\t}}</small>\n\t\t</button>\n\t\t<button\n\t\t\tnbButton\n\t\t\tstatus=\"danger\"\n\t\t\tclass=\"mr-2 d-inline-block\"\n\t\t\t[disabled]=\"!hasSelectedWarehouses\"\n\t\t\t(click)=\"deleteSelectedRows()\"\n\t\t>\n\t\t\t<i class=\"ion-md-trash button-icon mr-1\"></i>\n\t\t\t<small _ngcontent-c55=\"\">{{\n\t\t\t\t'WAREHOUSES_VIEW.DELETE' | translate\n\t\t\t}}</small>\n\t\t</button>\n\t\t<button\n\t\t\tnbButton\n\t\t\tstatus=\"warning\"\n\t\t\tclass=\"mr-2 d-inline-block\"\n\t\t\trouterLink=\"track\"\n\t\t>\n\t\t\t<i class=\"ion-md-map button-icon mr-1\"></i>\n\t\t\t<small _ngcontent-c55=\"\">{{\n\t\t\t\t'WAREHOUSES_VIEW.SHOW_ON_MAP' | translate\n\t\t\t}}</small>\n\t\t</button>\n\t</nb-card-header>\n\n\t<nb-card-body>\n\t\t<ng2-smart-table\n\t\t\t[settings]=\"settingsSmartTable\"\n\t\t\t[source]=\"sourceSmartTable\"\n\t\t\t(userRowSelect)=\"selectWarehouseTmp($event)\"\n\t\t>\n\t\t</ng2-smart-table>\n\t</nb-card-body>\n</nb-card>\n";
    /***/
  },

  /***/
  "../../node_modules/rxjs-compat/_esm2015/add/observable/of.js":
  /*!**************************************************************************************************************!*\
    !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/rxjs-compat/_esm2015/add/observable/of.js ***!
    \**************************************************************************************************************/

  /*! no exports provided */

  /***/
  function node_modulesRxjsCompat_esm2015AddObservableOfJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! rxjs */
    "../../node_modules/rxjs/_esm2015/index.js");

    rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].of = rxjs__WEBPACK_IMPORTED_MODULE_0__["of"]; //# sourceMappingURL=of.js.map

    /***/
  },

  /***/
  "./src/app/@shared/confirmation-modal/confirmation-modal.component.scss":
  /*!******************************************************************************!*\
    !*** ./src/app/@shared/confirmation-modal/confirmation-modal.component.scss ***!
    \******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedConfirmationModalConfirmationModalComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0BzaGFyZWQvY29uZmlybWF0aW9uLW1vZGFsL2NvbmZpcm1hdGlvbi1tb2RhbC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/@shared/confirmation-modal/confirmation-modal.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/@shared/confirmation-modal/confirmation-modal.component.ts ***!
    \****************************************************************************/

  /*! exports provided: ConfimationModalComponent */

  /***/
  function srcAppSharedConfirmationModalConfirmationModalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfimationModalComponent", function () {
      return ConfimationModalComponent;
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
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngx-translate/core */
    "../../node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");

    var ConfimationModalComponent = /*#__PURE__*/function () {
      function ConfimationModalComponent(activeModal, translateService) {
        _classCallCheck(this, ConfimationModalComponent);

        this.activeModal = activeModal;
        this.translateService = translateService;
        this.ngDestroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.prefix = 'CONFIRM_MODAL.';
        this.confirmButton = 'YES';
        this.cancelButton = 'NO';
        this.confirmEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();

        if (!this.mainText) {
          this.mainText = 'ARE_YOU_SURE';
        }
      }

      _createClass(ConfimationModalComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "mainTextTr",
        value: function mainTextTr() {
          var forTranslate = this.prefix + this.mainText;
          return this._translate(forTranslate);
        }
      }, {
        key: "confirmButtonTr",
        value: function confirmButtonTr() {
          var forTranslate = this.prefix + this.confirmButton;
          return this._translate(forTranslate);
        }
      }, {
        key: "cancelButtonTr",
        value: function cancelButtonTr() {
          var forTranslate = this.prefix + this.cancelButton;
          return this._translate(forTranslate);
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
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.ngDestroy$.next();
          this.ngDestroy$.complete();
        }
      }]);

      return ConfimationModalComponent;
    }();

    ConfimationModalComponent.ctorParameters = function () {
      return [{
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], ConfimationModalComponent.prototype, "confirmEvent", void 0);
    ConfimationModalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./confirmation-modal.component.html */
      "../../node_modules/raw-loader/dist/cjs.js!./src/app/@shared/confirmation-modal/confirmation-modal.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./confirmation-modal.component.scss */
      "./src/app/@shared/confirmation-modal/confirmation-modal.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]])], ConfimationModalComponent);
    /***/
  },

  /***/
  "./src/app/@shared/confirmation-modal/confirmation-modal.module.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/@shared/confirmation-modal/confirmation-modal.module.ts ***!
    \*************************************************************************/

  /*! exports provided: ConfirmationModalModule */

  /***/
  function srcAppSharedConfirmationModalConfirmationModalModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfirmationModalModule", function () {
      return ConfirmationModalModule;
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


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngx-translate/core */
    "../../node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _confirmation_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./confirmation-modal.component */
    "./src/app/@shared/confirmation-modal/confirmation-modal.component.ts");
    /* harmony import */


    var angular2_toaster__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! angular2-toaster */
    "./node_modules/angular2-toaster/angular2-toaster.js");
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/fesm2015/index.js");

    var COMPONENTS = [_confirmation_modal_component__WEBPACK_IMPORTED_MODULE_5__["ConfimationModalComponent"]];

    var ConfirmationModalModule = function ConfirmationModalModule() {
      _classCallCheck(this, ConfirmationModalModule);
    };

    ConfirmationModalModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _theme__WEBPACK_IMPORTED_MODULE_3__["ThemeModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"].forChild(), angular2_toaster__WEBPACK_IMPORTED_MODULE_6__["ToasterModule"].forRoot(), _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbSpinnerModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbButtonModule"]],
      declarations: COMPONENTS,
      entryComponents: COMPONENTS,
      exports: COMPONENTS
    })], ConfirmationModalModule);
    /***/
  },

  /***/
  "./src/app/@theme/index.ts":
  /*!*********************************!*\
    !*** ./src/app/@theme/index.ts ***!
    \*********************************/

  /*! exports provided: HttpLoaderFactory, ThemeModule */

  /***/
  function srcAppThemeIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _theme_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./theme.module */
    "./src/app/@theme/theme.module.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function () {
      return _theme_module__WEBPACK_IMPORTED_MODULE_1__["HttpLoaderFactory"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ThemeModule", function () {
      return _theme_module__WEBPACK_IMPORTED_MODULE_1__["ThemeModule"];
    });
    /***/

  },

  /***/
  "./src/app/pages/+warehouses/+warehouse-track/warehouse-track.component.scss":
  /*!***********************************************************************************!*\
    !*** ./src/app/pages/+warehouses/+warehouse-track/warehouse-track.component.scss ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesWarehousesWarehouseTrackWarehouseTrackComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".googleMap {\n  height: 700px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvZC9Xb3JrL0FuZ3VsYXIvTmV3IGZvbGRlciAoMikvRG9sY2VHcm9jZXJ5L3BhY2thZ2VzL2FkbWluLXdlYi1hbmd1bGFyL3NyYy9hcHAvcGFnZXMvK3dhcmVob3VzZXMvK3dhcmVob3VzZS10cmFjay93YXJlaG91c2UtdHJhY2suY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzLyt3YXJlaG91c2VzLyt3YXJlaG91c2UtdHJhY2svd2FyZWhvdXNlLXRyYWNrLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsYUFBYTtBQ0NkIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvK3dhcmVob3VzZXMvK3dhcmVob3VzZS10cmFjay93YXJlaG91c2UtdHJhY2suY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ29vZ2xlTWFwIHtcblx0aGVpZ2h0OiA3MDBweDtcbn1cbiIsIi5nb29nbGVNYXAge1xuICBoZWlnaHQ6IDcwMHB4O1xufVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/pages/+warehouses/+warehouse-track/warehouse-track.component.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/pages/+warehouses/+warehouse-track/warehouse-track.component.ts ***!
    \*********************************************************************************/

  /*! exports provided: WarehouseTrackComponent */

  /***/
  function srcAppPagesWarehousesWarehouseTrackWarehouseTrackComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WarehouseTrackComponent", function () {
      return WarehouseTrackComponent;
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


    var _app_core_data_warehouses_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @app/@core/data/warehouses.service */
    "./src/app/@core/data/warehouses.service.ts");
    /* harmony import */


    var environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _modules_server_common_entities_GeoLocation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @modules/server.common/entities/GeoLocation */
    "../common/src/entities/GeoLocation.ts");

    var WarehouseTrackComponent = /*#__PURE__*/function () {
      function WarehouseTrackComponent(warehouseService) {
        _classCallCheck(this, WarehouseTrackComponent);

        this.warehouseService = warehouseService;
        this.merchantMarkers = [];
        this.merchants = [];
        this.listOfCities = [];
        this.listOfCountries = [];
      }

      _createClass(WarehouseTrackComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.showMap();
          var warehouseService = this.warehouseService.getStoreLivePosition().subscribe(function (store) {
            _this.merchants = store;

            if (_this.merchantMarkers.length === 0) {
              _this.listOfCities = Array.from(new Set(store.map(function (mer) {
                return mer.geoLocation.city;
              }))).sort();
              _this.listOfCountries = Array.from(new Set(store.map(function (mer) {
                return Object(_modules_server_common_entities_GeoLocation__WEBPACK_IMPORTED_MODULE_4__["getCountryName"])(mer.geoLocation.countryId);
              }))).sort();
              _this.listOfMerchants = _this.setSort(store.map(function (mer) {
                return mer.name;
              }));

              _this.populateMarkers(store, _this.merchantMarkers);
            } else if (store.length === _this.merchantMarkers.length) {
              _this.updateMarkers(store);
            } else {
              _this.updateMarkers(store);
            }
          });
        }
      }, {
        key: "setSort",
        value: function setSort(arr) {
          return Array.from(new Set(arr)).sort();
        }
      }, {
        key: "showMap",
        value: function showMap() {
          var lat = environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].DEFAULT_LATITUDE;
          var lng = environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].DEFAULT_LONGITUDE;
          var mapProp = {
            center: new google.maps.LatLng(lat, lng),
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP
          };
          this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
        }
      }, {
        key: "filterByName",
        value: function filterByName(event) {
          var _this2 = this;

          if (event) {
            this.merchantName = event;
            this.deleteMarkerStorage();
            var filteredMerchants = this.merchants.filter(function (mer) {
              return mer.name === _this2.merchantName;
            });
            this.populateMarkers(filteredMerchants, this.merchantMarkers);
          } else {
            this.deleteMarkerStorage();
            this.populateMarkers(this.merchants, this.merchantMarkers);
          }
        }
      }, {
        key: "filterByCity",
        value: function filterByCity(event) {
          var _this3 = this;

          if (event) {
            this.merchantCity = event;
            this.merchantName = undefined;
            this.deleteMarkerStorage();
            var filteredMerchants = this.merchants.filter(function (mer) {
              return mer.geoLocation.city === _this3.merchantCity;
            });
            this.populateMarkers(filteredMerchants, this.merchantMarkers);
            this.listOfMerchants = this.setSort(filteredMerchants.map(function (mer) {
              return mer.name;
            }));
          } else {
            this.deleteMarkerStorage();
            this.populateMarkers(this.merchants, this.merchantMarkers);
          }
        }
      }, {
        key: "filterByCountry",
        value: function filterByCountry(event) {
          var _this4 = this;

          if (event) {
            this.merchantCountry = event;
            this.merchantCity = undefined;
            this.merchantName = undefined;
            this.deleteMarkerStorage();
            var filteredMerchants = this.merchants.filter(function (mer) {
              return Object(_modules_server_common_entities_GeoLocation__WEBPACK_IMPORTED_MODULE_4__["getCountryName"])(mer.geoLocation.countryId) === _this4.merchantCountry;
            });
            this.listOfCities = this.setSort(filteredMerchants.map(function (mer) {
              return mer.geoLocation.city;
            }));
            this.listOfMerchants = this.setSort(filteredMerchants.map(function (mer) {
              return mer.name;
            }));
            this.populateMarkers(filteredMerchants, this.merchantMarkers);
          } else {
            this.deleteMarkerStorage();
            this.populateMarkers(this.merchants, this.merchantMarkers);
          }
        }
      }, {
        key: "populateMarkers",
        value: function populateMarkers(merchantArray, markerStorage) {
          var _this5 = this;

          var latlngbounds = new google.maps.LatLngBounds();
          merchantArray.forEach(function (mer) {
            var coords = new google.maps.LatLng(mer.geoLocation.loc.coordinates[1], mer.geoLocation.loc.coordinates[0]);
            var storeIcon = environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].MAP_MERCHANT_ICON_LINK;

            var marker = _this5.addMarker(coords, _this5.map, storeIcon);

            markerStorage.push({
              marker: marker,
              id: mer.id
            });
            latlngbounds.extend(coords);
          });
          this.map.fitBounds(latlngbounds);
        }
      }, {
        key: "updateMarkers",
        value: function updateMarkers(merchantArray) {
          var _this6 = this;

          merchantArray.forEach(function (mer, index) {
            var newCoords = new google.maps.LatLng(mer.geoLocation.loc.coordinates[1], mer.geoLocation.loc.coordinates[0]);
            var markerIndex;

            var marker = _this6.merchantMarkers.find(function (markerItem, i) {
              if (markerItem.id === mer.id) {
                markerIndex = i;
                return true;
              } else {
                return false;
              }
            });

            if (marker) {
              if (!newCoords.equals(marker.marker.getPosition())) {
                _this6.merchantMarkers[markerIndex].marker.setPosition(newCoords);
              }
            }
          });
        }
      }, {
        key: "deleteMarkerStorage",
        value: function deleteMarkerStorage() {
          this.merchantMarkers.forEach(function (mar) {
            mar.marker.setMap(null);
          });
          this.merchantMarkers = [];
        }
      }, {
        key: "addMarker",
        value: function addMarker(position, map, icon) {
          return new google.maps.Marker({
            position: position,
            map: map,
            icon: icon
          });
        }
      }]);

      return WarehouseTrackComponent;
    }();

    WarehouseTrackComponent.ctorParameters = function () {
      return [{
        type: _app_core_data_warehouses_service__WEBPACK_IMPORTED_MODULE_2__["WarehousesService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gmap', {
      "static": true
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], WarehouseTrackComponent.prototype, "gmapElement", void 0);
    WarehouseTrackComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./warehouse-track.component.html */
      "../../node_modules/raw-loader/dist/cjs.js!./src/app/pages/+warehouses/+warehouse-track/warehouse-track.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./warehouse-track.component.scss */
      "./src/app/pages/+warehouses/+warehouse-track/warehouse-track.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_app_core_data_warehouses_service__WEBPACK_IMPORTED_MODULE_2__["WarehousesService"]])], WarehouseTrackComponent);
    /***/
  },

  /***/
  "./src/app/pages/+warehouses/+warehouse-track/warehouse-track.module.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/pages/+warehouses/+warehouse-track/warehouse-track.module.ts ***!
    \******************************************************************************/

  /*! exports provided: WarehouseTrackModule */

  /***/
  function srcAppPagesWarehousesWarehouseTrackWarehouseTrackModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WarehouseTrackModule", function () {
      return WarehouseTrackModule;
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


    var angular2_wizard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! angular2-wizard */
    "./node_modules/@ever-co/angular2-wizard/dist/index.js");
    /* harmony import */


    var angular2_wizard__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_wizard__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var ng2_smart_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ng2-smart-table */
    "./node_modules/ng2-smart-table/fesm2015/ng2-smart-table.js");
    /* harmony import */


    var ng2_file_upload__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ng2-file-upload */
    "./node_modules/ng2-file-upload/fesm2015/ng2-file-upload.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ngx-translate/core */
    "../../node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _app_theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @app/@theme */
    "./src/app/@theme/index.ts");
    /* harmony import */


    var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ng-select/ng-select */
    "./node_modules/@ng-select/ng-select/fesm2015/ng-select-ng-select.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _warehouse_track_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./warehouse-track.component */
    "./src/app/pages/+warehouses/+warehouse-track/warehouse-track.component.ts");

    var WarehouseTrackModule = function WarehouseTrackModule() {
      _classCallCheck(this, WarehouseTrackModule);
    };

    WarehouseTrackModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [angular2_wizard__WEBPACK_IMPORTED_MODULE_2__["FormWizardModule"], ng2_smart_table__WEBPACK_IMPORTED_MODULE_3__["Ng2SmartTableModule"], ng2_file_upload__WEBPACK_IMPORTED_MODULE_4__["FileUploadModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"].forChild(), _app_theme__WEBPACK_IMPORTED_MODULE_7__["ThemeModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__["NgSelectModule"]],
      entryComponents: [_warehouse_track_component__WEBPACK_IMPORTED_MODULE_10__["WarehouseTrackComponent"]],
      declarations: [_warehouse_track_component__WEBPACK_IMPORTED_MODULE_10__["WarehouseTrackComponent"]],
      providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbActiveModal"]]
    })], WarehouseTrackModule);
    /***/
  },

  /***/
  "./src/app/pages/+warehouses/warehouses-routing.module.ts":
  /*!****************************************************************!*\
    !*** ./src/app/pages/+warehouses/warehouses-routing.module.ts ***!
    \****************************************************************/

  /*! exports provided: WarehousesRoutingModule */

  /***/
  function srcAppPagesWarehousesWarehousesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WarehousesRoutingModule", function () {
      return WarehousesRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _warehouses_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./warehouses.component */
    "./src/app/pages/+warehouses/warehouses.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _warehouse_track_warehouse_track_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./+warehouse-track/warehouse-track.component */
    "./src/app/pages/+warehouses/+warehouse-track/warehouse-track.component.ts");

    var routes = [{
      path: '',
      component: _warehouses_component__WEBPACK_IMPORTED_MODULE_2__["WarehousesComponent"]
    }, {
      path: 'track',
      component: _warehouse_track_warehouse_track_component__WEBPACK_IMPORTED_MODULE_4__["WarehouseTrackComponent"]
    }, {
      path: ':id',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | warehouse-warehouse-module */
        [__webpack_require__.e("default~app-pages-products-products-module~merchants-merchants-module~warehouse-warehouse-module"), __webpack_require__.e("default~app-pages-orders-orders-module~app-pages-simulation-simulation-module~warehouse-warehouse-module"), __webpack_require__.e("default~app-pages-simulation-simulation-module~customer-customer-module~warehouse-warehouse-module"), __webpack_require__.e("default~app-pages-orders-orders-module~customer-customer-module~warehouse-warehouse-module"), __webpack_require__.e("default~app-pages-orders-orders-module~merchants-merchants-module~warehouse-warehouse-module"), __webpack_require__.e("default~app-pages-customers-customers-module~app-pages-simulation-simulation-module~warehouse-wareho~f5ccf070"), __webpack_require__.e("default~app-pages-orders-orders-module~warehouse-warehouse-module"), __webpack_require__.e("default~merchants-merchants-module~warehouse-warehouse-module"), __webpack_require__.e("common"), __webpack_require__.e("warehouse-warehouse-module")]).then(__webpack_require__.bind(null,
        /*! ./+warehouse/warehouse.module */
        "./src/app/pages/+warehouses/+warehouse/warehouse.module.ts")).then(function (m) {
          return m.WarehouseModule;
        });
      }
    }];

    var WarehousesRoutingModule = function WarehousesRoutingModule() {
      _classCallCheck(this, WarehousesRoutingModule);
    };

    WarehousesRoutingModule.routes = routes;
    WarehousesRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    })], WarehousesRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/+warehouses/warehouses.component.scss":
  /*!*************************************************************!*\
    !*** ./src/app/pages/+warehouses/warehouses.component.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesWarehousesWarehousesComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "nb-card-header {\n  border-bottom: 0;\n}\n\nnb-card-body {\n  padding: 0;\n  border-bottom-left-radius: 0.5rem;\n  border-bottom-right-radius: 0.5rem;\n}\n\n:host ::ng-deep ng2-smart-table tr th {\n  padding: 18px !important;\n}\n\n:host ::ng-deep ng2-smart-table tr td {\n  padding: 17px !important;\n}\n\n:host ::ng-deep ng2-smart-table tr.ng2-smart-titles > th:nth-child(1) {\n  text-align: center;\n  cursor: pointer;\n}\n\n:host ::ng-deep ng2-smart-table tr.ng2-smart-titles > th:nth-child(1) input {\n  margin-left: 1px !important;\n  cursor: pointer;\n}\n\n:host ::ng-deep ng2-smart-table td.ng2-smart-actions.ng2-smart-action-multiple-select {\n  text-align: center;\n  cursor: pointer;\n}\n\n:host ::ng-deep ng2-smart-table tr.ng2-smart-filters th {\n  text-align: center;\n}\n\n:host ::ng-deep ng2-smart-table tr td:first-of-type,\n:host ::ng-deep ng2-smart-table th:first-of-type {\n  border-left: none;\n}\n\n:host ::ng-deep ng2-smart-table tr td:last-of-type,\n:host ::ng-deep ng2-smart-table th:last-of-type {\n  border-right: none;\n}\n\n:host ::ng-deep ng2-smart-table input[type='checkbox'] {\n  cursor: pointer;\n}\n\n:host ::ng-deep ng2-smart-table .warehouse-name {\n  width: 17%;\n}\n\n:host ::ng-deep ng2-smart-table .warehouse-email {\n  width: 17%;\n}\n\n:host ::ng-deep ng2-smart-table .warehouse-phone {\n  width: 17%;\n}\n\n:host ::ng-deep ng2-smart-table .warehouse-city {\n  width: 17%;\n}\n\n:host ::ng-deep ng2-smart-table .warehouse-address {\n  width: 32%;\n}\n\n:host ::ng-deep ng2-smart-table .warehouse-image {\n  width: 74px;\n}\n\n.ng2-smart-th.qty {\n  text-align: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvZC9Xb3JrL0FuZ3VsYXIvTmV3IGZvbGRlciAoMikvRG9sY2VHcm9jZXJ5L3BhY2thZ2VzL2FkbWluLXdlYi1hbmd1bGFyL3NyYy9hcHAvcGFnZXMvK3dhcmVob3VzZXMvd2FyZWhvdXNlcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvK3dhcmVob3VzZXMvd2FyZWhvdXNlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLGdCQUFnQjtBQ0NqQjs7QURFQTtFQUNDLFVBQVU7RUFDVixpQ0FBaUM7RUFDakMsa0NBQWtDO0FDQ25DOztBREVBO0VBR0csd0JBQXdCO0FDRDNCOztBREZBO0VBTUcsd0JBQXdCO0FDQTNCOztBRE5BO0VBV0Usa0JBQWtCO0VBQ2xCLGVBQWU7QUNEakI7O0FEWEE7RUFlRywyQkFBMkI7RUFDM0IsZUFBZTtBQ0FsQjs7QURoQkE7RUFxQkUsa0JBQWtCO0VBQ2xCLGVBQWU7QUNEakI7O0FEckJBO0VBMEJFLGtCQUFrQjtBQ0RwQjs7QUR6QkE7O0VBZ0NHLGlCQUFpQjtBQ0ZwQjs7QUQ5QkE7O0VBbUNHLGtCQUFrQjtBQ0FyQjs7QURuQ0E7RUF3Q0UsZUFBZTtBQ0RqQjs7QUR2Q0E7RUE0Q0UsVUFBVTtBQ0RaOztBRDNDQTtFQStDRSxVQUFVO0FDQVo7O0FEL0NBO0VBa0RFLFVBQVU7QUNDWjs7QURuREE7RUFxREUsVUFBVTtBQ0VaOztBRHZEQTtFQXdERSxVQUFVO0FDR1o7O0FET0E7RUFDQyxXQUFXO0FDSlo7O0FET0E7RUFDQyxrQkFBa0I7QUNKbkIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy8rd2FyZWhvdXNlcy93YXJlaG91c2VzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibmItY2FyZC1oZWFkZXIge1xuXHRib3JkZXItYm90dG9tOiAwO1xufVxuXG5uYi1jYXJkLWJvZHkge1xuXHRwYWRkaW5nOiAwO1xuXHRib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwLjVyZW07XG5cdGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwLjVyZW07XG59XG5cbjpob3N0IDo6bmctZGVlcCBuZzItc21hcnQtdGFibGUge1xuXHR0ciB7XG5cdFx0dGgge1xuXHRcdFx0cGFkZGluZzogMThweCAhaW1wb3J0YW50O1xuXHRcdH1cblx0XHR0ZCB7XG5cdFx0XHRwYWRkaW5nOiAxN3B4ICFpbXBvcnRhbnQ7XG5cdFx0fVxuXHR9XG5cblx0dHIubmcyLXNtYXJ0LXRpdGxlcyA+IHRoOm50aC1jaGlsZCgxKSB7XG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdGN1cnNvcjogcG9pbnRlcjtcblxuXHRcdGlucHV0IHtcblx0XHRcdG1hcmdpbi1sZWZ0OiAxcHggIWltcG9ydGFudDtcblx0XHRcdGN1cnNvcjogcG9pbnRlcjtcblx0XHR9XG5cdH1cblxuXHR0ZC5uZzItc21hcnQtYWN0aW9ucy5uZzItc21hcnQtYWN0aW9uLW11bHRpcGxlLXNlbGVjdCB7XG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdGN1cnNvcjogcG9pbnRlcjtcblx0fVxuXG5cdHRyLm5nMi1zbWFydC1maWx0ZXJzIHRoIHtcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdH1cblxuXHR0ciB0ZCxcblx0dGgge1xuXHRcdCY6Zmlyc3Qtb2YtdHlwZSB7XG5cdFx0XHRib3JkZXItbGVmdDogbm9uZTtcblx0XHR9XG5cdFx0JjpsYXN0LW9mLXR5cGUge1xuXHRcdFx0Ym9yZGVyLXJpZ2h0OiBub25lO1xuXHRcdH1cblx0fVxuXG5cdGlucHV0W3R5cGU9J2NoZWNrYm94J10ge1xuXHRcdGN1cnNvcjogcG9pbnRlcjtcblx0fVxuXG5cdC53YXJlaG91c2UtbmFtZSB7XG5cdFx0d2lkdGg6IDE3JTtcblx0fVxuXHQud2FyZWhvdXNlLWVtYWlsIHtcblx0XHR3aWR0aDogMTclO1xuXHR9XG5cdC53YXJlaG91c2UtcGhvbmUge1xuXHRcdHdpZHRoOiAxNyU7XG5cdH1cblx0LndhcmVob3VzZS1jaXR5IHtcblx0XHR3aWR0aDogMTclO1xuXHR9XG5cdC53YXJlaG91c2UtYWRkcmVzcyB7XG5cdFx0d2lkdGg6IDMyJTtcblx0fVxuXHQvLyAud2FyZWhvdXNlLXF0eSB7XG5cdC8vIFx0d2lkdGg6IDUlO1xuXHQvLyB9XG5cdC8vIC53YXJlaG91c2UtYWN0aW9ucyB7XG5cdC8vIFx0d2lkdGg6IDUlO1xuXHQvLyB9XG59XG5cbjpob3N0IDo6bmctZGVlcCBuZzItc21hcnQtdGFibGUgLndhcmVob3VzZS1pbWFnZSB7XG5cdHdpZHRoOiA3NHB4O1xufVxuXG4ubmcyLXNtYXJ0LXRoLnF0eSB7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiIsIm5iLWNhcmQtaGVhZGVyIHtcbiAgYm9yZGVyLWJvdHRvbTogMDtcbn1cblxubmItY2FyZC1ib2R5IHtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMC41cmVtO1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMC41cmVtO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgbmcyLXNtYXJ0LXRhYmxlIHRyIHRoIHtcbiAgcGFkZGluZzogMThweCAhaW1wb3J0YW50O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgbmcyLXNtYXJ0LXRhYmxlIHRyIHRkIHtcbiAgcGFkZGluZzogMTdweCAhaW1wb3J0YW50O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgbmcyLXNtYXJ0LXRhYmxlIHRyLm5nMi1zbWFydC10aXRsZXMgPiB0aDpudGgtY2hpbGQoMSkge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIG5nMi1zbWFydC10YWJsZSB0ci5uZzItc21hcnQtdGl0bGVzID4gdGg6bnRoLWNoaWxkKDEpIGlucHV0IHtcbiAgbWFyZ2luLWxlZnQ6IDFweCAhaW1wb3J0YW50O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbjpob3N0IDo6bmctZGVlcCBuZzItc21hcnQtdGFibGUgdGQubmcyLXNtYXJ0LWFjdGlvbnMubmcyLXNtYXJ0LWFjdGlvbi1tdWx0aXBsZS1zZWxlY3Qge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIG5nMi1zbWFydC10YWJsZSB0ci5uZzItc21hcnQtZmlsdGVycyB0aCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIG5nMi1zbWFydC10YWJsZSB0ciB0ZDpmaXJzdC1vZi10eXBlLFxuOmhvc3QgOjpuZy1kZWVwIG5nMi1zbWFydC10YWJsZSB0aDpmaXJzdC1vZi10eXBlIHtcbiAgYm9yZGVyLWxlZnQ6IG5vbmU7XG59XG5cbjpob3N0IDo6bmctZGVlcCBuZzItc21hcnQtdGFibGUgdHIgdGQ6bGFzdC1vZi10eXBlLFxuOmhvc3QgOjpuZy1kZWVwIG5nMi1zbWFydC10YWJsZSB0aDpsYXN0LW9mLXR5cGUge1xuICBib3JkZXItcmlnaHQ6IG5vbmU7XG59XG5cbjpob3N0IDo6bmctZGVlcCBuZzItc21hcnQtdGFibGUgaW5wdXRbdHlwZT0nY2hlY2tib3gnXSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIG5nMi1zbWFydC10YWJsZSAud2FyZWhvdXNlLW5hbWUge1xuICB3aWR0aDogMTclO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgbmcyLXNtYXJ0LXRhYmxlIC53YXJlaG91c2UtZW1haWwge1xuICB3aWR0aDogMTclO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgbmcyLXNtYXJ0LXRhYmxlIC53YXJlaG91c2UtcGhvbmUge1xuICB3aWR0aDogMTclO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgbmcyLXNtYXJ0LXRhYmxlIC53YXJlaG91c2UtY2l0eSB7XG4gIHdpZHRoOiAxNyU7XG59XG5cbjpob3N0IDo6bmctZGVlcCBuZzItc21hcnQtdGFibGUgLndhcmVob3VzZS1hZGRyZXNzIHtcbiAgd2lkdGg6IDMyJTtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIG5nMi1zbWFydC10YWJsZSAud2FyZWhvdXNlLWltYWdlIHtcbiAgd2lkdGg6IDc0cHg7XG59XG5cbi5uZzItc21hcnQtdGgucXR5IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/pages/+warehouses/warehouses.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/+warehouses/warehouses.component.ts ***!
    \***********************************************************/

  /*! exports provided: WarehousesComponent */

  /***/
  function srcAppPagesWarehousesWarehousesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WarehousesComponent", function () {
      return WarehousesComponent;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var angular2_toaster__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! angular2-toaster */
    "./node_modules/angular2-toaster/angular2-toaster.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var ng2_smart_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ng2-smart-table */
    "./node_modules/ng2-smart-table/fesm2015/ng2-smart-table.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ngx-translate/core */
    "../../node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _core_data_warehouses_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../@core/data/warehouses.service */
    "./src/app/@core/data/warehouses.service.ts");
    /* harmony import */


    var _core_data_orders_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../@core/data/orders.service */
    "./src/app/@core/data/orders.service.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _shared_warehouse_warehouse_mutation__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../../@shared/warehouse/warehouse-mutation */
    "./src/app/@shared/warehouse/warehouse-mutation/index.ts");
    /* harmony import */


    var _shared_render_component_name_redirect_name_redirect_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../../@shared/render-component/name-redirect/name-redirect.component */
    "./src/app/@shared/render-component/name-redirect/name-redirect.component.ts");
    /* harmony import */


    var _shared_render_component_warehouse_table_warehouse_actions_warehouse_actions_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ../../@shared/render-component/warehouse-table/warehouse-actions/warehouse-actions.component */
    "./src/app/@shared/render-component/warehouse-table/warehouse-actions/warehouse-actions.component.ts");
    /* harmony import */


    var _shared_render_component_warehouse_table_warehouse_image_warehouse_image_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ../../@shared/render-component/warehouse-table/warehouse-image/warehouse-image.component */
    "./src/app/@shared/render-component/warehouse-table/warehouse-image/warehouse-image.component.ts");
    /* harmony import */


    var _shared_render_component_warehouse_table_warehouse_orders_number_warehouse_orders_number_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ../../@shared/render-component/warehouse-table/warehouse-orders-number/warehouse-orders-number.component */
    "./src/app/@shared/render-component/warehouse-table/warehouse-orders-number/warehouse-orders-number.component.ts");
    /* harmony import */


    var _shared_confirmation_modal_confirmation_modal_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ../../@shared/confirmation-modal/confirmation-modal.component */
    "./src/app/@shared/confirmation-modal/confirmation-modal.component.ts");
    /* harmony import */


    var _shared_render_component_warehouse_table_warehouse_email_warehouse_email_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ../../@shared/render-component/warehouse-table/warehouse-email/warehouse-email.component */
    "./src/app/@shared/render-component/warehouse-table/warehouse-email/warehouse-email.component.ts");
    /* harmony import */


    var _shared_render_component_warehouse_table_warehouse_phone_warehouse_phone_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ../../@shared/render-component/warehouse-table/warehouse-phone/warehouse-phone.component */
    "./src/app/@shared/render-component/warehouse-table/warehouse-phone/warehouse-phone.component.ts");

    var WarehousesComponent_1;
    var perPage = 5;

    var WarehousesComponent = WarehousesComponent_1 = /*#__PURE__*/function () {
      function WarehousesComponent(_translateService, _router, _modalService, _warehousesService, _ordersService, _toasterService, _sanitizer, modalService) {
        _classCallCheck(this, WarehousesComponent);

        this._translateService = _translateService;
        this._router = _router;
        this._modalService = _modalService;
        this._warehousesService = _warehousesService;
        this._ordersService = _ordersService;
        this._toasterService = _toasterService;
        this._sanitizer = _sanitizer;
        this.modalService = modalService;
        this.ngDestroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
        this.sourceSmartTable = new ng2_smart_table__WEBPACK_IMPORTED_MODULE_5__["LocalDataSource"]();
        this._selectedWarehouses = [];

        this._loadSettingsSmartTable();
      }

      _createClass(WarehousesComponent, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this._addCustomHTMLElements();

          this._applyTranslationOnSmartTable();

          this.smartTableChange();

          this._loadDataSmartTable();
        }
      }, {
        key: "createWarehouseModel",
        value: function createWarehouseModel() {
          this._modalService.open(_shared_warehouse_warehouse_mutation__WEBPACK_IMPORTED_MODULE_12__["WarehouseMutationComponent"], {
            size: 'lg',
            container: 'nb-layout',
            backdrop: 'static'
          });
        }
      }, {
        key: "selectWarehouseTmp",
        value: function selectWarehouseTmp(ev) {
          this._selectedWarehouses = ev.selected;
        }
      }, {
        key: "deleteSelectedRows",
        value: function deleteSelectedRows() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this7 = this;

            var activeModal, modalComponent;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    activeModal = this.modalService.open(_shared_confirmation_modal_confirmation_modal_component__WEBPACK_IMPORTED_MODULE_17__["ConfimationModalComponent"], {
                      size: 'sm',
                      container: 'nb-layout',
                      backdrop: 'static'
                    });
                    modalComponent = activeModal.componentInstance;
                    _context.next = 4;
                    return modalComponent.confirmEvent.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(modalComponent.ngDestroy$)).subscribe(function (dataEvent) {
                      var idsForDelete = _this7._selectedWarehouses.map(function (w) {
                        return w.id;
                      });

                      try {
                        _this7.loading = true;

                        _this7._warehousesService.removeByIds(idsForDelete).subscribe(function () {
                          _this7.loading = false;

                          _this7._toasterService.pop("success", "Selected warehouse are deleted!");

                          _this7._selectedWarehouses = [];
                        });
                      } catch (error) {
                        _this7.loading = false;

                        _this7._toasterService.pop('error', "Error: \"".concat(error.message, "\""));
                      }

                      modalComponent.cancel();
                    });

                  case 4:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "_addCustomHTMLElements",
        value: function _addCustomHTMLElements() {
          document.querySelector('tr.ng2-smart-filters > th:nth-child(1)').innerHTML = '<i class="fa fa-search" style="font-size: 1.3em"/>';
        }
      }, {
        key: "_selectWarehouse",
        value: function _selectWarehouse(warehouseId) {
          this._router.navigate(['/stores/' + warehouseId]);
        }
      }, {
        key: "_applyTranslationOnSmartTable",
        value: function _applyTranslationOnSmartTable() {
          var _this8 = this;

          this._translateService.onLangChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(this.ngDestroy$)).subscribe(function () {
            _this8._loadSettingsSmartTable();
          });
        }
      }, {
        key: "_loadDataSmartTable",
        value: function _loadDataSmartTable() {
          var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var _this9 = this;

            var warehouses, loadData;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    if (!this.$merchants) {
                      _context3.next = 3;
                      break;
                    }

                    _context3.next = 3;
                    return this.$merchants.unsubscribe();

                  case 3:
                    warehouses = [];
                    this.$merchants = this._warehousesService.getStores({
                      skip: perPage * (page - 1),
                      limit: perPage
                    }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(this.ngDestroy$)).subscribe(function (w) {
                      warehouses = w;
                      loadData();
                    });

                    loadData = function loadData() {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this9, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                        var merchantsOrders, warehousesVM, merchantsData;
                        return regeneratorRuntime.wrap(function _callee2$(_context2) {
                          while (1) {
                            switch (_context2.prev = _context2.next) {
                              case 0:
                                _context2.next = 2;
                                return this._ordersService.getMerchantsOrdersCountInfo(warehouses.map(function (w) {
                                  return w.id;
                                }));

                              case 2:
                                merchantsOrders = _context2.sent;
                                warehousesVM = warehouses.map(function (warehouse) {
                                  var merchantOrders = merchantsOrders.find(function (res) {
                                    return res['id'] === warehouse.id;
                                  });
                                  return {
                                    id: warehouse.id,
                                    image: warehouse.logo || WarehousesComponent_1.noInfoSign,
                                    name: warehouse.name || WarehousesComponent_1.noInfoSign,
                                    email: warehouse.contactEmail || WarehousesComponent_1.noInfoSign,
                                    phone: warehouse.contactPhone || WarehousesComponent_1.noInfoSign,
                                    city: warehouse.geoLocation.city || WarehousesComponent_1.noInfoSign,
                                    address: "st. ".concat(warehouse.geoLocation.streetAddress || WarehousesComponent_1.noInfoSign, ", hse. \u2116 ").concat(warehouse.geoLocation.house || WarehousesComponent_1.noInfoSign),
                                    ordersQty: merchantOrders ? merchantOrders.ordersCount : 0,
                                    warehouseInfo: warehouse
                                  };
                                });
                                _context2.next = 6;
                                return this.loadDataCount();

                              case 6:
                                merchantsData = new Array(this.dataCount);
                                merchantsData.splice.apply(merchantsData, [perPage * (page - 1), perPage].concat(_toConsumableArray(warehousesVM)));
                                _context2.next = 10;
                                return this.sourceSmartTable.load(merchantsData);

                              case 10:
                              case "end":
                                return _context2.stop();
                            }
                          }
                        }, _callee2, this);
                      }));
                    };

                  case 6:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "_loadSettingsSmartTable",
        value: function _loadSettingsSmartTable() {
          var _this10 = this;

          var columnTitlePrefix = 'WAREHOUSES_VIEW.SMART_TABLE_COLUMNS.';

          var getTranslate = function getTranslate(name) {
            return _this10._translateService.get(columnTitlePrefix + name);
          };

          Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["forkJoin"])(this._translateService.get('Id'), getTranslate('IMAGE'), getTranslate('NAME'), getTranslate('EMAIL'), getTranslate('PHONE'), getTranslate('CITY'), getTranslate('ADDRESS'), getTranslate('ORDERS')).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(this.ngDestroy$)).subscribe(function (_ref) {
            var _ref2 = _slicedToArray(_ref, 8),
                id = _ref2[0],
                image = _ref2[1],
                name = _ref2[2],
                email = _ref2[3],
                phone = _ref2[4],
                city = _ref2[5],
                address = _ref2[6],
                orders = _ref2[7];

            _this10.settingsSmartTable = {
              actions: false,
              selectMode: 'multi',
              columns: {
                images: {
                  title: image,
                  "class": 'warehouse-image',
                  type: 'custom',
                  renderComponent: _shared_render_component_warehouse_table_warehouse_image_warehouse_image_component__WEBPACK_IMPORTED_MODULE_15__["WarehouseImageComponent"],
                  onComponentInitFunction: function onComponentInitFunction(instance) {
                    instance.redirectPage = 'stores';
                  },
                  filter: false
                },
                name: {
                  title: name,
                  type: 'custom',
                  "class": 'warehouse-name',
                  renderComponent: _shared_render_component_name_redirect_name_redirect_component__WEBPACK_IMPORTED_MODULE_13__["RedirectNameComponent"],
                  onComponentInitFunction: function onComponentInitFunction(instance) {
                    instance.redirectPage = 'stores';
                  }
                },
                email: {
                  title: email,
                  type: 'custom',
                  renderComponent: _shared_render_component_warehouse_table_warehouse_email_warehouse_email_component__WEBPACK_IMPORTED_MODULE_18__["WarehouseEmailComponent"],
                  "class": 'warehouse-email'
                },
                phone: {
                  title: phone,
                  type: 'custom',
                  renderComponent: _shared_render_component_warehouse_table_warehouse_phone_warehouse_phone_component__WEBPACK_IMPORTED_MODULE_19__["WarehousePhoneComponent"],
                  "class": 'warehouse-phone'
                },
                city: {
                  title: city,
                  "class": 'warehouse-city'
                },
                address: {
                  title: address,
                  "class": 'warehouse-address'
                },
                ordersQty: {
                  title: orders,
                  type: 'custom',
                  filter: false,
                  "class": 'warehouse-qty',
                  renderComponent: _shared_render_component_warehouse_table_warehouse_orders_number_warehouse_orders_number_component__WEBPACK_IMPORTED_MODULE_16__["WarehouseOrdersNumberComponent"],
                  onComponentInitFunction: function onComponentInitFunction(instance) {
                    instance.redirectPage = 'stores';
                  }
                },
                actions: {
                  title: 'Actions',
                  filter: false,
                  type: 'custom',
                  "class": 'warehouse-actions',
                  renderComponent: _shared_render_component_warehouse_table_warehouse_actions_warehouse_actions_component__WEBPACK_IMPORTED_MODULE_14__["WarehouseActionsComponent"]
                }
              },
              pager: {
                display: true,
                perPage: perPage
              }
            };
          });
        }
      }, {
        key: "smartTableChange",
        value: function smartTableChange() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            var _this11 = this;

            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    this.sourceSmartTable.onChanged().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(this.ngDestroy$)).subscribe(function (event) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this11, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                        var page;
                        return regeneratorRuntime.wrap(function _callee4$(_context4) {
                          while (1) {
                            switch (_context4.prev = _context4.next) {
                              case 0:
                                if (event.action === 'page') {
                                  page = event.paging.page;

                                  this._loadDataSmartTable(page);
                                }

                              case 1:
                              case "end":
                                return _context4.stop();
                            }
                          }
                        }, _callee4, this);
                      }));
                    });

                  case 1:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "loadDataCount",
        value: function loadDataCount() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    _context6.next = 2;
                    return this._warehousesService.getCountOfMerchants();

                  case 2:
                    this.dataCount = _context6.sent;

                  case 3:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.ngDestroy$.next();
          this.ngDestroy$.complete();
        }
      }, {
        key: "hasSelectedWarehouses",
        get: function get() {
          return this._selectedWarehouses.length > 0;
        }
      }]);

      return WarehousesComponent;
    }();

    WarehousesComponent.noInfoSign = '';

    WarehousesComponent.ctorParameters = function () {
      return [{
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"]
      }, {
        type: _core_data_warehouses_service__WEBPACK_IMPORTED_MODULE_7__["WarehousesService"]
      }, {
        type: _core_data_orders_service__WEBPACK_IMPORTED_MODULE_8__["OrdersService"]
      }, {
        type: angular2_toaster__WEBPACK_IMPORTED_MODULE_3__["ToasterService"]
      }, {
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["DomSanitizer"]
      }, {
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"]
      }];
    };

    WarehousesComponent = WarehousesComponent_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'ea-warehouses',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./warehouses.component.html */
      "../../node_modules/raw-loader/dist/cjs.js!./src/app/pages/+warehouses/warehouses.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./warehouses.component.scss */
      "./src/app/pages/+warehouses/warehouses.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"], _core_data_warehouses_service__WEBPACK_IMPORTED_MODULE_7__["WarehousesService"], _core_data_orders_service__WEBPACK_IMPORTED_MODULE_8__["OrdersService"], angular2_toaster__WEBPACK_IMPORTED_MODULE_3__["ToasterService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["DomSanitizer"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"]])], WarehousesComponent);
    /***/
  },

  /***/
  "./src/app/pages/+warehouses/warehouses.module.ts":
  /*!********************************************************!*\
    !*** ./src/app/pages/+warehouses/warehouses.module.ts ***!
    \********************************************************/

  /*! exports provided: WarehousesModule, HttpLoaderFactory */

  /***/
  function srcAppPagesWarehousesWarehousesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WarehousesModule", function () {
      return WarehousesModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function () {
      return HttpLoaderFactory;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var angular2_wizard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! angular2-wizard */
    "./node_modules/@ever-co/angular2-wizard/dist/index.js");
    /* harmony import */


    var angular2_wizard__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_wizard__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var angular2_toaster__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! angular2-toaster */
    "./node_modules/angular2-toaster/angular2-toaster.js");
    /* harmony import */


    var ng2_smart_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ng2-smart-table */
    "./node_modules/ng2-smart-table/fesm2015/ng2-smart-table.js");
    /* harmony import */


    var _theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../@theme */
    "./src/app/@theme/index.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ngx-translate/core */
    "../../node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ngx-translate/http-loader */
    "./node_modules/@ngx-translate/http-loader/fesm2015/ngx-translate-http-loader.js");
    /* harmony import */


    var _warehouses_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./warehouses.component */
    "./src/app/pages/+warehouses/warehouses.component.ts");
    /* harmony import */


    var _warehouses_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./warehouses-routing.module */
    "./src/app/pages/+warehouses/warehouses-routing.module.ts");
    /* harmony import */


    var _shared_warehouse_warehouse_mutation__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../../@shared/warehouse/warehouse-mutation */
    "./src/app/@shared/warehouse/warehouse-mutation/index.ts");
    /* harmony import */


    var ngx_highlightjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ngx-highlightjs */
    "./node_modules/ngx-highlightjs/fesm2015/ngx-highlightjs.js");
    /* harmony import */


    var _shared_render_component_render_components_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ../../@shared/render-component/render-components.module */
    "./src/app/@shared/render-component/render-components.module.ts");
    /* harmony import */


    var _shared_render_component_warehouse_table_warehouse_table_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ../../@shared/render-component/warehouse-table/warehouse-table.module */
    "./src/app/@shared/render-component/warehouse-table/warehouse-table.module.ts");
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/fesm2015/index.js");
    /* harmony import */


    var _app_shared_confirmation_modal_confirmation_modal_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @app/@shared/confirmation-modal/confirmation-modal.module */
    "./src/app/@shared/confirmation-modal/confirmation-modal.module.ts");
    /* harmony import */


    var _warehouse_track_warehouse_track_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./+warehouse-track/warehouse-track.module */
    "./src/app/pages/+warehouses/+warehouse-track/warehouse-track.module.ts");

    var WarehousesModule = function WarehousesModule() {
      _classCallCheck(this, WarehousesModule);
    };

    WarehousesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_theme__WEBPACK_IMPORTED_MODULE_7__["ThemeModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _shared_warehouse_warehouse_mutation__WEBPACK_IMPORTED_MODULE_12__["WarehouseMutationModule"], _warehouses_routing_module__WEBPACK_IMPORTED_MODULE_11__["WarehousesRoutingModule"], ng2_smart_table__WEBPACK_IMPORTED_MODULE_6__["Ng2SmartTableModule"], angular2_wizard__WEBPACK_IMPORTED_MODULE_4__["FormWizardModule"], _app_shared_confirmation_modal_confirmation_modal_module__WEBPACK_IMPORTED_MODULE_17__["ConfirmationModalModule"], _warehouse_track_warehouse_track_module__WEBPACK_IMPORTED_MODULE_18__["WarehouseTrackModule"], angular2_toaster__WEBPACK_IMPORTED_MODULE_5__["ToasterModule"].forRoot(), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"].forChild({
        loader: {
          provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateLoader"],
          useFactory: HttpLoaderFactory,
          deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]]
        }
      }), ngx_highlightjs__WEBPACK_IMPORTED_MODULE_13__["HighlightModule"].forRoot({
        theme: 'github'
      }), _shared_render_component_render_components_module__WEBPACK_IMPORTED_MODULE_14__["RenderComponentsModule"], _shared_render_component_warehouse_table_warehouse_table_module__WEBPACK_IMPORTED_MODULE_15__["WarehouseTableModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_16__["NbSpinnerModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_16__["NbButtonModule"]],
      declarations: [_warehouses_component__WEBPACK_IMPORTED_MODULE_10__["WarehousesComponent"]],
      entryComponents: [],
      providers: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["JsonPipe"]]
    })], WarehousesModule);

    function HttpLoaderFactory(http) {
      return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_9__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
    }
    /***/

  }
}]);
//# sourceMappingURL=app-pages-warehouses-warehouses-module-es5.js.map