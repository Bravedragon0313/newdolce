"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var ng2_file_upload_1 = require("ng2-file-upload");
var environment_1 = require("environments/environment");
var core_2 = require("@ngx-translate/core");
var angular_1 = require("@ionic/angular");
var ngx_1 = require("@ionic-native/camera/ngx");
var product_locales_service_1 = require("@modules/client.common.angular2/locale/product-locales.service");
var forms_1 = require("@angular/forms");
var FileUploaderComponent = (function () {
    function FileUploaderComponent(translateService, actionSheetCtrl, camera, localeTranslateService) {
        this.translateService = translateService;
        this.actionSheetCtrl = actionSheetCtrl;
        this.camera = camera;
        this.localeTranslateService = localeTranslateService;
        this.uploadedImgUrl = new core_1.EventEmitter();
        this.uploadedImgObj = new core_1.EventEmitter();
        this.PREFIX = 'FILE_UPLOADER.';
        this.DRAG_AND_DROB = 'DRAG_AND_DROP_FILE_HERE';
        this.PICTURE_URL = 'PICTURE_URL';
    }
    Object.defineProperty(FileUploaderComponent.prototype, "isBrowser", {
        get: function () {
            return localStorage.getItem('_platform') === 'browser';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FileUploaderComponent.prototype, "dragAndDrob", {
        get: function () {
            return this._translate(this.PREFIX + this.DRAG_AND_DROB);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FileUploaderComponent.prototype, "pictureURL", {
        get: function () {
            return this._translate(this.PREFIX + this.PICTURE_URL);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FileUploaderComponent.prototype, "currentLocale", {
        get: function () {
            return this.localeTranslateService.currentLocale;
        },
        enumerable: true,
        configurable: true
    });
    FileUploaderComponent.prototype.ngOnInit = function () {
        this._uploaderConfig();
    };
    FileUploaderComponent.prototype.imageUrlChanged = function () {
        var _this = this;
        if (this.uploader.queue.length > 0) {
            this.uploader.queue[this.uploader.queue.length - 1].upload();
        }
        else {
            this.uploadedImgUrl.emit(this.fileUrl);
        }
        this.uploader.onSuccessItem = function (item, response, status) {
            var data = JSON.parse(response);
            _this.fileUrl = data.url;
            var locale = _this.currentLocale;
            var width = data.width;
            var height = data.height;
            var orientation = width !== height ? (width > height ? 2 : 1) : 0;
            var url = data.url;
            var newImage = {
                locale: locale,
                url: url,
                width: width,
                height: height,
                orientation: orientation,
            };
            _this.uploadedImgUrl.emit(data.url);
            _this.uploadedImgObj.emit(newImage);
        };
    };
    FileUploaderComponent.prototype.presentActionSheet = function () {
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
                                        _this._takePicture(_this.camera.PictureSourceType.PHOTOLIBRARY);
                                    },
                                },
                                {
                                    text: 'Use Camera',
                                    handler: function () {
                                        _this._takePicture(_this.camera.PictureSourceType.CAMERA);
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
    FileUploaderComponent.prototype._uploaderConfig = function () {
        var _this = this;
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
            if (_this.name) {
                form.append('context', "photo=" + _this.name);
                tags = "myphotoalbum," + _this.name;
            }
            form.append('folder', 'angular_sample');
            form.append('tags', tags);
            form.append('file', fileItem);
            fileItem.withCredentials = false;
            return { fileItem: fileItem, form: form };
        };
    };
    FileUploaderComponent.prototype._translate = function (key) {
        var translationResult = '';
        this.translateService.get(key).subscribe(function (res) {
            translationResult = res;
        });
        return translationResult;
    };
    FileUploaderComponent.prototype._takePicture = function (sourceType) {
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
                        return [4, this._urltoFile(base64Image, this._createFileName(), 'image/jpeg')];
                    case 1:
                        file = _a.sent();
                        fileItem = new ng2_file_upload_1.FileItem(this.uploader, file, {});
                        this.uploader.queue.push(fileItem);
                        this.imageUrlChanged();
                        return [2];
                }
            });
        }); }, function (err) { });
    };
    FileUploaderComponent.prototype._urltoFile = function (url, filename, mimeType) {
        return fetch(url)
            .then(function (res) {
            return res.arrayBuffer();
        })
            .then(function (buf) {
            return new File([buf], filename, { type: mimeType });
        });
    };
    FileUploaderComponent.prototype._createFileName = function () {
        return new Date().getTime() + '.jpg';
    };
    tslib_1.__decorate([
        core_1.ViewChild('shownInput', { static: true }),
        tslib_1.__metadata("design:type", forms_1.NgModel)
    ], FileUploaderComponent.prototype, "shownInput", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", String)
    ], FileUploaderComponent.prototype, "labelText", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", String)
    ], FileUploaderComponent.prototype, "name", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], FileUploaderComponent.prototype, "buttonFullSpace", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", String)
    ], FileUploaderComponent.prototype, "fileUrl", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", String)
    ], FileUploaderComponent.prototype, "itemMode", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], FileUploaderComponent.prototype, "inputCustomStyle", void 0);
    tslib_1.__decorate([
        core_1.Output(),
        tslib_1.__metadata("design:type", core_1.EventEmitter)
    ], FileUploaderComponent.prototype, "uploadedImgUrl", void 0);
    tslib_1.__decorate([
        core_1.Output(),
        tslib_1.__metadata("design:type", core_1.EventEmitter)
    ], FileUploaderComponent.prototype, "uploadedImgObj", void 0);
    FileUploaderComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'e-cu-file-uploader',
            templateUrl: './file-uploader.component.html',
            styleUrls: ['./file-uploader.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [core_2.TranslateService,
            angular_1.ActionSheetController,
            ngx_1.Camera,
            product_locales_service_1.ProductLocalesService])
    ], FileUploaderComponent);
    return FileUploaderComponent;
}());
exports.FileUploaderComponent = FileUploaderComponent;
//# sourceMappingURL=file-uploader.component.js.map