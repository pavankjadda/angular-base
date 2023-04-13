import {Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {NewEmployeeComponent} from './new-employee/new-employee.component';
import {ViewEmployeeComponent} from './view-employee/view-employee.component';

export const routes: Routes = [
    {
        path: 'employee',
        component: AppComponent
    },
    {
        path: 'employee/new',
        component: NewEmployeeComponent
    },
    {
        path: 'employee/view',
        component: ViewEmployeeComponent
    }
];
