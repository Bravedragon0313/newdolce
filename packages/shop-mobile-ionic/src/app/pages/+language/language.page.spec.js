"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("jasmine");
var core_1 = require("@angular/core");
var testing_1 = require("@angular/core/testing");
var language_page_1 = require("./language.page");
describe('LanguagePage', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [language_page_1.LanguagePage],
            schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA],
        }).compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(language_page_1.LanguagePage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=language.page.spec.js.map