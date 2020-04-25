"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var DeliveryComponent = (function () {
    function DeliveryComponent() {
    }
    DeliveryComponent.prototype.ngOnInit = function () {
        this.order = this.rowData.order;
    };
    DeliveryComponent.prototype.getTotalDeliveryTime = function (order) {
        var start = order.createdAt;
        var end = new Date(order.deliveryTime);
        var delta = Math.abs(start.getTime() - end.getTime()) / 1000;
        var days = Math.floor(delta / 86400);
        delta -= days * 86400;
        var hours = Math.floor(delta / 3600) % 24;
        delta -= hours * 3600;
        var minutes = Math.floor(delta / 60) % 60;
        delta -= minutes * 60;
        var seconds = delta % 60;
        var secondsStr = seconds.toString();
        secondsStr = secondsStr.substring(0, secondsStr.indexOf('.'));
        var h = '0' + hours;
        h = h.substr(-2);
        var min = '0' + minutes;
        min = min.substr(-2);
        var sec = '0' + secondsStr;
        sec = sec.substr(-2);
        return (days !== 0 ? days + 'days ' : '') + "\n            " + hours + " : " + min + " : " + sec;
    };
    DeliveryComponent = tslib_1.__decorate([
        core_1.Component({
            template: "\n\t\t<span>\n\t\t\t<div>{{ order._createdAt | date: 'short' }}</div>\n\t\t\t<div>{{ getTotalDeliveryTime(order) }}</div>\n\t\t</span>\n\t",
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], DeliveryComponent);
    return DeliveryComponent;
}());
exports.DeliveryComponent = DeliveryComponent;
//# sourceMappingURL=delivery.js.map