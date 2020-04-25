"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var ng2_file_upload_1 = require("ng2-file-upload");
var ngx_1 = require("@ionic-native/camera/ngx");
var product_router_service_1 = require("@modules/client.common.angular2/routers/product-router.service");
var warehouse_products_router_service_1 = require("@modules/client.common.angular2/routers/warehouse-products-router.service");
var product_locales_service_1 = require("@modules/client.common.angular2/locale/product-locales.service");
var core_2 = require("@ngx-translate/core");
var environment_1 = require("../../../environments/environment");
var products_category_service_1 = require("../../../services/products-category.service");
var operators_1 = require("rxjs/operators");
var warehouse_router_service_1 = require("@modules/client.common.angular2/routers/warehouse-router.service");
var DeliveryType_1 = tslib_1.__importDefault(require("@modules/server.common/enums/DeliveryType"));
var angular_1 = require("@ionic/angular");
var product_images_popup_component_1 = require("../product-pictures-popup/product-images-popup.component");
var CreateProductTypePopupPage = (function () {
    function CreateProductTypePopupPage(localeTranslateService, productRouter, warehouseProductsRouter, warehouseRouter, modalCtrl, camera, actionSheetCtrl, translate, _productsCategorySrvice) {
        var _this = this;
        this.localeTranslateService = localeTranslateService;
        this.productRouter = productRouter;
        this.warehouseProductsRouter = warehouseProductsRouter;
        this.warehouseRouter = warehouseRouter;
        this.modalCtrl = modalCtrl;
        this.camera = camera;
        this.actionSheetCtrl = actionSheetCtrl;
        this.translate = translate;
        this._productsCategorySrvice = _productsCategorySrvice;
        this.OK = 'OK';
        this.CANCEL = 'CANCEL';
        this.SELECT_CATEGORIES = 'SELECT_CATEGORIES';
        this.PREFIX = 'WAREHOUSE_VIEW.SELECT_POP_UP.';
        this.selectedProductCategories = [];
        this.productCreateObject = {
            title: [],
            description: [],
            images: [],
            categories: [],
        };
        this.warehouseProductCreateObject = {
            price: null,
            count: null,
            product: null,
            initialPrice: null,
        };
        this.loadMerchantSettings();
        this.translLang = this.translate.currentLang;
        this.currentLocale =
            this.localeTranslateService.takeSelectedLang(this.translLang) ||
                'en-US';
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
            if (_this.productCreateObject.title) {
                form.append('context', "photo=" + _this.productCreateObject.title);
                tags = "myphotoalbum," + _this.productCreateObject.title;
            }
            form.append('folder', 'angular_sample');
            form.append('tags', tags);
            form.append('file', fileItem);
            fileItem.withCredentials = false;
            return { fileItem: fileItem, form: form };
        };
    }
    CreateProductTypePopupPage.prototype.ionViewDidLoad = function () { };
    CreateProductTypePopupPage.prototype.imageUrlChanged = function (ev) {
        var _this = this;
        var reader = new FileReader();
        reader.addEventListener('load', function (e) {
            var imageBase64 = e.target['result'];
            _this.hasImage = true;
            _this._setImageHolderBackground(imageBase64);
        });
        reader.readAsDataURL(ev.target.files[0]);
    };
    Object.defineProperty(CreateProductTypePopupPage.prototype, "buttonOK", {
        get: function () {
            return this._translate(this.PREFIX + this.OK);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CreateProductTypePopupPage.prototype, "buttonCancel", {
        get: function () {
            return this._translate(this.PREFIX + this.CANCEL);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CreateProductTypePopupPage.prototype, "selectOptionTitle", {
        get: function () {
            var title = this._translate(this.PREFIX + this.SELECT_CATEGORIES);
            this.selectOptionsObj = { subHeader: title };
            return this.selectOptionsObj;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CreateProductTypePopupPage.prototype, "warehouseId", {
        get: function () {
            return localStorage.getItem('_warehouseId');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CreateProductTypePopupPage.prototype, "isBrowser", {
        get: function () {
            return localStorage.getItem('_platform') === 'browser';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CreateProductTypePopupPage.prototype, "isReadyToCreate", {
        get: function () {
            return (this.localeTranslateService.isServiceStateValid &&
                this.warehouseProductCreateObject.price !== null &&
                this.warehouseProductCreateObject.price !== 0 &&
                (this.uploader.queue[0] ||
                    (this.imagesData && this.imagesData.length > 0)));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CreateProductTypePopupPage.prototype, "currentLocale", {
        get: function () {
            return this.localeTranslateService.currentLocale;
        },
        set: function (locale) {
            this.localeTranslateService.currentLocale = locale;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CreateProductTypePopupPage.prototype, "productTitle", {
        get: function () {
            return this.localeTranslateService.getMemberValue(this.productCreateObject.title);
        },
        set: function (title) {
            this.localeTranslateService.setMemberValue('title', title);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CreateProductTypePopupPage.prototype, "productDescription", {
        get: function () {
            return this.localeTranslateService.getMemberValue(this.productCreateObject.description);
        },
        set: function (description) {
            this.localeTranslateService.setMemberValue('description', description);
        },
        enumerable: true,
        configurable: true
    });
    CreateProductTypePopupPage.prototype.ngOnInit = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this._loadProductsCategories()];
                    case 1:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    CreateProductTypePopupPage.prototype.showPicturesPopup = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var images, _a, imagesDataLocale, _i, _b, image, modal, res, imageArray, firstImgUrl;
            return tslib_1.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        images = [];
                        if (!!this.imagesData) return [3, 2];
                        _a = this;
                        return [4, this.getProductImage()];
                    case 1:
                        _a.imagesData = [_c.sent()];
                        return [3, 3];
                    case 2:
                        imagesDataLocale = this.imagesData[0].locale;
                        if (imagesDataLocale === this.currentLocale) {
                            images = this.imagesData;
                        }
                        else {
                            for (_i = 0, _b = this.imagesData; _i < _b.length; _i++) {
                                image = _b[_i];
                                image.locale = this.currentLocale;
                            }
                        }
                        _c.label = 3;
                    case 3:
                        images = this.imagesData;
                        return [4, this.modalCtrl.create({
                                component: product_images_popup_component_1.ProductImagesPopup,
                                componentProps: {
                                    images: images,
                                },
                                backdropDismiss: false,
                                cssClass: 'mutation-product-images-modal',
                            })];
                    case 4:
                        modal = _c.sent();
                        return [4, modal.present()];
                    case 5:
                        _c.sent();
                        return [4, modal.onDidDismiss()];
                    case 6:
                        res = _c.sent();
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
    CreateProductTypePopupPage.prototype.getProductTypeChange = function (type) {
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
    CreateProductTypePopupPage.prototype.createProduct = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var productImages, product;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        productImages = [];
                        if (!(this.imagesData && this.imagesData.length > 0)) return [3, 1];
                        productImages = this.imagesData;
                        return [3, 3];
                    case 1: return [4, this.getProductImage()];
                    case 2:
                        productImages = [_a.sent()];
                        _a.label = 3;
                    case 3:
                        this.productCreateObject.images = productImages;
                        this.localeTranslateService.assignPropertyValue(this.productCreateObject.title, 'title');
                        this.localeTranslateService.assignPropertyValue(this.productCreateObject.description, 'description');
                        this.productCreateObject.categories = this.productsCategories
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
                        return [4, this.productRouter.create(this.productCreateObject)];
                    case 4:
                        product = _a.sent();
                        this.warehouseProductCreateObject.product = product.id;
                        this.warehouseProductCreateObject.initialPrice =
                            this.warehouseProductCreateObject.price || 0;
                        this.warehouseProductCreateObject.count =
                            this.warehouseProductCreateObject.count || 0;
                        this.warehouseProductCreateObject.isDeliveryRequired = this.takaProductDelivery;
                        this.warehouseProductCreateObject.isTakeaway = this.takaProductTakeaway;
                        return [4, this.warehouseProductsRouter.add(this.warehouseId, [
                                this.warehouseProductCreateObject,
                            ])];
                    case 5:
                        _a.sent();
                        this.cancelModal();
                        return [2];
                }
            });
        });
    };
    CreateProductTypePopupPage.prototype.takePicture = function (sourceType) {
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
        }); }, function (err) { });
    };
    CreateProductTypePopupPage.prototype.urltoFile = function (url, filename, mimeType) {
        return fetch(url)
            .then(function (res) {
            return res.arrayBuffer();
        })
            .then(function (buf) {
            return new File([buf], filename, { type: mimeType });
        });
    };
    CreateProductTypePopupPage.prototype.presentActionSheet = function () {
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
    CreateProductTypePopupPage.prototype.cancelModal = function () {
        this.modalCtrl.dismiss();
    };
    CreateProductTypePopupPage.prototype._loadProductsCategories = function () {
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
    CreateProductTypePopupPage.prototype._translate = function (key) {
        var translationResult = '';
        this.translate.get(key).subscribe(function (res) {
            translationResult = res;
        });
        return translationResult;
    };
    CreateProductTypePopupPage.prototype.createFileName = function () {
        return new Date().getTime() + '.jpg';
    };
    CreateProductTypePopupPage.prototype._setImageHolderBackground = function (imageUrl) {
        var gradient = "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(" + imageUrl + ")";
        this._imageHolder.nativeElement.style.background = gradient;
        this._imageHolder.nativeElement.style.backgroundSize = "cover";
        this._imageHolder.nativeElement.style.backgroundRepeat = 'no-repeat';
        this._imageHolder.nativeElement.style.color = "white";
    };
    CreateProductTypePopupPage.prototype.loadMerchantSettings = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var warehouse;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.warehouseId) return [3, 2];
                        return [4, this.warehouseRouter
                                .get(this.warehouseId, false)
                                .pipe(operators_1.first())
                                .toPromise()];
                    case 1:
                        warehouse = _a.sent();
                        if (warehouse) {
                            this.takaProductDelivery = warehouse.productsDelivery;
                            this.takaProductTakeaway = warehouse.productsTakeaway;
                        }
                        _a.label = 2;
                    case 2:
                        if (!this.takaProductDelivery && !this.takaProductTakeaway) {
                            this.takaProductDelivery = true;
                        }
                        return [2];
                }
            });
        });
    };
    CreateProductTypePopupPage.prototype.getProductImage = function () {
        var _this = this;
        return new Promise(function (resolve, reject) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                if (this.uploader.queue.length > 0) {
                    this.uploader.queue[this.uploader.queue.length - 1].upload();
                }
                this.uploader.onSuccessItem = function (item, response, status) {
                    var data = JSON.parse(response);
                    var locale = _this.currentLocale;
                    var width = data.width;
                    var height = data.height;
                    var orientation = width !== height ? (width > height ? 2 : 1) : 0;
                    var url = data.url;
                    resolve({
                        locale: locale,
                        url: url,
                        width: width,
                        height: height,
                        orientation: orientation,
                    });
                };
                return [2];
            });
        }); });
    };
    tslib_1.__decorate([
        core_1.ViewChild('fileInput', { static: true }),
        tslib_1.__metadata("design:type", core_1.ElementRef)
    ], CreateProductTypePopupPage.prototype, "fileInput", void 0);
    tslib_1.__decorate([
        core_1.ViewChild('imageHolder', { static: true }),
        tslib_1.__metadata("design:type", core_1.ElementRef)
    ], CreateProductTypePopupPage.prototype, "_imageHolder", void 0);
    CreateProductTypePopupPage = tslib_1.__decorate([
        core_1.Component({
            selector: 'page-create-product-type-popup',
            templateUrl: 'create-product-type-popup.html',
            styleUrls: ['./create-product-type-popup.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [product_locales_service_1.ProductLocalesService,
            product_router_service_1.ProductRouter,
            warehouse_products_router_service_1.WarehouseProductsRouter,
            warehouse_router_service_1.WarehouseRouter,
            angular_1.ModalController,
            ngx_1.Camera,
            angular_1.ActionSheetController,
            core_2.TranslateService,
            products_category_service_1.ProductsCategoryService])
    ], CreateProductTypePopupPage);
    return CreateProductTypePopupPage;
}());
exports.CreateProductTypePopupPage = CreateProductTypePopupPage;
//# sourceMappingURL=create-product-type-popup.js.map