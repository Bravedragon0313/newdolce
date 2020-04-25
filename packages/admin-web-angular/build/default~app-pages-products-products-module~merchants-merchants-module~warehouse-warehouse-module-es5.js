function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~app-pages-products-products-module~merchants-merchants-module~warehouse-warehouse-module"], {
  /***/
  "../../node_modules/raw-loader/dist/cjs.js!./src/app/@shared/product/forms/basic-info/basic-info-form.component.html":
  /*!*********************************************************************************************************************************************************************!*\
    !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/raw-loader/dist/cjs.js!./src/app/@shared/product/forms/basic-info/basic-info-form.component.html ***!
    \*********************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedProductFormsBasicInfoBasicInfoFormComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div\n\tclass=\"col-md-12 col-lg-12 col-sm-12 product-basic-info\"\n\t[formGroup]=\"form\"\n\t*ngIf=\"form\"\n>\n\t<fieldset>\n\t\t<div class=\"form-group row\">\n\t\t\t<label class=\"col-sm-2 control-label\">{{\n\t\t\t\t'Title' | translate\n\t\t\t}}</label>\n\t\t\t<div class=\"col-sm-9\">\n\t\t\t\t<input\n\t\t\t\t\ttype=\"text\"\n\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\tplaceholder=\"{{\n\t\t\t\t\t\t'WAREHOUSE_VIEW.PLACEHOLDER.EXAMPLE' | translate\n\t\t\t\t\t}}\"\n\t\t\t\t\tformControlName=\"title\"\n\t\t\t\t/>\n\n\t\t\t\t<span\n\t\t\t\t\t*ngIf=\"title?.invalid && (title.dirty || title.touched)\"\n\t\t\t\t\tclass=\"alert alert-danger\"\n\t\t\t\t>\n\t\t\t\t\t<span *ngIf=\"title.errors.required\">\n\t\t\t\t\t\t{{\n\t\t\t\t\t\t\t'PRODUCT_TYPE_VIEW.WIZARD_FORM.VALIDATION_MESSAGES.TITLE'\n\t\t\t\t\t\t\t\t| translate\n\t\t\t\t\t\t}}!\n\t\t\t\t\t</span>\n\n\t\t\t\t\t<span *ngIf=\"title.errors.maxlength\">\n\t\t\t\t\t\t{{\n\t\t\t\t\t\t\t'PRODUCT_TYPE_VIEW.WIZARD_FORM.VALIDATION_MESSAGES.THE_LENGHT_OF_THE_TITLE'\n\t\t\t\t\t\t\t\t| translate\n\t\t\t\t\t\t}}\n\t\t\t\t\t</span>\n\t\t\t\t</span>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"form-group row\">\n\t\t\t<label class=\"col-sm-2 control-label\">{{\n\t\t\t\t'Picture Url' | translate\n\t\t\t}}</label>\n\t\t\t<div class=\"col-sm-9\">\n\t\t\t\t<e-cu-file-uploader\n\t\t\t\t\t[placeholder]=\"uploaderPlaceholder\"\n\t\t\t\t\t[fileUrl]=\"imagesUrls\"\n\t\t\t\t\t[locale]=\"locale.value\"\n\t\t\t\t\t(uploadedImgObj)=\"addImageObj($event)\"\n\t\t\t\t></e-cu-file-uploader>\n\n\t\t\t\t<span\n\t\t\t\t\t*ngIf=\"(imagesArr || uploaderChanged) && image.invalid\"\n\t\t\t\t\tclass=\"alert alert-danger\"\n\t\t\t\t>\n\t\t\t\t\t{{\n\t\t\t\t\t\t'PRODUCT_TYPE_VIEW.WIZARD_FORM.VALIDATION_MESSAGES.IMAGE'\n\t\t\t\t\t\t\t| translate\n\t\t\t\t\t}}!\n\t\t\t\t</span>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div\n\t\t\tclass=\"form-group row images-container mt-0\"\n\t\t\t*ngIf=\"imagesArr && imagesArr.length > 0\"\n\t\t>\n\t\t\t<label class=\"col-sm-2 control-label\"></label>\n\t\t\t<div\n\t\t\t\tclass=\"mt-0 images-content mt-2\"\n\t\t\t\t*ngFor=\"let image of imagesArr\"\n\t\t\t>\n\t\t\t\t<div class=\"row preview-img\">\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<img\n\t\t\t\t\t\t\t#productImagePreview\n\t\t\t\t\t\t\tsrc=\"{{ image }}\"\n\t\t\t\t\t\t\talt=\"Invalid image\"\n\t\t\t\t\t\t\tclass=\"img-rounded\"\n\t\t\t\t\t\t\t(load)=\"imgOnLoad()\"\n\t\t\t\t\t\t\t(error)=\"imgOnError()\"\n\t\t\t\t\t\t/>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div\n\t\t\t\t\t\tclass=\"removeIcon pl-2 pr-2\"\n\t\t\t\t\t\t(click)=\"deleteImg(image)\"\n\t\t\t\t\t>\n\t\t\t\t\t\t<div\n\t\t\t\t\t\t\tclass=\"ion-md-remove-circle\"\n\t\t\t\t\t\t\tplaceholder=\"Remove image\"\n\t\t\t\t\t\t\ttitle=\"remove\"\n\t\t\t\t\t\t></div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"form-group row\">\n\t\t\t<label class=\"col-sm-2 control-label\">{{\n\t\t\t\t'Description' | translate\n\t\t\t}}</label>\n\t\t\t<div class=\"col-sm-9\">\n\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t<textarea\n\t\t\t\t\t\trows=\"5\"\n\t\t\t\t\t\tplaceholder=\"{{\n\t\t\t\t\t\t\t'WAREHOUSE_VIEW.PLACEHOLDER.HERE_GOES_A_SHORT_DESCRIPTION'\n\t\t\t\t\t\t\t\t| translate\n\t\t\t\t\t\t}}\"\n\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\tformControlName=\"description\"\n\t\t\t\t\t></textarea>\n\t\t\t\t</div>\n\n\t\t\t\t<span\n\t\t\t\t\t*ngIf=\"\n\t\t\t\t\t\tdescription?.invalid &&\n\t\t\t\t\t\t(description.dirty || description.touched)\n\t\t\t\t\t\"\n\t\t\t\t\tclass=\"alert alert-danger\"\n\t\t\t\t>\n\t\t\t\t\t<span *ngIf=\"description.errors.required\">\n\t\t\t\t\t\t{{\n\t\t\t\t\t\t\t'PRODUCT_TYPE_VIEW.WIZARD_FORM.VALIDATION_MESSAGES.DESCRIPTION'\n\t\t\t\t\t\t\t\t| translate\n\t\t\t\t\t\t}}!\n\t\t\t\t\t</span>\n\n\t\t\t\t\t<span *ngIf=\"description.errors.maxlength\">\n\t\t\t\t\t\t{{\n\t\t\t\t\t\t\t'PRODUCT_TYPE_VIEW.WIZARD_FORM.VALIDATION_MESSAGES.THE_LENGHT_OF_THE_DESCRIPTION'\n\t\t\t\t\t\t\t\t| translate\n\t\t\t\t\t\t}}\n\t\t\t\t\t</span>\n\t\t\t\t</span>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"form-group row\">\n\t\t\t<label class=\"col-sm-2 control-label\">{{\n\t\t\t\t'Details' | translate\n\t\t\t}}</label>\n\t\t\t<div class=\"col-sm-9\">\n\t\t\t\t<input\n\t\t\t\t\ttype=\"text\"\n\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\tplaceholder=\"{{\n\t\t\t\t\t\t'WAREHOUSE_VIEW.PLACEHOLDER.HERE_GOES_A_DETAILS_ABOUT_PRODUCT_(OPTION)'\n\t\t\t\t\t\t\t| translate\n\t\t\t\t\t}}\"\n\t\t\t\t\tformControlName=\"details\"\n\t\t\t\t/>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"form-group row\">\n\t\t\t<label class=\"col-sm-2 control-label\">{{\n\t\t\t\t'CATEGORY' | translate\n\t\t\t}}</label>\n\t\t\t<div class=\"col-sm-9\">\n\t\t\t\t<ss-multiselect-dropdown\n\t\t\t\t\t[texts]=\"{\n\t\t\t\t\t\tdefaultTitle: 'SELECT' | translate,\n\t\t\t\t\t\tsearchEmptyResult:\n\t\t\t\t\t\t\t'WAREHOUSE_VIEW.NEW_PRODUCT.NOTHING_FOUND'\n\t\t\t\t\t\t\t| translate\n\t\t\t\t\t}\"\n\t\t\t\t\t[options]=\"categoryOptions\"\n\t\t\t\t\t[settings]=\"{ displayAllSelectedText: true }\"\n\t\t\t\t\tformControlName=\"selectedProductCategories\"\n\t\t\t\t\tclass=\"categoryOptions-dropdown\"\n\t\t\t\t>\n\t\t\t\t</ss-multiselect-dropdown>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"form-group row\">\n\t\t\t<label class=\"col-sm-2 control-label\">{{\n\t\t\t\t'LANGUAGE' | translate\n\t\t\t}}</label>\n\t\t\t<div class=\"col-sm-9\">\n\t\t\t\t<select class=\"form-control\" formControlName=\"locale\">\n\t\t\t\t\t<option value=\"en-US\">{{ 'ENGLISH' | translate }}</option>\n\t\t\t\t\t<option value=\"he-IL\">{{ 'HEBREW' | translate }}</option>\n\t\t\t\t\t<option value=\"ru-RU\">{{ 'RUSSIAN' | translate }}</option>\n\t\t\t\t\t<option value=\"bg-BG\">{{ 'BULGARIAN' | translate }}</option>\n\t\t\t\t\t<option value=\"es-ES\">{{ 'SPANISH' | translate }}</option>\n\t\t\t\t\t<option value=\"bg-BG\">{{ 'ITALIAN' | translate }}</option>\n\t\t\t\t\t<option value=\"es-ES\">{{ 'FRENCH' | translate }}</option>\n\t\t\t\t</select>\n\t\t\t</div>\n\t\t</div>\n\t</fieldset>\n</div>\n";
    /***/
  },

  /***/
  "../../node_modules/raw-loader/dist/cjs.js!./src/app/@shared/product/forms/products-table/products-table.component.html":
  /*!************************************************************************************************************************************************************************!*\
    !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/raw-loader/dist/cjs.js!./src/app/@shared/product/forms/products-table/products-table.component.html ***!
    \************************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedProductFormsProductsTableProductsTableComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nb-card\n\t[ngClass]=\"boxShadow === 'none' ? 'no-box-shadow' : ''\"\n\t[nbSpinner]=\"loading\"\n>\n\t<ng2-smart-table\n\t\tclass=\"products-table\"\n\t\t[settings]=\"settingsSmartTable\"\n\t\t[source]=\"sourceSmartTable\"\n\t\t(userRowSelect)=\"selectProductTmp($event)\"\n\t\t(edit)=\"edit($event)\"\n\t\t(delete)=\"deleteProduct($event)\"\n\t>\n\t</ng2-smart-table>\n</nb-card>\n";
    /***/
  },

  /***/
  "../../node_modules/raw-loader/dist/cjs.js!./src/app/@shared/render-component/product-categories/product-categories.html":
  /*!*************************************************************************************************************************************************************************!*\
    !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/raw-loader/dist/cjs.js!./src/app/@shared/render-component/product-categories/product-categories.html ***!
    \*************************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedRenderComponentProductCategoriesProductCategoriesHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngFor=\"let category of categoriesArr\">\n\t<img src=\"{{ category.image }}\" alt=\"Category Image\" />\n\t{{ getTranslates(category.name) }}\n</div>\n";
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
  "./src/app/@shared/product/forms/basic-info/basic-info-form.component.scss":
  /*!*********************************************************************************!*\
    !*** ./src/app/@shared/product/forms/basic-info/basic-info-form.component.scss ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedProductFormsBasicInfoBasicInfoFormComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".product-basic-info ::ng-deep .categoryOptions-dropdown .ng-star-inserted {\n  margin-top: 0 !important;\n}\n\n.product-basic-info ::ng-deep .categoryOptions-dropdown .dropdown,\n.product-basic-info ::ng-deep .categoryOptions-dropdown .dropdown-menu {\n  border: 2px solid #dadfe6;\n  border-radius: 0.375rem;\n  background-color: white !important;\n  width: 100%;\n  color: #111111 !important;\n}\n\n.product-basic-info ::ng-deep .categoryOptions-dropdown .dropdown-menu.ng-star-inserted {\n  border: 2px solid #dadfe6 !important;\n}\n\n.product-basic-info ::ng-deep .categoryOptions-dropdown button {\n  color: #111111 !important;\n  margin: 0 !important;\n}\n\n.product-basic-info ::ng-deep .categoryOptions-dropdown div a:hover {\n  background-color: #f0f0f0 !important;\n  color: #111111 !important;\n  font-weight: bold;\n  font-size: 1.05em !important;\n}\n\n.product-basic-info .preview-img {\n  padding-left: 14px;\n  padding-right: 16px;\n}\n\n.product-basic-info .ion-md-remove-circle {\n  font-size: 1rem;\n}\n\n.product-basic-info .img-rounded {\n  max-height: 70px;\n}\n\n.product-basic-info .removeIcon div {\n  cursor: pointer;\n}\n\n.product-basic-info .images-content {\n  margin-left: 16px !important;\n}\n\n.product-basic-info label.control-label {\n  font-size: 1rem;\n}\n\n.product-basic-info span {\n  font-size: 1rem;\n  display: block;\n  margin: 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvZC9Xb3JrL0FuZ3VsYXIvTmV3IGZvbGRlciAoMikvRG9sY2VHcm9jZXJ5L3BhY2thZ2VzL2FkbWluLXdlYi1hbmd1bGFyL3NyYy9hcHAvQHNoYXJlZC9wcm9kdWN0L2Zvcm1zL2Jhc2ljLWluZm8vYmFzaWMtaW5mby1mb3JtLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9Ac2hhcmVkL3Byb2R1Y3QvZm9ybXMvYmFzaWMtaW5mby9iYXNpYy1pbmZvLWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFHRyx3QkFBd0I7QUNEM0I7O0FERkE7O0VBUUcseUJBQXlCO0VBQ3pCLHVCQUF1QjtFQUN2QixrQ0FBa0M7RUFDbEMsV0FBVztFQUNYLHlCQUF5QjtBQ0Q1Qjs7QURYQTtFQWdCRyxvQ0FBb0M7QUNEdkM7O0FEZkE7RUFvQkcseUJBQXlCO0VBQ3pCLG9CQUFvQjtBQ0R2Qjs7QURwQkE7RUEyQkssb0NBQW9DO0VBQ3BDLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsNEJBQTRCO0FDSGpDOztBRDNCQTtFQXFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0FDTnJCOztBRGhDQTtFQTBDRSxlQUFlO0FDTmpCOztBRHBDQTtFQThDRSxnQkFBZ0I7QUNObEI7O0FEeENBO0VBa0RFLGVBQWU7QUNOakI7O0FENUNBO0VBc0RFLDRCQUE0QjtBQ045Qjs7QURoREE7RUF5REUsZUFBZTtBQ0xqQjs7QURwREE7RUE2REUsZUFBZTtFQUNmLGNBQWM7RUFDZCxTQUFTO0FDTFgiLCJmaWxlIjoic3JjL2FwcC9Ac2hhcmVkL3Byb2R1Y3QvZm9ybXMvYmFzaWMtaW5mby9iYXNpYy1pbmZvLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZHVjdC1iYXNpYy1pbmZvIHtcblx0OjpuZy1kZWVwIC5jYXRlZ29yeU9wdGlvbnMtZHJvcGRvd24ge1xuXHRcdC5uZy1zdGFyLWluc2VydGVkIHtcblx0XHRcdG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcblx0XHR9XG5cblx0XHQuZHJvcGRvd24sXG5cdFx0LmRyb3Bkb3duLW1lbnUge1xuXHRcdFx0Ym9yZGVyOiAycHggc29saWQgI2RhZGZlNjtcblx0XHRcdGJvcmRlci1yYWRpdXM6IDAuMzc1cmVtO1xuXHRcdFx0YmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcblx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0Y29sb3I6ICMxMTExMTEgIWltcG9ydGFudDtcblx0XHR9XG5cblx0XHQuZHJvcGRvd24tbWVudS5uZy1zdGFyLWluc2VydGVkIHtcblx0XHRcdGJvcmRlcjogMnB4IHNvbGlkICNkYWRmZTYgIWltcG9ydGFudDtcblx0XHR9XG5cblx0XHRidXR0b24ge1xuXHRcdFx0Y29sb3I6ICMxMTExMTEgIWltcG9ydGFudDtcblx0XHRcdG1hcmdpbjogMCAhaW1wb3J0YW50O1xuXHRcdFx0Ly8gYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcblx0XHR9XG5cdFx0ZGl2IHtcblx0XHRcdGEge1xuXHRcdFx0XHQmOmhvdmVyIHtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwICFpbXBvcnRhbnQ7XG5cdFx0XHRcdFx0Y29sb3I6ICMxMTExMTEgIWltcG9ydGFudDtcblx0XHRcdFx0XHRmb250LXdlaWdodDogYm9sZDtcblx0XHRcdFx0XHRmb250LXNpemU6IDEuMDVlbSAhaW1wb3J0YW50O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0LnByZXZpZXctaW1nIHtcblx0XHRwYWRkaW5nLWxlZnQ6IDE0cHg7XG5cdFx0cGFkZGluZy1yaWdodDogMTZweDtcblx0fVxuXG5cdC5pb24tbWQtcmVtb3ZlLWNpcmNsZSB7XG5cdFx0Zm9udC1zaXplOiAxcmVtO1xuXHR9XG5cblx0LmltZy1yb3VuZGVkIHtcblx0XHRtYXgtaGVpZ2h0OiA3MHB4O1xuXHR9XG5cblx0LnJlbW92ZUljb24gZGl2IHtcblx0XHRjdXJzb3I6IHBvaW50ZXI7XG5cdH1cblxuXHQuaW1hZ2VzLWNvbnRlbnQge1xuXHRcdG1hcmdpbi1sZWZ0OiAxNnB4ICFpbXBvcnRhbnQ7XG5cdH1cblx0bGFiZWwuY29udHJvbC1sYWJlbCB7XG5cdFx0Zm9udC1zaXplOiAxcmVtO1xuXHR9XG5cblx0c3BhbiB7XG5cdFx0Zm9udC1zaXplOiAxcmVtO1xuXHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdG1hcmdpbjogMDtcblx0fVxufVxuIiwiLnByb2R1Y3QtYmFzaWMtaW5mbyA6Om5nLWRlZXAgLmNhdGVnb3J5T3B0aW9ucy1kcm9wZG93biAubmctc3Rhci1pbnNlcnRlZCB7XG4gIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcbn1cblxuLnByb2R1Y3QtYmFzaWMtaW5mbyA6Om5nLWRlZXAgLmNhdGVnb3J5T3B0aW9ucy1kcm9wZG93biAuZHJvcGRvd24sXG4ucHJvZHVjdC1iYXNpYy1pbmZvIDo6bmctZGVlcCAuY2F0ZWdvcnlPcHRpb25zLWRyb3Bkb3duIC5kcm9wZG93bi1tZW51IHtcbiAgYm9yZGVyOiAycHggc29saWQgI2RhZGZlNjtcbiAgYm9yZGVyLXJhZGl1czogMC4zNzVyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxMDAlO1xuICBjb2xvcjogIzExMTExMSAhaW1wb3J0YW50O1xufVxuXG4ucHJvZHVjdC1iYXNpYy1pbmZvIDo6bmctZGVlcCAuY2F0ZWdvcnlPcHRpb25zLWRyb3Bkb3duIC5kcm9wZG93bi1tZW51Lm5nLXN0YXItaW5zZXJ0ZWQge1xuICBib3JkZXI6IDJweCBzb2xpZCAjZGFkZmU2ICFpbXBvcnRhbnQ7XG59XG5cbi5wcm9kdWN0LWJhc2ljLWluZm8gOjpuZy1kZWVwIC5jYXRlZ29yeU9wdGlvbnMtZHJvcGRvd24gYnV0dG9uIHtcbiAgY29sb3I6ICMxMTExMTEgIWltcG9ydGFudDtcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG59XG5cbi5wcm9kdWN0LWJhc2ljLWluZm8gOjpuZy1kZWVwIC5jYXRlZ29yeU9wdGlvbnMtZHJvcGRvd24gZGl2IGE6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjMTExMTExICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDEuMDVlbSAhaW1wb3J0YW50O1xufVxuXG4ucHJvZHVjdC1iYXNpYy1pbmZvIC5wcmV2aWV3LWltZyB7XG4gIHBhZGRpbmctbGVmdDogMTRweDtcbiAgcGFkZGluZy1yaWdodDogMTZweDtcbn1cblxuLnByb2R1Y3QtYmFzaWMtaW5mbyAuaW9uLW1kLXJlbW92ZS1jaXJjbGUge1xuICBmb250LXNpemU6IDFyZW07XG59XG5cbi5wcm9kdWN0LWJhc2ljLWluZm8gLmltZy1yb3VuZGVkIHtcbiAgbWF4LWhlaWdodDogNzBweDtcbn1cblxuLnByb2R1Y3QtYmFzaWMtaW5mbyAucmVtb3ZlSWNvbiBkaXYge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5wcm9kdWN0LWJhc2ljLWluZm8gLmltYWdlcy1jb250ZW50IHtcbiAgbWFyZ2luLWxlZnQ6IDE2cHggIWltcG9ydGFudDtcbn1cblxuLnByb2R1Y3QtYmFzaWMtaW5mbyBsYWJlbC5jb250cm9sLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuXG4ucHJvZHVjdC1iYXNpYy1pbmZvIHNwYW4ge1xuICBmb250LXNpemU6IDFyZW07XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDA7XG59XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/@shared/product/forms/basic-info/basic-info-form.component.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/@shared/product/forms/basic-info/basic-info-form.component.ts ***!
    \*******************************************************************************/

  /*! exports provided: BasicInfoFormComponent */

  /***/
  function srcAppSharedProductFormsBasicInfoBasicInfoFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BasicInfoFormComponent", function () {
      return BasicInfoFormComponent;
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


    var _modules_server_common_entities_Product__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @modules/server.common/entities/Product */
    "../common/src/entities/Product.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _modules_client_common_angular2_locale_product_locales_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @modules/client.common.angular2/locale/product-locales.service */
    "../common-angular/src/locale/product-locales.service.ts");
    /* harmony import */


    var _forms_helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../forms/helpers */
    "./src/app/@shared/forms/helpers.ts");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! lodash */
    "./node_modules/lodash/lodash.js");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);
    /* harmony import */


    var is_url__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! is-url */
    "../../node_modules/is-url/index.js");
    /* harmony import */


    var is_url__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(is_url__WEBPACK_IMPORTED_MODULE_8__);
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ngx-translate/core */
    "../../node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");

    var BasicInfoFormComponent_1;

    var BasicInfoFormComponent = BasicInfoFormComponent_1 = /*#__PURE__*/function () {
      function BasicInfoFormComponent(_productLocalesService, _translateService) {
        _classCallCheck(this, BasicInfoFormComponent);

        this._productLocalesService = _productLocalesService;
        this._translateService = _translateService;
        this.actualCategories = [];
        this._ngDestroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.images = [];
        this.getUploaderPlaceholderText();
      }

      _createClass(BasicInfoFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          if (this.productCategories) {
            this.categoryOptions = this.productCategories.map(function (category) {
              return {
                id: category.id,
                name: category.name[0].value
              };
            });
          }

          this._bindFormControls();

          this._setDefaultLocaleValue();

          this.onLocaleChanges = this.locale.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["takeUntil"])(this._ngDestroy$)).subscribe(function (v) {
            if (v !== _this._productLocalesService.currentLocale) {
              _this._productLocalesService.currentLocale = v;

              _this.setValue(_this.product);
            }
          });
          this.laodData();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.onLocaleChanges.unsubscribe();
          this.form.reset();

          this._ngDestroy$.next();

          this._ngDestroy$.complete();
        }
      }, {
        key: "deleteImg",
        value: function deleteImg(image) {
          this.images = this.images.filter(function (i) {
            return i.url !== image;
          });
          this.image.setValue(this.imagesUrls);
        }
      }, {
        key: "addImageObj",
        value: function addImageObj(imgData) {
          this.uploaderChanged = true;

          if (imgData) {
            var existData = this.images.find(function (i) {
              return i.url === imgData.url;
            });

            if (!existData) {
              this.images.push(imgData);
              this.image.setValue(imgData.url);
            }
          }
        }
      }, {
        key: "getValue",
        value: function getValue() {
          return this.form.getRawValue();
        }
      }, {
        key: "setValue",
        value: function setValue(product) {
          var _this2 = this;

          if (this.productCategories) {
            this.categoryOptions = this.productCategories.map(function (category) {
              return {
                id: category.id,
                name: category.name[0].value
              };
            });
          }

          _forms_helpers__WEBPACK_IMPORTED_MODULE_6__["FormHelpers"].deepMark(this.form, 'dirty');

          if (!this.product) {
            this.product = product;
          }

          if (this.product) {
            var image = '';
            var imgs = product.images.filter(function (i) {
              return i.locale === _this2.locale.value;
            });

            if (imgs) {
              image = imgs.map(function (i) {
                return i.url;
              }).join(' ');
            }

            this.images = imgs;
            var product1 = {
              title: this._productLocalesService.getMemberValue(product.title),
              description: this._productLocalesService.getMemberValue(product.description),
              details: this._productLocalesService.getMemberValue(product.details),
              image: image,
              locale: this.locale.value,
              selectedProductCategories: _toConsumableArray(this.product.categories)
            };
            this.form.setValue(lodash__WEBPACK_IMPORTED_MODULE_7___default.a.pick(product1, Object.keys(this.getValue())));
          }
        }
      }, {
        key: "setupProductCreateObject",
        value: function setupProductCreateObject() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this3 = this;

            var productLocale, productImages, productTitle, productDescription, productDetails, productCreateObject;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this._bindModelProperties();

                    productLocale = this._locale;
                    productImages = this.images.filter(function (i) {
                      return i.locale === productLocale && is_url__WEBPACK_IMPORTED_MODULE_8___default()(i.url);
                    });
                    productTitle = {
                      locale: productLocale,
                      value: this._title
                    };
                    productDescription = {
                      locale: productLocale,
                      value: this._description
                    };
                    productDetails = {
                      locale: productLocale,
                      value: this._details || ''
                    };
                    productCreateObject = {
                      title: [productTitle],
                      description: [productDescription],
                      details: [productDetails],
                      categories: this.actualCategories.map(function (c) {
                        return {
                          _id: c.id,
                          name: c.name
                        };
                      }),
                      images: productImages
                    };

                    if (this.product) {
                      productCreateObject = {
                        title: [].concat(_toConsumableArray(this.product.title.filter(function (t) {
                          return t.locale !== _this3._locale;
                        }).map(function (t) {
                          return {
                            locale: t.locale,
                            value: t.value
                          };
                        })), [productTitle]),
                        description: [].concat(_toConsumableArray(this.product.description.filter(function (d) {
                          return d.locale !== _this3._locale;
                        }).map(function (d) {
                          return {
                            locale: d.locale,
                            value: d.value
                          };
                        })), [productDescription]),
                        details: [].concat(_toConsumableArray(this.product.details.filter(function (d) {
                          return d.locale !== _this3._locale;
                        }).map(function (d) {
                          return {
                            locale: d.locale,
                            value: d.value
                          };
                        })), [productDetails]),
                        categories: this.actualCategories.map(function (c) {
                          return {
                            _id: c.id,
                            name: c.name
                          };
                        }),
                        images: [].concat(_toConsumableArray(this.product.images.filter(function (i) {
                          return i.locale !== _this3._locale;
                        }).map(function (i) {
                          return _this3.getProductImage(i);
                        })), _toConsumableArray(productImages.map(function (i) {
                          return _this3.getProductImage(i);
                        })))
                      };
                    }

                    return _context.abrupt("return", productCreateObject);

                  case 9:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "imgOnLoad",
        value: function imgOnLoad() {
          this.imageControl.setErrors(null);
        }
      }, {
        key: "imgOnError",
        value: function imgOnError() {
          if (this.imageControl.value !== '') {
            var hasImage = BasicInfoFormComponent_1.hasValidImage(this.image.value);

            if (hasImage) {
              this.imageControl.setErrors(null);
            } else {
              this.imageControl.setErrors({
                invalidUrl: true
              });
            }
          }
        }
      }, {
        key: "_setDefaultLocaleValue",
        value: function _setDefaultLocaleValue() {
          this.locale.setValue('en-US');
        }
      }, {
        key: "_bindFormControls",
        value: function _bindFormControls() {
          this.title = this._getFormControlByName('title');
          this.description = this._getFormControlByName('description');
          this.details = this._getFormControlByName('details');
          this.image = this._getFormControlByName('image');
          this.category = this._getFormControlByName('category');
          this.locale = this._getFormControlByName('locale');
          this.selectedProductCategories = this._getFormControlByName('selectedProductCategories');
        }
      }, {
        key: "_getFormControlByName",
        value: function _getFormControlByName(controlName) {
          return this.form.get(controlName);
        }
      }, {
        key: "_bindModelProperties",
        value: function _bindModelProperties() {
          var _this4 = this;

          var getInputVal = function getInputVal(name) {
            return _this4._getFormControlByName(name).value;
          };

          this._selectedProductCategories = getInputVal('selectedProductCategories');
          this.actualCategories = [];

          if (this._selectedProductCategories) {
            var _iterator = _createForOfIteratorHelper(this._selectedProductCategories),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var val = _step.value;

                var _iterator2 = _createForOfIteratorHelper(this.productCategories),
                    _step2;

                try {
                  for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                    var val1 = _step2.value;

                    if (val === val1.id) {
                      var newObj = {};
                      newObj.name = [];
                      newObj.id = val1.id;

                      for (var i = 0; i < val1.name.length; i++) {
                        newObj.name[i] = {};
                        newObj.name[i].locale = val1.name[i].locale;
                        newObj.name[i].value = val1.name[i].value;
                      }

                      this.actualCategories.push(newObj);
                    }
                  }
                } catch (err) {
                  _iterator2.e(err);
                } finally {
                  _iterator2.f();
                }
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          }

          this._title = getInputVal('title');
          this._description = getInputVal('description');
          this._details = getInputVal('details');
          this._image = getInputVal('image');
          this._locale = getInputVal('locale');
        }
      }, {
        key: "getUploaderPlaceholderText",
        value: function getUploaderPlaceholderText() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this._translateService.get('WAREHOUSE_VIEW.PLACEHOLDER.IMAGE_URL').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["first"])()).toPromise();

                  case 2:
                    this.uploaderPlaceholder = _context2.sent;

                  case 3:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "getProductImage",
        value: function getProductImage(data) {
          return {
            locale: data.locale,
            url: data.url,
            orientation: data.orientation,
            width: data.width,
            height: data.height
          };
        }
      }, {
        key: "laodData",
        value: function laodData() {
          if (this.currentProduct) {
            this.setValue(this.currentProduct);
          }
        }
      }, {
        key: "imageControl",
        get: function get() {
          return this.form.get('image');
        }
      }, {
        key: "imagesUrls",
        get: function get() {
          return this.images ? this.images.map(function (i) {
            return i.url;
          }).join(' ') : '';
        }
      }, {
        key: "imagesArr",
        get: function get() {
          if (this.imagesUrls) {
            var imagesStr = this.imagesUrls;
            var imageUrls = imagesStr.split(/\s+/);
            imageUrls = imageUrls.filter(function (a) {
              return a.trim() !== '';
            });
            return imageUrls;
          }

          return null;
        }
      }], [{
        key: "hasValidImage",
        value: function hasValidImage(images) {
          if (images) {
            var imageUrls = images.toString().split(/\s+/);
            imageUrls = imageUrls.filter(function (a) {
              return a.toString().trim() !== '';
            });

            if (imageUrls.length > 0) {
              var _iterator3 = _createForOfIteratorHelper(imageUrls),
                  _step3;

              try {
                for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                  var imageUrl = _step3.value;

                  if (is_url__WEBPACK_IMPORTED_MODULE_8___default()(imageUrl)) {
                    return true;
                  }
                }
              } catch (err) {
                _iterator3.e(err);
              } finally {
                _iterator3.f();
              }
            }
          }

          return false;
        }
      }, {
        key: "buildForm",
        value: function buildForm(formBuilder) {
          return formBuilder.group({
            title: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(255)]],
            description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(255)]],
            details: [''],
            locale: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            selectedProductCategories: [[]],
            image: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, function (control) {
              var value = control.value;
              var hasImage = BasicInfoFormComponent_1.hasValidImage(value);

              if (hasImage) {
                return null;
              } else {
                return {
                  invalidImageUrl: true
                };
              }
            }]]
          });
        }
      }]);

      return BasicInfoFormComponent;
    }();

    BasicInfoFormComponent.ctorParameters = function () {
      return [{
        type: _modules_client_common_angular2_locale_product_locales_service__WEBPACK_IMPORTED_MODULE_5__["ProductLocalesService"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('fileInput'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], BasicInfoFormComponent.prototype, "fileInput", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('productImagePreview'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], BasicInfoFormComponent.prototype, "productImagePreview", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"])], BasicInfoFormComponent.prototype, "form", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], BasicInfoFormComponent.prototype, "productCategories", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _modules_server_common_entities_Product__WEBPACK_IMPORTED_MODULE_3__["default"])], BasicInfoFormComponent.prototype, "currentProduct", void 0);
    BasicInfoFormComponent = BasicInfoFormComponent_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'ea-product-basic-info-form',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./basic-info-form.component.html */
      "../../node_modules/raw-loader/dist/cjs.js!./src/app/@shared/product/forms/basic-info/basic-info-form.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./basic-info-form.component.scss */
      "./src/app/@shared/product/forms/basic-info/basic-info-form.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_modules_client_common_angular2_locale_product_locales_service__WEBPACK_IMPORTED_MODULE_5__["ProductLocalesService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateService"]])], BasicInfoFormComponent);
    /***/
  },

  /***/
  "./src/app/@shared/product/forms/basic-info/index.ts":
  /*!***********************************************************!*\
    !*** ./src/app/@shared/product/forms/basic-info/index.ts ***!
    \***********************************************************/

  /*! exports provided: BasicInfoFormComponent */

  /***/
  function srcAppSharedProductFormsBasicInfoIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _basic_info_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./basic-info-form.component */
    "./src/app/@shared/product/forms/basic-info/basic-info-form.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "BasicInfoFormComponent", function () {
      return _basic_info_form_component__WEBPACK_IMPORTED_MODULE_1__["BasicInfoFormComponent"];
    });
    /***/

  },

  /***/
  "./src/app/@shared/product/forms/index.ts":
  /*!************************************************!*\
    !*** ./src/app/@shared/product/forms/index.ts ***!
    \************************************************/

  /*! exports provided: BasicInfoFormComponent, ProductFormsModule */

  /***/
  function srcAppSharedProductFormsIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _basic_info__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./basic-info */
    "./src/app/@shared/product/forms/basic-info/index.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "BasicInfoFormComponent", function () {
      return _basic_info__WEBPACK_IMPORTED_MODULE_1__["BasicInfoFormComponent"];
    });
    /* harmony import */


    var _product_forms_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./product-forms.module */
    "./src/app/@shared/product/forms/product-forms.module.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ProductFormsModule", function () {
      return _product_forms_module__WEBPACK_IMPORTED_MODULE_2__["ProductFormsModule"];
    });
    /***/

  },

  /***/
  "./src/app/@shared/product/forms/product-forms.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/@shared/product/forms/product-forms.module.ts ***!
    \***************************************************************/

  /*! exports provided: ProductFormsModule */

  /***/
  function srcAppSharedProductFormsProductFormsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductFormsModule", function () {
      return ProductFormsModule;
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


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngx-translate/core */
    "../../node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var angular2_wizard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! angular2-wizard */
    "./node_modules/@ever-co/angular2-wizard/dist/index.js");
    /* harmony import */


    var angular2_wizard__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_wizard__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _theme_theme_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../@theme/theme.module */
    "./src/app/@theme/theme.module.ts");
    /* harmony import */


    var _basic_info__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./basic-info */
    "./src/app/@shared/product/forms/basic-info/index.ts");
    /* harmony import */


    var _products_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./products-table */
    "./src/app/@shared/product/forms/products-table/index.ts");
    /* harmony import */


    var ng2_smart_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ng2-smart-table */
    "./node_modules/ng2-smart-table/fesm2015/ng2-smart-table.js");
    /* harmony import */


    var angular_2_dropdown_multiselect__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! angular-2-dropdown-multiselect */
    "./node_modules/angular-2-dropdown-multiselect/fesm2015/angular-2-dropdown-multiselect.js");
    /* harmony import */


    var _render_component_product_categories_product_categories_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../render-component/product-categories/product-categories.module */
    "./src/app/@shared/render-component/product-categories/product-categories.module.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/fesm2015/index.js");
    /* harmony import */


    var _confirmation_modal_confirmation_modal_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../../confirmation-modal/confirmation-modal.module */
    "./src/app/@shared/confirmation-modal/confirmation-modal.module.ts");
    /* harmony import */


    var _app_shared_render_component_render_components_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @app/@shared/render-component/render-components.module */
    "./src/app/@shared/render-component/render-components.module.ts");
    /* harmony import */


    var _app_shared_file_uploader_file_uploader_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @app/@shared/file-uploader/file-uploader.module */
    "./src/app/@shared/file-uploader/file-uploader.module.ts");

    var ProductFormsModule = function ProductFormsModule() {
      _classCallCheck(this, ProductFormsModule);
    };

    ProductFormsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_theme_theme_module__WEBPACK_IMPORTED_MODULE_4__["ThemeModule"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"], angular2_wizard__WEBPACK_IMPORTED_MODULE_3__["FormWizardModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"].forChild(), angular_2_dropdown_multiselect__WEBPACK_IMPORTED_MODULE_8__["MultiselectDropdownModule"], ng2_smart_table__WEBPACK_IMPORTED_MODULE_7__["Ng2SmartTableModule"], _app_shared_file_uploader_file_uploader_module__WEBPACK_IMPORTED_MODULE_14__["FileUploaderModule"], _render_component_product_categories_product_categories_module__WEBPACK_IMPORTED_MODULE_9__["ProductCategoriesModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_11__["NbSpinnerModule"], _confirmation_modal_confirmation_modal_module__WEBPACK_IMPORTED_MODULE_12__["ConfirmationModalModule"], _app_shared_render_component_render_components_module__WEBPACK_IMPORTED_MODULE_13__["RenderComponentsModule"]],
      exports: [_basic_info__WEBPACK_IMPORTED_MODULE_5__["BasicInfoFormComponent"], _products_table__WEBPACK_IMPORTED_MODULE_6__["ProductsTableComponent"]],
      declarations: [_basic_info__WEBPACK_IMPORTED_MODULE_5__["BasicInfoFormComponent"], _products_table__WEBPACK_IMPORTED_MODULE_6__["ProductsTableComponent"]]
    })], ProductFormsModule);
    /***/
  },

  /***/
  "./src/app/@shared/product/forms/products-table/index.ts":
  /*!***************************************************************!*\
    !*** ./src/app/@shared/product/forms/products-table/index.ts ***!
    \***************************************************************/

  /*! exports provided: ProductsTableComponent */

  /***/
  function srcAppSharedProductFormsProductsTableIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _products_table_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./products-table.component */
    "./src/app/@shared/product/forms/products-table/products-table.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ProductsTableComponent", function () {
      return _products_table_component__WEBPACK_IMPORTED_MODULE_1__["ProductsTableComponent"];
    });
    /***/

  },

  /***/
  "./src/app/@shared/product/forms/products-table/products-table.component.scss":
  /*!************************************************************************************!*\
    !*** ./src/app/@shared/product/forms/products-table/products-table.component.scss ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedProductFormsProductsTableProductsTableComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "nb-card {\n  margin-bottom: 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvZC9Xb3JrL0FuZ3VsYXIvTmV3IGZvbGRlciAoMikvRG9sY2VHcm9jZXJ5L3BhY2thZ2VzL2FkbWluLXdlYi1hbmd1bGFyL3NyYy9hcHAvQHNoYXJlZC9wcm9kdWN0L2Zvcm1zL3Byb2R1Y3RzLXRhYmxlL3Byb2R1Y3RzLXRhYmxlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9Ac2hhcmVkL3Byb2R1Y3QvZm9ybXMvcHJvZHVjdHMtdGFibGUvcHJvZHVjdHMtdGFibGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxnQkFBZ0I7QUNDakIiLCJmaWxlIjoic3JjL2FwcC9Ac2hhcmVkL3Byb2R1Y3QvZm9ybXMvcHJvZHVjdHMtdGFibGUvcHJvZHVjdHMtdGFibGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJuYi1jYXJkIHtcblx0bWFyZ2luLWJvdHRvbTogMDtcbn1cbiIsIm5iLWNhcmQge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/@shared/product/forms/products-table/products-table.component.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/@shared/product/forms/products-table/products-table.component.ts ***!
    \**********************************************************************************/

  /*! exports provided: ProductsTableComponent */

  /***/
  function srcAppSharedProductFormsProductsTableProductsTableComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductsTableComponent", function () {
      return ProductsTableComponent;
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


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var ng2_smart_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ng2-smart-table */
    "./node_modules/ng2-smart-table/fesm2015/ng2-smart-table.js");
    /* harmony import */


    var _core_data_products_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../@core/data/products.service */
    "./src/app/@core/data/products.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngx-translate/core */
    "../../node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _modules_client_common_angular2_locale_product_locales_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @modules/client.common.angular2/locale/product-locales.service */
    "../common-angular/src/locale/product-locales.service.ts");
    /* harmony import */


    var _render_component_product_categories_product_categories__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../../render-component/product-categories/product-categories */
    "./src/app/@shared/render-component/product-categories/product-categories.ts");
    /* harmony import */


    var _core_data_productsCategory_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../../../@core/data/productsCategory.service */
    "./src/app/@core/data/productsCategory.service.ts");
    /* harmony import */


    var _app_core_services_notify_notify_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @app/@core/services/notify/notify.service */
    "./src/app/@core/services/notify/notify.service.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _confirmation_modal_confirmation_modal_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ../../../confirmation-modal/confirmation-modal.component */
    "./src/app/@shared/confirmation-modal/confirmation-modal.component.ts");
    /* harmony import */


    var _app_shared_render_component_product_checkbox_product_checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @app/@shared/render-component/product-checkbox/product-checkbox */
    "./src/app/@shared/render-component/product-checkbox/product-checkbox.ts");
    /* harmony import */


    var _app_shared_render_component_product_title_product_title_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @app/@shared/render-component/product-title/product-title.component */
    "./src/app/@shared/render-component/product-title/product-title.component.ts");
    /* harmony import */


    var _app_shared_render_component_product_image_product_image_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @app/@shared/render-component/product-image/product-image.component */
    "./src/app/@shared/render-component/product-image/product-image.component.ts");

    var ProductsTableComponent_1;

    var ProductsTableComponent = ProductsTableComponent_1 = /*#__PURE__*/function () {
      function ProductsTableComponent(_sanitizer, _productsService, _router, _translateService, _productLocalesService, _productsCategoryService, _notifyService, modalService) {
        _classCallCheck(this, ProductsTableComponent);

        this._sanitizer = _sanitizer;
        this._productsService = _productsService;
        this._router = _router;
        this._translateService = _translateService;
        this._productLocalesService = _productLocalesService;
        this._productsCategoryService = _productsCategoryService;
        this._notifyService = _notifyService;
        this.modalService = modalService;
        this.sourceSmartTable = new ng2_smart_table__WEBPACK_IMPORTED_MODULE_3__["LocalDataSource"]();
        this.selectProducts$ = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.pagesChanges$ = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.perPage = 0;
        this._selectedProducts = [];
        this.ngDestroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
      }

      _createClass(ProductsTableComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getCategories();

          this._loadSettingsSmartTable();

          this._applyTranslationOnSmartTable();

          this.smartTableChange();
        }
      }, {
        key: "edit",
        value: function edit(event) {
          this._router.navigate(['/products/list/' + event.data.id + '/edit']);
        }
      }, {
        key: "deleteProduct",
        value: function deleteProduct(event) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var _this5 = this;

            var activeModal, modalComponent;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    activeModal = this.modalService.open(_confirmation_modal_confirmation_modal_component__WEBPACK_IMPORTED_MODULE_14__["ConfimationModalComponent"], {
                      size: 'sm',
                      container: 'nb-layout',
                      backdrop: 'static'
                    });
                    modalComponent = activeModal.componentInstance;
                    _context3.next = 4;
                    return modalComponent.confirmEvent.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(modalComponent.ngDestroy$)).subscribe(function (dataEvent) {
                      try {
                        _this5.loading = true;
                        var productTitle = event.data.title || ProductsTableComponent_1.noInfoSign;

                        _this5._productsService.removeByIds([event.data.id]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["first"])()).toPromise();

                        _this5.loading = false;
                        var message = "Product ".concat(productTitle, " is deleted");

                        _this5._notifyService.success(message);
                      } catch (error) {
                        var _message = "Something went wrong";

                        if (error.message === 'Validation error') {
                          _message = error.message;
                        }

                        _this5.loading = false;

                        _this5._notifyService.error(_message);
                      }

                      modalComponent.cancel();
                    });

                  case 4:
                    this.confirmSub$ = _context3.sent;

                  case 5:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "getCategories",
        value: function getCategories() {
          var _this6 = this;

          this._productsCategoryService.getCategories().subscribe(function (categories) {
            _this6.categoriesInfo = categories;

            _this6.loadDataSmartTable(_this6.products || [], _this6.dataCount || 0);
          });
        }
      }, {
        key: "selectProductTmp",
        value: function selectProductTmp(ev) {
          if (ev.data) {
            this.selectProducts$.emit({
              current: ev.data,
              allData: ev.source.data
            });
          }
        }
      }, {
        key: "loadDataSmartTable",
        value: function loadDataSmartTable(products, dataCount) {
          var page = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var _this7 = this;

            var productsVM, productsData;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    this.dataCount = dataCount;
                    this.products = products;
                    productsVM = products.map(function (product) {
                      return {
                        checked: _this7.selectedProducts.find(function (d) {
                          return d.id === product['id'];
                        }),
                        title: _this7.localeTranslate(product.title) || ProductsTableComponent_1.noInfoSign,
                        description: _this7.localeTranslate(product.description) || ProductsTableComponent_1.noInfoSign,
                        details: product.details[0] ? _this7.localeTranslate(product.details) || ProductsTableComponent_1.noInfoSign : ProductsTableComponent_1.noInfoSign,
                        categories: {
                          ids: product.categories,
                          search: _this7.categoriesInfo && _this7.categoriesInfo.filter(function (c) {
                            return product.categories.includes(c.id);
                          }).map(function (c) {
                            return _this7._productLocalesService.getTranslate(c.name);
                          }).toString()
                        },
                        image: _this7.localeTranslate(product.images) || ProductsTableComponent_1.noInfoSign,
                        id: product.id,
                        allCategories: _this7.categoriesInfo
                      };
                    });
                    productsVM = productsVM.filter(function (p) {
                      return p;
                    });

                    if (this.$subSlectProducts) {
                      this.$subSlectProducts.unsubscribe();
                    }

                    this.$subSlectProducts = this.selectProducts$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.ngDestroy$)).subscribe(function (_ref) {
                      var current = _ref.current,
                          allData = _ref.allData;
                      allData.find(function (d) {
                        return d && d.id === current['id'];
                      })['checked'] = !current.checked;

                      if (current.checked) {
                        _this7._selectedProducts.push(current);
                      } else {
                        _this7._selectedProducts = _this7._selectedProducts.filter(function (p) {
                          return p.id !== current.id;
                        });
                      }

                      _this7.sourceSmartTable.load(allData);
                    });
                    productsData = new Array(dataCount);
                    productsData.splice.apply(productsData, [this.perPage * (page - 1), this.perPage].concat(_toConsumableArray(productsVM)));
                    this.sourceSmartTable.load(productsData);

                  case 9:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "localeTranslate",
        value: function localeTranslate(member) {
          return this._productLocalesService.getTranslate(member);
        }
      }, {
        key: "smartTableChange",
        value: function smartTableChange() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
            var _this8 = this;

            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    this.sourceSmartTable.onChanged().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.ngDestroy$)).subscribe(function (event) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this8, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
                        var page;
                        return regeneratorRuntime.wrap(function _callee5$(_context5) {
                          while (1) {
                            switch (_context5.prev = _context5.next) {
                              case 0:
                                if (event.action === 'page') {
                                  page = event.paging.page;
                                  this.pagesChanges$.emit(page);
                                }

                              case 1:
                              case "end":
                                return _context5.stop();
                            }
                          }
                        }, _callee5, this);
                      }));
                    });

                  case 1:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }, {
        key: "_loadSettingsSmartTable",
        value: function _loadSettingsSmartTable() {
          var _this9 = this;

          var columnTitlePrefix = 'WAREHOUSE_VIEW.SELECT_PRODUCTS.';

          var getTranslate = function getTranslate(name) {
            return _this9._translateService.get(columnTitlePrefix + name);
          };

          Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["forkJoin"])(this._translateService.get('Id'), getTranslate('TITLE'), getTranslate('DESCRIPTION'), getTranslate('DETAILS'), getTranslate('IMAGES'), getTranslate('CATEGORY')).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.ngDestroy$)).subscribe(function (_ref2) {
            var _ref3 = _slicedToArray(_ref2, 6),
                id = _ref3[0],
                name = _ref3[1],
                description = _ref3[2],
                details = _ref3[3],
                images = _ref3[4],
                category = _ref3[5];

            _this9.settingsSmartTable = {
              actions: !_this9.hiddenTableActions && {
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
              columns: {
                checkbox: {
                  title: '',
                  filter: false,
                  type: 'custom',
                  renderComponent: _app_shared_render_component_product_checkbox_product_checkbox__WEBPACK_IMPORTED_MODULE_15__["ProductCheckboxComponent"]
                },
                title: {
                  title: name,
                  type: 'custom',
                  renderComponent: _app_shared_render_component_product_title_product_title_component__WEBPACK_IMPORTED_MODULE_16__["ProductTitleComponent"]
                },
                description: {
                  title: description
                },
                details: {
                  title: details
                },
                categories: {
                  title: category,
                  type: 'custom',
                  renderComponent: _render_component_product_categories_product_categories__WEBPACK_IMPORTED_MODULE_10__["ProductCategoriesComponent"],
                  filterFunction: function filterFunction(cell, search) {
                    if (cell.search.includes(search)) {
                      return true;
                    } else {
                      return false;
                    }
                  }
                },
                images: {
                  title: images,
                  type: 'custom',
                  renderComponent: _app_shared_render_component_product_image_product_image_component__WEBPACK_IMPORTED_MODULE_17__["ProductImageComponent"]
                }
              },
              pager: {
                display: true,
                perPage: _this9.perPage
              }
            };
          });
        }
      }, {
        key: "_applyTranslationOnSmartTable",
        value: function _applyTranslationOnSmartTable() {
          var _this10 = this;

          this._translateService.onLangChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.ngDestroy$)).subscribe(function (res) {
            _this10._loadSettingsSmartTable();

            _this10.loadDataSmartTable(_this10.products || [], _this10.dataCount || 0);
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.ngDestroy$.next();
          this.ngDestroy$.complete();
        }
      }, {
        key: "hasSelectedProducts",
        get: function get() {
          return this._selectedProducts.length > 0;
        }
      }, {
        key: "selectedProducts",
        get: function get() {
          return _toConsumableArray(this._selectedProducts);
        },
        set: function set(products) {
          this._selectedProducts = products;
        }
      }]);

      return ProductsTableComponent;
    }();

    ProductsTableComponent.noInfoSign = '';

    ProductsTableComponent.ctorParameters = function () {
      return [{
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]
      }, {
        type: _core_data_products_service__WEBPACK_IMPORTED_MODULE_4__["ProductsService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"]
      }, {
        type: _modules_client_common_angular2_locale_product_locales_service__WEBPACK_IMPORTED_MODULE_9__["ProductLocalesService"]
      }, {
        type: _core_data_productsCategory_service__WEBPACK_IMPORTED_MODULE_11__["ProductsCategoryService"]
      }, {
        type: _app_core_services_notify_notify_service__WEBPACK_IMPORTED_MODULE_12__["NotifyService"]
      }, {
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__["NgbModal"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], ProductsTableComponent.prototype, "perPage", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], ProductsTableComponent.prototype, "hiddenTableActions", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], ProductsTableComponent.prototype, "boxShadow", void 0);
    ProductsTableComponent = ProductsTableComponent_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'ea-products-table',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./products-table.component.html */
      "../../node_modules/raw-loader/dist/cjs.js!./src/app/@shared/product/forms/products-table/products-table.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./products-table.component.scss */
      "./src/app/@shared/product/forms/products-table/products-table.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"], _core_data_products_service__WEBPACK_IMPORTED_MODULE_4__["ProductsService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"], _modules_client_common_angular2_locale_product_locales_service__WEBPACK_IMPORTED_MODULE_9__["ProductLocalesService"], _core_data_productsCategory_service__WEBPACK_IMPORTED_MODULE_11__["ProductsCategoryService"], _app_core_services_notify_notify_service__WEBPACK_IMPORTED_MODULE_12__["NotifyService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__["NgbModal"]])], ProductsTableComponent);
    /***/
  },

  /***/
  "./src/app/@shared/render-component/product-categories/product-categories.module.ts":
  /*!******************************************************************************************!*\
    !*** ./src/app/@shared/render-component/product-categories/product-categories.module.ts ***!
    \******************************************************************************************/

  /*! exports provided: ProductCategoriesModule */

  /***/
  function srcAppSharedRenderComponentProductCategoriesProductCategoriesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductCategoriesModule", function () {
      return ProductCategoriesModule;
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
    /*! ../../../@theme */
    "./src/app/@theme/index.ts");
    /* harmony import */


    var _product_categories__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./product-categories */
    "./src/app/@shared/render-component/product-categories/product-categories.ts");

    var COMPONENTS = [_product_categories__WEBPACK_IMPORTED_MODULE_4__["ProductCategoriesComponent"]];

    var ProductCategoriesModule = function ProductCategoriesModule() {
      _classCallCheck(this, ProductCategoriesModule);
    };

    ProductCategoriesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _theme__WEBPACK_IMPORTED_MODULE_3__["ThemeModule"]],
      declarations: COMPONENTS,
      entryComponents: COMPONENTS,
      exports: COMPONENTS
    })], ProductCategoriesModule);
    /***/
  },

  /***/
  "./src/app/@shared/render-component/product-categories/product-categories.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/@shared/render-component/product-categories/product-categories.ts ***!
    \***********************************************************************************/

  /*! exports provided: ProductCategoriesComponent */

  /***/
  function srcAppSharedRenderComponentProductCategoriesProductCategoriesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductCategoriesComponent", function () {
      return ProductCategoriesComponent;
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


    var _modules_client_common_angular2_locale_product_locales_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @modules/client.common.angular2/locale/product-locales.service */
    "../common-angular/src/locale/product-locales.service.ts");

    var ProductCategoriesComponent = /*#__PURE__*/function () {
      function ProductCategoriesComponent(_localeTranslate) {
        _classCallCheck(this, ProductCategoriesComponent);

        this._localeTranslate = _localeTranslate;
        this.categoriesArr = [];
      }

      _createClass(ProductCategoriesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getCategories();
        }
      }, {
        key: "getCategories",
        value: function getCategories() {
          var _this11 = this;

          if (this.rowData.allCategories) {
            this.categoriesArr = this.rowData.allCategories.filter(function (category) {
              return _this11.rowData.categories.ids.includes(category.id);
            });
          }
        }
      }, {
        key: "getTranslates",
        value: function getTranslates(categoryName) {
          return this._localeTranslate.getTranslate(categoryName);
        }
      }]);

      return ProductCategoriesComponent;
    }();

    ProductCategoriesComponent.ctorParameters = function () {
      return [{
        type: _modules_client_common_angular2_locale_product_locales_service__WEBPACK_IMPORTED_MODULE_2__["ProductLocalesService"]
      }];
    };

    ProductCategoriesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./product-categories.html */
      "../../node_modules/raw-loader/dist/cjs.js!./src/app/@shared/render-component/product-categories/product-categories.html"))["default"],
      styles: ["\n\t\t\tdiv {\n\t\t\t\tpadding-bottom: 4px;\n\t\t\t}\n\n\t\t\tdiv img {\n\t\t\t\twidth: 40px;\n\t\t\t\theight: 40px;\n\t\t\t}\n\t\t"]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_modules_client_common_angular2_locale_product_locales_service__WEBPACK_IMPORTED_MODULE_2__["ProductLocalesService"]])], ProductCategoriesComponent);
    /***/
  }
}]);
//# sourceMappingURL=default~app-pages-products-products-module~merchants-merchants-module~warehouse-warehouse-module-es5.js.map