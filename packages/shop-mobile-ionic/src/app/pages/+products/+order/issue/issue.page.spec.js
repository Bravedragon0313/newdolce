"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("jasmine");
var core_1 = require("@angular/core");
var testing_1 = require("@angular/core/testing");
var issue_page_1 = require("./issue.page");
describe('IssuePage', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [issue_page_1.IssuePage],
            schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA],
        }).compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(issue_page_1.IssuePage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=issue.page.spec.js.map