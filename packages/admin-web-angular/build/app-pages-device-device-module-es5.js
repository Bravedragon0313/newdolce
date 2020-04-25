function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-pages-device-device-module"], {
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
  "../../node_modules/raw-loader/dist/cjs.js!./src/app/pages/+device/device-mutation/device-mutation.component.html":
  /*!******************************************************************************************************************************************************************!*\
    !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/raw-loader/dist/cjs.js!./src/app/pages/+device/device-mutation/device-mutation.component.html ***!
    \******************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesDeviceDeviceMutationDeviceMutationComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"modal-header\">\n\t<span class=\"modal-title\">\n\t\t{{ 'CUSTOMERS_VIEW.DEVICE.UPDATE_DEVICE' | translate }}\n\t</span>\n\t<button class=\"close\" aria-label=\"Close\" (click)=\"cancel()\">\n\t\t<span aria-hidden=\"true\">&times;</span>\n\t</button>\n</div>\n<div class=\"modal-body\" [nbSpinner]=\"loading\">\n\t<form [formGroup]=\"form\">\n\t\t<div class=\"form-group\">\n\t\t\t<label for=\"exampleInputId\">{{\n\t\t\t\t'CUSTOMERS_VIEW.DEVICE.DEVICE_ID' | translate\n\t\t\t}}</label>\n\t\t\t<input\n\t\t\t\tformControlName=\"id\"\n\t\t\t\tname=\"deviceId\"\n\t\t\t\tclass=\"form-control\"\n\t\t\t\tid=\"exampleInputId\"\n\t\t\t\treadonly\n\t\t\t\tplaceholder=\"{{\n\t\t\t\t\t'CUSTOMERS_VIEW.DEVICE.DEVICE_ID' | translate\n\t\t\t\t}}\"\n\t\t\t/>\n\t\t</div>\n\t\t<div class=\"form-group\">\n\t\t\t<label for=\"exampleInputLanguage\">{{\n\t\t\t\t'LANGUAGE' | translate\n\t\t\t}}</label>\n\t\t\t<input\n\t\t\t\tformControlName=\"language\"\n\t\t\t\tname=\"language\"\n\t\t\t\tclass=\"form-control\"\n\t\t\t\tid=\"exampleInputLanguage\"\n\t\t\t\tplaceholder=\"{{ 'LANGUAGE' | translate }}\"\n\t\t\t/>\n\t\t</div>\n\t\t<div class=\"form-group\">\n\t\t\t<label for=\"exampleInputType\">{{\n\t\t\t\t'CUSTOMERS_VIEW.DEVICE.TYPEU' | translate\n\t\t\t}}</label>\n\t\t\t<input\n\t\t\t\tformControlName=\"type\"\n\t\t\t\tname=\"type\"\n\t\t\t\tclass=\"form-control\"\n\t\t\t\tid=\"exampleInputType\"\n\t\t\t\tplaceholder=\"{{ 'CUSTOMERS_VIEW.DEVICE.TYPEU' | translate }}\"\n\t\t\t/>\n\t\t</div>\n\t\t<div class=\"form-group\">\n\t\t\t<label for=\"exampleInputUuid\">{{\n\t\t\t\t'CUSTOMERS_VIEW.DEVICE.DEVICE_UUID' | translate\n\t\t\t}}</label>\n\t\t\t<input\n\t\t\t\tformControlName=\"uuid\"\n\t\t\t\tname=\"uuid\"\n\t\t\t\tclass=\"form-control\"\n\t\t\t\tid=\"exampleInputUuid\"\n\t\t\t\treadonly\n\t\t\t\tplaceholder=\"{{\n\t\t\t\t\t'CUSTOMERS_VIEW.DEVICE.DEVICE_UUID' | translate\n\t\t\t\t}}\"\n\t\t\t/>\n\t\t</div>\n\t\t<button (click)=\"update()\" type=\"submit\" class=\"btn btn-success\">\n\t\t\t{{ 'CUSTOMERS_VIEW.DEVICE.UPDATE' | translate }}\n\t\t</button>\n\t\t<button (click)=\"cancel()\" class=\"btn btn-default float-right\">\n\t\t\t{{ 'CANCEL' | translate }}\n\t\t</button>\n\t</form>\n</div>\n";
    /***/
  },

  /***/
  "../../node_modules/raw-loader/dist/cjs.js!./src/app/pages/+device/device.component.html":
  /*!*****************************************************************************************************************************************!*\
    !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/raw-loader/dist/cjs.js!./src/app/pages/+device/device.component.html ***!
    \*****************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesDeviceDeviceComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nb-card>\n\t<toaster-container></toaster-container>\n\t<nb-card-header>\n\t\t<h1>{{ 'CUSTOMERS_VIEW.DEVICE.CUSTOMERS_DEVICES' | translate }}</h1>\n\t</nb-card-header>\n</nb-card>\n\n<nb-card>\n\t<nb-card-header>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col\">\n\t\t\t\t<button\n\t\t\t\t\tnbButton\n\t\t\t\t\tstatus=\"danger\"\n\t\t\t\t\t[disabled]=\"!hasSelectedDevices\"\n\t\t\t\t\t(click)=\"deleteSelectedDevices()\"\n\t\t\t\t>\n\t\t\t\t\t<i class=\"ion-md-trash button-icon mr-1\"></i>\n\t\t\t\t\t<small _ngcontent-c55=\"\">{{\n\t\t\t\t\t\t'CUSTOMERS_VIEW.DEVICE.DELETE' | translate\n\t\t\t\t\t}}</small>\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t</div>\n\t</nb-card-header>\n\n\t<nb-card-body [nbSpinner]=\"loading\">\n\t\t<ng2-smart-table\n\t\t\t[settings]=\"settingsSmartTable\"\n\t\t\t[source]=\"sourceSmartTable\"\n\t\t\t(edit)=\"edit($event)\"\n\t\t\t(delete)=\"deleteDevice($event)\"\n\t\t\t(userRowSelect)=\"selectProductTmp($event)\"\n\t\t>\n\t\t</ng2-smart-table>\n\t</nb-card-body>\n</nb-card>\n";
    /***/
  },

  /***/
  "./src/app/@core/services/notify/notify.service.ts":
  /*!*********************************************************!*\
    !*** ./src/app/@core/services/notify/notify.service.ts ***!
    \*********************************************************/

  /*! exports provided: NotifyService */

  /***/
  function srcAppCoreServicesNotifyNotifyServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotifyService", function () {
      return NotifyService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var angular2_toaster__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! angular2-toaster */
    "./node_modules/angular2-toaster/angular2-toaster.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var NotifyService = /*#__PURE__*/function () {
      function NotifyService(_toasterService) {
        _classCallCheck(this, NotifyService);

        this._toasterService = _toasterService;
      }

      _createClass(NotifyService, [{
        key: "success",
        value: function success(title, body) {
          this._setupToast('success', title, body);

          this._notify();
        }
      }, {
        key: "warn",
        value: function warn(title, body) {
          this._setupToast('warning', title, body);

          this._notify();
        }
      }, {
        key: "error",
        value: function error(title, body) {
          this._setupToast('error', title, body);

          this._notify();
        }
      }, {
        key: "_setupToast",
        value: function _setupToast(type, title, body) {
          this._toast = {
            type: type,
            title: title,
            body: body
          };
        }
      }, {
        key: "_notify",
        value: function _notify() {
          this._toasterService.pop(this._toast);
        }
      }]);

      return NotifyService;
    }();

    NotifyService.ctorParameters = function () {
      return [{
        type: angular2_toaster__WEBPACK_IMPORTED_MODULE_1__["ToasterService"]
      }];
    };

    NotifyService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [angular2_toaster__WEBPACK_IMPORTED_MODULE_1__["ToasterService"]])], NotifyService);
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
  "./src/app/pages/+device/device-mutation/device-mutation.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/pages/+device/device-mutation/device-mutation.component.ts ***!
    \****************************************************************************/

  /*! exports provided: DeviceMutationComponent */

  /***/
  function srcAppPagesDeviceDeviceMutationDeviceMutationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DeviceMutationComponent", function () {
      return DeviceMutationComponent;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _core_data_device_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../@core/data/device.service */
    "./src/app/@core/data/device.service.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _core_services_notify_notify_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../@core/services/notify/notify.service */
    "./src/app/@core/services/notify/notify.service.ts");

    var DeviceMutationComponent = /*#__PURE__*/function () {
      function DeviceMutationComponent(activeModal, fb, deviceService, _notifyService) {
        _classCallCheck(this, DeviceMutationComponent);

        this.activeModal = activeModal;
        this.fb = fb;
        this.deviceService = deviceService;
        this._notifyService = _notifyService;
        this.ngDestroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.form = this.fb.group({
          id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
          language: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
          type: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
          uuid: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        this.id = this.form.get('id');
        this.language = this.form.get('language');
        this.type = this.form.get('type');
        this.uuid = this.form.get('uuid');
      }

      _createClass(DeviceMutationComponent, [{
        key: "cancel",
        value: function cancel() {
          this.activeModal.dismiss('canceled');
        }
      }, {
        key: "update",
        value: function update() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var dev, message, _message;

            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.prev = 0;
                    this.loading = true;
                    _context.next = 4;
                    return this.deviceService.update(this.id.value, {
                      language: this.language.value,
                      type: this.type.value,
                      uuid: this.uuid.value
                    }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])()).toPromise();

                  case 4:
                    dev = _context.sent;
                    this.loading = false;
                    message = "Device was updated! BLQKS";

                    this._notifyService.success(message);

                    _context.next = 16;
                    break;

                  case 10:
                    _context.prev = 10;
                    _context.t0 = _context["catch"](0);
                    _message = "Something went wrong";

                    if (_context.t0.message === 'Validation error') {
                      _message = _context.t0.message;
                    }

                    this.loading = false;

                    this._notifyService.error(_message);

                  case 16:
                    this.cancel();

                  case 17:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this, [[0, 10]]);
          }));
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.id.setValue(this.device.id);
          this.language.setValue(this.device.language);
          this.type.setValue(this.device.type);
          this.uuid.setValue(this.device.uuid);
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.ngDestroy$.next();
          this.ngDestroy$.complete();
        }
      }]);

      return DeviceMutationComponent;
    }();

    DeviceMutationComponent.ctorParameters = function () {
      return [{
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: _core_data_device_service__WEBPACK_IMPORTED_MODULE_4__["DeviceService"]
      }, {
        type: _core_services_notify_notify_service__WEBPACK_IMPORTED_MODULE_7__["NotifyService"]
      }];
    };

    DeviceMutationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'ea-device-mutation',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./device-mutation.component.html */
      "../../node_modules/raw-loader/dist/cjs.js!./src/app/pages/+device/device-mutation/device-mutation.component.html"))["default"]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _core_data_device_service__WEBPACK_IMPORTED_MODULE_4__["DeviceService"], _core_services_notify_notify_service__WEBPACK_IMPORTED_MODULE_7__["NotifyService"]])], DeviceMutationComponent);
    /***/
  },

  /***/
  "./src/app/pages/+device/device.component.scss":
  /*!*****************************************************!*\
    !*** ./src/app/pages/+device/device.component.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesDeviceDeviceComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "nb-card-header {\n  border-bottom: 0;\n}\n\n.title {\n  text-align: left;\n}\n\nnb-card-body {\n  padding: 0;\n  border-bottom-left-radius: 0.5rem;\n  border-bottom-right-radius: 0.5rem;\n}\n\n:host ::ng-deep ng2-smart-table tr.ng2-smart-titles > th:nth-child(1) {\n  text-align: center;\n  cursor: pointer;\n}\n\n:host ::ng-deep ng2-smart-table tr.ng2-smart-titles > th:nth-child(1) input {\n  margin-left: 5px !important;\n  cursor: pointer;\n}\n\n:host ::ng-deep ng2-smart-table td.ng2-smart-actions.ng2-smart-action-multiple-select {\n  text-align: center;\n  cursor: pointer;\n}\n\n:host ::ng-deep ng2-smart-table tr.ng2-smart-filters th {\n  text-align: center;\n}\n\n:host ::ng-deep ng2-smart-table tr td:first-of-type,\n:host ::ng-deep ng2-smart-table th:first-of-type {\n  border-left: none;\n}\n\n:host ::ng-deep ng2-smart-table tr td:last-of-type,\n:host ::ng-deep ng2-smart-table th:last-of-type {\n  border-right: none;\n}\n\n:host ::ng-deep ng2-smart-table input[type='checkbox'] {\n  cursor: pointer;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvZC9Xb3JrL0FuZ3VsYXIvTmV3IGZvbGRlciAoMikvRG9sY2VHcm9jZXJ5L3BhY2thZ2VzL2FkbWluLXdlYi1hbmd1bGFyL3NyYy9hcHAvcGFnZXMvK2RldmljZS9kZXZpY2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzLytkZXZpY2UvZGV2aWNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsZ0JBQWdCO0FDQ2pCOztBRENBO0VBQ0MsZ0JBQWdCO0FDRWpCOztBREFBO0VBQ0MsVUFBVTtFQUNWLGlDQUFpQztFQUNqQyxrQ0FBa0M7QUNHbkM7O0FEQUE7RUFFRSxrQkFBa0I7RUFDbEIsZUFBZTtBQ0VqQjs7QURMQTtFQU1HLDJCQUEyQjtFQUMzQixlQUFlO0FDR2xCOztBRFZBO0VBWUUsa0JBQWtCO0VBQ2xCLGVBQWU7QUNFakI7O0FEZkE7RUFpQkUsa0JBQWtCO0FDRXBCOztBRG5CQTs7RUF1QkcsaUJBQWlCO0FDQ3BCOztBRHhCQTs7RUEwQkcsa0JBQWtCO0FDR3JCOztBRDdCQTtFQStCRSxlQUFlO0FDRWpCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvK2RldmljZS9kZXZpY2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJuYi1jYXJkLWhlYWRlciB7XG5cdGJvcmRlci1ib3R0b206IDA7XG59XG4udGl0bGUge1xuXHR0ZXh0LWFsaWduOiBsZWZ0O1xufVxubmItY2FyZC1ib2R5IHtcblx0cGFkZGluZzogMDtcblx0Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMC41cmVtO1xuXHRib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMC41cmVtO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgbmcyLXNtYXJ0LXRhYmxlIHtcblx0dHIubmcyLXNtYXJ0LXRpdGxlcyA+IHRoOm50aC1jaGlsZCgxKSB7XG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdGN1cnNvcjogcG9pbnRlcjtcblxuXHRcdGlucHV0IHtcblx0XHRcdG1hcmdpbi1sZWZ0OiA1cHggIWltcG9ydGFudDtcblx0XHRcdGN1cnNvcjogcG9pbnRlcjtcblx0XHR9XG5cdH1cblxuXHR0ZC5uZzItc21hcnQtYWN0aW9ucy5uZzItc21hcnQtYWN0aW9uLW11bHRpcGxlLXNlbGVjdCB7XG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdGN1cnNvcjogcG9pbnRlcjtcblx0fVxuXG5cdHRyLm5nMi1zbWFydC1maWx0ZXJzIHRoIHtcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdH1cblxuXHR0ciB0ZCxcblx0dGgge1xuXHRcdCY6Zmlyc3Qtb2YtdHlwZSB7XG5cdFx0XHRib3JkZXItbGVmdDogbm9uZTtcblx0XHR9XG5cdFx0JjpsYXN0LW9mLXR5cGUge1xuXHRcdFx0Ym9yZGVyLXJpZ2h0OiBub25lO1xuXHRcdH1cblx0fVxuXG5cdGlucHV0W3R5cGU9J2NoZWNrYm94J10ge1xuXHRcdGN1cnNvcjogcG9pbnRlcjtcblx0fVxufVxuIiwibmItY2FyZC1oZWFkZXIge1xuICBib3JkZXItYm90dG9tOiAwO1xufVxuXG4udGl0bGUge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG5uYi1jYXJkLWJvZHkge1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwLjVyZW07XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwLjVyZW07XG59XG5cbjpob3N0IDo6bmctZGVlcCBuZzItc21hcnQtdGFibGUgdHIubmcyLXNtYXJ0LXRpdGxlcyA+IHRoOm50aC1jaGlsZCgxKSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgbmcyLXNtYXJ0LXRhYmxlIHRyLm5nMi1zbWFydC10aXRsZXMgPiB0aDpudGgtY2hpbGQoMSkgaW5wdXQge1xuICBtYXJnaW4tbGVmdDogNXB4ICFpbXBvcnRhbnQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIG5nMi1zbWFydC10YWJsZSB0ZC5uZzItc21hcnQtYWN0aW9ucy5uZzItc21hcnQtYWN0aW9uLW11bHRpcGxlLXNlbGVjdCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgbmcyLXNtYXJ0LXRhYmxlIHRyLm5nMi1zbWFydC1maWx0ZXJzIHRoIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgbmcyLXNtYXJ0LXRhYmxlIHRyIHRkOmZpcnN0LW9mLXR5cGUsXG46aG9zdCA6Om5nLWRlZXAgbmcyLXNtYXJ0LXRhYmxlIHRoOmZpcnN0LW9mLXR5cGUge1xuICBib3JkZXItbGVmdDogbm9uZTtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIG5nMi1zbWFydC10YWJsZSB0ciB0ZDpsYXN0LW9mLXR5cGUsXG46aG9zdCA6Om5nLWRlZXAgbmcyLXNtYXJ0LXRhYmxlIHRoOmxhc3Qtb2YtdHlwZSB7XG4gIGJvcmRlci1yaWdodDogbm9uZTtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIG5nMi1zbWFydC10YWJsZSBpbnB1dFt0eXBlPSdjaGVja2JveCddIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/pages/+device/device.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/+device/device.component.ts ***!
    \***************************************************/

  /*! exports provided: DeviceComponent */

  /***/
  function srcAppPagesDeviceDeviceComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DeviceComponent", function () {
      return DeviceComponent;
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


    var _core_data_device_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../@core/data/device.service */
    "./src/app/@core/data/device.service.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _device_mutation_device_mutation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./device-mutation/device-mutation.component */
    "./src/app/pages/+device/device-mutation/device-mutation.component.ts");
    /* harmony import */


    var ng2_smart_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ng2-smart-table */
    "./node_modules/ng2-smart-table/fesm2015/ng2-smart-table.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ngx-translate/core */
    "../../node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _core_services_notify_notify_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../@core/services/notify/notify.service */
    "./src/app/@core/services/notify/notify.service.ts");
    /* harmony import */


    var _shared_confirmation_modal_confirmation_modal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../@shared/confirmation-modal/confirmation-modal.component */
    "./src/app/@shared/confirmation-modal/confirmation-modal.component.ts");

    var DeviceComponent_1;

    var DeviceComponent = DeviceComponent_1 = /*#__PURE__*/function () {
      function DeviceComponent(_deviceService, _modalService, _translateService, _notifyService) {
        _classCallCheck(this, DeviceComponent);

        this._deviceService = _deviceService;
        this._modalService = _modalService;
        this._translateService = _translateService;
        this._notifyService = _notifyService;
        this.ngDestroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this._selectedDevices = [];
        this.sourceSmartTable = new ng2_smart_table__WEBPACK_IMPORTED_MODULE_5__["LocalDataSource"]();

        this._loadSmartTableSettings();

        this._setupDataForSmartTable();

        this._listenForEntityLocaleTranslate();

        this._applyTranslationOnSmartTable();
      }

      _createClass(DeviceComponent, [{
        key: "updateDevice",
        value: function updateDevice(device) {
          var activeModal = this._modalService.open(_device_mutation_device_mutation_component__WEBPACK_IMPORTED_MODULE_4__["DeviceMutationComponent"], {
            size: 'lg',
            container: 'nb-layout',
            backdrop: 'static'
          });

          var modalComponent = activeModal.componentInstance;
          modalComponent.device = device;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "edit",
        value: function edit(event) {
          var activeModal = this._modalService.open(_device_mutation_device_mutation_component__WEBPACK_IMPORTED_MODULE_4__["DeviceMutationComponent"], {
            size: 'lg',
            container: 'nb-layout',
            backdrop: 'static'
          });

          var modalComponent = activeModal.componentInstance;
          modalComponent.device = event.data;
          modalComponent.loading = this.loading;
        }
      }, {
        key: "deleteSelectedDevices",
        value: function deleteSelectedDevices() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var idsForDelete, message, _message2;

            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    idsForDelete = this._selectedDevices.map(function (c) {
                      return c.id;
                    });
                    _context2.prev = 1;
                    this.loading = true;
                    _context2.next = 5;
                    return this._deviceService.removeByIds(idsForDelete).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["first"])()).toPromise();

                  case 5:
                    this.loading = false;
                    message = "".concat(idsForDelete.length, " devices was deleted");

                    this._notifyService.success(message);

                    _context2.next = 15;
                    break;

                  case 10:
                    _context2.prev = 10;
                    _context2.t0 = _context2["catch"](1);
                    this.loading = false;
                    _message2 = "Something went wrong!";

                    this._notifyService.error(_message2);

                  case 15:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this, [[1, 10]]);
          }));
        }
      }, {
        key: "selectProductTmp",
        value: function selectProductTmp(ev) {
          this._selectedDevices = ev.selected;
        }
      }, {
        key: "deleteDevice",
        value: function deleteDevice(e) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var _this = this;

            var activeModal, modalComponent;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    activeModal = this._modalService.open(_shared_confirmation_modal_confirmation_modal_component__WEBPACK_IMPORTED_MODULE_10__["ConfimationModalComponent"], {
                      size: 'sm',
                      container: 'nb-layout',
                      backdrop: 'static'
                    });
                    modalComponent = activeModal.componentInstance;
                    _context3.next = 4;
                    return modalComponent.confirmEvent.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(modalComponent.ngDestroy$)).subscribe(function (dataEvent) {
                      var idsArray = [];
                      idsArray.push(e.data.id);

                      try {
                        _this.loading = true;

                        _this._deviceService.removeByIds(idsArray).pipe().toPromise();

                        _this.loading = false;
                        var message = "".concat(idsArray[0], " device was deleted");

                        _this._notifyService.success(message);
                      } catch (error) {
                        _this.loading = false;
                        var _message3 = "Something went wrong!";

                        _this._notifyService.error(_message3);
                      }

                      modalComponent.cancel();
                    });

                  case 4:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "_listenForEntityLocaleTranslate",
        value: function _listenForEntityLocaleTranslate() {
          var _this2 = this;

          this._translateService.onLangChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(this.ngDestroy$)).subscribe(function () {
            _this2._setupDataForSmartTable();

            _this2._loadSmartTableSettings();
          });
        }
      }, {
        key: "_applyTranslationOnSmartTable",
        value: function _applyTranslationOnSmartTable() {
          var _this3 = this;

          this._translateService.onLangChange.subscribe(function () {
            _this3._loadSmartTableSettings();
          });
        }
      }, {
        key: "_loadSmartTableSettings",
        value: function _loadSmartTableSettings() {
          var _this4 = this;

          var columnTitlePrefix = 'CUSTOMERS_VIEW.DEVICE.';

          var getTranslate = function getTranslate(name) {
            return _this4._translateService.get(columnTitlePrefix + name);
          };

          Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["forkJoin"])(getTranslate('ID'), getTranslate('LANGUAGE'), getTranslate('TYPE'), getTranslate('UUID')).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(this.ngDestroy$)).subscribe(function (_ref) {
            var _ref2 = _slicedToArray(_ref, 4),
                id = _ref2[0],
                language = _ref2[1],
                type = _ref2[2],
                uuid = _ref2[3];

            _this4.settingsSmartTable = {
              selectMode: 'multi',
              actions: {
                add: false,
                position: 'left'
              },
              edit: {
                editButtonContent: '<i class="ion-md-create"></i>'
              },
              "delete": {
                deleteButtonContent: '<i class="ion-md-trash"></i>',
                confirmDelete: true
              },
              mode: 'external',
              hideSubHeader: true,
              columns: {
                id: {
                  title: id,
                  filter: false
                },
                language: {
                  title: language,
                  filter: false
                },
                type: {
                  title: type,
                  filter: false
                },
                uuid: {
                  title: uuid,
                  filter: false
                }
              },
              pager: {
                display: true,
                perPage: 5
              }
            };
          });
        }
      }, {
        key: "_setupDataForSmartTable",
        value: function _setupDataForSmartTable() {
          var _this5 = this;

          this._deviceService.getDevices().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(this.ngDestroy$)).subscribe(function (data) {
            var devicesVm = data.map(function (c) {
              return {
                id: c.id,
                language: c.language || DeviceComponent_1.noInfoSign,
                type: c.type || DeviceComponent_1.noInfoSign,
                uuid: c.uuid || DeviceComponent_1.noInfoSign
              };
            });

            _this5.sourceSmartTable.load(devicesVm);
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.ngDestroy$.next();
          this.ngDestroy$.complete();

          if (this.device$) {
            this.device$.unsubscribe();
          }
        }
      }, {
        key: "hasSelectedDevices",
        get: function get() {
          return this._selectedDevices.length > 0;
        }
      }, {
        key: "selectedProducts",
        get: function get() {
          return _toConsumableArray(this._selectedDevices);
        }
      }]);

      return DeviceComponent;
    }();

    DeviceComponent.noInfoSign = '';

    DeviceComponent.ctorParameters = function () {
      return [{
        type: _core_data_device_service__WEBPACK_IMPORTED_MODULE_2__["DeviceService"]
      }, {
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]
      }, {
        type: _core_services_notify_notify_service__WEBPACK_IMPORTED_MODULE_9__["NotifyService"]
      }];
    };

    DeviceComponent = DeviceComponent_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'ea-device',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./device.component.html */
      "../../node_modules/raw-loader/dist/cjs.js!./src/app/pages/+device/device.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./device.component.scss */
      "./src/app/pages/+device/device.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_core_data_device_service__WEBPACK_IMPORTED_MODULE_2__["DeviceService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"], _core_services_notify_notify_service__WEBPACK_IMPORTED_MODULE_9__["NotifyService"]])], DeviceComponent);
    /***/
  },

  /***/
  "./src/app/pages/+device/device.module.ts":
  /*!************************************************!*\
    !*** ./src/app/pages/+device/device.module.ts ***!
    \************************************************/

  /*! exports provided: DeviceModule */

  /***/
  function srcAppPagesDeviceDeviceModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DeviceModule", function () {
      return DeviceModule;
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


    var _theme_theme_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../@theme/theme.module */
    "./src/app/@theme/theme.module.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _device_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./device.component */
    "./src/app/pages/+device/device.component.ts");
    /* harmony import */


    var _device_mutation_device_mutation_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./device-mutation/device-mutation.component */
    "./src/app/pages/+device/device-mutation/device-mutation.component.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngx-translate/core */
    "../../node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var ng2_smart_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ng2-smart-table */
    "./node_modules/ng2-smart-table/fesm2015/ng2-smart-table.js");
    /* harmony import */


    var angular2_toaster__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! angular2-toaster */
    "./node_modules/angular2-toaster/angular2-toaster.js");
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/fesm2015/index.js");
    /* harmony import */


    var _app_core_services_notify_notify_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @app/@core/services/notify/notify.service */
    "./src/app/@core/services/notify/notify.service.ts");
    /* harmony import */


    var _shared_confirmation_modal_confirmation_modal_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../../@shared/confirmation-modal/confirmation-modal.module */
    "./src/app/@shared/confirmation-modal/confirmation-modal.module.ts");

    var routes = [{
      path: '',
      component: _device_component__WEBPACK_IMPORTED_MODULE_5__["DeviceComponent"]
    }];

    var DeviceModule = function DeviceModule() {
      _classCallCheck(this, DeviceModule);
    };

    DeviceModule.routes = routes;
    DeviceModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _theme_theme_module__WEBPACK_IMPORTED_MODULE_3__["ThemeModule"], ng2_smart_table__WEBPACK_IMPORTED_MODULE_8__["Ng2SmartTableModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbSpinnerModule"], _shared_confirmation_modal_confirmation_modal_module__WEBPACK_IMPORTED_MODULE_12__["ConfirmationModalModule"], angular2_toaster__WEBPACK_IMPORTED_MODULE_9__["ToasterModule"].forRoot(), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forChild(), _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes), _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbButtonModule"]],
      providers: [_app_core_services_notify_notify_service__WEBPACK_IMPORTED_MODULE_11__["NotifyService"]],
      declarations: [_device_component__WEBPACK_IMPORTED_MODULE_5__["DeviceComponent"], _device_mutation_device_mutation_component__WEBPACK_IMPORTED_MODULE_6__["DeviceMutationComponent"]],
      entryComponents: [_device_mutation_device_mutation_component__WEBPACK_IMPORTED_MODULE_6__["DeviceMutationComponent"]],
      exports: []
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], DeviceModule);
    /***/
  }
}]);
//# sourceMappingURL=app-pages-device-device-module-es5.js.map