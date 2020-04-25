"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("jasmine");
var core_1 = require("@angular/core");
var testing_1 = require("@angular/core/testing");
var products_page_1 = require("./products.page");
describe('ProductsPage', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [products_page_1.ProductsPage],
            schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA],
        }).compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(products_page_1.ProductsPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=products.page.spec.js.map