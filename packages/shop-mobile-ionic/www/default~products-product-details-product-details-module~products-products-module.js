(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~products-product-details-product-details-module~products-products-module"],{

/***/ "./node_modules/@ngx-progressbar/core/fesm5/ngx-progressbar-core.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@ngx-progressbar/core/fesm5/ngx-progressbar-core.js ***!
  \**************************************************************************/
/*! exports provided: NgProgressModule, NgProgressComponent, NgProgressRef, NgProgress, NG_PROGRESS_CONFIG */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgProgressModule", function() { return NgProgressModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgProgressComponent", function() { return NgProgressComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgProgressRef", function() { return NgProgressRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgProgress", function() { return NgProgress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NG_PROGRESS_CONFIG", function() { return NG_PROGRESS_CONFIG; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");






/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgProgressRef = /** @class */ (function () {
    function NgProgressRef(customConfig, _onDestroyCallback) {
        var _this = this;
        this._onDestroyCallback = _onDestroyCallback;
        /**
         * Stream that increments and updates progress state
         */
        this._trickling = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Stream that combines "_trickling" and "config" streams
         */
        this._worker = rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"].EMPTY;
        this._state = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({ active: false, value: 0 });
        this._config = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](customConfig);
        this.state = this._state.asObservable();
        this.config = this._state.asObservable();
        this._worker = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])(this._trickling, this._config).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounce"])((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__read"])(_a, 2), start = _b[0], config = _b[1];
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(start ? config.debounceTime : 0);
        })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__read"])(_a, 2), start = _b[0], config = _b[1];
            return start ? _this.onTrickling(config) : _this.onComplete(config);
        }))).subscribe();
    }
    Object.defineProperty(NgProgressRef.prototype, "currState", {
        /** Get current progress state */
        get: /**
         * Get current progress state
         * @private
         * @return {?}
         */
        function () {
            return this._state.value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgProgressRef.prototype, "isStarted", {
        /** Check if progress has started */
        get: /**
         * Check if progress has started
         * @return {?}
         */
        function () {
            return this.currState.active;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgProgressRef.prototype, "started", {
        /** Progress start event */
        get: /**
         * Progress start event
         * @return {?}
         */
        function () {
            return this._state.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((/**
             * @param {?} state
             * @return {?}
             */
            function (state) { return state.active; })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])((/**
             * @param {?} active
             * @return {?}
             */
            function (active) { return active; })));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgProgressRef.prototype, "completed", {
        /** Progress ended event */
        get: /**
         * Progress ended event
         * @return {?}
         */
        function () {
            return this._state.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((/**
             * @param {?} state
             * @return {?}
             */
            function (state) { return state.active; })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])((/**
             * @param {?} active
             * @return {?}
             */
            function (active) { return !active; })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["skip"])(1));
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Start the progress
     */
    /**
     * Start the progress
     * @return {?}
     */
    NgProgressRef.prototype.start = /**
     * Start the progress
     * @return {?}
     */
    function () {
        this._trickling.next(true);
    };
    /**
     * Complete the progress
     */
    /**
     * Complete the progress
     * @return {?}
     */
    NgProgressRef.prototype.complete = /**
     * Complete the progress
     * @return {?}
     */
    function () {
        this._trickling.next(false);
    };
    /**
     * Increment the progress
     * @param amount
     */
    /**
     * Increment the progress
     * @param {?=} amount
     * @return {?}
     */
    NgProgressRef.prototype.inc = /**
     * Increment the progress
     * @param {?=} amount
     * @return {?}
     */
    function (amount) {
        /** @type {?} */
        var n = this.currState.value;
        if (!this.isStarted) {
            this.start();
        }
        else {
            if (typeof amount !== 'number') {
                amount = this._config.value.trickleFunc(n);
            }
            this.set(n + amount);
        }
    };
    /**
     * Set the progress
     * @param n
     */
    /**
     * Set the progress
     * @param {?} n
     * @return {?}
     */
    NgProgressRef.prototype.set = /**
     * Set the progress
     * @param {?} n
     * @return {?}
     */
    function (n) {
        this.setState({ value: this.clamp(n), active: true });
    };
    /**
     * Set config
     * @param config
     */
    /**
     * Set config
     * @param {?} config
     * @return {?}
     */
    NgProgressRef.prototype.setConfig = /**
     * Set config
     * @param {?} config
     * @return {?}
     */
    function (config) {
        this._config.next(Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, this._config.value, config));
    };
    /**
     * Destroy progress reference
     */
    /**
     * Destroy progress reference
     * @return {?}
     */
    NgProgressRef.prototype.destroy = /**
     * Destroy progress reference
     * @return {?}
     */
    function () {
        this._worker.unsubscribe();
        this._trickling.complete();
        this._state.complete();
        this._config.complete();
        this._onDestroyCallback();
    };
    /**
     * Set progress state
     * @param state
     */
    /**
     * Set progress state
     * @private
     * @param {?} state
     * @return {?}
     */
    NgProgressRef.prototype.setState = /**
     * Set progress state
     * @private
     * @param {?} state
     * @return {?}
     */
    function (state) {
        this._state.next(Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, this.currState, state));
    };
    /**
     * Clamps a value to be between min and max
     * @param n
     */
    /**
     * Clamps a value to be between min and max
     * @private
     * @param {?} n
     * @return {?}
     */
    NgProgressRef.prototype.clamp = /**
     * Clamps a value to be between min and max
     * @private
     * @param {?} n
     * @return {?}
     */
    function (n) {
        return Math.max(this._config.value.min, Math.min(this._config.value.max, n));
    };
    /**
     * Keeps incrementing the progress
     * @param config
     */
    /**
     * Keeps incrementing the progress
     * @private
     * @param {?} config
     * @return {?}
     */
    NgProgressRef.prototype.onTrickling = /**
     * Keeps incrementing the progress
     * @private
     * @param {?} config
     * @return {?}
     */
    function (config) {
        var _this = this;
        if (!this.isStarted) {
            this.set(this._config.value.min);
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(0, config.trickleSpeed).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((/**
         * @return {?}
         */
        function () { return _this.inc(); })));
    };
    /**
     * Completes then resets the progress
     * @param config
     */
    /**
     * Completes then resets the progress
     * @private
     * @param {?} config
     * @return {?}
     */
    NgProgressRef.prototype.onComplete = /**
     * Completes then resets the progress
     * @private
     * @param {?} config
     * @return {?}
     */
    function (config) {
        var _this = this;
        return !this.isStarted ? Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({}) : Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({}).pipe(
        // Completes the progress
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((/**
         * @return {?}
         */
        function () { return _this.setState({ value: 100 }); })), 
        // Hides the progress bar after a tiny delay
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(config.speed * 1.7), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((/**
         * @return {?}
         */
        function () { return _this.setState({ active: false }); })), 
        // Resets the progress state
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(config.speed), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((/**
         * @return {?}
         */
        function () { return _this.setState({ value: 0 }); })));
    };
    return NgProgressRef;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var NG_PROGRESS_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["InjectionToken"]('ngProgressConfig');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ɵ0 = /**
 * @param {?} n
 * @return {?}
 */
function (n) {
    if (n >= 0 && n < 20)
        return 10;
    if (n >= 20 && n < 50)
        return 4;
    if (n >= 50 && n < 80)
        return 2;
    if (n >= 80 && n < 99)
        return 0.5;
    return 0;
};
/** @type {?} */
var defaultConfig = {
    min: 8,
    max: 100,
    speed: 200,
    debounceTime: 0,
    trickleSpeed: 300,
    fixed: true,
    meteor: true,
    thick: false,
    spinner: true,
    ease: 'linear',
    color: '#1B95E0',
    direction: 'ltr+',
    spinnerPosition: 'right',
    trickleFunc: (ɵ0)
};
var NgProgress = /** @class */ (function () {
    function NgProgress(config) {
        /**
         * Store progress bar instances
         */
        this._instances = new Map();
        this.config = config ? Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, defaultConfig, config) : defaultConfig;
    }
    /**
     * Get or Create progress bar by ID
     * @param id
     * @param config
     */
    /**
     * Get or Create progress bar by ID
     * @param {?=} id
     * @param {?=} config
     * @return {?}
     */
    NgProgress.prototype.ref = /**
     * Get or Create progress bar by ID
     * @param {?=} id
     * @param {?=} config
     * @return {?}
     */
    function (id, config) {
        if (id === void 0) { id = 'root'; }
        if (this._instances.has(id)) {
            // Get ProgressRef instance
            /** @type {?} */
            var progressRef = this._instances.get(id);
            if (config) {
                progressRef.setConfig(Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, this.config, config));
            }
            return progressRef;
        }
        else {
            // Create new ProgressRef instance
            /** @type {?} */
            var progressRef = new NgProgressRef(Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, this.config, config), this.deleteInstance(id));
            return this._instances.set(id, progressRef).get(id);
        }
    };
    /**
     * Destroy all progress bar instances
     */
    /**
     * Destroy all progress bar instances
     * @return {?}
     */
    NgProgress.prototype.destroyAll = /**
     * Destroy all progress bar instances
     * @return {?}
     */
    function () {
        this._instances.forEach((/**
         * @param {?} ref
         * @return {?}
         */
        function (ref) { return ref.destroy(); }));
    };
    /**
     * A destroyer function for each progress bar instance
     */
    /**
     * A destroyer function for each progress bar instance
     * @private
     * @param {?} id
     * @return {?}
     */
    NgProgress.prototype.deleteInstance = /**
     * A destroyer function for each progress bar instance
     * @private
     * @param {?} id
     * @return {?}
     */
    function (id) {
        var _this = this;
        return (/**
         * @return {?}
         */
        function () {
            _this._instances.delete(id);
        });
    };
    NgProgress.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    NgProgress.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"], args: [NG_PROGRESS_CONFIG,] }] }
    ]; };
    /** @nocollapse */ NgProgress.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["defineInjectable"])({ factory: function NgProgress_Factory() { return new NgProgress(Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["inject"])(NG_PROGRESS_CONFIG, 8)); }, token: NgProgress, providedIn: "root" });
    return NgProgress;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgProgressComponent = /** @class */ (function () {
    function NgProgressComponent(_ngProgress) {
        this._ngProgress = _ngProgress;
        this._started = rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"].EMPTY;
        this._completed = rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"].EMPTY;
        /**
         * Creates a new instance if id is not already exists
         */
        this.id = 'root';
        /**
         * Initializes inputs from the global config
         */
        this.min = this._ngProgress.config.min;
        this.max = this._ngProgress.config.max;
        this.ease = this._ngProgress.config.ease;
        this.color = this._ngProgress.config.color;
        this.speed = this._ngProgress.config.speed;
        this.thick = this._ngProgress.config.thick;
        this.fixed = this._ngProgress.config.fixed;
        this.meteor = this._ngProgress.config.meteor;
        this.spinner = this._ngProgress.config.spinner;
        this.trickleSpeed = this._ngProgress.config.trickleSpeed;
        this.debounceTime = this._ngProgress.config.debounceTime;
        this.trickleFunc = this._ngProgress.config.trickleFunc;
        this.spinnerPosition = this._ngProgress.config.spinnerPosition;
        this.direction = this._ngProgress.config.direction;
        this.started = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        this.completed = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
    }
    Object.defineProperty(NgProgressComponent.prototype, "isStarted", {
        get: /**
         * @return {?}
         */
        function () {
            return this.progressRef.isStarted;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NgProgressComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        if (this.progressRef instanceof NgProgressRef) {
            // Update progress bar config when inputs change
            this.progressRef.setConfig({
                max: (this.max > 0 && this.max <= 100) ? this.max : 100,
                min: (this.min < 100 && this.min >= 0) ? this.min : 0,
                speed: this.speed,
                trickleSpeed: this.trickleSpeed,
                trickleFunc: this.trickleFunc,
                debounceTime: this.debounceTime
            });
        }
    };
    /**
     * @return {?}
     */
    NgProgressComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // Get progress bar service instance
        this.progressRef = this._ngProgress.ref(this.id, {
            max: this.max,
            min: this.min,
            speed: this.speed,
            trickleSpeed: this.trickleSpeed,
            debounceTime: this.debounceTime
        });
        // Subscribe to progress state
        this.state$ = this.progressRef.state.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((/**
         * @param {?} state
         * @return {?}
         */
        function (state) { return ({
            active: state.active,
            transform: "translate3d(" + state.value + "%,0,0)"
        }); })));
        // Subscribes to started and completed events on deman
        if (this.started.observers.length) {
            this._started = this.progressRef.started.subscribe((/**
             * @return {?}
             */
            function () { return _this.started.emit(); }));
        }
        if (this.completed.observers.length) {
            this._completed = this.progressRef.completed.subscribe((/**
             * @return {?}
             */
            function () { return _this.completed.emit(); }));
        }
    };
    /**
     * @return {?}
     */
    NgProgressComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._started.unsubscribe();
        this._completed.unsubscribe();
        if (this.progressRef instanceof NgProgressRef) {
            this.progressRef.destroy();
        }
    };
    /**
     * @return {?}
     */
    NgProgressComponent.prototype.start = /**
     * @return {?}
     */
    function () {
        this.progressRef.start();
    };
    /**
     * @return {?}
     */
    NgProgressComponent.prototype.complete = /**
     * @return {?}
     */
    function () {
        this.progressRef.complete();
    };
    /**
     * @param {?=} n
     * @return {?}
     */
    NgProgressComponent.prototype.inc = /**
     * @param {?=} n
     * @return {?}
     */
    function (n) {
        this.progressRef.inc(n);
    };
    /**
     * @param {?} n
     * @return {?}
     */
    NgProgressComponent.prototype.set = /**
     * @param {?} n
     * @return {?}
     */
    function (n) {
        this.progressRef.set(n);
    };
    NgProgressComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"], args: [{
                    selector: 'ng-progress',
                    host: {
                        'role': 'progressbar',
                        '[attr.spinnerPosition]': 'spinnerPosition',
                        '[attr.dir]': 'direction',
                        '[attr.thick]': 'thick',
                        '[attr.fixed]': 'fixed'
                    },
                    template: "\n    <ng-container *ngIf=\"state$ | async; let state\">\n      <div class=\"ng-progress-bar\"\n            [class.-active]=\"state.active\"\n            [style.transition]=\"'opacity ' + speed + 'ms ' + ease\">\n        <div class=\"ng-bar-placeholder\">\n          <div class=\"ng-bar\"\n                [style.transform]=\"state.transform\"\n                [style.backgroundColor]=\"color\"\n                [style.transition]=\"state.active ? 'all ' + speed + 'ms ' + ease : 'none'\">\n            <div *ngIf=\"meteor\" class=\"ng-meteor\" [style.boxShadow]=\"'0 0 10px '+ color + ', 0 0 5px ' + color\"></div>\n          </div>\n        </div>\n        <div *ngIf=\"spinner\" class=\"ng-spinner\">\n          <div class=\"ng-spinner-icon\"\n                [style.borderTopColor]=\"color\"\n                [style.borderLeftColor]=\"color\"></div>\n        </div>\n      </div>\n    </ng-container>\n  ",
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush,
                    preserveWhitespaces: false,
                    styles: ["ng-progress{z-index:999999;pointer-events:none}ng-progress[fixed=true] .ng-progress-bar,ng-progress[fixed=true] .ng-spinner{position:fixed}ng-progress[fixed=true] .ng-spinner{top:15px}ng-progress[fixed=true][spinnerPosition=left] .ng-spinner{left:15px}ng-progress[fixed=true][spinnerPosition=right] .ng-spinner{right:15px}ng-progress[thick=true] .ng-spinner-icon{width:24px;height:24px;border-width:3px}ng-progress[thick=true] .ng-bar-placeholder{height:3px!important}ng-progress[dir='ltr+'] .ng-meteor,ng-progress[dir=ltr-] .ng-meteor{-webkit-transform:rotate(3deg);transform:rotate(3deg)}ng-progress[dir='ltr+'][thick=true] .ng-meteor,ng-progress[dir=ltr-][thick=true] .ng-meteor{-webkit-transform:rotate(4deg);transform:rotate(4deg)}ng-progress[dir='ltr+'] .ng-bar,ng-progress[dir='rtl+'] .ng-bar{margin-left:-100%}ng-progress[dir='ltr+'] .ng-meteor,ng-progress[dir='rtl+'] .ng-meteor{right:0}ng-progress[dir='ltr+'] .ng-meteor,ng-progress[dir=rtl-] .ng-meteor{top:-3px}ng-progress[dir='ltr+'][thick=true] .ng-meteor,ng-progress[dir=rtl-][thick=true] .ng-meteor{top:-4px}ng-progress[dir='rtl+'] .ng-meteor,ng-progress[dir=ltr-] .ng-meteor{bottom:-3px}ng-progress[dir='rtl+'][thick=true] .ng-meteor,ng-progress[dir=ltr-][thick=true] .ng-meteor{bottom:-4px}ng-progress[dir='rtl+'] .ng-bar-placeholder,ng-progress[dir=ltr-] .ng-bar-placeholder{-webkit-transform:rotate(180deg);transform:rotate(180deg)}ng-progress[dir='rtl+'] .ng-spinner-icon,ng-progress[dir=ltr-] .ng-spinner-icon{animation-direction:reverse}ng-progress[dir='rtl+'] .ng-meteor,ng-progress[dir=rtl-] .ng-meteor{-webkit-transform:rotate(-3deg);transform:rotate(-3deg)}ng-progress[dir='rtl+'][thick=true] .ng-meteor,ng-progress[dir=rtl-][thick=true] .ng-meteor{-webkit-transform:rotate(-4deg);transform:rotate(-4deg)}ng-progress[spinnerPosition=left] .ng-spinner{left:10px}ng-progress[spinnerPosition=right] .ng-spinner{right:10px}.ng-progress-bar{position:relative;z-index:999999;top:0;left:0;width:100%;zoom:1;opacity:0}.ng-progress-bar.-active{opacity:1;transition:none}.ng-bar-placeholder{position:absolute;height:2px;width:100%}.ng-bar{width:100%;height:100%;-webkit-transform:translate(-100%,0,0);transform:translate(-100%,0,0)}.ng-meteor{display:block;position:absolute;width:100px;height:100%;opacity:1}.ng-spinner{position:absolute;display:block;z-index:1031;top:10px}.ng-spinner-icon{width:18px;height:18px;box-sizing:border-box;-webkit-animation:250ms linear infinite spinner-animation;animation:250ms linear infinite spinner-animation;border:2px solid transparent;border-radius:50%}@-webkit-keyframes spinner-animation{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spinner-animation{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}"]
                }] }
    ];
    /** @nocollapse */
    NgProgressComponent.ctorParameters = function () { return [
        { type: NgProgress }
    ]; };
    NgProgressComponent.propDecorators = {
        id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        min: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        max: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        ease: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        color: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        speed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        thick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        fixed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        meteor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        spinner: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        trickleSpeed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        debounceTime: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        trickleFunc: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        spinnerPosition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        direction: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        started: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"] }],
        completed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"] }]
    };
    return NgProgressComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgProgressModule = /** @class */ (function () {
    function NgProgressModule() {
    }
    /**
     * @param {?} config
     * @return {?}
     */
    NgProgressModule.withConfig = /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        return {
            ngModule: NgProgressModule,
            providers: [
                { provide: NG_PROGRESS_CONFIG, useValue: config }
            ]
        };
    };
    NgProgressModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"], args: [{
                    declarations: [NgProgressComponent],
                    exports: [NgProgressComponent],
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]]
                },] }
    ];
    return NgProgressModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=ngx-progressbar-core.js.map

/***/ }),

/***/ "./src/app/components/products/delivery-info/delivery-info.scss":
/*!**********************************************************************!*\
  !*** ./src/app/components/products/delivery-info/delivery-info.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".delivery-info {\n  text-align: center;\n  line-height: 1;\n  padding-right: 5px;\n  color: white;\n}\n\n.delivery-info .delivery-lines {\n  font-size: 80%;\n}\n\n.delivery-info .delivery-lines small {\n  display: block;\n}\n\n.delivery-info .delivery-sign {\n  font-size: 18px;\n}\n\n.delivery-info.over-image {\n  opacity: 0.8;\n  position: absolute;\n  right: 10px;\n  top: 60px;\n  font-size: 15px;\n  border-radius: 5px;\n  color: white;\n  padding: 5px;\n  z-index: 9999;\n  width: 70px;\n  line-height: 1;\n  text-align: center;\n}\n\n.delivery-info.over-image.show-top {\n  top: 10px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvZC9Xb3JrL0FuZ3VsYXIvTmV3IGZvbGRlciAoMikvRG9sY2VHcm9jZXJ5L3BhY2thZ2VzL3Nob3AtbW9iaWxlLWlvbmljL3NyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0cy9kZWxpdmVyeS1pbmZvL2RlbGl2ZXJ5LWluZm8uc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0cy9kZWxpdmVyeS1pbmZvL2RlbGl2ZXJ5LWluZm8uc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLFlBQVk7QUNDYjs7QURMQTtFQU9FLGNBQWM7QUNFaEI7O0FEVEE7RUFTRyxjQUFjO0FDSWpCOztBRGJBO0VBY0UsZUFBZTtBQ0dqQjs7QURDQTtFQUNDLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFNBQVM7RUFDVCxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixZQUFZO0VBQ1osYUFBYTtFQUNiLFdBQVc7RUFFWCxjQUFjO0VBQ2Qsa0JBQWtCO0FDQ25COztBREVBO0VBQ0MsU0FBUztBQ0NWIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0cy9kZWxpdmVyeS1pbmZvL2RlbGl2ZXJ5LWluZm8uc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kZWxpdmVyeS1pbmZvIHtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRsaW5lLWhlaWdodDogMTtcblx0cGFkZGluZy1yaWdodDogNXB4O1xuXHRjb2xvcjogd2hpdGU7XG5cblx0LmRlbGl2ZXJ5LWxpbmVzIHtcblx0XHRmb250LXNpemU6IDgwJTtcblx0XHRzbWFsbCB7XG5cdFx0XHRkaXNwbGF5OiBibG9jaztcblx0XHR9XG5cdH1cblxuXHQuZGVsaXZlcnktc2lnbiB7XG5cdFx0Zm9udC1zaXplOiAxOHB4O1xuXHR9XG59XG5cbi5kZWxpdmVyeS1pbmZvLm92ZXItaW1hZ2Uge1xuXHRvcGFjaXR5OiAwLjg7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0cmlnaHQ6IDEwcHg7XG5cdHRvcDogNjBweDtcblx0Zm9udC1zaXplOiAxNXB4O1xuXHRib3JkZXItcmFkaXVzOiA1cHg7XG5cdGNvbG9yOiB3aGl0ZTtcblx0cGFkZGluZzogNXB4O1xuXHR6LWluZGV4OiA5OTk5O1xuXHR3aWR0aDogNzBweDtcblxuXHRsaW5lLWhlaWdodDogMTtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZGVsaXZlcnktaW5mby5vdmVyLWltYWdlLnNob3ctdG9wIHtcblx0dG9wOiAxMHB4O1xufVxuIiwiLmRlbGl2ZXJ5LWluZm8ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmRlbGl2ZXJ5LWluZm8gLmRlbGl2ZXJ5LWxpbmVzIHtcbiAgZm9udC1zaXplOiA4MCU7XG59XG5cbi5kZWxpdmVyeS1pbmZvIC5kZWxpdmVyeS1saW5lcyBzbWFsbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uZGVsaXZlcnktaW5mbyAuZGVsaXZlcnktc2lnbiB7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLmRlbGl2ZXJ5LWluZm8ub3Zlci1pbWFnZSB7XG4gIG9wYWNpdHk6IDAuODtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTBweDtcbiAgdG9wOiA2MHB4O1xuICBmb250LXNpemU6IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiA1cHg7XG4gIHotaW5kZXg6IDk5OTk7XG4gIHdpZHRoOiA3MHB4O1xuICBsaW5lLWhlaWdodDogMTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZGVsaXZlcnktaW5mby5vdmVyLWltYWdlLnNob3ctdG9wIHtcbiAgdG9wOiAxMHB4O1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/components/products/delivery-info/delivery-info.ts":
/*!********************************************************************!*\
  !*** ./src/app/components/products/delivery-info/delivery-info.ts ***!
  \********************************************************************/
/*! exports provided: DeliveryInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeliveryInfoComponent", function() { return DeliveryInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _modules_server_common_entities_WarehouseProduct__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @modules/server.common/entities/WarehouseProduct */ "../common/src/entities/WarehouseProduct.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var app_services_store_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/services/store.service */ "./src/app/services/store.service.ts");
/* harmony import */ var _modules_server_common_enums_DeliveryType__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @modules/server.common/enums/DeliveryType */ "../common/src/enums/DeliveryType.ts");








var defaultDeliveryTimeMin = environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].DELIVERY_TIME_MIN;
var defaultDeliveryTimeMax = environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].DELIVERY_TIME_MAX;
var DeliveryInfoComponent = (function () {
    function DeliveryInfoComponent(translateService, store) {
        this.translateService = translateService;
        this.store = store;
        this.isTakeaway = this.store.deliveryType === _modules_server_common_enums_DeliveryType__WEBPACK_IMPORTED_MODULE_7__["default"].Takeaway;
    }
    DeliveryInfoComponent.prototype.ngOnInit = function () {
        this.getDeliveryText();
        this.getTakeawayText();
        this.getMinutesText();
        this.getReadyForText();
    };
    DeliveryInfoComponent.prototype.getDeliveryText = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _a;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4, this.translateService
                                .get('PRODUCTS_VIEW.DELIVERY')
                                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])())
                                .toPromise()];
                    case 1:
                        _a.deliveryText = _b.sent();
                        return [2];
                }
            });
        });
    };
    DeliveryInfoComponent.prototype.getTakeawayText = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _a;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4, this.translateService
                                .get('PRODUCTS_VIEW.TAKEAWAY')
                                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])())
                                .toPromise()];
                    case 1:
                        _a.takeawayText = _b.sent();
                        return [2];
                }
            });
        });
    };
    DeliveryInfoComponent.prototype.getMinutesText = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _a;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4, this.translateService
                                .get('PRODUCTS_VIEW.MINUTES')
                                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])())
                                .toPromise()];
                    case 1:
                        _a.minutesText = _b.sent();
                        return [2];
                }
            });
        });
    };
    DeliveryInfoComponent.prototype.getReadyForText = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _a;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4, this.translateService
                                .get('PRODUCTS_VIEW.READYFOR')
                                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])())
                                .toPromise()];
                    case 1:
                        _a.readyForText = _b.sent();
                        return [2];
                }
            });
        });
    };
    DeliveryInfoComponent.prototype.getIsInstant = function (currentProduct) {
        if (currentProduct == null) {
            return false;
        }
        var productInfo = currentProduct;
        if (productInfo.isDeliveryRequired) {
            if (productInfo.deliveryTimeMax !=
                null &&
                productInfo.deliveryTimeMax <= 15) {
                return true;
            }
            else {
                return false;
            }
        }
        else {
            if (productInfo.deliveryTimeMax == null ||
                productInfo.deliveryTimeMax <= 15) {
                return true;
            }
            else {
                return false;
            }
        }
    };
    DeliveryInfoComponent.prototype.getProductDeliverySignIconName = function () {
        if (this.currentProduct == null) {
            return '';
        }
        return this.isTakeaway ? 'fa-bolt' : 'fa-motorcycle';
    };
    DeliveryInfoComponent.prototype.getProductDeliveryLine1 = function () {
        if (this.currentProduct == null) {
            return '';
        }
        var productInfo = this.currentProduct;
        if (!this.isTakeaway) {
            if (productInfo.deliveryTimeMax != null &&
                productInfo.deliveryTimeMin != null) {
                return (productInfo.deliveryTimeMin +
                    '-' +
                    productInfo.deliveryTimeMax +
                    ' ' +
                    this.minutesText);
            }
            else {
                return (defaultDeliveryTimeMin +
                    '-' +
                    defaultDeliveryTimeMax +
                    ' ' +
                    this.minutesText);
            }
        }
        else {
            if (productInfo.deliveryTimeMax == null ||
                productInfo.deliveryTimeMax <= 15) {
                return this.readyForText;
            }
            else {
                if (productInfo.deliveryTimeMax != null &&
                    productInfo.deliveryTimeMin != null) {
                    return (productInfo.deliveryTimeMin +
                        '-' +
                        productInfo.deliveryTimeMax +
                        ' ' +
                        this.minutesText);
                }
                else {
                    return (defaultDeliveryTimeMin +
                        '-' +
                        defaultDeliveryTimeMax +
                        ' ' +
                        this.minutesText);
                }
            }
        }
    };
    DeliveryInfoComponent.prototype.getProductDeliveryLine2 = function () {
        if (this.currentProduct == null) {
            return '';
        }
        if (!this.isTakeaway) {
            return this.deliveryText;
        }
        else {
            return this.takeawayText;
        }
    };
    DeliveryInfoComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] },
        { type: app_services_store_service__WEBPACK_IMPORTED_MODULE_6__["Store"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _modules_server_common_entities_WarehouseProduct__WEBPACK_IMPORTED_MODULE_2__["default"])
    ], DeliveryInfoComponent.prototype, "currentProduct", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], DeliveryInfoComponent.prototype, "overImage", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], DeliveryInfoComponent.prototype, "hasDiscount", void 0);
    DeliveryInfoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'e-cu-delivery-info',
            template: "\n\t\t<div\n\t\t\tclass=\"delivery-info\"\n\t\t\t[ngClass]=\"{\n\t\t\t\t'over-image brand-light': overImage,\n\t\t\t\t'show-top': !hasDiscount\n\t\t\t}\"\n\t\t>\n\t\t\t<div class=\"delivery-sign\">\n\t\t\t\t<i class=\"fa {{ getProductDeliverySignIconName() }}\"></i>\n\t\t\t</div>\n\n\t\t\t<div class=\" delivery-lines\">\n\t\t\t\t<small>{{ getProductDeliveryLine1() }}</small>\n\t\t\t\t<small>{{ getProductDeliveryLine2() }}</small>\n\t\t\t</div>\n\t\t</div>\n\t",
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./delivery-info.scss */ "./src/app/components/products/delivery-info/delivery-info.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
            app_services_store_service__WEBPACK_IMPORTED_MODULE_6__["Store"]])
    ], DeliveryInfoComponent);
    return DeliveryInfoComponent;
}());



/***/ }),

/***/ "./src/app/components/products/discount/discount.scss":
/*!************************************************************!*\
  !*** ./src/app/components/products/discount/discount.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".discount-circle {\n  opacity: 0.8;\n  position: absolute;\n  right: 10px;\n  top: 10px;\n  font-size: 15px;\n  border-radius: 5px;\n  color: white;\n  padding: 5px;\n  z-index: 9999;\n  line-height: 1;\n  text-align: center;\n  width: 70px;\n}\n\n.discount-circle .price-initial {\n  font-size: 15px;\n  text-decoration: line-through;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvZC9Xb3JrL0FuZ3VsYXIvTmV3IGZvbGRlciAoMikvRG9sY2VHcm9jZXJ5L3BhY2thZ2VzL3Nob3AtbW9iaWxlLWlvbmljL3NyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0cy9kaXNjb3VudC9kaXNjb3VudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3Byb2R1Y3RzL2Rpc2NvdW50L2Rpc2NvdW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxTQUFTO0VBQ1QsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osWUFBWTtFQUNaLGFBQWE7RUFFYixjQUFjO0VBQ2Qsa0JBQWtCO0VBRWxCLFdBQVc7QUNEWjs7QURiQTtFQWdCRSxlQUFlO0VBQ2YsNkJBQTZCO0FDQy9CIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0cy9kaXNjb3VudC9kaXNjb3VudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRpc2NvdW50LWNpcmNsZSB7XG5cdG9wYWNpdHk6IDAuODtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHRyaWdodDogMTBweDtcblx0dG9wOiAxMHB4O1xuXHRmb250LXNpemU6IDE1cHg7XG5cdGJvcmRlci1yYWRpdXM6IDVweDtcblx0Y29sb3I6IHdoaXRlO1xuXHRwYWRkaW5nOiA1cHg7XG5cdHotaW5kZXg6IDk5OTk7XG5cblx0bGluZS1oZWlnaHQ6IDE7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblxuXHR3aWR0aDogNzBweDtcblx0LnByaWNlLWluaXRpYWwge1xuXHRcdGZvbnQtc2l6ZTogMTVweDtcblx0XHR0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcblx0fVxufVxuIiwiLmRpc2NvdW50LWNpcmNsZSB7XG4gIG9wYWNpdHk6IDAuODtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTBweDtcbiAgdG9wOiAxMHB4O1xuICBmb250LXNpemU6IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiA1cHg7XG4gIHotaW5kZXg6IDk5OTk7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiA3MHB4O1xufVxuXG4uZGlzY291bnQtY2lyY2xlIC5wcmljZS1pbml0aWFsIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/components/products/discount/discount.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/products/discount/discount.ts ***!
  \**********************************************************/
/*! exports provided: DiscountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscountComponent", function() { return DiscountComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _modules_server_common_entities_WarehouseProduct__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @modules/server.common/entities/WarehouseProduct */ "../common/src/entities/WarehouseProduct.ts");



var DiscountComponent = (function () {
    function DiscountComponent() {
    }
    DiscountComponent.prototype.getDiscount = function () {
        if (!this.currentProduct ||
            this.currentProduct == null ||
            !this.currentProduct.initialPrice ||
            this.currentProduct.price === this.currentProduct.initialPrice) {
            return 0;
        }
        return Math.floor((1 - this.currentProduct.price / this.currentProduct.initialPrice) *
            100);
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _modules_server_common_entities_WarehouseProduct__WEBPACK_IMPORTED_MODULE_2__["default"])
    ], DiscountComponent.prototype, "currentProduct", void 0);
    DiscountComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'e-cu-discount',
            template: "\n\t\t<div *ngIf=\"getDiscount() != 0\" class=\"discount-circle brand-light\">\n\t\t\t<div class=\"price-initial\">\n\t\t\t\t{{ currentProduct ? '$' + currentProduct.initialPrice : '' }}\n\t\t\t</div>\n\t\t\t<span\n\t\t\t\t><i class=\"fa fa-scissors\" aria-hidden=\"true\"></i>\n\t\t\t\t{{ getDiscount() }}%</span\n\t\t\t>\n\t\t</div>\n\t",
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./discount.scss */ "./src/app/components/products/discount/discount.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], DiscountComponent);
    return DiscountComponent;
}());



/***/ }),

/***/ "./src/app/components/products/products.module.ts":
/*!********************************************************!*\
  !*** ./src/app/components/products/products.module.ts ***!
  \********************************************************/
/*! exports provided: ProductsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsModule", function() { return ProductsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _discount_discount__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./discount/discount */ "./src/app/components/products/discount/discount.ts");
/* harmony import */ var _delivery_info_delivery_info__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./delivery-info/delivery-info */ "./src/app/components/products/delivery-info/delivery-info.ts");







var ProductsModule = (function () {
    function ProductsModule() {
    }
    ProductsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"].forChild()],
            exports: [_discount_discount__WEBPACK_IMPORTED_MODULE_5__["DiscountComponent"], _delivery_info_delivery_info__WEBPACK_IMPORTED_MODULE_6__["DeliveryInfoComponent"]],
            declarations: [_discount_discount__WEBPACK_IMPORTED_MODULE_5__["DiscountComponent"], _delivery_info_delivery_info__WEBPACK_IMPORTED_MODULE_6__["DeliveryInfoComponent"]],
        })
    ], ProductsModule);
    return ProductsModule;
}());



/***/ }),

/***/ "./src/app/components/warehouse-logo/warehouse-logo.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/warehouse-logo/warehouse-logo.component.ts ***!
  \***********************************************************************/
/*! exports provided: WarehouseLogoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WarehouseLogoComponent", function() { return WarehouseLogoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var WarehouseLogoComponent = (function () {
    function WarehouseLogoComponent() {
        this.border = false;
        this.light = false;
        return;
    }
    WarehouseLogoComponent.prototype.ngOnInit = function () {
        return;
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], WarehouseLogoComponent.prototype, "logo", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.bordered'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], WarehouseLogoComponent.prototype, "border", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], WarehouseLogoComponent.prototype, "light", void 0);
    WarehouseLogoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'e-cu-warehouse-logo',
            template: "\n\t\t<img [src]=\"logo\" [ngClass]=\"{ bordered: border, lighted: light }\" />\n\t",
            styles: ["\n\t\t\t:host {\n\t\t\t\twidth: 56px;\n\t\t\t\theight: 56px;\n\t\t\t\tborder-radius: 50%;\n\t\t\t\tbackground-color: #fff;\n\t\t\t\tdisplay: flex;\n\t\t\t\tjustify-content: center;\n\t\t\t\talign-items: center;\n\t\t\t}\n\n\t\t\t:host.bordered {\n\t\t\t\tborder: solid #95989a 1px;\n\t\t\t}\n\n\t\t\timg {\n\t\t\t\tmax-width: 69%;\n\t\t\t\tmax-height: 69%;\n\t\t\t\tuser-drag: none;\n\t\t\t\tuser-select: none;\n\t\t\t\t-moz-user-select: none;\n\t\t\t\t-webkit-user-drag: none;\n\t\t\t\t-webkit-user-select: none;\n\t\t\t\t-ms-user-select: none;\n\t\t\t\twidth: auto;\n\t\t\t\theight: auto;\n\t\t\t}\n\n\t\t\timg.light {\n\t\t\t\topacity: 0.8;\n\t\t\t}\n\t\t"]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], WarehouseLogoComponent);
    return WarehouseLogoComponent;
}());



/***/ }),

/***/ "./src/app/components/warehouse-logo/warehouse-logo.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/components/warehouse-logo/warehouse-logo.module.ts ***!
  \********************************************************************/
/*! exports provided: WarehouseLogoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WarehouseLogoModule", function() { return WarehouseLogoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _warehouse_logo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./warehouse-logo.component */ "./src/app/components/warehouse-logo/warehouse-logo.component.ts");




var WarehouseLogoModule = (function () {
    function WarehouseLogoModule() {
    }
    WarehouseLogoModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
            exports: [_warehouse_logo_component__WEBPACK_IMPORTED_MODULE_3__["WarehouseLogoComponent"]],
            declarations: [_warehouse_logo_component__WEBPACK_IMPORTED_MODULE_3__["WarehouseLogoComponent"]],
            providers: [],
        })
    ], WarehouseLogoModule);
    return WarehouseLogoModule;
}());



/***/ }),

/***/ "./src/app/pages/+products/+order/order-popup.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/+products/+order/order-popup.component.ts ***!
  \*****************************************************************/
/*! exports provided: OrderPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderPopupComponent", function() { return OrderPopupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OrderPopupComponent = (function () {
    function OrderPopupComponent() {
    }
    OrderPopupComponent.prototype.ngOnInit = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
            return [2];
        }); });
    };
    OrderPopupComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'e-cu-order-popup',
            template: "",
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], OrderPopupComponent);
    return OrderPopupComponent;
}());



/***/ }),

/***/ "./src/app/pages/+products/+order/order.module.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/+products/+order/order.module.ts ***!
  \********************************************************/
/*! exports provided: OrderPageModule, stripeLoaderFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderPageModule", function() { return OrderPageModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stripeLoaderFactory", function() { return stripeLoaderFactory; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _order_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./order.page */ "./src/app/pages/+products/+order/order.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _order_popup_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./order-popup.component */ "./src/app/pages/+products/+order/order-popup.component.ts");
/* harmony import */ var _components_elapsed_time_elapsed_time_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/elapsed-time/elapsed-time.module */ "./src/app/components/elapsed-time/elapsed-time.module.ts");
/* harmony import */ var app_services_stripeLoader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/services/stripeLoader */ "./src/app/services/stripeLoader.ts");
/* harmony import */ var _common_order_info_common_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./common/order-info-common.module */ "./src/app/pages/+products/+order/common/order-info-common.module.ts");












var routes = [
    {
        path: '/test',
        component: _order_popup_component__WEBPACK_IMPORTED_MODULE_8__["OrderPopupComponent"],
    },
];
var OrderPageModule = (function () {
    function OrderPageModule() {
    }
    OrderPageModule_1 = OrderPageModule;
    var OrderPageModule_1;
    OrderPageModule = OrderPageModule_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forChild(),
                _components_elapsed_time_elapsed_time_module__WEBPACK_IMPORTED_MODULE_9__["ElapsedTimeModule"],
                _common_order_info_common_module__WEBPACK_IMPORTED_MODULE_11__["OrderInfoCommonModule"],
            ],
            entryComponents: [_order_page__WEBPACK_IMPORTED_MODULE_6__["OrderPage"]],
            declarations: [_order_page__WEBPACK_IMPORTED_MODULE_6__["OrderPage"], _order_popup_component__WEBPACK_IMPORTED_MODULE_8__["OrderPopupComponent"]],
            providers: [
                app_services_stripeLoader__WEBPACK_IMPORTED_MODULE_10__["StripeLoader"],
                {
                    provide: OrderPageModule_1,
                    useFactory: stripeLoaderFactory,
                    deps: [app_services_stripeLoader__WEBPACK_IMPORTED_MODULE_10__["StripeLoader"]],
                },
            ],
        })
    ], OrderPageModule);
    return OrderPageModule;
}());

function stripeLoaderFactory(provider) {
    return function () { return provider; };
}


/***/ }),

/***/ "./src/app/pages/+products/+order/takeaway/popup/popup.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/+products/+order/takeaway/popup/popup.module.ts ***!
  \***********************************************************************/
/*! exports provided: OrderTakeawayInfoPopupModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderTakeawayInfoPopupModule", function() { return OrderTakeawayInfoPopupModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _cancel_cancel_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../+cancel/cancel.module */ "./src/app/pages/+products/+order/+cancel/cancel.module.ts");
/* harmony import */ var _issue_issue_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../issue/issue.module */ "./src/app/pages/+products/+order/issue/issue.module.ts");
/* harmony import */ var _common_order_info_common_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../common/order-info-common.module */ "./src/app/pages/+products/+order/common/order-info-common.module.ts");
/* harmony import */ var _popup_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./popup.component */ "./src/app/pages/+products/+order/takeaway/popup/popup.component.ts");
/* harmony import */ var app_components_elapsed_time_elapsed_time_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/components/elapsed-time/elapsed-time.module */ "./src/app/components/elapsed-time/elapsed-time.module.ts");
/* harmony import */ var _common_takeaway_common_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../common/takeaway-common.module */ "./src/app/pages/+products/+order/takeaway/common/takeaway-common.module.ts");












var OrderTakeawayInfoPopupModule = (function () {
    function OrderTakeawayInfoPopupModule() {
    }
    OrderTakeawayInfoPopupModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"].forChild(),
                _cancel_cancel_module__WEBPACK_IMPORTED_MODULE_6__["CancelPageModule"],
                _issue_issue_module__WEBPACK_IMPORTED_MODULE_7__["IssuePageModule"],
                _common_order_info_common_module__WEBPACK_IMPORTED_MODULE_8__["OrderInfoCommonModule"],
                app_components_elapsed_time_elapsed_time_module__WEBPACK_IMPORTED_MODULE_10__["ElapsedTimeModule"],
                _common_takeaway_common_module__WEBPACK_IMPORTED_MODULE_11__["TakeawayCommonModule"],
            ],
            entryComponents: [_popup_component__WEBPACK_IMPORTED_MODULE_9__["OrderTakeawayInfoPopup"]],
            declarations: [_popup_component__WEBPACK_IMPORTED_MODULE_9__["OrderTakeawayInfoPopup"]],
            providers: [],
        })
    ], OrderTakeawayInfoPopupModule);
    return OrderTakeawayInfoPopupModule;
}());



/***/ }),

/***/ "./src/app/services/stripeLoader.ts":
/*!******************************************!*\
  !*** ./src/app/services/stripeLoader.ts ***!
  \******************************************/
/*! exports provided: StripeLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StripeLoader", function() { return StripeLoader; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var StripeLoader = (function () {
    function StripeLoader() {
        this.load();
    }
    StripeLoader.prototype.load = function () {
        var node = document.createElement('script');
        node.src = "https://checkout.stripe.com/checkout.js";
        node.type = 'text/javascript';
        document.getElementsByTagName('head')[0].appendChild(node);
    };
    StripeLoader = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], StripeLoader);
    return StripeLoader;
}());



/***/ })

}]);
//# sourceMappingURL=default~products-product-details-product-details-module~products-products-module.js.map