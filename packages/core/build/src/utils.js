"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const rxjs_1 = require("rxjs");
const fs_1 = tslib_1.__importDefault(require("fs"));
function observeFile(fileName) {
    return rxjs_1.Observable.create((observer) => {
        const fetchTranslations = () => {
            fs_1.default.readFile(fileName, 'utf-8', (err, content) => {
                observer.next(content);
                if (err) {
                    observer.error(err);
                }
            });
        };
        fetchTranslations();
        fs_1.default.watchFile(fileName, fetchTranslations);
        return () => {
            fs_1.default.unwatchFile(fileName, fetchTranslations);
        };
    });
}
exports.observeFile = observeFile;
function randomCoordinatesNear([longitude, latitude], radius) {
    const r = 100 / 111300;
    const y0 = longitude;
    const x0 = latitude;
    const u = Math.random();
    const v = Math.random();
    const w = r * Math.sqrt(u);
    const t = 2 * Math.PI * v;
    const x = w * Math.cos(t);
    const y1 = w * Math.sin(t);
    const x1 = x / Math.cos(y0);
    return [y0 + y1, x0 + x1];
}
exports.randomCoordinatesNear = randomCoordinatesNear;
//# sourceMappingURL=utils.js.map