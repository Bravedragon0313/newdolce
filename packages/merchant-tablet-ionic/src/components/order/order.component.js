"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var OrderComponent = (function () {
    function OrderComponent() {
        this.availSegmentOptions = {
            options: 'options',
            selectAdd: 'select/add',
            order: 'order',
        };
        this.orderFinishedEmitter = new core_1.EventEmitter();
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
    tslib_1.__decorate([
        core_1.Output(),
        tslib_1.__metadata("design:type", Object)
    ], OrderComponent.prototype, "orderFinishedEmitter", void 0);
    OrderComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'order',
            styleUrls: ['./order.component.scss'],
            templateUrl: './order.component.html',
        })
    ], OrderComponent);
    return OrderComponent;
}());
exports.OrderComponent = OrderComponent;
//# sourceMappingURL=order.component.js.map