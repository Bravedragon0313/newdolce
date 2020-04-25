import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormWizardModule } from 'angular2-wizard';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { TranslateModule } from '@ngx-translate/core';
import { NbSpinnerModule, NbButtonModule } from '@nebular/theme';
import { ThemeModule } from '../../../../@theme';
import { WarehouseOrdersTableComponent } from './warehouse-orders-table.component';
let WarehouseOrdersTableModule = class WarehouseOrdersTableModule {
};
WarehouseOrdersTableModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            ThemeModule,
            FormWizardModule,
            Ng2SmartTableModule,
            TranslateModule.forChild(),
            NbSpinnerModule,
            NbButtonModule,
        ],
        declarations: [WarehouseOrdersTableComponent],
        exports: [WarehouseOrdersTableComponent],
    })
], WarehouseOrdersTableModule);
export { WarehouseOrdersTableModule };
//# sourceMappingURL=warehouse-orders-table.module.js.map