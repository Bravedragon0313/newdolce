(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~carriers-carriers-module~customers-customers-module~settings-settings-module"],{

/***/ "../../node_modules/angular2-wizard/dist/index.js":
/*!**************************************************************************************************!*\
  !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/angular2-wizard/dist/index.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var wizard_component_1 = __webpack_require__(/*! ./src/wizard.component */ "../../node_modules/angular2-wizard/dist/src/wizard.component.js");
var wizard_step_component_1 = __webpack_require__(/*! ./src/wizard-step.component */ "../../node_modules/angular2-wizard/dist/src/wizard-step.component.js");
__export(__webpack_require__(/*! ./src/wizard.component */ "../../node_modules/angular2-wizard/dist/src/wizard.component.js"));
__export(__webpack_require__(/*! ./src/wizard-step.component */ "../../node_modules/angular2-wizard/dist/src/wizard-step.component.js"));
var FormWizardModule = FormWizardModule_1 = (function () {
    function FormWizardModule() {
    }
    FormWizardModule.forRoot = function () {
        return {
            ngModule: FormWizardModule_1
        };
    };
    return FormWizardModule;
}());
FormWizardModule = FormWizardModule_1 = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule
        ],
        declarations: [
            wizard_component_1.WizardComponent,
            wizard_step_component_1.WizardStepComponent
        ],
        exports: [
            wizard_component_1.WizardComponent,
            wizard_step_component_1.WizardStepComponent
        ]
    })
], FormWizardModule);
exports.FormWizardModule = FormWizardModule;
var FormWizardModule_1;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../node_modules/angular2-wizard/dist/src/wizard-step.component.js":
/*!**********************************************************************************************************************!*\
  !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/angular2-wizard/dist/src/wizard-step.component.js ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var WizardStepComponent = (function () {
    function WizardStepComponent() {
        this.hidden = false;
        this.isValid = true;
        this.showNext = true;
        this.showPrev = true;
        this.onNext = new core_1.EventEmitter();
        this.onPrev = new core_1.EventEmitter();
        this.onComplete = new core_1.EventEmitter();
        this._isActive = false;
        this.isDisabled = true;
    }
    Object.defineProperty(WizardStepComponent.prototype, "isActive", {
        get: function () {
            return this._isActive;
        },
        set: function (isActive) {
            this._isActive = isActive;
            this.isDisabled = false;
        },
        enumerable: true,
        configurable: true
    });
    return WizardStepComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], WizardStepComponent.prototype, "title", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], WizardStepComponent.prototype, "hidden", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], WizardStepComponent.prototype, "isValid", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], WizardStepComponent.prototype, "showNext", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], WizardStepComponent.prototype, "showPrev", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], WizardStepComponent.prototype, "onNext", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], WizardStepComponent.prototype, "onPrev", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], WizardStepComponent.prototype, "onComplete", void 0);
__decorate([
    core_1.Input('isActive'),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], WizardStepComponent.prototype, "isActive", null);
WizardStepComponent = __decorate([
    core_1.Component({
        selector: 'wizard-step',
        template: "\n    <div [hidden]=\"!isActive\">\n      <ng-content></ng-content>\n    </div>\n  "
    }),
    __metadata("design:paramtypes", [])
], WizardStepComponent);
exports.WizardStepComponent = WizardStepComponent;
//# sourceMappingURL=wizard-step.component.js.map

/***/ }),

/***/ "../../node_modules/angular2-wizard/dist/src/wizard.component.js":
/*!*****************************************************************************************************************!*\
  !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/angular2-wizard/dist/src/wizard.component.js ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var wizard_step_component_1 = __webpack_require__(/*! ./wizard-step.component */ "../../node_modules/angular2-wizard/dist/src/wizard-step.component.js");
var WizardComponent = (function () {
    function WizardComponent() {
        this._steps = [];
        this._isCompleted = false;
        this.onStepChanged = new core_1.EventEmitter();
    }
    WizardComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.wizardSteps.forEach(function (step) { return _this._steps.push(step); });
        this.steps[0].isActive = true;
    };
    Object.defineProperty(WizardComponent.prototype, "steps", {
        get: function () {
            return this._steps.filter(function (step) { return !step.hidden; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WizardComponent.prototype, "isCompleted", {
        get: function () {
            return this._isCompleted;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WizardComponent.prototype, "activeStep", {
        get: function () {
            return this.steps.find(function (step) { return step.isActive; });
        },
        set: function (step) {
            if (step !== this.activeStep && !step.isDisabled) {
                this.activeStep.isActive = false;
                step.isActive = true;
                this.onStepChanged.emit(step);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WizardComponent.prototype, "activeStepIndex", {
        get: function () {
            return this.steps.indexOf(this.activeStep);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WizardComponent.prototype, "hasNextStep", {
        get: function () {
            return this.activeStepIndex < this.steps.length - 1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WizardComponent.prototype, "hasPrevStep", {
        get: function () {
            return this.activeStepIndex > 0;
        },
        enumerable: true,
        configurable: true
    });
    WizardComponent.prototype.goToStep = function (step) {
        if (!this.isCompleted) {
            this.activeStep = step;
        }
    };
    WizardComponent.prototype.next = function () {
        if (this.hasNextStep) {
            var nextStep = this.steps[this.activeStepIndex + 1];
            this.activeStep.onNext.emit();
            nextStep.isDisabled = false;
            this.activeStep = nextStep;
        }
    };
    WizardComponent.prototype.previous = function () {
        if (this.hasPrevStep) {
            var prevStep = this.steps[this.activeStepIndex - 1];
            this.activeStep.onPrev.emit();
            prevStep.isDisabled = false;
            this.activeStep = prevStep;
        }
    };
    WizardComponent.prototype.complete = function () {
        this.activeStep.onComplete.emit();
        this._isCompleted = true;
    };
    return WizardComponent;
}());
__decorate([
    core_1.ContentChildren(wizard_step_component_1.WizardStepComponent),
    __metadata("design:type", core_1.QueryList)
], WizardComponent.prototype, "wizardSteps", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], WizardComponent.prototype, "onStepChanged", void 0);
WizardComponent = __decorate([
    core_1.Component({
        selector: 'form-wizard',
        template: "<div class=\"card\">\n    <div class=\"card-header\">\n      <ul class=\"nav nav-justified\">\n        <li class=\"nav-item\" *ngFor=\"let step of steps\" [ngClass]=\"{'active': step.isActive, 'enabled': !step.isDisabled, 'disabled': step.isDisabled, 'completed': isCompleted}\">\n          <a (click)=\"goToStep(step)\">{{step.title}}</a>\n        </li>\n      </ul>\n    </div>\n    <div class=\"card-block\">\n      <ng-content></ng-content>\n    </div>\n    <div class=\"card-footer\" [hidden]=\"isCompleted\">\n        <button type=\"button\" class=\"btn btn-secondary float-left\" (click)=\"previous()\" [hidden]=\"!hasPrevStep || !activeStep.showPrev\">Previous</button>\n        <button type=\"button\" class=\"btn btn-secondary float-right\" (click)=\"next()\" [disabled]=\"!activeStep.isValid\" [hidden]=\"!hasNextStep || !activeStep.showNext\">Next</button>\n        <button type=\"button\" class=\"btn btn-secondary float-right\" (click)=\"complete()\" [disabled]=\"!activeStep.isValid\" [hidden]=\"hasNextStep\">Done</button>\n    </div>\n  </div>",
        styles: [
            '.card { height: 100%; }',
            '.card-header { background-color: #fff; padding: 0; font-size: 1.25rem; }',
            '.card-block { overflow-y: auto; }',
            '.card-footer { background-color: #fff; border-top: 0 none; }',
            '.nav-item { padding: 1rem 0rem; border-bottom: 0.5rem solid #ccc; }',
            '.active { font-weight: bold; color: black; border-bottom-color: #1976D2 !important; }',
            '.enabled { cursor: pointer; border-bottom-color: rgb(88, 162, 234); }',
            '.disabled { color: #ccc; }',
            '.completed { cursor: default; }'
        ]
    }),
    __metadata("design:paramtypes", [])
], WizardComponent);
exports.WizardComponent = WizardComponent;
//# sourceMappingURL=wizard.component.js.map

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/components/confirm-delete-popup/confirm-delete-popup.html":
/*!***********************************************************************************************************************************************************!*\
  !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/raw-loader/dist/cjs.js!./src/components/confirm-delete-popup/confirm-delete-popup.html ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- TODO add translate -->\n<div class=\"confirm-delete\">\n\t<h4>\n\t\tAre you sure you want to {{ isRemove ? 'remvoe' : 'delete' }} the\n\t\tfollowing data?\n\t</h4>\n\t<div class=\"details\">\n\t\t<img src=\"{{ data?.image }}\" />\n\t\t<div class=\"text\">\n\t\t\t<div>{{ data?.name }}</div>\n\t\t\t<div\n\t\t\t\t[ngClass]=\"{\n\t\t\t\t\tgood: data?.status === 'working',\n\t\t\t\t\tbad: !(data?.status === 'working')\n\t\t\t\t}\"\n\t\t\t>\n\t\t\t\t{{ data?.status | titlecase }}\n\t\t\t</div>\n\t\t\t<div style=\"width: 100%; text-align: center;\">\n\t\t\t\t{{ data?.phone }}\n\t\t\t</div>\n\t\t\t<div>{{ data?.addresses }}</div>\n\t\t</div>\n\t</div>\n\t<div class=\"control\">\n\t\t<ion-button (click)=\"confirmDelete()\" color=\"danger\">\n\t\t\tConfirm\n\t\t</ion-button>\n\t\t<ion-button (click)=\"cancelModal()\" color=\"info\">Cancel</ion-button>\n\t</div>\n</div>\n");

/***/ }),

/***/ "./src/components/confirm-delete-popup/confirm-delete-popup.module.ts":
/*!****************************************************************************!*\
  !*** ./src/components/confirm-delete-popup/confirm-delete-popup.module.ts ***!
  \****************************************************************************/
/*! exports provided: ConfirmDeletePopupModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmDeletePopupModule", function() { return ConfirmDeletePopupModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular2_wizard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-wizard */ "../../node_modules/angular2-wizard/dist/index.js");
/* harmony import */ var angular2_wizard__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_wizard__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-smart-table */ "./node_modules/ng2-smart-table/fesm5/ng2-smart-table.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/fesm5/ng2-file-upload.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _confirm_delete_popup__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./confirm-delete-popup */ "./src/components/confirm-delete-popup/confirm-delete-popup.ts");










var ConfirmDeletePopupModule = (function () {
    function ConfirmDeletePopupModule() {
    }
    ConfirmDeletePopupModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_confirm_delete_popup__WEBPACK_IMPORTED_MODULE_9__["ConfirmDeletePopupPage"]],
            entryComponents: [_confirm_delete_popup__WEBPACK_IMPORTED_MODULE_9__["ConfirmDeletePopupPage"]],
            imports: [
                angular2_wizard__WEBPACK_IMPORTED_MODULE_2__["FormWizardModule"],
                ng2_smart_table__WEBPACK_IMPORTED_MODULE_3__["Ng2SmartTableModule"],
                ng2_file_upload__WEBPACK_IMPORTED_MODULE_6__["FileUploadModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"].forChild(),
                _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            ],
        })
    ], ConfirmDeletePopupModule);
    return ConfirmDeletePopupModule;
}());



/***/ }),

/***/ "./src/components/confirm-delete-popup/confirm-delete-popup.scss":
/*!***********************************************************************!*\
  !*** ./src/components/confirm-delete-popup/confirm-delete-popup.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".confirm-delete-wrapper {\n  display: flex !important;\n}\n\n.confirm-delete-wrapper .modal-wrapper {\n  border-radius: 5px;\n  width: 300px;\n  height: 300px;\n  left: calc(50% - (300px / 2));\n  top: calc(50% - (300px / 2));\n}\n\n.confirm-delete-wrapper .modal-wrapper .ion-page {\n  border-radius: 5px;\n}\n\n.confirm-delete-wrapper .modal-wrapper .ion-page .confirm-delete {\n  border: 1px solid rgba(0, 0, 0, 0.125);\n  background: white;\n  width: 100%;\n  height: 100%;\n  border-radius: 5px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-evenly;\n}\n\n.confirm-delete-wrapper .modal-wrapper .ion-page .confirm-delete h4 {\n  width: 90%;\n  text-align: center;\n}\n\n.confirm-delete-wrapper .modal-wrapper .ion-page .confirm-delete .control {\n  display: flex;\n  justify-content: space-between;\n  width: 90%;\n}\n\n.confirm-delete-wrapper .modal-wrapper .ion-page .confirm-delete .details {\n  display: flex;\n  align-items: center;\n  width: 90%;\n  border: 1px solid rgba(0, 0, 0, 0.125);\n  border-radius: 4px;\n}\n\n.confirm-delete-wrapper .modal-wrapper .ion-page .confirm-delete .details img {\n  width: 128px;\n  height: 128px;\n}\n\n.confirm-delete-wrapper .modal-wrapper .ion-page .confirm-delete .details .good {\n  color: green;\n}\n\n.confirm-delete-wrapper .modal-wrapper .ion-page .confirm-delete .details .bad {\n  color: crimson;\n}\n\n.confirm-delete-wrapper .modal-wrapper .ion-page .confirm-delete .details .text {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n}\n\n.confirm-delete-wrapper .modal-wrapper .ion-page ion-button {\n  border: none;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvZC9Xb3JrL0FuZ3VsYXIvTmV3IGZvbGRlciAoMikvRG9sY2VHcm9jZXJ5L3BhY2thZ2VzL21lcmNoYW50LXRhYmxldC1pb25pYy9zcmMvY29tcG9uZW50cy9jb25maXJtLWRlbGV0ZS1wb3B1cC9jb25maXJtLWRlbGV0ZS1wb3B1cC5zY3NzIiwic3JjL2NvbXBvbmVudHMvY29uZmlybS1kZWxldGUtcG9wdXAvY29uZmlybS1kZWxldGUtcG9wdXAuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLHdCQUF3QjtBQ0N6Qjs7QURGQTtFQUdFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osYUFBYTtFQUNiLDZCQUE2QjtFQUM3Qiw0QkFBNEI7QUNHOUI7O0FEVkE7RUFTRyxrQkFBa0I7QUNLckI7O0FEZEE7RUFXSSxzQ0FBc0M7RUFDdEMsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLDZCQUE2QjtBQ09qQzs7QUQxQkE7RUFxQkssVUFBVTtFQUNWLGtCQUFrQjtBQ1N2Qjs7QUQvQkE7RUF5QkssYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixVQUFVO0FDVWY7O0FEckNBO0VBOEJLLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLHNDQUFzQztFQUN0QyxrQkFBa0I7QUNXdkI7O0FEN0NBO0VBb0NNLFlBQVk7RUFDWixhQUFhO0FDYW5COztBRGxEQTtFQXdDTSxZQUFZO0FDY2xCOztBRHREQTtFQTJDTSxjQUFjO0FDZXBCOztBRDFEQTtFQThDTSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixXQUFXO0FDZ0JqQjs7QURqRUE7RUF1REksWUFBWTtBQ2NoQiIsImZpbGUiOiJzcmMvY29tcG9uZW50cy9jb25maXJtLWRlbGV0ZS1wb3B1cC9jb25maXJtLWRlbGV0ZS1wb3B1cC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbmZpcm0tZGVsZXRlLXdyYXBwZXIge1xuXHRkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG5cdC5tb2RhbC13cmFwcGVyIHtcblx0XHRib3JkZXItcmFkaXVzOiA1cHg7XG5cdFx0d2lkdGg6IDMwMHB4O1xuXHRcdGhlaWdodDogMzAwcHg7XG5cdFx0bGVmdDogY2FsYyg1MCUgLSAoMzAwcHggLyAyKSk7XG5cdFx0dG9wOiBjYWxjKDUwJSAtICgzMDBweCAvIDIpKTtcblx0XHQuaW9uLXBhZ2Uge1xuXHRcdFx0Ym9yZGVyLXJhZGl1czogNXB4O1xuXHRcdFx0LmNvbmZpcm0tZGVsZXRlIHtcblx0XHRcdFx0Ym9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyNSk7XG5cdFx0XHRcdGJhY2tncm91bmQ6IHdoaXRlO1xuXHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0aGVpZ2h0OiAxMDAlO1xuXHRcdFx0XHRib3JkZXItcmFkaXVzOiA1cHg7XG5cdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuXHRcdFx0XHRoNCB7XG5cdFx0XHRcdFx0d2lkdGg6IDkwJTtcblx0XHRcdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0XHRcdH1cblx0XHRcdFx0LmNvbnRyb2wge1xuXHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRcdFx0XHRcdHdpZHRoOiA5MCU7XG5cdFx0XHRcdH1cblx0XHRcdFx0LmRldGFpbHMge1xuXHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdFx0XHR3aWR0aDogOTAlO1xuXHRcdFx0XHRcdGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xMjUpO1xuXHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDRweDtcblx0XHRcdFx0XHRpbWcge1xuXHRcdFx0XHRcdFx0d2lkdGg6IDEyOHB4O1xuXHRcdFx0XHRcdFx0aGVpZ2h0OiAxMjhweDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Lmdvb2Qge1xuXHRcdFx0XHRcdFx0Y29sb3I6IGdyZWVuO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQuYmFkIHtcblx0XHRcdFx0XHRcdGNvbG9yOiBjcmltc29uO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQudGV4dCB7XG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0XHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0aW9uLWJ1dHRvbiB7XG5cdFx0XHRcdGJvcmRlcjogbm9uZTtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cbiIsIi5jb25maXJtLWRlbGV0ZS13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xufVxuXG4uY29uZmlybS1kZWxldGUtd3JhcHBlciAubW9kYWwtd3JhcHBlciB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgd2lkdGg6IDMwMHB4O1xuICBoZWlnaHQ6IDMwMHB4O1xuICBsZWZ0OiBjYWxjKDUwJSAtICgzMDBweCAvIDIpKTtcbiAgdG9wOiBjYWxjKDUwJSAtICgzMDBweCAvIDIpKTtcbn1cblxuLmNvbmZpcm0tZGVsZXRlLXdyYXBwZXIgLm1vZGFsLXdyYXBwZXIgLmlvbi1wYWdlIHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uY29uZmlybS1kZWxldGUtd3JhcHBlciAubW9kYWwtd3JhcHBlciAuaW9uLXBhZ2UgLmNvbmZpcm0tZGVsZXRlIHtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyNSk7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xufVxuXG4uY29uZmlybS1kZWxldGUtd3JhcHBlciAubW9kYWwtd3JhcHBlciAuaW9uLXBhZ2UgLmNvbmZpcm0tZGVsZXRlIGg0IHtcbiAgd2lkdGg6IDkwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY29uZmlybS1kZWxldGUtd3JhcHBlciAubW9kYWwtd3JhcHBlciAuaW9uLXBhZ2UgLmNvbmZpcm0tZGVsZXRlIC5jb250cm9sIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB3aWR0aDogOTAlO1xufVxuXG4uY29uZmlybS1kZWxldGUtd3JhcHBlciAubW9kYWwtd3JhcHBlciAuaW9uLXBhZ2UgLmNvbmZpcm0tZGVsZXRlIC5kZXRhaWxzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDkwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyNSk7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuLmNvbmZpcm0tZGVsZXRlLXdyYXBwZXIgLm1vZGFsLXdyYXBwZXIgLmlvbi1wYWdlIC5jb25maXJtLWRlbGV0ZSAuZGV0YWlscyBpbWcge1xuICB3aWR0aDogMTI4cHg7XG4gIGhlaWdodDogMTI4cHg7XG59XG5cbi5jb25maXJtLWRlbGV0ZS13cmFwcGVyIC5tb2RhbC13cmFwcGVyIC5pb24tcGFnZSAuY29uZmlybS1kZWxldGUgLmRldGFpbHMgLmdvb2Qge1xuICBjb2xvcjogZ3JlZW47XG59XG5cbi5jb25maXJtLWRlbGV0ZS13cmFwcGVyIC5tb2RhbC13cmFwcGVyIC5pb24tcGFnZSAuY29uZmlybS1kZWxldGUgLmRldGFpbHMgLmJhZCB7XG4gIGNvbG9yOiBjcmltc29uO1xufVxuXG4uY29uZmlybS1kZWxldGUtd3JhcHBlciAubW9kYWwtd3JhcHBlciAuaW9uLXBhZ2UgLmNvbmZpcm0tZGVsZXRlIC5kZXRhaWxzIC50ZXh0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jb25maXJtLWRlbGV0ZS13cmFwcGVyIC5tb2RhbC13cmFwcGVyIC5pb24tcGFnZSBpb24tYnV0dG9uIHtcbiAgYm9yZGVyOiBub25lO1xufVxuIl19 */");

/***/ }),

/***/ "./src/components/confirm-delete-popup/confirm-delete-popup.ts":
/*!*********************************************************************!*\
  !*** ./src/components/confirm-delete-popup/confirm-delete-popup.ts ***!
  \*********************************************************************/
/*! exports provided: ConfirmDeletePopupPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmDeletePopupPage", function() { return ConfirmDeletePopupPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");



var ConfirmDeletePopupPage = (function () {
    function ConfirmDeletePopupPage(modalCtrl) {
        this.modalCtrl = modalCtrl;
    }
    ConfirmDeletePopupPage.prototype.cancelModal = function () {
        this.modalCtrl.dismiss();
    };
    ConfirmDeletePopupPage.prototype.confirmDelete = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.modalCtrl.dismiss(true);
                return [2];
            });
        });
    };
    ConfirmDeletePopupPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], ConfirmDeletePopupPage.prototype, "data", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], ConfirmDeletePopupPage.prototype, "isRemove", void 0);
    ConfirmDeletePopupPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'confirm-delete-popup',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./confirm-delete-popup.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/components/confirm-delete-popup/confirm-delete-popup.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./confirm-delete-popup.scss */ "./src/components/confirm-delete-popup/confirm-delete-popup.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
    ], ConfirmDeletePopupPage);
    return ConfirmDeletePopupPage;
}());



/***/ })

}]);
//# sourceMappingURL=default~carriers-carriers-module~customers-customers-module~settings-settings-module.js.map