import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import {
	MatSearchModule,
	MatBoldInputModule,
} from '@modules/material-extensions';
import { LocationComponent } from './location.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
	declarations: [LocationComponent],
	exports: [LocationComponent],
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,

		MatFormFieldModule,
		MatButtonModule,
		MatInputModule,
		MatSelectModule,
		MatIconModule,
		MatCheckboxModule,

		MatSearchModule,
		MatBoldInputModule,
		TranslateModule.forChild(),
	],
})
export class LocationFormModule { }
