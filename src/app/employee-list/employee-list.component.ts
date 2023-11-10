import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { EmployeeService } from '../services/employee.service';
import { Employee } from '../types/Employee';
import { ViewEmployeeComponent } from '../view-employee/view-employee.component';

@Component({
	selector: 'app-employee-list',
	standalone: true,
	imports: [CommonModule, ViewEmployeeComponent, RouterLink, RouterOutlet],
	template: `
		<h2>Employees</h2>
		<div *ngFor="let employee of employees()">
			<app-view-employee [employee]="employee" />
		</div>
		<button routerLink="/employee/new">Create New</button>
	`,
	styles: [],
})
export class EmployeeListComponent implements OnInit {
	employeeService = inject(EmployeeService);
	employees = signal<Employee[]>([]);

	ngOnInit(): void {
		this.employeeService.getEmployees().subscribe((data) => {
			this.employees.set(data);
		});
	}
}
