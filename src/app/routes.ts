import { Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { NewEmployeeComponent } from './new-employee/new-employee.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
export const routes: Routes = [
	{
		path: '',
		component: EmployeeListComponent,
	},
	{
		path: 'employee/new',
		component: NewEmployeeComponent,
	},
	{
		path: 'employee/view',
		component: ViewEmployeeComponent,
	},
];
