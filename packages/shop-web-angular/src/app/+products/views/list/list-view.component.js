"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var masonry_1 = require("@modules/masonry");
var product_1 = require("app/+products/product");
var rxjs_1 = require("rxjs");
var ListViewComponent = (function () {
    function ListViewComponent(elRef) {
        this.elRef = elRef;
        this.containerWidth = '100px';
        this.productsCount = 10;
        this.loadProducts = new core_1.EventEmitter();
        this._ngDestroy$ = new rxjs_1.Subject();
        this.elRef.nativeElement.ownerDocument.body.style.overflow = 'hidden';
    }
    ListViewComponent.prototype.onLayoutComplete = function () {
        this.elRef.nativeElement.ownerDocument.body.style.overflow = 'inherit';
        this.productsComponents.forEach(function (productComponent) {
            return productComponent.onLayoutComplete();
        });
    };
    ListViewComponent.prototype.onResize = function (event) {
        this.containerWidth = 0.6 * event.target.innerWidth + " px";
    };
    ListViewComponent.prototype.ngOnDestroy = function () {
        this.elRef.nativeElement.ownerDocument.body.style.overflow = 'inherit';
        this._ngDestroy$.next();
        this._ngDestroy$.complete();
    };
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Array)
    ], ListViewComponent.prototype, "products", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], ListViewComponent.prototype, "productsLoading", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], ListViewComponent.prototype, "isWideView", void 0);
    tslib_1.__decorate([
        core_1.ViewChild(masonry_1.MasonryComponent),
        tslib_1.__metadata("design:type", masonry_1.MasonryComponent)
    ], ListViewComponent.prototype, "masonry", void 0);
    tslib_1.__decorate([
        core_1.Output(),
        tslib_1.__metadata("design:type", Object)
    ], ListViewComponent.prototype, "loadProducts", void 0);
    tslib_1.__decorate([
        core_1.ViewChildren(product_1.ProductComponent),
        tslib_1.__metadata("design:type", core_1.QueryList)
    ], ListViewComponent.prototype, "productsComponents", void 0);
    ListViewComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'list-view',
            styleUrls: ['./list-view.component.scss'],
            templateUrl: './list-view.component.html',
        }),
        tslib_1.__metadata("design:paramtypes", [core_1.ElementRef])
    ], ListViewComponent);
    return ListViewComponent;
}());
exports.ListViewComponent = ListViewComponent;
//# sourceMappingURL=list-view.component.js.map