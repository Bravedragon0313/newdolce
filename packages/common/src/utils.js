"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = require("lodash");
var Utils;
(function (Utils) {
    function calcCrow(lat1, lon1, lat2, lon2) {
        var R = 6371;
        var dLat = Utils._toRad(lat2 - lat1);
        var dLon = Utils._toRad(lon2 - lon1);
        lat1 = Utils._toRad(lat1);
        lat2 = Utils._toRad(lat2);
        var a = Math.pow(Math.sin(dLat / 2), 2) +
            Math.pow(Math.sin(dLon / 2), 2) * Math.cos(lat1) * Math.cos(lat2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var d = R * c;
        return d;
    }
    Utils.calcCrow = calcCrow;
    function getDistance(geoLocation1, geoLocation2) {
        return getLocDistance(geoLocation1.loc, geoLocation2.loc);
    }
    Utils.getDistance = getDistance;
    function getLocDistance(loc1, loc2) {
        return calcCrow(loc1.coordinates[0], loc1.coordinates[1], loc2.coordinates[0], loc2.coordinates[1]);
    }
    Utils.getLocDistance = getLocDistance;
    function _toRad(v) {
        return (v * Math.PI) / 180;
    }
    Utils._toRad = _toRad;
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
    Utils.getRandomInt = getRandomInt;
    function toDate(date) {
        if (date instanceof Date) {
            return date;
        }
        else {
            return new Date(date);
        }
    }
    Utils.toDate = toDate;
    function generatedLogoColor() {
        return lodash_1.sample(['#269aff', '#ffaf26', '#8b72ff', '#0ecc9D']).replace('#', '');
    }
    Utils.generatedLogoColor = generatedLogoColor;
})(Utils || (Utils = {}));
exports.getDistance = Utils.getDistance;
exports.toDate = Utils.toDate;
exports.getDummyImage = function (width, height, letter) {
    return "https://dummyimage.com/" + width + "x" + height + "/" + Utils.generatedLogoColor() + "/ffffff.jpg&text=" + letter;
};
exports.getPlaceholditImgix = function (width, height, fontSize, name) {
    return "https://placeholdit.imgix.net/~text?txtsize=" + fontSize + "&txt=" + name + "&w=" + width + "&h=" + height;
};
exports.getFakeImg = function (width, height, fontSize, name) {
    return "https://fakeimg.pl/" + width + "x" + height + "/FFD890%2C128/000/?text=" + name + "&font_size=" + fontSize;
};
exports.generateObjectIdString = function (m, d, h, s) {
    if (m === void 0) { m = Math; }
    if (d === void 0) { d = Date; }
    if (h === void 0) { h = 16; }
    if (s === void 0) { s = function (x) { return m.floor(x).toString(h); }; }
    return (s(d.now() / 1000) + ' '.repeat(h).replace(/./g, function () { return s(m.random() * h); }));
};
function getIdFromTheDate(order) {
    if (!order['createdAt'] || !order.orderNumber) {
        throw "Can't use getIdFromTheDate function. Property " + (!order['createdAt'] ? 'createdAt' : 'orderNumber') + " is missing!";
    }
    var _a = new Date(order['createdAt'])
        .toLocaleDateString()
        .split('/'), day = _a[0], month = _a[1], year = _a[2];
    var d = ('0' + day).slice(-2);
    d = d.substr(-2);
    var m = ('0' + month).slice(-2);
    m = m.substr(-2);
    return "" + d + m + year + "-" + order.orderNumber;
}
exports.getIdFromTheDate = getIdFromTheDate;
exports.default = Utils;
//# sourceMappingURL=utils.js.map