"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("jasmine");
var testing_1 = require("@angular/core/testing");
var loaded_information_component_1 = require("./loaded-information.component");
describe('LoadedInformationComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [loaded_information_component_1.LoadedInformationComponent],
        }).compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(loaded_information_component_1.LoadedInformationComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=loaded-information.component.spec.js.map