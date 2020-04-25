"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var AddChoiceComponent = (function () {
    function AddChoiceComponent() {
        this.choice = new core_1.EventEmitter();
    }
    AddChoiceComponent.prototype.changeChoice = function (choiceType) {
        this.choiceType = choiceType === 'new' ? 2 : 1;
        this.choice.emit(choiceType);
    };
    AddChoiceComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'add-choice',
            templateUrl: 'add-choice.html',
            styleUrls: ['./add-choice.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], AddChoiceComponent);
    return AddChoiceComponent;
}());
exports.AddChoiceComponent = AddChoiceComponent;
//# sourceMappingURL=add-choice.js.map