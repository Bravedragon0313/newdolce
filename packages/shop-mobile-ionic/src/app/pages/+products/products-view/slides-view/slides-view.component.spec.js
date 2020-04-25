"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("jasmine");
var testing_1 = require("@angular/core/testing");
var slides_view_component_1 = require("./slides-view.component");
describe('SlidesViewComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [slides_view_component_1.ProductsSlidesViewComponent],
        }).compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(slides_view_component_1.ProductsSlidesViewComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=slides-view.component.spec.js.map