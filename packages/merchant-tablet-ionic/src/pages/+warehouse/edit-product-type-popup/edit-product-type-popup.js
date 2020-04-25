"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var ng2_file_upload_1 = require("ng2-file-upload");
var ngx_1 = require("@ionic-native/camera/ngx");
var WarehouseProduct_1 = tslib_1.__importDefault(require("@modules/server.common/entities/WarehouseProduct"));
var product_router_service_1 = require("@modules/client.common.angular2/routers/product-router.service");
var warehouse_products_router_service_1 = require("@modules/client.common.angular2/routers/warehouse-products-router.service");
var product_locales_service_1 = require("@modules/client.common.angular2/locale/product-locales.service");
var core_2 = require("@ngx-translate/core");
var environment_1 = require("../../../environments/environment");
var operators_1 = require("rxjs/operators");
var products_category_service_1 = require("../../../services/products-category.service");
var DeliveryType_1 = tslib_1.__importDefault(require("@modules/server.common/enums/DeliveryType"));
var angular_1 = require("@ionic/angular");
var product_images_popup_component_1 = require("../product-pictures-popup/product-images-popup.component");
var EditProductTypePopupPage = (function () {
    function EditProductTypePopupPage(productRouter, warehouseProductsRouter, _productsCategorySrvice, modalController, camera, actionSheetCtrl, localeTranslateService, translate) {
        var _this = this;
        this.productRouter = productRouter;
        this.warehouseProductsRouter = warehouseProductsRouter;
        this._productsCategorySrvice = _productsCategorySrvice;
        this.modalController = modalController;
        this.camera = camera;
        this.actionSheetCtrl = actionSheetCtrl;
        this.localeTranslateService = localeTranslateService;
        this.translate = translate;
        this.OK = 'OK';
        this.CANCEL = 'CANCEL';
        this.SELECT_CATEGORIES = 'SELECT_CATEGORIES';
        this.PREFIX = 'WAREHOUSE_VIEW.SELECT_POP_UP.';
        this.takaProductDelivery = true;
        this.readyToUpdate = false;
        this.selectedProductCategories = [];
        this.hasImage = true;
        var uploaderOptions = {
            url: environment_1.environment.API_FILE_UPLOAD_URL,
            isHTML5: true,
            removeAfterUpload: true,
            headers: [
                {
                    name: 'X-Requested-With',
                    value: 'XMLHttpRequest',
                },
            ],
        };
        this.uploader = new ng2_file_upload_1.FileUploader(uploaderOptions);
        this.uploader.onBuildItemForm = function (fileItem, form) {
            form.append('upload_preset', 'everbie-products-images');
            var tags = 'myphotoalbum';
            if (_this.product.title) {
                form.append('context', "photo=" + _this.product.title);
                tags = "myphotoalbum," + _this.product.title;
            }
            form.append('folder', 'angular_sample');
            form.append('tags', tags);
            form.append('file', fileItem);
            fileItem.withCredentials = false;
            return { fileItem: fileItem, form: form };
        };
    }
    EditProductTypePopupPage.prototype.imageUrlChanged = function (ev) {
        var _this = this;
        var reader = new FileReader();
        reader.addEventListener('load', function (e) {
            var imageBase64 = e.target['result'];
            _this.hasImage = true;
            _this._setImageHolderBackground(imageBase64);
        });
        reader.readAsDataURL(ev.target.files[0]);
    };
    Object.defineProperty(EditProductTypePopupPage.prototype, "buttonOK", {
        get: function () {
            return this._translate(this.PREFIX + this.OK);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditProductTypePopupPage.prototype, "buttonCancel", {
        get: function () {
            return this._translate(this.PREFIX + this.CANCEL);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditProductTypePopupPage.prototype, "selectOptionTitle", {
        get: function () {
            var title = this._translate(this.PREFIX + this.SELECT_CATEGORIES);
            this.selectOptionsObj = { subTitle: title };
            return this.selectOptionsObj;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditProductTypePopupPage.prototype, "isReadyToUpdate", {
        get: function () {
            return (this.localeTranslateService.isServiceStateValid &&
                this.warehouseProduct.price !== null &&
                this.warehouseProduct.count !== null &&
                this.warehouseProduct.price !== 0 &&
                this.warehouseProduct.count >= 0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditProductTypePopupPage.prototype, "warehouseId", {
        get: function () {
            return localStorage.getItem('_warehouseId');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditProductTypePopupPage.prototype, "isBrowser", {
        get: function () {
            return localStorage.getItem('_platform') === 'browser';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditProductTypePopupPage.prototype, "currentLocale", {
        get: function () {
            return this.localeTranslateService.currentLocale;
        },
        set: function (locale) {
            this.localeTranslateService.currentLocale = locale;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditProductTypePopupPage.prototype, "productTitle", {
        get: function () {
            return this.localeTranslateService.getMemberValue(this.product.title);
        },
        set: function (memberValue) {
            this.localeTranslateService.setMemberValue('title', memberValue);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditProductTypePopupPage.prototype, "productDescription", {
        get: function () {
            return this.localeTranslateService.getMemberValue(this.product.description);
        },
        set: function (memberValue) {
            this.localeTranslateService.setMemberValue('description', memberValue);
        },
        enumerable: true,
        configurable: true
    });
    EditProductTypePopupPage.prototype.ngOnInit = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.product = this.warehouseProduct.product;
                        this.lastProductCount = this.warehouseProduct.count;
                        this.lastProductPrice = this.warehouseProduct.price;
                        this.lastProductDescription = this.product.description;
                        this.lastProductTitle = this.product.title;
                        this.translLang = this.translate.currentLang;
                        this.takaProductDelivery = this.warehouseProduct.isDeliveryRequired;
                        this.takaProductTakeaway = this.warehouseProduct.isTakeaway;
                        this.currentLocale =
                            this.localeTranslateService.takeSelectedLang(this.translLang) ||
                                'en-US';
                        this._setupLocaleServiceValidationState();
                        this._selectExistingProductCategories();
                        return [4, this._loadProductsCategories()];
                    case 1:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    EditProductTypePopupPage.prototype.ngAfterViewInit = function () {
        var currentProductImage = this.localeTranslateService.getTranslate(this.product.images);
        if (currentProductImage) {
            this.hasImage = true;
        }
        else {
            this.hasImage = false;
        }
        this._setImageHolderBackground(currentProductImage);
    };
    EditProductTypePopupPage.prototype.getProductTypeChange = function (type) {
        if (DeliveryType_1.default[type] === DeliveryType_1.default.Delivery) {
            if (!this.takaProductDelivery && !this.takaProductTakeaway) {
                this.takaProductTakeaway = true;
            }
        }
        else {
            if (!this.takaProductDelivery && !this.takaProductTakeaway) {
                this.takaProductDelivery = true;
            }
        }
    };
    EditProductTypePopupPage.prototype.localeTranslate = function (member) {
        return this.localeTranslateService.getTranslate(member);
    };
    EditProductTypePopupPage.prototype.showPicturesPopup = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var images, imagesDataLocale, modal, res, imageArray, firstImgUrl;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        images = this.product.images.filter(function (i) { return i.locale === _this.currentLocale; });
                        if (this.imagesData) {
                            imagesDataLocale = this.imagesData[0].locale;
                            if (imagesDataLocale === this.currentLocale) {
                                images = this.imagesData;
                            }
                        }
                        return [4, this.modalController.create({
                                component: product_images_popup_component_1.ProductImagesPopup,
                                componentProps: {
                                    images: images,
                                },
                                backdropDismiss: false,
                                cssClass: 'mutation-product-images-modal',
                            })];
                    case 1:
                        modal = _a.sent();
                        return [4, modal.present()];
                    case 2:
                        _a.sent();
                        return [4, modal.onDidDismiss()];
                    case 3:
                        res = _a.sent();
                        imageArray = res.data;
                        if (imageArray && imageArray.length > 0) {
                            firstImgUrl = imageArray[0].url;
                            this._setImageHolderBackground(firstImgUrl);
                            this.imagesData = imageArray;
                        }
                        return [2];
                }
            });
        });
    };
    EditProductTypePopupPage.prototype.takePicture = function (sourceType) {
        var _this = this;
        var options = {
            quality: 50,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            correctOrientation: true,
            sourceType: sourceType,
        };
        this.camera.getPicture(options).then(function (imageData) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var base64Image, file, fileItem;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        base64Image = 'data:image/jpeg;base64,' + imageData;
                        return [4, this.urltoFile(base64Image, this.createFileName(), 'image/jpeg')];
                    case 1:
                        file = _a.sent();
                        fileItem = new ng2_file_upload_1.FileItem(this.uploader, file, {});
                        this.uploader.queue.push(fileItem);
                        return [2];
                }
            });
        }); });
    };
    EditProductTypePopupPage.prototype.urltoFile = function (url, filename, mimeType) {
        return fetch(url)
            .then(function (res) {
            return res.arrayBuffer();
        })
            .then(function (buf) {
            return new File([buf], filename, { type: mimeType });
        });
    };
    EditProductTypePopupPage.prototype.presentActionSheet = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.actionSheetCtrl.create({
                            header: 'Select Image Source',
                            buttons: [
                                {
                                    text: 'Load from Library',
                                    handler: function () {
                                        _this.takePicture(_this.camera.PictureSourceType.PHOTOLIBRARY);
                                    },
                                },
                                {
                                    text: 'Use Camera',
                                    handler: function () {
                                        _this.takePicture(_this.camera.PictureSourceType.CAMERA);
                                    },
                                },
                                { text: 'Cancel', role: 'cancel' },
                            ],
                        })];
                    case 1:
                        actionSheet = _a.sent();
                        return [4, actionSheet.present()];
                    case 2:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    EditProductTypePopupPage.prototype.cancelModal = function () {
        this.warehouseProduct.count = this.lastProductCount;
        this.warehouseProduct.price = this.lastProductPrice;
        this.product.description = this.lastProductDescription;
        this.product.title = this.lastProductTitle;
        this.modalController.dismiss();
    };
    EditProductTypePopupPage.prototype.updateProduct = function () {
        var _this = this;
        if (this.uploader.queue.length >= 1) {
            this.uploader.queue[this.uploader.queue.length - 1].upload();
            this.uploader.response.subscribe(function (res) {
                res = JSON.parse(res);
                var locale = _this.currentLocale;
                var width = res.width;
                var height = res.height;
                var orientation = width !== height ? (width > height ? 2 : 1) : 0;
                var url = res.url;
                var newImage = {
                    locale: locale,
                    url: url,
                    width: width,
                    height: height,
                    orientation: orientation,
                };
                if (_this.product.images.length > 0) {
                    _this.product.images.forEach(function (img, index) {
                        if (img.locale === locale) {
                            _this.product.images[index] = newImage;
                        }
                    });
                }
                else {
                    _this.product.images.push(newImage);
                }
                _this.uploadProduct();
            });
        }
        else {
            this.uploadProduct();
        }
    };
    EditProductTypePopupPage.prototype.uploadProduct = function () {
        var _a;
        var _this = this;
        if (this.imagesData && this.imagesData.length > 0) {
            var imgLocale_1 = this.imagesData[0].locale;
            if (imgLocale_1 === this.currentLocale) {
                this.product.images = this.product.images.filter(function (i) { return i.locale !== imgLocale_1; });
                (_a = this.product.images).push.apply(_a, this.imagesData);
            }
        }
        this.localeTranslateService.assignPropertyValue(this.product.title, 'title');
        this.localeTranslateService.assignPropertyValue(this.product.description, 'description');
        this.product.categories = this.productsCategories
            .filter(function (category) {
            return _this.selectedProductCategories &&
                _this.selectedProductCategories.some(function (categoryId) { return categoryId === category.id; });
        })
            .map(function (category) {
            return {
                _id: category.id,
                _createdAt: null,
                _updatedAt: null,
                name: category.name,
            };
        });
        this.productRouter.save(this.product).then(function (product) {
            _this.product = product;
            _this.warehouseProduct.product = product.id;
            _this.warehouseProduct.isDeliveryRequired = _this.takaProductDelivery;
            _this.warehouseProduct.isTakeaway = _this.takaProductTakeaway;
            _this.warehouseProductsRouter
                .saveUpdated(_this.warehouseId, _this.warehouseProduct)
                .then(function (warehouse) {
                _this.modalController.dismiss();
            });
        });
    };
    EditProductTypePopupPage.prototype._setImageHolderBackground = function (imageUrl) {
        var gradient = "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(" + imageUrl + ")";
        this._imageHolder.nativeElement.style.background = gradient;
        this._imageHolder.nativeElement.style.backgroundSize = "cover";
        this._imageHolder.nativeElement.style.backgroundRepeat = 'no-repeat';
        this._imageHolder.nativeElement.style.color = "white";
    };
    EditProductTypePopupPage.prototype._translate = function (key) {
        var translationResult = '';
        this.translate.get(key).subscribe(function (res) {
            translationResult = res;
        });
        return translationResult;
    };
    EditProductTypePopupPage.prototype._selectExistingProductCategories = function () {
        this.selectedProductCategories =
            this.product.categories.map(function (category) { return "" + category; }) || [];
    };
    EditProductTypePopupPage.prototype._setupLocaleServiceValidationState = function () {
        this.localeTranslateService.setMemberValue('title', this.productTitle);
        this.localeTranslateService.setMemberValue('description', this.productDescription);
    };
    EditProductTypePopupPage.prototype._loadProductsCategories = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4, this._productsCategorySrvice
                                .getCategories()
                                .pipe(operators_1.first())
                                .toPromise()];
                    case 1:
                        _a.productsCategories = _b.sent();
                        return [2];
                }
            });
        });
    };
    EditProductTypePopupPage.prototype.createFileName = function () {
        var newFileName = new Date().getTime() + '.jpg';
        return newFileName;
    };
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", WarehouseProduct_1.default)
    ], EditProductTypePopupPage.prototype, "warehouseProduct", void 0);
    tslib_1.__decorate([
        core_1.ViewChild('fileInput', { static: true }),
        tslib_1.__metadata("design:type", core_1.ElementRef)
    ], EditProductTypePopupPage.prototype, "fileInput", void 0);
    tslib_1.__decorate([
        core_1.ViewChild('imageHolder', { static: true }),
        tslib_1.__metadata("design:type", core_1.ElementRef)
    ], EditProductTypePopupPage.prototype, "_imageHolder", void 0);
    EditProductTypePopupPage = tslib_1.__decorate([
        core_1.Component({
            selector: 'page-edit-product-type-popup',
            templateUrl: 'edit-product-type-popup.html',
            styleUrls: ['./edit-product-type-popup.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [product_router_service_1.ProductRouter,
            warehouse_products_router_service_1.WarehouseProductsRouter,
            products_category_service_1.ProductsCategoryService,
            angular_1.ModalController,
            ngx_1.Camera,
            angular_1.ActionSheetController,
            product_locales_service_1.ProductLocalesService,
            core_2.TranslateService])
    ], EditProductTypePopupPage);
    return EditProductTypePopupPage;
}());
exports.EditProductTypePopupPage = EditProductTypePopupPage;
//# sourceMappingURL=edit-product-type-popup.js.map