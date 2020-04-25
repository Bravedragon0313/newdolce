"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var masonry_component_1 = require("./masonry.component");
var MasonryBrickDirective = (function () {
    function MasonryBrickDirective(_element, _parent) {
        this._element = _element;
        this._parent = _parent;
    }
    MasonryBrickDirective.prototype.ngAfterViewInit = function () {
        this._parent.add(this._element.nativeElement);
        this.watchForHtmlChanges();
    };
    MasonryBrickDirective.prototype.ngOnDestroy = function () {
        this._parent.remove(this._element.nativeElement);
    };
    MasonryBrickDirective.prototype.watchForHtmlChanges = function () {
        var _this = this;
        MutationObserver =
            window.MutationObserver || window.WebKitMutationObserver;
        if (MutationObserver) {
            var observer = new MutationObserver(function (mutations, observerFromElement) {
                _this._parent.layout();
            });
            observer.observe(this._element.nativeElement, {
                subtree: true,
                childList: true,
            });
        }
    };
    MasonryBrickDirective = tslib_1.__decorate([
        core_1.Directive({
            selector: '[masonry-brick], masonry-brick',
        }),
        tslib_1.__param(1, core_1.Inject(core_1.forwardRef(function () { return masonry_component_1.MasonryComponent; }))),
        tslib_1.__metadata("design:paramtypes", [core_1.ElementRef,
            masonry_component_1.MasonryComponent])
    ], MasonryBrickDirective);
    return MasonryBrickDirective;
}());
exports.MasonryBrickDirective = MasonryBrickDirective;
//# sourceMappingURL=masonry-brick.directive.js.map