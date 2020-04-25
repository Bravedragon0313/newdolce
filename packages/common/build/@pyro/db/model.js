"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function ModelName(name) {
    return function (target) {
        target.modelName = name;
    };
}
exports.ModelName = ModelName;
//# sourceMappingURL=model.js.map