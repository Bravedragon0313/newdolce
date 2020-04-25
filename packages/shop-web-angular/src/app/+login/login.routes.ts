import { Routes } from '@angular/router';
import { LoginComponent } from './login.component';
import { ByLocationComponent } from './byLocation/byLocation.component';
import { ByCodeModuleGuard } from './by-code.module.guard';
import { SocieModuleGuard } from './socie.module.guard';

export const routes: Routes = [
	{
		path: '',
		component: LoginComponent,
		canActivate: [ByCodeModuleGuard],
	},
	{
		path: 'socie/:id',
		component: LoginComponent,
		canActivate: [SocieModuleGuard],
	},
	{
		path: 'byLocation/:id',
		component: ByLocationComponent,
	},
	{
		path: 'byLocation',
		component: ByLocationComponent,
	},
];
