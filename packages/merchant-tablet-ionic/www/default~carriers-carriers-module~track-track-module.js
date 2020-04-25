(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~carriers-carriers-module~track-track-module"],{

/***/ "../common-angular/src/pipes/capitalize.pipe.ts":
/*!******************************************************!*\
  !*** ../common-angular/src/pipes/capitalize.pipe.ts ***!
  \******************************************************/
/*! exports provided: CapitalizePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CapitalizePipe", function() { return CapitalizePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../common-angular/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CapitalizePipe = (function () {
    function CapitalizePipe() {
    }
    CapitalizePipe.prototype.transform = function (input) {
        return input && input.length
            ? input.charAt(0).toUpperCase() + input.slice(1).toLowerCase()
            : input;
    };
    CapitalizePipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'ngxCapitalize' })
    ], CapitalizePipe);
    return CapitalizePipe;
}());



/***/ }),

/***/ "../common-angular/src/pipes/number-with-commas.pipe.ts":
/*!**************************************************************!*\
  !*** ../common-angular/src/pipes/number-with-commas.pipe.ts ***!
  \**************************************************************/
/*! exports provided: NumberWithCommasPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumberWithCommasPipe", function() { return NumberWithCommasPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../common-angular/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NumberWithCommasPipe = (function () {
    function NumberWithCommasPipe() {
    }
    NumberWithCommasPipe.prototype.transform = function (input) {
        return new Intl.NumberFormat().format(input);
    };
    NumberWithCommasPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'myNumberWithCommas' })
    ], NumberWithCommasPipe);
    return NumberWithCommasPipe;
}());



/***/ }),

/***/ "../common-angular/src/pipes/pipes.module.ts":
/*!***************************************************!*\
  !*** ../common-angular/src/pipes/pipes.module.ts ***!
  \***************************************************/
/*! exports provided: PipesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipesModule", function() { return PipesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../common-angular/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _safe_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./safe.pipe */ "../common-angular/src/pipes/safe.pipe.ts");
/* harmony import */ var _replace_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./replace.pipe */ "../common-angular/src/pipes/replace.pipe.ts");
/* harmony import */ var _capitalize_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./capitalize.pipe */ "../common-angular/src/pipes/capitalize.pipe.ts");
/* harmony import */ var _plural_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./plural.pipe */ "../common-angular/src/pipes/plural.pipe.ts");
/* harmony import */ var _round_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./round.pipe */ "../common-angular/src/pipes/round.pipe.ts");
/* harmony import */ var _timing_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./timing.pipe */ "../common-angular/src/pipes/timing.pipe.ts");
/* harmony import */ var _number_with_commas_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./number-with-commas.pipe */ "../common-angular/src/pipes/number-with-commas.pipe.ts");









var PipesModule = (function () {
    function PipesModule() {
    }
    PipesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            exports: [
                _safe_pipe__WEBPACK_IMPORTED_MODULE_2__["SafePipe"],
                _replace_pipe__WEBPACK_IMPORTED_MODULE_3__["ReplacePipe"],
                _capitalize_pipe__WEBPACK_IMPORTED_MODULE_4__["CapitalizePipe"],
                _plural_pipe__WEBPACK_IMPORTED_MODULE_5__["PluralPipe"],
                _round_pipe__WEBPACK_IMPORTED_MODULE_6__["RoundPipe"],
                _timing_pipe__WEBPACK_IMPORTED_MODULE_7__["TimingPipe"],
                _number_with_commas_pipe__WEBPACK_IMPORTED_MODULE_8__["NumberWithCommasPipe"],
            ],
            imports: [],
            declarations: [
                _safe_pipe__WEBPACK_IMPORTED_MODULE_2__["SafePipe"],
                _replace_pipe__WEBPACK_IMPORTED_MODULE_3__["ReplacePipe"],
                _capitalize_pipe__WEBPACK_IMPORTED_MODULE_4__["CapitalizePipe"],
                _plural_pipe__WEBPACK_IMPORTED_MODULE_5__["PluralPipe"],
                _round_pipe__WEBPACK_IMPORTED_MODULE_6__["RoundPipe"],
                _timing_pipe__WEBPACK_IMPORTED_MODULE_7__["TimingPipe"],
                _number_with_commas_pipe__WEBPACK_IMPORTED_MODULE_8__["NumberWithCommasPipe"],
            ],
        })
    ], PipesModule);
    return PipesModule;
}());



/***/ }),

/***/ "../common-angular/src/pipes/plural.pipe.ts":
/*!**************************************************!*\
  !*** ../common-angular/src/pipes/plural.pipe.ts ***!
  \**************************************************/
/*! exports provided: PluralPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PluralPipe", function() { return PluralPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../common-angular/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PluralPipe = (function () {
    function PluralPipe() {
    }
    PluralPipe.prototype.transform = function (input, label, pluralLabel) {
        if (pluralLabel === void 0) { pluralLabel = ''; }
        input = input || 0;
        return input === 1
            ? input + " " + label
            : pluralLabel
                ? input + " " + pluralLabel
                : input + " " + label + "s";
    };
    PluralPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'ngxPlural' })
    ], PluralPipe);
    return PluralPipe;
}());



/***/ }),

/***/ "../common-angular/src/pipes/replace.pipe.ts":
/*!***************************************************!*\
  !*** ../common-angular/src/pipes/replace.pipe.ts ***!
  \***************************************************/
/*! exports provided: ReplacePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReplacePipe", function() { return ReplacePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../common-angular/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ReplacePipe = (function () {
    function ReplacePipe() {
    }
    ReplacePipe.prototype.transform = function (value, searchValue, replaceValue) {
        if (typeof value !== typeof 'string' ||
            typeof searchValue !== typeof 'string' ||
            typeof replaceValue !== typeof 'string') {
            throw Error('All pipe parameters should be strings!');
        }
        return value.replace(new RegExp(searchValue, 'g'), replaceValue);
    };
    ReplacePipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'myReplacePipe' })
    ], ReplacePipe);
    return ReplacePipe;
}());



/***/ }),

/***/ "../common-angular/src/pipes/round.pipe.ts":
/*!*************************************************!*\
  !*** ../common-angular/src/pipes/round.pipe.ts ***!
  \*************************************************/
/*! exports provided: RoundPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoundPipe", function() { return RoundPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../common-angular/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RoundPipe = (function () {
    function RoundPipe() {
    }
    RoundPipe.prototype.transform = function (input) {
        return Math.round(input);
    };
    RoundPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'ngxRound' })
    ], RoundPipe);
    return RoundPipe;
}());



/***/ }),

/***/ "../common-angular/src/pipes/safe.pipe.ts":
/*!************************************************!*\
  !*** ../common-angular/src/pipes/safe.pipe.ts ***!
  \************************************************/
/*! exports provided: SafePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafePipe", function() { return SafePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../common-angular/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");



var SafePipe = (function () {
    function SafePipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafePipe.prototype.transform = function (value, type) {
        switch (type) {
            case 'html':
                return this.sanitizer.bypassSecurityTrustHtml(value);
            case 'style':
                return this.sanitizer.bypassSecurityTrustStyle(value);
            case 'script':
                return this.sanitizer.bypassSecurityTrustScript(value);
            case 'url':
                return this.sanitizer.bypassSecurityTrustUrl(value);
            case 'resourceUrl':
                return this.sanitizer.bypassSecurityTrustResourceUrl(value);
            default:
                throw new Error("Invalid safe type specified: " + type);
        }
    };
    SafePipe.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }
    ]; };
    SafePipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'safe',
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
    ], SafePipe);
    return SafePipe;
}());



/***/ }),

/***/ "../common-angular/src/pipes/timing.pipe.ts":
/*!**************************************************!*\
  !*** ../common-angular/src/pipes/timing.pipe.ts ***!
  \**************************************************/
/*! exports provided: TimingPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimingPipe", function() { return TimingPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../common-angular/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TimingPipe = (function () {
    function TimingPipe() {
    }
    TimingPipe.prototype.transform = function (time) {
        if (time) {
            var minutes = Math.floor(time / 60);
            var seconds = Math.floor(time % 60);
            return "" + this.initZero(minutes) + minutes + ":" + this.initZero(seconds) + seconds;
        }
        return '00:00';
    };
    TimingPipe.prototype.initZero = function (time) {
        return time < 10 ? '0' : '';
    };
    TimingPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'timing' })
    ], TimingPipe);
    return TimingPipe;
}());



/***/ }),

/***/ "./src/services/carrier.service.ts":
/*!*****************************************!*\
  !*** ./src/services/carrier.service.ts ***!
  \*****************************************/
/*! exports provided: CarrierService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarrierService", function() { return CarrierService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apollo-angular */ "./node_modules/apollo-angular/fesm5/ngApollo.js");
/* harmony import */ var _modules_server_common_entities_Carrier__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @modules/server.common/entities/Carrier */ "../common/src/entities/Carrier.ts");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! graphql-tag */ "../../node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var CarrierService = (function () {
    function CarrierService(_apollo) {
        var _this = this;
        this._apollo = _apollo;
        this.carriers$ = this._apollo
            .watchQuery({
            query: graphql_tag__WEBPACK_IMPORTED_MODULE_4___default()(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n\t\t\t\tquery getCarriers {\n\t\t\t\t\tgetCarriers {\n\t\t\t\t\t\t_id\n\t\t\t\t\t\tfirstName\n\t\t\t\t\t\tlastName\n\t\t\t\t\t\tphone\n\t\t\t\t\t\tlogo\n\t\t\t\t\t\tisDeleted\n\t\t\t\t\t\tnumberOfDeliveries\n\t\t\t\t\t\tskippedOrderIds\n\t\t\t\t\t\tstatus\n\t\t\t\t\t\tgeoLocation {\n\t\t\t\t\t\t\tcity\n\t\t\t\t\t\t\tstreetAddress\n\t\t\t\t\t\t\thouse\n\t\t\t\t\t\t\tloc {\n\t\t\t\t\t\t\t\ttype\n\t\t\t\t\t\t\t\tcoordinates\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t"], ["\n\t\t\t\tquery getCarriers {\n\t\t\t\t\tgetCarriers {\n\t\t\t\t\t\t_id\n\t\t\t\t\t\tfirstName\n\t\t\t\t\t\tlastName\n\t\t\t\t\t\tphone\n\t\t\t\t\t\tlogo\n\t\t\t\t\t\tisDeleted\n\t\t\t\t\t\tnumberOfDeliveries\n\t\t\t\t\t\tskippedOrderIds\n\t\t\t\t\t\tstatus\n\t\t\t\t\t\tgeoLocation {\n\t\t\t\t\t\t\tcity\n\t\t\t\t\t\t\tstreetAddress\n\t\t\t\t\t\t\thouse\n\t\t\t\t\t\t\tloc {\n\t\t\t\t\t\t\t\ttype\n\t\t\t\t\t\t\t\tcoordinates\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t"]))),
            pollInterval: 1000,
        })
            .valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (res) { return res.data.getCarriers; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (carriers) { return carriers.map(function (c) { return _this._carrierFactory(c); }); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["share"])());
    }
    CarrierService.prototype.getAllCarriers = function () {
        return this.carriers$;
    };
    CarrierService.prototype.updateCarrier = function (id, updateInput) {
        return this._apollo
            .mutate({
            mutation: graphql_tag__WEBPACK_IMPORTED_MODULE_4___default()(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n\t\t\t\t\tmutation UpdateCarrier(\n\t\t\t\t\t\t$id: String!\n\t\t\t\t\t\t$updateInput: CarrierUpdateInput!\n\t\t\t\t\t) {\n\t\t\t\t\t\tupdateCarrier(id: $id, updateInput: $updateInput) {\n\t\t\t\t\t\t\tid\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t"], ["\n\t\t\t\t\tmutation UpdateCarrier(\n\t\t\t\t\t\t$id: String!\n\t\t\t\t\t\t$updateInput: CarrierUpdateInput!\n\t\t\t\t\t) {\n\t\t\t\t\t\tupdateCarrier(id: $id, updateInput: $updateInput) {\n\t\t\t\t\t\t\tid\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t"]))),
            variables: {
                id: id,
                updateInput: updateInput,
            },
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (result) { return result.data.updateCarrier; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["share"])());
    };
    CarrierService.prototype.getCarrierCurrentOrder = function (carrierId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var res;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this._apollo
                            .query({
                            query: graphql_tag__WEBPACK_IMPORTED_MODULE_4___default()(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n\t\t\t\t\tquery GetCarrierCurrentOrder($carrierId: String!) {\n\t\t\t\t\t\tgetCarrierCurrentOrder(carrierId: $carrierId) {\n\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\tcarrierStatus\n\t\t\t\t\t\t\tcarrierStatusText\n\t\t\t\t\t\t\twarehouseStatusText\n\t\t\t\t\t\t\tcreatedAt\n\t\t\t\t\t\t\tstartDeliveryTime\n\t\t\t\t\t\t\tstatus\n\t\t\t\t\t\t\tdeliveryTime\n\t\t\t\t\t\t\tfinishedProcessingTime\n\t\t\t\t\t\t\tuser {\n\t\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\t\tphone\n\t\t\t\t\t\t\t\temail\n\t\t\t\t\t\t\t\tapartment\n\t\t\t\t\t\t\t\tfirstName\n\t\t\t\t\t\t\t\tlastName\n\t\t\t\t\t\t\t\timage\n\t\t\t\t\t\t\t\tgeoLocation {\n\t\t\t\t\t\t\t\t\thouse\n\t\t\t\t\t\t\t\t\tpostcode\n\t\t\t\t\t\t\t\t\tcountryName\n\t\t\t\t\t\t\t\t\tcity\n\t\t\t\t\t\t\t\t\tstreetAddress\n\t\t\t\t\t\t\t\t\tloc {\n\t\t\t\t\t\t\t\t\t\tcoordinates\n\t\t\t\t\t\t\t\t\t\ttype\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\twarehouse {\n\t\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\t\tname\n\t\t\t\t\t\t\t\tlogo\n\t\t\t\t\t\t\t\tcontactEmail\n\t\t\t\t\t\t\t\tcontactPhone\n\t\t\t\t\t\t\t\tgeoLocation {\n\t\t\t\t\t\t\t\t\thouse\n\t\t\t\t\t\t\t\t\tpostcode\n\t\t\t\t\t\t\t\t\tcountryName\n\t\t\t\t\t\t\t\t\tcity\n\t\t\t\t\t\t\t\t\tstreetAddress\n\t\t\t\t\t\t\t\t\tloc {\n\t\t\t\t\t\t\t\t\t\tcoordinates\n\t\t\t\t\t\t\t\t\t\ttype\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t"], ["\n\t\t\t\t\tquery GetCarrierCurrentOrder($carrierId: String!) {\n\t\t\t\t\t\tgetCarrierCurrentOrder(carrierId: $carrierId) {\n\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\tcarrierStatus\n\t\t\t\t\t\t\tcarrierStatusText\n\t\t\t\t\t\t\twarehouseStatusText\n\t\t\t\t\t\t\tcreatedAt\n\t\t\t\t\t\t\tstartDeliveryTime\n\t\t\t\t\t\t\tstatus\n\t\t\t\t\t\t\tdeliveryTime\n\t\t\t\t\t\t\tfinishedProcessingTime\n\t\t\t\t\t\t\tuser {\n\t\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\t\tphone\n\t\t\t\t\t\t\t\temail\n\t\t\t\t\t\t\t\tapartment\n\t\t\t\t\t\t\t\tfirstName\n\t\t\t\t\t\t\t\tlastName\n\t\t\t\t\t\t\t\timage\n\t\t\t\t\t\t\t\tgeoLocation {\n\t\t\t\t\t\t\t\t\thouse\n\t\t\t\t\t\t\t\t\tpostcode\n\t\t\t\t\t\t\t\t\tcountryName\n\t\t\t\t\t\t\t\t\tcity\n\t\t\t\t\t\t\t\t\tstreetAddress\n\t\t\t\t\t\t\t\t\tloc {\n\t\t\t\t\t\t\t\t\t\tcoordinates\n\t\t\t\t\t\t\t\t\t\ttype\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\twarehouse {\n\t\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\t\tname\n\t\t\t\t\t\t\t\tlogo\n\t\t\t\t\t\t\t\tcontactEmail\n\t\t\t\t\t\t\t\tcontactPhone\n\t\t\t\t\t\t\t\tgeoLocation {\n\t\t\t\t\t\t\t\t\thouse\n\t\t\t\t\t\t\t\t\tpostcode\n\t\t\t\t\t\t\t\t\tcountryName\n\t\t\t\t\t\t\t\t\tcity\n\t\t\t\t\t\t\t\t\tstreetAddress\n\t\t\t\t\t\t\t\t\tloc {\n\t\t\t\t\t\t\t\t\t\tcoordinates\n\t\t\t\t\t\t\t\t\t\ttype\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t"]))),
                            variables: { carrierId: carrierId },
                        })
                            .toPromise()];
                    case 1:
                        res = _a.sent();
                        return [2, res.data['getCarrierCurrentOrder']];
                }
            });
        });
    };
    CarrierService.prototype._carrierFactory = function (carrier) {
        return carrier == null ? null : new _modules_server_common_entities_Carrier__WEBPACK_IMPORTED_MODULE_3__["default"](carrier);
    };
    CarrierService.ctorParameters = function () { return [
        { type: apollo_angular__WEBPACK_IMPORTED_MODULE_2__["Apollo"] }
    ]; };
    CarrierService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [apollo_angular__WEBPACK_IMPORTED_MODULE_2__["Apollo"]])
    ], CarrierService);
    return CarrierService;
}());

var templateObject_1, templateObject_2, templateObject_3;


/***/ }),

/***/ "./src/services/warehouses.service.ts":
/*!********************************************!*\
  !*** ./src/services/warehouses.service.ts ***!
  \********************************************/
/*! exports provided: WarehousesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WarehousesService", function() { return WarehousesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apollo-angular */ "./node_modules/apollo-angular/fesm5/ngApollo.js");
/* harmony import */ var _modules_server_common_entities_Warehouse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @modules/server.common/entities/Warehouse */ "../common/src/entities/Warehouse.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! graphql-tag */ "../../node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_5__);






var WarehousesService = (function () {
    function WarehousesService(_apollo) {
        this._apollo = _apollo;
    }
    WarehousesService.prototype.hasExistingStores = function () {
        return this._apollo
            .query({
            query: graphql_tag__WEBPACK_IMPORTED_MODULE_5___default()(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n\t\t\t\t\tquery HasExistingStores {\n\t\t\t\t\t\thasExistingStores\n\t\t\t\t\t}\n\t\t\t\t"], ["\n\t\t\t\t\tquery HasExistingStores {\n\t\t\t\t\t\thasExistingStores\n\t\t\t\t\t}\n\t\t\t\t"]))),
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res.data.hasExistingStores; }));
    };
    WarehousesService.prototype.getCountExistingCustomers = function () {
        return this._apollo
            .watchQuery({
            query: graphql_tag__WEBPACK_IMPORTED_MODULE_5___default()(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n\t\t\t\t\tquery GetCountExistingCustomers {\n\t\t\t\t\t\tgetCountExistingCustomers {\n\t\t\t\t\t\t\ttotal\n\t\t\t\t\t\t\tperStore {\n\t\t\t\t\t\t\t\tstoreId\n\t\t\t\t\t\t\t\tcustomersCount\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t"], ["\n\t\t\t\t\tquery GetCountExistingCustomers {\n\t\t\t\t\t\tgetCountExistingCustomers {\n\t\t\t\t\t\t\ttotal\n\t\t\t\t\t\t\tperStore {\n\t\t\t\t\t\t\t\tstoreId\n\t\t\t\t\t\t\t\tcustomersCount\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t"]))),
        })
            .valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res.data.getCountExistingCustomers; }));
    };
    WarehousesService.prototype.getCountExistingCustomersToday = function () {
        return this._apollo
            .watchQuery({
            query: graphql_tag__WEBPACK_IMPORTED_MODULE_5___default()(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n\t\t\t\t\tquery GetCountExistingCustomersToday {\n\t\t\t\t\t\tgetCountExistingCustomersToday {\n\t\t\t\t\t\t\ttotal\n\t\t\t\t\t\t\tperStore {\n\t\t\t\t\t\t\t\tstoreId\n\t\t\t\t\t\t\t\tcustomersCount\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t"], ["\n\t\t\t\t\tquery GetCountExistingCustomersToday {\n\t\t\t\t\t\tgetCountExistingCustomersToday {\n\t\t\t\t\t\t\ttotal\n\t\t\t\t\t\t\tperStore {\n\t\t\t\t\t\t\t\tstoreId\n\t\t\t\t\t\t\t\tcustomersCount\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t"]))),
        })
            .valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res.data.getCountExistingCustomersToday; }));
    };
    WarehousesService.prototype.getAllStores = function () {
        return this._apollo
            .query({
            query: graphql_tag__WEBPACK_IMPORTED_MODULE_5___default()(templateObject_4 || (templateObject_4 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n\t\t\t\t\tquery GetAllStores {\n\t\t\t\t\t\tgetAllStores {\n\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\t_createdAt\n\t\t\t\t\t\t\tusedCarriersIds\n\t\t\t\t\t\t\tgeoLocation {\n\t\t\t\t\t\t\t\tcity\n\t\t\t\t\t\t\t\tstreetAddress\n\t\t\t\t\t\t\t\thouse\n\t\t\t\t\t\t\t\tloc {\n\t\t\t\t\t\t\t\t\tcoordinates\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t"], ["\n\t\t\t\t\tquery GetAllStores {\n\t\t\t\t\t\tgetAllStores {\n\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\t_createdAt\n\t\t\t\t\t\t\tusedCarriersIds\n\t\t\t\t\t\t\tgeoLocation {\n\t\t\t\t\t\t\t\tcity\n\t\t\t\t\t\t\t\tstreetAddress\n\t\t\t\t\t\t\t\thouse\n\t\t\t\t\t\t\t\tloc {\n\t\t\t\t\t\t\t\t\tcoordinates\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t"]))),
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res.data.getAllStores; }));
    };
    WarehousesService.prototype.getStores = function (pagingOptions) {
        var _this = this;
        return this._apollo
            .watchQuery({
            query: graphql_tag__WEBPACK_IMPORTED_MODULE_5___default()(templateObject_5 || (templateObject_5 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n\t\t\t\t\tquery AllWarehouses($pagingOptions: PagingOptionsInput) {\n\t\t\t\t\t\twarehouses(pagingOptions: $pagingOptions) {\n\t\t\t\t\t\t\t_id\n\t\t\t\t\t\t\t_createdAt\n\t\t\t\t\t\t\tname\n\t\t\t\t\t\t\tcontactEmail\n\t\t\t\t\t\t\tcontactPhone\n\t\t\t\t\t\t\tlogo\n\t\t\t\t\t\t\tusername\n\t\t\t\t\t\t\tusedCarriersIds\n\t\t\t\t\t\t\tgeoLocation {\n\t\t\t\t\t\t\t\tcity\n\t\t\t\t\t\t\t\tstreetAddress\n\t\t\t\t\t\t\t\thouse\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t"], ["\n\t\t\t\t\tquery AllWarehouses($pagingOptions: PagingOptionsInput) {\n\t\t\t\t\t\twarehouses(pagingOptions: $pagingOptions) {\n\t\t\t\t\t\t\t_id\n\t\t\t\t\t\t\t_createdAt\n\t\t\t\t\t\t\tname\n\t\t\t\t\t\t\tcontactEmail\n\t\t\t\t\t\t\tcontactPhone\n\t\t\t\t\t\t\tlogo\n\t\t\t\t\t\t\tusername\n\t\t\t\t\t\t\tusedCarriersIds\n\t\t\t\t\t\t\tgeoLocation {\n\t\t\t\t\t\t\t\tcity\n\t\t\t\t\t\t\t\tstreetAddress\n\t\t\t\t\t\t\t\thouse\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t"]))),
            variables: { pagingOptions: pagingOptions },
            pollInterval: 5000,
        })
            .valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res.data.warehouses; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (ws) { return ws.map(function (w) { return _this._warehouseFactory(w); }); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["share"])());
    };
    WarehousesService.prototype.getNearbyStores = function (geoLocation) {
        var _this = this;
        return this._apollo
            .watchQuery({
            query: graphql_tag__WEBPACK_IMPORTED_MODULE_5___default()(templateObject_6 || (templateObject_6 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n\t\t\t\t\tquery GetNearbyStores($geoLocation: GeoLocationFindInput!) {\n\t\t\t\t\t\tnearbyStores(geoLocation: $geoLocation) {\n\t\t\t\t\t\t\t_id\n\t\t\t\t\t\t\tname\n\t\t\t\t\t\t\tcontactEmail\n\t\t\t\t\t\t\tcontactPhone\n\t\t\t\t\t\t\tlogo\n\t\t\t\t\t\t\tgeoLocation {\n\t\t\t\t\t\t\t\tcity\n\t\t\t\t\t\t\t\tstreetAddress\n\t\t\t\t\t\t\t\thouse\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t"], ["\n\t\t\t\t\tquery GetNearbyStores($geoLocation: GeoLocationFindInput!) {\n\t\t\t\t\t\tnearbyStores(geoLocation: $geoLocation) {\n\t\t\t\t\t\t\t_id\n\t\t\t\t\t\t\tname\n\t\t\t\t\t\t\tcontactEmail\n\t\t\t\t\t\t\tcontactPhone\n\t\t\t\t\t\t\tlogo\n\t\t\t\t\t\t\tgeoLocation {\n\t\t\t\t\t\t\t\tcity\n\t\t\t\t\t\t\t\tstreetAddress\n\t\t\t\t\t\t\t\thouse\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t"]))),
            pollInterval: 5000,
            variables: { geoLocation: geoLocation },
        })
            .valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res.data.nearbyStores; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (ws) { return ws.map(function (w) { return _this._warehouseFactory(w); }); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["share"])());
    };
    WarehousesService.prototype.removeByIds = function (ids) {
        return this._apollo.mutate({
            mutation: graphql_tag__WEBPACK_IMPORTED_MODULE_5___default()(templateObject_7 || (templateObject_7 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n\t\t\t\tmutation RemoveByIds($ids: [String!]!) {\n\t\t\t\t\tremoveWarehousesByIds(ids: $ids)\n\t\t\t\t}\n\t\t\t"], ["\n\t\t\t\tmutation RemoveByIds($ids: [String!]!) {\n\t\t\t\t\tremoveWarehousesByIds(ids: $ids)\n\t\t\t\t}\n\t\t\t"]))),
            variables: { ids: ids },
        });
    };
    WarehousesService.prototype.addProducts = function (warehouseId, products) {
        return this._apollo
            .mutate({
            mutation: graphql_tag__WEBPACK_IMPORTED_MODULE_5___default()(templateObject_8 || (templateObject_8 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n\t\t\t\t\tmutation AddProducts(\n\t\t\t\t\t\t$warehouseId: String!\n\t\t\t\t\t\t$products: [WarehouseProductInput!]!\n\t\t\t\t\t) {\n\t\t\t\t\t\taddWarehouseProducts(\n\t\t\t\t\t\t\twarehouseId: $warehouseId\n\t\t\t\t\t\t\tproducts: $products\n\t\t\t\t\t\t) {\n\t\t\t\t\t\t\tproduct {\n\t\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t"], ["\n\t\t\t\t\tmutation AddProducts(\n\t\t\t\t\t\t$warehouseId: String!\n\t\t\t\t\t\t$products: [WarehouseProductInput!]!\n\t\t\t\t\t) {\n\t\t\t\t\t\taddWarehouseProducts(\n\t\t\t\t\t\t\twarehouseId: $warehouseId\n\t\t\t\t\t\t\tproducts: $products\n\t\t\t\t\t\t) {\n\t\t\t\t\t\t\tproduct {\n\t\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t"]))),
            variables: {
                warehouseId: warehouseId,
                products: products,
            },
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (result) { return result.data['warehouseAddProducts']; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["share"])());
    };
    WarehousesService.prototype.removeProductsById = function (warehouseId, productsIds) {
        return this._apollo.mutate({
            mutation: graphql_tag__WEBPACK_IMPORTED_MODULE_5___default()(templateObject_9 || (templateObject_9 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n\t\t\t\tmutation RemoveProductsByIds(\n\t\t\t\t\t$warehouseId: String!\n\t\t\t\t\t$productsIds: [String!]!\n\t\t\t\t) {\n\t\t\t\t\tremoveWarehouseProducts(\n\t\t\t\t\t\twarehouseId: $warehouseId\n\t\t\t\t\t\tproductsIds: $productsIds\n\t\t\t\t\t)\n\t\t\t\t}\n\t\t\t"], ["\n\t\t\t\tmutation RemoveProductsByIds(\n\t\t\t\t\t$warehouseId: String!\n\t\t\t\t\t$productsIds: [String!]!\n\t\t\t\t) {\n\t\t\t\t\tremoveWarehouseProducts(\n\t\t\t\t\t\twarehouseId: $warehouseId\n\t\t\t\t\t\tproductsIds: $productsIds\n\t\t\t\t\t)\n\t\t\t\t}\n\t\t\t"]))),
            variables: { warehouseId: warehouseId, productsIds: productsIds },
        });
    };
    WarehousesService.prototype.getStoreById = function (id) {
        return this._apollo
            .query({
            query: graphql_tag__WEBPACK_IMPORTED_MODULE_5___default()(templateObject_10 || (templateObject_10 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n\t\t\t\t\tquery GetStoreById($id: String!) {\n\t\t\t\t\t\twarehouse(id: $id) {\n\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\tname\n\t\t\t\t\t\t\tlogo\n\t\t\t\t\t\t\tusedCarriersIds\n\t\t\t\t\t\t\tcontactEmail\n\t\t\t\t\t\t\tcontactPhone\n\t\t\t\t\t\t\tgeoLocation {\n\t\t\t\t\t\t\t\tcity\n\t\t\t\t\t\t\t\tstreetAddress\n\t\t\t\t\t\t\t\thouse\n\t\t\t\t\t\t\t\tloc {\n\t\t\t\t\t\t\t\t\tcoordinates\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t"], ["\n\t\t\t\t\tquery GetStoreById($id: String!) {\n\t\t\t\t\t\twarehouse(id: $id) {\n\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\tname\n\t\t\t\t\t\t\tlogo\n\t\t\t\t\t\t\tusedCarriersIds\n\t\t\t\t\t\t\tcontactEmail\n\t\t\t\t\t\t\tcontactPhone\n\t\t\t\t\t\t\tgeoLocation {\n\t\t\t\t\t\t\t\tcity\n\t\t\t\t\t\t\t\tstreetAddress\n\t\t\t\t\t\t\t\thouse\n\t\t\t\t\t\t\t\tloc {\n\t\t\t\t\t\t\t\t\tcoordinates\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t"]))),
            variables: { id: id },
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res.data['warehouse']; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["share"])());
    };
    WarehousesService.prototype.getCountOfMerchants = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var res;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this._apollo
                            .query({
                            query: graphql_tag__WEBPACK_IMPORTED_MODULE_5___default()(templateObject_11 || (templateObject_11 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n\t\t\t\t\tquery GetCountOfMerchants {\n\t\t\t\t\t\tgetCountOfMerchants\n\t\t\t\t\t}\n\t\t\t\t"], ["\n\t\t\t\t\tquery GetCountOfMerchants {\n\t\t\t\t\t\tgetCountOfMerchants\n\t\t\t\t\t}\n\t\t\t\t"]))),
                        })
                            .toPromise()];
                    case 1:
                        res = _a.sent();
                        return [2, res.data['getCountOfMerchants']];
                }
            });
        });
    };
    WarehousesService.prototype._warehouseFactory = function (warehouse) {
        return warehouse == null ? null : new _modules_server_common_entities_Warehouse__WEBPACK_IMPORTED_MODULE_3__["default"](warehouse);
    };
    WarehousesService.ctorParameters = function () { return [
        { type: apollo_angular__WEBPACK_IMPORTED_MODULE_2__["Apollo"] }
    ]; };
    WarehousesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [apollo_angular__WEBPACK_IMPORTED_MODULE_2__["Apollo"]])
    ], WarehousesService);
    return WarehousesService;
}());

var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11;


/***/ })

}]);
//# sourceMappingURL=default~carriers-carriers-module~track-track-module.js.map