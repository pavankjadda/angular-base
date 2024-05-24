import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Employee } from '../types/Employee';

@Component({
	selector: 'app-view-employee',
	standalone: true,
	imports: [CommonModule],
	template: `
		<p>First Name: {{ employee?.firstName }}</p>
		<p>Last Name: {{ employee?.lastName }}</p>
		<p>Email: {{ employee?.email }}</p>
		<p>Phone: {{ employee?.phone }}</p>
		<p>Age: {{ employee?.age }}</p>
		<hr />
	`,
	styles: [],
})
export class ViewEmployeeComponent {
	@Input({ required: true }) employee: Employee | undefined;
}
