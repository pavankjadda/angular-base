import {NgSwitch, NgSwitchCase, NgSwitchDefault} from '@angular/common';
import {Component, inject} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {EmployeeListComponent} from './employee-list/employee-list.component';
import {Employee, EmployeeService} from './services/employee.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: true,
    imports: [NgSwitch, NgSwitchDefault, NgSwitchCase, RouterOutlet, EmployeeListComponent]
})
export class AppComponent
{
    employeeService = inject(EmployeeService);
    employees: Employee[] = [];

    ngOnInit(): void
    {
        this.employeeService.getEmployees().subscribe((data) =>
        {
            this.employees = data;
        });
    }
}
