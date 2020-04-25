"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var angular_1 = require("@ionic/angular");
var ProductImagesPopup = (function () {
    function ProductImagesPopup(modalCtrl) {
        this.modalCtrl = modalCtrl;
        this.images = [];
    }
    Object.defineProperty(ProductImagesPopup.prototype, "imagesUrls", {
        get: function () {
            return this.images ? this.images.map(function (i) { return i.url; }).join(' ') : '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProductImagesPopup.prototype, "imagesArr", {
        get: function () {
            if (this.imagesUrls) {
                var imagesStr = this.imagesUrls;
                var imageUrls = imagesStr.split(/\s+/);
                imageUrls = imageUrls.filter(function (a) { return a.trim() !== ''; });
                return imageUrls;
            }
            return [];
        },
        enumerable: true,
        configurable: true
    });
    ProductImagesPopup.prototype.deleteImg = function (imageUrl) {
        this.images = this.images.filter(function (i) { return i.url !== imageUrl; });
    };
    ProductImagesPopup.prototype.addImageObj = function (imgData) {
        this.images.push(imgData);
    };
    ProductImagesPopup.prototype.saveImages = function () {
        this.modalCtrl.dismiss(this.images);
    };
    ProductImagesPopup.prototype.cancelModal = function () {
        this.modalCtrl.dismiss();
    };
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Array)
    ], ProductImagesPopup.prototype, "images", void 0);
    ProductImagesPopup = tslib_1.__decorate([
        core_1.Component({
            selector: 'product-images-popup',
            templateUrl: 'product-images-popup.component.html',
            styleUrls: ['./product-images-popu.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [angular_1.ModalController])
    ], ProductImagesPopup);
    return ProductImagesPopup;
}());
exports.ProductImagesPopup = ProductImagesPopup;
//# sourceMappingURL=product-images-popup.component.js.map