"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var ng2_smart_table_1 = require("ng2-smart-table");
var operators_1 = require("rxjs/operators");
var rxjs_1 = require("rxjs");
var users_service_1 = require("../../services/users.service");
var address_component_1 = require("./address.component");
var core_2 = require("@ngx-translate/core");
var SelectAddCustomerComponent = (function () {
    function SelectAddCustomerComponent(_usersService, _translateService) {
        this._usersService = _usersService;
        this._translateService = _translateService;
        this.ngDestroy$ = new rxjs_1.Subject();
        this.sourceSmartTable = new ng2_smart_table_1.LocalDataSource();
        this.customerIdEmitter = new core_1.EventEmitter();
        this._noInfoSign = '';
        this._ngDestroy$ = new rxjs_1.Subject();
    }
    Object.defineProperty(SelectAddCustomerComponent.prototype, "isSelectedFromExisting", {
        get: function () {
            return this.customerOptionSelected === 0;
        },
        enumerable: true,
        configurable: true
    });
    SelectAddCustomerComponent.prototype.ngOnInit = function () {
        this._setupSettingsSmartTable();
        this._loadDataSmartTable();
    };
    SelectAddCustomerComponent.prototype.selectFromExisting = function (ev) {
        this.broadcastCustomerId(ev.data.id);
    };
    SelectAddCustomerComponent.prototype.broadcastCustomerId = function (customerId) {
        this.customerIdEmitter.emit(customerId);
    };
    SelectAddCustomerComponent.prototype._setupSettingsSmartTable = function () {
        var _this = this;
        var columnTitlePrefix = 'WAREHOUSE_VIEW.NEW_ORDER_VIEW.';
        var getTranslate = function (name) {
            return _this._translateService.get(columnTitlePrefix + name);
        };
        rxjs_1.forkJoin(this._translateService.get('Id'), getTranslate('FULL_NAME'), getTranslate('EMAIL'), getTranslate('PHONE'), getTranslate('ADDRESS'))
            .pipe(operators_1.takeUntil(this.ngDestroy$))
            .subscribe(function (_a) {
            var id = _a[0], fullName = _a[1], email = _a[2], phone = _a[3], address = _a[4];
            _this.settingsSmartTable = {
                actions: false,
                filters: false,
                pager: {
                    perPage: 3,
                },
                columns: {
                    name: { title: fullName },
                    email: { title: email },
                    phone: { title: phone },
                    address: {
                        title: address,
                        type: 'custom',
                        renderComponent: address_component_1.AddressComponent,
                    },
                },
            };
        });
    };
    SelectAddCustomerComponent.prototype._loadDataSmartTable = function () {
        var _this = this;
        this._usersService
            .getUsers()
            .pipe(operators_1.takeUntil(this._ngDestroy$))
            .subscribe(function (users) {
            var formattedData = _this._formatDataSmartTable(users);
            _this.sourceSmartTable.load(formattedData);
        });
    };
    SelectAddCustomerComponent.prototype._formatDataSmartTable = function (users) {
        var _this = this;
        return users.map(function (user) {
            return {
                id: user.id,
                name: "\n\t\t\t\t\t" + (user.firstName || _this._noInfoSign) + " " + (user.lastName || _this._noInfoSign) + "\n\t\t\t\t",
                email: user.email || _this._noInfoSign,
                phone: user.phone || _this._noInfoSign,
                address: user.fullAddress || _this._noInfoSign,
                user: user,
            };
        });
    };
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Number)
    ], SelectAddCustomerComponent.prototype, "customerOptionSelected", void 0);
    tslib_1.__decorate([
        core_1.Output(),
        tslib_1.__metadata("design:type", Object)
    ], SelectAddCustomerComponent.prototype, "customerIdEmitter", void 0);
    SelectAddCustomerComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'select-add-customer',
            styleUrls: ['./select-add-customer.component.scss'],
            template: "\n\t\t<span class=\"select-add-customer-component\">\n\t\t\t<div class=\"customers-table\" *ngIf=\"isSelectedFromExisting\">\n\t\t\t\t<ng2-smart-table\n\t\t\t\t\tclass=\"smart-table\"\n\t\t\t\t\t[settings]=\"settingsSmartTable\"\n\t\t\t\t\t[source]=\"sourceSmartTable\"\n\t\t\t\t\t(userRowSelect)=\"selectFromExisting($event)\"\n\t\t\t\t>\n\t\t\t\t</ng2-smart-table>\n\t\t\t</div>\n\n\t\t\t<div *ngIf=\"!isSelectedFromExisting\">\n\t\t\t\t<user-mutation\n\t\t\t\t\t(customerIdEmitter)=\"broadcastCustomerId($event)\"\n\t\t\t\t></user-mutation>\n\t\t\t</div>\n\t\t</span>\n\t",
        }),
        tslib_1.__metadata("design:paramtypes", [users_service_1.UsersService,
            core_2.TranslateService])
    ], SelectAddCustomerComponent);
    return SelectAddCustomerComponent;
}());
exports.SelectAddCustomerComponent = SelectAddCustomerComponent;
//# sourceMappingURL=select-add-customer.component.js.map