"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var store_service_1 = require("app/services/store.service");
var ElapsedTimeComponent = (function () {
    function ElapsedTimeComponent(store) {
        this.store = store;
        this.timePasssed = { timePassed: '00 : 00' };
    }
    ElapsedTimeComponent.prototype.ngOnInit = function () {
        if (this.store.endOrderTime) {
            this.timePasssed = JSON.parse(this.store.endOrderTime);
        }
        else {
            this.timer = setInterval(this.updateTime, 1000, [this.timePasssed]);
        }
    };
    ElapsedTimeComponent.prototype.updateTime = function (comp) {
        var currDate = new Date();
        var startDate = new Date(JSON.parse(localStorage.getItem('startDate')));
        if (startDate) {
            var diff = (currDate.getTime() - startDate.getTime()) / 1000;
            var hoursPassed = Math.floor(diff / 3600);
            diff = diff - hoursPassed * 3600;
            var minutesPassed = Math.floor(diff / 60);
            var secondsPassed = Number((diff - minutesPassed * 60).toFixed(0));
            var minutesPassedStr = '';
            var secondsPassedStr = '';
            var hoursPassedStr = '';
            hoursPassed < 1
                ? (hoursPassedStr = '')
                : (hoursPassedStr = hoursPassed.toString() + ' : ');
            minutesPassed < 10
                ? (minutesPassedStr = '0' + minutesPassed)
                : (minutesPassedStr = minutesPassed.toString());
            secondsPassed < 10
                ? (secondsPassedStr = '0' + secondsPassed)
                : (secondsPassedStr = secondsPassed.toString());
            comp[0].timePassed =
                hoursPassedStr + minutesPassedStr + ' : ' + secondsPassedStr;
        }
    };
    ElapsedTimeComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'e-cu-elapsed-time',
            templateUrl: './elapsed-time.component.html',
            styleUrls: ['./elapsed-time.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [store_service_1.Store])
    ], ElapsedTimeComponent);
    return ElapsedTimeComponent;
}());
exports.ElapsedTimeComponent = ElapsedTimeComponent;
//# sourceMappingURL=elapsed-time.component.js.map