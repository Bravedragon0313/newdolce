"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("jasmine");
var core_1 = require("@angular/core");
var testing_1 = require("@angular/core/testing");
var terms_of_use_page_1 = require("./terms-of-use.page");
describe('TermsOfUsePage', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [terms_of_use_page_1.TermsOfUsePage],
            schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA],
        }).compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(terms_of_use_page_1.TermsOfUsePage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=terms-of-use.page.spec.js.map