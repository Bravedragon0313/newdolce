"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function styleVariable(name) {
    var variablesScss = require('sass-extract-loader!./_variables.scss');
    return variablesScss.global["$" + name].value;
}
exports.styleVariable = styleVariable;
var styleVariables;
(function (styleVariables) {
    styleVariables.brand = styleVariable('brand').hex;
    styleVariables.brandLighted = styleVariable('brand-lighted').hex;
    styleVariables.brandDarken = styleVariable('brand-darken').hex;
    styleVariables.assertive = styleVariable('assertive').hex;
    styleVariables.assertiveLighted = styleVariable('assertive-lighted').hex;
    styleVariables.assertiveDarken = styleVariable('assertive-darken').hex;
})(styleVariables = exports.styleVariables || (exports.styleVariables = {}));
//# sourceMappingURL=variables.js.map