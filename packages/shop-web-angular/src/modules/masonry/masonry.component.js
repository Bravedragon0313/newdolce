"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var masonry_layout_1 = tslib_1.__importDefault(require("masonry-layout"));
var MasonryComponent = (function () {
    function MasonryComponent(_element) {
        this._element = _element;
        this.options = {};
        this.useImagesLoaded = false;
        this.layoutComplete = new core_1.EventEmitter();
        this.removeComplete = new core_1.EventEmitter();
    }
    MasonryComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.options.itemSelector) {
            this.options.itemSelector = '[masonry-brick], masonry-brick';
        }
        if (this._element.nativeElement.tagName === 'MASONRY') {
            this._element.nativeElement.style.display = 'block';
        }
        this._msnry = new masonry_layout_1.default(this._element.nativeElement, this.options);
        this._msnry.on('layoutComplete', function (items) {
            _this.layoutComplete.emit(items);
        });
        this._msnry.on('removeComplete', function (items) {
            _this.removeComplete.emit(items);
        });
    };
    MasonryComponent.prototype.ngOnDestroy = function () {
        if (this._msnry) {
            this._msnry.destroy();
        }
    };
    MasonryComponent.prototype.layout = function () {
        var _this = this;
        setTimeout(function () {
            _this._msnry.layout();
        });
    };
    MasonryComponent.prototype.add = function (element) {
        var _this = this;
        var isFirstItem = false;
        if (this._msnry.items.length === 0) {
            isFirstItem = true;
        }
        if (this.useImagesLoaded) {
            imagesLoaded(element, function (instance) {
                _this._element.nativeElement.appendChild(element);
                _this._msnry.appended(element);
                if (isFirstItem) {
                    _this.layout();
                }
            });
            this._element.nativeElement.removeChild(element);
        }
        else {
            this._msnry.appended(element);
            if (isFirstItem) {
                this.layout();
            }
        }
    };
    MasonryComponent.prototype.remove = function (element) {
        this._msnry.remove(element);
        this.layout();
    };
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Object)
    ], MasonryComponent.prototype, "options", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], MasonryComponent.prototype, "useImagesLoaded", void 0);
    tslib_1.__decorate([
        core_1.Output(),
        tslib_1.__metadata("design:type", core_1.EventEmitter)
    ], MasonryComponent.prototype, "layoutComplete", void 0);
    tslib_1.__decorate([
        core_1.Output(),
        tslib_1.__metadata("design:type", core_1.EventEmitter)
    ], MasonryComponent.prototype, "removeComplete", void 0);
    MasonryComponent = tslib_1.__decorate([
        core_1.Component({
            selector: '[masonry], masonry',
            template: '<ng-content></ng-content>',
        }),
        tslib_1.__metadata("design:paramtypes", [core_1.ElementRef])
    ], MasonryComponent);
    return MasonryComponent;
}());
exports.MasonryComponent = MasonryComponent;
//# sourceMappingURL=masonry.component.js.map