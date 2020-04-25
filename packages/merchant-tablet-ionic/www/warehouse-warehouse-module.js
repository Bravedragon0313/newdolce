(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["warehouse-warehouse-module"],{

/***/ "../../node_modules/@ionic-native/file-transfer/ngx/index.js":
/*!*************************************************************************************************************!*\
  !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/@ionic-native/file-transfer/ngx/index.js ***!
  \*************************************************************************************************************/
/*! exports provided: FileTransfer, FileTransferObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileTransfer", function() { return FileTransfer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileTransferObject", function() { return FileTransferObject; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/core */ "../../node_modules/@ionic-native/core/index.js");



var FileTransfer = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(FileTransfer, _super);
    function FileTransfer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Error code rejected from upload with FileTransferError
         * Defined in FileTransferError.
         *      FILE_NOT_FOUND_ERR: 1   Return when file was not found
         *      INVALID_URL_ERR: 2,     Return when url was invalid
         *      CONNECTION_ERR: 3,      Return on connection error
         *      ABORT_ERR: 4,           Return on aborting
         *      NOT_MODIFIED_ERR: 5     Return on '304 Not Modified' HTTP response
         * @enum {number}
         */
        _this.FileTransferErrorCode = {
            FILE_NOT_FOUND_ERR: 1,
            INVALID_URL_ERR: 2,
            CONNECTION_ERR: 3,
            ABORT_ERR: 4,
            NOT_MODIFIED_ERR: 5
        };
        return _this;
    }
    /**
     * Creates a new FileTransfer object
     * @return {FileTransferObject}
     */
    FileTransfer.prototype.create = function () {
        return new FileTransferObject();
    };
    FileTransfer.pluginName = "FileTransfer";
    FileTransfer.plugin = "cordova-plugin-file-transfer";
    FileTransfer.pluginRef = "FileTransfer";
    FileTransfer.repo = "https://github.com/apache/cordova-plugin-file-transfer";
    FileTransfer.platforms = ["Amazon Fire OS", "Android", "Browser", "iOS", "Ubuntu", "Windows", "Windows Phone"];
    FileTransfer = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], FileTransfer);
    return FileTransfer;
}(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["IonicNativePlugin"]));

var FileTransferObject = /** @class */ (function () {
    function FileTransferObject() {
        if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["checkAvailability"])(FileTransfer.getPluginRef(), null, FileTransfer.getPluginName()) === true) {
            this._objectInstance = new (FileTransfer.getPlugin())();
        }
    }
    FileTransferObject.prototype.upload = function (fileUrl, url, options, trustAllHosts) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaInstance"])(this, "upload", { "successIndex": 2, "errorIndex": 3 }, arguments); };
    FileTransferObject.prototype.download = function (source, target, trustAllHosts, options) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaInstance"])(this, "download", { "successIndex": 2, "errorIndex": 3 }, arguments); };
    FileTransferObject.prototype.onProgress = function (listener) {
        var _this = this;
        return (function () {
            if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["instanceAvailability"])(_this) === true) {
                _this._objectInstance.onprogress = listener;
            }
        })();
    };
    FileTransferObject.prototype.abort = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaInstance"])(this, "abort", { "sync": true }, arguments); };
    FileTransferObject.plugin = "cordova-plugin-file-transfer";
    FileTransferObject.pluginName = "FileTransfer";
    FileTransferObject = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], FileTransferObject);
    return FileTransferObject;
}());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2ZpbGUtdHJhbnNmZXIvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sNERBS0wsaUJBQWlCLEVBQ2xCLE1BQU0sb0JBQW9CLENBQUM7O0lBeUxNLGdDQUFpQjs7O1FBQ2pEOzs7Ozs7Ozs7V0FTRztRQUNILDJCQUFxQixHQUFHO1lBQ3RCLGtCQUFrQixFQUFFLENBQUM7WUFDckIsZUFBZSxFQUFFLENBQUM7WUFDbEIsY0FBYyxFQUFFLENBQUM7WUFDakIsU0FBUyxFQUFFLENBQUM7WUFDWixnQkFBZ0IsRUFBRSxDQUFDO1NBQ3BCLENBQUM7OztJQUVGOzs7T0FHRztJQUNILDZCQUFNLEdBQU47UUFDRSxPQUFPLElBQUksa0JBQWtCLEVBQUUsQ0FBQztJQUNsQyxDQUFDOzs7Ozs7SUF6QlUsWUFBWTtRQUR4QixVQUFVLEVBQUU7T0FDQSxZQUFZO3VCQWhNekI7RUFnTWtDLGlCQUFpQjtTQUF0QyxZQUFZOztJQXNDdkI7UUFDRSxJQUNFLGlCQUFpQixDQUNmLFlBQVksQ0FBQyxZQUFZLEVBQUUsRUFDM0IsSUFBSSxFQUNKLFlBQVksQ0FBQyxhQUFhLEVBQUUsQ0FDN0IsS0FBSyxJQUFJLEVBQ1Y7WUFDQSxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxFQUFFLENBQUMsRUFBRSxDQUFDO1NBQ3pEO0lBQ0gsQ0FBQztJQWVELG1DQUFNLGFBQ0osT0FBZSxFQUNmLEdBQVcsRUFDWCxPQUEyQixFQUMzQixhQUF1QjtJQWtCekIscUNBQVEsYUFDTixNQUFjLEVBQ2QsTUFBYyxFQUNkLGFBQXVCLEVBQ3ZCLE9BQThCO0lBVWhDLHVDQUFVLGFBQUMsUUFBdUM7OztzREFBUTtnQkFDeEQsS0FBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDO2FBQzVDOzs7SUFTRCxrQ0FBSzs7O0lBM0VNLGtCQUFrQjs7T0FBbEIsa0JBQWtCOzZCQW5PL0I7O1NBbU9hLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIENvcmRvdmFJbnN0YW5jZSxcbiAgSW5zdGFuY2VDaGVjayxcbiAgSW9uaWNOYXRpdmVQbHVnaW4sXG4gIFBsdWdpbixcbiAgY2hlY2tBdmFpbGFiaWxpdHlcbn0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBGaWxlVXBsb2FkT3B0aW9ucyB7XG4gIC8qKlxuICAgKiBUaGUgbmFtZSBvZiB0aGUgZm9ybSBlbGVtZW50LlxuICAgKiBEZWZhdWx0cyB0byAnZmlsZScuXG4gICAqL1xuICBmaWxlS2V5Pzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgZmlsZSBuYW1lIHRvIHVzZSB3aGVuIHNhdmluZyB0aGUgZmlsZSBvbiB0aGUgc2VydmVyLlxuICAgKiBEZWZhdWx0cyB0byAnaW1hZ2UuanBnJy5cbiAgICovXG4gIGZpbGVOYW1lPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgSFRUUCBtZXRob2QgdG8gdXNlIC0gZWl0aGVyIFBVVCBvciBQT1NULlxuICAgKiBEZWZhdWx0cyB0byBQT1NULlxuICAgKi9cbiAgaHR0cE1ldGhvZD86IHN0cmluZztcblxuICAvKipcbiAgICogVGhlIG1pbWUgdHlwZSBvZiB0aGUgZGF0YSB0byB1cGxvYWQuXG4gICAqIERlZmF1bHRzIHRvIGltYWdlL2pwZWcuXG4gICAqL1xuICBtaW1lVHlwZT86IHN0cmluZztcblxuICAvKipcbiAgICogQSBzZXQgb2Ygb3B0aW9uYWwga2V5L3ZhbHVlIHBhaXJzIHRvIHBhc3MgaW4gdGhlIEhUVFAgcmVxdWVzdC5cbiAgICovXG4gIHBhcmFtcz86IHsgW3M6IHN0cmluZ106IGFueSB9O1xuXG4gIC8qKlxuICAgKiBXaGV0aGVyIHRvIHVwbG9hZCB0aGUgZGF0YSBpbiBjaHVua2VkIHN0cmVhbWluZyBtb2RlLlxuICAgKiBEZWZhdWx0cyB0byB0cnVlLlxuICAgKi9cbiAgY2h1bmtlZE1vZGU/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBBIG1hcCBvZiBoZWFkZXIgbmFtZS9oZWFkZXIgdmFsdWVzLiBVc2UgYW4gYXJyYXkgdG8gc3BlY2lmeSBtb3JlXG4gICAqIHRoYW4gb25lIHZhbHVlLiBPbiBpT1MsIEZpcmVPUywgYW5kIEFuZHJvaWQsIGlmIGEgaGVhZGVyIG5hbWVkXG4gICAqIENvbnRlbnQtVHlwZSBpcyBwcmVzZW50LCBtdWx0aXBhcnQgZm9ybSBkYXRhIHdpbGwgTk9UIGJlIHVzZWQuXG4gICAqL1xuICBoZWFkZXJzPzogeyBbczogc3RyaW5nXTogYW55IH07XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRmlsZVVwbG9hZFJlc3VsdCB7XG4gIC8qKlxuICAgKiBUaGUgbnVtYmVyIG9mIGJ5dGVzIHNlbnQgdG8gdGhlIHNlcnZlciBhcyBwYXJ0IG9mIHRoZSB1cGxvYWQuXG4gICAqL1xuICBieXRlc1NlbnQ6IG51bWJlcjtcblxuICAvKipcbiAgICogVGhlIEhUVFAgcmVzcG9uc2UgY29kZSByZXR1cm5lZCBieSB0aGUgc2VydmVyLlxuICAgKi9cbiAgcmVzcG9uc2VDb2RlOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFRoZSBIVFRQIHJlc3BvbnNlIHJldHVybmVkIGJ5IHRoZSBzZXJ2ZXIuXG4gICAqL1xuICByZXNwb25zZTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgSFRUUCByZXNwb25zZSBoZWFkZXJzIGJ5IHRoZSBzZXJ2ZXIuXG4gICAqL1xuICBoZWFkZXJzOiB7IFtzOiBzdHJpbmddOiBhbnkgfTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBGaWxlVHJhbnNmZXJFcnJvciB7XG4gIC8qKlxuICAgKiBPbmUgb2YgdGhlIHByZWRlZmluZWQgZXJyb3IgY29kZXMgbGlzdGVkIGJlbG93LlxuICAgKi9cbiAgY29kZTogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBVUkwgdG8gdGhlIHNvdXJjZS5cbiAgICovXG4gIHNvdXJjZTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBVUkwgdG8gdGhlIHRhcmdldC5cbiAgICovXG4gIHRhcmdldDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBIVFRQIHN0YXR1cyBjb2RlLiBUaGlzIGF0dHJpYnV0ZSBpcyBvbmx5IGF2YWlsYWJsZSB3aGVuIGEgcmVzcG9uc2VcbiAgICogY29kZSBpcyByZWNlaXZlZCBmcm9tIHRoZSBIVFRQIGNvbm5lY3Rpb24uXG4gICAqL1xuICBodHRwX3N0YXR1czogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBSZXNwb25zZSBib2R5LiBUaGlzIGF0dHJpYnV0ZSBpcyBvbmx5IGF2YWlsYWJsZSB3aGVuIGEgcmVzcG9uc2UgaXMgcmVjZWl2ZWQgZnJvbSB0aGUgSFRUUCBjb25uZWN0aW9uLlxuICAgKi9cbiAgYm9keTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBFaXRoZXIgZS5nZXRNZXNzYWdlIG9yIGUudG9TdHJpbmcuXG4gICAqL1xuICBleGNlcHRpb246IHN0cmluZztcbn1cblxuLyoqXG4gKiBAbmFtZSBGaWxlIFRyYW5zZmVyXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBUaGlzIHBsdWdpbiBhbGxvd3MgeW91IHRvIHVwbG9hZCBhbmQgZG93bmxvYWQgZmlsZXMuXG4gKlxuICogQGRlcHJlY2F0ZWRcbiAqIFRoaXMgcGx1Z2luIGhhcyBiZWVuIGRlcHJlY2F0ZWQgaW4gZmF2b3Igb2YgWEhSMlxuICogaHR0cHM6Ly9jb3Jkb3ZhLmFwYWNoZS5vcmcvYmxvZy8yMDE3LzEwLzE4L2Zyb20tZmlsZXRyYW5zZmVyLXRvLXhocjIuaHRtbFxuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgRmlsZVRyYW5zZmVyLCBGaWxlVXBsb2FkT3B0aW9ucywgRmlsZVRyYW5zZmVyT2JqZWN0IH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9maWxlLXRyYW5zZmVyL25neCc7XG4gKiBpbXBvcnQgeyBGaWxlIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9maWxlJztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIHRyYW5zZmVyOiBGaWxlVHJhbnNmZXIsIHByaXZhdGUgZmlsZTogRmlsZSkgeyB9XG4gKlxuICogLi4uXG4gKlxuICogY29uc3QgZmlsZVRyYW5zZmVyOiBGaWxlVHJhbnNmZXJPYmplY3QgPSB0aGlzLnRyYW5zZmVyLmNyZWF0ZSgpO1xuICpcbiAqIC8vIFVwbG9hZCBhIGZpbGU6XG4gKiBmaWxlVHJhbnNmZXIudXBsb2FkKC4uKS50aGVuKC4uKS5jYXRjaCguLik7XG4gKlxuICogLy8gRG93bmxvYWQgYSBmaWxlOlxuICogZmlsZVRyYW5zZmVyLmRvd25sb2FkKC4uKS50aGVuKC4uKS5jYXRjaCguLik7XG4gKlxuICogLy8gQWJvcnQgYWN0aXZlIHRyYW5zZmVyOlxuICogZmlsZVRyYW5zZmVyLmFib3J0KCk7XG4gKlxuICogLy8gZnVsbCBleGFtcGxlXG4gKiB1cGxvYWQoKSB7XG4gKiAgIGxldCBvcHRpb25zOiBGaWxlVXBsb2FkT3B0aW9ucyA9IHtcbiAqICAgICAgZmlsZUtleTogJ2ZpbGUnLFxuICogICAgICBmaWxlTmFtZTogJ25hbWUuanBnJyxcbiAqICAgICAgaGVhZGVyczoge31cbiAqICAgICAgLi4uLi5cbiAqICAgfVxuICpcbiAqICAgZmlsZVRyYW5zZmVyLnVwbG9hZCgnPGZpbGUgcGF0aD4nLCAnPGFwaSBlbmRwb2ludD4nLCBvcHRpb25zKVxuICogICAgLnRoZW4oKGRhdGEpID0+IHtcbiAqICAgICAgLy8gc3VjY2Vzc1xuICogICAgfSwgKGVycikgPT4ge1xuICogICAgICAvLyBlcnJvclxuICogICAgfSlcbiAqIH1cbiAqXG4gKiBkb3dubG9hZCgpIHtcbiAqICAgY29uc3QgdXJsID0gJ2h0dHA6Ly93d3cuZXhhbXBsZS5jb20vZmlsZS5wZGYnO1xuICogICBmaWxlVHJhbnNmZXIuZG93bmxvYWQodXJsLCB0aGlzLmZpbGUuZGF0YURpcmVjdG9yeSArICdmaWxlLnBkZicpLnRoZW4oKGVudHJ5KSA9PiB7XG4gKiAgICAgY29uc29sZS5sb2coJ2Rvd25sb2FkIGNvbXBsZXRlOiAnICsgZW50cnkudG9VUkwoKSk7XG4gKiAgIH0sIChlcnJvcikgPT4ge1xuICogICAgIC8vIGhhbmRsZSBlcnJvclxuICogICB9KTtcbiAqIH1cbiAqXG4gKiBgYGBcbiAqXG4gKiBUbyBzdG9yZSBmaWxlcyBpbiBhIGRpZmZlcmVudC9wdWJsaWNseSBhY2Nlc3NpYmxlIGRpcmVjdG9yeSwgcGxlYXNlIHJlZmVyIHRvIHRoZSBmb2xsb3dpbmcgbGlua1xuICogaHR0cHM6Ly9naXRodWIuY29tL2FwYWNoZS9jb3Jkb3ZhLXBsdWdpbi1maWxlI3doZXJlLXRvLXN0b3JlLWZpbGVzXG4gKlxuICogQGludGVyZmFjZXNcbiAqIEZpbGVVcGxvYWRPcHRpb25zXG4gKiBGaWxlVXBsb2FkUmVzdWx0XG4gKiBGaWxlVHJhbnNmZXJFcnJvclxuICogQGNsYXNzZXNcbiAqIEZpbGVUcmFuc2Zlck9iamVjdFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0ZpbGVUcmFuc2ZlcicsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWZpbGUtdHJhbnNmZXInLFxuICBwbHVnaW5SZWY6ICdGaWxlVHJhbnNmZXInLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2FwYWNoZS9jb3Jkb3ZhLXBsdWdpbi1maWxlLXRyYW5zZmVyJyxcbiAgcGxhdGZvcm1zOiBbXG4gICAgJ0FtYXpvbiBGaXJlIE9TJyxcbiAgICAnQW5kcm9pZCcsXG4gICAgJ0Jyb3dzZXInLFxuICAgICdpT1MnLFxuICAgICdVYnVudHUnLFxuICAgICdXaW5kb3dzJyxcbiAgICAnV2luZG93cyBQaG9uZSdcbiAgXVxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBGaWxlVHJhbnNmZXIgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBFcnJvciBjb2RlIHJlamVjdGVkIGZyb20gdXBsb2FkIHdpdGggRmlsZVRyYW5zZmVyRXJyb3JcbiAgICogRGVmaW5lZCBpbiBGaWxlVHJhbnNmZXJFcnJvci5cbiAgICogICAgICBGSUxFX05PVF9GT1VORF9FUlI6IDEgICBSZXR1cm4gd2hlbiBmaWxlIHdhcyBub3QgZm91bmRcbiAgICogICAgICBJTlZBTElEX1VSTF9FUlI6IDIsICAgICBSZXR1cm4gd2hlbiB1cmwgd2FzIGludmFsaWRcbiAgICogICAgICBDT05ORUNUSU9OX0VSUjogMywgICAgICBSZXR1cm4gb24gY29ubmVjdGlvbiBlcnJvclxuICAgKiAgICAgIEFCT1JUX0VSUjogNCwgICAgICAgICAgIFJldHVybiBvbiBhYm9ydGluZ1xuICAgKiAgICAgIE5PVF9NT0RJRklFRF9FUlI6IDUgICAgIFJldHVybiBvbiAnMzA0IE5vdCBNb2RpZmllZCcgSFRUUCByZXNwb25zZVxuICAgKiBAZW51bSB7bnVtYmVyfVxuICAgKi9cbiAgRmlsZVRyYW5zZmVyRXJyb3JDb2RlID0ge1xuICAgIEZJTEVfTk9UX0ZPVU5EX0VSUjogMSxcbiAgICBJTlZBTElEX1VSTF9FUlI6IDIsXG4gICAgQ09OTkVDVElPTl9FUlI6IDMsXG4gICAgQUJPUlRfRVJSOiA0LFxuICAgIE5PVF9NT0RJRklFRF9FUlI6IDVcbiAgfTtcblxuICAvKipcbiAgICogQ3JlYXRlcyBhIG5ldyBGaWxlVHJhbnNmZXIgb2JqZWN0XG4gICAqIEByZXR1cm4ge0ZpbGVUcmFuc2Zlck9iamVjdH1cbiAgICovXG4gIGNyZWF0ZSgpOiBGaWxlVHJhbnNmZXJPYmplY3Qge1xuICAgIHJldHVybiBuZXcgRmlsZVRyYW5zZmVyT2JqZWN0KCk7XG4gIH1cbn1cblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1maWxlLXRyYW5zZmVyJyxcbiAgcGx1Z2luTmFtZTogJ0ZpbGVUcmFuc2Zlcidcbn0pXG5leHBvcnQgY2xhc3MgRmlsZVRyYW5zZmVyT2JqZWN0IHtcbiAgcHJpdmF0ZSBfb2JqZWN0SW5zdGFuY2U6IGFueTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBpZiAoXG4gICAgICBjaGVja0F2YWlsYWJpbGl0eShcbiAgICAgICAgRmlsZVRyYW5zZmVyLmdldFBsdWdpblJlZigpLFxuICAgICAgICBudWxsLFxuICAgICAgICBGaWxlVHJhbnNmZXIuZ2V0UGx1Z2luTmFtZSgpXG4gICAgICApID09PSB0cnVlXG4gICAgKSB7XG4gICAgICB0aGlzLl9vYmplY3RJbnN0YW5jZSA9IG5ldyAoRmlsZVRyYW5zZmVyLmdldFBsdWdpbigpKSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTZW5kcyBhIGZpbGUgdG8gYSBzZXJ2ZXIuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmaWxlVXJsICBGaWxlc3lzdGVtIFVSTCByZXByZXNlbnRpbmcgdGhlIGZpbGUgb24gdGhlIGRldmljZSBvciBhIGRhdGEgVVJJLiBGb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHksIHRoaXMgY2FuIGFsc28gYmUgdGhlIGZ1bGwgcGF0aCBvZiB0aGUgZmlsZSBvbiB0aGUgZGV2aWNlLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsICBVUkwgb2YgdGhlIHNlcnZlciB0byByZWNlaXZlIHRoZSBmaWxlLCBhcyBlbmNvZGVkIGJ5IGVuY29kZVVSSSgpLlxuICAgKiBAcGFyYW0ge0ZpbGVVcGxvYWRPcHRpb25zfSBbb3B0aW9uc10gIE9wdGlvbmFsIHBhcmFtZXRlcnMuXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW3RydXN0QWxsSG9zdHNdICBPcHRpb25hbCBwYXJhbWV0ZXIsIGRlZmF1bHRzIHRvIGZhbHNlLiBJZiBzZXQgdG8gdHJ1ZSwgaXQgYWNjZXB0cyBhbGwgc2VjdXJpdHkgY2VydGlmaWNhdGVzLiBUaGlzIGlzIHVzZWZ1bCBzaW5jZSBBbmRyb2lkIHJlamVjdHMgc2VsZi1zaWduZWQgc2VjdXJpdHkgY2VydGlmaWNhdGVzLiBOb3QgcmVjb21tZW5kZWQgZm9yIHByb2R1Y3Rpb24gdXNlLiBTdXBwb3J0ZWQgb24gQW5kcm9pZCBhbmQgaU9TLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxGaWxlVXBsb2FkUmVzdWx0Pn0gUmV0dXJucyBhIFByb21pc2UgdGhhdCByZXNvbHZlcyB0byBhIEZpbGVVcGxvYWRSZXN1bHQgYW5kIHJlamVjdHMgd2l0aCBGaWxlVHJhbnNmZXJFcnJvci5cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2Uoe1xuICAgIHN1Y2Nlc3NJbmRleDogMixcbiAgICBlcnJvckluZGV4OiAzXG4gIH0pXG4gIHVwbG9hZChcbiAgICBmaWxlVXJsOiBzdHJpbmcsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgb3B0aW9ucz86IEZpbGVVcGxvYWRPcHRpb25zLFxuICAgIHRydXN0QWxsSG9zdHM/OiBib29sZWFuXG4gICk6IFByb21pc2U8RmlsZVVwbG9hZFJlc3VsdD4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBEb3dubG9hZHMgYSBmaWxlIGZyb20gc2VydmVyLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gc291cmNlICBVUkwgb2YgdGhlIHNlcnZlciB0byBkb3dubG9hZCB0aGUgZmlsZSwgYXMgZW5jb2RlZCBieSBlbmNvZGVVUkkoKS5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHRhcmdldCAgRmlsZXN5c3RlbSB1cmwgcmVwcmVzZW50aW5nIHRoZSBmaWxlIG9uIHRoZSBkZXZpY2UuIEZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSwgdGhpcyBjYW4gYWxzbyBiZSB0aGUgZnVsbCBwYXRoIG9mIHRoZSBmaWxlIG9uIHRoZSBkZXZpY2UuXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW3RydXN0QWxsSG9zdHNdICBPcHRpb25hbCBwYXJhbWV0ZXIsIGRlZmF1bHRzIHRvIGZhbHNlLiBJZiBzZXQgdG8gdHJ1ZSwgaXQgYWNjZXB0cyBhbGwgc2VjdXJpdHkgY2VydGlmaWNhdGVzLiBUaGlzIGlzIHVzZWZ1bCBiZWNhdXNlIEFuZHJvaWQgcmVqZWN0cyBzZWxmLXNpZ25lZCBzZWN1cml0eSBjZXJ0aWZpY2F0ZXMuIE5vdCByZWNvbW1lbmRlZCBmb3IgcHJvZHVjdGlvbiB1c2UuIFN1cHBvcnRlZCBvbiBBbmRyb2lkIGFuZCBpT1MuXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBbT3B0aW9uYWxdIHBhcmFtZXRlcnMsIGN1cnJlbnRseSBvbmx5IHN1cHBvcnRzIGhlYWRlcnMgKHN1Y2ggYXMgQXV0aG9yaXphdGlvbiAoQmFzaWMgQXV0aGVudGljYXRpb24pLCBldGMpLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHRvIGEgRmlsZUVudHJ5IG9iamVjdC5cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2Uoe1xuICAgIHN1Y2Nlc3NJbmRleDogMixcbiAgICBlcnJvckluZGV4OiAzXG4gIH0pXG4gIGRvd25sb2FkKFxuICAgIHNvdXJjZTogc3RyaW5nLFxuICAgIHRhcmdldDogc3RyaW5nLFxuICAgIHRydXN0QWxsSG9zdHM/OiBib29sZWFuLFxuICAgIG9wdGlvbnM/OiB7IFtzOiBzdHJpbmddOiBhbnkgfVxuICApOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlcnMgYSBsaXN0ZW5lciB0aGF0IGdldHMgY2FsbGVkIHdoZW5ldmVyIGEgbmV3IGNodW5rIG9mIGRhdGEgaXMgdHJhbnNmZXJyZWQuXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGxpc3RlbmVyIExpc3RlbmVyIHRoYXQgdGFrZXMgYSBwcm9ncmVzcyBldmVudC5cbiAgICovXG4gIEBJbnN0YW5jZUNoZWNrKHsgc3luYzogdHJ1ZSB9KVxuICBvblByb2dyZXNzKGxpc3RlbmVyOiAoZXZlbnQ6IFByb2dyZXNzRXZlbnQpID0+IGFueSk6IHZvaWQge1xuICAgIHRoaXMuX29iamVjdEluc3RhbmNlLm9ucHJvZ3Jlc3MgPSBsaXN0ZW5lcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBBYm9ydHMgYW4gaW4tcHJvZ3Jlc3MgdHJhbnNmZXIuIFRoZSBvbmVycm9yIGNhbGxiYWNrIGlzIHBhc3NlZCBhIEZpbGVUcmFuc2ZlckVycm9yXG4gICAqIG9iamVjdCB3aGljaCBoYXMgYW4gZXJyb3IgY29kZSBvZiBGaWxlVHJhbnNmZXJFcnJvci5BQk9SVF9FUlIuXG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHtcbiAgICBzeW5jOiB0cnVlXG4gIH0pXG4gIGFib3J0KCk6IHZvaWQge1xuICB9XG59XG4iXX0=

/***/ }),

/***/ "../../node_modules/desandro-matches-selector/matches-selector.js":
/*!******************************************************************************************************************!*\
  !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/desandro-matches-selector/matches-selector.js ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * matchesSelector v2.0.2
 * matchesSelector( element, '.selector' )
 * MIT license
 */

/*jshint browser: true, strict: true, undef: true, unused: true */

( function( window, factory ) {
  /*global define: false, module: false */
  'use strict';
  // universal module definition
  if ( true ) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}

}( window, function factory() {
  'use strict';

  var matchesMethod = ( function() {
    var ElemProto = window.Element.prototype;
    // check for the standard method name first
    if ( ElemProto.matches ) {
      return 'matches';
    }
    // check un-prefixed
    if ( ElemProto.matchesSelector ) {
      return 'matchesSelector';
    }
    // check vendor prefixes
    var prefixes = [ 'webkit', 'moz', 'ms', 'o' ];

    for ( var i=0; i < prefixes.length; i++ ) {
      var prefix = prefixes[i];
      var method = prefix + 'MatchesSelector';
      if ( ElemProto[ method ] ) {
        return method;
      }
    }
  })();

  return function matchesSelector( elem, selector ) {
    return elem[ matchesMethod ]( selector );
  };

}));


/***/ }),

/***/ "../../node_modules/ev-emitter/ev-emitter.js":
/*!*********************************************************************************************!*\
  !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/ev-emitter/ev-emitter.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * EvEmitter v1.1.0
 * Lil' event emitter
 * MIT License
 */

/* jshint unused: true, undef: true, strict: true */

( function( global, factory ) {
  // universal module definition
  /* jshint strict: false */ /* globals define, module, window */
  if ( true ) {
    // AMD - RequireJS
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}

}( typeof window != 'undefined' ? window : this, function() {

"use strict";

function EvEmitter() {}

var proto = EvEmitter.prototype;

proto.on = function( eventName, listener ) {
  if ( !eventName || !listener ) {
    return;
  }
  // set events hash
  var events = this._events = this._events || {};
  // set listeners array
  var listeners = events[ eventName ] = events[ eventName ] || [];
  // only add once
  if ( listeners.indexOf( listener ) == -1 ) {
    listeners.push( listener );
  }

  return this;
};

proto.once = function( eventName, listener ) {
  if ( !eventName || !listener ) {
    return;
  }
  // add event
  this.on( eventName, listener );
  // set once flag
  // set onceEvents hash
  var onceEvents = this._onceEvents = this._onceEvents || {};
  // set onceListeners object
  var onceListeners = onceEvents[ eventName ] = onceEvents[ eventName ] || {};
  // set flag
  onceListeners[ listener ] = true;

  return this;
};

proto.off = function( eventName, listener ) {
  var listeners = this._events && this._events[ eventName ];
  if ( !listeners || !listeners.length ) {
    return;
  }
  var index = listeners.indexOf( listener );
  if ( index != -1 ) {
    listeners.splice( index, 1 );
  }

  return this;
};

proto.emitEvent = function( eventName, args ) {
  var listeners = this._events && this._events[ eventName ];
  if ( !listeners || !listeners.length ) {
    return;
  }
  // copy over to avoid interference if .off() in listener
  listeners = listeners.slice(0);
  args = args || [];
  // once stuff
  var onceListeners = this._onceEvents && this._onceEvents[ eventName ];

  for ( var i=0; i < listeners.length; i++ ) {
    var listener = listeners[i]
    var isOnce = onceListeners && onceListeners[ listener ];
    if ( isOnce ) {
      // remove listener
      // remove before trigger to prevent recursion
      this.off( eventName, listener );
      // unset once flag
      delete onceListeners[ listener ];
    }
    // trigger listener
    listener.apply( this, args );
  }

  return this;
};

proto.allOff = function() {
  delete this._events;
  delete this._onceEvents;
};

return EvEmitter;

}));


/***/ }),

/***/ "../../node_modules/fizzy-ui-utils/utils.js":
/*!********************************************************************************************!*\
  !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/fizzy-ui-utils/utils.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Fizzy UI utils v2.0.7
 * MIT license
 */

/*jshint browser: true, undef: true, unused: true, strict: true */

( function( window, factory ) {
  // universal module definition
  /*jshint strict: false */ /*globals define, module, require */

  if ( true ) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
      __webpack_require__(/*! desandro-matches-selector/matches-selector */ "../../node_modules/desandro-matches-selector/matches-selector.js")
    ], __WEBPACK_AMD_DEFINE_RESULT__ = (function( matchesSelector ) {
      return factory( window, matchesSelector );
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}

}( window, function factory( window, matchesSelector ) {

'use strict';

var utils = {};

// ----- extend ----- //

// extends objects
utils.extend = function( a, b ) {
  for ( var prop in b ) {
    a[ prop ] = b[ prop ];
  }
  return a;
};

// ----- modulo ----- //

utils.modulo = function( num, div ) {
  return ( ( num % div ) + div ) % div;
};

// ----- makeArray ----- //

var arraySlice = Array.prototype.slice;

// turn element or nodeList into an array
utils.makeArray = function( obj ) {
  if ( Array.isArray( obj ) ) {
    // use object if already an array
    return obj;
  }
  // return empty array if undefined or null. #6
  if ( obj === null || obj === undefined ) {
    return [];
  }

  var isArrayLike = typeof obj == 'object' && typeof obj.length == 'number';
  if ( isArrayLike ) {
    // convert nodeList to array
    return arraySlice.call( obj );
  }

  // array of single index
  return [ obj ];
};

// ----- removeFrom ----- //

utils.removeFrom = function( ary, obj ) {
  var index = ary.indexOf( obj );
  if ( index != -1 ) {
    ary.splice( index, 1 );
  }
};

// ----- getParent ----- //

utils.getParent = function( elem, selector ) {
  while ( elem.parentNode && elem != document.body ) {
    elem = elem.parentNode;
    if ( matchesSelector( elem, selector ) ) {
      return elem;
    }
  }
};

// ----- getQueryElement ----- //

// use element as selector string
utils.getQueryElement = function( elem ) {
  if ( typeof elem == 'string' ) {
    return document.querySelector( elem );
  }
  return elem;
};

// ----- handleEvent ----- //

// enable .ontype to trigger from .addEventListener( elem, 'type' )
utils.handleEvent = function( event ) {
  var method = 'on' + event.type;
  if ( this[ method ] ) {
    this[ method ]( event );
  }
};

// ----- filterFindElements ----- //

utils.filterFindElements = function( elems, selector ) {
  // make array of elems
  elems = utils.makeArray( elems );
  var ffElems = [];

  elems.forEach( function( elem ) {
    // check that elem is an actual element
    if ( !( elem instanceof HTMLElement ) ) {
      return;
    }
    // add elem if no selector
    if ( !selector ) {
      ffElems.push( elem );
      return;
    }
    // filter & find items if we have a selector
    // filter
    if ( matchesSelector( elem, selector ) ) {
      ffElems.push( elem );
    }
    // find children
    var childElems = elem.querySelectorAll( selector );
    // concat childElems to filterFound array
    for ( var i=0; i < childElems.length; i++ ) {
      ffElems.push( childElems[i] );
    }
  });

  return ffElems;
};

// ----- debounceMethod ----- //

utils.debounceMethod = function( _class, methodName, threshold ) {
  threshold = threshold || 100;
  // original method
  var method = _class.prototype[ methodName ];
  var timeoutName = methodName + 'Timeout';

  _class.prototype[ methodName ] = function() {
    var timeout = this[ timeoutName ];
    clearTimeout( timeout );

    var args = arguments;
    var _this = this;
    this[ timeoutName ] = setTimeout( function() {
      method.apply( _this, args );
      delete _this[ timeoutName ];
    }, threshold );
  };
};

// ----- docReady ----- //

utils.docReady = function( callback ) {
  var readyState = document.readyState;
  if ( readyState == 'complete' || readyState == 'interactive' ) {
    // do async to allow for other scripts to run. metafizzy/flickity#441
    setTimeout( callback );
  } else {
    document.addEventListener( 'DOMContentLoaded', callback );
  }
};

// ----- htmlInit ----- //

// http://jamesroberts.name/blog/2010/02/22/string-functions-for-javascript-trim-to-camel-case-to-dashed-and-to-underscore/
utils.toDashed = function( str ) {
  return str.replace( /(.)([A-Z])/g, function( match, $1, $2 ) {
    return $1 + '-' + $2;
  }).toLowerCase();
};

var console = window.console;
/**
 * allow user to initialize classes via [data-namespace] or .js-namespace class
 * htmlInit( Widget, 'widgetName' )
 * options are parsed from data-namespace-options
 */
utils.htmlInit = function( WidgetClass, namespace ) {
  utils.docReady( function() {
    var dashedNamespace = utils.toDashed( namespace );
    var dataAttr = 'data-' + dashedNamespace;
    var dataAttrElems = document.querySelectorAll( '[' + dataAttr + ']' );
    var jsDashElems = document.querySelectorAll( '.js-' + dashedNamespace );
    var elems = utils.makeArray( dataAttrElems )
      .concat( utils.makeArray( jsDashElems ) );
    var dataOptionsAttr = dataAttr + '-options';
    var jQuery = window.jQuery;

    elems.forEach( function( elem ) {
      var attr = elem.getAttribute( dataAttr ) ||
        elem.getAttribute( dataOptionsAttr );
      var options;
      try {
        options = attr && JSON.parse( attr );
      } catch ( error ) {
        // log error, do not initialize
        if ( console ) {
          console.error( 'Error parsing ' + dataAttr + ' on ' + elem.className +
          ': ' + error );
        }
        return;
      }
      // initialize
      var instance = new WidgetClass( elem, options );
      // make available via $().data('namespace')
      if ( jQuery ) {
        jQuery.data( elem, namespace, instance );
      }
    });

  });
};

// -----  ----- //

return utils;

}));


/***/ }),

/***/ "../../node_modules/get-size/get-size.js":
/*!*****************************************************************************************!*\
  !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/get-size/get-size.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * getSize v2.0.3
 * measure size of elements
 * MIT license
 */

/* jshint browser: true, strict: true, undef: true, unused: true */
/* globals console: false */

( function( window, factory ) {
  /* jshint strict: false */ /* globals define, module */
  if ( true ) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}

})( window, function factory() {
'use strict';

// -------------------------- helpers -------------------------- //

// get a number from a string, not a percentage
function getStyleSize( value ) {
  var num = parseFloat( value );
  // not a percent like '100%', and a number
  var isValid = value.indexOf('%') == -1 && !isNaN( num );
  return isValid && num;
}

function noop() {}

var logError = typeof console == 'undefined' ? noop :
  function( message ) {
    console.error( message );
  };

// -------------------------- measurements -------------------------- //

var measurements = [
  'paddingLeft',
  'paddingRight',
  'paddingTop',
  'paddingBottom',
  'marginLeft',
  'marginRight',
  'marginTop',
  'marginBottom',
  'borderLeftWidth',
  'borderRightWidth',
  'borderTopWidth',
  'borderBottomWidth'
];

var measurementsLength = measurements.length;

function getZeroSize() {
  var size = {
    width: 0,
    height: 0,
    innerWidth: 0,
    innerHeight: 0,
    outerWidth: 0,
    outerHeight: 0
  };
  for ( var i=0; i < measurementsLength; i++ ) {
    var measurement = measurements[i];
    size[ measurement ] = 0;
  }
  return size;
}

// -------------------------- getStyle -------------------------- //

/**
 * getStyle, get style of element, check for Firefox bug
 * https://bugzilla.mozilla.org/show_bug.cgi?id=548397
 */
function getStyle( elem ) {
  var style = getComputedStyle( elem );
  if ( !style ) {
    logError( 'Style returned ' + style +
      '. Are you running this code in a hidden iframe on Firefox? ' +
      'See https://bit.ly/getsizebug1' );
  }
  return style;
}

// -------------------------- setup -------------------------- //

var isSetup = false;

var isBoxSizeOuter;

/**
 * setup
 * check isBoxSizerOuter
 * do on first getSize() rather than on page load for Firefox bug
 */
function setup() {
  // setup once
  if ( isSetup ) {
    return;
  }
  isSetup = true;

  // -------------------------- box sizing -------------------------- //

  /**
   * Chrome & Safari measure the outer-width on style.width on border-box elems
   * IE11 & Firefox<29 measures the inner-width
   */
  var div = document.createElement('div');
  div.style.width = '200px';
  div.style.padding = '1px 2px 3px 4px';
  div.style.borderStyle = 'solid';
  div.style.borderWidth = '1px 2px 3px 4px';
  div.style.boxSizing = 'border-box';

  var body = document.body || document.documentElement;
  body.appendChild( div );
  var style = getStyle( div );
  // round value for browser zoom. desandro/masonry#928
  isBoxSizeOuter = Math.round( getStyleSize( style.width ) ) == 200;
  getSize.isBoxSizeOuter = isBoxSizeOuter;

  body.removeChild( div );
}

// -------------------------- getSize -------------------------- //

function getSize( elem ) {
  setup();

  // use querySeletor if elem is string
  if ( typeof elem == 'string' ) {
    elem = document.querySelector( elem );
  }

  // do not proceed on non-objects
  if ( !elem || typeof elem != 'object' || !elem.nodeType ) {
    return;
  }

  var style = getStyle( elem );

  // if hidden, everything is 0
  if ( style.display == 'none' ) {
    return getZeroSize();
  }

  var size = {};
  size.width = elem.offsetWidth;
  size.height = elem.offsetHeight;

  var isBorderBox = size.isBorderBox = style.boxSizing == 'border-box';

  // get all measurements
  for ( var i=0; i < measurementsLength; i++ ) {
    var measurement = measurements[i];
    var value = style[ measurement ];
    var num = parseFloat( value );
    // any 'auto', 'medium' value will be 0
    size[ measurement ] = !isNaN( num ) ? num : 0;
  }

  var paddingWidth = size.paddingLeft + size.paddingRight;
  var paddingHeight = size.paddingTop + size.paddingBottom;
  var marginWidth = size.marginLeft + size.marginRight;
  var marginHeight = size.marginTop + size.marginBottom;
  var borderWidth = size.borderLeftWidth + size.borderRightWidth;
  var borderHeight = size.borderTopWidth + size.borderBottomWidth;

  var isBorderBoxSizeOuter = isBorderBox && isBoxSizeOuter;

  // overwrite width and height if we can get it from style
  var styleWidth = getStyleSize( style.width );
  if ( styleWidth !== false ) {
    size.width = styleWidth +
      // add padding and border unless it's already including it
      ( isBorderBoxSizeOuter ? 0 : paddingWidth + borderWidth );
  }

  var styleHeight = getStyleSize( style.height );
  if ( styleHeight !== false ) {
    size.height = styleHeight +
      // add padding and border unless it's already including it
      ( isBorderBoxSizeOuter ? 0 : paddingHeight + borderHeight );
  }

  size.innerWidth = size.width - ( paddingWidth + borderWidth );
  size.innerHeight = size.height - ( paddingHeight + borderHeight );

  size.outerWidth = size.width + marginWidth;
  size.outerHeight = size.height + marginHeight;

  return size;
}

return getSize;

});


/***/ }),

/***/ "../../node_modules/imagesloaded/imagesloaded.js":
/*!*************************************************************************************************!*\
  !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/imagesloaded/imagesloaded.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * imagesLoaded v4.1.4
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

( function( window, factory ) { 'use strict';
  // universal module definition

  /*global define: false, module: false, require: false */

  if ( true ) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
      __webpack_require__(/*! ev-emitter/ev-emitter */ "../../node_modules/ev-emitter/ev-emitter.js")
    ], __WEBPACK_AMD_DEFINE_RESULT__ = (function( EvEmitter ) {
      return factory( window, EvEmitter );
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}

})( typeof window !== 'undefined' ? window : this,

// --------------------------  factory -------------------------- //

function factory( window, EvEmitter ) {

'use strict';

var $ = window.jQuery;
var console = window.console;

// -------------------------- helpers -------------------------- //

// extend objects
function extend( a, b ) {
  for ( var prop in b ) {
    a[ prop ] = b[ prop ];
  }
  return a;
}

var arraySlice = Array.prototype.slice;

// turn element or nodeList into an array
function makeArray( obj ) {
  if ( Array.isArray( obj ) ) {
    // use object if already an array
    return obj;
  }

  var isArrayLike = typeof obj == 'object' && typeof obj.length == 'number';
  if ( isArrayLike ) {
    // convert nodeList to array
    return arraySlice.call( obj );
  }

  // array of single index
  return [ obj ];
}

// -------------------------- imagesLoaded -------------------------- //

/**
 * @param {Array, Element, NodeList, String} elem
 * @param {Object or Function} options - if function, use as callback
 * @param {Function} onAlways - callback function
 */
function ImagesLoaded( elem, options, onAlways ) {
  // coerce ImagesLoaded() without new, to be new ImagesLoaded()
  if ( !( this instanceof ImagesLoaded ) ) {
    return new ImagesLoaded( elem, options, onAlways );
  }
  // use elem as selector string
  var queryElem = elem;
  if ( typeof elem == 'string' ) {
    queryElem = document.querySelectorAll( elem );
  }
  // bail if bad element
  if ( !queryElem ) {
    console.error( 'Bad element for imagesLoaded ' + ( queryElem || elem ) );
    return;
  }

  this.elements = makeArray( queryElem );
  this.options = extend( {}, this.options );
  // shift arguments if no options set
  if ( typeof options == 'function' ) {
    onAlways = options;
  } else {
    extend( this.options, options );
  }

  if ( onAlways ) {
    this.on( 'always', onAlways );
  }

  this.getImages();

  if ( $ ) {
    // add jQuery Deferred object
    this.jqDeferred = new $.Deferred();
  }

  // HACK check async to allow time to bind listeners
  setTimeout( this.check.bind( this ) );
}

ImagesLoaded.prototype = Object.create( EvEmitter.prototype );

ImagesLoaded.prototype.options = {};

ImagesLoaded.prototype.getImages = function() {
  this.images = [];

  // filter & find items if we have an item selector
  this.elements.forEach( this.addElementImages, this );
};

/**
 * @param {Node} element
 */
ImagesLoaded.prototype.addElementImages = function( elem ) {
  // filter siblings
  if ( elem.nodeName == 'IMG' ) {
    this.addImage( elem );
  }
  // get background image on element
  if ( this.options.background === true ) {
    this.addElementBackgroundImages( elem );
  }

  // find children
  // no non-element nodes, #143
  var nodeType = elem.nodeType;
  if ( !nodeType || !elementNodeTypes[ nodeType ] ) {
    return;
  }
  var childImgs = elem.querySelectorAll('img');
  // concat childElems to filterFound array
  for ( var i=0; i < childImgs.length; i++ ) {
    var img = childImgs[i];
    this.addImage( img );
  }

  // get child background images
  if ( typeof this.options.background == 'string' ) {
    var children = elem.querySelectorAll( this.options.background );
    for ( i=0; i < children.length; i++ ) {
      var child = children[i];
      this.addElementBackgroundImages( child );
    }
  }
};

var elementNodeTypes = {
  1: true,
  9: true,
  11: true
};

ImagesLoaded.prototype.addElementBackgroundImages = function( elem ) {
  var style = getComputedStyle( elem );
  if ( !style ) {
    // Firefox returns null if in a hidden iframe https://bugzil.la/548397
    return;
  }
  // get url inside url("...")
  var reURL = /url\((['"])?(.*?)\1\)/gi;
  var matches = reURL.exec( style.backgroundImage );
  while ( matches !== null ) {
    var url = matches && matches[2];
    if ( url ) {
      this.addBackground( url, elem );
    }
    matches = reURL.exec( style.backgroundImage );
  }
};

/**
 * @param {Image} img
 */
ImagesLoaded.prototype.addImage = function( img ) {
  var loadingImage = new LoadingImage( img );
  this.images.push( loadingImage );
};

ImagesLoaded.prototype.addBackground = function( url, elem ) {
  var background = new Background( url, elem );
  this.images.push( background );
};

ImagesLoaded.prototype.check = function() {
  var _this = this;
  this.progressedCount = 0;
  this.hasAnyBroken = false;
  // complete if no images
  if ( !this.images.length ) {
    this.complete();
    return;
  }

  function onProgress( image, elem, message ) {
    // HACK - Chrome triggers event before object properties have changed. #83
    setTimeout( function() {
      _this.progress( image, elem, message );
    });
  }

  this.images.forEach( function( loadingImage ) {
    loadingImage.once( 'progress', onProgress );
    loadingImage.check();
  });
};

ImagesLoaded.prototype.progress = function( image, elem, message ) {
  this.progressedCount++;
  this.hasAnyBroken = this.hasAnyBroken || !image.isLoaded;
  // progress event
  this.emitEvent( 'progress', [ this, image, elem ] );
  if ( this.jqDeferred && this.jqDeferred.notify ) {
    this.jqDeferred.notify( this, image );
  }
  // check if completed
  if ( this.progressedCount == this.images.length ) {
    this.complete();
  }

  if ( this.options.debug && console ) {
    console.log( 'progress: ' + message, image, elem );
  }
};

ImagesLoaded.prototype.complete = function() {
  var eventName = this.hasAnyBroken ? 'fail' : 'done';
  this.isComplete = true;
  this.emitEvent( eventName, [ this ] );
  this.emitEvent( 'always', [ this ] );
  if ( this.jqDeferred ) {
    var jqMethod = this.hasAnyBroken ? 'reject' : 'resolve';
    this.jqDeferred[ jqMethod ]( this );
  }
};

// --------------------------  -------------------------- //

function LoadingImage( img ) {
  this.img = img;
}

LoadingImage.prototype = Object.create( EvEmitter.prototype );

LoadingImage.prototype.check = function() {
  // If complete is true and browser supports natural sizes,
  // try to check for image status manually.
  var isComplete = this.getIsImageComplete();
  if ( isComplete ) {
    // report based on naturalWidth
    this.confirm( this.img.naturalWidth !== 0, 'naturalWidth' );
    return;
  }

  // If none of the checks above matched, simulate loading on detached element.
  this.proxyImage = new Image();
  this.proxyImage.addEventListener( 'load', this );
  this.proxyImage.addEventListener( 'error', this );
  // bind to image as well for Firefox. #191
  this.img.addEventListener( 'load', this );
  this.img.addEventListener( 'error', this );
  this.proxyImage.src = this.img.src;
};

LoadingImage.prototype.getIsImageComplete = function() {
  // check for non-zero, non-undefined naturalWidth
  // fixes Safari+InfiniteScroll+Masonry bug infinite-scroll#671
  return this.img.complete && this.img.naturalWidth;
};

LoadingImage.prototype.confirm = function( isLoaded, message ) {
  this.isLoaded = isLoaded;
  this.emitEvent( 'progress', [ this, this.img, message ] );
};

// ----- events ----- //

// trigger specified handler for event type
LoadingImage.prototype.handleEvent = function( event ) {
  var method = 'on' + event.type;
  if ( this[ method ] ) {
    this[ method ]( event );
  }
};

LoadingImage.prototype.onload = function() {
  this.confirm( true, 'onload' );
  this.unbindEvents();
};

LoadingImage.prototype.onerror = function() {
  this.confirm( false, 'onerror' );
  this.unbindEvents();
};

LoadingImage.prototype.unbindEvents = function() {
  this.proxyImage.removeEventListener( 'load', this );
  this.proxyImage.removeEventListener( 'error', this );
  this.img.removeEventListener( 'load', this );
  this.img.removeEventListener( 'error', this );
};

// -------------------------- Background -------------------------- //

function Background( url, element ) {
  this.url = url;
  this.element = element;
  this.img = new Image();
}

// inherit LoadingImage prototype
Background.prototype = Object.create( LoadingImage.prototype );

Background.prototype.check = function() {
  this.img.addEventListener( 'load', this );
  this.img.addEventListener( 'error', this );
  this.img.src = this.url;
  // check if image is already complete
  var isComplete = this.getIsImageComplete();
  if ( isComplete ) {
    this.confirm( this.img.naturalWidth !== 0, 'naturalWidth' );
    this.unbindEvents();
  }
};

Background.prototype.unbindEvents = function() {
  this.img.removeEventListener( 'load', this );
  this.img.removeEventListener( 'error', this );
};

Background.prototype.confirm = function( isLoaded, message ) {
  this.isLoaded = isLoaded;
  this.emitEvent( 'progress', [ this, this.element, message ] );
};

// -------------------------- jQuery -------------------------- //

ImagesLoaded.makeJQueryPlugin = function( jQuery ) {
  jQuery = jQuery || window.jQuery;
  if ( !jQuery ) {
    return;
  }
  // set local variable
  $ = jQuery;
  // $().imagesLoaded()
  $.fn.imagesLoaded = function( options, callback ) {
    var instance = new ImagesLoaded( this, options, callback );
    return instance.jqDeferred.promise( $(this) );
  };
};
// try making plugin
ImagesLoaded.makeJQueryPlugin();

// --------------------------  -------------------------- //

return ImagesLoaded;

});


/***/ }),

/***/ "../../node_modules/masonry-layout/masonry.js":
/*!**********************************************************************************************!*\
  !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/masonry-layout/masonry.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * Masonry v4.2.2
 * Cascading grid layout library
 * https://masonry.desandro.com
 * MIT License
 * by David DeSandro
 */

( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */ /*globals define, module, require */
  if ( true ) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
        __webpack_require__(/*! outlayer/outlayer */ "../../node_modules/outlayer/outlayer.js"),
        __webpack_require__(/*! get-size/get-size */ "../../node_modules/get-size/get-size.js")
      ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}

}( window, function factory( Outlayer, getSize ) {

'use strict';

// -------------------------- masonryDefinition -------------------------- //

  // create an Outlayer layout class
  var Masonry = Outlayer.create('masonry');
  // isFitWidth -> fitWidth
  Masonry.compatOptions.fitWidth = 'isFitWidth';

  var proto = Masonry.prototype;

  proto._resetLayout = function() {
    this.getSize();
    this._getMeasurement( 'columnWidth', 'outerWidth' );
    this._getMeasurement( 'gutter', 'outerWidth' );
    this.measureColumns();

    // reset column Y
    this.colYs = [];
    for ( var i=0; i < this.cols; i++ ) {
      this.colYs.push( 0 );
    }

    this.maxY = 0;
    this.horizontalColIndex = 0;
  };

  proto.measureColumns = function() {
    this.getContainerWidth();
    // if columnWidth is 0, default to outerWidth of first item
    if ( !this.columnWidth ) {
      var firstItem = this.items[0];
      var firstItemElem = firstItem && firstItem.element;
      // columnWidth fall back to item of first element
      this.columnWidth = firstItemElem && getSize( firstItemElem ).outerWidth ||
        // if first elem has no width, default to size of container
        this.containerWidth;
    }

    var columnWidth = this.columnWidth += this.gutter;

    // calculate columns
    var containerWidth = this.containerWidth + this.gutter;
    var cols = containerWidth / columnWidth;
    // fix rounding errors, typically with gutters
    var excess = columnWidth - containerWidth % columnWidth;
    // if overshoot is less than a pixel, round up, otherwise floor it
    var mathMethod = excess && excess < 1 ? 'round' : 'floor';
    cols = Math[ mathMethod ]( cols );
    this.cols = Math.max( cols, 1 );
  };

  proto.getContainerWidth = function() {
    // container is parent if fit width
    var isFitWidth = this._getOption('fitWidth');
    var container = isFitWidth ? this.element.parentNode : this.element;
    // check that this.size and size are there
    // IE8 triggers resize on body size change, so they might not be
    var size = getSize( container );
    this.containerWidth = size && size.innerWidth;
  };

  proto._getItemLayoutPosition = function( item ) {
    item.getSize();
    // how many columns does this brick span
    var remainder = item.size.outerWidth % this.columnWidth;
    var mathMethod = remainder && remainder < 1 ? 'round' : 'ceil';
    // round if off by 1 pixel, otherwise use ceil
    var colSpan = Math[ mathMethod ]( item.size.outerWidth / this.columnWidth );
    colSpan = Math.min( colSpan, this.cols );
    // use horizontal or top column position
    var colPosMethod = this.options.horizontalOrder ?
      '_getHorizontalColPosition' : '_getTopColPosition';
    var colPosition = this[ colPosMethod ]( colSpan, item );
    // position the brick
    var position = {
      x: this.columnWidth * colPosition.col,
      y: colPosition.y
    };
    // apply setHeight to necessary columns
    var setHeight = colPosition.y + item.size.outerHeight;
    var setMax = colSpan + colPosition.col;
    for ( var i = colPosition.col; i < setMax; i++ ) {
      this.colYs[i] = setHeight;
    }

    return position;
  };

  proto._getTopColPosition = function( colSpan ) {
    var colGroup = this._getTopColGroup( colSpan );
    // get the minimum Y value from the columns
    var minimumY = Math.min.apply( Math, colGroup );

    return {
      col: colGroup.indexOf( minimumY ),
      y: minimumY,
    };
  };

  /**
   * @param {Number} colSpan - number of columns the element spans
   * @returns {Array} colGroup
   */
  proto._getTopColGroup = function( colSpan ) {
    if ( colSpan < 2 ) {
      // if brick spans only one column, use all the column Ys
      return this.colYs;
    }

    var colGroup = [];
    // how many different places could this brick fit horizontally
    var groupCount = this.cols + 1 - colSpan;
    // for each group potential horizontal position
    for ( var i = 0; i < groupCount; i++ ) {
      colGroup[i] = this._getColGroupY( i, colSpan );
    }
    return colGroup;
  };

  proto._getColGroupY = function( col, colSpan ) {
    if ( colSpan < 2 ) {
      return this.colYs[ col ];
    }
    // make an array of colY values for that one group
    var groupColYs = this.colYs.slice( col, col + colSpan );
    // and get the max value of the array
    return Math.max.apply( Math, groupColYs );
  };

  // get column position based on horizontal index. #873
  proto._getHorizontalColPosition = function( colSpan, item ) {
    var col = this.horizontalColIndex % this.cols;
    var isOver = colSpan > 1 && col + colSpan > this.cols;
    // shift to next row if item can't fit on current row
    col = isOver ? 0 : col;
    // don't let zero-size items take up space
    var hasSize = item.size.outerWidth && item.size.outerHeight;
    this.horizontalColIndex = hasSize ? col + colSpan : this.horizontalColIndex;

    return {
      col: col,
      y: this._getColGroupY( col, colSpan ),
    };
  };

  proto._manageStamp = function( stamp ) {
    var stampSize = getSize( stamp );
    var offset = this._getElementOffset( stamp );
    // get the columns that this stamp affects
    var isOriginLeft = this._getOption('originLeft');
    var firstX = isOriginLeft ? offset.left : offset.right;
    var lastX = firstX + stampSize.outerWidth;
    var firstCol = Math.floor( firstX / this.columnWidth );
    firstCol = Math.max( 0, firstCol );
    var lastCol = Math.floor( lastX / this.columnWidth );
    // lastCol should not go over if multiple of columnWidth #425
    lastCol -= lastX % this.columnWidth ? 0 : 1;
    lastCol = Math.min( this.cols - 1, lastCol );
    // set colYs to bottom of the stamp

    var isOriginTop = this._getOption('originTop');
    var stampMaxY = ( isOriginTop ? offset.top : offset.bottom ) +
      stampSize.outerHeight;
    for ( var i = firstCol; i <= lastCol; i++ ) {
      this.colYs[i] = Math.max( stampMaxY, this.colYs[i] );
    }
  };

  proto._getContainerSize = function() {
    this.maxY = Math.max.apply( Math, this.colYs );
    var size = {
      height: this.maxY
    };

    if ( this._getOption('fitWidth') ) {
      size.width = this._getContainerFitWidth();
    }

    return size;
  };

  proto._getContainerFitWidth = function() {
    var unusedCols = 0;
    // count unused columns
    var i = this.cols;
    while ( --i ) {
      if ( this.colYs[i] !== 0 ) {
        break;
      }
      unusedCols++;
    }
    // fit container to columns that have been used
    return ( this.cols - unusedCols ) * this.columnWidth - this.gutter;
  };

  proto.needsResizeLayout = function() {
    var previousWidth = this.containerWidth;
    this.getContainerWidth();
    return previousWidth != this.containerWidth;
  };

  return Masonry;

}));


/***/ }),

/***/ "../../node_modules/outlayer/item.js":
/*!*************************************************************************************!*\
  !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/outlayer/item.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Outlayer Item
 */

( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */ /* globals define, module, require */
  if ( true ) {
    // AMD - RequireJS
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
        __webpack_require__(/*! ev-emitter/ev-emitter */ "../../node_modules/ev-emitter/ev-emitter.js"),
        __webpack_require__(/*! get-size/get-size */ "../../node_modules/get-size/get-size.js")
      ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}

}( window, function factory( EvEmitter, getSize ) {
'use strict';

// ----- helpers ----- //

function isEmptyObj( obj ) {
  for ( var prop in obj ) {
    return false;
  }
  prop = null;
  return true;
}

// -------------------------- CSS3 support -------------------------- //


var docElemStyle = document.documentElement.style;

var transitionProperty = typeof docElemStyle.transition == 'string' ?
  'transition' : 'WebkitTransition';
var transformProperty = typeof docElemStyle.transform == 'string' ?
  'transform' : 'WebkitTransform';

var transitionEndEvent = {
  WebkitTransition: 'webkitTransitionEnd',
  transition: 'transitionend'
}[ transitionProperty ];

// cache all vendor properties that could have vendor prefix
var vendorProperties = {
  transform: transformProperty,
  transition: transitionProperty,
  transitionDuration: transitionProperty + 'Duration',
  transitionProperty: transitionProperty + 'Property',
  transitionDelay: transitionProperty + 'Delay'
};

// -------------------------- Item -------------------------- //

function Item( element, layout ) {
  if ( !element ) {
    return;
  }

  this.element = element;
  // parent layout class, i.e. Masonry, Isotope, or Packery
  this.layout = layout;
  this.position = {
    x: 0,
    y: 0
  };

  this._create();
}

// inherit EvEmitter
var proto = Item.prototype = Object.create( EvEmitter.prototype );
proto.constructor = Item;

proto._create = function() {
  // transition objects
  this._transn = {
    ingProperties: {},
    clean: {},
    onEnd: {}
  };

  this.css({
    position: 'absolute'
  });
};

// trigger specified handler for event type
proto.handleEvent = function( event ) {
  var method = 'on' + event.type;
  if ( this[ method ] ) {
    this[ method ]( event );
  }
};

proto.getSize = function() {
  this.size = getSize( this.element );
};

/**
 * apply CSS styles to element
 * @param {Object} style
 */
proto.css = function( style ) {
  var elemStyle = this.element.style;

  for ( var prop in style ) {
    // use vendor property if available
    var supportedProp = vendorProperties[ prop ] || prop;
    elemStyle[ supportedProp ] = style[ prop ];
  }
};

 // measure position, and sets it
proto.getPosition = function() {
  var style = getComputedStyle( this.element );
  var isOriginLeft = this.layout._getOption('originLeft');
  var isOriginTop = this.layout._getOption('originTop');
  var xValue = style[ isOriginLeft ? 'left' : 'right' ];
  var yValue = style[ isOriginTop ? 'top' : 'bottom' ];
  var x = parseFloat( xValue );
  var y = parseFloat( yValue );
  // convert percent to pixels
  var layoutSize = this.layout.size;
  if ( xValue.indexOf('%') != -1 ) {
    x = ( x / 100 ) * layoutSize.width;
  }
  if ( yValue.indexOf('%') != -1 ) {
    y = ( y / 100 ) * layoutSize.height;
  }
  // clean up 'auto' or other non-integer values
  x = isNaN( x ) ? 0 : x;
  y = isNaN( y ) ? 0 : y;
  // remove padding from measurement
  x -= isOriginLeft ? layoutSize.paddingLeft : layoutSize.paddingRight;
  y -= isOriginTop ? layoutSize.paddingTop : layoutSize.paddingBottom;

  this.position.x = x;
  this.position.y = y;
};

// set settled position, apply padding
proto.layoutPosition = function() {
  var layoutSize = this.layout.size;
  var style = {};
  var isOriginLeft = this.layout._getOption('originLeft');
  var isOriginTop = this.layout._getOption('originTop');

  // x
  var xPadding = isOriginLeft ? 'paddingLeft' : 'paddingRight';
  var xProperty = isOriginLeft ? 'left' : 'right';
  var xResetProperty = isOriginLeft ? 'right' : 'left';

  var x = this.position.x + layoutSize[ xPadding ];
  // set in percentage or pixels
  style[ xProperty ] = this.getXValue( x );
  // reset other property
  style[ xResetProperty ] = '';

  // y
  var yPadding = isOriginTop ? 'paddingTop' : 'paddingBottom';
  var yProperty = isOriginTop ? 'top' : 'bottom';
  var yResetProperty = isOriginTop ? 'bottom' : 'top';

  var y = this.position.y + layoutSize[ yPadding ];
  // set in percentage or pixels
  style[ yProperty ] = this.getYValue( y );
  // reset other property
  style[ yResetProperty ] = '';

  this.css( style );
  this.emitEvent( 'layout', [ this ] );
};

proto.getXValue = function( x ) {
  var isHorizontal = this.layout._getOption('horizontal');
  return this.layout.options.percentPosition && !isHorizontal ?
    ( ( x / this.layout.size.width ) * 100 ) + '%' : x + 'px';
};

proto.getYValue = function( y ) {
  var isHorizontal = this.layout._getOption('horizontal');
  return this.layout.options.percentPosition && isHorizontal ?
    ( ( y / this.layout.size.height ) * 100 ) + '%' : y + 'px';
};

proto._transitionTo = function( x, y ) {
  this.getPosition();
  // get current x & y from top/left
  var curX = this.position.x;
  var curY = this.position.y;

  var didNotMove = x == this.position.x && y == this.position.y;

  // save end position
  this.setPosition( x, y );

  // if did not move and not transitioning, just go to layout
  if ( didNotMove && !this.isTransitioning ) {
    this.layoutPosition();
    return;
  }

  var transX = x - curX;
  var transY = y - curY;
  var transitionStyle = {};
  transitionStyle.transform = this.getTranslate( transX, transY );

  this.transition({
    to: transitionStyle,
    onTransitionEnd: {
      transform: this.layoutPosition
    },
    isCleaning: true
  });
};

proto.getTranslate = function( x, y ) {
  // flip cooridinates if origin on right or bottom
  var isOriginLeft = this.layout._getOption('originLeft');
  var isOriginTop = this.layout._getOption('originTop');
  x = isOriginLeft ? x : -x;
  y = isOriginTop ? y : -y;
  return 'translate3d(' + x + 'px, ' + y + 'px, 0)';
};

// non transition + transform support
proto.goTo = function( x, y ) {
  this.setPosition( x, y );
  this.layoutPosition();
};

proto.moveTo = proto._transitionTo;

proto.setPosition = function( x, y ) {
  this.position.x = parseFloat( x );
  this.position.y = parseFloat( y );
};

// ----- transition ----- //

/**
 * @param {Object} style - CSS
 * @param {Function} onTransitionEnd
 */

// non transition, just trigger callback
proto._nonTransition = function( args ) {
  this.css( args.to );
  if ( args.isCleaning ) {
    this._removeStyles( args.to );
  }
  for ( var prop in args.onTransitionEnd ) {
    args.onTransitionEnd[ prop ].call( this );
  }
};

/**
 * proper transition
 * @param {Object} args - arguments
 *   @param {Object} to - style to transition to
 *   @param {Object} from - style to start transition from
 *   @param {Boolean} isCleaning - removes transition styles after transition
 *   @param {Function} onTransitionEnd - callback
 */
proto.transition = function( args ) {
  // redirect to nonTransition if no transition duration
  if ( !parseFloat( this.layout.options.transitionDuration ) ) {
    this._nonTransition( args );
    return;
  }

  var _transition = this._transn;
  // keep track of onTransitionEnd callback by css property
  for ( var prop in args.onTransitionEnd ) {
    _transition.onEnd[ prop ] = args.onTransitionEnd[ prop ];
  }
  // keep track of properties that are transitioning
  for ( prop in args.to ) {
    _transition.ingProperties[ prop ] = true;
    // keep track of properties to clean up when transition is done
    if ( args.isCleaning ) {
      _transition.clean[ prop ] = true;
    }
  }

  // set from styles
  if ( args.from ) {
    this.css( args.from );
    // force redraw. http://blog.alexmaccaw.com/css-transitions
    var h = this.element.offsetHeight;
    // hack for JSHint to hush about unused var
    h = null;
  }
  // enable transition
  this.enableTransition( args.to );
  // set styles that are transitioning
  this.css( args.to );

  this.isTransitioning = true;

};

// dash before all cap letters, including first for
// WebkitTransform => -webkit-transform
function toDashedAll( str ) {
  return str.replace( /([A-Z])/g, function( $1 ) {
    return '-' + $1.toLowerCase();
  });
}

var transitionProps = 'opacity,' + toDashedAll( transformProperty );

proto.enableTransition = function(/* style */) {
  // HACK changing transitionProperty during a transition
  // will cause transition to jump
  if ( this.isTransitioning ) {
    return;
  }

  // make `transition: foo, bar, baz` from style object
  // HACK un-comment this when enableTransition can work
  // while a transition is happening
  // var transitionValues = [];
  // for ( var prop in style ) {
  //   // dash-ify camelCased properties like WebkitTransition
  //   prop = vendorProperties[ prop ] || prop;
  //   transitionValues.push( toDashedAll( prop ) );
  // }
  // munge number to millisecond, to match stagger
  var duration = this.layout.options.transitionDuration;
  duration = typeof duration == 'number' ? duration + 'ms' : duration;
  // enable transition styles
  this.css({
    transitionProperty: transitionProps,
    transitionDuration: duration,
    transitionDelay: this.staggerDelay || 0
  });
  // listen for transition end event
  this.element.addEventListener( transitionEndEvent, this, false );
};

// ----- events ----- //

proto.onwebkitTransitionEnd = function( event ) {
  this.ontransitionend( event );
};

proto.onotransitionend = function( event ) {
  this.ontransitionend( event );
};

// properties that I munge to make my life easier
var dashedVendorProperties = {
  '-webkit-transform': 'transform'
};

proto.ontransitionend = function( event ) {
  // disregard bubbled events from children
  if ( event.target !== this.element ) {
    return;
  }
  var _transition = this._transn;
  // get property name of transitioned property, convert to prefix-free
  var propertyName = dashedVendorProperties[ event.propertyName ] || event.propertyName;

  // remove property that has completed transitioning
  delete _transition.ingProperties[ propertyName ];
  // check if any properties are still transitioning
  if ( isEmptyObj( _transition.ingProperties ) ) {
    // all properties have completed transitioning
    this.disableTransition();
  }
  // clean style
  if ( propertyName in _transition.clean ) {
    // clean up style
    this.element.style[ event.propertyName ] = '';
    delete _transition.clean[ propertyName ];
  }
  // trigger onTransitionEnd callback
  if ( propertyName in _transition.onEnd ) {
    var onTransitionEnd = _transition.onEnd[ propertyName ];
    onTransitionEnd.call( this );
    delete _transition.onEnd[ propertyName ];
  }

  this.emitEvent( 'transitionEnd', [ this ] );
};

proto.disableTransition = function() {
  this.removeTransitionStyles();
  this.element.removeEventListener( transitionEndEvent, this, false );
  this.isTransitioning = false;
};

/**
 * removes style property from element
 * @param {Object} style
**/
proto._removeStyles = function( style ) {
  // clean up transition styles
  var cleanStyle = {};
  for ( var prop in style ) {
    cleanStyle[ prop ] = '';
  }
  this.css( cleanStyle );
};

var cleanTransitionStyle = {
  transitionProperty: '',
  transitionDuration: '',
  transitionDelay: ''
};

proto.removeTransitionStyles = function() {
  // remove transition
  this.css( cleanTransitionStyle );
};

// ----- stagger ----- //

proto.stagger = function( delay ) {
  delay = isNaN( delay ) ? 0 : delay;
  this.staggerDelay = delay + 'ms';
};

// ----- show/hide/remove ----- //

// remove element from DOM
proto.removeElem = function() {
  this.element.parentNode.removeChild( this.element );
  // remove display: none
  this.css({ display: '' });
  this.emitEvent( 'remove', [ this ] );
};

proto.remove = function() {
  // just remove element if no transition support or no transition
  if ( !transitionProperty || !parseFloat( this.layout.options.transitionDuration ) ) {
    this.removeElem();
    return;
  }

  // start transition
  this.once( 'transitionEnd', function() {
    this.removeElem();
  });
  this.hide();
};

proto.reveal = function() {
  delete this.isHidden;
  // remove display: none
  this.css({ display: '' });

  var options = this.layout.options;

  var onTransitionEnd = {};
  var transitionEndProperty = this.getHideRevealTransitionEndProperty('visibleStyle');
  onTransitionEnd[ transitionEndProperty ] = this.onRevealTransitionEnd;

  this.transition({
    from: options.hiddenStyle,
    to: options.visibleStyle,
    isCleaning: true,
    onTransitionEnd: onTransitionEnd
  });
};

proto.onRevealTransitionEnd = function() {
  // check if still visible
  // during transition, item may have been hidden
  if ( !this.isHidden ) {
    this.emitEvent('reveal');
  }
};

/**
 * get style property use for hide/reveal transition end
 * @param {String} styleProperty - hiddenStyle/visibleStyle
 * @returns {String}
 */
proto.getHideRevealTransitionEndProperty = function( styleProperty ) {
  var optionStyle = this.layout.options[ styleProperty ];
  // use opacity
  if ( optionStyle.opacity ) {
    return 'opacity';
  }
  // get first property
  for ( var prop in optionStyle ) {
    return prop;
  }
};

proto.hide = function() {
  // set flag
  this.isHidden = true;
  // remove display: none
  this.css({ display: '' });

  var options = this.layout.options;

  var onTransitionEnd = {};
  var transitionEndProperty = this.getHideRevealTransitionEndProperty('hiddenStyle');
  onTransitionEnd[ transitionEndProperty ] = this.onHideTransitionEnd;

  this.transition({
    from: options.visibleStyle,
    to: options.hiddenStyle,
    // keep hidden stuff hidden
    isCleaning: true,
    onTransitionEnd: onTransitionEnd
  });
};

proto.onHideTransitionEnd = function() {
  // check if still hidden
  // during transition, item may have been un-hidden
  if ( this.isHidden ) {
    this.css({ display: 'none' });
    this.emitEvent('hide');
  }
};

proto.destroy = function() {
  this.css({
    position: '',
    left: '',
    right: '',
    top: '',
    bottom: '',
    transition: '',
    transform: ''
  });
};

return Item;

}));


/***/ }),

/***/ "../../node_modules/outlayer/outlayer.js":
/*!*****************************************************************************************!*\
  !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/outlayer/outlayer.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * Outlayer v2.1.1
 * the brains and guts of a layout library
 * MIT license
 */

( function( window, factory ) {
  'use strict';
  // universal module definition
  /* jshint strict: false */ /* globals define, module, require */
  if ( true ) {
    // AMD - RequireJS
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
        __webpack_require__(/*! ev-emitter/ev-emitter */ "../../node_modules/ev-emitter/ev-emitter.js"),
        __webpack_require__(/*! get-size/get-size */ "../../node_modules/get-size/get-size.js"),
        __webpack_require__(/*! fizzy-ui-utils/utils */ "../../node_modules/fizzy-ui-utils/utils.js"),
        __webpack_require__(/*! ./item */ "../../node_modules/outlayer/item.js")
      ], __WEBPACK_AMD_DEFINE_RESULT__ = (function( EvEmitter, getSize, utils, Item ) {
        return factory( window, EvEmitter, getSize, utils, Item);
      }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}

}( window, function factory( window, EvEmitter, getSize, utils, Item ) {
'use strict';

// ----- vars ----- //

var console = window.console;
var jQuery = window.jQuery;
var noop = function() {};

// -------------------------- Outlayer -------------------------- //

// globally unique identifiers
var GUID = 0;
// internal store of all Outlayer intances
var instances = {};


/**
 * @param {Element, String} element
 * @param {Object} options
 * @constructor
 */
function Outlayer( element, options ) {
  var queryElement = utils.getQueryElement( element );
  if ( !queryElement ) {
    if ( console ) {
      console.error( 'Bad element for ' + this.constructor.namespace +
        ': ' + ( queryElement || element ) );
    }
    return;
  }
  this.element = queryElement;
  // add jQuery
  if ( jQuery ) {
    this.$element = jQuery( this.element );
  }

  // options
  this.options = utils.extend( {}, this.constructor.defaults );
  this.option( options );

  // add id for Outlayer.getFromElement
  var id = ++GUID;
  this.element.outlayerGUID = id; // expando
  instances[ id ] = this; // associate via id

  // kick it off
  this._create();

  var isInitLayout = this._getOption('initLayout');
  if ( isInitLayout ) {
    this.layout();
  }
}

// settings are for internal use only
Outlayer.namespace = 'outlayer';
Outlayer.Item = Item;

// default options
Outlayer.defaults = {
  containerStyle: {
    position: 'relative'
  },
  initLayout: true,
  originLeft: true,
  originTop: true,
  resize: true,
  resizeContainer: true,
  // item options
  transitionDuration: '0.4s',
  hiddenStyle: {
    opacity: 0,
    transform: 'scale(0.001)'
  },
  visibleStyle: {
    opacity: 1,
    transform: 'scale(1)'
  }
};

var proto = Outlayer.prototype;
// inherit EvEmitter
utils.extend( proto, EvEmitter.prototype );

/**
 * set options
 * @param {Object} opts
 */
proto.option = function( opts ) {
  utils.extend( this.options, opts );
};

/**
 * get backwards compatible option value, check old name
 */
proto._getOption = function( option ) {
  var oldOption = this.constructor.compatOptions[ option ];
  return oldOption && this.options[ oldOption ] !== undefined ?
    this.options[ oldOption ] : this.options[ option ];
};

Outlayer.compatOptions = {
  // currentName: oldName
  initLayout: 'isInitLayout',
  horizontal: 'isHorizontal',
  layoutInstant: 'isLayoutInstant',
  originLeft: 'isOriginLeft',
  originTop: 'isOriginTop',
  resize: 'isResizeBound',
  resizeContainer: 'isResizingContainer'
};

proto._create = function() {
  // get items from children
  this.reloadItems();
  // elements that affect layout, but are not laid out
  this.stamps = [];
  this.stamp( this.options.stamp );
  // set container style
  utils.extend( this.element.style, this.options.containerStyle );

  // bind resize method
  var canBindResize = this._getOption('resize');
  if ( canBindResize ) {
    this.bindResize();
  }
};

// goes through all children again and gets bricks in proper order
proto.reloadItems = function() {
  // collection of item elements
  this.items = this._itemize( this.element.children );
};


/**
 * turn elements into Outlayer.Items to be used in layout
 * @param {Array or NodeList or HTMLElement} elems
 * @returns {Array} items - collection of new Outlayer Items
 */
proto._itemize = function( elems ) {

  var itemElems = this._filterFindItemElements( elems );
  var Item = this.constructor.Item;

  // create new Outlayer Items for collection
  var items = [];
  for ( var i=0; i < itemElems.length; i++ ) {
    var elem = itemElems[i];
    var item = new Item( elem, this );
    items.push( item );
  }

  return items;
};

/**
 * get item elements to be used in layout
 * @param {Array or NodeList or HTMLElement} elems
 * @returns {Array} items - item elements
 */
proto._filterFindItemElements = function( elems ) {
  return utils.filterFindElements( elems, this.options.itemSelector );
};

/**
 * getter method for getting item elements
 * @returns {Array} elems - collection of item elements
 */
proto.getItemElements = function() {
  return this.items.map( function( item ) {
    return item.element;
  });
};

// ----- init & layout ----- //

/**
 * lays out all items
 */
proto.layout = function() {
  this._resetLayout();
  this._manageStamps();

  // don't animate first layout
  var layoutInstant = this._getOption('layoutInstant');
  var isInstant = layoutInstant !== undefined ?
    layoutInstant : !this._isLayoutInited;
  this.layoutItems( this.items, isInstant );

  // flag for initalized
  this._isLayoutInited = true;
};

// _init is alias for layout
proto._init = proto.layout;

/**
 * logic before any new layout
 */
proto._resetLayout = function() {
  this.getSize();
};


proto.getSize = function() {
  this.size = getSize( this.element );
};

/**
 * get measurement from option, for columnWidth, rowHeight, gutter
 * if option is String -> get element from selector string, & get size of element
 * if option is Element -> get size of element
 * else use option as a number
 *
 * @param {String} measurement
 * @param {String} size - width or height
 * @private
 */
proto._getMeasurement = function( measurement, size ) {
  var option = this.options[ measurement ];
  var elem;
  if ( !option ) {
    // default to 0
    this[ measurement ] = 0;
  } else {
    // use option as an element
    if ( typeof option == 'string' ) {
      elem = this.element.querySelector( option );
    } else if ( option instanceof HTMLElement ) {
      elem = option;
    }
    // use size of element, if element
    this[ measurement ] = elem ? getSize( elem )[ size ] : option;
  }
};

/**
 * layout a collection of item elements
 * @api public
 */
proto.layoutItems = function( items, isInstant ) {
  items = this._getItemsForLayout( items );

  this._layoutItems( items, isInstant );

  this._postLayout();
};

/**
 * get the items to be laid out
 * you may want to skip over some items
 * @param {Array} items
 * @returns {Array} items
 */
proto._getItemsForLayout = function( items ) {
  return items.filter( function( item ) {
    return !item.isIgnored;
  });
};

/**
 * layout items
 * @param {Array} items
 * @param {Boolean} isInstant
 */
proto._layoutItems = function( items, isInstant ) {
  this._emitCompleteOnItems( 'layout', items );

  if ( !items || !items.length ) {
    // no items, emit event with empty array
    return;
  }

  var queue = [];

  items.forEach( function( item ) {
    // get x/y object from method
    var position = this._getItemLayoutPosition( item );
    // enqueue
    position.item = item;
    position.isInstant = isInstant || item.isLayoutInstant;
    queue.push( position );
  }, this );

  this._processLayoutQueue( queue );
};

/**
 * get item layout position
 * @param {Outlayer.Item} item
 * @returns {Object} x and y position
 */
proto._getItemLayoutPosition = function( /* item */ ) {
  return {
    x: 0,
    y: 0
  };
};

/**
 * iterate over array and position each item
 * Reason being - separating this logic prevents 'layout invalidation'
 * thx @paul_irish
 * @param {Array} queue
 */
proto._processLayoutQueue = function( queue ) {
  this.updateStagger();
  queue.forEach( function( obj, i ) {
    this._positionItem( obj.item, obj.x, obj.y, obj.isInstant, i );
  }, this );
};

// set stagger from option in milliseconds number
proto.updateStagger = function() {
  var stagger = this.options.stagger;
  if ( stagger === null || stagger === undefined ) {
    this.stagger = 0;
    return;
  }
  this.stagger = getMilliseconds( stagger );
  return this.stagger;
};

/**
 * Sets position of item in DOM
 * @param {Outlayer.Item} item
 * @param {Number} x - horizontal position
 * @param {Number} y - vertical position
 * @param {Boolean} isInstant - disables transitions
 */
proto._positionItem = function( item, x, y, isInstant, i ) {
  if ( isInstant ) {
    // if not transition, just set CSS
    item.goTo( x, y );
  } else {
    item.stagger( i * this.stagger );
    item.moveTo( x, y );
  }
};

/**
 * Any logic you want to do after each layout,
 * i.e. size the container
 */
proto._postLayout = function() {
  this.resizeContainer();
};

proto.resizeContainer = function() {
  var isResizingContainer = this._getOption('resizeContainer');
  if ( !isResizingContainer ) {
    return;
  }
  var size = this._getContainerSize();
  if ( size ) {
    this._setContainerMeasure( size.width, true );
    this._setContainerMeasure( size.height, false );
  }
};

/**
 * Sets width or height of container if returned
 * @returns {Object} size
 *   @param {Number} width
 *   @param {Number} height
 */
proto._getContainerSize = noop;

/**
 * @param {Number} measure - size of width or height
 * @param {Boolean} isWidth
 */
proto._setContainerMeasure = function( measure, isWidth ) {
  if ( measure === undefined ) {
    return;
  }

  var elemSize = this.size;
  // add padding and border width if border box
  if ( elemSize.isBorderBox ) {
    measure += isWidth ? elemSize.paddingLeft + elemSize.paddingRight +
      elemSize.borderLeftWidth + elemSize.borderRightWidth :
      elemSize.paddingBottom + elemSize.paddingTop +
      elemSize.borderTopWidth + elemSize.borderBottomWidth;
  }

  measure = Math.max( measure, 0 );
  this.element.style[ isWidth ? 'width' : 'height' ] = measure + 'px';
};

/**
 * emit eventComplete on a collection of items events
 * @param {String} eventName
 * @param {Array} items - Outlayer.Items
 */
proto._emitCompleteOnItems = function( eventName, items ) {
  var _this = this;
  function onComplete() {
    _this.dispatchEvent( eventName + 'Complete', null, [ items ] );
  }

  var count = items.length;
  if ( !items || !count ) {
    onComplete();
    return;
  }

  var doneCount = 0;
  function tick() {
    doneCount++;
    if ( doneCount == count ) {
      onComplete();
    }
  }

  // bind callback
  items.forEach( function( item ) {
    item.once( eventName, tick );
  });
};

/**
 * emits events via EvEmitter and jQuery events
 * @param {String} type - name of event
 * @param {Event} event - original event
 * @param {Array} args - extra arguments
 */
proto.dispatchEvent = function( type, event, args ) {
  // add original event to arguments
  var emitArgs = event ? [ event ].concat( args ) : args;
  this.emitEvent( type, emitArgs );

  if ( jQuery ) {
    // set this.$element
    this.$element = this.$element || jQuery( this.element );
    if ( event ) {
      // create jQuery event
      var $event = jQuery.Event( event );
      $event.type = type;
      this.$element.trigger( $event, args );
    } else {
      // just trigger with type if no event available
      this.$element.trigger( type, args );
    }
  }
};

// -------------------------- ignore & stamps -------------------------- //


/**
 * keep item in collection, but do not lay it out
 * ignored items do not get skipped in layout
 * @param {Element} elem
 */
proto.ignore = function( elem ) {
  var item = this.getItem( elem );
  if ( item ) {
    item.isIgnored = true;
  }
};

/**
 * return item to layout collection
 * @param {Element} elem
 */
proto.unignore = function( elem ) {
  var item = this.getItem( elem );
  if ( item ) {
    delete item.isIgnored;
  }
};

/**
 * adds elements to stamps
 * @param {NodeList, Array, Element, or String} elems
 */
proto.stamp = function( elems ) {
  elems = this._find( elems );
  if ( !elems ) {
    return;
  }

  this.stamps = this.stamps.concat( elems );
  // ignore
  elems.forEach( this.ignore, this );
};

/**
 * removes elements to stamps
 * @param {NodeList, Array, or Element} elems
 */
proto.unstamp = function( elems ) {
  elems = this._find( elems );
  if ( !elems ){
    return;
  }

  elems.forEach( function( elem ) {
    // filter out removed stamp elements
    utils.removeFrom( this.stamps, elem );
    this.unignore( elem );
  }, this );
};

/**
 * finds child elements
 * @param {NodeList, Array, Element, or String} elems
 * @returns {Array} elems
 */
proto._find = function( elems ) {
  if ( !elems ) {
    return;
  }
  // if string, use argument as selector string
  if ( typeof elems == 'string' ) {
    elems = this.element.querySelectorAll( elems );
  }
  elems = utils.makeArray( elems );
  return elems;
};

proto._manageStamps = function() {
  if ( !this.stamps || !this.stamps.length ) {
    return;
  }

  this._getBoundingRect();

  this.stamps.forEach( this._manageStamp, this );
};

// update boundingLeft / Top
proto._getBoundingRect = function() {
  // get bounding rect for container element
  var boundingRect = this.element.getBoundingClientRect();
  var size = this.size;
  this._boundingRect = {
    left: boundingRect.left + size.paddingLeft + size.borderLeftWidth,
    top: boundingRect.top + size.paddingTop + size.borderTopWidth,
    right: boundingRect.right - ( size.paddingRight + size.borderRightWidth ),
    bottom: boundingRect.bottom - ( size.paddingBottom + size.borderBottomWidth )
  };
};

/**
 * @param {Element} stamp
**/
proto._manageStamp = noop;

/**
 * get x/y position of element relative to container element
 * @param {Element} elem
 * @returns {Object} offset - has left, top, right, bottom
 */
proto._getElementOffset = function( elem ) {
  var boundingRect = elem.getBoundingClientRect();
  var thisRect = this._boundingRect;
  var size = getSize( elem );
  var offset = {
    left: boundingRect.left - thisRect.left - size.marginLeft,
    top: boundingRect.top - thisRect.top - size.marginTop,
    right: thisRect.right - boundingRect.right - size.marginRight,
    bottom: thisRect.bottom - boundingRect.bottom - size.marginBottom
  };
  return offset;
};

// -------------------------- resize -------------------------- //

// enable event handlers for listeners
// i.e. resize -> onresize
proto.handleEvent = utils.handleEvent;

/**
 * Bind layout to window resizing
 */
proto.bindResize = function() {
  window.addEventListener( 'resize', this );
  this.isResizeBound = true;
};

/**
 * Unbind layout to window resizing
 */
proto.unbindResize = function() {
  window.removeEventListener( 'resize', this );
  this.isResizeBound = false;
};

proto.onresize = function() {
  this.resize();
};

utils.debounceMethod( Outlayer, 'onresize', 100 );

proto.resize = function() {
  // don't trigger if size did not change
  // or if resize was unbound. See #9
  if ( !this.isResizeBound || !this.needsResizeLayout() ) {
    return;
  }

  this.layout();
};

/**
 * check if layout is needed post layout
 * @returns Boolean
 */
proto.needsResizeLayout = function() {
  var size = getSize( this.element );
  // check that this.size and size are there
  // IE8 triggers resize on body size change, so they might not be
  var hasSizes = this.size && size;
  return hasSizes && size.innerWidth !== this.size.innerWidth;
};

// -------------------------- methods -------------------------- //

/**
 * add items to Outlayer instance
 * @param {Array or NodeList or Element} elems
 * @returns {Array} items - Outlayer.Items
**/
proto.addItems = function( elems ) {
  var items = this._itemize( elems );
  // add items to collection
  if ( items.length ) {
    this.items = this.items.concat( items );
  }
  return items;
};

/**
 * Layout newly-appended item elements
 * @param {Array or NodeList or Element} elems
 */
proto.appended = function( elems ) {
  var items = this.addItems( elems );
  if ( !items.length ) {
    return;
  }
  // layout and reveal just the new items
  this.layoutItems( items, true );
  this.reveal( items );
};

/**
 * Layout prepended elements
 * @param {Array or NodeList or Element} elems
 */
proto.prepended = function( elems ) {
  var items = this._itemize( elems );
  if ( !items.length ) {
    return;
  }
  // add items to beginning of collection
  var previousItems = this.items.slice(0);
  this.items = items.concat( previousItems );
  // start new layout
  this._resetLayout();
  this._manageStamps();
  // layout new stuff without transition
  this.layoutItems( items, true );
  this.reveal( items );
  // layout previous items
  this.layoutItems( previousItems );
};

/**
 * reveal a collection of items
 * @param {Array of Outlayer.Items} items
 */
proto.reveal = function( items ) {
  this._emitCompleteOnItems( 'reveal', items );
  if ( !items || !items.length ) {
    return;
  }
  var stagger = this.updateStagger();
  items.forEach( function( item, i ) {
    item.stagger( i * stagger );
    item.reveal();
  });
};

/**
 * hide a collection of items
 * @param {Array of Outlayer.Items} items
 */
proto.hide = function( items ) {
  this._emitCompleteOnItems( 'hide', items );
  if ( !items || !items.length ) {
    return;
  }
  var stagger = this.updateStagger();
  items.forEach( function( item, i ) {
    item.stagger( i * stagger );
    item.hide();
  });
};

/**
 * reveal item elements
 * @param {Array}, {Element}, {NodeList} items
 */
proto.revealItemElements = function( elems ) {
  var items = this.getItems( elems );
  this.reveal( items );
};

/**
 * hide item elements
 * @param {Array}, {Element}, {NodeList} items
 */
proto.hideItemElements = function( elems ) {
  var items = this.getItems( elems );
  this.hide( items );
};

/**
 * get Outlayer.Item, given an Element
 * @param {Element} elem
 * @param {Function} callback
 * @returns {Outlayer.Item} item
 */
proto.getItem = function( elem ) {
  // loop through items to get the one that matches
  for ( var i=0; i < this.items.length; i++ ) {
    var item = this.items[i];
    if ( item.element == elem ) {
      // return item
      return item;
    }
  }
};

/**
 * get collection of Outlayer.Items, given Elements
 * @param {Array} elems
 * @returns {Array} items - Outlayer.Items
 */
proto.getItems = function( elems ) {
  elems = utils.makeArray( elems );
  var items = [];
  elems.forEach( function( elem ) {
    var item = this.getItem( elem );
    if ( item ) {
      items.push( item );
    }
  }, this );

  return items;
};

/**
 * remove element(s) from instance and DOM
 * @param {Array or NodeList or Element} elems
 */
proto.remove = function( elems ) {
  var removeItems = this.getItems( elems );

  this._emitCompleteOnItems( 'remove', removeItems );

  // bail if no items to remove
  if ( !removeItems || !removeItems.length ) {
    return;
  }

  removeItems.forEach( function( item ) {
    item.remove();
    // remove item from collection
    utils.removeFrom( this.items, item );
  }, this );
};

// ----- destroy ----- //

// remove and disable Outlayer instance
proto.destroy = function() {
  // clean up dynamic styles
  var style = this.element.style;
  style.height = '';
  style.position = '';
  style.width = '';
  // destroy items
  this.items.forEach( function( item ) {
    item.destroy();
  });

  this.unbindResize();

  var id = this.element.outlayerGUID;
  delete instances[ id ]; // remove reference to instance by id
  delete this.element.outlayerGUID;
  // remove data for jQuery
  if ( jQuery ) {
    jQuery.removeData( this.element, this.constructor.namespace );
  }

};

// -------------------------- data -------------------------- //

/**
 * get Outlayer instance from element
 * @param {Element} elem
 * @returns {Outlayer}
 */
Outlayer.data = function( elem ) {
  elem = utils.getQueryElement( elem );
  var id = elem && elem.outlayerGUID;
  return id && instances[ id ];
};


// -------------------------- create Outlayer class -------------------------- //

/**
 * create a layout class
 * @param {String} namespace
 */
Outlayer.create = function( namespace, options ) {
  // sub-class Outlayer
  var Layout = subclass( Outlayer );
  // apply new options and compatOptions
  Layout.defaults = utils.extend( {}, Outlayer.defaults );
  utils.extend( Layout.defaults, options );
  Layout.compatOptions = utils.extend( {}, Outlayer.compatOptions  );

  Layout.namespace = namespace;

  Layout.data = Outlayer.data;

  // sub-class Item
  Layout.Item = subclass( Item );

  // -------------------------- declarative -------------------------- //

  utils.htmlInit( Layout, namespace );

  // -------------------------- jQuery bridge -------------------------- //

  // make into jQuery plugin
  if ( jQuery && jQuery.bridget ) {
    jQuery.bridget( namespace, Layout );
  }

  return Layout;
};

function subclass( Parent ) {
  function SubClass() {
    Parent.apply( this, arguments );
  }

  SubClass.prototype = Object.create( Parent.prototype );
  SubClass.prototype.constructor = SubClass;

  return SubClass;
}

// ----- helpers ----- //

// how many milliseconds are in each unit
var msUnits = {
  ms: 1,
  s: 1000
};

// munge time-like parameter into millisecond number
// '0.4s' -> 40
function getMilliseconds( time ) {
  if ( typeof time == 'number' ) {
    return time;
  }
  var matches = time.match( /(^\d*\.?\d*)(\w*)/ );
  var num = matches && matches[1];
  var unit = matches && matches[2];
  if ( !num.length ) {
    return 0;
  }
  num = parseFloat( num );
  var mult = msUnits[ unit ] || 1;
  return num * mult;
}

// ----- fin ----- //

// back in global
Outlayer.Item = Item;

return Outlayer;

}));


/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/components/order/choose-customer-option.component.html":
/*!********************************************************************************************************************************************************!*\
  !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/raw-loader/dist/cjs.js!./src/components/order/choose-customer-option.component.html ***!
  \********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n\t<div padding-vertical></div>\n\n\t<button ion-button color=\"dark\" outline (click)=\"chooseOption(0)\">\n\t\t{{\n\t\t\t'WAREHOUSE_VIEW.NEW_ORDER_VIEW.SELECT_EXISTING_CUSTOMER' | translate\n\t\t}}\n\t</button>\n\n\t<span padding-horizontal></span>\n\t<span padding-horizontal></span>\n\n\t<button ion-button color=\"dark\" outline (click)=\"chooseOption(1)\">\n\t\t{{ 'WAREHOUSE_VIEW.NEW_ORDER_VIEW.ADD_NEW_CUSTOMER' | translate }}\n\t</button>\n</div>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/components/order/make-order/make-order.component.html":
/*!*******************************************************************************************************************************************************!*\
  !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/raw-loader/dist/cjs.js!./src/components/order/make-order/make-order.component.html ***!
  \*******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"make-order-wrapper\">\n\t<ng2-smart-table\n\t\tclass=\"smart-table\"\n\t\t[settings]=\"settingsSmartTable\"\n\t\t[source]=\"sourceSmartTable\"\n\t></ng2-smart-table>\n</div>\n\n<button\n\tclass=\"order-button button button-balanced\"\n\t(click)=\"makeOrder()\"\n\t[disabled]=\"!canOrder\"\n>\n\t{{ 'WAREHOUSE_VIEW.NEW_ORDER_VIEW.MAKE_ORDER' | translate }}\n</button>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/components/order/order.component.html":
/*!***************************************************************************************************************************************!*\
  !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/raw-loader/dist/cjs.js!./src/components/order/order.component.html ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<span class=\"order-component\">\n\t<h2 text-center class=\"order-segment-title\">\n\t\t{{ 'WAREHOUSE_VIEW.NEW_ORDER_VIEW.NEW_MANUAL_ORDER' | translate }}\n\t</h2>\n\n\t<ion-segment [(ngModel)]=\"segmentSection\" color=\"dark\">\n\t\t<ion-segment-button value=\"options\">\n\t\t\t<ion-icon name=\"options\"></ion-icon>\n\t\t</ion-segment-button>\n\n\t\t<ion-segment-button value=\"select/add\">\n\t\t\t<ion-icon name=\"person-add\"></ion-icon>\n\t\t</ion-segment-button>\n\n\t\t<ion-segment-button value=\"order\">\n\t\t\t<ion-icon name=\"cart\"></ion-icon>\n\t\t</ion-segment-button>\n\t</ion-segment>\n\n\t<div [ngSwitch]=\"segmentSection\" text-center class=\"segment-content\">\n\t\t<div *ngSwitchCase=\"availSegmentOptions.options\">\n\t\t\t<choose-customer-option\n\t\t\t\t(optionEmitter)=\"onOptionSelected($event)\"\n\t\t\t></choose-customer-option>\n\t\t</div>\n\n\t\t<div *ngSwitchCase=\"availSegmentOptions.selectAdd\">\n\t\t\t<select-add-customer\n\t\t\t\t[customerOptionSelected]=\"selectAddCustomerOption\"\n\t\t\t\t(customerIdEmitter)=\"onCustomerSelected($event)\"\n\t\t\t></select-add-customer>\n\t\t</div>\n\n\t\t<div *ngSwitchCase=\"availSegmentOptions.order\">\n\t\t\t<make-order\n\t\t\t\t[customerId]=\"customerIdToOrder\"\n\t\t\t\t[orderFinishedEmitter]=\"orderFinishedEmitter\"\n\t\t\t></make-order>\n\t\t</div>\n\t</div>\n</span>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/pages/+warehouse/all-oders/all-orders.component.html":
/*!******************************************************************************************************************************************************!*\
  !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/raw-loader/dist/cjs.js!./src/pages/+warehouse/all-oders/all-orders.component.html ***!
  \******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<no-orders-info\n\t*ngIf=\"ordersLoaded && orders?.length === 0 && !isOrderContainerLive\"\n\t(toggleOrderContainer)=\"toggleOrderContainer.emit()\"\n\t[filterMode]=\"'ready'\"\n></no-orders-info>\n\n<ion-spinner\n\t*ngIf=\"!ordersLoaded\"\n\tclass=\"orders-spinner\"\n\tname=\"bubbles\"\n></ion-spinner>\n\n<div *ngIf=\"orders.length > 0\">\n\t<div\n\t\t*ngFor=\"\n\t\t\tlet order of orders\n\t\t\t\t| paginate\n\t\t\t\t\t: {\n\t\t\t\t\t\t\titemsPerPage: 10,\n\t\t\t\t\t\t\tcurrentPage: page,\n\t\t\t\t\t\t\ttotalItems: ordersCount\n\t\t\t\t\t  }\n\t\t\"\n\t\titem-height=\"209px\"\n\t>\n\t\t<order-without-carrier\n\t\t\t[order]=\"order\"\n\t\t\t[onUpdateWarehouseStatus]=\"onUpdateWarehouseStatus\"\n\t\t\t[getWarehouseStatus]=\"getWarehouseStatus\"\n\t\t\t*ngIf=\"orderState(order) === OrderState.WarehousePreparation\"\n\t\t>\n\t\t</order-without-carrier>\n\n\t\t<order-with-carrier\n\t\t\t[order]=\"order\"\n\t\t\t[onUpdateWarehouseStatus]=\"onUpdateWarehouseStatus\"\n\t\t\t[getWarehouseStatus]=\"getWarehouseStatus\"\n\t\t\t*ngIf=\"orderState(order) === OrderState.InDelivery\"\n\t\t>\n\t\t</order-with-carrier>\n\n\t\t<order-delivered\n\t\t\t[order]=\"order\"\n\t\t\t*ngIf=\"orderState(order) === OrderState.Delivered\"\n\t\t\t[getWarehouseStatus]=\"getWarehouseStatus\"\n\t\t>\n\t\t</order-delivered>\n\n\t\t<order-canceled\n\t\t\t[order]=\"order\"\n\t\t\t*ngIf=\"orderState(order) === OrderState.Canceled\"\n\t\t\t[getWarehouseStatus]=\"getWarehouseStatus\"\n\t\t>\n\t\t</order-canceled>\n\n\t\t<order-delivery-problem\n\t\t\t[order]=\"order\"\n\t\t\t*ngIf=\"orderState(order) === OrderState.DeliveryProblem\"\n\t\t\t[getWarehouseStatus]=\"getWarehouseStatus\"\n\t\t>\n\t\t</order-delivery-problem>\n\n\t\t<order-warehouse-preparation-problem\n\t\t\t[order]=\"order\"\n\t\t\t*ngIf=\"orderState(order) === OrderState.WarehousePreparationProblem\"\n\t\t\t[getWarehouseStatus]=\"getWarehouseStatus\"\n\t\t>\n\t\t</order-warehouse-preparation-problem>\n\t</div>\n\n\t<pagination-controls\n\t\t*ngIf=\"!focusedOrder\"\n\t\tclass=\"pagination\"\n\t\t(pageChange)=\"loadPage($event)\"\n\t\tdirectionLinks=\"true\"\n\t\tautoHide=\"true\"\n\t\tresponsive=\"true\"\n\t\tpreviousLabel=\"Previous\"\n\t\tnextLabel=\"Next\"\n\t>\n\t</pagination-controls>\n</div>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/pages/+warehouse/all-products/all-products.component.html":
/*!***********************************************************************************************************************************************************!*\
  !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/raw-loader/dist/cjs.js!./src/pages/+warehouse/all-products/all-products.component.html ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"showNoProductsIcon\">\n\t<div class=\"no-orders-message\">\n\t\t<i class=\"fa fa-book\"></i>\n\t\t<div>\n\t\t\t<h2>\n\t\t\t\t{{\n\t\t\t\t\t'WAREHOUSE_VIEW.ORDER_WAREHOUSE_STATUSES.NO_PRODUCTS'\n\t\t\t\t\t\t| translate\n\t\t\t\t}}\n\t\t\t</h2>\n\t\t\t<h3 (click)=\"presentCreateProductPopover()\">\n\t\t\t\t{{ 'WAREHOUSE_VIEW.MISC_TEXT.ADD_NEW_PRODUCT' | translate }}\n\t\t\t</h3>\n\t\t</div>\n\t</div>\n</div>\n\n<div class=\"masonry-container\">\n\t<ngx-masonry\n\t\t*ngIf=\"productsCount > 0\"\n\t\t[options]=\"masonryOptions\"\n\t\t[updateLayout]=\"updateMasonryLayout\"\n\t\t#masonry\n\t>\n\t\t<ngxMasonryItem\n\t\t\tclass=\"masonry-item\"\n\t\t\t*ngFor=\"\n\t\t\t\tlet warehouseProduct of allProducts\n\t\t\t\t\t| paginate\n\t\t\t\t\t\t: {\n\t\t\t\t\t\t\t\titemsPerPage: 10,\n\t\t\t\t\t\t\t\tcurrentPage: page,\n\t\t\t\t\t\t\t\ttotalItems: productsCount\n\t\t\t\t\t\t  }\n\t\t\t\"\n\t\t>\n\t\t\t<ion-item class=\"product-card-container\" type=\"card\">\n\t\t\t\t<div class=\"card product-card\">\n\t\t\t\t\t<div class=\"product-image-container\">\n\t\t\t\t\t\t<img\n\t\t\t\t\t\t\tclass=\"product-image\"\n\t\t\t\t\t\t\t(load)=\"masonry.layout()\"\n\t\t\t\t\t\t\t(click)=\"addProduct(warehouseProduct.product.id)\"\n\t\t\t\t\t\t\tsrc=\"{{\n\t\t\t\t\t\t\t\tlocaleTranslate(\n\t\t\t\t\t\t\t\t\twarehouseProduct?.product?.images\n\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t}}\"\n\t\t\t\t\t\t/>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"product-mini-bar\">\n\t\t\t\t\t\t<a\n\t\t\t\t\t\t\tclass=\"edit-button button\"\n\t\t\t\t\t\t\t(click)=\"openEditProductModal(warehouseProduct)\"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t\t<ion-icon\n\t\t\t\t\t\t\t\tios=\"ios-settings\"\n\t\t\t\t\t\t\t\tmd=\"md-settings\"\n\t\t\t\t\t\t\t></ion-icon>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t<span class=\"name\"\n\t\t\t\t\t\t\t>{{\n\t\t\t\t\t\t\t\ttruncateTitle(\n\t\t\t\t\t\t\t\t\tlocaleTranslate(\n\t\t\t\t\t\t\t\t\t\twarehouseProduct.product.title\n\t\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t}}\n\t\t\t\t\t\t</span>\n\t\t\t\t\t\t<span class=\"count\">{{ warehouseProduct?.count }}</span>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</ion-item>\n\t\t</ngxMasonryItem>\n\t</ngx-masonry>\n</div>\n\n<pagination-controls\n\tclass=\"pagination\"\n\t(pageChange)=\"loadPage($event)\"\n\tdirectionLinks=\"true\"\n\tautoHide=\"true\"\n\tresponsive=\"true\"\n\tpreviousLabel=\"Previous\"\n\tnextLabel=\"Next\"\n>\n</pagination-controls>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/pages/+warehouse/common/no-orders-info/no-orders-info.component.html":
/*!**********************************************************************************************************************************************************************!*\
  !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/raw-loader/dist/cjs.js!./src/pages/+warehouse/common/no-orders-info/no-orders-info.component.html ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"no-orders-message\">\n\t<i class=\"fa fa-shopping-bag\"></i>\n\t<div *ngIf=\"filterMode === 'ready'\">\n\t\t<h2>\n\t\t\t{{\n\t\t\t\t'WAREHOUSE_VIEW.ORDER_WAREHOUSE_STATUSES.NO_ACTIVE_ORDERS'\n\t\t\t\t\t| translate\n\t\t\t}}\n\t\t</h2>\n\t\t<h3 (click)=\"toggleOrderContainer.emit()\">\n\t\t\t{{ 'WAREHOUSE_VIEW.MISC_TEXT.CREATE_NEW_ORDER' | translate }}\n\t\t</h3>\n\t</div>\n\t<h2 *ngIf=\"filterMode === 'all'\">\n\t\t{{ 'WAREHOUSE_VIEW.ORDER_WAREHOUSE_STATUSES.NO_ORDERS' | translate }}\n\t</h2>\n</div>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/pages/+warehouse/create-product-type-popup/create-product-type-popup.html":
/*!***************************************************************************************************************************************************************************!*\
  !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/raw-loader/dist/cjs.js!./src/pages/+warehouse/create-product-type-popup/create-product-type-popup.html ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"app-view popup-view create-product-type-popup\">\n\t<h4 class=\"custom-title-popup\">\n\t\t{{ 'WAREHOUSE_VIEW.CREATE_PRODUCTS_POPUP.NEW_PRODUCT_TYPE' | translate\n\t\t}}\n\t</h4>\n\t<button class=\"close\" (click)=\"cancelModal()\">\n\t\t<i class=\"fa fa-close\"></i>\n\t</button>\n\t<ion-row>\n\t\t<div class=\"col popup-half\">\n\t\t\t<div class=\"title-popup popup-input-container\">\n\t\t\t\t<label>\n\t\t\t\t\t<span class=\"popup-input-description\"\n\t\t\t\t\t\t>{{ 'WAREHOUSE_VIEW.CREATE_PRODUCTS_POPUP.TITLE' |\n\t\t\t\t\t\ttranslate }}</span\n\t\t\t\t\t>\n\t\t\t\t\t<input class=\"popup-input\" [(ngModel)]=\"productTitle\" />\n\t\t\t\t</label>\n\t\t\t</div>\n\n\t\t\t<div class=\"popup-input-container\">\n\t\t\t\t<label>\n\t\t\t\t\t<span class=\"popup-input-description\"\n\t\t\t\t\t\t>{{ 'WAREHOUSE_VIEW.CREATE_PRODUCTS_POPUP.DESCRIPTION' |\n\t\t\t\t\t\ttranslate }}</span\n\t\t\t\t\t>\n\t\t\t\t\t<textarea\n\t\t\t\t\t\tclass=\"popup-input\"\n\t\t\t\t\t\trows=\"4\"\n\t\t\t\t\t\t[(ngModel)]=\"productDescription\"\n\t\t\t\t\t></textarea>\n\t\t\t\t</label>\n\t\t\t</div>\n\n\t\t\t<div class=\"popup-input-container\">\n\t\t\t\t<label>\n\t\t\t\t\t<span>\n\t\t\t\t\t\t{{ 'WAREHOUSE_VIEW.CREATE_PRODUCTS_POPUP.CATEGORIES' |\n\t\t\t\t\t\ttranslate }}\n\t\t\t\t\t</span>\n\t\t\t\t\t<ion-item id=\"multiple-select\">\n\t\t\t\t\t\t<ion-select\n\t\t\t\t\t\t\t[(ngModel)]=\"selectedProductCategories\"\n\t\t\t\t\t\t\tmultiple=\"true\"\n\t\t\t\t\t\t\t[interfaceOptions]=\"selectOptionTitle\"\n\t\t\t\t\t\t\t[okText]=\"buttonOK\"\n\t\t\t\t\t\t\t[cancelText]=\"buttonCancel\"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t\t<ion-select-option\n\t\t\t\t\t\t\t\t[value]=\"category.id\"\n\t\t\t\t\t\t\t\t*ngFor=\"let category of productsCategories\"\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t{{ localeTranslateService.getTranslate(\n\t\t\t\t\t\t\t\tcategory.name ) }}\n\t\t\t\t\t\t\t</ion-select-option>\n\t\t\t\t\t\t</ion-select>\n\t\t\t\t\t</ion-item>\n\t\t\t\t</label>\n\t\t\t</div>\n\n\t\t\t<ion-row class=\"bottom-inputs no-padding\">\n\t\t\t\t<div class=\"col no-padding-left pl-0 pr-0\">\n\t\t\t\t\t<div class=\"popup-input-container\">\n\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t<span class=\"popup-input-description\"\n\t\t\t\t\t\t\t\t>{{ 'WAREHOUSE_VIEW.CREATE_PRODUCTS_POPUP.PRICE'\n\t\t\t\t\t\t\t\t| translate }}</span\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t<input\n\t\t\t\t\t\t\t\tclass=\"popup-input\"\n\t\t\t\t\t\t\t\ttype=\"number\"\n\t\t\t\t\t\t\t\tplaceholder=\"$\"\n\t\t\t\t\t\t\t\t[(ngModel)]=\"warehouseProductCreateObject.price\"\n\t\t\t\t\t\t\t/>\n\t\t\t\t\t\t</label>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"col no-padding-right\">\n\t\t\t\t\t<div class=\"popup-input-container\">\n\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t<span class=\"popup-input-description\"\n\t\t\t\t\t\t\t\t>{{ 'WAREHOUSE_VIEW.CREATE_PRODUCTS_POPUP.COUNT'\n\t\t\t\t\t\t\t\t| translate }} ({{\n\t\t\t\t\t\t\t\t'WAREHOUSE_VIEW.CREATE_PRODUCTS_POPUP.OPTIONAL'\n\t\t\t\t\t\t\t\t| translate }})</span\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t<input\n\t\t\t\t\t\t\t\tclass=\"popup-input\"\n\t\t\t\t\t\t\t\ttype=\"number\"\n\t\t\t\t\t\t\t\toninput=\"validity.valid||(value='');\"\n\t\t\t\t\t\t\t\tmin=\"0\"\n\t\t\t\t\t\t\t\tplaceholder=\"{{\n\t\t\t\t\t\t\t\t\t'WAREHOUSE_VIEW.CREATE_PRODUCTS_POPUP.COUNT_PLACEHOLDER'\n\t\t\t\t\t\t\t\t\t\t| translate\n\t\t\t\t\t\t\t\t}}\"\n\t\t\t\t\t\t\t\t[(ngModel)]=\"warehouseProductCreateObject.count\"\n\t\t\t\t\t\t\t/>\n\t\t\t\t\t\t</label>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"col no-padding-right pr-0\">\n\t\t\t\t\t<div class=\"popup-input-container\">\n\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t<span class=\"popup-input-description\"\n\t\t\t\t\t\t\t\t>{{\n\t\t\t\t\t\t\t\t'WAREHOUSE_VIEW.CREATE_PRODUCTS_POPUP.LANGUAGE'\n\t\t\t\t\t\t\t\t| translate }}</span\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t<select\n\t\t\t\t\t\t\t\tclass=\"popup-input select\"\n\t\t\t\t\t\t\t\t[(ngModel)]=\"currentLocale\"\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t<option value=\"en-US\"\n\t\t\t\t\t\t\t\t\t>{{\n\t\t\t\t\t\t\t\t\t'WAREHOUSE_VIEW.CREATE_PRODUCTS_POPUP.ENGLISH'\n\t\t\t\t\t\t\t\t\t| translate }}</option\n\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t<option value=\"he-IL\"\n\t\t\t\t\t\t\t\t\t>{{\n\t\t\t\t\t\t\t\t\t'WAREHOUSE_VIEW.CREATE_PRODUCTS_POPUP.HEBREW'\n\t\t\t\t\t\t\t\t\t| translate }}</option\n\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t<option value=\"ru-RU\"\n\t\t\t\t\t\t\t\t\t>{{\n\t\t\t\t\t\t\t\t\t'WAREHOUSE_VIEW.CREATE_PRODUCTS_POPUP.RUSSIAN'\n\t\t\t\t\t\t\t\t\t| translate }}</option\n\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t<option value=\"bg-BG\"\n\t\t\t\t\t\t\t\t\t>{{\n\t\t\t\t\t\t\t\t\t'WAREHOUSE_VIEW.CREATE_PRODUCTS_POPUP.BULGARIAN'\n\t\t\t\t\t\t\t\t\t| translate }}</option\n\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t<option value=\"it-IT\"\n\t\t\t\t\t\t\t\t\t>{{\n\t\t\t\t\t\t\t\t\t'WAREHOUSE_VIEW.CREATE_PRODUCTS_POPUP.ITALIAN'\n\t\t\t\t\t\t\t\t\t| translate }}</option\n\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t<option value=\"fr-FR\"\n\t\t\t\t\t\t\t\t\t>{{\n\t\t\t\t\t\t\t\t\t'WAREHOUSE_VIEW.CREATE_PRODUCTS_POPUP.FRENCH'\n\t\t\t\t\t\t\t\t\t| translate }}</option\n\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t</label>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</ion-row>\n\n\t\t\t<ion-row class=\"row getProductType\">\n\t\t\t\t<ion-col class=\"pl-0 col-6\">\n\t\t\t\t\t<ion-item class=\"coord-box\">\n\t\t\t\t\t\t<ion-checkbox\n\t\t\t\t\t\t\tclass=\"mr-3\"\n\t\t\t\t\t\t\t[(ngModel)]=\"takaProductDelivery\"\n\t\t\t\t\t\t\t(ionChange)=\"getProductTypeChange('Delivery')\"\n\t\t\t\t\t\t></ion-checkbox>\n\t\t\t\t\t\t<ion-label\n\t\t\t\t\t\t\t>{{ 'WAREHOUSE_VIEW.CREATE_PRODUCTS_POPUP.DELIVERY'\n\t\t\t\t\t\t\t| translate }}</ion-label\n\t\t\t\t\t\t>\n\t\t\t\t\t</ion-item>\n\t\t\t\t</ion-col>\n\t\t\t\t<ion-col class=\"pl-0 col-6\">\n\t\t\t\t\t<ion-item class=\"coord-box\">\n\t\t\t\t\t\t<ion-checkbox\n\t\t\t\t\t\t\tclass=\"mr-3\"\n\t\t\t\t\t\t\t[(ngModel)]=\"takaProductTakeaway\"\n\t\t\t\t\t\t\t(ionChange)=\"getProductTypeChange('Takeaway')\"\n\t\t\t\t\t\t></ion-checkbox>\n\t\t\t\t\t\t<ion-label\n\t\t\t\t\t\t\t>{{ 'WAREHOUSE_VIEW.CREATE_PRODUCTS_POPUP.TAKEAWAY'\n\t\t\t\t\t\t\t| translate }}</ion-label\n\t\t\t\t\t\t>\n\t\t\t\t\t</ion-item>\n\t\t\t\t</ion-col>\n\t\t\t</ion-row>\n\t\t</div>\n\n\t\t<div ng2FileDrop [uploader]=\"uploader\" class=\"col popup-half\">\n\t\t\t<div\n\t\t\t\tngf-select=\"imageSelected($file)\"\n\t\t\t\tngf-pattern=\"'image/*'\"\n\t\t\t\tclass=\"upload-button {{ hasImage ? 'items-center' : '' }}\"\n\t\t\t\t#imageHolder\n\t\t\t\tid=\"image-holder\"\n\t\t\t\t(click)=\"hasImage && showPicturesPopup()\"\n\t\t\t>\n\t\t\t\t<h6 *ngIf=\"isBrowser && !hasImage\" class=\"dragDrop\">\n\t\t\t\t\t{{\n\t\t\t\t\t'WAREHOUSE_VIEW.CREATE_PRODUCTS_POPUP.DRAG&DROP_PICTURE_HERE'\n\t\t\t\t\t| translate }}\n\t\t\t\t\t<br />\n\t\t\t\t</h6>\n\n\t\t\t\t<input\n\t\t\t\t\t*ngIf=\"!hasImage\"\n\t\t\t\t\ttype=\"file\"\n\t\t\t\t\t(change)=\"imageUrlChanged($event)\"\n\t\t\t\t\tid=\"fileInput\"\n\t\t\t\t\tng2FileSelect\n\t\t\t\t\t[uploader]=\"uploader\"\n\t\t\t\t/>\n\n\t\t\t\t<label *ngIf=\"!isBrowser\">\n\t\t\t\t\t<ion-icon\n\t\t\t\t\t\t(click)=\"!hasImage && presentActionSheet()\"\n\t\t\t\t\t\tclass=\"upload-icon\"\n\t\t\t\t\t\tname=\"{{ hasImage ? 'images' : 'cloud-upload' }}\"\n\t\t\t\t\t></ion-icon>\n\t\t\t\t\t<h3 class=\"upload-text\">\n\t\t\t\t\t\t{{ hasImage ? 'Click to Upload More Pictures' :\n\t\t\t\t\t\t('WAREHOUSE_VIEW.CREATE_PRODUCTS_POPUP.CLICK_TO_UPLOAD_PICTURE'\n\t\t\t\t\t\t| translate) }}\n\t\t\t\t\t</h3>\n\t\t\t\t</label>\n\t\t\t\t<label *ngIf=\"isBrowser\" for=\"fileInput\">\n\t\t\t\t\t<ion-icon\n\t\t\t\t\t\tclass=\"upload-icon\"\n\t\t\t\t\t\tname=\"{{ hasImage ? 'images' : 'cloud-upload' }}\"\n\t\t\t\t\t></ion-icon>\n\t\t\t\t\t<h3 class=\"upload-text\">\n\t\t\t\t\t\t{{ hasImage ?\n\t\t\t\t\t\t('WAREHOUSE_VIEW.CREATE_PRODUCTS_POPUP.CLICK_TO_UPLOAD_MORE_PICTURE'\n\t\t\t\t\t\t| translate) :\n\t\t\t\t\t\t('WAREHOUSE_VIEW.CREATE_PRODUCTS_POPUP.CLICK_TO_UPLOAD_PICTURE'\n\t\t\t\t\t\t| translate) }}\n\t\t\t\t\t</h3>\n\t\t\t\t</label>\n\t\t\t</div>\n\n\t\t\t<div class=\"button-bar padding-top\">\n\t\t\t\t<button class=\"button button-assertive\" (click)=\"cancelModal()\">\n\t\t\t\t\t{{ 'WAREHOUSE_VIEW.CREATE_PRODUCTS_POPUP.CANCEL' | translate\n\t\t\t\t\t}}\n\t\t\t\t</button>\n\n\t\t\t\t<button\n\t\t\t\t\tclass=\"button button-brand\"\n\t\t\t\t\t[disabled]=\"!isReadyToCreate\"\n\t\t\t\t\t(click)=\"createProduct()\"\n\t\t\t\t>\n\t\t\t\t\t{{ 'WAREHOUSE_VIEW.CREATE_PRODUCTS_POPUP.CREATE' | translate\n\t\t\t\t\t}}\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t</div>\n\t</ion-row>\n</div>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/pages/+warehouse/edit-product-type-popup/edit-product-type-popup.html":
/*!***********************************************************************************************************************************************************************!*\
  !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/raw-loader/dist/cjs.js!./src/pages/+warehouse/edit-product-type-popup/edit-product-type-popup.html ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"app-view popup-view edit-product-type-popup\">\n\t<h4 class=\"custom-title-popup\">\n\t\t{{ 'EDIT_PRODUCT_POP_UP.EDIT_PRODUCT_TYPE' | translate }}\n\t</h4>\n\t<p style=\"text-align: center;\">\n\t\t{{ 'EDIT_PRODUCT_POP_UP.UPDATE_AN_EXISTING_PRODUCT' | translate }}\n\t</p>\n\t<button class=\"close\" (click)=\"cancelModal()\">\n\t\t<i class=\"fa fa-close\"></i>\n\t</button>\n\n\t<ion-row>\n\t\t<div class=\"col popup-half\">\n\t\t\t<div class=\"popup-input-container\">\n\t\t\t\t<label>\n\t\t\t\t\t<span class=\"popup-input-description\"\n\t\t\t\t\t\t>{{ 'EDIT_PRODUCT_POP_UP.TITLE' | translate }}</span\n\t\t\t\t\t>\n\t\t\t\t\t<input class=\"popup-input\" [(ngModel)]=\"productTitle\" />\n\t\t\t\t</label>\n\t\t\t</div>\n\n\t\t\t<div class=\"popup-input-container\">\n\t\t\t\t<label>\n\t\t\t\t\t<span class=\"popup-input-description\"\n\t\t\t\t\t\t>{{ 'EDIT_PRODUCT_POP_UP.DESCRIPTION' | translate\n\t\t\t\t\t\t}}</span\n\t\t\t\t\t>\n\t\t\t\t\t<textarea\n\t\t\t\t\t\tclass=\"popup-input\"\n\t\t\t\t\t\trows=\"4\"\n\t\t\t\t\t\t[(ngModel)]=\"productDescription\"\n\t\t\t\t\t></textarea>\n\t\t\t\t</label>\n\t\t\t</div>\n\n\t\t\t<div class=\"popup-input-container\">\n\t\t\t\t<label>\n\t\t\t\t\t<span>\n\t\t\t\t\t\t{{ 'EDIT_PRODUCT_POP_UP.CATEGORIES' | translate }}\n\t\t\t\t\t</span>\n\t\t\t\t\t<ion-item id=\"multiple-select\">\n\t\t\t\t\t\t<ion-select\n\t\t\t\t\t\t\t[(ngModel)]=\"selectedProductCategories\"\n\t\t\t\t\t\t\tmultiple=\"true\"\n\t\t\t\t\t\t\t[interfaceOptions]=\"selectOptionTitle\"\n\t\t\t\t\t\t\t[okText]=\"buttonOK\"\n\t\t\t\t\t\t\t[cancelText]=\"buttonCancel\"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t\t<ion-select-option\n\t\t\t\t\t\t\t\t[value]=\"category.id\"\n\t\t\t\t\t\t\t\t*ngFor=\"let category of productsCategories\"\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t{{ localeTranslateService.getTranslate(\n\t\t\t\t\t\t\t\tcategory.name ) }}\n\t\t\t\t\t\t\t</ion-select-option>\n\t\t\t\t\t\t</ion-select>\n\t\t\t\t\t</ion-item>\n\t\t\t\t</label>\n\t\t\t</div>\n\n\t\t\t<ion-row>\n\t\t\t\t<div class=\"col no-padding-left pl-0 pr-0\">\n\t\t\t\t\t<div class=\"popup-input-container\">\n\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t<span class=\"popup-input-description\"\n\t\t\t\t\t\t\t\t>{{ 'EDIT_PRODUCT_POP_UP.PRICE' | translate\n\t\t\t\t\t\t\t\t}}</span\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t<input\n\t\t\t\t\t\t\t\tclass=\"popup-input\"\n\t\t\t\t\t\t\t\ttype=\"number\"\n\t\t\t\t\t\t\t\tplaceholder=\"$\"\n\t\t\t\t\t\t\t\t[(ngModel)]=\"warehouseProduct.price\"\n\t\t\t\t\t\t\t/>\n\t\t\t\t\t\t</label>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"col no-padding-right\">\n\t\t\t\t\t<div class=\"popup-input-container\">\n\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t<span class=\"popup-input-description\"\n\t\t\t\t\t\t\t\t>{{ 'EDIT_PRODUCT_POP_UP.COUNT' | translate\n\t\t\t\t\t\t\t\t}}</span\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t<input\n\t\t\t\t\t\t\t\tclass=\"popup-input\"\n\t\t\t\t\t\t\t\ttype=\"number\"\n\t\t\t\t\t\t\t\tplaceholder=\"0 to just create\"\n\t\t\t\t\t\t\t\t[(ngModel)]=\"warehouseProduct.count\"\n\t\t\t\t\t\t\t/>\n\t\t\t\t\t\t</label>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"col no-padding-right pr-0\">\n\t\t\t\t\t<div class=\"popup-input-container\">\n\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t<span class=\"popup-input-description\"\n\t\t\t\t\t\t\t\t>{{ 'EDIT_PRODUCT_POP_UP.LANGUAGE' | translate\n\t\t\t\t\t\t\t\t}}</span\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t<select\n\t\t\t\t\t\t\t\tclass=\"popup-input select\"\n\t\t\t\t\t\t\t\t[(ngModel)]=\"currentLocale\"\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t<option value=\"en-US\"\n\t\t\t\t\t\t\t\t\t>{{ 'EDIT_PRODUCT_POP_UP.ENGLISH' |\n\t\t\t\t\t\t\t\t\ttranslate }}</option\n\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t<option value=\"he-IL\"\n\t\t\t\t\t\t\t\t\t>{{ 'EDIT_PRODUCT_POP_UP.HEBREW' | translate\n\t\t\t\t\t\t\t\t\t}}</option\n\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t<option value=\"ru-RU\"\n\t\t\t\t\t\t\t\t\t>{{ 'EDIT_PRODUCT_POP_UP.RUSSIAN' |\n\t\t\t\t\t\t\t\t\ttranslate }}</option\n\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t<option value=\"bg-BG\"\n\t\t\t\t\t\t\t\t\t>{{ 'EDIT_PRODUCT_POP_UP.BULGARIAN' |\n\t\t\t\t\t\t\t\t\ttranslate }}</option\n\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t<option value=\"es-ES\"\n\t\t\t\t\t\t\t\t\t>{{ 'EDIT_PRODUCT_POP_UP.SPANISH' |\n\t\t\t\t\t\t\t\t\ttranslate }}</option\n\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t<option value=\"it-IT\"\n\t\t\t\t\t\t\t\t\t>{{ 'EDIT_PRODUCT_POP_UP.ITALIAN' |\n\t\t\t\t\t\t\t\t\ttranslate }}</option\n\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t<option value=\"fr-FR\"\n\t\t\t\t\t\t\t\t\t>{{ 'EDIT_PRODUCT_POP_UP.FRENCH' |\n\t\t\t\t\t\t\t\t\ttranslate }}</option\n\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t</label>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</ion-row>\n\n\t\t\t<ion-row class=\"row getProductType\">\n\t\t\t\t<ion-col class=\"pl-0 col-6\">\n\t\t\t\t\t<ion-item class=\"coord-box\">\n\t\t\t\t\t\t<ion-checkbox\n\t\t\t\t\t\t\tclass=\"mr-3\"\n\t\t\t\t\t\t\t[(ngModel)]=\"takaProductDelivery\"\n\t\t\t\t\t\t\t(ionChange)=\"getProductTypeChange('Delivery')\"\n\t\t\t\t\t\t></ion-checkbox>\n\t\t\t\t\t\t<ion-label>Delivery</ion-label>\n\t\t\t\t\t</ion-item>\n\t\t\t\t</ion-col>\n\t\t\t\t<ion-col class=\"pl-0 col-6\">\n\t\t\t\t\t<ion-item class=\"coord-box\">\n\t\t\t\t\t\t<ion-checkbox\n\t\t\t\t\t\t\tclass=\"mr-3\"\n\t\t\t\t\t\t\t[(ngModel)]=\"takaProductTakeaway\"\n\t\t\t\t\t\t\t(ionChange)=\"getProductTypeChange('Takeaway')\"\n\t\t\t\t\t\t></ion-checkbox>\n\t\t\t\t\t\t<ion-label>Takeaway</ion-label>\n\t\t\t\t\t</ion-item>\n\t\t\t\t</ion-col>\n\t\t\t</ion-row>\n\t\t</div>\n\n\t\t<div\n\t\t\tng2FileDrop\n\t\t\t[uploader]=\"uploader\"\n\t\t\tclass=\"col popup-half\"\n\t\t\tstyle=\"margin: auto;\"\n\t\t>\n\t\t\t<div\n\t\t\t\tngf-select=\"imageSelected($file)\"\n\t\t\t\tngf-pattern=\"'image/*'\"\n\t\t\t\tclass=\"upload-button\"\n\t\t\t\t#imageHolder\n\t\t\t\tid=\"image-holder\"\n\t\t\t\t(click)=\"hasImage && showPicturesPopup()\"\n\t\t\t>\n\t\t\t\t<h6 *ngIf=\"isBrowser && !hasImage\" class=\"dragDrop\">\n\t\t\t\t\t{{ 'EDIT_PRODUCT_POP_UP.DRAG&DROP_FILE_HERE' | translate }}\n\n\t\t\t\t\t<br />\n\t\t\t\t\t<br />{{ 'EDIT_PRODUCT_POP_UP.OR_BROWSE' | translate }}\n\t\t\t\t</h6>\n\n\t\t\t\t<input\n\t\t\t\t\t*ngIf=\"!hasImage\"\n\t\t\t\t\tng2FileSelect\n\t\t\t\t\ttype=\"file\"\n\t\t\t\t\tid=\"fileInput\"\n\t\t\t\t\t[uploader]=\"uploader\"\n\t\t\t\t\t(change)=\"imageUrlChanged($event)\"\n\t\t\t\t/>\n\n\t\t\t\t<div class=\"{{ hasImage ? 'no-upload-input' : '' }} \">\n\t\t\t\t\t<label *ngIf=\"!isBrowser\">\n\t\t\t\t\t\t<ion-icon\n\t\t\t\t\t\t\t(click)=\"!hasImage && presentActionSheet()\"\n\t\t\t\t\t\t\tclass=\"upload-icon\"\n\t\t\t\t\t\t\tname=\"{{ hasImage ? 'images' : 'cloud-upload' }}\"\n\t\t\t\t\t\t></ion-icon>\n\t\t\t\t\t\t<h3 class=\"upload-text\">\n\t\t\t\t\t\t\t{{ hasImage ?\n\t\t\t\t\t\t\t('EDIT_PRODUCT_POP_UP.CLICK_TO_EDIT_PICTURES' |\n\t\t\t\t\t\t\ttranslate) :\n\t\t\t\t\t\t\t('EDIT_PRODUCT_POP_UP.CLICK_TO_UPLAOD_PICTURE' |\n\t\t\t\t\t\t\ttranslate) }}\n\t\t\t\t\t\t</h3>\n\t\t\t\t\t</label>\n\n\t\t\t\t\t<label *ngIf=\"isBrowser\" for=\"fileInput\">\n\t\t\t\t\t\t<ion-icon\n\t\t\t\t\t\t\tclass=\"upload-icon\"\n\t\t\t\t\t\t\tname=\"{{ hasImage ? 'images' : 'cloud-upload' }}\"\n\t\t\t\t\t\t></ion-icon>\n\t\t\t\t\t\t<h3 class=\"upload-text\">\n\t\t\t\t\t\t\t{{ hasImage ?\n\t\t\t\t\t\t\t('EDIT_PRODUCT_POP_UP.CLICK_TO_EDIT_PICTURES' |\n\t\t\t\t\t\t\ttranslate) :\n\t\t\t\t\t\t\t('EDIT_PRODUCT_POP_UP.CLICK_TO_UPLAOD_PICTURE' |\n\t\t\t\t\t\t\ttranslate) }}\n\t\t\t\t\t\t</h3>\n\t\t\t\t\t</label>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"button-bar padding-top\">\n\t\t\t\t<button class=\"button button-assertive\" (click)=\"cancelModal()\">\n\t\t\t\t\t{{ 'EDIT_PRODUCT_POP_UP.CANCEL' | translate }}\n\t\t\t\t</button>\n\n\t\t\t\t<button\n\t\t\t\t\tclass=\"button button-brand\"\n\t\t\t\t\t[disabled]=\"!isReadyToUpdate\"\n\t\t\t\t\t(click)=\"updateProduct()\"\n\t\t\t\t>\n\t\t\t\t\t{{ 'EDIT_PRODUCT_POP_UP.UPDATE' | translate }}\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t</div>\n\t</ion-row>\n</div>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/pages/+warehouse/product-pictures-popup/product-images-popup.component.html":
/*!*****************************************************************************************************************************************************************************!*\
  !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/raw-loader/dist/cjs.js!./src/pages/+warehouse/product-pictures-popup/product-images-popup.component.html ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h4 class=\"custom-title-popup d-flex\">\n\t<span class=\"ml-auto\">{{\n\t\t'WAREHOUSE_VIEW.EDIT_PICTURE.PRODUCT_IMAGES' | translate\n\t}}</span>\n\t<span class=\"ml-auto\"\n\t\t><ion-icon (click)=\"cancelModal()\" name=\"close\"></ion-icon\n\t></span>\n</h4>\n\n<div class=\"product-images-container p-4\">\n\t<ion-grid>\n\t\t<ion-row>\n\t\t\t<e-cu-file-uploader\n\t\t\t\t[buttonFullSpace]=\"true\"\n\t\t\t\t[name]=\"\"\n\t\t\t\t[fileUrl]=\"imagesUrls\"\n\t\t\t\t[inputCustomStyle]=\"true\"\n\t\t\t\t(uploadedImgObj)=\"addImageObj($event)\"\n\t\t\t></e-cu-file-uploader>\n\n\t\t\t<div\n\t\t\t\tclass=\"mt-0 images-content mt-2\"\n\t\t\t\t*ngFor=\"let image of imagesArr\"\n\t\t\t>\n\t\t\t\t<div class=\"row preview-img m-0\">\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<img src=\"{{ image }}\" alt=\"Invalid image\" />\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div\n\t\t\t\t\t\tclass=\"removeIcon pl-1 pr-2\"\n\t\t\t\t\t\t(click)=\"deleteImg(image)\"\n\t\t\t\t\t>\n\t\t\t\t\t\t<ion-icon name=\"remove-circle\"></ion-icon>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</ion-row>\n\t\t<ion-row class=\"mt-4 mb-4 actions\">\n\t\t\t<ion-button\n\t\t\t\t(click)=\"saveImages()\"\n\t\t\t\tcolor=\"success\"\n\t\t\t\t[disabled]=\"images?.length === 0\"\n\t\t\t\t>{{\n\t\t\t\t\t'WAREHOUSE_VIEW.EDIT_PICTURE.SAVE_IMAGES' | translate\n\t\t\t\t}}</ion-button\n\t\t\t>\n\t\t</ion-row>\n\t</ion-grid>\n</div>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/pages/+warehouse/relevant-oders/relevant-orders.component.html":
/*!****************************************************************************************************************************************************************!*\
  !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/raw-loader/dist/cjs.js!./src/pages/+warehouse/relevant-oders/relevant-orders.component.html ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<no-orders-info\n\t*ngIf=\"ordersLoaded && orders?.length === 0 && !isOrderContainerLive\"\n\t(toggleOrderContainer)=\"toggleOrderContainer.emit()\"\n\t[filterMode]=\"'ready'\"\n></no-orders-info>\n\n<ion-spinner\n\t*ngIf=\"!ordersLoaded\"\n\tclass=\"orders-spinner\"\n\tname=\"bubbles\"\n></ion-spinner>\n\n<div *ngIf=\"orders.length > 0\">\n\t<div *ngFor=\"let order of orders\" item-height=\"209px\">\n\t\t<order-without-carrier\n\t\t\t[order]=\"order\"\n\t\t\t[onUpdateWarehouseStatus]=\"onUpdateWarehouseStatus\"\n\t\t\t[getWarehouseStatus]=\"getWarehouseStatus\"\n\t\t\t*ngIf=\"orderState(order) === OrderState.WarehousePreparation\"\n\t\t>\n\t\t</order-without-carrier>\n\n\t\t<order-with-carrier\n\t\t\t[order]=\"order\"\n\t\t\t[onUpdateWarehouseStatus]=\"onUpdateWarehouseStatus\"\n\t\t\t[getWarehouseStatus]=\"getWarehouseStatus\"\n\t\t\t*ngIf=\"orderState(order) === OrderState.InDelivery\"\n\t\t>\n\t\t</order-with-carrier>\n\n\t\t<order-delivered\n\t\t\t[order]=\"order\"\n\t\t\t*ngIf=\"orderState(order) === OrderState.Delivered\"\n\t\t\t[getWarehouseStatus]=\"getWarehouseStatus\"\n\t\t>\n\t\t</order-delivered>\n\n\t\t<order-canceled\n\t\t\t[order]=\"order\"\n\t\t\t*ngIf=\"orderState(order) === OrderState.Canceled\"\n\t\t\t[getWarehouseStatus]=\"getWarehouseStatus\"\n\t\t>\n\t\t</order-canceled>\n\n\t\t<order-delivery-problem\n\t\t\t[order]=\"order\"\n\t\t\t*ngIf=\"orderState(order) === OrderState.DeliveryProblem\"\n\t\t\t[getWarehouseStatus]=\"getWarehouseStatus\"\n\t\t>\n\t\t</order-delivery-problem>\n\n\t\t<order-warehouse-preparation-problem\n\t\t\t[order]=\"order\"\n\t\t\t*ngIf=\"orderState(order) === OrderState.WarehousePreparationProblem\"\n\t\t\t[getWarehouseStatus]=\"getWarehouseStatus\"\n\t\t>\n\t\t</order-warehouse-preparation-problem>\n\t</div>\n\n\t<ion-infinite-scroll\n\t\t[disabled]=\"ordersCount <= orders?.length\"\n\t\tthreshold=\"100px\"\n\t\t(ionInfinite)=\"loadData($event)\"\n\t\tposition=\"bottom\"\n\t>\n\t\t<ion-infinite-scroll-content\n\t\t\tloadingSpinner=\"bubbles\"\n\t\t\tloadingText=\"{{ 'WAREHOUSE_VIEW.LOADING_MORE_DATA' | translate }}\"\n\t\t>\n\t\t</ion-infinite-scroll-content>\n\t</ion-infinite-scroll>\n</div>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/pages/+warehouse/top-products/top-products.component.html":
/*!***********************************************************************************************************************************************************!*\
  !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/raw-loader/dist/cjs.js!./src/pages/+warehouse/top-products/top-products.component.html ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"product-scroll\">\n\t<div class=\"no-orders-message\" *ngIf=\"showNoProductsIcon\">\n\t\t<i class=\"fa fa-book\"></i>\n\t\t<div>\n\t\t\t<h2>\n\t\t\t\t{{\n\t\t\t\t\t'WAREHOUSE_VIEW.ORDER_WAREHOUSE_STATUSES.NO_PRODUCTS'\n\t\t\t\t\t\t| translate\n\t\t\t\t}}\n\t\t\t</h2>\n\t\t\t<h3 (click)=\"presentCreateProductPopover()\">\n\t\t\t\t{{ 'WAREHOUSE_VIEW.MISC_TEXT.ADD_NEW_PRODUCT' | translate }}\n\t\t\t</h3>\n\t\t</div>\n\t</div>\n\n\t<ion-list *ngIf=\"!showNoProductsIcon\" class=\"products\">\n\t\t<ion-item\n\t\t\tclass=\"product-card-container\"\n\t\t\ttype=\"card\"\n\t\t\t*ngFor=\"let warehouseProduct of topProducts\"\n\t\t>\n\t\t\t<div class=\"card product-card\">\n\t\t\t\t<div class=\"product-image-container\">\n\t\t\t\t\t<img\n\t\t\t\t\t\tclass=\"product-image\"\n\t\t\t\t\t\t(click)=\"addProduct(warehouseProduct.productId)\"\n\t\t\t\t\t\tsrc=\"{{\n\t\t\t\t\t\t\tgetWarehouseProductImageUrl(\n\t\t\t\t\t\t\t\twarehouseProduct.product\n\t\t\t\t\t\t\t)\n\t\t\t\t\t\t}}\"\n\t\t\t\t\t/>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"product-mini-bar\">\n\t\t\t\t\t<a\n\t\t\t\t\t\tclass=\"edit-button button\"\n\t\t\t\t\t\t(click)=\"openEditProductModal(warehouseProduct)\"\n\t\t\t\t\t>\n\t\t\t\t\t\t<ion-icon\n\t\t\t\t\t\t\tios=\"ios-settings\"\n\t\t\t\t\t\t\tmd=\"md-settings\"\n\t\t\t\t\t\t></ion-icon>\n\t\t\t\t\t</a>\n\t\t\t\t\t<span class=\"name\"\n\t\t\t\t\t\t>{{\n\t\t\t\t\t\t\ttruncateTitle(\n\t\t\t\t\t\t\t\tlocaleTranslate(warehouseProduct.product.title)\n\t\t\t\t\t\t\t)\n\t\t\t\t\t\t}}\n\t\t\t\t\t</span>\n\t\t\t\t\t<span class=\"count\">{{ warehouseProduct?.count }}</span>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</ion-item>\n\t</ion-list>\n</div>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/pages/+warehouse/warehouse.html":
/*!*********************************************************************************************************************************!*\
  !*** /mnt/d/Work/Angular/New folder (2)/DolceGrocery/node_modules/raw-loader/dist/cjs.js!./src/pages/+warehouse/warehouse.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content scroll=\"false\" class=\"app-view warehouse-view no-padding\">\n\t<ion-row class=\"warehouse-view m-0\">\n\t\t<div class=\"orders-container col\">\n\t\t\t<div class=\"bar bar-header bar-brand\">\n\t\t\t\t<h1 class=\"title\">{{ 'WAREHOUSE_VIEW.ORDERS' | translate }}</h1>\n\n\t\t\t\t<div class=\"buttons buttons-left header-item\">\n\t\t\t\t\t<span class=\"left-buttons\">\n\t\t\t\t\t\t<div class=\"waves-effect waves-classic\">\n\t\t\t\t\t\t\t<ion-menu-toggle class=\"button-icon\">\n\t\t\t\t\t\t\t\t<ion-icon\n\t\t\t\t\t\t\t\t\tios=\"ios-menu\"\n\t\t\t\t\t\t\t\t\tmd=\"md-menu\"\n\t\t\t\t\t\t\t\t></ion-icon>\n\t\t\t\t\t\t\t</ion-menu-toggle>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</span>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"button-bar-right-container allowOverflow\">\n\t\t\t\t\t<div class=\"button-bar\">\n\t\t\t\t\t\t<a\n\t\t\t\t\t\t\tclass=\"button\"\n\t\t\t\t\t\t\t[ngClass]=\"{\n\t\t\t\t\t\t\t\t'button-dark-brand': showRelevant,\n\t\t\t\t\t\t\t\t'button-brand': !showRelevant || showAllProducts\n\t\t\t\t\t\t\t}\"\n\t\t\t\t\t\t\t(click)=\"\n\t\t\t\t\t\t\t\tswitchOrders(true); showAllProducts = false\n\t\t\t\t\t\t\t\"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t\t{{ 'WAREHOUSE_VIEW.RELEVANT' | translate }}\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t<a\n\t\t\t\t\t\t\tclass=\"button\"\n\t\t\t\t\t\t\t[ngClass]=\"{\n\t\t\t\t\t\t\t\t'button-dark-brand': !showRelevant,\n\t\t\t\t\t\t\t\t'button-brand': showRelevant || showAllProducts\n\t\t\t\t\t\t\t}\"\n\t\t\t\t\t\t\t(click)=\"\n\t\t\t\t\t\t\t\tswitchOrders(false); showAllProducts = false\n\t\t\t\t\t\t\t\"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t\t{{ 'WAREHOUSE_VIEW.ALL' | translate }}\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t<a\n\t\t\t\t\t\t\tclass=\"button\"\n\t\t\t\t\t\t\t[ngClass]=\"{\n\t\t\t\t\t\t\t\t'button-dark-brand': isOrderContainerLive,\n\t\t\t\t\t\t\t\t'button-brand': !isOrderContainerLive\n\t\t\t\t\t\t\t}\"\n\t\t\t\t\t\t\t(click)=\"toggleOrderContainer()\"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t\t+ {{ 'WAREHOUSE_VIEW.NEW_ORDER' | translate }}\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t<a class=\"button button-brand\" (click)=\"scanBarcode()\">\n\t\t\t\t\t\t\t<i class=\"fa fa-qrcode\"></i> Scan\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<ion-content class=\"app-view\" scroll=\"false\">\n\t\t\t\t<div class=\"orders\">\n\t\t\t\t\t<div class=\"pt-3\" *ngIf=\"isOrderContainerLive\">\n\t\t\t\t\t\t<order\n\t\t\t\t\t\t\tclass=\"card m-0 mb-0 p-0\"\n\t\t\t\t\t\t\t(orderFinishedEmitter)=\"onOrderFinish()\"\n\t\t\t\t\t\t></order>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<merchant-all-products\n\t\t\t\t\t\t*ngIf=\"showAllProducts\"\n\t\t\t\t\t\t[warehouseId]=\"warehouseId\"\n\t\t\t\t\t\t[presentCreateProductPopover]=\"\n\t\t\t\t\t\t\tpresentCreateProductPopover\n\t\t\t\t\t\t\"\n\t\t\t\t\t\t[addProduct]=\"addProduct\"\n\t\t\t\t\t\t[getWarehouseProductImageUrl]=\"\n\t\t\t\t\t\t\tgetWarehouseProductImageUrl\n\t\t\t\t\t\t\"\n\t\t\t\t\t\t[openEditProductModal]=\"openEditProductModal\"\n\t\t\t\t\t\t[truncateTitle]=\"truncateTitle\"\n\t\t\t\t\t\t[localeTranslate]=\"localeTranslate\"\n\t\t\t\t\t></merchant-all-products>\n\n\t\t\t\t\t<merchant-relevant-orders\n\t\t\t\t\t\t*ngIf=\"showRelevant && !showAllProducts\"\n\t\t\t\t\t\t[onUpdateWarehouseStatus]=\"updateOrderWarehouseStatus\"\n\t\t\t\t\t\t[getWarehouseStatus]=\"getWarehouseStatus\"\n\t\t\t\t\t\t[orderState]=\"orderState\"\n\t\t\t\t\t\t[focusedOrder]=\"focusedOrder\"\n\t\t\t\t\t\t(toggleOrderContainer)=\"toggleOrderContainer()\"\n\t\t\t\t\t\t[isOrderContainerLive]=\"isOrderContainerLive\"\n\t\t\t\t\t>\n\t\t\t\t\t</merchant-relevant-orders>\n\n\t\t\t\t\t<merchant-all-orders\n\t\t\t\t\t\t*ngIf=\"!showRelevant && !showAllProducts\"\n\t\t\t\t\t\t[onUpdateWarehouseStatus]=\"updateOrderWarehouseStatus\"\n\t\t\t\t\t\t[getWarehouseStatus]=\"getWarehouseStatus\"\n\t\t\t\t\t\t[orderState]=\"orderState\"\n\t\t\t\t\t\t[focusedOrder]=\"focusedOrder\"\n\t\t\t\t\t\t(toggleOrderContainer)=\"toggleOrderContainer()\"\n\t\t\t\t\t\t[isOrderContainerLive]=\"isOrderContainerLive\"\n\t\t\t\t\t>\n\t\t\t\t\t</merchant-all-orders>\n\t\t\t\t</div>\n\t\t\t</ion-content>\n\t\t</div>\n\n\t\t<div class=\"products-container\">\n\t\t\t<div class=\"bar bar-header bar-assertive redbar\">\n\t\t\t\t<div>\n\t\t\t\t\t<button\n\t\t\t\t\t\t(click)=\"showAllProducts = !showAllProducts\"\n\t\t\t\t\t\tclass=\"all button\"\n\t\t\t\t\t>\n\t\t\t\t\t\tAll\n\t\t\t\t\t</button>\n\t\t\t\t\t<span class=\"text\">\n\t\t\t\t\t\t{{ 'WAREHOUSE_VIEW.PRODUCTS' | translate }}\n\t\t\t\t\t</span>\n\t\t\t\t\t<button\n\t\t\t\t\t\tclass=\"icon button-icon plus-navbar-button p-0\"\n\t\t\t\t\t\t(click)=\"presentCreateProductPopover()\"\n\t\t\t\t\t>\n\t\t\t\t\t\t<ion-icon ios=\"ios-add\" md=\"md-add\"></ion-icon>\n\t\t\t\t\t</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<merchant-top-products\n\t\t\t\t[warehouseId]=\"warehouseId\"\n\t\t\t\t[presentCreateProductPopover]=\"presentCreateProductPopover\"\n\t\t\t\t[addProduct]=\"addProduct\"\n\t\t\t\t[getWarehouseProductImageUrl]=\"getWarehouseProductImageUrl\"\n\t\t\t\t[openEditProductModal]=\"openEditProductModal\"\n\t\t\t\t[truncateTitle]=\"truncateTitle\"\n\t\t\t\t[localeTranslate]=\"localeTranslate\"\n\t\t\t></merchant-top-products>\n\t\t</div>\n\t</ion-row>\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/ngx-masonry/fesm5/ngx-masonry.js":
/*!*******************************************************!*\
  !*** ./node_modules/ngx-masonry/fesm5/ngx-masonry.js ***!
  \*******************************************************/
/*! exports provided: NgxMasonryComponent, NgxMasonryDirective, NgxMasonryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxMasonryComponent", function() { return NgxMasonryComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxMasonryDirective", function() { return NgxMasonryDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxMasonryModule", function() { return NgxMasonryModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");




var imagesLoaded;
var masonryConstructor;
var NgxMasonryComponent = /** @class */ (function () {
    function NgxMasonryComponent(platformId, _element) {
        this.platformId = platformId;
        this._element = _element;
        this.useImagesLoaded = false;
        this.updateLayout = false;
        // Outputs
        this.layoutComplete = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.removeComplete = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    NgxMasonryComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.useImagesLoaded && imagesLoaded === undefined) {
            imagesLoaded = __webpack_require__(/*! imagesloaded */ "../../node_modules/imagesloaded/imagesloaded.js");
        }
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["isPlatformBrowser"])(this.platformId) && masonryConstructor === undefined) {
            masonryConstructor = __webpack_require__(/*! masonry-layout */ "../../node_modules/masonry-layout/masonry.js");
        }
        // Create masonry options object
        if (!this.options) {
            this.options = {};
        }
        // Set default itemSelector
        if (!this.options.itemSelector) {
            this.options.itemSelector = '[ngxMasonryItem], ngxMasonryItem';
        }
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["isPlatformBrowser"])(this.platformId)) {
            // Initialize Masonry
            this._msnry = new masonryConstructor(this._element.nativeElement, this.options);
            // Bind to events
            this._msnry.on('layoutComplete', function (items) {
                _this.layoutComplete.emit(items);
            });
            this._msnry.on('removeComplete', function (items) {
                _this.removeComplete.emit(items);
            });
        }
    };
    NgxMasonryComponent.prototype.ngOnChanges = function (changes) {
        // only update layout if it's not the first change
        if (changes.updateLayout) {
            if (!changes.updateLayout.firstChange) {
                this.layout();
            }
        }
    };
    NgxMasonryComponent.prototype.ngOnDestroy = function () {
        if (this._msnry) {
            this._msnry.destroy();
        }
    };
    NgxMasonryComponent.prototype.layout = function () {
        var _this = this;
        setTimeout(function () {
            _this._msnry.layout();
        });
    };
    NgxMasonryComponent.prototype.reloadItems = function () {
        var _this = this;
        setTimeout(function () {
            _this._msnry.reloadItems();
        });
    };
    // public add(element: HTMLElement, prepend: boolean = false) {
    NgxMasonryComponent.prototype.add = function (element) {
        var _this = this;
        var isFirstItem = false;
        // Check if first item
        if (this._msnry.items.length === 0) {
            isFirstItem = true;
        }
        if (this.useImagesLoaded) {
            imagesLoaded(element, function (instance) {
                _this._element.nativeElement.appendChild(element);
                // Tell Masonry that a child element has been added
                _this._msnry.appended(element);
                // layout if first item
                if (isFirstItem) {
                    _this.layout();
                }
            });
            this._element.nativeElement.removeChild(element);
        }
        else {
            // Tell Masonry that a child element has been added
            this._msnry.appended(element);
            // layout if first item
            if (isFirstItem) {
                this.layout();
            }
        }
    };
    NgxMasonryComponent.prototype.remove = function (element) {
        // Tell Masonry that a child element has been removed
        this._msnry.remove(element);
        // Layout items
        this.layout();
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], NgxMasonryComponent.prototype, "options", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], NgxMasonryComponent.prototype, "useImagesLoaded", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], NgxMasonryComponent.prototype, "updateLayout", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], NgxMasonryComponent.prototype, "layoutComplete", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], NgxMasonryComponent.prototype, "removeComplete", void 0);
    NgxMasonryComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: '[ngx-masonry], ngx-masonry',
            template: '<ng-content></ng-content>',
            styles: ["\n\t\t:host {\n\t\t\tdisplay: block;\n\t\t}\n\t"]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"])),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], NgxMasonryComponent);
    return NgxMasonryComponent;
}());

var NgxMasonryDirective = /** @class */ (function () {
    function NgxMasonryDirective(_element, _parent, platformId) {
        this._element = _element;
        this._parent = _parent;
        this.platformId = platformId;
    }
    NgxMasonryDirective.prototype.ngAfterViewInit = function () {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["isPlatformBrowser"])(this.platformId)) {
            this._parent.add(this._element.nativeElement);
            this.watchForHtmlChanges();
        }
    };
    NgxMasonryDirective.prototype.ngOnDestroy = function () {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["isPlatformBrowser"])(this.platformId)) {
            this._parent.remove(this._element.nativeElement);
        }
    };
    /** When HTML in brick changes dinamically, observe that and change layout */
    NgxMasonryDirective.prototype.watchForHtmlChanges = function () {
        MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
        if (MutationObserver) {
            /** Watch for any changes to subtree */
            var self_1 = this;
            var observer = new MutationObserver(function (mutations, observerFromElement) {
                self_1._parent.layout();
            });
            // define what element should be observed by the observer
            // and what types of mutations trigger the callback
            observer.observe(this._element.nativeElement, {
                subtree: true,
                childList: true
            });
        }
    };
    NgxMasonryDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[ngxMasonryItem], ngxMasonryItem'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return NgxMasonryComponent; }))),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"])),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            NgxMasonryComponent, Object])
    ], NgxMasonryDirective);
    return NgxMasonryDirective;
}());

var NgxMasonryModule = /** @class */ (function () {
    function NgxMasonryModule() {
    }
    NgxMasonryModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [],
            declarations: [NgxMasonryComponent, NgxMasonryDirective],
            exports: [NgxMasonryComponent, NgxMasonryDirective]
        })
    ], NgxMasonryModule);
    return NgxMasonryModule;
}());


//# sourceMappingURL=ngx-masonry.js.map


/***/ }),

/***/ "./node_modules/ngx-pagination/dist/ngx-pagination.js":
/*!************************************************************!*\
  !*** ./node_modules/ngx-pagination/dist/ngx-pagination.js ***!
  \************************************************************/
/*! exports provided: ɵb, ɵa, NgxPaginationModule, PaginationService, PaginationControlsComponent, PaginationControlsDirective, PaginatePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return DEFAULT_STYLES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return DEFAULT_TEMPLATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxPaginationModule", function() { return NgxPaginationModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationService", function() { return PaginationService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationControlsComponent", function() { return PaginationControlsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationControlsDirective", function() { return PaginationControlsDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginatePipe", function() { return PaginatePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");



var PaginationService = /** @class */ (function () {
    function PaginationService() {
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.instances = {};
        this.DEFAULT_ID = 'DEFAULT_PAGINATION_ID';
    }
    PaginationService.prototype.defaultId = function () { return this.DEFAULT_ID; };
    PaginationService.prototype.register = function (instance) {
        if (instance.id == null) {
            instance.id = this.DEFAULT_ID;
        }
        if (!this.instances[instance.id]) {
            this.instances[instance.id] = instance;
            this.change.emit(instance.id);
        }
        else {
            var changed = this.updateInstance(instance);
            if (changed) {
                this.change.emit(instance.id);
            }
        }
    };
    /**
     * Check each property of the instance and update any that have changed. Return
     * true if any changes were made, else return false.
     */
    PaginationService.prototype.updateInstance = function (instance) {
        var changed = false;
        for (var prop in this.instances[instance.id]) {
            if (instance[prop] !== this.instances[instance.id][prop]) {
                this.instances[instance.id][prop] = instance[prop];
                changed = true;
            }
        }
        return changed;
    };
    /**
     * Returns the current page number.
     */
    PaginationService.prototype.getCurrentPage = function (id) {
        if (this.instances[id]) {
            return this.instances[id].currentPage;
        }
    };
    /**
     * Sets the current page number.
     */
    PaginationService.prototype.setCurrentPage = function (id, page) {
        if (this.instances[id]) {
            var instance = this.instances[id];
            var maxPage = Math.ceil(instance.totalItems / instance.itemsPerPage);
            if (page <= maxPage && 1 <= page) {
                this.instances[id].currentPage = page;
                this.change.emit(id);
            }
        }
    };
    /**
     * Sets the value of instance.totalItems
     */
    PaginationService.prototype.setTotalItems = function (id, totalItems) {
        if (this.instances[id] && 0 <= totalItems) {
            this.instances[id].totalItems = totalItems;
            this.change.emit(id);
        }
    };
    /**
     * Sets the value of instance.itemsPerPage.
     */
    PaginationService.prototype.setItemsPerPage = function (id, itemsPerPage) {
        if (this.instances[id]) {
            this.instances[id].itemsPerPage = itemsPerPage;
            this.change.emit(id);
        }
    };
    /**
     * Returns a clone of the pagination instance object matching the id. If no
     * id specified, returns the instance corresponding to the default id.
     */
    PaginationService.prototype.getInstance = function (id) {
        if (id === void 0) { id = this.DEFAULT_ID; }
        if (this.instances[id]) {
            return this.clone(this.instances[id]);
        }
        return {};
    };
    /**
     * Perform a shallow clone of an object.
     */
    PaginationService.prototype.clone = function (obj) {
        var target = {};
        for (var i in obj) {
            if (obj.hasOwnProperty(i)) {
                target[i] = obj[i];
            }
        }
        return target;
    };
    return PaginationService;
}());

var __decorate$1 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var LARGE_NUMBER = Number.MAX_SAFE_INTEGER;
var PaginatePipe = /** @class */ (function () {
    function PaginatePipe(service) {
        this.service = service;
        // store the values from the last time the pipe was invoked
        this.state = {};
    }
    PaginatePipe.prototype.transform = function (collection, args) {
        // When an observable is passed through the AsyncPipe, it will output
        // `null` until the subscription resolves. In this case, we want to
        // use the cached data from the `state` object to prevent the NgFor
        // from flashing empty until the real values arrive.
        if (!(collection instanceof Array)) {
            var _id = args.id || this.service.defaultId();
            if (this.state[_id]) {
                return this.state[_id].slice;
            }
            else {
                return collection;
            }
        }
        var serverSideMode = args.totalItems && args.totalItems !== collection.length;
        var instance = this.createInstance(collection, args);
        var id = instance.id;
        var start, end;
        var perPage = instance.itemsPerPage;
        this.service.register(instance);
        if (!serverSideMode && collection instanceof Array) {
            perPage = +perPage || LARGE_NUMBER;
            start = (instance.currentPage - 1) * perPage;
            end = start + perPage;
            var isIdentical = this.stateIsIdentical(id, collection, start, end);
            if (isIdentical) {
                return this.state[id].slice;
            }
            else {
                var slice = collection.slice(start, end);
                this.saveState(id, collection, slice, start, end);
                this.service.change.emit(id);
                return slice;
            }
        }
        // save the state for server-side collection to avoid null
        // flash as new data loads.
        this.saveState(id, collection, collection, start, end);
        return collection;
    };
    /**
     * Create an PaginationInstance object, using defaults for any optional properties not supplied.
     */
    PaginatePipe.prototype.createInstance = function (collection, config) {
        this.checkConfig(config);
        return {
            id: config.id != null ? config.id : this.service.defaultId(),
            itemsPerPage: +config.itemsPerPage || 0,
            currentPage: +config.currentPage || 1,
            totalItems: +config.totalItems || collection.length
        };
    };
    /**
     * Ensure the argument passed to the filter contains the required properties.
     */
    PaginatePipe.prototype.checkConfig = function (config) {
        var required = ['itemsPerPage', 'currentPage'];
        var missing = required.filter(function (prop) { return !(prop in config); });
        if (0 < missing.length) {
            throw new Error("PaginatePipe: Argument is missing the following required properties: " + missing.join(', '));
        }
    };
    /**
     * To avoid returning a brand new array each time the pipe is run, we store the state of the sliced
     * array for a given id. This means that the next time the pipe is run on this collection & id, we just
     * need to check that the collection, start and end points are all identical, and if so, return the
     * last sliced array.
     */
    PaginatePipe.prototype.saveState = function (id, collection, slice, start, end) {
        this.state[id] = {
            collection: collection,
            size: collection.length,
            slice: slice,
            start: start,
            end: end
        };
    };
    /**
     * For a given id, returns true if the collection, size, start and end values are identical.
     */
    PaginatePipe.prototype.stateIsIdentical = function (id, collection, start, end) {
        var state = this.state[id];
        if (!state) {
            return false;
        }
        var isMetaDataIdentical = state.size === collection.length &&
            state.start === start &&
            state.end === end;
        if (!isMetaDataIdentical) {
            return false;
        }
        return state.slice.every(function (element, index) { return element === collection[start + index]; });
    };
    PaginatePipe = __decorate$1([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'paginate',
            pure: false
        }),
        __metadata("design:paramtypes", [PaginationService])
    ], PaginatePipe);
    return PaginatePipe;
}());

/**
 * The default template and styles for the pagination links are borrowed directly
 * from Zurb Foundation 6: http://foundation.zurb.com/sites/docs/pagination.html
 */
var DEFAULT_TEMPLATE = "\n    <pagination-template  #p=\"paginationApi\"\n                         [id]=\"id\"\n                         [maxSize]=\"maxSize\"\n                         (pageChange)=\"pageChange.emit($event)\">\n    <ul class=\"ngx-pagination\" \n        role=\"navigation\" \n        [attr.aria-label]=\"screenReaderPaginationLabel\" \n        [class.responsive]=\"responsive\"\n        *ngIf=\"!(autoHide && p.pages.length <= 1)\">\n\n        <li class=\"pagination-previous\" [class.disabled]=\"p.isFirstPage()\" *ngIf=\"directionLinks\"> \n            <a tabindex=\"0\" *ngIf=\"1 < p.getCurrent()\" (keyup.enter)=\"p.previous()\" (click)=\"p.previous()\" [attr.aria-label]=\"previousLabel + ' ' + screenReaderPageLabel\">\n                {{ previousLabel }} <span class=\"show-for-sr\">{{ screenReaderPageLabel }}</span>\n            </a>\n            <span *ngIf=\"p.isFirstPage()\">\n                {{ previousLabel }} <span class=\"show-for-sr\">{{ screenReaderPageLabel }}</span>\n            </span>\n        </li> \n\n        <li class=\"small-screen\">\n            {{ p.getCurrent() }} / {{ p.getLastPage() }}\n        </li>\n\n        <li [class.current]=\"p.getCurrent() === page.value\" \n            [class.ellipsis]=\"page.label === '...'\"\n            *ngFor=\"let page of p.pages\">\n            <a tabindex=\"0\" (keyup.enter)=\"p.setCurrent(page.value)\" (click)=\"p.setCurrent(page.value)\" *ngIf=\"p.getCurrent() !== page.value\">\n                <span class=\"show-for-sr\">{{ screenReaderPageLabel }} </span>\n                <span>{{ (page.label === '...') ? page.label : (page.label | number:'') }}</span>\n            </a>\n            <ng-container *ngIf=\"p.getCurrent() === page.value\">\n                <span class=\"show-for-sr\">{{ screenReaderCurrentLabel }} </span>\n                <span>{{ (page.label === '...') ? page.label : (page.label | number:'') }}</span> \n            </ng-container>\n        </li>\n\n        <li class=\"pagination-next\" [class.disabled]=\"p.isLastPage()\" *ngIf=\"directionLinks\">\n            <a tabindex=\"0\" *ngIf=\"!p.isLastPage()\" (keyup.enter)=\"p.next()\" (click)=\"p.next()\" [attr.aria-label]=\"nextLabel + ' ' + screenReaderPageLabel\">\n                 {{ nextLabel }} <span class=\"show-for-sr\">{{ screenReaderPageLabel }}</span>\n            </a>\n            <span *ngIf=\"p.isLastPage()\">\n                 {{ nextLabel }} <span class=\"show-for-sr\">{{ screenReaderPageLabel }}</span>\n            </span>\n        </li>\n\n    </ul>\n    </pagination-template>\n    ";
var DEFAULT_STYLES = "\n.ngx-pagination {\n  margin-left: 0;\n  margin-bottom: 1rem; }\n  .ngx-pagination::before, .ngx-pagination::after {\n    content: ' ';\n    display: table; }\n  .ngx-pagination::after {\n    clear: both; }\n  .ngx-pagination li {\n    -moz-user-select: none;\n    -webkit-user-select: none;\n    -ms-user-select: none;\n    margin-right: 0.0625rem;\n    border-radius: 0; }\n  .ngx-pagination li {\n    display: inline-block; }\n  .ngx-pagination a,\n  .ngx-pagination button {\n    color: #0a0a0a; \n    display: block;\n    padding: 0.1875rem 0.625rem;\n    border-radius: 0; }\n    .ngx-pagination a:hover,\n    .ngx-pagination button:hover {\n      background: #e6e6e6; }\n  .ngx-pagination .current {\n    padding: 0.1875rem 0.625rem;\n    background: #2199e8;\n    color: #fefefe;\n    cursor: default; }\n  .ngx-pagination .disabled {\n    padding: 0.1875rem 0.625rem;\n    color: #cacaca;\n    cursor: default; } \n    .ngx-pagination .disabled:hover {\n      background: transparent; }\n  .ngx-pagination a, .ngx-pagination button {\n    cursor: pointer; }\n\n.ngx-pagination .pagination-previous a::before,\n.ngx-pagination .pagination-previous.disabled::before { \n  content: '\u00AB';\n  display: inline-block;\n  margin-right: 0.5rem; }\n\n.ngx-pagination .pagination-next a::after,\n.ngx-pagination .pagination-next.disabled::after {\n  content: '\u00BB';\n  display: inline-block;\n  margin-left: 0.5rem; }\n\n.ngx-pagination .show-for-sr {\n  position: absolute !important;\n  width: 1px;\n  height: 1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0); }\n.ngx-pagination .small-screen {\n  display: none; }\n@media screen and (max-width: 601px) {\n  .ngx-pagination.responsive .small-screen {\n    display: inline-block; } \n  .ngx-pagination.responsive li:not(.small-screen):not(.pagination-previous):not(.pagination-next) {\n    display: none; }\n}\n  ";

var __decorate$2 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$1 = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
function coerceToBoolean(input) {
    return !!input && input !== 'false';
}
/**
 * The default pagination controls component. Actually just a default implementation of a custom template.
 */
var PaginationControlsComponent = /** @class */ (function () {
    function PaginationControlsComponent() {
        this.maxSize = 7;
        this.previousLabel = 'Previous';
        this.nextLabel = 'Next';
        this.screenReaderPaginationLabel = 'Pagination';
        this.screenReaderPageLabel = 'page';
        this.screenReaderCurrentLabel = "You're on page";
        this.pageChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._directionLinks = true;
        this._autoHide = false;
        this._responsive = false;
    }
    Object.defineProperty(PaginationControlsComponent.prototype, "directionLinks", {
        get: function () {
            return this._directionLinks;
        },
        set: function (value) {
            this._directionLinks = coerceToBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaginationControlsComponent.prototype, "autoHide", {
        get: function () {
            return this._autoHide;
        },
        set: function (value) {
            this._autoHide = coerceToBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaginationControlsComponent.prototype, "responsive", {
        get: function () {
            return this._responsive;
        },
        set: function (value) {
            this._responsive = coerceToBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    __decorate$2([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata$1("design:type", String)
    ], PaginationControlsComponent.prototype, "id", void 0);
    __decorate$2([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata$1("design:type", Number)
    ], PaginationControlsComponent.prototype, "maxSize", void 0);
    __decorate$2([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata$1("design:type", Boolean),
        __metadata$1("design:paramtypes", [Boolean])
    ], PaginationControlsComponent.prototype, "directionLinks", null);
    __decorate$2([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata$1("design:type", Boolean),
        __metadata$1("design:paramtypes", [Boolean])
    ], PaginationControlsComponent.prototype, "autoHide", null);
    __decorate$2([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata$1("design:type", Boolean),
        __metadata$1("design:paramtypes", [Boolean])
    ], PaginationControlsComponent.prototype, "responsive", null);
    __decorate$2([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata$1("design:type", String)
    ], PaginationControlsComponent.prototype, "previousLabel", void 0);
    __decorate$2([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata$1("design:type", String)
    ], PaginationControlsComponent.prototype, "nextLabel", void 0);
    __decorate$2([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata$1("design:type", String)
    ], PaginationControlsComponent.prototype, "screenReaderPaginationLabel", void 0);
    __decorate$2([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata$1("design:type", String)
    ], PaginationControlsComponent.prototype, "screenReaderPageLabel", void 0);
    __decorate$2([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata$1("design:type", String)
    ], PaginationControlsComponent.prototype, "screenReaderCurrentLabel", void 0);
    __decorate$2([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata$1("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], PaginationControlsComponent.prototype, "pageChange", void 0);
    PaginationControlsComponent = __decorate$2([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'pagination-controls',
            template: DEFAULT_TEMPLATE,
            styles: [DEFAULT_STYLES],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        })
    ], PaginationControlsComponent);
    return PaginationControlsComponent;
}());

var __decorate$3 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$2 = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * This directive is what powers all pagination controls components, including the default one.
 * It exposes an API which is hooked up to the PaginationService to keep the PaginatePipe in sync
 * with the pagination controls.
 */
var PaginationControlsDirective = /** @class */ (function () {
    function PaginationControlsDirective(service, changeDetectorRef) {
        var _this = this;
        this.service = service;
        this.changeDetectorRef = changeDetectorRef;
        this.maxSize = 7;
        this.pageChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.pages = [];
        this.changeSub = this.service.change
            .subscribe(function (id) {
            if (_this.id === id) {
                _this.updatePageLinks();
                _this.changeDetectorRef.markForCheck();
                _this.changeDetectorRef.detectChanges();
            }
        });
    }
    PaginationControlsDirective.prototype.ngOnInit = function () {
        if (this.id === undefined) {
            this.id = this.service.defaultId();
        }
        this.updatePageLinks();
    };
    PaginationControlsDirective.prototype.ngOnChanges = function (changes) {
        this.updatePageLinks();
    };
    PaginationControlsDirective.prototype.ngOnDestroy = function () {
        this.changeSub.unsubscribe();
    };
    /**
     * Go to the previous page
     */
    PaginationControlsDirective.prototype.previous = function () {
        this.checkValidId();
        this.setCurrent(this.getCurrent() - 1);
    };
    /**
     * Go to the next page
     */
    PaginationControlsDirective.prototype.next = function () {
        this.checkValidId();
        this.setCurrent(this.getCurrent() + 1);
    };
    /**
     * Returns true if current page is first page
     */
    PaginationControlsDirective.prototype.isFirstPage = function () {
        return this.getCurrent() === 1;
    };
    /**
     * Returns true if current page is last page
     */
    PaginationControlsDirective.prototype.isLastPage = function () {
        return this.getLastPage() === this.getCurrent();
    };
    /**
     * Set the current page number.
     */
    PaginationControlsDirective.prototype.setCurrent = function (page) {
        this.pageChange.emit(page);
    };
    /**
     * Get the current page number.
     */
    PaginationControlsDirective.prototype.getCurrent = function () {
        return this.service.getCurrentPage(this.id);
    };
    /**
     * Returns the last page number
     */
    PaginationControlsDirective.prototype.getLastPage = function () {
        var inst = this.service.getInstance(this.id);
        if (inst.totalItems < 1) {
            // when there are 0 or fewer (an error case) items, there are no "pages" as such,
            // but it makes sense to consider a single, empty page as the last page.
            return 1;
        }
        return Math.ceil(inst.totalItems / inst.itemsPerPage);
    };
    PaginationControlsDirective.prototype.getTotalItems = function () {
        return this.service.getInstance(this.id).totalItems;
    };
    PaginationControlsDirective.prototype.checkValidId = function () {
        if (this.service.getInstance(this.id).id == null) {
            console.warn("PaginationControlsDirective: the specified id \"" + this.id + "\" does not match any registered PaginationInstance");
        }
    };
    /**
     * Updates the page links and checks that the current page is valid. Should run whenever the
     * PaginationService.change stream emits a value matching the current ID, or when any of the
     * input values changes.
     */
    PaginationControlsDirective.prototype.updatePageLinks = function () {
        var _this = this;
        var inst = this.service.getInstance(this.id);
        var correctedCurrentPage = this.outOfBoundCorrection(inst);
        if (correctedCurrentPage !== inst.currentPage) {
            setTimeout(function () {
                _this.setCurrent(correctedCurrentPage);
                _this.pages = _this.createPageArray(inst.currentPage, inst.itemsPerPage, inst.totalItems, _this.maxSize);
            });
        }
        else {
            this.pages = this.createPageArray(inst.currentPage, inst.itemsPerPage, inst.totalItems, this.maxSize);
        }
    };
    /**
     * Checks that the instance.currentPage property is within bounds for the current page range.
     * If not, return a correct value for currentPage, or the current value if OK.
     */
    PaginationControlsDirective.prototype.outOfBoundCorrection = function (instance) {
        var totalPages = Math.ceil(instance.totalItems / instance.itemsPerPage);
        if (totalPages < instance.currentPage && 0 < totalPages) {
            return totalPages;
        }
        else if (instance.currentPage < 1) {
            return 1;
        }
        return instance.currentPage;
    };
    /**
     * Returns an array of Page objects to use in the pagination controls.
     */
    PaginationControlsDirective.prototype.createPageArray = function (currentPage, itemsPerPage, totalItems, paginationRange) {
        // paginationRange could be a string if passed from attribute, so cast to number.
        paginationRange = +paginationRange;
        var pages = [];
        var totalPages = Math.ceil(totalItems / itemsPerPage);
        var halfWay = Math.ceil(paginationRange / 2);
        var isStart = currentPage <= halfWay;
        var isEnd = totalPages - halfWay < currentPage;
        var isMiddle = !isStart && !isEnd;
        var ellipsesNeeded = paginationRange < totalPages;
        var i = 1;
        while (i <= totalPages && i <= paginationRange) {
            var label = void 0;
            var pageNumber = this.calculatePageNumber(i, currentPage, paginationRange, totalPages);
            var openingEllipsesNeeded = (i === 2 && (isMiddle || isEnd));
            var closingEllipsesNeeded = (i === paginationRange - 1 && (isMiddle || isStart));
            if (ellipsesNeeded && (openingEllipsesNeeded || closingEllipsesNeeded)) {
                label = '...';
            }
            else {
                label = pageNumber;
            }
            pages.push({
                label: label,
                value: pageNumber
            });
            i++;
        }
        return pages;
    };
    /**
     * Given the position in the sequence of pagination links [i],
     * figure out what page number corresponds to that position.
     */
    PaginationControlsDirective.prototype.calculatePageNumber = function (i, currentPage, paginationRange, totalPages) {
        var halfWay = Math.ceil(paginationRange / 2);
        if (i === paginationRange) {
            return totalPages;
        }
        else if (i === 1) {
            return i;
        }
        else if (paginationRange < totalPages) {
            if (totalPages - halfWay < currentPage) {
                return totalPages - paginationRange + i;
            }
            else if (halfWay < currentPage) {
                return currentPage - halfWay + i;
            }
            else {
                return i;
            }
        }
        else {
            return i;
        }
    };
    __decorate$3([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata$2("design:type", String)
    ], PaginationControlsDirective.prototype, "id", void 0);
    __decorate$3([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata$2("design:type", Number)
    ], PaginationControlsDirective.prototype, "maxSize", void 0);
    __decorate$3([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata$2("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], PaginationControlsDirective.prototype, "pageChange", void 0);
    PaginationControlsDirective = __decorate$3([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: 'pagination-template,[pagination-template]',
            exportAs: 'paginationApi'
        }),
        __metadata$2("design:paramtypes", [PaginationService,
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], PaginationControlsDirective);
    return PaginationControlsDirective;
}());

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var NgxPaginationModule = /** @class */ (function () {
    function NgxPaginationModule() {
    }
    NgxPaginationModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            declarations: [
                PaginatePipe,
                PaginationControlsComponent,
                PaginationControlsDirective
            ],
            providers: [PaginationService],
            exports: [PaginatePipe, PaginationControlsComponent, PaginationControlsDirective]
        })
    ], NgxPaginationModule);
    return NgxPaginationModule;
}());

/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ "./src/components/order/address.component.ts":
/*!***************************************************!*\
  !*** ./src/components/order/address.component.ts ***!
  \***************************************************/
/*! exports provided: AddressComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressComponent", function() { return AddressComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AddressComponent = (function () {
    function AddressComponent() {
    }
    AddressComponent.prototype.ngOnInit = function () {
        this.user = this.rowData.user;
    };
    AddressComponent.prototype.getStoreFullAddress = function (user) {
        var geoLocation = user.geoLocation;
        var fullAddress = geoLocation.city + ", " + geoLocation.streetAddress + " " + geoLocation.house;
        return fullAddress;
    };
    AddressComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: "\n\t\t<strong\n\t\t\t>{{ user?.geoLocation.city }}\n\t\t\t<span *ngIf=\"user?.geoLocation.postcode\"\n\t\t\t\t>({{ user?.geoLocation.postcode }})</span\n\t\t\t>\n\t\t</strong>\n\t\t<span *ngIf=\"user\" class=\"address\">{{\n\t\t\tgetStoreFullAddress(user)\n\t\t}}</span>\n\t",
            styles: ["\n\t\t\th1 {\n\t\t\t\tfont-weight: normal !importnat;\n\t\t\t}\n\t\t\t.address {\n\t\t\t\tfont-style: italic !important;\n\t\t\t\ttext-decoration: underline;\n\t\t\t\tdisplay: block !important;\n\t\t\t}\n\t\t"]
        })
    ], AddressComponent);
    return AddressComponent;
}());



/***/ }),

/***/ "./src/components/order/choose-customer-option.component.ts":
/*!******************************************************************!*\
  !*** ./src/components/order/choose-customer-option.component.ts ***!
  \******************************************************************/
/*! exports provided: ChooseCustomerOptionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChooseCustomerOptionComponent", function() { return ChooseCustomerOptionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ChooseCustomerOptionComponent = (function () {
    function ChooseCustomerOptionComponent() {
        this.optionEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ChooseCustomerOptionComponent.prototype.chooseOption = function (optionBit) {
        this.optionEmitter.emit(optionBit);
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], ChooseCustomerOptionComponent.prototype, "optionEmitter", void 0);
    ChooseCustomerOptionComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'choose-customer-option',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./choose-customer-option.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/components/order/choose-customer-option.component.html")).default,
            styles: ["button { padding: 3.5%; background: none; border: 1px solid; } button:hover { color: #bd4742; border-color: #bd4742; }"]
        })
    ], ChooseCustomerOptionComponent);
    return ChooseCustomerOptionComponent;
}());



/***/ }),

/***/ "./src/components/order/make-order/make-order-input.component.ts":
/*!***********************************************************************!*\
  !*** ./src/components/order/make-order/make-order-input.component.ts ***!
  \***********************************************************************/
/*! exports provided: MakeOrderInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MakeOrderInputComponent", function() { return MakeOrderInputComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MakeOrderInputComponent = (function () {
    function MakeOrderInputComponent() {
        this.amount = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this._productAmount = 0;
    }
    Object.defineProperty(MakeOrderInputComponent.prototype, "warehouseAvailableProducts", {
        get: function () {
            return +this.value.available;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MakeOrderInputComponent.prototype, "productId", {
        get: function () {
            return this.value.productId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MakeOrderInputComponent.prototype, "productAmount", {
        get: function () {
            return this._productAmount;
        },
        set: function (amount) {
            this._productAmount = amount;
            this.amount.emit(amount);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MakeOrderInputComponent.prototype, "warehouseHasAvailable", {
        get: function () {
            return this._productAmount < this.warehouseAvailableProducts;
        },
        enumerable: true,
        configurable: true
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], MakeOrderInputComponent.prototype, "value", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], MakeOrderInputComponent.prototype, "rowData", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], MakeOrderInputComponent.prototype, "amount", void 0);
    MakeOrderInputComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: "\n\t\t<div class=\"order-input-wrapper\">\n\t\t\t<button\n\t\t\t\t(click)=\"productAmount = productAmount - 1\"\n\t\t\t\t[disabled]=\"productAmount <= 0\"\n\t\t\t\tclass=\"btn btn-sm btn-secondary p-1\"\n\t\t\t>\n\t\t\t\t-\n\t\t\t</button>\n\n\t\t\t<span class=\"mx-1\">{{ productAmount }}</span>\n\n\t\t\t<button\n\t\t\t\t(click)=\"productAmount = productAmount + 1\"\n\t\t\t\t[disabled]=\"!warehouseHasAvailable\"\n\t\t\t\tclass=\"btn btn-sm btn-secondary p-1\"\n\t\t\t>\n\t\t\t\t+\n\t\t\t</button>\n\t\t</div>\n\t",
            styles: ["\n\t\t\t.order-input-wrapper button {\n\t\t\t\tcolor: white !important;\n\t\t\t}\n\t\t\t.order-input-wrapper {\n\t\t\t\ttext-align: center;\n\t\t\t}\n\t\t"]
        })
    ], MakeOrderInputComponent);
    return MakeOrderInputComponent;
}());



/***/ }),

/***/ "./src/components/order/make-order/make-order.component.scss":
/*!*******************************************************************!*\
  !*** ./src/components/order/make-order/make-order.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".app-keyboard-open .app-hide-on-keyboard-open {\n  display: none;\n}\n\nhtml,\nbody {\n  overflow: visible !important;\n  background-color: #1a8e45 !important;\n}\n\n.menu-open .side-menu-content-ltr {\n  -webkit-transform: translate3d(250px, 0px, 0px) !important;\n}\n\n.menu-open .side-menu-content-rtl {\n  -webkit-transform: translate3d(-250px, 0px, 0px) !important;\n}\n\n.loading-container .loading {\n  background-color: transparent;\n}\n\n.loading-container .loading .spinner {\n  fill: #fff;\n  stroke: #fff;\n}\n\n.loading-container .loading .spinner svg {\n  width: 40px;\n  height: 40px;\n}\n\n.bright-vie .loading-container .loading .spinner {\n  fill: #1ea44f;\n  stroke: #1ea44f;\n}\n\n.swiper-slide img {\n  width: 100%;\n}\n\n.bar.bar-brand {\n  border-bottom: 2px solid #1c9b4b;\n  background: #1ea44f none;\n  color: white !important;\n}\n\n.bar.bar-brand .title {\n  color: white;\n}\n\n.bar.bar-brand .button-icon mr-1 {\n  color: white;\n}\n\n.brand-link {\n  color: #1ea44f;\n}\n\n.brand-link:active {\n  color: #353748;\n}\n\n.everbie-input {\n  height: 57px;\n  width: 100%;\n  font-size: 16px;\n  line-height: 20px;\n  border: solid #5c5f73 1px;\n  color: #fff;\n  background-color: inherit;\n  border-radius: 8px;\n  padding: 20px;\n  text-align: center;\n  -webkit-appearance: none;\n}\n\n.everbie-input::-webkit-input-placeholder {\n  color: #6d6f80;\n}\n\n.everbie-input::-moz-placeholder {\n  color: #6d6f80;\n}\n\n.everbie-input:-ms-input-placeholder {\n  color: #6d6f80;\n}\n\n.button.button-brand, .button-brand.everbie-button {\n  background-color: #1ea44f;\n  border-color: #1c9749;\n  color: #fff;\n}\n\n.button.button-brand.active, .button-brand.active.everbie-button, .button.button-brand.activated, .button-brand.activated.everbie-button {\n  background-color: #1da04d;\n  box-shadow: inset 0 1px 4px rgba(0, 0, 0, 0.1);\n}\n\n.button.button-dark-brand, .button-dark-brand.everbie-button {\n  background-color: #1a8e45;\n  border-color: #18823e;\n  color: #fff;\n}\n\n.button.button-dark-brand.active, .button-dark-brand.active.everbie-button, .button.button-dark-brand.activated, .button-dark-brand.activated.everbie-button {\n  background-color: #198a43;\n  box-shadow: inset 0 1px 4px rgba(0, 0, 0, 0.1);\n}\n\n.button.button-brand-lighted, .button-brand-lighted.everbie-button {\n  background-color: #353748;\n  border-color: #2f303f;\n  color: #fff;\n}\n\n.button.button-brand-lighted.active, .button-brand-lighted.active.everbie-button, .button.button-brand-lighted.activated, .button-brand-lighted.activated.everbie-button {\n  background-color: #333545;\n  box-shadow: inset 0 1px 4px rgba(0, 0, 0, 0.1);\n}\n\n.button.button-assertive.active, .active.everbie-button, .button.button-assertive.activated, .activated.everbie-button {\n  border-color: #aa403b !important;\n}\n\n.button.button-balanced.active, .button-balanced.active.everbie-button, .button.button-balanced.activated, .button-balanced.activated.everbie-button {\n  border-color: #2fc159 !important;\n}\n\n.button.button-balanced, .button-balanced.everbie-button {\n  background-color: #2db955;\n}\n\n.everbie-button {\n  border-radius: 8px !important;\n  font-size: 20px;\n  padding: 10px 16px;\n  margin-bottom: 0;\n  line-height: 34px;\n  background-color: #ce4843;\n}\n\n.bottom-0 {\n  position: absolute;\n  bottom: 0;\n}\n\n.no-padding {\n  padding: 0;\n}\n\n.no-padding-right {\n  padding-right: 0;\n}\n\n.no-padding-left {\n  padding-left: 0;\n}\n\n.no-padding-top {\n  padding-top: 0;\n}\n\n.no-padding-bottom {\n  padding-bottom: 0;\n}\n\n.text-align-right {\n  text-align: right;\n}\n\n.text-align-center {\n  text-align: center;\n}\n\n.text-align-left {\n  text-align: left;\n}\n\n.col-100 {\n  width: 100%;\n}\n\n.display-block {\n  display: block;\n}\n\n.header-bar-big-title {\n  font-size: 22px !important;\n  text-align: center !important;\n}\n\n.button-bar-right-container {\n  width: 280px;\n  margin-left: auto;\n}\n\n.pull-right {\n  margin-left: auto;\n}\n\n.plus-navbar-button::before {\n  font-size: 24px !important;\n}\n\n.border-color-brand {\n  border-color: #1ea44f;\n}\n\n.flip {\n  transform: scale(-1, 1);\n}\n\n.transition-on-color-change {\n  transition: background-color 0.3s, border-color 0.3s, color 0.3s;\n}\n\n.horizontal-space-10 {\n  width: 10px;\n}\n\n.margin-top-bottom {\n  margin-top: 5px;\n  margin-bottom: 5px;\n}\n\n.maintenance-message-container {\n  color: white;\n  padding: 20px;\n  background: #1ea44f;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  height: 100%;\n}\n\n.make-order-wrapper {\n  background: white !important;\n}\n\n.make-order-wrapper .smart-table tr.ng2-smart-titles > th.ng2-smart-th.img,\n.make-order-wrapper .smart-table tr.ng2-smart-titles > th.ng2-smart-th.price,\n.make-order-wrapper .smart-table tr.ng2-smart-titles > th.ng2-smart-th.available,\n.make-order-wrapper .smart-table tr.ng2-smart-titles > th.ng2-smart-th.amount {\n  text-align: center;\n}\n\n.make-order-wrapper .smart-table tr.ng2-smart-titles > th.ng2-smart-th.img > ng2-st-column-title > div > ng2-smart-table-title > a {\n  padding: 0;\n}\n\n.make-order-wrapper .smart-table tr > td:nth-child(n + 3),\n.make-order-wrapper .smart-table tr > td:nth-child(1) {\n  text-align: center;\n}\n\n.make-order-wrapper table {\n  margin: 0px auto;\n}\n\n.make-order-wrapper table td {\n  text-align: left;\n}\n\n.make-order-wrapper .ng2-smart-titles {\n  height: 50px !important;\n}\n\n.make-order-wrapper nav.ng2-smart-pagination-nav {\n  margin: 0 auto;\n}\n\n.make-order-wrapper li {\n  width: 50% !important;\n}\n\n.make-order-wrapper .ng2-smart-titles {\n  height: 50px !important;\n}\n\n.make-order-wrapper .pagination {\n  line-height: 1 !important;\n}\n\n.order-button.button, .order-button.everbie-button {\n  margin-top: 20px !important;\n  color: white !important;\n  padding: 0.2rem 1.2rem;\n  font-size: 1.2rem;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvZC9Xb3JrL0FuZ3VsYXIvTmV3IGZvbGRlciAoMikvRG9sY2VHcm9jZXJ5L3BhY2thZ2VzL21lcmNoYW50LXRhYmxldC1pb25pYy9ub2RlX21vZHVsZXMvQGV2ZXItcGxhdGZvcm0vY29tbW9uLWFuZ3VsYXIvc3JjL3Njc3MvZXZlcmJpZS5jb21tb24uc2NzcyIsInNyYy9jb21wb25lbnRzL29yZGVyL21ha2Utb3JkZXIvbWFrZS1vcmRlci5jb21wb25lbnQuc2NzcyIsIi9tbnQvZC9Xb3JrL0FuZ3VsYXIvTmV3IGZvbGRlciAoMikvRG9sY2VHcm9jZXJ5L3BhY2thZ2VzL21lcmNoYW50LXRhYmxldC1pb25pYy9zcmMvY29tcG9uZW50cy9vcmRlci9tYWtlLW9yZGVyL21ha2Utb3JkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZUE7RUFFRSxhQUFhO0FDZmY7O0FEMkZBOztFQUVDLDRCQUE0QjtFQUM1QixvQ0FBMEM7QUN4RjNDOztBRCtGQTtFQUVFLDBEQUEwRDtBQzdGNUQ7O0FEMkZBO0VBTUUsMkRBQTJEO0FDN0Y3RDs7QURpR0E7RUFDQyw2QkFBNkI7QUM5RjlCOztBRDZGQTtFQUlFLFVBQVU7RUFDVixZQUFZO0FDN0ZkOztBRHdGQTtFQU9HLFdBQVc7RUFDWCxZQUFZO0FDM0ZmOztBRGdHQTtFQUNDLGFBM0hjO0VBNEhkLGVBNUhjO0FDK0JmOztBRGdHQTtFQUVFLFdBQVc7QUM5RmI7O0FEc0dBO0VBRUUsZ0NBQTJDO0VBQzNDLHdCQUF1QjtFQUN2Qix1QkFBdUI7QUNwR3pCOztBRGdHQTtFQU1HLFlBQVk7QUNsR2Y7O0FENEZBO0VBU0csWUFBWTtBQ2pHZjs7QUQwR0E7RUFDQyxjQTVKYztBQ3FEZjs7QURzR0E7RUFHRSxjQTdKcUI7QUN3RHZCOztBRDZHQTtFQUNDLFlBQVk7RUFDWixXQUFXO0VBQ1gsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQix3QkFBd0I7QUMxR3pCOztBREdDO0VBQ0MsY0F3RzJCO0FDeEc3Qjs7QURFQztFQUNDLGNBcUcyQjtBQ3BHN0I7O0FEQ0M7RUFDQyxjQWtHMkI7QUNoRzdCOztBRHVHQTtFQUNDLHlCQTNMYztFQTRMZCxxQkFBZ0M7RUFDaEMsV0FBVztBQ3BHWjs7QURpR0E7RUFNRSx5QkFBb0M7RUFDcEMsOENBQThDO0FDbkdoRDs7QUR1R0E7RUFDQyx5QkFwTWdDO0VBcU1oQyxxQkFBdUM7RUFDdkMsV0FBVztBQ3BHWjs7QURpR0E7RUFNRSx5QkFBMkM7RUFDM0MsOENBQThDO0FDbkdoRDs7QUR1R0E7RUFDQyx5QkFoTnNCO0VBaU50QixxQkFBd0M7RUFDeEMsV0FBVztBQ3BHWjs7QURpR0E7RUFNRSx5QkFBNEM7RUFDNUMsOENBQThDO0FDbkdoRDs7QUR1R0E7RUFHRSxnQ0FBMEM7QUN0RzVDOztBRDBHQTtFQUdFLGdDQUE4QztBQ3pHaEQ7O0FENkdBO0VBQ0MseUJBQXVDO0FDMUd4Qzs7QUQ2R0E7RUFNQyw2QkFBNkI7RUFFN0IsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBRWpCLHlCQUF5QjtBQ2pIMUI7O0FEd0hBO0VBQ0Msa0JBQWtCO0VBQ2xCLFNBQVM7QUNySFY7O0FEd0hBO0VBQ0MsVUFBVTtBQ3JIWDs7QUR3SEE7RUFDQyxnQkFBZ0I7QUNySGpCOztBRHdIQTtFQUNDLGVBQWU7QUNySGhCOztBRHdIQTtFQUNDLGNBQWM7QUNySGY7O0FEd0hBO0VBQ0MsaUJBQWlCO0FDckhsQjs7QUR3SEE7RUFDQyxpQkFBaUI7QUNySGxCOztBRHdIQTtFQUNDLGtCQUFrQjtBQ3JIbkI7O0FEd0hBO0VBQ0MsZ0JBQWdCO0FDckhqQjs7QUR3SEE7RUFDQyxXQUFXO0FDckhaOztBRHdIQTtFQUNDLGNBQWM7QUNySGY7O0FEd0hBO0VBQ0MsMEJBQTBCO0VBQzFCLDZCQUE2QjtBQ3JIOUI7O0FEd0hBO0VBQ0MsWUFBWTtFQUNaLGlCQUFpQjtBQ3JIbEI7O0FEd0hBO0VBQ0MsaUJBQWlCO0FDckhsQjs7QUR3SEE7RUFFRSwwQkFBMEI7QUN0SDVCOztBRDBIQTtFQUNDLHFCQW5VYztBQzRNZjs7QUQwSEE7RUF0U0MsdUJBdVMrQjtBQ25IaEM7O0FEc0hBO0VBTUMsZ0VBTFk7QUNoSGI7O0FEd0hBO0VBQ0MsV0FBVztBQ3JIWjs7QUR3SEE7RUFDQyxlQUFlO0VBQ2Ysa0JBQWtCO0FDckhuQjs7QUR3SEE7RUFDQyxZQUFZO0VBQ1osYUFBYTtFQUViLG1CQWhXYztFQWtXZCxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsWUFBWTtBQ3ZIYjs7QUNqUEE7RUFDQyw0QkFBNEI7QURvUDdCOztBQ3JQQTs7OztFQVNJLGtCQUFrQjtBRG1QdEI7O0FDNVBBO0VBa0JJLFVBQVU7QUQ4T2Q7O0FDaFFBOztFQXdCSSxrQkFBa0I7QUQ2T3RCOztBQ3JRQTtFQTZCRSxnQkFBZ0I7QUQ0T2xCOztBQ3pRQTtFQStCRyxnQkFBZ0I7QUQ4T25COztBQzdRQTtFQW9DRSx1QkFBdUI7QUQ2T3pCOztBQ2pSQTtFQXdDRSxjQUFjO0FENk9oQjs7QUNyUkE7RUE0Q0UscUJBQXFCO0FENk92Qjs7QUN6UkE7RUFnREUsdUJBQXVCO0FENk96Qjs7QUM3UkE7RUFvREUseUJBQXlCO0FENk8zQjs7QUN6T0E7RUFDQywyQkFBMkI7RUFDM0IsdUJBQXVCO0VBRXZCLHNCQUFzQjtFQUN0QixpQkFBaUI7QUQyT2xCIiwiZmlsZSI6InNyYy9jb21wb25lbnRzL29yZGVyL21ha2Utb3JkZXIvbWFrZS1vcmRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSBwYXRoIGZvciBvdXIgaW9uaWNvbnMgZm9udCBmaWxlcywgcmVsYXRpdmUgdG8gdGhlIGJ1aWx0IENTUyBpbiB3d3cvY3NzXG4kaW9uaWNvbnMtZm9udC1wYXRoOiAnLi4vLi4vbGliL2lvbmljL3JlbGVhc2UvZm9udHMnICFkZWZhdWx0O1xuJGZhLWZvbnQtcGF0aDogJy4uLy4uL2xpYi9mb250LWF3ZXNvbWUvZm9udHMnICFkZWZhdWx0O1xuXG4kYnJhbmQ6ICMxZWE0NGY7XG4kYnJhbmQtbGlnaHRlZDogIzM1Mzc0ODtcbiRicmFuZC1kYXJrZW46IGRhcmtlbigkYnJhbmQsIDUlKTsgLy8gIzFlYTQ0ZlxuXG4kYXNzZXJ0aXZlOiAjYmQ0NzQyO1xuJGFzc2VydGl2ZS1saWdodGVkOiAjY2U0ODQzO1xuJGFzc2VydGl2ZS1kYXJrZW46IGRhcmtlbigkYXNzZXJ0aXZlLCA1JSk7XG5cbiRiYWxhbmNlZDogIzMzY2Q1ZjtcbiRiYWxhbmNlZC1saWdodGVkOiAjNDdkMjZmO1xuXG4uYXBwLWtleWJvYXJkLW9wZW4ge1xuXHQuYXBwLWhpZGUtb24ta2V5Ym9hcmQtb3BlbiB7XG5cdFx0ZGlzcGxheTogbm9uZTtcblx0fVxufVxuXG4vLy8vLy8vLy8vLy8vLy9cbi8vLyBNaXhpbnMgLy8vL1xuLy8vLy8vLy8vLy8vLy8vXG5cbkBtaXhpbiBjYWxjKCRwcm9wZXJ0eSwgJGV4cHJlc3Npb24uLi4pIHtcblx0I3skcHJvcGVydHl9OiAtbW96LWNhbGMoI3skZXhwcmVzc2lvbn0pO1xuXHQjeyRwcm9wZXJ0eX06IC13ZWJraXQtY2FsYygjeyRleHByZXNzaW9ufSk7XG5cdCN7JHByb3BlcnR5fTogY2FsYygjeyRleHByZXNzaW9ufSk7XG59XG5cbkBtaXhpbiB0cmFuc2Zvcm0oJHRyYW5zZm9ybXMpIHtcblx0LW1vei10cmFuc2Zvcm06ICR0cmFuc2Zvcm1zO1xuXHQtby10cmFuc2Zvcm06ICR0cmFuc2Zvcm1zO1xuXHQtbXMtdHJhbnNmb3JtOiAkdHJhbnNmb3Jtcztcblx0LXdlYmtpdC10cmFuc2Zvcm06ICR0cmFuc2Zvcm1zO1xuXHR0cmFuc2Zvcm06ICR0cmFuc2Zvcm1zO1xufVxuXG5AbWl4aW4gdmVydGljYWwtYWxpZ24oJHBvc2l0aW9uOiByZWxhdGl2ZSkge1xuXHRwb3NpdGlvbjogJHBvc2l0aW9uO1xuXHR0b3A6IDUwJTtcblx0LXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG5cdC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cblxuQG1peGluIGNlbnRlcigkcG9zaXRpb246IHJlbGF0aXZlKSB7XG5cdHBvc2l0aW9uOiAkcG9zaXRpb247XG5cdHRvcDogNTAlO1xuXHRsZWZ0OiA1MCU7XG5cdC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG5cdC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcblx0dHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5cbkBtaXhpbiB0b3AtY2VudGVyKCRwb3NpdGlvbjogcmVsYXRpdmUpIHtcblx0cG9zaXRpb246ICRwb3NpdGlvbjtcblx0bGVmdDogNTAlO1xuXHQtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDApO1xuXHQtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCk7XG5cdHRvcDogMDtcbn1cblxuQG1peGluIGJvdHRvbS1jZW50ZXIoJHBvc2l0aW9uOiByZWxhdGl2ZSkge1xuXHRwb3NpdGlvbjogJHBvc2l0aW9uO1xuXHRsZWZ0OiA1MCU7XG5cdC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCk7XG5cdC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwKTtcblx0Ym90dG9tOiAwO1xufVxuXG5AbWl4aW4gY2FsYygkcHJvcGVydHksICRleHByZXNzaW9uKSB7XG5cdCN7JHByb3BlcnR5fTogLXdlYmtpdC1jYWxjKCN7JGV4cHJlc3Npb259KTtcblx0I3skcHJvcGVydHl9OiBjYWxjKCN7JGV4cHJlc3Npb259KTtcbn1cblxuQG1peGluIHBsYWNlaG9sZGVyKCRjb2xvcikge1xuXHQmOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcblx0XHRjb2xvcjogJGNvbG9yO1xuXHR9XG5cdCY6Oi1tb3otcGxhY2Vob2xkZXIge1xuXHRcdGNvbG9yOiAkY29sb3I7XG5cdH1cblx0JjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuXHRcdGNvbG9yOiAkY29sb3I7XG5cdH1cbn1cblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8vIE5vcm1hbGl6ZSBIdG1sIEFuZCBCb2R5IC8vL1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG5odG1sLFxuYm9keSB7XG5cdG92ZXJmbG93OiB2aXNpYmxlICFpbXBvcnRhbnQ7XG5cdGJhY2tncm91bmQtY29sb3I6ICRicmFuZC1kYXJrZW4gIWltcG9ydGFudDtcbn1cblxuLy8vLy8vLy8vLy8vLy8vXG4vLyBJb25pYyBBZGQgLy9cbi8vLy8vLy8vLy8vLy8vL1xuXG4ubWVudS1vcGVuIHtcblx0LnNpZGUtbWVudS1jb250ZW50LWx0ciB7XG5cdFx0LXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDI1MHB4LCAwcHgsIDBweCkgIWltcG9ydGFudDtcblx0fVxuXG5cdC5zaWRlLW1lbnUtY29udGVudC1ydGwge1xuXHRcdC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMjUwcHgsIDBweCwgMHB4KSAhaW1wb3J0YW50O1xuXHR9XG59XG5cbi5sb2FkaW5nLWNvbnRhaW5lciAubG9hZGluZyB7XG5cdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuXG5cdC5zcGlubmVyIHtcblx0XHRmaWxsOiAjZmZmO1xuXHRcdHN0cm9rZTogI2ZmZjtcblx0XHRzdmcge1xuXHRcdFx0d2lkdGg6IDQwcHg7XG5cdFx0XHRoZWlnaHQ6IDQwcHg7XG5cdFx0fVxuXHR9XG59XG5cbi5icmlnaHQtdmllIC5sb2FkaW5nLWNvbnRhaW5lciAubG9hZGluZyAuc3Bpbm5lciB7XG5cdGZpbGw6ICRicmFuZDtcblx0c3Ryb2tlOiAkYnJhbmQ7XG59XG5cbi5zd2lwZXItc2xpZGUge1xuXHRpbWcge1xuXHRcdHdpZHRoOiAxMDAlO1xuXHR9XG59XG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8vIEJhciBTdHlsZXMgLy8vXG4vLy8vLy8vLy8vLy8vLy8vLy9cblxuLmJhciB7XG5cdCYuYmFyLWJyYW5kIHtcblx0XHRib3JkZXItYm90dG9tOiAycHggc29saWQgZGFya2VuKCRicmFuZCwgMiUpO1xuXHRcdGJhY2tncm91bmQ6ICRicmFuZCBub25lO1xuXHRcdGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuXHRcdC50aXRsZSB7XG5cdFx0XHRjb2xvcjogd2hpdGU7XG5cdFx0fVxuXHRcdC5idXR0b24taWNvbiBtci0xIHtcblx0XHRcdGNvbG9yOiB3aGl0ZTtcblx0XHR9XG5cdH1cbn1cblxuLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8vIEN1c3RvbSBsaW5rIC8vL1xuLy8vLy8vLy8vLy8vLy8vLy8vXG5cbi5icmFuZC1saW5rIHtcblx0Y29sb3I6ICRicmFuZDtcblx0JjphY3RpdmUge1xuXHRcdGNvbG9yOiAkYnJhbmQtbGlnaHRlZDtcblx0fVxufVxuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vLyBFdmVyYmllIElucHV0IC8vL1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbi5ldmVyYmllLWlucHV0IHtcblx0aGVpZ2h0OiA1N3B4O1xuXHR3aWR0aDogMTAwJTtcblx0Zm9udC1zaXplOiAxNnB4O1xuXHRsaW5lLWhlaWdodDogMjBweDtcblx0Ym9yZGVyOiBzb2xpZCAjNWM1ZjczIDFweDtcblx0Y29sb3I6ICNmZmY7XG5cdGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG5cdGJvcmRlci1yYWRpdXM6IDhweDtcblx0cGFkZGluZzogMjBweDtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHQtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG5cblx0QGluY2x1ZGUgcGxhY2Vob2xkZXIoIzZkNmY4MCk7XG59XG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vLyBBZGQgQnV0dG9uIFN0eWxlcyAvLy9cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuLmJ1dHRvbi5idXR0b24tYnJhbmQge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAkYnJhbmQ7XG5cdGJvcmRlci1jb2xvcjogZGFya2VuKCRicmFuZCwgMyUpO1xuXHRjb2xvcjogI2ZmZjtcblx0Ji5hY3RpdmUsXG5cdCYuYWN0aXZhdGVkIHtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZW4oJGJyYW5kLCAxJSk7XG5cdFx0Ym94LXNoYWRvdzogaW5zZXQgMCAxcHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcblx0fVxufVxuXG4uYnV0dG9uLmJ1dHRvbi1kYXJrLWJyYW5kIHtcblx0YmFja2dyb3VuZC1jb2xvcjogJGJyYW5kLWRhcmtlbjtcblx0Ym9yZGVyLWNvbG9yOiBkYXJrZW4oJGJyYW5kLWRhcmtlbiwgMyUpO1xuXHRjb2xvcjogI2ZmZjtcblx0Ji5hY3RpdmUsXG5cdCYuYWN0aXZhdGVkIHtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZW4oJGJyYW5kLWRhcmtlbiwgMSUpO1xuXHRcdGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG5cdH1cbn1cblxuLmJ1dHRvbi5idXR0b24tYnJhbmQtbGlnaHRlZCB7XG5cdGJhY2tncm91bmQtY29sb3I6ICRicmFuZC1saWdodGVkO1xuXHRib3JkZXItY29sb3I6IGRhcmtlbigkYnJhbmQtbGlnaHRlZCwgMyUpO1xuXHRjb2xvcjogI2ZmZjtcblx0Ji5hY3RpdmUsXG5cdCYuYWN0aXZhdGVkIHtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZW4oJGJyYW5kLWxpZ2h0ZWQsIDElKTtcblx0XHRib3gtc2hhZG93OiBpbnNldCAwIDFweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuXHR9XG59XG5cbi5idXR0b24uYnV0dG9uLWFzc2VydGl2ZSB7XG5cdCYuYWN0aXZlLFxuXHQmLmFjdGl2YXRlZCB7XG5cdFx0Ym9yZGVyLWNvbG9yOiAkYXNzZXJ0aXZlLWRhcmtlbiAhaW1wb3J0YW50O1xuXHR9XG59XG5cbi5idXR0b24uYnV0dG9uLWJhbGFuY2VkIHtcblx0Ji5hY3RpdmUsXG5cdCYuYWN0aXZhdGVkIHtcblx0XHRib3JkZXItY29sb3I6IGRhcmtlbigkYmFsYW5jZWQsIDMlKSAhaW1wb3J0YW50O1xuXHR9XG59XG5cbi5idXR0b24uYnV0dG9uLWJhbGFuY2VkIHtcblx0YmFja2dyb3VuZC1jb2xvcjogZGFya2VuKCRiYWxhbmNlZCwgNSUpO1xufVxuXG4uZXZlcmJpZS1idXR0b24ge1xuXHQvLyBAZXh0ZW5kIC53YXZlcy1lZmZlY3Q7XG5cdC8vIEBleHRlbmQgLndhdmVzLWNsYXNzaWM7XG5cdEBleHRlbmQgLmJ1dHRvbjtcblx0QGV4dGVuZCAuYnV0dG9uLWFzc2VydGl2ZTtcblxuXHRib3JkZXItcmFkaXVzOiA4cHggIWltcG9ydGFudDtcblxuXHRmb250LXNpemU6IDIwcHg7XG5cdHBhZGRpbmc6IDEwcHggMTZweDtcblx0bWFyZ2luLWJvdHRvbTogMDtcblx0bGluZS1oZWlnaHQ6IDM0cHg7XG5cblx0YmFja2dyb3VuZC1jb2xvcjogI2NlNDg0Mztcbn1cblxuLy8vLy8vLy8vLy8vL1xuLy8vIFV0aWxzIC8vL1xuLy8vLy8vLy8vLy8vL1xuXG4uYm90dG9tLTAge1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdGJvdHRvbTogMDtcbn1cblxuLm5vLXBhZGRpbmcge1xuXHRwYWRkaW5nOiAwO1xufVxuXG4ubm8tcGFkZGluZy1yaWdodCB7XG5cdHBhZGRpbmctcmlnaHQ6IDA7XG59XG5cbi5uby1wYWRkaW5nLWxlZnQge1xuXHRwYWRkaW5nLWxlZnQ6IDA7XG59XG5cbi5uby1wYWRkaW5nLXRvcCB7XG5cdHBhZGRpbmctdG9wOiAwO1xufVxuXG4ubm8tcGFkZGluZy1ib3R0b20ge1xuXHRwYWRkaW5nLWJvdHRvbTogMDtcbn1cblxuLnRleHQtYWxpZ24tcmlnaHQge1xuXHR0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLnRleHQtYWxpZ24tY2VudGVyIHtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udGV4dC1hbGlnbi1sZWZ0IHtcblx0dGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLmNvbC0xMDAge1xuXHR3aWR0aDogMTAwJTtcbn1cblxuLmRpc3BsYXktYmxvY2sge1xuXHRkaXNwbGF5OiBibG9jaztcbn1cblxuLmhlYWRlci1iYXItYmlnLXRpdGxlIHtcblx0Zm9udC1zaXplOiAyMnB4ICFpbXBvcnRhbnQ7XG5cdHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xufVxuXG4uYnV0dG9uLWJhci1yaWdodC1jb250YWluZXIge1xuXHR3aWR0aDogMjgwcHg7XG5cdG1hcmdpbi1sZWZ0OiBhdXRvO1xufVxuXG4ucHVsbC1yaWdodCB7XG5cdG1hcmdpbi1sZWZ0OiBhdXRvO1xufVxuXG4ucGx1cy1uYXZiYXItYnV0dG9uIHtcblx0Jjo6YmVmb3JlIHtcblx0XHRmb250LXNpemU6IDI0cHggIWltcG9ydGFudDtcblx0fVxufVxuXG4uYm9yZGVyLWNvbG9yLWJyYW5kIHtcblx0Ym9yZGVyLWNvbG9yOiAkYnJhbmQ7XG59XG5cbi5mbGlwIHtcblx0QGluY2x1ZGUgdHJhbnNmb3JtKHNjYWxlKC0xLCAxKSk7XG59XG5cbi50cmFuc2l0aW9uLW9uLWNvbG9yLWNoYW5nZSB7XG5cdCRzcGVlZDogMC4zcztcblx0LXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yICRzcGVlZCwgYm9yZGVyLWNvbG9yICRzcGVlZCxcblx0XHRjb2xvciAkc3BlZWQ7XG5cdC1tb3otdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAkc3BlZWQsIGJvcmRlci1jb2xvciAkc3BlZWQsIGNvbG9yICRzcGVlZDtcblx0LW8tdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAkc3BlZWQsIGJvcmRlci1jb2xvciAkc3BlZWQsIGNvbG9yICRzcGVlZDtcblx0dHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAkc3BlZWQsIGJvcmRlci1jb2xvciAkc3BlZWQsIGNvbG9yICRzcGVlZDtcbn1cblxuLmhvcml6b250YWwtc3BhY2UtMTAge1xuXHR3aWR0aDogMTBweDtcbn1cblxuLm1hcmdpbi10b3AtYm90dG9tIHtcblx0bWFyZ2luLXRvcDogNXB4O1xuXHRtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbi5tYWludGVuYW5jZS1tZXNzYWdlLWNvbnRhaW5lciB7XG5cdGNvbG9yOiB3aGl0ZTtcblx0cGFkZGluZzogMjBweDtcblxuXHRiYWNrZ3JvdW5kOiAkYnJhbmQ7XG5cblx0ZGlzcGxheTogZmxleDtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0aGVpZ2h0OiAxMDAlO1xufVxuIiwiLmFwcC1rZXlib2FyZC1vcGVuIC5hcHAtaGlkZS1vbi1rZXlib2FyZC1vcGVuIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuaHRtbCxcbmJvZHkge1xuICBvdmVyZmxvdzogdmlzaWJsZSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWE4ZTQ1ICFpbXBvcnRhbnQ7XG59XG5cbi5tZW51LW9wZW4gLnNpZGUtbWVudS1jb250ZW50LWx0ciB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgyNTBweCwgMHB4LCAwcHgpICFpbXBvcnRhbnQ7XG59XG5cbi5tZW51LW9wZW4gLnNpZGUtbWVudS1jb250ZW50LXJ0bCB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMjUwcHgsIDBweCwgMHB4KSAhaW1wb3J0YW50O1xufVxuXG4ubG9hZGluZy1jb250YWluZXIgLmxvYWRpbmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLmxvYWRpbmctY29udGFpbmVyIC5sb2FkaW5nIC5zcGlubmVyIHtcbiAgZmlsbDogI2ZmZjtcbiAgc3Ryb2tlOiAjZmZmO1xufVxuXG4ubG9hZGluZy1jb250YWluZXIgLmxvYWRpbmcgLnNwaW5uZXIgc3ZnIHtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbn1cblxuLmJyaWdodC12aWUgLmxvYWRpbmctY29udGFpbmVyIC5sb2FkaW5nIC5zcGlubmVyIHtcbiAgZmlsbDogIzFlYTQ0ZjtcbiAgc3Ryb2tlOiAjMWVhNDRmO1xufVxuXG4uc3dpcGVyLXNsaWRlIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uYmFyLmJhci1icmFuZCB7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMWM5YjRiO1xuICBiYWNrZ3JvdW5kOiAjMWVhNDRmIG5vbmU7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG4uYmFyLmJhci1icmFuZCAudGl0bGUge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5iYXIuYmFyLWJyYW5kIC5idXR0b24taWNvbiBtci0xIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uYnJhbmQtbGluayB7XG4gIGNvbG9yOiAjMWVhNDRmO1xufVxuXG4uYnJhbmQtbGluazphY3RpdmUge1xuICBjb2xvcjogIzM1Mzc0ODtcbn1cblxuLmV2ZXJiaWUtaW5wdXQge1xuICBoZWlnaHQ6IDU3cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBib3JkZXI6IHNvbGlkICM1YzVmNzMgMXB4O1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBwYWRkaW5nOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbn1cblxuLmV2ZXJiaWUtaW5wdXQ6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBjb2xvcjogIzZkNmY4MDtcbn1cblxuLmV2ZXJiaWUtaW5wdXQ6Oi1tb3otcGxhY2Vob2xkZXIge1xuICBjb2xvcjogIzZkNmY4MDtcbn1cblxuLmV2ZXJiaWUtaW5wdXQ6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICM2ZDZmODA7XG59XG5cbi5idXR0b24uYnV0dG9uLWJyYW5kLCAuYnV0dG9uLWJyYW5kLmV2ZXJiaWUtYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFlYTQ0ZjtcbiAgYm9yZGVyLWNvbG9yOiAjMWM5NzQ5O1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmJ1dHRvbi5idXR0b24tYnJhbmQuYWN0aXZlLCAuYnV0dG9uLWJyYW5kLmFjdGl2ZS5ldmVyYmllLWJ1dHRvbiwgLmJ1dHRvbi5idXR0b24tYnJhbmQuYWN0aXZhdGVkLCAuYnV0dG9uLWJyYW5kLmFjdGl2YXRlZC5ldmVyYmllLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxZGEwNGQ7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbi5idXR0b24uYnV0dG9uLWRhcmstYnJhbmQsIC5idXR0b24tZGFyay1icmFuZC5ldmVyYmllLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxYThlNDU7XG4gIGJvcmRlci1jb2xvcjogIzE4ODIzZTtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5idXR0b24uYnV0dG9uLWRhcmstYnJhbmQuYWN0aXZlLCAuYnV0dG9uLWRhcmstYnJhbmQuYWN0aXZlLmV2ZXJiaWUtYnV0dG9uLCAuYnV0dG9uLmJ1dHRvbi1kYXJrLWJyYW5kLmFjdGl2YXRlZCwgLmJ1dHRvbi1kYXJrLWJyYW5kLmFjdGl2YXRlZC5ldmVyYmllLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxOThhNDM7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbi5idXR0b24uYnV0dG9uLWJyYW5kLWxpZ2h0ZWQsIC5idXR0b24tYnJhbmQtbGlnaHRlZC5ldmVyYmllLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNTM3NDg7XG4gIGJvcmRlci1jb2xvcjogIzJmMzAzZjtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5idXR0b24uYnV0dG9uLWJyYW5kLWxpZ2h0ZWQuYWN0aXZlLCAuYnV0dG9uLWJyYW5kLWxpZ2h0ZWQuYWN0aXZlLmV2ZXJiaWUtYnV0dG9uLCAuYnV0dG9uLmJ1dHRvbi1icmFuZC1saWdodGVkLmFjdGl2YXRlZCwgLmJ1dHRvbi1icmFuZC1saWdodGVkLmFjdGl2YXRlZC5ldmVyYmllLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM1NDU7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbi5idXR0b24uYnV0dG9uLWFzc2VydGl2ZS5hY3RpdmUsIC5hY3RpdmUuZXZlcmJpZS1idXR0b24sIC5idXR0b24uYnV0dG9uLWFzc2VydGl2ZS5hY3RpdmF0ZWQsIC5hY3RpdmF0ZWQuZXZlcmJpZS1idXR0b24ge1xuICBib3JkZXItY29sb3I6ICNhYTQwM2IgIWltcG9ydGFudDtcbn1cblxuLmJ1dHRvbi5idXR0b24tYmFsYW5jZWQuYWN0aXZlLCAuYnV0dG9uLWJhbGFuY2VkLmFjdGl2ZS5ldmVyYmllLWJ1dHRvbiwgLmJ1dHRvbi5idXR0b24tYmFsYW5jZWQuYWN0aXZhdGVkLCAuYnV0dG9uLWJhbGFuY2VkLmFjdGl2YXRlZC5ldmVyYmllLWJ1dHRvbiB7XG4gIGJvcmRlci1jb2xvcjogIzJmYzE1OSAhaW1wb3J0YW50O1xufVxuXG4uYnV0dG9uLmJ1dHRvbi1iYWxhbmNlZCwgLmJ1dHRvbi1iYWxhbmNlZC5ldmVyYmllLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyZGI5NTU7XG59XG5cbi5ldmVyYmllLWJ1dHRvbiB7XG4gIGJvcmRlci1yYWRpdXM6IDhweCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDIwcHg7XG4gIHBhZGRpbmc6IDEwcHggMTZweDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgbGluZS1oZWlnaHQ6IDM0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjZTQ4NDM7XG59XG5cbi5ib3R0b20tMCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xufVxuXG4ubm8tcGFkZGluZyB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5uby1wYWRkaW5nLXJpZ2h0IHtcbiAgcGFkZGluZy1yaWdodDogMDtcbn1cblxuLm5vLXBhZGRpbmctbGVmdCB7XG4gIHBhZGRpbmctbGVmdDogMDtcbn1cblxuLm5vLXBhZGRpbmctdG9wIHtcbiAgcGFkZGluZy10b3A6IDA7XG59XG5cbi5uby1wYWRkaW5nLWJvdHRvbSB7XG4gIHBhZGRpbmctYm90dG9tOiAwO1xufVxuXG4udGV4dC1hbGlnbi1yaWdodCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4udGV4dC1hbGlnbi1jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi50ZXh0LWFsaWduLWxlZnQge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4uY29sLTEwMCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZGlzcGxheS1ibG9jayB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uaGVhZGVyLWJhci1iaWctdGl0bGUge1xuICBmb250LXNpemU6IDIycHggIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG59XG5cbi5idXR0b24tYmFyLXJpZ2h0LWNvbnRhaW5lciB7XG4gIHdpZHRoOiAyODBweDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG59XG5cbi5wdWxsLXJpZ2h0IHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG59XG5cbi5wbHVzLW5hdmJhci1idXR0b246OmJlZm9yZSB7XG4gIGZvbnQtc2l6ZTogMjRweCAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWNvbG9yLWJyYW5kIHtcbiAgYm9yZGVyLWNvbG9yOiAjMWVhNDRmO1xufVxuXG4uZmxpcCB7XG4gIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgtMSwgMSk7XG4gIC1vLXRyYW5zZm9ybTogc2NhbGUoLTEsIDEpO1xuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgtMSwgMSk7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgtMSwgMSk7XG4gIHRyYW5zZm9ybTogc2NhbGUoLTEsIDEpO1xufVxuXG4udHJhbnNpdGlvbi1vbi1jb2xvci1jaGFuZ2Uge1xuICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcywgYm9yZGVyLWNvbG9yIDAuM3MsIGNvbG9yIDAuM3M7XG4gIC1tb3otdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzLCBib3JkZXItY29sb3IgMC4zcywgY29sb3IgMC4zcztcbiAgLW8tdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzLCBib3JkZXItY29sb3IgMC4zcywgY29sb3IgMC4zcztcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzLCBib3JkZXItY29sb3IgMC4zcywgY29sb3IgMC4zcztcbn1cblxuLmhvcml6b250YWwtc3BhY2UtMTAge1xuICB3aWR0aDogMTBweDtcbn1cblxuLm1hcmdpbi10b3AtYm90dG9tIHtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbi5tYWludGVuYW5jZS1tZXNzYWdlLWNvbnRhaW5lciB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMjBweDtcbiAgYmFja2dyb3VuZDogIzFlYTQ0ZjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ubWFrZS1vcmRlci13cmFwcGVyIHtcbiAgYmFja2dyb3VuZDogd2hpdGUgIWltcG9ydGFudDtcbn1cblxuLm1ha2Utb3JkZXItd3JhcHBlciAuc21hcnQtdGFibGUgdHIubmcyLXNtYXJ0LXRpdGxlcyA+IHRoLm5nMi1zbWFydC10aC5pbWcsXG4ubWFrZS1vcmRlci13cmFwcGVyIC5zbWFydC10YWJsZSB0ci5uZzItc21hcnQtdGl0bGVzID4gdGgubmcyLXNtYXJ0LXRoLnByaWNlLFxuLm1ha2Utb3JkZXItd3JhcHBlciAuc21hcnQtdGFibGUgdHIubmcyLXNtYXJ0LXRpdGxlcyA+IHRoLm5nMi1zbWFydC10aC5hdmFpbGFibGUsXG4ubWFrZS1vcmRlci13cmFwcGVyIC5zbWFydC10YWJsZSB0ci5uZzItc21hcnQtdGl0bGVzID4gdGgubmcyLXNtYXJ0LXRoLmFtb3VudCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLm1ha2Utb3JkZXItd3JhcHBlciAuc21hcnQtdGFibGUgdHIubmcyLXNtYXJ0LXRpdGxlcyA+IHRoLm5nMi1zbWFydC10aC5pbWcgPiBuZzItc3QtY29sdW1uLXRpdGxlID4gZGl2ID4gbmcyLXNtYXJ0LXRhYmxlLXRpdGxlID4gYSB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5tYWtlLW9yZGVyLXdyYXBwZXIgLnNtYXJ0LXRhYmxlIHRyID4gdGQ6bnRoLWNoaWxkKG4gKyAzKSxcbi5tYWtlLW9yZGVyLXdyYXBwZXIgLnNtYXJ0LXRhYmxlIHRyID4gdGQ6bnRoLWNoaWxkKDEpIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubWFrZS1vcmRlci13cmFwcGVyIHRhYmxlIHtcbiAgbWFyZ2luOiAwcHggYXV0bztcbn1cblxuLm1ha2Utb3JkZXItd3JhcHBlciB0YWJsZSB0ZCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5tYWtlLW9yZGVyLXdyYXBwZXIgLm5nMi1zbWFydC10aXRsZXMge1xuICBoZWlnaHQ6IDUwcHggIWltcG9ydGFudDtcbn1cblxuLm1ha2Utb3JkZXItd3JhcHBlciBuYXYubmcyLXNtYXJ0LXBhZ2luYXRpb24tbmF2IHtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5tYWtlLW9yZGVyLXdyYXBwZXIgbGkge1xuICB3aWR0aDogNTAlICFpbXBvcnRhbnQ7XG59XG5cbi5tYWtlLW9yZGVyLXdyYXBwZXIgLm5nMi1zbWFydC10aXRsZXMge1xuICBoZWlnaHQ6IDUwcHggIWltcG9ydGFudDtcbn1cblxuLm1ha2Utb3JkZXItd3JhcHBlciAucGFnaW5hdGlvbiB7XG4gIGxpbmUtaGVpZ2h0OiAxICFpbXBvcnRhbnQ7XG59XG5cbi5vcmRlci1idXR0b24uYnV0dG9uLCAub3JkZXItYnV0dG9uLmV2ZXJiaWUtYnV0dG9uIHtcbiAgbWFyZ2luLXRvcDogMjBweCAhaW1wb3J0YW50O1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMC4ycmVtIDEuMnJlbTtcbiAgZm9udC1zaXplOiAxLjJyZW07XG59XG4iLCJAaW1wb3J0ICd+QGV2ZXItcGxhdGZvcm0vY29tbW9uLWFuZ3VsYXIvc3JjL3Njc3MvZXZlcmJpZS5jb21tb24nO1xuXG4ubWFrZS1vcmRlci13cmFwcGVyIHtcblx0YmFja2dyb3VuZDogd2hpdGUgIWltcG9ydGFudDtcblx0LnNtYXJ0LXRhYmxlIHtcblx0XHR0ci5uZzItc21hcnQtdGl0bGVzID4ge1xuXHRcdFx0dGgubmcyLXNtYXJ0LXRoLmltZyxcblx0XHRcdHRoLm5nMi1zbWFydC10aC5wcmljZSxcblx0XHRcdHRoLm5nMi1zbWFydC10aC5hdmFpbGFibGUsXG5cdFx0XHR0aC5uZzItc21hcnQtdGguYW1vdW50IHtcblx0XHRcdFx0Ly8gIFRpdGxlcyBmb3IgJ3ByaWNlJywgJ2F2YWlsYWJsZScgYW5kICdhbW91bnQnLlxuXHRcdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0XHR9XG5cblx0XHRcdHRoLm5nMi1zbWFydC10aC5pbWdcblx0XHRcdFx0PiBuZzItc3QtY29sdW1uLXRpdGxlXG5cdFx0XHRcdD4gZGl2XG5cdFx0XHRcdD4gbmcyLXNtYXJ0LXRhYmxlLXRpdGxlXG5cdFx0XHRcdD4gYSB7XG5cdFx0XHRcdC8vIEltYWdlIHRpdGxlIHBhZGRpbmcgMFxuXHRcdFx0XHRwYWRkaW5nOiAwO1xuXHRcdFx0fVxuXHRcdH1cblx0XHR0ciA+IHtcblx0XHRcdHRkOm50aC1jaGlsZChuICsgMyksXG5cdFx0XHR0ZDpudGgtY2hpbGQoMSkge1xuXHRcdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdHRhYmxlIHtcblx0XHRtYXJnaW46IDBweCBhdXRvO1xuXHRcdHRkIHtcblx0XHRcdHRleHQtYWxpZ246IGxlZnQ7XG5cdFx0fVxuXHR9XG5cblx0Lm5nMi1zbWFydC10aXRsZXMge1xuXHRcdGhlaWdodDogNTBweCAhaW1wb3J0YW50O1xuXHR9XG5cblx0bmF2Lm5nMi1zbWFydC1wYWdpbmF0aW9uLW5hdiB7XG5cdFx0bWFyZ2luOiAwIGF1dG87XG5cdH1cblxuXHRsaSB7XG5cdFx0d2lkdGg6IDUwJSAhaW1wb3J0YW50O1xuXHR9XG5cblx0Lm5nMi1zbWFydC10aXRsZXMge1xuXHRcdGhlaWdodDogNTBweCAhaW1wb3J0YW50O1xuXHR9XG5cblx0LnBhZ2luYXRpb24ge1xuXHRcdGxpbmUtaGVpZ2h0OiAxICFpbXBvcnRhbnQ7XG5cdH1cbn1cblxuLm9yZGVyLWJ1dHRvbi5idXR0b24ge1xuXHRtYXJnaW4tdG9wOiAyMHB4ICFpbXBvcnRhbnQ7XG5cdGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuXG5cdHBhZGRpbmc6IDAuMnJlbSAxLjJyZW07XG5cdGZvbnQtc2l6ZTogMS4ycmVtO1xufVxuIl19 */");

/***/ }),

/***/ "./src/components/order/make-order/make-order.component.ts":
/*!*****************************************************************!*\
  !*** ./src/components/order/make-order/make-order.component.ts ***!
  \*****************************************************************/
/*! exports provided: MakeOrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MakeOrderComponent", function() { return MakeOrderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-smart-table */ "./node_modules/ng2-smart-table/fesm5/ng2-smart-table.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _make_order_input_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./make-order-input.component */ "./src/components/order/make-order/make-order-input.component.ts");
/* harmony import */ var _modules_client_common_angular2_routers_warehouse_products_router_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @modules/client.common.angular2/routers/warehouse-products-router.service */ "../common-angular/src/routers/warehouse-products-router.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _modules_client_common_angular2_locale_product_locales_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @modules/client.common.angular2/locale/product-locales.service */ "../common-angular/src/locale/product-locales.service.ts");
/* harmony import */ var _services_warehouse_orders_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/warehouse-orders.service */ "./src/services/warehouse-orders.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");











var MakeOrderComponent = (function () {
    function MakeOrderComponent(_warehouseProductsRouter, _productLocaleService, _warehouseOrdersService, _alertController, _translateService) {
        this._warehouseProductsRouter = _warehouseProductsRouter;
        this._productLocaleService = _productLocaleService;
        this._warehouseOrdersService = _warehouseOrdersService;
        this._alertController = _alertController;
        this._translateService = _translateService;
        this.ngDestroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.isOrderAllowedEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.sourceSmartTable = new ng2_smart_table__WEBPACK_IMPORTED_MODULE_2__["LocalDataSource"]();
        this._orderProducts = [];
        this._warehouseProducts = [];
        this._ngDestroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    Object.defineProperty(MakeOrderComponent.prototype, "canOrder", {
        get: function () {
            return this._orderProducts.some(function (product) { return product.count > 0; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MakeOrderComponent.prototype, "warehouseId", {
        get: function () {
            return localStorage.getItem('_warehouseId');
        },
        enumerable: true,
        configurable: true
    });
    MakeOrderComponent.prototype.ngOnInit = function () {
        this._loadSettingsSmartTable();
        this._loadWarehouseProducts();
    };
    MakeOrderComponent.prototype.makeOrder = function () {
        var _this = this;
        var orderProducts = this._orderProducts.filter(function (_a) {
            var count = _a.count;
            return count > 0;
        });
        this._warehouseOrdersService
            .createOrder({
            userId: this.customerId,
            warehouseId: this.warehouseId,
            products: orderProducts,
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this._ngDestroy$))
            .subscribe(function () {
            _this._showNotification("User with id '" + _this.customerId + "' finish the order");
            _this.orderFinishedEmitter.emit();
        }, function () {
            _this._showNotification('Something is wrong, unable to place order!');
        });
    };
    MakeOrderComponent.prototype._compareByAvailableProducts = function (_, first, second) {
        var regex = /<div class="text-center"><div class="badge badge-pill badge-secondary text-center">([0-9]+)<\/div><\/div>/gm;
        var matchFirst = +regex.exec(first)[1];
        regex.lastIndex = 0;
        var matchSecond = +regex.exec(second)[1];
        return _ > 0 ? matchFirst - matchSecond : matchSecond - matchFirst;
    };
    MakeOrderComponent.prototype._showNotification = function (message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var alert;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this._alertController.create({
                            message: message,
                            buttons: ['OK'],
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4, alert.present()];
                    case 2:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    MakeOrderComponent.prototype._loadWarehouseProducts = function () {
        var _this = this;
        this._warehouseProductsRouter
            .get(this.warehouseId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this._ngDestroy$))
            .subscribe(function (p) {
            Object.assign(_this._warehouseProducts, p);
            _this._loadDataSmartTable();
        });
    };
    MakeOrderComponent.prototype._loadDataSmartTable = function () {
        var _this = this;
        this._orderProducts = this._warehouseProducts.map(function (wp) {
            return {
                productId: wp.productId,
                count: 0,
            };
        });
        var productsData = this._warehouseProducts.map(function (wp) {
            return {
                img: "\n\t\t\t\t\t\t<img src=\"" + _this._getTranslate(wp.product['images']) + "\" height=\"68px\"/>\n\t\t\t\t\t",
                product: "\n\t\t\t\t\t\t<span class=\"float-left\">" + _this._getTranslate(wp.product['title']) + "</span>\n\t\t\t\t\t",
                price: "<div class=\"text-center\">$" + wp.price + "</div>",
                available: "\n\t\t\t\t\t\t<div class=\"text-center\"><div class=\"badge badge-pill badge-secondary text-center\">" + wp.count + "</div></div>\n\t\t\t\t\t",
                amount: { productId: wp.productId, available: wp.count },
            };
        });
        this.sourceSmartTable.setSort([
            {
                field: 'available',
                direction: 'desc',
                compare: this._compareByAvailableProducts,
            },
        ]);
        this.sourceSmartTable.load(productsData);
    };
    MakeOrderComponent.prototype._getTranslate = function (members) {
        return this._productLocaleService.getTranslate(members);
    };
    MakeOrderComponent.prototype._loadSettingsSmartTable = function () {
        var _this = this;
        var columnTitlePrefix = 'WAREHOUSE_VIEW.NEW_ORDER_VIEW.';
        var getTranslate = function (name) {
            return _this._translateService.get(columnTitlePrefix + name);
        };
        Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["forkJoin"])(this._translateService.get('Id'), getTranslate('IMAGE'), getTranslate('PRODUCT'), getTranslate('PRICE'), getTranslate('AVAILABLE'), getTranslate('AMOUNT'))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.ngDestroy$))
            .subscribe(function (_a) {
            var id = _a[0], image = _a[1], product = _a[2], price = _a[3], available = _a[4], amount = _a[5];
            _this.settingsSmartTable = {
                actions: false,
                pager: { perPage: 3 },
                columns: {
                    img: {
                        title: image,
                        filter: false,
                        type: 'html',
                        width: '50px',
                    },
                    product: {
                        title: product,
                        type: 'html',
                    },
                    price: {
                        title: price,
                        filter: false,
                        type: 'html',
                        compareFunction: function (_, first, second) {
                            var matchFirst = +first.replace('$', '');
                            var matchSecond = +second.replace('$', '');
                            return _ > 0
                                ? matchFirst - matchSecond
                                : matchSecond - matchFirst;
                        },
                    },
                    available: {
                        title: available,
                        type: 'html',
                        filter: false,
                        compareFunction: _this._compareByAvailableProducts,
                    },
                    amount: {
                        title: amount,
                        filter: false,
                        type: 'custom',
                        renderComponent: _make_order_input_component__WEBPACK_IMPORTED_MODULE_4__["MakeOrderInputComponent"],
                        onComponentInitFunction: function (childInstance) {
                            childInstance.amount
                                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(_this._ngDestroy$))
                                .subscribe(function (count) {
                                var wProduct = _this._orderProducts.find(function (_a) {
                                    var productId = _a.productId;
                                    return productId ===
                                        childInstance.productId;
                                });
                                wProduct.count = count;
                                _this.isOrderAllowedEmitter.emit(_this.canOrder);
                            });
                        },
                    },
                },
            };
        });
    };
    MakeOrderComponent.prototype.ngOnDestroy = function () {
        this.ngDestroy$.next();
        this.ngDestroy$.complete();
    };
    MakeOrderComponent.ctorParameters = function () { return [
        { type: _modules_client_common_angular2_routers_warehouse_products_router_service__WEBPACK_IMPORTED_MODULE_5__["WarehouseProductsRouter"] },
        { type: _modules_client_common_angular2_locale_product_locales_service__WEBPACK_IMPORTED_MODULE_7__["ProductLocalesService"] },
        { type: _services_warehouse_orders_service__WEBPACK_IMPORTED_MODULE_8__["WarehouseOrdersService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["AlertController"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], MakeOrderComponent.prototype, "customerId", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], MakeOrderComponent.prototype, "orderFinishedEmitter", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], MakeOrderComponent.prototype, "isOrderAllowedEmitter", void 0);
    MakeOrderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'make-order',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./make-order.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/components/order/make-order/make-order.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./make-order.component.scss */ "./src/components/order/make-order/make-order.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_modules_client_common_angular2_routers_warehouse_products_router_service__WEBPACK_IMPORTED_MODULE_5__["WarehouseProductsRouter"],
            _modules_client_common_angular2_locale_product_locales_service__WEBPACK_IMPORTED_MODULE_7__["ProductLocalesService"],
            _services_warehouse_orders_service__WEBPACK_IMPORTED_MODULE_8__["WarehouseOrdersService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["AlertController"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"]])
    ], MakeOrderComponent);
    return MakeOrderComponent;
}());



/***/ }),

/***/ "./src/components/order/order.component.scss":
/*!***************************************************!*\
  !*** ./src/components/order/order.component.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".order-component {\n  background-color: #f3f3f3;\n}\n\n.order-component .order-segment-title {\n  margin-bottom: 15px;\n  margin-top: 0;\n  padding: 0;\n}\n\n.order-component ion-segment-button.segment-button-checked {\n  opacity: 1 !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvZC9Xb3JrL0FuZ3VsYXIvTmV3IGZvbGRlciAoMikvRG9sY2VHcm9jZXJ5L3BhY2thZ2VzL21lcmNoYW50LXRhYmxldC1pb25pYy9zcmMvY29tcG9uZW50cy9vcmRlci9vcmRlci5jb21wb25lbnQuc2NzcyIsInNyYy9jb21wb25lbnRzL29yZGVyL29yZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MseUJBQXlCO0FDQzFCOztBREZBO0VBR0UsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixVQUFVO0FDR1o7O0FEUkE7RUFTRSxxQkFBcUI7QUNHdkIiLCJmaWxlIjoic3JjL2NvbXBvbmVudHMvb3JkZXIvb3JkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIub3JkZXItY29tcG9uZW50IHtcblx0YmFja2dyb3VuZC1jb2xvcjogI2YzZjNmMztcblx0Lm9yZGVyLXNlZ21lbnQtdGl0bGUge1xuXHRcdG1hcmdpbi1ib3R0b206IDE1cHg7XG5cdFx0bWFyZ2luLXRvcDogMDtcblx0XHRwYWRkaW5nOiAwO1xuXHR9XG5cblx0aW9uLXNlZ21lbnQtYnV0dG9uLnNlZ21lbnQtYnV0dG9uLWNoZWNrZWQge1xuXHRcdG9wYWNpdHk6IDEgIWltcG9ydGFudDtcblx0fVxufVxuIiwiLm9yZGVyLWNvbXBvbmVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmM2YzZjM7XG59XG5cbi5vcmRlci1jb21wb25lbnQgLm9yZGVyLXNlZ21lbnQtdGl0bGUge1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBtYXJnaW4tdG9wOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG4ub3JkZXItY29tcG9uZW50IGlvbi1zZWdtZW50LWJ1dHRvbi5zZWdtZW50LWJ1dHRvbi1jaGVja2VkIHtcbiAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xufVxuIl19 */");

/***/ }),

/***/ "./src/components/order/order.component.ts":
/*!*************************************************!*\
  !*** ./src/components/order/order.component.ts ***!
  \*************************************************/
/*! exports provided: OrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderComponent", function() { return OrderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OrderComponent = (function () {
    function OrderComponent() {
        this.availSegmentOptions = {
            options: 'options',
            selectAdd: 'select/add',
            order: 'order',
        };
        this.orderFinishedEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.segmentSection = this.availSegmentOptions.options;
    }
    OrderComponent.prototype.ngOnInit = function () { };
    OrderComponent.prototype.onOptionSelected = function (optionBit) {
        this.segmentSection = this.availSegmentOptions.selectAdd;
        this.selectAddCustomerOption = optionBit;
    };
    OrderComponent.prototype.onCustomerSelected = function (customerId) {
        this.segmentSection = this.availSegmentOptions.order;
        this.customerIdToOrder = customerId;
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], OrderComponent.prototype, "orderFinishedEmitter", void 0);
    OrderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'order',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./order.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/components/order/order.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./order.component.scss */ "./src/components/order/order.component.scss")).default]
        })
    ], OrderComponent);
    return OrderComponent;
}());



/***/ }),

/***/ "./src/components/order/order.module.ts":
/*!**********************************************!*\
  !*** ./src/components/order/order.module.ts ***!
  \**********************************************/
/*! exports provided: OrderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderModule", function() { return OrderModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _choose_customer_option_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./choose-customer-option.component */ "./src/components/order/choose-customer-option.component.ts");
/* harmony import */ var _make_order_make_order_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./make-order/make-order.component */ "./src/components/order/make-order/make-order.component.ts");
/* harmony import */ var _select_add_customer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./select-add-customer.component */ "./src/components/order/select-add-customer.component.ts");
/* harmony import */ var _order_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./order.component */ "./src/components/order/order.component.ts");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-smart-table */ "./node_modules/ng2-smart-table/fesm5/ng2-smart-table.js");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/users.service */ "./src/services/users.service.ts");
/* harmony import */ var _shared_user_mutation_user_mutation_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../@shared/user/mutation/user-mutation.module */ "./src/@shared/user/mutation/user-mutation.module.ts");
/* harmony import */ var _address_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./address.component */ "./src/components/order/address.component.ts");
/* harmony import */ var _make_order_make_order_input_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./make-order/make-order-input.component */ "./src/components/order/make-order/make-order-input.component.ts");
/* harmony import */ var _services_warehouse_orders_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/warehouse-orders.service */ "./src/services/warehouse-orders.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
















var OrderModule = (function () {
    function OrderModule() {
    }
    OrderModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                ng2_smart_table__WEBPACK_IMPORTED_MODULE_6__["Ng2SmartTableModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_13__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_14__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"],
                _shared_user_mutation_user_mutation_module__WEBPACK_IMPORTED_MODULE_8__["UserMutationModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateModule"].forChild(),
            ],
            declarations: [
                _order_component__WEBPACK_IMPORTED_MODULE_5__["OrderComponent"],
                _choose_customer_option_component__WEBPACK_IMPORTED_MODULE_2__["ChooseCustomerOptionComponent"],
                _select_add_customer_component__WEBPACK_IMPORTED_MODULE_4__["SelectAddCustomerComponent"],
                _make_order_make_order_component__WEBPACK_IMPORTED_MODULE_3__["MakeOrderComponent"],
                _make_order_make_order_input_component__WEBPACK_IMPORTED_MODULE_10__["MakeOrderInputComponent"],
                _address_component__WEBPACK_IMPORTED_MODULE_9__["AddressComponent"],
            ],
            entryComponents: [_address_component__WEBPACK_IMPORTED_MODULE_9__["AddressComponent"], _make_order_make_order_input_component__WEBPACK_IMPORTED_MODULE_10__["MakeOrderInputComponent"]],
            exports: [
                _order_component__WEBPACK_IMPORTED_MODULE_5__["OrderComponent"],
                _choose_customer_option_component__WEBPACK_IMPORTED_MODULE_2__["ChooseCustomerOptionComponent"],
                _select_add_customer_component__WEBPACK_IMPORTED_MODULE_4__["SelectAddCustomerComponent"],
                _make_order_make_order_component__WEBPACK_IMPORTED_MODULE_3__["MakeOrderComponent"],
            ],
            providers: [_services_users_service__WEBPACK_IMPORTED_MODULE_7__["UsersService"], _services_warehouse_orders_service__WEBPACK_IMPORTED_MODULE_11__["WarehouseOrdersService"]],
        })
    ], OrderModule);
    return OrderModule;
}());



/***/ }),

/***/ "./src/components/order/select-add-customer.component.scss":
/*!*****************************************************************!*\
  !*** ./src/components/order/select-add-customer.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".select-add-customer-component .customers-table {\n  background: white !important;\n}\n\n.select-add-customer-component .customers-table table {\n  margin: 0px auto;\n}\n\n.select-add-customer-component .customers-table table td {\n  text-align: left;\n}\n\n.select-add-customer-component .customers-table .ng2-smart-titles {\n  height: 50px !important;\n}\n\n.select-add-customer-component .customers-table nav.ng2-smart-pagination-nav {\n  margin: 0 auto;\n}\n\n.select-add-customer-component .customers-table li {\n  width: 50% !important;\n}\n\n.select-add-customer-component .customers-table .ng2-smart-titles {\n  height: 50px !important;\n}\n\n.select-add-customer-component .customers-table .pagination {\n  line-height: 1 !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvZC9Xb3JrL0FuZ3VsYXIvTmV3IGZvbGRlciAoMikvRG9sY2VHcm9jZXJ5L3BhY2thZ2VzL21lcmNoYW50LXRhYmxldC1pb25pYy9zcmMvY29tcG9uZW50cy9vcmRlci9zZWxlY3QtYWRkLWN1c3RvbWVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2NvbXBvbmVudHMvb3JkZXIvc2VsZWN0LWFkZC1jdXN0b21lci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVFLDRCQUE0QjtBQ0E5Qjs7QURGQTtFQUlHLGdCQUFnQjtBQ0VuQjs7QUROQTtFQU9JLGdCQUFnQjtBQ0dwQjs7QURWQTtFQVlHLHVCQUF1QjtBQ0UxQjs7QURkQTtFQWdCRyxjQUFjO0FDRWpCOztBRGxCQTtFQW9CRyxxQkFBcUI7QUNFeEI7O0FEdEJBO0VBd0JHLHVCQUF1QjtBQ0UxQjs7QUQxQkE7RUE0QkcseUJBQXlCO0FDRTVCIiwiZmlsZSI6InNyYy9jb21wb25lbnRzL29yZGVyL3NlbGVjdC1hZGQtY3VzdG9tZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VsZWN0LWFkZC1jdXN0b21lci1jb21wb25lbnQge1xuXHQuY3VzdG9tZXJzLXRhYmxlIHtcblx0XHRiYWNrZ3JvdW5kOiB3aGl0ZSAhaW1wb3J0YW50O1xuXHRcdHRhYmxlIHtcblx0XHRcdG1hcmdpbjogMHB4IGF1dG87XG5cblx0XHRcdHRkIHtcblx0XHRcdFx0dGV4dC1hbGlnbjogbGVmdDtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQubmcyLXNtYXJ0LXRpdGxlcyB7XG5cdFx0XHRoZWlnaHQ6IDUwcHggIWltcG9ydGFudDtcblx0XHR9XG5cblx0XHRuYXYubmcyLXNtYXJ0LXBhZ2luYXRpb24tbmF2IHtcblx0XHRcdG1hcmdpbjogMCBhdXRvO1xuXHRcdH1cblxuXHRcdGxpIHtcblx0XHRcdHdpZHRoOiA1MCUgIWltcG9ydGFudDtcblx0XHR9XG5cblx0XHQubmcyLXNtYXJ0LXRpdGxlcyB7XG5cdFx0XHRoZWlnaHQ6IDUwcHggIWltcG9ydGFudDtcblx0XHR9XG5cblx0XHQucGFnaW5hdGlvbiB7XG5cdFx0XHRsaW5lLWhlaWdodDogMSAhaW1wb3J0YW50O1xuXHRcdH1cblx0fVxufVxuIiwiLnNlbGVjdC1hZGQtY3VzdG9tZXItY29tcG9uZW50IC5jdXN0b21lcnMtdGFibGUge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG4uc2VsZWN0LWFkZC1jdXN0b21lci1jb21wb25lbnQgLmN1c3RvbWVycy10YWJsZSB0YWJsZSB7XG4gIG1hcmdpbjogMHB4IGF1dG87XG59XG5cbi5zZWxlY3QtYWRkLWN1c3RvbWVyLWNvbXBvbmVudCAuY3VzdG9tZXJzLXRhYmxlIHRhYmxlIHRkIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLnNlbGVjdC1hZGQtY3VzdG9tZXItY29tcG9uZW50IC5jdXN0b21lcnMtdGFibGUgLm5nMi1zbWFydC10aXRsZXMge1xuICBoZWlnaHQ6IDUwcHggIWltcG9ydGFudDtcbn1cblxuLnNlbGVjdC1hZGQtY3VzdG9tZXItY29tcG9uZW50IC5jdXN0b21lcnMtdGFibGUgbmF2Lm5nMi1zbWFydC1wYWdpbmF0aW9uLW5hdiB7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4uc2VsZWN0LWFkZC1jdXN0b21lci1jb21wb25lbnQgLmN1c3RvbWVycy10YWJsZSBsaSB7XG4gIHdpZHRoOiA1MCUgIWltcG9ydGFudDtcbn1cblxuLnNlbGVjdC1hZGQtY3VzdG9tZXItY29tcG9uZW50IC5jdXN0b21lcnMtdGFibGUgLm5nMi1zbWFydC10aXRsZXMge1xuICBoZWlnaHQ6IDUwcHggIWltcG9ydGFudDtcbn1cblxuLnNlbGVjdC1hZGQtY3VzdG9tZXItY29tcG9uZW50IC5jdXN0b21lcnMtdGFibGUgLnBhZ2luYXRpb24ge1xuICBsaW5lLWhlaWdodDogMSAhaW1wb3J0YW50O1xufVxuIl19 */");

/***/ }),

/***/ "./src/components/order/select-add-customer.component.ts":
/*!***************************************************************!*\
  !*** ./src/components/order/select-add-customer.component.ts ***!
  \***************************************************************/
/*! exports provided: SelectAddCustomerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectAddCustomerComponent", function() { return SelectAddCustomerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-smart-table */ "./node_modules/ng2-smart-table/fesm5/ng2-smart-table.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/users.service */ "./src/services/users.service.ts");
/* harmony import */ var _address_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./address.component */ "./src/components/order/address.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");








var SelectAddCustomerComponent = (function () {
    function SelectAddCustomerComponent(_usersService, _translateService) {
        this._usersService = _usersService;
        this._translateService = _translateService;
        this.ngDestroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.sourceSmartTable = new ng2_smart_table__WEBPACK_IMPORTED_MODULE_2__["LocalDataSource"]();
        this.customerIdEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this._noInfoSign = '';
        this._ngDestroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    }
    Object.defineProperty(SelectAddCustomerComponent.prototype, "isSelectedFromExisting", {
        get: function () {
            return this.customerOptionSelected === 0;
        },
        enumerable: true,
        configurable: true
    });
    SelectAddCustomerComponent.prototype.ngOnInit = function () {
        this._setupSettingsSmartTable();
        this._loadDataSmartTable();
    };
    SelectAddCustomerComponent.prototype.selectFromExisting = function (ev) {
        this.broadcastCustomerId(ev.data.id);
    };
    SelectAddCustomerComponent.prototype.broadcastCustomerId = function (customerId) {
        this.customerIdEmitter.emit(customerId);
    };
    SelectAddCustomerComponent.prototype._setupSettingsSmartTable = function () {
        var _this = this;
        var columnTitlePrefix = 'WAREHOUSE_VIEW.NEW_ORDER_VIEW.';
        var getTranslate = function (name) {
            return _this._translateService.get(columnTitlePrefix + name);
        };
        Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["forkJoin"])(this._translateService.get('Id'), getTranslate('FULL_NAME'), getTranslate('EMAIL'), getTranslate('PHONE'), getTranslate('ADDRESS'))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.ngDestroy$))
            .subscribe(function (_a) {
            var id = _a[0], fullName = _a[1], email = _a[2], phone = _a[3], address = _a[4];
            _this.settingsSmartTable = {
                actions: false,
                filters: false,
                pager: {
                    perPage: 3,
                },
                columns: {
                    name: { title: fullName },
                    email: { title: email },
                    phone: { title: phone },
                    address: {
                        title: address,
                        type: 'custom',
                        renderComponent: _address_component__WEBPACK_IMPORTED_MODULE_6__["AddressComponent"],
                    },
                },
            };
        });
    };
    SelectAddCustomerComponent.prototype._loadDataSmartTable = function () {
        var _this = this;
        this._usersService
            .getUsers()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._ngDestroy$))
            .subscribe(function (users) {
            var formattedData = _this._formatDataSmartTable(users);
            _this.sourceSmartTable.load(formattedData);
        });
    };
    SelectAddCustomerComponent.prototype._formatDataSmartTable = function (users) {
        var _this = this;
        return users.map(function (user) {
            return {
                id: user.id,
                name: "\n\t\t\t\t\t" + (user.firstName || _this._noInfoSign) + " " + (user.lastName || _this._noInfoSign) + "\n\t\t\t\t",
                email: user.email || _this._noInfoSign,
                phone: user.phone || _this._noInfoSign,
                address: user.fullAddress || _this._noInfoSign,
                user: user,
            };
        });
    };
    SelectAddCustomerComponent.ctorParameters = function () { return [
        { type: _services_users_service__WEBPACK_IMPORTED_MODULE_5__["UsersService"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
    ], SelectAddCustomerComponent.prototype, "customerOptionSelected", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], SelectAddCustomerComponent.prototype, "customerIdEmitter", void 0);
    SelectAddCustomerComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'select-add-customer',
            template: "\n\t\t<span class=\"select-add-customer-component\">\n\t\t\t<div class=\"customers-table\" *ngIf=\"isSelectedFromExisting\">\n\t\t\t\t<ng2-smart-table\n\t\t\t\t\tclass=\"smart-table\"\n\t\t\t\t\t[settings]=\"settingsSmartTable\"\n\t\t\t\t\t[source]=\"sourceSmartTable\"\n\t\t\t\t\t(userRowSelect)=\"selectFromExisting($event)\"\n\t\t\t\t>\n\t\t\t\t</ng2-smart-table>\n\t\t\t</div>\n\n\t\t\t<div *ngIf=\"!isSelectedFromExisting\">\n\t\t\t\t<user-mutation\n\t\t\t\t\t(customerIdEmitter)=\"broadcastCustomerId($event)\"\n\t\t\t\t></user-mutation>\n\t\t\t</div>\n\t\t</span>\n\t",
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./select-add-customer.component.scss */ "./src/components/order/select-add-customer.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_users_service__WEBPACK_IMPORTED_MODULE_5__["UsersService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"]])
    ], SelectAddCustomerComponent);
    return SelectAddCustomerComponent;
}());



/***/ }),

/***/ "./src/pages/+warehouse/all-oders/all-orders.component.scss":
/*!******************************************************************!*\
  !*** ./src/pages/+warehouse/all-oders/all-orders.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".pagination {\n  text-align: center;\n  padding-bottom: 10px;\n  padding-left: 0 !important;\n  font-size: 1em;\n  display: block !important;\n}\n\nion-spinner {\n  width: 40px !important;\n  height: 40px !important;\n  left: calc(50% - 20px);\n  position: absolute;\n  zoom: 2;\n}\n\n.orders-spinner {\n  top: 40%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvZC9Xb3JrL0FuZ3VsYXIvTmV3IGZvbGRlciAoMikvRG9sY2VHcm9jZXJ5L3BhY2thZ2VzL21lcmNoYW50LXRhYmxldC1pb25pYy9zcmMvcGFnZXMvK3dhcmVob3VzZS9hbGwtb2RlcnMvYWxsLW9yZGVycy5jb21wb25lbnQuc2NzcyIsInNyYy9wYWdlcy8rd2FyZWhvdXNlL2FsbC1vZGVycy9hbGwtb3JkZXJzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Msa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQiwwQkFBMEI7RUFDMUIsY0FBYztFQUNkLHlCQUF5QjtBQ0MxQjs7QURFQTtFQUNDLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixPQUFPO0FDQ1I7O0FERUE7RUFDQyxRQUFRO0FDQ1QiLCJmaWxlIjoic3JjL3BhZ2VzLyt3YXJlaG91c2UvYWxsLW9kZXJzL2FsbC1vcmRlcnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnaW5hdGlvbiB7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0cGFkZGluZy1ib3R0b206IDEwcHg7XG5cdHBhZGRpbmctbGVmdDogMCAhaW1wb3J0YW50O1xuXHRmb250LXNpemU6IDFlbTtcblx0ZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbn1cblxuaW9uLXNwaW5uZXIge1xuXHR3aWR0aDogNDBweCAhaW1wb3J0YW50O1xuXHRoZWlnaHQ6IDQwcHggIWltcG9ydGFudDtcblx0bGVmdDogY2FsYyg1MCUgLSAyMHB4KTtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHR6b29tOiAyO1xufVxuXG4ub3JkZXJzLXNwaW5uZXIge1xuXHR0b3A6IDQwJTtcbn1cbiIsIi5wYWdpbmF0aW9uIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgcGFkZGluZy1sZWZ0OiAwICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xufVxuXG5pb24tc3Bpbm5lciB7XG4gIHdpZHRoOiA0MHB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogNDBweCAhaW1wb3J0YW50O1xuICBsZWZ0OiBjYWxjKDUwJSAtIDIwcHgpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHpvb206IDI7XG59XG5cbi5vcmRlcnMtc3Bpbm5lciB7XG4gIHRvcDogNDAlO1xufVxuIl19 */");

/***/ }),

/***/ "./src/pages/+warehouse/all-oders/all-orders.component.ts":
/*!****************************************************************!*\
  !*** ./src/pages/+warehouse/all-oders/all-orders.component.ts ***!
  \****************************************************************/
/*! exports provided: AllOrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllOrdersComponent", function() { return AllOrdersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_warehouse_orders_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/warehouse-orders.service */ "./src/services/warehouse-orders.service.ts");
/* harmony import */ var _services_store_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/store.service */ "./src/services/store.service.ts");
/* harmony import */ var _modules_server_common_entities_Order__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @modules/server.common/entities/Order */ "../common/src/entities/Order.ts");
/* harmony import */ var _warehouse__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../warehouse */ "./src/pages/+warehouse/warehouse.ts");






var AllOrdersComponent = (function () {
    function AllOrdersComponent(warehouseOrdersService, store) {
        this.warehouseOrdersService = warehouseOrdersService;
        this.store = store;
        this.toggleOrderContainer = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.orders = [];
        this.OrderState = _warehouse__WEBPACK_IMPORTED_MODULE_5__["OrderState"];
        this.page = 1;
    }
    AllOrdersComponent.prototype.ngOnInit = function () {
        this.loadAllOrders();
    };
    AllOrdersComponent.prototype.ngOnChanges = function () {
        if (this.focusedOrder) {
            this.orders = [this.focusedOrder];
        }
        else {
            this.orders = [];
            this.page = 1;
            this.loadAllOrders();
        }
    };
    AllOrdersComponent.prototype.loadPage = function (page) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.orders$) return [3, 2];
                        return [4, this.orders$.unsubscribe()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        this.orders$ = this.warehouseOrdersService
                            .getStoreOrdersTableData(this.store.warehouseId, {
                            sort: {
                                field: '_createdAt',
                                sortBy: 'desc',
                            },
                            skip: (page - 1) * 10,
                            limit: 10,
                        }, 'all')
                            .subscribe(function (res) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                            var orders;
                            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        orders = res['orders'];
                                        return [4, this.loadOrdersCount()];
                                    case 1:
                                        _a.sent();
                                        if (!this.focusedOrder) {
                                            this.page = page;
                                            this.orders = orders;
                                        }
                                        this.ordersLoaded = true;
                                        return [2];
                                }
                            });
                        }); });
                        return [2];
                }
            });
        });
    };
    AllOrdersComponent.prototype.ngOnDestroy = function () {
        if (this.orders$) {
            this.orders$.unsubscribe();
        }
    };
    AllOrdersComponent.prototype.loadAllOrders = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.loadOrdersCount()];
                    case 1:
                        _a.sent();
                        this.loadPage(1);
                        return [2];
                }
            });
        });
    };
    AllOrdersComponent.prototype.loadOrdersCount = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _a;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4, this.warehouseOrdersService.getCountOfStoreOrders(this.store.warehouseId, 'all')];
                    case 1:
                        _a.ordersCount = _b.sent();
                        return [2];
                }
            });
        });
    };
    AllOrdersComponent.ctorParameters = function () { return [
        { type: _services_warehouse_orders_service__WEBPACK_IMPORTED_MODULE_2__["WarehouseOrdersService"] },
        { type: _services_store_service__WEBPACK_IMPORTED_MODULE_3__["Store"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function)
    ], AllOrdersComponent.prototype, "getWarehouseStatus", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], AllOrdersComponent.prototype, "onUpdateWarehouseStatus", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function)
    ], AllOrdersComponent.prototype, "orderState", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _modules_server_common_entities_Order__WEBPACK_IMPORTED_MODULE_4__["default"])
    ], AllOrdersComponent.prototype, "focusedOrder", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], AllOrdersComponent.prototype, "isOrderContainerLive", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], AllOrdersComponent.prototype, "toggleOrderContainer", void 0);
    AllOrdersComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'merchant-all-orders',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./all-orders.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/pages/+warehouse/all-oders/all-orders.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./all-orders.component.scss */ "./src/pages/+warehouse/all-oders/all-orders.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_warehouse_orders_service__WEBPACK_IMPORTED_MODULE_2__["WarehouseOrdersService"],
            _services_store_service__WEBPACK_IMPORTED_MODULE_3__["Store"]])
    ], AllOrdersComponent);
    return AllOrdersComponent;
}());



/***/ }),

/***/ "./src/pages/+warehouse/all-products/all-products.component.scss":
/*!***********************************************************************!*\
  !*** ./src/pages/+warehouse/all-products/all-products.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".app-keyboard-open .app-hide-on-keyboard-open {\n  display: none;\n}\n\nhtml,\nbody {\n  overflow: visible !important;\n  background-color: #1a8e45 !important;\n}\n\n.menu-open .side-menu-content-ltr {\n  -webkit-transform: translate3d(250px, 0px, 0px) !important;\n}\n\n.menu-open .side-menu-content-rtl {\n  -webkit-transform: translate3d(-250px, 0px, 0px) !important;\n}\n\n.loading-container .loading {\n  background-color: transparent;\n}\n\n.loading-container .loading .spinner {\n  fill: #fff;\n  stroke: #fff;\n}\n\n.loading-container .loading .spinner svg {\n  width: 40px;\n  height: 40px;\n}\n\n.bright-vie .loading-container .loading .spinner {\n  fill: #1ea44f;\n  stroke: #1ea44f;\n}\n\n.swiper-slide img {\n  width: 100%;\n}\n\n.bar.bar-brand {\n  border-bottom: 2px solid #1c9b4b;\n  background: #1ea44f none;\n  color: white !important;\n}\n\n.bar.bar-brand .title {\n  color: white;\n}\n\n.bar.bar-brand .button-icon mr-1 {\n  color: white;\n}\n\n.brand-link {\n  color: #1ea44f;\n}\n\n.brand-link:active {\n  color: #353748;\n}\n\n.everbie-input {\n  height: 57px;\n  width: 100%;\n  font-size: 16px;\n  line-height: 20px;\n  border: solid #5c5f73 1px;\n  color: #fff;\n  background-color: inherit;\n  border-radius: 8px;\n  padding: 20px;\n  text-align: center;\n  -webkit-appearance: none;\n}\n\n.everbie-input::-webkit-input-placeholder {\n  color: #6d6f80;\n}\n\n.everbie-input::-moz-placeholder {\n  color: #6d6f80;\n}\n\n.everbie-input:-ms-input-placeholder {\n  color: #6d6f80;\n}\n\n.button.button-brand, .button-brand.everbie-button {\n  background-color: #1ea44f;\n  border-color: #1c9749;\n  color: #fff;\n}\n\n.button.button-brand.active, .button-brand.active.everbie-button, .button.button-brand.activated, .button-brand.activated.everbie-button {\n  background-color: #1da04d;\n  box-shadow: inset 0 1px 4px rgba(0, 0, 0, 0.1);\n}\n\n.button.button-dark-brand, .button-dark-brand.everbie-button {\n  background-color: #1a8e45;\n  border-color: #18823e;\n  color: #fff;\n}\n\n.button.button-dark-brand.active, .button-dark-brand.active.everbie-button, .button.button-dark-brand.activated, .button-dark-brand.activated.everbie-button {\n  background-color: #198a43;\n  box-shadow: inset 0 1px 4px rgba(0, 0, 0, 0.1);\n}\n\n.button.button-brand-lighted, .button-brand-lighted.everbie-button {\n  background-color: #353748;\n  border-color: #2f303f;\n  color: #fff;\n}\n\n.button.button-brand-lighted.active, .button-brand-lighted.active.everbie-button, .button.button-brand-lighted.activated, .button-brand-lighted.activated.everbie-button {\n  background-color: #333545;\n  box-shadow: inset 0 1px 4px rgba(0, 0, 0, 0.1);\n}\n\n.button.button-assertive.active, .active.everbie-button, .button.button-assertive.activated, .activated.everbie-button {\n  border-color: #aa403b !important;\n}\n\n.button.button-balanced.active, .button-balanced.active.everbie-button, .button.button-balanced.activated, .button-balanced.activated.everbie-button {\n  border-color: #2fc159 !important;\n}\n\n.button.button-balanced, .button-balanced.everbie-button {\n  background-color: #2db955;\n}\n\n.everbie-button {\n  border-radius: 8px !important;\n  font-size: 20px;\n  padding: 10px 16px;\n  margin-bottom: 0;\n  line-height: 34px;\n  background-color: #ce4843;\n}\n\n.bottom-0 {\n  position: absolute;\n  bottom: 0;\n}\n\n.no-padding {\n  padding: 0;\n}\n\n.no-padding-right {\n  padding-right: 0;\n}\n\n.no-padding-left {\n  padding-left: 0;\n}\n\n.no-padding-top {\n  padding-top: 0;\n}\n\n.no-padding-bottom {\n  padding-bottom: 0;\n}\n\n.text-align-right {\n  text-align: right;\n}\n\n.text-align-center {\n  text-align: center;\n}\n\n.text-align-left {\n  text-align: left;\n}\n\n.col-100 {\n  width: 100%;\n}\n\n.display-block {\n  display: block;\n}\n\n.header-bar-big-title {\n  font-size: 22px !important;\n  text-align: center !important;\n}\n\n.button-bar-right-container {\n  width: 280px;\n  margin-left: auto;\n}\n\n.pull-right {\n  margin-left: auto;\n}\n\n.plus-navbar-button::before {\n  font-size: 24px !important;\n}\n\n.border-color-brand {\n  border-color: #1ea44f;\n}\n\n.flip {\n  transform: scale(-1, 1);\n}\n\n.transition-on-color-change {\n  transition: background-color 0.3s, border-color 0.3s, color 0.3s;\n}\n\n.horizontal-space-10 {\n  width: 10px;\n}\n\n.margin-top-bottom {\n  margin-top: 5px;\n  margin-bottom: 5px;\n}\n\n.maintenance-message-container {\n  color: white;\n  padding: 20px;\n  background: #1ea44f;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  height: 100%;\n}\n\n.product-card-container {\n  border: 0;\n  padding-bottom: 0;\n}\n\n.product-card-container .product-card {\n  margin: 0;\n  padding: 0;\n  text-align: center;\n}\n\n.product-card-container .product-card .product-image-container {\n  cursor: pointer;\n}\n\n.product-card-container .product-card .product-image-container:active {\n  background: #000;\n}\n\n.product-card-container .product-card .product-image-container:active .product-image {\n  opacity: 0.8;\n}\n\n.product-card-container .product-card .product-buttons {\n  position: absolute;\n  top: 20px;\n  right: 20px;\n}\n\n.product-card-container .product-card .product-buttons .add-button {\n  padding: 0;\n  font-size: 30px;\n  color: #fff;\n}\n\n.product-card-container .product-card .product-image {\n  width: 100%;\n}\n\n.product-card-container .product-card .product-mini-bar {\n  font-size: 17px;\n  background-color: #1ea44f;\n  color: white;\n  text-align: center;\n  margin-bottom: 0;\n  padding-top: 11px;\n  padding-bottom: 11px;\n  margin-top: -4px;\n}\n\n.product-card-container .product-card .product-mini-bar .edit-button {\n  margin-top: -4px;\n  border-radius: 3px;\n  color: #1ea44f;\n  float: left;\n  border-color: #ccc;\n  margin-left: 10px;\n  min-width: 10px;\n  padding: 4px;\n  font-size: 16px;\n  line-height: 0;\n  min-height: 10px;\n}\n\n.product-card-container .product-card .product-mini-bar .count {\n  background: #fff;\n  margin-top: -2px;\n  padding: 2px;\n  border-radius: 3px;\n  color: #1ea44f;\n  float: right;\n  margin-right: 10px;\n}\n\n.masonry-container {\n  text-align: center;\n  width: 80%;\n  margin: 0 auto;\n  padding-top: 20px;\n}\n\nngx-masonry {\n  margin: 0 auto;\n}\n\n.masonry-item {\n  width: 234px;\n  margin-bottom: 10px;\n}\n\n.item-inner {\n  border-bottom: none;\n}\n\n.pagination {\n  text-align: center;\n  padding-bottom: 10px;\n  padding-left: 0 !important;\n  font-size: 1em;\n  display: block !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvZC9Xb3JrL0FuZ3VsYXIvTmV3IGZvbGRlciAoMikvRG9sY2VHcm9jZXJ5L3BhY2thZ2VzL21lcmNoYW50LXRhYmxldC1pb25pYy9ub2RlX21vZHVsZXMvQGV2ZXItcGxhdGZvcm0vY29tbW9uLWFuZ3VsYXIvc3JjL3Njc3MvZXZlcmJpZS5jb21tb24uc2NzcyIsInNyYy9wYWdlcy8rd2FyZWhvdXNlL2FsbC1wcm9kdWN0cy9hbGwtcHJvZHVjdHMuY29tcG9uZW50LnNjc3MiLCIvbW50L2QvV29yay9Bbmd1bGFyL05ldyBmb2xkZXIgKDIpL0RvbGNlR3JvY2VyeS9wYWNrYWdlcy9tZXJjaGFudC10YWJsZXQtaW9uaWMvc3JjL3BhZ2VzLyt3YXJlaG91c2UvYWxsLXByb2R1Y3RzL2FsbC1wcm9kdWN0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFlQTtFQUVFLGFBQWE7QUNmZjs7QUQyRkE7O0VBRUMsNEJBQTRCO0VBQzVCLG9DQUEwQztBQ3hGM0M7O0FEK0ZBO0VBRUUsMERBQTBEO0FDN0Y1RDs7QUQyRkE7RUFNRSwyREFBMkQ7QUM3RjdEOztBRGlHQTtFQUNDLDZCQUE2QjtBQzlGOUI7O0FENkZBO0VBSUUsVUFBVTtFQUNWLFlBQVk7QUM3RmQ7O0FEd0ZBO0VBT0csV0FBVztFQUNYLFlBQVk7QUMzRmY7O0FEZ0dBO0VBQ0MsYUEzSGM7RUE0SGQsZUE1SGM7QUMrQmY7O0FEZ0dBO0VBRUUsV0FBVztBQzlGYjs7QURzR0E7RUFFRSxnQ0FBMkM7RUFDM0Msd0JBQXVCO0VBQ3ZCLHVCQUF1QjtBQ3BHekI7O0FEZ0dBO0VBTUcsWUFBWTtBQ2xHZjs7QUQ0RkE7RUFTRyxZQUFZO0FDakdmOztBRDBHQTtFQUNDLGNBNUpjO0FDcURmOztBRHNHQTtFQUdFLGNBN0pxQjtBQ3dEdkI7O0FENkdBO0VBQ0MsWUFBWTtFQUNaLFdBQVc7RUFDWCxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLHdCQUF3QjtBQzFHekI7O0FER0M7RUFDQyxjQXdHMkI7QUN4RzdCOztBREVDO0VBQ0MsY0FxRzJCO0FDcEc3Qjs7QURDQztFQUNDLGNBa0cyQjtBQ2hHN0I7O0FEdUdBO0VBQ0MseUJBM0xjO0VBNExkLHFCQUFnQztFQUNoQyxXQUFXO0FDcEdaOztBRGlHQTtFQU1FLHlCQUFvQztFQUNwQyw4Q0FBOEM7QUNuR2hEOztBRHVHQTtFQUNDLHlCQXBNZ0M7RUFxTWhDLHFCQUF1QztFQUN2QyxXQUFXO0FDcEdaOztBRGlHQTtFQU1FLHlCQUEyQztFQUMzQyw4Q0FBOEM7QUNuR2hEOztBRHVHQTtFQUNDLHlCQWhOc0I7RUFpTnRCLHFCQUF3QztFQUN4QyxXQUFXO0FDcEdaOztBRGlHQTtFQU1FLHlCQUE0QztFQUM1Qyw4Q0FBOEM7QUNuR2hEOztBRHVHQTtFQUdFLGdDQUEwQztBQ3RHNUM7O0FEMEdBO0VBR0UsZ0NBQThDO0FDekdoRDs7QUQ2R0E7RUFDQyx5QkFBdUM7QUMxR3hDOztBRDZHQTtFQU1DLDZCQUE2QjtFQUU3QixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFFakIseUJBQXlCO0FDakgxQjs7QUR3SEE7RUFDQyxrQkFBa0I7RUFDbEIsU0FBUztBQ3JIVjs7QUR3SEE7RUFDQyxVQUFVO0FDckhYOztBRHdIQTtFQUNDLGdCQUFnQjtBQ3JIakI7O0FEd0hBO0VBQ0MsZUFBZTtBQ3JIaEI7O0FEd0hBO0VBQ0MsY0FBYztBQ3JIZjs7QUR3SEE7RUFDQyxpQkFBaUI7QUNySGxCOztBRHdIQTtFQUNDLGlCQUFpQjtBQ3JIbEI7O0FEd0hBO0VBQ0Msa0JBQWtCO0FDckhuQjs7QUR3SEE7RUFDQyxnQkFBZ0I7QUNySGpCOztBRHdIQTtFQUNDLFdBQVc7QUNySFo7O0FEd0hBO0VBQ0MsY0FBYztBQ3JIZjs7QUR3SEE7RUFDQywwQkFBMEI7RUFDMUIsNkJBQTZCO0FDckg5Qjs7QUR3SEE7RUFDQyxZQUFZO0VBQ1osaUJBQWlCO0FDckhsQjs7QUR3SEE7RUFDQyxpQkFBaUI7QUNySGxCOztBRHdIQTtFQUVFLDBCQUEwQjtBQ3RINUI7O0FEMEhBO0VBQ0MscUJBblVjO0FDNE1mOztBRDBIQTtFQXRTQyx1QkF1UytCO0FDbkhoQzs7QURzSEE7RUFNQyxnRUFMWTtBQ2hIYjs7QUR3SEE7RUFDQyxXQUFXO0FDckhaOztBRHdIQTtFQUNDLGVBQWU7RUFDZixrQkFBa0I7QUNySG5COztBRHdIQTtFQUNDLFlBQVk7RUFDWixhQUFhO0VBRWIsbUJBaFdjO0VBa1dkLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixZQUFZO0FDdkhiOztBQ2pQQTtFQUNDLFNBQVM7RUFDVCxpQkFBaUI7QURvUGxCOztBQ3RQQTtFQUlFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysa0JBQWtCO0FEc1BwQjs7QUM1UEE7RUFRRyxlQUFlO0FEd1BsQjs7QUNoUUE7RUFXRyxnQkFBZ0I7QUR5UG5COztBQ3BRQTtFQWFJLFlBQVk7QUQyUGhCOztBQ3hRQTtFQWlCRyxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFdBQVc7QUQyUGQ7O0FDOVFBO0VBcUJJLFVBQVU7RUFDVixlQUFlO0VBQ2YsV0FBVztBRDZQZjs7QUNwUkE7RUEyQkcsV0FBVztBRDZQZDs7QUN4UkE7RUE4QkcsZUFBZTtFQUNmLHlCRjdCWTtFRThCWixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLGdCQUFnQjtBRDhQbkI7O0FDblNBO0VBdUNJLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsY0Z2Q1c7RUV3Q1gsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLFlBQVk7RUFDWixlQUFlO0VBQ2YsY0FBYztFQUNkLGdCQUFnQjtBRGdRcEI7O0FDalRBO0VBb0RJLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixjRnREVztFRXVEWCxZQUFZO0VBQ1osa0JBQWtCO0FEaVF0Qjs7QUMzUEE7RUFDQyxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGNBQWM7RUFDZCxpQkFBaUI7QUQ4UGxCOztBQzNQQTtFQUNDLGNBQWM7QUQ4UGY7O0FDM1BBO0VBQ0MsWUFBWTtFQUNaLG1CQUFtQjtBRDhQcEI7O0FDM1BBO0VBQ0MsbUJBQW1CO0FEOFBwQjs7QUM1UEE7RUFDQyxrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLDBCQUEwQjtFQUMxQixjQUFjO0VBQ2QseUJBQXlCO0FEK1AxQiIsImZpbGUiOiJzcmMvcGFnZXMvK3dhcmVob3VzZS9hbGwtcHJvZHVjdHMvYWxsLXByb2R1Y3RzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHBhdGggZm9yIG91ciBpb25pY29ucyBmb250IGZpbGVzLCByZWxhdGl2ZSB0byB0aGUgYnVpbHQgQ1NTIGluIHd3dy9jc3NcbiRpb25pY29ucy1mb250LXBhdGg6ICcuLi8uLi9saWIvaW9uaWMvcmVsZWFzZS9mb250cycgIWRlZmF1bHQ7XG4kZmEtZm9udC1wYXRoOiAnLi4vLi4vbGliL2ZvbnQtYXdlc29tZS9mb250cycgIWRlZmF1bHQ7XG5cbiRicmFuZDogIzFlYTQ0ZjtcbiRicmFuZC1saWdodGVkOiAjMzUzNzQ4O1xuJGJyYW5kLWRhcmtlbjogZGFya2VuKCRicmFuZCwgNSUpOyAvLyAjMWVhNDRmXG5cbiRhc3NlcnRpdmU6ICNiZDQ3NDI7XG4kYXNzZXJ0aXZlLWxpZ2h0ZWQ6ICNjZTQ4NDM7XG4kYXNzZXJ0aXZlLWRhcmtlbjogZGFya2VuKCRhc3NlcnRpdmUsIDUlKTtcblxuJGJhbGFuY2VkOiAjMzNjZDVmO1xuJGJhbGFuY2VkLWxpZ2h0ZWQ6ICM0N2QyNmY7XG5cbi5hcHAta2V5Ym9hcmQtb3BlbiB7XG5cdC5hcHAtaGlkZS1vbi1rZXlib2FyZC1vcGVuIHtcblx0XHRkaXNwbGF5OiBub25lO1xuXHR9XG59XG5cbi8vLy8vLy8vLy8vLy8vL1xuLy8vIE1peGlucyAvLy8vXG4vLy8vLy8vLy8vLy8vLy9cblxuQG1peGluIGNhbGMoJHByb3BlcnR5LCAkZXhwcmVzc2lvbi4uLikge1xuXHQjeyRwcm9wZXJ0eX06IC1tb3otY2FsYygjeyRleHByZXNzaW9ufSk7XG5cdCN7JHByb3BlcnR5fTogLXdlYmtpdC1jYWxjKCN7JGV4cHJlc3Npb259KTtcblx0I3skcHJvcGVydHl9OiBjYWxjKCN7JGV4cHJlc3Npb259KTtcbn1cblxuQG1peGluIHRyYW5zZm9ybSgkdHJhbnNmb3Jtcykge1xuXHQtbW96LXRyYW5zZm9ybTogJHRyYW5zZm9ybXM7XG5cdC1vLXRyYW5zZm9ybTogJHRyYW5zZm9ybXM7XG5cdC1tcy10cmFuc2Zvcm06ICR0cmFuc2Zvcm1zO1xuXHQtd2Via2l0LXRyYW5zZm9ybTogJHRyYW5zZm9ybXM7XG5cdHRyYW5zZm9ybTogJHRyYW5zZm9ybXM7XG59XG5cbkBtaXhpbiB2ZXJ0aWNhbC1hbGlnbigkcG9zaXRpb246IHJlbGF0aXZlKSB7XG5cdHBvc2l0aW9uOiAkcG9zaXRpb247XG5cdHRvcDogNTAlO1xuXHQtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcblx0LW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcblx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG5AbWl4aW4gY2VudGVyKCRwb3NpdGlvbjogcmVsYXRpdmUpIHtcblx0cG9zaXRpb246ICRwb3NpdGlvbjtcblx0dG9wOiA1MCU7XG5cdGxlZnQ6IDUwJTtcblx0LXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcblx0LW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cblxuQG1peGluIHRvcC1jZW50ZXIoJHBvc2l0aW9uOiByZWxhdGl2ZSkge1xuXHRwb3NpdGlvbjogJHBvc2l0aW9uO1xuXHRsZWZ0OiA1MCU7XG5cdC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCk7XG5cdC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwKTtcblx0dG9wOiAwO1xufVxuXG5AbWl4aW4gYm90dG9tLWNlbnRlcigkcG9zaXRpb246IHJlbGF0aXZlKSB7XG5cdHBvc2l0aW9uOiAkcG9zaXRpb247XG5cdGxlZnQ6IDUwJTtcblx0LXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwKTtcblx0LW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDApO1xuXHRib3R0b206IDA7XG59XG5cbkBtaXhpbiBjYWxjKCRwcm9wZXJ0eSwgJGV4cHJlc3Npb24pIHtcblx0I3skcHJvcGVydHl9OiAtd2Via2l0LWNhbGMoI3skZXhwcmVzc2lvbn0pO1xuXHQjeyRwcm9wZXJ0eX06IGNhbGMoI3skZXhwcmVzc2lvbn0pO1xufVxuXG5AbWl4aW4gcGxhY2Vob2xkZXIoJGNvbG9yKSB7XG5cdCY6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuXHRcdGNvbG9yOiAkY29sb3I7XG5cdH1cblx0Jjo6LW1vei1wbGFjZWhvbGRlciB7XG5cdFx0Y29sb3I6ICRjb2xvcjtcblx0fVxuXHQmOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG5cdFx0Y29sb3I6ICRjb2xvcjtcblx0fVxufVxuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLy8gTm9ybWFsaXplIEh0bWwgQW5kIEJvZHkgLy8vXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbmh0bWwsXG5ib2R5IHtcblx0b3ZlcmZsb3c6IHZpc2libGUgIWltcG9ydGFudDtcblx0YmFja2dyb3VuZC1jb2xvcjogJGJyYW5kLWRhcmtlbiAhaW1wb3J0YW50O1xufVxuXG4vLy8vLy8vLy8vLy8vLy9cbi8vIElvbmljIEFkZCAvL1xuLy8vLy8vLy8vLy8vLy8vXG5cbi5tZW51LW9wZW4ge1xuXHQuc2lkZS1tZW51LWNvbnRlbnQtbHRyIHtcblx0XHQtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMjUwcHgsIDBweCwgMHB4KSAhaW1wb3J0YW50O1xuXHR9XG5cblx0LnNpZGUtbWVudS1jb250ZW50LXJ0bCB7XG5cdFx0LXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0yNTBweCwgMHB4LCAwcHgpICFpbXBvcnRhbnQ7XG5cdH1cbn1cblxuLmxvYWRpbmctY29udGFpbmVyIC5sb2FkaW5nIHtcblx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG5cblx0LnNwaW5uZXIge1xuXHRcdGZpbGw6ICNmZmY7XG5cdFx0c3Ryb2tlOiAjZmZmO1xuXHRcdHN2ZyB7XG5cdFx0XHR3aWR0aDogNDBweDtcblx0XHRcdGhlaWdodDogNDBweDtcblx0XHR9XG5cdH1cbn1cblxuLmJyaWdodC12aWUgLmxvYWRpbmctY29udGFpbmVyIC5sb2FkaW5nIC5zcGlubmVyIHtcblx0ZmlsbDogJGJyYW5kO1xuXHRzdHJva2U6ICRicmFuZDtcbn1cblxuLnN3aXBlci1zbGlkZSB7XG5cdGltZyB7XG5cdFx0d2lkdGg6IDEwMCU7XG5cdH1cbn1cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLy8gQmFyIFN0eWxlcyAvLy9cbi8vLy8vLy8vLy8vLy8vLy8vL1xuXG4uYmFyIHtcblx0Ji5iYXItYnJhbmQge1xuXHRcdGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBkYXJrZW4oJGJyYW5kLCAyJSk7XG5cdFx0YmFja2dyb3VuZDogJGJyYW5kIG5vbmU7XG5cdFx0Y29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG5cdFx0LnRpdGxlIHtcblx0XHRcdGNvbG9yOiB3aGl0ZTtcblx0XHR9XG5cdFx0LmJ1dHRvbi1pY29uIG1yLTEge1xuXHRcdFx0Y29sb3I6IHdoaXRlO1xuXHRcdH1cblx0fVxufVxuXG4vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLy8gQ3VzdG9tIGxpbmsgLy8vXG4vLy8vLy8vLy8vLy8vLy8vLy9cblxuLmJyYW5kLWxpbmsge1xuXHRjb2xvcjogJGJyYW5kO1xuXHQmOmFjdGl2ZSB7XG5cdFx0Y29sb3I6ICRicmFuZC1saWdodGVkO1xuXHR9XG59XG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8vIEV2ZXJiaWUgSW5wdXQgLy8vXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuLmV2ZXJiaWUtaW5wdXQge1xuXHRoZWlnaHQ6IDU3cHg7XG5cdHdpZHRoOiAxMDAlO1xuXHRmb250LXNpemU6IDE2cHg7XG5cdGxpbmUtaGVpZ2h0OiAyMHB4O1xuXHRib3JkZXI6IHNvbGlkICM1YzVmNzMgMXB4O1xuXHRjb2xvcjogI2ZmZjtcblx0YmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcblx0Ym9yZGVyLXJhZGl1czogOHB4O1xuXHRwYWRkaW5nOiAyMHB4O1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcblxuXHRAaW5jbHVkZSBwbGFjZWhvbGRlcigjNmQ2ZjgwKTtcbn1cblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8vIEFkZCBCdXR0b24gU3R5bGVzIC8vL1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4uYnV0dG9uLmJ1dHRvbi1icmFuZCB7XG5cdGJhY2tncm91bmQtY29sb3I6ICRicmFuZDtcblx0Ym9yZGVyLWNvbG9yOiBkYXJrZW4oJGJyYW5kLCAzJSk7XG5cdGNvbG9yOiAjZmZmO1xuXHQmLmFjdGl2ZSxcblx0Ji5hY3RpdmF0ZWQge1xuXHRcdGJhY2tncm91bmQtY29sb3I6IGRhcmtlbigkYnJhbmQsIDElKTtcblx0XHRib3gtc2hhZG93OiBpbnNldCAwIDFweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuXHR9XG59XG5cbi5idXR0b24uYnV0dG9uLWRhcmstYnJhbmQge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAkYnJhbmQtZGFya2VuO1xuXHRib3JkZXItY29sb3I6IGRhcmtlbigkYnJhbmQtZGFya2VuLCAzJSk7XG5cdGNvbG9yOiAjZmZmO1xuXHQmLmFjdGl2ZSxcblx0Ji5hY3RpdmF0ZWQge1xuXHRcdGJhY2tncm91bmQtY29sb3I6IGRhcmtlbigkYnJhbmQtZGFya2VuLCAxJSk7XG5cdFx0Ym94LXNoYWRvdzogaW5zZXQgMCAxcHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcblx0fVxufVxuXG4uYnV0dG9uLmJ1dHRvbi1icmFuZC1saWdodGVkIHtcblx0YmFja2dyb3VuZC1jb2xvcjogJGJyYW5kLWxpZ2h0ZWQ7XG5cdGJvcmRlci1jb2xvcjogZGFya2VuKCRicmFuZC1saWdodGVkLCAzJSk7XG5cdGNvbG9yOiAjZmZmO1xuXHQmLmFjdGl2ZSxcblx0Ji5hY3RpdmF0ZWQge1xuXHRcdGJhY2tncm91bmQtY29sb3I6IGRhcmtlbigkYnJhbmQtbGlnaHRlZCwgMSUpO1xuXHRcdGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG5cdH1cbn1cblxuLmJ1dHRvbi5idXR0b24tYXNzZXJ0aXZlIHtcblx0Ji5hY3RpdmUsXG5cdCYuYWN0aXZhdGVkIHtcblx0XHRib3JkZXItY29sb3I6ICRhc3NlcnRpdmUtZGFya2VuICFpbXBvcnRhbnQ7XG5cdH1cbn1cblxuLmJ1dHRvbi5idXR0b24tYmFsYW5jZWQge1xuXHQmLmFjdGl2ZSxcblx0Ji5hY3RpdmF0ZWQge1xuXHRcdGJvcmRlci1jb2xvcjogZGFya2VuKCRiYWxhbmNlZCwgMyUpICFpbXBvcnRhbnQ7XG5cdH1cbn1cblxuLmJ1dHRvbi5idXR0b24tYmFsYW5jZWQge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZW4oJGJhbGFuY2VkLCA1JSk7XG59XG5cbi5ldmVyYmllLWJ1dHRvbiB7XG5cdC8vIEBleHRlbmQgLndhdmVzLWVmZmVjdDtcblx0Ly8gQGV4dGVuZCAud2F2ZXMtY2xhc3NpYztcblx0QGV4dGVuZCAuYnV0dG9uO1xuXHRAZXh0ZW5kIC5idXR0b24tYXNzZXJ0aXZlO1xuXG5cdGJvcmRlci1yYWRpdXM6IDhweCAhaW1wb3J0YW50O1xuXG5cdGZvbnQtc2l6ZTogMjBweDtcblx0cGFkZGluZzogMTBweCAxNnB4O1xuXHRtYXJnaW4tYm90dG9tOiAwO1xuXHRsaW5lLWhlaWdodDogMzRweDtcblxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjY2U0ODQzO1xufVxuXG4vLy8vLy8vLy8vLy8vXG4vLy8gVXRpbHMgLy8vXG4vLy8vLy8vLy8vLy8vXG5cbi5ib3R0b20tMCB7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0Ym90dG9tOiAwO1xufVxuXG4ubm8tcGFkZGluZyB7XG5cdHBhZGRpbmc6IDA7XG59XG5cbi5uby1wYWRkaW5nLXJpZ2h0IHtcblx0cGFkZGluZy1yaWdodDogMDtcbn1cblxuLm5vLXBhZGRpbmctbGVmdCB7XG5cdHBhZGRpbmctbGVmdDogMDtcbn1cblxuLm5vLXBhZGRpbmctdG9wIHtcblx0cGFkZGluZy10b3A6IDA7XG59XG5cbi5uby1wYWRkaW5nLWJvdHRvbSB7XG5cdHBhZGRpbmctYm90dG9tOiAwO1xufVxuXG4udGV4dC1hbGlnbi1yaWdodCB7XG5cdHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4udGV4dC1hbGlnbi1jZW50ZXIge1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi50ZXh0LWFsaWduLWxlZnQge1xuXHR0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4uY29sLTEwMCB7XG5cdHdpZHRoOiAxMDAlO1xufVxuXG4uZGlzcGxheS1ibG9jayB7XG5cdGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uaGVhZGVyLWJhci1iaWctdGl0bGUge1xuXHRmb250LXNpemU6IDIycHggIWltcG9ydGFudDtcblx0dGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG59XG5cbi5idXR0b24tYmFyLXJpZ2h0LWNvbnRhaW5lciB7XG5cdHdpZHRoOiAyODBweDtcblx0bWFyZ2luLWxlZnQ6IGF1dG87XG59XG5cbi5wdWxsLXJpZ2h0IHtcblx0bWFyZ2luLWxlZnQ6IGF1dG87XG59XG5cbi5wbHVzLW5hdmJhci1idXR0b24ge1xuXHQmOjpiZWZvcmUge1xuXHRcdGZvbnQtc2l6ZTogMjRweCAhaW1wb3J0YW50O1xuXHR9XG59XG5cbi5ib3JkZXItY29sb3ItYnJhbmQge1xuXHRib3JkZXItY29sb3I6ICRicmFuZDtcbn1cblxuLmZsaXAge1xuXHRAaW5jbHVkZSB0cmFuc2Zvcm0oc2NhbGUoLTEsIDEpKTtcbn1cblxuLnRyYW5zaXRpb24tb24tY29sb3ItY2hhbmdlIHtcblx0JHNwZWVkOiAwLjNzO1xuXHQtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgJHNwZWVkLCBib3JkZXItY29sb3IgJHNwZWVkLFxuXHRcdGNvbG9yICRzcGVlZDtcblx0LW1vei10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yICRzcGVlZCwgYm9yZGVyLWNvbG9yICRzcGVlZCwgY29sb3IgJHNwZWVkO1xuXHQtby10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yICRzcGVlZCwgYm9yZGVyLWNvbG9yICRzcGVlZCwgY29sb3IgJHNwZWVkO1xuXHR0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yICRzcGVlZCwgYm9yZGVyLWNvbG9yICRzcGVlZCwgY29sb3IgJHNwZWVkO1xufVxuXG4uaG9yaXpvbnRhbC1zcGFjZS0xMCB7XG5cdHdpZHRoOiAxMHB4O1xufVxuXG4ubWFyZ2luLXRvcC1ib3R0b20ge1xuXHRtYXJnaW4tdG9wOiA1cHg7XG5cdG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuLm1haW50ZW5hbmNlLW1lc3NhZ2UtY29udGFpbmVyIHtcblx0Y29sb3I6IHdoaXRlO1xuXHRwYWRkaW5nOiAyMHB4O1xuXG5cdGJhY2tncm91bmQ6ICRicmFuZDtcblxuXHRkaXNwbGF5OiBmbGV4O1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRoZWlnaHQ6IDEwMCU7XG59XG4iLCIuYXBwLWtleWJvYXJkLW9wZW4gLmFwcC1oaWRlLW9uLWtleWJvYXJkLW9wZW4ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5odG1sLFxuYm9keSB7XG4gIG92ZXJmbG93OiB2aXNpYmxlICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxYThlNDUgIWltcG9ydGFudDtcbn1cblxuLm1lbnUtb3BlbiAuc2lkZS1tZW51LWNvbnRlbnQtbHRyIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDI1MHB4LCAwcHgsIDBweCkgIWltcG9ydGFudDtcbn1cblxuLm1lbnUtb3BlbiAuc2lkZS1tZW51LWNvbnRlbnQtcnRsIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0yNTBweCwgMHB4LCAwcHgpICFpbXBvcnRhbnQ7XG59XG5cbi5sb2FkaW5nLWNvbnRhaW5lciAubG9hZGluZyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4ubG9hZGluZy1jb250YWluZXIgLmxvYWRpbmcgLnNwaW5uZXIge1xuICBmaWxsOiAjZmZmO1xuICBzdHJva2U6ICNmZmY7XG59XG5cbi5sb2FkaW5nLWNvbnRhaW5lciAubG9hZGluZyAuc3Bpbm5lciBzdmcge1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xufVxuXG4uYnJpZ2h0LXZpZSAubG9hZGluZy1jb250YWluZXIgLmxvYWRpbmcgLnNwaW5uZXIge1xuICBmaWxsOiAjMWVhNDRmO1xuICBzdHJva2U6ICMxZWE0NGY7XG59XG5cbi5zd2lwZXItc2xpZGUgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5iYXIuYmFyLWJyYW5kIHtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMxYzliNGI7XG4gIGJhY2tncm91bmQ6ICMxZWE0NGYgbm9uZTtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG5cbi5iYXIuYmFyLWJyYW5kIC50aXRsZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmJhci5iYXItYnJhbmQgLmJ1dHRvbi1pY29uIG1yLTEge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5icmFuZC1saW5rIHtcbiAgY29sb3I6ICMxZWE0NGY7XG59XG5cbi5icmFuZC1saW5rOmFjdGl2ZSB7XG4gIGNvbG9yOiAjMzUzNzQ4O1xufVxuXG4uZXZlcmJpZS1pbnB1dCB7XG4gIGhlaWdodDogNTdweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGJvcmRlcjogc29saWQgIzVjNWY3MyAxcHg7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xufVxuXG4uZXZlcmJpZS1pbnB1dDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjNmQ2ZjgwO1xufVxuXG4uZXZlcmJpZS1pbnB1dDo6LW1vei1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjNmQ2ZjgwO1xufVxuXG4uZXZlcmJpZS1pbnB1dDotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBjb2xvcjogIzZkNmY4MDtcbn1cblxuLmJ1dHRvbi5idXR0b24tYnJhbmQsIC5idXR0b24tYnJhbmQuZXZlcmJpZS1idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWVhNDRmO1xuICBib3JkZXItY29sb3I6ICMxYzk3NDk7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uYnV0dG9uLmJ1dHRvbi1icmFuZC5hY3RpdmUsIC5idXR0b24tYnJhbmQuYWN0aXZlLmV2ZXJiaWUtYnV0dG9uLCAuYnV0dG9uLmJ1dHRvbi1icmFuZC5hY3RpdmF0ZWQsIC5idXR0b24tYnJhbmQuYWN0aXZhdGVkLmV2ZXJiaWUtYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFkYTA0ZDtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cblxuLmJ1dHRvbi5idXR0b24tZGFyay1icmFuZCwgLmJ1dHRvbi1kYXJrLWJyYW5kLmV2ZXJiaWUtYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFhOGU0NTtcbiAgYm9yZGVyLWNvbG9yOiAjMTg4MjNlO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmJ1dHRvbi5idXR0b24tZGFyay1icmFuZC5hY3RpdmUsIC5idXR0b24tZGFyay1icmFuZC5hY3RpdmUuZXZlcmJpZS1idXR0b24sIC5idXR0b24uYnV0dG9uLWRhcmstYnJhbmQuYWN0aXZhdGVkLCAuYnV0dG9uLWRhcmstYnJhbmQuYWN0aXZhdGVkLmV2ZXJiaWUtYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE5OGE0MztcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cblxuLmJ1dHRvbi5idXR0b24tYnJhbmQtbGlnaHRlZCwgLmJ1dHRvbi1icmFuZC1saWdodGVkLmV2ZXJiaWUtYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM1Mzc0ODtcbiAgYm9yZGVyLWNvbG9yOiAjMmYzMDNmO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmJ1dHRvbi5idXR0b24tYnJhbmQtbGlnaHRlZC5hY3RpdmUsIC5idXR0b24tYnJhbmQtbGlnaHRlZC5hY3RpdmUuZXZlcmJpZS1idXR0b24sIC5idXR0b24uYnV0dG9uLWJyYW5kLWxpZ2h0ZWQuYWN0aXZhdGVkLCAuYnV0dG9uLWJyYW5kLWxpZ2h0ZWQuYWN0aXZhdGVkLmV2ZXJiaWUtYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMzU0NTtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cblxuLmJ1dHRvbi5idXR0b24tYXNzZXJ0aXZlLmFjdGl2ZSwgLmFjdGl2ZS5ldmVyYmllLWJ1dHRvbiwgLmJ1dHRvbi5idXR0b24tYXNzZXJ0aXZlLmFjdGl2YXRlZCwgLmFjdGl2YXRlZC5ldmVyYmllLWJ1dHRvbiB7XG4gIGJvcmRlci1jb2xvcjogI2FhNDAzYiAhaW1wb3J0YW50O1xufVxuXG4uYnV0dG9uLmJ1dHRvbi1iYWxhbmNlZC5hY3RpdmUsIC5idXR0b24tYmFsYW5jZWQuYWN0aXZlLmV2ZXJiaWUtYnV0dG9uLCAuYnV0dG9uLmJ1dHRvbi1iYWxhbmNlZC5hY3RpdmF0ZWQsIC5idXR0b24tYmFsYW5jZWQuYWN0aXZhdGVkLmV2ZXJiaWUtYnV0dG9uIHtcbiAgYm9yZGVyLWNvbG9yOiAjMmZjMTU5ICFpbXBvcnRhbnQ7XG59XG5cbi5idXR0b24uYnV0dG9uLWJhbGFuY2VkLCAuYnV0dG9uLWJhbGFuY2VkLmV2ZXJiaWUtYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJkYjk1NTtcbn1cblxuLmV2ZXJiaWUtYnV0dG9uIHtcbiAgYm9yZGVyLXJhZGl1czogOHB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgcGFkZGluZzogMTBweCAxNnB4O1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBsaW5lLWhlaWdodDogMzRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NlNDg0Mztcbn1cblxuLmJvdHRvbS0wIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG59XG5cbi5uby1wYWRkaW5nIHtcbiAgcGFkZGluZzogMDtcbn1cblxuLm5vLXBhZGRpbmctcmlnaHQge1xuICBwYWRkaW5nLXJpZ2h0OiAwO1xufVxuXG4ubm8tcGFkZGluZy1sZWZ0IHtcbiAgcGFkZGluZy1sZWZ0OiAwO1xufVxuXG4ubm8tcGFkZGluZy10b3Age1xuICBwYWRkaW5nLXRvcDogMDtcbn1cblxuLm5vLXBhZGRpbmctYm90dG9tIHtcbiAgcGFkZGluZy1ib3R0b206IDA7XG59XG5cbi50ZXh0LWFsaWduLXJpZ2h0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi50ZXh0LWFsaWduLWNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnRleHQtYWxpZ24tbGVmdCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5jb2wtMTAwIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5kaXNwbGF5LWJsb2NrIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5oZWFkZXItYmFyLWJpZy10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjJweCAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbn1cblxuLmJ1dHRvbi1iYXItcmlnaHQtY29udGFpbmVyIHtcbiAgd2lkdGg6IDI4MHB4O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn1cblxuLnB1bGwtcmlnaHQge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn1cblxuLnBsdXMtbmF2YmFyLWJ1dHRvbjo6YmVmb3JlIHtcbiAgZm9udC1zaXplOiAyNHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItY29sb3ItYnJhbmQge1xuICBib3JkZXItY29sb3I6ICMxZWE0NGY7XG59XG5cbi5mbGlwIHtcbiAgLW1vei10cmFuc2Zvcm06IHNjYWxlKC0xLCAxKTtcbiAgLW8tdHJhbnNmb3JtOiBzY2FsZSgtMSwgMSk7XG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKC0xLCAxKTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKC0xLCAxKTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgtMSwgMSk7XG59XG5cbi50cmFuc2l0aW9uLW9uLWNvbG9yLWNoYW5nZSB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzLCBib3JkZXItY29sb3IgMC4zcywgY29sb3IgMC4zcztcbiAgLW1vei10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MsIGJvcmRlci1jb2xvciAwLjNzLCBjb2xvciAwLjNzO1xuICAtby10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MsIGJvcmRlci1jb2xvciAwLjNzLCBjb2xvciAwLjNzO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MsIGJvcmRlci1jb2xvciAwLjNzLCBjb2xvciAwLjNzO1xufVxuXG4uaG9yaXpvbnRhbC1zcGFjZS0xMCB7XG4gIHdpZHRoOiAxMHB4O1xufVxuXG4ubWFyZ2luLXRvcC1ib3R0b20ge1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuLm1haW50ZW5hbmNlLW1lc3NhZ2UtY29udGFpbmVyIHtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAyMHB4O1xuICBiYWNrZ3JvdW5kOiAjMWVhNDRmO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5wcm9kdWN0LWNhcmQtY29udGFpbmVyIHtcbiAgYm9yZGVyOiAwO1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbn1cblxuLnByb2R1Y3QtY2FyZC1jb250YWluZXIgLnByb2R1Y3QtY2FyZCB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ucHJvZHVjdC1jYXJkLWNvbnRhaW5lciAucHJvZHVjdC1jYXJkIC5wcm9kdWN0LWltYWdlLWNvbnRhaW5lciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnByb2R1Y3QtY2FyZC1jb250YWluZXIgLnByb2R1Y3QtY2FyZCAucHJvZHVjdC1pbWFnZS1jb250YWluZXI6YWN0aXZlIHtcbiAgYmFja2dyb3VuZDogIzAwMDtcbn1cblxuLnByb2R1Y3QtY2FyZC1jb250YWluZXIgLnByb2R1Y3QtY2FyZCAucHJvZHVjdC1pbWFnZS1jb250YWluZXI6YWN0aXZlIC5wcm9kdWN0LWltYWdlIHtcbiAgb3BhY2l0eTogMC44O1xufVxuXG4ucHJvZHVjdC1jYXJkLWNvbnRhaW5lciAucHJvZHVjdC1jYXJkIC5wcm9kdWN0LWJ1dHRvbnMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMjBweDtcbiAgcmlnaHQ6IDIwcHg7XG59XG5cbi5wcm9kdWN0LWNhcmQtY29udGFpbmVyIC5wcm9kdWN0LWNhcmQgLnByb2R1Y3QtYnV0dG9ucyAuYWRkLWJ1dHRvbiB7XG4gIHBhZGRpbmc6IDA7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5wcm9kdWN0LWNhcmQtY29udGFpbmVyIC5wcm9kdWN0LWNhcmQgLnByb2R1Y3QtaW1hZ2Uge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnByb2R1Y3QtY2FyZC1jb250YWluZXIgLnByb2R1Y3QtY2FyZCAucHJvZHVjdC1taW5pLWJhciB7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFlYTQ0ZjtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIHBhZGRpbmctdG9wOiAxMXB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTFweDtcbiAgbWFyZ2luLXRvcDogLTRweDtcbn1cblxuLnByb2R1Y3QtY2FyZC1jb250YWluZXIgLnByb2R1Y3QtY2FyZCAucHJvZHVjdC1taW5pLWJhciAuZWRpdC1idXR0b24ge1xuICBtYXJnaW4tdG9wOiAtNHB4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGNvbG9yOiAjMWVhNDRmO1xuICBmbG9hdDogbGVmdDtcbiAgYm9yZGVyLWNvbG9yOiAjY2NjO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgbWluLXdpZHRoOiAxMHB4O1xuICBwYWRkaW5nOiA0cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDA7XG4gIG1pbi1oZWlnaHQ6IDEwcHg7XG59XG5cbi5wcm9kdWN0LWNhcmQtY29udGFpbmVyIC5wcm9kdWN0LWNhcmQgLnByb2R1Y3QtbWluaS1iYXIgLmNvdW50IHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgbWFyZ2luLXRvcDogLTJweDtcbiAgcGFkZGluZzogMnB4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGNvbG9yOiAjMWVhNDRmO1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLm1hc29ucnktY29udGFpbmVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogODAlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZy10b3A6IDIwcHg7XG59XG5cbm5neC1tYXNvbnJ5IHtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5tYXNvbnJ5LWl0ZW0ge1xuICB3aWR0aDogMjM0cHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5pdGVtLWlubmVyIHtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbn1cblxuLnBhZ2luYXRpb24ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDAgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxZW07XG4gIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG59XG4iLCJAaW1wb3J0ICd+QGV2ZXItcGxhdGZvcm0vY29tbW9uLWFuZ3VsYXIvc3JjL3Njc3MvZXZlcmJpZS5jb21tb24nO1xuXG4ucHJvZHVjdC1jYXJkLWNvbnRhaW5lciB7XG5cdGJvcmRlcjogMDtcblx0cGFkZGluZy1ib3R0b206IDA7XG5cdC5wcm9kdWN0LWNhcmQge1xuXHRcdG1hcmdpbjogMDtcblx0XHRwYWRkaW5nOiAwO1xuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHQucHJvZHVjdC1pbWFnZS1jb250YWluZXIge1xuXHRcdFx0Y3Vyc29yOiBwb2ludGVyO1xuXHRcdH1cblx0XHQucHJvZHVjdC1pbWFnZS1jb250YWluZXI6YWN0aXZlIHtcblx0XHRcdGJhY2tncm91bmQ6ICMwMDA7XG5cdFx0XHQucHJvZHVjdC1pbWFnZSB7XG5cdFx0XHRcdG9wYWNpdHk6IDAuODtcblx0XHRcdH1cblx0XHR9XG5cdFx0LnByb2R1Y3QtYnV0dG9ucyB7XG5cdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHR0b3A6IDIwcHg7XG5cdFx0XHRyaWdodDogMjBweDtcblx0XHRcdC5hZGQtYnV0dG9uIHtcblx0XHRcdFx0cGFkZGluZzogMDtcblx0XHRcdFx0Zm9udC1zaXplOiAzMHB4O1xuXHRcdFx0XHRjb2xvcjogI2ZmZjtcblx0XHRcdH1cblx0XHR9XG5cdFx0LnByb2R1Y3QtaW1hZ2Uge1xuXHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0fVxuXHRcdC5wcm9kdWN0LW1pbmktYmFyIHtcblx0XHRcdGZvbnQtc2l6ZTogMTdweDtcblx0XHRcdGJhY2tncm91bmQtY29sb3I6ICRicmFuZDtcblx0XHRcdGNvbG9yOiB3aGl0ZTtcblx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRcdG1hcmdpbi1ib3R0b206IDA7XG5cdFx0XHRwYWRkaW5nLXRvcDogMTFweDtcblx0XHRcdHBhZGRpbmctYm90dG9tOiAxMXB4O1xuXHRcdFx0bWFyZ2luLXRvcDogLTRweDtcblx0XHRcdC5lZGl0LWJ1dHRvbiB7XG5cdFx0XHRcdG1hcmdpbi10b3A6IC00cHg7XG5cdFx0XHRcdGJvcmRlci1yYWRpdXM6IDNweDtcblx0XHRcdFx0Y29sb3I6ICRicmFuZDtcblx0XHRcdFx0ZmxvYXQ6IGxlZnQ7XG5cdFx0XHRcdGJvcmRlci1jb2xvcjogI2NjYztcblx0XHRcdFx0bWFyZ2luLWxlZnQ6IDEwcHg7XG5cdFx0XHRcdG1pbi13aWR0aDogMTBweDtcblx0XHRcdFx0cGFkZGluZzogNHB4O1xuXHRcdFx0XHRmb250LXNpemU6IDE2cHg7XG5cdFx0XHRcdGxpbmUtaGVpZ2h0OiAwO1xuXHRcdFx0XHRtaW4taGVpZ2h0OiAxMHB4O1xuXHRcdFx0fVxuXHRcdFx0LmNvdW50IHtcblx0XHRcdFx0YmFja2dyb3VuZDogI2ZmZjtcblx0XHRcdFx0bWFyZ2luLXRvcDogLTJweDtcblx0XHRcdFx0cGFkZGluZzogMnB4O1xuXHRcdFx0XHRib3JkZXItcmFkaXVzOiAzcHg7XG5cdFx0XHRcdGNvbG9yOiAkYnJhbmQ7XG5cdFx0XHRcdGZsb2F0OiByaWdodDtcblx0XHRcdFx0bWFyZ2luLXJpZ2h0OiAxMHB4O1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuXG4ubWFzb25yeS1jb250YWluZXIge1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdHdpZHRoOiA4MCU7XG5cdG1hcmdpbjogMCBhdXRvO1xuXHRwYWRkaW5nLXRvcDogMjBweDtcbn1cblxubmd4LW1hc29ucnkge1xuXHRtYXJnaW46IDAgYXV0bztcbn1cblxuLm1hc29ucnktaXRlbSB7XG5cdHdpZHRoOiAyMzRweDtcblx0bWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLml0ZW0taW5uZXIge1xuXHRib3JkZXItYm90dG9tOiBub25lO1xufVxuLnBhZ2luYXRpb24ge1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdHBhZGRpbmctYm90dG9tOiAxMHB4O1xuXHRwYWRkaW5nLWxlZnQ6IDAgIWltcG9ydGFudDtcblx0Zm9udC1zaXplOiAxZW07XG5cdGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/pages/+warehouse/all-products/all-products.component.ts":
/*!*********************************************************************!*\
  !*** ./src/pages/+warehouse/all-products/all-products.component.ts ***!
  \*********************************************************************/
/*! exports provided: AllProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllProductsComponent", function() { return AllProductsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_warehouse_products_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/warehouse-products.service */ "./src/services/warehouse-products.service.ts");
/* harmony import */ var _modules_server_common_entities_WarehouseProduct__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @modules/server.common/entities/WarehouseProduct */ "../common/src/entities/WarehouseProduct.ts");
/* harmony import */ var _modules_client_common_angular2_locale_product_locales_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @modules/client.common.angular2/locale/product-locales.service */ "../common-angular/src/locale/product-locales.service.ts");
/* harmony import */ var _modules_client_common_angular2_routers_warehouse_products_router_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @modules/client.common.angular2/routers/warehouse-products-router.service */ "../common-angular/src/routers/warehouse-products-router.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");







var AllProductsComponent = (function () {
    function AllProductsComponent(warehouseProductsService, translateProductLocales, warehouseProductsRouter, modalCtrl) {
        this.warehouseProductsService = warehouseProductsService;
        this.translateProductLocales = translateProductLocales;
        this.warehouseProductsRouter = warehouseProductsRouter;
        this.modalCtrl = modalCtrl;
        this.allProducts = [];
        this.masonryOptions = {
            itemSelector: '.masonry-item',
            columnWidth: 234,
            transitionDuration: '0.2s',
            gutter: 10,
            resize: true,
            initLayout: true,
            fitWidth: true,
        };
        this.page = 1;
        this.updateMasonryLayout = false;
        this.showNoProductsIcon = false;
    }
    AllProductsComponent.prototype.ngOnInit = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.warehouseProductsService
                    .getProductsCount(this.warehouseId)
                    .then(function (count) {
                    count === 0
                        ? (_this.showNoProductsIcon = true)
                        : (_this.showNoProductsIcon = false);
                    _this.productsCount = count;
                });
                this.loadPage(this.page);
                return [2];
            });
        });
    };
    AllProductsComponent.prototype.loadPage = function (page) {
        var _this = this;
        if (this.products$) {
            this.products$.unsubscribe();
        }
        this.products$ = this.warehouseProductsService
            .getProductsWithPagination(this.warehouseId, {
            skip: (page - 1) * 10,
            limit: 10,
        })
            .subscribe(function (products) {
            _this.updateMasonryLayout = true;
            _this.allProducts = products.map(function (p) {
                return new _modules_server_common_entities_WarehouseProduct__WEBPACK_IMPORTED_MODULE_3__["default"]({
                    _id: p._id,
                    count: p.count,
                    product: p.product,
                    isManufacturing: p.isManufacturing,
                    isCarrierRequired: p.isCarrierRequired,
                    isDeliveryRequired: p.isCarrierRequired,
                    isTakeaway: p.isTakeaway,
                    _createdAt: p._createdAt,
                    _updatedAt: p._updatedAt,
                    price: p.price,
                    initialPrice: p.initialPrice,
                });
            });
            _this.page = page;
        });
    };
    AllProductsComponent.prototype.ngOnDestroy = function () {
        if (this.products$) {
            this.products$.unsubscribe();
        }
    };
    AllProductsComponent.ctorParameters = function () { return [
        { type: _services_warehouse_products_service__WEBPACK_IMPORTED_MODULE_2__["WarehouseProductsService"] },
        { type: _modules_client_common_angular2_locale_product_locales_service__WEBPACK_IMPORTED_MODULE_4__["ProductLocalesService"] },
        { type: _modules_client_common_angular2_routers_warehouse_products_router_service__WEBPACK_IMPORTED_MODULE_5__["WarehouseProductsRouter"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], AllProductsComponent.prototype, "warehouseId", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function)
    ], AllProductsComponent.prototype, "presentCreateProductPopover", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function)
    ], AllProductsComponent.prototype, "addProduct", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function)
    ], AllProductsComponent.prototype, "getWarehouseProductImageUrl", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function)
    ], AllProductsComponent.prototype, "openEditProductModal", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function)
    ], AllProductsComponent.prototype, "truncateTitle", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function)
    ], AllProductsComponent.prototype, "localeTranslate", void 0);
    AllProductsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'merchant-all-products',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./all-products.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/pages/+warehouse/all-products/all-products.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./all-products.component.scss */ "./src/pages/+warehouse/all-products/all-products.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_warehouse_products_service__WEBPACK_IMPORTED_MODULE_2__["WarehouseProductsService"],
            _modules_client_common_angular2_locale_product_locales_service__WEBPACK_IMPORTED_MODULE_4__["ProductLocalesService"],
            _modules_client_common_angular2_routers_warehouse_products_router_service__WEBPACK_IMPORTED_MODULE_5__["WarehouseProductsRouter"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"]])
    ], AllProductsComponent);
    return AllProductsComponent;
}());



/***/ }),

/***/ "./src/pages/+warehouse/common/no-orders-info/no-orders-info.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/pages/+warehouse/common/no-orders-info/no-orders-info.component.scss ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".app-keyboard-open .app-hide-on-keyboard-open {\n  display: none;\n}\n\nhtml,\nbody {\n  overflow: visible !important;\n  background-color: #1a8e45 !important;\n}\n\n.menu-open .side-menu-content-ltr {\n  -webkit-transform: translate3d(250px, 0px, 0px) !important;\n}\n\n.menu-open .side-menu-content-rtl {\n  -webkit-transform: translate3d(-250px, 0px, 0px) !important;\n}\n\n.loading-container .loading {\n  background-color: transparent;\n}\n\n.loading-container .loading .spinner {\n  fill: #fff;\n  stroke: #fff;\n}\n\n.loading-container .loading .spinner svg {\n  width: 40px;\n  height: 40px;\n}\n\n.bright-vie .loading-container .loading .spinner {\n  fill: #1ea44f;\n  stroke: #1ea44f;\n}\n\n.swiper-slide img {\n  width: 100%;\n}\n\n.bar.bar-brand {\n  border-bottom: 2px solid #1c9b4b;\n  background: #1ea44f none;\n  color: white !important;\n}\n\n.bar.bar-brand .title {\n  color: white;\n}\n\n.bar.bar-brand .button-icon mr-1 {\n  color: white;\n}\n\n.brand-link {\n  color: #1ea44f;\n}\n\n.brand-link:active {\n  color: #353748;\n}\n\n.everbie-input {\n  height: 57px;\n  width: 100%;\n  font-size: 16px;\n  line-height: 20px;\n  border: solid #5c5f73 1px;\n  color: #fff;\n  background-color: inherit;\n  border-radius: 8px;\n  padding: 20px;\n  text-align: center;\n  -webkit-appearance: none;\n}\n\n.everbie-input::-webkit-input-placeholder {\n  color: #6d6f80;\n}\n\n.everbie-input::-moz-placeholder {\n  color: #6d6f80;\n}\n\n.everbie-input:-ms-input-placeholder {\n  color: #6d6f80;\n}\n\n.button.button-brand, .button-brand.everbie-button {\n  background-color: #1ea44f;\n  border-color: #1c9749;\n  color: #fff;\n}\n\n.button.button-brand.active, .button-brand.active.everbie-button, .button.button-brand.activated, .button-brand.activated.everbie-button {\n  background-color: #1da04d;\n  box-shadow: inset 0 1px 4px rgba(0, 0, 0, 0.1);\n}\n\n.button.button-dark-brand, .button-dark-brand.everbie-button {\n  background-color: #1a8e45;\n  border-color: #18823e;\n  color: #fff;\n}\n\n.button.button-dark-brand.active, .button-dark-brand.active.everbie-button, .button.button-dark-brand.activated, .button-dark-brand.activated.everbie-button {\n  background-color: #198a43;\n  box-shadow: inset 0 1px 4px rgba(0, 0, 0, 0.1);\n}\n\n.button.button-brand-lighted, .button-brand-lighted.everbie-button {\n  background-color: #353748;\n  border-color: #2f303f;\n  color: #fff;\n}\n\n.button.button-brand-lighted.active, .button-brand-lighted.active.everbie-button, .button.button-brand-lighted.activated, .button-brand-lighted.activated.everbie-button {\n  background-color: #333545;\n  box-shadow: inset 0 1px 4px rgba(0, 0, 0, 0.1);\n}\n\n.button.button-assertive.active, .active.everbie-button, .button.button-assertive.activated, .activated.everbie-button {\n  border-color: #aa403b !important;\n}\n\n.button.button-balanced.active, .button-balanced.active.everbie-button, .button.button-balanced.activated, .button-balanced.activated.everbie-button {\n  border-color: #2fc159 !important;\n}\n\n.button.button-balanced, .button-balanced.everbie-button {\n  background-color: #2db955;\n}\n\n.everbie-button {\n  border-radius: 8px !important;\n  font-size: 20px;\n  padding: 10px 16px;\n  margin-bottom: 0;\n  line-height: 34px;\n  background-color: #ce4843;\n}\n\n.bottom-0 {\n  position: absolute;\n  bottom: 0;\n}\n\n.no-padding {\n  padding: 0;\n}\n\n.no-padding-right {\n  padding-right: 0;\n}\n\n.no-padding-left {\n  padding-left: 0;\n}\n\n.no-padding-top {\n  padding-top: 0;\n}\n\n.no-padding-bottom {\n  padding-bottom: 0;\n}\n\n.text-align-right {\n  text-align: right;\n}\n\n.text-align-center {\n  text-align: center;\n}\n\n.text-align-left {\n  text-align: left;\n}\n\n.col-100 {\n  width: 100%;\n}\n\n.display-block {\n  display: block;\n}\n\n.header-bar-big-title {\n  font-size: 22px !important;\n  text-align: center !important;\n}\n\n.button-bar-right-container {\n  width: 280px;\n  margin-left: auto;\n}\n\n.pull-right {\n  margin-left: auto;\n}\n\n.plus-navbar-button::before {\n  font-size: 24px !important;\n}\n\n.border-color-brand {\n  border-color: #1ea44f;\n}\n\n.flip {\n  transform: scale(-1, 1);\n}\n\n.transition-on-color-change {\n  transition: background-color 0.3s, border-color 0.3s, color 0.3s;\n}\n\n.horizontal-space-10 {\n  width: 10px;\n}\n\n.margin-top-bottom {\n  margin-top: 5px;\n  margin-bottom: 5px;\n}\n\n.maintenance-message-container {\n  color: white;\n  padding: 20px;\n  background: #1ea44f;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  height: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvZC9Xb3JrL0FuZ3VsYXIvTmV3IGZvbGRlciAoMikvRG9sY2VHcm9jZXJ5L3BhY2thZ2VzL21lcmNoYW50LXRhYmxldC1pb25pYy9ub2RlX21vZHVsZXMvQGV2ZXItcGxhdGZvcm0vY29tbW9uLWFuZ3VsYXIvc3JjL3Njc3MvZXZlcmJpZS5jb21tb24uc2NzcyIsInNyYy9wYWdlcy8rd2FyZWhvdXNlL2NvbW1vbi9uby1vcmRlcnMtaW5mby9uby1vcmRlcnMtaW5mby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFlQTtFQUVFLGFBQWE7QUNmZjs7QUQyRkE7O0VBRUMsNEJBQTRCO0VBQzVCLG9DQUEwQztBQ3hGM0M7O0FEK0ZBO0VBRUUsMERBQTBEO0FDN0Y1RDs7QUQyRkE7RUFNRSwyREFBMkQ7QUM3RjdEOztBRGlHQTtFQUNDLDZCQUE2QjtBQzlGOUI7O0FENkZBO0VBSUUsVUFBVTtFQUNWLFlBQVk7QUM3RmQ7O0FEd0ZBO0VBT0csV0FBVztFQUNYLFlBQVk7QUMzRmY7O0FEZ0dBO0VBQ0MsYUEzSGM7RUE0SGQsZUE1SGM7QUMrQmY7O0FEZ0dBO0VBRUUsV0FBVztBQzlGYjs7QURzR0E7RUFFRSxnQ0FBMkM7RUFDM0Msd0JBQXVCO0VBQ3ZCLHVCQUF1QjtBQ3BHekI7O0FEZ0dBO0VBTUcsWUFBWTtBQ2xHZjs7QUQ0RkE7RUFTRyxZQUFZO0FDakdmOztBRDBHQTtFQUNDLGNBNUpjO0FDcURmOztBRHNHQTtFQUdFLGNBN0pxQjtBQ3dEdkI7O0FENkdBO0VBQ0MsWUFBWTtFQUNaLFdBQVc7RUFDWCxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLHdCQUF3QjtBQzFHekI7O0FER0M7RUFDQyxjQXdHMkI7QUN4RzdCOztBREVDO0VBQ0MsY0FxRzJCO0FDcEc3Qjs7QURDQztFQUNDLGNBa0cyQjtBQ2hHN0I7O0FEdUdBO0VBQ0MseUJBM0xjO0VBNExkLHFCQUFnQztFQUNoQyxXQUFXO0FDcEdaOztBRGlHQTtFQU1FLHlCQUFvQztFQUNwQyw4Q0FBOEM7QUNuR2hEOztBRHVHQTtFQUNDLHlCQXBNZ0M7RUFxTWhDLHFCQUF1QztFQUN2QyxXQUFXO0FDcEdaOztBRGlHQTtFQU1FLHlCQUEyQztFQUMzQyw4Q0FBOEM7QUNuR2hEOztBRHVHQTtFQUNDLHlCQWhOc0I7RUFpTnRCLHFCQUF3QztFQUN4QyxXQUFXO0FDcEdaOztBRGlHQTtFQU1FLHlCQUE0QztFQUM1Qyw4Q0FBOEM7QUNuR2hEOztBRHVHQTtFQUdFLGdDQUEwQztBQ3RHNUM7O0FEMEdBO0VBR0UsZ0NBQThDO0FDekdoRDs7QUQ2R0E7RUFDQyx5QkFBdUM7QUMxR3hDOztBRDZHQTtFQU1DLDZCQUE2QjtFQUU3QixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFFakIseUJBQXlCO0FDakgxQjs7QUR3SEE7RUFDQyxrQkFBa0I7RUFDbEIsU0FBUztBQ3JIVjs7QUR3SEE7RUFDQyxVQUFVO0FDckhYOztBRHdIQTtFQUNDLGdCQUFnQjtBQ3JIakI7O0FEd0hBO0VBQ0MsZUFBZTtBQ3JIaEI7O0FEd0hBO0VBQ0MsY0FBYztBQ3JIZjs7QUR3SEE7RUFDQyxpQkFBaUI7QUNySGxCOztBRHdIQTtFQUNDLGlCQUFpQjtBQ3JIbEI7O0FEd0hBO0VBQ0Msa0JBQWtCO0FDckhuQjs7QUR3SEE7RUFDQyxnQkFBZ0I7QUNySGpCOztBRHdIQTtFQUNDLFdBQVc7QUNySFo7O0FEd0hBO0VBQ0MsY0FBYztBQ3JIZjs7QUR3SEE7RUFDQywwQkFBMEI7RUFDMUIsNkJBQTZCO0FDckg5Qjs7QUR3SEE7RUFDQyxZQUFZO0VBQ1osaUJBQWlCO0FDckhsQjs7QUR3SEE7RUFDQyxpQkFBaUI7QUNySGxCOztBRHdIQTtFQUVFLDBCQUEwQjtBQ3RINUI7O0FEMEhBO0VBQ0MscUJBblVjO0FDNE1mOztBRDBIQTtFQXRTQyx1QkF1UytCO0FDbkhoQzs7QURzSEE7RUFNQyxnRUFMWTtBQ2hIYjs7QUR3SEE7RUFDQyxXQUFXO0FDckhaOztBRHdIQTtFQUNDLGVBQWU7RUFDZixrQkFBa0I7QUNySG5COztBRHdIQTtFQUNDLFlBQVk7RUFDWixhQUFhO0VBRWIsbUJBaFdjO0VBa1dkLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixZQUFZO0FDdkhiIiwiZmlsZSI6InNyYy9wYWdlcy8rd2FyZWhvdXNlL2NvbW1vbi9uby1vcmRlcnMtaW5mby9uby1vcmRlcnMtaW5mby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSBwYXRoIGZvciBvdXIgaW9uaWNvbnMgZm9udCBmaWxlcywgcmVsYXRpdmUgdG8gdGhlIGJ1aWx0IENTUyBpbiB3d3cvY3NzXG4kaW9uaWNvbnMtZm9udC1wYXRoOiAnLi4vLi4vbGliL2lvbmljL3JlbGVhc2UvZm9udHMnICFkZWZhdWx0O1xuJGZhLWZvbnQtcGF0aDogJy4uLy4uL2xpYi9mb250LWF3ZXNvbWUvZm9udHMnICFkZWZhdWx0O1xuXG4kYnJhbmQ6ICMxZWE0NGY7XG4kYnJhbmQtbGlnaHRlZDogIzM1Mzc0ODtcbiRicmFuZC1kYXJrZW46IGRhcmtlbigkYnJhbmQsIDUlKTsgLy8gIzFlYTQ0ZlxuXG4kYXNzZXJ0aXZlOiAjYmQ0NzQyO1xuJGFzc2VydGl2ZS1saWdodGVkOiAjY2U0ODQzO1xuJGFzc2VydGl2ZS1kYXJrZW46IGRhcmtlbigkYXNzZXJ0aXZlLCA1JSk7XG5cbiRiYWxhbmNlZDogIzMzY2Q1ZjtcbiRiYWxhbmNlZC1saWdodGVkOiAjNDdkMjZmO1xuXG4uYXBwLWtleWJvYXJkLW9wZW4ge1xuXHQuYXBwLWhpZGUtb24ta2V5Ym9hcmQtb3BlbiB7XG5cdFx0ZGlzcGxheTogbm9uZTtcblx0fVxufVxuXG4vLy8vLy8vLy8vLy8vLy9cbi8vLyBNaXhpbnMgLy8vL1xuLy8vLy8vLy8vLy8vLy8vXG5cbkBtaXhpbiBjYWxjKCRwcm9wZXJ0eSwgJGV4cHJlc3Npb24uLi4pIHtcblx0I3skcHJvcGVydHl9OiAtbW96LWNhbGMoI3skZXhwcmVzc2lvbn0pO1xuXHQjeyRwcm9wZXJ0eX06IC13ZWJraXQtY2FsYygjeyRleHByZXNzaW9ufSk7XG5cdCN7JHByb3BlcnR5fTogY2FsYygjeyRleHByZXNzaW9ufSk7XG59XG5cbkBtaXhpbiB0cmFuc2Zvcm0oJHRyYW5zZm9ybXMpIHtcblx0LW1vei10cmFuc2Zvcm06ICR0cmFuc2Zvcm1zO1xuXHQtby10cmFuc2Zvcm06ICR0cmFuc2Zvcm1zO1xuXHQtbXMtdHJhbnNmb3JtOiAkdHJhbnNmb3Jtcztcblx0LXdlYmtpdC10cmFuc2Zvcm06ICR0cmFuc2Zvcm1zO1xuXHR0cmFuc2Zvcm06ICR0cmFuc2Zvcm1zO1xufVxuXG5AbWl4aW4gdmVydGljYWwtYWxpZ24oJHBvc2l0aW9uOiByZWxhdGl2ZSkge1xuXHRwb3NpdGlvbjogJHBvc2l0aW9uO1xuXHR0b3A6IDUwJTtcblx0LXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG5cdC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cblxuQG1peGluIGNlbnRlcigkcG9zaXRpb246IHJlbGF0aXZlKSB7XG5cdHBvc2l0aW9uOiAkcG9zaXRpb247XG5cdHRvcDogNTAlO1xuXHRsZWZ0OiA1MCU7XG5cdC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG5cdC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcblx0dHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5cbkBtaXhpbiB0b3AtY2VudGVyKCRwb3NpdGlvbjogcmVsYXRpdmUpIHtcblx0cG9zaXRpb246ICRwb3NpdGlvbjtcblx0bGVmdDogNTAlO1xuXHQtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDApO1xuXHQtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCk7XG5cdHRvcDogMDtcbn1cblxuQG1peGluIGJvdHRvbS1jZW50ZXIoJHBvc2l0aW9uOiByZWxhdGl2ZSkge1xuXHRwb3NpdGlvbjogJHBvc2l0aW9uO1xuXHRsZWZ0OiA1MCU7XG5cdC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCk7XG5cdC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwKTtcblx0Ym90dG9tOiAwO1xufVxuXG5AbWl4aW4gY2FsYygkcHJvcGVydHksICRleHByZXNzaW9uKSB7XG5cdCN7JHByb3BlcnR5fTogLXdlYmtpdC1jYWxjKCN7JGV4cHJlc3Npb259KTtcblx0I3skcHJvcGVydHl9OiBjYWxjKCN7JGV4cHJlc3Npb259KTtcbn1cblxuQG1peGluIHBsYWNlaG9sZGVyKCRjb2xvcikge1xuXHQmOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcblx0XHRjb2xvcjogJGNvbG9yO1xuXHR9XG5cdCY6Oi1tb3otcGxhY2Vob2xkZXIge1xuXHRcdGNvbG9yOiAkY29sb3I7XG5cdH1cblx0JjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuXHRcdGNvbG9yOiAkY29sb3I7XG5cdH1cbn1cblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8vIE5vcm1hbGl6ZSBIdG1sIEFuZCBCb2R5IC8vL1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG5odG1sLFxuYm9keSB7XG5cdG92ZXJmbG93OiB2aXNpYmxlICFpbXBvcnRhbnQ7XG5cdGJhY2tncm91bmQtY29sb3I6ICRicmFuZC1kYXJrZW4gIWltcG9ydGFudDtcbn1cblxuLy8vLy8vLy8vLy8vLy8vXG4vLyBJb25pYyBBZGQgLy9cbi8vLy8vLy8vLy8vLy8vL1xuXG4ubWVudS1vcGVuIHtcblx0LnNpZGUtbWVudS1jb250ZW50LWx0ciB7XG5cdFx0LXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDI1MHB4LCAwcHgsIDBweCkgIWltcG9ydGFudDtcblx0fVxuXG5cdC5zaWRlLW1lbnUtY29udGVudC1ydGwge1xuXHRcdC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMjUwcHgsIDBweCwgMHB4KSAhaW1wb3J0YW50O1xuXHR9XG59XG5cbi5sb2FkaW5nLWNvbnRhaW5lciAubG9hZGluZyB7XG5cdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuXG5cdC5zcGlubmVyIHtcblx0XHRmaWxsOiAjZmZmO1xuXHRcdHN0cm9rZTogI2ZmZjtcblx0XHRzdmcge1xuXHRcdFx0d2lkdGg6IDQwcHg7XG5cdFx0XHRoZWlnaHQ6IDQwcHg7XG5cdFx0fVxuXHR9XG59XG5cbi5icmlnaHQtdmllIC5sb2FkaW5nLWNvbnRhaW5lciAubG9hZGluZyAuc3Bpbm5lciB7XG5cdGZpbGw6ICRicmFuZDtcblx0c3Ryb2tlOiAkYnJhbmQ7XG59XG5cbi5zd2lwZXItc2xpZGUge1xuXHRpbWcge1xuXHRcdHdpZHRoOiAxMDAlO1xuXHR9XG59XG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8vIEJhciBTdHlsZXMgLy8vXG4vLy8vLy8vLy8vLy8vLy8vLy9cblxuLmJhciB7XG5cdCYuYmFyLWJyYW5kIHtcblx0XHRib3JkZXItYm90dG9tOiAycHggc29saWQgZGFya2VuKCRicmFuZCwgMiUpO1xuXHRcdGJhY2tncm91bmQ6ICRicmFuZCBub25lO1xuXHRcdGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuXHRcdC50aXRsZSB7XG5cdFx0XHRjb2xvcjogd2hpdGU7XG5cdFx0fVxuXHRcdC5idXR0b24taWNvbiBtci0xIHtcblx0XHRcdGNvbG9yOiB3aGl0ZTtcblx0XHR9XG5cdH1cbn1cblxuLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8vIEN1c3RvbSBsaW5rIC8vL1xuLy8vLy8vLy8vLy8vLy8vLy8vXG5cbi5icmFuZC1saW5rIHtcblx0Y29sb3I6ICRicmFuZDtcblx0JjphY3RpdmUge1xuXHRcdGNvbG9yOiAkYnJhbmQtbGlnaHRlZDtcblx0fVxufVxuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vLyBFdmVyYmllIElucHV0IC8vL1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbi5ldmVyYmllLWlucHV0IHtcblx0aGVpZ2h0OiA1N3B4O1xuXHR3aWR0aDogMTAwJTtcblx0Zm9udC1zaXplOiAxNnB4O1xuXHRsaW5lLWhlaWdodDogMjBweDtcblx0Ym9yZGVyOiBzb2xpZCAjNWM1ZjczIDFweDtcblx0Y29sb3I6ICNmZmY7XG5cdGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG5cdGJvcmRlci1yYWRpdXM6IDhweDtcblx0cGFkZGluZzogMjBweDtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHQtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG5cblx0QGluY2x1ZGUgcGxhY2Vob2xkZXIoIzZkNmY4MCk7XG59XG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vLyBBZGQgQnV0dG9uIFN0eWxlcyAvLy9cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuLmJ1dHRvbi5idXR0b24tYnJhbmQge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAkYnJhbmQ7XG5cdGJvcmRlci1jb2xvcjogZGFya2VuKCRicmFuZCwgMyUpO1xuXHRjb2xvcjogI2ZmZjtcblx0Ji5hY3RpdmUsXG5cdCYuYWN0aXZhdGVkIHtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZW4oJGJyYW5kLCAxJSk7XG5cdFx0Ym94LXNoYWRvdzogaW5zZXQgMCAxcHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcblx0fVxufVxuXG4uYnV0dG9uLmJ1dHRvbi1kYXJrLWJyYW5kIHtcblx0YmFja2dyb3VuZC1jb2xvcjogJGJyYW5kLWRhcmtlbjtcblx0Ym9yZGVyLWNvbG9yOiBkYXJrZW4oJGJyYW5kLWRhcmtlbiwgMyUpO1xuXHRjb2xvcjogI2ZmZjtcblx0Ji5hY3RpdmUsXG5cdCYuYWN0aXZhdGVkIHtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZW4oJGJyYW5kLWRhcmtlbiwgMSUpO1xuXHRcdGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG5cdH1cbn1cblxuLmJ1dHRvbi5idXR0b24tYnJhbmQtbGlnaHRlZCB7XG5cdGJhY2tncm91bmQtY29sb3I6ICRicmFuZC1saWdodGVkO1xuXHRib3JkZXItY29sb3I6IGRhcmtlbigkYnJhbmQtbGlnaHRlZCwgMyUpO1xuXHRjb2xvcjogI2ZmZjtcblx0Ji5hY3RpdmUsXG5cdCYuYWN0aXZhdGVkIHtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZW4oJGJyYW5kLWxpZ2h0ZWQsIDElKTtcblx0XHRib3gtc2hhZG93OiBpbnNldCAwIDFweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuXHR9XG59XG5cbi5idXR0b24uYnV0dG9uLWFzc2VydGl2ZSB7XG5cdCYuYWN0aXZlLFxuXHQmLmFjdGl2YXRlZCB7XG5cdFx0Ym9yZGVyLWNvbG9yOiAkYXNzZXJ0aXZlLWRhcmtlbiAhaW1wb3J0YW50O1xuXHR9XG59XG5cbi5idXR0b24uYnV0dG9uLWJhbGFuY2VkIHtcblx0Ji5hY3RpdmUsXG5cdCYuYWN0aXZhdGVkIHtcblx0XHRib3JkZXItY29sb3I6IGRhcmtlbigkYmFsYW5jZWQsIDMlKSAhaW1wb3J0YW50O1xuXHR9XG59XG5cbi5idXR0b24uYnV0dG9uLWJhbGFuY2VkIHtcblx0YmFja2dyb3VuZC1jb2xvcjogZGFya2VuKCRiYWxhbmNlZCwgNSUpO1xufVxuXG4uZXZlcmJpZS1idXR0b24ge1xuXHQvLyBAZXh0ZW5kIC53YXZlcy1lZmZlY3Q7XG5cdC8vIEBleHRlbmQgLndhdmVzLWNsYXNzaWM7XG5cdEBleHRlbmQgLmJ1dHRvbjtcblx0QGV4dGVuZCAuYnV0dG9uLWFzc2VydGl2ZTtcblxuXHRib3JkZXItcmFkaXVzOiA4cHggIWltcG9ydGFudDtcblxuXHRmb250LXNpemU6IDIwcHg7XG5cdHBhZGRpbmc6IDEwcHggMTZweDtcblx0bWFyZ2luLWJvdHRvbTogMDtcblx0bGluZS1oZWlnaHQ6IDM0cHg7XG5cblx0YmFja2dyb3VuZC1jb2xvcjogI2NlNDg0Mztcbn1cblxuLy8vLy8vLy8vLy8vL1xuLy8vIFV0aWxzIC8vL1xuLy8vLy8vLy8vLy8vL1xuXG4uYm90dG9tLTAge1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdGJvdHRvbTogMDtcbn1cblxuLm5vLXBhZGRpbmcge1xuXHRwYWRkaW5nOiAwO1xufVxuXG4ubm8tcGFkZGluZy1yaWdodCB7XG5cdHBhZGRpbmctcmlnaHQ6IDA7XG59XG5cbi5uby1wYWRkaW5nLWxlZnQge1xuXHRwYWRkaW5nLWxlZnQ6IDA7XG59XG5cbi5uby1wYWRkaW5nLXRvcCB7XG5cdHBhZGRpbmctdG9wOiAwO1xufVxuXG4ubm8tcGFkZGluZy1ib3R0b20ge1xuXHRwYWRkaW5nLWJvdHRvbTogMDtcbn1cblxuLnRleHQtYWxpZ24tcmlnaHQge1xuXHR0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLnRleHQtYWxpZ24tY2VudGVyIHtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udGV4dC1hbGlnbi1sZWZ0IHtcblx0dGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLmNvbC0xMDAge1xuXHR3aWR0aDogMTAwJTtcbn1cblxuLmRpc3BsYXktYmxvY2sge1xuXHRkaXNwbGF5OiBibG9jaztcbn1cblxuLmhlYWRlci1iYXItYmlnLXRpdGxlIHtcblx0Zm9udC1zaXplOiAyMnB4ICFpbXBvcnRhbnQ7XG5cdHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xufVxuXG4uYnV0dG9uLWJhci1yaWdodC1jb250YWluZXIge1xuXHR3aWR0aDogMjgwcHg7XG5cdG1hcmdpbi1sZWZ0OiBhdXRvO1xufVxuXG4ucHVsbC1yaWdodCB7XG5cdG1hcmdpbi1sZWZ0OiBhdXRvO1xufVxuXG4ucGx1cy1uYXZiYXItYnV0dG9uIHtcblx0Jjo6YmVmb3JlIHtcblx0XHRmb250LXNpemU6IDI0cHggIWltcG9ydGFudDtcblx0fVxufVxuXG4uYm9yZGVyLWNvbG9yLWJyYW5kIHtcblx0Ym9yZGVyLWNvbG9yOiAkYnJhbmQ7XG59XG5cbi5mbGlwIHtcblx0QGluY2x1ZGUgdHJhbnNmb3JtKHNjYWxlKC0xLCAxKSk7XG59XG5cbi50cmFuc2l0aW9uLW9uLWNvbG9yLWNoYW5nZSB7XG5cdCRzcGVlZDogMC4zcztcblx0LXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yICRzcGVlZCwgYm9yZGVyLWNvbG9yICRzcGVlZCxcblx0XHRjb2xvciAkc3BlZWQ7XG5cdC1tb3otdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAkc3BlZWQsIGJvcmRlci1jb2xvciAkc3BlZWQsIGNvbG9yICRzcGVlZDtcblx0LW8tdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAkc3BlZWQsIGJvcmRlci1jb2xvciAkc3BlZWQsIGNvbG9yICRzcGVlZDtcblx0dHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAkc3BlZWQsIGJvcmRlci1jb2xvciAkc3BlZWQsIGNvbG9yICRzcGVlZDtcbn1cblxuLmhvcml6b250YWwtc3BhY2UtMTAge1xuXHR3aWR0aDogMTBweDtcbn1cblxuLm1hcmdpbi10b3AtYm90dG9tIHtcblx0bWFyZ2luLXRvcDogNXB4O1xuXHRtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbi5tYWludGVuYW5jZS1tZXNzYWdlLWNvbnRhaW5lciB7XG5cdGNvbG9yOiB3aGl0ZTtcblx0cGFkZGluZzogMjBweDtcblxuXHRiYWNrZ3JvdW5kOiAkYnJhbmQ7XG5cblx0ZGlzcGxheTogZmxleDtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0aGVpZ2h0OiAxMDAlO1xufVxuIiwiLmFwcC1rZXlib2FyZC1vcGVuIC5hcHAtaGlkZS1vbi1rZXlib2FyZC1vcGVuIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuaHRtbCxcbmJvZHkge1xuICBvdmVyZmxvdzogdmlzaWJsZSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWE4ZTQ1ICFpbXBvcnRhbnQ7XG59XG5cbi5tZW51LW9wZW4gLnNpZGUtbWVudS1jb250ZW50LWx0ciB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgyNTBweCwgMHB4LCAwcHgpICFpbXBvcnRhbnQ7XG59XG5cbi5tZW51LW9wZW4gLnNpZGUtbWVudS1jb250ZW50LXJ0bCB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMjUwcHgsIDBweCwgMHB4KSAhaW1wb3J0YW50O1xufVxuXG4ubG9hZGluZy1jb250YWluZXIgLmxvYWRpbmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLmxvYWRpbmctY29udGFpbmVyIC5sb2FkaW5nIC5zcGlubmVyIHtcbiAgZmlsbDogI2ZmZjtcbiAgc3Ryb2tlOiAjZmZmO1xufVxuXG4ubG9hZGluZy1jb250YWluZXIgLmxvYWRpbmcgLnNwaW5uZXIgc3ZnIHtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbn1cblxuLmJyaWdodC12aWUgLmxvYWRpbmctY29udGFpbmVyIC5sb2FkaW5nIC5zcGlubmVyIHtcbiAgZmlsbDogIzFlYTQ0ZjtcbiAgc3Ryb2tlOiAjMWVhNDRmO1xufVxuXG4uc3dpcGVyLXNsaWRlIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uYmFyLmJhci1icmFuZCB7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMWM5YjRiO1xuICBiYWNrZ3JvdW5kOiAjMWVhNDRmIG5vbmU7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG4uYmFyLmJhci1icmFuZCAudGl0bGUge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5iYXIuYmFyLWJyYW5kIC5idXR0b24taWNvbiBtci0xIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uYnJhbmQtbGluayB7XG4gIGNvbG9yOiAjMWVhNDRmO1xufVxuXG4uYnJhbmQtbGluazphY3RpdmUge1xuICBjb2xvcjogIzM1Mzc0ODtcbn1cblxuLmV2ZXJiaWUtaW5wdXQge1xuICBoZWlnaHQ6IDU3cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBib3JkZXI6IHNvbGlkICM1YzVmNzMgMXB4O1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBwYWRkaW5nOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbn1cblxuLmV2ZXJiaWUtaW5wdXQ6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBjb2xvcjogIzZkNmY4MDtcbn1cblxuLmV2ZXJiaWUtaW5wdXQ6Oi1tb3otcGxhY2Vob2xkZXIge1xuICBjb2xvcjogIzZkNmY4MDtcbn1cblxuLmV2ZXJiaWUtaW5wdXQ6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICM2ZDZmODA7XG59XG5cbi5idXR0b24uYnV0dG9uLWJyYW5kLCAuYnV0dG9uLWJyYW5kLmV2ZXJiaWUtYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFlYTQ0ZjtcbiAgYm9yZGVyLWNvbG9yOiAjMWM5NzQ5O1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmJ1dHRvbi5idXR0b24tYnJhbmQuYWN0aXZlLCAuYnV0dG9uLWJyYW5kLmFjdGl2ZS5ldmVyYmllLWJ1dHRvbiwgLmJ1dHRvbi5idXR0b24tYnJhbmQuYWN0aXZhdGVkLCAuYnV0dG9uLWJyYW5kLmFjdGl2YXRlZC5ldmVyYmllLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxZGEwNGQ7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbi5idXR0b24uYnV0dG9uLWRhcmstYnJhbmQsIC5idXR0b24tZGFyay1icmFuZC5ldmVyYmllLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxYThlNDU7XG4gIGJvcmRlci1jb2xvcjogIzE4ODIzZTtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5idXR0b24uYnV0dG9uLWRhcmstYnJhbmQuYWN0aXZlLCAuYnV0dG9uLWRhcmstYnJhbmQuYWN0aXZlLmV2ZXJiaWUtYnV0dG9uLCAuYnV0dG9uLmJ1dHRvbi1kYXJrLWJyYW5kLmFjdGl2YXRlZCwgLmJ1dHRvbi1kYXJrLWJyYW5kLmFjdGl2YXRlZC5ldmVyYmllLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxOThhNDM7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbi5idXR0b24uYnV0dG9uLWJyYW5kLWxpZ2h0ZWQsIC5idXR0b24tYnJhbmQtbGlnaHRlZC5ldmVyYmllLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNTM3NDg7XG4gIGJvcmRlci1jb2xvcjogIzJmMzAzZjtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5idXR0b24uYnV0dG9uLWJyYW5kLWxpZ2h0ZWQuYWN0aXZlLCAuYnV0dG9uLWJyYW5kLWxpZ2h0ZWQuYWN0aXZlLmV2ZXJiaWUtYnV0dG9uLCAuYnV0dG9uLmJ1dHRvbi1icmFuZC1saWdodGVkLmFjdGl2YXRlZCwgLmJ1dHRvbi1icmFuZC1saWdodGVkLmFjdGl2YXRlZC5ldmVyYmllLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM1NDU7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbi5idXR0b24uYnV0dG9uLWFzc2VydGl2ZS5hY3RpdmUsIC5hY3RpdmUuZXZlcmJpZS1idXR0b24sIC5idXR0b24uYnV0dG9uLWFzc2VydGl2ZS5hY3RpdmF0ZWQsIC5hY3RpdmF0ZWQuZXZlcmJpZS1idXR0b24ge1xuICBib3JkZXItY29sb3I6ICNhYTQwM2IgIWltcG9ydGFudDtcbn1cblxuLmJ1dHRvbi5idXR0b24tYmFsYW5jZWQuYWN0aXZlLCAuYnV0dG9uLWJhbGFuY2VkLmFjdGl2ZS5ldmVyYmllLWJ1dHRvbiwgLmJ1dHRvbi5idXR0b24tYmFsYW5jZWQuYWN0aXZhdGVkLCAuYnV0dG9uLWJhbGFuY2VkLmFjdGl2YXRlZC5ldmVyYmllLWJ1dHRvbiB7XG4gIGJvcmRlci1jb2xvcjogIzJmYzE1OSAhaW1wb3J0YW50O1xufVxuXG4uYnV0dG9uLmJ1dHRvbi1iYWxhbmNlZCwgLmJ1dHRvbi1iYWxhbmNlZC5ldmVyYmllLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyZGI5NTU7XG59XG5cbi5ldmVyYmllLWJ1dHRvbiB7XG4gIGJvcmRlci1yYWRpdXM6IDhweCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDIwcHg7XG4gIHBhZGRpbmc6IDEwcHggMTZweDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgbGluZS1oZWlnaHQ6IDM0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjZTQ4NDM7XG59XG5cbi5ib3R0b20tMCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xufVxuXG4ubm8tcGFkZGluZyB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5uby1wYWRkaW5nLXJpZ2h0IHtcbiAgcGFkZGluZy1yaWdodDogMDtcbn1cblxuLm5vLXBhZGRpbmctbGVmdCB7XG4gIHBhZGRpbmctbGVmdDogMDtcbn1cblxuLm5vLXBhZGRpbmctdG9wIHtcbiAgcGFkZGluZy10b3A6IDA7XG59XG5cbi5uby1wYWRkaW5nLWJvdHRvbSB7XG4gIHBhZGRpbmctYm90dG9tOiAwO1xufVxuXG4udGV4dC1hbGlnbi1yaWdodCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4udGV4dC1hbGlnbi1jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi50ZXh0LWFsaWduLWxlZnQge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4uY29sLTEwMCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZGlzcGxheS1ibG9jayB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uaGVhZGVyLWJhci1iaWctdGl0bGUge1xuICBmb250LXNpemU6IDIycHggIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG59XG5cbi5idXR0b24tYmFyLXJpZ2h0LWNvbnRhaW5lciB7XG4gIHdpZHRoOiAyODBweDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG59XG5cbi5wdWxsLXJpZ2h0IHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG59XG5cbi5wbHVzLW5hdmJhci1idXR0b246OmJlZm9yZSB7XG4gIGZvbnQtc2l6ZTogMjRweCAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWNvbG9yLWJyYW5kIHtcbiAgYm9yZGVyLWNvbG9yOiAjMWVhNDRmO1xufVxuXG4uZmxpcCB7XG4gIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgtMSwgMSk7XG4gIC1vLXRyYW5zZm9ybTogc2NhbGUoLTEsIDEpO1xuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgtMSwgMSk7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgtMSwgMSk7XG4gIHRyYW5zZm9ybTogc2NhbGUoLTEsIDEpO1xufVxuXG4udHJhbnNpdGlvbi1vbi1jb2xvci1jaGFuZ2Uge1xuICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcywgYm9yZGVyLWNvbG9yIDAuM3MsIGNvbG9yIDAuM3M7XG4gIC1tb3otdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzLCBib3JkZXItY29sb3IgMC4zcywgY29sb3IgMC4zcztcbiAgLW8tdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzLCBib3JkZXItY29sb3IgMC4zcywgY29sb3IgMC4zcztcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzLCBib3JkZXItY29sb3IgMC4zcywgY29sb3IgMC4zcztcbn1cblxuLmhvcml6b250YWwtc3BhY2UtMTAge1xuICB3aWR0aDogMTBweDtcbn1cblxuLm1hcmdpbi10b3AtYm90dG9tIHtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbi5tYWludGVuYW5jZS1tZXNzYWdlLWNvbnRhaW5lciB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMjBweDtcbiAgYmFja2dyb3VuZDogIzFlYTQ0ZjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuIl19 */");

/***/ }),

/***/ "./src/pages/+warehouse/common/no-orders-info/no-orders-info.component.ts":
/*!********************************************************************************!*\
  !*** ./src/pages/+warehouse/common/no-orders-info/no-orders-info.component.ts ***!
  \********************************************************************************/
/*! exports provided: NoOrdersInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoOrdersInfoComponent", function() { return NoOrdersInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NoOrdersInfoComponent = (function () {
    function NoOrdersInfoComponent() {
        this.toggleOrderContainer = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], NoOrdersInfoComponent.prototype, "filterMode", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], NoOrdersInfoComponent.prototype, "toggleOrderContainer", void 0);
    NoOrdersInfoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'no-orders-info',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./no-orders-info.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/pages/+warehouse/common/no-orders-info/no-orders-info.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./no-orders-info.component.scss */ "./src/pages/+warehouse/common/no-orders-info/no-orders-info.component.scss")).default]
        })
    ], NoOrdersInfoComponent);
    return NoOrdersInfoComponent;
}());



/***/ }),

/***/ "./src/pages/+warehouse/common/warehouse.common.module.ts":
/*!****************************************************************!*\
  !*** ./src/pages/+warehouse/common/warehouse.common.module.ts ***!
  \****************************************************************/
/*! exports provided: WarehouseCommonModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WarehouseCommonModule", function() { return WarehouseCommonModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _src_app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../src/app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _no_orders_info_no_orders_info_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./no-orders-info/no-orders-info.component */ "./src/pages/+warehouse/common/no-orders-info/no-orders-info.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");








var COMPONENTS = [_no_orders_info_no_orders_info_component__WEBPACK_IMPORTED_MODULE_5__["NoOrdersInfoComponent"]];
var WarehouseCommonModule = (function () {
    function WarehouseCommonModule() {
    }
    WarehouseCommonModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: COMPONENTS,
            exports: COMPONENTS,
            providers: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonicModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"].forChild({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateLoader"],
                        useFactory: _src_app_app_module__WEBPACK_IMPORTED_MODULE_4__["HttpLoaderFactory"],
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]],
                    },
                }),
            ],
        })
    ], WarehouseCommonModule);
    return WarehouseCommonModule;
}());



/***/ }),

/***/ "./src/pages/+warehouse/create-product-type-popup/create-product-type-popup.module.ts":
/*!********************************************************************************************!*\
  !*** ./src/pages/+warehouse/create-product-type-popup/create-product-type-popup.module.ts ***!
  \********************************************************************************************/
/*! exports provided: CreateProductTypePopupPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateProductTypePopupPageModule", function() { return CreateProductTypePopupPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "../../node_modules/@ionic-native/file-transfer/ngx/index.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/fesm5/ng2-file-upload.js");
/* harmony import */ var _create_product_type_popup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./create-product-type-popup */ "./src/pages/+warehouse/create-product-type-popup/create-product-type-popup.ts");
/* harmony import */ var _services_products_category_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/products-category.service */ "./src/services/products-category.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _product_pictures_popup_product_images_popup_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../product-pictures-popup/product-images-popup.module */ "./src/pages/+warehouse/product-pictures-popup/product-images-popup.module.ts");











var CreateProductTypePopupPageModule = (function () {
    function CreateProductTypePopupPageModule() {
    }
    CreateProductTypePopupPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_create_product_type_popup__WEBPACK_IMPORTED_MODULE_5__["CreateProductTypePopupPage"]],
            entryComponents: [_create_product_type_popup__WEBPACK_IMPORTED_MODULE_5__["CreateProductTypePopupPage"]],
            providers: [_ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_2__["FileTransfer"], _services_products_category_service__WEBPACK_IMPORTED_MODULE_6__["ProductsCategoryService"]],
            imports: [
                ng2_file_upload__WEBPACK_IMPORTED_MODULE_4__["FileUploadModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"].forChild(),
                _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonicModule"],
                _product_pictures_popup_product_images_popup_module__WEBPACK_IMPORTED_MODULE_10__["ProductImagesPopupModule"],
            ],
        })
    ], CreateProductTypePopupPageModule);
    return CreateProductTypePopupPageModule;
}());



/***/ }),

/***/ "./src/pages/+warehouse/create-product-type-popup/create-product-type-popup.scss":
/*!***************************************************************************************!*\
  !*** ./src/pages/+warehouse/create-product-type-popup/create-product-type-popup.scss ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".create-product-type-popup #fileInput {\n  visibility: hidden;\n}\n\n.create-product-type-popup .popup-input {\n  display: block;\n  margin-top: 1vh !important;\n  width: 100%;\n}\n\n.create-product-type-popup .upload-text:hover,\n.create-product-type-popup .upload-icon:hover {\n  cursor: pointer;\n}\n\n.create-product-type-popup .dragDrop {\n  position: absolute;\n  top: 15px;\n  width: 90%;\n  margin: 10 auto;\n}\n\n.create-product-type-popup .select {\n  font-size: 14px;\n}\n\n.create-product-type-popup .items-center {\n  display: flex;\n  align-items: center;\n}\n\n.create-product-type-popup .popup-half .title-popup {\n  margin-top: 10px;\n}\n\n.create-product-type-popup .popup-half label {\n  width: 100%;\n}\n\n.create-product-type-popup .popup-half label span {\n  font-size: 14px;\n}\n\n.create-product-type-popup #image-holder {\n  height: 78%;\n  border-radius: 3px;\n  padding-top: 15%;\n  margin-bottom: 6%;\n  margin-top: 13px !important;\n}\n\n.create-product-type-popup #image-holder .dragDrop {\n  margin: auto !important;\n  position: relative;\n}\n\n.create-product-type-popup #image-holder + div.button-bar button.button-assertive {\n  border-top-left-radius: 3px !important;\n  border-bottom-left-radius: 3px !important;\n}\n\n.create-product-type-popup #image-holder + div.button-bar button.button-brand {\n  border-top-right-radius: 3px !important;\n  border-bottom-right-radius: 3px !important;\n}\n\n.create-product-type-popup #image-holder + div.button-bar button:disabled {\n  cursor: default;\n  opacity: 0.4;\n  pointer-events: none;\n}\n\n.create-product-type-popup .subtitle {\n  margin-top: 0;\n}\n\n.create-product-type-popup .bottom-inputs {\n  display: flex;\n  align-items: flex-end;\n  justify-content: center;\n}\n\n.create-product-type-popup #multiple-select {\n  margin-top: 10px;\n  border: 2px solid #ddd;\n  height: auto !important;\n  border-bottom: 1px solid #ddd !important;\n  padding: 0;\n}\n\n.create-product-type-popup #multiple-select div.item-inner {\n  border: none !important;\n}\n\n.create-product-type-popup .radio-list .item-inner,\n.create-product-type-popup .getProductType .item-inner {\n  border: 0 !important;\n}\n\n.create-product-type-popup .radio-list ion-radio.radio.radio-md,\n.create-product-type-popup .getProductType ion-radio.radio.radio-md {\n  margin-right: 0 !important;\n}\n\n.create-product-type-popup .radio-list .coord-box,\n.create-product-type-popup .getProductType .coord-box {\n  font-size: 14px;\n}\n\n.create-product-type-popup .pl-0 {\n  padding-left: 0 !important;\n}\n\n.create-product-type-popup .pl-0 .item-inner,\n.create-product-type-popup .pl-0 .item-cover,\n.create-product-type-popup .pl-0 ion-item {\n  padding-left: 0 !important;\n}\n\n.create-product-type-popup .pr-0 {\n  padding-right: 0 !important;\n}\n\n.create-product-type-popup .pr-0 .item-inner,\n.create-product-type-popup .pr-0 .item-cover,\n.create-product-type-popup .pr-0 ion-item {\n  padding-right: 0 !important;\n}\n\n.create-product-type-popup .d-inline-block {\n  display: inline-block;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvZC9Xb3JrL0FuZ3VsYXIvTmV3IGZvbGRlciAoMikvRG9sY2VHcm9jZXJ5L3BhY2thZ2VzL21lcmNoYW50LXRhYmxldC1pb25pYy9zcmMvcGFnZXMvK3dhcmVob3VzZS9jcmVhdGUtcHJvZHVjdC10eXBlLXBvcHVwL2NyZWF0ZS1wcm9kdWN0LXR5cGUtcG9wdXAuc2NzcyIsInNyYy9wYWdlcy8rd2FyZWhvdXNlL2NyZWF0ZS1wcm9kdWN0LXR5cGUtcG9wdXAvY3JlYXRlLXByb2R1Y3QtdHlwZS1wb3B1cC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUUsa0JBQWtCO0FDQXBCOztBREZBO0VBS0UsY0FBYztFQUNkLDBCQUEwQjtFQUMxQixXQUFXO0FDQ2I7O0FEUkE7O0VBYUcsZUFBZTtBQ0FsQjs7QURiQTtFQWtCRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFVBQVU7RUFDVixlQUFlO0FDRGpCOztBRHBCQTtFQXlCRSxlQUFlO0FDRGpCOztBRHhCQTtFQTZCRSxhQUFhO0VBQ2IsbUJBQW1CO0FDRHJCOztBRDdCQTtFQW1DRyxnQkFBZ0I7QUNGbkI7O0FEakNBO0VBdUNHLFdBQVc7QUNGZDs7QURyQ0E7RUF5Q0ksZUFBZTtBQ0FuQjs7QUR6Q0E7RUE4Q0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLDJCQUEyQjtBQ0Q3Qjs7QURqREE7RUFxREcsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtBQ0FyQjs7QUR0REE7RUEyREksc0NBQXNDO0VBQ3RDLHlDQUF5QztBQ0Q3Qzs7QUQzREE7RUErREksdUNBQXVDO0VBQ3ZDLDBDQUEwQztBQ0E5Qzs7QURoRUE7RUFvRUksZUFBZTtFQUNmLFlBQVk7RUFDWixvQkFBb0I7QUNBeEI7O0FEdEVBO0VBNEVFLGFBQWE7QUNGZjs7QUQxRUE7RUFnRkUsYUFBYTtFQUNiLHFCQUFxQjtFQUNyQix1QkFBdUI7QUNGekI7O0FEaEZBO0VBc0ZFLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLHdDQUF3QztFQUN4QyxVQUFVO0FDRlo7O0FEeEZBO0VBNEZHLHVCQUF1QjtBQ0ExQjs7QUQ1RkE7O0VBbUdHLG9CQUFvQjtBQ0Z2Qjs7QURqR0E7O0VBdUdHLDBCQUEwQjtBQ0Q3Qjs7QUR0R0E7O0VBMkdHLGVBQWU7QUNBbEI7O0FEM0dBO0VBZ0hFLDBCQUEwQjtBQ0Q1Qjs7QUQvR0E7OztFQW9IRywwQkFBMEI7QUNDN0I7O0FEckhBO0VBd0hFLDJCQUEyQjtBQ0M3Qjs7QUR6SEE7OztFQTRIRywyQkFBMkI7QUNHOUI7O0FEL0hBO0VBaUlFLHFCQUFxQjtBQ0V2QiIsImZpbGUiOiJzcmMvcGFnZXMvK3dhcmVob3VzZS9jcmVhdGUtcHJvZHVjdC10eXBlLXBvcHVwL2NyZWF0ZS1wcm9kdWN0LXR5cGUtcG9wdXAuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jcmVhdGUtcHJvZHVjdC10eXBlLXBvcHVwIHtcblx0I2ZpbGVJbnB1dCB7XG5cdFx0dmlzaWJpbGl0eTogaGlkZGVuO1xuXHR9XG5cdC5wb3B1cC1pbnB1dCB7XG5cdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0bWFyZ2luLXRvcDogMXZoICFpbXBvcnRhbnQ7XG5cdFx0d2lkdGg6IDEwMCU7XG5cdH1cblxuXHQudXBsb2FkLXRleHQsXG5cdC51cGxvYWQtaWNvbiB7XG5cdFx0Jjpob3ZlciB7XG5cdFx0XHRjdXJzb3I6IHBvaW50ZXI7XG5cdFx0fVxuXHR9XG5cblx0LmRyYWdEcm9wIHtcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0dG9wOiAxNXB4O1xuXHRcdHdpZHRoOiA5MCU7XG5cdFx0bWFyZ2luOiAxMCBhdXRvO1xuXHR9XG5cblx0LnNlbGVjdCB7XG5cdFx0Zm9udC1zaXplOiAxNHB4O1xuXHR9XG5cblx0Lml0ZW1zLWNlbnRlciB7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHR9XG5cblx0LnBvcHVwLWhhbGYge1xuXHRcdC50aXRsZS1wb3B1cCB7XG5cdFx0XHRtYXJnaW4tdG9wOiAxMHB4O1xuXHRcdH1cblxuXHRcdGxhYmVsIHtcblx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0c3BhbiB7XG5cdFx0XHRcdGZvbnQtc2l6ZTogMTRweDtcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0I2ltYWdlLWhvbGRlciB7XG5cdFx0aGVpZ2h0OiA3OCU7XG5cdFx0Ym9yZGVyLXJhZGl1czogM3B4O1xuXHRcdHBhZGRpbmctdG9wOiAxNSU7XG5cdFx0bWFyZ2luLWJvdHRvbTogNiU7XG5cdFx0bWFyZ2luLXRvcDogMTNweCAhaW1wb3J0YW50O1xuXG5cdFx0LmRyYWdEcm9wIHtcblx0XHRcdG1hcmdpbjogYXV0byAhaW1wb3J0YW50O1xuXHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdH1cblxuXHRcdCsgZGl2LmJ1dHRvbi1iYXIge1xuXHRcdFx0YnV0dG9uLmJ1dHRvbi1hc3NlcnRpdmUge1xuXHRcdFx0XHRib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzcHggIWltcG9ydGFudDtcblx0XHRcdFx0Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogM3B4ICFpbXBvcnRhbnQ7XG5cdFx0XHR9XG5cdFx0XHRidXR0b24uYnV0dG9uLWJyYW5kIHtcblx0XHRcdFx0Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDNweCAhaW1wb3J0YW50O1xuXHRcdFx0XHRib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogM3B4ICFpbXBvcnRhbnQ7XG5cdFx0XHR9XG5cblx0XHRcdGJ1dHRvbjpkaXNhYmxlZCB7XG5cdFx0XHRcdGN1cnNvcjogZGVmYXVsdDtcblx0XHRcdFx0b3BhY2l0eTogMC40O1xuXHRcdFx0XHRwb2ludGVyLWV2ZW50czogbm9uZTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQuc3VidGl0bGUge1xuXHRcdG1hcmdpbi10b3A6IDA7XG5cdH1cblxuXHQuYm90dG9tLWlucHV0cyB7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRhbGlnbi1pdGVtczogZmxleC1lbmQ7XG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdH1cblxuXHQjbXVsdGlwbGUtc2VsZWN0IHtcblx0XHRtYXJnaW4tdG9wOiAxMHB4O1xuXHRcdGJvcmRlcjogMnB4IHNvbGlkICNkZGQ7XG5cdFx0aGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG5cdFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQgIWltcG9ydGFudDtcblx0XHRwYWRkaW5nOiAwO1xuXHRcdGRpdi5pdGVtLWlubmVyIHtcblx0XHRcdGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xuXHRcdH1cblx0fVxuXG5cdC5yYWRpby1saXN0LFxuXHQuZ2V0UHJvZHVjdFR5cGUge1xuXHRcdC5pdGVtLWlubmVyIHtcblx0XHRcdGJvcmRlcjogMCAhaW1wb3J0YW50O1xuXHRcdH1cblxuXHRcdGlvbi1yYWRpby5yYWRpby5yYWRpby1tZCB7XG5cdFx0XHRtYXJnaW4tcmlnaHQ6IDAgIWltcG9ydGFudDtcblx0XHR9XG5cblx0XHQuY29vcmQtYm94IHtcblx0XHRcdGZvbnQtc2l6ZTogMTRweDtcblx0XHR9XG5cdH1cblxuXHQucGwtMCB7XG5cdFx0cGFkZGluZy1sZWZ0OiAwICFpbXBvcnRhbnQ7XG5cdFx0Lml0ZW0taW5uZXIsXG5cdFx0Lml0ZW0tY292ZXIsXG5cdFx0aW9uLWl0ZW0ge1xuXHRcdFx0cGFkZGluZy1sZWZ0OiAwICFpbXBvcnRhbnQ7XG5cdFx0fVxuXHR9XG5cdC5wci0wIHtcblx0XHRwYWRkaW5nLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XG5cdFx0Lml0ZW0taW5uZXIsXG5cdFx0Lml0ZW0tY292ZXIsXG5cdFx0aW9uLWl0ZW0ge1xuXHRcdFx0cGFkZGluZy1yaWdodDogMCAhaW1wb3J0YW50O1xuXHRcdH1cblx0fVxuXG5cdC5kLWlubGluZS1ibG9jayB7XG5cdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHR9XG59XG4iLCIuY3JlYXRlLXByb2R1Y3QtdHlwZS1wb3B1cCAjZmlsZUlucHV0IHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuXG4uY3JlYXRlLXByb2R1Y3QtdHlwZS1wb3B1cCAucG9wdXAtaW5wdXQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXRvcDogMXZoICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY3JlYXRlLXByb2R1Y3QtdHlwZS1wb3B1cCAudXBsb2FkLXRleHQ6aG92ZXIsXG4uY3JlYXRlLXByb2R1Y3QtdHlwZS1wb3B1cCAudXBsb2FkLWljb246aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jcmVhdGUtcHJvZHVjdC10eXBlLXBvcHVwIC5kcmFnRHJvcCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxNXB4O1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW46IDEwIGF1dG87XG59XG5cbi5jcmVhdGUtcHJvZHVjdC10eXBlLXBvcHVwIC5zZWxlY3Qge1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5jcmVhdGUtcHJvZHVjdC10eXBlLXBvcHVwIC5pdGVtcy1jZW50ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uY3JlYXRlLXByb2R1Y3QtdHlwZS1wb3B1cCAucG9wdXAtaGFsZiAudGl0bGUtcG9wdXAge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uY3JlYXRlLXByb2R1Y3QtdHlwZS1wb3B1cCAucG9wdXAtaGFsZiBsYWJlbCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY3JlYXRlLXByb2R1Y3QtdHlwZS1wb3B1cCAucG9wdXAtaGFsZiBsYWJlbCBzcGFuIHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uY3JlYXRlLXByb2R1Y3QtdHlwZS1wb3B1cCAjaW1hZ2UtaG9sZGVyIHtcbiAgaGVpZ2h0OiA3OCU7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgcGFkZGluZy10b3A6IDE1JTtcbiAgbWFyZ2luLWJvdHRvbTogNiU7XG4gIG1hcmdpbi10b3A6IDEzcHggIWltcG9ydGFudDtcbn1cblxuLmNyZWF0ZS1wcm9kdWN0LXR5cGUtcG9wdXAgI2ltYWdlLWhvbGRlciAuZHJhZ0Ryb3Age1xuICBtYXJnaW46IGF1dG8gIWltcG9ydGFudDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uY3JlYXRlLXByb2R1Y3QtdHlwZS1wb3B1cCAjaW1hZ2UtaG9sZGVyICsgZGl2LmJ1dHRvbi1iYXIgYnV0dG9uLmJ1dHRvbi1hc3NlcnRpdmUge1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzcHggIWltcG9ydGFudDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogM3B4ICFpbXBvcnRhbnQ7XG59XG5cbi5jcmVhdGUtcHJvZHVjdC10eXBlLXBvcHVwICNpbWFnZS1ob2xkZXIgKyBkaXYuYnV0dG9uLWJhciBidXR0b24uYnV0dG9uLWJyYW5kIHtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDNweCAhaW1wb3J0YW50O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogM3B4ICFpbXBvcnRhbnQ7XG59XG5cbi5jcmVhdGUtcHJvZHVjdC10eXBlLXBvcHVwICNpbWFnZS1ob2xkZXIgKyBkaXYuYnV0dG9uLWJhciBidXR0b246ZGlzYWJsZWQge1xuICBjdXJzb3I6IGRlZmF1bHQ7XG4gIG9wYWNpdHk6IDAuNDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5jcmVhdGUtcHJvZHVjdC10eXBlLXBvcHVwIC5zdWJ0aXRsZSB7XG4gIG1hcmdpbi10b3A6IDA7XG59XG5cbi5jcmVhdGUtcHJvZHVjdC10eXBlLXBvcHVwIC5ib3R0b20taW5wdXRzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmNyZWF0ZS1wcm9kdWN0LXR5cGUtcG9wdXAgI211bHRpcGxlLXNlbGVjdCB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNkZGQ7XG4gIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAwO1xufVxuXG4uY3JlYXRlLXByb2R1Y3QtdHlwZS1wb3B1cCAjbXVsdGlwbGUtc2VsZWN0IGRpdi5pdGVtLWlubmVyIHtcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5jcmVhdGUtcHJvZHVjdC10eXBlLXBvcHVwIC5yYWRpby1saXN0IC5pdGVtLWlubmVyLFxuLmNyZWF0ZS1wcm9kdWN0LXR5cGUtcG9wdXAgLmdldFByb2R1Y3RUeXBlIC5pdGVtLWlubmVyIHtcbiAgYm9yZGVyOiAwICFpbXBvcnRhbnQ7XG59XG5cbi5jcmVhdGUtcHJvZHVjdC10eXBlLXBvcHVwIC5yYWRpby1saXN0IGlvbi1yYWRpby5yYWRpby5yYWRpby1tZCxcbi5jcmVhdGUtcHJvZHVjdC10eXBlLXBvcHVwIC5nZXRQcm9kdWN0VHlwZSBpb24tcmFkaW8ucmFkaW8ucmFkaW8tbWQge1xuICBtYXJnaW4tcmlnaHQ6IDAgIWltcG9ydGFudDtcbn1cblxuLmNyZWF0ZS1wcm9kdWN0LXR5cGUtcG9wdXAgLnJhZGlvLWxpc3QgLmNvb3JkLWJveCxcbi5jcmVhdGUtcHJvZHVjdC10eXBlLXBvcHVwIC5nZXRQcm9kdWN0VHlwZSAuY29vcmQtYm94IHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uY3JlYXRlLXByb2R1Y3QtdHlwZS1wb3B1cCAucGwtMCB7XG4gIHBhZGRpbmctbGVmdDogMCAhaW1wb3J0YW50O1xufVxuXG4uY3JlYXRlLXByb2R1Y3QtdHlwZS1wb3B1cCAucGwtMCAuaXRlbS1pbm5lcixcbi5jcmVhdGUtcHJvZHVjdC10eXBlLXBvcHVwIC5wbC0wIC5pdGVtLWNvdmVyLFxuLmNyZWF0ZS1wcm9kdWN0LXR5cGUtcG9wdXAgLnBsLTAgaW9uLWl0ZW0ge1xuICBwYWRkaW5nLWxlZnQ6IDAgIWltcG9ydGFudDtcbn1cblxuLmNyZWF0ZS1wcm9kdWN0LXR5cGUtcG9wdXAgLnByLTAge1xuICBwYWRkaW5nLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XG59XG5cbi5jcmVhdGUtcHJvZHVjdC10eXBlLXBvcHVwIC5wci0wIC5pdGVtLWlubmVyLFxuLmNyZWF0ZS1wcm9kdWN0LXR5cGUtcG9wdXAgLnByLTAgLml0ZW0tY292ZXIsXG4uY3JlYXRlLXByb2R1Y3QtdHlwZS1wb3B1cCAucHItMCBpb24taXRlbSB7XG4gIHBhZGRpbmctcmlnaHQ6IDAgIWltcG9ydGFudDtcbn1cblxuLmNyZWF0ZS1wcm9kdWN0LXR5cGUtcG9wdXAgLmQtaW5saW5lLWJsb2NrIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuIl19 */");

/***/ }),

/***/ "./src/pages/+warehouse/create-product-type-popup/create-product-type-popup.ts":
/*!*************************************************************************************!*\
  !*** ./src/pages/+warehouse/create-product-type-popup/create-product-type-popup.ts ***!
  \*************************************************************************************/
/*! exports provided: CreateProductTypePopupPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateProductTypePopupPage", function() { return CreateProductTypePopupPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/fesm5/ng2-file-upload.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "../../node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _modules_client_common_angular2_routers_product_router_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @modules/client.common.angular2/routers/product-router.service */ "../common-angular/src/routers/product-router.service.ts");
/* harmony import */ var _modules_client_common_angular2_routers_warehouse_products_router_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @modules/client.common.angular2/routers/warehouse-products-router.service */ "../common-angular/src/routers/warehouse-products-router.service.ts");
/* harmony import */ var _modules_client_common_angular2_locale_product_locales_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @modules/client.common.angular2/locale/product-locales.service */ "../common-angular/src/locale/product-locales.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _services_products_category_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../services/products-category.service */ "./src/services/products-category.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _modules_client_common_angular2_routers_warehouse_router_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @modules/client.common.angular2/routers/warehouse-router.service */ "../common-angular/src/routers/warehouse-router.service.ts");
/* harmony import */ var _modules_server_common_enums_DeliveryType__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @modules/server.common/enums/DeliveryType */ "../common/src/enums/DeliveryType.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _product_pictures_popup_product_images_popup_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../product-pictures-popup/product-images-popup.component */ "./src/pages/+warehouse/product-pictures-popup/product-images-popup.component.ts");















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
            url: _environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].API_FILE_UPLOAD_URL,
            isHTML5: true,
            removeAfterUpload: true,
            headers: [
                {
                    name: 'X-Requested-With',
                    value: 'XMLHttpRequest',
                },
            ],
        };
        this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_2__["FileUploader"](uploaderOptions);
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
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
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
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var images, _a, imagesDataLocale, _i, _b, image, modal, res, imageArray, firstImgUrl;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_c) {
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
                                component: _product_pictures_popup_product_images_popup_component__WEBPACK_IMPORTED_MODULE_14__["ProductImagesPopup"],
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
        if (_modules_server_common_enums_DeliveryType__WEBPACK_IMPORTED_MODULE_12__["default"][type] === _modules_server_common_enums_DeliveryType__WEBPACK_IMPORTED_MODULE_12__["default"].Delivery) {
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
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var productImages, product;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
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
        this.camera.getPicture(options).then(function (imageData) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
            var base64Image, file, fileItem;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        base64Image = 'data:image/jpeg;base64,' + imageData;
                        return [4, this.urltoFile(base64Image, this.createFileName(), 'image/jpeg')];
                    case 1:
                        file = _a.sent();
                        fileItem = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_2__["FileItem"](this.uploader, file, {});
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
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
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
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _a;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4, this._productsCategorySrvice
                                .getCategories()
                                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["first"])())
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
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var warehouse;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.warehouseId) return [3, 2];
                        return [4, this.warehouseRouter
                                .get(this.warehouseId, false)
                                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["first"])())
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
        return new Promise(function (resolve, reject) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
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
    CreateProductTypePopupPage.ctorParameters = function () { return [
        { type: _modules_client_common_angular2_locale_product_locales_service__WEBPACK_IMPORTED_MODULE_6__["ProductLocalesService"] },
        { type: _modules_client_common_angular2_routers_product_router_service__WEBPACK_IMPORTED_MODULE_4__["ProductRouter"] },
        { type: _modules_client_common_angular2_routers_warehouse_products_router_service__WEBPACK_IMPORTED_MODULE_5__["WarehouseProductsRouter"] },
        { type: _modules_client_common_angular2_routers_warehouse_router_service__WEBPACK_IMPORTED_MODULE_11__["WarehouseRouter"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__["ModalController"] },
        { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__["Camera"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__["ActionSheetController"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"] },
        { type: _services_products_category_service__WEBPACK_IMPORTED_MODULE_9__["ProductsCategoryService"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('fileInput', { static: true }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], CreateProductTypePopupPage.prototype, "fileInput", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('imageHolder', { static: true }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], CreateProductTypePopupPage.prototype, "_imageHolder", void 0);
    CreateProductTypePopupPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'page-create-product-type-popup',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./create-product-type-popup.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/pages/+warehouse/create-product-type-popup/create-product-type-popup.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./create-product-type-popup.scss */ "./src/pages/+warehouse/create-product-type-popup/create-product-type-popup.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_modules_client_common_angular2_locale_product_locales_service__WEBPACK_IMPORTED_MODULE_6__["ProductLocalesService"],
            _modules_client_common_angular2_routers_product_router_service__WEBPACK_IMPORTED_MODULE_4__["ProductRouter"],
            _modules_client_common_angular2_routers_warehouse_products_router_service__WEBPACK_IMPORTED_MODULE_5__["WarehouseProductsRouter"],
            _modules_client_common_angular2_routers_warehouse_router_service__WEBPACK_IMPORTED_MODULE_11__["WarehouseRouter"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_13__["ModalController"],
            _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__["Camera"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_13__["ActionSheetController"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"],
            _services_products_category_service__WEBPACK_IMPORTED_MODULE_9__["ProductsCategoryService"]])
    ], CreateProductTypePopupPage);
    return CreateProductTypePopupPage;
}());



/***/ }),

/***/ "./src/pages/+warehouse/edit-product-type-popup/edit-product-type-popup.module.ts":
/*!****************************************************************************************!*\
  !*** ./src/pages/+warehouse/edit-product-type-popup/edit-product-type-popup.module.ts ***!
  \****************************************************************************************/
/*! exports provided: HttpLoaderFactory, EditProductTypePopupPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProductTypePopupPageModule", function() { return EditProductTypePopupPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "../../node_modules/@ionic-native/file-transfer/ngx/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/fesm5/ng2-file-upload.js");
/* harmony import */ var _edit_product_type_popup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit-product-type-popup */ "./src/pages/+warehouse/edit-product-type-popup/edit-product-type-popup.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm5/ngx-translate-http-loader.js");
/* harmony import */ var _services_products_category_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/products-category.service */ "./src/services/products-category.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _product_pictures_popup_product_images_popup_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../product-pictures-popup/product-images-popup.module */ "./src/pages/+warehouse/product-pictures-popup/product-images-popup.module.ts");













function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_7__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
}
var EditProductTypePopupPageModule = (function () {
    function EditProductTypePopupPageModule() {
    }
    EditProductTypePopupPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_edit_product_type_popup__WEBPACK_IMPORTED_MODULE_4__["EditProductTypePopupPage"]],
            entryComponents: [_edit_product_type_popup__WEBPACK_IMPORTED_MODULE_4__["EditProductTypePopupPage"]],
            providers: [_ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_2__["FileTransfer"], _services_products_category_service__WEBPACK_IMPORTED_MODULE_8__["ProductsCategoryService"]],
            imports: [
                ng2_file_upload__WEBPACK_IMPORTED_MODULE_3__["FileUploadModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"].forChild({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateLoader"],
                        useFactory: HttpLoaderFactory,
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]],
                    },
                }),
                _angular_common__WEBPACK_IMPORTED_MODULE_11__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonicModule"],
                _product_pictures_popup_product_images_popup_module__WEBPACK_IMPORTED_MODULE_12__["ProductImagesPopupModule"],
            ],
        })
    ], EditProductTypePopupPageModule);
    return EditProductTypePopupPageModule;
}());



/***/ }),

/***/ "./src/pages/+warehouse/edit-product-type-popup/edit-product-type-popup.scss":
/*!***********************************************************************************!*\
  !*** ./src/pages/+warehouse/edit-product-type-popup/edit-product-type-popup.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".edit-product-type-popup #fileInput {\n  visibility: hidden;\n}\n\n.edit-product-type-popup .popup-input {\n  display: block;\n  margin-top: 1vh !important;\n  width: 100%;\n}\n\n.edit-product-type-popup .upload-text:hover,\n.edit-product-type-popup .upload-icon:hover {\n  cursor: pointer;\n}\n\n.edit-product-type-popup .no-upload-input {\n  padding-top: 30px;\n}\n\n.edit-product-type-popup .dragDrop {\n  position: absolute;\n  top: 15px;\n  width: 90%;\n  margin: 10 auto;\n}\n\n.edit-product-type-popup .select {\n  font-size: 14px;\n}\n\n.edit-product-type-popup .popup-half .title-popup {\n  margin-top: 10px;\n}\n\n.edit-product-type-popup .popup-half label {\n  width: 100%;\n}\n\n.edit-product-type-popup .popup-half label span {\n  font-size: 14px;\n}\n\n.edit-product-type-popup .radio-list .item-inner,\n.edit-product-type-popup .getProductType .item-inner {\n  border: 0 !important;\n}\n\n.edit-product-type-popup .radio-list ion-radio.radio.radio-md,\n.edit-product-type-popup .getProductType ion-radio.radio.radio-md {\n  margin-right: 0 !important;\n}\n\n.edit-product-type-popup .radio-list .coord-box,\n.edit-product-type-popup .getProductType .coord-box {\n  font-size: 14px;\n}\n\n.edit-product-type-popup .pl-0 {\n  padding-left: 0 !important;\n}\n\n.edit-product-type-popup .pl-0 .item-inner,\n.edit-product-type-popup .pl-0 .item-cover,\n.edit-product-type-popup .pl-0 ion-item {\n  padding-left: 0 !important;\n}\n\n.edit-product-type-popup .pr-0 {\n  padding-right: 0 !important;\n}\n\n.edit-product-type-popup .pr-0 .item-inner,\n.edit-product-type-popup .pr-0 .item-cover,\n.edit-product-type-popup .pr-0 ion-item {\n  padding-right: 0 !important;\n}\n\n.edit-product-type-popup .d-inline-block {\n  display: inline-block;\n}\n\n.edit-product-type-popup #image-holder {\n  height: 78%;\n  border-radius: 3px;\n  padding-top: 12%;\n  padding-bottom: 13%;\n  margin-bottom: 6%;\n}\n\n.edit-product-type-popup #image-holder .dragDrop {\n  margin: auto !important;\n  position: relative;\n}\n\n.edit-product-type-popup #image-holder + div.button-bar button.button-assertive {\n  border-top-left-radius: 3px !important;\n  border-bottom-left-radius: 3px !important;\n}\n\n.edit-product-type-popup #image-holder + div.button-bar button.button-brand {\n  border-top-right-radius: 3px !important;\n  border-bottom-right-radius: 3px !important;\n}\n\n.edit-product-type-popup #image-holder + div.button-bar button:disabled {\n  cursor: default;\n  opacity: 0.4;\n  pointer-events: none;\n}\n\n.edit-product-type-popup #multiple-select {\n  margin-top: 10px;\n  border: 2px solid #ddd;\n  height: auto !important;\n  border-bottom: 1px solid #ddd !important;\n  padding: 0;\n}\n\n.edit-product-type-popup #multiple-select div.item-inner {\n  border: none !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvZC9Xb3JrL0FuZ3VsYXIvTmV3IGZvbGRlciAoMikvRG9sY2VHcm9jZXJ5L3BhY2thZ2VzL21lcmNoYW50LXRhYmxldC1pb25pYy9zcmMvcGFnZXMvK3dhcmVob3VzZS9lZGl0LXByb2R1Y3QtdHlwZS1wb3B1cC9lZGl0LXByb2R1Y3QtdHlwZS1wb3B1cC5zY3NzIiwic3JjL3BhZ2VzLyt3YXJlaG91c2UvZWRpdC1wcm9kdWN0LXR5cGUtcG9wdXAvZWRpdC1wcm9kdWN0LXR5cGUtcG9wdXAuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVFLGtCQUFrQjtBQ0FwQjs7QURGQTtFQUtFLGNBQWM7RUFDZCwwQkFBMEI7RUFDMUIsV0FBVztBQ0NiOztBRFJBOztFQVlHLGVBQWU7QUNDbEI7O0FEYkE7RUFpQkUsaUJBQWlCO0FDQW5COztBRGpCQTtFQXFCRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFVBQVU7RUFDVixlQUFlO0FDQWpCOztBRHhCQTtFQTRCRSxlQUFlO0FDQWpCOztBRDVCQTtFQWlDRyxnQkFBZ0I7QUNEbkI7O0FEaENBO0VBcUNHLFdBQVc7QUNEZDs7QURwQ0E7RUF1Q0ksZUFBZTtBQ0NuQjs7QUR4Q0E7O0VBK0NHLG9CQUFvQjtBQ0Z2Qjs7QUQ3Q0E7O0VBbURHLDBCQUEwQjtBQ0Q3Qjs7QURsREE7O0VBdURHLGVBQWU7QUNBbEI7O0FEdkRBO0VBNERFLDBCQUEwQjtBQ0Q1Qjs7QUQzREE7OztFQWdFRywwQkFBMEI7QUNDN0I7O0FEakVBO0VBb0VFLDJCQUEyQjtBQ0M3Qjs7QURyRUE7OztFQXdFRywyQkFBMkI7QUNHOUI7O0FEM0VBO0VBNkVFLHFCQUFxQjtBQ0V2Qjs7QUQvRUE7RUFpRkUsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGlCQUFpQjtBQ0VuQjs7QUR2RkE7RUF3RkcsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtBQ0dyQjs7QUQ1RkE7RUE4Rkksc0NBQXNDO0VBQ3RDLHlDQUF5QztBQ0U3Qzs7QURqR0E7RUFrR0ksdUNBQXVDO0VBQ3ZDLDBDQUEwQztBQ0c5Qzs7QUR0R0E7RUFzR0ksZUFBZTtFQUNmLFlBQVk7RUFDWixvQkFBb0I7QUNJeEI7O0FENUdBO0VBOEdFLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLHdDQUF3QztFQUN4QyxVQUFVO0FDRVo7O0FEcEhBO0VBb0hHLHVCQUF1QjtBQ0kxQiIsImZpbGUiOiJzcmMvcGFnZXMvK3dhcmVob3VzZS9lZGl0LXByb2R1Y3QtdHlwZS1wb3B1cC9lZGl0LXByb2R1Y3QtdHlwZS1wb3B1cC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVkaXQtcHJvZHVjdC10eXBlLXBvcHVwIHtcblx0I2ZpbGVJbnB1dCB7XG5cdFx0dmlzaWJpbGl0eTogaGlkZGVuO1xuXHR9XG5cdC5wb3B1cC1pbnB1dCB7XG5cdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0bWFyZ2luLXRvcDogMXZoICFpbXBvcnRhbnQ7XG5cdFx0d2lkdGg6IDEwMCU7XG5cdH1cblx0LnVwbG9hZC10ZXh0LFxuXHQudXBsb2FkLWljb24ge1xuXHRcdCY6aG92ZXIge1xuXHRcdFx0Y3Vyc29yOiBwb2ludGVyO1xuXHRcdH1cblx0fVxuXG5cdC5uby11cGxvYWQtaW5wdXQge1xuXHRcdHBhZGRpbmctdG9wOiAzMHB4O1xuXHR9XG5cblx0LmRyYWdEcm9wIHtcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0dG9wOiAxNXB4O1xuXHRcdHdpZHRoOiA5MCU7XG5cdFx0bWFyZ2luOiAxMCBhdXRvO1xuXHR9XG5cblx0LnNlbGVjdCB7XG5cdFx0Zm9udC1zaXplOiAxNHB4O1xuXHR9XG5cblx0LnBvcHVwLWhhbGYge1xuXHRcdC50aXRsZS1wb3B1cCB7XG5cdFx0XHRtYXJnaW4tdG9wOiAxMHB4O1xuXHRcdH1cblxuXHRcdGxhYmVsIHtcblx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0c3BhbiB7XG5cdFx0XHRcdGZvbnQtc2l6ZTogMTRweDtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQucmFkaW8tbGlzdCxcblx0LmdldFByb2R1Y3RUeXBlIHtcblx0XHQuaXRlbS1pbm5lciB7XG5cdFx0XHRib3JkZXI6IDAgIWltcG9ydGFudDtcblx0XHR9XG5cblx0XHRpb24tcmFkaW8ucmFkaW8ucmFkaW8tbWQge1xuXHRcdFx0bWFyZ2luLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XG5cdFx0fVxuXG5cdFx0LmNvb3JkLWJveCB7XG5cdFx0XHRmb250LXNpemU6IDE0cHg7XG5cdFx0fVxuXHR9XG5cblx0LnBsLTAge1xuXHRcdHBhZGRpbmctbGVmdDogMCAhaW1wb3J0YW50O1xuXHRcdC5pdGVtLWlubmVyLFxuXHRcdC5pdGVtLWNvdmVyLFxuXHRcdGlvbi1pdGVtIHtcblx0XHRcdHBhZGRpbmctbGVmdDogMCAhaW1wb3J0YW50O1xuXHRcdH1cblx0fVxuXHQucHItMCB7XG5cdFx0cGFkZGluZy1yaWdodDogMCAhaW1wb3J0YW50O1xuXHRcdC5pdGVtLWlubmVyLFxuXHRcdC5pdGVtLWNvdmVyLFxuXHRcdGlvbi1pdGVtIHtcblx0XHRcdHBhZGRpbmctcmlnaHQ6IDAgIWltcG9ydGFudDtcblx0XHR9XG5cdH1cblxuXHQuZC1pbmxpbmUtYmxvY2sge1xuXHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0fVxuXG5cdCNpbWFnZS1ob2xkZXIge1xuXHRcdGhlaWdodDogNzglO1xuXHRcdGJvcmRlci1yYWRpdXM6IDNweDtcblx0XHRwYWRkaW5nLXRvcDogMTIlO1xuXHRcdHBhZGRpbmctYm90dG9tOiAxMyU7XG5cdFx0bWFyZ2luLWJvdHRvbTogNiU7XG5cblx0XHQuZHJhZ0Ryb3Age1xuXHRcdFx0bWFyZ2luOiBhdXRvICFpbXBvcnRhbnQ7XG5cdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0fVxuXG5cdFx0KyBkaXYuYnV0dG9uLWJhciB7XG5cdFx0XHRidXR0b24uYnV0dG9uLWFzc2VydGl2ZSB7XG5cdFx0XHRcdGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDNweCAhaW1wb3J0YW50O1xuXHRcdFx0XHRib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAzcHggIWltcG9ydGFudDtcblx0XHRcdH1cblx0XHRcdGJ1dHRvbi5idXR0b24tYnJhbmQge1xuXHRcdFx0XHRib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogM3B4ICFpbXBvcnRhbnQ7XG5cdFx0XHRcdGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAzcHggIWltcG9ydGFudDtcblx0XHRcdH1cblx0XHRcdGJ1dHRvbjpkaXNhYmxlZCB7XG5cdFx0XHRcdGN1cnNvcjogZGVmYXVsdDtcblx0XHRcdFx0b3BhY2l0eTogMC40O1xuXHRcdFx0XHRwb2ludGVyLWV2ZW50czogbm9uZTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQjbXVsdGlwbGUtc2VsZWN0IHtcblx0XHRtYXJnaW4tdG9wOiAxMHB4O1xuXHRcdGJvcmRlcjogMnB4IHNvbGlkICNkZGQ7XG5cdFx0aGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG5cdFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQgIWltcG9ydGFudDtcblx0XHRwYWRkaW5nOiAwO1xuXHRcdGRpdi5pdGVtLWlubmVyIHtcblx0XHRcdGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xuXHRcdH1cblx0fVxufVxuIiwiLmVkaXQtcHJvZHVjdC10eXBlLXBvcHVwICNmaWxlSW5wdXQge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG5cbi5lZGl0LXByb2R1Y3QtdHlwZS1wb3B1cCAucG9wdXAtaW5wdXQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXRvcDogMXZoICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZWRpdC1wcm9kdWN0LXR5cGUtcG9wdXAgLnVwbG9hZC10ZXh0OmhvdmVyLFxuLmVkaXQtcHJvZHVjdC10eXBlLXBvcHVwIC51cGxvYWQtaWNvbjpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmVkaXQtcHJvZHVjdC10eXBlLXBvcHVwIC5uby11cGxvYWQtaW5wdXQge1xuICBwYWRkaW5nLXRvcDogMzBweDtcbn1cblxuLmVkaXQtcHJvZHVjdC10eXBlLXBvcHVwIC5kcmFnRHJvcCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxNXB4O1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW46IDEwIGF1dG87XG59XG5cbi5lZGl0LXByb2R1Y3QtdHlwZS1wb3B1cCAuc2VsZWN0IHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uZWRpdC1wcm9kdWN0LXR5cGUtcG9wdXAgLnBvcHVwLWhhbGYgLnRpdGxlLXBvcHVwIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLmVkaXQtcHJvZHVjdC10eXBlLXBvcHVwIC5wb3B1cC1oYWxmIGxhYmVsIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5lZGl0LXByb2R1Y3QtdHlwZS1wb3B1cCAucG9wdXAtaGFsZiBsYWJlbCBzcGFuIHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uZWRpdC1wcm9kdWN0LXR5cGUtcG9wdXAgLnJhZGlvLWxpc3QgLml0ZW0taW5uZXIsXG4uZWRpdC1wcm9kdWN0LXR5cGUtcG9wdXAgLmdldFByb2R1Y3RUeXBlIC5pdGVtLWlubmVyIHtcbiAgYm9yZGVyOiAwICFpbXBvcnRhbnQ7XG59XG5cbi5lZGl0LXByb2R1Y3QtdHlwZS1wb3B1cCAucmFkaW8tbGlzdCBpb24tcmFkaW8ucmFkaW8ucmFkaW8tbWQsXG4uZWRpdC1wcm9kdWN0LXR5cGUtcG9wdXAgLmdldFByb2R1Y3RUeXBlIGlvbi1yYWRpby5yYWRpby5yYWRpby1tZCB7XG4gIG1hcmdpbi1yaWdodDogMCAhaW1wb3J0YW50O1xufVxuXG4uZWRpdC1wcm9kdWN0LXR5cGUtcG9wdXAgLnJhZGlvLWxpc3QgLmNvb3JkLWJveCxcbi5lZGl0LXByb2R1Y3QtdHlwZS1wb3B1cCAuZ2V0UHJvZHVjdFR5cGUgLmNvb3JkLWJveCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmVkaXQtcHJvZHVjdC10eXBlLXBvcHVwIC5wbC0wIHtcbiAgcGFkZGluZy1sZWZ0OiAwICFpbXBvcnRhbnQ7XG59XG5cbi5lZGl0LXByb2R1Y3QtdHlwZS1wb3B1cCAucGwtMCAuaXRlbS1pbm5lcixcbi5lZGl0LXByb2R1Y3QtdHlwZS1wb3B1cCAucGwtMCAuaXRlbS1jb3Zlcixcbi5lZGl0LXByb2R1Y3QtdHlwZS1wb3B1cCAucGwtMCBpb24taXRlbSB7XG4gIHBhZGRpbmctbGVmdDogMCAhaW1wb3J0YW50O1xufVxuXG4uZWRpdC1wcm9kdWN0LXR5cGUtcG9wdXAgLnByLTAge1xuICBwYWRkaW5nLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XG59XG5cbi5lZGl0LXByb2R1Y3QtdHlwZS1wb3B1cCAucHItMCAuaXRlbS1pbm5lcixcbi5lZGl0LXByb2R1Y3QtdHlwZS1wb3B1cCAucHItMCAuaXRlbS1jb3Zlcixcbi5lZGl0LXByb2R1Y3QtdHlwZS1wb3B1cCAucHItMCBpb24taXRlbSB7XG4gIHBhZGRpbmctcmlnaHQ6IDAgIWltcG9ydGFudDtcbn1cblxuLmVkaXQtcHJvZHVjdC10eXBlLXBvcHVwIC5kLWlubGluZS1ibG9jayB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLmVkaXQtcHJvZHVjdC10eXBlLXBvcHVwICNpbWFnZS1ob2xkZXIge1xuICBoZWlnaHQ6IDc4JTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBwYWRkaW5nLXRvcDogMTIlO1xuICBwYWRkaW5nLWJvdHRvbTogMTMlO1xuICBtYXJnaW4tYm90dG9tOiA2JTtcbn1cblxuLmVkaXQtcHJvZHVjdC10eXBlLXBvcHVwICNpbWFnZS1ob2xkZXIgLmRyYWdEcm9wIHtcbiAgbWFyZ2luOiBhdXRvICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmVkaXQtcHJvZHVjdC10eXBlLXBvcHVwICNpbWFnZS1ob2xkZXIgKyBkaXYuYnV0dG9uLWJhciBidXR0b24uYnV0dG9uLWFzc2VydGl2ZSB7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDNweCAhaW1wb3J0YW50O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAzcHggIWltcG9ydGFudDtcbn1cblxuLmVkaXQtcHJvZHVjdC10eXBlLXBvcHVwICNpbWFnZS1ob2xkZXIgKyBkaXYuYnV0dG9uLWJhciBidXR0b24uYnV0dG9uLWJyYW5kIHtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDNweCAhaW1wb3J0YW50O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogM3B4ICFpbXBvcnRhbnQ7XG59XG5cbi5lZGl0LXByb2R1Y3QtdHlwZS1wb3B1cCAjaW1hZ2UtaG9sZGVyICsgZGl2LmJ1dHRvbi1iYXIgYnV0dG9uOmRpc2FibGVkIHtcbiAgY3Vyc29yOiBkZWZhdWx0O1xuICBvcGFjaXR5OiAwLjQ7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4uZWRpdC1wcm9kdWN0LXR5cGUtcG9wdXAgI211bHRpcGxlLXNlbGVjdCB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNkZGQ7XG4gIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAwO1xufVxuXG4uZWRpdC1wcm9kdWN0LXR5cGUtcG9wdXAgI211bHRpcGxlLXNlbGVjdCBkaXYuaXRlbS1pbm5lciB7XG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xufVxuIl19 */");

/***/ }),

/***/ "./src/pages/+warehouse/edit-product-type-popup/edit-product-type-popup.ts":
/*!*********************************************************************************!*\
  !*** ./src/pages/+warehouse/edit-product-type-popup/edit-product-type-popup.ts ***!
  \*********************************************************************************/
/*! exports provided: EditProductTypePopupPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProductTypePopupPage", function() { return EditProductTypePopupPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/fesm5/ng2-file-upload.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "../../node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _modules_server_common_entities_WarehouseProduct__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @modules/server.common/entities/WarehouseProduct */ "../common/src/entities/WarehouseProduct.ts");
/* harmony import */ var _modules_client_common_angular2_routers_product_router_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @modules/client.common.angular2/routers/product-router.service */ "../common-angular/src/routers/product-router.service.ts");
/* harmony import */ var _modules_client_common_angular2_routers_warehouse_products_router_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @modules/client.common.angular2/routers/warehouse-products-router.service */ "../common-angular/src/routers/warehouse-products-router.service.ts");
/* harmony import */ var _modules_client_common_angular2_locale_product_locales_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @modules/client.common.angular2/locale/product-locales.service */ "../common-angular/src/locale/product-locales.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_products_category_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../services/products-category.service */ "./src/services/products-category.service.ts");
/* harmony import */ var _modules_server_common_enums_DeliveryType__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @modules/server.common/enums/DeliveryType */ "../common/src/enums/DeliveryType.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _product_pictures_popup_product_images_popup_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../product-pictures-popup/product-images-popup.component */ "./src/pages/+warehouse/product-pictures-popup/product-images-popup.component.ts");















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
            url: _environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].API_FILE_UPLOAD_URL,
            isHTML5: true,
            removeAfterUpload: true,
            headers: [
                {
                    name: 'X-Requested-With',
                    value: 'XMLHttpRequest',
                },
            ],
        };
        this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_2__["FileUploader"](uploaderOptions);
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
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
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
        if (_modules_server_common_enums_DeliveryType__WEBPACK_IMPORTED_MODULE_12__["default"][type] === _modules_server_common_enums_DeliveryType__WEBPACK_IMPORTED_MODULE_12__["default"].Delivery) {
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
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var images, imagesDataLocale, modal, res, imageArray, firstImgUrl;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
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
                                component: _product_pictures_popup_product_images_popup_component__WEBPACK_IMPORTED_MODULE_14__["ProductImagesPopup"],
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
        this.camera.getPicture(options).then(function (imageData) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
            var base64Image, file, fileItem;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        base64Image = 'data:image/jpeg;base64,' + imageData;
                        return [4, this.urltoFile(base64Image, this.createFileName(), 'image/jpeg')];
                    case 1:
                        file = _a.sent();
                        fileItem = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_2__["FileItem"](this.uploader, file, {});
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
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
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
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _a;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4, this._productsCategorySrvice
                                .getCategories()
                                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["first"])())
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
    EditProductTypePopupPage.ctorParameters = function () { return [
        { type: _modules_client_common_angular2_routers_product_router_service__WEBPACK_IMPORTED_MODULE_5__["ProductRouter"] },
        { type: _modules_client_common_angular2_routers_warehouse_products_router_service__WEBPACK_IMPORTED_MODULE_6__["WarehouseProductsRouter"] },
        { type: _services_products_category_service__WEBPACK_IMPORTED_MODULE_11__["ProductsCategoryService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__["ModalController"] },
        { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__["Camera"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__["ActionSheetController"] },
        { type: _modules_client_common_angular2_locale_product_locales_service__WEBPACK_IMPORTED_MODULE_7__["ProductLocalesService"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _modules_server_common_entities_WarehouseProduct__WEBPACK_IMPORTED_MODULE_4__["default"])
    ], EditProductTypePopupPage.prototype, "warehouseProduct", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('fileInput', { static: true }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], EditProductTypePopupPage.prototype, "fileInput", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('imageHolder', { static: true }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], EditProductTypePopupPage.prototype, "_imageHolder", void 0);
    EditProductTypePopupPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'page-edit-product-type-popup',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./edit-product-type-popup.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/pages/+warehouse/edit-product-type-popup/edit-product-type-popup.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./edit-product-type-popup.scss */ "./src/pages/+warehouse/edit-product-type-popup/edit-product-type-popup.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_modules_client_common_angular2_routers_product_router_service__WEBPACK_IMPORTED_MODULE_5__["ProductRouter"],
            _modules_client_common_angular2_routers_warehouse_products_router_service__WEBPACK_IMPORTED_MODULE_6__["WarehouseProductsRouter"],
            _services_products_category_service__WEBPACK_IMPORTED_MODULE_11__["ProductsCategoryService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_13__["ModalController"],
            _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__["Camera"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_13__["ActionSheetController"],
            _modules_client_common_angular2_locale_product_locales_service__WEBPACK_IMPORTED_MODULE_7__["ProductLocalesService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"]])
    ], EditProductTypePopupPage);
    return EditProductTypePopupPage;
}());



/***/ }),

/***/ "./src/pages/+warehouse/product-pictures-popup/product-images-popu.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/pages/+warehouse/product-pictures-popup/product-images-popu.component.scss ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".product-images-container e-cu-file-uploader {\n  width: 100%;\n}\n\n.product-images-container .preview-img img {\n  height: 120px;\n}\n\n.product-images-container .removeIcon ion-icon {\n  font-size: 18px;\n}\n\n.product-images-container .actions {\n  position: absolute;\n  bottom: 0;\n}\n\n.product-images-container .actions ion-button {\n  border: none;\n  font-size: 14px !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvZC9Xb3JrL0FuZ3VsYXIvTmV3IGZvbGRlciAoMikvRG9sY2VHcm9jZXJ5L3BhY2thZ2VzL21lcmNoYW50LXRhYmxldC1pb25pYy9zcmMvcGFnZXMvK3dhcmVob3VzZS9wcm9kdWN0LXBpY3R1cmVzLXBvcHVwL3Byb2R1Y3QtaW1hZ2VzLXBvcHUuY29tcG9uZW50LnNjc3MiLCJzcmMvcGFnZXMvK3dhcmVob3VzZS9wcm9kdWN0LXBpY3R1cmVzLXBvcHVwL3Byb2R1Y3QtaW1hZ2VzLXBvcHUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFRSxXQUFXO0FDQWI7O0FERkE7RUFPRyxhQUFhO0FDRGhCOztBRE5BO0VBYUcsZUFBZTtBQ0hsQjs7QURWQTtFQWtCRSxrQkFBa0I7RUFDbEIsU0FBUztBQ0pYOztBRGZBO0VBcUJHLFlBQVk7RUFDWiwwQkFBMEI7QUNGN0IiLCJmaWxlIjoic3JjL3BhZ2VzLyt3YXJlaG91c2UvcHJvZHVjdC1waWN0dXJlcy1wb3B1cC9wcm9kdWN0LWltYWdlcy1wb3B1LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2R1Y3QtaW1hZ2VzLWNvbnRhaW5lciB7XG5cdGUtY3UtZmlsZS11cGxvYWRlciB7XG5cdFx0d2lkdGg6IDEwMCU7XG5cdH1cblxuXHQucHJldmlldy1pbWcge1xuXHRcdGltZyB7XG5cdFx0XHRoZWlnaHQ6IDEyMHB4O1xuXHRcdH1cblx0fVxuXG5cdC5yZW1vdmVJY29uIHtcblx0XHRpb24taWNvbiB7XG5cdFx0XHRmb250LXNpemU6IDE4cHg7XG5cdFx0fVxuXHR9XG5cblx0LmFjdGlvbnMge1xuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRib3R0b206IDA7XG5cdFx0aW9uLWJ1dHRvbiB7XG5cdFx0XHRib3JkZXI6IG5vbmU7XG5cdFx0XHRmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcblx0XHR9XG5cdH1cbn1cbiIsIi5wcm9kdWN0LWltYWdlcy1jb250YWluZXIgZS1jdS1maWxlLXVwbG9hZGVyIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5wcm9kdWN0LWltYWdlcy1jb250YWluZXIgLnByZXZpZXctaW1nIGltZyB7XG4gIGhlaWdodDogMTIwcHg7XG59XG5cbi5wcm9kdWN0LWltYWdlcy1jb250YWluZXIgLnJlbW92ZUljb24gaW9uLWljb24ge1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5wcm9kdWN0LWltYWdlcy1jb250YWluZXIgLmFjdGlvbnMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbn1cblxuLnByb2R1Y3QtaW1hZ2VzLWNvbnRhaW5lciAuYWN0aW9ucyBpb24tYnV0dG9uIHtcbiAgYm9yZGVyOiBub25lO1xuICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/pages/+warehouse/product-pictures-popup/product-images-popup.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/pages/+warehouse/product-pictures-popup/product-images-popup.component.ts ***!
  \***************************************************************************************/
/*! exports provided: ProductImagesPopup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductImagesPopup", function() { return ProductImagesPopup; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");



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
    ProductImagesPopup.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)
    ], ProductImagesPopup.prototype, "images", void 0);
    ProductImagesPopup = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'product-images-popup',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./product-images-popup.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/pages/+warehouse/product-pictures-popup/product-images-popup.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./product-images-popu.component.scss */ "./src/pages/+warehouse/product-pictures-popup/product-images-popu.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
    ], ProductImagesPopup);
    return ProductImagesPopup;
}());



/***/ }),

/***/ "./src/pages/+warehouse/product-pictures-popup/product-images-popup.module.ts":
/*!************************************************************************************!*\
  !*** ./src/pages/+warehouse/product-pictures-popup/product-images-popup.module.ts ***!
  \************************************************************************************/
/*! exports provided: ProductImagesPopupModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductImagesPopupModule", function() { return ProductImagesPopupModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _product_images_popup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-images-popup.component */ "./src/pages/+warehouse/product-pictures-popup/product-images-popup.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var components_file_uploader_file_uploader_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/file-uploader/file-uploader.module */ "./src/components/file-uploader/file-uploader.module.ts");








var ProductImagesPopupModule = (function () {
    function ProductImagesPopupModule() {
    }
    ProductImagesPopupModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_product_images_popup_component__WEBPACK_IMPORTED_MODULE_2__["ProductImagesPopup"]],
            entryComponents: [_product_images_popup_component__WEBPACK_IMPORTED_MODULE_2__["ProductImagesPopup"]],
            providers: [],
            imports: [
                components_file_uploader_file_uploader_module__WEBPACK_IMPORTED_MODULE_7__["FileUploaderModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"].forChild(),
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
            ],
        })
    ], ProductImagesPopupModule);
    return ProductImagesPopupModule;
}());



/***/ }),

/***/ "./src/pages/+warehouse/relevant-oders/relevant-orders.component.scss":
/*!****************************************************************************!*\
  !*** ./src/pages/+warehouse/relevant-oders/relevant-orders.component.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-spinner {\n  width: 40px !important;\n  height: 40px !important;\n  left: calc(50% - 20px);\n  position: absolute;\n  zoom: 2;\n}\n\n.orders-spinner {\n  top: 40%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvZC9Xb3JrL0FuZ3VsYXIvTmV3IGZvbGRlciAoMikvRG9sY2VHcm9jZXJ5L3BhY2thZ2VzL21lcmNoYW50LXRhYmxldC1pb25pYy9zcmMvcGFnZXMvK3dhcmVob3VzZS9yZWxldmFudC1vZGVycy9yZWxldmFudC1vcmRlcnMuY29tcG9uZW50LnNjc3MiLCJzcmMvcGFnZXMvK3dhcmVob3VzZS9yZWxldmFudC1vZGVycy9yZWxldmFudC1vcmRlcnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsT0FBTztBQ0NSOztBREVBO0VBQ0MsUUFBUTtBQ0NUIiwiZmlsZSI6InNyYy9wYWdlcy8rd2FyZWhvdXNlL3JlbGV2YW50LW9kZXJzL3JlbGV2YW50LW9yZGVycy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1zcGlubmVyIHtcblx0d2lkdGg6IDQwcHggIWltcG9ydGFudDtcblx0aGVpZ2h0OiA0MHB4ICFpbXBvcnRhbnQ7XG5cdGxlZnQ6IGNhbGMoNTAlIC0gMjBweCk7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0em9vbTogMjtcbn1cblxuLm9yZGVycy1zcGlubmVyIHtcblx0dG9wOiA0MCU7XG59XG4iLCJpb24tc3Bpbm5lciB7XG4gIHdpZHRoOiA0MHB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogNDBweCAhaW1wb3J0YW50O1xuICBsZWZ0OiBjYWxjKDUwJSAtIDIwcHgpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHpvb206IDI7XG59XG5cbi5vcmRlcnMtc3Bpbm5lciB7XG4gIHRvcDogNDAlO1xufVxuIl19 */");

/***/ }),

/***/ "./src/pages/+warehouse/relevant-oders/relevant-orders.component.ts":
/*!**************************************************************************!*\
  !*** ./src/pages/+warehouse/relevant-oders/relevant-orders.component.ts ***!
  \**************************************************************************/
/*! exports provided: RelevantOrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RelevantOrdersComponent", function() { return RelevantOrdersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_warehouse_orders_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/warehouse-orders.service */ "./src/services/warehouse-orders.service.ts");
/* harmony import */ var _services_store_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/store.service */ "./src/services/store.service.ts");
/* harmony import */ var _modules_server_common_entities_Order__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @modules/server.common/entities/Order */ "../common/src/entities/Order.ts");
/* harmony import */ var _warehouse__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../warehouse */ "./src/pages/+warehouse/warehouse.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");








var showOrdersNumber = 10;
var RelevantOrdersComponent = (function () {
    function RelevantOrdersComponent(warehouseOrdersService, store) {
        this.warehouseOrdersService = warehouseOrdersService;
        this.store = store;
        this.toggleOrderContainer = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.orders = [];
        this.OrderState = _warehouse__WEBPACK_IMPORTED_MODULE_5__["OrderState"];
        this.page = 1;
        this.ngDestroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.loadedPages = [];
        this.subscriptions = [];
    }
    RelevantOrdersComponent.prototype.ngOnChanges = function () {
        if (this.focusedOrder) {
            this.orders = [this.focusedOrder];
        }
        else {
            this.loadAllOrders();
        }
    };
    RelevantOrdersComponent.prototype.ngAfterViewInit = function () { };
    RelevantOrdersComponent.prototype.loadData = function (event) {
        if (event === void 0) { event = null; }
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var sub;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                sub = this.warehouseOrdersService
                    .getStoreOrdersTableData(this.store.warehouseId, {
                    sort: {
                        field: '_createdAt',
                        sortBy: 'desc',
                    },
                    skip: (this.page - 1) * showOrdersNumber,
                    limit: showOrdersNumber,
                }, 'relevant')
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this.ngDestroy$))
                    .subscribe(function (res) {
                    var _a, _b;
                    var orders = res['orders'];
                    var page = res['page'];
                    if (!_this.focusedOrder) {
                        if (_this.loadedPages.includes(res['page'])) {
                            var start = (page - 1) * showOrdersNumber;
                            (_a = _this.orders).splice.apply(_a, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])([start, showOrdersNumber], orders));
                        }
                        else {
                            _this.loadedPages.push(res['page']);
                            (_b = _this.orders).push.apply(_b, orders);
                            _this.page++;
                        }
                        if (event) {
                            event.target.complete();
                        }
                    }
                    _this.ordersLoaded = true;
                });
                this.subscriptions.push(sub);
                return [2];
            });
        });
    };
    RelevantOrdersComponent.prototype.loadAllOrders = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _i, _a, sub;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4, this.loadOrdersCount()];
                    case 1:
                        _b.sent();
                        this.orders = [];
                        this.page = 1;
                        _i = 0, _a = this.subscriptions;
                        _b.label = 2;
                    case 2:
                        if (!(_i < _a.length)) return [3, 5];
                        sub = _a[_i];
                        return [4, sub.unsubscribe()];
                    case 3:
                        _b.sent();
                        _b.label = 4;
                    case 4:
                        _i++;
                        return [3, 2];
                    case 5:
                        this.subscriptions = [];
                        this.loadedPages = [];
                        this.loadData();
                        return [2];
                }
            });
        });
    };
    RelevantOrdersComponent.prototype.loadOrdersCount = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _a;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4, this.warehouseOrdersService.getCountOfStoreOrders(this.store.warehouseId, 'relevant')];
                    case 1:
                        _a.ordersCount = _b.sent();
                        return [2];
                }
            });
        });
    };
    RelevantOrdersComponent.prototype.ngOnDestroy = function () {
        this.ngDestroy$.next();
        this.ngDestroy$.complete();
    };
    RelevantOrdersComponent.ctorParameters = function () { return [
        { type: _services_warehouse_orders_service__WEBPACK_IMPORTED_MODULE_2__["WarehouseOrdersService"] },
        { type: _services_store_service__WEBPACK_IMPORTED_MODULE_3__["Store"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function)
    ], RelevantOrdersComponent.prototype, "getWarehouseStatus", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], RelevantOrdersComponent.prototype, "onUpdateWarehouseStatus", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function)
    ], RelevantOrdersComponent.prototype, "orderState", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _modules_server_common_entities_Order__WEBPACK_IMPORTED_MODULE_4__["default"])
    ], RelevantOrdersComponent.prototype, "focusedOrder", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], RelevantOrdersComponent.prototype, "isOrderContainerLive", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], RelevantOrdersComponent.prototype, "toggleOrderContainer", void 0);
    RelevantOrdersComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'merchant-relevant-orders',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./relevant-orders.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/pages/+warehouse/relevant-oders/relevant-orders.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./relevant-orders.component.scss */ "./src/pages/+warehouse/relevant-oders/relevant-orders.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_warehouse_orders_service__WEBPACK_IMPORTED_MODULE_2__["WarehouseOrdersService"],
            _services_store_service__WEBPACK_IMPORTED_MODULE_3__["Store"]])
    ], RelevantOrdersComponent);
    return RelevantOrdersComponent;
}());



/***/ }),

/***/ "./src/pages/+warehouse/top-products/top-products.component.ts":
/*!*********************************************************************!*\
  !*** ./src/pages/+warehouse/top-products/top-products.component.ts ***!
  \*********************************************************************/
/*! exports provided: TopProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopProductsComponent", function() { return TopProductsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _modules_client_common_angular2_routers_warehouse_products_router_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @modules/client.common.angular2/routers/warehouse-products-router.service */ "../common-angular/src/routers/warehouse-products-router.service.ts");
/* harmony import */ var _modules_client_common_angular2_locale_product_locales_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @modules/client.common.angular2/locale/product-locales.service */ "../common-angular/src/locale/product-locales.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");





var TopProductsComponent = (function () {
    function TopProductsComponent(warehouseProductsRouter, modalCtrl, translateProductLocales) {
        this.warehouseProductsRouter = warehouseProductsRouter;
        this.modalCtrl = modalCtrl;
        this.translateProductLocales = translateProductLocales;
        this.topProducts = [];
        this.showNoProductsIcon = false;
    }
    TopProductsComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.topProducts$) {
            this.topProducts$.unsubscribe();
        }
        this.topProducts$ = this.warehouseProductsRouter
            .getTopProducts(this.warehouseId, 20)
            .subscribe(function (products) {
            products.length === 0
                ? (_this.showNoProductsIcon = true)
                : (_this.showNoProductsIcon = false);
            _this.topProducts = products;
        });
    };
    TopProductsComponent.prototype.ngOnDestroy = function () {
        if (this.topProducts$) {
            this.topProducts$.unsubscribe();
        }
    };
    TopProductsComponent.ctorParameters = function () { return [
        { type: _modules_client_common_angular2_routers_warehouse_products_router_service__WEBPACK_IMPORTED_MODULE_2__["WarehouseProductsRouter"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
        { type: _modules_client_common_angular2_locale_product_locales_service__WEBPACK_IMPORTED_MODULE_3__["ProductLocalesService"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], TopProductsComponent.prototype, "warehouseId", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function)
    ], TopProductsComponent.prototype, "presentCreateProductPopover", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function)
    ], TopProductsComponent.prototype, "addProduct", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function)
    ], TopProductsComponent.prototype, "getWarehouseProductImageUrl", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function)
    ], TopProductsComponent.prototype, "openEditProductModal", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function)
    ], TopProductsComponent.prototype, "truncateTitle", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function)
    ], TopProductsComponent.prototype, "localeTranslate", void 0);
    TopProductsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'merchant-top-products',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./top-products.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/pages/+warehouse/top-products/top-products.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ../common/no-orders-info/no-orders-info.component.scss */ "./src/pages/+warehouse/common/no-orders-info/no-orders-info.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_modules_client_common_angular2_routers_warehouse_products_router_service__WEBPACK_IMPORTED_MODULE_2__["WarehouseProductsRouter"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"],
            _modules_client_common_angular2_locale_product_locales_service__WEBPACK_IMPORTED_MODULE_3__["ProductLocalesService"]])
    ], TopProductsComponent);
    return TopProductsComponent;
}());



/***/ }),

/***/ "./src/pages/+warehouse/warehouse.module.ts":
/*!**************************************************!*\
  !*** ./src/pages/+warehouse/warehouse.module.ts ***!
  \**************************************************/
/*! exports provided: HttpLoaderFactory, WarehousePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WarehousePageModule", function() { return WarehousePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _warehouse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./warehouse */ "./src/pages/+warehouse/warehouse.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/components.module */ "./src/components/components.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm5/ngx-translate-http-loader.js");
/* harmony import */ var _components_order_order_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/order/order.module */ "./src/components/order/order.module.ts");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _all_oders_all_orders_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./all-oders/all-orders.component */ "./src/pages/+warehouse/all-oders/all-orders.component.ts");
/* harmony import */ var _services_warehouse_orders_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/warehouse-orders.service */ "./src/services/warehouse-orders.service.ts");
/* harmony import */ var _services_store_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/store.service */ "./src/services/store.service.ts");
/* harmony import */ var _relevant_oders_relevant_orders_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./relevant-oders/relevant-orders.component */ "./src/pages/+warehouse/relevant-oders/relevant-orders.component.ts");
/* harmony import */ var _common_warehouse_common_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./common/warehouse.common.module */ "./src/pages/+warehouse/common/warehouse.common.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _all_products_all_products_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./all-products/all-products.component */ "./src/pages/+warehouse/all-products/all-products.component.ts");
/* harmony import */ var _top_products_top_products_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./top-products/top-products.component */ "./src/pages/+warehouse/top-products/top-products.component.ts");
/* harmony import */ var _services_warehouse_products_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../services/warehouse-products.service */ "./src/services/warehouse-products.service.ts");
/* harmony import */ var ngx_masonry__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-masonry */ "./node_modules/ngx-masonry/fesm5/ngx-masonry.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _create_product_type_popup_create_product_type_popup_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./create-product-type-popup/create-product-type-popup.module */ "./src/pages/+warehouse/create-product-type-popup/create-product-type-popup.module.ts");
/* harmony import */ var _edit_product_type_popup_edit_product_type_popup_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./edit-product-type-popup/edit-product-type-popup.module */ "./src/pages/+warehouse/edit-product-type-popup/edit-product-type-popup.module.ts");























function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_6__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
}
var routes = [
    {
        path: '',
        component: _warehouse__WEBPACK_IMPORTED_MODULE_2__["WarehousePage"],
    },
];
var WarehousePageModule = (function () {
    function WarehousePageModule() {
    }
    WarehousePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _warehouse__WEBPACK_IMPORTED_MODULE_2__["WarehousePage"],
                _all_oders_all_orders_component__WEBPACK_IMPORTED_MODULE_9__["AllOrdersComponent"],
                _relevant_oders_relevant_orders_component__WEBPACK_IMPORTED_MODULE_12__["RelevantOrdersComponent"],
                _all_products_all_products_component__WEBPACK_IMPORTED_MODULE_15__["AllProductsComponent"],
                _top_products_top_products_component__WEBPACK_IMPORTED_MODULE_16__["TopProductsComponent"],
            ],
            imports: [
                _components_components_module__WEBPACK_IMPORTED_MODULE_3__["ComponentsModule"],
                _components_order_order_module__WEBPACK_IMPORTED_MODULE_7__["OrderModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_14__["CommonModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_20__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_19__["RouterModule"].forChild(routes),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"].forChild({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateLoader"],
                        useFactory: HttpLoaderFactory,
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]],
                    },
                }),
                ngx_pagination__WEBPACK_IMPORTED_MODULE_8__["NgxPaginationModule"],
                _common_warehouse_common_module__WEBPACK_IMPORTED_MODULE_13__["WarehouseCommonModule"],
                ngx_masonry__WEBPACK_IMPORTED_MODULE_18__["NgxMasonryModule"],
                _create_product_type_popup_create_product_type_popup_module__WEBPACK_IMPORTED_MODULE_21__["CreateProductTypePopupPageModule"],
                _edit_product_type_popup_edit_product_type_popup_module__WEBPACK_IMPORTED_MODULE_22__["EditProductTypePopupPageModule"],
            ],
            providers: [_services_warehouse_orders_service__WEBPACK_IMPORTED_MODULE_10__["WarehouseOrdersService"], _services_store_service__WEBPACK_IMPORTED_MODULE_11__["Store"], _services_warehouse_products_service__WEBPACK_IMPORTED_MODULE_17__["WarehouseProductsService"]],
        })
    ], WarehousePageModule);
    return WarehousePageModule;
}());



/***/ }),

/***/ "./src/pages/+warehouse/warehouse.scss":
/*!*********************************************!*\
  !*** ./src/pages/+warehouse/warehouse.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".warehouse-view .redbar {\n  padding: 0 !important;\n}\n\n.warehouse-view .redbar ion-icon {\n  font-size: 32px;\n}\n\n.warehouse-view .redbar div {\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n  width: 100%;\n  height: 100%;\n}\n\n.warehouse-view .redbar div .text {\n  font-size: 1.2em;\n}\n\n.warehouse-view .redbar div .all {\n  font-size: 1em;\n  text-transform: uppercase;\n  min-height: 43px !important;\n  border: none;\n}\n\n.warehouse-view .products-spinner {\n  top: calc(50% - 30px);\n}\n\n.warehouse-view .warehouse-view {\n  height: 100%;\n}\n\n.warehouse-view .warehouse-view .orders {\n  min-height: 100%;\n  background-color: #f3f3f3;\n}\n\n.warehouse-view .warehouse-view .orders order.card {\n  border: 0;\n  box-shadow: none;\n}\n\n.warehouse-view ion-row.warehouse-view {\n  padding: 0px;\n}\n\n.warehouse-view div.scroll-content {\n  overflow-y: hidden;\n}\n\n.warehouse-view a.button {\n  font-size: 0.8em;\n}\n\n.warehouse-view .icon.button-icon.plus-navbar-button {\n  color: white;\n}\n\n.warehouse-view .allowOverflow a {\n  overflow: unset !important;\n  padding: 0 !important;\n}\n\n.warehouse-view .order-header {\n  height: 50px;\n}\n\n.warehouse-view .button-bar-right-container {\n  width: 330px !important;\n}\n\n.order-timer-container .order-header {\n  min-height: 50px;\n  height: auto;\n}\n\n[id^='alert-subhdr'] {\n  text-align: center;\n  font-size: 17px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvZC9Xb3JrL0FuZ3VsYXIvTmV3IGZvbGRlciAoMikvRG9sY2VHcm9jZXJ5L3BhY2thZ2VzL21lcmNoYW50LXRhYmxldC1pb25pYy9zcmMvcGFnZXMvK3dhcmVob3VzZS93YXJlaG91c2Uuc2NzcyIsInNyYy9wYWdlcy8rd2FyZWhvdXNlL3dhcmVob3VzZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUUscUJBQXFCO0FDQXZCOztBREZBO0VBS0csZUFBZTtBQ0NsQjs7QUROQTtFQW1CRyxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDZCQUE2QjtFQUM3QixXQUFXO0VBQ1gsWUFBWTtBQ1RmOztBRGRBO0VBVUksZ0JBQWdCO0FDUXBCOztBRGxCQTtFQWFJLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsMkJBQTJCO0VBQzNCLFlBQVk7QUNTaEI7O0FEekJBO0VBNEJFLHFCQUFxQjtBQ0N2Qjs7QUQ3QkE7RUFnQ0UsWUFBWTtBQ0NkOztBRGpDQTtFQW1DRyxnQkFBZ0I7RUFDaEIseUJBQXlCO0FDRTVCOztBRHRDQTtFQXNDSSxTQUFTO0VBQ1QsZ0JBQWdCO0FDSXBCOztBRDNDQTtFQTZDRSxZQUFZO0FDRWQ7O0FEL0NBO0VBaURFLGtCQUFrQjtBQ0VwQjs7QURuREE7RUFxREUsZ0JBQWdCO0FDRWxCOztBRHZEQTtFQXdERSxZQUFZO0FDR2Q7O0FEM0RBO0VBNkRHLDBCQUEwQjtFQUMxQixxQkFBcUI7QUNFeEI7O0FEaEVBO0VBbUVFLFlBQVk7QUNDZDs7QURwRUE7RUF1RUUsdUJBQXVCO0FDQ3pCOztBREdBO0VBRUUsZ0JBQWdCO0VBQ2hCLFlBQVk7QUNEZDs7QUFFQTtFREtDLGtCQUFrQjtFQUNsQixlQUFlO0FDSGhCIiwiZmlsZSI6InNyYy9wYWdlcy8rd2FyZWhvdXNlL3dhcmVob3VzZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndhcmVob3VzZS12aWV3IHtcblx0LnJlZGJhciB7XG5cdFx0cGFkZGluZzogMCAhaW1wb3J0YW50O1xuXG5cdFx0aW9uLWljb24ge1xuXHRcdFx0Zm9udC1zaXplOiAzMnB4O1xuXHRcdH1cblxuXHRcdGRpdiB7XG5cdFx0XHQudGV4dCB7XG5cdFx0XHRcdGZvbnQtc2l6ZTogMS4yZW07XG5cdFx0XHR9XG5cdFx0XHQuYWxsIHtcblx0XHRcdFx0Zm9udC1zaXplOiAxZW07XG5cdFx0XHRcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cdFx0XHRcdG1pbi1oZWlnaHQ6IDQzcHggIWltcG9ydGFudDtcblx0XHRcdFx0Ym9yZGVyOiBub25lO1xuXHRcdFx0fVxuXG5cdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuXHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRoZWlnaHQ6IDEwMCU7XG5cdFx0fVxuXHR9XG5cblx0LnByb2R1Y3RzLXNwaW5uZXIge1xuXHRcdHRvcDogY2FsYyg1MCUgLSAzMHB4KTtcblx0fVxuXG5cdC53YXJlaG91c2UtdmlldyB7XG5cdFx0aGVpZ2h0OiAxMDAlO1xuXG5cdFx0Lm9yZGVycyB7XG5cdFx0XHRtaW4taGVpZ2h0OiAxMDAlO1xuXHRcdFx0YmFja2dyb3VuZC1jb2xvcjogI2YzZjNmMztcblx0XHRcdG9yZGVyLmNhcmQge1xuXHRcdFx0XHRib3JkZXI6IDA7XG5cdFx0XHRcdGJveC1zaGFkb3c6IG5vbmU7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0aW9uLXJvdy53YXJlaG91c2UtdmlldyB7XG5cdFx0cGFkZGluZzogMHB4O1xuXHR9XG5cblx0ZGl2LnNjcm9sbC1jb250ZW50IHtcblx0XHRvdmVyZmxvdy15OiBoaWRkZW47XG5cdH1cblxuXHRhLmJ1dHRvbiB7XG5cdFx0Zm9udC1zaXplOiAwLjhlbTtcblx0fVxuXHQuaWNvbi5idXR0b24taWNvbi5wbHVzLW5hdmJhci1idXR0b24ge1xuXHRcdGNvbG9yOiB3aGl0ZTtcblx0fVxuXG5cdC5hbGxvd092ZXJmbG93IHtcblx0XHRhIHtcblx0XHRcdG92ZXJmbG93OiB1bnNldCAhaW1wb3J0YW50O1xuXHRcdFx0cGFkZGluZzogMCAhaW1wb3J0YW50O1xuXHRcdH1cblx0fVxuXG5cdC5vcmRlci1oZWFkZXIge1xuXHRcdGhlaWdodDogNTBweDtcblx0fVxuXG5cdC5idXR0b24tYmFyLXJpZ2h0LWNvbnRhaW5lciB7XG5cdFx0d2lkdGg6IDMzMHB4ICFpbXBvcnRhbnQ7XG5cdH1cbn1cblxuLm9yZGVyLXRpbWVyLWNvbnRhaW5lciB7XG5cdC5vcmRlci1oZWFkZXIge1xuXHRcdG1pbi1oZWlnaHQ6IDUwcHg7XG5cdFx0aGVpZ2h0OiBhdXRvO1xuXHR9XG59XG4vLyBUaGlzIGFwcGx5IGZvciBjcmVhdGUgYW5kIGVkaXQgcHJvZHVjdCB0eXBlIGNhdGVnb3J5XG4vLyBoZWFkZXIgdGl0bGUgb2Ygc2VsZWN0IGNhdGVnb3J5IG9wdGlvblxuW2lkXj0nYWxlcnQtc3ViaGRyJ10ge1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdGZvbnQtc2l6ZTogMTdweDtcbn1cbiIsIi53YXJlaG91c2UtdmlldyAucmVkYmFyIHtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xufVxuXG4ud2FyZWhvdXNlLXZpZXcgLnJlZGJhciBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMzJweDtcbn1cblxuLndhcmVob3VzZS12aWV3IC5yZWRiYXIgZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi53YXJlaG91c2UtdmlldyAucmVkYmFyIGRpdiAudGV4dCB7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG59XG5cbi53YXJlaG91c2UtdmlldyAucmVkYmFyIGRpdiAuYWxsIHtcbiAgZm9udC1zaXplOiAxZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIG1pbi1oZWlnaHQ6IDQzcHggIWltcG9ydGFudDtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4ud2FyZWhvdXNlLXZpZXcgLnByb2R1Y3RzLXNwaW5uZXIge1xuICB0b3A6IGNhbGMoNTAlIC0gMzBweCk7XG59XG5cbi53YXJlaG91c2UtdmlldyAud2FyZWhvdXNlLXZpZXcge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi53YXJlaG91c2UtdmlldyAud2FyZWhvdXNlLXZpZXcgLm9yZGVycyB7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmM2YzZjM7XG59XG5cbi53YXJlaG91c2UtdmlldyAud2FyZWhvdXNlLXZpZXcgLm9yZGVycyBvcmRlci5jYXJkIHtcbiAgYm9yZGVyOiAwO1xuICBib3gtc2hhZG93OiBub25lO1xufVxuXG4ud2FyZWhvdXNlLXZpZXcgaW9uLXJvdy53YXJlaG91c2UtdmlldyB7XG4gIHBhZGRpbmc6IDBweDtcbn1cblxuLndhcmVob3VzZS12aWV3IGRpdi5zY3JvbGwtY29udGVudCB7XG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcbn1cblxuLndhcmVob3VzZS12aWV3IGEuYnV0dG9uIHtcbiAgZm9udC1zaXplOiAwLjhlbTtcbn1cblxuLndhcmVob3VzZS12aWV3IC5pY29uLmJ1dHRvbi1pY29uLnBsdXMtbmF2YmFyLWJ1dHRvbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLndhcmVob3VzZS12aWV3IC5hbGxvd092ZXJmbG93IGEge1xuICBvdmVyZmxvdzogdW5zZXQgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xufVxuXG4ud2FyZWhvdXNlLXZpZXcgLm9yZGVyLWhlYWRlciB7XG4gIGhlaWdodDogNTBweDtcbn1cblxuLndhcmVob3VzZS12aWV3IC5idXR0b24tYmFyLXJpZ2h0LWNvbnRhaW5lciB7XG4gIHdpZHRoOiAzMzBweCAhaW1wb3J0YW50O1xufVxuXG4ub3JkZXItdGltZXItY29udGFpbmVyIC5vcmRlci1oZWFkZXIge1xuICBtaW4taGVpZ2h0OiA1MHB4O1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbltpZF49J2FsZXJ0LXN1YmhkciddIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE3cHg7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/pages/+warehouse/warehouse.ts":
/*!*******************************************!*\
  !*** ./src/pages/+warehouse/warehouse.ts ***!
  \*******************************************/
/*! exports provided: OrderState, WarehousePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderState", function() { return OrderState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WarehousePage", function() { return WarehousePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_mixpanel_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/mixpanel/ngx */ "../../node_modules/@ionic-native/mixpanel/ngx/index.js");
/* harmony import */ var _modules_server_common_enums_OrderCarrierStatus__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @modules/server.common/enums/OrderCarrierStatus */ "../common/src/enums/OrderCarrierStatus.ts");
/* harmony import */ var _modules_server_common_enums_OrderWarehouseStatus__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @modules/server.common/enums/OrderWarehouseStatus */ "../common/src/enums/OrderWarehouseStatus.ts");
/* harmony import */ var _modules_client_common_angular2_routers_order_router_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @modules/client.common.angular2/routers/order-router.service */ "../common-angular/src/routers/order-router.service.ts");
/* harmony import */ var _modules_client_common_angular2_routers_warehouse_products_router_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @modules/client.common.angular2/routers/warehouse-products-router.service */ "../common-angular/src/routers/warehouse-products-router.service.ts");
/* harmony import */ var _modules_client_common_angular2_locale_product_locales_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @modules/client.common.angular2/locale/product-locales.service */ "../common-angular/src/locale/product-locales.service.ts");
/* harmony import */ var _src_services_store_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../src/services/store.service */ "./src/services/store.service.ts");
/* harmony import */ var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/barcode-scanner/ngx */ "../../node_modules/@ionic-native/barcode-scanner/ngx/index.js");
/* harmony import */ var _modules_server_common_entities_Product__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @modules/server.common/entities/Product */ "../common/src/entities/Product.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _create_product_type_popup_create_product_type_popup__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./create-product-type-popup/create-product-type-popup */ "./src/pages/+warehouse/create-product-type-popup/create-product-type-popup.ts");
/* harmony import */ var _edit_product_type_popup_edit_product_type_popup__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./edit-product-type-popup/edit-product-type-popup */ "./src/pages/+warehouse/edit-product-type-popup/edit-product-type-popup.ts");














var OrderState;
(function (OrderState) {
    OrderState[OrderState["WarehousePreparation"] = 0] = "WarehousePreparation";
    OrderState[OrderState["WarehousePreparationProblem"] = 1] = "WarehousePreparationProblem";
    OrderState[OrderState["InDelivery"] = 2] = "InDelivery";
    OrderState[OrderState["Canceled"] = 3] = "Canceled";
    OrderState[OrderState["DeliveryProblem"] = 4] = "DeliveryProblem";
    OrderState[OrderState["Delivered"] = 5] = "Delivered";
})(OrderState || (OrderState = {}));
var WarehousePage = (function () {
    function WarehousePage(popoverCtrl, modalCtrl, orderRouter, warehouseProductsRouter, mixpanel, translateProductLocales, store, barcodeScanner) {
        this.popoverCtrl = popoverCtrl;
        this.modalCtrl = modalCtrl;
        this.orderRouter = orderRouter;
        this.warehouseProductsRouter = warehouseProductsRouter;
        this.mixpanel = mixpanel;
        this.translateProductLocales = translateProductLocales;
        this.store = store;
        this.barcodeScanner = barcodeScanner;
        this.filterMode = 'ready';
        this.OrderState = OrderState;
        this.isOrderContainerLive = false;
        this.productsLoading = true;
        this.showRelevant = true;
        this.showAllProducts = false;
    }
    Object.defineProperty(WarehousePage.prototype, "isLogged", {
        get: function () {
            return localStorage.getItem('_warehouseId');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WarehousePage.prototype, "warehouseId", {
        get: function () {
            return localStorage.getItem('_warehouseId');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WarehousePage.prototype, "language", {
        get: function () {
            return localStorage.getItem('_language');
        },
        enumerable: true,
        configurable: true
    });
    WarehousePage.prototype.scanBarcode = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var barcodeData, orderId, error_1;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4, this.barcodeScanner.scan()];
                    case 1:
                        barcodeData = _a.sent();
                        orderId = barcodeData.text;
                        if (orderId !== '') {
                            this.focusedOrder$ = this.orderRouter
                                .get(orderId, {
                                populateCarrier: true,
                                populateWarehouse: true,
                            })
                                .subscribe(function (order) {
                                if (order.warehouseStatus >=
                                    _modules_server_common_enums_OrderWarehouseStatus__WEBPACK_IMPORTED_MODULE_4__["default"].GivenToCarrier) {
                                    _this.switchOrders(_this.showRelevant);
                                }
                                else {
                                    _this.focusedOrder = order;
                                }
                            });
                        }
                        return [3, 3];
                    case 2:
                        error_1 = _a.sent();
                        console.warn(error_1);
                        return [3, 3];
                    case 3: return [2];
                }
            });
        });
    };
    WarehousePage.prototype.switchOrders = function (showRelevant) {
        if (this.focusedOrder$) {
            this.focusedOrder$.unsubscribe();
        }
        this.focusedOrder = null;
        this.showRelevant = showRelevant;
    };
    WarehousePage.prototype.onOrderFinish = function () {
        this.toggleOrderContainer();
    };
    WarehousePage.prototype.toggleOrderContainer = function () {
        this.isOrderContainerLive = !this.isOrderContainerLive;
    };
    WarehousePage.prototype.getWarehouseProductImageUrl = function (p) {
        var _this = this;
        if (p instanceof _modules_server_common_entities_Product__WEBPACK_IMPORTED_MODULE_10__["default"]) {
            var productImg = p.images.filter(function (i) {
                return i.locale.includes(_this.language);
            })[0];
            if (productImg) {
                return productImg.url;
            }
            return p.images[0].url;
        }
    };
    WarehousePage.prototype.truncateTitle = function (title) {
        if (title) {
            title = title.replace(/[ ]{2,}/, ' ');
            if (title.length <= 15) {
                return title;
            }
            return title.substring(0, 12) + '...';
        }
    };
    WarehousePage.prototype.localeTranslate = function (member) {
        if (member !== undefined) {
            return this.translateProductLocales.getTranslate(member);
        }
    };
    WarehousePage.prototype.orderState = function (order) {
        if (order.warehouseStatus >= 200) {
            return OrderState.WarehousePreparationProblem;
        }
        if (order.carrierStatus >= 200) {
            return OrderState.DeliveryProblem;
        }
        if (order.isCancelled) {
            return OrderState.Canceled;
        }
        if (order.carrierStatus === _modules_server_common_enums_OrderCarrierStatus__WEBPACK_IMPORTED_MODULE_3__["default"].DeliveryCompleted) {
            return OrderState.Delivered;
        }
        if (order.carrier == null) {
            return OrderState.WarehousePreparation;
        }
        else {
            return OrderState.InDelivery;
        }
    };
    WarehousePage.prototype.updateOrderWarehouseStatus = function (orderId, status) {
        if (status >= 200) {
            if (this.mixpanel) {
                this.mixpanel.track('Order Failed');
            }
        }
        return this.orderRouter.updateWarehouseStatus(orderId, status);
    };
    WarehousePage.prototype.addProduct = function (productId) {
        return this.warehouseProductsRouter.increaseCount(this.warehouseId, productId, 1);
    };
    WarehousePage.prototype.presentCreateProductPopover = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var modal;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.modalCtrl.create({
                            component: _create_product_type_popup_create_product_type_popup__WEBPACK_IMPORTED_MODULE_12__["CreateProductTypePopupPage"],
                            cssClass: 'mutation-product-modal',
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4, modal.present()];
                    case 2:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    WarehousePage.prototype.openEditProductModal = function (product) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var modal;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.modalCtrl.create({
                            component: _edit_product_type_popup_edit_product_type_popup__WEBPACK_IMPORTED_MODULE_13__["EditProductTypePopupPage"],
                            componentProps: { warehouseProduct: product },
                            cssClass: 'mutation-product-modal',
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4, modal.present()];
                    case 2:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    WarehousePage.prototype.getWarehouseStatus = function (orderWarehouseStatusNumber) {
        var basePath = 'WAREHOUSE_VIEW.ORDER_WAREHOUSE_STATUSES.';
        switch (orderWarehouseStatusNumber) {
            case _modules_server_common_enums_OrderWarehouseStatus__WEBPACK_IMPORTED_MODULE_4__["default"].NoStatus:
                return basePath + 'CREATED';
            case _modules_server_common_enums_OrderWarehouseStatus__WEBPACK_IMPORTED_MODULE_4__["default"].ReadyForProcessing:
                return basePath + 'CONFIRMED';
            case _modules_server_common_enums_OrderWarehouseStatus__WEBPACK_IMPORTED_MODULE_4__["default"].WarehouseStartedProcessing:
                return basePath + 'PROCESSING';
            case _modules_server_common_enums_OrderWarehouseStatus__WEBPACK_IMPORTED_MODULE_4__["default"].AllocationStarted:
                return basePath + 'ALLOCATION_STARTED';
            case _modules_server_common_enums_OrderWarehouseStatus__WEBPACK_IMPORTED_MODULE_4__["default"].AllocationFinished:
                return basePath + 'ALLOCATION_FINISHED';
            case _modules_server_common_enums_OrderWarehouseStatus__WEBPACK_IMPORTED_MODULE_4__["default"].PackagingStarted:
                return basePath + 'PACKAGING_STARTED';
            case _modules_server_common_enums_OrderWarehouseStatus__WEBPACK_IMPORTED_MODULE_4__["default"].PackagingFinished:
                return basePath + 'PACKAGED';
            case _modules_server_common_enums_OrderWarehouseStatus__WEBPACK_IMPORTED_MODULE_4__["default"].GivenToCarrier:
                return basePath + 'GIVEN_TO_CARRIER';
            case _modules_server_common_enums_OrderWarehouseStatus__WEBPACK_IMPORTED_MODULE_4__["default"].GivenToCustomer:
                return basePath + 'TAKEN';
            case _modules_server_common_enums_OrderWarehouseStatus__WEBPACK_IMPORTED_MODULE_4__["default"].AllocationFailed:
                return basePath + 'ALLOCATION_FAILED';
            case _modules_server_common_enums_OrderWarehouseStatus__WEBPACK_IMPORTED_MODULE_4__["default"].PackagingFailed:
                return basePath + 'PACKAGING_FAILED';
            default:
                return basePath + 'BAD_STATUS';
        }
    };
    WarehousePage.prototype.ionViewWillLeave = function () {
        if (this.warehouse$) {
            this.warehouse$.unsubscribe();
        }
        if (this.focusedOrder$) {
            this.focusedOrder$.unsubscribe();
        }
    };
    WarehousePage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["PopoverController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["ModalController"] },
        { type: _modules_client_common_angular2_routers_order_router_service__WEBPACK_IMPORTED_MODULE_5__["OrderRouter"] },
        { type: _modules_client_common_angular2_routers_warehouse_products_router_service__WEBPACK_IMPORTED_MODULE_6__["WarehouseProductsRouter"] },
        { type: _ionic_native_mixpanel_ngx__WEBPACK_IMPORTED_MODULE_2__["Mixpanel"] },
        { type: _modules_client_common_angular2_locale_product_locales_service__WEBPACK_IMPORTED_MODULE_7__["ProductLocalesService"] },
        { type: _src_services_store_service__WEBPACK_IMPORTED_MODULE_8__["Store"] },
        { type: _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_9__["BarcodeScanner"] }
    ]; };
    WarehousePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'page-warehouse',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./warehouse.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/pages/+warehouse/warehouse.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./warehouse.scss */ "./src/pages/+warehouse/warehouse.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_11__["PopoverController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["ModalController"],
            _modules_client_common_angular2_routers_order_router_service__WEBPACK_IMPORTED_MODULE_5__["OrderRouter"],
            _modules_client_common_angular2_routers_warehouse_products_router_service__WEBPACK_IMPORTED_MODULE_6__["WarehouseProductsRouter"],
            _ionic_native_mixpanel_ngx__WEBPACK_IMPORTED_MODULE_2__["Mixpanel"],
            _modules_client_common_angular2_locale_product_locales_service__WEBPACK_IMPORTED_MODULE_7__["ProductLocalesService"],
            _src_services_store_service__WEBPACK_IMPORTED_MODULE_8__["Store"],
            _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_9__["BarcodeScanner"]])
    ], WarehousePage);
    return WarehousePage;
}());



/***/ }),

/***/ "./src/services/products-category.service.ts":
/*!***************************************************!*\
  !*** ./src/services/products-category.service.ts ***!
  \***************************************************/
/*! exports provided: ProductsCategoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsCategoryService", function() { return ProductsCategoryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apollo-angular */ "./node_modules/apollo-angular/fesm5/ngApollo.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ "../../node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var ProductsCategoryService = (function () {
    function ProductsCategoryService(apollo) {
        this.apollo = apollo;
    }
    ProductsCategoryService.prototype.getCategories = function () {
        return this.apollo
            .watchQuery({
            query: graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n\t\t\t\t\tquery allCategories {\n\t\t\t\t\t\tproductsCategories {\n\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\tname {\n\t\t\t\t\t\t\t\tlocale\n\t\t\t\t\t\t\t\tvalue\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t"], ["\n\t\t\t\t\tquery allCategories {\n\t\t\t\t\t\tproductsCategories {\n\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\tname {\n\t\t\t\t\t\t\t\tlocale\n\t\t\t\t\t\t\t\tvalue\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t"]))),
            pollInterval: 1000,
        })
            .valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res.data.productsCategories; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["share"])());
    };
    ProductsCategoryService.ctorParameters = function () { return [
        { type: apollo_angular__WEBPACK_IMPORTED_MODULE_2__["Apollo"] }
    ]; };
    ProductsCategoryService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [apollo_angular__WEBPACK_IMPORTED_MODULE_2__["Apollo"]])
    ], ProductsCategoryService);
    return ProductsCategoryService;
}());

var templateObject_1;


/***/ }),

/***/ "./src/services/warehouse-products.service.ts":
/*!****************************************************!*\
  !*** ./src/services/warehouse-products.service.ts ***!
  \****************************************************/
/*! exports provided: WarehouseProductsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WarehouseProductsService", function() { return WarehouseProductsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apollo-angular */ "./node_modules/apollo-angular/fesm5/ngApollo.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ "../../node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var WarehouseProductsService = (function () {
    function WarehouseProductsService(_apollo) {
        this._apollo = _apollo;
    }
    WarehouseProductsService.prototype.getProductsWithPagination = function (id, pagingOptions) {
        return this._apollo
            .watchQuery({
            query: graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n\t\t\t\t\tquery GetProductsWithPagination(\n\t\t\t\t\t\t$id: String!\n\t\t\t\t\t\t$pagingOptions: PagingOptionsInput\n\t\t\t\t\t) {\n\t\t\t\t\t\tgetProductsWithPagination(\n\t\t\t\t\t\t\tid: $id\n\t\t\t\t\t\t\tpagingOptions: $pagingOptions\n\t\t\t\t\t\t) {\n\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\t_id\n\t\t\t\t\t\t\tprice\n\t\t\t\t\t\t\tinitialPrice\n\t\t\t\t\t\t\tcount\n\t\t\t\t\t\t\tsoldCount\n\t\t\t\t\t\t\tproduct {\n\t\t\t\t\t\t\t\tdescription {\n\t\t\t\t\t\t\t\t\tvalue\n\t\t\t\t\t\t\t\t\tlocale\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t_id\n\t\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\t\ttitle {\n\t\t\t\t\t\t\t\t\tvalue\n\t\t\t\t\t\t\t\t\tlocale\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\tdetails {\n\t\t\t\t\t\t\t\t\tvalue\n\t\t\t\t\t\t\t\t\tlocale\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\timages {\n\t\t\t\t\t\t\t\t\tlocale\n\t\t\t\t\t\t\t\t\turl\n\t\t\t\t\t\t\t\t\torientation\n\t\t\t\t\t\t\t\t\twidth\n\t\t\t\t\t\t\t\t\theight\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\tcategories\n\t\t\t\t\t\t\t\t_createdAt\n\t\t\t\t\t\t\t\t_updatedAt\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\tisCarrierRequired\n\t\t\t\t\t\t\tisTakeaway\n\t\t\t\t\t\t\tdeliveryTimeMin\n\t\t\t\t\t\t\tdeliveryTimeMax\n\t\t\t\t\t\t\tisCarrierRequired\n\t\t\t\t\t\t\tisDeliveryRequired\n\t\t\t\t\t\t\tisManufacturing\n\t\t\t\t\t\t\tisTakeaway\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t"], ["\n\t\t\t\t\tquery GetProductsWithPagination(\n\t\t\t\t\t\t$id: String!\n\t\t\t\t\t\t$pagingOptions: PagingOptionsInput\n\t\t\t\t\t) {\n\t\t\t\t\t\tgetProductsWithPagination(\n\t\t\t\t\t\t\tid: $id\n\t\t\t\t\t\t\tpagingOptions: $pagingOptions\n\t\t\t\t\t\t) {\n\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\t_id\n\t\t\t\t\t\t\tprice\n\t\t\t\t\t\t\tinitialPrice\n\t\t\t\t\t\t\tcount\n\t\t\t\t\t\t\tsoldCount\n\t\t\t\t\t\t\tproduct {\n\t\t\t\t\t\t\t\tdescription {\n\t\t\t\t\t\t\t\t\tvalue\n\t\t\t\t\t\t\t\t\tlocale\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t_id\n\t\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\t\ttitle {\n\t\t\t\t\t\t\t\t\tvalue\n\t\t\t\t\t\t\t\t\tlocale\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\tdetails {\n\t\t\t\t\t\t\t\t\tvalue\n\t\t\t\t\t\t\t\t\tlocale\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\timages {\n\t\t\t\t\t\t\t\t\tlocale\n\t\t\t\t\t\t\t\t\turl\n\t\t\t\t\t\t\t\t\torientation\n\t\t\t\t\t\t\t\t\twidth\n\t\t\t\t\t\t\t\t\theight\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\tcategories\n\t\t\t\t\t\t\t\t_createdAt\n\t\t\t\t\t\t\t\t_updatedAt\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\tisCarrierRequired\n\t\t\t\t\t\t\tisTakeaway\n\t\t\t\t\t\t\tdeliveryTimeMin\n\t\t\t\t\t\t\tdeliveryTimeMax\n\t\t\t\t\t\t\tisCarrierRequired\n\t\t\t\t\t\t\tisDeliveryRequired\n\t\t\t\t\t\t\tisManufacturing\n\t\t\t\t\t\t\tisTakeaway\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t"]))),
            pollInterval: 2000,
            variables: { id: id, pagingOptions: pagingOptions },
        })
            .valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res.data['getProductsWithPagination']; }));
    };
    WarehouseProductsService.prototype.getProductsCount = function (id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var res;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this._apollo
                            .query({
                            query: graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n\t\t\t\t\tquery GetProductsCount($id: String!) {\n\t\t\t\t\t\tgetProductsCount(id: $id)\n\t\t\t\t\t}\n\t\t\t\t"], ["\n\t\t\t\t\tquery GetProductsCount($id: String!) {\n\t\t\t\t\t\tgetProductsCount(id: $id)\n\t\t\t\t\t}\n\t\t\t\t"]))),
                            variables: { id: id },
                        })
                            .toPromise()];
                    case 1:
                        res = _a.sent();
                        return [2, res.data['getProductsCount']];
                }
            });
        });
    };
    WarehouseProductsService.ctorParameters = function () { return [
        { type: apollo_angular__WEBPACK_IMPORTED_MODULE_2__["Apollo"] }
    ]; };
    WarehouseProductsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [apollo_angular__WEBPACK_IMPORTED_MODULE_2__["Apollo"]])
    ], WarehouseProductsService);
    return WarehouseProductsService;
}());

var templateObject_1, templateObject_2;


/***/ })

}]);
//# sourceMappingURL=warehouse-warehouse-module.js.map