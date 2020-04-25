"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var forms_1 = require("@angular/forms");
var lodash_1 = require("lodash");
var FormHelpers = (function () {
    function FormHelpers() {
    }
    FormHelpers.deepMark = function (formGroup, markAs, opts) {
        if (opts === void 0) { opts = { onlySelf: false }; }
        Object.values(formGroup.controls).map(function (c) {
            if (c instanceof forms_1.FormGroup || c instanceof forms_1.FormArray) {
                FormHelpers.deepMark(c, markAs, opts);
            }
            else {
                c["markAs" + lodash_1.capitalize(markAs)](opts);
            }
        });
    };
    return FormHelpers;
}());
exports.FormHelpers = FormHelpers;
//# sourceMappingURL=helpers.js.map