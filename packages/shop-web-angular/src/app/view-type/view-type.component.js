"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var store_1 = require("app/services/store");
var router_1 = require("@angular/router");
var ViewTypeComponent = (function () {
    function ViewTypeComponent(store, router) {
        this.store = store;
        this.router = router;
        this.showTuneButton = true;
        this.listViewSpace = this.store.productListViewSpace || 'normal';
        this.listViewType = this.store.productListViewType || 'masonry';
        this.viewType = this.store.productViewType || 'list';
    }
    Object.defineProperty(ViewTypeComponent.prototype, "isListView", {
        get: function () {
            return this.viewType === 'list';
        },
        enumerable: true,
        configurable: true
    });
    ViewTypeComponent.prototype.listViewSpaceChange = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.store.productListViewSpace = this.listViewSpace;
                        return [4, this.reload()];
                    case 1:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    ViewTypeComponent.prototype.listViewTypeChange = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.store.productListViewType = this.listViewType;
                        return [4, this.reload()];
                    case 1:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    ViewTypeComponent.prototype.viewTypeChange = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.store.productViewType = this.viewType;
                        if (this.viewType === 'carousel') {
                            this.store.productListViewType = 'grid';
                            this.store.productListViewSpace = 'wide';
                        }
                        return [4, this.reload()];
                    case 1:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    ViewTypeComponent.prototype.reload = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.showTuneButton = true;
                        return [4, this.router.navigateByUrl('reload', {
                                skipLocationChange: true,
                            })];
                    case 1:
                        _a.sent();
                        return [4, this.router.navigateByUrl('/products')];
                    case 2:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    ViewTypeComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'view-type',
            styleUrls: ['./view-type.component.scss'],
            templateUrl: './view-type.component.html',
        }),
        tslib_1.__metadata("design:paramtypes", [store_1.Store, router_1.Router])
    ], ViewTypeComponent);
    return ViewTypeComponent;
}());
exports.ViewTypeComponent = ViewTypeComponent;
//# sourceMappingURL=view-type.component.js.map