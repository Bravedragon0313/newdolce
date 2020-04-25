"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("jasmine");
var core_1 = require("@angular/core");
var testing_1 = require("@angular/core/testing");
var order_info_page_1 = require("./order-info.page");
describe('OrderInfoPage', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [order_info_page_1.OrderInfoPage],
            schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA],
        }).compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(order_info_page_1.OrderInfoPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=order-info.page.spec.js.map