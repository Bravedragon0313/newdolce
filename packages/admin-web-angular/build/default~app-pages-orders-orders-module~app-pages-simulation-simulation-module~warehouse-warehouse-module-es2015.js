(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~app-pages-orders-orders-module~app-pages-simulation-simulation-module~warehouse-warehouse-module"],{

/***/ "./node_modules/ng-simple-slideshow/ng-simple-slideshow.js":
/*!*****************************************************************!*\
  !*** ./node_modules/ng-simple-slideshow/ng-simple-slideshow.js ***!
  \*****************************************************************/
/*! exports provided: SlideshowModule, ɵa, ɵb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlideshowModule", function() { return SlideshowModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return SlideshowComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return SwipeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");




class SwipeService {
    /**
     * \@description detect the direction of the swipe, and return a -1 or 1 if the duration is long enough
     *              else return a 0 to do nothing
     * @param {?} e
     * @param {?} when
     * @return {?}
     */
    swipe(e, when) {
        const /** @type {?} */ coord = [e.changedTouches[0].pageX, e.changedTouches[0].pageY];
        const /** @type {?} */ time = new Date().getTime();
        if (when === 'start') {
            this._swipeCoord = coord;
            this._swipeTime = time;
        }
        else if (when === 'end') {
            const /** @type {?} */ direction = [coord[0] - this._swipeCoord[0], coord[1] - this._swipeCoord[1]];
            const /** @type {?} */ duration = time - this._swipeTime;
            if (duration < 1000 // Short enough
                && Math.abs(direction[1]) < Math.abs(direction[0]) // Horizontal enough
                && Math.abs(direction[0]) > 30) {
                return direction[0] < 0 ? 1 : -1;
            }
        }
        return 0;
    }
}
SwipeService.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
];
/**
 * @nocollapse
 */
SwipeService.ctorParameters = () => [];

const FIRST_SLIDE_KEY = Object(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["makeStateKey"])('firstSlide');
class SlideshowComponent {
    /**
     * @param {?} _swipeService
     * @param {?} _renderer
     * @param {?} _transferState
     * @param {?} _ngZone
     * @param {?} sanitizer
     * @param {?} platform_id
     * @param {?} document
     */
    constructor(_swipeService, _renderer, _transferState, _ngZone, sanitizer, platform_id, document) {
        this._swipeService = _swipeService;
        this._renderer = _renderer;
        this._transferState = _transferState;
        this._ngZone = _ngZone;
        this.sanitizer = sanitizer;
        this.platform_id = platform_id;
        this.document = document;
        this.slideIndex = -1;
        this.slides = [];
        this._initial = true;
        this._isHidden = false;
        this.imageUrls = [];
        this.height = '100%';
        this.showArrows = true;
        this.disableSwiping = false;
        this.autoPlay = false;
        this.autoPlayInterval = 3333;
        this.stopAutoPlayOnSlide = true;
        this.autoPlayWaitForLazyLoad = false;
        this.backgroundSize = 'cover';
        this.backgroundPosition = 'center center';
        this.backgroundRepeat = 'no-repeat';
        this.showDots = false;
        this.dotColor = '#FFF';
        this.showCaptions = true;
        this.captionColor = '#FFF';
        this.captionBackground = 'rgba(0, 0, 0, .35)';
        this.lazyLoad = false;
        this.hideOnNoSlides = false;
        this.fullscreen = false;
        this.onSlideLeft = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onSlideRight = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onSwipeLeft = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onSwipeRight = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onFullscreenExit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onIndexChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @return {?}
     */
    get safeStyleDotColor() {
        return this.sanitizer.bypassSecurityTrustStyle(`--dot-color: ${this.dotColor}`);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.debug !== undefined) {
            console.warn('[Deprecation Warning]: The debug input will be removed from ng-simple-slideshow in 1.3.0');
        }
    }
    /**
     * @return {?}
     */
    ngDoCheck() {
        // if this is the first being called, create a copy of the input
        if (this.imageUrls && this.imageUrls.length > 0) {
            if (this._initial === true) {
                this._urlCache = Array.from(this.imageUrls);
            }
            if (this._isHidden === true) {
                this._renderer.removeStyle(this.container.nativeElement, 'display');
                this._isHidden = false;
            }
            this.setSlides();
        }
        else if (this.hideOnNoSlides === true) {
            this._renderer.setStyle(this.container.nativeElement, 'display', 'none');
            this._isHidden = true;
        }
        this.setStyles();
        this.handleAutoPlay();
    }
    /**
     * \@description this is the function that should be called to make the slides change.
     *              indexDirection to move back is -1, to move forward is 1, and to stay in place is 0.
     *              0 is taken into account for failed swipes
     * @param {?} indexDirection
     * @param {?=} isSwipe
     * @return {?}
     */
    onSlide(indexDirection, isSwipe) {
        this.handleAutoPlay(this.stopAutoPlayOnSlide);
        this.slide(indexDirection, isSwipe);
    }
    /**
     * \@description Use the swipe service to detect swipe events from phone and tablets
     * @param {?} e
     * @param {?} when
     * @return {?}
     */
    onSwipe(e, when) {
        if (this.disableSwiping === true) {
            return;
        }
        const /** @type {?} */ indexDirection = this._swipeService.swipe(e, when);
        // handle a failed swipe
        if (indexDirection === 0) {
            return;
        }
        else {
            this.onSlide(indexDirection, true);
        }
    }
    /**
     * \@description Redirect to current slide "href" if defined
     * @param {?} e
     * @return {?}
     */
    onClick(e) {
        e.preventDefault();
        const /** @type {?} */ currentSlide = this.slides.length > 0 && this.slides[this.slideIndex];
        if (currentSlide && currentSlide.image.clickAction) {
            currentSlide.image.clickAction();
        }
        else if (currentSlide && currentSlide.image.href) {
            this.document.location.href = currentSlide.image.href;
        }
    }
    /**
     * \@description set the index to the desired index - 1 and simulate a right slide
     * @param {?} index
     * @return {?}
     */
    goToSlide(index) {
        const /** @type {?} */ beforeClickIndex = this.slideIndex;
        this.slideIndex = index - 1;
        this.setSlideIndex(1);
        if (!this.slides[this.slideIndex].loaded) {
            this.loadRemainingSlides();
        }
        this.handleAutoPlay(this.stopAutoPlayOnSlide);
        this.slideRight(beforeClickIndex);
        this.slides[beforeClickIndex].selected = false;
        this.slides[this.slideIndex].selected = true;
    }
    /**
     * \@description set the index to the desired index - 1 and simulate a right slide
     * @param {?} index
     * @return {?}
     */
    getSlideStyle(index) {
        const /** @type {?} */ slide = this.slides[index];
        if (slide.loaded) {
            return {
                "background-image": 'url(' + slide.image.url + ')',
                "background-size": slide.image.backgroundSize || this.backgroundSize,
                "background-position": slide.image.backgroundPosition || this.backgroundPosition,
                "background-repeat": slide.image.backgroundRepeat || this.backgroundRepeat
            };
        }
        else {
            // doesn't compile correctly if returning an empty object, sooooo.....
            return {
                "background-image": undefined,
                "background-size": undefined,
                "background-position": undefined,
                "background-repeat": undefined
            };
        }
    }
    /**
     * @param {?} e
     * @return {?}
     */
    exitFullScreen(e) {
        e.preventDefault();
        this.fullscreen = false;
        this.onFullscreenExit.emit(true);
    }
    /**
     * \@description Set the new slide index, then make the transition happen.
     * @param {?} indexDirection
     * @param {?=} isSwipe
     * @return {?}
     */
    slide(indexDirection, isSwipe) {
        const /** @type {?} */ oldIndex = this.slideIndex;
        this.setSlideIndex(indexDirection);
        if (!this.slides[this.slideIndex].loaded) {
            this.loadRemainingSlides();
        }
        if (indexDirection === 1) {
            this.slideRight(oldIndex, isSwipe);
        }
        else {
            this.slideLeft(oldIndex, isSwipe);
        }
        this.slides[oldIndex].selected = false;
        this.slides[this.slideIndex].selected = true;
    }
    /**
     * \@description This is just treating the url array like a circular list.
     * @param {?} indexDirection
     * @return {?}
     */
    setSlideIndex(indexDirection) {
        this.slideIndex += indexDirection;
        if (this.slideIndex < 0) {
            this.slideIndex = this.slides.length - 1;
        }
        if (this.slideIndex >= this.slides.length) {
            this.slideIndex = 0;
        }
        this.onIndexChanged.emit(this.slideIndex);
    }
    /**
     * \@description This function handles the variables to move the CSS classes around accordingly.
     *              In order to correctly handle animations, the new slide as well as the slides to
     *              the left and right are assigned classes.
     * @param {?} oldIndex
     * @param {?=} isSwipe
     * @return {?}
     */
    slideLeft(oldIndex, isSwipe) {
        if (isSwipe === true) {
            this.onSwipeLeft.emit(this.slideIndex);
        }
        else {
            this.onSlideLeft.emit(this.slideIndex);
        }
        this.slides[this.getLeftSideIndex(oldIndex)].leftSide = false;
        this.slides[oldIndex].leftSide = true;
        this.slides[oldIndex].action = 'slideOutLeft';
        this.slides[this.slideIndex].rightSide = false;
        this.slides[this.getRightSideIndex()].rightSide = true;
        this.slides[this.slideIndex].action = 'slideInRight';
    }
    /**
     * \@description This function handles the variables to move the CSS classes around accordingly.
     *              In order to correctly handle animations, the new slide as well as the slides to
     *              the left and right are assigned classes.
     * @param {?} oldIndex
     * @param {?=} isSwipe
     * @return {?}
     */
    slideRight(oldIndex, isSwipe) {
        if (isSwipe === true) {
            this.onSwipeRight.emit(this.slideIndex);
        }
        else {
            this.onSlideRight.emit(this.slideIndex);
        }
        this.slides[this.getRightSideIndex(oldIndex)].rightSide = false;
        this.slides[oldIndex].rightSide = true;
        this.slides[oldIndex].action = 'slideOutRight';
        this.slides[this.slideIndex].leftSide = false;
        this.slides[this.getLeftSideIndex()].leftSide = true;
        this.slides[this.slideIndex].action = 'slideInLeft';
    }
    /**
     * \@description Check to make sure slide images have been set or haven't changed
     * @return {?}
     */
    setSlides() {
        if (this.imageUrls) {
            if (this.checkCache() || this._initial === true) {
                this._initial = false;
                this._urlCache = Array.from(this.imageUrls);
                this.slides = [];
                if (this.lazyLoad === true) {
                    this.buildLazyLoadSlideArray();
                }
                else {
                    this.buildSlideArray();
                }
            }
        }
    }
    /**
     * \@description create the slides without background urls, which will be added in
     *              for the "lazy load," then load only the first slide
     * @return {?}
     */
    buildLazyLoadSlideArray() {
        for (let /** @type {?} */ image of this.imageUrls) {
            this.slides.push({
                image: (typeof image === 'string' ? { url: null } : { url: null, href: image.href || '' }),
                action: '',
                leftSide: false,
                rightSide: false,
                selected: false,
                loaded: false
            });
        }
        this.slideIndex = 0;
        this.slides[this.slideIndex].selected = true;
        this.loadFirstSlide();
        this.onIndexChanged.emit(this.slideIndex);
    }
    /**
     * \@description create the slides with background urls all at once
     * @return {?}
     */
    buildSlideArray() {
        for (let /** @type {?} */ image of this.imageUrls) {
            this.slides.push({
                image: (typeof image === 'string' ? { url: image } : image),
                action: '',
                leftSide: false,
                rightSide: false,
                selected: false,
                loaded: true
            });
        }
        this.slideIndex = 0;
        this.slides[this.slideIndex].selected = true;
        this.onIndexChanged.emit(this.slideIndex);
    }
    /**
     * \@description load the first slide image if lazy loading
     *              this takes server side and browser side into account
     * @return {?}
     */
    loadFirstSlide() {
        const /** @type {?} */ tmpIndex = this.slideIndex;
        const /** @type {?} */ tmpImage = this.imageUrls[tmpIndex];
        // if server side, we don't need to worry about the rest of the slides
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformServer"])(this.platform_id)) {
            this.slides[tmpIndex].image = (typeof tmpImage === 'string' ? { url: tmpImage } : tmpImage);
            this.slides[tmpIndex].loaded = true;
            this._transferState.set(FIRST_SLIDE_KEY, this.slides[tmpIndex]);
        }
        else {
            const /** @type {?} */ firstSlideFromTransferState = this._transferState.get(FIRST_SLIDE_KEY, /** @type {?} */ (null));
            // if the first slide didn't finish loading on the server side, we need to load it
            if (firstSlideFromTransferState === null) {
                let /** @type {?} */ loadImage = new Image();
                loadImage.src = (typeof tmpImage === 'string' ? tmpImage : tmpImage.url);
                loadImage.addEventListener('load', () => {
                    this.slides[tmpIndex].image = (typeof tmpImage === 'string' ? { url: tmpImage } : tmpImage);
                    this.slides[tmpIndex].loaded = true;
                });
            }
            else {
                this.slides[tmpIndex] = firstSlideFromTransferState;
                this._transferState.remove(FIRST_SLIDE_KEY);
            }
        }
    }
    /**
     * \@description if lazy loading in browser, start loading remaining slides
     * \@todo: figure out how to not show the spinner if images are loading fast enough
     * @return {?}
     */
    loadRemainingSlides() {
        for (let /** @type {?} */ i = 0; i < this.slides.length; i++) {
            if (!this.slides[i].loaded) {
                new Promise((resolve) => {
                    const /** @type {?} */ tmpImage = this.imageUrls[i];
                    let /** @type {?} */ loadImage = new Image();
                    loadImage.addEventListener('load', () => {
                        this.slides[i].image = (typeof tmpImage === 'string' ? { url: tmpImage } : tmpImage);
                        this.slides[i].loaded = true;
                        resolve();
                    });
                    loadImage.src = (typeof tmpImage === 'string' ? tmpImage : tmpImage.url);
                });
            }
        }
    }
    /**
     * \@description Start or stop autoPlay, don't do it at all server side
     * @param {?=} stopAutoPlay
     * @return {?}
     */
    handleAutoPlay(stopAutoPlay) {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformServer"])(this.platform_id)) {
            return;
        }
        if (stopAutoPlay === true || this.autoPlay === false) {
            if (this._autoplayIntervalId) {
                this._ngZone.runOutsideAngular(() => clearInterval(this._autoplayIntervalId));
                this._autoplayIntervalId = null;
            }
        }
        else if (!this._autoplayIntervalId) {
            this._ngZone.runOutsideAngular(() => {
                this._autoplayIntervalId = setInterval(() => {
                    if (!this.autoPlayWaitForLazyLoad || (this.autoPlayWaitForLazyLoad && this.slides[this.slideIndex].loaded)) {
                        this._ngZone.run(() => this.slide(1));
                    }
                }, this.autoPlayInterval);
            });
        }
    }
    /**
     * \@description Keep the styles up to date with the input
     * @return {?}
     */
    setStyles() {
        if (this.fullscreen) {
            this._renderer.setStyle(this.container.nativeElement, 'height', '100%');
            // Would be nice to make it configurable
            this._renderer.setStyle(this.container.nativeElement, 'background-color', 'white');
        }
        else {
            // Would be nice to make it configurable
            this._renderer.removeStyle(this.container.nativeElement, 'background-color');
            if (this.height) {
                this._renderer.setStyle(this.container.nativeElement, 'height', this.height);
            }
            if (this.minHeight) {
                this._renderer.setStyle(this.container.nativeElement, 'min-height', this.minHeight);
            }
        }
        if (this.arrowSize) {
            this._renderer.setStyle(this.prevArrow.nativeElement, 'height', this.arrowSize);
            this._renderer.setStyle(this.prevArrow.nativeElement, 'width', this.arrowSize);
            this._renderer.setStyle(this.nextArrow.nativeElement, 'height', this.arrowSize);
            this._renderer.setStyle(this.nextArrow.nativeElement, 'width', this.arrowSize);
        }
    }
    /**
     * \@description compare image array to the cache, returns false if no changes
     * @return {?}
     */
    checkCache() {
        return !(this._urlCache.length === this.imageUrls.length && this._urlCache.every((cacheElement, i) => cacheElement === this.imageUrls[i]));
    }
    /**
     * \@description get the index for the slide to the left of the new slide
     * @param {?=} i
     * @return {?}
     */
    getLeftSideIndex(i) {
        if (i === undefined) {
            i = this.slideIndex;
        }
        if (--i < 0) {
            i = this.slides.length - 1;
        }
        return i;
    }
    /**
     * \@description get the index for the slide to the right of the new slide
     * @param {?=} i
     * @return {?}
     */
    getRightSideIndex(i) {
        if (i === undefined) {
            i = this.slideIndex;
        }
        if (++i >= this.slides.length) {
            i = 0;
        }
        return i;
    }
    /**
     * \@description a trackBy function for the ngFor loops
     * @param {?} index
     * @param {?} slide
     * @return {?}
     */
    trackByFn(index, slide) {
        return slide.image;
    }
}
SlideshowComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'slideshow',
                template: `
    <!-- fullscreen bar -->
    <div [class.display-none]="!fullscreen"
         class="fs-container"
         (click)="exitFullScreen($event)">
      <i title="Back"
         class="arrow-exitfs prev"></i>
    </div>
    <div #container
         (touchstart)="onSwipe($event, 'start')"
         (touchend)="onSwipe($event, 'end')"
         class="slideshow-container"
         [class.slideshow-container-fs]="fullscreen">
      <!-- slides -->
      <a *ngFor="let slide of slides; index as i; trackBy: trackByFn"
         class="slides"
         href="{{slide?.image?.clickAction ? '#' : slide?.image?.href}}"
         title="{{slide?.image?.title}}"
         [ngStyle]="getSlideStyle(i)"
         [class.selected]="slide?.selected"
         [class.hide-slide]="!slide?.selected && !slide?.leftSide && !slide?.rightSide"
         [class.left-side]="slide?.leftSide"
         [class.right-side]="slide?.rightSide"
         [class.slide-in-left]="slide?.action === 'slideInLeft'"
         [class.slide-in-right]="slide?.action === 'slideInRight'"
         [class.slide-out-left]="slide?.action === 'slideOutLeft'"
         [class.slide-out-right]="slide?.action === 'slideOutRight'"
         [class.link]="slide?.image?.clickAction || slide?.image?.href"
         (click)="onClick($event)">
        <div class="loader"
             *ngIf="!slide?.loaded"></div>
        <div *ngIf="showCaptions && slide?.image?.caption"
             class="caption"
             [ngStyle]="{
               'color': captionColor,
               'background-color': captionBackground
              }"
             [innerHTML]="slide?.image?.caption">
        </div>
      </a>
      <!-- left arrow -->
      <div [class.display-none]="!this.showArrows"
           (click)="onSlide(-1)"
           class="arrow-container prev">
        <i #prevArrow
           title="Previous"
           class="arrow prev"></i>
      </div>
      <!-- right arrow -->
      <div [class.display-none]="!this.showArrows"
           (click)="onSlide(1)"
           class="arrow-container next">
        <i #nextArrow
           title="Next"
           class="arrow next"></i>
      </div>
      <!-- dots -->
      <ul class="slick-dots"
          *ngIf="showDots">
        <li *ngFor="let slide of slides; index as i; trackBy: trackByFn"
            (click)="goToSlide(i)"
            [class.slick-active]="slide.selected">
          <button type="button"
                  [attr.style]="safeStyleDotColor">
            {{i}}
          </button>
        </li>
      </ul>
    </div>
  `,
                styles: [`
    /*
     styles adapted from https://www.w3schools.com/w3css/4/w3.css
     arrow styles adapted from https://codepen.io/minustalent/pen/Frhaw
     */
    .display-none {
      display: none !important; }

    .fs-container {
      display: block;
      cursor: pointer;
      position: fixed;
      z-index: 1;
      top: 16px;
      left: 16px;
      width: 46px;
      height: 46px;
      text-align: center;
      padding: 0;
      background-color: rgba(0, 0, 0, 0.2);
      -webkit-transition: all .2s ease-in-out;
      transition: all .2s ease-in-out; }
      .fs-container:hover {
        background-color: rgba(0, 0, 0, 0.33); }
      .fs-container .arrow-exitfs {
        display: block;
        width: 30px;
        height: 30px;
        background: transparent;
        border-top: 2px solid #f2f2f2;
        -webkit-transition: all .2s ease-in-out;
        transition: all .2s ease-in-out; }
        .fs-container .arrow-exitfs.prev {
          -webkit-transform: rotate(-45deg);
                  transform: rotate(-45deg);
          position: relative;
          left: 18px;
          top: 18px; }
        .fs-container .arrow-exitfs:after {
          content: '';
          width: 30px;
          height: 30px;
          background: transparent;
          border-top: 2px solid #f2f2f2;
          -webkit-transform: rotate(90deg);
                  transform: rotate(90deg);
          position: absolute;
          left: -15px;
          top: -17px; }

    .slideshow-container.slideshow-container-fs {
      position: fixed;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%; }

    .slideshow-container {
      position: relative;
      display: block;
      margin: auto;
      height: 100%;
      width: 100%;
      overflow: hidden; }
      .slideshow-container .hide-slide {
        visibility: hidden;
        position: absolute;
        top: -100vw;
        left: -100vw;
        opacity: 0; }
      .slideshow-container .slides {
        position: absolute;
        top: 0;
        height: 100%;
        width: 100%;
        visibility: visible;
        opacity: 1;
        display: block; }
        .slideshow-container .slides.selected {
          left: 0; }
        .slideshow-container .slides.left-slide {
          left: -100%; }
        .slideshow-container .slides.right-slide {
          left: 100%; }
        .slideshow-container .slides.slide-in-left {
          left: 0;
          -webkit-animation: slideInLeft 0.5s cubic-bezier(0.42, 0, 0.58, 1);
                  animation: slideInLeft 0.5s cubic-bezier(0.42, 0, 0.58, 1); }
        .slideshow-container .slides.slide-in-right {
          left: 0;
          -webkit-animation: slideInRight 0.5s cubic-bezier(0.42, 0, 0.58, 1);
                  animation: slideInRight 0.5s cubic-bezier(0.42, 0, 0.58, 1); }
        .slideshow-container .slides.slide-out-left {
          left: -100%;
          -webkit-animation: slideOutLeft 0.5s cubic-bezier(0.42, 0, 0.58, 1);
                  animation: slideOutLeft 0.5s cubic-bezier(0.42, 0, 0.58, 1); }
        .slideshow-container .slides.slide-out-right {
          left: 100%;
          -webkit-animation: slideOutRight 0.5s cubic-bezier(0.42, 0, 0.58, 1);
                  animation: slideOutRight 0.5s cubic-bezier(0.42, 0, 0.58, 1); }
        .slideshow-container .slides.link {
          cursor: pointer; }
        .slideshow-container .slides:not(.link) {
          cursor: default; }
      .slideshow-container .caption {
        position: absolute;
        bottom: 0;
        padding: 10px;
        width: 100%; }
      .slideshow-container .arrow-container {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
            -ms-flex-align: center;
                align-items: center;
        -webkit-box-pack: center;
            -ms-flex-pack: center;
                justify-content: center;
        position: absolute;
        top: 0;
        height: 100%;
        width: auto;
        cursor: pointer;
        background-size: 100%;
        background-image: -webkit-gradient(linear, left top, left bottom, from(transparent), to(transparent));
        background-image: linear-gradient(transparent, transparent);
        z-index: 100;
        -webkit-user-select: none;
           -moz-user-select: none;
            -ms-user-select: none;
                user-select: none; }
        .slideshow-container .arrow-container:before {
          display: block;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
          opacity: 0;
          width: 100%;
          z-index: -100;
          -webkit-transition: opacity 0.45s;
          transition: opacity 0.45s; }
        .slideshow-container .arrow-container.prev {
          left: 0; }
          .slideshow-container .arrow-container.prev:before {
            background-image: -webkit-gradient(linear, right top, left top, from(transparent), to(rgba(0, 0, 0, 0.75)));
            background-image: linear-gradient(to left, transparent, rgba(0, 0, 0, 0.75));
            content: ''; }
        .slideshow-container .arrow-container.next {
          right: 0; }
          .slideshow-container .arrow-container.next:before {
            background-image: -webkit-gradient(linear, left top, right top, from(transparent), to(rgba(0, 0, 0, 0.75)));
            background-image: linear-gradient(to right, transparent, rgba(0, 0, 0, 0.75));
            content: ''; }
        .slideshow-container .arrow-container .arrow {
          display: block;
          margin: auto;
          width: 30px;
          height: 30px;
          background: transparent;
          border-top: 2px solid #f2f2f2;
          border-left: 2px solid #f2f2f2;
          -webkit-transition: all .2s ease-in-out;
          transition: all .2s ease-in-out;
          -webkit-user-select: none;
             -moz-user-select: none;
              -ms-user-select: none;
                  user-select: none; }
          .slideshow-container .arrow-container .arrow:before {
            display: block;
            height: 200%;
            width: 200%;
            margin-left: -50%;
            margin-top: -50%;
            content: "";
            -webkit-transform: rotate(45deg);
                    transform: rotate(45deg); }
          .slideshow-container .arrow-container .arrow.prev {
            -webkit-transform: rotate(-45deg);
                    transform: rotate(-45deg);
            position: relative;
            left: 20px;
            margin-right: 10px; }
          .slideshow-container .arrow-container .arrow.next {
            -webkit-transform: rotate(135deg);
                    transform: rotate(135deg);
            position: relative;
            right: 20px;
            margin-left: 10px; }
      .slideshow-container .slick-dots {
        display: block;
        bottom: 15px;
        z-index: 1;
        text-align: center;
        position: absolute;
        padding: 0;
        left: 0;
        right: 0;
        margin: 0 auto; }
        .slideshow-container .slick-dots li {
          display: inline;
          margin: 0;
          padding: 0; }
          .slideshow-container .slick-dots li button {
            border: none;
            background: none;
            text-indent: -9999px;
            font-size: 0;
            width: 20px;
            height: 20px;
            outline: none;
            position: relative;
            z-index: 1;
            cursor: pointer; }
            .slideshow-container .slick-dots li button:before {
              content: '';
              width: 4px;
              height: 4px;
              background: var(--dot-color, #FFF);
              border-radius: 4px;
              display: block;
              position: absolute;
              top: 50%;
              left: 50%;
              -webkit-transform: translate(-50%, -50%);
                      transform: translate(-50%, -50%);
              opacity: .7;
              -webkit-transition: all .5s ease-out;
              transition: all .5s ease-out; }
          .slideshow-container .slick-dots li.slick-active button:before {
            -webkit-transform: translate(-50%, -50%) scale(1.4);
                    transform: translate(-50%, -50%) scale(1.4);
            opacity: 1; }

    @media screen and (min-width: 768px) {
      .slideshow-container .arrow-container:hover:before {
        opacity: 1; }
      .slideshow-container .arrow-container:hover .arrow {
        border-width: 4px; }
      .slideshow-container .arrow-container .arrow:hover {
        border-width: 4px; } }

    @-webkit-keyframes slideInRight {
      0% {
        left: -100%; }
      100% {
        left: 0; } }

    @keyframes slideInRight {
      0% {
        left: -100%; }
      100% {
        left: 0; } }

    @-webkit-keyframes slideInLeft {
      0% {
        left: 100%; }
      100% {
        left: 0; } }

    @keyframes slideInLeft {
      0% {
        left: 100%; }
      100% {
        left: 0; } }

    @-webkit-keyframes slideOutRight {
      0% {
        left: 0; }
      100% {
        left: -100%; } }

    @keyframes slideOutRight {
      0% {
        left: 0; }
      100% {
        left: -100%; } }

    @-webkit-keyframes slideOutLeft {
      0% {
        left: 0; }
      100% {
        left: 100%; } }

    @keyframes slideOutLeft {
      0% {
        left: 0; }
      100% {
        left: 100%; } }

    .loader {
      position: absolute;
      left: 50%;
      margin-left: -20px;
      top: 50%;
      margin-top: -20px;
      border: 5px solid #f3f3f3;
      border-top: 5px solid #555;
      border-radius: 50%;
      width: 50px;
      height: 50px;
      -webkit-animation: spin 1s linear infinite;
              animation: spin 1s linear infinite; }

    @-webkit-keyframes spin {
      0% {
        -webkit-transform: rotate(0deg);
                transform: rotate(0deg); }
      100% {
        -webkit-transform: rotate(360deg);
                transform: rotate(360deg); } }

    @keyframes spin {
      0% {
        -webkit-transform: rotate(0deg);
                transform: rotate(0deg); }
      100% {
        -webkit-transform: rotate(360deg);
                transform: rotate(360deg); } }
  `]
            },] },
];
/**
 * @nocollapse
 */
SlideshowComponent.ctorParameters = () => [
    { type: SwipeService, },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["TransferState"], },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"], },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"],] },] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"],] },] },
];
SlideshowComponent.propDecorators = {
    'imageUrls': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'height': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'minHeight': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'arrowSize': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'showArrows': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'disableSwiping': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'autoPlay': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'autoPlayInterval': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'stopAutoPlayOnSlide': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'autoPlayWaitForLazyLoad': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'debug': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'backgroundSize': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'backgroundPosition': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'backgroundRepeat': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'showDots': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'dotColor': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'showCaptions': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'captionColor': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'captionBackground': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'lazyLoad': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'hideOnNoSlides': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'fullscreen': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'onSlideLeft': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    'onSlideRight': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    'onSwipeLeft': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    'onSwipeRight': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    'onFullscreenExit': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    'onIndexChanged': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    'container': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['container',] },],
    'prevArrow': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['prevArrow',] },],
    'nextArrow': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['nextArrow',] },],
};

class SlideshowModule {
}
SlideshowModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserTransferStateModule"]
                ],
                declarations: [
                    SlideshowComponent
                ],
                exports: [
                    SlideshowComponent
                ],
                providers: [
                    SwipeService
                ]
            },] },
];
/**
 * @nocollapse
 */
SlideshowModule.ctorParameters = () => [];

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=ng-simple-slideshow.js.map


/***/ })

}]);
//# sourceMappingURL=default~app-pages-orders-orders-module~app-pages-simulation-simulation-module~warehouse-warehouse-module-es2015.js.map